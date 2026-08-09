import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';
import { warnOnce } from '../utils/devWarn';

/**
 * A slider's value: a single number for a single-thumb slider, or a
 * `[min, max]` tuple for a two-thumb range slider.
 */
export type SliderValue = number | [number, number];

/**
 * Props for the Slider component.
 */
export interface SliderProps {
  /**
   * Minimum allowed value.
   * @default 0
   */
  min?: number;
  /**
   * Maximum allowed value.
   * @default 100
   */
  max?: number;
  /**
   * Increment between selectable values. Also used as the Arrow key step;
   * Page Up/Page Down move by `step * 10`.
   * @default 1
   */
  step?: number;
  /**
   * Controlled value. Pass a single number for a single-thumb slider, or a
   * `[min, max]` tuple for a two-thumb range slider. Whichever shape is used
   * on mount (via `value` or `defaultValue`) decides the mode for the
   * component's lifetime — switching between number and tuple afterwards is
   * not supported.
   */
  value?: SliderValue;
  /**
   * Initial value for uncontrolled usage, and what determines single- vs
   * range-mode when `value` is never passed. Ignored once `value` is set.
   * @default min
   */
  defaultValue?: SliderValue;
  /** Fired with the next value on every drag move and keyboard adjustment. */
  onValueChange?: (value: SliderValue) => void;
  /**
   * Visual style, reusing the neon palette from Button/Badge/Tooltip.
   * `accent` matches LinearProgress's default accent-to-primary gradient
   * treatment on the filled track.
   * @default 'accent'
   */
  variant?: 'primary' | 'secondary' | 'accent';
  /**
   * Track thickness and thumb diameter. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Disables dragging and keyboard interaction.
   * @default false
   */
  disabled?: boolean;
  /** Label rendered above the track, and used to build each thumb's accessible name. */
  label?: string;
  /**
   * Renders the current numeric value(s) next to the label.
   * @default false
   */
  showValue?: boolean;
  /**
   * Formats the value(s) rendered by `showValue`.
   * @default String(value)
   */
  formatValue?: (value: number) => string;
  /** Accessible name for the thumb in single-value mode. Falls back to `label`, then `"Slider"`. */
  ariaLabel?: string;
  /** Accessible name for the lower thumb in range mode. Falls back to `${label} minimum`. */
  ariaLabelMin?: string;
  /** Accessible name for the upper thumb in range mode. Falls back to `${label} maximum`. */
  ariaLabelMax?: string;
  /** Additional CSS classes for the outer container. */
  className?: string;
  /** Optional id override for the outer container. */
  id?: string;
}

const TRACK_VARIANT_CLASSES: Record<'primary' | 'secondary' | 'accent', string> = {
  primary: 'bg-gradient-to-r from-secondary to-primary shadow-primary',
  secondary: 'bg-gradient-to-r from-primary to-secondary shadow-secondary',
  accent: 'bg-gradient-to-r from-accent to-primary shadow-lg-accent',
};

const THUMB_VARIANT_CLASSES: Record<'primary' | 'secondary' | 'accent', string> = {
  primary: 'bg-primary shadow-primary',
  secondary: 'bg-secondary shadow-secondary',
  accent: 'bg-accent shadow-lg-accent',
};

type ThumbIndex = 0 | 1;

/**
 * A cyberpunk-styled slider for single-value or two-thumb range selection —
 * volume, brightness, price range, and similar numeric inputs.
 *
 * @example
 * // Single value, uncontrolled
 * <Slider label="Brightness" defaultValue={40} showValue />
 *
 * @example
 * // Controlled range (two thumbs)
 * <Slider
 *   label="Price Range"
 *   min={0}
 *   max={500}
 *   step={5}
 *   value={priceRange}
 *   onValueChange={setPriceRange}
 *   formatValue={(v) => `$${v}`}
 *   showValue
 * />
 */
