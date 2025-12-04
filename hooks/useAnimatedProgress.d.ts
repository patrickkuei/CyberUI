interface UseAnimatedProgressOptions {
    min?: number;
    max?: number;
    speed?: number;
}
/**
 * A hook that oscillates a value between a min and max range.
 * Useful for creating "breathing" or "pulse" animations.
 *
 * @param options Configuration options
 * @param options.min Minimum value (default: 5)
 * @param options.max Maximum value (default: 95)
 * @param options.speed Speed of oscillation in ms (default: 30)
 * @returns The current animated value
 */
export declare const useAnimatedProgress: (options?: UseAnimatedProgressOptions) => number;
export {};
