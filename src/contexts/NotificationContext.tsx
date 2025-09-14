import React, { useState, useCallback, type ReactNode } from "react";
import Notification from "../components/Notification";
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

export const CyberNotificationProvider: React.FC<
  CyberNotificationProviderProps
> = ({ children, position = "top-right", defaultDuration = 2500 }) => {
  const [notifications, setNotifications] = useState<CyberNotification[]>([]);

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
          }, 500); // Animation duration
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
    }, 500); // Animation duration
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
                className={`transform transition-all duration-500 ease-out scale-75 opacity-90 w-full ${
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
                  transform: notification.isClosing
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
