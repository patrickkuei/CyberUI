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
