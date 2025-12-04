import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
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
declare const Card: React.FC<CardProps>;
export default Card;
