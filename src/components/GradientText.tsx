import React from 'react';

/**
 * A component for rendering text with a neon gradient effect.
 *
 * @example
 * // Default cyan-purple gradient
 * <GradientText as="h1" className="text-4xl font-bold">
 *   CyberUI 2045
 * </GradientText>
 *
 * @example
 * // Secondary pink-purple gradient
 * <GradientText variant="secondary">
 *   System Critical
 * </GradientText>
 *
 * @example
 * // Accent gradient for warnings
 * <GradientText variant="accent" as="p">
 *   Warning Level
 * </GradientText>
 */
export interface GradientTextProps {
  /**
   * The text content to render.
   */
  children: React.ReactNode;
  /**
   * Visual style of the gradient.
   * - `primary`: Cyan to pink gradient (secondary → primary).
   * - `secondary`: Pink to yellow gradient (primary → accent).
   * - `accent`: Yellow to cyan gradient (accent → secondary).
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent';
  /**
   * The HTML element to render as.
   * @default 'span'
   */
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = 'primary',
  as: Component = 'span',
  className = '',
}) => {
  const getVariantClasses = (variant: string): string => {
    const variants = {
      primary: 'bg-linear-(--gradient-primary)',
      secondary: 'bg-linear-(--gradient-secondary)',
      accent: 'bg-linear-(--gradient-accent)',
    };
    return variants[variant as keyof typeof variants];
  };

  const baseClasses = 'bg-clip-text text-transparent inline-block';

  return (
    <Component
      className={`${baseClasses} ${getVariantClasses(variant)} ${className}`}
    >
      {children}
    </Component>
  );
};

export default GradientText;
