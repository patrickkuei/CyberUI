import React, { useId } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';

/**
 * A cyberpunk-styled text input field.
 *
 * @example
 * // Basic input with label
 * <Input label="Username" placeholder="Enter alias..." />
 *
 * @example
 * // Input with error state and icon
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Invalid credentials"
 *   leftIcon={<LockIcon />}
 * />
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Visual style of the input.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /**
   * Size of the input (height and padding).
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  ...props
}) => {
  const generatedId = useId();
  const inputId = (props as { id?: string }).id || generatedId;

  const baseClasses = [
    'w-full',
    'rounded-lg',
    'bg-surface',
    'text-default',
    'placeholder-muted',
    'transition-all',
    'duration-300',
    'focus:outline-none',
    disabled ? 'cursor-not-allowed opacity-60' : 'cursor-text'
  ].join(' ');

  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.input);
  };

  const getPaddingClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    const baseSizeClasses = getSizeClasses(size);

    if (leftIcon && rightIcon) return `pl-10 pr-10 ${baseSizeClasses}`;
    if (leftIcon) return `pl-10 pr-4 ${baseSizeClasses}`;
    if (rightIcon) return `pl-4 pr-10 ${baseSizeClasses}`;
    return `px-4 ${baseSizeClasses}`;
  };

  // Variant styles
  const getVariantClasses = (variant: string, hasError: boolean, disabled: boolean): string => {
    if (hasError) {
      return 'border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base';
    }

    if (disabled) {
      const variants = {
        primary: 'border-2 border-accent/20 shadow-none',
        secondary: 'border-2 border-secondary/20 shadow-none',
        danger: 'border-2 border-error/20 shadow-none',
        ghost: 'border border-border-default shadow-none'
      };
      return variants[variant as keyof typeof variants];
    }

    const variants = {
      primary: 'border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base',
      secondary: 'border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base',
      danger: 'border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base',
      ghost: 'border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base'
    };

    return variants[variant as keyof typeof variants];
  };

  // Icon color classes
  const getIconColorClass = (variant: string): string => {
    const colors = {
      primary: 'text-accent',
      secondary: 'text-secondary',
      danger: 'text-error',
      ghost: 'text-muted'
    };
    return colors[variant as keyof typeof colors];
  };

  // Combine all classes
  const inputClasses = [
    baseClasses,
    getPaddingClasses(size),
    getVariantClasses(variant, !!error, disabled),
    className
  ].filter(Boolean).join(' ');

  const iconColorClass = getIconColorClass(variant);

  const describedById = error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined;

  return (
    <div className="space-y-2">
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-default">
          {label}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className={`absolute inset-y-0 left-0 flex items-center pl-3 ${iconColorClass}`}>
            {leftIcon}
          </div>
        )}

        {/* Input */}
        <input
          className={inputClasses}
          disabled={disabled}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={describedById}
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div className={`absolute inset-y-0 right-0 flex items-center pr-3 ${iconColorClass}`}>
            {rightIcon}
          </div>
        )}
      </div>

      {/* Helper Text or Error */}
      {(helperText || error) && (
        <div id={error ? `${inputId}-error` : `${inputId}-help`} className={`text-xs font-mono ${error ? 'text-error' : 'text-muted'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
