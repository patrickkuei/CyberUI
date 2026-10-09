// Tests for the backward-compatibility guard (scripts/check-compat.js).
//
// Everything runs against tiny synthetic "dist" folders written to a temp
// directory: no build, no network, no real baseline. The comparison logic is
// exercised on in-memory surfaces (fast); the file-reading, `runCheck`,
// `updateBaseline`, fixture and CLI paths are exercised once each on real files.
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

interface Member {
  type: string;
  required: boolean;
}
interface Surface {
  exports: Record<string, string[]>;
  typeMembers: Record<string, Record<string, Member>>;
  signatures: Record<string, string>;
  props: Record<string, Record<string, Member>>;
  cssDeclared: Record<string, string>;
}
interface Baseline extends Omit<Surface, 'cssDeclared'> {
  version: string;
  cssVars: Record<string, { value: string }>;
}
interface Problem {
  id: string;
  message: string;
}
interface Classified {
  failures: Problem[];
  warnings: Problem[];
  accepted: Problem[];
  unusedAllowed: { id: string }[];
  majorBump: boolean;
}
interface RunResult {
  ok: boolean;
  lines: string[];
}
interface CompatModule {
  extractSurface: (distDir: string) => Surface;
  extractDeclarations: (distDir: string) => Pick<Surface, 'exports' | 'typeMembers' | 'signatures'>;
  extractCssDeclarations: (css: string) => Record<string, string>;
  extractThemeVarNames: (css: string) => Set<string>;
  buildBaseline: (args: { version: string; surface: Surface; sourceCss: string }) => Baseline;
  compareSurfaces: (baseline: Baseline, current: Surface) => Problem[];
  classify: (
    problems: Problem[],
    args: { allowed?: { id: string; reason: string; since: string }[]; baselineVersion: string; currentVersion: string }
  ) => Classified;
  loadAllowed: (file: string) => { id: string; reason: string; since: string }[];
  checkFixture: (root: string) => Problem[];
  runCheck: (opts: Record<string, unknown>) => RunResult;
  updateBaseline: (opts: Record<string, unknown>) => RunResult;
}

const SCRIPT = join(__dirname, '..', '..', 'scripts', 'check-compat.js');
const SLOW = 30_000; // each TypeScript program parse takes a second or two on a busy machine

const INDEX_DTS = `export * from './extra';
export interface WidgetProps {
  label: string;
  size?: 'sm' | 'md';
  onPick?: (id: string) => void;
}
export declare const Widget: (props: WidgetProps) => null;
export type Mode = 'a' | 'b';
export declare function cn(...parts: string[]): string;
export declare const useThing: (count?: number) => number;
export declare const version = "1.0.0";
`;
const EXTRA_DTS = `export interface Config {
  src: string;
  alt?: string;
}
export declare const Helper: () => null;
`;
const MANIFEST = {
  components: [
    {
      name: 'Widget',
      props: [
        { name: 'label', type: 'string', required: true },
        { name: 'size', type: '"sm" | "md" | undefined', required: false },
      ],
    },
  ],
  hooks: [],
  context: [],
};
const CSS = ':root{--color-primary:#f05;--gradient-a:1deg;--tw-shadow:0;--spacing:.25rem}.x{color:var(--color-primary)}';
const SOURCE_CSS = `@import "tailwindcss";
@theme {
  --color-primary: #f05; /* pink */
  --gradient-a: 1deg;
  --dropped-by-tailwind: 3px;
}
@layer cyberui { .y { --not-a-token: 1; } }`;

let tmp: string;
let mod: CompatModule;
let baseSurface: Surface;
let baseline: Baseline;

const writeDist = (dir: string, overrides: { index?: string; extra?: string; manifest?: unknown; css?: string } = {}) => {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.d.ts'), overrides.index ?? INDEX_DTS);
  writeFileSync(join(dir, 'extra.d.ts'), overrides.extra ?? EXTRA_DTS);
  writeFileSync(join(dir, 'component-manifest.json'), JSON.stringify(overrides.manifest ?? MANIFEST));
  writeFileSync(join(dir, 'cyberui-2045.css'), overrides.css ?? CSS);
};

