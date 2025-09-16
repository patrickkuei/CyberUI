/**
 * Scrollbar background/border style variants
 */
export type ScrollbarVariant = "default" | "minimal" | "transparent";
/**
 * Configuration options for the cyberpunk scrollbar
 */
export interface UseCyberScrollbarOptions {
    /** Color theme for the scrollbar glow effects */
    glowColor?: "primary" | "secondary" | "accent";
    /** Scroll velocity sensitivity multiplier (higher = more responsive) */
    sensitivity?: number;
    /** Disable the scrollbar completely */
    disabled?: boolean;
    /** Apply to page-level scrolling instead of container scrolling */
    pageLevel?: boolean;
    /** Predefined style variant for the scrollbar background (auto-switches to transparent on mobile) */
    variant?: ScrollbarVariant;
    /** Custom CSS classes to apply to the scrollbar container */
    className?: string;
}
/**
 * Custom hook that creates a cyberpunk-themed scrollbar with animated arrows
 * that respond to scroll velocity and direction.
 *
 * @param options Configuration options for the scrollbar
 * @returns Ref to attach to scrollable container (not needed for pageLevel)
 */
export declare const useCyberScrollbar: (options?: UseCyberScrollbarOptions) => import('react').RefObject<HTMLDivElement | null>;
