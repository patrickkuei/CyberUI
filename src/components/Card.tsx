import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * Props for the Card component.
 */
export interface CardProps {
  /** The visual style variant of the card */
  variant?: 'default' | 'accent' | 'small';
  /** Responsive size configuration for padding and spacing */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /** Optional title for the card */
  title?: string;
  /** Whether to render a neon border under the title */
  titleBorder?: boolean;
  /** The content to be rendered inside the card */
  children: React.ReactNode;
  /** Optional custom class name */
  className?: string;
}

/**
 * A cyberpunk-themed container with glassmorphism, neon borders, and responsive spacing.
 * 
 * @example
 * <Card title="Security Log" variant="accent">
 *   <p>Unauthorized access detected.</p>
 * </Card>
 * 
 * @example
 * <Card size={{ base: 'sm', lg: 'lg' }}>
 *   Compact on mobile, spacious on desktop.
 * </Card>
 */
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
    <div className={cn(getVariantClasses(variant), className)} {...props}>
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
