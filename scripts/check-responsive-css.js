// Checks that the built dist/cyberui-2045.css has a rule for every
// breakpoint-prefixed class getResponsiveClasses() can produce (issue #108).
//
// The expected list is computed from the source maps by
// scripts/responsive-safelist.js, not read from the generated safelist file,
// so this also catches a safelist that exists but is not reaching Tailwind
// (a dropped `@import` in src/index.css, an `@source inline()` Tailwind
// ignores, a class Tailwind cannot parse).
//
// Run: npm run check:responsive-css     (after `npm run build`)
//      node scripts/check-responsive-css.js [--css <file>]

import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, collectResponsiveClasses } from './responsive-safelist.js';

// CSS.escape() (CSSOM spec) — how Tailwind writes a class into a selector:
// `md:py-2` -> `md\:py-2`, `2xl:h-3` -> `\32 xl\:h-3`, `h-1.5` -> `h-1\.5`.
// The minifier drops the space after a hex escape when the next character
// cannot be read as hex (`\32xl\:h-3`), so findMissingClasses accepts both.
export function cssEscape(value) {
  let out = '';
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    const code = value.charCodeAt(i);
    if ((code >= 0x30 && code <= 0x39 && i === 0) || (i === 1 && code >= 0x30 && code <= 0x39 && value[0] === '-')) {
      out += `\\${code.toString(16)} `;
    } else if (code >= 0x80 || ch === '-' || ch === '_' || /[0-9A-Za-z]/.test(ch)) {
      out += ch;
    } else {
      out += `\\${ch}`;
    }
  }
  return out;
}

/** Returns the classes that have no `.class` selector in `css`. */
export function findMissingClasses(css, classes) {
  return classes.filter((cls) => {
    const escaped = cssEscape(cls);
    const compact = escaped.replace(/(\\[0-9a-f]{1,6}) (?![0-9a-fA-F ])/g, '$1');
    return [escaped, compact].every((sel) => !hasSelector(css, `.${sel}`));
  });
}

function hasSelector(css, selector) {
  for (let from = 0; ; ) {
    const at = css.indexOf(selector, from);
    if (at === -1) return false;
    // Must end the class name, not just start a longer one. (Tailwind scans
    // this file too: an example class written here would end up in the CSS.)
    const next = css[at + selector.length];
    if (next === undefined || !/[A-Za-z0-9_\-\\]/.test(next)) return true;
    from = at + 1;
  }
}

function main() {
  const i = process.argv.indexOf('--css');
  const cssFile = i !== -1 ? resolve(process.argv[i + 1]) : join(ROOT, 'dist/cyberui-2045.css');
  if (!existsSync(cssFile)) {
    console.error(`✗ check-responsive-css: ${cssFile} not found. Run \`npm run build\` first.`);
    process.exit(2);
  }
  const classes = collectResponsiveClasses();
  const missing = findMissingClasses(readFileSync(cssFile, 'utf8'), classes);
  if (missing.length > 0) {
    console.error(
      `✗ ${missing.length} of ${classes.length} responsive classes built by getResponsiveClasses() are missing from ${cssFile}:\n` +
        missing.map((cls) => `    ${cls}`).join('\n') +
        '\n  Responsive props (e.g. size={{ base: "sm", md: "lg" }}) silently do nothing at those breakpoints.' +
        '\n  Run `npm run generate:responsive-safelist`, check src/index.css still imports' +
        ' ./generated/responsive-safelist.css, then rebuild.'
    );
    process.exit(1);
  }
  console.log(`✓ all ${classes.length} responsive classes are in ${cssFile}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
