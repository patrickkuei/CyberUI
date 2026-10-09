#!/usr/bin/env node
// Backward-compatibility guard. Nothing a current user's code can rely on may
// stop working, or stop compiling, in a minor or patch release (see
// CONTRIBUTING.md, "Compatibility and deprecation policy"). This script makes
// CI and the release procedure enforce that instead of relying on memory.
//
// It compares the freshly built `dist/` with `compat/baseline.json`, a
// snapshot of the last RELEASED version's public surface, and fails on:
//   - an export (value or type) of the package entry that is gone;
//   - a member of an exported interface/type that was removed, whose
//     required-ness changed in either direction, or whose type text changed;
//   - a component/hook prop (from dist/component-manifest.json) with the same
//     three kinds of change;
//   - an exported function or hook (`cn`, `useCyberNotifications`, ...) whose
//     declared signature text changed;
//   - one of the library's own CSS custom properties that the 2.x shipped CSS
//     declared and the new shipped CSS no longer does;
//   - a line of `compat/consumer.fixture.tsx` (realistic consumer code) that no
//     longer type-checks against the built declarations.
//
// Reviewed, intentional exceptions go in `compat/allowed-changes.json`. When
// package.json's major version is greater than the baseline's, every breaking
// difference is printed as a warning instead (a major release may break).
//
// Everything is read statically: the declarations are parsed with the TypeScript
// compiler API and the CSS/manifest are plain text/JSON. No package code is run.
//
// Run: npm run check:compat            (after `npm run build`)
//      npm run compat:baseline         (release time, after the check passes)
//      node scripts/check-compat.js --update-baseline <package-dir-or-dist> [--source-css <file>] [--version <x.y.z>] [--force]
//
// Other options (mainly for tests): --dist <dir> --baseline <file>
// --allowed <file> --package <package.json> --skip-fixture

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASELINE_FORMAT = 1;

// ─── Small helpers ───────────────────────────────────────────────────────────

