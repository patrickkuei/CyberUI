import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Carousel from './Carousel';

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
