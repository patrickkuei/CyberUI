import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { describe, it, expect } from 'vitest';

const REPO_ROOT = join(__dirname, '..', '..');
const THEME_CSS_PATH = join(REPO_ROOT, 'src', 'index.css');
const SRC_DIR = join(REPO_ROOT, 'src');

// Tailwind's own reserved words — see src/index.css's top comment for why a
// custom `--color-*` token can't reuse one of these.
const TAILWIND_DEFAULT_COLOR_NAMES = new Set([
  'inherit', 'current', 'transparent', 'black', 'white',
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose',
]);

// "T-shirt size" steps reused across many unrelated utility categories
// (font-size, spacing, rounded-*, shadow-*, blur-*, max-w-*, ...).
const TAILWIND_SCALE_STEPS = new Set([
  'none', 'xs', 'sm', 'base', 'md', 'lg', 'xl',
  '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl',
  'full', 'screen', 'auto',
]);

// `base` is a permanent, documented exception (see index.css) — it's a
// published theming token and can't be renamed. Don't add anything else here;
// fix a new collision by renaming the token instead.
const GRANDFATHERED_COLLISIONS = new Set(['base']);

function extractCustomColorTokenNames(): string[] {
  const css = readFileSync(THEME_CSS_PATH, 'utf8');
  const themeMatch = css.match(/@theme\s*\{([\s\S]*?)\n\}/);
  if (!themeMatch) throw new Error('Could not find an @theme block in src/index.css');
  const themeBody = themeMatch[1];

  const names: string[] = [];
  const re = /--color-([a-zA-Z0-9-]+)\s*:/g;
  let match;
  while ((match = re.exec(themeBody))) {
    names.push(match[1]);
  }
  return names;
}

function walkSourceFiles(dir: string, files: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkSourceFiles(full, files);
    } else if (['.ts', '.tsx', '.css'].includes(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

describe('design tokens', () => {
  const tokenNames = extractCustomColorTokenNames();

  it('finds at least the tokens known to exist, as a sanity check on the parser itself', () => {
    // Guards against the regex above silently matching nothing (e.g. if
    // @theme's format changes) and every other test in this file passing
    // vacuously.
    expect(tokenNames).toEqual(expect.arrayContaining(['primary', 'secondary', 'accent', 'base', 'inverse']));
  });

  it.each(tokenNames.filter((name) => !GRANDFATHERED_COLLISIONS.has(name)))(
    "'%s' does not collide with a Tailwind default color name or scale step",
    (name) => {
      expect(TAILWIND_DEFAULT_COLOR_NAMES.has(name)).toBe(false);
      expect(TAILWIND_SCALE_STEPS.has(name)).toBe(false);
    }
  );

  it.each(tokenNames)("'%s' is actually used somewhere in src/", (name) => {
    const files = walkSourceFiles(SRC_DIR).filter((f) => f !== THEME_CSS_PATH);
    const usagePatterns = [
      new RegExp(`\\b(?:bg|text|border|ring|fill|stroke|from|via|to|outline|accent|caret|divide|decoration)-${name}\\b`),
      new RegExp(`--color-${name}\\b`),
    ];

    const isUsed = files.some((file) => {
      const content = readFileSync(file, 'utf8');
      return usagePatterns.some((pattern) => pattern.test(content));
    });

    if (!isUsed) {
      throw new Error(
        `--color-${name} is declared in src/index.css but never referenced anywhere in src/ ` +
          `(checked bg-/text-/border-/etc. utility classes and direct var(--color-${name}) usage). ` +
          `Either use it or remove it — an unused token is easy to reach for by mistake later ` +
          `(this is exactly how --color-inverse sat dead until this test was added; see CHANGELOG.md).`
      );
    }
  });
});