const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));
const sortKeys = (obj) => Object.fromEntries(Object.entries(obj).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
const majorOf = (version) => Number.parseInt(String(version).split('.')[0], 10);

/** Whitespace/quote-insensitive form of a type's text, so formatting is never a "change". */
const normalizeType = (text) => String(text).replace(/\s+/g, ' ').replace(/'/g, '"').trim();

/** `X | undefined` -> `X`: optionality is reported as a required-ness change, not twice. */
const withoutUndefined = (text) => normalizeType(text).replace(/ \| undefined$/, '').replace(/^undefined \| /, '');

// ─── Reading the declarations (TypeScript compiler API, no code execution) ──

/**
 * Parses `<distDir>/index.d.ts` and everything it re-exports. Returns
 *   exports:     { Name: ['type'?, 'value'?] }          every export of the entry
 *   typeMembers: { TypeName: { member: { type, required } } }   members declared by the
 *                package itself (inherited React/DOM attributes are ignored)
 *   signatures:  { name: 'signature text' }   exported functions/hooks (lower-case names)
 */
export function extractDeclarations(distDir, { reactTypesDir } = {}) {
  const root = resolve(distDir).replace(/\\/g, '/');
  const entry = join(root, 'index.d.ts');
  if (!existsSync(entry)) throw new Error(`${entry} not found`);

  const options = {
    noEmit: true,
    strict: true,
    skipLibCheck: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.ReactJSX,
    // Never auto-load @types from wherever the package happens to be extracted.
    types: [],
  };
  if (reactTypesDir && existsSync(reactTypesDir)) {
    // Resolve `react` from the repo even when the baseline package was extracted elsewhere.
    options.baseUrl = dirname(dirname(resolve(reactTypesDir)));
    options.paths = { react: [resolve(reactTypesDir)], 'react/*': [`${resolve(reactTypesDir)}/*`] };
  }
  const program = ts.createProgram({ rootNames: [entry], options });
  const checker = program.getTypeChecker();
  const entryFile = program.getSourceFile(entry);
  const moduleSymbol = entryFile && checker.getSymbolAtLocation(entryFile);
  if (!moduleSymbol) throw new Error(`${entry} has no exports`);

  const isOwnFile = (file) => file.startsWith(`${root}/`) && !file.includes('/node_modules/');
  const objectish = (type) =>
    (type.flags & ts.TypeFlags.Object) !== 0 ||
    ((type.flags & (ts.TypeFlags.Union | ts.TypeFlags.Intersection)) !== 0 && type.types.every(objectish));

  const memberOf = (prop) => {
    const decl = (prop.declarations ?? []).find((d) => isOwnFile(d.getSourceFile().fileName));
    if (!decl) return null; // inherited from React/DOM typings or the language lib
    if (ts.isPropertySignature(decl) || ts.isPropertyDeclaration(decl)) {
      return { type: normalizeType(decl.type ? decl.type.getText() : 'any'), required: !decl.questionToken };
    }
    if (ts.isMethodSignature(decl) || ts.isMethodDeclaration(decl)) {
      return { type: normalizeType(decl.getText()), required: !decl.questionToken };
    }
    return {
      type: normalizeType(checker.typeToString(checker.getTypeOfSymbol(prop), undefined, ts.TypeFormatFlags.NoTruncation)),
      required: (prop.flags & ts.SymbolFlags.Optional) === 0,
    };
  };

  const exportsOut = {};
  const typeMembers = {};
  const signatures = {};
  for (const exported of checker.getExportsOfModule(moduleSymbol)) {
    const target = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
    const kinds = [];
    const isType = (target.flags & (ts.SymbolFlags.Interface | ts.SymbolFlags.TypeAlias | ts.SymbolFlags.Class | ts.SymbolFlags.Enum)) !== 0;
    if (isType) kinds.push('type');
    if ((target.flags & ts.SymbolFlags.Value) !== 0) kinds.push('value');
    exportsOut[exported.name] = kinds.length > 0 ? kinds.sort() : ['unknown'];

    if (kinds.includes('value') && /^[a-z]/.test(exported.name)) {
      const valueType = checker.getTypeOfSymbol(target);
      if (valueType.getCallSignatures().length > 0) {
        const flags = ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope | ts.TypeFormatFlags.WriteArrowStyleSignature;
        signatures[exported.name] = normalizeType(checker.typeToString(valueType, undefined, flags));
      }
    }

    if (!isType) continue;
    const declared = checker.getDeclaredTypeOfSymbol(target);
    if (!objectish(declared)) continue;
    const members = {};
    for (const prop of checker.getPropertiesOfType(declared)) {
      const member = memberOf(prop);
      if (member) members[prop.name] = member;
    }
    if (Object.keys(members).length > 0) typeMembers[exported.name] = sortKeys(members);
  }
  return { exports: sortKeys(exportsOut), typeMembers: sortKeys(typeMembers), signatures: sortKeys(signatures) };
}

// ─── Reading the manifest and the CSS ────────────────────────────────────────

/** Per component/provider props from `component-manifest.json`. */
export function extractManifest(distDir) {
  const file = join(distDir, 'component-manifest.json');
  if (!existsSync(file)) throw new Error(`${file} not found`);
  const manifest = readJson(file);
  const props = {};
  for (const entry of [...(manifest.components ?? []), ...(manifest.context ?? [])]) {
    props[entry.name] = sortKeys(
      Object.fromEntries((entry.props ?? []).map((p) => [p.name, { type: normalizeType(p.type), required: Boolean(p.required) }]))
    );
  }
  return { props: sortKeys(props) };
}

const stripCssComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '');

/** Every custom property a stylesheet declares (`--x: value` or `@property --x`), name -> first value. */
export function extractCssDeclarations(css) {
  const text = stripCssComments(css);
  const out = {};
  for (const m of text.matchAll(/(?<![\w\\-])(--[A-Za-z_][\w-]*)\s*:\s*([^;}]*)/g)) {
    if (!(m[1] in out)) out[m[1]] = m[2].trim();
  }
  for (const m of text.matchAll(/@property\s+(--[A-Za-z_][\w-]*)/g)) {
    if (!(m[1] in out)) out[m[1]] = '';
  }
  return out;
}

