import React from 'react';

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
 * // Controlled checkbox
 * <Checkbox
 *   label="Enable notifications"
 *   checked={isEnabled}
 *   onChange={(e) => setIsEnabled(e.target.checked)}
 * />
 *
 * @example
 * // With error message
 * <Checkbox
 *   label="Required field"
 *   error="This field is required"
 * />
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text displayed next to the checkbox.
   */
  label?: string;
  /**
   * Error message to display below the checkbox.
   */
  error?: string;
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className = '',
  checked: controlledChecked,
  onChange,
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
  };

  const getBorderClasses = (isChecked: boolean): string => {
    if (disabled) return 'stroke-muted/20';
    const baseClasses = 'transition-all duration-200 group-hover:stroke-secondary group-hover:stroke-[1.5]';
    return isChecked
      ? `${baseClasses} stroke-secondary`
      : `${baseClasses} stroke-secondary/50`;
  };

  const getInnerClasses = (isChecked: boolean): string => {
    const baseClasses = 'transition-all duration-200';
    if (disabled) {
      return isChecked ? `${baseClasses} fill-muted/20` : `${baseClasses} fill-transparent`;
    }
    return isChecked
      ? `${baseClasses} fill-secondary`
      : `${baseClasses} fill-transparent`;
  };

  return (
    <div className={`flex flex-col gap-1 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <label className={`flex items-center gap-3 group ${disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}>
        <div className="relative w-5 h-5">
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
          <span className={`text-sm transition-colors ${disabled ? 'text-muted' : 'text-muted group-hover:text-secondary'}`}>
            {label}
          </span>
        )}
      </label>
      {error && !disabled && (
        <span className="text-xs text-error ml-8">{error}</span>
      )}
    </div>
  );
};

export default Checkbox;
