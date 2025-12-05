import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A cyberpunk-styled checkbox with neon glow effects.
 *
 * Features a custom SVG checkbox with a cut corner design, matching the cyberpunk aesthetic.
 * Supports both controlled and uncontrolled modes.
 *
 * @example
 * // Basic checkbox
 * <Checkbox label="Accept terms" />
 *
 * @example
 * // Controlled checkbox
 * <Checkbox
 *   label="Enable notifications"
 *   checked={isEnabled}
 *   onChange={(e) => setIsEnabled(e.target.checked)}
 * />
 *
 * @example
 * // With error message
 * <Checkbox
 *   label="Required field"
 *   error="This field is required"
 * />
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /**
     * Label text displayed next to the checkbox.
     */
    label?: string;
    /**
     * Error message to display below the checkbox.
     */
    error?: string;
    /**
     * Size of the checkbox. Supports responsive values.
     * @default 'md'
     */
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    /**
     * Additional CSS classes.
     */
    className?: string;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
