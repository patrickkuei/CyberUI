import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CircularProgress from './CircularProgress';

describe('CircularProgress', () => {
  it('renders a progressbar role', () => {
    render(<CircularProgress progress={50} radius={20} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('sets aria-valuenow to the progress value', () => {
    render(<CircularProgress progress={60} radius={20} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60');
  });

  it('sets aria-valuemin and aria-valuemax', () => {
    render(<CircularProgress progress={50} radius={20} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('uses default aria-label when ariaLabel is not provided', () => {
    render(<CircularProgress progress={50} radius={20} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'Progress');
  });

  it('uses custom ariaLabel when provided', () => {
    render(<CircularProgress progress={50} radius={20} ariaLabel="Upload progress" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'Upload progress');
  });

  it('renders children in the center', () => {
    render(
      <CircularProgress progress={50} radius={20}>
        <span>50%</span>
      </CircularProgress>
    );
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CircularProgress progress={50} radius={20} className="w-20 h-20" />);
    expect(screen.getByRole('progressbar')).toHaveClass('w-20', 'h-20');
  });
});
