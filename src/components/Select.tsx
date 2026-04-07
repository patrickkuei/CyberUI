import React, { useId } from "react";
import type { ResponsiveValue } from "../utils/responsive";
import {
  getResponsiveClasses,
  RESPONSIVE_SIZE_MAPS,
} from "../utils/responsive";
import { cn } from "../utils/cn";

/**
 * Represents a single choice in the Select component.
 */
export interface SelectOption {
  /** Internal value of the option */
  value: string;
  /** Human-readable label displayed in the dropdown */
  label: string;
  /** Whether this specific option is disabled */
  disabled?: boolean;
}

/**
 * A styled dropdown selection component.
 *
 * @example
 * // Basic select
 * <Select
 *   label="Choose Sector"
 *   options={[
 *     { value: 'sector-7', label: 'Sector 7' },
 *     { value: 'sector-9', label: 'Sector 9' }
 *   ]}
 * />
 *
 * @example
 * // Select with error
 * <Select
 *   label="Clearance Level"
 *   error="Insufficient permissions"
 *   options={levels}
 * />
 */
export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /** Label for the select field */
  label?: string;
  /**
   * Size of the select input.
   * @default 'md'
   */
  size?: ResponsiveValue<"sm" | "md" | "lg">;
  /**
   * Visual style variant.
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "danger" | "ghost";
  /** List of options to choose from */
  options: SelectOption[];
  /** Placeholder text shown when no option is selected */
  placeholder?: string;
  /** Optional helper text shown below the select */
  helperText?: string;
  /** Error message that highlights the select and overrides helper text */
  error?: string;
  /** Optional custom class name */
  className?: string;
  /**
   * Convenience callback that receives the selected string value directly.
   * Use instead of onChange when you only need the value (not the raw event).
   */
  onValueChange?: (value: string) => void;
}

/**
 * A futuristic Cyberpunk-themed dropdown select component with support for labels and error states.
 * 
 * @example
 * <Select 
 *   label="Neural Port" 
 *   options={[{ value: 'com1', label: 'COM 1' }, { value: 'com2', label: 'COM 2' }]} 
 *   variant="primary" 
 * />
 */
const Select: React.FC<SelectProps> = ({
  label,
  size = "md",
  variant = "primary",
  options,
  placeholder,
  helperText,
  error,
  className = "",
  disabled = false,
  id,
  name,
  onValueChange,
  onChange,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
    onValueChange?.(e.target.value);
  };
  const generatedId = useId();
  const selectId = id || generatedId;
  const selectName = name || selectId;
  const getSizeClasses = (
    size: ResponsiveValue<"sm" | "md" | "lg">
  ): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.input);
  };

  const getVariantClasses = (
    variant: string,
    disabled: boolean,
    hasError: boolean
  ): string => {
    if (disabled) {
      return "bg-base border-2 border-border-default/30 text-muted/50 cursor-not-allowed opacity-50";
    }

    if (hasError) {
      return "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error";
    }

    const variants = {
      primary:
        "bg-surface border-2 border-border-default text-default focus:ring-2 focus:ring-primary focus:border-primary shadow-primary",
      secondary:
        "bg-surface border-2 border-secondary text-default focus:ring-2 focus:ring-secondary focus:border-secondary shadow-secondary/30",
      danger:
        "bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error/30",
      ghost:
        "bg-base border-2 border-accent/20 text-default focus:ring-2 focus:ring-accent focus:border-accent shadow-secondary",
    };

    return variants[variant as keyof typeof variants] || variants.primary;
  };

  const selectClasses = cn(
    "appearance-none w-full rounded-lg font-mono transition-all duration-300 focus:outline-none px-4 pr-10",
    getSizeClasses(size),
    getVariantClasses(variant, disabled, !!error),
    className
  );

  const containerClasses = "relative w-full";

  const labelClasses = cn(
    "block text-sm font-medium mb-2 transition-colors duration-200",
    disabled ? "text-muted opacity-50" : error ? "text-error" : "text-default"
  );

  const helperTextClasses = cn("mt-2 text-xs transition-colors duration-200", error ? "text-error" : "text-muted");

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className={labelClasses}>
          {label}
        </label>
      )}

      <div className={containerClasses}>
        <select
          className={selectClasses}
          disabled={disabled}
          id={selectId}
          name={selectName}
          onChange={handleChange}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="bg-surface text-default"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown arrow icon */}
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ${
            disabled ? "text-muted/50" : error ? "text-error" : "text-accent"
          }`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {(helperText || error) && (
        <div className={helperTextClasses}>{error || helperText}</div>
      )}
    </div>
  );
};

export default Select;
