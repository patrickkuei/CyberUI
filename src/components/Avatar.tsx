import React, { useEffect, useState } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * Presence state rendered as a small glowing dot on the avatar's edge.
 */
export type AvatarStatus = 'online' | 'offline' | 'away';

/**
 * Props for the Avatar component.
 *
 * @example
 * // Image avatar with an online indicator
 * <Avatar src="/operatives/nyx.png" alt="Nyx" status="online" />
 *
 * @example
 * // No image — falls back to glitch-style initials derived from alt
 * <Avatar alt="Case Pollard" size="lg" />
 */
export interface AvatarProps {
  /**
   * Image source URL. When omitted, or when the image fails to load,
   * the avatar falls back to `initials` (or initials derived from `alt`)
   * — or to `fallbackIcon` if no initials can be derived.
   */
  src?: string;
  /**
   * Accessible name for the avatar, and the source for auto-derived initials
   * (e.g. "Case Pollard" → "CP"). Required for screen reader users even
   * when `src` is set.
   */
  alt: string;
  /**
   * Explicit fallback initials (max 2 characters shown). Overrides initials
   * derived from `alt`. Useful when `alt` is a full sentence rather than a name.
   */
  initials?: string;
  /**
   * Custom fallback content rendered when there's no `src` (or it fails to
   * load) and no initials can be derived. Defaults to a generic operative icon.
   */
  fallbackIcon?: React.ReactNode;
  /**
   * Presence indicator dot rendered on the bottom-right edge. Omit to render
   * no indicator at all.
   */
  status?: AvatarStatus;
  /**
   * Size of the avatar circle.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg' | 'xl'>;
  /** Optional custom class name applied to the outer container. */
  className?: string;
}

const STATUS_STYLES: Record<AvatarStatus, string> = {
  online: 'bg-success',
  offline: 'bg-muted',
  away: 'bg-warning',
};

/** Inline glow per status — no `--shadow-success`/`--shadow-warning` theme tokens exist, so drop-shadow is set directly from the status color CSS variable (same approach CircularProgress uses). */
const STATUS_GLOW: Record<AvatarStatus, React.CSSProperties> = {
  online: { boxShadow: '0 0 6px var(--color-success), 0 0 10px var(--color-success)' },
  offline: {},
  away: { boxShadow: '0 0 6px var(--color-warning), 0 0 10px var(--color-warning)' },
};

const STATUS_LABELS: Record<AvatarStatus, string> = {
  online: 'Online',
  offline: 'Offline',
  away: 'Away',
};

/** Derives up to 2 uppercase initials from a name-like string, e.g. "Case Pollard" → "CP". */
const deriveInitials = (name: string): string => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

/**
 * A cyberpunk-styled circular avatar for user profile images, comment threads,
 * and team lists. Falls back to glitch-style initials (or a custom icon) when
 * no image is available, and can surface a glowing online/offline/away status dot.
 *
 * @example
 * <Avatar src="/operatives/ghost.png" alt="Ghost" status="online" size="lg" />
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  fallbackIcon,
  status,
  size = 'md',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  // Reset the error flag when `src` changes so a later valid URL isn't
  // permanently blocked by an earlier failed load on the same instance.
  useEffect(() => {
    setImageError(false);
  }, [src]);

  const showImage = !!src && !imageError;
  const resolvedInitials = initials ?? deriveInitials(alt);

  const sizeClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.avatar);

  return (
    <div
      className={cn(
        'relative inline-flex flex-shrink-0 items-center justify-center rounded-full',
        sizeClasses,
        className
      )}
    >
      <div
        className={cn(
          'relative flex h-full w-full items-center justify-center overflow-hidden rounded-full',
          'border-2 border-accent/60 shadow-primary',
          'bg-surface'
        )}
        role="img"
        aria-label={alt}
      >
        {showImage ? (
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : resolvedInitials ? (
          <span
            className="relative select-none font-mono font-bold uppercase text-accent"
            aria-hidden="true"
          >
            {resolvedInitials.slice(0, 2)}
            <span
              className="absolute inset-0 text-secondary opacity-60 mix-blend-screen"
              style={{ transform: 'translate(1px, -1px)' }}
            >
              {resolvedInitials.slice(0, 2)}
            </span>
          </span>
        ) : (
          <span
            className="flex h-full w-full items-center justify-center text-accent"
            aria-hidden="true"
          >
            {fallbackIcon ?? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-1/2 w-1/2"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            )}
          </span>
        )}
      </div>

      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-base',
            STATUS_STYLES[status]
          )}
          style={{ width: '28%', height: '28%', ...STATUS_GLOW[status] }}
          role="status"
          aria-label={STATUS_LABELS[status]}
        />
      )}
    </div>
  );
};

Avatar.displayName = 'CyberUI.Avatar';

export default Avatar;
