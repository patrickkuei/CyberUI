import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const;
const MONTH_LABELS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const startOfDay = (date: Date): Date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const addDays = (date: Date, amount: number): Date => {
  const d = new Date(date);
  d.setDate(d.getDate() + amount);
  return d;
};

const addMonths = (date: Date, amount: number): Date => {
  const d = new Date(date);
  d.setDate(1);
  d.setMonth(d.getMonth() + amount);
  return d;
};

const isDateDisabled = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
  if (minDate && date < startOfDay(minDate)) return true;
  if (maxDate && date > startOfDay(maxDate)) return true;
  return false;
};

const defaultFormatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

interface CalendarDay {
  date: Date;
  inCurrentMonth: boolean;
}

/** Builds a fixed 6-week (42-day) grid for the month containing `viewDate`, including leading/trailing days from adjacent months so every row stays full. */
const buildCalendarGrid = (viewDate: Date): CalendarDay[] => {
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(viewDate.getFullYear(), month, 1);
  const gridStart = addDays(firstOfMonth, -firstOfMonth.getDay());

  return Array.from({ length: 42 }, (_, i) => {
    const date = addDays(gridStart, i);
    return { date, inCurrentMonth: date.getMonth() === month };
  });
};

const chunkIntoWeeks = (days: CalendarDay[]): CalendarDay[][] => {
  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
};

/**
 * Props for the DatePicker component.
 */
export interface DatePickerProps {
  /** Selected date (controlled). Pass `null` to represent no selection. */
  value?: Date | null;
  /**
   * Initial selected date for uncontrolled usage.
   * @default null
   */
  defaultValue?: Date | null;
  /** Fired when the user selects a day in the calendar grid. */
  onValueChange?: (date: Date | null) => void;
  /** Earliest selectable date (inclusive). Days before it render dimmed and disabled. */
  minDate?: Date;
  /** Latest selectable date (inclusive). Days after it render dimmed and disabled. */
  maxDate?: Date;
  /** Label rendered above the trigger input. */
  label?: string;
  /**
   * Placeholder text shown in the trigger when no date is selected.
   * @default 'Select a date...'
   */
  placeholder?: string;
  /**
   * Visual style of the trigger input, reusing Input's variant vocabulary.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /**
   * Size of the trigger input (height and padding).
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Disables the trigger and prevents the calendar from opening.
   * @default false
   */
  disabled?: boolean;
  /** Optional helper text shown below the trigger. */
  helperText?: string;
  /** Error message that overrides helper text and highlights the trigger. */
  error?: string;
  /**
   * Formats the selected date for display in the trigger input.
   * @default An ISO-like `YYYY-MM-DD` formatter.
   */
  formatDate?: (date: Date) => string;
  /**
   * Accessible label for the calendar dialog.
   * @default 'Choose date'
   */
  ariaLabel?: string;
  /** Additional CSS classes for the outer wrapper. */
  className?: string;
  /** id applied to the trigger input. */
  id?: string;
}

/**
 * A cyberpunk-styled single-date picker: a text-input trigger (matching
 * Input's styling) that opens a keyboard-navigable calendar grid popover
 * (matching Modal/Select's overlay treatment). Range selection is not yet
 * supported — a natural follow-up once single-date selection is proven out.
 *
 * @example
 * // Basic uncontrolled usage
 * <DatePicker label="Deployment Date" placeholder="Select a date..." />
 *
 * @example
 * // Controlled, bounded to the next 30 days
 * <DatePicker
 *   label="Extraction Window"
 *   value={date}
 *   onValueChange={setDate}
 *   minDate={new Date()}
 *   maxDate={addDays(new Date(), 30)}
 * />
 */
