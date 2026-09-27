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

describe('init: package version lookup', () => {
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
