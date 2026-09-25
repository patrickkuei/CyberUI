import { createElement } from 'react';
import { render, renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useCyberScrollbar, type UseCyberScrollbarOptions } from './useCyberScrollbar';

// ---------------------------------------------------------------------------
// Environment helpers
// ---------------------------------------------------------------------------
// jsdom does no layout, so every measurement the hook reads is driven from the
// test. Container geometry comes from data attributes on the element, which
// lets a test change "content height" with an ordinary re-render.

let bodyScrollHeight = 0;

const originalInnerWidth = window.innerWidth;
const originalInnerHeight = window.innerHeight;

const setViewport = (width: number, height = 768) => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { configurable: true, writable: true, value: height });
};

const numberAttr = (el: Element, name: string) => Number(el.getAttribute(name) ?? 0);

const getScrollbar = () => document.body.querySelector<HTMLElement>('.cyber-scrollbar');

// The hook toggles `display` on the element, so "shown" means anything but none.
const isShown = (el: HTMLElement | null) => el !== null && el.style.display !== 'none';

/** Let the rAF-throttled scroll handler (and any debounced work) run. */
const flushFrames = () => {
  act(() => {
    vi.advanceTimersByTime(20);
  });
};

const scrollWindowTo = (y: number) => {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value: y });
  window.dispatchEvent(new Event('scroll'));
  flushFrames();
};

// -- ResizeObserver stub (jsdom has none) --
type ROCallback = (entries: unknown[], observer: unknown) => void;
class FakeResizeObserver {
  static instances: FakeResizeObserver[] = [];
  observed = new Set<Element>();
  disconnected = false;
  private callback: ROCallback;
  constructor(callback: ROCallback) {
    this.callback = callback;
    FakeResizeObserver.instances.push(this);
  }
  observe(el: Element) {
    this.disconnected = false;
    this.observed.add(el);
  }
  unobserve(el: Element) {
    this.observed.delete(el);
  }
  disconnect() {
    this.observed.clear();
    this.disconnected = true;
  }
  fire() {
    if (!this.disconnected) this.callback([], this);
  }
}

/** Fire every live ResizeObserver, then let the hook's rAF debounce run. */
const fireResizeObservers = () => {
  FakeResizeObserver.instances.forEach((o) => o.fire());
  flushFrames();
};

const resizeWindow = (width: number, height = 768) => {
  setViewport(width, height);
  window.dispatchEvent(new Event('resize'));
  flushFrames();
};

// -- matchMedia stub (jsdom has none) --
let reducedMotion = false;
const stubMatchMedia = () => {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: query.includes('prefers-reduced-motion') ? reducedMotion : false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }));
};

const geometryTargets: [object, string][] = [
  [document.body, 'scrollHeight'],
  [Element.prototype, 'scrollHeight'],
  [Element.prototype, 'clientHeight'],
  [Element.prototype, 'getBoundingClientRect'],
];
const savedDescriptors = new Map<string, PropertyDescriptor | undefined>();
const targetKey = (target: object, prop: string) => `${target === document.body ? 'body' : 'proto'}:${prop}`;

const stubGeometry = () => {
  geometryTargets.forEach(([target, prop]) => {
    savedDescriptors.set(targetKey(target, prop), Object.getOwnPropertyDescriptor(target, prop));
  });
  Object.defineProperty(document.body, 'scrollHeight', {
    configurable: true,
    get: () => bodyScrollHeight,
  });
  Object.defineProperty(Element.prototype, 'scrollHeight', {
    configurable: true,
    get(this: Element) {
      return numberAttr(this, 'data-scroll-height');
    },
  });
  Object.defineProperty(Element.prototype, 'clientHeight', {
    configurable: true,
    get(this: Element) {
      return numberAttr(this, 'data-client-height');
    },
  });
  Object.defineProperty(Element.prototype, 'getBoundingClientRect', {
    configurable: true,
    value(this: Element) {
      const height = numberAttr(this, 'data-client-height');
      return { top: 0, left: 0, right: 300, bottom: height, width: 300, height, x: 0, y: 0, toJSON: () => ({}) };
    },
  });
};

const restoreGeometry = () => {
  geometryTargets.forEach(([target, prop]) => {
    const saved = savedDescriptors.get(targetKey(target, prop));
    if (saved) Object.defineProperty(target, prop, saved);
    else Reflect.deleteProperty(target, prop);
  });
};

