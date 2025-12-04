import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
/**
 * Size options for the Carousel component
 */
export type CarouselSize = "sm" | "md" | "lg";
/**
 * Transition effects for the Carousel
 */
export type CarouselTransition = "slide" | "fade" | "matrix" | "signal-glitch";
/**
 * Object fit options for images
 */
export type CarouselObjectFit = "cover" | "contain";
/**
 * Image data structure for Carousel
 */
export interface CarouselImageData {
    /** Image source URL */
    src: string;
    /** Alt text for accessibility */
    alt: string;
    /** Optional fallback image URL */
    fallbackSrc?: string;
    /** Optional caption */
    caption?: string;
}
/**
 * Lifecycle callback functions for Carousel events
 */
export interface CarouselCallbacks {
    /** Fired before slide change (fromIndex, toIndex) */
    onBeforeChange?: (fromIndex: number, toIndex: number) => void;
    /** Fired after slide change */
    onAfterChange?: (index: number) => void;
}
/**
 * Props for the CyberUI Carousel component
 *
 * @example
 * // Basic carousel
 * <Carousel
 *   images={[
 *     { src: 'img1.jpg', alt: 'Cyber City' },
 *     { src: 'img2.jpg', alt: 'Neon Lights' }
 *   ]}
 *   currentIndex={index}
 *   onChange={setIndex}
 * />
 *
 * @example
 * // Glitch effect carousel
 * <Carousel
 *   images={images}
 *   currentIndex={index}
 *   onChange={setIndex}
 *   transition="signal-glitch"
 *   glitchRate={0.5}
 *   autoPlay
 *   interval={5000}
 * />
 */
export interface CarouselProps extends CarouselCallbacks {
    /** Array of images to display */
    images: CarouselImageData[];
    /** Current slide index (controlled) */
    currentIndex: number;
    /** Callback when slide changes */
    onChange: (index: number) => void;
    /** Size variant with responsive support */
    size?: ResponsiveValue<CarouselSize>;
    /** Enable auto-play functionality */
    autoPlay?: boolean;
    /** Auto-play interval in milliseconds */
    interval?: number;
    /** Enable infinite loop */
    infinite?: boolean;
    /** Transition effect */
    transition?: CarouselTransition;
    /** Image object fit behavior */
    objectFit?: CarouselObjectFit;
    /** Show navigation arrows */
    showArrows?: boolean;
    /** Show slide indicators */
    showIndicators?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Disable click-to-expand on images */
    disableImagePreview?: boolean;
    /** Control signal-glitch effect frequency. Float (0.0-1.0) for probability, boolean for on/off */
    glitchRate?: number | boolean;
}
declare const _default: React.NamedExoticComponent<CarouselProps>;
export default _default;
