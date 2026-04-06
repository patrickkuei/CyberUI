import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
  it('renders text variant by default', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders correct number of lines for text variant', () => {
    const { container } = render(<Skeleton variant="text" lines={5} />);
    // text variant renders a wrapping div with children divs
    expect(container.firstChild?.childNodes).toHaveLength(5);
  });

  it('renders circular variant', () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.firstChild).toHaveClass('rounded-full');
  });

  it('renders rectangular variant', () => {
    const { container } = render(<Skeleton variant="rectangular" />);
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('renders avatar-text variant with flex layout', () => {
    const { container } = render(<Skeleton variant="avatar-text" />);
    expect(container.firstChild).toHaveClass('flex');
  });

  it('renders button-group variant with flex layout', () => {
    const { container } = render(<Skeleton variant="button-group" />);
    expect(container.firstChild).toHaveClass('flex');
  });

  it('renders card variant with border', () => {
    const { container } = render(<Skeleton variant="card" />);
    expect(container.firstChild).toHaveClass('border');
  });

  it('applies animate-pulse when animate is true (default)', () => {
    const { container } = render(<Skeleton variant="text" />);
    // each line div should have animate-pulse
    const lines = container.querySelectorAll('.animate-pulse');
    expect(lines.length).toBeGreaterThan(0);
  });

  it('does not apply animate-pulse when animate is false', () => {
    const { container } = render(<Skeleton variant="text" animate={false} />);
    expect(container.querySelector('.animate-pulse')).toBeNull();
  });

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="my-custom-class" />);
    // className is passed to baseClasses which is applied on each line element
    expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
  });

  it('renders without crashing with responsive size', () => {
    const { container } = render(<Skeleton size={{ base: 'sm', md: 'lg' }} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom width and height styles', () => {
    const { container } = render(<Skeleton variant="rectangular" width={200} height={100} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe('200px');
    expect(el.style.height).toBe('100px');
  });
});
