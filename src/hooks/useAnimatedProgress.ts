import { useState, useEffect } from 'react';

interface UseAnimatedProgressOptions {
  min?: number;
  max?: number;
  speed?: number;
}

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
