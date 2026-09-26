import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Toggle from './Toggle';

describe('Toggle Component', () => {
  it('renders with label', () => {
    render(<Toggle label="Cybernetic Link" />);
    expect(screen.getByText('Cybernetic Link')).toBeInTheDocument();
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Toggle label="System Power" onChange={handleChange} />);
    
    const input = screen.getByRole('checkbox');
    fireEvent.click(input);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('respects the checked prop', () => {
    render(<Toggle label="Status" checked={true} readOnly />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('can be disabled', () => {
    const handleChange = vi.fn();
    render(<Toggle label="Locked" disabled onChange={handleChange} />);
    
    const input = screen.getByRole('checkbox');
    expect(input).toBeDisabled();
    
    fireEvent.click(input);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const { container } = render(<Toggle label="Test" className="custom-glitch" />);
    expect(container.firstChild).toHaveClass('custom-glitch');
  });
});

describe('Toggle reduced motion', () => {
  it('moves the knob without sliding under prefers-reduced-motion', () => {
    const { container } = render(<Toggle label="Stealth Mode" />);
    const track = container.querySelector('input.peer')!.nextElementSibling as HTMLElement;
    expect(track.className).toContain('motion-reduce:after:transition-none');
  });
});
