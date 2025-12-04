import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export type TabNavigationMode = "scroll" | "wrap" | "dropdown" | "collapsible";
/**
 * A responsive tab navigation component.
 *
 * @example
 * // Basic tabs
 * <TabNavigation
 *   tabs={['Home', 'Profile', 'Settings']}
 *   activeTab={activeTab}
 *   onTabChange={setActiveTab}
 * />
 *
 * @example
 * // Tabs with dropdown mode for mobile
 * <TabNavigation
 *   tabs={categories}
 *   activeTab={category}
 *   onTabChange={setCategory}
 *   mode="dropdown"
 *   dropdownLabel="Select Category"
 * />
 */
export interface TabNavigationProps {
    /**
     * List of tab labels.
     */
    tabs: readonly string[];
    /**
     * Currently active tab label.
     */
    activeTab: string;
    /**
     * Callback when a tab is selected.
     */
    onTabChange: (tab: string) => void;
    /**
     * Size of the tabs.
     * @default 'md'
     */
    size?: ResponsiveValue<"sm" | "md" | "lg">;
    /**
     * Responsive display mode.
     * - `scroll`: Horizontal scrolling container.
     * - `wrap`: Wraps to new lines.
     * - `dropdown`: Collapses into a dropdown menu.
     * @default 'scroll'
     */
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
declare const TabNavigation: React.FC<TabNavigationProps>;
export default TabNavigation;
