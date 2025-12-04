import { default as React } from 'react';
/**
 * A circular progress indicator divided into segments.
 *
 * @example
 * // Basic segmented progress
 * <SegmentedProgress progress={30} />
 *
 * @example
 * // Segmented progress with center content
 * <SegmentedProgress progress={80}>
 *   <div className="text-center">
 *     <div className="text-2xl font-bold text-accent">80%</div>
 *     <div className="text-xs text-muted">LOADED</div>
 *   </div>
 * </SegmentedProgress>
 */
export interface SegmentedProgressProps {
    /**
     * Progress value (0-100).
     */
    progress: number;
    className?: string;
    children?: React.ReactNode;
}
declare const SegmentedProgress: React.FC<SegmentedProgressProps>;
export default SegmentedProgress;
