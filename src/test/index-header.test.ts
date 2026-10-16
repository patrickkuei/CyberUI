// Guards the component list in src/index.ts's package doc comment, which ships
// in dist/index.d.ts. AI assistants that read only the types
// treat that list as the full inventory, so a missing component there gets
// rebuilt by hand instead of imported. The block is written by
// `npm run docs:generate` (scripts/generate-manifest.js) from the manifest;
// these tests fail when someone edits it by hand or forgets to regenerate.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

interface Manifest {
  categoryOrder: string[];
  components: { name: string; category: string }[];
}

// Same markers as bin/markers.js (not imported: tests don't load bin/ JS into TS).
const START = '<!-- cyberui-2045:manifest:start -->';
const END = '<!-- cyberui-2045:manifest:end -->';
const ROOT = join(__dirname, '..', '..');
const read = (relPath: string) => readFileSync(join(ROOT, relPath), 'utf8');
const manifest = JSON.parse(read('public/component-manifest.json')) as Manifest;

function headerBlockLines(): string[] {
  const source = read('src/index.ts');
  const start = source.indexOf(START);
  const end = source.indexOf(END);
  if (start === -1 || end < start) throw new Error('src/index.ts has no manifest marker block');
  return source
    .slice(start + START.length, end)
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean);
}

describe('src/index.ts package header', () => {
  it('states the manifest component count', () => {
    expect(headerBlockLines()[0]).toBe(
      `**All ${manifest.components.length} components** (import from \`'cyberui-2045'\`):`,
    );
  });

  it('lists every manifest component under its category, in manifest order', () => {
    // Ordered pairs, not an object, so a duplicated or malformed line fails
    // the comparison instead of being merged away or throwing.
    const listed = headerBlockLines()
      .slice(1)
      .map((line) => line.split(': '));
    const expected = manifest.categoryOrder.map((category) => [
      category,
      manifest.components
        .filter((c) => c.category === category)
        .map((c) => c.name)
        .join(', '),
    ]);
    expect(listed).toEqual(expected);
  });

  it('is built from a manifest that covers every component the barrel exports', () => {
    const barrel = read('src/components/index.ts');
    const exported = [...barrel.matchAll(/^export \{ default as (\w+) \} from '\.\/\1';$/gm)].map((m) => m[1]);
    expect(manifest.components.map((c) => c.name).sort()).toEqual(exported.sort());
  });
});