/** A throwaway project root (package.json + compat/ + dist/) for runCheck/updateBaseline/CLI tests. */
const makeRoot = (name: string, version: string, dist: Parameters<typeof writeDist>[1] = {}) => {
  const root = join(tmp, name);
  writeDist(join(root, 'dist'), dist);
  writeFileSync(join(root, 'package.json'), JSON.stringify({ name: 'x', version }));
  writeFileSync(join(root, 'index.css'), SOURCE_CSS);
  mkdirSync(join(root, 'compat'), { recursive: true });
  return root;
};
const writeBaseline = (root: string, b: Baseline) => writeFileSync(join(root, 'compat', 'baseline.json'), JSON.stringify(b));
const writeAllowed = (root: string, allowed: unknown[]) => writeFileSync(join(root, 'compat', 'allowed-changes.json'), JSON.stringify({ allowed }));

const clone = <T>(value: T): T => structuredClone(value);
const ids = (problems: Problem[]) => problems.map((p) => p.id).sort();
const compare = (mutate: (s: Surface) => void) => {
  const current = clone(baseSurface);
  mutate(current);
  return mod.compareSurfaces(baseline, current);
};

beforeAll(async () => {
  tmp = mkdtempSync(join(tmpdir(), 'cyberui-compat-'));
  mod = (await import(/* @vite-ignore */ pathToFileURL(SCRIPT).href)) as CompatModule;
  writeDist(join(tmp, 'base'));
  baseSurface = mod.extractSurface(join(tmp, 'base'));
  baseline = mod.buildBaseline({ version: '1.0.0', surface: baseSurface, sourceCss: SOURCE_CSS });
}, SLOW);

afterAll(() => rmSync(tmp, { recursive: true, force: true }));

describe('reading a package statically', () => {
  it('lists every export of the entry, including re-exports, as values and/or types', () => {
    expect(baseSurface.exports).toEqual({
      Config: ['type'],
      Helper: ['value'],
      Mode: ['type'],
      Widget: ['value'],
      WidgetProps: ['type'],
      cn: ['value'],
      useThing: ['value'],
      version: ['value'],
    });
  });

  it('records the package-declared members of exported object types', () => {
    expect(baseSurface.typeMembers.Config).toEqual({
      alt: { type: 'string', required: false },
      src: { type: 'string', required: true },
    });
    expect(baseSurface.typeMembers.WidgetProps.size).toEqual({ type: '"sm" | "md"', required: false });
    expect(baseSurface.typeMembers.Mode).toBeUndefined(); // a string union has no members
  });

  it('records signatures of lower-case function exports only (not constants, not components)', () => {
    expect(Object.keys(baseSurface.signatures).sort()).toEqual(['cn', 'useThing']);
    expect(baseSurface.signatures.cn).toBe('(...parts: string[]) => string');
  });

  it('reads manifest props, and parses CSS custom property declarations', () => {
    expect(baseSurface.props.Widget.label).toEqual({ type: 'string', required: true });
    expect(Object.keys(baseSurface.cssDeclared).sort()).toEqual(['--color-primary', '--gradient-a', '--spacing', '--tw-shadow']);
    expect(mod.extractCssDeclarations('@property --x{syntax:"*";inherits:false}.a\\(--y\\){--z:1}/* --c: 1 */')).toEqual({ '--x': '', '--z': '1' });
  });

  it('keeps only the library\'s own CSS variables in the baseline (no Tailwind built-ins, no dropped theme vars)', () => {
    expect([...mod.extractThemeVarNames(SOURCE_CSS)].sort()).toEqual(['--color-primary', '--dropped-by-tailwind', '--gradient-a']);
    expect(Object.keys(baseline.cssVars)).toEqual(['--color-primary', '--gradient-a']);
    expect(baseline.cssVars['--gradient-a'].value).toBe('1deg');
  });
});

