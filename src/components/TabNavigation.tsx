import React from 'react';
import type { Tab } from '../constants';

interface TabNavigationProps {
  tabs: readonly Tab[];
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            px-6 py-2 font-bold text-lg transition-all duration-300 rounded-t-lg cursor-pointer
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
