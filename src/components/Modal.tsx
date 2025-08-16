import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export interface ModalAnimationConfig {
  openDuration?: number;
  closeDuration?: number;
  crtEffects?: boolean;
}

export interface ModalCallbacks {
  onOpen?: () => void;
  onClose?: () => void;
  onCRTBootComplete?: () => void;
}

export interface ModalProps extends ModalCallbacks {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  // Action props (Ant Design pattern)
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
  confirmLoading?: boolean;
  showCancel?: boolean;
  showConfirm?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "fullscreen";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  animation?: ModalAnimationConfig;
  className?: string;
  overlayClassName?: string;
  showCloseButton?: boolean;
}

const DEFAULT_ANIMATION: Required<ModalAnimationConfig> = {
  openDuration: 600,
  closeDuration: 400,
  crtEffects: true,
};

const SIZE_CLASSES = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-none w-full h-full",
};

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
    size = "md",
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

    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(true);

    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = useCallback(() => {
      setIsClosing(true);

      setTimeout(() => {
        setIsClosing(false);
        setIsOpening(true);
        onClose();
      }, animationConfig.closeDuration);
    }, [onClose, animationConfig.closeDuration]);

    useEffect(() => {
      if (isOpen && !isClosing) {
        setIsOpening(true);
        onOpen?.();

        setTimeout(() => {
          setIsOpening(false);
          onCRTBootComplete?.();
        }, animationConfig.openDuration);
      }
    }, [
      isOpen,
      isClosing,
      onOpen,
      onCRTBootComplete,
      animationConfig.openDuration,
    ]);

    // Wrapped footer actions that use closeModal logic
    const wrappedCancel = useCallback(() => {
      onCancel?.();
      closeModal();
    }, [onCancel, closeModal]);

    const wrappedConfirm = useCallback(() => {
      onConfirm?.();
      closeModal();
    }, [onConfirm, closeModal]);

    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (
          closeOnOverlayClick &&
          (e.target === overlayRef.current || e.target === e.currentTarget)
        ) {
          closeModal();
        }
      },
      [closeModal, closeOnOverlayClick]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === "Escape") {
          closeModal();
        }
      },
      [closeModal, closeOnEscape]
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
        };
      }
    }, [isOpen, handleKeyDown]);

    const modalClasses = useMemo(
      () =>
        [
          "relative",
          "bg-surface",
          "border-2",
          "rounded-lg",
          "max-h-[90vh]",
          "overflow-hidden",
          "flex",
          "flex-col",
          "transform",
          "transition-all",
          "duration-300",
          SIZE_CLASSES[size],
          animationConfig.crtEffects && isOpening
            ? "animate-crt-power-on border-accent shadow-lg-accent"
            : animationConfig.crtEffects && isClosing
            ? "animate-crt-power-off border-accent shadow-lg-accent"
            : isClosing
            ? "scale-95 opacity-0 border-accent/20"
            : isOpening
            ? "scale-105 opacity-90 border-accent shadow-input-accent/50"
            : "scale-100 opacity-100 animate-rgb-glow",
          className,
        ]
          .filter(Boolean)
          .join(" "),
      [size, animationConfig.crtEffects, isClosing, isOpening, className]
    );

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
        }`}
        style={{
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-label={title ? `Modal: ${title}` : "Modal dialog"}
      >
        <div
          ref={modalRef}
          className={modalClasses}
          onClick={(e) => e.stopPropagation()}
        >
          {showCloseButton && (
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${
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
              className={`px-6 py-4 border-b border-accent/20 flex-shrink-0 transition-all duration-300 ${
                !isOpening
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <h2 className="text-lg font-semibold text-primary">{title}</h2>
            </div>
          )}

          <div
            className={`flex-1 overflow-auto p-6 transition-all duration-500 ${
              !isOpening
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {children}
          </div>

          {(footer || onCancel || onConfirm) && (
            <div
              className={`px-6 py-4 border-t border-accent/20 flex-shrink-0 transition-all duration-300 ${
                !isOpening
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              {footer ? (
                footer
              ) : (
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm font-mono">
                    &gt; ESC to abort
                  </span>
                  <div className="flex gap-3">
                    {showCancel && onCancel && (
                      <Button variant="ghost" size="sm" onClick={wrappedCancel}>
                        {cancelText}
                      </Button>
                    )}
                    {showConfirm && onConfirm && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={wrappedConfirm}
                        disabled={confirmLoading}
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