describe('what passes', () => {
  it('an identical surface produces no problems', () => {
    expect(compare(() => {})).toEqual([]);
  });

  it('purely additive changes produce no problems', () => {
    const problems = compare((s) => {
      s.exports.Brand = ['value'];
      s.typeMembers.Config.extra = { type: 'number', required: false };
      s.props.Widget.tone = { type: '"hot" | undefined', required: false };
      s.props.Gadget = { id: { type: 'string', required: true } };
      s.signatures.fresh = '() => void';
      s.cssDeclared['--brand-new'] = '1';
    });
    expect(problems).toEqual([]);
  });

  it('formatting-only differences in type text are not changes', () => {
    expect(compare((s) => (s.props.Widget.size.type = "'sm'  |  'md' | undefined"))).toEqual([]);
  });
});

describe('what fails', () => {
  it('an export that is gone', () => {
    const problems = compare((s) => delete s.exports.Helper);
    expect(ids(problems)).toEqual(['export-removed:Helper']);
    expect(problems[0].message).toMatch(/Deprecate and keep it/);
  });

  it('a type export that is gone', () => {
    expect(ids(compare((s) => delete s.exports.WidgetProps))).toEqual(['export-removed:WidgetProps']);
  });

  it('an export that lost one of its kinds', () => {
    const both = clone(baseline);
    both.exports.Widget = ['type', 'value'];
    const current = clone(baseSurface);
    expect(ids(mod.compareSurfaces(both, current))).toEqual(['export-removed:Widget']);
  });

  it('a library CSS custom property that is no longer declared', () => {
    const problems = compare((s) => delete s.cssDeclared['--gradient-a']);
    expect(ids(problems)).toEqual(['css-var-removed:--gradient-a']);
    expect(problems[0].message).toContain('1deg');
  });

  it('a component prop that was removed', () => {
    expect(ids(compare((s) => delete s.props.Widget.size))).toEqual(['prop-removed:Widget.size']);
  });

  it('a prop that went from required to optional', () => {
    const problems = compare((s) => {
      s.props.Widget.label = { type: 'string | undefined', required: false };
    });
    expect(ids(problems)).toEqual(['prop-required:Widget.label']); // not also a type change
    expect(problems[0].message).toMatch(/required to optional/);
  });

  it('a prop that went from optional to required', () => {
    const problems = compare((s) => {
      s.props.Widget.size = { type: '"sm" | "md"', required: true };
    });
    expect(ids(problems)).toEqual(['prop-required:Widget.size']);
    expect(problems[0].message).toMatch(/optional to required/);
  });

  it('a prop whose type text changed', () => {
    const problems = compare((s) => {
      s.props.Widget.size = { type: '"sm" | "md" | "lg" | undefined', required: false };
    });
    expect(ids(problems)).toEqual(['prop-type:Widget.size']);
    expect(problems[0].message).toContain('"sm" | "md" | "lg"');
  });

  it('a member of an exported type that was removed, changed required-ness, or changed type', () => {
    expect(ids(compare((s) => delete s.typeMembers.Config.alt))).toEqual(['type-member-removed:Config.alt']);
    expect(
      ids(
        compare((s) => {
          s.typeMembers.Config.src = { type: 'string', required: false };
        })
      )
    ).toEqual(['type-member-required:Config.src']);
    expect(
      ids(
        compare((s) => {
          s.typeMembers.Config.src = { type: 'string | URL', required: true };
        })
      )
    ).toEqual(['type-member-type:Config.src']);
  });

  it('reports a `FooProps` member once when the manifest already reported the same prop', () => {
    const problems = compare((s) => {
      s.props.Widget.label = { type: 'string | undefined', required: false };
      s.typeMembers.WidgetProps.label = { type: 'string', required: false };
    });
    expect(ids(problems)).toEqual(['prop-required:Widget.label']);
  });

  it('a function or hook whose signature changed', () => {
    const problems = compare((s) => {
      s.signatures.useThing = '(count: number) => number';
    });
    expect(ids(problems)).toEqual(['signature:useThing']);
  });

  it('a component that disappeared from the manifest while still exported', () => {
    expect(ids(compare((s) => delete s.props.Widget))).toEqual(['manifest-missing:Widget']);
  });

  it('a removed component is reported once, as the export', () => {
    const problems = compare((s) => {
      delete s.exports.Widget;
      delete s.props.Widget;
    });
    expect(ids(problems)).toEqual(['export-removed:Widget']);
  });
});

