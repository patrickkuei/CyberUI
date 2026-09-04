import React, { useCallback, useMemo, memo } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';
import { warnOnce } from '../utils/devWarn';

const ELLIPSIS = 'ellipsis' as const;
type PageItem = number | typeof ELLIPSIS;

function range(start: number, end: number): number[] {
  if (end < start) return [];
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Computes the collapsed page list for compact mode: `boundaryCount` pages at
 * each edge, `siblingCount` pages around `current`, and an `ELLIPSIS` marker
 * wherever pages were skipped. When a gap is exactly one page wide, that page
 * is shown in place of the ellipsis instead of being collapsed (collapsing a
 * single page saves no space). Falls back to every page when the total fits
 * within the available slots.
 */
function getCompactPageItems(
  current: number,
  total: number,
  siblingCount: number,
  boundaryCount: number
): PageItem[] {
  const totalSlots = boundaryCount * 2 + siblingCount * 2 + 5;
  if (total <= totalSlots) return range(1, total);

  const startPages = range(1, Math.min(boundaryCount, total));
  const endPages = range(Math.max(total - boundaryCount + 1, boundaryCount + 1), total);

  const siblingsStart = Math.max(
    Math.min(current - siblingCount, total - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2
  );
  const siblingsEnd = Math.min(
    Math.max(current + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : total - 1
  );

  return [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? [ELLIPSIS]
      : boundaryCount + 1 < total - boundaryCount
        ? [boundaryCount + 1]
        : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < total - boundaryCount - 1
      ? [ELLIPSIS]
      : total - boundaryCount > boundaryCount
        ? [total - boundaryCount]
        : []),
    ...endPages,
  ];
}

/**
 * Props for the Pagination component.
 */
export interface PaginationProps {
  /** Current active page, 1-based. Pagination is always controlled by this value. */
  currentPage: number;
  /** Total number of pages available. */
  totalPages: number;
  /** Fired with the newly selected page number when the user clicks a page, Previous/Next, or uses Home/End. */
  onPageChange: (page: number) => void;
  /**
   * Collapses distant page numbers behind an ellipsis for large page counts,
   * always keeping `boundaryCount` pages at each edge and `siblingCount`
   * pages around `currentPage` visible. When `false`, every page renders.
   * @default true
   */
  compact?: boolean;
  /**
   * Number of page buttons shown on each side of `currentPage` when `compact` is true.
   * @default 1
   */
  siblingCount?: number;
  /**
   * Number of page buttons always shown at the start and end when `compact` is true.
   * @default 1
   */
  boundaryCount?: number;
  /**
   * Whether to render Previous/Next controls alongside the page numbers.
   * @default true
   */
  showPrevNext?: boolean;
  /**
   * Visual style for the active page and hover glow, matching Button/Badge's variant vocabulary.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent';
  /**
   * Size of each page control. Can be a static value or a responsive object.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Disables every control in the group — no page can be selected.
   * @default false
   */
  disabled?: boolean;
  /**
   * Accessible label for the containing `<nav>` landmark.
   * @default 'Pagination'
   */
  ariaLabel?: string;
  /** Additional CSS classes for the outer `<nav>`. */
  className?: string;
}

const variantStyles: Record<
  NonNullable<PaginationProps['variant']>,
  { active: string; inactiveHover: string }
> = {
  primary: {
    active: 'bg-linear-(--gradient-accent) text-base shadow-primary border-transparent',
    inactiveHover: 'hover:border-accent hover:text-accent hover:shadow-primary',
  },
  secondary: {
    active: 'bg-secondary text-base shadow-secondary border-transparent',
    inactiveHover: 'hover:border-secondary hover:text-secondary hover:shadow-secondary',
  },
  accent: {
    active: 'bg-accent text-base shadow-lg-accent border-transparent',
    inactiveHover: 'hover:border-accent hover:text-accent hover:shadow-lg-accent',
  },
};

interface NavButtonProps {
  direction: 'previous' | 'next';
  disabled: boolean;
  onClick: () => void;
  controlBaseClasses: string;
  inactiveHover: string;
}

/**
 * Previous/Next control. Enabled and disabled states use mutually exclusive
 * class strings (never combined in one `cn()` call) so a `hover:shadow-*`
 * class can never collide with `hover:shadow-none` — Tailwind-merge doesn't
 * dedupe this project's custom `--shadow-*` theme tokens, so combining them
 * would leave both in the DOM with the winner decided by CSS source order.
 */
const NavButton: React.FC<NavButtonProps> = ({ direction, disabled, onClick, controlBaseClasses, inactiveHover }) => {
  const isPrevious = direction === 'previous';
  return (
    <li>
      <button
        type="button"
        aria-label={isPrevious ? 'Previous page' : 'Next page'}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          controlBaseClasses,
          'bg-surface border border-muted/30',
          disabled
            ? 'text-secondary opacity-40 cursor-not-allowed'
            : cn('text-secondary cursor-pointer', inactiveHover)
        )}
      >
        <span aria-hidden="true">{isPrevious ? '‹' : '›'}</span>
      </button>
    </li>
  );
};

