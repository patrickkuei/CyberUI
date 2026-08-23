import React, { useCallback, useEffect, useMemo, useRef, useState, useId } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * Represents a single choice in the Combobox's option list.
 */
export interface ComboboxOption {
  /** Internal value of the option. */
  value: string;
  /** Human-readable label displayed in the input and dropdown. */
  label: string;
  /** Whether this specific option is disabled and unselectable. @default false */
  disabled?: boolean;
}

/**
 * Props for the Combobox component.
 */
export interface ComboboxProps {
  /** Label rendered above the input. */
  label?: string;
  /** Full list of options to filter and choose from. */
  options: ComboboxOption[];
  /**
   * Controlled selected value. Pass alongside `onValueChange` to fully
   * control selection — the displayed text always reflects this value's
   * matching option label (or the raw string itself when `allowCustomValue`
   * is set and no option matches it).
   */
  value?: string;
  /** Initial value for uncontrolled usage. @default '' */
  defaultValue?: string;
  /**
   * Fired when the value is committed: on option selection (click or Enter),
   * and on blur/Enter with unmatched text when `allowCustomValue` is set.
   */
  onValueChange?: (value: string) => void;
  /** Placeholder text shown when the input is empty. */
  placeholder?: string;
  /**
   * Visual style variant, matching Input/Select's palette vocabulary.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /**
   * Size of the input and dropdown option text. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /** Disables the input and prevents opening the dropdown. @default false */
  disabled?: boolean;
  /** Optional helper text shown below the input. */
  helperText?: string;
  /** Error message that overrides helper text and highlights the input. */
  error?: string;
  /**
   * Allows committing free text that doesn't match any option, instead of
   * requiring a selection from the list. A typed value is committed as-is
   * on Enter (when no option is highlighted) or on blur; text that exactly
   * matches an option's label (case-insensitive) selects that option
   * instead. When `false` (the default), unmatched text reverts to the
   * last committed value's label on blur or Escape.
   * @default false
   */
  allowCustomValue?: boolean;
  /**
   * Message shown in the dropdown when no options match the current query.
   * @default 'No matches found'
   */
  noOptionsText?: string;
  /** Accessible label for the input and listbox, used when `label` isn't descriptive enough on its own. */
  ariaLabel?: string;
  /** Additional CSS classes for the outer wrapper. */
  className?: string;
  /** Element id for the input. Auto-generated via `useId` when omitted. */
  id?: string;
  /** Name attribute for the underlying input. */
  name?: string;
}

/**
 * A cyberpunk-styled searchable dropdown — a text input that filters a list
 * of options as the user types, extending Select's controlled-value pattern
 * with Input's focus-glow styling. Follows the WAI-ARIA combobox pattern
 * (role="combobox" + a listbox popup with `aria-activedescendant`) so arrow
 * keys move a highlight without moving DOM focus off the input.
 *
 * @example
 * // Basic searchable select
 * <Combobox
 *   label="Target Sector"
 *   options={[
 *     { value: 'sector-7', label: 'Sector 7 — Corporate Plaza' },
 *     { value: 'sector-9', label: 'Sector 9 — The Sprawl' },
 *   ]}
 *   onValueChange={setSector}
 * />
 *
 * @example
 * // Free-text tag entry
 * <Combobox
 *   label="Tag Search"
 *   options={knownTags}
 *   allowCustomValue
 *   value={tag}
 *   onValueChange={setTag}
 * />
 */
