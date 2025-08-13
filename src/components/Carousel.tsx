import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import Image from "./Image";
import type { ResponsiveValue } from "../utils/responsive";
import {
  getResponsiveClasses,
  RESPONSIVE_SIZE_MAPS,
} from "../utils/responsive";

/**
 * Size options for the Carousel component
 */
export type CarouselSize = "sm" | "md" | "lg";

/**
 * Transition effects for the Carousel
 */
export type CarouselTransition = "slide" | "fade" | "matrix" | "signal-glitch";

/**
 * Object fit options for images
 */
export type CarouselObjectFit = "cover" | "contain";

/**
 * Image data structure for Carousel
 */
export interface CarouselImageData {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional fallback image URL */
  fallbackSrc?: string;
  /** Optional caption */
  caption?: string;
}

/**
 * Lifecycle callback functions for Carousel events
 */
export interface CarouselCallbacks {
  /** Fired before slide change (fromIndex, toIndex) */
  onBeforeChange?: (fromIndex: number, toIndex: number) => void;
  /** Fired after slide change */
  onAfterChange?: (index: number) => void;
}

/**
 * Props for the CyberUI Carousel component
 */
export interface CarouselProps extends CarouselCallbacks {
  /** Array of images to display */
  images: CarouselImageData[];
  /** Current slide index (controlled) */
  currentIndex: number;
  /** Callback when slide changes */
  onChange: (index: number) => void;
  /** Size variant with responsive support */
  size?: ResponsiveValue<CarouselSize>;
  /** Enable auto-play functionality */
  autoPlay?: boolean;
  /** Auto-play interval in milliseconds */
  interval?: number;
  /** Enable infinite loop */
  infinite?: boolean;
  /** Transition effect */
  transition?: CarouselTransition;
  /** Image object fit behavior */
  objectFit?: CarouselObjectFit;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show slide indicators */
  showIndicators?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Disable click-to-expand on images */
  disableImagePreview?: boolean;
  /** Control signal-glitch effect frequency. Float (0.0-1.0) for probability, boolean for on/off */
  glitchRate?: number | boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  currentIndex,
  onChange,
  size = "md",
  autoPlay = true,
  interval = 3000,
  infinite = true,
  transition = "slide",
  objectFit = "cover",
  showArrows = true,
  showIndicators = true,
  className = "",
  disableImagePreview = false,
  glitchRate = 1.0,
  onBeforeChange,
  onAfterChange,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlayActive, setAutoPlayActive] = useState(autoPlay);
  const [shouldGlitch, setShouldGlitch] = useState(true);

  // Memoized classes
  const sizeClasses = useMemo(
    () => getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.carousel),
    [size]
  );

  // Image classes (objectFit handled by CSS selectors)
  const getImageClasses = "w-full h-full";

  // Handle slide change with lifecycle callbacks
  const handleSlideChange = useCallback(
    (newIndex: number) => {
      if (newIndex === currentIndex || isTransitioning) return;

      // Determine if this transition should use glitch effects (for signal-glitch transition)
      const shouldUseGlitch =
        transition === "signal-glitch" &&
        (() => {
          if (typeof glitchRate === "boolean") {
            return glitchRate;
          }
          // Float value: probability check
          return Math.random() < glitchRate;
        })();

      setShouldGlitch(shouldUseGlitch);
      setIsTransitioning(true);
      onBeforeChange?.(currentIndex, newIndex);

      // For slide transition, change immediately since CSS handles animation
      // For fade/matrix transitions, wait for transition to complete
      // For signal-glitch, use glitch timing only if effects are active, otherwise use fade timing
      const delay =
        transition === "slide"
          ? 0
          : transition === "signal-glitch" && shouldUseGlitch
          ? 600
          : 250;

      setTimeout(() => {
        onChange(newIndex);
        setIsTransitioning(false);
        onAfterChange?.(newIndex);
      }, delay);
    },
    [
      currentIndex,
      isTransitioning,
      onChange,
      onBeforeChange,
      onAfterChange,
      transition,
      glitchRate,
    ]
  );

  // Auto-play logic
  useEffect(() => {
    if (!autoPlayActive || images.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = infinite
        ? (currentIndex + 1) % images.length
        : Math.min(currentIndex + 1, images.length - 1);

      if (!infinite && nextIndex === images.length - 1) {
        setAutoPlayActive(false);
        return;
      }

      handleSlideChange(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [
    autoPlayActive,
    currentIndex,
    images.length,
    infinite,
    interval,
    handleSlideChange,
  ]);

  // Navigation handlers
  const goToPrevious = useCallback(() => {
    if (images.length <= 1) return;

    const prevIndex = infinite
      ? (currentIndex - 1 + images.length) % images.length
      : Math.max(currentIndex - 1, 0);

    setAutoPlayActive(false);
    handleSlideChange(prevIndex);
  }, [currentIndex, images.length, infinite, handleSlideChange]);

  const goToNext = useCallback(() => {
    if (images.length <= 1) return;

    const nextIndex = infinite
      ? (currentIndex + 1) % images.length
      : Math.min(currentIndex + 1, images.length - 1);

    setAutoPlayActive(false);
    handleSlideChange(nextIndex);
  }, [currentIndex, images.length, infinite, handleSlideChange]);

  const goToSlide = useCallback(
    (index: number) => {
      setAutoPlayActive(false);
      handleSlideChange(index);
    },
    [handleSlideChange]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // ============================================================================
  // TRANSITION RENDERING HELPERS
  // ============================================================================

  /**
   * Renders the slide transition (horizontal sliding)
   */
  const renderSlideTransition = () => (
    <div
      className="flex h-full transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
        willChange: "transform",
      }}
    >
      {images.map((image, index) => (
        <div key={index} className="w-full h-full flex-shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            fallback={image.fallbackSrc}
            className={getImageClasses}
            size="lg"
            preview={!disableImagePreview}
            loading={index <= 1 ? "eager" : "lazy"}
            onPreviewOpen={() => setAutoPlayActive(false)}
            onPreviewClose={() => setAutoPlayActive(autoPlay)}
          />
        </div>
      ))}
    </div>
  );

  /**
   * Renders fade and matrix transitions (stacked with opacity/transforms)
   */
  const renderFadeMatrixTransition = () => (
    <>
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const transitionStyle =
          transition === "fade"
            ? {
                opacity: isActive ? 1 : 0,
                transition: "opacity 500ms ease-in-out",
                willChange: "opacity",
              }
            : transition === "matrix"
            ? {
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0) skew(0deg) perspective(1000px)"
                  : isTransitioning
                  ? "scale(0.6) rotateX(35deg) rotateY(15deg) rotateZ(-3deg) translateZ(-80px) skew(5deg, 2deg) perspective(1000px)"
                  : "scale(0.92) rotateX(8deg) rotateY(2deg) translateZ(-20px) skew(1deg) perspective(1000px)",
                filter: isActive
                  ? "brightness(1) contrast(1) hue-rotate(0deg) saturate(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))"
                  : isTransitioning
                  ? "brightness(0.1) contrast(4) hue-rotate(270deg) saturate(3) blur(2px) drop-shadow(0 0 20px rgba(255, 0, 93, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 249, 0.6))"
                  : "brightness(0.7) contrast(1.5) hue-rotate(120deg) saturate(1.4) drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))",
                transition:
                  "all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                willChange: "transform, opacity, filter",
                boxShadow: isActive
                  ? `0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.15), 0 0 60px rgba(0, 255, 136, 0.2)`
                  : isTransitioning
                  ? `0 0 50px rgba(255, 0, 93, 1), 0 0 100px rgba(0, 255, 249, 0.8), 0 0 150px rgba(255, 251, 0, 0.6), inset 0 0 50px rgba(255, 0, 93, 0.3), inset 0 0 80px rgba(0, 255, 249, 0.2), 0 0 0 3px rgba(255, 0, 93, 0.8), 0 0 0 6px rgba(0, 255, 249, 0.6), 0 0 200px rgba(255, 251, 0, 0.3)`
                  : `0 0 20px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1), 0 0 40px rgba(0, 255, 136, 0.2)`,
              }
            : {};

        return (
          <div
            key={index}
            className="absolute inset-0 w-full h-full"
            style={{
              ...transitionStyle,
              pointerEvents: isActive
                ? ("auto" as React.CSSProperties["pointerEvents"])
                : ("none" as React.CSSProperties["pointerEvents"]),
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fallback={image.fallbackSrc}
              className={getImageClasses}
              size="lg"
              preview={!disableImagePreview}
              loading={index <= 1 ? "eager" : "lazy"}
              onPreviewOpen={() => setAutoPlayActive(false)}
              onPreviewClose={() => setAutoPlayActive(autoPlay)}
            />

            {/* Matrix-specific glitch effects */}
            {transition === "matrix" &&
              renderMatrixEffects(isActive, isTransitioning)}
          </div>
        );
      })}
    </>
  );

  /**
   * Renders signal glitch transition with analog interference effects
   */
  const renderSignalGlitchTransition = () => (
    <>
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isPrevious =
          index === (currentIndex - 1 + images.length) % images.length;

        // During signal glitch transition, use effects only if shouldGlitch is true
        const imageStyle =
          isTransitioning && transition === "signal-glitch" && shouldGlitch
            ? {
                opacity: isActive ? 1 : isPrevious ? 0.8 : 0,
                animation: isActive
                  ? "signal-image-flicker-in 1s ease-out forwards"
                  : isPrevious
                  ? "signal-image-flicker-out 1s ease-out forwards"
                  : "none",
                willChange: "opacity",
                pointerEvents: (isTransitioning && !isActive
                  ? "none"
                  : "auto") as React.CSSProperties["pointerEvents"],
                transform: isTransitioning ? "translateZ(0)" : "none", // Reduce jumping with hardware acceleration
              }
            : {
                opacity: isActive ? 1 : 0,
                transition: "opacity 250ms ease-in-out",
                willChange: "opacity",
                pointerEvents: (isActive
                  ? "auto"
                  : "none") as React.CSSProperties["pointerEvents"],
              };

        return (
          <div
            key={index}
            className="absolute inset-0 w-full h-full"
            style={imageStyle}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fallback={image.fallbackSrc}
              className={getImageClasses}
              size="lg"
              preview={
                !disableImagePreview &&
                !(
                  isTransitioning &&
                  transition === "signal-glitch" &&
                  shouldGlitch
                )
              }
              loading={index <= 1 ? "eager" : "lazy"}
              onPreviewOpen={() => setAutoPlayActive(false)}
              onPreviewClose={() => setAutoPlayActive(autoPlay)}
            />

            {/* Signal-Glitch specific effects */}
            {transition === "signal-glitch" &&
              isTransitioning &&
              shouldGlitch &&
              renderSignalGlitchEffects(isActive)}
          </div>
        );
      })}
    </>
  );

  // ============================================================================
  // EFFECT RENDERING HELPERS
  // ============================================================================

  /**
   * Renders Matrix transition visual effects
   */
  const renderMatrixEffects = (isActive: boolean, isTransitioning: boolean) => (
    <>
      {/* Enhanced scanning line effects */}
      {isTransitioning && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Different effects based on active state */}
          {isActive ? (
            // Active image gets subtle enhancement effects
            <div className="w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-30" />
          ) : (
            // Transitioning image gets more dramatic effects
            <div className="w-full h-full bg-gradient-to-b from-primary/10 via-secondary/5 to-accent/10 opacity-50" />
          )}
        </div>
      )}
    </>
  );

  /**
   * Renders Signal Glitch visual effects with chaotic analog interference
   */
  const renderSignalGlitchEffects = (isActive: boolean) => (
    <>
      {/* Background Grid Lines - Intensity varies by active state */}
      <div
        className={`absolute inset-0 pointer-events-none z-5 ${
          isActive ? "opacity-30" : "opacity-15"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "signal-glitch-blink 1s ease-in-out infinite",
          }}
        />
      </div>

      {/* Moving Scan Lines - Background */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Primary scan line */}
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"
          style={
            {
              top: "20%",
              animation: "signal-glitch-vertical-sweep 1s linear infinite",
              boxShadow:
                "0 0 8px rgba(255, 0, 93, 1), 0 0 16px rgba(255, 0, 93, 0.5)",
            } as React.CSSProperties
          }
        />

        {/* Secondary scan line */}
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60"
          style={
            {
              top: "60%",
              animation:
                "signal-glitch-vertical-sweep 1.5s linear infinite 0.3s",
              boxShadow: "0 0 6px rgba(0, 255, 249, 0.8)",
            } as React.CSSProperties
          }
        />

        {/* Tertiary scan line */}
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
          style={
            {
              top: "80%",
              animation:
                "signal-glitch-vertical-sweep 0.8s linear infinite 0.7s",
              boxShadow: "0 0 10px rgba(255, 251, 0, 0.9)",
            } as React.CSSProperties
          }
        />
      </div>

      {/* Fast Blinking Elements and Scanline Chaos */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {/* Rapid blinking overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent"
          style={{
            animation: "signal-glitch-blink 1s ease-in-out infinite",
          }}
        />

        {/* Chaotic horizontal scanlines */}
        <div
          className="absolute w-full h-px bg-accent/80 top-1/3"
          style={{
            animation: "signal-scanline-jitter 1s linear infinite",
            boxShadow: "0 0 4px rgba(255, 251, 0, 1)",
          }}
        />

        <div
          className="absolute w-full h-px bg-secondary/60 top-2/3"
          style={{
            animation: "signal-scanline-jitter 1s linear infinite 0.4s",
            boxShadow: "0 0 4px rgba(0, 255, 249, 0.8)",
          }}
        />
      </div>

      {/* RGB Channel Separation - Faster */}
      <div
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          animation: "signal-rgb-separation 1s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
      >
        <div className="absolute inset-0 bg-transparent" />
      </div>

      {/* Enhanced Static and Noise */}
      <div className="absolute inset-0 pointer-events-none z-50">
        {/* More chaotic static patterns */}
        <div
          className="absolute top-1/4 left-1/2 w-24 h-2 bg-white/30"
          style={{
            animation: "signal-glitch-blink 1s ease-in-out infinite 0.1s",
            transform: "translateX(-50%)",
            filter: "blur(0.8px)",
          }}
        />

        <div
          className="absolute top-3/4 right-1/4 w-20 h-1 bg-primary/40"
          style={{
            animation: "signal-glitch-blink 1s ease-in-out infinite 0.8s",
            filter: "blur(0.4px)",
          }}
        />

        {/* Brighter spikes */}
        <div
          className="absolute top-1/2 left-1/4 w-3 h-12 bg-accent/60"
          style={{
            animation: "signal-glitch-blink 1s ease-in-out infinite 0.5s",
            filter: "blur(1.5px)",
          }}
        />
      </div>
    </>
  );

  // ============================================================================
  // NAVIGATION RENDERING HELPERS
  // ============================================================================

  /**
   * Renders navigation arrows
   */
  const renderNavigationArrows = () =>
    showArrows &&
    images.length > 1 && (
      <>
        {/* Previous arrow */}
        <button
          onClick={goToPrevious}
          disabled={
            (!infinite && currentIndex === 0) ||
            (isTransitioning && transition === "signal-glitch" && shouldGlitch)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface/90 hover:bg-surface border-2 border-accent hover:border-primary text-accent hover:text-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus:ring-4 focus:ring-accent/50 backdrop-blur-sm hover:shadow-lg-primary transition-all duration-300 rounded-lg flex items-center justify-center"
          aria-label="Previous image"
        >
          <span className="text-2xl font-bold">&lt;</span>
        </button>

        {/* Next arrow */}
        <button
          onClick={goToNext}
          disabled={
            (!infinite && currentIndex === images.length - 1) ||
            (isTransitioning && transition === "signal-glitch" && shouldGlitch)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface/90 hover:bg-surface border-2 border-accent hover:border-primary text-accent hover:text-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus:ring-4 focus:ring-accent/50 backdrop-blur-sm hover:shadow-lg-primary transition-all duration-300 rounded-lg flex items-center justify-center"
          aria-label="Next image"
        >
          <span className="text-2xl font-bold">&gt;</span>
        </button>
      </>
    );

  /**
   * Renders slide indicators
   */
  const renderIndicators = () =>
    showIndicators &&
    images.length > 1 && (
      <div className="flex justify-center mt-4 space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={
              isTransitioning && transition === "signal-glitch" && shouldGlitch
            }
            className="group relative transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:cursor-not-allowed disabled:opacity-30"
            style={{
              width: "24px",
              height: "24px",
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Diamond shape using CSS clip-path */}
            <div
              className={`absolute inset-0 border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-primary bg-primary/30 shadow-lg-primary"
                  : "border-accent bg-surface/50 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-primary"
              }`}
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
            {/* Inner glow effect */}
            {index === currentIndex && (
              <div
                className="absolute inset-2 bg-primary/60 animate-pulse"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
            )}
            {/* Electric lines for active state */}
            {index === currentIndex && (
              <div className="absolute inset-0 opacity-80">
                <div
                  className="absolute top-1/2 left-2 right-2 h-0.5 bg-primary/80 animate-pulse"
                  style={{ transform: "translateY(-50%)" }}
                />
                <div
                  className="absolute left-1/2 top-2 bottom-2 w-0.5 bg-primary/80 animate-pulse"
                  style={{ transform: "translateX(-50%)" }}
                />
              </div>
            )}
          </button>
        ))}
      </div>
    );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  if (images.length === 0) {
    return (
      <div
        className={`${sizeClasses} w-full bg-surface border border-accent rounded-lg flex items-center justify-center ${className}`}
      >
        <p className="text-muted">No images to display</p>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main image container */}
      <div
        className={`relative w-full overflow-hidden rounded-lg border border-accent bg-surface ${sizeClasses}`}
      >
        {/* Cyberpunk frame effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-60"></div>

          {/* Scanning line animation */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1 animate-pulse"></div>
        </div>

        {/* Images Container */}
        <div
          className={`relative w-full h-full overflow-hidden carousel-${objectFit}`}
        >
          {transition === "slide" && renderSlideTransition()}
          {(transition === "fade" || transition === "matrix") &&
            renderFadeMatrixTransition()}
          {transition === "signal-glitch" && renderSignalGlitchTransition()}
        </div>

        {/* Caption overlay */}
        {currentImage.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white text-sm font-medium">
              {currentImage.caption}
            </p>
          </div>
        )}

        {/* Navigation arrows */}
        {renderNavigationArrows()}
      </div>

      {/* Indicators */}
      {renderIndicators()}
    </div>
  );
};

export default memo(Carousel);
