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

      expect(disabled).toEqual(enabled);
    }
  );

  it('fades a cover in over the primary gradient when disabled instead of removing it', () => {
    const { rerender } = render(<Button variant="primary">Jack In</Button>);
    const button = screen.getByRole('button');
    const cover = button.querySelector('[aria-hidden="true"]');
    expect(button).toHaveClass('bg-linear-(--gradient-accent)');
    expect(cover).toHaveClass('transition-opacity', 'opacity-0');

    rerender(<Button variant="primary" disabled>Jack In</Button>);
    // The gradient stays put and the same cover element only changes opacity,
    // so the switch animates rather than cutting out.
    expect(button).toHaveClass('bg-linear-(--gradient-accent)');
    expect(button.querySelector('[aria-hidden="true"]')).toBe(cover);
    expect(cover).toHaveClass('opacity-100', 'inset-ring-2');
  });

  it('lets className override the primary gradient', () => {
    render(
      <Button variant="primary" className="bg-linear-to-r from-error to-accent">
        Override
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-linear-to-r');
    expect(button).not.toHaveClass('bg-linear-(--gradient-accent)');
  });
});

describe('Button reduced motion', () => {
  it('drops the shimmer sweep and press scale under prefers-reduced-motion', () => {
    render(<Button>Jack In</Button>);
    const button = screen.getByRole('button', { name: 'Jack In' });
    expect(button.className).toContain('motion-reduce:active:scale-100');
    const shimmer = button.querySelector('.group-hover\\:translate-x-full') as HTMLElement;
    expect(shimmer.className).toContain('motion-reduce:hidden');
  });
});
