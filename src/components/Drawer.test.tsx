import { useState } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Drawer from './Drawer';

// Mock the portal to render into the container for testing
vi.mock('react-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-dom')>();
  return {
    ...actual,
    createPortal: (node: React.ReactNode) => node,
  };
});

describe('Drawer Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders nothing when closed', () => {
    render(
      <Drawer isOpen={false} onClose={vi.fn()}>
        <div>Drawer Content</div>
      </Drawer>
    );
    expect(screen.queryByText('Drawer Content')).not.toBeInTheDocument();
  });

  it('renders content and title when open', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} title="System Panel">
        <div>Drawer Content</div>
      </Drawer>
    );
    expect(screen.getByText('System Panel')).toBeInTheDocument();
    expect(screen.getByText('Drawer Content')).toBeInTheDocument();
  });

  it('has dialog role with aria-modal and title-linked aria-labelledby', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} title="Filters">
        <div>Content</div>
      </Drawer>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby');
    expect(screen.getByText('Filters').id).toBe(dialog.getAttribute('aria-labelledby'));
  });

  it('falls back to ariaLabel when no title is set', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} ariaLabel="Custom Drawer">
        <div>Content</div>
      </Drawer>
    );
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'Custom Drawer');
  });

  it('calls onClose when the close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>
    );

    fireEvent.click(screen.getByLabelText('Close drawer'));
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it('hides the close button when showCloseButton is false', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} showCloseButton={false} title="No Close">
        <div>Content</div>
      </Drawer>
    );
    expect(screen.queryByLabelText('Close drawer')).not.toBeInTheDocument();
  });

  it('calls onClose on overlay click by default', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>
    );

    fireEvent.click(screen.getByRole('dialog').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it('does not call onClose on overlay click when closeOnOverlayClick is false', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose} closeOnOverlayClick={false}>
        <div>Content</div>
      </Drawer>
    );

    fireEvent.click(screen.getByRole('dialog').parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('does not close when clicking inside the panel', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>
    );

    fireEvent.click(screen.getByRole('dialog'));
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose on Escape by default', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).toHaveBeenCalled();
  });

  it('does not call onClose on Escape when closeOnEscape is false', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose} closeOnEscape={false}>
        <div>Content</div>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it.each([
    ['left', 'left-0'],
    ['right', 'right-0'],
    ['top', 'top-0'],
    ['bottom', 'bottom-0'],
  ] as const)('positions the panel on side=%s', (side, expectedClass) => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} side={side}>
        <div>Content</div>
      </Drawer>
    );
    expect(screen.getByRole('dialog').className).toContain(expectedClass);
  });

  it.each([
    ['sm', 'w-72'],
    ['md', 'w-96'],
    ['lg', 'w-[32rem]'],
    ['xl', 'w-[40rem]'],
    ['full', 'w-full'],
  ] as const)('applies width class for size=%s on a horizontal side', (size, expectedClass) => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} side="right" size={size}>
        <div>Content</div>
      </Drawer>
    );
    expect(screen.getByRole('dialog').className).toContain(expectedClass);
  });

  it('applies height classes for a vertical side', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} side="bottom" size="lg">
        <div>Content</div>
      </Drawer>
    );
    expect(screen.getByRole('dialog').className).toContain('h-96');
  });

  it('applies the danger variant glow border', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} variant="danger">
        <div>Content</div>
      </Drawer>
    );
    expect(screen.getByRole('dialog').className).toContain('border-error');
  });

  it('locks body scroll while open and restores it on unmount', () => {
    const { unmount } = render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        <div>Content</div>
      </Drawer>
    );
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it('starts the open transition immediately instead of sitting hidden with duration-0 for the whole timer window', () => {
    // Regression: the panel used to render fully hidden with a `duration-0`
    // transition class for the entire OPEN_DURATION window, then snap to
    // `duration-300` only once the timer fired — a ~350ms-late pop instead
    // of a continuous slide-in. Right after mount (before the open timer
    // fires) the panel should already be transitioning toward its visible
    // position with an active transition duration.
    render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        <div>Content</div>
      </Drawer>
    );

    const panel = screen.getByRole('dialog');
    expect(panel.className).not.toContain('duration-0');
    expect(panel.className).toContain('duration-300');
    expect(panel.className).toContain('translate-x-0');
  });

  it('settles and moves focus to the panel at exactly 300ms, matching the duration-300 CSS transition', () => {
    // Regression: OPEN_DURATION (the JS settle timer) was 350ms while the
    // CSS class driving the transition was `duration-300` — a mismatch that
    // also delayed the panelRef.focus() call past when the transition
    // actually visually finished.
    render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        <div>Content</div>
      </Drawer>
    );
    const panel = screen.getByRole('dialog');

    expect(panel).not.toHaveFocus();

    act(() => {
      vi.advanceTimersByTime(299);
    });
    // Just before the CSS transition (300ms) completes: still mid-transition.
    expect(panel.className).not.toContain('animate-rgb-glow');
    expect(panel).not.toHaveFocus();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    // Settled exactly when the 300ms transition finishes.
    expect(panel.className).toContain('animate-rgb-glow');
    expect(panel).toHaveFocus();
  });

  it('cancels the pending open timer when closing mid-open, preventing a stale focus() call on the closing panel', () => {
    // Regression: closeDrawer never cleared openTimeoutRef, so closing while
    // the initial open-animation timer was still pending let the stale timer
    // fire later, calling panelRef.current?.focus() and yanking focus back
    // into a drawer that was already closing.
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>
    );
    const panel = screen.getByRole('dialog');

    // Close while the initial open timer (300ms) is still pending.
    act(() => {
      vi.advanceTimersByTime(50);
    });
    fireEvent.click(screen.getByLabelText('Close drawer'));

    const outside = document.createElement('button');
    document.body.appendChild(outside);
    outside.focus();

    // Advance well past both the moment the stale open timer would have
    // fired and the close timer.
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).toHaveBeenCalled();
    expect(panel).not.toHaveFocus();
    expect(outside).toHaveFocus();

    document.body.removeChild(outside);
  });

  it('does not restore focus to the trigger on every parent re-render while still open', () => {
    // Regression: the scroll-lock/focus-restore effect's cleanup
    // unconditionally restored focus, and the effect depended on
    // `handleKeyDown`, whose identity changed whenever the consumer passed a
    // fresh inline onClose (exactly the pattern in this component's own
    // JSDoc usage example) — so any unrelated parent re-render while the
    // drawer was open re-ran the effect and yanked focus back to the trigger
    // mid-interaction (e.g. while typing in a form inside the drawer).
    function Harness() {
      const [isOpen, setIsOpen] = useState(true);
      const [, forceRerender] = useState(0);
      return (
        <>
          <button data-testid="trigger">Trigger</button>
          <button data-testid="force-rerender" onClick={() => forceRerender((n) => n + 1)}>
            force
          </button>
          {/* Fresh inline closure every render, matching the documented usage pattern */}
          <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <input data-testid="drawer-input" />
          </Drawer>
        </>
      );
    }

    render(<Harness />);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    const input = screen.getByTestId('drawer-input');
    input.focus();
    expect(input).toHaveFocus();

    // Unrelated parent re-renders (fresh onClose identity each time) while
    // the drawer remains open must not steal focus.
    fireEvent.click(screen.getByTestId('force-rerender'));
    fireEvent.click(screen.getByTestId('force-rerender'));

    expect(input).toHaveFocus();
  });
});
