import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContextBase";

/**
 * Access the notification context to show toast notifications.
 * Must be used within a CyberNotificationProvider.
 *
 * @returns The notification context value containing `showNotification`
 * @throws Error if used outside of CyberNotificationProvider
 */
export const useCyberNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useCyberNotifications must be used within a CyberNotificationProvider"
    );
  }
  return context;
};

export type {
  CyberNotification,
  NotificationOptions,
} from "../contexts/NotificationContextBase";
