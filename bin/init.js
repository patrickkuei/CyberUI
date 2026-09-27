#!/usr/bin/env node

import { createInterface } from 'node:readline';
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getUsageContent } from './usage-content.js';
import { detectEol, findMarkedBlock, withEol } from './markers.js';
import { parseModeAnswer, parseTargetAnswer } from './prompts.js';

// ─── Constants ────────────────────────────────────────────────────────────────

const MARKER_START = '<!-- cyberui-2045:start -->';
const MARKER_END = '<!-- cyberui-2045:end -->';

// Each tool gets the guide the way it supports best (see
// docs/agent-instruction-files.md for the sources):
//
// - `import`: the guide lives in its own file and the tool's instruction file
//   gets a marked block holding one `@` import line. Both Claude Code and
//   Gemini CLI resolve the path relative to the importing file and skip `@`
//   inside code spans and fenced blocks, so the line stays plain text. Both
//   paths stay inside the project: Claude Code loads them without an
//   external-import approval prompt, and Gemini CLI only allows imports from
//   inside the project root.
// - `rules`: the tool has no import syntax but reads a directory of rule files,
//   so the guide goes in a rule file of its own, with the frontmatter the tool
//   needs above it.
// - no `own`: the tool has neither (AGENTS.md), so the guide is always pasted
//   into its instruction file between the markers.
//
// `inlineFile` is where the guide is pasted with --inline (and where older
// versions of init always pasted it, so it is also where a migration looks).

// Cursor: `alwaysApply: true` is the "Always Apply" rule type, so no globs.
// The description shows in Cursor's rules UI. Plain YAML, no quotes or colons.
const CURSOR_FRONTMATTER =
  '---\ndescription: Usage guide for the cyberui-2045 React UI library (components, hooks, theming)\nalwaysApply: true\n---\n\n';
// Copilot: comma-separated globs, relative to the repo root. The guide is about
// writing React/TS code and CSS token overrides against this library, so it
// applies to script and stylesheet files, not to (say) docs or backend config.
const COPILOT_FRONTMATTER = '---\napplyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx,**/*.css"\n---\n\n';

const TARGETS = {
  claude: {
    flag: '--claude',
    name: 'Claude Code',
    inlineFile: 'CLAUDE.md',
    own: { kind: 'import', file: '.claude/cyberui.md', importLine: '@.claude/cyberui.md' },
  },
  gemini: {
    flag: '--gemini',
    name: 'Gemini CLI',
    inlineFile: 'GEMINI.md',
    own: { kind: 'import', file: '.gemini/cyberui.md', importLine: '@./.gemini/cyberui.md' },
  },
  cursor: {
    flag: '--cursor',
    name: 'Cursor',
    inlineFile: '.cursorrules',
    own: { kind: 'rules', file: '.cursor/rules/cyberui.mdc', frontmatter: CURSOR_FRONTMATTER },
  },
  copilot: {
    flag: '--copilot',
    name: 'GitHub Copilot',
    inlineFile: '.github/copilot-instructions.md',
    own: { kind: 'rules', file: '.github/instructions/cyberui.instructions.md', frontmatter: COPILOT_FRONTMATTER },
  },
  agents: {
    flag: '--agents',
    name: 'AGENTS.md standard',
    inlineFile: 'AGENTS.md',
    own: null,
  },
};

// Where the guide goes for `target` in `mode`, for menus and usage text.
function describeTarget(target, mode) {
  if (!target.own || mode === 'inline') return target.inlineFile;
  if (target.own.kind === 'import') return `${target.own.file}, imported from ${target.inlineFile}`;
  return target.own.file;
}

// ─── Arg parsing ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const inlineFlag = args.includes('--inline');

