import { useState, useEffect } from 'react';

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
export const useAnimatedProgress = (options: UseAnimatedProgressOptions = {}) => {
  const { min = 5, max = 95, speed = 30 } = options;
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        let next = prev + direction;

        if (next >= max) {
          next = max;
          setDirection(-1);
        } else if (next <= min) {
          next = min;
          setDirection(1);
        }

        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [direction, min, max, speed]);

  return progress;
};
