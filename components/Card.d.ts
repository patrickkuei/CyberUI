import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface CardProps {
    variant?: 'default' | 'accent' | 'small';
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    title?: string;
    titleBorder?: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
