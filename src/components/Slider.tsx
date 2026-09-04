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

/** The thumb currently being dragged, and the pointer that started the drag. */
type DragState = { index: ThumbIndex; pointerId: number };

/**
 * Captures the pointer on `el` so drag events keep targeting it even when the
 * cursor leaves the element (or the viewport). Feature-detected and wrapped
 * in try/catch since some environments (e.g. jsdom in tests) don't implement
 * the Pointer Capture API, and browsers can throw for an already-released
 * pointerId.
 */
function capturePointer(el: Element, pointerId: number) {
  if (typeof el.setPointerCapture === 'function') {
    try {
      el.setPointerCapture(pointerId);
    } catch {
      // Ignore — unsupported or the pointer is no longer active.
    }
  }
}

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
  const [dragState, setDragState] = useState<DragState | null>(null);

  // Latest values, read (not subscribed to) by commitValue so that callback's
  // identity stays stable across drag ticks instead of changing on every
  // value update — the window pointermove/pointerup effect below depends on
  // commitValue, so keeping it stable avoids unbinding/rebinding those
  // listeners on every single move event during a drag.
  const valuesRef = useRef(values);
  valuesRef.current = values;

  const clampToStep = useCallback(
    (raw: number) => {
      // Guard against a non-positive step: dividing by it would produce NaN
      // (step === 0) or an unstable/backwards stepping (step < 0), which
      // would otherwise corrupt `value`, `aria-valuenow`, and the thumb's
      // inline `left` style. Fall back to a step of 1 in that case; the dev
      // warning above still fires so the misconfiguration is visible.
      const safeStep = step > 0 ? step : 1;
      const stepped = Math.round((raw - min) / safeStep) * safeStep + min;
      const clamped = Math.min(max, Math.max(min, stepped));
      // Round away floating-point noise from the step math above.
      return Math.round(clamped * 1e10) / 1e10;
    },
    [min, max, step]
  );

  const commitValue = useCallback(
    (index: ThumbIndex, rawVal: number) => {
      const stepped = clampToStep(rawVal);
      const next: [number, number] = [...valuesRef.current];
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
    [isRange, isControlled, onValueChange, clampToStep]
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
    if (!dragState) return;
    // If `disabled` flips to true mid-drag (e.g. a consumer locking the
    // control during an async save triggered by onValueChange), end the
    // drag immediately instead of leaving the window listeners attached.
    if (disabled) {
      setDragState(null);
      return;
    }
    const { index, pointerId } = dragState;
    const handleMove = (e: PointerEvent) => {
      // Ignore events from any pointer other than the one that started this
      // drag, so a second simultaneous touch-drag (e.g. the other thumb on
      // a touchscreen range slider) can't hijack this thumb's movement.
      if (e.pointerId !== pointerId) return;
      // No button/contact is actually down — most commonly because the
      // pointer was released outside the browser viewport, where `window`
      // never receives a `pointerup`. Without this check the thumb would
      // keep following the cursor on any later hover.
      if (disabled || e.buttons === 0) {
        setDragState(null);
        return;
      }
      commitValue(index, valueFromClientX(e.clientX));
    };
    const endDrag = (e: PointerEvent) => {
      if (e.pointerId !== pointerId) return;
      setDragState(null);
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
    };
  }, [dragState, disabled, commitValue, valueFromClientX]);

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    const rawVal = valueFromClientX(e.clientX);
    const index: ThumbIndex =
      isRange && Math.abs(rawVal - values[1]) < Math.abs(rawVal - values[0]) ? 1 : 0;
    commitValue(index, rawVal);
    setDragState({ index, pointerId: e.pointerId });
    capturePointer(e.currentTarget, e.pointerId);
  };

  const handleThumbPointerDown = (e: React.PointerEvent<HTMLDivElement>, index: ThumbIndex) => {
    if (disabled) return;
    e.stopPropagation();
    e.currentTarget.focus();
    setDragState({ index, pointerId: e.pointerId });
    capturePointer(e.currentTarget, e.pointerId);
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

  const percentOf = (v: number) => {
    // Guard against max <= min (an invalid but only dev-warned config):
    // dividing by a zero or negative range would produce NaN/Infinity,
    // which would otherwise land directly in the thumb's `left` style and
    // the fill's left/width styles.
    const range = max - min;
    if (range <= 0) return 0;
    return ((v - min) / range) * 100;
  };

  /**
   * Stacking order for a thumb. The min thumb (index 0) sits above the max
   * thumb by default so that when both are at the same position (e.g. an
   * equal-value range), it stays independently clickable instead of the
   * later-rendered max thumb always winning the hit-test. Whichever thumb
   * is actively being dragged is raised above both.
   */
  const thumbZIndex = (index: ThumbIndex) => {
    if (dragState?.index === index) return 3;
    return index === 0 ? 2 : 1;
  };

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
        onPointerDown={handleTrackPointerDown}
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
            style={{ left: `${percentOf(values[index])}%`, zIndex: thumbZIndex(index) }}
            onPointerDown={(e) => handleThumbPointerDown(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

Slider.displayName = 'CyberUI.Slider';

export default Slider;
