#!/usr/bin/env node

import { createInterface } from 'node:readline';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { getUsageContent } from './usage-content.js';

// ─── Constants ────────────────────────────────────────────────────────────────

const MARKER_START = '<!-- cyberui-2045:start -->';
const MARKER_END = '<!-- cyberui-2045:end -->';

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
};

// ─── Arg parsing ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

let selectedKeys = [];
if (args.includes('--all')) {
  selectedKeys = Object.keys(TARGETS);
} else {
  if (args.includes('--claude')) selectedKeys.push('claude');
  if (args.includes('--cursor')) selectedKeys.push('cursor');
  if (args.includes('--copilot')) selectedKeys.push('copilot');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n  cyberui-2045 — AI assistant setup\n');

  if (selectedKeys.length === 0) {
    if (!process.stdin.isTTY) {
      // Non-interactive (CI / piped input)
      console.log('  Non-interactive environment detected. Run one of:\n');
      console.log('    npx cyberui-2045 init --claude');
      console.log('    npx cyberui-2045 init --cursor');
      console.log('    npx cyberui-2045 init --copilot');
      console.log('    npx cyberui-2045 init --all\n');
      process.exit(0);
    }
    selectedKeys = await promptTargets();
  }

  if (selectedKeys.length === 0) {
    console.log('\n  Nothing written. Exiting.\n');
    process.exit(0);
  }

  console.log(isDryRun ? '\n  [dry-run] Would write:\n' : '');

  for (const key of selectedKeys) {
    writeTarget(key);
  }

  console.log('\n  Done! Your AI assistant now has CyberUI context.\n');
}

// ─── Interactive prompt ───────────────────────────────────────────────────────

function promptTargets() {
  return new Promise((resolve) => {
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

    const rl = createInterface({ input: process.stdin, output: process.stdout });

    rl.question('  > ', (answer) => {
      rl.close();

      const raw = answer.trim();
      if (!raw) return resolve([]);

      const chosen = [];
      for (const part of raw.split(',')) {
        const n = parseInt(part.trim(), 10);
        if (n === keys.length + 1) return resolve([...keys]); // "All"
        if (n >= 1 && n <= keys.length) {
          const key = keys[n - 1];
          if (!chosen.includes(key)) chosen.push(key);
        }
      }

      resolve(chosen);
    });
  });
}

// ─── Write / update target file ───────────────────────────────────────────────

function writeTarget(key) {
  const target = TARGETS[key];
  const cwd = process.cwd();
  const filePath = join(cwd, target.file);

  // Read current package version
  let version = '1.3.2';
  try {
    const pkgPath = new URL('../package.json', import.meta.url).pathname;
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    version = pkg.version ?? version;
  } catch {
    // fallback to hardcoded version
  }

  const block = `${MARKER_START}\n${getUsageContent(version)}\n${MARKER_END}`;

  if (isDryRun) {
    console.log(`  ── ${target.file} ──\n${block}\n`);
    return;
  }

  // Ensure parent directory exists (e.g. .github/)
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  let finalContent;

  if (existsSync(filePath)) {
    const existing = readFileSync(filePath, 'utf8');

    if (existing.includes(MARKER_START) && existing.includes(MARKER_END)) {
      // Replace existing section
      const before = existing.slice(0, existing.indexOf(MARKER_START));
      const after = existing.slice(existing.indexOf(MARKER_END) + MARKER_END.length);
      finalContent = `${before}${block}${after}`;
      console.log(`  ✓  Updated  ${target.file}`);
    } else {
      // Append new section
      finalContent = `${existing.trimEnd()}\n\n${block}\n`;
      console.log(`  ✓  Appended ${target.file}`);
    }
  } else {
    // Create new file
    finalContent = `${block}\n`;
    console.log(`  ✓  Created  ${target.file}`);
  }

  writeFileSync(filePath, finalContent, 'utf8');
}

// ─── Run ──────────────────────────────────────────────────────────────────────

main().catch((err) => {
  console.error('\n  Error:', err.message, '\n');
  process.exit(1);
});
