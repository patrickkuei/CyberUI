// @vitest-environment node
// End-to-end tests for the `npx cyberui-2045 init` CLI (bin/init.js).
//
// Each test copies bin/ into a throwaway package directory next to a fake
// package.json (so the version the CLI reads is known), then runs the CLI as a
// child process with a throwaway project directory as its cwd. Nothing is
// written into the repo.
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

const REPO_BIN_DIR = join(__dirname, '..', '..', 'bin');
const FAKE_VERSION = '9.9.9-test';
// Each test spawns node a few times; allow for a slow or busy machine.
const CLI_TIMEOUT = 30_000;
const HEADING = `## CyberUI (cyberui-2045 v${FAKE_VERSION})`;

let root: string;
let pkgDir: string;
let projectDir: string;

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'cyberui-init-'));
  pkgDir = join(root, 'pkg');
  projectDir = join(root, 'project');
  mkdirSync(projectDir, { recursive: true });
  cpSync(REPO_BIN_DIR, join(pkgDir, 'bin'), { recursive: true });
  writeFileSync(
    join(pkgDir, 'package.json'),
    JSON.stringify({ name: 'cyberui-2045', version: FAKE_VERSION }),
  );
});

afterEach(() => {
  rmSync(root, { recursive: true, force: true });
});