beforeEach(() => {
  vi.useFakeTimers({
    toFake: ['setTimeout', 'clearTimeout', 'requestAnimationFrame', 'cancelAnimationFrame', 'Date'],
  });
  bodyScrollHeight = 0;
  reducedMotion = false;
  FakeResizeObserver.instances = [];
  vi.stubGlobal('ResizeObserver', FakeResizeObserver);
  stubMatchMedia();
  stubGeometry();
  setViewport(1024, 768);
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  restoreGeometry();
  setViewport(originalInnerWidth, originalInnerHeight);
  document.body.innerHTML = '';
  document.head.querySelectorAll('#cyber-page-scrollbar-styles, #cyber-scrollbar-styles').forEach((n) => n.remove());
  document.documentElement.classList.remove('cyber-scrollbar-container');
});

// ---------------------------------------------------------------------------
// Container host — mirrors how a consumer attaches the returned ref
// ---------------------------------------------------------------------------
interface HostProps extends UseCyberScrollbarOptions {
  scrollHeight?: number;
  clientHeight?: number;
  /** Render the container element (false = not mounted yet). */
  mounted?: boolean;
  onRender?: () => void;
}

function Host({ scrollHeight = 1000, clientHeight = 300, mounted = true, onRender, ...options }: HostProps) {
  onRender?.();
  const ref = useCyberScrollbar(options);
  return mounted
    ? createElement(
        'div',
        {
          ref,
          'data-testid': 'container',
          'data-scroll-height': scrollHeight,
          'data-client-height': clientHeight,
        },
        createElement('div', { 'data-testid': 'content' }),
      )
    : createElement('div');
}

