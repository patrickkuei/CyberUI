import React from "react";
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from "../utils/responsive";

/**
 * Props for the LinearProgress component.
 */
export interface LinearProgressProps {
  /** The current progress percentage (0-100) */
  progress: number;
  /** Responsive size configuration for height and width */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /** Optional custom class name to override default styles */
  className?: string;
}

/**
 * A sleek, animated linear progress bar with cyberpunk aesthetic.
 * 
 * @example
 * <LinearProgress progress={75} variant="primary" />
 * 
 * @example
 * <LinearProgress 
 *   progress={kbytesLoaded} 
 *   size={{ base: 'sm', lg: 'md' }} 
 * />
 */
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
