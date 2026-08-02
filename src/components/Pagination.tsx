import React, { useCallback } from 'react';
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
 * wherever pages were skipped. Falls back to every page when the total fits
 * within the available slots.
 */
function getCompactPageItems(
  current: number,
  total: number,
  siblingCount: number,
  boundaryCount: number
): PageItem[] {
  const totalSlots = boundaryCount * 2 + siblingCount * 2 + 3;
  if (total <= totalSlots) return range(1, total);

  const leftSibling = Math.max(current - siblingCount, boundaryCount + 2);
  const rightSibling = Math.min(current + siblingCount, total - boundaryCount - 1);

  const showLeftEllipsis = leftSibling > boundaryCount + 2;
  const showRightEllipsis = rightSibling < total - boundaryCount - 1;

  const firstPages = range(1, boundaryCount);
  const lastPages = range(total - boundaryCount + 1, total);

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = range(1, boundaryCount + siblingCount * 2 + 1);
    return [...leftRange, ELLIPSIS, ...lastPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = range(total - (boundaryCount + siblingCount * 2), total);
    return [...firstPages, ELLIPSIS, ...rightRange];
  }

  return [...firstPages, ELLIPSIS, ...range(leftSibling, rightSibling), ELLIPSIS, ...lastPages];
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

  const goTo = useCallback(
    (page: number) => {
      if (disabled || page < 1 || page > totalPages || page === currentPage) return;
      onPageChange(page);
    },
    [disabled, totalPages, currentPage, onPageChange]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (disabled) return;
    if (event.key === 'Home') {
      event.preventDefault();
      goTo(1);
    } else if (event.key === 'End') {
      event.preventDefault();
      goTo(totalPages);
    }
  };

  if (totalPages < 1) return null;

  const items: PageItem[] = compact
    ? getCompactPageItems(currentPage, totalPages, siblingCount, boundaryCount)
    : range(1, totalPages);

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
          <li>
            <button
              type="button"
              aria-label="Previous page"
              disabled={disabled || currentPage <= 1}
              onClick={() => goTo(currentPage - 1)}
              className={cn(
                controlBaseClasses,
                'bg-surface border border-muted/30 text-secondary cursor-pointer',
                inactiveHover,
                (disabled || currentPage <= 1) && 'opacity-40 cursor-not-allowed hover:shadow-none hover:border-muted/30 hover:text-secondary'
              )}
            >
              <span aria-hidden="true">&#8249;</span>
            </button>
          </li>
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
                aria-current={item === currentPage ? 'page' : undefined}
                disabled={disabled}
                onClick={() => goTo(item)}
                className={cn(
                  controlBaseClasses,
                  disabled
                    ? 'bg-base border border-muted/20 text-muted/40 cursor-not-allowed opacity-50'
                    : item === currentPage
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
          <li>
            <button
              type="button"
              aria-label="Next page"
              disabled={disabled || currentPage >= totalPages}
              onClick={() => goTo(currentPage + 1)}
              className={cn(
                controlBaseClasses,
                'bg-surface border border-muted/30 text-secondary cursor-pointer',
                inactiveHover,
                (disabled || currentPage >= totalPages) && 'opacity-40 cursor-not-allowed hover:shadow-none hover:border-muted/30 hover:text-secondary'
              )}
            >
              <span aria-hidden="true">&#8250;</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.displayName = 'CyberUI.Pagination';

export default Pagination;
