import type { Meta, StoryObj } from "@storybook/react-vite";
import TabNavigation from "./TabNavigation";
import { TABS } from "../constants";

const meta: Meta<typeof TabNavigation> = {
  title: "Components/TabNavigation",
  component: TabNavigation,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed tab navigation component with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { TabNavigation } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const tabs = ['Home', 'Interactive', 'Feedback', 'Elements'];

function MyComponent() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <TabNavigation
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}

// Responsive sizes
<TabNavigation
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  size={{ base: 'sm', lg: 'lg' }}
/>

// Responsive mode (mobile dropdown → desktop scroll)
<TabNavigation
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  mode={{ base: 'dropdown', md: 'scroll' }}
  size={{ base: 'sm', md: 'md' }}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`tabs\` | \`readonly Tab[]\` | ✅ | - | Array of tab names to display |
| \`activeTab\` | \`Tab\` | ✅ | - | Currently selected tab name |
| \`onTabChange\` | \`(tab: Tab) => void\` | ✅ | - | Callback function triggered when a tab is clicked |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Tab size (supports responsive values) |
| \`mode\` | \`'scroll' \\| 'wrap' \\| 'dropdown' \\| ResponsiveValue<...>\` | ❌ | \`'scroll'\` | Layout mode (supports responsive values) |
| \`containerClassName\` | \`string\` | ❌ | - | Extra classes for outer container |
| \`tabsClassName\` | \`string\` | ❌ | - | Extra classes for each tab button |
| \`dropdownLabel\` | \`string\` | ❌ | activeTab | Label for dropdown anchor |
| \`closeOnSelect\` | \`boolean\` | ❌ | true | Close dropdown when selecting a tab |
| \`anchorClassName\` | \`string\` | ❌ | - | Extra classes for dropdown anchor button |
| \`menuClassName\` | \`string\` | ❌ | - | Extra classes for dropdown menu container |
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: false,
      description: "Array of tab names",
    },
    activeTab: {
      control: {
        type: "select",
      },
      options: TABS,
      description: "Currently active tab",
    },
    onTabChange: {
      action: "tab changed",
      description: "Callback function when tab is changed",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Tab size (supports responsive values)",
    },
    mode: {
      control: { type: "select" },
      options: ["scroll", "wrap", "dropdown"],
      description: "Layout mode (supports responsive values)",
    },
    containerClassName: {
      control: { type: "text" },
    },
    tabsClassName: {
      control: { type: "text" },
    },
    dropdownLabel: {
      control: { type: "text" },
    },
    closeOnSelect: {
      control: { type: "boolean" },
    },
    anchorClassName: {
      control: { type: "text" },
    },
    menuClassName: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
  },
};

export const DropdownMode: Story = {
  args: {
    tabs: TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
    mode: "dropdown",
    dropdownLabel: "Tabs",
    closeOnSelect: true,
  },
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <div
      style={{
        minHeight: 280,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 16,
      }}
    >
      <TabNavigation {...args} />
    </div>
  ),
};

export const ResponsiveModes: Story = {
  args: {
    tabs: TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
    mode: { base: "dropdown", md: "scroll" },
    size: { base: "sm", md: "md" },
  },
};
