/**
 * Test helper: installs a controllable `window.matchMedia` stub whose
 * `(prefers-reduced-motion: reduce)` query reports `matches`. Every other
 * query reports `false`. jsdom has no `matchMedia`, so without this stub
 * `usePrefersReducedMotion()` returns `false`.
 *
 * Call `restore()` in `afterEach`.
 */
export interface ReducedMotionStub {
  /** Flip the preference and fire `change` to every subscriber. */
  set: (matches: boolean) => void;
  /** Number of `change` listeners currently subscribed. */
  listenerCount: () => number;
  /** Removes the stub (restores jsdom's missing `matchMedia`). */
  restore: () => void;
}

export function stubReducedMotion(initial: boolean): ReducedMotionStub {
  let matches = initial;
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  const query = '(prefers-reduced-motion: reduce)';

  const reducedMotionList = {
    get matches() {
      return matches;
    },
    media: query,
    onchange: null,
    addEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) => {
      listeners.add(listener);
    },
    removeEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) => {
      listeners.delete(listener);
    },
    addListener: (listener: (event: MediaQueryListEvent) => void) => {
      listeners.add(listener);
    },
    removeListener: (listener: (event: MediaQueryListEvent) => void) => {
      listeners.delete(listener);
    },
    dispatchEvent: () => true,
  } as unknown as MediaQueryList;

  const otherList = (media: string) =>
    ({
      matches: false,
      media,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => true,
    }) as unknown as MediaQueryList;

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (media: string) => (media === query ? reducedMotionList : otherList(media)),
  });

  return {
    set: (next) => {
      matches = next;
      for (const listener of [...listeners]) {
        listener({ matches: next, media: query } as MediaQueryListEvent);
      }
    },
    listenerCount: () => listeners.size,
    restore: () => {
      delete (window as { matchMedia?: unknown }).matchMedia;
    },
  };
}