function runInit(...args: string[]) {
  const result = spawnSync(process.execPath, [join(pkgDir, 'bin', 'init.js'), ...args], {
    cwd: projectDir,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  return { status: result.status, stdout: result.stdout, stderr: result.stderr };
}

const START = '<!-- cyberui-2045:start -->';
const END = '<!-- cyberui-2045:end -->';
const IMPORT_BLOCK = `${START}\n@.claude/cyberui.md\n${END}`;
const USER_NOTES = '# My project\n\nKeep the neon at 11.\n';

const claudeMd = () => join(projectDir, 'CLAUDE.md');
const guideFile = () => join(projectDir, '.claude', 'cyberui.md');
const read = (file: string) => readFileSync(file, 'utf8');

// The guide text itself, as `init --claude --inline` puts it between the markers.
function inlineGuide() {
  expect(runInit('--agents').status).toBe(0);
  const agents = read(join(projectDir, 'AGENTS.md'));
  rmSync(join(projectDir, 'AGENTS.md'));
  return agents.slice(START.length + 1, agents.indexOf(END) - 1);
}

describe('init --claude (import mode, the default)', { timeout: CLI_TIMEOUT }, () => {
  it('writes the guide to .claude/cyberui.md and only the import block to CLAUDE.md', () => {
    const guide = inlineGuide();
    const { status, stdout } = runInit('--claude');
    expect(status).toBe(0);
    expect(read(claudeMd())).toBe(`${IMPORT_BLOCK}\n`);
    expect(read(guideFile())).toBe(`${guide}\n`);
    expect(read(guideFile()).startsWith(HEADING)).toBe(true);
    expect(stdout).toContain('.claude/cyberui.md');
  });

  it('appends the import block to an existing CLAUDE.md without touching the rest', () => {
    writeFileSync(claudeMd(), USER_NOTES);
    expect(runInit('--claude').status).toBe(0);
    expect(read(claudeMd())).toBe(`${USER_NOTES.trimEnd()}\n\n${IMPORT_BLOCK}\n`);
    expect(existsSync(guideFile())).toBe(true);
  });

  it('is idempotent: a second run changes nothing', () => {
    writeFileSync(claudeMd(), USER_NOTES);
    runInit('--claude');
    const firstClaude = read(claudeMd());
    const firstGuide = read(guideFile());
    const { status, stdout } = runInit('--claude');
    expect(status).toBe(0);
    expect(read(claudeMd())).toBe(firstClaude);
    expect(read(guideFile())).toBe(firstGuide);
    expect(stdout).toMatch(/Unchanged\s+CLAUDE\.md/);
  });

  it('on upgrade rewrites only .claude/cyberui.md and leaves CLAUDE.md alone', () => {
    writeFileSync(claudeMd(), `${USER_NOTES}\n${IMPORT_BLOCK}\n\nMore notes after the block.\n`);
    const before = read(claudeMd());
    mkdirSync(join(projectDir, '.claude'));
    writeFileSync(guideFile(), '## CyberUI (cyberui-2045 v0.0.1)\n\nstale guide\n');
    expect(runInit('--claude').status).toBe(0);
    expect(read(claudeMd())).toBe(before);
    expect(read(guideFile()).startsWith(HEADING)).toBe(true);
    expect(read(guideFile())).not.toContain('stale guide');
  });

  it('leaves an already-importing CLAUDE.md byte-for-byte alone, even with CRLF line endings', () => {
    const crlf = `${USER_NOTES}\n${IMPORT_BLOCK}\n`.replace(/\n/g, '\r\n');
    writeFileSync(claudeMd(), crlf);
    expect(runInit('--claude').status).toBe(0);
    expect(read(claudeMd())).toBe(crlf);
  });

  it('migrates an existing inline block to the import block and says so', () => {
    const guide = inlineGuide();
    writeFileSync(
      claudeMd(),
      `${USER_NOTES}\n${START}\n## CyberUI (cyberui-2045 v2.0.0)\n\nold inline guide\n${END}\n\nTail notes.\n`,
    );
    const { status, stdout } = runInit('--claude');
    expect(status).toBe(0);
    expect(read(claudeMd())).toBe(`${USER_NOTES}\n${IMPORT_BLOCK}\n\nTail notes.\n`);
    expect(read(guideFile())).toBe(`${guide}\n`);
    expect(stdout).toMatch(/Migrated\s+CLAUDE\.md/);
    expect(stdout).toContain('@.claude/cyberui.md');

    // ...and running it again is a no-op.
    const second = runInit('--claude');
    expect(second.stdout).not.toMatch(/Migrated/);
    expect(read(claudeMd())).toBe(`${USER_NOTES}\n${IMPORT_BLOCK}\n\nTail notes.\n`);
  });

  it('--dry-run shows both the CLAUDE.md block and .claude/cyberui.md, and writes nothing', () => {
    const { status, stdout } = runInit('--claude', '--dry-run');
    expect(status).toBe(0);
    expect(stdout).toContain('── CLAUDE.md');
    expect(stdout).toContain(IMPORT_BLOCK);
    expect(stdout).toContain('── .claude/cyberui.md');
    expect(stdout).toContain(HEADING);
    expect(existsSync(claudeMd())).toBe(false);
    expect(existsSync(join(projectDir, '.claude'))).toBe(false);
  });
});

describe('init --claude --inline', { timeout: CLI_TIMEOUT }, () => {
  it('pastes the guide into CLAUDE.md between the markers, as before', () => {
    const guide = inlineGuide();
    expect(runInit('--claude', '--inline').status).toBe(0);
    expect(read(claudeMd())).toBe(`${START}\n${guide}\n${END}\n`);
    expect(existsSync(join(projectDir, '.claude'))).toBe(false);
  });

  it('is idempotent', () => {
    writeFileSync(claudeMd(), USER_NOTES);
    runInit('--claude', '--inline');
    const first = read(claudeMd());
    expect(runInit('--claude', '--inline').status).toBe(0);
    expect(read(claudeMd())).toBe(first);
  });

  it('replaces an existing import block with the inline guide', () => {
    const guide = inlineGuide();
    writeFileSync(claudeMd(), `${USER_NOTES}\n${IMPORT_BLOCK}\n`);
    mkdirSync(join(projectDir, '.claude'));
    writeFileSync(guideFile(), `${guide}\n`);
    const { status, stdout } = runInit('--claude', '--inline');
    expect(status).toBe(0);
    expect(read(claudeMd())).toBe(`${USER_NOTES}\n${START}\n${guide}\n${END}\n`);
    // The now-unused guide file is the user's to delete; init only points it out.
    expect(existsSync(guideFile())).toBe(true);
    expect(stdout).toContain('.claude/cyberui.md is no longer imported');
  });

  it('--dry-run shows the inline block only', () => {
    const { stdout } = runInit('--claude', '--inline', '--dry-run');
    expect(stdout).toContain(`${START}\n${HEADING}`);
    expect(stdout).not.toContain('.claude/cyberui.md');
    expect(existsSync(claudeMd())).toBe(false);
  });
});

describe('init: other targets keep the inline block', { timeout: CLI_TIMEOUT }, () => {
  it.each([
    ['--cursor', '.cursorrules'],
    ['--copilot', '.github/copilot-instructions.md'],
    ['--agents', 'AGENTS.md'],
  ])('%s writes the inline guide to %s', (flag, file) => {
    expect(runInit(flag).status).toBe(0);
    const content = read(join(projectDir, file));
    expect(content.startsWith(`${START}\n${HEADING}`)).toBe(true);
    expect(content).not.toContain('@.claude/cyberui.md');
    expect(existsSync(join(projectDir, '.claude'))).toBe(false);
  });

  it('--all imports for Claude and inlines everywhere else', () => {
    expect(runInit('--all').status).toBe(0);
    expect(read(claudeMd())).toBe(`${IMPORT_BLOCK}\n`);
    expect(read(guideFile()).startsWith(HEADING)).toBe(true);
    for (const file of ['.cursorrules', '.github/copilot-instructions.md', 'AGENTS.md']) {
      expect(read(join(projectDir, file)).startsWith(`${START}\n${HEADING}`)).toBe(true);
    }
  });

  it('--all --inline inlines for Claude too', () => {
    expect(runInit('--all', '--inline').status).toBe(0);
    expect(read(claudeMd()).startsWith(`${START}\n${HEADING}`)).toBe(true);
    expect(existsSync(guideFile())).toBe(false);
  });
});

describe('init: package version lookup', { timeout: CLI_TIMEOUT }, () => {
  it('puts the installed package.json version in the guide heading', () => {
    const { status, stdout } = runInit('--cursor', '--dry-run');
    expect(status).toBe(0);
    expect(stdout).toContain(HEADING);
  });

  it('writes the installed version into the target file', () => {
    expect(runInit('--agents').status).toBe(0);
    expect(readFileSync(join(projectDir, 'AGENTS.md'), 'utf8')).toContain(HEADING);
  });

  it('fails loudly instead of guessing a version when package.json is unreadable', () => {
    rmSync(join(pkgDir, 'package.json'));
    const { status, stderr } = runInit('--cursor');
    expect(status).not.toBe(0);
    expect(stderr).toContain('package.json');
    expect(existsSync(join(projectDir, '.cursorrules'))).toBe(false);
  });
});
