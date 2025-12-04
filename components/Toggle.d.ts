import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A toggle switch component.
 *
 * @example
 * // Basic toggle
 * <Toggle
 *   label="Enable Notifications"
 *   checked={enabled}
 *   onChange={setEnabled}
 * />
 *
 * @example
 * // Large accent toggle
 * <Toggle
 *   checked={isActive}
 *   onChange={toggle}
 *   size="lg"
 *   variant="accent"
 * />
 */
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    /**
     * Size of the toggle.
     * @default 'md'
     */
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    /**
     * Visual style variant.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const Toggle: React.FC<ToggleProps>;
export default Toggle;
