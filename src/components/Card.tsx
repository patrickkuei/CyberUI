import React from 'react';

export interface CardProps {
  variant?: 'default' | 'accent' | 'small';
  title?: string;
  titleBorder?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  titleBorder = true,
  children,
  className = '',
  ...props
}) => {
  const getVariantClasses = (variant: string): string => {
    const variants = {
      default: 'bg-base border border-border-default rounded-xl p-6 space-y-6',
      accent: 'bg-surface border-2 border-accent rounded-xl p-6 shadow-input-accent/50 hover:shadow-lg-accent transition-all duration-300 transform',
      small: 'bg-base rounded-lg p-3 border border-border-default'
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
