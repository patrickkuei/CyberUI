import React from 'react';
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses } from "../utils/responsive";
import { cn } from '../utils/cn';

/**
 * A cyberpunk-styled checkbox with neon glow effects.
 *
 * Features a custom SVG checkbox with a cut corner design, matching the cyberpunk aesthetic.
 * Supports both controlled and uncontrolled modes.
 *
 * @example
 * // Basic checkbox
 * <Checkbox label="Accept terms" />
 *
 * @example
 * // Controlled checkbox — simple boolean API (matches Toggle)
 * <Checkbox
 *   label="Enable notifications"
 *   checked={isEnabled}
 *   onCheckedChange={setIsEnabled}
 * />
 *
 * @example
 * // With error message
 * <Checkbox
 *   label="Required field"
 *   error="This field is required"
 * />
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Label text displayed next to the checkbox.
   */
  label?: string;
  /**
   * Error message to display below the checkbox.
   */
  error?: string;
  /**
   * Size of the checkbox. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * Convenience callback that receives the boolean checked value directly.
   * Mirrors Toggle's onChange API — use this instead of onChange when you only need the value.
   */
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  size = 'md',
  className = '',
  checked: controlledChecked,
  onChange,
  onCheckedChange,
  disabled,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = React.useState(props.defaultChecked || false);
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (controlledChecked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
    onCheckedChange?.(e.target.checked);
  };

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

  const errorMarginMap = {
    sm: 'ml-6',
    md: 'ml-8',
    lg: 'ml-9',
  };

  const sizeClasses = getResponsiveClasses(size, sizeMap);
  const labelSizeClasses = getResponsiveClasses(size, labelSizeMap);
  const errorMarginClasses = getResponsiveClasses(size, errorMarginMap);

  const getBorderClasses = (isChecked: boolean): string => {
    if (disabled) return 'stroke-muted/20';
    const baseClasses = 'transition-all duration-200 group-hover:stroke-secondary group-hover:stroke-[1.5]';
    return cn(baseClasses, isChecked ? 'stroke-secondary' : 'stroke-secondary/50');
  };

  const getInnerClasses = (isChecked: boolean): string => {
    const baseClasses = 'transition-all duration-200';
    if (disabled) {
      return cn(baseClasses, isChecked ? 'fill-muted/20' : 'fill-transparent');
    }
    return cn(baseClasses, isChecked ? 'fill-secondary' : 'fill-transparent');
  };

  return (
    <div className={cn('flex flex-col gap-1', className, disabled && 'opacity-50 cursor-not-allowed')}>
      <label className={cn('flex items-center gap-3 group', disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer')}>
        <div className={cn('relative flex-shrink-0', sizeClasses)}>
          <input
            type="checkbox"
            className="absolute opacity-0 w-0 h-0"
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 1 1 L 19 1 L 19 15 L 15 19 L 1 19 Z"
              className="fill-base/50"
            />

            <path
              d="M 1 1 L 19 1 L 19 15 L 15 19 L 1 19 Z"
              className={getBorderClasses(isChecked)}
              strokeWidth="1"
              fill="none"
            />

            <path
              d="M 4 4 L 16 4 L 16 13 L 13 16 L 4 16 Z"
              className={getInnerClasses(isChecked)}
            />
          </svg>
        </div>
        {label && (
          <span className={cn('transition-colors', labelSizeClasses, disabled ? 'text-muted' : 'text-muted group-hover:text-secondary')}>
            {label}
          </span>
        )}
      </label>
      {error && !disabled && (
        <span className={cn('text-xs text-error', errorMarginClasses)}>{error}</span>
      )}
    </div>
  );
};

export default Checkbox;

