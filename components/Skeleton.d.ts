import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A placeholder component for loading states.
 *
 * @example
 * // Text skeleton
 * <Skeleton variant="text" lines={3} />
 *
 * @example
 * // Avatar and text combination
 * <Skeleton variant="avatar-text" size="lg" />
 *
 * @example
 * // Custom rectangular skeleton
 * <Skeleton
 *   variant="rectangular"
 *   width={200}
 *   height={150}
 *   animate={false}
 * />
 */
export interface SkeletonProps {
    /**
     * Shape variant of the skeleton.
     * @default 'text'
     */
    variant?: "text" | "circular" | "rectangular" | "card" | "avatar-text" | "button-group";
    /**
     * Size of the skeleton element.
     * @default 'md'
     */
    size?: ResponsiveValue<"sm" | "md" | "lg">;
    width?: string | number;
    height?: string | number;
    className?: string;
    /**
     * Number of lines for text variant.
     * @default 3
     */
    lines?: number;
    /**
     * Whether to show the pulse animation.
     * @default true
     */
    animate?: boolean;
}
declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
