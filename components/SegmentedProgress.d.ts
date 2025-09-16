import { default as React } from 'react';
export interface SegmentedProgressProps {
    progress: number;
    className?: string;
    children?: React.ReactNode;
}
declare const SegmentedProgress: React.FC<SegmentedProgressProps>;
export default SegmentedProgress;
