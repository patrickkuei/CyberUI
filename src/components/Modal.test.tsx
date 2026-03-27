import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
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
});
