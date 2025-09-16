import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    size?: ResponsiveValue<"sm" | "md" | "lg">;
    variant?: "primary" | "secondary" | "danger" | "ghost";
    options: SelectOption[];
    placeholder?: string;
    helperText?: string;
    error?: string;
    className?: string;
}
declare const Select: React.FC<SelectProps>;
export default Select;
