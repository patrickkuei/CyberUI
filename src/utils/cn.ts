import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * Merges Tailwind CSS class names, resolving conflicts so the last value wins.
 * Use this everywhere a component accepts a `className` prop.
 *
 * @example
 * cn('px-4 py-2', 'px-6')        // → 'py-2 px-6'
 * cn('text-primary', className)   // → user className wins on conflict
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
