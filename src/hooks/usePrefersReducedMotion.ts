import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Duration in ms of the opacity-only fade that replaces open/close motion
 * (Modal, Drawer, Image preview, popovers, toasts) under reduced motion.
 * Matches the `motion-reduce:duration-150` classes and the 150ms fade
 * keyframes in `index.css` — keep all three in sync.
 */
export const REDUCED_MOTION_DURATION = 150;

function hasMatchMedia(): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function';
}

function subscribe(onChange: () => void): () => void {
  if (!hasMatchMedia()) return () => {};
  const mql = window.matchMedia(QUERY);
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }
  // Safari < 14 only implements the deprecated listener API.
  mql.addListener(onChange);
  return () => mql.removeListener(onChange);
}

function getSnapshot(): boolean {
  return hasMatchMedia() && window.matchMedia(QUERY).matches;
}

// Server render and hydration both use `false`; React then re-renders with
// the real value, so hydration never mismatches.
function getServerSnapshot(): boolean {
  return false;
}

/**
 * Returns `true` while the user's OS/browser asks for reduced motion
 * (`prefers-reduced-motion: reduce`), and re-renders when that preference
 * changes.
 *
 * SSR-safe: returns `false` when `window` or `window.matchMedia` is
 * unavailable.
 *
 * @example
 * const reduceMotion = usePrefersReducedMotion();
 * <div style={{ animation: reduceMotion ? 'none' : 'neon-flicker 1s infinite' }} />
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
