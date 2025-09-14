import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';

export interface NotificationProps {
  type: 'success' | 'warning' | 'error';
  title: string;
  message: string;
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  type,
  title,
  message,
  size = 'md',
  onClose
}) => {
  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.notification);
  };

  const getNotificationStyles = () => {
    switch (type) {
      case 'success':
        return {
          container: 'bg-linear-(--gradient-accent) shadow-lg-accent',
          textColor: 'text-base',
          icon: (
            <svg className="w-6 h-6 text-base" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )
        };
      case 'warning':
        return {
          container: 'bg-surface border-l-4 border-secondary shadow-lg',
          textColor: 'text-default',
          icon: (
            <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )
        };
      case 'error':
        return {
          container: 'bg-error shadow-error',
          textColor: 'text-base',
          icon: (
            <svg className="w-6 h-6 text-base" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          )
        };
      default:
        return {
          container: 'bg-surface border-l-4 border-secondary shadow-lg',
          textColor: 'text-default',
          icon: null
        };
    }
  };

  const styles = getNotificationStyles();
  const sizeClasses = getSizeClasses(size);
  const role = type === 'error' ? 'alert' : 'status';
  const hoverTextClass = type === 'warning' ? 'hover:text-default/70' : 'hover:text-base/70';

  return (
    <div className={`flex items-start rounded-lg ${sizeClasses} ${styles.container}`} role={role} aria-atomic="true">
      <div className="flex-shrink-0">
        {styles.icon}
      </div>
      <div className="flex-1">
        <h4 className={`font-bold ${styles.textColor}`}>
          {title}
        </h4>
        <p className={`${type === 'success' || type === 'error' ? 'text-base/80' : 'text-muted'} text-sm mt-1`}>
          {message}
        </p>
      </div>
      {onClose && (
        <button
          className={`flex-shrink-0 ${styles.textColor} ${hoverTextClass} transition-colors cursor-pointer`}
          onClick={onClose}
          aria-label="Close notification"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Notification;
