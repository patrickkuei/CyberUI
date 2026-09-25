import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Scrollbar background/border style variants
 */
export type ScrollbarVariant = "default" | "minimal" | "transparent";

/**
 * Configuration options for the cyberpunk scrollbar
 */
export interface UseCyberScrollbarOptions {
  /** Color theme for the scrollbar glow effects */
  glowColor?: "primary" | "secondary" | "accent";
  /** Scroll velocity sensitivity multiplier (higher = more responsive) */
  sensitivity?: number;
  /** Disable the scrollbar completely */
  disabled?: boolean;
  /** Apply to page-level scrolling instead of container scrolling */
  pageLevel?: boolean;
  /** Predefined style variant for the scrollbar background (auto-switches to transparent on mobile) */
  variant?: ScrollbarVariant;
  /** Custom CSS classes to apply to the scrollbar container */
  className?: string;
}

/**
 * Internal scroll state tracking
 */
interface ScrollState {
  isScrolling: boolean;
  direction: "up" | "down" | null;
  velocity: number;
  scrollDistance: number;
}

const CONFIG = {
  MOBILE_BREAKPOINT: 768,
  STABLE_TIMEOUT: 1000,
  MOBILE_HIDE_DELAY: 1000,
  VELOCITY_MULTIPLIER: 2,
  DISTANCE_THRESHOLD: 100,
  MAX_ANIMATION_SPEED: 5,
  MIN_GLOW_DURATION: 150,
} as const;

/**
 * Custom hook that creates a cyberpunk-themed scrollbar with animated arrows
 * that respond to scroll velocity and direction.
 * 
 * @example
 * ```tsx
 * const scrollRef = useCyberScrollbar({
 *   glowColor: 'accent',
 *   sensitivity: 3,
 *   variant: 'minimal'
 * });
 * 
 * return <div ref={scrollRef} className="h-64 overflow-auto">...</div>;
 * ```
 *
 * @param options Configuration options for the scrollbar
 * @returns Ref to attach to scrollable container (not used for pageLevel: true)
 */
