import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { COLOUR_TOKENS, TOKEN_ROWS, componentsByToken, type ColourToken, type TokenRow } from '../stories/tokenTable';

// Drift guard for the "which tokens does each component read" table on the
// Design Tokens docs page (src/stories/tokenTable.ts is the table's data).
// It checks the table in both directions against the real sources:
//   - every utility listed for a token appears in the component's source;
//   - every token the source reads is listed (so a new `border-warning` in a
//     component fails here until the row is updated).
// Limits: the reverse scan only knows the utility prefixes below, and sees
// `--color-${x}` reads only as listed (rows marked `dynamic`).

const REPO_ROOT = join(__dirname, '..', '..');
const read = (rel: string): string => readFileSync(join(REPO_ROOT, rel), 'utf8');

/** Source without block comments and `//` comments, so doc examples are not counted as reads. */
const stripComments = (src: string): string =>
  src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s)\/\/.*$/gm, '$1');

const escapeRegExp = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const NAMES = [...COLOUR_TOKENS].sort((a, b) => b.length - a.length).join('|');
const PREFIXES = [
  'bg', 'text', 'border', 'border-[trblxy]', 'divide', 'outline', 'decoration', 'caret', 'accent',
  'ring', 'ring-offset', 'inset-ring', 'shadow', 'shadow-lg', 'shadow-md', 'shadow-input', 'drop-shadow',
  'from', 'via', 'to', 'fill', 'stroke', 'placeholder', 'scrollbar-thumb',
].join('|');
// Longest alternatives are tried first, so `border-border-default` reads as
// border + `border-default`, and `shadow-lg-accent` as shadow-lg + `accent`.
const UTILITY = new RegExp(`(?<![\\w-])(?:${PREFIXES})-(${NAMES})(?:/\\d+)?(?![\\w-])`, 'g');
const VAR_READ = new RegExp(`--color-(${NAMES})(?![\\w-])`, 'g');

/** Tokens a source file reads, by scanning for colour utilities and `var(--color-*)`. */
function tokensRead(source: string): ColourToken[] {
  const src = stripComments(source);
  const found = new Set<ColourToken>();
  for (const m of src.matchAll(UTILITY)) found.add(m[1] as ColourToken);
  for (const m of src.matchAll(VAR_READ)) found.add(m[1] as ColourToken);
  return [...found].sort();
}

// A utility must match as a whole class (`border-accent` is not `border-accent/30`
// or part of `inset-ring-accent`). A `var(--color-x)` read can sit inside an
// arbitrary value (`shadow-[0_0_10px_var(--color-x)]`), so it is a plain substring.
const isListedAsRead = (entry: string, src: string): boolean =>
  entry.startsWith('var(') || entry.startsWith('--')
    ? src.includes(entry)
    : new RegExp(`(?<![\\w-])${escapeRegExp(entry)}(?![\\w/-])`).test(src);

describe('token table (Design Tokens docs page)', () => {
  it('lists exactly the --color-* tokens in the @theme block of src/index.css', () => {
    const css = read('src/index.css');
    const theme = css.match(/@theme\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';
    const declared = [...theme.matchAll(/--color-([a-zA-Z0-9-]+)\s*:/g)].map((m) => m[1]);
    expect([...COLOUR_TOKENS].sort()).toEqual([...declared].sort());
  });

  it('has one row per component, each with a source file that exists', () => {
    const names = TOKEN_ROWS.map((r) => r.component);
    expect(new Set(names).size).toBe(names.length);
    for (const row of TOKEN_ROWS) expect(() => read(row.source), row.source).not.toThrow();
  });

  it('has a row for every component or context file that reads a colour token', () => {
    const files = [
      ...readdirSync(join(REPO_ROOT, 'src/components'))
        .filter((f) => /^[A-Za-z]+\.tsx$/.test(f))
        .map((f) => `src/components/${f}`),
      ...readdirSync(join(REPO_ROOT, 'src/contexts'))
        .filter((f) => /^[A-Za-z]+\.tsx?$/.test(f))
        .map((f) => `src/contexts/${f}`),
    ];
    const rowSources = new Set(TOKEN_ROWS.map((r) => r.source));
    const missing = files.filter((f) => tokensRead(read(f)).length > 0 && !rowSources.has(f));
    expect(missing, `add a row to src/stories/tokenTable.ts for: ${missing.join(', ')}`).toEqual([]);
  });

  describe.each(TOKEN_ROWS.map((r): [string, TokenRow] => [r.component, r]))('%s', (_name, row) => {
    const source = stripComments(read(row.source));

    it('only lists utilities that are in the source', () => {
      const missing: string[] = [];
      for (const [token, entries] of Object.entries(row.reads)) {
        expect(COLOUR_TOKENS, `unknown token '${token}'`).toContain(token);
        for (const entry of entries ?? []) {
          if (!isListedAsRead(entry, source)) missing.push(`${token}: ${entry}`);
        }
      }
      expect(missing, `no longer in ${row.source}`).toEqual([]);
    });

    it('lists every colour token the source reads', () => {
      if (row.dynamic) return;
      const listed = Object.keys(row.reads).sort();
      expect(listed).toEqual(tokensRead(read(row.source)));
    });

    it('only lists fixed (non-token) colours that are in the source', () => {
      const missing = (row.fixed ?? []).filter((entry) => !source.includes(entry));
      expect(missing, `no longer in ${row.source}`).toEqual([]);
    });
  });

  it('builds a token -> components index from the rows', () => {
    const index = componentsByToken();
    expect(index.secondary).toEqual(expect.arrayContaining(['Card', 'Badge', 'Tooltip', 'Button']));
    expect(index.accent).toEqual(expect.arrayContaining(['Card', 'Image']));
    expect(index.warning).toEqual(expect.arrayContaining(['Badge']));
  });
});

describe('global rules documented on the Design Tokens docs page', () => {
  const css = read('src/index.css');

  it('html, body still get a stable scrollbar gutter and the base background', () => {
    // If this fails, update the "Global rules styles.css applies" section of
    // src/stories/DesignTokens.mdx to match.
    expect(css).toMatch(
      /html,\s*body\s*\{[^}]*scrollbar-gutter:\s*stable;[^}]*background-color:\s*var\(--color-base\);[^}]*\}/
    );
  });

  it('that rule is inside @layer cyberui', () => {
    const layer = css.match(/@layer cyberui\s*\{\s*html,\s*body\s*\{/);
    expect(layer).not.toBeNull();
  });
});
