import { default as React } from 'react';
export interface CircularProgressProps {
    progress: number;
    radius: number;
    className?: string;
    children?: React.ReactNode;
    ariaLabel?: string;
}
declare const CircularProgress: React.FC<CircularProgressProps>;
export default CircularProgress;
