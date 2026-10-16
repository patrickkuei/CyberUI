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

  it('applies both the size prop\'s font-size class and the variant\'s contrast text color without either overriding the other', () => {
    render(
      <Badge variant="primary" size="md">
        Contrast
      </Badge>
    );
    const el = getBadgeEl('Contrast');
    expect(el).toHaveClass('text-sm');
    expect(el).toHaveClass('text-inverse');
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

  // Pre-2.8 output, captured before `neutral`/`shadow`/`shape` were added.
  // Defaults must keep rendering exactly this (minor-release compat policy).
  it.each([
    ['primary', 'hover:shadow-primary'],
    ['secondary', 'hover:shadow-secondary'],
    ['accent', 'hover:shadow-lg-accent'],
    ['success', 'hover:shadow-success'],
    ['error', 'hover:shadow-error'],
    ['warning', 'hover:shadow-warning'],
  ] as const)('renders the unchanged default class list for %s', (variant, hover) => {
    const { unmount } = render(<Badge variant={variant}>Static</Badge>);
    expect(getBadgeEl('Static').className).toBe(
      `inline-flex items-center rounded-full font-semibold px-4 py-2 text-sm gap-2 bg-${variant} text-inverse shadow-lg transition-shadow`
    );
    unmount();
    render(<Badge variant={variant} clickable>Live</Badge>);
    expect(getBadgeEl('Live').className).toBe(
      `inline-flex items-center rounded-full font-semibold px-4 py-2 text-sm gap-2 bg-${variant} text-inverse shadow-lg ${hover} transition-shadow cursor-pointer`
    );
  });

  it('renders the same classes as before when shadow and shape are passed their defaults explicitly', () => {
    render(<Badge>Implicit</Badge>);
    render(<Badge shadow shape="pill">Explicit</Badge>);
    expect(getBadgeEl('Explicit').className).toBe(getBadgeEl('Implicit').className);
  });

  describe('neutral variant', () => {
    it('renders transparent with a border-default outline and default text', () => {
      render(<Badge variant="neutral">Operator Call</Badge>);
      const el = getBadgeEl('Operator Call');
      expect(el).toHaveClass('bg-transparent', 'text-default', 'ring-1', 'ring-inset', 'ring-border-default');
      expect(el).not.toHaveClass('text-inverse');
      expect(el).not.toHaveClass('text-muted');
      expect(el.className).not.toMatch(/\bbg-(primary|secondary|accent|success|error|warning)\b/);
    });

    it('does not add a CSS border, so it matches filled badges in size', () => {
      render(<Badge variant="neutral">Outline</Badge>);
      const classes = getBadgeEl('Outline').className.split(/\s+/);
      expect(classes.filter((c) => c === 'border' || /^border-\d/.test(c))).toEqual([]);
    });

    it('keeps the resting shadow by default and drops it with shadow={false}', () => {
      render(<Badge variant="neutral">Shadowed</Badge>);
      render(<Badge variant="neutral" shadow={false}>Flat</Badge>);
      expect(getBadgeEl('Shadowed')).toHaveClass('shadow-lg');
      expect(getBadgeEl('Flat')).not.toHaveClass('shadow-lg');
    });

    it('gets hover feedback and a pointer cursor when clickable', () => {
      const handleClick = vi.fn();
      render(<Badge variant="neutral" onClick={handleClick}>Recon</Badge>);
      const el = getBadgeEl('Recon');
      expect(el).toHaveClass('cursor-pointer', 'hover:ring-secondary', 'hover:text-secondary', 'transition-[color,box-shadow]');
      fireEvent.click(el);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('shadow prop', () => {
    it('applies shadow-lg by default', () => {
      render(<Badge>Default</Badge>);
      expect(getBadgeEl('Default')).toHaveClass('shadow-lg');
    });

    it('removes shadow-lg when shadow={false} and leaves the fill unchanged', () => {
      render(<Badge variant="secondary" shadow={false}>Included</Badge>);
      const el = getBadgeEl('Included');
      expect(el).not.toHaveClass('shadow-lg');
      expect(el).toHaveClass('bg-secondary', 'text-inverse');
    });

    it('keeps the hover effect on a clickable badge when shadow={false}', () => {
      render(<Badge shadow={false} clickable>Hover</Badge>);
      const el = getBadgeEl('Hover');
      expect(el).not.toHaveClass('shadow-lg');
      expect(el).toHaveClass('hover:shadow-primary', 'cursor-pointer');
    });
  });

  describe('shape prop', () => {
    it.each([
      ['pill', 'rounded-full'],
      ['rounded', 'rounded-md'],
      ['square', 'rounded-none'],
    ] as const)('shape="%s" applies %s', (shape, expected) => {
      render(<Badge shape={shape}>Shape</Badge>);
      const el = getBadgeEl('Shape');
      expect(el).toHaveClass(expected);
      for (const other of ['rounded-full', 'rounded-md', 'rounded-none'].filter((c) => c !== expected)) {
        expect(el).not.toHaveClass(other);
      }
    });

    it('defaults to pill', () => {
      render(<Badge>Pill</Badge>);
      expect(getBadgeEl('Pill')).toHaveClass('rounded-full');
    });

    it('lets className override the shape radius', () => {
      render(<Badge shape="square" className="rounded-lg">Override</Badge>);
      const el = getBadgeEl('Override');
      expect(el).toHaveClass('rounded-lg');
      expect(el).not.toHaveClass('rounded-none');
    });
  });
});
