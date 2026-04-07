import React from 'react';
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses } from "../utils/responsive";

/**
 * A standardized section title with cyberpunk styling.
 *
 * Features uppercase text, wide letter spacing, and an optional decorative gradient line.
 *
 * @example
 * // Standard title with gradient line
 * <SectionTitle>System Status</SectionTitle>
 *
 * @example
 * // Title without decorative line
 * <SectionTitle showLine={false}>Heading Only</SectionTitle>
 *
 * @example
 * // With custom styling
 * <SectionTitle className="mb-8">Custom Spacing</SectionTitle>
 */
export interface SectionTitleProps {
  /**
   * The title text content.
   */
  children: React.ReactNode;
  /**
   * Whether to show a decorative gradient line after the title.
   * @default true
   */
  showLine?: boolean;
  /**
   * Size of the section title. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  showLine = true,
  size = 'md',
  className = '',
}) => {
  const textSizeMap = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const marginMap = {
    sm: 'mb-4',
    md: 'mb-6',
    lg: 'mb-8',
  };

  const gapMap = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-5',
  };

  const textClasses = getResponsiveClasses(size, textSizeMap);
  const marginClasses = getResponsiveClasses(size, marginMap);
  const gapClasses = getResponsiveClasses(size, gapMap);

  const baseClasses = `flex items-center ${gapClasses} ${marginClasses}`;
  const titleClasses = `uppercase tracking-[0.2em] text-secondary font-bold whitespace-nowrap ${textClasses}`;
  const lineClasses = 'h-[1px] w-full bg-gradient-to-r from-secondary/50 to-transparent';

  return (
    <div className={`${baseClasses} ${className}`}>
      <h2 className={titleClasses}>
        {children}
      </h2>
      {showLine && (
        <div className={lineClasses} />
      )}
    </div>
  );
};

export default SectionTitle;

