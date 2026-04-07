import React from 'react';
import { cn } from '../utils/cn';

/**
 * A circular progress indicator with neon glow effects.
 *
 * Use the `size` prop for common cases — it constrains the container automatically.
 * Only use `radius` if you need a custom size (radius is in SVG units, viewBox is 50×50).
 *
 * @example
 * // Recommended: use size prop
 * <CircularProgress progress={75} size="md">
 *   <span className="text-xs font-mono text-accent">75%</span>
 * </CircularProgress>
 *
 * @example
 * // Custom size via className
 * <CircularProgress progress={45} className="w-32 h-32">
 *   <span className="text-accent font-bold">45%</span>
 * </CircularProgress>
 */
export interface CircularProgressProps {
  /**
   * Progress value (0-100).
   */
  progress: number;
  /**
   * Preset container size. Sets width and height of the component automatically.
   * - sm: 64px, md: 96px, lg: 128px, xl: 160px
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Radius of the SVG circle in SVG units (viewBox is 50×50, center at 25,25).
   * Default 20 fits cleanly within the viewBox. Only override for custom layouts.
   * @default 20
   */
  radius?: number;
  /** Optional custom class name */
  className?: string;
  /** Optional content to render in the center of the circle */
  children?: React.ReactNode;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

const SIZE_MAP = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40',
};

/**
 * A beautiful circular progress indicator with neon glow and dual-tone stroke.
 *
 * @example
 * <CircularProgress progress={60} size="md">
 *   <span className="text-xs font-mono">60%</span>
 * </CircularProgress>
 */
const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 'md',
  radius = 20,
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
      className={cn('relative', SIZE_MAP[size], className)}
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
