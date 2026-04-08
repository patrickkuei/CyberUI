import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SegmentedProgress from './SegmentedProgress';

// ── Radial variant (default) ──────────────────────────────────────────────────

describe('SegmentedProgress — radial (default)', () => {
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
    const { container } = render(<SegmentedProgress progress={50} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies size class for sm', () => {
    const { container } = render(<SegmentedProgress progress={50} size="sm" />);
    expect(container.firstChild).toHaveClass('w-16', 'h-16');
  });

  it('applies size class for lg', () => {
    const { container } = render(<SegmentedProgress progress={50} size="lg" />);
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

  it('does not render SVG when variant is block', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={50} />);
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });
});

// ── Block variant ─────────────────────────────────────────────────────────────

describe('SegmentedProgress — block variant', () => {
  it('renders without crashing', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={50} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  // Helper: get the block divs (direct children of the wrapper)
  const getBlocks = (container: HTMLElement) =>
    Array.from((container.firstChild as HTMLElement).children) as HTMLElement[];

  it('renders the correct number of blocks (default 10)', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={50} />);
    expect(getBlocks(container)).toHaveLength(10);
  });

  it('renders the correct number of blocks when segments is set', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={50} segments={20} />);
    expect(getBlocks(container)).toHaveLength(20);
  });

  it('activates correct block count at 50% with 10 segments', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={50} segments={10} />);
    const active = getBlocks(container).filter(
      (b) => b.style.backgroundColor === 'var(--color-accent)'
    );
    expect(active).toHaveLength(5);
  });

  it('activates all blocks at 100% progress', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={100} segments={10} />);
    const active = getBlocks(container).filter(
      (b) => b.style.backgroundColor === 'var(--color-accent)'
    );
    expect(active).toHaveLength(10);
  });

  it('activates no blocks at 0% progress', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={0} segments={10} />);
    const active = getBlocks(container).filter(
      (b) => b.style.backgroundColor === 'var(--color-accent)'
    );
    expect(active).toHaveLength(0);
  });

  it('clamps progress above 100', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={150} segments={10} />);
    const active = getBlocks(container).filter(
      (b) => b.style.backgroundColor === 'var(--color-accent)'
    );
    expect(active).toHaveLength(10);
  });

  it('clamps progress below 0', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={-10} segments={10} />);
    const active = getBlocks(container).filter(
      (b) => b.style.backgroundColor === 'var(--color-accent)'
    );
    expect(active).toHaveLength(0);
  });

  it('applies custom className', () => {
    const { container } = render(
      <SegmentedProgress variant="block" progress={50} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies size height class for sm', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={50} size="sm" />);
    expect(getBlocks(container)[0]).toHaveClass('h-3');
  });

  it('applies size height class for lg', () => {
    const { container } = render(<SegmentedProgress variant="block" progress={50} size="lg" />);
    expect(getBlocks(container)[0]).toHaveClass('h-7');
  });
});
