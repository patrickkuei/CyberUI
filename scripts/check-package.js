#!/usr/bin/env node
// Verifies the npm tarball is self-consistent, so a consumer's bundler can
// actually resolve it (issue #33). Run after `npm run build`:
//
//   1. Every relative import in a published .js/.cjs/.d.ts file points at a
//      file that is itself in the tarball (per `npm pack --dry-run`, i.e. the
//      real `files` list — not just whatever happens to be in dist/).
//   2. Every bare import is a declared dependency or peerDependency, so nothing
//      is silently relying on a package the consumer never installs.
//   3. The CommonJS entry (`main`) actually yields the library's exports when
//      require()d, rather than falling through to the UMD globals branch.
//
// Run: npm run check:package

import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join, posix } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));

const [packResult] = JSON.parse(
  execSync('npm pack --dry-run --json --ignore-scripts', { cwd: ROOT, encoding: 'utf8' })
);
const packed = new Set(packResult.files.map((f) => f.path));

const declared = new Set([
  pkg.name, // self-references, e.g. JSDoc @example imports
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
]);
const packageNameOf = (spec) => {
  const parts = spec.split('/');
  return spec.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0];
};

// Matches `from "x"`, `import "x"`, `import("x")`, `require("x")` in both
// readable and minified output.
const IMPORT_RE = /(?:\bfrom\s*|\bimport\s*\(?\s*|\brequire\s*\(\s*)["']([^"']+)["']/g;

const resolveRelative = (fromFile, spec) => {
  const base = posix.normalize(posix.join(posix.dirname(fromFile), spec));
  // Declaration files import without an extension; runtime files must match exactly.
  const candidates = fromFile.endsWith('.d.ts')
    ? [base, `${base}.d.ts`, `${base.replace(/\.js$/, '')}.d.ts`, `${base}/index.d.ts`]
    : [base];
  return candidates.some((c) => packed.has(c));
};

const errors = [];

for (const file of packed) {
  if (!/\.(c?js|d\.ts)$/.test(file) || file.startsWith('bin/')) continue;
  const source = readFileSync(join(ROOT, file), 'utf8');
  for (const [, spec] of source.matchAll(IMPORT_RE)) {
    if (spec.startsWith('.')) {
      if (!resolveRelative(file, spec)) errors.push(`${file}: "${spec}" is not in the published package`);
    } else if (!spec.startsWith('node:') && !declared.has(packageNameOf(spec))) {
      errors.push(`${file}: "${spec}" is not a declared dependency or peerDependency`);
    }
  }
}

for (const entry of [pkg.main, pkg.module, pkg.types, ...Object.values(pkg.exports['.'])]) {
  const path = entry.replace(/^\.\//, '');
  if (!packed.has(path)) errors.push(`package.json entry "${entry}" is not in the published package`);
}

const mainPath = join(ROOT, pkg.main);
if (existsSync(mainPath)) {
  const exportCount = Object.keys(createRequire(import.meta.url)(mainPath)).length;
  if (exportCount === 0) errors.push(`require("${pkg.main}") returned no exports`);
}

if (errors.length > 0) {
  console.error(`✗ Package check failed (${errors.length} problem${errors.length === 1 ? '' : 's'}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ Package check passed — ${packed.size} files, all imports resolve inside the tarball.`);
