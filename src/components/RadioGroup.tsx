import React, { useCallback, useId, useRef, useState } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, useResponsiveValue } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * A single selectable choice within a RadioGroup.
 */
export interface RadioOption {
  /** Value passed to `onValueChange` when this option is selected. */
  value: string;
  /** Human-readable label rendered next to the radio dot. */
  label: string;
  /**
   * Disables just this option. It renders dimmed and is skipped by both
   * click and arrow-key navigation (same as a disabled `<input>`).
   * @default false
   */
  disabled?: boolean;
}

/**
 * Props for the RadioGroup component.
 */
export interface RadioGroupProps {
  /** Options to render, in order. */
  options: RadioOption[];
  /**
   * Controlled selected value. When set, RadioGroup stops managing its own
   * selection state and `onValueChange` becomes the only way to react to
   * option changes.
   */
  value?: string;
  /**
   * Initial selected value for uncontrolled usage. Ignored when `value` is
   * provided.
   */
  defaultValue?: string;
  /** Fired with the newly selected option's value whenever selection changes. */
  onValueChange?: (value: string) => void;
  /**
   * Name for the underlying native `<input type="radio">` group. Auto-generated
   * when omitted — pass an explicit name if this RadioGroup is submitted
   * inside a native `<form>` and the field name matters server-side.
   */
  name?: string;
  /** Group label, rendered as a `<legend>` above the options. */
  label?: string;
  /** Error message to display below the options. */
  error?: string;
  /**
   * Size of each radio dot and its label. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Layout direction of the options. Supports responsive values.
   * @default 'vertical'
   */
  orientation?: ResponsiveValue<'horizontal' | 'vertical'>;
  /** Disables every option in the group. */
  disabled?: boolean;
  /** Additional CSS classes for the outer `<fieldset>`. */
  className?: string;
  /** Optional id override for the group's `<fieldset>` element. */
  id?: string;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const labelSizeMap = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const legendSizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const orientationMap = {
  horizontal: 'flex-row flex-wrap gap-x-6 gap-y-3',
  vertical: 'flex-col gap-3',
};

/**
 * A cyberpunk-styled radio group for mutually-exclusive single-choice
 * selection, matching Checkbox's neon SVG icon treatment. Supports both
 * controlled and uncontrolled modes, and arrow-key navigation between
 * options via a roving tabindex.
 *
 * @example
 * // Basic radio group (uncontrolled)
 * <RadioGroup
 *   label="Access Tier"
 *   options={[
 *     { value: 'street', label: 'Street' },
 *     { value: 'corp', label: 'Corporate' },
 *     { value: 'net', label: 'Netrunner' },
 *   ]}
 * />
 *
 * @example
 * // Controlled, horizontal layout
 * <RadioGroup
 *   label="Difficulty"
 *   orientation="horizontal"
 *   value={difficulty}
 *   onValueChange={setDifficulty}
 *   options={difficultyOptions}
 * />
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value: controlledValue,
  defaultValue,
  onValueChange,
  name,
  label,
  error,
  size = 'md',
  orientation = 'vertical',
  disabled = false,
  className = '',
  id,
}) => {
  const generatedId = useId();
  const groupId = id || generatedId;
  const groupName = name || groupId;

  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const selectedValue = isControlled ? controlledValue : internalValue;

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const currentOrientation = useResponsiveValue(orientation, 'vertical');

  const selectOption = useCallback(
    (optionValue: string) => {
      if (!isControlled) setInternalValue(optionValue);
      onValueChange?.(optionValue);
    },
    [isControlled, onValueChange]
  );

  const handleChange = (optionValue: string, optionDisabled?: boolean) => {
    if (disabled || optionDisabled) return;
    selectOption(optionValue);
  };

  const focusOptionAt = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (disabled) return;
    const enabledIndices = options
      .map((option, i) => (option.disabled ? -1 : i))
      .filter((i) => i !== -1);
    if (enabledIndices.length === 0) return;
    const currentPos = enabledIndices.indexOf(index);

    const moveTo = (nextIndex: number) => {
      focusOptionAt(nextIndex);
      selectOption(options[nextIndex].value);
    };

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        event.preventDefault();
        const nextPos = (currentPos + 1) % enabledIndices.length;
        moveTo(enabledIndices[nextPos]);
        break;
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        event.preventDefault();
        const prevPos = (currentPos - 1 + enabledIndices.length) % enabledIndices.length;
        moveTo(enabledIndices[prevPos]);
        break;
      }
      default:
        break;
    }
  };

  const dotSizeClasses = getResponsiveClasses(size, sizeMap);
  const labelSizeClasses = getResponsiveClasses(size, labelSizeMap);
  const legendSizeClasses = getResponsiveClasses(size, legendSizeMap);
  const orientationClasses = getResponsiveClasses(orientation, orientationMap);

  const firstEnabledIndex = options.findIndex((option) => !option.disabled);

  return (
    <fieldset
      id={groupId}
      className={cn('flex flex-col gap-2 border-0 m-0 p-0', className, disabled && 'opacity-50 cursor-not-allowed')}
      disabled={disabled}
      aria-label={!label && name ? name : undefined}
      aria-describedby={error && !disabled ? `${groupId}-error` : undefined}
    >
      {label && (
        <legend className={cn('p-0 mb-2 font-medium', legendSizeClasses, error ? 'text-error' : 'text-default')}>
          {label}
        </legend>
      )}

      <div className={cn('flex', orientationClasses)} data-orientation={currentOrientation}>
        {options.map((option, index) => {
          const isSelected = selectedValue === option.value;
          const isOptionDisabled = disabled || !!option.disabled;
          // Roving tabindex: the selected option is tabbable; if nothing is
          // selected yet, the first enabled option is, so Tab always lands
          // somewhere usable in one stop.
          const isTabbable = selectedValue !== undefined ? isSelected : index === firstEnabledIndex;

          return (
            <label
              key={option.value}
              className={cn(
                'flex items-center gap-3 group',
                isOptionDisabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'
              )}
            >
              <div className={cn('relative flex-shrink-0', dotSizeClasses)}>
                <input
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="radio"
                  name={groupName}
                  value={option.value}
                  checked={isSelected}
                  disabled={isOptionDisabled}
                  tabIndex={isTabbable ? 0 : -1}
                  onChange={() => handleChange(option.value, option.disabled)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="peer absolute opacity-0 w-0 h-0"
                />

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-secondary"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9" className="fill-base/50" />
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    strokeWidth="1"
                    fill="none"
                    className={cn(
                      'transition-all duration-200 group-hover:stroke-secondary group-hover:stroke-[1.5]',
                      isOptionDisabled ? 'stroke-muted/20' : isSelected ? 'stroke-secondary' : 'stroke-secondary/50'
                    )}
                  />
                  <circle
                    cx="10"
                    cy="10"
                    r="4.5"
                    className={cn(
                      'transition-all duration-200',
                      isOptionDisabled
                        ? isSelected
                          ? 'fill-muted/20'
                          : 'fill-transparent'
                        : isSelected
                          ? 'fill-secondary'
                          : 'fill-transparent'
                    )}
                  />
                </svg>
              </div>
              <span
                className={cn(
                  'transition-colors',
                  labelSizeClasses,
                  isOptionDisabled ? 'text-muted' : 'text-muted group-hover:text-secondary'
                )}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {error && !disabled && (
        <span id={`${groupId}-error`} className="text-xs text-error">
          {error}
        </span>
      )}
    </fieldset>
  );
};

RadioGroup.displayName = 'CyberUI.RadioGroup';

export default RadioGroup;
