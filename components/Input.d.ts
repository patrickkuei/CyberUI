import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * A cyberpunk-styled text input field.
 *
 * @example
 * // Basic input with label
 * <Input label="Username" placeholder="Enter alias..." />
 *
 * @example
 * // Input with error state and icon
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Invalid credentials"
 *   leftIcon={<LockIcon />}
 * />
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Visual style of the input.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    /**
     * Size of the input (height and padding).
     * @default 'md'
     */
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Input: React.FC<InputProps>;
export default Input;
