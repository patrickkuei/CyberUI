// @vitest-environment node
// Tests for `npx cyberui-2045 templates` and `create` (bin/template-commands.js).
//
// Output and argument handling run the CLI as a child process, like the init
// tests. Anything that would spawn `npx tiged` runs in-process with an injected
// runner, so no test touches the network or starts a real `npx`.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { CLI_TIMEOUT, REPO_BIN_DIR, createInitSandbox, type InitSandbox } from './initHarness';

interface RunResult {
  status: number | null;
  signal?: string | null;
  error?: { code?: string; message: string };
}
type Runner = (command: string, args: string[], options?: unknown) => RunResult;
interface Commands {
  runCreate: (argv: string[], io?: { log?: (t: string) => void; error?: (t: string) => void; run?: Runner; cwd?: string }) => number;
  runTemplates: (argv: string[], io?: { log?: (t: string) => void; error?: (t: string) => void }) => number;
  validateCreateArgs: (argv: string[]) => { template?: string; dir?: string; dryRun?: boolean; help?: boolean; error?: string };
}

let commands: Commands;
let sb: InitSandbox;

beforeEach(async () => {
  sb = createInitSandbox();
  commands = (await import(/* @vite-ignore */ pathToFileURL(join(REPO_BIN_DIR, 'template-commands.js')).href)) as Commands;
});

afterEach(() => {
  sb.cleanup();
});

const TIGED_MONITORING = 'npx tiged patrickkuei/cyberui-templates/packages/monitoring';

// Run `create` in-process against the sandbox project directory.
function create(argv: string[], run?: Runner) {
  const out: string[] = [];
  const err: string[] = [];
  const calls: Array<{ command: string; args: string[] }> = [];
  const status = commands.runCreate(['create', ...argv], {
    log: (t) => out.push(t),
    error: (t) => err.push(t),
    cwd: sb.projectDir,
    run: (command, args, options) => {
      calls.push({ command, args });
      return run ? run(command, args, options) : { status: 0 };
    },
  });
  return { status, stdout: out.join('\n'), stderr: err.join('\n'), calls };
}

describe('templates', { timeout: CLI_TIMEOUT }, () => {
  it('lists each template with its description and live preview, plus the repo link', () => {
    const { status, stdout } = sb.run('templates');
    expect(status).toBe(0);
    expect(stdout).toContain('monitoring');
    expect(stdout).toContain('AI Product Monitoring');
    expect(stdout).toContain('https://patrickkuei.github.io/cyberui-templates/live/monitoring/');
    expect(stdout).toContain('agent-panel');
    expect(stdout).toContain('Agent Control Panel');
    expect(stdout).toContain('https://patrickkuei.github.io/cyberui-templates/live/agent-panel/');
    expect(stdout).toContain('https://github.com/patrickkuei/cyberui-templates');
    expect(stdout).toMatch(/repository has the current list/);
    expect(sb.snapshot()).toEqual({});
  });

  it('--help describes the command and writes nothing', () => {
    const { status, stdout } = sb.run('templates', '--help');
    expect(status).toBe(0);
    expect(stdout).toContain('Usage: npx cyberui-2045 templates');
    expect(stdout).not.toContain('Preview:');
  });

  it('rejects an unexpected argument with a non-zero exit', () => {
    const { status, stderr } = sb.run('templates', 'extra');
    expect(status).toBe(1);
    expect(stderr).toContain('unexpected argument "extra"');
  });
});

