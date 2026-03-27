import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('renders correctly with label', () => {
    render(<Input label="Username" placeholder="Enter name" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<Input label="Password" helperText="Min 8 chars" />);
    expect(screen.getByText('Min 8 chars')).toBeInTheDocument();
  });

  it('displays error message and applies error styles', () => {
    render(<Input label="Email" error="Invalid email" />);
    const errorText = screen.getByText('Invalid email');
    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveClass('text-error');
    expect(screen.getByRole('textbox')).toHaveClass('border-error');
  });

  it('renders left and right icons', () => {
    const LeftIcon = () => <span data-testid="left-icon">L</span>;
    const RightIcon = () => <span data-testid="right-icon">R</span>;
    render(<Input leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'cyber' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Input disabled label="Locked" />);
    const input = screen.getByLabelText('Locked');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('cursor-not-allowed');
  });
});
