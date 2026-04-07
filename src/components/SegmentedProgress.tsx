import React from 'react';
import { cn } from '../utils/cn';
import { PROGRESS_CONFIG } from '../constants';

/**
 * A circular progress indicator divided into segments.
 *
 * Use the `size` prop to control dimensions — without it the component fills its container.
 *
 * @example
 * // Recommended: use size prop
 * <SegmentedProgress progress={30} size="md" />
 *
 * @example
 * // With center content
 * <SegmentedProgress progress={80} size="lg">
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
  /**
   * Preset container size. Sets width and height automatically.
   * - sm: 64px, md: 96px, lg: 128px, xl: 160px
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Optional custom class name */
  className?: string;
  /** Optional content to render in the center of the segments */
  children?: React.ReactNode;
}

const SEGMENTED_SIZE_MAP = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40',
};

/**
 * A highly technical, segmented radial progress indicator reminiscent of radar or power gauges.
 *
 * @example
 * <SegmentedProgress progress={45} size="md">
 *   <div className="text-primary font-bold">LVL 4</div>
 * </SegmentedProgress>
 */
const SegmentedProgress: React.FC<SegmentedProgressProps> = ({
  progress,
  size = 'md',
  className = '',
  children
}) => {
  const {
    SEGMENT_COUNT,
    SEGMENT_ANGLE,
    GAP_ANGLE,
    INNER_RADIUS,
    OUTER_RADIUS,
    OUTER_TICK_RADIUS
  } = PROGRESS_CONFIG;

  const activeAngle = SEGMENT_ANGLE - GAP_ANGLE;

  return (
    <div className={cn('relative', SEGMENTED_SIZE_MAP[size], className)}>
      <svg
        className="w-full h-full"
        viewBox="0 0 60 60"
        style={{ overflow: "visible" }}
      >
        {/* Outer tick marks */}
        {[...Array(60)].map((_, i) => {
          const angle = (360 / 60) * i;
          const isHourMark = i % 5 === 0;
          const lineLength = isHourMark ? 6 : 3;
          const strokeColor = "var(--color-muted)";

          const x1 = 30 + OUTER_TICK_RADIUS * Math.cos((angle * Math.PI) / 180);
          const y1 = 30 + OUTER_TICK_RADIUS * Math.sin((angle * Math.PI) / 180);
          const x2 = 30 + (OUTER_TICK_RADIUS - lineLength) * Math.cos((angle * Math.PI) / 180);
          const y2 = 30 + (OUTER_TICK_RADIUS - lineLength) * Math.sin((angle * Math.PI) / 180);

          return (
            <line
              key={`tick-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={strokeColor}
              strokeWidth={1}
              strokeLinecap="round"
              opacity={0.7}
            />
          );
        })}

        {/* Progress segments */}
        {[...Array(SEGMENT_COUNT)].map((_, i) => {
          const angleStart = SEGMENT_ANGLE * i - 90 + GAP_ANGLE / 2;
          const angleEnd = angleStart + activeAngle;

          const toRad = (deg: number) => (deg * Math.PI) / 180;

          const x1 = 30 + INNER_RADIUS * Math.cos(toRad(angleStart));
          const y1 = 30 + INNER_RADIUS * Math.sin(toRad(angleStart));
          const x2 = 30 + OUTER_RADIUS * Math.cos(toRad(angleStart));
          const y2 = 30 + OUTER_RADIUS * Math.sin(toRad(angleStart));
          const x3 = 30 + OUTER_RADIUS * Math.cos(toRad(angleEnd));
          const y3 = 30 + OUTER_RADIUS * Math.sin(toRad(angleEnd));
          const x4 = 30 + INNER_RADIUS * Math.cos(toRad(angleEnd));
          const y4 = 30 + INNER_RADIUS * Math.sin(toRad(angleEnd));

          const pathData = `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`;
          const isActive = i < Math.floor(progress / 5);

          return (
            <path
              key={`segment-${i}`}
              d={pathData}
              fill={isActive ? "var(--color-accent)" : "var(--color-border-default)"}
              style={{
                filter: isActive ? "drop-shadow(0 0 6px var(--color-accent))" : "none",
                transition: "fill 0.3s ease",
              }}
            />
          );
        })}
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default SegmentedProgress;
