import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useId,
  memo,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

/** Edge of the viewport the drawer slides in from. */
export type DrawerSide = "left" | "right" | "top" | "bottom";

/**
 * Props for the Drawer component.
 *
 * @example
 * <Drawer isOpen={isOpen} onClose={close} side="right" title="Filters">
 *   <FilterForm />
 * </Drawer>
 */
export interface DrawerProps {
  /** Whether the drawer is visible. */
  isOpen: boolean;
  /** Callback when the drawer requests to close (overlay click, Escape, or the close button). */
  onClose: () => void;
  /**
   * Which viewport edge the drawer slides in from. `left`/`right` size the
   * panel by width; `top`/`bottom` size it by height.
   * @default 'right'
   */
  side?: DrawerSide;
  /** Title text shown in the drawer header. */
  title?: string;
  /** The content to be rendered inside the drawer body. */
  children: React.ReactNode;
  /**
   * Width of the panel for `side="left"`/`"right"`, or height for
   * `side="top"`/`"bottom"`.
   * - sm: 18rem (288px) / 14rem (224px)
   * - md: 24rem (384px) / 18rem (288px)
   * - lg: 32rem (512px) / 24rem (384px)
   * - xl: 40rem (640px) / 32rem (512px)
   * - full: 100% of the viewport dimension
   * @default 'md'
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * Visual variant of the drawer.
   * - `default`: Standard RGB glow border.
   * - `danger`: Red error glow — use for destructive confirmations.
   * @default 'default'
   */
  variant?: "default" | "danger";
  /** Whether clicking the overlay backdrop closes the drawer. @default true */
  closeOnOverlayClick?: boolean;
  /** Whether pressing Escape closes the drawer. @default true */
  closeOnEscape?: boolean;
  /** Whether to render the header close (×) button. @default true */
  showCloseButton?: boolean;
  /**
   * Accessible label for the drawer when no `title` is set. Ignored if
   * `title` is provided (the title supplies the accessible name instead).
   * @default 'Drawer'
   */
  ariaLabel?: string;
  /** Additional CSS classes for the drawer panel. */
  className?: string;
  /** Additional CSS classes for the overlay backdrop. */
  overlayClassName?: string;
}

const WIDTH_CLASSES: Record<NonNullable<DrawerProps["size"]>, string> = {
  sm: "w-72",
  md: "w-96",
  lg: "w-[32rem]",
  xl: "w-[40rem]",
  full: "w-full",
};

const HEIGHT_CLASSES: Record<NonNullable<DrawerProps["size"]>, string> = {
  sm: "h-56",
  md: "h-72",
  lg: "h-96",
  xl: "h-[32rem]",
  full: "h-full",
};

const POSITION_CLASSES: Record<DrawerSide, string> = {
  left: "inset-y-0 left-0 border-r-2",
  right: "inset-y-0 right-0 border-l-2",
  top: "inset-x-0 top-0 border-b-2",
  bottom: "inset-x-0 bottom-0 border-t-2",
};

const HIDDEN_TRANSFORM: Record<DrawerSide, string> = {
  left: "-translate-x-full",
  right: "translate-x-full",
  top: "-translate-y-full",
  bottom: "translate-y-full",
};

const OPEN_DURATION = 350;
const CLOSE_DURATION = 250;

/**
 * A cyberpunk-styled slide-in side panel, for mobile nav, filters, or detail
 * views without a full page navigation. Shares Modal's controlled `isOpen`/
 * `onClose` pattern, overlay/focus-restore/scroll-lock behavior, and RGB
 * glow border treatment — sliding in from an edge instead of scaling from
 * the center.
 *
 * @example
 * // Right-side filter panel
 * <Drawer isOpen={isOpen} onClose={() => setOpen(false)} title="Filter Results">
 *   <FilterForm />
 * </Drawer>
 *
 * @example
 * // Bottom sheet, danger variant
 * <Drawer
 *   isOpen={isOpen}
 *   onClose={close}
 *   side="bottom"
 *   size="sm"
 *   variant="danger"
 *   title="Confirm Purge"
 * >
 *   <p>This will wipe all cached credentials.</p>
 * </Drawer>
 */
