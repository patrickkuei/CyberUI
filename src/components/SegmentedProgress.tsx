import React from 'react';
import { PROGRESS_CONFIG } from '../constants';

interface SegmentedProgressProps {
  progress: number;
  className?: string;
  children?: React.ReactNode;
}

const SegmentedProgress: React.FC<SegmentedProgressProps> = ({
  progress,
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
    <div className={`relative ${className}`}>
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
