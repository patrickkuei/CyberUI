import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Badge from './Badge';

// Badge renders: <span className="..."><span>{children}</span></span>
// getByText finds the inner span — .parentElement reaches the outer badge span with all classes.
const getBadgeEl = (text: string) => screen.getByText(text).parentElement!;

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Online</Badge>);
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('applies primary variant class by default', () => {
    render(<Badge>Primary</Badge>);
    expect(getBadgeEl('Primary')).toHaveClass('bg-primary');
  });

  it('applies correct class for each variant', () => {
    const variants = ['primary', 'secondary', 'accent', 'success', 'error', 'warning'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(<Badge variant={variant}>{variant}</Badge>);
      expect(getBadgeEl(variant)).toHaveClass(`bg-${variant}`);
      unmount();
    });
  });

  it('renders leftIcon and rightIcon', () => {
    render(
      <Badge leftIcon={<span data-testid="left-icon" />} rightIcon={<span data-testid="right-icon" />}>
        Label
      </Badge>
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick}>Click me</Badge>);
    fireEvent.click(getBadgeEl('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows cursor-pointer when clickable prop is true', () => {
    render(<Badge clickable>Clickable</Badge>);
    expect(getBadgeEl('Clickable')).toHaveClass('cursor-pointer');
  });

  it('shows cursor-pointer when onClick is provided', () => {
    render(<Badge onClick={() => {}}>With handler</Badge>);
    expect(getBadgeEl('With handler')).toHaveClass('cursor-pointer');
  });

  it('does not have cursor-pointer when not clickable and no onClick', () => {
    render(<Badge>Static</Badge>);
    expect(getBadgeEl('Static')).not.toHaveClass('cursor-pointer');
  });

  it('applies custom className via cn()', () => {
    render(<Badge className="mt-4">Custom</Badge>);
    expect(getBadgeEl('Custom')).toHaveClass('mt-4');
  });

  it('renders without crashing with responsive size', () => {
    render(<Badge size={{ base: 'sm', md: 'md', lg: 'lg' }}>Responsive</Badge>);
    expect(screen.getByText('Responsive')).toBeInTheDocument();
  });
});
