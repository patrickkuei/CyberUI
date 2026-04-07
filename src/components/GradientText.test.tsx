import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GradientText from './GradientText';

describe('GradientText', () => {
  it('renders without crashing', () => {
    const { container } = render(<GradientText>Hello</GradientText>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children text content', () => {
    render(<GradientText>CyberUI 2045</GradientText>);
    expect(screen.getByText('CyberUI 2045')).toBeInTheDocument();
  });

  it('renders as span by default', () => {
    const { container } = render(<GradientText>Text</GradientText>);
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  it('renders as h1 when as="h1"', () => {
    const { container } = render(<GradientText as="h1">Heading</GradientText>);
    expect(container.firstChild?.nodeName).toBe('H1');
  });

  it('renders as h2 when as="h2"', () => {
    const { container } = render(<GradientText as="h2">Subheading</GradientText>);
    expect(container.firstChild?.nodeName).toBe('H2');
  });

  it('renders as p when as="p"', () => {
    const { container } = render(<GradientText as="p">Paragraph</GradientText>);
    expect(container.firstChild?.nodeName).toBe('P');
  });

  it('applies primary gradient class by default', () => {
    const { container } = render(<GradientText>Text</GradientText>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('--gradient-primary');
  });

  it('applies secondary gradient class when variant="secondary"', () => {
    const { container } = render(<GradientText variant="secondary">Text</GradientText>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('--gradient-secondary');
  });

  it('applies accent gradient class when variant="accent"', () => {
    const { container } = render(<GradientText variant="accent">Text</GradientText>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('--gradient-accent');
  });

  it('applies base text-transparent and bg-clip-text classes', () => {
    const { container } = render(<GradientText>Text</GradientText>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('text-transparent');
    expect(el.className).toContain('bg-clip-text');
  });

  it('applies custom className', () => {
    const { container } = render(<GradientText className="my-custom-class">Text</GradientText>);
    expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
  });
});
