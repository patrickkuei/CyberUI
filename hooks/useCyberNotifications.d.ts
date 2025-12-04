/**
 * Access the notification context to show toast notifications.
 * Must be used within a CyberNotificationProvider.
 *
 * @returns The notification context value containing `showNotification`
 * @throws Error if used outside of CyberNotificationProvider
 */
export declare const useCyberNotifications: () => import('../contexts/NotificationContextBase').NotificationContextType;
export type { CyberNotification, NotificationOptions, } from '../contexts/NotificationContextBase';