/**
 * A cyberpunk-styled page control for list/table views with more results
 * than fit on one page. Always controlled via `currentPage`/`onPageChange`,
 * with a compact ellipsis-collapsing mode for large page counts.
 *
 * @example
 * // Basic controlled pagination
 * <Pagination
 *   currentPage={page}
 *   totalPages={12}
 *   onPageChange={setPage}
 * />
 *
 * @example
 * // Wider window around the current page, no boundary pages
 * <Pagination
 *   currentPage={page}
 *   totalPages={200}
 *   onPageChange={setPage}
 *   siblingCount={2}
 *   boundaryCount={0}
 * />
 *
 * @example
 * // Secondary variant, small size, no Previous/Next
 * <Pagination
 *   currentPage={page}
 *   totalPages={5}
 *   onPageChange={setPage}
 *   variant="secondary"
 *   size="sm"
 *   showPrevNext={false}
 * />
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  compact = true,
  siblingCount = 1,
  boundaryCount = 1,
  showPrevNext = true,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ariaLabel = 'Pagination',
  className = '',
}) => {
  if (totalPages > 0 && (currentPage < 1 || currentPage > totalPages)) {
    warnOnce(
      `pagination-oob-${currentPage}-${totalPages}`,
      `Pagination: currentPage={${currentPage}} is out of range for ${totalPages} page(s) (valid: 1-${totalPages}).`
    );
  }

  // Clamped once and reused everywhere below, so an out-of-range `currentPage`
  // (e.g. a stale prop after a filtered list shrinks) can't leave Previous/Next
  // and the active-page highlight disagreeing about what's "current".
  const safeCurrentPage =
    totalPages > 0 ? Math.min(Math.max(currentPage, 1), totalPages) : currentPage;

  const goTo = useCallback(
    (page: number) => {
      if (disabled || page < 1 || page > totalPages || page === safeCurrentPage) return;
      onPageChange(page);
    },
    [disabled, totalPages, safeCurrentPage, onPageChange]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (disabled) return;
      if (event.key === 'Home') {
        event.preventDefault();
        goTo(1);
      } else if (event.key === 'End') {
        event.preventDefault();
        goTo(totalPages);
      }
    },
    [disabled, goTo, totalPages]
  );

  const items: PageItem[] = useMemo(
    () =>
      totalPages < 1
        ? []
        : compact
          ? getCompactPageItems(safeCurrentPage, totalPages, siblingCount, boundaryCount)
          : range(1, totalPages),
    [compact, safeCurrentPage, totalPages, siblingCount, boundaryCount]
  );

  if (totalPages < 1) return null;

  const sizeClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.pagination);
  const { active: activeClasses, inactiveHover } = variantStyles[variant];

  const controlBaseClasses = cn(
    'flex items-center justify-center rounded-md font-bold leading-none transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
    sizeClasses
  );

  return (
    <nav aria-label={ariaLabel} className={cn('inline-flex', className)} onKeyDown={handleKeyDown}>
      <ul className="flex items-center gap-1.5 list-none m-0 p-0">
        {showPrevNext && (
          <NavButton
            direction="previous"
            disabled={disabled || safeCurrentPage <= 1}
            onClick={() => goTo(safeCurrentPage - 1)}
            controlBaseClasses={controlBaseClasses}
            inactiveHover={inactiveHover}
          />
        )}

        {items.map((item, index) =>
          item === ELLIPSIS ? (
            <li key={`ellipsis-${index}`} aria-hidden="true">
              <span className={cn('flex items-center justify-center select-none text-muted', sizeClasses)}>
                &#8230;
              </span>
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                aria-label={`Page ${item}`}
                aria-current={item === safeCurrentPage ? 'page' : undefined}
                disabled={disabled}
                onClick={() => goTo(item)}
                className={cn(
                  controlBaseClasses,
                  disabled
                    ? 'bg-base border border-muted/20 text-muted/40 cursor-not-allowed opacity-50'
                    : item === safeCurrentPage
                      ? cn(activeClasses, 'cursor-default')
                      : cn('bg-surface border border-muted/30 text-muted cursor-pointer', inactiveHover)
                )}
              >
                {item}
              </button>
            </li>
          )
        )}

        {showPrevNext && (
          <NavButton
            direction="next"
            disabled={disabled || safeCurrentPage >= totalPages}
            onClick={() => goTo(safeCurrentPage + 1)}
            controlBaseClasses={controlBaseClasses}
            inactiveHover={inactiveHover}
          />
        )}
      </ul>
    </nav>
  );
};

Pagination.displayName = 'CyberUI.Pagination';

export default memo(Pagination);
