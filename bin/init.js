#!/usr/bin/env node

import { createInterface } from 'node:readline';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getUsageContent } from './usage-content.js';
import { replaceMarkedBlock } from './markers.js';

// ─── Constants ────────────────────────────────────────────────────────────────

const MARKER_START = '<!-- cyberui-2045:start -->';
const MARKER_END = '<!-- cyberui-2045:end -->';

// Claude Code import mode: the guide lives in its own file and CLAUDE.md gets a
// marked block holding one `@` import line. The path resolves relative to
// CLAUDE.md and stays inside the project, so Claude Code loads it without an
// external-imports approval prompt. The line must stay plain text — Claude Code
// skips `@` imports inside code spans and fenced blocks.
const CLAUDE_GUIDE_FILE = '.claude/cyberui.md';
const CLAUDE_IMPORT_LINE = `@${CLAUDE_GUIDE_FILE}`;

const TARGETS = {
  claude: {
    label: 'Claude Code   → CLAUDE.md',
    file: 'CLAUDE.md',
  },
  cursor: {
    label: 'Cursor        → .cursorrules',
    file: '.cursorrules',
  },
  copilot: {
    label: 'GitHub Copilot → .github/copilot-instructions.md',
    file: '.github/copilot-instructions.md',
  },
  agents: {
    label: 'AGENTS.md standard → AGENTS.md',
    file: 'AGENTS.md',
  },
};

// ─── Arg parsing ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
// `--inline` only changes the Claude target; the others are always inline.
let claudeMode = args.includes('--inline') ? 'inline' : 'import';

let selectedKeys = [];
if (args.includes('--all')) {
  selectedKeys = Object.keys(TARGETS);
} else {
  if (args.includes('--claude')) selectedKeys.push('claude');
  if (args.includes('--cursor')) selectedKeys.push('cursor');
  if (args.includes('--copilot')) selectedKeys.push('copilot');
  if (args.includes('--agents')) selectedKeys.push('agents');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n  cyberui-2045 — AI assistant setup\n');

  if (selectedKeys.length === 0) {
    if (!process.stdin.isTTY) {
      // Non-interactive (CI / piped input)
      console.log('  Non-interactive environment detected. Run one of:\n');
      console.log('    npx cyberui-2045 init --claude            # guide in .claude/cyberui.md, imported from CLAUDE.md');
      console.log('    npx cyberui-2045 init --claude --inline   # guide pasted into CLAUDE.md');
      console.log('    npx cyberui-2045 init --cursor');
      console.log('    npx cyberui-2045 init --copilot');
      console.log('    npx cyberui-2045 init --agents');
      console.log('    npx cyberui-2045 init --all\n');
      process.exit(0);
    }
    selectedKeys = await promptTargets();
    if (selectedKeys.includes('claude') && !args.includes('--inline')) {
      claudeMode = await promptClaudeMode();
    }
  }

  if (selectedKeys.length === 0) {
    console.log('\n  Nothing written. Exiting.\n');
    process.exit(0);
  }

  const content = getUsageContent(readPackageVersion());

  console.log(isDryRun ? '\n  [dry-run] Would write:\n' : '');

  for (const key of selectedKeys) {
    let writes;
    if (key !== 'claude') writes = [planMarkedBlock(TARGETS[key].file, content)];
    else if (claudeMode === 'import') writes = planClaudeImport(content);
    else writes = [planClaudeInline(content)];
    for (const write of writes) apply(write);
  }

  console.log('\n  Done! Your AI assistant now has CyberUI context.\n');
}

// ─── Interactive prompt ───────────────────────────────────────────────────────