describe('exceptions and major releases', () => {
  const broken = () => compare((s) => {
    delete s.exports.Helper;
    delete s.cssDeclared['--gradient-a'];
  });

  it('fails a minor/patch release on any unreviewed break', () => {
    const result = mod.classify(broken(), { baselineVersion: '1.0.0', currentVersion: '1.1.0' });
    expect(ids(result.failures)).toEqual(['css-var-removed:--gradient-a', 'export-removed:Helper']);
    expect(result.warnings).toEqual([]);
  });

  it('honours compat/allowed-changes.json per id, and reports entries that no longer match', () => {
    const allowed = [
      { id: 'export-removed:Helper', reason: 'Reviewed: replaced by Widget', since: '1.1.0' },
      { id: 'prop-removed:Gone.never', reason: 'stale', since: '1.1.0' },
    ];
    const result = mod.classify(broken(), { allowed, baselineVersion: '1.0.0', currentVersion: '1.1.0' });
    expect(ids(result.failures)).toEqual(['css-var-removed:--gradient-a']);
    expect(ids(result.accepted)).toEqual(['export-removed:Helper']);
    expect(result.unusedAllowed.map((a) => a.id)).toEqual(['prop-removed:Gone.never']);
  });

  it('downgrades every break to a warning when package.json is a higher major than the baseline', () => {
    const result = mod.classify(broken(), { baselineVersion: '1.4.2', currentVersion: '2.0.0' });
    expect(result.failures).toEqual([]);
    expect(ids(result.warnings)).toEqual(['css-var-removed:--gradient-a', 'export-removed:Helper']);
    expect(result.majorBump).toBe(true);
  });

  it('rejects allowed-changes entries that lack an id, a reason or a since version', () => {
    const file = join(tmp, 'allowed-bad.json');
    writeFileSync(file, JSON.stringify({ allowed: [{ id: 'export-removed:X', reason: '', since: '2.7.0' }] }));
    expect(() => mod.loadAllowed(file)).toThrow(/non-empty "reason"/);
    writeFileSync(file, JSON.stringify({ allowed: [{ id: 'export-removed:X', reason: 'ok' }] }));
    expect(() => mod.loadAllowed(file)).toThrow(/non-empty "since"/);
    expect(mod.loadAllowed(join(tmp, 'does-not-exist.json'))).toEqual([]);
  });
});

