import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Divider from './Divider';

describe('Divider', () => {
  it('renders without crashing', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders a single div element', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('applies horizontal base classes by default', () => {
    const { container } = render(<Divider />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('w-full');
    expect(el.className).toContain('h-[1px]');
  });

  it('applies gradient variant classes by default', () => {
    const { container } = render(<Divider />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('bg-gradient-to-r');
  });

  it('applies solid variant class', () => {
    const { container } = render(<Divider variant="solid" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('bg-secondary/30');
  });

  it('applies dashed variant class', () => {
    const { container } = render(<Divider variant="dashed" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('border-dashed');
  });

  it('applies vertical base classes', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('w-[1px]');
    expect(el.className).toContain('h-full');
  });

  it('applies vertical gradient direction for vertical orientation', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('bg-gradient-to-b');
  });

  it('applies custom className', () => {
    const { container } = render(<Divider className="my-custom-class" />);
    expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
  });
});
