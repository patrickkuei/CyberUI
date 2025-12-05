import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
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
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
