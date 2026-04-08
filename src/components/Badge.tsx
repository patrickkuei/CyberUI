import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * A status indicator badge with various semantic variants.
 *
 * @example
 * // Success badge
 * <Badge variant="success">ONLINE</Badge>
 *
 * @example
 * // Clickable badge with icon
 * <Badge
 *   variant="primary"
 *   clickable
 *   onClick={handleClick}
 *   leftIcon={<Icon name="user" />}
 * >
 *   Profile
 * </Badge>
 */
export interface BadgeProps {
  /**
   * Semantic style of the badge.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning';
  /**
   * Size of the badge.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /** The label or content of the badge */
  children: React.ReactNode;
  /** Optional custom class name */
  className?: string;
  /** Icon to render on the left side of the label */
  leftIcon?: React.ReactNode;
  /** Icon to render on the right side of the label */
  rightIcon?: React.ReactNode;
  /** Whether the badge should show hover effects and a pointer cursor */
  clickable?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * A compact Cyberpunk-style tag or indicator used for status, categories, or metrics.
 * 
 * @example
 * <Badge variant="success">Online</Badge>
 * 
 * @example
 * <Badge variant="accent" size="sm" leftIcon={<ShieldIcon />}>
 *   Protected
 * </Badge>
 */
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
  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.badge);
  };

  const getVariantClasses = (variant: string): string => {
    const variants = {
      primary: 'bg-primary shadow-lg',
      secondary: 'bg-secondary shadow-lg',
      accent: 'bg-accent shadow-lg',
      success: 'bg-success shadow-lg',
      error: 'bg-error shadow-lg',
      warning: 'bg-warning shadow-lg'
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
      className={cn('inline-flex items-center rounded-full font-semibold', getSizeClasses(size), getVariantClasses(variant), getHoverClasses(variant, clickable || !!onClick), className)}
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
