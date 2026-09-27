// Shared harness for the `npx cyberui-2045 init` CLI tests (bin/init.js).
//
// `createInitSandbox()` copies bin/ into a throwaway package directory next to
// a fake package.json (so the version the CLI reads is known) and makes an
// empty throwaway project directory to run the CLI in. Nothing is written into
// the repo.
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative } from 'node:path';

export const REPO_BIN_DIR = join(__dirname, '..', '..', 'bin');
export const FAKE_VERSION = '9.9.9-test';
// Each test spawns node a few times; allow for a slow or busy machine.
export const CLI_TIMEOUT = 30_000;
export const HEADING = `## CyberUI (cyberui-2045 v${FAKE_VERSION})`;

export const START = '<!-- cyberui-2045:start -->';
export const END = '<!-- cyberui-2045:end -->';
export const block = (body: string) => `${START}\n${body}\n${END}`;
export const CLAUDE_IMPORT_BLOCK = block('@.claude/cyberui.md');
export const GEMINI_IMPORT_BLOCK = block('@./.gemini/cyberui.md');
export const USER_NOTES = '# My project\n\nKeep the neon at 11.\n';

// Frontmatter the own-file modes put above the guide. These strings are the
// spec: see docs/agent-instruction-files.md for why these fields and values.
export const CURSOR_FRONTMATTER =
  '---\ndescription: Usage guide for the cyberui-2045 React UI library (components, hooks, theming)\nalwaysApply: true\n---\n\n';
export const COPILOT_FRONTMATTER = '---\napplyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx,**/*.css"\n---\n\n';

export interface InitSandbox {
  root: string;
  pkgDir: string;
  projectDir: string;
  run: (...args: string[]) => { status: number | null; stdout: string; stderr: string };
  path: (file: string) => string;
  read: (file: string) => string;
  exists: (file: string) => boolean;
  write: (file: string, content: string) => void;
  snapshot: () => Record<string, string>;
  cleanup: () => void;
}

export function createInitSandbox(): InitSandbox {
  const root = mkdtempSync(join(tmpdir(), 'cyberui-init-'));
  const pkgDir = join(root, 'pkg');
  const projectDir = join(root, 'project');
  mkdirSync(projectDir, { recursive: true });
  cpSync(REPO_BIN_DIR, join(pkgDir, 'bin'), { recursive: true });
  // `type: module` as in the real package.json, so node loads bin/ as ESM
  // without a MODULE_TYPELESS_PACKAGE_JSON warning on stderr.
  writeFileSync(
    join(pkgDir, 'package.json'),
    JSON.stringify({ name: 'cyberui-2045', version: FAKE_VERSION, type: 'module' }),
  );

  const path = (file: string) => join(projectDir, file);

  return {
    root,
    pkgDir,
    projectDir,
    run: (...args) => {
      const result = spawnSync(process.execPath, [join(pkgDir, 'bin', 'init.js'), ...args], {
        cwd: projectDir,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      return { status: result.status, stdout: result.stdout, stderr: result.stderr };
    },
    path,
    read: (file) => readFileSync(path(file), 'utf8'),
    exists: (file) => existsSync(path(file)),
    write: (file, content) => {
      mkdirSync(dirname(path(file)), { recursive: true });
      writeFileSync(path(file), content);
    },
    snapshot: () => snapshotDir(projectDir),
    cleanup: () => rmSync(root, { recursive: true, force: true }),
  };
}

// Every file and directory under `dir`, keyed by forward-slash relative path,
// with each file's exact content (directories map to a marker), so two
// snapshots are equal only if the tree is byte-for-byte the same.
export function snapshotDir(dir: string): Record<string, string> {
  const out: Record<string, string> = {};
  const walk = (current: string) => {
    for (const name of readdirSync(current)) {
      const full = join(current, name);
      const key = relative(dir, full).split('\\').join('/');
      if (statSync(full).isDirectory()) {
        out[`${key}/`] = '<dir>';
        walk(full);
      } else {
        out[key] = readFileSync(full, 'latin1');
      }
    }
  };
  walk(dir);
  return out;
}
