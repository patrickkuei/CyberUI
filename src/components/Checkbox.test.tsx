import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders a hidden checkbox input', () => {
    render(<Checkbox />);
    const input = document.querySelector('input[type="checkbox"]');
    expect(input).toBeInTheDocument();
  });

  it('renders label text when label prop is provided', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('does not render label text when label prop is omitted', () => {
    const { container } = render(<Checkbox />);
    expect(container.querySelector('span')).toBeNull();
  });

  it('renders error message when error prop is provided', () => {
    render(<Checkbox error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('does not render error message when disabled', () => {
    render(<Checkbox error="This field is required" disabled />);
    expect(screen.queryByText('This field is required')).toBeNull();
  });

  it('calls onChange when clicked in uncontrolled mode', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const input = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} disabled />);
    const input = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    fireEvent.click(input);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('reflects controlled checked state', () => {
    render(<Checkbox checked={true} onChange={vi.fn()} />);
    const input = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('reflects controlled unchecked state', () => {
    render(<Checkbox checked={false} onChange={vi.fn()} />);
    const input = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input.checked).toBe(false);
  });

  it('applies custom className to outer wrapper', () => {
    const { container } = render(<Checkbox className="my-custom-class" />);
    expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
  });

  it('applies disabled attribute to the input', () => {
    render(<Checkbox disabled />);
    const input = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('toggles internal state when clicked in uncontrolled mode', () => {
    render(<Checkbox />);
    const input = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input.checked).toBe(false);
    fireEvent.click(input);
    expect(input.checked).toBe(true);
  });
});
