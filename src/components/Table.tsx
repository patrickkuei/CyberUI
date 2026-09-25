import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * The default row shape when `Table` isn't given a row type. Pass your own
 * row type instead (`Table` infers it from `data`) to get typed `render`,
 * `getRowId` and `onRowClick` callbacks.
 */
export type TableRowData = Record<string, React.ReactNode>;

/** Keys of `T` whose values React can render directly as a cell. */
type RenderableKey<T> = {
  [K in keyof T]-?: T[K] extends React.ReactNode ? K : never;
}[keyof T] &
  string;

interface TableColumnBase {
  /** Header cell content. */
  header: React.ReactNode;
  /**
   * Text alignment applied to both the header and body cells of this column.
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /** Fixed column width (e.g. `'120px'`, `'20%'`). Unset columns share remaining space. */
  width?: string;
}

/**
 * Defines one column of a `Table`. Without `render`, `key` must name a
 * property of the row whose value is directly renderable (string, number,
 * element…); with `render`, `key` is just a unique column id.
 */
export type TableColumn<T = TableRowData> = TableColumnBase &
  (
    | {
        /** Property read off each row via `row[key]`; also the column's unique id. */
        key: RenderableKey<T>;
        render?: undefined;
      }
    | {
        /** Unique id for this column. */
        key: string;
        /** Custom cell renderer — use for computed, composite, or non-renderable values (dates, booleans, nested objects). */
        render: (row: T, rowIndex: number) => React.ReactNode;
      }
  );

/**
 * Props for the Table component.
 */
export interface TableProps<T = TableRowData> {
  /** Column definitions, in display order. */
  columns: TableColumn<T>[];
  /** Row data, one entry per rendered row. */
  data: T[];
  /**
   * Derives a stable React key per row.
   * @default (_row, index) => index — pass a real id accessor (e.g. `(row) => row.id`) whenever rows can be added, removed, or reordered, otherwise React can misattribute focus/animation state across re-renders.
   */
  getRowId?: (row: T, rowIndex: number) => string | number;
  /**
   * Visual style.
   * - `default`: flat body rows.
   * - `striped`: alternating row background tint.
   * @default 'default'
   */
  variant?: 'default' | 'striped';
  /**
   * Header/cell padding and text size.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /** Caption rendered above the table, visible to sighted and screen-reader users. Takes precedence over `ariaLabel`. */
  caption?: string;
  /** Accessible name for the table when no `caption` is given. No-op if `caption` is set. */
  ariaLabel?: string;
  /**
   * Content shown in place of rows when `data` is empty.
   * @default 'No data available.'
   */
  emptyMessage?: React.ReactNode;
  /**
   * Fired when a row is clicked, or activated via Enter/Space while it has
   * focus. Providing this makes every row keyboard-focusable (`tabIndex={0}`)
   * — rows keep their native `row` semantics rather than switching to
   * `role="button"`, since overriding a `<tr>`'s role breaks its `<td>`
   * children's column association for assistive tech. The click affordance
   * is visual + keyboard only, not announced as a button.
   */
  onRowClick?: (row: T, rowIndex: number) => void;
  /** Additional CSS classes for the outer scroll container. */
  className?: string;
}

const ALIGN_CLASSES: Record<'left' | 'center' | 'right', string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/**
 * A cyberpunk-styled, semantic data table: neon header row, hover-glow rows,
 * and an optional alternating row tint. Sorting, filtering, pagination, and
 * virtualization are intentionally out of scope — pair with `Pagination` for
 * paged data.
 *
 * @example
 * <Table
 *   columns={[
 *     { key: 'callsign', header: 'Callsign' },
 *     { key: 'status', header: 'Status', align: 'center' },
 *   ]}
 *   data={[
 *     { callsign: 'Ghost', status: 'Online' },
 *     { callsign: 'Wraith', status: 'Offline' },
 *   ]}
 * />
 */
function Table<T = TableRowData>({
  columns,
  data,
  getRowId,
  variant = 'default',
  size = 'md',
  caption,
  ariaLabel,
  emptyMessage = 'No data available.',
  onRowClick,
  className = '',
}: TableProps<T>) {
  const sizeClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.table);

  const handleRowKeyDown = (
    event: React.KeyboardEvent<HTMLTableRowElement>,
    row: T,
    rowIndex: number
  ) => {
    if (!onRowClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onRowClick(row, rowIndex);
    }
  };

  return (
    <div className={cn('overflow-x-auto rounded-xl border border-border-default bg-base', className)}>
      <table className="w-full border-collapse" aria-label={!caption ? ariaLabel : undefined}>
        {caption && (
          <caption className="caption-top text-left text-secondary font-semibold pb-3">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b-2 border-accent bg-surface">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                style={column.width ? { width: column.width } : undefined}
                className={cn(
                  'font-semibold text-secondary',
                  sizeClasses,
                  ALIGN_CLASSES[column.align ?? 'left']
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={cn('text-center text-muted', sizeClasses)}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => {
              const rowKey = getRowId ? getRowId(row, rowIndex) : rowIndex;
              const striped = variant === 'striped' && rowIndex % 2 === 1;
              return (
                <tr
                  key={rowKey}
                  className={cn(
                    'border-b border-border-default last:border-b-0 transition-colors duration-200',
                    'hover:bg-surface hover:shadow-[inset_0_0_0_1px_var(--color-secondary)]',
                    striped && 'bg-surface/40',
                    onRowClick &&
                      'cursor-pointer focus-visible:outline-none focus-visible:bg-surface focus-visible:shadow-[inset_0_0_0_2px_var(--color-accent)]'
                  )}
                  tabIndex={onRowClick ? 0 : undefined}
                  onClick={onRowClick ? () => onRowClick(row, rowIndex) : undefined}
                  onKeyDown={onRowClick ? (event) => handleRowKeyDown(event, row, rowIndex) : undefined}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn('text-default', sizeClasses, ALIGN_CLASSES[column.align ?? 'left'])}
                    >
                      {column.render
                        ? column.render(row, rowIndex)
                        : (row[column.key as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

Table.displayName = "CyberUI.Table";

export default Table;
