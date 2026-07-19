import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RadioGroup from './RadioGroup';
import type { RadioOption } from './RadioGroup';

const OPTIONS: RadioOption[] = [
  { value: 'street', label: 'Street' },
  { value: 'corp', label: 'Corporate' },
  { value: 'net', label: 'Netrunner' },
];

describe('RadioGroup', () => {
  it('renders all options without crashing', () => {
    render(<RadioGroup options={OPTIONS} />);
    expect(screen.getByRole('radio', { name: 'Street' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Corporate' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Netrunner' })).toBeInTheDocument();
  });

  it('renders the group label as a legend', () => {
    render(<RadioGroup options={OPTIONS} label="Access Tier" />);
    expect(screen.getByText('Access Tier')).toBeInTheDocument();
  });

  it('starts with nothing selected by default', () => {
    render(<RadioGroup options={OPTIONS} />);
    for (const option of OPTIONS) {
      expect(screen.getByRole('radio', { name: option.label })).not.toBeChecked();
    }
  });

  it('respects defaultValue for uncontrolled initial selection', () => {
    render(<RadioGroup options={OPTIONS} defaultValue="corp" />);
    expect(screen.getByRole('radio', { name: 'Corporate' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Street' })).not.toBeChecked();
  });

  it('selects an option on click in uncontrolled mode', () => {
    render(<RadioGroup options={OPTIONS} />);
    const streetInput = screen.getByRole('radio', { name: 'Street' });
    fireEvent.click(streetInput);
    expect(streetInput).toBeChecked();
  });

  it('only allows one option to be checked at a time', () => {
    render(<RadioGroup options={OPTIONS} defaultValue="street" />);
    const streetInput = screen.getByRole('radio', { name: 'Street' });
    const corpInput = screen.getByRole('radio', { name: 'Corporate' });
    expect(streetInput).toBeChecked();
    fireEvent.click(corpInput);
    expect(corpInput).toBeChecked();
    expect(streetInput).not.toBeChecked();
  });

  it('calls onValueChange with the newly selected value', () => {
    const handleChange = vi.fn();
    render(<RadioGroup options={OPTIONS} onValueChange={handleChange} />);
    fireEvent.click(screen.getByRole('radio', { name: 'Netrunner' }));
    expect(handleChange).toHaveBeenCalledWith('net');
  });

  it('respects controlled value and does not self-manage state', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <RadioGroup options={OPTIONS} value="street" onValueChange={handleChange} />
    );
    const corpInput = screen.getByRole('radio', { name: 'Corporate' });
    fireEvent.click(corpInput);
    expect(handleChange).toHaveBeenCalledWith('corp');
    expect(corpInput).not.toBeChecked();

    rerender(<RadioGroup options={OPTIONS} value="corp" onValueChange={handleChange} />);
    expect(corpInput).toBeChecked();
  });

  it('moves selection to the next option on ArrowDown, wrapping to the first', () => {
    render(<RadioGroup options={OPTIONS} defaultValue="street" />);
    const streetInput = screen.getByRole('radio', { name: 'Street' });
    const corpInput = screen.getByRole('radio', { name: 'Corporate' });
    const netInput = screen.getByRole('radio', { name: 'Netrunner' });
    streetInput.focus();
    fireEvent.keyDown(streetInput, { key: 'ArrowDown' });
    expect(corpInput).toHaveFocus();
    expect(corpInput).toBeChecked();
    fireEvent.keyDown(corpInput, { key: 'ArrowDown' });
    expect(netInput).toHaveFocus();
    expect(netInput).toBeChecked();
    fireEvent.keyDown(netInput, { key: 'ArrowDown' });
    expect(streetInput).toHaveFocus();
    expect(streetInput).toBeChecked();
  });

  it('moves selection to the previous option on ArrowUp, wrapping to the last', () => {
    render(<RadioGroup options={OPTIONS} defaultValue="street" />);
    const streetInput = screen.getByRole('radio', { name: 'Street' });
    const netInput = screen.getByRole('radio', { name: 'Netrunner' });
    streetInput.focus();
    fireEvent.keyDown(streetInput, { key: 'ArrowUp' });
    expect(netInput).toHaveFocus();
    expect(netInput).toBeChecked();
  });

  it('supports ArrowRight/ArrowLeft as aliases for ArrowDown/ArrowUp', () => {
    render(<RadioGroup options={OPTIONS} defaultValue="street" />);
    const streetInput = screen.getByRole('radio', { name: 'Street' });
    const corpInput = screen.getByRole('radio', { name: 'Corporate' });
    streetInput.focus();
    fireEvent.keyDown(streetInput, { key: 'ArrowRight' });
    expect(corpInput).toHaveFocus();
    fireEvent.keyDown(corpInput, { key: 'ArrowLeft' });
    expect(streetInput).toHaveFocus();
  });

  it('skips disabled options during arrow-key navigation and click', () => {
    const options: RadioOption[] = [
      { value: 'street', label: 'Street' },
      { value: 'corp', label: 'Corporate', disabled: true },
      { value: 'net', label: 'Netrunner' },
    ];
    render(<RadioGroup options={options} defaultValue="street" />);
    const streetInput = screen.getByRole('radio', { name: 'Street' });
    const corpInput = screen.getByRole('radio', { name: 'Corporate' });
    const netInput = screen.getByRole('radio', { name: 'Netrunner' });
    expect(corpInput).toBeDisabled();
    fireEvent.click(corpInput);
    expect(corpInput).not.toBeChecked();

    streetInput.focus();
    fireEvent.keyDown(streetInput, { key: 'ArrowDown' });
    expect(netInput).toHaveFocus();
  });

  it('uses a roving tabindex so only the selected (or first enabled) option is tabbable', () => {
    render(<RadioGroup options={OPTIONS} defaultValue="corp" />);
    expect(screen.getByRole('radio', { name: 'Street' })).toHaveAttribute('tabindex', '-1');
    expect(screen.getByRole('radio', { name: 'Corporate' })).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('radio', { name: 'Netrunner' })).toHaveAttribute('tabindex', '-1');
  });

  it('makes the first enabled option tabbable when nothing is selected yet', () => {
    render(<RadioGroup options={OPTIONS} />);
    expect(screen.getByRole('radio', { name: 'Street' })).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('radio', { name: 'Corporate' })).toHaveAttribute('tabindex', '-1');
  });

  it('disables every option and prevents selection when disabled', () => {
    const handleChange = vi.fn();
    render(<RadioGroup options={OPTIONS} disabled onValueChange={handleChange} />);
    const streetInput = screen.getByRole('radio', { name: 'Street' });
    expect(streetInput).toBeDisabled();
    fireEvent.click(streetInput);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders an error message and wires it via aria-describedby', () => {
    render(<RadioGroup options={OPTIONS} label="Access Tier" error="Selection required" />);
    expect(screen.getByText('Selection required')).toBeInTheDocument();
    const fieldset = screen.getByText('Access Tier').closest('fieldset') as HTMLElement;
    const describedBy = fieldset.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy as string)).toHaveTextContent('Selection required');
  });

  it('does not render error message when disabled', () => {
    render(<RadioGroup options={OPTIONS} error="Selection required" disabled />);
    expect(screen.queryByText('Selection required')).toBeNull();
  });

  it('shares a common name attribute across all option inputs', () => {
    render(<RadioGroup options={OPTIONS} name="tier" />);
    for (const option of OPTIONS) {
      expect(screen.getByRole('radio', { name: option.label })).toHaveAttribute('name', 'tier');
    }
  });

  it('applies responsive size and orientation props without crashing', () => {
    render(
      <RadioGroup
        options={OPTIONS}
        size={{ base: 'sm', md: 'lg' }}
        orientation={{ base: 'vertical', md: 'horizontal' }}
      />
    );
    expect(screen.getByRole('radio', { name: 'Street' })).toBeInTheDocument();
  });
});
