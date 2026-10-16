import React, {
  useEffect,
  useRef,
  useCallback,
  memo,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { cn } from "../utils/cn";
import { useDialogBehavior } from "../hooks/useDialogBehavior";
import type { ResponsiveValue } from "../utils/responsive";
import { getResponsiveClasses, isResponsiveObject } from "../utils/responsive";

/**
 * Width step for `<Modal size>`.
 * - `sm` 448px, `md` 512px, `lg` 672px, `xl` 896px, `2xl` 1152px (max widths)
 * - `fullscreen`: fills the overlay (full width and height, still capped at 90vh)
 */
export type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "fullscreen";

/**
 * Controls CRT animation timing and effects.
 * Pass this as the `animation` prop on `<Modal>`:
 * ```tsx
 * <Modal animation={{ openDuration: 300, crtEffects: false }} ... />
 * ```
 *
 * While the user prefers reduced motion (`prefers-reduced-motion: reduce`),
 * open and close are a 150ms opacity-only fade: `openDuration` and
 * `closeDuration` are capped at 150ms, and the CRT effects and idle glow
 * pulse are replaced by the fade and a static glow.
 */
export interface ModalAnimationConfig {
  /** Duration of the open (CRT boot) animation in ms. Capped at 150ms under reduced motion. @default 600 */
  openDuration?: number;
  /** Duration of the close (CRT off) animation in ms. Capped at 150ms under reduced motion. @default 400 */
  closeDuration?: number;
  /** Enable CRT scanline power-on/off effects. @default true */
  crtEffects?: boolean;
}

/**
 * Lifecycle event handlers for the modal.
 * These are flat props on `<Modal>` — not nested under `animation`:
 * ```tsx
 * <Modal onOpen={track} onClose={cleanup} ... />
 * ```
 */
export interface ModalCallbacks {
  /** Fired when the modal begins opening (before animation completes). */
  onOpen?: () => void;
  /** Fired when the modal has fully closed. Alias of `onClose` for clarity. */
  onClose?: () => void;
  /** Fired when the CRT boot animation finishes and the modal is fully visible. */
  onCRTBootComplete?: () => void;
}

/**
 * A CRT-styled modal dialog with retro animation effects.
 *
 * @example
 * // Basic modal
 * <Modal isOpen={isOpen} onClose={close} title="System Alert">
 *   <p>Breach detected in sector 7.</p>
 * </Modal>
 *
 * @example
 * // Confirmation modal with custom actions
 * <Modal
 *   isOpen={isOpen}
 *   onClose={close}
 *   title="Confirm Override"
 *   onConfirm={handleConfirm}
 *   confirmText="EXECUTE"
 *   variant="danger"
 * >
 *   Are you sure you want to override safety protocols?
 * </Modal>
 */
export interface ModalProps extends ModalCallbacks {
  /**
   * Whether the modal is visible.
   */
  isOpen: boolean;
  /**
   * Callback when the modal requests to close.
   */
  onClose: () => void;
  /** Title text shown in the modal header. */
  title?: string;
  /** The content to be rendered inside the modal body. */
  children: React.ReactNode;
  /**
   * Custom footer content. Overrides the default Cancel/Confirm action buttons
   * (`onCancel`/`onConfirm` and related props are ignored when `footer` is set).
   */
  footer?: React.ReactNode;
  // Action props (Ant Design pattern) — rendered as the default footer when `footer` is not set.
  /** Fired when the Cancel button is clicked. Only rendered if provided. */
  onCancel?: () => void;
  /** Fired when the Confirm button is clicked. Only rendered if provided. */
  onConfirm?: () => void;
  /** Label for the Cancel button. @default 'Cancel' */
  cancelText?: string;
  /** Label for the Confirm button. @default 'Confirm' */
  confirmText?: string;
  /** Shows a loading state and disables the Confirm button. @default false */
  confirmLoading?: boolean;
  /** Whether to render the Cancel button (requires `onCancel`). @default true */
  showCancel?: boolean;
  /** Whether to render the Confirm button (requires `onConfirm`). @default true */
  showConfirm?: boolean;
  /**
   * Width of the modal. A static value or a responsive object.
   * - sm: 448px, md: 512px, lg: 672px, xl: 896px, 2xl: 1152px
   * - fullscreen: fills the overlay
   * Use `lg` or `xl` for content-heavy modals (forms, tables, multi-step flows).
   *
   * A responsive object switches size per breakpoint, including to and from
   * `fullscreen`: `{ base: 'fullscreen', lg: '2xl' }` is full screen on phones
   * and 1152px wide from 1024px up. A breakpoint left out inherits the next
   * smaller one; with no `base`, sizes below the first given breakpoint use
   * `lg`.
   * @default 'lg'
   */
  size?: ResponsiveValue<ModalSize>;
  /**
   * Visual variant of the modal.
   * - `default`: Standard RGB glow border.
   * - `danger`: Red error glow — use for destructive confirmations.
   * @default 'default'
   */
  variant?: "default" | "danger";
  /** Whether clicking the overlay backdrop closes the modal. @default true */
  closeOnOverlayClick?: boolean;
  /** Whether pressing Escape closes the modal. @default true */
  closeOnEscape?: boolean;
  /** CRT open/close animation timing and effects. */
  animation?: ModalAnimationConfig;
  /**
   * Additional CSS classes for the modal panel.
   * With a responsive `size`, a plain width override such as `max-w-3xl` only
   * replaces the base max width; breakpoint classes such as `lg:max-w-6xl`
   * still apply from that breakpoint up, so override them with the matching
   * prefixed class (`lg:max-w-3xl`).
   */
  className?: string;
  /** Additional CSS classes for the overlay backdrop. */
  overlayClassName?: string;
  /** Whether to render the header close (×) button. @default true */
  showCloseButton?: boolean;
}

const DEFAULT_ANIMATION: Required<ModalAnimationConfig> = {
  openDuration: 600,
  closeDuration: 400,
  crtEffects: true,
};

// Static `size`. These class lists are pinned by Modal.test.tsx: a plain
// string must render exactly what it did before responsive sizes existed.
const SIZE_CLASSES: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  "2xl": "max-w-6xl",
  fullscreen: "max-w-none w-full h-full",
};

