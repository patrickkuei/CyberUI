import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
import {
  REDUCED_MOTION_DURATION,
  usePrefersReducedMotion,
} from "../hooks/usePrefersReducedMotion";
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
 * Built-in stand-in style shown when an image has no source.
 * - `gradient`: a static neon gradient panel
 * - `scanline`: the same panel with a scanline sweeping down it
 *   (the scanline is motionless while the user prefers reduced motion)
 */
export type ImageFallbackStyle = "gradient" | "scanline";

/**
 * Animation configuration for preview transitions.
 *
 * While the user prefers reduced motion (`prefers-reduced-motion: reduce`),
 * the preview opens and closes with an opacity-only fade: `openDuration` and
 * `closeDuration` are capped at 150ms, and the scan line and pulsing effects
 * are still.
 */
export interface ImageAnimationConfig {
  /** Duration of opening animation in milliseconds. Capped at 150ms under reduced motion. */
  openDuration?: number;
  /** Duration of closing animation in milliseconds. Capped at 150ms under reduced motion. */
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
  /**
   * Image source URL. When it is missing or empty and no `fallback` URL is
   * given, a built-in stand-in panel (see `fallbackStyle`) renders instead
   * of an `<img>`.
   */
  src?: string;
  /** Alternative text for accessibility (required) */
  alt: string;
  /** Size of the image container */
  size?: ResponsiveValue<ImageSize>;
  /**
   * Enable click-to-expand fullscreen preview on click. Ignored by the
   * built-in stand-in, which has nothing to enlarge.
   * @default true
   */
  preview?: boolean;
  /**
   * Fallback image URL when main image fails to load. It is also shown as the
   * image when `src` is missing or empty.
   */
  fallback?: string;
  /**
   * Style of the built-in stand-in rendered when there is no image source
   * (no `src` and no `fallback`). It has `role="img"` and `alt` as its
   * accessible name.
   * @default "gradient"
   */
  fallbackStyle?: ImageFallbackStyle;
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

interface ImageStandInProps {
  alt: string;
  fallbackStyle: ImageFallbackStyle;
  size: ResponsiveValue<ImageSize>;
  className: string;
}

/**
 * Built-in stand-in rendered by Image when there is nothing to load: a static
 * token-based gradient panel, plus a sweeping scanline for `scanline`.
 * With an empty `alt` the panel is decorative (`aria-hidden`, no role).
 * The sweep is a `.animate-scanline-sweep` element (stopped under reduced
 * motion by the reduced-motion block in `src/index.css`).
 */
const ImageStandIn: React.FC<ImageStandInProps> = ({
  alt,
  fallbackStyle,
  size,
  className,
}) => (
  <div
    {...(alt
      ? { role: "img", "aria-label": alt }
      : { "aria-hidden": true })}
    className={cn(
      "relative w-full aspect-video rounded-lg overflow-hidden border-2 border-accent/30 bg-linear-to-br from-primary/25 via-surface to-secondary/25",
      getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.card),
      className
    )}
  >
    <div
      className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-secondary/60"
      aria-hidden="true"
    />
    <div
      className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/60"
      aria-hidden="true"
    />
    {fallbackStyle === "scanline" && (
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-transparent to-accent/20 animate-scanline-sweep">
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent shadow-md-accent" />
        </div>
      </div>
    )}
  </div>
);

/**
 * CyberUI Image Component
 *
 * A cyberpunk-themed image component with click-to-expand preview functionality,
 * loading states, error handling, and smooth animations. With no image source
 * it renders a built-in gradient or scanline stand-in instead.
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
 *
 * @example
 * ```tsx
 * // No assets yet: built-in stand-in
 * <Image alt="Neon district" fallbackStyle="scanline" size="lg" />
 * ```
 */
