export type ResponsiveObject<T> = {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
};
export type ResponsiveValue<T> = T | ResponsiveObject<T>;
export declare const isResponsiveObject: <T>(v: ResponsiveValue<T>) => v is ResponsiveObject<T>;
export type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
/**
 * Resolves responsive classes based on the current viewport size.
 *
 * @param prop The responsive value configuration (string or object)
 * @param classMap Map of values to CSS classes
 * @returns A string of combined Tailwind classes
 */
export declare const getResponsiveClasses: <T extends string>(prop: ResponsiveValue<T>, classMap: Record<T, string>) => string;
/**
 * Combines multiple class strings, filtering out falsy values.
 *
 * @param classes List of class strings
 * @returns Combined class string
 */
export declare const combineResponsiveClasses: (...classes: (string | undefined)[]) => string;
export declare const RESPONSIVE_SIZE_MAPS: {
    readonly button: {
        readonly sm: "py-1 px-4 text-sm";
        readonly md: "py-2 px-6 text-lg";
        readonly lg: "py-3 px-8 text-xl";
    };
    readonly badge: {
        readonly sm: "px-2 py-1 text-xs gap-1";
        readonly md: "px-4 py-2 text-sm gap-2";
        readonly lg: "px-6 py-3 text-base gap-3";
    };
    readonly input: {
        readonly sm: "py-2 text-sm";
        readonly md: "py-3 text-base";
        readonly lg: "py-4 text-lg";
    };
    readonly card: {
        readonly sm: "p-3 space-y-3 text-sm";
        readonly md: "p-6 space-y-6 text-base";
        readonly lg: "p-8 space-y-8 text-lg";
    };
    readonly notification: {
        readonly sm: "p-3 space-x-2";
        readonly md: "p-4 space-x-4";
        readonly lg: "p-6 space-x-6";
    };
    readonly tabNavigation: {
        readonly sm: "px-3 py-1 text-sm";
        readonly md: "px-6 py-2 text-lg";
        readonly lg: "px-8 py-3 text-xl";
    };
    readonly linearProgress: {
        readonly width: {
            readonly sm: "w-48";
            readonly md: "w-80";
            readonly lg: "w-96";
        };
        readonly height: {
            readonly sm: "h-1.5";
            readonly md: "h-3";
            readonly lg: "h-4";
        };
    };
    readonly skeleton: {
        readonly sm: "text-sm";
        readonly md: "text-base";
        readonly lg: "text-lg";
    };
    readonly carousel: {
        readonly sm: "h-48";
        readonly md: "h-64";
        readonly lg: "h-80";
    };
};
export declare const BREAKPOINT_PIXELS: {
    readonly base: 0;
    readonly sm: 640;
    readonly md: 768;
    readonly lg: 1024;
    readonly xl: 1280;
    readonly "2xl": 1536;
};
export type BreakpointPixels = typeof BREAKPOINT_PIXELS;
/**
 * Resolves a ResponsiveValue to a concrete value for a specific width.
 *
 * @param prop The responsive value to resolve
 * @param width The current viewport width in pixels
 * @param fallback Fallback value if no breakpoint matches
 * @returns The resolved value
 */
export declare const resolveResponsiveValue: <T>(prop: ResponsiveValue<T>, width: number, fallback: T) => T;
/**
 * A hook that returns the current resolved value based on window resize events.
 *
 * @param prop The responsive value configuration
 * @param fallback Default value to use during SSR or initial render
 * @returns The current resolved value
 */
export declare const useResponsiveValue: <T>(prop: ResponsiveValue<T>, fallback: T) => T;
