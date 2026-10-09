// `npx cyberui-2045 templates` and `npx cyberui-2045 create <template> [dir]`.
//
// `create` forks a template by running `npx tiged <repo>/packages/<template>
// <dir>` as a child process (tiged is not a dependency of this package, and
// must stay that way).
//
// Shell safety: on Windows, Node >= 20.12 refuses to spawn `npx.cmd` without
// `shell: true`, which makes the shell parse the command line. So both values
// that reach it are validated first: the template must be one of the names in
// templates.js, and the directory must match DIR_PATTERN (no spaces, quotes or
// shell metacharacters, and not starting with `-`, so it can't be read as a
// tiged option). Anything else is refused before anything runs.
//
// Every function takes its effects (spawn, output, cwd) as arguments so tests
// can run it without the network or a real child process.

import { existsSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { TEMPLATES, TEMPLATES_REPO, TEMPLATES_REPO_SLUG } from './templates.js';

// Letters, digits, `.` `_` `-` and path separators; the first character can't be `-`.
// No `:`, so a Windows drive letter is refused too: use a relative path.
export const DIR_PATTERN = /^[A-Za-z0-9._/\\][A-Za-z0-9._/\\-]*$/;

const names = () => TEMPLATES.map((t) => t.name).join(', ');

// The default runner. `run(command, args)` returns `{ status, error }` like
// spawnSync. The child shares our terminal so tiged's own output shows.
export function defaultRun(command, args) {
  if (process.platform === 'win32') {
    // One command string rather than command + args: with `shell: true` Node
    // only joins args with spaces anyway (and warns about it). Safe because
    // validateCreateArgs() only lets plain words through.
    return spawnSync([command, ...args].join(' '), { shell: true, stdio: 'inherit' });
  }
  return spawnSync(command, args, { stdio: 'inherit' });
}

function defaultIo() {
  return {
    log: (text) => console.log(text),
    error: (text) => console.error(text),
    run: defaultRun,
    cwd: process.cwd(),
  };
}

// ─── templates ────────────────────────────────────────────────────────────────

export function printTemplates(log) {
  const width = Math.max(...TEMPLATES.map((t) => t.name.length));
  const rows = TEMPLATES.map(
    (t) => `    ${t.name.padEnd(width)}  ${t.title}\n    ${' '.repeat(width)}  ${t.description}\n    ${' '.repeat(width)}  Preview: ${t.preview}`,
  );
  log(`\n  cyberui-2045 templates\n\n${rows.join('\n\n')}

  Start one:  npx cyberui-2045 create <template> [dir]
  Source:     ${TEMPLATES_REPO}
  This list ships with the package; the repository has the current list.
`);
}

export function templatesUsage() {
  return `  Usage: npx cyberui-2045 templates

  Lists the available app templates, with a live preview of each, and the
  repository they live in.

  Options:
    --help      show this help
`;
}

export function runTemplates(argv, io = {}) {
  const { log, error } = { ...defaultIo(), ...io };
  if (argv.includes('--help') || argv.includes('-h')) {
    log(templatesUsage());
    return 0;
  }
  const extra = argv.filter((a) => a !== 'templates');
  if (extra.length > 0) {
    error(`\n  Error: unexpected argument "${extra[0]}" for "templates".\n\n${templatesUsage()}`);
    return 1;
  }
  printTemplates(log);
  return 0;
}

// ─── create ───────────────────────────────────────────────────────────────────

export function createUsage() {
  return `  Usage: npx cyberui-2045 create <template> [dir] [--dry-run]

  Copies a template into a new directory (using \`npx tiged\`) so you can start
  an app from it. Needs network access and \`npx\`.

  Templates:
${TEMPLATES.map((t) => `    ${t.name.padEnd(12)} ${t.title}`).join('\n')}

  Arguments:
    <template>  one of the names above (run \`npx cyberui-2045 templates\` for details)
    [dir]       where to put it; defaults to the template name. Must not exist or be
                empty. Letters, digits, . _ - / \\ only; it can't start with -

  Options:
    --dry-run   print the command that would run, and run nothing
    --help      show this help

  Then: cd <dir> && npm install && npm run dev
`;
}

// Parse and validate `create` arguments. Returns `{ template, dir, dryRun }` or
// `{ help: true }` or `{ error }`.
export function validateCreateArgs(argv) {
  const rest = argv.slice(argv[0] === 'create' ? 1 : 0);
  if (rest.includes('--help') || rest.includes('-h')) return { help: true };

  const dryRun = rest.includes('--dry-run');
  const positional = [];
  for (const arg of rest) {
    if (arg === '--dry-run') continue;
    if (arg.startsWith('-')) {
      return { error: `unknown option "${arg}". Options: --dry-run, --help. A directory can't start with "-".` };
    }
    positional.push(arg);
  }

  if (positional.length === 0) {
    return { error: `no template given. Available: ${names()}. Run "npx cyberui-2045 templates" for details.` };
  }
  if (positional.length > 2) {
    return { error: `too many arguments (${positional.slice(2).map((a) => `"${a}"`).join(', ')}). Usage: create <template> [dir]` };
  }

  const [template, dirArg] = positional;
  // The whitelist is what keeps the template out of the shell command line.
  if (!TEMPLATES.some((t) => t.name === template)) {
    return { error: `unknown template "${template}". Available: ${names()}. Run "npx cyberui-2045 templates" for the list.` };
  }

  const dir = dirArg ?? template;
  if (!DIR_PATTERN.test(dir)) {
    return {
      error: `invalid directory "${dir}". Use only letters, digits, . _ - / \\ (no spaces or other characters), and don't start with "-".`,
    };
  }
  return { template, dir, dryRun };
}

// Why `dir` can't be used, or null when it can (missing, or an empty directory).
export function targetProblem(dir, cwd, exists = existsSync, stat = statSync, list = readdirSync) {
  const full = resolve(cwd, dir);
  if (!exists(full)) return null;
  if (!stat(full).isDirectory()) return `"${dir}" already exists and is not a directory.`;
  if (list(full).length > 0) {
    return `"${dir}" already exists and is not empty. Choose another directory, or empty it first.`;
  }
  return null;
}

export function runCreate(argv, io = {}) {
  const { log, error, run, cwd } = { ...defaultIo(), ...io };

  const parsed = validateCreateArgs(argv);
  if (parsed.help) {
    log(createUsage());
    return 0;
  }
  if (parsed.error) {
    error(`\n  Error: ${parsed.error}\n\n  Run "npx cyberui-2045 create --help" for usage.\n`);
    return 1;
  }

  const { template, dir, dryRun } = parsed;
  const problem = targetProblem(dir, cwd);
  if (problem) {
    error(`\n  Error: ${problem}\n`);
    return 1;
  }

  const command = 'npx';
  const commandArgs = ['tiged', `${TEMPLATES_REPO_SLUG}/packages/${template}`, dir];
  const printable = [command, ...commandArgs].join(' ');

  if (dryRun) {
    log(`\n  [dry-run] Would run:\n\n    ${printable}\n\n  Dry run: nothing was run.\n`);
    return 0;
  }

  log(`\n  Creating "${template}" in ${dir} ...\n    ${printable}\n`);
  const result = run(command, commandArgs, { cwd });

  if (result.error) {
    const missing = result.error.code === 'ENOENT';
    error(
      `\n  Error: ${missing ? 'could not find "npx" on your PATH. Install Node.js (which includes npx), then try again.' : `could not run "npx": ${result.error.message}`}\n`,
    );
    return 1;
  }
  if (result.status !== 0) {
    const how = result.status === null ? `was stopped by ${result.signal ?? 'a signal'}` : `failed (exit code ${result.status})`;
    error(
      `\n  Error: "${printable}" ${how}.\n  Check your network connection and that "npx" works, then try again. Nothing else was changed.\n`,
    );
    return 1;
  }

  log(`\n  Done! Next steps:\n\n    cd ${dir} && npm install && npm run dev\n`);
  return 0;
}
