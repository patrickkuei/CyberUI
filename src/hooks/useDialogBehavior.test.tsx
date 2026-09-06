import { useState } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useDialogBehavior, type UseDialogBehaviorOptions } from './useDialogBehavior';

type HarnessProps = Partial<
  Pick<
    UseDialogBehaviorOptions,
    'closeOnEscape' | 'closeOnOutsideClick' | 'lockScroll' | 'restoreFocus' | 'onOpenSettle'
  >
> & {
  closeDuration?: number;
  openDuration?: number;
  onCloseSpy?: () => void;
};

/** Mimics the real self-managed components' own toggle logic exactly. */
function Harness({
  closeDuration = 100,
  openDuration = 50,
  closeOnEscape,
  closeOnOutsideClick,
  lockScroll,
  restoreFocus,
  onOpenSettle,
  onCloseSpy,
}: HarnessProps) {
  const [open, setOpen] = useState(false);
  const dialog = useDialogBehavior(open, {
    closeDuration,
    openDuration,
    closeOnEscape,
    closeOnOutsideClick,
    lockScroll,
    restoreFocus,
    onOpenSettle,
    onClose: () => {
      onCloseSpy?.();
      setOpen(false);
    },
  });

  const toggle = () => {
    if (open && !dialog.isClosing) {
      dialog.close();
    } else {
      setOpen(true);
      dialog.open();
    }
  };

  return (
    <>
      <button data-testid="trigger" onClick={toggle}>
        Trigger
      </button>
      {(open || dialog.isClosing) && (
        <div ref={dialog.overlayRef} data-testid="overlay" onClick={dialog.handleOverlayClick}>
          <div ref={dialog.containerRef} data-testid="panel" tabIndex={-1}>
            <button data-testid="close-btn" onClick={() => dialog.close()}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Mimics DatePicker: no openDuration, no isOpening/onOpenSettle animation staging. */
function ImmediateSettleHarness({
  onOpenSettleSpy,
  closeDuration = 100,
}: {
  onOpenSettleSpy?: () => void;
  closeDuration?: number;
}) {
  const [open, setOpen] = useState(false);
  const dialog = useDialogBehavior(open, {
    closeDuration,
    onOpenSettle: onOpenSettleSpy,
    onClose: () => setOpen(false),
  });

  const toggle = () => {
    if (open && !dialog.isClosing) {
      dialog.close();
    } else {
      setOpen(true);
      dialog.open();
    }
  };

  return (
    <>
      <button data-testid="trigger" onClick={toggle}>
        Trigger
      </button>
      <span data-testid="opening-state">{String(dialog.isOpening)}</span>
    </>
  );
}

/** Mimics Modal/Drawer's purely externally-controlled usage. */
function ControlledHarness({
  closeDuration = 100,
  openDuration = 50,
  onCloseSpy,
  restoreFocus,
}: HarnessProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useDialogBehavior(isOpen, {
    closeDuration,
    openDuration,
    lockScroll: true,
    restoreFocus,
    onClose: () => {
      onCloseSpy?.();
      setIsOpen(false);
    },
  });

  if (!isOpen && !dialog.isClosing) {
    return (
      <button data-testid="trigger" onClick={() => setIsOpen(true)}>
        Open
      </button>
    );
  }

  return (
    <div ref={dialog.overlayRef} data-testid="overlay" onClick={dialog.handleOverlayClick}>
      <div data-testid="panel" tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        Panel
      </div>
    </div>
  );
}

describe('useDialogBehavior', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Input-modality tracking is a module-level singleton shared by every
    // hook instance (see useDialogBehavior.ts) — reset it to a known state
    // so no test's mousedown/keydown activity leaks into the next one.
    fireEvent.keyDown(document, { key: 'Tab' });
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  });

  it('stages open: isOpening is true immediately, then false once openDuration elapses, firing onOpenSettle exactly once', () => {
    const onOpenSettle = vi.fn();
    render(<Harness openDuration={50} onOpenSettle={onOpenSettle} />);
    fireEvent.click(screen.getByTestId('trigger'));

    expect(screen.getByTestId('panel')).toBeInTheDocument();
    expect(onOpenSettle).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(49);
    });
    expect(onOpenSettle).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onOpenSettle).toHaveBeenCalledTimes(1);
  });

  it('omitting openDuration settles immediately: onOpenSettle fires synchronously and isOpening never becomes true', () => {
    const onOpenSettle = vi.fn();
    render(<ImmediateSettleHarness onOpenSettleSpy={onOpenSettle} />);
    fireEvent.click(screen.getByTestId('trigger'));

    expect(onOpenSettle).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('opening-state')).toHaveTextContent('false');
  });

  it('omitting openDuration schedules no timer, so no state update lands outside act() under real timers (regression: DatePicker had a spurious act() warning from an open-settle timer it never consumed)', async () => {
    vi.useRealTimers();
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      render(<ImmediateSettleHarness />);
      fireEvent.click(screen.getByTestId('trigger'));
      await new Promise((resolve) => setTimeout(resolve, 50));
      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      errorSpy.mockRestore();
    }
  });

  it('stages close: the panel stays mounted until closeDuration elapses, then onClose fires exactly once', () => {
    const onCloseSpy = vi.fn();
    render(<Harness closeDuration={100} onCloseSpy={onCloseSpy} />);
    fireEvent.click(screen.getByTestId('trigger'));
    act(() => {
      vi.advanceTimersByTime(50);
    });

    fireEvent.click(screen.getByTestId('close-btn'));
    expect(screen.getByTestId('panel')).toBeInTheDocument();
    expect(onCloseSpy).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(99);
    });
    expect(onCloseSpy).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('panel')).not.toBeInTheDocument();
  });

  it('close() is idempotent while already closing — repeated calls do not restart the close timer', () => {
    // Regression: Escape and outside-click stay live for the whole
    // close-animation window (isOpen doesn't flip to false until the close
    // timer completes), and both call close() unconditionally with no
    // isClosing guard. Before this fix, each repeated call cleared and
    // rescheduled the same timer for a fresh full closeDuration, so mashing
    // Escape (or repeatedly clicking outside) during the close window could
    // defer completion indefinitely instead of being a harmless no-op.
    const onCloseSpy = vi.fn();
    render(<Harness closeDuration={100} onCloseSpy={onCloseSpy} />);
    fireEvent.click(screen.getByTestId('trigger')); // open
    act(() => {
      vi.advanceTimersByTime(50);
    });

    fireEvent.click(screen.getByTestId('close-btn')); // begin closing
    act(() => {
      vi.advanceTimersByTime(50); // halfway through the 100ms close
    });

    // Repeated close attempts mid-close must be no-ops, not timer restarts.
    fireEvent.click(screen.getByTestId('close-btn'));
    fireEvent.click(screen.getByTestId('close-btn'));

    act(() => {
      vi.advanceTimersByTime(50); // completes the ORIGINAL 100ms window
    });
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it('reopening mid-close cancels the pending close entirely — onClose never fires for the aborted close, and a fresh open-settle timer starts', () => {
    // Regression scenario DatePicker/Drawer's own comments describe: a fast
    // re-click during the close animation must cancel it, not let it fire
    // late once the reopen has already started.
    const onCloseSpy = vi.fn();
    const onOpenSettle = vi.fn();
    render(<Harness closeDuration={100} openDuration={50} onCloseSpy={onCloseSpy} onOpenSettle={onOpenSettle} />);

    fireEvent.click(screen.getByTestId('trigger')); // open
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(onOpenSettle).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('trigger')); // begin closing
    act(() => {
      vi.advanceTimersByTime(30); // still mid close-animation
    });

    fireEvent.click(screen.getByTestId('trigger')); // reopen before the close settles

    // Advance well past when the aborted close would have fired.
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(onCloseSpy).not.toHaveBeenCalled();
    expect(onOpenSettle).toHaveBeenCalledTimes(2);
    expect(screen.getByTestId('panel')).toBeInTheDocument();
  });

  it('closing mid-open cancels the pending open-settle timer, so onOpenSettle never fires for the aborted open', () => {
    const onOpenSettle = vi.fn();
    const onCloseSpy = vi.fn();
    render(<Harness openDuration={50} closeDuration={100} onOpenSettle={onOpenSettle} onCloseSpy={onCloseSpy} />);

    fireEvent.click(screen.getByTestId('trigger')); // open
    act(() => {
      vi.advanceTimersByTime(20); // still mid open-animation
    });

    fireEvent.click(screen.getByTestId('close-btn')); // close before open settles

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(onOpenSettle).not.toHaveBeenCalled();
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it('clears both timers on unmount, with no post-unmount state update', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      const { unmount } = render(<Harness openDuration={50} closeDuration={100} />);
      fireEvent.click(screen.getByTestId('trigger'));

      unmount();
      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      errorSpy.mockRestore();
    }
  });

  it('closes on Escape by default, and not when closeOnEscape is false', () => {
    const onCloseSpy1 = vi.fn();
    const { unmount } = render(<Harness closeDuration={100} onCloseSpy={onCloseSpy1} />);
    fireEvent.click(screen.getByTestId('trigger'));
    act(() => {
      vi.advanceTimersByTime(50);
    });

    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onCloseSpy1).toHaveBeenCalledTimes(1);
    unmount();

    const onCloseSpy2 = vi.fn();
    render(<Harness closeDuration={100} closeOnEscape={false} onCloseSpy={onCloseSpy2} />);
    fireEvent.click(screen.getByTestId('trigger'));
    act(() => {
      vi.advanceTimersByTime(50);
    });
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onCloseSpy2).not.toHaveBeenCalled();
  });

  it('closes on a mousedown outside containerRef, and not on one inside it', () => {
    const onCloseSpy = vi.fn();
    render(<Harness closeDuration={100} onCloseSpy={onCloseSpy} />);
    fireEvent.click(screen.getByTestId('trigger'));
    act(() => {
      vi.advanceTimersByTime(50);
    });

    fireEvent.mouseDown(screen.getByTestId('panel'));
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onCloseSpy).not.toHaveBeenCalled();

    fireEvent.mouseDown(document.body);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it('does not close on outside mousedown when closeOnOutsideClick is false', () => {
    const onCloseSpy = vi.fn();
    render(<Harness closeDuration={100} closeOnOutsideClick={false} onCloseSpy={onCloseSpy} />);
    fireEvent.click(screen.getByTestId('trigger'));
    act(() => {
      vi.advanceTimersByTime(50);
    });

    fireEvent.mouseDown(document.body);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onCloseSpy).not.toHaveBeenCalled();
  });

  it('handleOverlayClick closes on a click that lands on the overlay itself, not on a click inside the panel', () => {
    const onCloseSpy = vi.fn();
    render(<ControlledHarness closeDuration={100} onCloseSpy={onCloseSpy} />);
    fireEvent.click(screen.getByTestId('trigger'));
    act(() => {
      vi.advanceTimersByTime(50);
    });

    fireEvent.click(screen.getByTestId('panel'));
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onCloseSpy).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('overlay'));
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it('an isOpen prop transition from false to true begins an open cycle automatically (externally-controlled usage)', () => {
    render(<ControlledHarness openDuration={50} />);
    fireEvent.click(screen.getByTestId('trigger'));
    expect(screen.getByTestId('panel')).toBeInTheDocument();
  });

  it('restoreFocus "if-unclaimed" (default): restores focus to the pre-open element when nothing else claimed it', () => {
    render(<Harness closeDuration={100} />);
    const trigger = screen.getByTestId('trigger');
    trigger.focus();
    fireEvent.click(trigger);
    act(() => {
      vi.advanceTimersByTime(50);
    });

    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(trigger).toHaveFocus();
  });

  it('restoreFocus "if-unclaimed": does not fight focus that already landed elsewhere (e.g. a click into another field)', () => {
    render(
      <>
        <input data-testid="elsewhere" />
        <Harness closeDuration={100} />
      </>
    );
    const trigger = screen.getByTestId('trigger');
    trigger.focus();
    fireEvent.click(trigger);
    act(() => {
      vi.advanceTimersByTime(50);
    });

    const elsewhere = screen.getByTestId('elsewhere');
    elsewhere.focus();
    fireEvent.mouseDown(elsewhere);
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(elsewhere).toHaveFocus();
    expect(trigger).not.toHaveFocus();
  });

  it('restoreFocus "if-unclaimed": does not restore focus after a pointer-driven dismissal, even when focus is unclaimed', () => {
    // A mouse/touch user already knows where their pointer is — forcing
    // focus back to the trigger after a click-driven close is the
    // surprising move, not the helpful one. Keyboard-only is the whole
    // point of this option; see useDialogBehavior.ts's restoreFocus JSDoc.
    render(<Harness closeDuration={100} />);
    const trigger = screen.getByTestId('trigger');
    trigger.focus();
    fireEvent.click(trigger);
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // A real pointer click always fires mousedown before click, and moves
    // focus away from the trigger as a default browser action — fireEvent
    // doesn't simulate that default action, so it's done explicitly here.
    trigger.blur();
    fireEvent.mouseDown(document.body);
    fireEvent.click(document.body);
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(trigger).not.toHaveFocus();
  });

  it('restoreFocus "if-unclaimed": does restore focus after a keyboard-driven dismissal (Escape)', () => {
    render(<Harness closeDuration={100} />);
    const trigger = screen.getByTestId('trigger');
    trigger.focus();
    fireEvent.click(trigger);
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // Prime modality as pointer first, to prove Escape's own keydown flips
    // it back to keyboard rather than the restore relying on stale state.
    fireEvent.mouseDown(screen.getByTestId('panel'));
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(trigger).toHaveFocus();
  });

  it('ref-counts body scroll lock: stays locked until every open dialog has closed, regardless of order', () => {
    function TwoDialogs() {
      return (
        <>
          <ControlledHarness closeDuration={100} />
          <ControlledHarness closeDuration={100} />
        </>
      );
    }
    render(<TwoDialogs />);
    const triggers = screen.getAllByTestId('trigger');

    fireEvent.click(triggers[0]);
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.click(triggers[1]);
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(document.body.style.overflow).toBe('hidden');

    // Close the second-opened dialog first (non-LIFO order).
    fireEvent.click(screen.getAllByTestId('overlay')[1]);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(document.body.style.overflow).toBe('hidden');

    // Now close the remaining one — only now should scroll actually unlock.
    fireEvent.click(screen.getAllByTestId('overlay')[0]);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(document.body.style.overflow).toBe('');
  });

  it('does not lock body scroll when lockScroll is not set', () => {
    render(<Harness closeDuration={100} />);
    fireEvent.click(screen.getByTestId('trigger'));
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(document.body.style.overflow).toBe('');
  });
});
