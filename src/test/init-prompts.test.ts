// @vitest-environment node
// Unit tests for the answer parsers behind `npx cyberui-2045 init`'s
// interactive prompts (bin/prompts.js). A TTY can't be driven from a test, so
// the prompts themselves are thin wrappers around these pure functions.
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';
import { REPO_BIN_DIR } from './initHarness';

interface PromptsModule {
  parseModeAnswer: (answer: string) => 'own' | 'inline' | null;
  parseTargetAnswer: (answer: string, keys: string[]) => string[];
}

let prompts: PromptsModule;

beforeAll(async () => {
  prompts = (await import(/* @vite-ignore */ pathToFileURL(join(REPO_BIN_DIR, 'prompts.js')).href)) as PromptsModule;
});

describe('parseModeAnswer', () => {
  it.each(['', '   ', '1', 'own', 'OWN', ' own file ', 'file', 'import'])('%j picks the own-file mode (the default)', (answer) => {
    expect(prompts.parseModeAnswer(answer)).toBe('own');
  });

  it.each(['2', 'inline', ' Inline '])('%j picks inline', (answer) => {
    expect(prompts.parseModeAnswer(answer)).toBe('inline');
  });

  it.each(['3', 'yes', 'n', '1,2', '12'])('%j is not an answer (the prompt asks again)', (answer) => {
    expect(prompts.parseModeAnswer(answer)).toBeNull();
  });
});

describe('parseTargetAnswer', () => {
  const keys = ['claude', 'gemini', 'cursor', 'copilot', 'agents'];

  it('returns no targets for an empty answer', () => {
    expect(prompts.parseTargetAnswer('', keys)).toEqual([]);
    expect(prompts.parseTargetAnswer('  ', keys)).toEqual([]);
  });

  it('maps numbers to targets, in the order given, without duplicates', () => {
    expect(prompts.parseTargetAnswer('3, 1,3', keys)).toEqual(['cursor', 'claude']);
  });

  it('treats the number after the last target as "all"', () => {
    expect(prompts.parseTargetAnswer('2,6', keys)).toEqual(keys);
  });

  it('ignores numbers and text that are not options', () => {
    expect(prompts.parseTargetAnswer('0, 7, x, 5', keys)).toEqual(['agents']);
  });
});
