import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  REDUCED_MOTION_QUERY,
  getReducedMotionPreference,
  subscribeReducedMotionChange,
} from './reducedMotionSubscription';

type Listener = (event: MediaQueryListEvent) => void;

/**
 * Stubs window.matchMedia for this file only. `legacy` omits
 * addEventListener/removeEventListener (Safari < 14).
 */
function stubMatchMedia(initial: boolean, { legacy = false } = {}) {
  let matches = initial;
  const listeners = new Set<Listener>();
  const mql = {
    get matches() {
      return matches;
    },
    media: REDUCED_MOTION_QUERY,
    addListener: vi.fn((l: Listener) => listeners.add(l)),
    removeListener: vi.fn((l: Listener) => listeners.delete(l)),
    ...(legacy
      ? {}
      : {
          addEventListener: vi.fn((_t: string, l: Listener) => listeners.add(l)),
          removeEventListener: vi.fn((_t: string, l: Listener) => listeners.delete(l)),
        }),
  };
  const matchMedia = vi.fn(() => mql as unknown as MediaQueryList);
  Object.defineProperty(window, 'matchMedia', { configurable: true, writable: true, value: matchMedia });
  return {
    mql,
    matchMedia,
    listeners,
    set(next: boolean) {
      matches = next;
      listeners.forEach((l) => l({ matches: next } as MediaQueryListEvent));
    },
  };
}

afterEach(() => {
  delete (window as { matchMedia?: unknown }).matchMedia;
});

describe('reducedMotionSubscription', () => {
  it('reports false when matchMedia is unavailable', () => {
    expect(window.matchMedia).toBeUndefined();
    expect(getReducedMotionPreference()).toBe(false);
  });

  it('reads the current preference from matchMedia', () => {
    stubMatchMedia(true);
    expect(getReducedMotionPreference()).toBe(true);
  });

  it('queries prefers-reduced-motion: reduce', () => {
    const stub = stubMatchMedia(false);
    getReducedMotionPreference();
    expect(stub.matchMedia).toHaveBeenCalledWith(REDUCED_MOTION_QUERY);
  });

  it('subscribes and notifies on change, using addEventListener', () => {
    const stub = stubMatchMedia(false);
    const onChange = vi.fn();
    const unsubscribe = subscribeReducedMotionChange(onChange);
    expect(stub.listeners.size).toBe(1);

    stub.set(true);
    expect(onChange).toHaveBeenCalledWith(true);

    unsubscribe();
    expect(stub.listeners.size).toBe(0);
    expect(stub.mql.removeEventListener).toHaveBeenCalledTimes(1);
  });

  it('falls back to addListener/removeListener when addEventListener is missing', () => {
    const stub = stubMatchMedia(false, { legacy: true });
    const onChange = vi.fn();
    const unsubscribe = subscribeReducedMotionChange(onChange);

    stub.set(true);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(stub.mql.addListener).toHaveBeenCalledTimes(1);

    unsubscribe();
    expect(stub.mql.removeListener).toHaveBeenCalledTimes(1);
    expect(stub.listeners.size).toBe(0);
  });

  it('returns a no-op unsubscribe when matchMedia is unavailable', () => {
    expect(window.matchMedia).toBeUndefined();
    const onChange = vi.fn();
    const unsubscribe = subscribeReducedMotionChange(onChange);
    expect(() => unsubscribe()).not.toThrow();
    expect(onChange).not.toHaveBeenCalled();
  });
});
