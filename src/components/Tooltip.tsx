import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, isResponsiveObject, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/** Side of the trigger the tooltip panel is anchored to. */
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

/**
 * Props for the Tooltip component.
 */
export interface TooltipProps {
  /**
   * The trigger element. Must be a single React element that accepts an
   * `aria-describedby` attribute (native elements, `Button`, `Badge`, etc).
   * Wrap plain text/icons in a `<span tabIndex={0}>` so the trigger is
   * keyboard-focusable — mouse users open the tooltip on hover, keyboard users
   * on focus, and touch users by tapping the trigger (see below).
   *
   * On touch input (`pointerType: 'touch'`) a tap on the trigger toggles the
   * tooltip immediately (no `delay`), and a tap anywhere outside closes it.
   * This works for non-focusable triggers too. A tap still reaches the
   * trigger itself, so a `Button` trigger's `onClick` runs as usual.
   */
  children: React.ReactElement<{ 'aria-describedby'?: string }>;
  /** Content rendered inside the tooltip panel. */
  content: React.ReactNode;
  /**
   * Side of the trigger the tooltip is anchored to. Supports responsive values.
   * @default 'top'
   */
  placement?: ResponsiveValue<TooltipPlacement>;
  /**
   * Visual style, reusing the neon palette from Button/Card.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent';
  /**
   * Draws the neon glow (box-shadow) around the panel and arrow. Set `false`
   * for a quieter look next to dense content (tables, stat rows, icon
   * strips): the panel keeps its `variant`-colored border but drops the glow.
   * @default true
   */
  glow?: boolean;
  /**
   * Size of the tooltip panel (text size + padding). Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Delay in ms before the tooltip appears after hover/focus starts.
   * Hiding is always immediate so the panel doesn't linger. Touch taps open
   * immediately and ignore this value.
   *
   * The 200ms default suits standalone triggers (buttons, badges). For a
   * dense row of small targets (icon strips, table headers, step labels)
   * lower it to 0–100ms so moving across the row doesn't feel laggy.
   * @default 200
   */
  delay?: number;
  /**
   * Disables the tooltip — the trigger renders as-is with no hover, focus, or tap behavior.
   * @default false
   */
  disabled?: boolean;
  /**
   * Controlled visibility. When set, the tooltip stops managing its own open
   * state and `onOpenChange` becomes the only way to react to hover/focus/Escape/tap.
   */
  open?: boolean;
  /** Fired whenever hover, focus, blur, Escape, or a touch tap would change visibility. */
  onOpenChange?: (open: boolean) => void;
  /** Additional CSS classes for the tooltip panel. */
  className?: string;
  /** Id for the tooltip panel. Auto-generated when omitted. */
  id?: string;
}

/*
 * Placement maps for the panel and its arrow. Every entry fully defines the
 * position: `inset-auto` resets all four sides before the side(s) it sets,
 * `m-0` resets all margins before its one side margin, and both translate
 * axes are always set. A responsive `placement` stacks entries at different
 * breakpoints (e.g. `{ base: 'top', md: 'right' }` → top's classes plus
 * `md:`-prefixed right's), so an entry that left a property unset would
 * inherit the base entry's value and misplace the panel. This relies on
 * Tailwind v4 emitting shorthands (`inset`, `margin`) before their longhands
 * within a breakpoint, and prefixed breakpoints after unprefixed ones.
 * Shorthand resets (not four `*-auto`/`m*-0` classes) keep the generated
 * responsive safelist, and the CSS size budget, small.
 *
 * Keep these plain const object literals passed straight to
 * `getResponsiveClasses`: scripts/responsive-safelist.js reads them from here.
 */
const PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: 'inset-auto bottom-full left-1/2 -translate-x-1/2 translate-y-0 m-0 mb-2',
  bottom: 'inset-auto top-full left-1/2 -translate-x-1/2 translate-y-0 m-0 mt-2',
  left: 'inset-auto right-full top-1/2 translate-x-0 -translate-y-1/2 m-0 mr-2',
  right: 'inset-auto left-full top-1/2 translate-x-0 -translate-y-1/2 m-0 ml-2',
};

const ARROW_PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: 'inset-auto top-full left-1/2 -translate-x-1/2 translate-y-0 m-0 -mt-[5px]',
  bottom: 'inset-auto bottom-full left-1/2 -translate-x-1/2 translate-y-0 m-0 -mb-[5px]',
  left: 'inset-auto left-full top-1/2 translate-x-0 -translate-y-1/2 m-0 -ml-[5px]',
  right: 'inset-auto right-full top-1/2 translate-x-0 -translate-y-1/2 m-0 -mr-[5px]',
};

const BORDER_CLASSES: Record<'primary' | 'secondary' | 'accent', string> = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
};

const GLOW_CLASSES: Record<'primary' | 'secondary' | 'accent', string> = {
  primary: 'shadow-primary',
  secondary: 'shadow-secondary',
  accent: 'shadow-lg-accent',
};

/**
 * After a touch tap, browsers fire emulated compatibility events on the same
 * target (mouseenter/mouseover, focus, mousedown/up, click). Mouse/focus
 * "show" events arriving within this window of the last touch pointer event
 * are ignored so they can't re-open a tooltip the tap just closed.
 */
const TOUCH_EMULATION_WINDOW_MS = 1000;

