/**
 * Shared `prefers-reduced-motion: reduce` subscription used by
 * `usePrefersReducedMotion` and `useCyberScrollbar`, so the two can't drift
 * on how they read or subscribe to the preference (including the Safari < 14
 * fallback). Internal — not part of the package's public surface.
 */
export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function hasMatchMedia(): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function';
}

/** Current value of `matchMedia('(prefers-reduced-motion: reduce)').matches`, or `false` when unsupported. */
export function getReducedMotionPreference(): boolean {
  return hasMatchMedia() && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Subscribes to changes in the reduced-motion preference and returns an
 * unsubscribe function. Falls back to the deprecated `addListener`/
 * `removeListener` API for Safari < 14. A no-op (subscribing nothing) when
 * `matchMedia` is unavailable.
 */
export function subscribeReducedMotionChange(onChange: (matches: boolean) => void): () => void {
  if (!hasMatchMedia()) return () => {};

  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  const listener = (event: MediaQueryListEvent) => onChange(event.matches);

  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }
  // Safari < 14 only implements the deprecated listener API.
  mql.addListener(listener);
  return () => mql.removeListener(listener);
}
