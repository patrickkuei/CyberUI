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

  // Pins each single placement's positioning (panel + arrow). The classes
  // the old maps used must all survive cn()/twMerge alongside the resets.
  const SINGLE_PLACEMENT = {
    top: { panel: ['bottom-full', 'left-1/2', '-translate-x-1/2', 'mb-2'], arrow: ['top-full', 'left-1/2', '-translate-x-1/2', '-mt-[5px]'] },
    bottom: { panel: ['top-full', 'left-1/2', '-translate-x-1/2', 'mt-2'], arrow: ['bottom-full', 'left-1/2', '-translate-x-1/2', '-mb-[5px]'] },
    left: { panel: ['right-full', 'top-1/2', '-translate-y-1/2', 'mr-2'], arrow: ['left-full', 'top-1/2', '-translate-y-1/2', '-ml-[5px]'] },
    right: { panel: ['left-full', 'top-1/2', '-translate-y-1/2', 'ml-2'], arrow: ['right-full', 'top-1/2', '-translate-y-1/2', '-mr-[5px]'] },
  } as const;

  it.each(['top', 'bottom', 'left', 'right'] as const)(
    'positions panel and arrow for placement="%s" without breakpoint prefixes',
    (placement) => {
      render(
        <Tooltip content="Info" open placement={placement}>
          <button>Trigger</button>
        </Tooltip>
      );
      const panel = screen.getByRole('tooltip');
      const arrow = panel.lastElementChild as HTMLElement;
      for (const cls of SINGLE_PLACEMENT[placement].panel) expect(panel).toHaveClass(cls);
      for (const cls of SINGLE_PLACEMENT[placement].arrow) expect(arrow).toHaveClass(cls);
      // The shorthand resets must survive cn()/twMerge next to the longhands.
      expect(panel).toHaveClass('inset-auto', 'm-0');
      expect(arrow).toHaveClass('inset-auto', 'm-0');
      expect(panel.className).not.toMatch(/(^|\s)(sm|md|lg|xl|2xl):/);
    }
  );

  it('resets the base placement at the breakpoint for a responsive placement (panel and arrow)', () => {
    render(
      <Tooltip content="Info" open placement={{ base: 'top', md: 'right' }}>
        <button>Trigger</button>
      </Tooltip>
    );
    const panel = screen.getByRole('tooltip');
    const arrow = panel.lastElementChild as HTMLElement;
    // Base: above the trigger.
    for (const cls of SINGLE_PLACEMENT.top.panel) expect(panel).toHaveClass(cls);
    for (const cls of SINGLE_PLACEMENT.top.arrow) expect(arrow).toHaveClass(cls);
    // md+: right of the trigger, with every base-set property reset.
    for (const cls of ['md:inset-auto', 'md:left-full', 'md:top-1/2', 'md:translate-x-0', 'md:-translate-y-1/2', 'md:m-0', 'md:ml-2']) {
      expect(panel).toHaveClass(cls);
    }
    for (const cls of ['md:inset-auto', 'md:right-full', 'md:top-1/2', 'md:translate-x-0', 'md:-translate-y-1/2', 'md:m-0', 'md:-mr-[5px]']) {
      expect(arrow).toHaveClass(cls);
    }
  });

  it('defaults the base placement to top for a responsive placement without base', () => {
    render(
      <Tooltip content="Info" open placement={{ md: 'left' }}>
        <button>Trigger</button>
      </Tooltip>
    );
    const panel = screen.getByRole('tooltip');
    for (const cls of SINGLE_PLACEMENT.top.panel) expect(panel).toHaveClass(cls);
    expect(panel).toHaveClass('md:right-full');
    expect(panel.lastElementChild as HTMLElement).toHaveClass('top-full', 'md:left-full');
  });

  // Pins the full default look (border + glow) for panel and arrow; the
  // arrow is the panel's last decorative child.
  const GLOW_BY_VARIANT = {
    primary: 'shadow-primary',
    secondary: 'shadow-secondary',
    accent: 'shadow-lg-accent',
  } as const;

  it.each(['primary', 'secondary', 'accent'] as const)(
    'draws the %s border and glow on panel and arrow by default',
    (variant) => {
      render(
        <Tooltip content="Info" open variant={variant}>
          <button>Trigger</button>
        </Tooltip>
      );
      const panel = screen.getByRole('tooltip');
      const arrow = panel.lastElementChild as HTMLElement;
      for (const el of [panel, arrow]) {
        expect(el).toHaveClass(`border-${variant}`);
        expect(el).toHaveClass(GLOW_BY_VARIANT[variant]);
      }
    }
  );

  it.each(['primary', 'secondary', 'accent'] as const)(
    'keeps only the %s border on panel and arrow when glow={false}',
    (variant) => {
      render(
        <Tooltip content="Info" open variant={variant} glow={false}>
          <button>Trigger</button>
        </Tooltip>
      );
      const panel = screen.getByRole('tooltip');
      const arrow = panel.lastElementChild as HTMLElement;
      for (const el of [panel, arrow]) {
        expect(el).toHaveClass(`border-${variant}`);
        expect(el.className).not.toMatch(/\bshadow-/);
      }
    }
  );

  it('opens on hover under a fake clock starting at 0', () => {
    vi.useRealTimers();
    vi.useFakeTimers({ now: 0 });
    render(
      <Tooltip content="Info" delay={0}>
        <button>Trigger</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('Trigger').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
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

    it('removes its outside-tap listener when unmounted while tap-opened', () => {
      const addSpy = vi.spyOn(document, 'addEventListener');
      const removeSpy = vi.spyOn(document, 'removeEventListener');
      const { unmount } = render(
        <Tooltip content="Info">
          <span>Label</span>
        </Tooltip>
      );
      tap(screen.getByText('Label'));
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      const added = addSpy.mock.calls.filter(([type]) => type === 'pointerdown');
      expect(added).toHaveLength(1);
      unmount();
      const removed = removeSpy.mock.calls.filter(([type]) => type === 'pointerdown');
      expect(removed).toHaveLength(1);
      expect(removed[0][1]).toBe(added[0][1]);
      expect(removed[0][2]).toEqual(added[0][2]);
      addSpy.mockRestore();
      removeSpy.mockRestore();
    });

    it('closes on an outside tap even if another handler stops propagation', () => {
      render(
        <div>
          <Tooltip content="Info">
            <span>Label</span>
          </Tooltip>
          <p onPointerDown={(e) => e.stopPropagation()}>Elsewhere</p>
        </div>
      );
      tap(screen.getByText('Label'));
      fireEvent.pointerDown(screen.getByText('Elsewhere'), { pointerType: 'touch' });
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('leaves only the second tooltip open after tapping A then B', () => {
      render(
        <div>
          <Tooltip content="Alpha readout">
            <span>A</span>
          </Tooltip>
          <Tooltip content="Beta readout">
            <span>B</span>
          </Tooltip>
        </div>
      );
      tap(screen.getByText('A'));
      expect(screen.getByRole('tooltip')).toHaveTextContent('Alpha readout');
      tap(screen.getByText('B'));
      const tooltips = screen.getAllByRole('tooltip');
      expect(tooltips).toHaveLength(1);
      expect(tooltips[0]).toHaveTextContent('Beta readout');
    });

    it('does not dismiss on outside pointerdown when a controlled parent ignored the tap and opened it later', () => {
      const handleOpenChange = vi.fn();
      const { rerender } = render(
        <div>
          <Tooltip content="Info" open={false} onOpenChange={handleOpenChange}>
            <span>Label</span>
          </Tooltip>
          <p>Elsewhere</p>
        </div>
      );
      const trigger = screen.getByText('Label');
      fireEvent.pointerDown(trigger, { pointerType: 'touch' });
      fireEvent.pointerUp(trigger, { pointerType: 'touch' });
      expect(handleOpenChange).toHaveBeenLastCalledWith(true);
      // The parent ignores the tap, then opens the tooltip itself later.
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      rerender(
        <div>
          <Tooltip content="Info" open={true} onOpenChange={handleOpenChange}>
            <span>Label</span>
          </Tooltip>
          <p>Elsewhere</p>
        </div>
      );
      handleOpenChange.mockClear();
      fireEvent.pointerDown(screen.getByText('Elsewhere'), { pointerType: 'mouse' });
      expect(handleOpenChange).not.toHaveBeenCalled();
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });
});
