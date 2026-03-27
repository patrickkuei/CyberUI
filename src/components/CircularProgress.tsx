import React from 'react';

/**
 * Props for the CircularProgress component.
 */
export interface CircularProgressProps {
  /** The current progress percentage (0-100) */
  progress: number;
  /** Radius of the progress circle in SVG units */
  radius: number;
  /** Optional custom class name */
  className?: string;
  /** Optional content to render in the center of the circle */
  children?: React.ReactNode;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

/**
 * A beautiful circular progress indicator with neon glow and dual-tone stroke.
 * 
 * @example
 * <CircularProgress progress={60} radius={20}>
 *   <span className="text-xs font-mono">60%</span>
 * </CircularProgress>
 */
const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  radius,
  className = '',
  children,
  ariaLabel
}) => {
  const circumference = 2 * Math.PI * radius;
  const halfCircumference = circumference / 2;
  const leftOffset = halfCircumference * (1 - progress / 100);
  const rightOffset = halfCircumference * (1 - progress / 100);

  return (
    <div
      className={`relative ${className}`}
      role="progressbar"
      aria-label={ariaLabel || 'Progress'}
      aria-valuenow={Math.max(0, Math.min(100, progress))}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 50 50"
      >
        {/* Left half circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeDasharray={`${halfCircumference * 0.98} ${circumference}`}
          strokeDashoffset={leftOffset}
          transform="rotate(-90 25 25)"
          style={{
            filter: "drop-shadow(0 0 8px var(--color-accent))",
          }}
        />
        {/* Right half circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeDasharray={`${halfCircumference * 0.98} ${circumference}`}
          strokeDashoffset={rightOffset}
          transform="rotate(90 25 25)"
          style={{
            filter: "drop-shadow(0 0 8px var(--color-primary))",
          }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
