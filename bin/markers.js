// Shared marker-block helpers.
// Used by bin/init.js (consumer-file injection) and scripts/generate-manifest.js
// (this repo's own doc regeneration) to replace only the text between a pair of
// HTML comment markers, leaving the rest of the file untouched.

export const MANIFEST_MARKER_START = '<!-- cyberui-2045:manifest:start -->';
export const MANIFEST_MARKER_END = '<!-- cyberui-2045:manifest:end -->';

// `eol` is the line ending put around `block`; pass the file's own ending (see
// detectEol) so a CRLF file stays CRLF.
export function replaceMarkedBlock(content, startMarker, endMarker, block, eol = '\n') {
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found: ${startMarker} / ${endMarker}`);
  }
  const before = content.slice(0, startIdx);
  const after = content.slice(endIdx + endMarker.length);
  return `${before}${startMarker}${eol}${block}${eol}${endMarker}${after}`;
}

// Where the marked block sits in `text`. One of:
//   { kind: 'none' }                        neither marker is present
//   { kind: 'block', start, end, body }     a start marker followed by an end
//                                           marker; `end` is the index just past
//                                           the end marker, `body` the trimmed
//                                           text between them ('' if empty)
//   { kind: 'malformed', problem }          a lone marker, or the end marker
//                                           first; `problem` says which
// Callers must not write to a malformed file: any guess (append another block,
// replace from the wrong marker) can duplicate or delete the user's text.
export function findMarkedBlock(text, startMarker, endMarker) {
  const startIdx = text.indexOf(startMarker);
  const endIdx = text.indexOf(endMarker);
  if (startIdx === -1 && endIdx === -1) return { kind: 'none' };
  if (startIdx === -1) {
    return { kind: 'malformed', problem: `it has an end marker "${endMarker}" but no start marker "${startMarker}"` };
  }
  if (endIdx === -1) {
    return { kind: 'malformed', problem: `it has a start marker "${startMarker}" but no end marker "${endMarker}" after it` };
  }
  if (endIdx < startIdx) {
    return { kind: 'malformed', problem: `its end marker "${endMarker}" comes before its start marker "${startMarker}"` };
  }
  return {
    kind: 'block',
    start: startIdx,
    end: endIdx + endMarker.length,
    body: text.slice(startIdx + startMarker.length, endIdx).trim(),
  };
}

// The line ending a file already uses: CRLF if it has any, otherwise LF.
export function detectEol(text) {
  return text !== null && text.includes('\r\n') ? '\r\n' : '\n';
}

// `text` (written with \n) converted to `eol`.
export function withEol(text, eol) {
  return eol === '\n' ? text : text.replace(/\r?\n/g, eol);
}
