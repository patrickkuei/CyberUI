import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
/**
 * A styled dropdown selection component.
 *
 * @example
 * // Basic select
 * <Select
 *   label="Choose Sector"
 *   options={[
 *     { value: 'sector-7', label: 'Sector 7' },
 *     { value: 'sector-9', label: 'Sector 9' }
 *   ]}
 * />
 *
 * @example
 * // Select with error
 * <Select
 *   label="Clearance Level"
 *   error="Insufficient permissions"
 *   options={levels}
 * />
 */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    /**
     * Size of the select input.
     * @default 'md'
     */
    size?: ResponsiveValue<"sm" | "md" | "lg">;
    /**
     * Visual style variant.
     * @default 'primary'
     */
    variant?: "primary" | "secondary" | "danger" | "ghost";
    options: SelectOption[];
    placeholder?: string;
    helperText?: string;
    error?: string;
    className?: string;
}
declare const Select: React.FC<SelectProps>;
export default Select;
