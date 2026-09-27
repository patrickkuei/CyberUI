// @vitest-environment node
// The `init --dry-run` matrix: for every target and mode, --dry-run must exit 0,
// list every file the real run would touch (with a preview of its content),
// and leave the project directory byte-for-byte unchanged. The same command
// run for real in a fresh directory must then touch exactly those files, with
// the content the preview showed.
import { afterEach, describe, expect, it } from 'vitest';
import {
  CLAUDE_IMPORT_BLOCK,
  CLI_TIMEOUT,
  END,
  GEMINI_IMPORT_BLOCK,
  HEADING,
  START,
  USER_NOTES,
  block,
  createInitSandbox,
  type InitSandbox,
} from './initHarness';

interface Case {
  args: string[];
  seed?: Record<string, string>;
  // Expected [file, action] pairs, in any order.
  expect: Array<[string, string]>;
  warns?: boolean;
  // Exact content of these files after the real run, for cases whose user
  // text must survive.
  after?: Record<string, string>;
}

const LEGACY_BLOCK = `${block('## CyberUI (cyberui-2045 v2.0.0)\n\nold inline guide')}\n`;

const CLAUDE_OWN: Array<[string, string]> = [['CLAUDE.md', 'created'], ['.claude/cyberui.md', 'created']];
const GEMINI_OWN: Array<[string, string]> = [['GEMINI.md', 'created'], ['.gemini/cyberui.md', 'created']];
const CURSOR_OWN: Array<[string, string]> = [['.cursor/rules/cyberui.mdc', 'created']];
const COPILOT_OWN: Array<[string, string]> = [['.github/instructions/cyberui.instructions.md', 'created']];
const AGENTS: Array<[string, string]> = [['AGENTS.md', 'created']];

const CASES: Record<string, Case> = {
  '--claude': { args: ['--claude'], expect: CLAUDE_OWN },
  '--claude --inline': { args: ['--claude', '--inline'], expect: [['CLAUDE.md', 'created']] },
  '--gemini': { args: ['--gemini'], expect: GEMINI_OWN },
  '--gemini --inline': { args: ['--gemini', '--inline'], expect: [['GEMINI.md', 'created']] },
  '--cursor': { args: ['--cursor'], expect: CURSOR_OWN },
  '--cursor --inline': { args: ['--cursor', '--inline'], expect: [['.cursorrules', 'created']] },
  '--copilot': { args: ['--copilot'], expect: COPILOT_OWN },
  '--copilot --inline': {
    args: ['--copilot', '--inline'],
    expect: [['.github/copilot-instructions.md', 'created']],
  },
  '--agents': { args: ['--agents'], expect: AGENTS },
  '--all': { args: ['--all'], expect: [...CLAUDE_OWN, ...GEMINI_OWN, ...CURSOR_OWN, ...COPILOT_OWN, ...AGENTS] },
  '--all --inline': {
    args: ['--all', '--inline'],
    expect: [
      ['CLAUDE.md', 'created'],
      ['GEMINI.md', 'created'],
      ['.cursorrules', 'created'],
      ['.github/copilot-instructions.md', 'created'],
      ['AGENTS.md', 'created'],
    ],
  },
  '--agents --inline': { args: ['--agents', '--inline'], expect: AGENTS, warns: true },
  'migrate CLAUDE.md inline block': {
    args: ['--claude'],
    seed: { 'CLAUDE.md': `${USER_NOTES}\n${LEGACY_BLOCK}` },
    expect: [['CLAUDE.md', 'migrated'], ['.claude/cyberui.md', 'created']],
  },
  'migrate GEMINI.md inline block': {
    args: ['--gemini'],
    seed: { 'GEMINI.md': `${USER_NOTES}\n${LEGACY_BLOCK}` },
    expect: [['GEMINI.md', 'migrated'], ['.gemini/cyberui.md', 'created']],
  },
  'migrate .cursorrules (only the block)': {
    args: ['--cursor'],
    seed: { '.cursorrules': LEGACY_BLOCK },
    expect: [['.cursorrules', 'deleted'], ...CURSOR_OWN],
  },
  'migrate .github/copilot-instructions.md (block + user content)': {
    args: ['--copilot'],
    seed: { '.github/copilot-instructions.md': `${USER_NOTES}\n${LEGACY_BLOCK}` },
    expect: [['.github/copilot-instructions.md', 'removed'], ...COPILOT_OWN],
  },
  '--all over all four legacy inline files, each with user text around the block': {
    args: ['--all'],
    seed: {
      'CLAUDE.md': `${USER_NOTES}\n${LEGACY_BLOCK}\nClaude tail.\n`,
      'GEMINI.md': `# Gemini notes\n\n${LEGACY_BLOCK}\nGemini tail.\n`,
      '.cursorrules': `# Cursor rules\n\n${LEGACY_BLOCK}\n# More rules\n`,
      '.github/copilot-instructions.md': `${USER_NOTES}\n${LEGACY_BLOCK}\nCopilot tail.\n`,
    },
    expect: [
      ['CLAUDE.md', 'migrated'],
      ['.claude/cyberui.md', 'created'],
      ['GEMINI.md', 'migrated'],
      ['.gemini/cyberui.md', 'created'],
      ['.cursorrules', 'removed'],
      ...CURSOR_OWN,
      ['.github/copilot-instructions.md', 'removed'],
      ...COPILOT_OWN,
      ...AGENTS,
    ],
    after: {
      'CLAUDE.md': `${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n\nClaude tail.\n`,
      'GEMINI.md': `# Gemini notes\n\n${GEMINI_IMPORT_BLOCK}\n\nGemini tail.\n`,
      '.cursorrules': '# Cursor rules\n\n# More rules\n',
      '.github/copilot-instructions.md': `${USER_NOTES}\nCopilot tail.\n`,
    },
  },
};