describe('create: help and dry-run', { timeout: CLI_TIMEOUT }, () => {
  it('--help documents the arguments, the default directory and --dry-run', () => {
    const { status, stdout } = sb.run('create', '--help');
    expect(status).toBe(0);
    expect(stdout).toContain('Usage: npx cyberui-2045 create <template> [dir]');
    expect(stdout).toContain('monitoring');
    expect(stdout).toContain('agent-panel');
    expect(stdout).toContain('--dry-run');
    expect(stdout).toContain('defaults to the template name');
  });

  it('--dry-run prints the exact command and creates nothing', () => {
    const { status, stdout } = sb.run('create', 'monitoring', 'my-app', '--dry-run');
    expect(status).toBe(0);
    expect(stdout).toContain(`${TIGED_MONITORING} my-app`);
    expect(stdout).toContain('nothing was run');
    expect(sb.snapshot()).toEqual({});
  });

  it('--dry-run works with the options before the arguments, and defaults dir to the template name', () => {
    const { status, stdout } = sb.run('create', '--dry-run', 'agent-panel');
    expect(status).toBe(0);
    expect(stdout).toContain('npx tiged patrickkuei/cyberui-templates/packages/agent-panel agent-panel');
  });

  it('--dry-run does not call the runner', () => {
    const { status, calls } = create(['monitoring', 'my-app', '--dry-run']);
    expect(status).toBe(0);
    expect(calls).toEqual([]);
  });
});

describe('create: running tiged', () => {
  it('runs npx tiged with the template path and the directory, then prints the next steps', () => {
    const { status, stdout, calls } = create(['monitoring', 'my-app']);
    expect(status).toBe(0);
    expect(calls).toEqual([
      { command: 'npx', args: ['tiged', 'patrickkuei/cyberui-templates/packages/monitoring', 'my-app'] },
    ]);
    expect(stdout).toContain('cd my-app && npm install && npm run dev');
  });

  it('defaults the directory to the template name', () => {
    const { calls } = create(['agent-panel']);
    expect(calls[0].args).toEqual(['tiged', 'patrickkuei/cyberui-templates/packages/agent-panel', 'agent-panel']);
  });

  it('accepts nested and relative directories', () => {
    for (const dir of ['apps/dash', 'apps\\dash', '../dash', './dash', 'my_app-2.0']) {
      expect(create(['monitoring', dir]).status).toBe(0);
    }
  });

  it('fails with a non-zero exit and a clear message when tiged fails', () => {
    const { status, stdout, stderr } = create(['monitoring', 'my-app'], () => ({ status: 1 }));
    expect(status).toBe(1);
    expect(stderr).toContain('failed (exit code 1)');
    expect(stderr).toContain('network');
    expect(stdout).not.toContain('Next steps');
  });

  it('fails clearly when npx is missing', () => {
    const { status, stderr } = create(['monitoring', 'my-app'], () => ({
      status: null,
      error: { code: 'ENOENT', message: 'spawn npx ENOENT' },
    }));
    expect(status).toBe(1);
    expect(stderr).toContain('could not find "npx"');
  });

  it('fails when the process is stopped by a signal', () => {
    const { status, stderr } = create(['monitoring', 'my-app'], () => ({ status: null, signal: 'SIGTERM' }));
    expect(status).toBe(1);
    expect(stderr).toContain('SIGTERM');
  });
});

describe('create: target directory', () => {
  it('refuses a non-empty directory and does not run anything', () => {
    sb.write('my-app/keep.txt', 'mine');
    const { status, stderr, calls } = create(['monitoring', 'my-app']);
    expect(status).toBe(1);
    expect(stderr).toContain('already exists and is not empty');
    expect(calls).toEqual([]);
  });

  it('also refuses in --dry-run, since the real run would fail', () => {
    sb.write('my-app/keep.txt', 'mine');
    const { status, stderr, stdout } = create(['monitoring', 'my-app', '--dry-run']);
    expect(status).toBe(1);
    expect(stderr).toContain('not empty');
    expect(stdout).not.toContain('Would run');
  });

  it('refuses a path that is a file', () => {
    sb.write('my-app', 'a file');
    const { status, stderr, calls } = create(['monitoring', 'my-app']);
    expect(status).toBe(1);
    expect(stderr).toContain('not a directory');
    expect(calls).toEqual([]);
  });

  it('allows an existing empty directory', () => {
    mkdirSync(join(sb.projectDir, 'my-app'));
    const { status, calls } = create(['monitoring', 'my-app']);
    expect(status).toBe(0);
    expect(calls).toHaveLength(1);
  });

  it('end to end: refuses a non-empty directory with a non-zero exit', () => {
    writeFileSync(join(sb.projectDir, 'x.txt'), '');
    const { status, stderr } = sb.run('create', 'monitoring', '.');
    expect(status).toBe(1);
    expect(stderr).toContain('not empty');
  });
});

