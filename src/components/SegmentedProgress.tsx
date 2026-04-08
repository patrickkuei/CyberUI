import React from 'react';
import { cn } from '../utils/cn';
import { PROGRESS_CONFIG } from '../constants';

// ── Shared ────────────────────────────────────────────────────────────────────

type Size = 'sm' | 'md' | 'lg' | 'xl';

const RADIAL_SIZE_MAP: Record<Size, string> = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40',
};

// ── Discriminated union props ─────────────────────────────────────────────────

interface RadialProps {
  /**
   * Renders a **radial/circular** gauge — discrete arc segments arranged in a ring.
   * This is the original behaviour and the default.
   */
  variant?: 'radial';
  /** Size of the circular gauge. Sets width and height automatically.
   * - sm: 64px, md: 96px, lg: 128px, xl: 160px
   * @default 'md'
   */
  size?: Size;
  /** Optional content to render in the center of the gauge. */
  children?: React.ReactNode;
  /** Progress value (0–100). */
  progress: number;
  /** Optional custom class name. */
  className?: string;
}

interface BlockProps {
  /**
   * Renders a **linear block bar** — discrete filled rectangles in a row
   * (think health bar or loading indicator divided into blocks: ▮▮▮▮▯▯).
   */
  variant: 'block';
  /**
   * Number of discrete blocks.
   * @default 10
   */
  segments?: number;
  /** Size controls block height.
   * - sm: h-3, md: h-5, lg: h-7, xl: h-9
   * @default 'md'
   */
  size?: Size;
  /** Progress value (0–100). */
  progress: number;
  /** Optional custom class name. */
  className?: string;
  children?: never;
}

export type SegmentedProgressProps = RadialProps | BlockProps;

// ── Radial variant (original) ─────────────────────────────────────────────────

/**
 * A segmented progress indicator with two display modes.
 *
 * **Radial** (default) — circular gauge reminiscent of radar or power meters:
 * @example
 * <SegmentedProgress progress={45} size="md">
 *   <div className="text-primary font-bold">LVL 4</div>
 * </SegmentedProgress>
 *
 * **Block** — linear discrete-block bar (▮▮▮▮▯▯), great for health bars or
 * step-based loading indicators:
 * @example
 * <SegmentedProgress variant="block" progress={60} segments={10} size="md" />
 */
const RadialProgress: React.FC<RadialProps> = ({ progress, size = 'md', className, children }) => {
  const {
    SEGMENT_COUNT,
    SEGMENT_ANGLE,
    GAP_ANGLE,
    INNER_RADIUS,
    OUTER_RADIUS,
    OUTER_TICK_RADIUS
  } = PROGRESS_CONFIG;

  const activeAngle = SEGMENT_ANGLE - GAP_ANGLE;

  return (
    <div className={cn('relative', RADIAL_SIZE_MAP[size], className)}>
      <svg className="w-full h-full" viewBox="0 0 60 60" style={{ overflow: 'visible' }}>
        {/* Outer tick marks */}
        {[...Array(60)].map((_, i) => {
          const angle = (360 / 60) * i;
          const isHourMark = i % 5 === 0;
          const lineLength = isHourMark ? 6 : 3;
          const x1 = 30 + OUTER_TICK_RADIUS * Math.cos((angle * Math.PI) / 180);
          const y1 = 30 + OUTER_TICK_RADIUS * Math.sin((angle * Math.PI) / 180);
          const x2 = 30 + (OUTER_TICK_RADIUS - lineLength) * Math.cos((angle * Math.PI) / 180);
          const y2 = 30 + (OUTER_TICK_RADIUS - lineLength) * Math.sin((angle * Math.PI) / 180);
          return (
            <line
              key={`tick-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="var(--color-muted)"
              strokeWidth={1}
              strokeLinecap="round"
              opacity={0.7}
            />
          );
        })}

        {/* Progress segments */}
        {[...Array(SEGMENT_COUNT)].map((_, i) => {
          const angleStart = SEGMENT_ANGLE * i - 90 + GAP_ANGLE / 2;
          const angleEnd = angleStart + activeAngle;
          const toRad = (deg: number) => (deg * Math.PI) / 180;
          const x1 = 30 + INNER_RADIUS * Math.cos(toRad(angleStart));
          const y1 = 30 + INNER_RADIUS * Math.sin(toRad(angleStart));
          const x2 = 30 + OUTER_RADIUS * Math.cos(toRad(angleStart));
          const y2 = 30 + OUTER_RADIUS * Math.sin(toRad(angleStart));
          const x3 = 30 + OUTER_RADIUS * Math.cos(toRad(angleEnd));
          const y3 = 30 + OUTER_RADIUS * Math.sin(toRad(angleEnd));
          const x4 = 30 + INNER_RADIUS * Math.cos(toRad(angleEnd));
          const y4 = 30 + INNER_RADIUS * Math.sin(toRad(angleEnd));
          const isActive = i < Math.floor(progress / 5);
          return (
            <path
              key={`segment-${i}`}
              d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`}
              fill={isActive ? 'var(--color-accent)' : 'var(--color-border-default)'}
              style={{
                filter: isActive ? 'drop-shadow(0 0 6px var(--color-accent))' : 'none',
                transition: 'fill 0.3s ease',
              }}
            />
          );
        })}
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

// ── Block variant (new) ───────────────────────────────────────────────────────

const BLOCK_HEIGHT_MAP: Record<Size, string> = {
  sm: 'h-3',
  md: 'h-5',
  lg: 'h-7',
  xl: 'h-9',
};

const BlockProgress: React.FC<BlockProps> = ({ progress, segments = 10, size = 'md', className }) => {
  const activeCount = Math.round((Math.min(100, Math.max(0, progress)) / 100) * segments);

  return (
    <div className={cn('flex gap-1 w-full', className)}>
      {[...Array(segments)].map((_, i) => {
        const isActive = i < activeCount;
        return (
          <div
            key={i}
            className={cn('flex-1 rounded-sm transition-all duration-300', BLOCK_HEIGHT_MAP[size])}
            style={{
              backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-border-default)',
              boxShadow: isActive ? '0 0 6px var(--color-accent)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
};

// ── Unified component ─────────────────────────────────────────────────────────

const SegmentedProgress: React.FC<SegmentedProgressProps> = (props) => {
  if (props.variant === 'block') {
    return <BlockProgress {...props} />;
  }
  return <RadialProgress {...props} />;
};

export default SegmentedProgress;