interface Listed {
  file: string;
  action: string;
  preview: string;
}

// Parse the dry-run sections: "  ── FILE (action[ — note]) ──\nPREVIEW\n".
function parseDryRun(stdout: string): Listed[] {
  const header = /^ {2}── (\S+) \((\w+)[^\n]*\) ──$/gm;
  const heads = [...stdout.matchAll(header)];
  return heads.map((m, i) => {
    const bodyStart = (m.index ?? 0) + m[0].length + 1;
    const bodyEnd =
      i + 1 < heads.length ? (heads[i + 1].index ?? stdout.length) : stdout.indexOf('\n  Dry run: nothing was written', bodyStart);
    return { file: m[1], action: m[2], preview: stdout.slice(bodyStart, bodyEnd).replace(/\n+$/, '') };
  });
}

// Parse the real run's "  ✓  Action   FILE" lines.
function parseRun(stdout: string): Array<[string, string]> {
  return [...stdout.matchAll(/^ {2}✓ {2}(\w+)\s+(\S+)/gm)].map((m) => [m[2], m[1].toLowerCase()]);
}

const sorted = (pairs: Array<[string, string]>) => [...pairs].sort((a, b) => a.join().localeCompare(b.join()));

let sandboxes: InitSandbox[] = [];

function fresh(seed: Record<string, string> = {}) {
  const sb = createInitSandbox();
  sandboxes.push(sb);
  for (const [file, content] of Object.entries(seed)) sb.write(file, content);
  return sb;
}

afterEach(() => {
  for (const sb of sandboxes) sb.cleanup();
  sandboxes = [];
});

describe('init --dry-run matrix', { timeout: CLI_TIMEOUT }, () => {
  it.each(Object.entries(CASES))('%s', (_name, c) => {
    // 1. Dry run: exit 0, every file listed with a preview, nothing written.
    const dry = fresh(c.seed);
    const before = dry.snapshot();
    const dryResult = dry.run(...c.args, '--dry-run');
    expect(dryResult.status).toBe(0);
    expect(dry.snapshot()).toEqual(before);
    if (c.warns) expect(dryResult.stderr).toContain('--inline has no effect');
    else expect(dryResult.stderr).toBe('');

    const listed = parseDryRun(dryResult.stdout);
    expect(sorted(listed.map((l) => [l.file, l.action]))).toEqual(sorted(c.expect));
    for (const l of listed) {
      if (l.action === 'deleted' || l.action === 'removed') {
        // The exact lines taken out, then what happens to the rest of the file.
        expect(l.preview).toMatch(/^Takes out these \d+ lines/);
        expect(l.preview).toContain(`\n  - ${START}\n`);
        expect(l.preview).toContain(`\n  - ${END}\n`);
        if (l.action === 'deleted') {
          expect(l.preview).toContain('Nothing else is left, so the file is deleted.');
        } else {
          const kept = (c.after?.[l.file] ?? USER_NOTES).split('\n').slice(0, -1);
          expect(l.preview).toContain(`Keeps the other ${kept.length} lines, starting:\n    ${kept[0]}`);
        }
        continue;
      }
      expect(l.preview.includes(HEADING) || l.preview.includes('@')).toBe(true);
    }

    // 2. Real run in a fresh directory: the same files, with the previewed content.
    const real = fresh(c.seed);
    const realResult = real.run(...c.args);
    expect(realResult.status).toBe(0);
    expect(sorted(parseRun(realResult.stdout))).toEqual(sorted(c.expect));
    for (const l of listed) {
      if (l.action === 'deleted') {
        expect(real.exists(l.file)).toBe(false);
      } else if (l.action === 'removed') {
        expect(real.read(l.file)).not.toContain(START);
        expect(real.read(l.file)).toBe(c.after?.[l.file] ?? USER_NOTES);
      } else if (l.preview.startsWith(START)) {
        expect(real.read(l.file)).toContain(l.preview);
      } else {
        // An own file: the preview is the whole file.
        expect(real.read(l.file)).toBe(`${l.preview}\n`);
      }
    }
    // User text around the blocks survives.
    for (const [file, content] of Object.entries(c.after ?? {})) expect(real.read(file)).toBe(content);
  });
});
