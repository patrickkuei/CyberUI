import { act, render } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { useResponsiveValue } from './responsive';

const ORIGINAL_INNER_WIDTH = window.innerWidth;

function setInnerWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    writable: true,
    value: width,
  });
}

afterEach(() => {
  setInnerWidth(ORIGINAL_INNER_WIDTH);
});

function OrientationProbe() {
  const orientation = useResponsiveValue({ base: 'vertical', md: 'horizontal' }, 'vertical');
  return <span data-orientation={orientation}>{orientation}</span>;
}

async function hydrateAndCheck(html: string, expectedAfterMount: string) {
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  const onRecoverableError = vi.fn();
  try {
    let root: ReturnType<typeof hydrateRoot> | undefined;
    await act(async () => {
      root = hydrateRoot(container, <OrientationProbe />, { onRecoverableError });
    });
    const span = container.querySelector('span')!;
    expect(span.textContent).toBe(expectedAfterMount);
    expect(span.getAttribute('data-orientation')).toBe(expectedAfterMount);
    expect(onRecoverableError).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
    act(() => root!.unmount());
  } finally {
    errorSpy.mockRestore();
    container.remove();
  }
}

describe('useResponsiveValue', () => {
  it('server-renders the fallback regardless of the configured breakpoints', () => {
    setInnerWidth(1280); // would resolve to 'horizontal' (md) on the client
    const html = renderToString(<OrientationProbe />);
    expect(html).toContain('vertical');
    expect(html).not.toContain('horizontal');
  });

  it('hydrates without a mismatch and switches to the real width after mount', async () => {
    // Real server: renderToString always uses getServerSnapshot, so the
    // client-side innerWidth here is irrelevant to what gets rendered.
    const html = renderToString(<OrientationProbe />);
    expect(html).toContain('vertical');

    // Client resolves to a non-fallback breakpoint (md = 768px+).
    setInnerWidth(1280);
    await hydrateAndCheck(html, 'horizontal');
  });

  it('updates the resolved value when the window is resized', async () => {
    setInnerWidth(320); // base
    const html = renderToString(<OrientationProbe />);

    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);
    let root: ReturnType<typeof hydrateRoot> | undefined;
    try {
      await act(async () => {
        root = hydrateRoot(container, <OrientationProbe />);
      });
      const span = container.querySelector('span')!;
      expect(span.textContent).toBe('vertical');

      await act(async () => {
        setInnerWidth(1024);
        window.dispatchEvent(new Event('resize'));
      });
      expect(span.textContent).toBe('horizontal');

      await act(async () => {
        setInnerWidth(320);
        window.dispatchEvent(new Event('resize'));
      });
      expect(span.textContent).toBe('vertical');
    } finally {
      act(() => root?.unmount());
      container.remove();
    }
  });

  it('re-renders only when a breakpoint is crossed, not on every resize within one', async () => {
    let renders = 0;
    function CountingProbe() {
      renders += 1;
      const orientation = useResponsiveValue({ base: 'vertical', md: 'horizontal' }, 'vertical');
      return <span>{orientation}</span>;
    }
    const resizeTo = async (width: number) => {
      await act(async () => {
        setInnerWidth(width);
        window.dispatchEvent(new Event('resize'));
      });
    };

    setInnerWidth(800); // md (768-1023)
    const { container, unmount } = render(<CountingProbe />);
    try {
      expect(container.textContent).toBe('horizontal');
      const afterMount = renders;

      // Dragging within md (768 <= w < 1024) must not re-render.
      await resizeTo(801);
      await resizeTo(900);
      await resizeTo(1023);
      expect(renders).toBe(afterMount);

      // Crossing md -> lg keeps the same resolved value but the breakpoint changed:
      // exactly one update.
      await resizeTo(1024);
      expect(renders).toBe(afterMount + 1);
      await resizeTo(1100);
      expect(renders).toBe(afterMount + 1);

      // Crossing down into base changes the resolved value: exactly one more update.
      await resizeTo(400);
      expect(renders).toBe(afterMount + 2);
      expect(container.textContent).toBe('vertical');
      await resizeTo(320);
      expect(renders).toBe(afterMount + 2);
    } finally {
      unmount();
    }
  });

  it('does not subscribe to resize for a static (non-responsive) value', () => {
    function StaticProbe() {
      const size = useResponsiveValue('md', 'sm');
      return <span>{size}</span>;
    }
    const addSpy = vi.spyOn(window, 'addEventListener');
    const { getByText, unmount } = render(<StaticProbe />);
    expect(getByText('md')).toBeInTheDocument();
    expect(addSpy).not.toHaveBeenCalledWith('resize', expect.anything());
    addSpy.mockRestore();
    unmount();
  });
});
