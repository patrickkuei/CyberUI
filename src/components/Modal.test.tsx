import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import Modal, { type ModalSize } from './Modal';
import type { ResponsiveValue } from '../utils/responsive';
import { stubReducedMotion, type ReducedMotionStub } from '../test/reducedMotion';

// Mock the portal to render into the container for testing
vi.mock('react-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-dom')>();
  return {
    ...actual,
    createPortal: (node: React.ReactNode) => node,
  };
});

describe('Modal Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders nothing when closed', () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('renders content when open', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="System Title">
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.getByText('System Title')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );
    
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    
    // The Modal uses a timeout for closing animation
    act(() => {
      vi.advanceTimersByTime(500);
    });
    
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onConfirm when confirm button is clicked', () => {
    const handleConfirm = vi.fn();
    render(
      <Modal isOpen={true} onClose={vi.fn()} onConfirm={handleConfirm} confirmText="Sync">
        <div>Content</div>
      </Modal>
    );
    
    const confirmButton = screen.getByText('Sync');
    fireEvent.click(confirmButton);
    
    expect(handleConfirm).toHaveBeenCalled();
  });

  it('calls onCancel when cancel button is clicked', () => {
    const handleCancel = vi.fn();
    render(
      <Modal isOpen={true} onClose={vi.fn()} onCancel={handleCancel} cancelText="Abort">
        <div>Content</div>
      </Modal>
    );
    
    const cancelButton = screen.getByText('Abort');
    fireEvent.click(cancelButton);

    expect(handleCancel).toHaveBeenCalled();
  });

  it('calls onClose on overlay click by default, and not when closeOnOverlayClick is false', () => {
    const handleClose1 = vi.fn();
    const { unmount } = render(
      <Modal isOpen={true} onClose={handleClose1}>
        <div>Content</div>
      </Modal>
    );
    fireEvent.click(screen.getByRole('dialog', { hidden: true }).parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(handleClose1).toHaveBeenCalled();
    unmount();

    const handleClose2 = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose2} closeOnOverlayClick={false}>
        <div>Content</div>
      </Modal>
    );
    fireEvent.click(screen.getByRole('dialog', { hidden: true }).parentElement as HTMLElement);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(handleClose2).not.toHaveBeenCalled();
  });

  it('does not close when clicking inside the panel', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    );
    fireEvent.click(screen.getByRole('dialog', { hidden: true }));
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose on Escape by default, and not when closeOnEscape is false', () => {
    const handleClose1 = vi.fn();
    const { unmount } = render(
      <Modal isOpen={true} onClose={handleClose1}>
        <div>Content</div>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(handleClose1).toHaveBeenCalled();
    unmount();

    const handleClose2 = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose2} closeOnEscape={false}>
        <div>Content</div>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(handleClose2).not.toHaveBeenCalled();
  });

  it('restores focus to the previously-focused element after closing', () => {
    render(<button data-testid="trigger">Open</button>);
    const trigger = screen.getByTestId('trigger');
    trigger.focus();

    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(handleClose).toHaveBeenCalled();
    expect(trigger).toHaveFocus();
  });

  it('locks body scroll while open and restores it on unmount', () => {
    const { unmount } = render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <div>Content</div>
      </Modal>
    );
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it('clears the pending open-settle timer on unmount, with no post-unmount state update', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      const { unmount } = render(
        <Modal isOpen={true} onClose={vi.fn()}>
          <div>Content</div>
        </Modal>
      );
      unmount();
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      errorSpy.mockRestore();
    }
  });

  it('clears the pending close timer on unmount, with no post-unmount state update', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      const { unmount } = render(
        <Modal isOpen={true} onClose={vi.fn()}>
          <div>Content</div>
        </Modal>
      );
      act(() => {
        vi.advanceTimersByTime(700);
      });
      fireEvent.click(screen.getByLabelText('Close modal'));
      unmount();
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      errorSpy.mockRestore();
    }
  });

  it('pairs every movement class with a motion-reduce override and a 150ms duration', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Uplink" onConfirm={vi.fn()}>
        <div>Content</div>
      </Modal>
    );
    const panel = screen.getByRole('dialog', { hidden: true });
    expect(panel.className).toContain('motion-reduce:duration-150');
    expect(panel.className).toContain('motion-reduce:scale-100');
    expect(panel.parentElement!.className).toContain('motion-reduce:duration-150');
    expect(screen.getByLabelText('Close modal').className).toContain('motion-reduce:rotate-0');
    expect(screen.getByText('Uplink').parentElement!.className).toContain('motion-reduce:translate-y-0');
    expect(screen.getByText('Content').parentElement!.className).toContain('motion-reduce:translate-y-0');
  });

  it('exposes the dialog to assistive technology (no aria-hidden ancestor hides it)', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="System Title">
        <div>Modal Content</div>
      </Modal>
    );
    // Deliberately queried WITHOUT { hidden: true } — if any ancestor
    // (e.g. the overlay wrapper) carries aria-hidden, this throws instead
    // of finding the dialog.
    expect(screen.getByRole('dialog', { name: 'System Title' })).toBeInTheDocument();
  });

  it('shows title, body and footer at full opacity from the start under reduced motion (one 150ms dialog fade)', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Uplink" onConfirm={vi.fn()}>
        <div>Content</div>
      </Modal>
    );
    const title = screen.getByText('Uplink').parentElement!;
    const body = screen.getByText('Content').parentElement!;
    const footer = screen.getByText('Confirm').closest('.border-t') as HTMLElement;
    // Still opening: default motion hides the sections (opacity-0); reduced motion overrides that.
    for (const section of [title, body, footer]) {
      expect(section.className).toContain('opacity-0');
      expect(section.className).toContain('motion-reduce:opacity-100');
    }
  });
});

