import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
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
declare const SectionTitle: React.FC<SectionTitleProps>;
export default SectionTitle;