const Image: React.FC<ImageProps> = memo(
  ({
    src,
    alt,
    size = "md",
    preview = true,
    fallback,
    fallbackStyle = "gradient",
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
    const reduceMotion = usePrefersReducedMotion();
    const openDuration = reduceMotion
      ? Math.min(animationConfig.openDuration, REDUCED_MOTION_DURATION)
      : animationConfig.openDuration;
    const closeDuration = reduceMotion
      ? Math.min(animationConfig.closeDuration, REDUCED_MOTION_DURATION)
      : animationConfig.closeDuration;

    // Component state
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isLoadPending, setIsLoadPending] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [fallbackActive, setFallbackActive] = useState(false);

    // What can be shown: the `src`, else the `fallback` URL (a missing `src`
    // counts as a failed load), else nothing (the stand-in renders).
    const hasSrc = Boolean(src);
    const hasImage = hasSrc || Boolean(fallback);
    const showFallback = fallbackActive || (!hasSrc && Boolean(fallback));
    // Nothing to load means nothing is loading; preview needs an image.
    const isLoading = isLoadPending && hasImage;
    const canPreview = preview && hasImage;

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
        setIsLoadPending(false);
        setHasError(false);
        onLoad?.(event);
      },
      [onLoad]
    );

    const handleImageError = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement>) => {
        setIsLoadPending(false);
        if (fallback && !showFallback) {
          // Show fallback instead of error
          setFallbackActive(true);
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
      if (canPreview && !hasError) {
        setIsOpening(true);
        setIsPreviewOpen(true);
        onPreviewOpen?.();

        setTimeout(() => {
          setIsOpening(false);
        }, openDuration);
      }
    }, [canPreview, hasError, onPreviewOpen, openDuration]);

    const closePreview = useCallback(() => {
      setIsClosing(true);
      onPreviewClose?.();

      setTimeout(() => {
        setIsPreviewOpen(false);
        setIsClosing(false);
      }, closeDuration);
    }, [onPreviewClose, closeDuration]);

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

    // The preview is only open while there is an image to show.
    const previewOpen = isPreviewOpen && hasImage;

    // The image went away (`src` and `fallback` both emptied) with the
    // preview open: close it now and report it once, unless a close was
    // already reported.
    useEffect(() => {
      if (isPreviewOpen && !hasImage) {
        setIsPreviewOpen(false);
        setIsOpening(false);
        setIsClosing(false);
        if (!isClosing) onPreviewClose?.();
      }
    }, [isPreviewOpen, hasImage, isClosing, onPreviewClose]);

    useEffect(() => {
      if (previewOpen) {
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
    }, [previewOpen, handleKeyDown]);

    // Memoized class calculations
    const imageClasses = useMemo(
      () =>
        cn(
          "relative rounded-lg overflow-hidden border-2 border-accent/30 transition-all duration-300 ease-in-out transform flex justify-center content-center",
          canPreview && !hasError
            ? "cursor-pointer hover:scale-105 motion-reduce:hover:scale-100 hover:border-accent hover:shadow-lg-accent focus:outline-none focus:ring-4 focus:ring-accent/50"
            : "",
          getSizeClasses(size),
          className
        ),
      [canPreview, hasError, getSizeClasses, size, className]
    );

    // Accessibility attributes
    const accessibilityProps = useMemo(
      () => ({
        role: canPreview ? "button" : "img",
        tabIndex: canPreview && !hasError ? 0 : -1,
        "aria-label": canPreview ? `${alt}. Click to enlarge` : alt,
        "aria-expanded": canPreview ? isPreviewOpen : undefined,
        onKeyDown:
          canPreview && !hasError
            ? (e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleImageClick();
                }
              }
            : undefined,
      }),
      [canPreview, hasError, alt, isPreviewOpen, handleImageClick]
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
                <div className="animate-pulse motion-reduce:animate-none bg-gradient-to-r from-accent/20 to-secondary/20 w-full h-full flex items-center justify-center">
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
                setFallbackActive(false);
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
          {canPreview && !isLoading && !hasError && (
            <div
              className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100"
              aria-hidden="true"
            >
              <div className="bg-accent/90 text-inverse px-3 py-1 rounded-md text-sm font-semibold tracking-wider uppercase">
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
        canPreview,
      ]
    );

    // Nothing to load: the built-in stand-in. Returned after every hook above
    // so the hook order never changes when `src` comes and goes.
    if (!hasImage) {
      return (
        <ImageStandIn
          alt={alt}
          fallbackStyle={fallbackStyle}
          size={size}
          className={className}
        />
      );
    }

    return (
      <>
        {imageElement}

        {/* Preview Overlay */}
        {previewOpen && createPortal(
          <div
            ref={overlayRef}
            className={`fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${previewClassName} ${
              isClosing
                ? "bg-black/0 backdrop-blur-none opacity-0 duration-300"
                : isOpening
                ? "bg-black/80 backdrop-blur-sm opacity-100 duration-500"
                : "bg-black/80 backdrop-blur-sm opacity-100 duration-300"
            } motion-reduce:duration-150`}
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
                className={`absolute transition-opacity duration-300 motion-reduce:duration-150 ${
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
                className={`absolute top-4 right-4 text-white hover:text-accent/80 transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 motion-reduce:rotate-0 motion-reduce:hover:scale-100 font-bold z-20 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform ${
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
                    className="absolute inset-0 text-accent opacity-0 hover:opacity-100 transition-opacity duration-200 animate-pulse motion-reduce:animate-none"
                  />
                </svg>
              </button>

              {/* Main Image Container */}
              <div
                className={`relative max-w-full max-h-full flex items-center justify-center transition-all ease-out motion-reduce:scale-100 motion-reduce:rotate-0 ${
                  isClosing
                    ? "scale-75 opacity-0 rotate-1 duration-300"
                    : isOpening
                    ? "scale-95 opacity-0 rotate-0 duration-500"
                    : "scale-100 opacity-100 rotate-0 duration-300"
                } motion-reduce:duration-150`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Glitch Effect Border */}
                {animationConfig.cyberpunkEffects && (
                  <div
                    className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 motion-reduce:duration-150 ${
                      isClosing
                        ? "border-transparent shadow-none"
                        : "border-accent shadow-lg-accent animate-pulse motion-reduce:animate-none"
                    }`}
                    aria-hidden="true"
                  />
                )}

                {/* Scanning Line Effect */}
                {animationConfig.cyberpunkEffects && (
                  <div
                    className={`absolute inset-0 overflow-hidden rounded-lg transition-opacity duration-300 motion-reduce:duration-150 z-10 ${
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
                  className={`max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg transition-all duration-300 motion-reduce:duration-150 ease-out ${
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
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 rounded-b-lg transition-all duration-300 motion-reduce:duration-150 motion-reduce:translate-y-0 ${
                    isClosing
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <p className="text-white text-sm font-medium truncate relative">
                    {showFallback ? `${alt} (fallback)` : alt}
                    {animationConfig.cyberpunkEffects && (
                      <span className="absolute inset-0 text-accent opacity-20 animate-pulse motion-reduce:animate-none">
                        {showFallback ? `${alt} (fallback)` : alt}
                      </span>
                    )}
                  </p>
                </div>

                {/* Corner Accents */}
                {animationConfig.cyberpunkEffects && (
                  <>
                    <div
                      className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 ${
                        isClosing ? "opacity-0 scale-0" : "opacity-60 scale-100"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 ${
                        isClosing ? "opacity-0 scale-0" : "opacity-60 scale-100"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 ${
                        isClosing ? "opacity-0 scale-0" : "opacity-60 scale-100"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 ${
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
