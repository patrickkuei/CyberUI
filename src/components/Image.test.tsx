import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import Image from './Image';
import { stubReducedMotion, type ReducedMotionStub } from '../test/reducedMotion';

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

describe('Image reduced motion', () => {
  let motion: ReducedMotionStub;

  beforeEach(() => {
    motion = stubReducedMotion(true);
  });

  afterEach(() => {
    motion.restore();
  });

  const openPreview = (props: Partial<React.ComponentProps<typeof Image>> = {}) => {
    const onPreviewClose = vi.fn();
    render(<Image src="test.jpg" alt="Test image" preview onPreviewClose={onPreviewClose} {...props} />);
    fireEvent.load(screen.getByAltText('Test image'));
    fireEvent.click(screen.getByRole('button', { name: 'Test image. Click to enlarge' }));
    return onPreviewClose;
  };

  it('closes the preview after 150ms instead of the default 350ms', () => {
    openPreview();
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(149);
    });
    expect(screen.getByRole('dialog', { name: 'Preview: Test image' })).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(screen.queryByRole('dialog', { name: 'Preview: Test image' })).toBeNull();
  });

  it('caps a consumer-supplied closeDuration at 150ms', () => {
    openPreview({ animation: { closeDuration: 1200 } });
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(screen.queryByRole('dialog', { name: 'Preview: Test image' })).toBeNull();
  });

  it('keeps the 350ms close when motion is allowed', () => {
    motion.set(false);
    openPreview();
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(349);
    });
    expect(screen.getByRole('dialog', { name: 'Preview: Test image' })).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(screen.queryByRole('dialog', { name: 'Preview: Test image' })).toBeNull();
  });

  it('pairs the preview movement and pulse classes with motion-reduce overrides', () => {
    openPreview();
    act(() => {
      vi.advanceTimersByTime(50);
    });
    const dialog = screen.getByRole('dialog', { name: 'Preview: Test image' });
    expect(dialog.className).toContain('motion-reduce:duration-150');
    dialog.querySelectorAll('.animate-pulse').forEach((el) => {
      expect(el.getAttribute('class')).toContain('motion-reduce:animate-none');
    });
    const frame = dialog.querySelector('.max-w-full.max-h-full') as HTMLElement;
    expect(frame.className).toContain('motion-reduce:scale-100');
    expect(frame.className).toContain('motion-reduce:rotate-0');
    expect(screen.getByRole('button', { name: 'Test image. Click to enlarge' }).className).toContain(
      'motion-reduce:hover:scale-100'
    );
  });

  it('stops the loading pulse', () => {
    render(<Image src="test.jpg" alt="Test image" />);
    expect(screen.getByText('Loading...').parentElement!.className).toContain('motion-reduce:animate-none');
  });
});

