import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  leftIcon,
  rightIcon,
  clickable = false,
  onClick,
  ...props
}) => {
  const getSizeClasses = (size: string): string => {
    const sizes = {
      sm: 'px-2 py-1 text-xs gap-1',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-3'
    };
    return sizes[size as keyof typeof sizes];
  };

  const getVariantClasses = (variant: string): string => {
    const variants = {
      primary: 'text-base bg-primary shadow-lg',
      secondary: 'text-base bg-secondary shadow-lg',
      accent: 'text-base bg-accent shadow-lg',
      success: 'text-base bg-success shadow-lg',
      error: 'text-base bg-error shadow-lg',
      warning: 'text-base bg-warning shadow-lg'
    };
    return variants[variant as keyof typeof variants];
  };

  const getHoverClasses = (variant: string, clickable: boolean): string => {
    if (!clickable && !onClick) {
      return 'transition-shadow';
    }

    const hoverVariants = {
      primary: 'hover:shadow-primary transition-shadow cursor-pointer',
      secondary: 'hover:shadow-secondary transition-shadow cursor-pointer',
      accent: 'hover:shadow-lg-accent transition-shadow cursor-pointer',
      success: 'hover:shadow-success transition-shadow cursor-pointer',
      error: 'hover:shadow-error transition-shadow cursor-pointer',
      warning: 'hover:shadow-warning transition-shadow cursor-pointer'
    };
    return hoverVariants[variant as keyof typeof hoverVariants];
  };

  return (
    <span
      className={`inline-flex items-center ${getSizeClasses(size)} rounded-full font-semibold ${getVariantClasses(variant)} ${getHoverClasses(variant, clickable || !!onClick)} ${className}`}
      onClick={onClick}
      {...props}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </span>
  );
};

export default Badge;
