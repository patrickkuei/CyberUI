import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import Image from './Image';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runAllTimers();
  vi.useRealTimers();
  cleanup();
});

describe('Image', () => {
  it('renders without crashing', () => {
    render(<Image src="test.jpg" alt="Test image" />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<Image src="test.jpg" alt="Test image" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading image');
  });

  it('hides loading state after image loads', () => {
    render(<Image src="test.jpg" alt="Test image" />);
    fireEvent.load(screen.getByAltText('Test image'));
    expect(screen.queryByRole('status')).toBeNull();
  });

  it('shows error state when image fails to load', () => {
    render(<Image src="broken.jpg" alt="Broken image" />);
    fireEvent.error(screen.getByAltText('Broken image'));
    expect(screen.getByRole('alert')).toHaveAttribute('aria-label', 'Failed to load image');
    expect(screen.getByText('Failed to load image')).toBeInTheDocument();
  });

  it('calls onLoad callback when image loads', () => {
    const handleLoad = vi.fn();
    render(<Image src="test.jpg" alt="Test image" onLoad={handleLoad} />);
    fireEvent.load(screen.getByAltText('Test image'));
    expect(handleLoad).toHaveBeenCalledTimes(1);
  });

  it('calls onError callback when image fails', () => {
    const handleError = vi.fn();
    render(<Image src="broken.jpg" alt="Broken image" onError={handleError} />);
    fireEvent.error(screen.getByAltText('Broken image'));
    expect(handleError).toHaveBeenCalledTimes(1);
  });

  it('renders container as button role when preview is true (default)', () => {
    render(<Image src="test.jpg" alt="Test image" preview />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test image. Click to enlarge');
  });

  it('is not interactive when preview is false', () => {
    render(<Image src="test.jpg" alt="Test image" preview={false} />);
    // No button role — clicking the image does not open a preview
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('opens preview dialog on click when preview is true', () => {
    render(<Image src="test.jpg" alt="Test image" preview />);
    fireEvent.load(screen.getByAltText('Test image'));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('dialog', { name: 'Preview: Test image' })).toBeInTheDocument();
  });

  it('calls onPreviewOpen when preview is opened', () => {
    const handlePreviewOpen = vi.fn();
    render(<Image src="test.jpg" alt="Test image" preview onPreviewOpen={handlePreviewOpen} />);
    fireEvent.load(screen.getByAltText('Test image'));
    fireEvent.click(screen.getByRole('button'));
    expect(handlePreviewOpen).toHaveBeenCalledTimes(1);
  });

  it('disables preview interaction when image has error', () => {
    render(<Image src="broken.jpg" alt="Broken" preview />);
    fireEvent.error(screen.getByAltText('Broken'));
    // After error, container is still role="button" but tabIndex=-1 (non-interactive)
    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '-1');
  });

  it('applies custom className', () => {
    const { container } = render(<Image src="test.jpg" alt="Test image" className="rounded-xl" />);
    expect(container.firstChild).toHaveClass('rounded-xl');
  });

  it('renders custom placeholder while loading', () => {
    render(
      <Image
        src="test.jpg"
        alt="Test image"
        placeholder={<div data-testid="custom-placeholder">Loading...</div>}
      />
    );
    expect(screen.getByTestId('custom-placeholder')).toBeInTheDocument();
  });

  it('opens preview dialog on Enter key press', () => {
    render(<Image src="test.jpg" alt="Test image" preview />);
    fireEvent.load(screen.getByAltText('Test image'));
    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
    expect(screen.getByRole('dialog', { name: 'Preview: Test image' })).toBeInTheDocument();
  });
});
