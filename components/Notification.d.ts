import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A toast notification component with status indicators.
 *
 * @example
 * // Success notification
 * <Notification
 *   type="success"
 *   title="Upload Complete"
 *   message="Data transfer finished successfully."
 * />
 *
 * @example
 * // Error notification with close handler
 * <Notification
 *   type="error"
 *   title="Connection Failed"
 *   message="Unable to reach the mainframe."
 *   onClose={handleClose}
 * />
 */
export interface NotificationProps {
    /**
     * Semantic type of the notification.
     */
    type: 'success' | 'warning' | 'error';
    title: string;
    message: string;
    /**
     * Size of the notification.
     * @default 'md'
     */
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    onClose?: () => void;
}
declare const Notification: React.FC<NotificationProps>;
export default Notification;