describe('runCheck on real files', () => {
  it('passes against its own baseline, and against a purely additive build', () => {
    const same = makeRoot('same', '1.0.0');
    writeBaseline(same, baseline);
    const result = mod.runCheck({ root: same, skipFixture: true });
    expect(result.ok).toBe(true);
    expect(result.lines.join('\n')).toContain('Compatibility check passed against 1.0.0');

    const additive = makeRoot('additive', '1.1.0', {
      index: `${INDEX_DTS}\nexport declare const Extra: () => null;\n`,
      css: `${CSS}.z{--brand-new:1}`,
    });
    writeBaseline(additive, baseline);
    expect(mod.runCheck({ root: additive, skipFixture: true }).ok).toBe(true);
  }, SLOW);

  it('fails and names the exact item when a baseline export is gone from the built d.ts', () => {
    const root = makeRoot('removed', '1.1.0', { extra: EXTRA_DTS.replace('export declare const Helper: () => null;', '') });
    writeBaseline(root, baseline);
    const result = mod.runCheck({ root, skipFixture: true });
    expect(result.ok).toBe(false);
    expect(result.lines.join('\n')).toContain('[export-removed:Helper]');
  }, SLOW);

  it('fails on a CSS variable missing from the built stylesheet', () => {
    const root = makeRoot('css', '1.1.0', { css: ':root{--color-primary:#f05}' });
    writeBaseline(root, baseline);
    const result = mod.runCheck({ root, skipFixture: true });
    expect(result.ok).toBe(false);
    expect(result.lines.join('\n')).toContain('[css-var-removed:--gradient-a]');
  }, SLOW);

  it('passes with a reviewed exception, and warns instead of failing on a major bump', () => {
    const removed = { extra: EXTRA_DTS.replace('export declare const Helper: () => null;', '') };
    const allowedRoot = makeRoot('allowed', '1.1.0', removed);
    writeBaseline(allowedRoot, baseline);
    writeAllowed(allowedRoot, [{ id: 'export-removed:Helper', reason: 'Reviewed: replaced by Widget', since: '1.1.0' }]);
    const allowed = mod.runCheck({ root: allowedRoot, skipFixture: true });
    expect(allowed.ok).toBe(true);
    expect(allowed.lines.join('\n')).toContain('allowed since 1.1.0: Reviewed: replaced by Widget');

    const majorRoot = makeRoot('major', '2.0.0', removed);
    writeBaseline(majorRoot, baseline);
    const major = mod.runCheck({ root: majorRoot, skipFixture: true });
    expect(major.ok).toBe(true);
    expect(major.lines.join('\n')).toMatch(/allowed because this is a major release[\s\S]*export-removed:Helper/);
  }, SLOW);

  it('explains how to proceed when there is no build or no baseline', () => {
    const none = join(tmp, 'empty');
    mkdirSync(none, { recursive: true });
    expect(mod.runCheck({ root: none }).lines.join('\n')).toMatch(/npm run build/);
    const noBaseline = makeRoot('nobaseline', '1.0.0');
    expect(mod.runCheck({ root: noBaseline, skipFixture: true }).lines.join('\n')).toMatch(/baseline\.json is missing/);
  });
});

describe('updateBaseline', () => {
  it('writes a baseline from a package folder: version, exports, props and only the library\'s own CSS variables', () => {
    const root = makeRoot('update', '1.2.0');
    const result = mod.updateBaseline({ dir: root, root, sourceCssFile: join(root, 'index.css') });
    expect(result.ok).toBe(true);
    const written = JSON.parse(readFileSync(join(root, 'compat', 'baseline.json'), 'utf8')) as Baseline;
    expect(written.version).toBe('1.2.0');
    expect(Object.keys(written.exports)).toContain('Widget');
    expect(Object.keys(written.cssVars)).toEqual(['--color-primary', '--gradient-a']);
  }, SLOW);

  it('refuses to replace the baseline while the check would fail (so it cannot be used to dodge the check), unless forced', () => {
    const root = makeRoot('update-refuse', '1.1.0', { css: ':root{--color-primary:#f05}' });
    writeBaseline(root, baseline);
    const refused = mod.updateBaseline({ dir: root, root, sourceCssFile: join(root, 'index.css') });
    expect(refused.ok).toBe(false);
    expect(refused.lines.join('\n')).toContain('Refusing to replace the baseline');
    expect((JSON.parse(readFileSync(join(root, 'compat', 'baseline.json'), 'utf8')) as Baseline).version).toBe('1.0.0');

    const forced = mod.updateBaseline({ dir: root, root, sourceCssFile: join(root, 'index.css'), force: true });
    expect(forced.ok).toBe(true);
    expect((JSON.parse(readFileSync(join(root, 'compat', 'baseline.json'), 'utf8')) as Baseline).version).toBe('1.1.0');
  }, SLOW);

  it('is allowed on a major bump, where breaks are only warnings', () => {
    const root = makeRoot('update-major', '2.0.0', { css: ':root{--color-primary:#f05}' });
    writeBaseline(root, baseline);
    expect(mod.updateBaseline({ dir: root, root, sourceCssFile: join(root, 'index.css') }).ok).toBe(true);
  }, SLOW);
});

