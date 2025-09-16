import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * Size options for the Image component
 */
export type ImageSize = "sm" | "md" | "lg";
/**
 * Animation configuration for preview transitions
 */
export interface ImageAnimationConfig {
    /** Duration of opening animation in milliseconds */
    openDuration?: number;
    /** Duration of closing animation in milliseconds */
    closeDuration?: number;
    /** Enable/disable cyberpunk effects */
    cyberpunkEffects?: boolean;
}
/**
 * Callback functions for Image component events
 */
export interface ImageCallbacks {
    /** Fired when preview opens */
    onPreviewOpen?: () => void;
    /** Fired when preview closes */
    onPreviewClose?: () => void;
    /** Fired when image loads successfully */
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    /** Fired when image fails to load */
    onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}
/**
 * Props for the CyberUI Image component
 */
export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "size" | "onLoad" | "onError">, ImageCallbacks {
    /** Image source URL (required) */
    src: string;
    /** Alternative text for accessibility (required) */
    alt: string;
    /** Size of the image container */
    size?: ResponsiveValue<ImageSize>;
    /** Enable click-to-expand preview functionality */
    preview?: boolean;
    /** Fallback image URL when main image fails to load */
    fallback?: string;
    /** Custom loading placeholder component */
    placeholder?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Animation configuration */
    animation?: ImageAnimationConfig;
    /** Disable lazy loading (images load immediately) */
    eager?: boolean;
    /** Custom preview container styles */
    previewClassName?: string;
}
/**
 * CyberUI Image Component
 *
 * A cyberpunk-themed image component with click-to-expand preview functionality,
 * loading states, error handling, and smooth animations.
 *
 * @example
 * ```tsx
 * <Image
 *   src="/cyber-city.jpg"
 *   alt="Cyberpunk cityscape"
 *   size="lg"
 *   onPreviewOpen={() => console.log('Preview opened')}
 * />
 * ```
 */
declare const Image: React.FC<ImageProps>;
export default Image;
