import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A status indicator badge with various semantic variants.
 *
 * @example
 * // Success badge
 * <Badge variant="success">ONLINE</Badge>
 *
 * @example
 * // Clickable badge with icon
 * <Badge
 *   variant="primary"
 *   clickable
 *   onClick={handleClick}
 *   leftIcon={<Icon name="user" />}
 * >
 *   Profile
 * </Badge>
 */
export interface BadgeProps {
    /**
     * Semantic style of the badge.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning';
    /**
     * Size of the badge.
     * @default 'md'
     */
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
