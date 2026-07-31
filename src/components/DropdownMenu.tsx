import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';
import { cn } from '../utils/cn';

/**
 * A single action within a DropdownMenu.
 */
export interface DropdownMenuItem {
  /** Label text rendered for the item. */
  label: string;
  /** Optional icon rendered to the left of the label. */
  icon?: React.ReactNode;
  /** Fired when the item is activated by click, Enter, or Space. */
  onClick?: () => void;
  /**
   * Disables this item. It renders dimmed and is skipped by arrow-key
   * navigation (same as a disabled `<button>`).
   * @default false
   */
  disabled?: boolean;
  /**
   * Styles the item as a destructive action (red text, matching Button's
   * `danger` variant vocabulary) instead of the default neutral treatment.
   * @default false
   */
  danger?: boolean;
}

/** Props injected onto the trigger element or passed to the trigger render prop. */
export interface DropdownMenuTriggerProps {
  'aria-haspopup': 'menu';
  'aria-expanded': boolean;
  'aria-controls': string;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

/**
 * Props for the DropdownMenu component.
 */
export interface DropdownMenuProps {
  /** Actions to render, in order. */
  items: DropdownMenuItem[];
  /**
   * The trigger that opens the menu. Pass a single React element (e.g. a
   * `Button`) to have it cloned with the required `onClick`/`aria-*`
   * wiring, or a render prop for full control over how those props are
   * applied. If the element already has its own `onClick`/`onKeyDown`,
   * they're called first, before the dropdown's own handling runs.
   *
   * @example
   * // Element trigger
   * <DropdownMenu trigger={<Button variant="secondary">Actions</Button>} items={items} />
   *
   * @example
   * // Render-prop trigger
   * <DropdownMenu
   *   trigger={(triggerProps) => <button {...triggerProps}>Actions</button>}
   *   items={items}
   * />
   */
  trigger: React.ReactElement | ((triggerProps: DropdownMenuTriggerProps) => React.ReactElement);
  /**
   * Horizontal alignment of the menu panel relative to the trigger.
   * Automatically flips to `end` if the panel would overflow the right
   * edge of the viewport when opened.
   * @default 'start'
   */
  align?: 'start' | 'end';
  /**
   * Padding and text size of each menu item. Supports responsive values.
   * @default 'md'
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * Whether selecting an item closes the menu.
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Controlled open state. When set, DropdownMenu stops managing its own
   * open state and `onOpenChange` becomes the only way to react to
   * trigger clicks, item selection, Escape, and outside clicks.
   */
  open?: boolean;
  /** Fired whenever a trigger click, item selection, Escape, or outside click would change visibility. */
  onOpenChange?: (open: boolean) => void;
  /** Disables the trigger and prevents the menu from opening. */
  disabled?: boolean;
  /** Accessible label for the menu panel (`aria-label`). @default 'Menu' */
  ariaLabel?: string;
  /** Additional CSS classes for the outer wrapper. */
  className?: string;
  /** Additional CSS classes for the menu panel. */
  menuClassName?: string;
}

const isElement = (
  trigger: DropdownMenuProps['trigger']
): trigger is React.ReactElement => typeof trigger !== 'function';

/**
 * A cyberpunk-styled dropdown/context menu anchored to a trigger element,
 * reusing TabNavigation's dropdown anchor+menu pattern (click-outside close,
 * viewport-aware alignment, staged open/close transition) with full arrow-key
 * navigation and single/danger item styling.
 *
 * @example
 * // Row action menu
 * <DropdownMenu
 *   trigger={<Button variant="ghost" size="sm">⋯</Button>}
 *   items={[
 *     { label: 'Edit', onClick: handleEdit },
 *     { label: 'Duplicate', onClick: handleDuplicate },
 *     { label: 'Delete', danger: true, onClick: handleDelete },
 *   ]}
 * />
 *
 * @example
 * // Controlled, right-aligned
 * <DropdownMenu
 *   open={open}
 *   onOpenChange={setOpen}
 *   align="end"
 *   trigger={<Button variant="secondary">System</Button>}
 *   items={systemActions}
 * />
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  trigger,
  align = 'start',
  size = 'md',
  closeOnSelect = true,
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  ariaLabel = 'Menu',
  className = '',
  menuClassName = '',
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [alignEnd, setAlignEnd] = useState(align === 'end');
  const [activeIndex, setActiveIndex] = useState(0);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const generatedId = useId();
  const menuId = `dropdown-menu-${generatedId}`;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    };
  }, []);

  const enabledIndices = items
    .map((item, i) => (item.disabled ? -1 : i))
    .filter((i) => i !== -1);

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) setInternalOpen(value);
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  const closeMenu = useCallback(
    (focusTrigger: boolean) => {
      setIsClosing(true);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
        if (focusTrigger) triggerRef.current?.focus();
      }, 180);
    },
    [setOpen]
  );

  const openMenu = useCallback(
    (focusIndex: number) => {
      setIsOpening(true);
      setActiveIndex(focusIndex);
      setOpen(true);
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = setTimeout(() => setIsOpening(false), 30);
    },
    [setOpen]
  );

  const toggleMenu = useCallback(() => {
    if (disabled) return;
    if (open) {
      closeMenu(false);
    } else {
      openMenu(enabledIndices[0] ?? 0);
    }
  }, [disabled, open, closeMenu, openMenu, enabledIndices]);

  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        closeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [open, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const el = menuRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setAlignEnd(align === 'end' || rect.right > window.innerWidth);
  }, [open, align]);

  useEffect(() => {
    if (open && !isOpening) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [open, isOpening, activeIndex]);

  const selectItem = (item: DropdownMenuItem) => {
    if (item.disabled) return;
    item.onClick?.();
    if (closeOnSelect) closeMenu(true);
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openMenu(enabledIndices[0] ?? 0);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openMenu(enabledIndices[enabledIndices.length - 1] ?? 0);
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      closeMenu(false);
    }
  };

  const handleItemKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (enabledIndices.length === 0) return;
    const currentPos = enabledIndices.indexOf(index);

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        const nextPos = (currentPos + 1) % enabledIndices.length;
        setActiveIndex(enabledIndices[nextPos]);
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        const prevPos = (currentPos - 1 + enabledIndices.length) % enabledIndices.length;
        setActiveIndex(enabledIndices[prevPos]);
        break;
      }
      case 'Home': {
        event.preventDefault();
        setActiveIndex(enabledIndices[0]);
        break;
      }
      case 'End': {
        event.preventDefault();
        setActiveIndex(enabledIndices[enabledIndices.length - 1]);
        break;
      }
      case 'Enter':
      case ' ': {
        event.preventDefault();
        selectItem(items[index]);
        break;
      }
      case 'Escape': {
        event.preventDefault();
        closeMenu(true);
        break;
      }
      case 'Tab': {
        closeMenu(false);
        break;
      }
      default:
        break;
    }
  };

  const sizeClasses = getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.dropdownMenu);

  const triggerProps: DropdownMenuTriggerProps = {
    'aria-haspopup': 'menu',
    'aria-expanded': open,
    'aria-controls': menuId,
    onClick: toggleMenu,
    onKeyDown: handleTriggerKeyDown,
  };

  const renderedTrigger = isElement(trigger)
    ? React.cloneElement(trigger, {
        ...triggerProps,
        onClick: (event: React.MouseEvent) => {
          (trigger.props as { onClick?: React.MouseEventHandler }).onClick?.(event);
          toggleMenu();
        },
        onKeyDown: (event: React.KeyboardEvent) => {
          (trigger.props as { onKeyDown?: React.KeyboardEventHandler }).onKeyDown?.(event);
          handleTriggerKeyDown(event);
        },
        'aria-disabled': disabled || undefined,
        ref: (node: HTMLElement | null) => {
          triggerRef.current = node;
          const { ref } = trigger as React.ReactElement & { ref?: React.Ref<HTMLElement> };
          if (typeof ref === 'function') ref(node);
          else if (ref && typeof ref === 'object') (ref as React.RefObject<HTMLElement | null>).current = node;
        },
      })
    : trigger(triggerProps);

  return (
    <div ref={wrapperRef} className={cn('relative inline-block', className)}>
      {!isElement(trigger) ? (
        <span
          ref={(node) => {
            triggerRef.current = node;
          }}
        >
          {renderedTrigger}
        </span>
      ) : (
        renderedTrigger
      )}

      {(open || isClosing) && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={ariaLabel}
          aria-hidden={!open}
          className={cn(
            'absolute z-50 mt-2 min-w-44 overflow-hidden rounded-lg border-2 border-border-default bg-surface shadow-secondary',
            alignEnd ? 'right-0' : 'left-0',
            'transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity',
            isOpening || isClosing
              ? 'pointer-events-none scale-y-0 opacity-0'
              : 'pointer-events-auto scale-y-100 opacity-100',
            menuClassName
          )}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => selectItem(item)}
                onKeyDown={(e) => handleItemKeyDown(e, index)}
                onMouseEnter={() => !item.disabled && setActiveIndex(index)}
                className={cn(
                  'flex w-full items-center gap-2 text-left font-bold outline-none transition-colors duration-200',
                  sizeClasses,
                  item.disabled
                    ? 'cursor-not-allowed text-muted/40'
                    : cn(
                        'cursor-pointer',
                        item.danger
                          ? 'text-error hover:bg-error hover:text-base focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error/70'
                          : 'text-default hover:bg-base/70 hover:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary/70'
                      )
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownMenu.displayName = 'CyberUI.DropdownMenu';

export default DropdownMenu;
