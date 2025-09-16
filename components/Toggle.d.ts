import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    label?: string;
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const Toggle: React.FC<ToggleProps>;
export default Toggle;
