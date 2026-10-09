import React from "react";
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from "../utils/responsive";
import { cn } from "../utils/cn";
import { warnOnce } from "../utils/devWarn";

/**
 * A linear progress bar with gradient and glow effects.
 *
 * @example
 * // Basic progress bar
 * <LinearProgress progress={60} />
 *
 * @example
 * // Bar driven every frame — no width transition
 * <LinearProgress progress={frameProgress} animate={false} />
 *
 * @example
 * // Large progress bar with extra classes (still fills its container)
 * <LinearProgress
 *   progress={85}
 *   size="lg"
 *   className="my-4"
 * />
 *
 * @example
 * // Fixed width through className
 * <LinearProgress progress={85} className="w-64" />
 */
export interface LinearProgressProps {
  /**
   * Progress value (0-100).
   */
  progress: number;
  /**
   * Height of the progress bar (`sm` 1.5, `md` 3, `lg` 4 spacing units). Does not affect width: the bar always fills its container.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Whether the bar animates width changes with a 500 ms ease-out transition.
   * Set to `false` for values driven every frame (e.g. a `requestAnimationFrame` loop) so the bar tracks `progress` exactly.
   * The transition is also off while the user prefers reduced motion.
   * @default true
   */
  animate?: boolean;
  /**
   * Extra classes merged onto the track after the base classes (`w-full` included).
   * Passing a width class such as `w-64` overrides the full width; other classes such as `my-4` leave it unchanged.
   */
  className?: string;
}

/**
 * A sleek, animated linear progress bar with cyberpunk aesthetic.
 *
 * The bar is `w-full` by default — it fills its container width, whatever the `size`.
 * `size` sets the height only. Wrap the bar in a constrained element, or pass a width
 * class such as `w-64` in `className`, to control its width. `className` is added after
 * the base classes, so it never removes the default width unless it sets its own.
 *
 * @example
 * // Full-width bar (fills parent)
 * <LinearProgress progress={75} />
 *
 * @example
 * // Width-constrained
 * <div className="w-64">
 *   <LinearProgress progress={kbytesLoaded} size={{ base: 'sm', lg: 'md' }} />
 * </div>
 */
const LinearProgress: React.FC<LinearProgressProps> = ({
  progress,
  size = 'md',
  animate = true,
  className = "",
}) => {
  const getHeightClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.linearProgress.height);
  };

  if (progress < 0 || progress > 100) {
    warnOnce(
      `linearprogress-range-${progress}`,
      `LinearProgress: progress={${progress}} is outside the 0-100 range — the bar is not clamped and will visually overflow its container. Pass a percentage value, e.g. (loaded / total) * 100.`
    );
  }

  const heightClasses = getHeightClasses(size);

  const containerClasses = cn('w-full bg-surface rounded-full shadow-inner', heightClasses, className);

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
