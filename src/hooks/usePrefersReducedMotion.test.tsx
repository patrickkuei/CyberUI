import { renderHook, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { usePrefersReducedMotion, REDUCED_MOTION_DURATION } from './usePrefersReducedMotion';

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
    media: '(prefers-reduced-motion: reduce)',
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

describe('usePrefersReducedMotion', () => {
  it('returns false when matchMedia is unavailable', () => {
    expect(window.matchMedia).toBeUndefined();
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it('renders false on the server (SSR fallback)', () => {
    function Probe() {
      return <span>{usePrefersReducedMotion() ? 'reduce' : 'no-preference'}</span>;
    }
    expect(renderToString(<Probe />)).toContain('no-preference');
  });

  it('queries prefers-reduced-motion: reduce', () => {
    const stub = stubMatchMedia(false);
    renderHook(() => usePrefersReducedMotion());
    expect(stub.matchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)');
  });

  it('returns the initial preference', () => {
    stubMatchMedia(true);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it('updates when the preference changes', () => {
    const stub = stubMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);

    act(() => stub.set(true));
    expect(result.current).toBe(true);

    act(() => stub.set(false));
    expect(result.current).toBe(false);
  });

  it('unsubscribes on unmount', () => {
    const stub = stubMatchMedia(false);
    const { unmount } = renderHook(() => usePrefersReducedMotion());
    expect(stub.listeners.size).toBe(1);
    unmount();
    expect(stub.listeners.size).toBe(0);
    expect(stub.mql.removeEventListener).toHaveBeenCalledTimes(1);
  });

  it('falls back to addListener/removeListener when addEventListener is missing', () => {
    const stub = stubMatchMedia(false, { legacy: true });
    const { result, unmount } = renderHook(() => usePrefersReducedMotion());

    act(() => stub.set(true));
    expect(result.current).toBe(true);
    expect(stub.mql.addListener).toHaveBeenCalledTimes(1);

    unmount();
    expect(stub.mql.removeListener).toHaveBeenCalledTimes(1);
    expect(stub.listeners.size).toBe(0);
  });

  it('exports the 150ms reduced-motion fade duration', () => {
    expect(REDUCED_MOTION_DURATION).toBe(150);
  });
});
