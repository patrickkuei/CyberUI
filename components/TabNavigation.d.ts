import { default as React } from 'react';
import { ResponsiveValue } from '../utils/responsive';
export type TabNavigationMode = "scroll" | "wrap" | "dropdown" | "collapsible";
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
declare const TabNavigation: React.FC<TabNavigationProps>;
export default TabNavigation;
