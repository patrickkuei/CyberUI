import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import type { ResponsiveValue } from "../utils/responsive";
import {
  getResponsiveClasses,
  RESPONSIVE_SIZE_MAPS,
} from "../utils/responsive";

/**
 * Size options for the Image component
 */
export type ImageSize = "sm" | "md" | "lg";

/**
 * Animation configuration for preview transitions
 */
export interface ImageAnimationConfig {
  /** Duration of opening animation in milliseconds */
  openDuration?: number;
  /** Duration of closing animation in milliseconds */
  closeDuration?: number;
  /** Enable/disable cyberpunk effects */
  cyberpunkEffects?: boolean;
}

/**
 * Callback functions for Image component events
 */
export interface ImageCallbacks {
  /** Fired when preview opens */
  onPreviewOpen?: () => void;
  /** Fired when preview closes */
  onPreviewClose?: () => void;
  /** Fired when image loads successfully */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  /** Fired when image fails to load */
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}


/**
 * Props for the CyberUI Image component
 *
 * @example
 * // Basic image with preview
 * <Image
 *   src="/cyber-city.jpg"
 *   alt="Cyberpunk cityscape"
 *   size="lg"
 * />
 *
 * @example
 * // Image with fallback and custom animation
 * <Image
 *   src={src}
 *   alt="Avatar"
 *   fallback="/default-avatar.png"
 *   animation={{ cyberpunkEffects: false }}
 * />
 */
export interface ImageProps
  extends Omit<
      React.ImgHTMLAttributes<HTMLImageElement>,
      "size" | "onLoad" | "onError"
    >,
    ImageCallbacks {
  /** Image source URL (required) */
  src: string;
  /** Alternative text for accessibility (required) */
  alt: string;
  /** Size of the image container */
  size?: ResponsiveValue<ImageSize>;
  /** Enable click-to-expand preview functionality */
  preview?: boolean;
  /** Fallback image URL when main image fails to load */
  fallback?: string;
  /** Custom loading placeholder component */
  placeholder?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Animation configuration */
  animation?: ImageAnimationConfig;
  /** Disable lazy loading (images load immediately) */
  eager?: boolean;
  /** Custom preview container styles */
  previewClassName?: string;
}

/**
 * Default animation configuration
 */
const DEFAULT_ANIMATION: Required<ImageAnimationConfig> = {
  openDuration: 50,
  closeDuration: 350,
  cyberpunkEffects: true,
};

/**
 * CyberUI Image Component
 *
 * A cyberpunk-themed image component with click-to-expand preview functionality,
 * loading states, error handling, and smooth animations.
 *
 * @example
 * ```tsx
 * <Image
 *   src="/cyber-city.jpg"
 *   alt="Cyberpunk cityscape"
 *   size="lg"
 *   onPreviewOpen={() => console.log('Preview opened')}
 * />
 * ```
 */
