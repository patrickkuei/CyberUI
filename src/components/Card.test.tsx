import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card', () => {
  it('renders correctly with children', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders title with border by default', () => {
    render(<Card title="System Status">Content</Card>);
    const title = screen.getByText('System Status');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('border-b');
    expect(title).toHaveClass('border-accent');
  });

  it('can render title without border', () => {
    render(<Card title="Minimal Card" titleBorder={false}>Content</Card>);
    const title = screen.getByText('Minimal Card');
    expect(title).not.toHaveClass('border-b');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Card variant="default">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('bg-base');

    rerender(<Card variant="accent">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('border-accent');
    expect(screen.getByText('Content')).toHaveClass('shadow-input-accent/50');

    rerender(<Card variant="small">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('rounded-lg');
  });

  it('supports responsive sizes', () => {
    render(<Card size={{ base: 'sm', md: 'md' }}>Responsive</Card>);
    expect(screen.getByText('Responsive')).toBeInTheDocument();
  });
});