// Responsive `size`. Every entry sets all three properties `fullscreen`
// changes (max-width, width, height), so a larger breakpoint fully replaces a
// smaller one's size: `{ base: 'fullscreen', lg: 'xl' }` must undo
// fullscreen's `w-full h-full` at `lg`, not just change the max width.
// `fullscreen` changes nothing else (corners and the 90vh cap are shared).
const RESPONSIVE_SIZE_CLASSES: Record<ModalSize, string> = {
  sm: "max-w-md w-auto h-auto",
  md: "max-w-lg w-auto h-auto",
  lg: "max-w-2xl w-auto h-auto",
  xl: "max-w-4xl w-auto h-auto",
  "2xl": "max-w-6xl w-auto h-auto",
  fullscreen: "max-w-none w-full h-full",
};

// Tailwind only generates classes it finds as literal text in the source, and
// getResponsiveClasses builds the prefixed ones (`lg:max-w-4xl`) at runtime.
// This list puts every class it can produce from RESPONSIVE_SIZE_CLASSES into
// the source; Modal.test.tsx fails if one is missing. Update both together.
// sm:max-w-md sm:max-w-lg sm:max-w-2xl sm:max-w-4xl sm:max-w-6xl sm:max-w-none sm:w-auto sm:w-full sm:h-auto sm:h-full
// md:max-w-md md:max-w-lg md:max-w-2xl md:max-w-4xl md:max-w-6xl md:max-w-none md:w-auto md:w-full md:h-auto md:h-full
// lg:max-w-md lg:max-w-lg lg:max-w-2xl lg:max-w-4xl lg:max-w-6xl lg:max-w-none lg:w-auto lg:w-full lg:h-auto lg:h-full
// xl:max-w-md xl:max-w-lg xl:max-w-2xl xl:max-w-4xl xl:max-w-6xl xl:max-w-none xl:w-auto xl:w-full xl:h-auto xl:h-full
// 2xl:max-w-md 2xl:max-w-lg 2xl:max-w-2xl 2xl:max-w-4xl 2xl:max-w-6xl 2xl:max-w-none 2xl:w-auto 2xl:w-full 2xl:h-auto 2xl:h-full

const getSizeClasses = (size: ResponsiveValue<ModalSize>): string =>
  isResponsiveObject(size)
    ? getResponsiveClasses({ ...size, base: size.base ?? "lg" }, RESPONSIVE_SIZE_CLASSES)
    : SIZE_CLASSES[size];

/**
 * A cinematic Cyberpunk modal with CRT boot-up effects, RGB glow, and immersive animations.
 * 
 * @example
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={() => setOpen(false)} 
 *   title="DANGER: SYSTEM OVERLOAD"
 *   onConfirm={initPurge}
 * >
 *   <p>Initiate emergency cooling sequence?</p>
 * </Modal>
 */
