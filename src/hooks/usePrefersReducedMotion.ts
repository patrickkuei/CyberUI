import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Duration in ms of the opacity-only fade that replaces open/close motion
 * (Modal, Drawer, Image preview, popovers, toasts) under reduced motion.
 * Matches the `motion-reduce:duration-150` classes and the 150ms fade
 * keyframes in `index.css` — keep all three in sync.
 */
export const REDUCED_MOTION_DURATION = 150;

function getMatch(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia(QUERY).matches;
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
  const [reduced, setReduced] = useState(getMatch);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }
    const mql = window.matchMedia(QUERY);
    const handleChange = () => setReduced(mql.matches);
    // Resync in case the preference changed between render and subscribe.
    handleChange();
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handleChange);
      return () => mql.removeEventListener('change', handleChange);
    }
    // Safari < 14 only implements the deprecated listener API.
    mql.addListener(handleChange);
    return () => mql.removeListener(handleChange);
  }, []);

  return reduced;
}
