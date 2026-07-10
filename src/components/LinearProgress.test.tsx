import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LinearProgress from './LinearProgress';

describe('LinearProgress', () => {
  it('renders a progressbar role', () => {
    render(<LinearProgress progress={50} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('sets aria-valuenow to the progress value', () => {
    render(<LinearProgress progress={75} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
  });

  it('sets aria-valuemin and aria-valuemax', () => {
    render(<LinearProgress progress={50} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('applies progress width via inline style', () => {
    render(<LinearProgress progress={40} />);
    const inner = screen.getByRole('progressbar').firstChild as HTMLElement;
    expect(inner.style.width).toBe('40%');
  });

  it('applies custom className', () => {
    render(<LinearProgress progress={50} className="w-full" />);
    expect(screen.getByRole('progressbar')).toHaveClass('w-full');
  });

  it('renders without crashing with responsive size', () => {
    render(<LinearProgress progress={60} size={{ base: 'sm', md: 'md' }} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('warns when progress is above 100', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<LinearProgress progress={150} />);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('outside the 0-100 range'));
    warnSpy.mockRestore();
  });

  it('warns when progress is negative', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<LinearProgress progress={-10} />);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('outside the 0-100 range'));
    warnSpy.mockRestore();
  });

  it('does not warn for in-range progress', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<LinearProgress progress={55} />);
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });
});
