import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface NotificationProps {
    type: 'success' | 'warning' | 'error';
    title: string;
    message: string;
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    onClose?: () => void;
}
declare const Notification: React.FC<NotificationProps>;
export default Notification;
