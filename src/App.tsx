import React, { useState } from "react";
import "./index.css";
import { TABS } from "./constants";
import type { Tab } from "./constants";
import TabNavigation from "./components/TabNavigation";
import HomeTab from "./components/tabs/HomeTab";
import InteractiveTab from "./components/tabs/InteractiveTab";
import ElementsTab from "./components/tabs/ElementsTab";
import FeedbackTab from "./components/tabs/FeedbackTab";

const DemoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);

  const renderContent = (): React.ReactNode => {
    switch (activeTab) {
      case "Home":
        return <HomeTab />;
      case "Interactive":
        return <InteractiveTab />;
      case "Elements":
        return <ElementsTab />;
      case "Feedback":
        return <FeedbackTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 font-mono bg-base text-default space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Cyberpunk UI Demo
        </h1>
        <p className="text-muted">
          Experience the neon theme in a real interface.
        </p>
      </header>

      <TabNavigation
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="w-full max-w-4xl p-8 bg-surface rounded-b-lg rounded-tr-lg border-2 border-border-default min-h-[400px] flex flex-col items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default DemoPage;
