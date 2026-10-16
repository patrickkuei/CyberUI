// Tests for the issue #108 fix: scripts/responsive-safelist.js (finds every
// class map passed to getResponsiveClasses and writes the breakpoint-prefixed
// classes into src/generated/responsive-safelist.css for Tailwind) and
// scripts/check-responsive-css.js (checks the built CSS has them; CI runs it
// after `npm run build`, since dist/ does not exist when unit tests run).
//
// Tailwind scans this file as well, so every class written below is one the
// safelist emits anyway: a new example class here would leak into the CSS.
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

interface SafelistModule {
  SAFELIST_FILE: string;
  listSourceFiles: (dir?: string) => string[];
  collectBreakpoints: () => string[];
  collectCallSites: (srcDir?: string) => { site: string; classes: string[] }[];
  collectResponsiveClasses: () => string[];
  renderSafelist: () => string;
}
interface CheckModule {
  cssEscape: (value: string) => string;
  findMissingClasses: (css: string, classes: string[]) => string[];
}

const SCRIPTS = join(__dirname, '..', '..', 'scripts');
let safelist: SafelistModule;
let check: CheckModule;
let tmp: string;

beforeAll(async () => {
  safelist = (await import(pathToFileURL(join(SCRIPTS, 'responsive-safelist.js')).href)) as SafelistModule;
  check = (await import(pathToFileURL(join(SCRIPTS, 'check-responsive-css.js')).href)) as CheckModule;
  tmp = mkdtempSync(join(tmpdir(), 'cyberui-safelist-'));
});
afterAll(() => rmSync(tmp, { recursive: true, force: true }));

describe('responsive safelist generator', () => {
  it('the committed src/generated/responsive-safelist.css is up to date', () => {
    // Fix: npm run generate:responsive-safelist (build/dev/storybook also run it).
    expect(readFileSync(safelist.SAFELIST_FILE, 'utf8')).toBe(safelist.renderSafelist());
  });

  it('prefixes with every breakpoint getResponsiveClasses handles', () => {
    expect(safelist.collectBreakpoints()).toEqual(['sm', 'md', 'lg', 'xl', '2xl']);
  });

  it('finds every getResponsiveClasses call in library source', () => {
    const calls = safelist
      .listSourceFiles()
      .map((file) => (readFileSync(file, 'utf8').match(/\bgetResponsiveClasses\s*\(/g) ?? []).length)
      .reduce((a, b) => a + b, 0);
    expect(calls).toBeGreaterThan(0);
    expect(safelist.collectCallSites()).toHaveLength(calls);
  });

  it('covers shared, nested, component-local and arbitrary-value maps', () => {
    const classes = new Set(safelist.collectResponsiveClasses());
    for (const cls of [
      'md:py-2', // RESPONSIVE_SIZE_MAPS.button
      'lg:text-(length:--text-base)', // arbitrary value, RESPONSIVE_SIZE_MAPS.badge
      '2xl:h-1.5', // nested: RESPONSIVE_SIZE_MAPS.linearProgress.height
      'sm:text-[11px]', // nested: RESPONSIVE_SIZE_MAPS.formField.message
      'md:-translate-x-1/2', // Tooltip's local PLACEMENT_CLASSES
      'xl:after:h-4', // Toggle's sizeMap, declared inside a function
      'lg:flex-row', // RadioGroup's orientationMap
    ]) {
      expect(classes, cls).toContain(cls);
    }
    expect([...classes].every((cls) => /^(sm|md|lg|xl|2xl):\S+$/.test(cls))).toBe(true);
  });

  it('follows a typed local map passed with a spread value (the Modal pattern)', () => {
    const dir = mkdtempSync(join(tmp, 'modal-'));
    writeFileSync(
      join(dir, 'Modal.tsx'),
      `import { getResponsiveClasses } from "../utils/responsive";
type Size = "sm" | "lg";
const RESPONSIVE: Record<Size, string> = { sm: "py-1 px-4", lg: "py-3 px-8" };
export const f = (size: { base?: Size }) => getResponsiveClasses({ ...size, base: size.base ?? "lg" }, RESPONSIVE);
`
    );
    const sites = safelist.collectCallSites(dir);
    expect(sites).toHaveLength(1);
    expect(sites[0].classes).toEqual(['py-1', 'px-4', 'py-3', 'px-8']);
  });

  it('fails loudly, naming the call site, when it cannot follow a map', () => {
    const dir = mkdtempSync(join(tmp, 'bad-'));
    writeFileSync(
      join(dir, 'Bad.tsx'),
      `import { getResponsiveClasses } from "./responsive";
declare const makeMap: () => Record<string, string>;
export const g = (s: string) => getResponsiveClasses(s, makeMap());
`
    );
    expect(() => safelist.collectCallSites(dir)).toThrow(/Bad\.tsx:3/);
  });
});

describe('check-responsive-css', () => {
  it('escapes class names the way the built CSS writes them', () => {
    expect(check.cssEscape('md:py-2')).toBe('md\\:py-2');
    expect(check.cssEscape('lg:text-(length:--text-base)')).toBe('lg\\:text-\\(length\\:--text-base\\)');
    expect(check.cssEscape('2xl:h-1.5')).toBe('\\32 xl\\:h-1\\.5');
    expect(check.cssEscape('md:-translate-x-1/2')).toBe('md\\:-translate-x-1\\/2');
  });

  it('finds minified selectors, including a compacted hex escape', () => {
    const css = '@media (min-width:96rem){.\\32xl\\:h-1\\.5{height:1px}}.md\\:py-2,.x{padding:0}';
    expect(check.findMissingClasses(css, ['2xl:h-1.5', 'md:py-2'])).toEqual([]);
  });

  it('does not accept a longer class that merely starts with the name', () => {
    const css = '.md\\:py-2\\.5{padding:0}';
    expect(check.findMissingClasses(css, ['md:py-2'])).toEqual(['md:py-2']);
  });
});
