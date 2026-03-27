import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Select from './Select';

const options = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
  { value: 'opt3', label: 'Option 3', disabled: true },
];

describe('Select Component', () => {
  it('renders with label and options', () => {
    render(<Select label="Neural Port" options={options} />);
    expect(screen.getByText('Neural Port')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'opt2' } });
    
    expect(handleChange).toHaveBeenCalled();
    expect((select as HTMLSelectElement).value).toBe('opt2');
  });

  it('renders placeholder correctly', () => {
    render(<Select options={options} placeholder="Select a port" />);
    expect(screen.getByText('Select a port')).toBeInTheDocument();
  });

  it('displays error message and applies error styles', () => {
    render(<Select options={options} error="Critical connection error" />);
    expect(screen.getByText('Critical connection error')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveClass('border-error');
  });

  it('disables the select when disabled prop is true', () => {
    render(<Select options={options} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('disables specific options when option.disabled is true', () => {
    render(<Select options={options} />);
    const disabledOption = screen.getByText('Option 3') as HTMLOptionElement;
    expect(disabledOption.disabled).toBe(true);
  });
});
