import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface LinearProgressProps {
    progress: number;
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
    className?: string;
}
declare const LinearProgress: React.FC<LinearProgressProps>;
export default LinearProgress;