const Drawer: React.FC<DrawerProps> = memo(
  ({
    isOpen,
    onClose,
    side = "right",
    title,
    children,
    size = "md",
    variant = "default",
    closeOnOverlayClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    ariaLabel = "Drawer",
    className = "",
    overlayClassName = "",
  }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(true);

    const overlayRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const titleId = useId();

    const closeDrawer = useCallback(() => {
      setIsClosing(true);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = setTimeout(() => {
        setIsClosing(false);
        setIsOpening(true);
        onClose();
      }, CLOSE_DURATION);
    }, [onClose]);

    useEffect(() => {
      if (isOpen && !isClosing) {
        previouslyFocusedRef.current = (document.activeElement as HTMLElement) || null;
        setIsOpening(true);

        if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
        openTimeoutRef.current = setTimeout(() => {
          setIsOpening(false);
          panelRef.current?.focus();
        }, OPEN_DURATION);
      }
    }, [isOpen, isClosing]);

    useEffect(() => {
      return () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      };
    }, []);

    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (
          closeOnOverlayClick &&
          (e.target === overlayRef.current || e.target === e.currentTarget)
        ) {
          closeDrawer();
        }
      },
      [closeDrawer, closeOnOverlayClick]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === "Escape") {
          closeDrawer();
        }
      },
      [closeDrawer, closeOnEscape]
    );

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.body.style.overflow = originalOverflow;
          document.body.style.paddingRight = "";
          previouslyFocusedRef.current?.focus?.();
        };
      }
    }, [isOpen, handleKeyDown]);

    const panelClasses = useMemo(() => {
      const danger = variant === "danger";
      const border = danger ? "border-error" : "border-accent";
      const glow = danger ? "shadow-error" : "shadow-lg-accent";
      const idleAnim = danger ? "animate-danger-glow" : "animate-rgb-glow";
      const isHorizontal = side === "left" || side === "right";

      return cn(
        "fixed z-50 bg-surface flex flex-col transition-transform ease-out",
        POSITION_CLASSES[side],
        isHorizontal ? WIDTH_CLASSES[size] : HEIGHT_CLASSES[size],
        isHorizontal ? "max-w-full" : "max-h-full",
        border,
        isClosing
          ? `${HIDDEN_TRANSFORM[side]} duration-[250ms]`
          : isOpening
          ? `${HIDDEN_TRANSFORM[side]} duration-0`
          : `translate-x-0 translate-y-0 duration-300 ${glow} ${idleAnim}`,
        className
      );
    }, [side, size, variant, isClosing, isOpening, className]);

    if (!isOpen) return null;

    return createPortal(
      <div
        ref={overlayRef}
        className={cn(
          "fixed inset-0 z-50 transition-all ease-out",
          isClosing
            ? "bg-black/0 backdrop-blur-none opacity-0 duration-[250ms]"
            : isOpening
            ? "bg-black/0 backdrop-blur-none opacity-0 duration-0"
            : "bg-black/30 backdrop-blur-sm opacity-100 duration-300",
          overlayClassName
        )}
        onClick={handleOverlayClick}
      >
        <div
          ref={panelRef}
          className={panelClasses}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          aria-label={title ? undefined : ariaLabel}
          tabIndex={-1}
        >
          {(title || showCloseButton) && (
            <div
              className={cn(
                "flex items-center justify-between gap-4 px-6 py-4 border-b flex-shrink-0",
                variant === "danger" ? "border-error/20" : "border-accent/20"
              )}
            >
              {title && (
                <h2
                  id={titleId}
                  className={cn(
                    "text-lg font-semibold",
                    variant === "danger" ? "text-error" : "text-primary"
                  )}
                >
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={closeDrawer}
                  className="text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ml-auto"
                  aria-label="Close drawer"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M12 4L4 12M4 4L12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          <div className="flex-1 overflow-auto p-6">{children}</div>
        </div>
      </div>,
      document.body
    );
  }
);

Drawer.displayName = "CyberUI.Drawer";

export default Drawer;
