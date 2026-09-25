import { useEffect, useRef } from "react";

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
  /**
   * Apply to page-level scrolling instead of container scrolling. When omitted
   * (the default), the hook decides on its first post-commit effect: container
   * mode if the returned ref is attached by then, page-level otherwise.
   */
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


const getVariantStyles = (variant: ScrollbarVariant) => {
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
};

const getResponsiveSizes = () => {
  const isMobile = window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
  return {
    isMobile,
    scrollbarWidth: isMobile ? 12 : 16,
    arrowSize: isMobile ? 10 : 14,
    lineSize: isMobile ? 8 : 12,
    arrowGap: isMobile ? 2 : 4,
  };
};

type ResponsiveSizes = ReturnType<typeof getResponsiveSizes>;

const calculateMaxArrows = (scrollbarHeight: number, sizes: ResponsiveSizes) => {
  const { arrowSize, arrowGap, lineSize } = sizes;
  const spaceForLines = (lineSize + arrowGap) * 2;
  const paddingSpace = arrowGap * 4;
  const remainingHeight = scrollbarHeight - spaceForLines - paddingSpace;
  const spacePerDirection = remainingHeight / 2;
  return Math.max(0, Math.floor(spacePerDirection / (arrowSize + arrowGap)));
};

const calculateArrowCount = (velocity: number, scrollDistance: number) => {
  const baseArrowCount = Math.max(1, Math.min(3, Math.ceil(velocity * 0.8)));
  const distanceArrowCount = Math.floor(scrollDistance / CONFIG.DISTANCE_THRESHOLD);
  return baseArrowCount + distanceArrowCount;
};

const getGlowFilter = (glowColor: string, isMobile: boolean) =>
  isMobile
    ? "none"
    : [6, 12, 18].map((blur) => `drop-shadow(0 0 ${blur}px var(--color-${glowColor}))`).join(" ");

const hideNativeScrollbars = (container: HTMLElement | null) => {
  if (!container) {
    if (!document.querySelector("#cyber-page-scrollbar-styles")) {
      const style = document.createElement("style");
      style.id = "cyber-page-scrollbar-styles";
      style.textContent = `
        html::-webkit-scrollbar { display: none; }
        html { scrollbar-width: none; -ms-overflow-style: none; }
      `;
      document.head.appendChild(style);
    }
    return;
  }

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
};

