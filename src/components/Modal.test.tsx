import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Modal from './Modal';

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
});
