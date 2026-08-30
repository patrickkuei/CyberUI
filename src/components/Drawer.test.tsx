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
});
