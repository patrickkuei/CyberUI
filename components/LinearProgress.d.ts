import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A linear progress bar with gradient and glow effects.
 *
 * @example
 * // Basic progress bar
 * <LinearProgress progress={60} />
 *
 * @example
 * // Large progress bar with custom class
 * <LinearProgress
 *   progress={85}
 *   size="lg"
 *   className="my-4"
 * />
 */
export interface LinearProgressProps {
    /**
     * Progress value (0-100).
     */
    progress: number;
    /**
     * Height of the progress bar.
     * @default 'md'
     */
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    className?: string;
}
declare const LinearProgress: React.FC<LinearProgressProps>;
export default LinearProgress;
