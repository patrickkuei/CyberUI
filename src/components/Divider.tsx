import React from 'react';

/**
 * A decorative divider with cyberpunk styling.
 *
 * Supports multiple visual variants and both horizontal and vertical orientations.
 *
 * @example
 * // Gradient divider (default)
 * <Divider />
 *
 * @example
 * // Solid divider
 * <Divider variant="solid" />
 *
 * @example
 * // Dashed divider
 * <Divider variant="dashed" />
 *
 * @example
 * // Vertical divider
 * <Divider orientation="vertical" className="h-8" />
 */
export interface DividerProps {
  /**
   * Visual style of the divider.
   * - `gradient`: Gradient fade from center (default).
   * - `solid`: Solid semi-transparent line.
   * - `dashed`: Dashed border style.
   * @default 'gradient'
   */
  variant?: 'gradient' | 'solid' | 'dashed';
  /**
   * Orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  variant = 'gradient',
  orientation = 'horizontal',
  className = '',
}) => {
  const getBaseClasses = (orientation: string): string => {
    return orientation === 'horizontal' ? 'w-full h-[1px]' : 'w-[1px] h-full';
  };

  const getVariantClasses = (variant: string, orientation: string): string => {
    const variants = {
      gradient: orientation === 'horizontal'
        ? 'bg-gradient-to-r from-transparent via-secondary/50 to-transparent'
        : 'bg-gradient-to-b from-transparent via-secondary/50 to-transparent',
      solid: 'bg-secondary/30',
      dashed: `border-dashed border-secondary/50 ${orientation === 'horizontal' ? 'border-t' : 'border-l'}`,
    };
    return variants[variant as keyof typeof variants];
  };

  const dividerClasses = [
    getBaseClasses(orientation),
    getVariantClasses(variant, orientation),
    className,
  ].filter(Boolean).join(' ');

  return <div className={dividerClasses} />;
};

export default Divider;
