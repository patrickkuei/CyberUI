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

  it('does not clobber in-progress typed text when the options array gets a new reference', () => {
    // Regression: `labelForValue` used to be a dep of the committed-value
    // resync effect, so any parent re-render passing a fresh `options`
    // array identity (e.g. `options={items.filter(...)}`) re-fired the
    // effect and silently overwrote whatever the user was actively typing.
    const { rerender } = render(<Combobox options={OPTIONS} label="Target Sector" defaultValue="sector-1" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'sprawl' } });
    expect(input).toHaveValue('sprawl');

    // Same content, new array reference — simulates an inline-computed options prop.
    rerender(<Combobox options={[...OPTIONS]} label="Target Sector" defaultValue="sector-1" />);
    expect(input).toHaveValue('sprawl');
  });

  it('submits the committed option value (not the display label) via a hidden input', () => {
    // Regression: the visible text input carried `name`, so FormData/native
    // form submission and uncontrolled form libraries read the human
    // readable label instead of the option's actual value.
    render(<Combobox options={OPTIONS} label="Target Sector" defaultValue="sector-2" name="sector" />);
    const visibleInput = screen.getByRole('combobox');
    expect(visibleInput).not.toHaveAttribute('name');

    const hiddenInput = document.querySelector('input[type="hidden"][name="sector"]') as HTMLInputElement | null;
    expect(hiddenInput).not.toBeNull();
    expect(hiddenInput).toHaveValue('sector-2');
  });

  it('resets activeIndex when options change identity while the dropdown is open', () => {
    // Regression: `activeIndex` is a positional index into `filteredOptions`.
    // If `options` changed identity while open and unfiltered, the stale
    // index kept pointing at whatever position it was on, so Enter could
    // select a completely different (or now-disabled) option.
    const handleChange = vi.fn();
    const { rerender } = render(<Combobox options={OPTIONS} label="Target Sector" onValueChange={handleChange} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' }); // activeIndex -> 0 (sector-1)

    const NEW_OPTIONS: ComboboxOption[] = [
      { value: 'zone-a', label: 'Zone A' },
      { value: 'zone-b', label: 'Zone B' },
    ];
    rerender(<Combobox options={NEW_OPTIONS} label="Target Sector" onValueChange={handleChange} />);

    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('keeps typed custom text as-is when it matches another option value (not label)', async () => {
    // Regression: custom-value commits matched by option LABEL, but the
    // value-sync effect matched by option VALUE. Typing text that happens
    // to equal a different option's `value` committed correctly as custom
    // text, then got silently relabeled to that other option's label.
    const handleChange = vi.fn();
    render(<Combobox options={OPTIONS} label="Tag Search" allowCustomValue onValueChange={handleChange} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    // "sector-2" matches OPTIONS[1].value but no option's label.
    fireEvent.change(input, { target: { value: 'sector-2' } });
    fireEvent.blur(input);

    await waitFor(() => expect(handleChange).toHaveBeenCalledWith('sector-2'));
    expect(input).toHaveValue('sector-2');
  });

  it('does not pre-select an empty-value placeholder option when uncontrolled and unset', () => {
    // Regression: an uncontrolled Combobox with no `defaultValue` starts
    // with an internal committed value of ''. An option with `value: ''`
    // (e.g. a placeholder like "All Sectors") collided with that sentinel,
    // so it appeared pre-selected before the user ever interacted.
    const OPTIONS_WITH_PLACEHOLDER: ComboboxOption[] = [{ value: '', label: 'All Sectors' }, ...OPTIONS];
    const handleChange = vi.fn();
    render(<Combobox options={OPTIONS_WITH_PLACEHOLDER} label="Target Sector" onValueChange={handleChange} />);
    const input = screen.getByRole('combobox');
    expect(input).toHaveValue('');

    fireEvent.focus(input);
    expect(screen.getByRole('option', { name: 'All Sectors' })).toHaveAttribute('aria-selected', 'false');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does pre-select an empty-value option when defaultValue is explicitly set to ""', () => {
    // Complements the regression above: an *explicit* empty-string
    // defaultValue is a deliberate choice and should still match.
    const OPTIONS_WITH_PLACEHOLDER: ComboboxOption[] = [{ value: '', label: 'All Sectors' }, ...OPTIONS];
    render(<Combobox options={OPTIONS_WITH_PLACEHOLDER} label="Target Sector" defaultValue="" />);
    expect(screen.getByRole('combobox')).toHaveValue('All Sectors');
  });

  it('marks only the first option as selected when multiple options share the same value', () => {
    // Regression: `isSelected` had no dedup, so options sharing a `value`
    // (e.g. merged from two data sources) all rendered aria-selected="true"
    // simultaneously while the input only ever showed the first one's label.
    const DUPLICATE_OPTIONS: ComboboxOption[] = [
      { value: 'sector-2', label: 'Sector 2 — The Sprawl (Primary Feed)' },
      { value: 'sector-2', label: 'Sector 2 — The Sprawl (Mirror Feed)' },
    ];
    render(<Combobox options={DUPLICATE_OPTIONS} label="Target Sector" defaultValue="sector-2" />);
    fireEvent.focus(screen.getByRole('combobox'));
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveAttribute('aria-selected', 'true');
    expect(options[1]).toHaveAttribute('aria-selected', 'false');
  });
});