const Image: React.FC<ImageProps> = memo(
  ({
    src,
    alt,
    size = "md",
    preview = true,
    fallback,
    placeholder,
    className = "",
    animation,
    eager = false,
    previewClassName = "",
    onPreviewOpen,
    onPreviewClose,
    onLoad,
    onError,
    ...props
  }) => {
    // Animation configuration with defaults
    const animationConfig = { ...DEFAULT_ANIMATION, ...animation };

    // Component state
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

    // Refs
    const overlayRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    // Memoized size classes calculation
    const getSizeClasses = useCallback(
      (size: ResponsiveValue<ImageSize>): string => {
        return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.card);
      },
      []
    );

    // Image event handlers with callbacks
    const handleImageLoad = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement>) => {
        setIsLoading(false);
        setHasError(false);
        onLoad?.(event);
      },
      [onLoad]
    );

    const handleImageError = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement>) => {
        setIsLoading(false);
        if (fallback && !showFallback) {
          // Show fallback instead of error
          setShowFallback(true);
          setHasError(false);
        } else {
          // No fallback or fallback also failed
          setHasError(true);
        }
        onError?.(event);
      },
      [onError, fallback, showFallback]
    );

    // Preview controls
    const handleImageClick = useCallback(() => {
      if (preview && !hasError) {
        setIsOpening(true);
        setIsPreviewOpen(true);
        onPreviewOpen?.();

        setTimeout(() => {
          setIsOpening(false);
        }, animationConfig.openDuration);
      }
    }, [preview, hasError, onPreviewOpen, animationConfig.openDuration]);

    const closePreview = useCallback(() => {
      setIsClosing(true);
      onPreviewClose?.();

      setTimeout(() => {
        setIsPreviewOpen(false);
        setIsClosing(false);
      }, animationConfig.closeDuration);
    }, [onPreviewClose, animationConfig.closeDuration]);

    // Event handlers for preview overlay
    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === overlayRef.current || e.target === e.currentTarget) {
          closePreview();
        }
      },
      [closePreview]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closePreview();
        }
      },
      [closePreview]
    );

    useEffect(() => {
      if (isPreviewOpen) {
        document.addEventListener("keydown", handleKeyDown);

        // Store original values
        const originalOverflow = document.body.style.overflow;
        const originalScrollbarGutter =
          document.documentElement.style.scrollbarGutter;
        const originalPaddingRight = document.body.style.paddingRight;

        // Calculate scrollbar width to compensate
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        // Apply changes smoothly
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.documentElement.style.scrollbarGutter = "auto";

        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          // Always restore original values immediately to prevent page freeze
          document.body.style.overflow = originalOverflow;
          document.body.style.paddingRight = originalPaddingRight;
          document.documentElement.style.scrollbarGutter = originalScrollbarGutter;
        };
      }
    }, [isPreviewOpen, handleKeyDown]);

    // Memoized class calculations
    const imageClasses = useMemo(
      () =>
        [
          "relative",
          "rounded-lg",
          "overflow-hidden",
          "border-2",
          "border-accent/30",
          "transition-all",
          "duration-300",
          "ease-in-out",
          "transform",
          "flex",
          "justify-center",
          "content-center",
          preview && !hasError
            ? "cursor-pointer hover:scale-105 hover:border-accent hover:shadow-lg-accent focus:outline-none focus:ring-4 focus:ring-accent/50"
            : "",
          getSizeClasses(size),
          className,
        ]
          .filter(Boolean)
          .join(" "),
      [preview, hasError, getSizeClasses, size, className]
    );

    // Accessibility attributes
    const accessibilityProps = useMemo(
      () => ({
        role: preview ? "button" : "img",
        tabIndex: preview && !hasError ? 0 : -1,
        "aria-label": preview ? `${alt}. Click to enlarge` : alt,
        "aria-expanded": preview ? isPreviewOpen : undefined,
        onKeyDown:
          preview && !hasError
            ? (e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleImageClick();
                }
              }
            : undefined,
      }),
      [preview, hasError, alt, isPreviewOpen, handleImageClick]
    );

    // Main image element with enhanced accessibility and error handling
    const imageElement = useMemo(
      () => (
        <div
          className={imageClasses}
          onClick={handleImageClick}
          {...accessibilityProps}
        >
          {/* Loading State */}
          {isLoading && (
            <div
              className="absolute m-0 inset-0 flex items-center justify-center bg-surface border-2 border-accent/20"
              role="status"
              aria-label="Loading image"
            >
              {placeholder || (
                <div className="animate-pulse bg-gradient-to-r from-accent/20 to-secondary/20 w-full h-full flex items-center justify-center">
                  <div className="text-muted text-sm">Loading...</div>
                </div>
              )}
            </div>
          )}

          {/* Error State */}
          {hasError ? (
            <div
              className="flex items-center justify-center bg-surface border-2 border-error/30 text-error p-4 rounded-lg min-h-[100px]"
              role="alert"
              aria-label="Failed to load image"
            >
              <div className="text-center">
                <div className="text-2xl mb-2" aria-hidden="true">
                  ⚠
                </div>
                <div className="text-sm">Failed to load image</div>
              </div>
            </div>
          ) : showFallback ? (
            <img
              ref={imageRef}
              src={fallback}
              alt={`${alt} (fallback)`}
              className="w-full h-full m-0 object-cover transition-opacity duration-300"
              style={{ opacity: isLoading ? 0 : 1 }}
              onLoad={handleImageLoad}
              onError={() => {
                setHasError(true);
                setShowFallback(false);
              }}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              {...props}
            />
          ) : (
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className="w-full h-full m-0 object-cover transition-opacity duration-300"
              style={{ opacity: isLoading ? 0 : 1 }}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              {...props}
            />
          )}

          {/* Preview Overlay */}
          {preview && !isLoading && !hasError && (
            <div
              className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100"
              aria-hidden="true"
            >
              <div className="bg-accent/90 text-base px-3 py-1 rounded-md text-sm font-semibold tracking-wider uppercase">
                Preview
              </div>
            </div>
          )}
        </div>
      ),
      [
        imageClasses,
        handleImageClick,
        accessibilityProps,
        isLoading,
        placeholder,
        hasError,
        showFallback,
        fallback,
        alt,
        handleImageLoad,
        eager,
        props,
        src,
        handleImageError,
        preview,
      ]
    );

    return (
      <>
        {imageElement}

        {/* Preview Overlay */}
        {isPreviewOpen && createPortal(
          <div
            ref={overlayRef}
            className={`fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${previewClassName} ${
              isClosing
                ? "bg-black/0 backdrop-blur-none opacity-0 duration-300"
                : isOpening
                ? "bg-black/80 backdrop-blur-sm opacity-100 duration-500"
                : "bg-black/80 backdrop-blur-sm opacity-100 duration-300"
            }`}
            style={{
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              maxWidth: "none",
            }}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview: ${alt}`}
          >
            {/* Cyberpunk Grid Background */}
            {animationConfig.cyberpunkEffects && (
              <div
                className={`absolute transition-opacity duration-300 ${
                  isClosing ? "opacity-0" : "opacity-20"
                }`}
                style={{
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                }}
                aria-hidden="true"
              >
                <div
                  className="absolute"
                  style={{
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: `
                  linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
                `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            )}

            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={handleOverlayClick}
            >
              {/* Animated Close Button */}
              <button
                onClick={closePreview}
                className={`absolute top-4 right-4 text-white hover:text-accent/80 transition-all duration-300 font-bold z-20 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform ${
                  isClosing
                    ? "bg-black/0 scale-50 rotate-180 opacity-0"
                    : isOpening
                    ? "bg-black/50 scale-0 rotate-0 opacity-0 duration-500"
                    : "bg-black/50 hover:bg-accent/20 scale-100 rotate-0 opacity-100 hover:scale-110"
                }`}
                style={{ lineHeight: "1" }}
              >
                <svg
                  width="16"
                  height="16"
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
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute inset-0 text-accent opacity-0 hover:opacity-100 transition-opacity duration-200 animate-pulse"
                  />
                </svg>
              </button>

              {/* Main Image Container */}
              <div
                className={`relative max-w-full max-h-full flex items-center justify-center transition-all ease-out ${
                  isClosing
                    ? "scale-75 opacity-0 rotate-1 duration-300"
                    : isOpening
                    ? "scale-95 opacity-0 rotate-0 duration-500"
                    : "scale-100 opacity-100 rotate-0 duration-300"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Glitch Effect Border */}
                {animationConfig.cyberpunkEffects && (
                  <div
                    className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                      isClosing
                        ? "border-transparent shadow-none"
                        : "border-accent shadow-lg-accent animate-pulse"
                    }`}
                    aria-hidden="true"
                  />
                )}

                {/* Scanning Line Effect */}
                {animationConfig.cyberpunkEffects && (
                  <div
                    className={`absolute inset-0 overflow-hidden rounded-lg transition-opacity duration-300 z-10 ${
                      isClosing ? "opacity-0" : "opacity-100"
                    }`}
                    aria-hidden="true"
                  >
                    <div className="absolute top-0 left-0 w-full h-px animate-scan opacity-20">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-accent to-transparent shadow-lg-accent opacity-80"></div>
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
                    </div>
                  </div>
                )}

                <img
                  src={showFallback ? fallback : src}
                  alt={showFallback ? `${alt} (fallback)` : alt}
                  className={`max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg transition-all duration-300 ease-out ${
                    isClosing
                      ? "filter blur-sm brightness-50"
                      : "filter blur-0 brightness-100"
                  }`}
                  style={{
                    maxWidth: "95vw",
                    maxHeight: "95vh",
                    width: "auto",
                    height: "auto",
                  }}
                />

                {/* Caption with Cyber Effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 rounded-b-lg transition-all duration-300 ${
                    isClosing
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <p className="text-white text-sm font-medium truncate relative">
                    {showFallback ? `${alt} (fallback)` : alt}
                    {animationConfig.cyberpunkEffects && (
                      <span className="absolute inset-0 text-accent opacity-20 animate-pulse">
                        {showFallback ? `${alt} (fallback)` : alt}
                      </span>
                    )}
                  </p>
                </div>

                {/* Corner Accents */}
                {animationConfig.cyberpunkEffects && (
                  <>
                    <div
                      className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent transition-all duration-300 ${
                        isClosing ? "opacity-0 scale-0" : "opacity-60 scale-100"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent transition-all duration-300 ${
                        isClosing ? "opacity-0 scale-0" : "opacity-60 scale-100"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent transition-all duration-300 ${
                        isClosing ? "opacity-0 scale-0" : "opacity-60 scale-100"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent transition-all duration-300 ${
                        isClosing ? "opacity-0 scale-0" : "opacity-60 scale-100"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }
);

// Set display name for debugging
Image.displayName = "CyberUI.Image";

export default Image;