const DatePicker: React.FC<DatePickerProps> = ({
  value,
  defaultValue = null,
  onValueChange,
  minDate,
  maxDate,
  label,
  placeholder = 'Select a date...',
  variant = 'primary',
  size = 'md',
  disabled = false,
  helperText,
  error,
  formatDate = defaultFormatDate,
  ariaLabel = 'Choose date',
  className = '',
  id,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue);
  const selectedValue = isControlled ? value : internalValue;

  const initialView = startOfDay(selectedValue ?? new Date());
  const [viewDate, setViewDate] = useState<Date>(initialView);
  const [focusedDate, setFocusedDate] = useState<Date>(initialView);

  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const generatedId = useId();
  const inputId = id || generatedId;
  const calendarId = `datepicker-calendar-${generatedId}`;
  const describedById = error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLInputElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dayRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pendingFocusRef = useRef(false);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const closeCalendar = useCallback((focusTrigger: boolean) => {
    setIsClosing(true);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
      if (focusTrigger) triggerRef.current?.focus();
    }, 180);
  }, []);

  const openCalendar = useCallback(() => {
    if (disabled) return;
    const anchor = startOfDay(selectedValue ?? new Date());
    setViewDate(anchor);
    setFocusedDate(anchor);
    setOpen(true);
    pendingFocusRef.current = true;
  }, [disabled, selectedValue]);

  const toggleCalendar = useCallback(() => {
    if (open) {
      closeCalendar(false);
    } else {
      openCalendar();
    }
  }, [open, openCalendar, closeCalendar]);

  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        closeCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [open, closeCalendar]);

  useEffect(() => {
    if (!open || !pendingFocusRef.current) return;
    pendingFocusRef.current = false;
    dayRefs.current[defaultFormatDate(focusedDate)]?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (open && !pendingFocusRef.current) {
      dayRefs.current[defaultFormatDate(focusedDate)]?.focus();
    }
  }, [focusedDate, open]);

  const moveFocus = (nextDate: Date) => {
    setFocusedDate(nextDate);
    if (nextDate.getMonth() !== viewDate.getMonth() || nextDate.getFullYear() !== viewDate.getFullYear()) {
      setViewDate(nextDate);
    }
  };

  const selectDate = (date: Date) => {
    if (isDateDisabled(date, minDate, maxDate)) return;
    if (!isControlled) setInternalValue(date);
    onValueChange?.(date);
    closeCalendar(true);
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!open) openCalendar();
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      closeCalendar(false);
    }
  };

  const handleDayKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, date: Date) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        moveFocus(addDays(date, -1));
        break;
      case 'ArrowRight':
        event.preventDefault();
        moveFocus(addDays(date, 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        moveFocus(addDays(date, -7));
        break;
      case 'ArrowDown':
        event.preventDefault();
        moveFocus(addDays(date, 7));
        break;
      case 'Home':
        event.preventDefault();
        moveFocus(addDays(date, -date.getDay()));
        break;
      case 'End':
        event.preventDefault();
        moveFocus(addDays(date, 6 - date.getDay()));
        break;
      case 'PageUp':
        event.preventDefault();
        moveFocus(addMonths(date, -1));
        break;
      case 'PageDown':
        event.preventDefault();
        moveFocus(addMonths(date, 1));
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        selectDate(date);
        break;
      case 'Escape':
        event.preventDefault();
        closeCalendar(true);
        break;
      default:
        break;
    }
  };

  const goToPreviousMonth = () => {
    const next = addMonths(viewDate, -1);
    setViewDate(next);
    moveFocus(next);
  };

  const goToNextMonth = () => {
    const next = addMonths(viewDate, 1);
    setViewDate(next);
    moveFocus(next);
  };

  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string =>
    getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.input);

  const getVariantClasses = (variant: string, hasError: boolean, disabled: boolean): string => {
    if (hasError) {
      return 'border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error';
    }
    if (disabled) {
      const variants = {
        primary: 'border-2 border-accent/20 shadow-none',
        secondary: 'border-2 border-secondary/20 shadow-none',
        danger: 'border-2 border-error/20 shadow-none',
        ghost: 'border border-border-default shadow-none',
      };
      return variants[variant as keyof typeof variants];
    }
    const variants = {
      primary:
        'border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent',
      secondary:
        'border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary',
      danger: 'border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error',
      ghost: 'border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent',
    };
    return variants[variant as keyof typeof variants];
  };

  const iconColorClass = disabled
    ? 'text-muted/50'
    : ({ primary: 'text-accent', secondary: 'text-secondary', danger: 'text-error', ghost: 'text-muted' } as const)[
        variant
      ];

  const triggerClasses = cn(
    'w-full rounded-lg bg-surface text-default placeholder-muted transition-all duration-300 focus:outline-none pl-4 pr-10',
    disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
    getSizeClasses(size),
    getVariantClasses(variant, !!error, disabled)
  );

  const weeks = chunkIntoWeeks(buildCalendarGrid(viewDate));
  const today = startOfDay(new Date());

  return (
    <div className={cn('w-full', className)} ref={wrapperRef}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-default mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          ref={triggerRef}
          type="text"
          readOnly
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={calendarId}
          aria-invalid={!!error}
          aria-describedby={describedById}
          id={inputId}
          value={selectedValue ? formatDate(selectedValue) : ''}
          placeholder={placeholder}
          disabled={disabled}
          onClick={toggleCalendar}
          onKeyDown={handleTriggerKeyDown}
          className={triggerClasses}
        />
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          disabled={disabled}
          onClick={toggleCalendar}
          className={cn(
            'absolute inset-y-0 right-0 flex items-center pr-3',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            iconColorClass
          )}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>

        {(open || isClosing) && (
          <div
            id={calendarId}
            role="dialog"
            aria-label={ariaLabel}
            aria-hidden={!open}
            className={cn(
              'absolute z-50 mt-2 w-72 rounded-lg border-2 border-border-default bg-surface p-4 shadow-secondary',
              'transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity',
              isClosing ? 'pointer-events-none scale-y-0 opacity-0' : 'pointer-events-auto scale-y-100 opacity-100'
            )}
          >
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                onClick={goToPreviousMonth}
                className="rounded p-1 text-accent hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-mono text-sm font-bold text-default" aria-live="polite">
                {MONTH_LABELS[viewDate.getMonth()]} {viewDate.getFullYear()}
              </span>
              <button
                type="button"
                aria-label="Next month"
                onClick={goToNextMonth}
                className="rounded p-1 text-accent hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div role="grid" aria-label={`${MONTH_LABELS[viewDate.getMonth()]} ${viewDate.getFullYear()}`}>
              <div role="row" className="grid grid-cols-7 mb-1">
                {WEEKDAY_LABELS.map((label) => (
                  <div key={label} role="columnheader" className="text-center text-xs font-mono text-muted">
                    {label}
                  </div>
                ))}
              </div>

              {weeks.map((week, weekIndex) => (
                <div role="row" key={weekIndex} className="grid grid-cols-7">
                  {week.map((day) => {
                    const dayDisabled = isDateDisabled(day.date, minDate, maxDate);
                    const selected = !!selectedValue && isSameDay(day.date, selectedValue);
                    const isToday = isSameDay(day.date, today);
                    const isFocusTarget = isSameDay(day.date, focusedDate);
                    const key = defaultFormatDate(day.date);

                    return (
                      <button
                        key={key}
                        ref={(el) => {
                          dayRefs.current[key] = el;
                        }}
                        type="button"
                        role="gridcell"
                        aria-selected={selected}
                        aria-disabled={dayDisabled || undefined}
                        aria-current={isToday ? 'date' : undefined}
                        tabIndex={isFocusTarget ? 0 : -1}
                        disabled={dayDisabled}
                        onClick={() => selectDate(day.date)}
                        onKeyDown={(e) => handleDayKeyDown(e, day.date)}
                        onFocus={() => setFocusedDate(day.date)}
                        className={cn(
                          'm-0.5 flex h-8 items-center justify-center rounded-md font-mono text-sm outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary/70',
                          !day.inCurrentMonth && 'text-muted/30',
                          dayDisabled
                            ? 'cursor-not-allowed text-muted/30 opacity-50'
                            : day.inCurrentMonth
                              ? 'cursor-pointer text-default hover:bg-base/70 hover:text-secondary'
                              : 'cursor-pointer',
                          selected && 'bg-accent text-base font-bold shadow-primary hover:bg-accent hover:text-base',
                          !selected && isToday && 'border border-accent text-accent shadow-primary/50'
                        )}
                      >
                        {day.date.getDate()}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {(helperText || error) && (
        <div id={error ? `${inputId}-error` : `${inputId}-help`} className={cn('mt-2 text-xs font-mono', error ? 'text-error' : 'text-muted')}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

DatePicker.displayName = 'CyberUI.DatePicker';

export default DatePicker;
