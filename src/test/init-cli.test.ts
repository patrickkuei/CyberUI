// @vitest-environment node
// End-to-end tests for the `npx cyberui-2045 init` CLI (bin/init.js).
//
// Each test runs the CLI as a child process against a throwaway project
// directory (see ./initHarness.ts). Nothing is written into the repo.
import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  CLAUDE_IMPORT_BLOCK,
  CLI_TIMEOUT,
  COPILOT_FRONTMATTER,
  CURSOR_FRONTMATTER,
  END,
  GEMINI_IMPORT_BLOCK,
  HEADING,
  REPO_BIN_DIR,
  START,
  USER_NOTES,
  block,
  createInitSandbox,
  type InitSandbox,
} from './initHarness';

let sb: InitSandbox;

beforeEach(() => {
  sb = createInitSandbox();
});

afterEach(() => {
  sb.cleanup();
});

const CLAUDE_GUIDE = '.claude/cyberui.md';
const GEMINI_GUIDE = '.gemini/cyberui.md';
const CURSOR_RULE = '.cursor/rules/cyberui.mdc';
const COPILOT_INSTRUCTIONS = '.github/instructions/cyberui.instructions.md';

const crlf = (text: string) => text.replace(/\n/g, '\r\n');
const count = (text: string, needle: string) => text.split(needle).length - 1;

// The guide text itself, as `init --agents` puts it between the markers.
function inlineGuide() {
  expect(sb.run('--agents').status).toBe(0);
  const agents = sb.read('AGENTS.md');
  rmSync(sb.path('AGENTS.md'));
  return agents.slice(START.length + 1, agents.indexOf(END) - 1);
}

