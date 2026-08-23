import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Combobox from './Combobox';
import type { ComboboxOption } from './Combobox';

const OPTIONS: ComboboxOption[] = [
  { value: 'sector-1', label: 'Sector 1 — Corporate Plaza' },
  { value: 'sector-2', label: 'Sector 2 — The Sprawl' },
  { value: 'sector-3', label: 'Sector 3 — Docklands', disabled: true },
  { value: 'sector-4', label: 'Sector 4 — Undercroft' },
];

describe('Combobox', () => {
  it('renders the input without crashing and keeps the listbox out of the DOM while closed', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" />);
    expect(screen.getByRole('combobox', { name: 'Target Sector' })).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('wires role/aria-expanded/aria-controls/aria-autocomplete on the input', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" />);
    const input = screen.getByRole('combobox', { name: 'Target Sector' });
    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(input).toHaveAttribute('aria-autocomplete', 'list');

    fireEvent.focus(input);
    const listbox = screen.getByRole('listbox');
    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(input.getAttribute('aria-controls')).toBe(listbox.id);
  });

  it('opens the listbox on focus and shows all options', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" />);
    fireEvent.focus(screen.getByRole('combobox'));
    expect(screen.getAllByRole('option')).toHaveLength(4);
  });

  it('filters options as the user types', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'sprawl' } });

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('Sector 2 — The Sprawl');
  });

  it('shows the no-options message when nothing matches', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" noOptionsText="No signal — 0 matches" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'nonexistent' } });

    expect(screen.queryByRole('option')).not.toBeInTheDocument();
    expect(screen.getByText('No signal — 0 matches')).toBeInTheDocument();
  });

  it('selects an option on click and closes the listbox', () => {
    const handleChange = vi.fn();
    render(<Combobox options={OPTIONS} label="Target Sector" onValueChange={handleChange} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);

    fireEvent.click(screen.getByRole('option', { name: 'Sector 2 — The Sprawl' }));
    expect(handleChange).toHaveBeenCalledWith('sector-2');
    expect(input).toHaveValue('Sector 2 — The Sprawl');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('does not select a disabled option on click', () => {
    const handleChange = vi.fn();
    render(<Combobox options={OPTIONS} label="Target Sector" onValueChange={handleChange} />);
    fireEvent.focus(screen.getByRole('combobox'));

    fireEvent.click(screen.getByRole('option', { name: 'Sector 3 — Docklands' }));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('navigates and selects options with ArrowDown/Enter, skipping disabled options', () => {
    const handleChange = vi.fn();
    render(<Combobox options={OPTIONS} label="Target Sector" onValueChange={handleChange} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);

    fireEvent.keyDown(input, { key: 'ArrowDown' }); // sector-1
    fireEvent.keyDown(input, { key: 'ArrowDown' }); // sector-2
    fireEvent.keyDown(input, { key: 'ArrowDown' }); // skips disabled sector-3 -> sector-4
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(handleChange).toHaveBeenCalledWith('sector-4');
    expect(input).toHaveValue('Sector 4 — Undercroft');
  });

  it('wraps ArrowUp navigation to the last enabled option and sets aria-activedescendant', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowUp' });

    const lastOption = screen.getByRole('option', { name: 'Sector 4 — Undercroft' });
    expect(input.getAttribute('aria-activedescendant')).toBe(lastOption.id);
  });

  it('jumps to first/last option on Home/End', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'End' });
    expect(input.getAttribute('aria-activedescendant')).toBe(
      screen.getByRole('option', { name: 'Sector 4 — Undercroft' }).id
    );

    fireEvent.keyDown(input, { key: 'Home' });
    expect(input.getAttribute('aria-activedescendant')).toBe(
      screen.getByRole('option', { name: 'Sector 1 — Corporate Plaza' }).id
    );
  });

  it('reverts unmatched text to the last committed value on Escape', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" defaultValue="sector-1" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'garbage' } });
    fireEvent.keyDown(input, { key: 'Escape' });

    expect(input).toHaveValue('Sector 1 — Corporate Plaza');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('reverts unmatched text on blur when allowCustomValue is false', async () => {
    const handleChange = vi.fn();
    render(
      <Combobox options={OPTIONS} label="Target Sector" defaultValue="sector-1" onValueChange={handleChange} />
    );
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'garbage' } });
    fireEvent.blur(input);

    expect(handleChange).not.toHaveBeenCalled();
    await waitFor(() => expect(input).toHaveValue('Sector 1 — Corporate Plaza'));
  });

  it('commits unmatched text on blur when allowCustomValue is true', async () => {
    const handleChange = vi.fn();
    render(<Combobox options={OPTIONS} label="Tag Search" allowCustomValue onValueChange={handleChange} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'brand-new-tag' } });
    fireEvent.blur(input);

    await waitFor(() => expect(handleChange).toHaveBeenCalledWith('brand-new-tag'));
  });

  it('selects the matching option instead of a raw commit when custom text exactly matches a label', () => {
    const handleChange = vi.fn();
    render(<Combobox options={OPTIONS} label="Target Sector" allowCustomValue onValueChange={handleChange} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'Sector 2 — The Sprawl' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(handleChange).toHaveBeenCalledWith('sector-2');
  });

  it('respects a controlled value without self-managing state', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <Combobox options={OPTIONS} label="Target Sector" value="sector-1" onValueChange={handleChange} />
    );
    const input = screen.getByRole('combobox');
    expect(input).toHaveValue('Sector 1 — Corporate Plaza');

    fireEvent.focus(input);
    fireEvent.click(screen.getByRole('option', { name: 'Sector 2 — The Sprawl' }));
    expect(handleChange).toHaveBeenCalledWith('sector-2');
    // Value prop unchanged -> displayed text stays on the original selection.
    expect(input).toHaveValue('Sector 1 — Corporate Plaza');

    rerender(<Combobox options={OPTIONS} label="Target Sector" value="sector-2" onValueChange={handleChange} />);
    expect(input).toHaveValue('Sector 2 — The Sprawl');
  });

  it('marks the selected option with aria-selected', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" defaultValue="sector-2" />);
    fireEvent.focus(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Sector 2 — The Sprawl' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('option', { name: 'Sector 1 — Corporate Plaza' })).toHaveAttribute(
      'aria-selected',
      'false'
    );
  });

  it('renders an error message and sets aria-invalid', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" error="Selection required" />);
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Selection required')).toBeInTheDocument();
  });

  it('never opens the listbox and blocks interaction when disabled', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" disabled />);
    const input = screen.getByRole('combobox');
    expect(input).toBeDisabled();
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('applies a responsive size prop without crashing', () => {
    render(<Combobox options={OPTIONS} label="Target Sector" size={{ base: 'sm', md: 'lg' }} />);
    fireEvent.focus(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});
