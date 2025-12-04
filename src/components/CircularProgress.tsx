import React from 'react';

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
