import React from "react";
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from "../utils/responsive";

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

const LinearProgress: React.FC<LinearProgressProps> = ({
  progress,
  size = 'md',
  className = "",
}) => {
  const getWidthClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.linearProgress.width);
  };

  const getHeightClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.linearProgress.height);
  };

  const widthClasses = getWidthClasses(size);
  const heightClasses = getHeightClasses(size);

  const containerClasses = [
    "bg-surface",
    "rounded-full",
    "shadow-inner",
    heightClasses,
    className || widthClasses,
  ].join(" ");

  const progressBarClasses = [
    "bg-gradient-to-r",
    "from-accent",
    "to-primary",
    "rounded-full",
    "shadow-lg-accent",
    "transition-all",
    "duration-500",
    "ease-out",
    heightClasses,
  ].join(" ");

  return (
    <div
      className={containerClasses}
      role="progressbar"
      aria-valuenow={Math.max(0, Math.min(100, progress))}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={progressBarClasses}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LinearProgress;
