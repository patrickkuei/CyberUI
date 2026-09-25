import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Carousel from './Carousel';
import { stubReducedMotion, type ReducedMotionStub } from '../test/reducedMotion';

const images = [
  { src: 'img1.jpg', alt: 'Image 1', caption: 'Caption 1' },
  { src: 'img2.jpg', alt: 'Image 2', caption: 'Caption 2' },
];

describe('Carousel Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders current image and caption', () => {
    render(<Carousel images={images} currentIndex={0} onChange={vi.fn()} />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByText('Caption 1')).toBeInTheDocument();
  });

  it('calls onChange when next arrow is clicked', () => {
    const handleChange = vi.fn();
    render(<Carousel images={images} currentIndex={0} onChange={handleChange} transition="slide" />);
    
    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);
    
    act(() => {
      vi.runAllTimers();
    });
    
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('calls onChange when previous arrow is clicked (infinite)', () => {
    const handleChange = vi.fn();
    render(<Carousel images={images} currentIndex={0} onChange={handleChange} infinite={true} transition="slide" />);
    
    const prevButton = screen.getByLabelText('Previous image');
    fireEvent.click(prevButton);
    
    act(() => {
      vi.runAllTimers();
    });
    
    expect(handleChange).toHaveBeenCalledWith(1); // Goes to last image (index 1)
  });

  it('handles auto-play', async () => {
    const handleChange = vi.fn();
    render(
      <Carousel 
        images={images} 
        currentIndex={0} 
        onChange={handleChange} 
        autoPlay={true} 
        interval={1000} 
        transition="slide"
      />
    );
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    
    // Flush the internal handleSlideChange setTimeout
    act(() => {
      vi.runOnlyPendingTimers();
    });
    
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('calls onChange when indicator is clicked', () => {
    const handleChange = vi.fn();
    render(<Carousel images={images} currentIndex={0} onChange={handleChange} transition="slide" />);
    
    const indicator2 = screen.getByLabelText('Go to slide 2');
    fireEvent.click(indicator2);
    
    act(() => {
      vi.runAllTimers();
    });
    
    expect(handleChange).toHaveBeenCalledWith(1);
  });
});

describe('Carousel reduced motion', () => {
  let motion: ReducedMotionStub;

  beforeEach(() => {
    vi.useFakeTimers();
    motion = stubReducedMotion(true);
  });

  afterEach(() => {
    motion.restore();
    vi.useRealTimers();
  });

  const glitchLayers = (container: HTMLElement) =>
    Array.from(container.querySelectorAll<HTMLElement>('[style]')).filter((el) =>
      /signal-(glitch|scanline|rgb)/.test(el.getAttribute('style') ?? '')
    );

  it('does not auto-advance under prefers-reduced-motion', () => {
    const handleChange = vi.fn();
    render(<Carousel images={images} currentIndex={0} onChange={handleChange} autoPlay interval={1000} />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does not resume auto-play after an image preview closes', () => {
    const handleChange = vi.fn();
    render(<Carousel images={images} currentIndex={0} onChange={handleChange} autoPlay interval={1000} />);

    fireEvent.click(screen.getByRole('button', { name: 'Image 1. Click to enlarge' }));
    expect(screen.getByRole('dialog', { name: 'Preview: Image 1' })).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(screen.queryByRole('dialog', { name: 'Preview: Image 1' })).toBeNull();

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('resumes auto-play once the preference flips back after a reduced-motion preview close', () => {
    const handleChange = vi.fn();
    render(<Carousel images={images} currentIndex={0} onChange={handleChange} autoPlay interval={1000} />);

    fireEvent.click(screen.getByRole('button', { name: 'Image 1. Click to enlarge' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(screen.queryByRole('dialog', { name: 'Preview: Image 1' })).toBeNull();
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(handleChange).not.toHaveBeenCalled();

    act(() => motion.set(false));
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('stops and resumes auto-play when the OS preference changes', () => {
    motion.set(false);
    const handleChange = vi.fn();
    render(<Carousel images={images} currentIndex={0} onChange={handleChange} autoPlay interval={1000} />);

    act(() => motion.set(true));
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(handleChange).not.toHaveBeenCalled();

    act(() => motion.set(false));
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('renders signal-glitch as a plain fade with no glitch overlays', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Carousel images={images} currentIndex={0} onChange={handleChange} autoPlay={false} transition="signal-glitch" glitchRate />
    );
    fireEvent.click(screen.getByLabelText('Next image'));
    expect(glitchLayers(container)).toHaveLength(0);

    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('keeps the glitch overlays and 600ms timing when motion is allowed', () => {
    motion.set(false);
    const handleChange = vi.fn();
    const { container } = render(
      <Carousel images={images} currentIndex={0} onChange={handleChange} autoPlay={false} transition="signal-glitch" glitchRate />
    );
    fireEvent.click(screen.getByLabelText('Next image'));
    expect(glitchLayers(container).length).toBeGreaterThan(0);

    act(() => {
      vi.advanceTimersByTime(599);
    });
    expect(handleChange).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('renders matrix as a plain opacity fade with no 3D transform', () => {
    render(<Carousel images={images} currentIndex={0} onChange={vi.fn()} autoPlay={false} transition="matrix" />);
    const slide = screen.getByAltText('Image 2').closest('.absolute.inset-0') as HTMLElement;
    const style = slide.getAttribute('style') ?? '';
    expect(style).toContain('opacity: 0');
    expect(style).not.toContain('rotateX');
    expect(style).not.toContain('perspective');
  });

  it('drops the indicator animations and holds the focus ring at its final frame', () => {
    render(<Carousel images={images} currentIndex={0} onChange={vi.fn()} autoPlay={false} />);
    const indicator = screen.getByLabelText('Go to slide 1');
    const styled = Array.from(indicator.querySelectorAll<HTMLElement>('[style]'));
    for (const el of styled) {
      expect(el.getAttribute('style') ?? '').not.toMatch(/rgbBackground|rotateFocusRing|rgbBorder/);
    }
    expect(styled.some((el) => (el.getAttribute('style') ?? '').includes('rotate(135deg)'))).toBe(true);
    indicator.querySelectorAll('.animate-pulse').forEach((el) => {
      expect(el.className).toContain('motion-reduce:animate-none');
    });
  });

  it('slides without a transform transition under reduced motion', () => {
    render(<Carousel images={images} currentIndex={0} onChange={vi.fn()} autoPlay={false} transition="slide" />);
    const track = screen.getByAltText('Image 1').closest('.transition-transform') as HTMLElement;
    expect(track.className).toContain('motion-reduce:transition-none');
  });
});

describe('Carousel stand-in (missing src)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const mixed = [
    { src: 'img1.jpg', alt: 'Real slide', caption: 'Caption real' },
    { alt: 'Stand-in slide', caption: 'Caption stand-in' },
    { src: '', alt: 'Empty slide', fallbackSrc: 'backup.jpg' },
  ];

  it('renders a real image and stand-ins together', () => {
    render(<Carousel images={mixed} currentIndex={0} onChange={vi.fn()} autoPlay={false} />);
    expect(screen.getByAltText('Real slide')).toHaveAttribute('src', 'img1.jpg');
    expect(screen.getByRole('img', { name: 'Stand-in slide' })).toBeInTheDocument();
    expect(screen.queryByAltText('Stand-in slide')).toBeNull();
    // a missing src with a fallbackSrc shows that URL, not a stand-in
    expect(screen.getByAltText('Empty slide (fallback)')).toHaveAttribute('src', 'backup.jpg');
  });

  it('defaults stand-ins to the gradient style', () => {
    const { container } = render(<Carousel images={mixed} currentIndex={1} onChange={vi.fn()} autoPlay={false} />);
    expect(container.querySelector('.animate-scanline-sweep')).toBeNull();
  });

  it('applies fallbackStyle to every slide without a source, and only those', () => {
    const { container } = render(
      <Carousel images={mixed} currentIndex={1} onChange={vi.fn()} autoPlay={false} fallbackStyle="scanline" />
    );
    expect(container.querySelectorAll('.animate-scanline-sweep')).toHaveLength(1);
    expect(screen.getByRole('img', { name: 'Stand-in slide' }).querySelector('.animate-scanline-sweep')).not.toBeNull();
  });

  it('works in every transition', () => {
    for (const transition of ['slide', 'fade', 'matrix', 'signal-glitch'] as const) {
      const { container, unmount } = render(
        <Carousel
          images={mixed}
          currentIndex={1}
          onChange={vi.fn()}
          autoPlay={false}
          transition={transition}
          fallbackStyle="scanline"
        />
      );
      expect(screen.getByRole('img', { name: 'Stand-in slide' })).toBeInTheDocument();
      expect(container.querySelectorAll('.animate-scanline-sweep')).toHaveLength(1);
      unmount();
    }
  });

  it('keeps captions and navigation for a stand-in slide', () => {
    const handleChange = vi.fn();
    render(<Carousel images={mixed} currentIndex={1} onChange={handleChange} autoPlay={false} transition="slide" />);
    expect(screen.getByText('Caption stand-in')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Next image'));
    act(() => {
      vi.runAllTimers();
    });
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('renders a carousel of only stand-ins with no assets at all', () => {
    render(
      <Carousel
        images={[{ alt: 'Alpha' }, { alt: 'Beta' }]}
        currentIndex={0}
        onChange={vi.fn()}
        autoPlay={false}
      />
    );
    expect(screen.getByRole('img', { name: 'Alpha' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Beta' })).toBeInTheDocument();
    expect(screen.queryByRole('status')).toBeNull();
  });
});
