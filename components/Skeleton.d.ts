import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export interface SkeletonProps {
    variant?: "text" | "circular" | "rectangular" | "card" | "avatar-text" | "button-group";
    size?: ResponsiveValue<"sm" | "md" | "lg">;
    width?: string | number;
    height?: string | number;
    className?: string;
    lines?: number;
    animate?: boolean;
}
declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
