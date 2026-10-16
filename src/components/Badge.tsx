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
   * - `primary` / `secondary` / `accent` / `success` / `error` / `warning`:
   *   solid color fill with dark (`text-inverse`) text.
   * - `neutral`: no fill — a transparent badge with a `border-default`
   *   outline and `default` text, for quiet labels that carry no status.
   *   The outline is an inset ring rather than a CSS border, so a neutral
   *   badge is exactly the same size as a filled one of the same `size`.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'neutral';
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
  /**
   * Whether the badge carries its resting drop shadow (`shadow-lg`).
   * Set `false` for a flat badge in dense layouts. Only the resting shadow
   * is affected: a clickable badge keeps its hover effect.
   * @default true
   */
  shadow?: boolean;
  /**
   * Corner shape of the badge.
   * - `pill`: fully rounded ends (`rounded-full`).
   * - `rounded`: slightly rounded corners (`rounded-md`).
   * - `square`: sharp corners (`rounded-none`).
   * @default 'pill'
   */
  shape?: 'pill' | 'rounded' | 'square';
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
  shadow = true,
  shape = 'pill',
  ...props
}) => {
  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.badge);
  };

  const getVariantClasses = (variant: string): string => {
    // `text-inverse`, not `text-default` — every filled variant is a solid
    // color fill, so the label needs the dedicated "readable on a bright
    // background" token rather than the page's default text color.
    // `neutral` has no fill, so it uses `text-default`, which stays well
    // above 4.5:1 contrast on both `base` and `surface` (e.g. inside a Card)
    // and reads as a label rather than secondary text.
    // Its outline is `ring-inset` (a box-shadow), not `border`, so it adds no
    // width/height and lines up with filled badges in the same row.
    const variants = {
      primary: 'bg-primary text-inverse',
      secondary: 'bg-secondary text-inverse',
      accent: 'bg-accent text-inverse',
      success: 'bg-success text-inverse',
      error: 'bg-error text-inverse',
      warning: 'bg-warning text-inverse',
      neutral: 'bg-transparent text-default ring-1 ring-inset ring-border-default'
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
      warning: 'hover:shadow-warning transition-shadow cursor-pointer',
      neutral: 'hover:ring-secondary hover:text-secondary transition-[color,box-shadow] cursor-pointer'
    };
    return hoverVariants[variant as keyof typeof hoverVariants];
  };

  const shapeClasses = {
    pill: 'rounded-full',
    rounded: 'rounded-md',
    square: 'rounded-none'
  };

  // Class order is kept identical to pre-2.8 output for the defaults
  // (pill + shadow); Badge.test.tsx pins the exact default class string.
  return (
    <span
      className={cn('inline-flex items-center', shapeClasses[shape], 'font-semibold', getSizeClasses(size), getVariantClasses(variant), shadow && 'shadow-lg', getHoverClasses(variant, clickable || !!onClick), className)}
      onClick={onClick}
      {...props}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </span>
  );
};

Badge.displayName = "CyberUI.Badge";

export default Badge;
