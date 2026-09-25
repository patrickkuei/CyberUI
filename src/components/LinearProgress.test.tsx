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

  describe('animate', () => {
    const innerBar = () => screen.getByRole('progressbar').firstChild as HTMLElement;
    const TRANSITION_CLASSES = ['transition-all', 'duration-500', 'ease-out', 'motion-reduce:transition-none'];

    it('has the transition classes by default', () => {
      render(<LinearProgress progress={40} />);
      const classes = Array.from(innerBar().classList);
      for (const c of TRANSITION_CLASSES) expect(classes).toContain(c);
    });

    it('has the transition classes when animate={true}', () => {
      render(<LinearProgress progress={40} animate />);
      const classes = Array.from(innerBar().classList);
      for (const c of TRANSITION_CLASSES) expect(classes).toContain(c);
    });

    it('has no transition-related classes when animate={false}', () => {
      render(<LinearProgress progress={40} animate={false} />);
      const classes = Array.from(innerBar().classList);
      for (const c of TRANSITION_CLASSES) expect(classes).not.toContain(c);
      expect(classes.some((c) => c.startsWith('transition'))).toBe(false);
      expect(classes.some((c) => c.startsWith('duration-'))).toBe(false);
      expect(classes.some((c) => c.startsWith('ease-'))).toBe(false);
      expect(classes.some((c) => c.includes('motion-reduce'))).toBe(false);
    });

    it('keeps the visual classes when animate={false}', () => {
      render(<LinearProgress progress={40} animate={false} />);
      const classes = Array.from(innerBar().classList);
      expect(classes).toContain('bg-gradient-to-r');
      expect(classes).toContain('rounded-full');
    });

    it('applies the same width style in both modes', () => {
      const { rerender } = render(<LinearProgress progress={40} />);
      expect(innerBar().style.width).toBe('40%');
      rerender(<LinearProgress progress={40} animate={false} />);
      expect(innerBar().style.width).toBe('40%');
      rerender(<LinearProgress progress={85} animate={false} />);
      expect(innerBar().style.width).toBe('85%');
    });
  });
});