describe('consumer fixture', () => {
  const makeFixtureRoot = (name: string, fixture: string) => {
    const root = makeRoot(name, '1.0.0');
    writeFileSync(
      join(root, 'compat', 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: { strict: true, noEmit: true, skipLibCheck: true, types: [], module: 'ESNext', moduleResolution: 'bundler', target: 'ES2022', paths: { 'cyberui-2045': ['../dist/index.d.ts'] } },
        include: ['consumer.fixture.ts'],
      })
    );
    writeFileSync(join(root, 'compat', 'consumer.fixture.ts'), fixture);
    return root;
  };

  it('passes when the realistic consumer code still compiles', () => {
    const root = makeFixtureRoot('fixture-ok', "import { cn } from 'cyberui-2045';\nimport type { Config } from 'cyberui-2045';\nexport const s: string = cn('a') + ({} as Config).src.toUpperCase();\n");
    expect(mod.checkFixture(root)).toEqual([]);
  }, SLOW);

  it('names the failing fixture line when a type a consumer relies on changes', () => {
    const root = makeFixtureRoot('fixture-bad', "import type { Config } from 'cyberui-2045';\nexport const s: string = ({} as Config).alt;\n");
    const problems = mod.checkFixture(root);
    expect(problems).toHaveLength(1);
    expect(problems[0].id).toBe('fixture:export const s: string = ({} as Config).alt;');
    expect(problems[0].message).toMatch(/consumer\.fixture\.ts:2 no longer compiles/);
  }, SLOW);

  it('a fixture break counts like any other: allowed by id, a warning on a major bump', () => {
    const [problem] = [{ id: 'fixture:x', message: 'm' }];
    expect(mod.classify([problem], { allowed: [{ id: 'fixture:x', reason: 'r', since: '1.1.0' }], baselineVersion: '1.0.0', currentVersion: '1.1.0' }).failures).toEqual([]);
    expect(mod.classify([problem], { baselineVersion: '1.0.0', currentVersion: '2.0.0' }).warnings).toHaveLength(1);
  });
});

describe('command line', () => {
  const cli = (...args: string[]) => spawnSync(process.execPath, [SCRIPT, ...args], { encoding: 'utf8', timeout: 25_000 });

  it('exits non-zero with a readable message on a break, and zero when clean', () => {
    const root = makeRoot('cli', '1.1.0', { css: ':root{--color-primary:#f05}' });
    writeBaseline(root, baseline);
    const args = ['--skip-fixture', '--dist', join(root, 'dist'), '--baseline', join(root, 'compat', 'baseline.json'), '--allowed', join(root, 'compat', 'allowed-changes.json'), '--package', join(root, 'package.json')];
    const failed = cli(...args);
    expect(failed.status).toBe(1);
    expect(failed.stderr).toContain('Compatibility check failed');
    expect(failed.stderr).toContain('css-var-removed:--gradient-a');

    writeAllowed(root, [{ id: 'css-var-removed:--gradient-a', reason: 'Reviewed removal', since: '1.1.0' }]);
    const passed = cli(...args);
    expect(passed.status).toBe(0);
    expect(passed.stdout).toContain('Compatibility check passed');
  }, SLOW);

  it('exits 2 on unusable arguments', () => {
    expect(cli('--update-baseline').status).toBe(2);
    expect(cli('--nonsense').status).toBe(2);
  });
});