/**
 * A neon-bordered popover that reveals supplemental info on hover, keyboard
 * focus, or (on touch devices) a tap on the trigger.
 *
 * @example
 * <Tooltip content="Initiates a full system diagnostic scan.">
 *   <Button variant="primary">Run Diagnostics</Button>
 * </Tooltip>
 *
 * @example
 * <Tooltip content="Cannot be undone." variant="accent" placement="right">
 *   <Badge variant="error">DANGER</Badge>
 * </Tooltip>
 */
const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  variant = 'primary',
  glow = true,
  size = 'md',
  delay = 200,
  disabled = false,
  open: controlledOpen,
  onOpenChange,
  className = '',
  id,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = (isControlled ? controlledOpen : internalOpen) && !disabled;

  const generatedId = useId();
  const tooltipId = id || `tooltip-${generatedId}`;

  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  /**
   * Timestamp of the last touch pointerdown/pointerup on the trigger, or null
   * if there hasn't been one. Starting at null (not 0) matters: under a fake
   * clock near 0 (`vi.useFakeTimers({ now: 0 })`), `Date.now() - 0` would sit
   * inside the emulation window and swallow every hover/focus.
   */
  const lastTouchRef = useRef<number | null>(null);
  /** True while the tooltip is open because of a touch tap (enables outside-tap close). */
  const [openedByTouch, setOpenedByTouch] = useState(false);

  const clearShowTimeout = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = undefined;
    }
  }, []);

  useEffect(() => clearShowTimeout, [clearShowTimeout]);

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) setInternalOpen(value);
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  const isTouchEmulation = useCallback(
    () =>
      lastTouchRef.current !== null &&
      Date.now() - lastTouchRef.current < TOUCH_EMULATION_WINDOW_MS,
    []
  );

  const handleShow = useCallback(() => {
    if (disabled || isTouchEmulation()) return;
    clearShowTimeout();
    showTimeoutRef.current = setTimeout(() => setOpen(true), delay);
  }, [disabled, delay, clearShowTimeout, setOpen, isTouchEmulation]);

  const handleHide = useCallback(() => {
    clearShowTimeout();
    setOpenedByTouch(false);
    setOpen(false);
  }, [clearShowTimeout, setOpen]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') lastTouchRef.current = Date.now();
  }, []);

  // Toggle on pointerup rather than pointerdown: a touch that turns into a
  // scroll fires pointercancel instead of pointerup, so scrolling past a
  // trigger doesn't open its tooltip.
  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType !== 'touch' || disabled) return;
      lastTouchRef.current = Date.now();
      if (isOpen) {
        handleHide();
      } else {
        clearShowTimeout();
        setOpenedByTouch(true);
        setOpen(true);
      }
    },
    [disabled, isOpen, handleHide, clearShowTimeout, setOpen]
  );

  // Reset the touch flag whenever the tooltip isn't open, including when a
  // controlled parent ignored the tap's onOpenChange(true) and opens it later
  // for some other reason — otherwise that later open would get outside-tap
  // dismissal it never asked for.
  useEffect(() => {
    if (!isOpen && openedByTouch) setOpenedByTouch(false);
  }, [isOpen, openedByTouch]);

  // Outside-tap dismissal, only for a tooltip a tap opened. Hover/focus-opened
  // tooltips already close via mouseleave/blur.
  useEffect(() => {
    if (!isOpen || !openedByTouch) return;
    const handleOutside = (e: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) handleHide();
    };
    // Capture phase, so another handler's stopPropagation can't keep it open.
    document.addEventListener('pointerdown', handleOutside, { capture: true });
    return () => document.removeEventListener('pointerdown', handleOutside, { capture: true });
  }, [isOpen, openedByTouch, handleHide]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') handleHide();
    },
    [handleHide]
  );

  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string =>
    getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.tooltip);

  // A responsive object without `base` (e.g. `{ md: 'right' }`) still needs
  // base positioning below its first breakpoint, so default it to 'top'.
  const resolvedPlacement: ResponsiveValue<TooltipPlacement> = isResponsiveObject(placement)
    ? { ...placement, base: placement.base ?? 'top' }
    : placement;
  const placementClasses = getResponsiveClasses(resolvedPlacement, PLACEMENT_CLASSES);
  const arrowPlacementClasses = getResponsiveClasses(resolvedPlacement, ARROW_PLACEMENT_CLASSES);

  const trigger = React.cloneElement(children, {
    'aria-describedby': isOpen ? tooltipId : undefined,
  });

  return (
    <span
      ref={wrapperRef}
      className="relative inline-flex w-fit"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
      onKeyDown={handleKeyDown}
    >
      {trigger}
      {isOpen && (
        <span
          role="tooltip"
          id={tooltipId}
          className={cn(
            'absolute z-50 overflow-hidden whitespace-nowrap rounded-md border bg-surface font-mono text-default pointer-events-none',
            getSizeClasses(size),
            placementClasses,
            BORDER_CLASSES[variant],
            glow && GLOW_CLASSES[variant],
            className
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,currentColor_0px,currentColor_1px,transparent_1px,transparent_3px)]"
          />
          <span className="relative">{content}</span>
          <span
            aria-hidden="true"
            className={cn(
              'absolute w-2.5 h-2.5 rotate-45 bg-surface border',
              arrowPlacementClasses,
              BORDER_CLASSES[variant],
              glow && GLOW_CLASSES[variant]
            )}
          />
        </span>
      )}
    </span>
  );
};

Tooltip.displayName = 'CyberUI.Tooltip';

export default Tooltip;
