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
