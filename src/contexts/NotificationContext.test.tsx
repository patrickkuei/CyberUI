import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CyberNotificationProvider } from './NotificationContext';
import { useCyberNotifications } from '../hooks/useCyberNotifications';
import { stubReducedMotion, type ReducedMotionStub } from '../test/reducedMotion';

function Trigger({ autoHide = false }: { autoHide?: boolean }) {
  const { showNotification } = useCyberNotifications();
  return (
    <button onClick={() => showNotification('success', 'Uplink secured', 'Neural handshake complete', { autoHide, duration: 1000 })}>
      Ping
    </button>
  );
}

const renderProvider = (autoHide = false) =>
  render(
    <CyberNotificationProvider>
      <Trigger autoHide={autoHide} />
    </CyberNotificationProvider>
  );

/** The element carrying the slide transform/transition for the (single) toast. */
const toastShell = () => screen.getByText('Uplink secured').closest('.transform') as HTMLElement;

describe('CyberNotificationProvider', () => {
  let motion: ReducedMotionStub;
  const scrollWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollWidth');

  beforeEach(() => {
    vi.useFakeTimers();
    motion = stubReducedMotion(false);
    // jsdom reports 0 for every scrollWidth; the provider measures each toast
    // once and only stops re-measuring after a non-zero width.
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, get: () => 320 });
  });

  afterEach(() => {
    motion.restore();
    vi.useRealTimers();
    if (scrollWidth) Object.defineProperty(HTMLElement.prototype, 'scrollWidth', scrollWidth);
  });

  it('slides a dismissed toast out over 500ms when motion is allowed', () => {
    renderProvider();
    fireEvent.click(screen.getByText('Ping'));
    expect(toastShell().getAttribute('style')).toContain('translateX(0px)');

    fireEvent.click(screen.getByLabelText('Close notification'));
    expect(toastShell().getAttribute('style')).toContain('translateX(100%)');
    act(() => {
      vi.advanceTimersByTime(499);
    });
    expect(screen.getByText('Uplink secured')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(screen.queryByText('Uplink secured')).toBeNull();
  });

  it('moves a closing toast with only one mechanism (no doubled translate)', () => {
    renderProvider();
    fireEvent.click(screen.getByText('Ping'));
    fireEvent.click(screen.getByLabelText('Close notification'));

    const shell = toastShell();
    // The inline transform is the one mechanism that should move the toast.
    expect(shell.style.transform).toContain('translateX(100%)');
    // A Tailwind v4 translate-x-* utility sets the separate `translate`
    // CSS property, which composes with (doubles) the inline transform's
    // translateX above — it must not also be present.
    expect(shell.className).not.toMatch(/(?:^|\s)-?translate-x-full(?:\s|$)/);
  });

  it('expresses the toast scale once, in the inline transform (no doubled scale)', () => {
    renderProvider();
    fireEvent.click(screen.getByText('Ping'));

    const shell = toastShell();
    // A Tailwind v4 scale-* utility sets the separate `scale` CSS property,
    // which composes with (squares) the inline transform's scale(0.75).
    expect(shell.className).not.toMatch(/(?:^|\s)-?scale-/);
    expect(shell.style.transform.match(/scale\(/g)).toHaveLength(1);
    expect(shell.style.transform).toContain('scale(0.75)');

    fireEvent.click(screen.getByLabelText('Close notification'));
    expect(shell.style.transform.match(/scale\(/g)).toHaveLength(1);
    expect(shell.style.transform).toContain('scale(0.75)');
  });

  it('does not read scrollWidth again for a toast that is already measured', () => {
    renderProvider();
    fireEvent.click(screen.getByText('Ping'));
    const shell = toastShell();
    expect(shell.style.transform).toContain('translateX(0px)');

    const reads: HTMLElement[] = [];
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
      configurable: true,
      get(this: HTMLElement) {
        reads.push(this);
        return 320;
      },
    });
    // Re-render the provider (and so this toast) by closing it.
    fireEvent.click(screen.getByLabelText('Close notification'));
    expect(shell.style.transform).toContain('translateX(100%)');
    expect(reads).not.toContain(shell);
  });

  describe('toast placement by position', () => {
    type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

    function Pair() {
      const { showNotification } = useCyberNotifications();
      return (
        <button
          onClick={() => {
            showNotification('success', 'Uplink secured', 'Neural handshake complete', { autoHide: false });
            vi.advanceTimersByTime(1); // toast ids come from Date.now(); keep them distinct
            showNotification('warning', 'Firewall breach', 'Trace detected', { autoHide: false });
          }}
        >
          Ping
        </button>
      );
    }

    /** The absolutely positioned wrapper of each toast, in render order. */
    const renderSlots = (position: Position) => {
      render(
        <CyberNotificationProvider position={position}>
          <Pair />
        </CyberNotificationProvider>
      );
      fireEvent.click(screen.getByText('Ping'));
      return Array.from(document.querySelectorAll<HTMLElement>('[aria-live] > .absolute'));
    };

    it.each<Position>(['top-right', 'top-left'])('anchors %s toasts with top, stacking downward in 70px steps', (position) => {
      const slots = renderSlots(position);
      expect(slots.map((s) => s.style.top)).toEqual(['0px', '70px']);
      expect(slots.every((s) => s.style.bottom === '')).toBe(true);
    });

    it.each<Position>(['bottom-right', 'bottom-left'])('anchors %s toasts with bottom, stacking upward in 70px steps', (position) => {
      const slots = renderSlots(position);
      expect(slots.map((s) => s.style.bottom)).toEqual(['0px', '70px']);
      expect(slots.every((s) => s.style.top === '')).toBe(true);
    });

    it.each<[Position, string, string]>([
      ['bottom-right', 'translateX(0px)', 'translateX(100%)'],
      ['bottom-left', 'translateX(0px)', 'translateX(-100%)'],
    ])('keeps the %s slide transform on enter and exit', (position, entered, exited) => {
      render(
        <CyberNotificationProvider position={position}>
          <Trigger />
        </CyberNotificationProvider>
      );
      fireEvent.click(screen.getByText('Ping'));
      expect(toastShell().style.transform).toContain(entered);
      fireEvent.click(screen.getByLabelText('Close notification'));
      expect(toastShell().style.transform).toContain(exited);
    });
  });

  describe('when the browser reports a zero width (e.g. jsdom, or a toast rendered in a hidden container)', () => {
    beforeEach(() => {
      // Overrides the outer beforeEach's stub back to jsdom's real behavior.
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, get: () => 0 });
    });

    it('measures once and stops, instead of looping forever', () => {
      expect(() => {
        renderProvider();
        fireEvent.click(screen.getByText('Ping'));
      }).not.toThrow();
      expect(screen.getByText('Uplink secured')).toBeInTheDocument();
    });

    it('applies the width once the toast can be measured (via ResizeObserver)', () => {
      const observers: Array<() => void> = [];
      class FakeResizeObserver {
        constructor(cb: () => void) {
          observers.push(cb);
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      }
      vi.stubGlobal('ResizeObserver', FakeResizeObserver);
      try {
        let width = 0;
        Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, get: () => width });

        renderProvider();
        fireEvent.click(screen.getByText('Ping'));
        // Unmeasured: parked at its off-screen enter position.
        expect(toastShell().style.transform).toContain('translateX(100%)');
        expect(toastShell().parentElement?.style.width).toBe('auto');

        // The toast becomes measurable (e.g. its container gets a real size).
        width = 320;
        act(() => {
          observers.forEach((cb) => cb());
        });
        expect(toastShell().style.transform).toContain('translateX(0px)');
        expect(toastShell().parentElement?.style.width).toBe('320px');
      } finally {
        vi.unstubAllGlobals();
      }
    });
  });

  describe('under prefers-reduced-motion', () => {
    beforeEach(() => {
      motion.set(true);
    });

    it('fades a dismissed toast out in place and removes it after 150ms', () => {
      renderProvider();
      fireEvent.click(screen.getByText('Ping'));
      expect(toastShell().style.transform).toBe('scale(0.75)');
      expect(toastShell().className).toContain('motion-reduce:duration-150');

      fireEvent.click(screen.getByLabelText('Close notification'));
      expect(toastShell().style.transform).toBe('scale(0.75)');
      expect(toastShell().className).toContain('opacity-0');
      expect(toastShell().className).toContain('motion-reduce:translate-x-0');
      act(() => {
        vi.advanceTimersByTime(149);
      });
      expect(screen.getByText('Uplink secured')).toBeInTheDocument();
      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(screen.queryByText('Uplink secured')).toBeNull();
    });

    it('removes an auto-hidden toast 150ms after its duration elapses', () => {
      renderProvider(true);
      fireEvent.click(screen.getByText('Ping'));
      act(() => {
        vi.advanceTimersByTime(1000 + 149);
      });
      expect(screen.getByText('Uplink secured')).toBeInTheDocument();
      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(screen.queryByText('Uplink secured')).toBeNull();
    });
  });
});