const Combobox: React.FC<ComboboxProps> = ({
  label,
  options,
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  placeholder,
  variant = 'primary',
  size = 'md',
  disabled = false,
  helperText,
  error,
  allowCustomValue = false,
  noOptionsText = 'No matches found',
  ariaLabel,
  className = '',
  id,
  name,
}) => {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const committedValue = isControlled ? controlledValue : internalValue;

  const labelForValue = useCallback(
    (val: string): string => {
      const match = options.find((option) => option.value === val);
      if (match) return match.label;
      return allowCustomValue ? val : '';
    },
    [options, allowCustomValue]
  );

  const [query, setQuery] = useState(() => labelForValue(committedValue));
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setQuery(labelForValue(committedValue));
  }, [committedValue, labelForValue]);

  const generatedId = useId();
  const inputId = id || generatedId;
  const listboxId = `${inputId}-listbox`;
  const inputName = name || inputId;

  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  // Tracks whether the query text reflects the user actively typing (vs. just
  // showing the currently-selected label after focus) — the full option list
  // stays visible on focus/open until a keystroke narrows it.
  const [isFiltering, setIsFiltering] = useState(false);

  const filteredOptions = useMemo(() => {
    if (!isFiltering) return options;
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((option) => option.label.toLowerCase().includes(q));
  }, [options, query, isFiltering]);

  const enabledFilteredIndices = useMemo(
    () => filteredOptions.map((option, i) => (option.disabled ? -1 : i)).filter((i) => i !== -1),
    [filteredOptions]
  );

  useEffect(() => {
    // jsdom (unit tests) doesn't implement scrollIntoView — guard for that environment.
    if (open && activeIndex >= 0) {
      optionRefs.current[activeIndex]?.scrollIntoView?.({ block: 'nearest' });
    }
  }, [activeIndex, open]);

  const commit = useCallback(
    (val: string) => {
      if (!isControlled) setInternalValue(val);
      onValueChange?.(val);
    },
    [isControlled, onValueChange]
  );

  const selectOption = useCallback(
    (option: ComboboxOption) => {
      if (option.disabled) return;
      commit(option.value);
      if (!isControlled) setQuery(option.label);
      setOpen(false);
      setActiveIndex(-1);
      setIsFiltering(false);
    },
    [commit, isControlled]
  );

  const commitCustomOrRevert = useCallback(() => {
    const trimmed = query.trim();
    if (allowCustomValue && trimmed && trimmed !== labelForValue(committedValue)) {
      const exactMatch = options.find(
        (option) => !option.disabled && option.label.toLowerCase() === trimmed.toLowerCase()
      );
      if (exactMatch) {
        selectOption(exactMatch);
        return;
      }
      commit(trimmed);
    } else {
      setQuery(labelForValue(committedValue));
    }
    setOpen(false);
    setActiveIndex(-1);
    setIsFiltering(false);
  }, [query, allowCustomValue, labelForValue, committedValue, options, selectOption, commit]);

  const handleEscape = () => {
    setQuery(labelForValue(committedValue));
    setOpen(false);
    setActiveIndex(-1);
    setIsFiltering(false);
  };

  const moveActive = (direction: 1 | -1) => {
    if (enabledFilteredIndices.length === 0) return;
    const currentPos = enabledFilteredIndices.indexOf(activeIndex);
    let nextPos: number;
    if (currentPos === -1) {
      nextPos = direction === 1 ? 0 : enabledFilteredIndices.length - 1;
    } else {
      nextPos = (currentPos + direction + enabledFilteredIndices.length) % enabledFilteredIndices.length;
    }
    setActiveIndex(enabledFilteredIndices[nextPos]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setOpen(true);
    setActiveIndex(-1);
    setIsFiltering(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) setOpen(true);
        moveActive(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) setOpen(true);
        moveActive(-1);
        break;
      case 'Home':
        if (open) {
          e.preventDefault();
          setActiveIndex(enabledFilteredIndices[0] ?? -1);
        }
        break;
      case 'End':
        if (open) {
          e.preventDefault();
          setActiveIndex(enabledFilteredIndices[enabledFilteredIndices.length - 1] ?? -1);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (open && activeIndex >= 0 && filteredOptions[activeIndex]) {
          selectOption(filteredOptions[activeIndex]);
        } else {
          commitCustomOrRevert();
        }
        break;
      case 'Escape':
        e.preventDefault();
        handleEscape();
        break;
      default:
        break;
    }
  };

  const getSizeClasses = (sizeValue: ResponsiveValue<'sm' | 'md' | 'lg'>): string =>
    getResponsiveClasses(sizeValue, RESPONSIVE_SIZE_MAPS.input);

  const getVariantClasses = (variantValue: string, hasError: boolean, isDisabled: boolean): string => {
    if (hasError) {
      return 'border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error';
    }

    if (isDisabled) {
      const variants = {
        primary: 'border-2 border-accent/20 shadow-none',
        secondary: 'border-2 border-secondary/20 shadow-none',
        danger: 'border-2 border-error/20 shadow-none',
        ghost: 'border border-border-default shadow-none',
      };
      return variants[variantValue as keyof typeof variants];
    }

    const variants = {
      primary:
        'border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent',
      secondary:
        'border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary',
      danger: 'border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error',
      ghost: 'border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent',
    };
    return variants[variantValue as keyof typeof variants];
  };

  const iconColorClass = (): string => {
    if (error) return 'text-error';
    if (disabled) return 'text-muted/50';
    const colors = {
      primary: 'text-accent',
      secondary: 'text-secondary',
      danger: 'text-error',
      ghost: 'text-muted',
    };
    return colors[variant];
  };

  const inputClasses = cn(
    'w-full rounded-lg bg-surface text-default placeholder-muted transition-all duration-300 focus:outline-none px-4 pr-10',
    disabled ? 'cursor-not-allowed opacity-60' : 'cursor-text',
    getSizeClasses(size),
    getVariantClasses(variant, !!error, disabled),
    className
  );

  const labelClasses = cn(
    'block text-sm font-medium mb-2 transition-colors duration-200',
    disabled ? 'text-muted opacity-50' : error ? 'text-error' : 'text-default'
  );

  const helperTextClasses = cn('mt-2 text-xs font-mono transition-colors duration-200', error ? 'text-error' : 'text-muted');

  const optionSizeClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.dropdownMenu);

  const describedById = error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          id={inputId}
          name={inputName}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
          aria-label={ariaLabel}
          aria-invalid={!!error}
          aria-describedby={describedById}
          aria-disabled={disabled || undefined}
          autoComplete="off"
          disabled={disabled}
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          onFocus={() => !disabled && setOpen(true)}
          onKeyDown={handleKeyDown}
          onBlur={commitCustomOrRevert}
          className={inputClasses}
        />

        <div className={cn('pointer-events-none absolute inset-y-0 right-0 flex items-center px-3', iconColorClass())}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </div>

        {open && (
          <ul
            id={listboxId}
            role="listbox"
            aria-label={ariaLabel || label || 'Options'}
            className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto overflow-x-hidden rounded-lg border-2 border-border-default bg-surface shadow-secondary py-1"
          >
            {filteredOptions.length === 0 ? (
              <li className="px-4 py-2 text-sm text-muted font-mono" role="presentation">
                {noOptionsText}
              </li>
            ) : (
              filteredOptions.map((option, index) => {
                const isActive = index === activeIndex;
                const isSelected = option.value === committedValue;
                return (
                  <li
                    key={option.value}
                    id={`${listboxId}-option-${index}`}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled || undefined}
                    ref={(el) => {
                      optionRefs.current[index] = el;
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectOption(option)}
                    onMouseEnter={() => !option.disabled && setActiveIndex(index)}
                    className={cn(
                      'flex items-center justify-between gap-2 font-mono transition-colors duration-150',
                      optionSizeClasses,
                      option.disabled
                        ? 'cursor-not-allowed text-muted/40'
                        : cn(
                            'cursor-pointer',
                            isActive ? 'bg-base/70 text-secondary' : isSelected ? 'text-accent' : 'text-default'
                          )
                    )}
                  >
                    <span>{option.label}</span>
                    {isSelected && (
                      <svg className="w-4 h-4 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        )}
      </div>

      {(helperText || error) && (
        <div id={error ? `${inputId}-error` : `${inputId}-help`} className={helperTextClasses}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

Combobox.displayName = 'CyberUI.Combobox';

export default Combobox;
