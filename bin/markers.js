// Shared marker-block replace helper.
// Used by bin/init.js (consumer-file injection) and scripts/generate-manifest.js
// (this repo's own doc regeneration) to replace only the text between a pair of
// HTML comment markers, leaving the rest of the file untouched.

export const MANIFEST_MARKER_START = '<!-- cyberui-2045:manifest:start -->';
export const MANIFEST_MARKER_END = '<!-- cyberui-2045:manifest:end -->';

export function replaceMarkedBlock(content, startMarker, endMarker, block) {
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found: ${startMarker} / ${endMarker}`);
  }
  const before = content.slice(0, startIdx);
  const after = content.slice(endIdx + endMarker.length);
  return `${before}${startMarker}\n${block}\n${endMarker}${after}`;
}
