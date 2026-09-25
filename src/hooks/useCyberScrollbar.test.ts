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
