import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContextBase";

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