/**
 * Custom hook that creates a cyberpunk-themed scrollbar with animated arrows
 * that respond to scroll velocity and direction.
 *
 * The scrollbar follows its scroll target: it is added and removed as content
 * grows and shrinks, and re-styled when the viewport crosses the 768px mobile
 * breakpoint. With `prefers-reduced-motion: reduce` the velocity glow and arrow
 * sequences are skipped and transitions are disabled.
 *
 * **Page-level or container?** Resolved in this order:
 * 1. `pageLevel: true` — page-level scrolling; the returned ref is unused.
 * 2. `pageLevel: false` — container mode. The container may attach later (for
 *    example when it renders conditionally): the scrollbar is created as soon as
 *    the ref points at an element and removed when it detaches.
 * 3. `pageLevel` omitted — decided once, in the first post-commit effect:
 *    container mode if the ref is attached by then, page-level otherwise. The
 *    decision is not revisited; pass `pageLevel={false}` for a container that
 *    renders after the first commit.
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
  const lastScrollTime = useRef<number>(Date.now());
  const lastScrollTop = useRef<number>(0);
  const stableTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const animationTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  // Scroll frames and resize/content re-evaluation each own a frame handle, so
  // neither can cancel or swallow the other.
  const rafIdRef = useRef<number | null>(null);
  const resizeRafRef = useRef<number | null>(null);
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
  const currentArrowCountRef = useRef(0);
  // The page-level decision when `pageLevel` is omitted; made once, in the
  // first post-commit effect, then kept.
  const autoPageLevelRef = useRef<boolean | null>(null);
  // Lets the every-commit effect below hand a late-attached (or replaced)
  // container to the live scrollbar without re-running the main effect.
  const syncContainerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (pageLevel !== undefined) {
      autoPageLevelRef.current = null;
    } else if (autoPageLevelRef.current === null) {
      autoPageLevelRef.current = containerRef.current === null;
    }
    if (disabled) return;

    const isPage = pageLevel ?? autoPageLevelRef.current === true;
    const motionQuery =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    let reducedMotion = motionQuery?.matches ?? false;

    let container: HTMLDivElement | null = null;
    let element: HTMLDivElement | null = null;
    // Node lists cached when the scrollbar DOM is (re)built; reused per frame.
    let arrowsUp: HTMLElement[] = [];
    let arrowsDown: HTMLElement[] = [];
    let arrows: HTMLElement[] = [];
    let lines: HTMLElement[] = [];
    let layoutIsMobile: boolean | null = null;
    let resizeObserver: ResizeObserver | undefined;
    let mutationObserver: MutationObserver | undefined;

    const clearAnimationTimeouts = () => {
      animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      animationTimeoutsRef.current = [];
    };

    // ---- DOM construction -------------------------------------------------

    const styleNode = (node: HTMLElement, isArrow: boolean, sizes: ResponsiveSizes) => {
      node.style.fontSize = `${isArrow ? sizes.arrowSize : sizes.lineSize}px`;
      node.style.filter = getGlowFilter(glowColor, sizes.isMobile);
    };

    const createNode = (
      type: "arrow" | "line",
      direction: "up" | "down" | undefined,
      index: number,
      sizes: ResponsiveSizes
    ) => {
      const node = document.createElement("div");
      const isArrow = type === "arrow";

      if (isArrow && direction) {
        node.className = `cyber-arrow cyber-arrow-${direction} cyber-arrow-${index}`;
        node.innerHTML = direction === "up" ? "▲" : "▼";
      } else {
        node.className = `cyber-line cyber-line-${index}`;
        node.innerHTML = "=";
      }

      Object.assign(node.style, {
        color: `var(--color-${glowColor})`,
        opacity: "0",
        transition: reducedMotion ? "none" : "all 0.2s ease",
        lineHeight: "1",
        fontWeight: "bold",
      });
      styleNode(node, isArrow, sizes);
      return node;
    };

    // Visual order: up arrows → pause lines → down arrows. The arrow count
    // depends on the scrollbar height and size class, so this reruns whenever
    // either changes; the cached lists are replaced with it.
    const buildChildren = (sizes: ResponsiveSizes, maxArrows: number) => {
      if (!element) return;

      const up = Array.from({ length: maxArrows }, (_, i) => createNode("arrow", "up", i, sizes));
      const pause = Array.from({ length: 2 }, (_, i) => createNode("line", undefined, i, sizes));
      const down = Array.from({ length: maxArrows }, (_, i) => createNode("arrow", "down", i, sizes));
      element.replaceChildren(...up, ...pause, ...down);

      arrowsUp = up;
      arrowsDown = down;
      arrows = [...up, ...down];
      lines = pause;

      clearAnimationTimeouts();
      currentArrowCountRef.current = 0;
      updateScrollbarVisuals();
    };

    // ---- Scroll visuals ---------------------------------------------------

    const animateArrows = (arrowsToAnimate: HTMLElement[], velocity: number, direction: string) => {
      const animationSpeed = Math.min(velocity * sensitivity, CONFIG.MAX_ANIMATION_SPEED);
      const isMobile = window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
      const glowDuration = Math.max(300 / animationSpeed, CONFIG.MIN_GLOW_DURATION) * (isMobile ? 1.5 : 1);
      const sequenceDelay = Math.max(40, 80 / animationSpeed) * (isMobile ? 1.25 : 1);

      const ordered = direction === "up" ? [...arrowsToAnimate].reverse() : arrowsToAnimate;

      ordered.forEach(arrow => {
        arrow.style.opacity = "0.3";
      });
      ordered.forEach((arrow, index) => {
        const startDelay = index * sequenceDelay;
        const glowTimeout = setTimeout(() => {
          arrow.style.opacity = "1";
          const fadeTimeout = setTimeout(() => {
            arrow.style.opacity = "0.3";
          }, glowDuration);
          animationTimeoutsRef.current.push(fadeTimeout);
        }, startDelay);
        animationTimeoutsRef.current.push(glowTimeout);
      });
    };

    const selectRelevantArrows = (direction: string, totalArrowCount: number) => {
      const directional = direction === "up" ? arrowsUp : arrowsDown;
      const count = Math.min(totalArrowCount, directional.length);
      if (count === 0) return [];
      return direction === "up" ? directional.slice(-count) : directional.slice(0, count);
    };

    const updateScrollbarVisuals = () => {
      if (!element) return;

      const { isScrolling, direction, velocity, scrollDistance } = scrollStateRef.current;

      // With reduced motion the velocity glow and arrow sequence are skipped;
      // the idle branch keeps the arrows dark and the pause lines visible.
      if (isScrolling && direction && !reducedMotion) {
        lines.forEach(line => {
          line.style.opacity = "0";
        });

        const totalArrowCount = calculateArrowCount(velocity, scrollDistance);

        if (totalArrowCount !== currentArrowCountRef.current) {
          clearAnimationTimeouts();

          arrows.forEach(arrow => {
            arrow.style.opacity = "0";
          });

          animateArrows(selectRelevantArrows(direction, totalArrowCount), velocity, direction);

          currentArrowCountRef.current = totalArrowCount;
        }
      } else {
        clearAnimationTimeouts();
        currentArrowCountRef.current = 0;

        arrows.forEach(arrow => {
          arrow.style.opacity = "0";
        });

        if (hasEverScrolledRef.current) {
          lines.forEach(line => {
            line.style.opacity = "0.6";
          });
        }
      }
    };

    // ---- Layout: (re)evaluated on mount, resize and content changes ------

    const measurePosition = () => {
      if (isPage || !container) {
        return { height: window.innerHeight, top: 0, right: 0 };
      }
      const rect = container.getBoundingClientRect();
      return {
        height: rect.height,
        top: rect.top,
        right: window.innerWidth - rect.right,
      };
    };

    const needsScrollbar = () =>
      isPage
        ? document.body.scrollHeight > window.innerHeight
        : container !== null && container.scrollHeight > container.clientHeight;

    const layout = () => {
      if (!element) return;

      const sizes = getResponsiveSizes();
      const position = measurePosition();
      const crossedBreakpoint = layoutIsMobile !== sizes.isMobile;

      if (crossedBreakpoint) {
        // Desktop always shows the bar; mobile only while the user is scrolling.
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        showScrollbarRef.current = !sizes.isMobile || scrollStateRef.current.isScrolling;
      }

      const variantStyles = getVariantStyles(sizes.isMobile ? "transparent" : variant);
      Object.assign(element.style, {
        position: "fixed",
        top: `${position.top}px`,
        right: `${position.right}px`,
        width: `${sizes.scrollbarWidth}px`,
        height: `${position.height}px`,
        pointerEvents: "none",
        zIndex: "9999",
        transition: reducedMotion ? "none" : "",
        display: showScrollbarRef.current ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: `${sizes.arrowGap}px`,
        background: variantStyles.background,
        backdropFilter: variantStyles.backdropFilter,
        borderRadius: isPage ? "4px 0 0 4px" : "4px",
        border: variantStyles.border,
        boxShadow: variantStyles.boxShadow,
      });

      const maxArrows = calculateMaxArrows(position.height, sizes);
      if (lines.length === 0 || arrowsUp.length !== maxArrows) {
        buildChildren(sizes, maxArrows);
      } else if (crossedBreakpoint) {
        arrows.forEach(node => styleNode(node, true, sizes));
        lines.forEach(node => styleNode(node, false, sizes));
      }

      layoutIsMobile = sizes.isMobile;
    };

    const removeElement = () => {
      element?.remove();
      element = null;
      arrowsUp = [];
      arrowsDown = [];
      arrows = [];
      lines = [];
      layoutIsMobile = null;
      clearAnimationTimeouts();
      currentArrowCountRef.current = 0;
    };

    const evaluate = () => {
      if (!needsScrollbar()) {
        removeElement();
        return;
      }

      if (!element) {
        hideNativeScrollbars(isPage ? null : container);
        element = document.createElement("div");
        element.className = `cyber-scrollbar ${className}`.trim();
        document.body.appendChild(element);
      }
      layout();
    };

    // Coalesce bursts of resize / content-change notifications into one frame.
    const scheduleEvaluate = () => {
      if (resizeRafRef.current !== null) return;
      resizeRafRef.current = requestAnimationFrame(() => {
        resizeRafRef.current = null;
        evaluate();
      });
    };

    const observeTargets = () => {
      if (typeof ResizeObserver === "undefined") return;
      resizeObserver ??= new ResizeObserver(scheduleEvaluate);
      resizeObserver.disconnect();
      if (isPage) {
        resizeObserver.observe(document.documentElement);
        resizeObserver.observe(document.body);
      } else if (container) {
        resizeObserver.observe(container);
        Array.from(container.children).forEach(child => resizeObserver?.observe(child));
      }
    };

    // ---- Scroll handling --------------------------------------------------

    const processScroll = () => {
      if (!isPage && !container) return;

      const now = Date.now();
      const currentScrollTop = isPage ? window.scrollY : container!.scrollTop;

      const timeDelta = now - lastScrollTime.current;
      const scrollDelta = currentScrollTop - lastScrollTop.current;

      const rawVelocity = Math.abs(scrollDelta) / Math.max(timeDelta, 1);
      const velocity = rawVelocity * CONFIG.VELOCITY_MULTIPLIER;
      const direction = scrollDelta > 0 ? "down" : scrollDelta < 0 ? "up" : null;

      hasEverScrolledRef.current = true;

      const isMobile = window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
      if (isMobile && !showScrollbarRef.current) {
        showScrollbarRef.current = true;
        if (element) element.style.display = "flex";
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
        clearAnimationTimeouts();

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
            if (element) element.style.display = "none";
          }, CONFIG.MOBILE_HIDE_DELAY);
        }
      }, CONFIG.STABLE_TIMEOUT);

      lastScrollTime.current = now;
      lastScrollTop.current = currentScrollTop;
    };

    // Throttle scroll handling to 1 per animation frame
    const handleScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        processScroll();
      });
    };

    // A container scrollbar is fixed-positioned over its container, so it
    // follows the container when the page itself scrolls.
    const updatePosition = () => {
      if (!element || !container) return;
      const rect = container.getBoundingClientRect();
      element.style.top = `${rect.top}px`;
      element.style.right = `${window.innerWidth - rect.right}px`;
      element.style.height = `${rect.height}px`;
    };

    // ---- Reduced motion ---------------------------------------------------

    const applyMotionPreference = () => {
      const transition = reducedMotion ? "none" : "all 0.2s ease";
      arrows.forEach(node => {
        node.style.transition = transition;
      });
      lines.forEach(node => {
        node.style.transition = transition;
      });
      if (element) element.style.transition = reducedMotion ? "none" : "";

      // Drop any in-flight sequence and re-apply the current state.
      clearAnimationTimeouts();
      currentArrowCountRef.current = 0;
      updateScrollbarVisuals();
    };

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      applyMotionPreference();
    };

    // ---- Attach / detach --------------------------------------------------

    const attachContainer = (el: HTMLDivElement) => {
      container = el;
      lastScrollTop.current = el.scrollTop;
      el.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("scroll", updatePosition, { passive: true });
      if (typeof MutationObserver !== "undefined") {
        // New or removed children change what the container should observe.
        mutationObserver = new MutationObserver(() => {
          observeTargets();
          scheduleEvaluate();
        });
        mutationObserver.observe(el, { childList: true });
      }
      observeTargets();
      evaluate();
    };

    const detachContainer = () => {
      if (!container) return;
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updatePosition);
      container.classList.remove("cyber-scrollbar-container");
      mutationObserver?.disconnect();
      mutationObserver = undefined;
      resizeObserver?.disconnect();
      container = null;

      if (stableTimeoutRef.current) clearTimeout(stableTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      scrollStateRef.current = { isScrolling: false, direction: null, velocity: 0, scrollDistance: 0 };
      removeElement();
    };

    // Container mode: follow whatever element the ref currently points at.
    // Runs after every commit, so a container that renders late (or is
    // replaced or removed) is picked up without waiting on a timer.
    const syncContainer = () => {
      if (isPage) return;
      const next = containerRef.current;
      if (next === container) return;
      detachContainer();
      if (next) attachContainer(next);
    };

    window.addEventListener("resize", scheduleEvaluate);
    motionQuery?.addEventListener?.("change", onMotionPreferenceChange);
    if (isPage) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      observeTargets();
      evaluate();
    } else {
      syncContainer();
    }
    syncContainerRef.current = syncContainer;

    return () => {
      syncContainerRef.current = null;
      window.removeEventListener("resize", scheduleEvaluate);
      motionQuery?.removeEventListener?.("change", onMotionPreferenceChange);
      if (isPage) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        detachContainer();
      }
      resizeObserver?.disconnect();

      if (stableTimeoutRef.current) clearTimeout(stableTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      clearAnimationTimeouts();
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(resizeRafRef.current);
        resizeRafRef.current = null;
      }
      removeElement();
    };
  }, [disabled, pageLevel, glowColor, sensitivity, variant, className]);

  // No dependency array on purpose: a cheap ref check after every commit is
  // what lets an explicit `pageLevel={false}` (or an auto-detected container)
  // initialise as soon as the container attaches, and tear down when it goes.
  useEffect(() => {
    syncContainerRef.current?.();
  });

  return containerRef;
};
