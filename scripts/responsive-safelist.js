// Generates src/generated/responsive-safelist.css: the breakpoint-prefixed
// classes `getResponsiveClasses` (src/utils/responsive.ts) can build at runtime.
//
// Why this exists (issue #108): `getResponsiveClasses(size, map)` turns
// `{ base: 'sm', md: 'lg' }` into `py-1 ... md:py-3 ...` by prefixing the
// map's classes at runtime. Tailwind v4 only emits classes it finds as literal
// text in the sources it scans, and `md:py-3` is never written anywhere, so
// the prebuilt dist/cyberui-2045.css had no rule for it and every responsive
// value above `base` silently did nothing.
//
// Instead of a hand-kept list, this script finds every map the helper can be
// called with and writes them out as Tailwind `@source inline(...)` lines,
// which src/index.css imports. It reads the source statically with the
// TypeScript compiler API (no package code is run):
//   - every `getResponsiveClasses(value, map)` call in library source (tests,
//     stories and the demo app are skipped: they never ship);
//   - `map` is followed to its object literal, whether it is declared in the
//     same file (Tooltip's PLACEMENT_CLASSES, Toggle's local sizeMap, ...),
//     imported (RESPONSIVE_SIZE_MAPS), a property path into one
//     (RESPONSIVE_SIZE_MAPS.linearProgress.width) or written inline;
//   - the prefixes are the `Breakpoint` union in responsive.ts minus `base`.
// A call whose map it cannot follow to string literals is an error that names
// the file and line, so a new pattern fails the build instead of shipping
// broken CSS. Teach `resolveExpression` the pattern, don't silence it.
//
// The output is committed because src/index.css imports it, so every build
// (library, demo, Storybook, a fresh clone) needs it to exist.
// `npm run build`/`dev`/`storybook` regenerate it first, and
// src/test/responsive-safelist.test.ts fails CI if the committed copy is stale.
// scripts/check-responsive-css.js then checks the built CSS really has every
// class (CI runs it after `npm run build`).
//
// Run: npm run generate:responsive-safelist    (writes the file)
//      node scripts/responsive-safelist.js --check   (exit 1 if it is stale)

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = resolve(__dirname, '..');
export const SAFELIST_FILE = join(ROOT, 'src/generated/responsive-safelist.css');

const HELPER = 'getResponsiveClasses';
const RESPONSIVE_TS = join(ROOT, 'src/utils/responsive.ts');
// Directories under src/ that never ship in the library build.
const SKIPPED_DIRS = new Set(['test', 'stories', 'demo', 'generated']);
const SKIPPED_FILE = /\.(test|spec|stories|story)\.[tj]sx?$/;

export function listSourceFiles(dir = join(ROOT, 'src')) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIPPED_DIRS.has(entry.name)) files.push(...listSourceFiles(full));
    } else if (/\.tsx?$/.test(entry.name) && !entry.name.endsWith('.d.ts') && !SKIPPED_FILE.test(entry.name)) {
      files.push(full);
    }
  }
  return files.sort();
}

const sourceCache = new Map();
function parse(file) {
  if (!sourceCache.has(file)) {
    const kind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
    sourceCache.set(file, ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, kind));
  }
  return sourceCache.get(file);
}

function where(node) {
  const sf = node.getSourceFile();
  const { line } = sf.getLineAndCharacterOfPosition(node.getStart());
  return `${relative(ROOT, sf.fileName)}:${line + 1}`;
}

function unwrap(node) {
  while (
    ts.isAsExpression(node) ||
    ts.isSatisfiesExpression(node) ||
    ts.isParenthesizedExpression(node) ||
    ts.isTypeAssertionExpression(node)
  ) {
    node = node.expression;
  }
  return node;
}

function resolveModule(fromFile, specifier) {
  if (!specifier.startsWith('.')) return null;
  const base = resolve(dirname(fromFile), specifier);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, join(base, 'index.ts'), join(base, 'index.tsx')]) {
    if (existsSync(candidate) && /\.tsx?$/.test(candidate)) return candidate;
  }
  return null;
}