function ask(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function promptTargets() {
  const keys = Object.keys(TARGETS);
  const cwd = process.cwd();

  console.log('  Which AI config file should the CyberUI usage guide be added to?\n');

  keys.forEach((key, i) => {
    const target = TARGETS[key];
    const filePath = join(cwd, target.file);
    const exists = existsSync(filePath);
    const hasSection = exists && readFileSync(filePath, 'utf8').includes(MARKER_START);
    const status = hasSection ? ' (update)' : exists ? ' (append)' : ' (create)';
    console.log(`    ${i + 1}. ${target.label}${status}`);
  });

  console.log(`    ${keys.length + 1}. All of the above`);
  console.log('\n  Enter number(s) separated by commas (e.g. 1,3), or press Enter to cancel:');

  const raw = await ask('  > ');
  if (!raw) return [];

  const chosen = [];
  for (const part of raw.split(',')) {
    const n = parseInt(part.trim(), 10);
    if (n === keys.length + 1) return [...keys]; // "All"
    if (n >= 1 && n <= keys.length) {
      const key = keys[n - 1];
      if (!chosen.includes(key)) chosen.push(key);
    }
  }
  return chosen;
}

async function promptClaudeMode() {
  console.log('\n  Add the guide as an import (recommended) or inline?\n');
  console.log(`    1. Import — guide in ${CLAUDE_GUIDE_FILE}, CLAUDE.md gets one line: ${CLAUDE_IMPORT_LINE}`);
  console.log('    2. Inline — paste the whole guide into CLAUDE.md');
  console.log('\n  Enter 1 or 2 (press Enter for import):');

  for (;;) {
    const answer = (await ask('  > ')).toLowerCase();
    if (answer === '' || answer === '1' || answer === 'import') return 'import';
    if (answer === '2' || answer === 'inline') return 'inline';
    console.log('  Please enter 1 (import) or 2 (inline).');
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
// Each planner returns what it would write — { file, action, preview, next,
// note? } — without touching disk. `next` is the file's full new content,
// `preview` is what --dry-run shows, and `action` is one of Created / Appended
// / Updated / Migrated / Unchanged.

function readIfExists(file) {
  const filePath = join(process.cwd(), file);
  return existsSync(filePath) ? readFileSync(filePath, 'utf8') : null;
}

function hasMarkedBlock(text) {
  return text !== null && text.includes(MARKER_START) && text.includes(MARKER_END);
}

// The text between the markers, or null if there's no marked block.
function markedBlockBody(text) {
  if (!hasMarkedBlock(text)) return null;
  return text.slice(text.indexOf(MARKER_START) + MARKER_START.length, text.indexOf(MARKER_END)).trim();
}

// Put `body` between the markers in `file`: replace an existing marked block,
// otherwise append one (or create the file).
function planMarkedBlock(file, body) {
  const block = `${MARKER_START}\n${body}\n${MARKER_END}`;
  const existing = readIfExists(file);

  if (existing === null) {
    return { file, action: 'Created', preview: block, next: `${block}\n` };
  }
  if (!hasMarkedBlock(existing)) {
    return { file, action: 'Appended', preview: block, next: `${existing.trimEnd()}\n\n${block}\n` };
  }
  const next = replaceMarkedBlock(existing, MARKER_START, MARKER_END, body);
  return { file, action: next === existing ? 'Unchanged' : 'Updated', preview: block, next };
}

function planClaudeInline(content) {
  const claudeFile = TARGETS.claude.file;
  const previousBody = markedBlockBody(readIfExists(claudeFile));
  const write = planMarkedBlock(claudeFile, content);
  if (previousBody === CLAUDE_IMPORT_LINE && readIfExists(CLAUDE_GUIDE_FILE) !== null) {
    write.note = `${CLAUDE_GUIDE_FILE} is no longer imported; delete it if nothing else uses it`;
  }
  return write;
}

function planClaudeImport(content) {
  const claudeFile = TARGETS.claude.file;
  const existing = readIfExists(claudeFile);
  const previousBody = markedBlockBody(existing);
  const claudeWrite = previousBody === CLAUDE_IMPORT_LINE
    // Already imported: leave CLAUDE.md byte-for-byte alone (even if an editor
    // changed its line endings), so upgrades only ever touch the guide file.
    ? { file: claudeFile, action: 'Unchanged', preview: `${MARKER_START}\n${CLAUDE_IMPORT_LINE}\n${MARKER_END}`, next: existing }
    : planMarkedBlock(claudeFile, CLAUDE_IMPORT_LINE);
  if (previousBody !== null && previousBody !== CLAUDE_IMPORT_LINE) {
    claudeWrite.action = 'Migrated';
    claudeWrite.note = `replaced the inline guide with ${CLAUDE_IMPORT_LINE}`;
  }

  const guideNext = `${content}\n`;
  const guideExisting = readIfExists(CLAUDE_GUIDE_FILE);
  const guideAction = guideExisting === null
    ? 'Created'
    : guideExisting === guideNext ? 'Unchanged' : 'Updated';
  const guideWrite = { file: CLAUDE_GUIDE_FILE, action: guideAction, preview: content, next: guideNext };

  return [claudeWrite, guideWrite];
}

// ─── Apply a planned write ────────────────────────────────────────────────────

function apply({ file, action, preview, next, note }) {
  const suffix = note ? ` — ${note}` : '';

  if (isDryRun) {
    console.log(`  ── ${file} (${action.toLowerCase()}${suffix}) ──\n${preview}\n`);
    return;
  }

  if (action !== 'Unchanged') {
    const filePath = join(process.cwd(), file);
    // Ensure parent directory exists (e.g. .github/ or .claude/)
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, next, 'utf8');
  }
  console.log(`  ✓  ${action.padEnd(8)} ${file}${suffix}`);
}

// ─── Run ──────────────────────────────────────────────────────────────────────

main().catch((err) => {
  console.error('\n  Error:', err.message, '\n');
  process.exit(1);
});
