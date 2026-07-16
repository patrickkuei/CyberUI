import React, { useCallback, useId, useRef, useState } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * A single collapsible section within an Accordion.
 */
export interface AccordionItem {
  /**
   * Stable identifier for the item, used to track open/closed state and to
   * build the `id`/`aria-controls` wiring between header and panel.
   * Auto-generated from the item's index when omitted — pass an explicit
   * `id` if `items` can be reordered or spliced, so open state stays
   * attached to the right item instead of the item that now occupies its
   * old index.
   */
  id?: string;
  /** Header text for the collapsible section. */
  title: string;
  /** Content rendered inside the panel when the section is expanded. */
  content: React.ReactNode;
  /**
   * Disables toggling this item. It renders dimmed, is skipped by
   * `ArrowUp`/`ArrowDown`/`Home`/`End` keyboard navigation, and is removed
   * from the native tab order (same as a disabled `<button>`).
   * @default false
   */
  disabled?: boolean;
}

/**
 * Props for the Accordion component.
 */
export interface AccordionProps {
  /** Sections to render, in order. */
  items: AccordionItem[];
  /**
   * Whether one panel or several panels can be open at once.
   * - `single`: opening a panel closes any other open panel.
   * - `multiple`: panels open and close independently.
   * @default 'single'
   */
  mode?: 'single' | 'multiple';
  /**
   * Initial open item id(s) for uncontrolled usage. Ignored when `openIds`
   * is provided.
   */
  defaultOpenIds?: string[];
  /**
   * Controlled open item id(s). When set, the Accordion stops managing its
   * own open state and `onOpenIdsChange` becomes the only way to react to
   * header toggles.
   */
  openIds?: string[];
  /**
   * Fired whenever a header is toggled, with the resulting open id(s) —
   * a single-element (or empty) array in `single` mode, any length in
   * `multiple` mode.
   */
  onOpenIdsChange?: (openIds: string[]) => void;
  /**
   * Header padding and text size. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /** Additional CSS classes for the outer container. */
  className?: string;
}

interface ResolvedAccordionItem extends AccordionItem {
  resolvedId: string;
}

/**
 * A cyberpunk-styled collapsible section list for FAQs, settings panels,
 * and other grouped content. Expanded panels get a neon accent border and
 * a rotating glyph indicator; height transitions are pure CSS (no JS
 * measuring).
 *
 * @example
 * // Single-open FAQ list (uncontrolled)
 * <Accordion
 *   items={[
 *     { title: 'What is a neural link?', content: 'A direct interface between mind and machine.' },
 *     { title: 'Is it reversible?', content: 'No. Proceed with caution.' },
 *   ]}
 * />
 *
 * @example
 * // Multiple panels open at once, controlled
 * <Accordion
 *   mode="multiple"
 *   openIds={openIds}
 *   onOpenIdsChange={setOpenIds}
 *   items={sections}
 * />
 */
const Accordion: React.FC<AccordionProps> = ({
  items,
  mode = 'single',
  defaultOpenIds,
  openIds: controlledOpenIds,
  onOpenIdsChange,
  size = 'md',
  className = '',
}) => {
  const generatedId = useId();
  const [internalOpenIds, setInternalOpenIds] = useState<string[]>(defaultOpenIds ?? []);
  const isControlled = controlledOpenIds !== undefined;
  const openIds = isControlled ? controlledOpenIds : internalOpenIds;

  const headerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const resolvedItems: ResolvedAccordionItem[] = items.map((item, index) => ({
    ...item,
    resolvedId: item.id ?? `${generatedId}-item-${index}`,
  }));

  const toggleItem = useCallback(
    (id: string) => {
      const isOpen = openIds.includes(id);
      const next =
        mode === 'multiple'
          ? isOpen
            ? openIds.filter((openId) => openId !== id)
            : [...openIds, id]
          : isOpen
            ? []
            : [id];
      if (!isControlled) setInternalOpenIds(next);
      onOpenIdsChange?.(next);
    },
    [mode, openIds, isControlled, onOpenIdsChange]
  );

  const focusHeaderAt = (index: number) => {
    headerRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabledIndices = resolvedItems
      .map((item, i) => (item.disabled ? -1 : i))
      .filter((i) => i !== -1);
    if (enabledIndices.length === 0) return;
    const currentPos = enabledIndices.indexOf(index);

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        const nextPos = (currentPos + 1) % enabledIndices.length;
        focusHeaderAt(enabledIndices[nextPos]);
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        const prevPos = (currentPos - 1 + enabledIndices.length) % enabledIndices.length;
        focusHeaderAt(enabledIndices[prevPos]);
        break;
      }
      case 'Home': {
        event.preventDefault();
        focusHeaderAt(enabledIndices[0]);
        break;
      }
      case 'End': {
        event.preventDefault();
        focusHeaderAt(enabledIndices[enabledIndices.length - 1]);
        break;
      }
      default:
        break;
    }
  };

  const sizeClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.accordion);

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {resolvedItems.map((item, index) => {
        const isOpen = openIds.includes(item.resolvedId);
        const headerId = `${item.resolvedId}-header`;
        const panelId = `${item.resolvedId}-panel`;

        return (
          <div
            key={item.resolvedId}
            className={cn(
              'rounded-lg border bg-surface transition-colors duration-300 overflow-hidden',
              isOpen ? 'border-accent shadow-md-accent' : 'border-border-default'
            )}
          >
            <h3 className="m-0">
              <button
                ref={(el) => {
                  headerRefs.current[index] = el;
                }}
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => toggleItem(item.resolvedId)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  'flex w-full items-center justify-between gap-3 text-left font-bold transition-colors duration-200 outline-none',
                  sizeClasses,
                  item.disabled
                    ? 'text-muted/40 cursor-not-allowed'
                    : cn('cursor-pointer hover:text-secondary', isOpen ? 'text-secondary' : 'text-default')
                )}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'shrink-0 text-sm transition-transform duration-300',
                    isOpen ? 'rotate-180 text-accent' : 'rotate-0 text-muted'
                  )}
                >
                  ▾
                </span>
              </button>
            </h3>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className="px-4 pb-4 text-sm text-muted"
                >
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = 'CyberUI.Accordion';

export default Accordion;
