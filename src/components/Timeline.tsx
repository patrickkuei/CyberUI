import React from 'react';
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses } from "../utils/responsive";
import { cn } from '../utils/cn';

/**
 * Every status a timeline item can take. `neutral` draws a plain, unlit
 * diamond (border-default outline, no glow); the other four are neon-coloured
 * and glow.
 */
export type TimelineStatus = 'success' | 'error' | 'warning' | 'info' | 'neutral';

/**
 * Individual timeline event data: a timestamped event in a log or activity
 * feed. For process steps, rich descriptions or
 * `status: 'neutral'`, use {@link TimelineItem} — `Timeline` accepts both.
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
 * The general timeline entry `Timeline` renders: a {@link TimelineEvent}
 * whose `time` is optional, whose `description` can be any React content, and
 * whose `status` can also be `'neutral'`. Every `TimelineEvent` is a valid
 * `TimelineItem`.
 */
export interface TimelineItem {
  /**
   * Entry title.
   */
  title: string;
  /**
   * Optional description. A string (or number) renders in a `<p>`; any other
   * React content (links, `<code>`, lists, notes) renders in a `<div>`, so
   * block elements are valid inside it.
   */
  description?: React.ReactNode;
  /**
   * Optional time/timestamp shown at the right of the title. When omitted, no
   * time element is rendered at all (not an empty one).
   */
  time?: string;
  /**
   * Status for visual styling. `'neutral'` renders an unlit, non-glowing
   * diamond, for marking one step among plain ones.
   * @default 'info'
   */
  status?: TimelineStatus;
}

/**
 * A vertical timeline component for displaying activity feeds or event logs.
 *
 * Features diamond-shaped status indicators with neon glow effects, plus a
 * plain `neutral` status. Items without `time` work as untimed process steps.
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
 *
 * @example
 * // Untimed process steps: one highlighted among neutral ones, rich description
 * <Timeline events={[
 *   { title: "Scan", status: "neutral" },
 *   { title: "Decrypt", status: "info", description: <>Run <code>decrypt --all</code></> },
 *   { title: "Upload", status: "neutral" }
 * ]} />
 */
export interface TimelineProps {
  /**
   * Array of timeline events to display. For untimed steps, React-node
   * descriptions or `'neutral'` status, pass `TimelineItem[]` instead
   * (see {@link TimelineItemsProps}).
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

/**
 * `TimelineProps` with `events` widened to {@link TimelineItem}: optional
 * `time`, React-node `description`, and `'neutral'` status. `Timeline` accepts
 * either props type.
 */
export interface TimelineItemsProps extends Omit<TimelineProps, 'events'> {
  /**
   * Array of timeline entries to display. `TimelineEvent[]` is also accepted.
   */
  events: TimelineItem[];
}

const TimelineBase: React.FC<TimelineItemsProps> = ({
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
    md: 'text-(length:--text-base)',
    lg: 'text-lg',
  };

  const descSizeMap = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-(length:--text-base)',
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

  const getStatusClasses = (status?: TimelineStatus): { border: string; background: string; inner: string } => {
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
      neutral: {
        border: 'border-border-default bg-border-default/30',
        background: 'border-border-default bg-border-default/30',
        inner: 'bg-muted/40',
      },
    };
    return statusStyles[status as keyof typeof statusStyles] || statusStyles.info;
  };

  const diamondClipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';

  return (
    <div className={cn(spacingClasses, className)}>
      {events.map((event, index) => {
        const statusClasses = getStatusClasses(event.status);
        // A string description keeps the original <p>; other React content gets
        // a <div> so block elements (lists, <pre>, notes) stay valid HTML.
        const isTextDescription = typeof event.description === 'string' || typeof event.description === 'number';
        const DescriptionTag = isTextDescription ? 'p' : 'div';
        const hasDescription =
          event.description !== undefined &&
          event.description !== null &&
          typeof event.description !== 'boolean' &&
          event.description !== '';

        return (
          <div key={index} className={cn('flex', gapClasses, 'group')}>
            <div className="flex flex-col items-center">
              <div className={cn('relative flex-shrink-0 mt-1.5', diamondClasses)}>
                <div
                  className={cn('absolute inset-0 border-2 transition-all duration-300', statusClasses.border)}
                  style={{ clipPath: diamondClipPath }}
                />
                <div
                  className={cn('absolute', innerClasses, statusClasses.inner)}
                  style={{ clipPath: diamondClipPath }}
                />
              </div>
              {index < events.length - 1 && (
                <div className="w-[2px] flex-1 bg-gradient-to-b from-secondary/50 to-transparent mt-2" />
              )}
            </div>

            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between mb-1">
                <h4 className={cn('font-semibold text-default group-hover:text-secondary transition-colors', titleClasses)}>
                  {event.title}
                </h4>
                {event.time !== undefined && (
                  <span className={cn('text-muted whitespace-nowrap ml-4', timeClasses)}>
                    {event.time}
                  </span>
                )}
              </div>
              {hasDescription && (
                <DescriptionTag className={cn('text-muted mt-1', descClasses)}>
                  {event.description}
                </DescriptionTag>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

TimelineBase.displayName = "CyberUI.Timeline";

// Two call signatures: `TimelineItemsProps` (wider `TimelineItem[]` events) and
// the original `TimelineProps` (`TimelineEvent[]`). The legacy one comes last on
// purpose: type inference over an overloaded component (`React.ComponentProps<
// typeof Timeline>`, `ComponentType<P>` parameters) reads the last signature, so
// those keep seeing `TimelineProps` with `time: string`. One limitation, shared
// with `Image`: a value annotated `typeof Timeline` must also accept
// `TimelineItemsProps`, so a mock like `(p: TimelineProps) => …` typed as
// `typeof Timeline` no longer type-checks; type it `React.FC<TimelineProps>`.
const Timeline: ((props: TimelineItemsProps) => ReturnType<React.FC>) &
  React.FC<TimelineProps> = TimelineBase;

export default Timeline;