const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onValueChange,
  variant = 'accent',
  size = 'md',
  disabled = false,
  label,
  showValue = false,
  formatValue = (v: number) => String(v),
  ariaLabel,
  ariaLabelMin,
  ariaLabelMax,
  className = '',
  id,
}) => {
  const generatedId = useId();
  const rootId = id || generatedId;
  const labelId = `${rootId}-label`;

  if (max <= min) {
    warnOnce(
      `slider-invalid-range-${min}-${max}`,
      `Slider: max (${max}) must be greater than min (${min}) — values will not update correctly.`
    );
  }
  if (step <= 0) {
    warnOnce(`slider-invalid-step-${step}`, `Slider: step (${step}) must be greater than 0.`);
  }

  const [internalValue, setInternalValue] = useState<SliderValue>(
    () => value ?? defaultValue ?? min
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const isRange = Array.isArray(currentValue);
  const values: [number, number] = useMemo(
    () =>
      isRange
        ? (currentValue as [number, number])
        : [currentValue as number, currentValue as number],
    [isRange, currentValue]
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const [draggingIndex, setDraggingIndex] = useState<ThumbIndex | null>(null);

  const clampToStep = useCallback(
    (raw: number) => {
      const stepped = Math.round((raw - min) / step) * step + min;
      const clamped = Math.min(max, Math.max(min, stepped));
      // Round away floating-point noise from the step math above.
      return Math.round(clamped * 1e10) / 1e10;
    },
    [min, max, step]
  );

  const commitValue = useCallback(
    (index: ThumbIndex, rawVal: number) => {
      const stepped = clampToStep(rawVal);
      const next: [number, number] = [...values];
      if (isRange) {
        if (index === 0) {
          next[0] = Math.min(stepped, next[1]);
        } else {
          next[1] = Math.max(stepped, next[0]);
        }
      } else {
        next[0] = stepped;
      }
      const nextValue: SliderValue = isRange ? [next[0], next[1]] : next[0];
      if (!isControlled) setInternalValue(nextValue);
      onValueChange?.(nextValue);
    },
    [values, isRange, isControlled, onValueChange, clampToStep]
  );

  const valueFromClientX = useCallback(
    (clientX: number) => {
      const rect = trackRef.current?.getBoundingClientRect();
      if (!rect || rect.width === 0) return min;
      const ratio = (clientX - rect.left) / rect.width;
      const clampedRatio = Math.min(1, Math.max(0, ratio));
      return min + clampedRatio * (max - min);
    },
    [min, max]
  );

  useEffect(() => {
    if (draggingIndex === null) return;
    const handleMove = (e: PointerEvent) => commitValue(draggingIndex, valueFromClientX(e.clientX));
    const handleUp = () => setDraggingIndex(null);
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [draggingIndex, commitValue, valueFromClientX]);

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    const rawVal = valueFromClientX(e.clientX);
    const index: ThumbIndex =
      isRange && Math.abs(rawVal - values[1]) < Math.abs(rawVal - values[0]) ? 1 : 0;
    commitValue(index, rawVal);
    setDraggingIndex(index);
  };

  const handleThumbPointerDown = (e: React.PointerEvent<HTMLDivElement>, index: ThumbIndex) => {
    if (disabled) return;
    e.stopPropagation();
    e.currentTarget.focus();
    setDraggingIndex(index);
  };

  const pageStep = step * 10;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: ThumbIndex) => {
    if (disabled) return;
    const current = values[index];
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        commitValue(index, current + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        commitValue(index, current - step);
        break;
      case 'PageUp':
        e.preventDefault();
        commitValue(index, current + pageStep);
        break;
      case 'PageDown':
        e.preventDefault();
        commitValue(index, current - pageStep);
        break;
      case 'Home':
        e.preventDefault();
        commitValue(index, min);
        break;
      case 'End':
        e.preventDefault();
        commitValue(index, max);
        break;
      default:
        break;
    }
  };

  const percentOf = (v: number) => ((v - min) / (max - min)) * 100;

  const trackHeightClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.slider.track);
  const thumbSizeClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.slider.thumb);

  const fillLeft = isRange ? percentOf(values[0]) : 0;
  const fillWidth = isRange ? percentOf(values[1]) - percentOf(values[0]) : percentOf(values[0]);

  const thumbIndices: ThumbIndex[] = isRange ? [0, 1] : [0];

  const thumbAriaLabel = (index: ThumbIndex): string | undefined => {
    if (!isRange) return ariaLabel || (label ? undefined : 'Slider');
    if (index === 0) return ariaLabelMin || (label ? `${label} minimum` : 'Minimum value');
    return ariaLabelMax || (label ? `${label} maximum` : 'Maximum value');
  };

  const displayValue = isRange
    ? `${formatValue(values[0])} – ${formatValue(values[1])}`
    : formatValue(values[0]);

  return (
    <div id={rootId} className={cn('flex flex-col gap-2', disabled && 'opacity-50', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span id={labelId} className="text-sm text-muted">
              {label}
            </span>
          )}
          {showValue && <span className="text-sm font-mono text-accent">{displayValue}</span>}
        </div>
      )}

      <div
        ref={trackRef}
        className={cn(
          'relative w-full rounded-full bg-surface shadow-inner',
          trackHeightClasses,
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        )}
        onPointerDown={disabled ? undefined : handleTrackPointerDown}
      >
        <div
          className={cn('absolute top-0 h-full rounded-full transition-[left,width] duration-100', TRACK_VARIANT_CLASSES[variant])}
          style={{ left: `${fillLeft}%`, width: `${fillWidth}%` }}
        />

        {thumbIndices.map((index) => (
          <div
            key={index}
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuenow={values[index]}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuetext={formatValue(values[index])}
            aria-orientation="horizontal"
            aria-disabled={disabled || undefined}
            aria-label={thumbAriaLabel(index)}
            aria-labelledby={!isRange && !ariaLabel && label ? labelId : undefined}
            className={cn(
              'absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-base',
              disabled ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing hover:scale-110',
              thumbSizeClasses,
              THUMB_VARIANT_CLASSES[variant]
            )}
            style={{ left: `${percentOf(values[index])}%` }}
            onPointerDown={disabled ? undefined : (e) => handleThumbPointerDown(e, index)}
            onKeyDown={disabled ? undefined : (e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

Slider.displayName = 'CyberUI.Slider';

export default Slider;