let selectedKeys = [];
if (args.includes('--all')) {
  selectedKeys = Object.keys(TARGETS);
} else {
  selectedKeys = Object.keys(TARGETS).filter((key) => args.includes(TARGETS[key].flag));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (args.includes('--help') || args.includes('-h')) {
    printUsage();
    return;
  }

  // First, before any prompt: a broken install should fail before the user
  // has answered questions.
  const version = readPackageVersion();

  console.log('\n  cyberui-2045 — AI assistant setup\n');

  let mode = inlineFlag ? 'inline' : 'own';

  if (selectedKeys.length === 0) {
    if (!process.stdin.isTTY) {
      // Non-interactive (CI / piped input)
      console.log('  Non-interactive environment detected. Run it with a target flag:\n');
      printUsage();
      process.exit(0);
    }
    selectedKeys = await promptTargets(mode);
    if (!inlineFlag && selectedKeys.some((key) => TARGETS[key].own)) {
      mode = await promptMode(selectedKeys);
    }
  }

  if (selectedKeys.length === 0) {
    console.log('\n  Nothing written. Exiting.\n');
    process.exit(0);
  }

  if (inlineFlag && !selectedKeys.some((key) => TARGETS[key].own)) {
    console.warn('  Warning: --inline has no effect here: AGENTS.md always gets the guide inline.');
  }

  const guide = getUsageContent(version);

  console.log(isDryRun ? '\n  [dry-run] Would write:\n' : '');

  let skipped = false;
  for (const key of selectedKeys) {
    const plan = planTarget(TARGETS[key], mode, guide);
    if (plan.problem) {
      skipped = true;
      console.error(
        `  ✗  ${'Skipped'.padEnd(9)} ${plan.problem.file} — ${plan.problem.text}. Fix or remove the marker by hand, then re-run init. Nothing was written for ${TARGETS[key].name}.`,
      );
      continue;
    }
    for (const write of plan.writes) apply(write);
  }

  if (skipped) {
    process.exitCode = 1;
    console.error('\n  Finished with errors: see the skipped files above.\n');
  } else if (isDryRun) {
    console.log('  Dry run: nothing was written.\n');
  } else {
    console.log('\n  Done! Your AI assistant now has CyberUI context.\n');
  }
}

function printUsage() {
  const line = (flag, text) => `    npx cyberui-2045 init ${flag.padEnd(9)} # ${text}`;
  const lines = Object.values(TARGETS).map((t) =>
    line(t.flag, `${t.name}: ${describeTarget(t, 'own')}${t.own ? '' : ' (always inline)'}`),
  );
  console.log(`  Usage: npx cyberui-2045 init [targets] [--inline] [--dry-run]

  Targets (combine as many as you like; none opens an interactive menu):
${lines.join('\n')}
${line('--all', 'all of the above')}

  Options:
    --inline    paste the whole guide into CLAUDE.md, GEMINI.md, .cursorrules or
                .github/copilot-instructions.md instead of its own file
    --dry-run   show every file that would be written, and write nothing
    --help      show this help
`);
}

// ─── Interactive prompt ───────────────────────────────────────────────────────

