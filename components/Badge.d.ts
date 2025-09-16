import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface BadgeProps {
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning';
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    children: React.ReactNode;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    clickable?: boolean;
    onClick?: () => void;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