const Modal: React.FC<ModalProps> = memo(
  ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    onCancel,
    onConfirm,
    cancelText = "Cancel",
    confirmText = "Confirm",
    confirmLoading = false,
    showCancel = true,
    showConfirm = true,
    size = "lg",
    variant = "default",
    closeOnOverlayClick = true,
    closeOnEscape = true,
    animation,
    className = "",
    overlayClassName = "",
    showCloseButton = true,
    onOpen,
    onCRTBootComplete,
  }) => {
    const animationConfig = useMemo(
      () => ({ ...DEFAULT_ANIMATION, ...animation }),
      [animation]
    );

    const modalRef = useRef<HTMLDivElement>(null);
    const titleIdRef = useRef<string>(`modal-title-${Math.random().toString(36).slice(2)}`);
    const wasOpenRef = useRef(false);

    const {
      overlayRef,
      isOpening,
      isClosing,
      close: closeModal,
      handleOverlayClick,
    } = useDialogBehavior(isOpen, {
      closeDuration: animationConfig.closeDuration,
      openDuration: animationConfig.openDuration,
      closeOnEscape,
      closeOnOutsideClick: closeOnOverlayClick,
      lockScroll: true,
      onOpenSettle: () => {
        onCRTBootComplete?.();
        // Focus the modal container for accessibility
        modalRef.current?.focus();
      },
      onClose,
    });

    // onOpen fires once per genuine open, immediately — unlike
    // onOpenSettle/onCRTBootComplete above, which fire once the animation
    // finishes.
    useEffect(() => {
      if (isOpen && !wasOpenRef.current) {
        onOpen?.();
      }
      wasOpenRef.current = isOpen;
    }, [isOpen, onOpen]);

    // Wrapped footer actions that use closeModal logic
    const wrappedCancel = useCallback(() => {
      onCancel?.();
      closeModal();
    }, [onCancel, closeModal]);

    const wrappedConfirm = useCallback(() => {
      onConfirm?.();
      closeModal();
    }, [onConfirm, closeModal]);

    const modalClasses = useMemo(() => {
      const danger = variant === "danger";
      const border = danger ? "border-error" : "border-accent";
      const glow = danger ? "shadow-error" : "shadow-lg-accent";
      const inputGlow = danger ? "shadow-error/50" : "shadow-input-accent/50";
      const idleAnim = danger ? "animate-danger-glow" : "animate-rgb-glow";

      return cn(
        "relative bg-surface border-2 rounded-lg max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100",
        getSizeClasses(size),
        animationConfig.crtEffects && isOpening
          ? `animate-crt-power-on ${border} ${glow}`
          : animationConfig.crtEffects && isClosing
          ? `animate-crt-power-off ${border} ${glow}`
          : isClosing
          ? `scale-95 opacity-0 ${border}/20`
          : isOpening
          ? `scale-105 opacity-90 ${border} ${inputGlow}`
          : `scale-100 opacity-100 ${idleAnim}`,
        className
      );
    }, [size, animationConfig.crtEffects, isClosing, isOpening, className, variant]);

    if (!isOpen) return null;

    return createPortal(
      <div
        ref={overlayRef}
        className={`fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${overlayClassName} ${
          isClosing
            ? "bg-black/0 backdrop-blur-none opacity-0 duration-800"
            : isOpening
            ? "bg-black/30 backdrop-blur-md opacity-100 duration-500"
            : "bg-black/30 backdrop-blur-sm opacity-100 duration-300"
        } motion-reduce:duration-150`}
        style={{
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
        onClick={handleOverlayClick}
      >
        <div
          ref={modalRef}
          className={modalClasses}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleIdRef.current : undefined}
          tabIndex={-1}
        >
          {showCloseButton && (
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 motion-reduce:rotate-0 motion-reduce:hover:scale-100 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${
                isClosing
                  ? "scale-0 rotate-180 opacity-0"
                  : isOpening
                  ? "scale-0 opacity-0"
                  : "scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"
              }`}
              aria-label="Close modal"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="relative"
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

          {title && (
            <div
              className={cn(
                "px-6 py-4 border-b flex-shrink-0 transition-all duration-300 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100",
                variant === "danger" ? "border-error/20" : "border-accent/20",
                !isOpening ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              )}
            >
              <h2
                id={titleIdRef.current}
                className={cn("text-lg font-semibold", variant === "danger" ? "text-error" : "text-primary")}
              >
                {title}
              </h2>
            </div>
          )}

          <div
            className={`flex-1 overflow-auto p-6 transition-all duration-500 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
              !isOpening
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {children}
          </div>

          {(footer || onCancel || onConfirm) && (
            <div
              className={cn(
                "px-6 py-4 border-t flex-shrink-0 transition-all duration-300 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100",
                variant === "danger" ? "border-error/20" : "border-accent/20",
                !isOpening ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              )}
            >
              {footer ? (
                footer
              ) : (
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3">
                  <span className="text-muted text-xs font-mono hidden sm:block">
                    &gt; ESC to abort
                  </span>
                  <div className="flex gap-3 w-full sm:w-auto">
                    {showCancel && onCancel && (
                      <Button variant="ghost" size="sm" onClick={wrappedCancel} className="flex-1 sm:flex-none">
                        {cancelText}
                      </Button>
                    )}
                    {showConfirm && onConfirm && (
                      <Button
                        variant={variant === "danger" ? "danger" : "primary"}
                        size="sm"
                        onClick={wrappedConfirm}
                        disabled={confirmLoading}
                        className="flex-1 sm:flex-none"
                      >
                        {confirmText}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>,
      document.body
    );
  }
);

Modal.displayName = "CyberUI.Modal";

export default Modal;