function ask(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function isSetUp(target) {
  if (target.own && existsSync(join(process.cwd(), target.own.file))) return true;
  const inline = readIfExists(target.inlineFile);
  return inline !== null && inline.includes(MARKER_START);
}

async function promptTargets(mode) {
  const keys = Object.keys(TARGETS);

  console.log('  Which AI assistant should get the CyberUI usage guide?\n');
  keys.forEach((key, i) => {
    const target = TARGETS[key];
    const status = isSetUp(target) ? ' (update)' : '';
    console.log(`    ${i + 1}. ${target.name.padEnd(18)} → ${describeTarget(target, mode)}${status}`);
  });
  console.log(`    ${keys.length + 1}. All of the above`);
  console.log('\n  Enter number(s) separated by commas (e.g. 1,3), or press Enter to cancel:');

  return parseTargetAnswer(await ask('  > '), keys);
}

async function promptMode(keys) {
  const targets = keys.map((key) => TARGETS[key]);
  const withOwn = targets.filter((t) => t.own);

  console.log('\n  Put the guide in its own file (recommended) or inline?\n');
  console.log('    1. Own file — the tool\'s file stays short; upgrades only rewrite the guide file');
  for (const t of withOwn) console.log(`         ${t.name}: ${describeTarget(t, 'own')}`);
  console.log('    2. Inline — paste the whole guide into');
  for (const t of withOwn) console.log(`         ${t.name}: ${t.inlineFile}`);
  if (targets.some((t) => !t.own)) console.log('\n  (AGENTS.md always gets the guide inline.)');
  console.log('\n  Enter 1 or 2 (press Enter for own file):');

  for (;;) {
    const mode = parseModeAnswer(await ask('  > '));
    if (mode !== null) return mode;
    console.log('  Please enter 1 (own file) or 2 (inline).');
  }
}

// ─── Package version ──────────────────────────────────────────────────────────

// The version of this installed package, for the guide's heading. Uses
// fileURLToPath (not URL.pathname, which is `/C:/...` on Windows and can't be
// opened). No hard-coded fallback: package.json always ships with the package,
// and a guessed version would put a wrong heading in the user's file.
function readPackageVersion() {
  const pkgPath = fileURLToPath(new URL('../package.json', import.meta.url));
  let pkg;
  try {
    pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  } catch (err) {
    throw new Error(`Could not read the cyberui-2045 version from ${pkgPath}: ${err.message}`);
  }
  if (typeof pkg.version !== 'string' || pkg.version === '') {
    throw new Error(`No "version" field in ${pkgPath}`);
  }
  return pkg.version;
}

// ─── Plan writes ──────────────────────────────────────────────────────────────
//
// Planners return what they would write — { file, action, preview, next,
// note? } — without touching disk. `next` is the file's full new content (null
// to delete it), `preview` is what --dry-run shows, and `action` is one of
// Created / Appended / Updated / Migrated / Removed / Deleted / Unchanged.
//
// Every write keeps the line ending the file already uses, so a CRLF checkout
// with an up-to-date guide is reported Unchanged instead of rewritten.

function readIfExists(file) {
  const filePath = join(process.cwd(), file);
  return existsSync(filePath) ? readFileSync(filePath, 'utf8') : null;
}

// All writes for one target, or { problem } when its instruction file has
// broken markers — then nothing is written for that target at all, so a guide
// file is never left behind with nothing importing it.
function planTarget(target, mode, guide) {
  const inlineFile = target.inlineFile;
  const existing = readIfExists(inlineFile);
  const found = existing === null ? { kind: 'none' } : findMarkedBlock(existing, MARKER_START, MARKER_END);
  if (found.kind === 'malformed') return { problem: { file: inlineFile, text: found.problem } };

  const own = target.own;

  if (!own || mode === 'inline') {
    const write = planMarkedBlock(inlineFile, existing, found, guide);
    if (own && existsSync(join(process.cwd(), own.file))) {
      write.note = own.kind === 'import'
        ? `${own.file} is no longer imported; delete it if nothing else uses it`
        : `${own.file} still exists, so ${target.name} loads the guide twice; delete it to keep only the inline copy`;
    }
    return { writes: [write] };
  }

  // The guide file first, so an import never points at a file not yet written.
  const writes = [planOwnFile(own.file, `${own.frontmatter ?? ''}${guide}`)];

  if (own.kind === 'import') {
    if (found.kind === 'block' && found.body === own.importLine) {
      // Already imported: leave the file byte-for-byte alone, so upgrades only
      // ever touch the guide file.
      writes.push({ file: inlineFile, action: 'Unchanged', preview: markedBlock(own.importLine), next: existing });
    } else {
      const write = planMarkedBlock(inlineFile, existing, found, own.importLine);
      // An empty block had no guide in it, so filling it is a plain update.
      if (found.kind === 'block' && found.body !== '') {
        write.action = 'Migrated';
        write.note = `replaced the inline guide with ${own.importLine}`;
      }
      writes.push(write);
    }
  } else if (found.kind === 'block') {
    // A guide pasted into the legacy shared file by an older init: take it out,
    // now that the rule file carries it.
    writes.push(planRemoveBlock(inlineFile, existing, found, own.file));
  }
  return { writes };
}

function markedBlock(body) {
  return `${MARKER_START}\n${body}\n${MARKER_END}`;
}

// Put `body` between the markers in `file`: replace the existing marked block,
// otherwise append one (or create the file).
function planMarkedBlock(file, existing, found, body) {
  const preview = markedBlock(body);
  if (existing === null) {
    return { file, action: 'Created', preview, next: `${preview}\n` };
  }
  const eol = detectEol(existing);
  const block = withEol(preview, eol);
  if (found.kind === 'none') {
    return { file, action: 'Appended', preview, next: `${existing.trimEnd()}${eol}${eol}${block}${eol}` };
  }
  const next = `${existing.slice(0, found.start)}${block}${existing.slice(found.end)}`;
  return { file, action: next === existing ? 'Unchanged' : 'Updated', preview, next };
}

// A file init owns outright: its whole content is `text`.
function planOwnFile(file, text) {
  const existing = readIfExists(file);
  const next = withEol(`${text}\n`, detectEol(existing));
  const action = existing === null ? 'Created' : existing === next ? 'Unchanged' : 'Updated';
  return { file, action, preview: text, next };
}

// Take the marked block out of `file`, with its line break and the blank line
// init put next to it; when the block ends the file, trailing whitespace before
// it goes too. Everything else stays. Delete the file if the block was all it
// held.
function planRemoveBlock(file, existing, found, movedTo) {
  const eol = detectEol(existing);
  const before = existing.slice(0, found.start);
  let after = existing.slice(found.end);
  if (after.startsWith(eol)) after = after.slice(eol.length);
  if ((before === '' || before.endsWith(eol + eol)) && after.startsWith(eol)) after = after.slice(eol.length);

  const rest = after.trim() === '' ? (before.trim() === '' ? '' : `${before.trimEnd()}${eol}`) : `${before}${after}`;

  // The dry-run preview shows exactly which lines go and what stays.
  const blockLines = linesOf(existing.slice(found.start, found.end));
  // Each block line takes its own line break with it; any more are blank lines.
  const blank = Math.max(0, countLineBreaks(existing) - countLineBreaks(rest) - blockLines.length);
  const removed = [
    `Takes out these ${plural(blockLines.length, 'line')}${blank ? `, plus ${plural(blank, 'blank line')} next to them` : ''}:`,
    excerpt(blockLines, '  - ', 3, 2),
  ];

  if (rest.trim() === '') {
    return {
      file,
      action: 'Deleted',
      preview: [...removed, 'Nothing else is left, so the file is deleted.'].join('\n'),
      next: null,
      note: `it held only the cyberui-2045 guide, now in ${movedTo}`,
    };
  }
  const restLines = linesOf(rest);
  return {
    file,
    action: 'Removed',
    preview: [
      ...removed,
      `Keeps the other ${plural(restLines.length, 'line')}, starting:`,
      excerpt(restLines, '    ', 3, 0),
    ].join('\n'),
    next: rest,
    note: `took out the cyberui-2045 block, now in ${movedTo}; kept the rest of the file`,
  };
}

// The lines of `text`, whatever its line ending, without the empty one after a
// final line break.
function linesOf(text) {
  const lines = text.split(/\r?\n/);
  if (lines[lines.length - 1] === '') lines.pop();
  return lines;
}

function countLineBreaks(text) {
  return (text.match(/\n/g) ?? []).length;
}

function plural(n, word) {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

// `lines`, each after `prefix`; when there are too many, only the first `head`
// and last `tail` of them around a "… (N more lines)" line.
function excerpt(lines, prefix, head, tail) {
  const shown = lines.length <= head + tail + 1
    ? lines
    : [...lines.slice(0, head), `… (${plural(lines.length - head - tail, 'more line')})`, ...lines.slice(lines.length - tail)];
  return shown.map((line) => `${prefix}${line}`.trimEnd()).join('\n');
}

// ─── Apply a planned write ────────────────────────────────────────────────────

function apply({ file, action, preview, next, note }) {
  const suffix = note ? ` — ${note}` : '';

  if (isDryRun) {
    console.log(`  ── ${file} (${action.toLowerCase()}${suffix}) ──\n${preview}\n`);
    return;
  }

  const filePath = join(process.cwd(), file);
  if (next === null) {
    rmSync(filePath);
  } else if (action !== 'Unchanged') {
    // Ensure parent directory exists (e.g. .github/instructions/ or .claude/)
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, next, 'utf8');
  }
  // 9 = the longest action, "Unchanged", so every file name lines up.
  console.log(`  ✓  ${action.padEnd(9)} ${file}${suffix}`);
}

// ─── Run ──────────────────────────────────────────────────────────────────────

main().catch((err) => {
  console.error('\n  Error:', err.message, '\n');
  process.exit(1);
});