// ---------------------------------------------------------------------------
// Characterisation: baseline behaviour that must survive the refactor
// ---------------------------------------------------------------------------
describe('useCyberScrollbar — baseline behaviour', () => {
  it('creates the scrollbar element in page-level mode when the page overflows', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    act(() => {
      vi.advanceTimersByTime(20);
    });

    const bar = getScrollbar();
    expect(bar).not.toBeNull();
    expect(bar!.parentElement).toBe(document.body);
    expect(bar!.querySelectorAll('.cyber-arrow-up').length).toBeGreaterThan(0);
    expect(bar!.querySelectorAll('.cyber-arrow-down').length).toBe(bar!.querySelectorAll('.cyber-arrow-up').length);
    expect(bar!.querySelectorAll('.cyber-line')).toHaveLength(2);
  });

  it('creates no scrollbar when the page does not overflow', () => {
    bodyScrollHeight = 500;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(getScrollbar()).toBeNull();
  });

  it('removes the scrollbar element on unmount', () => {
    bodyScrollHeight = 3000;
    const { unmount } = renderHook(() => useCyberScrollbar({ pageLevel: true }));
    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(getScrollbar()).not.toBeNull();

    unmount();
    expect(getScrollbar()).toBeNull();
  });

  it('creates no scrollbar when disabled', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true, disabled: true }));
    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(getScrollbar()).toBeNull();
  });

  it('returns a plain ref object for the caller to attach', () => {
    const { result } = renderHook(() => useCyberScrollbar());
    expect(result.current).toHaveProperty('current');
    expect(typeof result.current).toBe('object');
  });

  it('creates the scrollbar for an attached container that overflows', () => {
    const { getByTestId, unmount } = render(createElement(Host, { pageLevel: false }));
    act(() => {
      vi.advanceTimersByTime(20);
    });

    expect(getScrollbar()).not.toBeNull();
    expect(getByTestId('container').classList.contains('cyber-scrollbar-container')).toBe(true);

    unmount();
    expect(getScrollbar()).toBeNull();
  });

  it('creates no scrollbar for a container that does not overflow', () => {
    render(createElement(Host, { pageLevel: false, scrollHeight: 300, clientHeight: 300 }));
    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(getScrollbar()).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Performance: scroll must not drive React renders or DOM churn (#1, #2, #6, #7)
// ---------------------------------------------------------------------------
describe('useCyberScrollbar — scroll performance', () => {
  it('does not re-render the host component on scroll events', () => {
    bodyScrollHeight = 3000;
    const onRender = vi.fn();
    render(createElement(Host, { pageLevel: true, onRender }));
    flushFrames();
    const rendersAfterMount = onRender.mock.calls.length;

    for (let y = 100; y <= 1000; y += 100) scrollWindowTo(y);
    act(() => {
      vi.advanceTimersByTime(3000); // scrolling settles, mobile hide delay elapses
    });

    expect(onRender.mock.calls.length).toBe(rendersAfterMount);
  });

  it('does not re-render a container host on scroll events', () => {
    const onRender = vi.fn();
    const { getByTestId } = render(createElement(Host, { pageLevel: false, onRender }));
    flushFrames();
    const rendersAfterMount = onRender.mock.calls.length;

    const container = getByTestId('container');
    for (let y = 50; y <= 400; y += 50) {
      container.scrollTop = y;
      container.dispatchEvent(new Event('scroll'));
      flushFrames();
    }
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(onRender.mock.calls.length).toBe(rendersAfterMount);
  });

  it('keeps the same scrollbar node (and listeners) across scroll activity', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    const bar = getScrollbar();
    const children = Array.from(bar!.children);

    scrollWindowTo(300);
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(getScrollbar()).toBe(bar);
    expect(Array.from(bar!.children)).toEqual(children);
  });

  it('returns arrows to idle and shows the pause lines once scrolling stops', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    const bar = getScrollbar()!;

    scrollWindowTo(200);
    const downArrows = Array.from(bar.querySelectorAll<HTMLElement>('.cyber-arrow-down'));
    expect(downArrows.some((a) => a.style.opacity !== '0')).toBe(true);
    bar.querySelectorAll<HTMLElement>('.cyber-line').forEach((l) => expect(l.style.opacity).toBe('0'));

    act(() => {
      vi.advanceTimersByTime(1100);
    });
    bar.querySelectorAll<HTMLElement>('.cyber-arrow').forEach((a) => expect(a.style.opacity).toBe('0'));
    bar.querySelectorAll<HTMLElement>('.cyber-line').forEach((l) => expect(l.style.opacity).toBe('0.6'));
  });

  it('toggles display on the same DOM node through a mobile show -> hide -> show cycle', () => {
    setViewport(500);
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();

    const bar = getScrollbar();
    expect(bar).not.toBeNull();
    expect(isShown(bar)).toBe(false); // mobile: hidden until the user scrolls

    scrollWindowTo(200);
    expect(getScrollbar()).toBe(bar);
    expect(isShown(bar)).toBe(true);

    act(() => {
      vi.advanceTimersByTime(2200); // stable timeout + hide delay
    });
    expect(getScrollbar()).toBe(bar);
    expect(isShown(bar)).toBe(false);

    scrollWindowTo(400);
    expect(getScrollbar()).toBe(bar);
    expect(isShown(bar)).toBe(true);
  });

  it('does not re-query the arrow/line nodes on every scroll frame', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    const spy = vi.spyOn(Element.prototype, 'querySelectorAll');

    for (let y = 100; y <= 500; y += 100) scrollWindowTo(y);

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('survives content that exactly fits the viewport without dividing by zero', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    bodyScrollHeight = window.innerHeight; // scrollHeight - clientHeight === 0
    expect(() => scrollWindowTo(0)).not.toThrow();
  });
});

// ---------------------------------------------------------------------------
// Staleness: resize and content changes re-evaluate the scrollbar (#3, #4)
// ---------------------------------------------------------------------------
describe('useCyberScrollbar — resize and content changes', () => {
  it('adds and removes the page-level scrollbar as page content grows and shrinks', () => {
    bodyScrollHeight = 500;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    expect(getScrollbar()).toBeNull();

    bodyScrollHeight = 3000;
    fireResizeObservers();
    expect(getScrollbar()).not.toBeNull();

    bodyScrollHeight = 400;
    fireResizeObservers();
    expect(getScrollbar()).toBeNull();

    bodyScrollHeight = 2500;
    fireResizeObservers();
    expect(getScrollbar()).not.toBeNull();
  });

  it('adds and removes a container scrollbar as its content grows and shrinks', () => {
    const { rerender } = render(createElement(Host, { pageLevel: false, scrollHeight: 300, clientHeight: 300 }));
    flushFrames();
    expect(getScrollbar()).toBeNull();

    rerender(createElement(Host, { pageLevel: false, scrollHeight: 1200, clientHeight: 300 }));
    fireResizeObservers();
    expect(getScrollbar()).not.toBeNull();

    rerender(createElement(Host, { pageLevel: false, scrollHeight: 250, clientHeight: 300 }));
    fireResizeObservers();
    expect(getScrollbar()).toBeNull();
  });

  it('re-evaluates when children are added to a container (MutationObserver path)', async () => {
    const { getByTestId } = render(createElement(Host, { pageLevel: false, scrollHeight: 300, clientHeight: 300 }));
    flushFrames();
    expect(getScrollbar()).toBeNull();

    const container = getByTestId('container');
    container.setAttribute('data-scroll-height', '2000');
    container.appendChild(document.createElement('p'));
    await act(async () => {
      await Promise.resolve(); // MutationObserver callbacks are microtasks
      vi.advanceTimersByTime(20);
    });
    expect(getScrollbar()).not.toBeNull();
  });

  it('observes documentElement and body in page-level mode, and disconnects on unmount', () => {
    bodyScrollHeight = 3000;
    const { unmount } = renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();

    expect(FakeResizeObserver.instances).toHaveLength(1);
    const observer = FakeResizeObserver.instances[0];
    expect(observer.observed.has(document.documentElement)).toBe(true);
    expect(observer.observed.has(document.body)).toBe(true);

    unmount();
    expect(observer.disconnected).toBe(true);
  });

  it('observes the container and its content in container mode', () => {
    const { getByTestId } = render(createElement(Host, { pageLevel: false }));
    flushFrames();

    expect(FakeResizeObserver.instances).toHaveLength(1);
    const observed = FakeResizeObserver.instances[0].observed;
    expect(observed.has(getByTestId('container'))).toBe(true);
    expect(observed.has(getByTestId('content'))).toBe(true);
  });

  it('restyles the scrollbar and rebuilds its arrows when crossing the mobile breakpoint', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true, variant: 'default' }));
    flushFrames();

    const bar = getScrollbar()!;
    const desktopArrows = bar.querySelectorAll('.cyber-arrow-up').length;
    const firstArrow = () => bar.querySelector<HTMLElement>('.cyber-arrow')!;
    expect(bar.style.width).toBe('16px');
    expect(isShown(bar)).toBe(true);
    expect(firstArrow().style.fontSize).toBe('14px');
    expect(firstArrow().style.filter).toContain('drop-shadow');
    expect(bar.style.background).not.toBe('transparent');

    resizeWindow(500);
    expect(getScrollbar()).toBe(bar); // same element, restyled in place
    expect(bar.style.width).toBe('12px');
    expect(isShown(bar)).toBe(false); // mobile hides until scrolled
    expect(firstArrow().style.fontSize).toBe('10px');
    expect(firstArrow().style.filter).toBe('none');
    expect(bar.style.background).toBe('transparent'); // mobile forces the transparent variant
    expect(bar.querySelectorAll('.cyber-arrow-up').length).toBeGreaterThan(desktopArrows); // smaller arrows fit more

    resizeWindow(1024);
    expect(bar.style.width).toBe('16px');
    expect(isShown(bar)).toBe(true);
    expect(firstArrow().style.fontSize).toBe('14px');
    expect(bar.querySelectorAll('.cyber-arrow-up').length).toBe(desktopArrows);
  });

  it('rebuilds the arrow count when the viewport height changes, and animates the new nodes', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    const bar = getScrollbar()!;
    const tall = bar.querySelectorAll('.cyber-arrow-up').length;

    resizeWindow(1024, 400);
    const short = bar.querySelectorAll('.cyber-arrow-up').length;
    expect(short).toBeLessThan(tall);
    expect(bar.style.height).toBe('400px');

    // The cached node lists were refreshed: scrolling lights the *current* arrows.
    scrollWindowTo(300);
    const lit = Array.from(bar.querySelectorAll<HTMLElement>('.cyber-arrow-down')).filter(
      (a) => a.style.opacity !== '0',
    );
    expect(lit.length).toBeGreaterThan(0);
  });

  it('does not let the resize debounce and the scroll frame swallow each other', () => {
    bodyScrollHeight = 3000;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    const bar = getScrollbar()!;

    // Both are scheduled inside the same frame.
    Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value: 250 });
    window.dispatchEvent(new Event('scroll'));
    setViewport(1024, 500);
    window.dispatchEvent(new Event('resize'));
    flushFrames();

    expect(bar.style.height).toBe('500px'); // the resize ran
    const lit = Array.from(bar.querySelectorAll<HTMLElement>('.cyber-arrow-down')).filter(
      (a) => a.style.opacity !== '0',
    );
    expect(lit.length).toBeGreaterThan(0); // and so did the scroll frame
  });

  it('cancels a pending resize frame on unmount', () => {
    bodyScrollHeight = 500;
    const { unmount } = renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();

    bodyScrollHeight = 3000;
    window.dispatchEvent(new Event('resize')); // schedules a frame
    unmount();
    flushFrames();
    expect(getScrollbar()).toBeNull();
  });

  it('still works when ResizeObserver is unavailable', () => {
    vi.stubGlobal('ResizeObserver', undefined);
    bodyScrollHeight = 500;
    renderHook(() => useCyberScrollbar({ pageLevel: true }));
    flushFrames();
    expect(getScrollbar()).toBeNull();

    bodyScrollHeight = 3000;
    resizeWindow(1024); // the window resize listener still re-evaluates
    expect(getScrollbar()).not.toBeNull();
  });
});