export const useCyberScrollbar = (options: UseCyberScrollbarOptions = {}) => {
  const {
    glowColor = "primary",
    sensitivity = 2,
    disabled = false,
    pageLevel,
    variant = "default",
    className = "",
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(Date.now());
  const lastScrollTop = useRef<number>(0);
  const stableTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const animationTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  // Scroll state lives in refs: nothing here is rendered, so scrolling must
  // never cause a React re-render of the host component.
  const scrollStateRef = useRef<ScrollState>({
    isScrolling: false,
    direction: null,
    velocity: 0,
    scrollDistance: 0,
  });
  const hasEverScrolledRef = useRef(false);
  // Mobile hides the bar between scrolls; visibility is a `display` toggle on
  // the existing element, never a rebuild.
  const showScrollbarRef = useRef(
    typeof window === "undefined" ? false : window.innerWidth >= CONFIG.MOBILE_BREAKPOINT
  );
  // Arrow/line nodes cached when the scrollbar DOM is built, reused per frame.
  const arrowNodesRef = useRef<HTMLElement[]>([]);
  const lineNodesRef = useRef<HTMLElement[]>([]);
  const currentArrowCountRef = useRef(0);
  const [effectivePageLevel, setEffectivePageLevel] = useState(pageLevel ?? false);

  useEffect(() => {
    if (pageLevel !== undefined) {
      setEffectivePageLevel(pageLevel);
    } else {
      const timeoutId = setTimeout(() => {
        const isRefAttached = containerRef.current !== null;
        setEffectivePageLevel(!isRefAttached);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [pageLevel]);

  const getVariantStyles = useCallback((variant: ScrollbarVariant) => {
    switch (variant) {
      case "transparent":
        return {
          background: "transparent",
          backdropFilter: "none",
          border: "none",
          boxShadow: "none",
        };
      case "minimal":
        return {
          background: "rgba(26, 26, 46, 0.6)",
          backdropFilter: "blur(3px)",
          border: "1px solid rgba(255, 0, 93, 0.2)",
          boxShadow: "0 0 5px rgba(255, 0, 93, 0.2)",
        };
      case "default":
      default:
        return {
          background: "linear-gradient(180deg, rgba(26, 26, 46, 0.95), rgba(45, 45, 68, 0.95))",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 0, 93, 0.3)",
          boxShadow: "0 0 10px rgba(255, 0, 93, 0.3), inset 0 0 10px rgba(255, 0, 93, 0.1)",
        };
    }
  }, []);
  const getResponsiveSizes = useCallback(() => {
    const isMobile = window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
    return {
      isMobile,
      scrollbarWidth: isMobile ? 12 : 16,
      arrowSize: isMobile ? 10 : 14,
      lineSize: isMobile ? 8 : 12,
      arrowGap: isMobile ? 2 : 4,
    };
  }, []);

  const calculateMaxArrows = useCallback((scrollbarHeight: number, arrowSize: number, arrowGap: number, lineSize: number) => {
    const spaceForLines = (lineSize + arrowGap) * 2;
    const paddingSpace = arrowGap * 4;
    const remainingHeight = scrollbarHeight - spaceForLines - paddingSpace;
    const spacePerDirection = remainingHeight / 2;
    return Math.floor(spacePerDirection / (arrowSize + arrowGap));
  }, []);

  const hideNativeScrollbars = useCallback((container?: HTMLElement) => {
    if (effectivePageLevel) {
      if (!document.querySelector("#cyber-page-scrollbar-styles")) {
        const style = document.createElement("style");
        style.id = "cyber-page-scrollbar-styles";
        style.textContent = `
          html::-webkit-scrollbar { display: none; }
          html { scrollbar-width: none; -ms-overflow-style: none; }
        `;
        document.head.appendChild(style);
      }
    } else if (container) {
      container.style.scrollbarWidth = "none";
      // @ts-expect-error IE/Edge property
      container.style.msOverflowStyle = "none";

      if (!document.querySelector("#cyber-scrollbar-styles")) {
        const style = document.createElement("style");
        style.id = "cyber-scrollbar-styles";
        style.textContent = `
          .cyber-scrollbar-container::-webkit-scrollbar { display: none; }
        `;
        document.head.appendChild(style);
      }
      container.classList.add("cyber-scrollbar-container");
    }
  }, [effectivePageLevel]);

  const createElement = useCallback((
    type: "arrow" | "line",
    direction: "up" | "down" | undefined,
    index: number,
    sizes: ReturnType<typeof getResponsiveSizes>
  ) => {
    const element = document.createElement("div");
    const isArrow = type === "arrow";

    if (isArrow && direction) {
      element.className = `cyber-arrow cyber-arrow-${direction} cyber-arrow-${index}`;
      element.innerHTML = direction === "up" ? "▲" : "▼";
    } else {
      element.className = `cyber-line cyber-line-${index}`;
      element.innerHTML = "=";
    }

    const filterCss = sizes.isMobile
      ? "none"
      : `drop-shadow(0 0 6px var(--color-${glowColor}))
         drop-shadow(0 0 12px var(--color-${glowColor}))
         drop-shadow(0 0 18px var(--color-${glowColor}))`;

    element.style.cssText = `
      font-size: ${isArrow ? sizes.arrowSize : sizes.lineSize}px;
      color: var(--color-${glowColor});
      opacity: 0;
      transition: all 0.2s ease;
      filter: ${filterCss};
      line-height: 1;
      font-weight: bold;
    `;
    return element;
  }, [glowColor]);

  const getScrollbarPosition = useCallback(() => {
    if (effectivePageLevel) {
      return {
        height: window.innerHeight,
        top: 0,
        right: 0,
      };
    } else {
      const container = containerRef.current!;
      const rect = container.getBoundingClientRect();
      return {
        height: rect.height,
        top: rect.top,
        right: window.innerWidth - rect.right,
      };
    }
  }, [effectivePageLevel]);

  const createScrollbarUI = useCallback(() => {
    if (disabled) return;
    if (!effectivePageLevel && !containerRef.current) return;

    if (scrollbarRef.current) {
      scrollbarRef.current.remove();
    }
    const needsScrollbar = effectivePageLevel
      ? document.body.scrollHeight > window.innerHeight
      : containerRef.current!.scrollHeight > containerRef.current!.clientHeight;

    if (!needsScrollbar) return;

    const sizes = getResponsiveSizes();
    const position = getScrollbarPosition();
    const maxArrows = calculateMaxArrows(position.height, sizes.arrowSize, sizes.arrowGap, sizes.lineSize);

    hideNativeScrollbars(effectivePageLevel ? undefined : containerRef.current || undefined);
    const scrollbarElement = document.createElement("div");
    scrollbarElement.className = `cyber-scrollbar ${className}`.trim();

    const isMobile = sizes.isMobile;
    const effectiveVariant = isMobile ? "transparent" : variant;
    const variantStyles = getVariantStyles(effectiveVariant);

    Object.assign(scrollbarElement.style, {
      position: "fixed",
      top: `${position.top}px`,
      right: `${position.right}px`,
      width: `${sizes.scrollbarWidth}px`,
      height: `${position.height}px`,
      pointerEvents: "none",
      zIndex: "9999",
      display: showScrollbarRef.current ? "flex" : "none",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: `${sizes.arrowGap}px`,
      background: variantStyles.background,
      backdropFilter: variantStyles.backdropFilter,
      borderRadius: effectivePageLevel ? "4px 0 0 4px" : "4px",
      border: variantStyles.border,
      boxShadow: variantStyles.boxShadow,
    });

    // Add elements in visual order: up arrows → pause lines → down arrows
    for (let i = 0; i < maxArrows; i++) {
      scrollbarElement.appendChild(createElement("arrow", "up", i, sizes));
    }
    for (let i = 0; i < 2; i++) {
      scrollbarElement.appendChild(createElement("line", undefined, i, sizes));
    }
    for (let i = 0; i < maxArrows; i++) {
      scrollbarElement.appendChild(createElement("arrow", "down", i, sizes));
    }

    document.body.appendChild(scrollbarElement);
    scrollbarRef.current = scrollbarElement;
    arrowNodesRef.current = Array.from(scrollbarElement.querySelectorAll<HTMLElement>(".cyber-arrow"));
    lineNodesRef.current = Array.from(scrollbarElement.querySelectorAll<HTMLElement>(".cyber-line"));
    const updatePosition = effectivePageLevel ? undefined : () => {
      const container = containerRef.current;
      if (container) {
        const newRect = container.getBoundingClientRect();
        scrollbarElement.style.top = `${newRect.top}px`;
        scrollbarElement.style.right = `${window.innerWidth - newRect.right}px`;
        scrollbarElement.style.height = `${newRect.height}px`;
      }
    };

    if (updatePosition) {
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition);
    }

    return () => {
      scrollbarElement.remove();
      if (scrollbarRef.current === scrollbarElement) {
        scrollbarRef.current = null;
        arrowNodesRef.current = [];
        lineNodesRef.current = [];
      }
      if (!effectivePageLevel && containerRef.current) {
        containerRef.current.classList.remove("cyber-scrollbar-container");
      }
      if (updatePosition) {
        window.removeEventListener("resize", updatePosition);
        window.removeEventListener("scroll", updatePosition);
      }
    };
  }, [disabled, effectivePageLevel, hideNativeScrollbars, getScrollbarPosition, createElement, getResponsiveSizes, calculateMaxArrows, getVariantStyles, variant, className]);

  const calculateArrowCount = useCallback((velocity: number, scrollDistance: number) => {
    const baseArrowCount = Math.max(1, Math.min(3, Math.ceil(velocity * 0.8)));
    const distanceArrowCount = Math.floor(scrollDistance / CONFIG.DISTANCE_THRESHOLD);
    return baseArrowCount + distanceArrowCount;
  }, []);

  const selectRelevantArrows = useCallback((arrows: Element[], direction: string, totalArrowCount: number) => {
    const allDirectionArrows = Array.from(arrows).filter(arrow =>
      arrow.classList.contains(`cyber-arrow-${direction}`)
    );

    const count = Math.min(totalArrowCount, allDirectionArrows.length);
    return direction === 'up'
      ? allDirectionArrows.slice(-count)
      : allDirectionArrows.slice(0, count);
  }, []);

  const animateArrows = useCallback((arrowsToAnimate: Element[], velocity: number, direction: string) => {
    const animationSpeed = Math.min(velocity * sensitivity, CONFIG.MAX_ANIMATION_SPEED);
    const isMobile = window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
    const glowDuration = Math.max(300 / animationSpeed, CONFIG.MIN_GLOW_DURATION) * (isMobile ? 1.5 : 1);
    const sequenceDelay = Math.max(40, 80 / animationSpeed) * (isMobile ? 1.25 : 1);

    const arrows = direction === "up" ? [...arrowsToAnimate].reverse() : arrowsToAnimate;

    arrows.forEach(arrow => {
      (arrow as HTMLElement).style.opacity = "0.3";
    });
    arrows.forEach((arrow, index) => {
      const startDelay = index * sequenceDelay;
      const glowTimeout = setTimeout(() => {
        (arrow as HTMLElement).style.opacity = "1";
        const fadeTimeout = setTimeout(() => {
          (arrow as HTMLElement).style.opacity = "0.3";
        }, glowDuration);
        animationTimeoutsRef.current.push(fadeTimeout);
      }, startDelay);
      animationTimeoutsRef.current.push(glowTimeout);
    });
  }, [sensitivity]);

  const updateScrollbarVisuals = useCallback(() => {
    if (!scrollbarRef.current) return;

    const { isScrolling, direction, velocity, scrollDistance } = scrollStateRef.current;
    const arrows = arrowNodesRef.current;
    const lines = lineNodesRef.current;

    if (isScrolling && direction) {
      lines.forEach(line => {
        (line as HTMLElement).style.opacity = "0";
      });

      const totalArrowCount = calculateArrowCount(velocity, scrollDistance);

      if (totalArrowCount !== currentArrowCountRef.current) {
        animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
        animationTimeoutsRef.current = [];

        arrows.forEach(arrow => {
          (arrow as HTMLElement).style.opacity = "0";
        });

        const relevantArrows = selectRelevantArrows(arrows, direction, totalArrowCount);
        animateArrows(relevantArrows, velocity, direction);

        currentArrowCountRef.current = totalArrowCount;
      }

    } else {
      animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      animationTimeoutsRef.current = [];
      currentArrowCountRef.current = 0;

      arrows.forEach(arrow => {
        (arrow as HTMLElement).style.opacity = "0";
      });

      if (hasEverScrolledRef.current) {
        lines.forEach(line => {
          (line as HTMLElement).style.opacity = "0.6";
        });
      }
    }
  }, [animateArrows, calculateArrowCount, selectRelevantArrows]);

  const rafIdRef = useRef<number | null>(null);

  const processScroll = useCallback(() => {
    if (disabled) return;
    if (!effectivePageLevel && !containerRef.current) return;

    const now = Date.now();
    const currentScrollTop = effectivePageLevel ? window.scrollY : containerRef.current!.scrollTop;

    const timeDelta = now - lastScrollTime.current;
    const scrollDelta = currentScrollTop - lastScrollTop.current;

    const rawVelocity = Math.abs(scrollDelta) / Math.max(timeDelta, 1);
    const velocity = rawVelocity * CONFIG.VELOCITY_MULTIPLIER;
    const direction = scrollDelta > 0 ? "down" : scrollDelta < 0 ? "up" : null;

    hasEverScrolledRef.current = true;

    const isMobile = window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
    if (isMobile && !showScrollbarRef.current) {
      showScrollbarRef.current = true;
      if (scrollbarRef.current) scrollbarRef.current.style.display = "flex";
    }

    const prev = scrollStateRef.current;
    scrollStateRef.current = {
      isScrolling: true,
      direction,
      velocity,
      scrollDistance: prev.direction !== direction ? Math.abs(scrollDelta) : prev.scrollDistance + Math.abs(scrollDelta),
    };
    updateScrollbarVisuals();

    if (stableTimeoutRef.current) clearTimeout(stableTimeoutRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    stableTimeoutRef.current = setTimeout(() => {
      animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      animationTimeoutsRef.current = [];

      scrollStateRef.current = {
        ...scrollStateRef.current,
        isScrolling: false,
        velocity: 0,
        scrollDistance: 0,
      };
      updateScrollbarVisuals();

      if (isMobile) {
        hideTimeoutRef.current = setTimeout(() => {
          showScrollbarRef.current = false;
          if (scrollbarRef.current) scrollbarRef.current.style.display = "none";
        }, CONFIG.MOBILE_HIDE_DELAY);
      }
    }, CONFIG.STABLE_TIMEOUT);

    lastScrollTime.current = now;
    lastScrollTop.current = currentScrollTop;
  }, [disabled, effectivePageLevel, updateScrollbarVisuals]);

  // Throttle scroll handling to 1 per animation frame
  const handleScroll = useCallback(() => {
    if (rafIdRef.current !== null) return;
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      processScroll();
    });
  }, [processScroll]);
  useEffect(() => {
    if (disabled) return;
    if (!effectivePageLevel && !containerRef.current) return;

    const cleanup = createScrollbarUI();
    const target = effectivePageLevel ? window : containerRef.current!;

    target.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      target.removeEventListener("scroll", handleScroll);
      if (stableTimeoutRef.current) clearTimeout(stableTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      cleanup?.();
    };
  }, [createScrollbarUI, handleScroll, disabled, effectivePageLevel]);

  return containerRef;
};
