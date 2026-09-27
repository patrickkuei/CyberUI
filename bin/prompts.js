// Answer parsers for `npx cyberui-2045 init`'s interactive prompts. Kept pure
// and separate from bin/init.js (which runs on import) so they can be unit
// tested — a TTY can't be driven from a test.

// "Own file (recommended) or inline?" → 'own' | 'inline', or null for an answer
// that is neither (the prompt then asks again). Enter picks the default, own
// file. `import` is still accepted from the earlier Claude-only prompt.
export function parseModeAnswer(answer) {
  const a = answer.trim().toLowerCase();
  if (a === '' || a === '1' || a === 'own' || a === 'own file' || a === 'file' || a === 'import') return 'own';
  if (a === '2' || a === 'inline') return 'inline';
  return null;
}

// "Enter number(s) separated by commas" → the chosen target keys, in the order
// given, without duplicates. `keys.length + 1` means all of them. Anything that
// isn't an option is ignored; an empty answer chooses nothing.
export function parseTargetAnswer(answer, keys) {
  const chosen = [];
  for (const part of answer.split(',')) {
    const text = part.trim();
    if (!/^\d+$/.test(text)) continue;
    const n = Number(text);
    if (n === keys.length + 1) return [...keys];
    if (n >= 1 && n <= keys.length && !chosen.includes(keys[n - 1])) chosen.push(keys[n - 1]);
  }
  return chosen;
}
