import React from "react";
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from "../utils/responsive";
import { cn } from "../utils/cn";
import { warnOnce } from "../utils/devWarn";

/**
 * A linear progress bar with gradient and glow effects.
 *
 * @example
 * // Basic progress bar (fixed width chosen by `size`)
 * <LinearProgress progress={60} />
 *
 * @example
 * // Bar that fills its container
 * <LinearProgress progress={60} fullWidth />
 *
 * @example
 * // Bar driven every frame — no width transition
 * <LinearProgress progress={frameProgress} animate={false} />
 *
 * @example
 * // Large full-width bar with extra classes (`my-4` leaves the width unchanged)
 * <LinearProgress
 *   progress={85}
 *   size="lg"
 *   fullWidth
 *   className="my-4"
 * />
 *
 * @example
 * // Fixed width through className, with fullWidth
 * <LinearProgress progress={85} fullWidth className="w-64" />
 */
export interface LinearProgressProps {
  /**
   * Progress value (0-100).
   */
  progress: number;
  /**
   * Size of the progress bar (`sm` 1.5, `md` 3, `lg` 4 spacing units of height).
   * Without `fullWidth`, `size` also picks a fixed width (`sm` w-48, `md` w-80, `lg` w-96).
   * That fixed-width default is deprecated: from 3.0 the bar will fill its container and `size` will set the height only.
   * Set `fullWidth` now if you want that.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Whether the bar fills the width of its container (`w-full`).
   * With `fullWidth`, `className` is merged after the base classes: a width class such as `w-64` overrides the full width, and other classes such as `my-4` leave it unchanged.
   * This will be the only behaviour from 3.0; the fixed-width default is deprecated.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Whether the bar animates width changes with a 500 ms ease-out transition.
   * Set to `false` for values driven every frame (e.g. a `requestAnimationFrame` loop) so the bar tracks `progress` exactly.
   * The transition is also off while the user prefers reduced motion.
   * @default true
   */
  animate?: boolean;
  /**
   * Custom class name for the track.
   * Without `fullWidth`, passing any `className` replaces the size-based width, so the bar has no width class unless you add one.
   * That replace behaviour is deprecated: from 3.0 `className` will be added after the base classes, as it already is with `fullWidth`.
   */
  className?: string;
}

/**
 * A sleek, animated linear progress bar with cyberpunk aesthetic.
 *
 * By default the bar has a fixed width chosen by `size` (`sm` w-48, `md` w-80, `lg` w-96),
 * and any `className` replaces that width. This default is deprecated: from 3.0 the bar
 * will fill its container, so set `fullWidth` now if that is what you want.
 * With `fullWidth` the bar is `w-full` and `className` is merged after the base classes.
 *
 * @example
 * // Fills its parent
 * <LinearProgress progress={75} fullWidth />
 *
 * @example
 * // Width-constrained by a wrapper
 * <div className="w-64">
 *   <LinearProgress progress={kbytesLoaded} fullWidth size={{ base: 'sm', lg: 'md' }} />
 * </div>
 */
const LinearProgress: React.FC<LinearProgressProps> = ({
  progress,
  size = 'md',
  fullWidth = false,
  animate = true,
  className = "",
}) => {
  const getWidthClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.linearProgress.width);
  };

  const getHeightClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.linearProgress.height);
  };

  if (progress < 0 || progress > 100) {
    warnOnce(
      `linearprogress-range-${progress}`,
      `LinearProgress: progress={${progress}} is outside the 0-100 range — the bar is not clamped and will visually overflow its container. Pass a percentage value, e.g. (loaded / total) * 100.`
    );
  }

  const widthClasses = getWidthClasses(size);
  const heightClasses = getHeightClasses(size);

  const containerClasses = fullWidth
    ? cn('w-full bg-surface rounded-full shadow-inner', heightClasses, className)
    : cn('bg-surface rounded-full shadow-inner', heightClasses, className || widthClasses);

  const progressBarClasses = cn(
    'bg-gradient-to-r from-accent to-primary rounded-full shadow-lg-accent',
    animate && 'transition-all duration-500 ease-out motion-reduce:transition-none',
    heightClasses
  );

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

LinearProgress.displayName = "CyberUI.LinearProgress";

export default LinearProgress;
