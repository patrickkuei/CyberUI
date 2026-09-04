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

  it('preserves the day-of-month when paging months with PageUp/PageDown', () => {
    // Regression: addMonths called d.setDate(1) before shifting the month,
    // so PageDown from day 15 silently jumped focus to day 1 of the next
    // month instead of day 15.
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '15' }), { key: 'PageDown' });
    expect(screen.getByText('February 2026')).toBeInTheDocument();
    expect(screen.getByRole('gridcell', { name: '15' })).toHaveFocus();
  });

  it('clamps to the last valid day when paging into a shorter month', () => {
    // Regression companion: Jan 31 + 1 month has no Feb 31, so addMonths
    // must clamp to the last day of the target month (Feb 28 in 2026)
    // rather than overflowing into March.
    render(<DatePicker label="Deployment Date" defaultValue={new Date(2026, 0, 31)} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    // The January grid also shows a leading, dimmed "31" from December
    // (padding for a full week) — disambiguate to the in-month Jan 31 cell.
    const jan31 = screen
      .getAllByRole('gridcell', { name: '31' })
      .find((el) => !el.className.includes('text-muted/30'))!;
    fireEvent.keyDown(jan31, { key: 'PageDown' });
    expect(screen.getByText('February 2026')).toBeInTheDocument();
    expect(screen.getByRole('gridcell', { name: '28' })).toHaveFocus();
  });

  it('preserves the day-of-month when using the header Previous/Next month buttons', () => {
    // Regression: goToPreviousMonth/goToNextMonth both route through
    // addMonths via moveFocus, so they inherited the same day-of-month reset.
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    fireEvent.click(screen.getByRole('button', { name: 'Next month' }));
    expect(screen.getByText('February 2026')).toBeInTheDocument();
    expect(screen.getByRole('gridcell', { name: '15' })).toHaveFocus();
  });

  it('reopens immediately when re-toggled during the close animation instead of getting stuck closed', async () => {
    // Regression: `open` stayed true for the whole 180ms close-animation
    // window (only `isClosing` flips first), so toggleCalendar's `if (open)`
    // branch treated a click during that window as "still open" and just
    // restarted the close timer — a rapid click-click within 180ms of a
    // close could never reopen the calendar.
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    const trigger = screen.getByRole('combobox', { name: 'Deployment Date' });

    fireEvent.click(trigger); // open
    fireEvent.click(trigger); // start closing (isClosing: true, open still true)
    fireEvent.click(trigger); // re-toggle mid-close — should reopen, not restart the close

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    // Give the old (pre-fix) close timeout a chance to fire; the calendar
    // must still be open afterwards.
    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('skips a disabled day when arrow-key navigation would land on one, instead of stranding DOM focus', () => {
    // Regression: moveFocus set focusedDate to a day disabled by
    // minDate/maxDate, and the focus-sync effect then called .focus() on a
    // <button disabled>, which browsers refuse — DOM focus stayed on the
    // previous button while roving tabIndex moved on, stalling further
    // keyboard navigation at the boundary.
    render(
      <DatePicker
        label="Deployment Date"
        defaultValue={new Date(2026, 0, 12)}
        minDate={new Date(2026, 0, 10)}
      />
    );
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    // ArrowUp from day 12 naively lands on day 5 (12 - 7), which is before
    // minDate (10) and disabled — focus should skip forward to day 10.
    fireEvent.keyDown(screen.getByRole('gridcell', { name: '12' }), { key: 'ArrowUp' });
    const day10 = screen.getByRole('gridcell', { name: '10' });
    expect(day10).not.toBeDisabled();
    expect(day10).toHaveFocus();
  });

  it('stays put when arrow-key navigation has no enabled day left in that direction', () => {
    // Companion to the disabled-day-skip fix: if every remaining day in the
    // direction of travel is disabled, focus should simply not move rather
    // than landing on (or getting stuck near) a disabled day.
    render(
      <DatePicker
        label="Deployment Date"
        defaultValue={new Date(2026, 0, 10)}
        minDate={new Date(2026, 0, 10)}
      />
    );
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));

    const day10 = screen.getByRole('gridcell', { name: '10' });
    fireEvent.keyDown(day10, { key: 'ArrowLeft' });
    expect(day10).toHaveFocus();
  });

  it('includes active:bg-base in the trigger classes, matching Input\'s variant styling', () => {
    // Regression: getVariantClasses was copy-pasted from Input.tsx and
    // dropped active:bg-base from every enabled/error variant string.
    render(<DatePicker label="Deployment Date" variant="primary" />);
    expect(screen.getByRole('combobox', { name: 'Deployment Date' }).className).toMatch(/active:bg-base/);
  });

  it('includes active:bg-base on the trigger when in the error state', () => {
    render(<DatePicker label="Deployment Date" error="Selected date has already lapsed" />);
    expect(screen.getByRole('combobox', { name: 'Deployment Date' }).className).toMatch(/active:bg-base/);
  });

  it('closes the calendar on Tab out of a day cell', async () => {
    render(<DatePicker label="Deployment Date" defaultValue={ANCHOR_DATE} />);
    fireEvent.click(screen.getByRole('combobox', { name: 'Deployment Date' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole('gridcell', { name: '15' }), { key: 'Tab' });
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});
