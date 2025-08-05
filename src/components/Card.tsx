import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';

export interface CardProps {
  variant?: 'default' | 'accent' | 'small';
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  title?: string;
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
