import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A neon-styled cyberpunk button component.
 *
 * Supports multiple variants and responsive sizing.
 *
 * @example
 * // Primary button
 * <Button variant="primary" onClick={handleClick}>
 *   INITIATE
 * </Button>
 *
 * @example
 * // Responsive size (Small on mobile, Large on desktop)
 * <Button size={{ base: 'sm', lg: 'lg' }}>
 *   RESPONSIVE
 * </Button>
 *
 * @example
 * // Ghost variant for secondary actions
 * <Button variant="ghost">
 *   CANCEL
 * </Button>
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Visual style of the button.
     * - `primary`: Main action, neon glow.
     * - `secondary`: Alternative action, bordered.
     * - `danger`: Destructive action, red glow.
     * - `ghost`: Subtle action, transparent background.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    /**
     * Size of the button. Can be a static value or a responsive object.
     * @default 'md'
     */
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
