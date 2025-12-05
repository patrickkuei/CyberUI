import React from 'react';
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses } from "../utils/responsive";

/**
 * Individual timeline event data.
 */
export interface TimelineEvent {
  /**
   * Event title.
   */
  title: string;
  /**
   * Optional event description.
   */
  description?: string;
  /**
   * Event timestamp display string.
   */
  time: string;
  /**
   * Event status/type for visual styling.
   * @default 'info'
   */
  status?: 'success' | 'error' | 'warning' | 'info';
}

/**
 * A vertical timeline component for displaying activity feeds or event logs.
 *
 * Features diamond-shaped status indicators with neon glow effects.
 *
 * @example
 * // Basic timeline
 * <Timeline events={[
 *   {
 *     title: "System Initialized",
 *     description: "All modules loaded successfully",
 *     time: "2 min ago",
 *     status: "success"
 *   },
 *   {
 *     title: "Warning Detected",
 *     time: "5 min ago",
 *     status: "warning"
 *   }
 * ]} />
 *
 * @example
 * // Mixed status events
 * <Timeline events={[
 *   { title: "Connected", time: "Now", status: "success" },
 *   { title: "High Memory", time: "1m ago", status: "warning" },
 *   { title: "Connection Lost", time: "5m ago", status: "error" }
 * ]} />
 */
export interface TimelineProps {
  /**
   * Array of timeline events to display.
   */
  events: TimelineEvent[];
  /**
   * Size of the timeline. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  events,
  size = 'md',
  className = '',
}) => {
  const diamondSizeMap = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const innerSizeMap = {
    sm: 'inset-1.5',
    md: 'inset-2',
    lg: 'inset-2.5',
  };

  const titleSizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const descSizeMap = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const timeSizeMap = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
  };

  const gapMap = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-5',
  };

  const spacingMap = {
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
  };

  const diamondClasses = getResponsiveClasses(size, diamondSizeMap);
  const innerClasses = getResponsiveClasses(size, innerSizeMap);
  const titleClasses = getResponsiveClasses(size, titleSizeMap);
  const descClasses = getResponsiveClasses(size, descSizeMap);
  const timeClasses = getResponsiveClasses(size, timeSizeMap);
  const gapClasses = getResponsiveClasses(size, gapMap);
  const spacingClasses = getResponsiveClasses(size, spacingMap);

  const getStatusClasses = (status?: string): { border: string; background: string; inner: string } => {
    const statusStyles = {
      success: {
        border: 'border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]',
        background: 'border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]',
        inner: 'bg-success/60',
      },
      error: {
        border: 'border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]',
        background: 'border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]',
        inner: 'bg-error/60',
      },
      warning: {
        border: 'border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]',
        background: 'border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]',
        inner: 'bg-warning/60',
      },
      info: {
        border: 'border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]',
        background: 'border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]',
        inner: 'bg-info/60',
      },
    };
    return statusStyles[status as keyof typeof statusStyles] || statusStyles.info;
  };

  const diamondClipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';

  return (
    <div className={`${spacingClasses} ${className}`}>
      {events.map((event, index) => {
        const statusClasses = getStatusClasses(event.status);

        return (
          <div key={index} className={`flex ${gapClasses} group`}>
            <div className="flex flex-col items-center">
              <div className={`relative ${diamondClasses} flex-shrink-0 mt-1.5`}>
                <div
                  className={`absolute inset-0 border-2 transition-all duration-300 ${statusClasses.border}`}
                  style={{ clipPath: diamondClipPath }}
                />
                <div
                  className={`absolute ${innerClasses} ${statusClasses.inner}`}
                  style={{ clipPath: diamondClipPath }}
                />
              </div>
              {index < events.length - 1 && (
                <div className="w-[2px] flex-1 bg-gradient-to-b from-secondary/50 to-transparent mt-2" />
              )}
            </div>

            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between mb-1">
                <h4 className={`font-semibold text-default group-hover:text-secondary transition-colors ${titleClasses}`}>
                  {event.title}
                </h4>
                <span className={`text-muted whitespace-nowrap ml-4 ${timeClasses}`}>
                  {event.time}
                </span>
              </div>
              {event.description && (
                <p className={`text-muted mt-1 ${descClasses}`}>
                  {event.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;

