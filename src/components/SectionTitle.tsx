import React from 'react';

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
   * Additional CSS classes.
   */
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  showLine = true,
  className = '',
}) => {
  const baseClasses = 'flex items-center gap-4 mb-6';
  const titleClasses = 'text-sm uppercase tracking-[0.2em] text-secondary font-bold whitespace-nowrap';
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
