import React, { useState, useCallback, useRef, type ReactNode } from "react";
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

  const showNotification = useCallback(
    (
      type: "success" | "warning" | "error",
      title: string,
      message: string,
      options: NotificationOptions = {}
    ): string => {
      const id = Date.now().toString();
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
            <div
              key={notification.id}
              className="absolute"
              style={{
                right: position.includes("right") ? 0 : undefined,
                left: position.includes("left") ? 0 : undefined,
                top: `${index * 70}px`,
                width: notification.width ? `${notification.width}px` : "auto",
              }}
            >
              <div
                className={`transform transition-all duration-500 motion-reduce:duration-150 motion-reduce:translate-x-0 ease-out scale-75 opacity-90 w-full ${
                  position.includes("right")
                    ? "flex justify-end"
                    : "flex justify-start"
                } ${
                  notification.isClosing
                    ? `${
                        position.includes("right")
                          ? "translate-x-full"
                          : "-translate-x-full"
                      } opacity-0`
                    : "translate-x-0 opacity-90"
                }`}
                style={{
                  whiteSpace: "nowrap" as const,
                  transformOrigin: position.includes("right")
                    ? "right center"
                    : "left center",
                  // Reduced motion: no slide — the toast stays in place and
                  // fades in once measured, and out on close.
                  transform: reduceMotion
                    ? "scale(0.75)"
                    : notification.isClosing
                    ? `translateX(${
                        position.includes("right") ? "100%" : "-100%"
                      }) scale(0.75)`
                    : `translateX(${
                        notification.width
                          ? "0px"
                          : position.includes("right")
                          ? "100%"
                          : "-100%"
                      }) scale(0.75)`,
                  ...(reduceMotion && !notification.width ? { opacity: 0 } : {}),
                }}
                ref={(el) => {
                  if (el && !notification.width) {
                    const scaledWidth = el.scrollWidth;
                    updateNotificationWidth(notification.id, scaledWidth);
                  }
                }}
              >
                <Notification
                  type={notification.type}
                  title={notification.title}
                  message={notification.message}
                  onClose={() => hideNotification(notification.id)}
                  size="sm"
                />
              </div>
            </div>
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
