import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SegmentedProgress from './SegmentedProgress';

describe('SegmentedProgress', () => {
  it('renders without crashing', () => {
    const { container } = render(<SegmentedProgress progress={50} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders an SVG element', () => {
    const { container } = render(<SegmentedProgress progress={50} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders children in the center', () => {
    render(
      <SegmentedProgress progress={50}>
        <span>LVL 5</span>
      </SegmentedProgress>
    );
    expect(screen.getByText('LVL 5')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<SegmentedProgress progress={50} className="w-32 h-32" />);
    expect(container.firstChild).toHaveClass('w-32', 'h-32');
  });

  it('renders at 0 progress without crashing', () => {
    const { container } = render(<SegmentedProgress progress={0} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders at 100 progress without crashing', () => {
    const { container } = render(<SegmentedProgress progress={100} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
