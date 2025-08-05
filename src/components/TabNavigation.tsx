import React from 'react';
import type { Tab } from '../constants';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';

export interface TabNavigationProps {
  tabs: readonly Tab[];
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
  size = 'md'
}) => {
  const getSizeClasses = (size: ResponsiveValue<'sm' | 'md' | 'lg'>): string => {
    return getResponsiveClasses(size, RESPONSIVE_SIZE_MAPS.tabNavigation);
  };

  const sizeClasses = getSizeClasses(size);

  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            ${sizeClasses} font-bold transition-all duration-300 rounded-t-lg cursor-pointer
            ${
              activeTab === tab
                ? "bg-surface text-secondary border-2 border-border-default border-b-0 shadow-secondary -mb-[2px] hover:shadow-lg-accent"
                : "text-muted border-b-2 border-border-default hover:text-secondary hover:border-secondary"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