// Every `const <name> = <init>` in the file (any scope), plus where an
// imported <name> comes from. Two same-named locals in different functions of
// one file are both returned: emitting a few extra classes is harmless,
// missing one is the bug this script exists to prevent.
function findDeclarations(sf, name) {
  const inits = [];
  let imported = null;
  const visit = (node) => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name && node.initializer) {
      inits.push(node.initializer);
    }
    if (ts.isImportDeclaration(node) && node.importClause?.namedBindings && ts.isNamedImports(node.importClause.namedBindings)) {
      for (const el of node.importClause.namedBindings.elements) {
        if (el.name.text === name) {
          imported = { specifier: node.moduleSpecifier.text, name: (el.propertyName ?? el.name).text };
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return { inits, imported };
}

// Follows an expression to the object literal(s) it denotes.
function resolveExpression(node, seen = new Set()) {
  node = unwrap(node);
  if (ts.isObjectLiteralExpression(node)) return [node];
  if (ts.isIdentifier(node)) {
    const sf = node.getSourceFile();
    const key = `${sf.fileName}#${node.text}`;
    if (seen.has(key)) throw new Error(`${where(node)}: circular reference to \`${node.text}\``);
    seen.add(key);
    const { inits, imported } = findDeclarations(sf, node.text);
    if (inits.length > 0) return inits.flatMap((init) => resolveExpression(init, seen));
    if (imported) {
      const target = resolveModule(sf.fileName, imported.specifier);
      if (target) {
        const { inits: remote } = findDeclarations(parse(target), imported.name);
        if (remote.length > 0) return remote.flatMap((init) => resolveExpression(init, seen));
      }
    }
    throw new Error(`${where(node)}: cannot find an object literal for \`${node.text}\``);
  }
  if (ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node)) {
    const prop = ts.isPropertyAccessExpression(node)
      ? node.name.text
      : ts.isStringLiteralLike(node.argumentExpression)
        ? node.argumentExpression.text
        : null;
    if (prop === null) throw new Error(`${where(node)}: computed map access is not supported`);
    return resolveExpression(node.expression, seen).flatMap((obj) => {
      const member = obj.properties.find(
        (p) => ts.isPropertyAssignment(p) && p.name && (ts.isIdentifier(p.name) || ts.isStringLiteralLike(p.name)) && p.name.text === prop
      );
      if (!member) throw new Error(`${where(node)}: no property \`${prop}\` in the map at ${where(obj)}`);
      return resolveExpression(member.initializer, seen);
    });
  }
  throw new Error(`${where(node)}: cannot follow the class map passed to ${HELPER}() (${ts.SyntaxKind[node.kind]})`);
}

function mapClassStrings(obj) {
  return obj.properties.map((p) => {
    if (!ts.isPropertyAssignment(p)) throw new Error(`${where(p)}: class map entries must be plain \`key: "classes"\``);
    const value = unwrap(p.initializer);
    if (!ts.isStringLiteralLike(value)) throw new Error(`${where(p)}: class map values must be string literals`);
    return value.text;
  });
}

/** The prefixes getResponsiveClasses applies: responsive.ts's `Breakpoint` union minus `base`. */
export function collectBreakpoints() {
  const sf = parse(RESPONSIVE_TS);
  const alias = sf.statements.find((s) => ts.isTypeAliasDeclaration(s) && s.name.text === 'Breakpoint');
  if (!alias || !ts.isUnionTypeNode(alias.type)) throw new Error('src/utils/responsive.ts: `type Breakpoint` union not found');
  return alias.type.types
    .map((t) => (ts.isLiteralTypeNode(t) && ts.isStringLiteral(t.literal) ? t.literal.text : null))
    .filter((bp) => bp && bp !== 'base');
}

/**
 * Every map passed to getResponsiveClasses in library source.
 * @returns {{ site: string, classes: string[] }[]} one entry per call site
 */
export function collectCallSites(srcDir = join(ROOT, 'src')) {
  const sites = [];
  for (const file of listSourceFiles(srcDir)) {
    const sf = parse(file);
    const visit = (node) => {
      const callee = ts.isCallExpression(node) ? node.expression : null;
      const name = callee && (ts.isIdentifier(callee) ? callee : ts.isPropertyAccessExpression(callee) ? callee.name : null);
      if (name && name.text === HELPER) {
        if (node.arguments.length < 2) throw new Error(`${where(node)}: ${HELPER}() called without a class map`);
        const classes = resolveExpression(node.arguments[1])
          .flatMap(mapClassStrings)
          .flatMap((s) => s.split(/\s+/))
          .filter(Boolean);
        sites.push({ site: where(node), classes });
      }
      ts.forEachChild(node, visit);
    };
    visit(sf);
  }
  return sites;
}

/** Every prefixed class getResponsiveClasses can produce, sorted and unique. */
export function collectResponsiveClasses() {
  const base = [...new Set(collectCallSites().flatMap((s) => s.classes))].sort();
  return collectBreakpoints().flatMap((bp) => base.map((cls) => `${bp}:${cls}`));
}

export function renderSafelist() {
  const breakpoints = collectBreakpoints();
  const all = collectResponsiveClasses();
  const lines = [
    '/* GENERATED by scripts/responsive-safelist.js. Do not edit by hand:',
    '   run `npm run generate:responsive-safelist` (build/dev/storybook run it too).',
    '   These are the classes getResponsiveClasses() builds at runtime; Tailwind',
    '   cannot see them in the source, so without this file they are missing from',
    '   dist/cyberui-2045.css (issue #108). */',
  ];
  for (const bp of breakpoints) {
    const group = all.filter((cls) => cls.startsWith(`${bp}:`));
    lines.push(`@source inline("${group.join(' ')}");`);
  }
  return `${lines.join('\n')}\n`;
}

function main() {
  const content = renderSafelist();
  const current = existsSync(SAFELIST_FILE) ? readFileSync(SAFELIST_FILE, 'utf8') : null;
  const rel = relative(ROOT, SAFELIST_FILE);
  if (process.argv.includes('--check')) {
    if (current !== content) {
      console.error(`✗ ${rel} is stale. Run: npm run generate:responsive-safelist`);
      process.exit(1);
    }
    console.log(`✓ ${rel} is up to date`);
    return;
  }
  if (current !== content) {
    mkdirSync(dirname(SAFELIST_FILE), { recursive: true });
    writeFileSync(SAFELIST_FILE, content);
    console.log(`✓ wrote ${rel} (${collectResponsiveClasses().length} classes)`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    main();
  } catch (error) {
    console.error(`✗ responsive-safelist: ${error instanceof Error ? error.message : error}`);
    process.exit(2);
  }
}
