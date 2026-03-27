import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContextBase";

/**
 * Hook to access the Cyberpunk notification system.
 * Allows triggering success, warning, and error toasts from anywhere in the app.
 * 
 * @example
 * const { showNotification } = useCyberNotifications();
 * 
 * const handleClick = () => {
 *   showNotification('success', 'SYSTEM', 'Reboot successful');
 * };
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
