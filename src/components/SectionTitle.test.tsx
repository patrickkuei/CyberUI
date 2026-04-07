import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
  it('renders without crashing', () => {
    const { container } = render(<SectionTitle>System Status</SectionTitle>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children text in an h2', () => {
    render(<SectionTitle>System Status</SectionTitle>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('System Status');
  });

  it('renders decorative line by default (showLine=true)', () => {
    const { container } = render(<SectionTitle>Title</SectionTitle>);
    // The line is a sibling div next to the h2
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children.length).toBe(2);
  });

  it('does not render decorative line when showLine=false', () => {
    const { container } = render(<SectionTitle showLine={false}>Title</SectionTitle>);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children.length).toBe(1);
  });

  it('applies custom className to outer wrapper', () => {
    const { container } = render(<SectionTitle className="my-custom-class">Title</SectionTitle>);
    expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
  });

  it('applies uppercase and tracking classes to heading', () => {
    render(<SectionTitle>Title</SectionTitle>);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2.className).toContain('uppercase');
    expect(h2.className).toContain('tracking-');
  });

  it('applies sm text size class for size="sm"', () => {
    render(<SectionTitle size="sm">Small Title</SectionTitle>);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2.className).toContain('text-xs');
  });

  it('applies md text size class for size="md" (default)', () => {
    render(<SectionTitle>Default Title</SectionTitle>);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2.className).toContain('text-sm');
  });

  it('applies lg text size class for size="lg"', () => {
    render(<SectionTitle size="lg">Large Title</SectionTitle>);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2.className).toContain('text-base');
  });
});
