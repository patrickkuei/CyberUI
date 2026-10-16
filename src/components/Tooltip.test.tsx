import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders the trigger without crashing', () => {
    render(
      <Tooltip content="Info">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('does not render the tooltip panel initially', () => {
    render(
      <Tooltip content="Info">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('shows the tooltip after the delay on hover', () => {
    render(
      <Tooltip content="Info" delay={200}>
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    expect(screen.queryByRole('tooltip')).toBeNull();
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(screen.getByRole('tooltip')).toHaveTextContent('Info');
  });

  it('hides immediately on mouse leave', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const wrapper = screen.getByText('Trigger').parentElement as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.mouseLeave(wrapper);
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('shows on focus and hides on blur', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const trigger = screen.getByText('Trigger');
    fireEvent.focus(trigger);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.blur(trigger);
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('hides on Escape key', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const wrapper = screen.getByText('Trigger').parentElement as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.keyDown(wrapper, { key: 'Escape' });
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('never shows when disabled', () => {
    render(
      <Tooltip content="Info" delay={0} disabled>
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('sets aria-describedby on the trigger when open', () => {
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    const trigger = screen.getByText('Trigger');
    expect(trigger).not.toHaveAttribute('aria-describedby');
    fireEvent.mouseEnter(trigger.parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    const tooltip = screen.getByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  it('respects controlled open state', () => {
    const { rerender } = render(
      <Tooltip content="Info" open={false}>
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).toBeNull();
    rerender(
      <Tooltip content="Info" open={true}>
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('calls onOpenChange but leaves visibility to the caller when controlled', () => {
    const handleOpenChange = vi.fn();
    render(
      <Tooltip content="Info" open={false} onOpenChange={handleOpenChange} delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(handleOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('applies the variant border class to the panel', () => {
    render(
      <Tooltip content="Info" open variant="accent">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toHaveClass('border-accent');
  });

  it('applies placement classes to the panel', () => {
    render(
      <Tooltip content="Info" open placement="bottom">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toHaveClass('top-full');
  });

  it('keeps the neon glow by default', () => {
    render(
      <Tooltip content="Info" open variant="secondary">
        <button>Trigger</button>
      </Tooltip>
    );
    const panel = screen.getByRole('tooltip');
    expect(panel).toHaveClass('border-secondary');
    expect(panel).toHaveClass('shadow-secondary');
  });

  it('drops the glow but keeps the variant border when glow={false}', () => {
    render(
      <Tooltip content="Info" open variant="accent" glow={false}>
        <button>Trigger</button>
      </Tooltip>
    );
    const panel = screen.getByRole('tooltip');
    expect(panel).toHaveClass('border-accent');
    expect(panel).not.toHaveClass('shadow-lg-accent');
    // The arrow is the last decorative child of the panel.
    const arrow = panel.lastElementChild as HTMLElement;
    expect(arrow).toHaveClass('border-accent');
    expect(arrow).not.toHaveClass('shadow-lg-accent');
  });

  it('keeps the 200ms default delay for hover', () => {
    render(
      <Tooltip content="Info">
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(199);
    });
    expect(screen.queryByRole('tooltip')).toBeNull();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  describe('touch input', () => {
    // A real tap fires pointerdown/pointerup (pointerType 'touch') followed by
    // emulated mouseenter/focus/click on the same target; tap() reproduces that.
    const tap = (el: HTMLElement) => {
      fireEvent.pointerDown(el, { pointerType: 'touch' });
      fireEvent.pointerUp(el, { pointerType: 'touch' });
      fireEvent.mouseEnter(el.parentElement as HTMLElement);
      fireEvent.focus(el);
      fireEvent.click(el);
    };

    it('opens immediately on tap of a non-focusable trigger', () => {
      render(
        <Tooltip content="Uplink latency: 12ms">
          <span>Label</span>
        </Tooltip>
      );
      const trigger = screen.getByText('Label');
      tap(trigger);
      expect(screen.getByRole('tooltip')).toHaveTextContent('Uplink latency: 12ms');
      expect(trigger).toHaveAttribute('aria-describedby', screen.getByRole('tooltip').id);
    });

    it('closes on the next tap on the trigger without re-opening from emulated events', () => {
      render(
        <Tooltip content="Info">
          <button>Trigger</button>
        </Tooltip>
      );
      const trigger = screen.getByText('Trigger');
      tap(trigger);
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      tap(trigger);
      expect(screen.queryByRole('tooltip')).toBeNull();
      // Emulated mouseenter/focus from the closing tap must not re-open it after the delay.
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('does not double-toggle when emulated mouse/focus events follow the opening tap', () => {
      const handleOpenChange = vi.fn();
      render(
        <Tooltip content="Info" onOpenChange={handleOpenChange}>
          <button>Trigger</button>
        </Tooltip>
      );
      tap(screen.getByText('Trigger'));
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      expect(handleOpenChange).toHaveBeenCalledTimes(1);
      expect(handleOpenChange).toHaveBeenCalledWith(true);
    });

    it('closes on a tap outside the trigger', () => {
      render(
        <div>
          <Tooltip content="Info">
            <span>Label</span>
          </Tooltip>
          <p>Elsewhere</p>
        </div>
      );
      tap(screen.getByText('Label'));
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      fireEvent.pointerDown(screen.getByText('Elsewhere'), { pointerType: 'touch' });
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('does not open when a touch turns into a scroll (pointercancel, no pointerup)', () => {
      render(
        <Tooltip content="Info" delay={0}>
          <span>Label</span>
        </Tooltip>
      );
      const trigger = screen.getByText('Label');
      fireEvent.pointerDown(trigger, { pointerType: 'touch' });
      fireEvent.pointerCancel(trigger, { pointerType: 'touch' });
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('ignores taps when disabled', () => {
      render(
        <Tooltip content="Info" disabled>
          <span>Label</span>
        </Tooltip>
      );
      tap(screen.getByText('Label'));
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('reports taps through onOpenChange when controlled', () => {
      const handleOpenChange = vi.fn();
      const { rerender } = render(
        <Tooltip content="Info" open={false} onOpenChange={handleOpenChange}>
          <span>Label</span>
        </Tooltip>
      );
      const trigger = screen.getByText('Label');
      fireEvent.pointerDown(trigger, { pointerType: 'touch' });
      fireEvent.pointerUp(trigger, { pointerType: 'touch' });
      expect(handleOpenChange).toHaveBeenLastCalledWith(true);
      expect(screen.queryByRole('tooltip')).toBeNull();
      rerender(
        <Tooltip content="Info" open={true} onOpenChange={handleOpenChange}>
          <span>Label</span>
        </Tooltip>
      );
      fireEvent.pointerDown(trigger, { pointerType: 'touch' });
      fireEvent.pointerUp(trigger, { pointerType: 'touch' });
      expect(handleOpenChange).toHaveBeenLastCalledWith(false);
    });

    it('does not change mouse behavior: mouse pointer events do not toggle', () => {
      render(
        <Tooltip content="Info" delay={0}>
          <button>Trigger</button>
        </Tooltip>
      );
      const trigger = screen.getByText('Trigger');
      const wrapper = trigger.parentElement as HTMLElement;
      fireEvent.mouseEnter(wrapper);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      // A mouse click on the trigger keeps it open (no toggle-off).
      fireEvent.pointerDown(trigger, { pointerType: 'mouse' });
      fireEvent.pointerUp(trigger, { pointerType: 'mouse' });
      fireEvent.click(trigger);
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      fireEvent.mouseLeave(wrapper);
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('resumes hover and focus behavior once the touch emulation window has passed', () => {
      render(
        <Tooltip content="Info" delay={0}>
          <button>Trigger</button>
        </Tooltip>
      );
      const trigger = screen.getByText('Trigger');
      const wrapper = trigger.parentElement as HTMLElement;
      tap(trigger);
      tap(trigger);
      expect(screen.queryByRole('tooltip')).toBeNull();
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      fireEvent.mouseEnter(wrapper);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      fireEvent.mouseLeave(wrapper);
      fireEvent.blur(trigger);
      fireEvent.focus(trigger);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      fireEvent.keyDown(wrapper, { key: 'Escape' });
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('does not attach outside-tap dismissal for hover-opened tooltips', () => {
      const handleOpenChange = vi.fn();
      render(
        <div>
          <Tooltip content="Info" delay={0} onOpenChange={handleOpenChange}>
            <button>Trigger</button>
          </Tooltip>
          <p>Elsewhere</p>
        </div>
      );
      fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      fireEvent.pointerDown(screen.getByText('Elsewhere'), { pointerType: 'mouse' });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      expect(handleOpenChange).toHaveBeenCalledTimes(1);
    });
  });
});