describe('Image stand-in (no src)', () => {
  it('renders a role="img" panel named by alt, and no <img>', () => {
    const { container } = render(<Image alt="Neon district" />);
    expect(screen.getByRole('img', { name: 'Neon district' })).toBeInTheDocument();
    expect(container.querySelector('img')).toBeNull();
  });

  it('defaults to the gradient style (no scanline)', () => {
    const { container } = render(<Image alt="Neon district" />);
    expect(container.querySelector('.animate-scanline-sweep')).toBeNull();
  });

  it('renders the sweeping scanline for fallbackStyle="scanline"', () => {
    const { container } = render(<Image alt="Neon district" fallbackStyle="scanline" />);
    expect(screen.getByRole('img', { name: 'Neon district' })).toBeInTheDocument();
    const sweep = container.querySelector('.animate-scanline-sweep');
    expect(sweep).not.toBeNull();
    expect(sweep!.closest('[aria-hidden="true"]')).not.toBeNull();
  });

  it.each(['gradient', 'scanline'] as const)(
    'keeps every decoration inside one overlay child (%s), so space-y-* cannot offset the corner brackets',
    (fallbackStyle) => {
      render(<Image alt="Neon district" fallbackStyle={fallbackStyle} />);
      const panel = screen.getByRole('img', { name: 'Neon district' });
      expect(panel.children).toHaveLength(1);
      expect(panel.children[0]).toHaveClass('absolute', 'inset-0');
    }
  );

  it('treats an empty src like a missing one', () => {
    const { container } = render(<Image src="" alt="Neon district" fallbackStyle="scanline" />);
    expect(container.querySelector('img')).toBeNull();
    expect(container.querySelector('.animate-scanline-sweep')).not.toBeNull();
  });

  it('is never in the loading state', () => {
    render(<Image alt="Neon district" placeholder={<span data-testid="ph" />} />);
    expect(screen.queryByRole('status')).toBeNull();
    expect(screen.queryByTestId('ph')).toBeNull();
  });

  it('ignores preview: not a button, not focusable, click opens nothing', () => {
    render(<Image alt="Neon district" preview />);
    const panel = screen.getByRole('img', { name: 'Neon district' });
    expect(screen.queryByRole('button')).toBeNull();
    expect(panel).not.toHaveAttribute('tabindex');
    expect(panel).not.toHaveAttribute('aria-expanded');
    expect(panel.className).not.toContain('cursor-pointer');
    fireEvent.click(panel);
    fireEvent.keyDown(panel, { key: 'Enter' });
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('accepts className and size', () => {
    render(<Image alt="Neon district" size="lg" className="custom-panel h-40" />);
    const panel = screen.getByRole('img', { name: 'Neon district' });
    expect(panel).toHaveClass('custom-panel', 'h-40', 'p-8');
  });

  it('does not spread <img>-only props onto the panel', () => {
    render(<Image alt="Neon district" loading="eager" decoding="sync" />);
    const panel = screen.getByRole('img', { name: 'Neon district' });
    expect(panel).not.toHaveAttribute('loading');
    expect(panel).not.toHaveAttribute('decoding');
  });

  it('shows the fallback URL as the image when src is empty (no stand-in)', () => {
    const { container } = render(<Image alt="Neon district" fallback="backup.jpg" fallbackStyle="scanline" />);
    const img = screen.getByAltText('Neon district (fallback)');
    expect(img).toHaveAttribute('src', 'backup.jpg');
    expect(container.querySelector('.animate-scanline-sweep')).toBeNull();
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading image');
    fireEvent.load(img);
    expect(screen.queryByRole('status')).toBeNull();
    expect(screen.getByRole('button', { name: 'Neon district. Click to enlarge' })).toBeInTheDocument();
  });

  it('shows the error state when the fallback URL used for an empty src fails', () => {
    render(<Image alt="Neon district" fallback="broken.jpg" />);
    fireEvent.error(screen.getByAltText('Neon district (fallback)'));
    expect(screen.getByRole('alert')).toHaveAttribute('aria-label', 'Failed to load image');
  });

  it('leaves the src path unchanged: fallbackStyle is ignored while src is set', () => {
    const { container } = render(<Image src="test.jpg" alt="Test image" fallbackStyle="scanline" />);
    expect(screen.getByAltText('Test image')).toHaveAttribute('src', 'test.jpg');
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading image');
    expect(screen.getByRole('button', { name: 'Test image. Click to enlarge' })).toBeInTheDocument();
    expect(container.querySelector('.animate-scanline-sweep')).toBeNull();
  });

  it('still swaps to the fallback URL when a present src fails', () => {
    render(<Image src="broken.jpg" alt="Test image" fallback="backup.jpg" />);
    fireEvent.error(screen.getByAltText('Test image'));
    expect(screen.getByAltText('Test image (fallback)')).toHaveAttribute('src', 'backup.jpg');
  });

  it('switches between the stand-in and a real image as src comes and goes', () => {
    const { rerender, container } = render(<Image alt="Neon district" />);
    expect(container.querySelector('img')).toBeNull();
    rerender(<Image src="test.jpg" alt="Neon district" />);
    expect(screen.getByAltText('Neon district')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
    rerender(<Image alt="Neon district" />);
    expect(container.querySelector('img')).toBeNull();
    expect(screen.getByRole('img', { name: 'Neon district' })).toBeInTheDocument();
    expect(screen.queryByRole('status')).toBeNull();
  });
});

describe('Image scanline sweep under reduced motion', () => {
  const css = readFileSync(join(process.cwd(), 'src', 'index.css'), 'utf8');

  let motion: ReducedMotionStub;

  beforeEach(() => {
    motion = stubReducedMotion(true);
  });

  afterEach(() => {
    motion.restore();
  });

  it('keeps the stand-in and its scanline class (stopped in CSS, not in JS)', () => {
    const { container } = render(<Image alt="Neon district" fallbackStyle="scanline" />);
    expect(screen.getByRole('img', { name: 'Neon district' })).toBeInTheDocument();
    expect(container.querySelector('.animate-scanline-sweep')).not.toBeNull();
  });

  it('is stopped by the reduced-motion block in index.css', () => {
    const start = css.indexOf('@media (prefers-reduced-motion: reduce) {');
    expect(start).toBeGreaterThan(-1);
    const block = css.slice(start);
    expect(block).toMatch(/\.animate-scanline-sweep[^{]*\{\s*animation:\s*none/);
  });

  it('defines the sweep inside a layer so the unlayered reduced-motion rule wins', () => {
    const layerStart = css.lastIndexOf('@layer cyberui {');
    const blockStart = css.indexOf('@media (prefers-reduced-motion: reduce) {');
    expect(layerStart).toBeGreaterThan(blockStart);
    const layer = css.slice(layerStart);
    expect(layer).toContain('@keyframes scanline-sweep');
    expect(layer).toMatch(/\.animate-scanline-sweep\s*\{\s*animation:\s*scanline-sweep/);
    expect(layer).toMatch(/translateY\(-?\d+%\)/);
  });
});

describe('Image stand-in: alt and open preview', () => {
  it('hides a stand-in with an empty alt instead of exposing an unnamed image', () => {
    const { container } = render(<Image alt="" />);
    const panel = container.firstElementChild as HTMLElement;
    expect(panel).toHaveAttribute('aria-hidden', 'true');
    expect(panel).not.toHaveAttribute('role');
    expect(panel).not.toHaveAttribute('aria-label');
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('keeps role="img" and the alt name for a non-empty alt', () => {
    const { container } = render(<Image alt="Neon district" />);
    const panel = container.firstElementChild as HTMLElement;
    expect(panel).toHaveAttribute('role', 'img');
    expect(panel).toHaveAttribute('aria-label', 'Neon district');
    expect(panel).not.toHaveAttribute('aria-hidden');
  });

  it('calls onPreviewClose exactly once on the normal close path', () => {
    const onPreviewClose = vi.fn();
    render(<Image src="test.jpg" alt="Test image" onPreviewClose={onPreviewClose} />);
    fireEvent.load(screen.getByAltText('Test image'));
    fireEvent.click(screen.getByRole('button'));
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(400);
    });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(onPreviewClose).toHaveBeenCalledTimes(1);
  });

  it('closes an open preview when src and fallback are emptied: unlocks scroll, drops Escape, reports close once', () => {
    document.body.style.overflow = 'scroll';
    const onPreviewClose = vi.fn();
    const { rerender } = render(
      <Image src="test.jpg" alt="Test image" onPreviewClose={onPreviewClose} />
    );
    fireEvent.load(screen.getByAltText('Test image'));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('dialog', { name: 'Preview: Test image' })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<Image src="" alt="Test image" onPreviewClose={onPreviewClose} />);

    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.body.style.overflow).toBe('scroll');
    expect(onPreviewClose).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(onPreviewClose).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('img', { name: 'Test image' })).toBeInTheDocument();

    // and a src coming back does not resurrect the preview
    rerender(<Image src="test.jpg" alt="Test image" onPreviewClose={onPreviewClose} />);
    expect(screen.queryByRole('dialog')).toBeNull();
    document.body.style.overflow = '';
  });

  it('does not report a second close when the image goes away mid-close', () => {
    const onPreviewClose = vi.fn();
    const { rerender } = render(
      <Image src="test.jpg" alt="Test image" onPreviewClose={onPreviewClose} />
    );
    fireEvent.load(screen.getByAltText('Test image'));
    fireEvent.click(screen.getByRole('button'));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onPreviewClose).toHaveBeenCalledTimes(1);
    rerender(<Image src="" alt="Test image" onPreviewClose={onPreviewClose} />);
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(onPreviewClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