describe('init --claude (import mode, the default)', { timeout: CLI_TIMEOUT }, () => {
  it('writes the guide to .claude/cyberui.md and only the import block to CLAUDE.md', () => {
    const guide = inlineGuide();
    const { status, stdout } = sb.run('--claude');
    expect(status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(`${CLAUDE_IMPORT_BLOCK}\n`);
    expect(sb.read(CLAUDE_GUIDE)).toBe(`${guide}\n`);
    expect(sb.read(CLAUDE_GUIDE).startsWith(HEADING)).toBe(true);
    expect(stdout).toContain(CLAUDE_GUIDE);
  });

  it('appends the import block to an existing CLAUDE.md without touching the rest', () => {
    sb.write('CLAUDE.md', USER_NOTES);
    expect(sb.run('--claude').status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(`${USER_NOTES.trimEnd()}\n\n${CLAUDE_IMPORT_BLOCK}\n`);
    expect(sb.exists(CLAUDE_GUIDE)).toBe(true);
  });

  it('is idempotent: a second run changes nothing', () => {
    sb.write('CLAUDE.md', USER_NOTES);
    sb.run('--claude');
    const before = sb.snapshot();
    const { status, stdout } = sb.run('--claude');
    expect(status).toBe(0);
    expect(sb.snapshot()).toEqual(before);
    expect(stdout).toMatch(/Unchanged\s+CLAUDE\.md/);
    expect(stdout).toMatch(/Unchanged\s+\.claude\/cyberui\.md/);
  });

  it('on upgrade rewrites only .claude/cyberui.md and leaves CLAUDE.md alone', () => {
    sb.write('CLAUDE.md', `${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n\nMore notes after the block.\n`);
    const before = sb.read('CLAUDE.md');
    sb.write(CLAUDE_GUIDE, '## CyberUI (cyberui-2045 v0.0.1)\n\nstale guide\n');
    expect(sb.run('--claude').status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(before);
    expect(sb.read(CLAUDE_GUIDE).startsWith(HEADING)).toBe(true);
    expect(sb.read(CLAUDE_GUIDE)).not.toContain('stale guide');
  });

  it('leaves an already-importing CLAUDE.md byte-for-byte alone, even with CRLF line endings', () => {
    const text = crlf(`${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n`);
    sb.write('CLAUDE.md', text);
    expect(sb.run('--claude').status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(text);
  });

  it('migrates an existing inline block to the import block and says so', () => {
    const guide = inlineGuide();
    sb.write('CLAUDE.md', `${USER_NOTES}\n${block('## CyberUI (cyberui-2045 v2.0.0)\n\nold inline guide')}\n\nTail notes.\n`);
    const { status, stdout } = sb.run('--claude');
    expect(status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(`${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n\nTail notes.\n`);
    expect(sb.read(CLAUDE_GUIDE)).toBe(`${guide}\n`);
    expect(stdout).toMatch(/Migrated\s+CLAUDE\.md/);
    expect(stdout).toContain('@.claude/cyberui.md');

    // ...and running it again is a no-op.
    const second = sb.run('--claude');
    expect(second.stdout).not.toMatch(/Migrated/);
    expect(sb.read('CLAUDE.md')).toBe(`${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n\nTail notes.\n`);
  });

  it('--dry-run shows both the CLAUDE.md block and .claude/cyberui.md, and writes nothing', () => {
    const { status, stdout } = sb.run('--claude', '--dry-run');
    expect(status).toBe(0);
    expect(stdout).toContain('── CLAUDE.md');
    expect(stdout).toContain(CLAUDE_IMPORT_BLOCK);
    expect(stdout).toContain('── .claude/cyberui.md');
    expect(stdout).toContain(HEADING);
    expect(sb.snapshot()).toEqual({});
  });
});

describe('init --claude --inline', { timeout: CLI_TIMEOUT }, () => {
  it('pastes the guide into CLAUDE.md between the markers, as before', () => {
    const guide = inlineGuide();
    expect(sb.run('--claude', '--inline').status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(`${block(guide)}\n`);
    expect(sb.exists('.claude')).toBe(false);
  });

  it('is idempotent', () => {
    sb.write('CLAUDE.md', USER_NOTES);
    sb.run('--claude', '--inline');
    const first = sb.read('CLAUDE.md');
    const { status, stdout } = sb.run('--claude', '--inline');
    expect(status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(first);
    expect(stdout).toMatch(/Unchanged\s+CLAUDE\.md/);
  });

  it('replaces an existing import block with the inline guide and points out the orphaned guide file', () => {
    const guide = inlineGuide();
    sb.write('CLAUDE.md', `${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n`);
    sb.write(CLAUDE_GUIDE, `${guide}\n`);
    const { status, stdout } = sb.run('--claude', '--inline');
    expect(status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(`${USER_NOTES}\n${block(guide)}\n`);
    // The now-unused guide file is the user's to delete; init only points it out.
    expect(sb.exists(CLAUDE_GUIDE)).toBe(true);
    expect(stdout).toContain('.claude/cyberui.md is no longer imported');
  });

  it('--dry-run shows the inline block only', () => {
    const { stdout } = sb.run('--claude', '--inline', '--dry-run');
    expect(stdout).toContain(`${START}\n${HEADING}`);
    expect(stdout).not.toContain('.claude/cyberui.md');
    expect(sb.snapshot()).toEqual({});
  });
});

describe('init --gemini (import mode, the default)', { timeout: CLI_TIMEOUT }, () => {
  it('writes the guide to .gemini/cyberui.md and a relative @./ import block to GEMINI.md', () => {
    const guide = inlineGuide();
    const { status, stdout } = sb.run('--gemini');
    expect(status).toBe(0);
    expect(sb.read('GEMINI.md')).toBe(`${GEMINI_IMPORT_BLOCK}\n`);
    expect(sb.read(GEMINI_GUIDE)).toBe(`${guide}\n`);
    expect(sb.read(GEMINI_GUIDE).startsWith(HEADING)).toBe(true);
    expect(stdout).toMatch(/Created\s+GEMINI\.md/);
    expect(stdout).toMatch(/Created\s+\.gemini\/cyberui\.md/);
    // Only Gemini's files.
    expect(Object.keys(sb.snapshot()).sort()).toEqual(['.gemini/', '.gemini/cyberui.md', 'GEMINI.md']);
  });

  it('migrates an inline GEMINI.md block to the import block, keeping the user content, then is idempotent', () => {
    const guide = inlineGuide();
    sb.write('GEMINI.md', `${USER_NOTES}\n${block('## CyberUI (cyberui-2045 v2.0.0)\n\nold')}\n\nTail.\n`);
    const { status, stdout } = sb.run('--gemini');
    expect(status).toBe(0);
    expect(sb.read('GEMINI.md')).toBe(`${USER_NOTES}\n${GEMINI_IMPORT_BLOCK}\n\nTail.\n`);
    expect(sb.read(GEMINI_GUIDE)).toBe(`${guide}\n`);
    expect(stdout).toMatch(/Migrated\s+GEMINI\.md/);
    expect(stdout).toContain('@./.gemini/cyberui.md');

    const before = sb.snapshot();
    const second = sb.run('--gemini');
    expect(second.status).toBe(0);
    expect(second.stdout).toMatch(/Unchanged\s+GEMINI\.md/);
    expect(second.stdout).toMatch(/Unchanged\s+\.gemini\/cyberui\.md/);
    expect(sb.snapshot()).toEqual(before);
  });

  it('--inline pastes the guide into GEMINI.md', () => {
    const guide = inlineGuide();
    expect(sb.run('--gemini', '--inline').status).toBe(0);
    expect(sb.read('GEMINI.md')).toBe(`${block(guide)}\n`);
    expect(sb.exists('.gemini')).toBe(false);
  });

  it('--inline over an import block keeps .gemini/cyberui.md and says it is no longer imported', () => {
    sb.run('--gemini');
    const { status, stdout } = sb.run('--gemini', '--inline');
    expect(status).toBe(0);
    expect(sb.read('GEMINI.md').startsWith(`${START}\n${HEADING}`)).toBe(true);
    expect(sb.exists(GEMINI_GUIDE)).toBe(true);
    expect(stdout).toContain('.gemini/cyberui.md is no longer imported');
  });
});

// Cursor and Copilot have no import syntax, so their default is a dedicated
// rules/instructions file of their own; --inline keeps the old marked block in
// their single shared file.
describe.each([
  {
    flag: '--cursor',
    ownFile: CURSOR_RULE,
    frontmatter: CURSOR_FRONTMATTER,
    legacyFile: '.cursorrules',
    ownDirs: ['.cursor/', '.cursor/rules/'],
  },
  {
    flag: '--copilot',
    ownFile: COPILOT_INSTRUCTIONS,
    frontmatter: COPILOT_FRONTMATTER,
    legacyFile: '.github/copilot-instructions.md',
    ownDirs: ['.github/', '.github/instructions/'],
  },
])('init $flag', { timeout: CLI_TIMEOUT }, ({ flag, ownFile, frontmatter, legacyFile, ownDirs }) => {
  const legacyBlock = `${block('## CyberUI (cyberui-2045 v2.0.0)\n\nold inline guide')}\n`;

  it(`writes ${ownFile} with frontmatter, the version heading right under it`, () => {
    const guide = inlineGuide();
    const { status, stdout } = sb.run(flag);
    expect(status).toBe(0);
    expect(sb.read(ownFile)).toBe(`${frontmatter}${guide}\n`);
    expect(sb.read(ownFile).slice(frontmatter.length).startsWith(HEADING)).toBe(true);
    expect(stdout).toContain(ownFile);
    expect(Object.keys(sb.snapshot()).sort()).toEqual([...ownDirs, ownFile].sort());
  });

  it('is idempotent', () => {
    sb.run(flag);
    const before = sb.snapshot();
    const { status, stdout } = sb.run(flag);
    expect(status).toBe(0);
    expect(stdout).toMatch(/Unchanged/);
    expect(stdout).not.toMatch(/Created|Updated|Removed|Deleted/);
    expect(sb.snapshot()).toEqual(before);
  });

  it(`migrates: deletes ${legacyFile} when it only held the cyberui block`, () => {
    sb.write(legacyFile, legacyBlock);
    const { status, stdout } = sb.run(flag);
    expect(status).toBe(0);
    expect(sb.exists(legacyFile)).toBe(false);
    expect(sb.read(ownFile).startsWith(frontmatter)).toBe(true);
    expect(stdout).toMatch(new RegExp(`Deleted\\s+${legacyFile.replace(/\./g, '\\.')}`));

    const second = sb.run(flag);
    expect(second.stdout).not.toMatch(/Deleted|Removed|Migrated/);
  });

  it(`migrates: removes only the cyberui block from ${legacyFile} and keeps the user's content`, () => {
    sb.write(legacyFile, `${USER_NOTES.trimEnd()}\n\n${legacyBlock}`);
    const { status, stdout } = sb.run(flag);
    expect(status).toBe(0);
    expect(sb.read(legacyFile)).toBe(USER_NOTES);
    expect(sb.exists(ownFile)).toBe(true);
    expect(stdout).toMatch(new RegExp(`Removed\\s+${legacyFile.replace(/\./g, '\\.')}`));

    const before = sb.snapshot();
    const second = sb.run(flag);
    expect(second.status).toBe(0);
    expect(sb.snapshot()).toEqual(before);
  });

  it('--dry-run shows the exact lines it takes out and what stays, and writes nothing', () => {
    sb.write(legacyFile, `${USER_NOTES.trimEnd()}\n\n${legacyBlock}`);
    const before = sb.snapshot();
    const { status, stdout } = sb.run(flag, '--dry-run');
    expect(status).toBe(0);
    expect(sb.snapshot()).toEqual(before);
    expect(stdout).toContain(
      [
        `── ${legacyFile} (removed — took out the cyberui-2045 block, now in ${ownFile}; kept the rest of the file) ──`,
        'Takes out these 5 lines, plus 1 blank line next to them:',
        `  - ${START}`,
        '  - ## CyberUI (cyberui-2045 v2.0.0)',
        '  -',
        '  - old inline guide',
        `  - ${END}`,
        'Keeps the other 3 lines, starting:',
        '    # My project',
        '',
        '    Keep the neon at 11.',
      ].join('\n'),
    );
  });

  it('--dry-run shortens a long block and a long remainder', () => {
    const rules = Array.from({ length: 20 }, (_, i) => `rule ${i + 1}`).join('\n');
    const notes = Array.from({ length: 10 }, (_, i) => `note ${i + 1}`).join('\n');
    sb.write(legacyFile, `${notes}\n\n${block(rules)}\n`);
    const { stdout } = sb.run(flag, '--dry-run');
    expect(stdout).toContain(
      [
        'Takes out these 22 lines, plus 1 blank line next to them:',
        `  - ${START}`,
        '  - rule 1',
        '  - rule 2',
        '  - … (17 more lines)',
        '  - rule 20',
        `  - ${END}`,
        'Keeps the other 10 lines, starting:',
        '    note 1',
        '    note 2',
        '    note 3',
        '    … (7 more lines)',
      ].join('\n'),
    );
  });

  it('--dry-run of a legacy file holding only the block says it will be deleted', () => {
    sb.write(legacyFile, legacyBlock);
    const { stdout } = sb.run(flag, '--dry-run');
    expect(stdout).toContain(
      [
        'Takes out these 5 lines:',
        `  - ${START}`,
        '  - ## CyberUI (cyberui-2045 v2.0.0)',
        '  -',
        '  - old inline guide',
        `  - ${END}`,
        'Nothing else is left, so the file is deleted.',
      ].join('\n'),
    );
    expect(sb.read(legacyFile)).toBe(legacyBlock);
  });

  it('keeps user content on both sides of the removed block', () => {
    sb.write(legacyFile, `# Top\n\n${legacyBlock}\n# Bottom\n`);
    expect(sb.run(flag).status).toBe(0);
    expect(sb.read(legacyFile)).toBe('# Top\n\n# Bottom\n');
  });

  it(`leaves a ${legacyFile} without cyberui markers untouched`, () => {
    sb.write(legacyFile, USER_NOTES);
    const { stdout } = sb.run(flag);
    expect(sb.read(legacyFile)).toBe(USER_NOTES);
    expect(stdout).not.toMatch(/Removed|Deleted/);
  });

  it('removes the block from a CRLF legacy file and keeps its CRLF line endings', () => {
    sb.write(legacyFile, crlf(`${USER_NOTES.trimEnd()}\n\n${legacyBlock}`));
    expect(sb.run(flag).status).toBe(0);
    expect(sb.read(legacyFile)).toBe(crlf(USER_NOTES));
  });

  it(`--inline writes the marked block to ${legacyFile}`, () => {
    const guide = inlineGuide();
    expect(sb.run(flag, '--inline').status).toBe(0);
    expect(sb.read(legacyFile)).toBe(`${block(guide)}\n`);
    expect(sb.exists(ownFile)).toBe(false);
  });

  it(`--inline while ${ownFile} exists writes the block, keeps ${ownFile} and says so`, () => {
    sb.run(flag);
    const { status, stdout } = sb.run(flag, '--inline');
    expect(status).toBe(0);
    expect(sb.read(legacyFile).startsWith(`${START}\n${HEADING}`)).toBe(true);
    expect(sb.exists(ownFile)).toBe(true);
    expect(stdout).toContain(`${ownFile} still exists`);
  });
});

describe('init --agents', { timeout: CLI_TIMEOUT }, () => {
  it('writes the inline guide to AGENTS.md', () => {
    expect(sb.run('--agents').status).toBe(0);
    expect(sb.read('AGENTS.md').startsWith(`${START}\n${HEADING}`)).toBe(true);
    expect(Object.keys(sb.snapshot())).toEqual(['AGENTS.md']);
  });

  it('warns (without failing) that --inline changes nothing for AGENTS.md alone', () => {
    const { status, stderr } = sb.run('--agents', '--inline');
    expect(status).toBe(0);
    expect(stderr).toContain('--inline has no effect');
    expect(stderr.trim().split('\n')).toHaveLength(1);
    expect(sb.read('AGENTS.md').startsWith(`${START}\n${HEADING}`)).toBe(true);
  });

  it('does not warn when --inline applies to one of the selected targets', () => {
    expect(sb.run('--agents', '--claude', '--inline').stderr).not.toContain('--inline');
  });
});

describe('init --all', { timeout: CLI_TIMEOUT }, () => {
  it('uses the own-file mode for every tool that has one, and AGENTS.md inline', () => {
    expect(sb.run('--all').status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(`${CLAUDE_IMPORT_BLOCK}\n`);
    expect(sb.read('GEMINI.md')).toBe(`${GEMINI_IMPORT_BLOCK}\n`);
    for (const file of [CLAUDE_GUIDE, GEMINI_GUIDE]) expect(sb.read(file).startsWith(HEADING)).toBe(true);
    expect(sb.read(CURSOR_RULE).startsWith(`${CURSOR_FRONTMATTER}${HEADING}`)).toBe(true);
    expect(sb.read(COPILOT_INSTRUCTIONS).startsWith(`${COPILOT_FRONTMATTER}${HEADING}`)).toBe(true);
    expect(sb.read('AGENTS.md').startsWith(`${START}\n${HEADING}`)).toBe(true);
    expect(sb.exists('.cursorrules')).toBe(false);
    expect(sb.exists('.github/copilot-instructions.md')).toBe(false);
  });

  it('--all --inline pastes the guide into every tool file and writes no own files', () => {
    expect(sb.run('--all', '--inline').status).toBe(0);
    for (const file of ['CLAUDE.md', 'GEMINI.md', '.cursorrules', '.github/copilot-instructions.md', 'AGENTS.md']) {
      expect(sb.read(file).startsWith(`${START}\n${HEADING}`)).toBe(true);
    }
    for (const file of ['.claude', '.gemini', '.cursor', '.github/instructions']) expect(sb.exists(file)).toBe(false);
  });
});

describe('init: malformed markers', { timeout: CLI_TIMEOUT }, () => {
  it('fills an empty import-mode block as an update, not a migration', () => {
    sb.write('CLAUDE.md', `${USER_NOTES}\n${START}\n${END}\n`);
    const { status, stdout } = sb.run('--claude');
    expect(status).toBe(0);
    expect(stdout).not.toMatch(/Migrated/);
    expect(stdout).toMatch(/Updated\s+CLAUDE\.md/);
    expect(sb.read('CLAUDE.md')).toBe(`${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n`);
  });

  it('fills an empty inline block without duplicating text', () => {
    sb.write('AGENTS.md', `${USER_NOTES}\n${START}${END}\n`);
    const { status, stdout } = sb.run('--agents');
    expect(status).toBe(0);
    expect(stdout).toMatch(/Updated\s+AGENTS\.md/);
    const text = sb.read('AGENTS.md');
    expect(text.startsWith(`${USER_NOTES}\n${START}\n${HEADING}`)).toBe(true);
    expect(count(text, START)).toBe(1);
    expect(count(text, HEADING)).toBe(1);
  });

  it.each([
    ['an end marker before the start marker', `${END}\nstray\n${START}\nhalf a guide\n`],
    ['a start marker with no end marker', `${USER_NOTES}\n${START}\nhalf a guide\n`],
    ['an end marker with no start marker', `${USER_NOTES}\n${END}\n`],
  ])('skips a file with %s, leaves it alone, and exits non-zero', (_label, text) => {
    sb.write('CLAUDE.md', text);
    sb.write('AGENTS.md', text);
    for (const args of [['--claude'], ['--claude', '--inline'], ['--agents']]) {
      const { status, stdout, stderr } = sb.run(...args);
      expect(status).toBe(1);
      expect(stdout).not.toMatch(/Migrated|Appended|Updated/);
      expect(stderr).toMatch(/marker/);
      expect(stderr).toContain(args[0] === '--agents' ? 'AGENTS.md' : 'CLAUDE.md');
    }
    expect(sb.read('CLAUDE.md')).toBe(text);
    expect(sb.read('AGENTS.md')).toBe(text);
    // Skipping a target skips all of its files, so nothing dangles.
    expect(sb.exists('.claude')).toBe(false);
  });

  it('still sets up the other targets when one file is malformed', () => {
    sb.write('CLAUDE.md', `${START}\nhalf\n`);
    const { status } = sb.run('--claude', '--agents');
    expect(status).toBe(1);
    expect(sb.read('AGENTS.md').startsWith(`${START}\n${HEADING}`)).toBe(true);
  });

  it('skips a Cursor migration whose .cursorrules has a broken block', () => {
    sb.write('.cursorrules', `${USER_NOTES}${START}\nhalf\n`);
    const { status, stderr } = sb.run('--cursor');
    expect(status).toBe(1);
    expect(stderr).toContain('.cursorrules');
    expect(sb.read('.cursorrules')).toBe(`${USER_NOTES}${START}\nhalf\n`);
    expect(sb.exists('.cursor')).toBe(false);
  });
});

describe('init: CRLF files', { timeout: CLI_TIMEOUT }, () => {
  it('reports an up-to-date CRLF inline block as Unchanged and does not rewrite it', () => {
    sb.run('--claude', '--inline');
    const text = crlf(sb.read('CLAUDE.md'));
    sb.write('CLAUDE.md', text);
    const { status, stdout } = sb.run('--claude', '--inline');
    expect(status).toBe(0);
    expect(stdout).toMatch(/Unchanged\s+CLAUDE\.md/);
    expect(sb.read('CLAUDE.md')).toBe(text);
  });

  it('appends to a CRLF file with CRLF line endings only', () => {
    sb.write('AGENTS.md', crlf(USER_NOTES));
    expect(sb.run('--agents').status).toBe(0);
    const text = sb.read('AGENTS.md');
    expect(text.startsWith(crlf(`${USER_NOTES}\n${START}\n${HEADING}`))).toBe(true);
    expect(text.replace(/\r\n/g, '')).not.toContain('\n');
  });

  it('updates a stale CRLF block with CRLF line endings', () => {
    sb.write('AGENTS.md', crlf(`${USER_NOTES}\n${block('old')}\n`));
    expect(sb.run('--agents').status).toBe(0);
    const text = sb.read('AGENTS.md');
    expect(text.replace(/\r\n/g, '')).not.toContain('\n');
    expect(text).toContain(crlf(`${START}\n${HEADING}`));
  });

  it('migrates a CRLF inline block to a CRLF import block', () => {
    sb.write('CLAUDE.md', crlf(`${USER_NOTES}\n${block('old')}\n`));
    expect(sb.run('--claude').status).toBe(0);
    expect(sb.read('CLAUDE.md')).toBe(crlf(`${USER_NOTES}\n${CLAUDE_IMPORT_BLOCK}\n`));
  });

  it('treats an up-to-date own file checked out with CRLF as Unchanged', () => {
    sb.run('--claude', '--cursor');
    for (const file of [CLAUDE_GUIDE, CURSOR_RULE]) sb.write(file, crlf(sb.read(file)));
    const before = sb.snapshot();
    const { status, stdout } = sb.run('--claude', '--cursor');
    expect(status).toBe(0);
    expect(stdout).not.toMatch(/Updated|Created/);
    expect(sb.snapshot()).toEqual(before);
  });
});

describe('init: package version lookup', { timeout: CLI_TIMEOUT }, () => {
  it('puts the installed package.json version in the guide heading', () => {
    const { status, stdout } = sb.run('--cursor', '--dry-run');
    expect(status).toBe(0);
    expect(stdout).toContain(HEADING);
  });

  it('fails loudly instead of guessing a version when package.json is unreadable', () => {
    rmSync(join(sb.pkgDir, 'package.json'));
    const { status, stderr } = sb.run('--cursor');
    expect(status).not.toBe(0);
    expect(stderr).toContain('package.json');
    expect(sb.snapshot()).toEqual({});
  });

  it('checks the version before anything else, so a broken install fails before any prompt', () => {
    rmSync(join(sb.pkgDir, 'package.json'));
    // No target flags: without the early check this would print the
    // interactive/non-interactive target menu first.
    const { status, stdout, stderr } = sb.run();
    expect(status).not.toBe(0);
    expect(stderr).toContain('package.json');
    expect(stdout).not.toMatch(/Non-interactive|Which AI/);
  });

  it('getUsageContent() has no default version: calling it without one throws', async () => {
    const mod = (await import(
      /* @vite-ignore */ pathToFileURL(join(REPO_BIN_DIR, 'usage-content.js')).href
    )) as { getUsageContent: (version?: string) => string };
    expect(() => mod.getUsageContent()).toThrow(/version/);
    expect(mod.getUsageContent('1.2.3').startsWith('## CyberUI (cyberui-2045 v1.2.3)')).toBe(true);
  });
});

describe('init: usage text', { timeout: CLI_TIMEOUT }, () => {
  it('--help lists every target flag and --inline, and writes nothing', () => {
    const { status, stdout } = sb.run('--help');
    expect(status).toBe(0);
    for (const flag of ['--claude', '--gemini', '--cursor', '--copilot', '--agents', '--all', '--inline', '--dry-run']) {
      expect(stdout).toContain(flag);
    }
    expect(sb.snapshot()).toEqual({});
  });

  it('prints the same usage in a non-interactive shell with no target flags', () => {
    const { status, stdout } = sb.run();
    expect(status).toBe(0);
    expect(stdout).toContain('--gemini');
    expect(sb.snapshot()).toEqual({});
  });
});
