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
   * keyboard-focusable — the tooltip only opens on hover or focus.
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
   * Size of the tooltip panel (text size + padding). Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Delay in ms before the tooltip appears after hover/focus starts.
   * Hiding is always immediate so the panel doesn't linger.
   * @default 200
   */
  delay?: number;
  /**
   * Disables the tooltip — the trigger renders as-is with no hover/focus behavior.
   * @default false
   */
  disabled?: boolean;
  /**
   * Controlled visibility. When set, the tooltip stops managing its own open
   * state and `onOpenChange` becomes the only way to react to hover/focus/Escape.
   */
  open?: boolean;
  /** Fired whenever hover, focus, blur, or Escape would change visibility. */
  onOpenChange?: (open: boolean) => void;
  /** Additional CSS classes for the tooltip panel. */
  className?: string;
  /** Id for the tooltip panel. Auto-generated when omitted. */
  id?: string;
}

const PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const ARROW_PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 -mt-[5px]',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-[5px]',
  left: 'left-full top-1/2 -translate-y-1/2 -ml-[5px]',
  right: 'right-full top-1/2 -translate-y-1/2 -mr-[5px]',
};

const VARIANT_CLASSES: Record<'primary' | 'secondary' | 'accent', string> = {
  primary: 'border-primary shadow-primary',
  secondary: 'border-secondary shadow-secondary',
  accent: 'border-accent shadow-lg-accent',
};

/**
 * A neon-bordered popover that reveals supplemental info on hover or keyboard focus.
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

  const handleShow = useCallback(() => {
    if (disabled) return;
    clearShowTimeout();
    showTimeoutRef.current = setTimeout(() => setOpen(true), delay);
  }, [disabled, delay, clearShowTimeout, setOpen]);

  const handleHide = useCallback(() => {
    clearShowTimeout();
    setOpen(false);
  }, [clearShowTimeout, setOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') handleHide();
    },
    [handleHide]
  );

  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string =>
    getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.tooltip);

  const basePlacement = isResponsiveObject(placement) ? placement.base ?? 'top' : placement;
  const placementClasses =
    getResponsiveClasses(placement, PLACEMENT_CLASSES) || PLACEMENT_CLASSES[basePlacement];

  const trigger = React.cloneElement(children, {
    'aria-describedby': isOpen ? tooltipId : undefined,
  });

  return (
    <span
      className="relative inline-flex w-fit"
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
            VARIANT_CLASSES[variant],
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
              ARROW_PLACEMENT_CLASSES[basePlacement],
              VARIANT_CLASSES[variant]
            )}
          />
        </span>
      )}
    </span>
  );
};

Tooltip.displayName = 'CyberUI.Tooltip';

export default Tooltip;