describe('Modal under prefers-reduced-motion', () => {
  let motion: ReducedMotionStub;

  beforeEach(() => {
    vi.useFakeTimers();
    motion = stubReducedMotion(true);
  });

  afterEach(() => {
    motion.restore();
    vi.useRealTimers();
  });

  it('boots in 150ms and fires onCRTBootComplete exactly once', () => {
    const onCRTBootComplete = vi.fn();
    render(
      <Modal isOpen={true} onClose={vi.fn()} onCRTBootComplete={onCRTBootComplete}>
        <div>Content</div>
      </Modal>
    );
    const panel = screen.getByRole('dialog', { hidden: true });
    expect(panel.className).toContain('animate-crt-power-on');

    act(() => {
      vi.advanceTimersByTime(149);
    });
    expect(onCRTBootComplete).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onCRTBootComplete).toHaveBeenCalledTimes(1);
    expect(panel).toHaveFocus();
    expect(panel.className).toContain('animate-rgb-glow');

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(onCRTBootComplete).toHaveBeenCalledTimes(1);
  });

  it('completes the close at 150ms instead of the default 400ms', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    );
    act(() => {
      vi.advanceTimersByTime(150);
    });

    fireEvent.click(screen.getByLabelText('Close modal'));
    expect(screen.getByRole('dialog', { hidden: true }).className).toContain('animate-crt-power-off');
    act(() => {
      vi.advanceTimersByTime(149);
    });
    expect(handleClose).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('caps consumer-supplied animation durations at 150ms', () => {
    const handleClose = vi.fn();
    const onCRTBootComplete = vi.fn();
    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
        onCRTBootComplete={onCRTBootComplete}
        animation={{ openDuration: 2000, closeDuration: 1000 }}
      >
        <div>Content</div>
      </Modal>
    );
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(onCRTBootComplete).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});