/** Names declared directly inside `@theme { }` and `:root { }` blocks of the library's own source CSS. */
export function extractThemeVarNames(sourceCss) {
  const text = stripCssComments(sourceCss);
  const names = new Set();
  for (const open of text.matchAll(/(@theme[^{;]*|:root[^{;]*)\{/g)) {
    let depth = 1;
    let direct = '';
    for (let i = open.index + open[0].length; i < text.length && depth > 0; i++) {
      const ch = text[i];
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      else if (depth === 1) direct += ch;
    }
    for (const m of direct.matchAll(/(?<![\w-])(--[A-Za-z_][\w-]*)\s*:/g)) names.add(m[1]);
  }
  return names;
}

/** The current build's whole surface (CSS is kept unfiltered; the baseline filters to the library's own). */
export function extractSurface(distDir, options = {}) {
  const cssFile = join(distDir, 'cyberui-2045.css');
  if (!existsSync(cssFile)) throw new Error(`${cssFile} not found`);
  return {
    ...extractDeclarations(distDir, options),
    ...extractManifest(distDir),
    cssDeclared: extractCssDeclarations(readFileSync(cssFile, 'utf8')),
  };
}

// ─── Baseline ────────────────────────────────────────────────────────────────

export function buildBaseline({ version, surface, sourceCss }) {
  const own = extractThemeVarNames(sourceCss);
  const cssVars = {};
  for (const [name, value] of Object.entries(surface.cssDeclared)) {
    // Own = declared in the library's @theme/:root AND visible in the shipped CSS.
    // Tailwind built-ins and any theme var Tailwind dropped as unused are not in both.
    if (own.has(name)) cssVars[name] = { value };
  }
  return {
    format: BASELINE_FORMAT,
    version,
    note: 'Public surface of the last released version. Generated by `node scripts/check-compat.js --update-baseline`; never edit by hand. See CONTRIBUTING.md, "Compatibility and deprecation policy".',
    exports: surface.exports,
    typeMembers: surface.typeMembers,
    signatures: surface.signatures,
    props: surface.props,
    cssVars: sortKeys(cssVars),
  };
}

// ─── Comparison ──────────────────────────────────────────────────────────────

const sig = (name, member) => `${name}${member.required ? '' : '?'}: ${member.type}`;
const DEPRECATE = 'Deprecate and keep it (add a JSDoc `@deprecated` note, keep it working) and remove it only in the next major release.';

/**
 * Compares the baseline with a current surface. Returns the problems found as
 * `{ id, message }`; `id` is what `compat/allowed-changes.json` matches on.
 */
export function compareSurfaces(baseline, current) {
  const problems = [];
  const add = (id, message) => problems.push({ id, message });

  // Exports (values and types).
  for (const [name, kinds] of Object.entries(baseline.exports)) {
    const now = current.exports[name];
    if (!now) {
      add(`export-removed:${name}`, `Export \`${name}\` (${kinds.join(' + ')}) is no longer exported from the package entry. ${DEPRECATE}`);
      continue;
    }
    const lost = kinds.filter((k) => !now.includes(k));
    if (lost.length > 0) {
      add(`export-removed:${name}`, `Export \`${name}\` is no longer exported as a ${lost.join(' + ')} (it used to be ${kinds.join(' + ')}). ${DEPRECATE}`);
    }
  }

  // Component/provider props (from the manifest).
  const reportedProps = new Set();
  const diffMembers = (kind, owner, before, after, describe) => {
    for (const [prop, was] of Object.entries(before)) {
      const label = `${owner}.${prop}`;
      const now = after[prop];
      if (!now) {
        add(`${kind}-removed:${label}`, `${describe} \`${label}\` was removed. ${DEPRECATE}`);
        reportedProps.add(label);
      } else if (was.required !== now.required) {
        add(
          `${kind}-required:${label}`,
          was.required
            ? `${describe} \`${label}\` changed from required to optional (was \`${sig(prop, was)}\`, now \`${sig(prop, now)}\`). Code that reads it as always present (e.g. \`x.${prop}.length\`) stops compiling. Keep it required, or add a new prop for the new case.`
            : `${describe} \`${label}\` changed from optional to required (was \`${sig(prop, was)}\`, now \`${sig(prop, now)}\`). Every caller that omits it stops compiling. Keep it optional and handle the missing case.`
        );
        reportedProps.add(label);
      } else if (withoutUndefined(was.type) !== withoutUndefined(now.type)) {
        add(
          `${kind}-type:${label}`,
          `${describe} \`${label}\` type changed:\n        was: ${sig(prop, was)}\n        now: ${sig(prop, now)}\n      Widening what a prop accepts is still reviewed. Add a new prop, or record a reviewed exception in compat/allowed-changes.json.`
        );
        reportedProps.add(label);
      }
    }
  };
  for (const [component, before] of Object.entries(baseline.props)) {
    const after = current.props[component];
    if (!after) {
      if (current.exports[component]) {
        add(`manifest-missing:${component}`, `\`${component}\` is no longer documented in dist/component-manifest.json, so its props can no longer be checked. Run \`npm run docs:generate\` / fix the manifest.`);
      }
      continue; // a removed export is already reported above
    }
    diffMembers('prop', component, before, after, 'Prop');
  }

  // Exported functions and hooks.
  for (const [name, was] of Object.entries(baseline.signatures)) {
    const now = current.signatures[name];
    if (now && normalizeType(was) !== normalizeType(now)) {
      add(
        `signature:${name}`,
        `Signature of \`${name}\` changed:\n        was: ${was}\n        now: ${now}\n      Existing calls must keep compiling and keep their result type. Add a new function/option and deprecate the old one, or record a reviewed exception in compat/allowed-changes.json.`
      );
    } else if (!now && current.exports[name]) {
      add(`signature:${name}`, `\`${name}\` is still exported but is no longer a function. ${DEPRECATE}`);
    }
  }

  // Members of exported interfaces/types. `FooProps` members the manifest check above already reported are skipped.
  for (const [typeName, before] of Object.entries(baseline.typeMembers)) {
    const after = current.typeMembers[typeName];
    if (!after) continue; // type removed (reported as an export) or no longer object-like (reported via the export kinds)
    const owner = typeName.endsWith('Props') ? typeName.slice(0, -'Props'.length) : null;
    const remaining = Object.fromEntries(
      Object.entries(before).filter(([prop]) => !(owner && reportedProps.has(`${owner}.${prop}`)))
    );
    diffMembers('type-member', typeName, remaining, after, 'Member');
  }

  // The library's own CSS custom properties.
  for (const [name, info] of Object.entries(baseline.cssVars)) {
    if (!(name in current.cssDeclared)) {
      add(
        `css-var-removed:${name}`,
        `CSS custom property \`${name}\` (was \`${info.value}\`) is no longer declared by the shipped dist/cyberui-2045.css. Consumers read it with \`var(${name})\`. ${DEPRECATE} Restore it in the @theme block of src/index.css and make sure the build still emits it (Tailwind drops theme variables nothing uses).`
      );
    }
  }
  return problems;
}

/** Splits problems into failures/warnings/allowed according to the allow-list and the major-version rule. */
export function classify(problems, { allowed = [], baselineVersion, currentVersion }) {
  const allowedById = new Map(allowed.map((a) => [a.id, a]));
  const usedIds = new Set();
  const failures = [];
  const warnings = [];
  const accepted = [];
  const majorBump = majorOf(currentVersion) > majorOf(baselineVersion);
  for (const problem of problems) {
    const entry = allowedById.get(problem.id);
    if (entry) {
      usedIds.add(problem.id);
      accepted.push({ ...problem, reason: entry.reason, since: entry.since });
    } else if (majorBump) {
      warnings.push(problem);
    } else {
      failures.push(problem);
    }
  }
  const unusedAllowed = allowed.filter((a) => !usedIds.has(a.id));
  return { failures, warnings, accepted, unusedAllowed, majorBump };
}

export function loadAllowed(file) {
  if (!existsSync(file)) return [];
  const data = readJson(file);
  const list = Array.isArray(data) ? data : data.allowed;
  if (!Array.isArray(list)) throw new Error(`${file}: expected { "allowed": [ { "id", "reason", "since" } ] }`);
  list.forEach((entry, i) => {
    for (const key of ['id', 'reason', 'since']) {
      if (typeof entry?.[key] !== 'string' || entry[key].trim() === '') {
        throw new Error(`${file}: entry ${i} needs a non-empty "${key}" (id, reason and since version are all required)`);
      }
    }
  });
  return list;
}

// ─── Consumer fixture (type-check realistic 2.x consumer code) ──────────────

export function checkFixture(root = ROOT) {
  const tsconfig = join(root, 'compat', 'tsconfig.json');
  const tsc = createRequire(import.meta.url).resolve('typescript/bin/tsc');
  const run = spawnSync(process.execPath, [tsc, '-p', tsconfig, '--noEmit', '--pretty', 'false'], { cwd: root, encoding: 'utf8' });
  const output = `${run.stdout ?? ''}${run.stderr ?? ''}`;
  const entries = [];
  const lineRe = /^(.+?)\((\d+),(\d+)\): error (TS\d+): (.*)$/;
  let last = null;
  for (const raw of output.split(/\r?\n/)) {
    const m = lineRe.exec(raw);
    if (m) {
      const [, file, line, , code, text] = m;
      const abs = resolve(root, file);
      const source = existsSync(abs) ? (readFileSync(abs, 'utf8').split(/\r?\n/)[Number(line) - 1] ?? '').trim() : '';
      last = { file: file.replace(/\\/g, '/'), line, code, text, source, details: [] };
      entries.push(last);
    } else if (last && /^\s+\S/.test(raw)) {
      last.details.push(raw.trim());
    }
  }
  const problems = entries.map((e) => ({
    id: `fixture:${e.source || `${e.file}:${e.line}`}`,
    message:
      `${e.file}:${e.line} no longer compiles (${e.code}): ${e.text}` +
      e.details.map((d) => `\n        ${d}`).join('') +
      `\n      \`${e.source}\`\n      Realistic consumer code broke: change the library so this keeps compiling (the fixture line may only change in a major release).`,
  }));
  if (run.status !== 0 && problems.length === 0) {
    problems.push({ id: 'fixture:tsc', message: `the consumer fixture could not be type-checked (tsc exited with ${run.status}): ${output.trim() || run.error?.message || 'no output'}` });
  }
  return problems;
}

// ─── Commands ────────────────────────────────────────────────────────────────

const reactTypesDirFor = (root) => join(root, 'node_modules', '@types', 'react');

/** Locates `<dir>/dist` (a package root) or `<dir>` itself (a dist folder) and the package.json beside it. */
function resolvePackageDir(dir) {
  const abs = resolve(dir);
  if (existsSync(join(abs, 'dist', 'index.d.ts'))) return { distDir: join(abs, 'dist'), packageJson: join(abs, 'package.json') };
  if (existsSync(join(abs, 'index.d.ts'))) return { distDir: abs, packageJson: join(abs, '..', 'package.json') };
  throw new Error(`no dist/index.d.ts (or index.d.ts) found in ${abs}`);
}

export function runCheck({
  root = ROOT,
  distDir = join(root, 'dist'),
  baselineFile = join(root, 'compat', 'baseline.json'),
  allowedFile = join(root, 'compat', 'allowed-changes.json'),
  packageFile = join(root, 'package.json'),
  skipFixture = false,
} = {}) {
  if (!existsSync(join(distDir, 'index.d.ts'))) {
    return { ok: false, lines: [`✗ ${distDir} has no build output. Run \`npm run build\` first.`] };
  }
  if (!existsSync(baselineFile)) {
    return { ok: false, lines: [`✗ ${baselineFile} is missing. Generate it from the last released package: node scripts/check-compat.js --update-baseline <extracted package dir> --source-css <that version's src/index.css>`] };
  }
  const baseline = readJson(baselineFile);
  const currentVersion = readJson(packageFile).version;
  const allowed = loadAllowed(allowedFile);
  const surface = extractSurface(distDir, { reactTypesDir: reactTypesDirFor(root) });

  const problems = compareSurfaces(baseline, surface);
  if (!skipFixture) problems.push(...checkFixture(root));
  const result = classify(problems, { allowed, baselineVersion: baseline.version, currentVersion });

  const lines = [];
  const list = (items) => items.forEach((p) => lines.push(`  - [${p.id}] ${p.message}`));
  if (result.accepted.length > 0) {
    lines.push(`ℹ ${result.accepted.length} reviewed exception${result.accepted.length === 1 ? '' : 's'} in compat/allowed-changes.json:`);
    result.accepted.forEach((p) => lines.push(`  - [${p.id}] allowed since ${p.since}: ${p.reason}`));
  }
  if (result.unusedAllowed.length > 0) {
    const one = result.unusedAllowed.length === 1;
    lines.push(`⚠ ${result.unusedAllowed.length} entr${one ? 'y' : 'ies'} in compat/allowed-changes.json no longer match${one ? 'es' : ''} anything; remove ${one ? 'it' : 'them'}:`);
    result.unusedAllowed.forEach((a) => lines.push(`  - [${a.id}]`));
  }
  if (result.warnings.length > 0) {
    lines.push(`⚠ ${result.warnings.length} breaking difference${result.warnings.length === 1 ? '' : 's'} versus ${baseline.version}, allowed because this is a major release (${currentVersion}):`);
    list(result.warnings);
  }
  if (result.failures.length > 0) {
    lines.push(`✗ Compatibility check failed (${result.failures.length} problem${result.failures.length === 1 ? '' : 's'} versus the released ${baseline.version}; current ${currentVersion}):`);
    list(result.failures);
    lines.push(
      '',
      'Nothing a current user relies on may break in a minor or patch release. Fix each item above by keeping the old API working',
      '(deprecate, do not remove). If the break is intentional and reviewed, add { id, reason, since } to compat/allowed-changes.json,',
      'or make this a major release. See CONTRIBUTING.md, "Compatibility and deprecation policy".'
    );
    return { ok: false, lines, ...result };
  }
  const counts = `${Object.keys(baseline.exports).length} exports, ${Object.keys(baseline.props).length} components, ${Object.keys(baseline.cssVars).length} CSS variables`;
  lines.push(`✓ Compatibility check passed against ${baseline.version} (${counts}${skipFixture ? '' : ', consumer fixture compiles'}).`);
  return { ok: true, lines, ...result };
}

export function updateBaseline({
  dir,
  root = ROOT,
  baselineFile = join(root, 'compat', 'baseline.json'),
  allowedFile = join(root, 'compat', 'allowed-changes.json'),
  sourceCssFile = join(root, 'src', 'index.css'),
  version,
  force = false,
} = {}) {
  const { distDir, packageJson } = resolvePackageDir(dir);
  const resolvedVersion = version ?? (existsSync(packageJson) ? readJson(packageJson).version : undefined);
  if (!resolvedVersion) throw new Error('cannot tell the version: pass --version <x.y.z> (no package.json next to the dist folder)');
  if (!existsSync(sourceCssFile)) throw new Error(`${sourceCssFile} not found: pass --source-css <the version's src/index.css>`);
  const surface = extractSurface(distDir, { reactTypesDir: reactTypesDirFor(root) });
  const lines = [];

  // Replacing the baseline must not be a way around the check: refuse while it would fail.
  if (existsSync(baselineFile) && !force) {
    const old = readJson(baselineFile);
    const result = classify(compareSurfaces(old, surface), { allowed: loadAllowed(allowedFile), baselineVersion: old.version, currentVersion: resolvedVersion });
    if (result.failures.length > 0) {
      return {
        ok: false,
        lines: [
          `✗ Refusing to replace the baseline: ${result.failures.length} unreviewed breaking difference${result.failures.length === 1 ? '' : 's'} versus ${old.version}.`,
          ...result.failures.map((p) => `  - [${p.id}] ${p.message}`),
          'Run `npm run check:compat` and fix or review them first (--force overrides, for a reviewed one-off only).',
        ],
      };
    }
  }

  const baseline = buildBaseline({ version: resolvedVersion, surface, sourceCss: readFileSync(sourceCssFile, 'utf8') });
  mkdirSync(dirname(baselineFile), { recursive: true });
  writeFileSync(baselineFile, `${JSON.stringify(baseline, null, 2)}\n`, 'utf8');
  lines.push(
    `✓ Wrote ${baselineFile}: ${resolvedVersion}, ${Object.keys(baseline.exports).length} exports, ${Object.keys(baseline.typeMembers).length} object types, ${Object.keys(baseline.props).length} components, ${Object.keys(baseline.signatures).length} function signatures, ${Object.keys(baseline.cssVars).length} CSS variables.`,
    'Remove entries from compat/allowed-changes.json that this baseline made obsolete, then commit both.'
  );
  return { ok: true, lines, baseline };
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { flags: new Set(), values: {} };
  const withValue = new Set(['--update-baseline', '--source-css', '--version', '--dist', '--baseline', '--allowed', '--package']);
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (withValue.has(arg)) {
      const next = argv[++i];
      if (next === undefined || next.startsWith('--')) throw new Error(`${arg} needs a value`);
      args.values[arg] = next;
    } else if (arg === '--force' || arg === '--skip-fixture') {
      args.flags.add(arg);
    } else {
      throw new Error(`unknown argument ${arg}`);
    }
  }
  return args;
}

function main() {
  let result;
  try {
    const { flags, values } = parseArgs(process.argv.slice(2));
    if (values['--update-baseline']) {
      result = updateBaseline({
        dir: values['--update-baseline'],
        sourceCssFile: values['--source-css'] ? resolve(values['--source-css']) : undefined,
        baselineFile: values['--baseline'] ? resolve(values['--baseline']) : undefined,
        allowedFile: values['--allowed'] ? resolve(values['--allowed']) : undefined,
        version: values['--version'],
        force: flags.has('--force'),
      });
    } else {
      result = runCheck({
        distDir: values['--dist'] ? resolve(values['--dist']) : undefined,
        baselineFile: values['--baseline'] ? resolve(values['--baseline']) : undefined,
        allowedFile: values['--allowed'] ? resolve(values['--allowed']) : undefined,
        packageFile: values['--package'] ? resolve(values['--package']) : undefined,
        skipFixture: flags.has('--skip-fixture'),
      });
    }
  } catch (error) {
    console.error(`✗ check-compat: ${error instanceof Error ? error.message : error}`);
    process.exit(2);
  }
  for (const line of result.lines) (result.ok ? console.log : console.error)(line);
  process.exit(result.ok ? 0 : 1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
