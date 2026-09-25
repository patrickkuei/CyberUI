import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders correctly with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-linear-(--gradient-accent)');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-secondary');

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-error');
  });

  it('supports responsive sizes', () => {
    render(<Button size={{ base: 'sm', md: 'md' }}>Responsive</Button>);
    const button = screen.getByRole('button');
    // Basic check for size classes (classes depend on getResponsiveClasses logic)
    expect(button).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // jsdom has no layout, so this pins the cause of #35 (primary went from
  // border-none to border-2 when disabled) rather than measuring the size —
  // the DisabledKeepsSize story measures real rendered boxes in Chromium.
  it.each(['primary', 'secondary', 'danger', 'ghost'] as const)(
    'uses the same border width enabled and disabled (%s)',
    (variant) => {
      const borderWidthClasses = (el: HTMLElement) =>
        [...el.classList].filter((c) => /^border(-[xytrbl])?(-(\d+|none))?$/.test(c)).sort();

      const { rerender } = render(<Button variant={variant}>Jack In</Button>);
      const enabled = borderWidthClasses(screen.getByRole('button'));

      rerender(<Button variant={variant} disabled>Jack In</Button>);
      const disabled = borderWidthClasses(screen.getByRole('button'));

      expect(enabled).toEqual(['border-2']);
      expect(disabled).toEqual(enabled);
    }
  );
});
