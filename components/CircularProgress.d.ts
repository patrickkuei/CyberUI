import { default as React } from 'react';
/**
 * A circular progress indicator with neon glow effects.
 *
 * @example
 * // Basic progress
 * <CircularProgress progress={75} radius={40} />
 *
 * @example
 * // Progress with label
 * <CircularProgress progress={45} radius={60}>
 *   <span className="text-accent font-bold">45%</span>
 * </CircularProgress>
 */
export interface CircularProgressProps {
    /**
     * Progress value (0-100).
     */
    progress: number;
    /**
     * Radius of the circle in pixels.
     */
    radius: number;
    className?: string;
    children?: React.ReactNode;
    ariaLabel?: string;
}
declare const CircularProgress: React.FC<CircularProgressProps>;
export default CircularProgress;
