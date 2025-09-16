import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
