import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  children,
  ...props
}) => {
  // Base classes that apply to all buttons
  const baseClasses = [
    'group',
    'relative',
    'overflow-hidden',
    'rounded-lg',
    'font-bold',
    'uppercase',
    'tracking-wider',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'transform',
    'focus:outline-none',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer'
  ].join(' ');

  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.button);
  };

  const getVariantClasses = (variant: string, disabled: boolean): string => {
    const variants = {
      primary: {
        enabled: 'bg-linear-(--gradient-accent) text-base shadow-primary border-none hover:shadow-lg-accent hover:scale-105 focus:ring-4 focus:ring-accent active:scale-95',
        disabled: 'bg-base border-2 border-accent/20 text-accent/40 shadow-none opacity-50 hover:scale-100'
      },
      secondary: {
        enabled: 'bg-surface border-2 border-secondary text-secondary shadow-secondary/30 hover:bg-secondary hover:text-base hover:shadow-secondary hover:scale-105 focus:ring-4 focus:ring-secondary active:scale-95',
        disabled: 'bg-base border-2 border-secondary/20 text-secondary/40 shadow-none opacity-50 hover:bg-base hover:text-secondary/40 hover:scale-100'
      },
      danger: {
        enabled: 'bg-surface border-2 border-error text-error shadow-error/30 hover:bg-error hover:text-base hover:shadow-error hover:scale-105 focus:ring-4 focus:ring-error active:scale-95',
        disabled: 'bg-base border-2 border-error/20 text-error/40 shadow-none opacity-50 hover:bg-base hover:text-error/40 hover:scale-100'
      },
      ghost: {
        enabled: 'bg-surface border-2 border-accent text-accent shadow-secondary hover:bg-accent hover:text-base hover:shadow-lg-accent hover:scale-105 focus:ring-4 focus:ring-accent active:scale-95',
        disabled: 'bg-base border-2 border-accent/10 text-muted/60 shadow-none opacity-40 hover:bg-base hover:text-muted/60 hover:scale-100'
      }
    };

    return variants[variant as keyof typeof variants][disabled ? 'disabled' : 'enabled'];
  };

  // Combine all classes
  const buttonClasses = [
    baseClasses,
    getSizeClasses(size),
    getVariantClasses(variant, disabled),
    className
  ].filter(Boolean).join(' ');

  // Show gradient animation only for primary variant when enabled
  const showGradientAnimation = variant === 'primary' && !disabled;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {showGradientAnimation && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      {disabled && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-base/10 to-transparent pointer-events-none" />
      )}
    </button>
  );
};

export default Button;
