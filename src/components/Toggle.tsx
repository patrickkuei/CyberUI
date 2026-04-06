import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * Props for the Toggle component.
 */
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Optional label text to display next to the toggle */
  label?: string;
  /** Responsive size configuration */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Optional custom class name */
  className?: string;
  /** Whether the toggle is currently checked */
  checked?: boolean;
  /** Callback fired when the toggle state changes */
  onChange?: (checked: boolean) => void;
}

/**
 * A futuristic cyberpunk-themed toggle switch with neon glow and smooth transitions.
 * 
 * @example
 * <Toggle 
 *   label="Night Mode" 
 *   checked={isDark} 
 *   onChange={setIsDark} 
 * />
 */
const Toggle: React.FC<ToggleProps> = ({
  label,
  size = 'md',
  variant = 'primary',
  className = '',
  checked = false,
  onChange,
  disabled = false,
  id,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    const sizeMap = {
      sm: 'w-10 h-5 after:h-4 after:w-4',
      md: 'w-14 h-7 after:h-6 after:w-6',
      lg: 'w-16 h-8 after:h-7 after:w-7'
    };
    return getResponsiveClasses(size, sizeMap);
  };

  const getVariantClasses = (variant: string, disabled: boolean): string => {
    if (disabled) {
      return 'bg-gray-600 peer-checked:bg-gray-500 opacity-50 cursor-not-allowed';
    }

    const variants = {
      primary: 'bg-gray-600 peer-checked:bg-linear-(--gradient-accent) peer-focus:ring-primary',
      secondary: 'bg-gray-600 peer-checked:bg-secondary peer-focus:ring-secondary', 
      accent: 'bg-gray-600 peer-checked:bg-accent peer-focus:ring-accent'
    };

    return variants[variant as keyof typeof variants] || variants.primary;
  };

  const toggleClasses = cn(
    'relative inline-flex items-center',
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
  );

  const sliderClasses = cn(
    getSizeClasses(size),
    getVariantClasses(variant, disabled),
    'peer-focus:outline-none rounded-full peer',
    'peer-checked:after:translate-x-full peer-checked:after:border-white',
    'after:content-[\'\'] after:absolute after:top-[2px] after:left-[2px]',
    'after:bg-white after:rounded-full after:transition-all',
    'transition-colors duration-300'
  );

  const containerClasses = cn('flex items-center justify-between', label && 'space-x-3', className);

  return (
    <div className={containerClasses}>
      {label && (
        <label 
          htmlFor={id} 
          className={`text-default font-medium ${disabled ? 'text-muted opacity-50' : 'cursor-pointer'}`}
        >
          {label}
        </label>
      )}
      <label className={toggleClasses}>
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          id={id}
          {...props}
        />
        <div className={sliderClasses}></div>
      </label>
    </div>
  );
};

export default Toggle;