import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DatePicker from './DatePicker';

// Thursday, January 15, 2026 — used as a fixed anchor so grid-navigation
// assertions don't depend on the real current date.
const ANCHOR_DATE = new Date(2026, 0, 15);

describe('DatePicker', () => {
  it('renders the trigger without crashing and keeps the calendar out of the DOM while closed', () => {
    render(<DatePicker label="Deployment Date" />);
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('wires aria-haspopup/aria-expanded/aria-controls on the trigger', () => {
    render(<DatePicker label="Deployment Date" />);
    const trigger = screen.getByRole('combobox', { name: 'Deployment Date' });
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);
    const dialog = screen.getByRole('dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger.getAttribute('aria-controls')).toBe(dialog.id);
  });

  it('opens the calendar grid on trigger click', () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));
    expect(screen.getByRole('grid')).toBeInTheDocument();
    expect(screen.getByText('January 2026')).toBeInTheDocument();
  });

  it('shows the formatted default value in the trigger', () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toHaveValue('2026-01-15');
  });

  it('selects a day, updates the trigger, and closes the calendar (uncontrolled)', async () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    fireEvent.click(screen.getByRole('gridcell', { name: '20' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toHaveValue('2026-01-20');
  });

  it('respects a controlled value without self-managing state', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <DatePicker label="Deployment Date" value={ANCHOR_DATE} onValueChange={handleChange} />
    );
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));
    fireEvent.click(screen.getByRole('gridcell', { name: '20' }));

    expect(handleChange).toHaveBeenCalledWith(new Date(2026, 0, 20));
    // Value prop hasn't changed yet, so the trigger still shows the old date.
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toHaveValue('2026-01-15');

    rerender(<DatePicker label="Deployment Date" value={new Date(2026, 0, 20)} onValueChange={handleChange} />);
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toHaveValue('2026-01-20');
  });

  it('disables and blocks selection of days outside minDate/maxDate', () => {
    const handleChange = vi.fn();
    render(
      <DatePicker
        label="Deployment Date"
        defaultValue={ANCHOR_DATE}
        minDate={new Date(2026, 0, 10)}
        maxDate={new Date(2026, 0, 20)}
        onValueChange={handleChange}
      />
    );
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    const outOfRangeDay = screen.getByRole('gridcell', { name: '25' });
    expect(outOfRangeDay).toBeDisabled();
    fireEvent.click(outOfRangeDay);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('marks today with aria-current="date"', () => {
    render(<DatePicker label="Deployment Date" />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));
    expect(screen.getByRole('gridcell', { current: 'date' })).toBeInTheDocument();
  });

  it('opens the calendar when ArrowDown is pressed on the trigger', () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    const trigger = screen.getByRole('combobox', { name: 'Deployment Date' });
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('moves focus a day at a time with ArrowLeft/ArrowRight', () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    const day15 = screen.getByRole('gridcell', { name: '15' });
    fireEvent.keyDown(day15, { key: 'ArrowRight' });
    expect(screen.getByRole('gridcell', { name: '16' })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '16' }), { key: 'ArrowLeft' });
    expect(screen.getByRole('gridcell', { name: '15' })).toHaveFocus();
  });

  it('moves focus a week at a time with ArrowUp/ArrowDown', () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    const day15 = screen.getByRole('gridcell', { name: '15' });
    fireEvent.keyDown(day15, { key: 'ArrowDown' });
    expect(screen.getByRole('gridcell', { name: '22' })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '22' }), { key: 'ArrowUp' });
    expect(screen.getByRole('gridcell', { name: '15' })).toHaveFocus();
  });

  it('jumps a month with PageUp/PageDown', () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '15' }), { key: 'PageDown' });
    expect(screen.getByText('February 2026')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '15' }), { key: 'PageUp' });
    expect(screen.getByText('January 2026')).toBeInTheDocument();
  });

  it('selects the focused day on Enter', async () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '15' }), { key: 'ArrowRight' });
    fireEvent.keyDown(screen.getByRole('gridcell', { name: '16' }), { key: 'Enter' });

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toHaveValue('2026-01-16');
  });

  it('closes on Escape and returns focus to the trigger', async () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    const trigger = screen.getByRole('combobox', { name: 'Deployment Date' });
    fireEvent.click(trigger);

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '15' }), { key: 'Escape' });
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });

  it('closes when clicking outside the calendar', async () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('never opens when disabled', () => {
    render(<DatePicker label="Deployment Date" disabled defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('applies a custom formatDate function', () => {
    render(
      <DatePicker
        label="Deployment Date"
        defaultValue={ANCHOR_DATE}
        formatDate={(d) => `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}
      />
    );
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toHaveValue('1/15/2026');
  });

  it('shows an error message and marks the trigger invalid', () => {
    render(<DatePicker label="Deployment Date" error="Selected date has already lapsed" />);
    expect(screen.getByText('Selected date has already lapsed')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Deployment Date' })).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies a responsive size prop without crashing', () => {
    render(<DatePicker label="Deployment Date" size={{ base: 'sm', md: 'lg' }} defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