describe('create: input validation (nothing reaches the shell)', { timeout: CLI_TIMEOUT }, () => {
  it.each([
    ['an unknown template', ['nope']],
    ['a template with a path in it', ['../monitoring']],
    ['a template with a shell command in it', ['monitoring;calc']],
    ['a template name in the wrong case', ['Monitoring']],
    ['a template with a substitution', ['$(whoami)']],
  ])('rejects %s', (_label, argv) => {
    const { status, stderr, calls } = create(argv);
    expect(status).toBe(1);
    expect(stderr).toContain('unknown template');
    expect(calls).toEqual([]);
  });

  it.each([
    'my app',
    'a;b',
    'a&b',
    'a&&b',
    'a|b',
    'a>b',
    'a<b',
    'a`b',
    '$(whoami)',
    '$HOME',
    '%PATH%',
    'a"b',
    "a'b",
    'a^b',
    'a*b',
    'a?b',
    'a(b)',
    'C:\\x',
    'caf\u00e9',
    'a\nb',
    '',
  ])('rejects the directory %j', (dir) => {
    const { status, stderr, calls } = create(['monitoring', dir]);
    expect(status).toBe(1);
    expect(stderr).toContain('invalid directory');
    expect(calls).toEqual([]);
  });

  it('rejects a directory starting with -, and unknown options', () => {
    for (const arg of ['-rf', '--force', '-x']) {
      const { status, stderr, calls } = create(['monitoring', arg]);
      expect(status).toBe(1);
      expect(stderr).toContain('unknown option');
      expect(calls).toEqual([]);
    }
  });

  it('rejects a missing template and extra arguments', () => {
    const none = create([]);
    expect(none.status).toBe(1);
    expect(none.stderr).toContain('no template given');
    expect(none.stderr).toContain('monitoring');

    const many = create(['monitoring', 'a', 'b']);
    expect(many.status).toBe(1);
    expect(many.stderr).toContain('too many arguments');
  });

  it('end to end: a rejected directory exits non-zero without creating anything', () => {
    const { status, stderr } = sb.run('create', 'monitoring', 'a;touch pwned');
    expect(status).toBe(1);
    expect(stderr).toMatch(/too many arguments|invalid directory/);
    const quoted = sb.run('create', 'monitoring', 'a;touch-pwned');
    expect(quoted.status).toBe(1);
    expect(quoted.stderr).toContain('invalid directory');
    expect(sb.snapshot()).toEqual({});
  });
});

describe('init points at the templates command', { timeout: CLI_TIMEOUT }, () => {
  const POINTER = 'npx cyberui-2045 templates';

  it('ends its output with a one-line pointer', () => {
    const { status, stdout } = sb.run('--agents');
    expect(status).toBe(0);
    expect(stdout.trimEnd().split('\n').pop()).toContain(POINTER);
  });

  it('prints it after a dry run too', () => {
    const { stdout } = sb.run('--agents', '--dry-run');
    expect(stdout.trimEnd().split('\n').pop()).toContain(POINTER);
  });

  it('writes the pointer to no file', () => {
    expect(sb.run('--all').status).toBe(0);
    for (const content of Object.values(sb.snapshot())) {
      expect(content).not.toContain('cyberui-2045 templates');
    }
  });

  it('--help lists the new commands', () => {
    const { stdout } = sb.run('--help');
    expect(stdout).toContain('npx cyberui-2045 templates');
    expect(stdout).toContain('npx cyberui-2045 create <template> [dir]');
  });

  it('still treats the word "init" as before', () => {
    const { status, stdout } = sb.run('init', '--agents', '--dry-run');
    expect(status).toBe(0);
    expect(stdout).toContain('AGENTS.md');
  });
});