describe('Modal size (#94)', () => {
  // Everything on the panel except the size classes, as rendered on open with
  // the default variant and CRT effects.
  const PANEL_BASE =
    'relative bg-surface border-2 rounded-lg max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100';
  const PANEL_STATE = 'animate-crt-power-on border-accent shadow-lg-accent';

  const panelClass = (size?: ResponsiveValue<ModalSize>): string => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} size={size}>
        <div>Payload</div>
      </Modal>
    );
    return screen.getByRole('dialog').className;
  };

  // Pinned from 2.7.1: a plain string size must keep rendering exactly this.
  it.each([
    ['sm', 'max-w-md'],
    ['md', 'max-w-lg'],
    ['lg', 'max-w-2xl'],
    ['xl', 'max-w-4xl'],
    ['fullscreen', 'max-w-none w-full h-full'],
    [undefined, 'max-w-2xl'],
  ] as const)('renders the same class list as before for size=%s', (size, sizeClasses) => {
    expect(panelClass(size)).toBe(`${PANEL_BASE} ${sizeClasses} ${PANEL_STATE}`);
  });

  it('renders the 2xl step as a 72rem (1152px) max width', () => {
    expect(panelClass('2xl')).toBe(`${PANEL_BASE} max-w-6xl ${PANEL_STATE}`);
  });

  it('gives each breakpoint of a responsive size its own prefixed classes', () => {
    const tokens = panelClass({ base: 'sm', md: 'lg', xl: '2xl' }).split(' ');
    expect(tokens).toEqual(
      expect.arrayContaining([
        'max-w-md', 'w-auto', 'h-auto',
        'md:max-w-2xl', 'md:w-auto', 'md:h-auto',
        'xl:max-w-6xl', 'xl:w-auto', 'xl:h-auto',
      ])
    );
    expect(tokens.filter((t) => /^(sm|lg|2xl):/.test(t))).toEqual([]);
  });

  it('switches from fullscreen on phones to a fixed width on desktop, undoing full width and height', () => {
    const tokens = panelClass({ base: 'fullscreen', lg: '2xl' }).split(' ');
    expect(tokens).toEqual(
      expect.arrayContaining(['max-w-none', 'w-full', 'h-full', 'lg:max-w-6xl', 'lg:w-auto', 'lg:h-auto'])
    );
    // fullscreen only changes width and height; the corners and 90vh cap stay.
    expect(tokens).toEqual(expect.arrayContaining(['rounded-lg', 'max-h-[90vh]']));
  });

  it('switches from a fixed width to fullscreen at a larger breakpoint', () => {
    const tokens = panelClass({ base: 'md', sm: 'fullscreen' }).split(' ');
    expect(tokens).toEqual(
      expect.arrayContaining(['max-w-lg', 'w-auto', 'h-auto', 'sm:max-w-none', 'sm:w-full', 'sm:h-full'])
    );
  });

  it('uses lg below the first breakpoint when a responsive size has no base', () => {
    const tokens = panelClass({ md: 'fullscreen' }).split(' ');
    expect(tokens).toEqual(
      expect.arrayContaining(['max-w-2xl', 'w-auto', 'h-auto', 'md:max-w-none', 'md:w-full', 'md:h-full'])
    );
  });

  // getResponsiveClasses builds the prefixed classes at runtime, so Tailwind
  // only generates them if Modal.tsx also spells them out literally.
  it('spells out every responsive class literally in Modal.tsx so Tailwind generates it', () => {
    const literal = new Set(readFileSync(join(__dirname, 'Modal.tsx'), 'utf8').split(/[\s"'`]+/));
    const sizes: ModalSize[] = ['sm', 'md', 'lg', 'xl', '2xl', 'fullscreen'];
    for (const bp of ['sm', 'md', 'lg', 'xl', '2xl'] as const) {
      for (const size of sizes) {
        const { unmount } = render(
          <Modal isOpen={true} onClose={vi.fn()} size={{ [bp]: size }}>
            <div>Payload</div>
          </Modal>
        );
        const prefixed = screen
          .getByRole('dialog')
          .className.split(' ')
          .filter((t) => t.startsWith(`${bp}:`));
        expect(prefixed).toHaveLength(3);
        for (const cls of prefixed) expect(literal.has(cls), cls).toBe(true);
        unmount();
      }
    }
  });
});
