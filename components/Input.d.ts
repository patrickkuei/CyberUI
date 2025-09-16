import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Input: React.FC<InputProps>;
export default Input;
