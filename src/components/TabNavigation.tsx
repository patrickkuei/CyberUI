import React, { useState, useRef, useEffect } from "react";
import type { ResponsiveValue } from "../utils/responsive";
import {
  getResponsiveClasses,
  RESPONSIVE_SIZE_MAPS,
  useResponsiveValue,
} from "../utils/responsive";

export type TabNavigationMode = "scroll" | "wrap" | "dropdown" | "collapsible";

interface TabDropdownProps {
  tabs: readonly string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  sizeClasses: string;
  containerClassName?: string;
  anchorClassName?: string;
  menuClassName?: string;
  menuItemClassName?: string;
  dropdownLabel?: React.ReactNode;
  anchorIcon?: React.ReactNode;
  showAnchorLabel?: boolean;
  anchorAriaLabel?: string;
  closeOnSelect?: boolean;
}

const TabDropdown: React.FC<TabDropdownProps> = ({
  tabs,
  activeTab,
  onTabChange,
  sizeClasses,
  containerClassName = "",
  anchorClassName = "",
  menuClassName = "",
  menuItemClassName = "",
  dropdownLabel,
  anchorIcon,
  showAnchorLabel = true,
  anchorAriaLabel,
  closeOnSelect = true,
}) => {
  const [open, setOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        // JS-staged close to align with Image component behavior
        setIsClosing(true);
        setTimeout(() => {
          setOpen(false);
          setIsClosing(false);
        }, 180);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = menuRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setAlignRight(rect.right > window.innerWidth);
  }, [open]);

  const toggleOpen = () => {
    if (open) {
      setIsClosing(true);
      setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
      }, 180);
    } else {
      setIsOpening(true);
      setOpen(true);
      setTimeout(() => setIsOpening(false), 30);
    }
  };

  return (
    <div className={`${containerClassName}`}>
      <div ref={wrapperRef} className="relative inline-block">
        <button
          onClick={toggleOpen}
          className={`inline-flex items-center gap-2 ${sizeClasses} bg-surface text-default border-2 border-border-default rounded-lg transition-all duration-300 hover:text-secondary hover:border-secondary hover:cursor-pointer shadow-secondary/30 ${anchorClassName}`}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={!showAnchorLabel ? (anchorAriaLabel ?? (typeof dropdownLabel === 'string' ? dropdownLabel : 'Open tabs')) : undefined}
        >
          {anchorIcon ?? (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <rect x="3" y="5" width="14" height="2" rx="1" />
              <rect x="3" y="9" width="14" height="2" rx="1" />
              <rect x="3" y="13" width="14" height="2" rx="1" />
            </svg>
          )}
          {showAnchorLabel && (
            <span>{dropdownLabel ?? activeTab}</span>
          )}
        </button>

        {(open || isClosing) && (
          <div
            ref={menuRef}
            aria-hidden={!open}
            className={`absolute ${
              alignRight ? "right-0" : "left-0"
            } mt-2 min-w-40 z-50 bg-surface border-2 border-border-default rounded-lg shadow-secondary overflow-hidden ${menuClassName}
              transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity ${
                isOpening || isClosing
                  ? "opacity-0 scale-y-0 pointer-events-none"
                  : "opacity-100 scale-y-100 pointer-events-auto"
              }`}
          >
            <div className="py-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    onTabChange(tab);
                    if (closeOnSelect) {
                      setIsClosing(true);
                      setTimeout(() => {
                        setOpen(false);
                        setIsClosing(false);
                      }, 180);
                    }
                  }}
                className={`w-full flex items-center justify-between text-left px-4 py-2 font-bold transition-colors duration-200 outline-none hover:cursor-pointer ${
                  activeTab === tab
                    ? "text-secondary relative pl-4 before:content-[''] before:h-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[3px] before:rounded before:bg-accent before:shadow-lg-accent"
                    : "text-default hover:text-secondary hover:bg-base/70"
                } ${menuItemClassName}`}
                >
                  <span>{tab}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export interface TabNavigationProps {
  tabs: readonly string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  size?: ResponsiveValue<"sm" | "md" | "lg">;
  mode?: ResponsiveValue<TabNavigationMode>;
  containerClassName?: string;
  tabsClassName?: string;
  dropdownLabel?: React.ReactNode;
  anchorIcon?: React.ReactNode;
  showAnchorLabel?: boolean;
  anchorAriaLabel?: string;
  closeOnSelect?: boolean;
  anchorClassName?: string;
  menuClassName?: string;
  menuItemClassName?: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
  size = "md",
  mode = "scroll",
  containerClassName = "",
  tabsClassName = "",
  dropdownLabel,
  anchorIcon,
  showAnchorLabel = true,
  anchorAriaLabel,
  closeOnSelect = true,
  anchorClassName = "",
  menuClassName = "",
  menuItemClassName = "",
}) => {
  const getSizeClasses = (
    size: ResponsiveValue<"sm" | "md" | "lg">
  ): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.tabNavigation);
  };

  const sizeClasses = getSizeClasses(size);
  const currentMode = useResponsiveValue<TabNavigationMode>(mode, "scroll");

  const getContainerClasses = (): string => {
    switch (currentMode) {
      case "scroll":
        return "w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-border-default scrollbar-track-transparent hover:scrollbar-thumb-secondary/50 py-1";
      case "wrap":
        return "flex flex-wrap gap-2";
      case "dropdown":
      case "collapsible":
        return "flex space-x-2"; // Will be handled by specific implementations
      default:
        return "flex space-x-2";
    }
  };

  const tabButtons = (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            ${sizeClasses} font-bold transition-colors duration-200 rounded-t-lg cursor-pointer whitespace-nowrap flex-shrink-0 relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px] after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
            before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[6px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200
            ${
              activeTab === tab
                ? "text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100"
                : `text-muted hover:text-secondary hover:before:opacity-70`
            }
            ${tabsClassName}
          `}
        >
          {tab}
        </button>
      ))}
    </>
  );

  if (currentMode === "dropdown") {
    return (
      <TabDropdown
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        sizeClasses={sizeClasses}
        containerClassName={containerClassName}
        anchorClassName={anchorClassName}
        menuClassName={menuClassName}
        menuItemClassName={menuItemClassName}
        dropdownLabel={dropdownLabel}
        anchorIcon={anchorIcon}
        showAnchorLabel={showAnchorLabel}
        anchorAriaLabel={anchorAriaLabel}
        closeOnSelect={closeOnSelect}
      />
    );
  }

  // Scroll mode uses an inner track to center when not overflowing,
  // while preserving correct scroll extents when overflowing.
  if (currentMode === "scroll") {
    return (
      <div className={`${getContainerClasses()} ${containerClassName}`}>
        <div className="w-max mx-auto flex space-x-2">{tabButtons}</div>
      </div>
    );
  }

  return (
    <div className={`${getContainerClasses()} ${containerClassName}`}>
      {tabButtons}
    </div>
  );
};

export default TabNavigation;
