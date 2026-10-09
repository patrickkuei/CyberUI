import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import Notification from "../components/Notification";
import {
  REDUCED_MOTION_DURATION,
  usePrefersReducedMotion,
} from "../hooks/usePrefersReducedMotion";
import {
  NotificationContext,
  type CyberNotification,
  type NotificationOptions,
  type NotificationContextType,
} from "./NotificationContextBase";

type ToastPosition = NonNullable<CyberNotificationProviderProps["position"]>;

interface ToastSlotProps {
  notification: CyberNotification;
  index: number;
  position: ToastPosition;
  reduceMotion: boolean;
  onWidth: (id: string, width: number) => void;
  onClose: (id: string) => void;
}

/**
 * One positioned toast. Owns measuring the toast's width, which the slide-in
 * needs before it can leave its off-screen enter position.
 *
 * A measured 0 (jsdom, or a toast in a zero-size / `display: none` container)
 * isn't a real width yet: it is ignored (never stored, so state doesn't change
 * and nothing loops) and the toast is measured again as soon as it can be.
 */
const ToastSlot: React.FC<ToastSlotProps> = ({
  notification,
  index,
  position,
  reduceMotion,
  onWidth,
  onClose,
}) => {
  const shellRef = useRef<HTMLDivElement>(null);
  const { id } = notification;
  const measured = Boolean(notification.width);

  // Measure before paint, and again after any render while still unmeasured
  // (covers environments without ResizeObserver). Only a positive width is
  // reported, so this cannot trigger a render loop.
  useLayoutEffect(() => {
    // Once measured, skip the read: scrollWidth forces layout.
    if (measured) return;
    const width = shellRef.current?.scrollWidth ?? 0;
    if (width > 0) onWidth(id, width);
  });

  // A toast that measured 0 (hidden/zero-size container) is re-measured when
  // its size changes. Absent in some environments (e.g. jsdom): the effect
  // above is then the only measurement.
  useLayoutEffect(() => {
    const el = shellRef.current;
    if (measured || !el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => {
      const width = el.scrollWidth;
      if (width > 0) {
        onWidth(id, width);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [measured, id, onWidth]);

  const isRight = position.includes("right");
  // Toasts are absolutely positioned inside a zero-height container, so they
  // must grow away from the container's anchor edge: down from the top line
  // for top positions, up from the bottom line for bottom positions.
  const isBottom = position.startsWith("bottom");
  const offset = `${index * 70}px`;

  return (
    <div
      className="absolute"
      style={{
        right: isRight ? 0 : undefined,
        left: position.includes("left") ? 0 : undefined,
        top: isBottom ? undefined : offset,
        bottom: isBottom ? offset : undefined,
        width: notification.width ? `${notification.width}px` : "auto",
      }}
    >
      <div
        // Slide/enter/exit movement lives only in the inline `transform`
        // below (it needs the unmeasured-width nuance — see its comment). No
        // `translate-x-full`/`translate-x-0` utility here: in Tailwind v4
        // those set the CSS `translate` property, which is separate from
        // `transform` and would compose with it, doubling the movement. The
        // `motion-reduce:translate-x-0` variant is still needed as a CSS-only
        // guarantee (independent of the JS `reduceMotion` read) that
        // reduced-motion users never get translate.
        // The 0.75 shrink is likewise only in the inline `scale(0.75)` (a
        // `scale-75` utility would set the separate `scale` property and
        // square it to ~0.56).
        className={`transform transition-all duration-500 motion-reduce:duration-150 motion-reduce:translate-x-0 ease-out opacity-90 w-full ${
          isRight ? "flex justify-end" : "flex justify-start"
        } ${notification.isClosing ? "opacity-0" : "opacity-90"}`}
        style={{
          whiteSpace: "nowrap" as const,
          transformOrigin: isRight ? "right center" : "left center",
          // Reduced motion: no slide — the toast stays in place and
          // fades in once measured, and out on close.
          transform: reduceMotion
            ? "scale(0.75)"
            : notification.isClosing
            ? `translateX(${isRight ? "100%" : "-100%"}) scale(0.75)`
            : `translateX(${
                notification.width ? "0px" : isRight ? "100%" : "-100%"
              }) scale(0.75)`,
          ...(reduceMotion && !notification.width ? { opacity: 0 } : {}),
        }}
        ref={shellRef}
      >
        <Notification
          type={notification.type}
          title={notification.title}
          message={notification.message}
          onClose={() => onClose(id)}
          size="sm"
        />
      </div>
    </div>
  );
};

export interface CyberNotificationProviderProps {
  children: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  defaultDuration?: number;
}

/**
 * How long a closing toast stays mounted: its slide-out (`duration-500`), or
 * the 150ms fade (`motion-reduce:duration-150`) under reduced motion.
 */
const closeDelay = (reduceMotion: boolean) =>
  reduceMotion ? REDUCED_MOTION_DURATION : 500;

/**
 * Context provider for the Cyberpunk notification system.
 * Wrap your application root with this provider to enable toasts.
 *
 * While the user prefers reduced motion (`prefers-reduced-motion: reduce`),
 * toasts fade in and out in 150ms instead of sliding.
 * 
 * @example
 * <CyberNotificationProvider position="top-right">
 *   <App />
 * </CyberNotificationProvider>
 */
export const CyberNotificationProvider: React.FC<
  CyberNotificationProviderProps
> = ({ children, position = "top-right", defaultDuration = 2500 }) => {
  const [notifications, setNotifications] = useState<CyberNotification[]>([]);
  const reduceMotion = usePrefersReducedMotion();
  // Read when a close is scheduled, so a toast already on screen uses the
  // preference in effect at dismissal time.
  const reduceMotionRef = useRef(reduceMotion);
  reduceMotionRef.current = reduceMotion;
  // Monotonic per-provider counter: unlike Date.now(), it cannot repeat when
  // several toasts are shown in the same millisecond.
  const nextIdRef = useRef(0);

  const showNotification = useCallback(
    (
      type: "success" | "warning" | "error",
      title: string,
      message: string,
      options: NotificationOptions = {}
    ): string => {
      const id = String(++nextIdRef.current);
      const { autoHide = true, duration = defaultDuration } = options;

      setNotifications((prev) => [...prev, { id, type, title, message }]);

      if (autoHide) {
        setTimeout(() => {
          // Start closing animation
          setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, isClosing: true } : n))
          );
          // Remove after animation completes
          setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== id));
          }, closeDelay(reduceMotionRef.current));
        }, duration);
      }

      return id;
    },
    [defaultDuration]
  );

  const hideNotification = useCallback((id: string) => {
    // Start closing animation
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isClosing: true } : n))
    );
    // Remove after animation completes
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, closeDelay(reduceMotionRef.current));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const updateNotificationWidth = useCallback((id: string, width: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, width } : n))
    );
  }, []);

  const value: NotificationContextType = {
    notifications,
    showNotification,
    hideNotification,
    clearAllNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {/* Notification Container */}
      {notifications.length > 0 && (
        <div
          className={`fixed z-50 ${getPositionClasses(position)}`}
          aria-live="polite"
          aria-relevant="additions text"
          aria-atomic="true"
        >
          {notifications.map((notification, index) => (
            <ToastSlot
              key={notification.id}
              notification={notification}
              index={index}
              position={position}
              reduceMotion={reduceMotion}
              onWidth={updateNotificationWidth}
              onClose={hideNotification}
            />
          ))}
        </div>
      )}
    </NotificationContext.Provider>
  );
};

// Helper function for positioning
const getPositionClasses = (position: string): string => {
  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };
  return (
    positions[position as keyof typeof positions] || positions["top-right"]
  );
};
