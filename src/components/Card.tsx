import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';

/**
 * A glassmorphism container for grouping content.
 *
 * @example
 * // Basic card with title
 * <Card title="System Status">
 *   <p>All systems operational.</p>
 * </Card>
 *
 * @example
 * // Accent variant with hover effect
 * <Card variant="accent" title="High Priority">
 *   <Button>Action Required</Button>
 * </Card>
 */
export interface CardProps {
  /**
   * Visual style of the card.
   * - `default`: Standard glassmorphism.
   * - `accent`: Glowing border and hover effects.
   * - `small`: Compact padding for tight spaces.
   * @default 'default'
   */
  variant?: 'default' | 'accent' | 'small';
  /**
   * Padding size of the card content.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  title?: string;
  /**
   * Whether to show a border under the title.
   * @default true
   */
  titleBorder?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  size = 'md',
  title,
  titleBorder = true,
  children,
  className = '',
  ...props
}) => {
  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.card);
  };

  const getVariantClasses = (variant: string): string => {
    const baseSize = getSizeClasses(size);
    const variants = {
      default: `bg-base border border-border-default rounded-xl ${baseSize}`,
      accent: `bg-surface border-2 border-accent rounded-xl shadow-input-accent/50 hover:shadow-lg-accent transition-all duration-300 transform ${baseSize}`,
      small: `bg-base rounded-lg border border-border-default ${baseSize}`
    };
    return variants[variant as keyof typeof variants];
  };

  const getTitleClasses = (titleBorder: boolean): string => {
    return titleBorder
      ? 'text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2'
      : 'text-xl font-semibold text-secondary mb-4';
  };

  return (
    <div className={`${getVariantClasses(variant)} ${className}`} {...props}>
      {title && (
        <h3 className={getTitleClasses(titleBorder)}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;
