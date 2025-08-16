import { createContext } from "react";

export interface CyberNotification {
  id: string;
  type: "success" | "warning" | "error";
  title: string;
  message: string;
  width?: number;
  isClosing?: boolean;
}

export interface NotificationOptions {
  autoHide?: boolean;
  duration?: number;
}

export interface NotificationContextType {
  notifications: CyberNotification[];
  showNotification: (
    type: "success" | "warning" | "error",
    title: string,
    message: string,
    options?: NotificationOptions
  ) => string;
  hideNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);
