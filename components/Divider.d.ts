import { default as React } from 'react';
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
declare const Divider: React.FC<DividerProps>;
export default Divider;
