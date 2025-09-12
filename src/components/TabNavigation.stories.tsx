import type { Meta, StoryObj } from "@storybook/react-vite";
import TabNavigation from "./TabNavigation";
import { DEMO_TABS } from "../constants";

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
| \`tabs\` | \`readonly string[]\` | ✅ | - | Array of tab names to display |
| \`activeTab\` | \`string\` | ✅ | - | Currently selected tab name |
| \`onTabChange\` | \`(tab: string) => void\` | ✅ | - | Callback function when a tab is selected |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Tab size (supports responsive values) |
| \`mode\` | \`'scroll' \\| 'wrap' \\| 'dropdown' \\| ResponsiveValue<...>\` | ❌ | \`'scroll'\` | Layout mode (supports responsive values) |
| \`containerClassName\` | \`string\` | ❌ | \`''\` | Classes for root container (layout/position) |
| \`tabsClassName\` | \`string\` | ❌ | \`''\` | Classes for each tab button in scroll/wrap |
| \`dropdownLabel\` | \`React.ReactNode\` | ❌ | activeTab | Label/content for dropdown anchor |
| \`anchorIcon\` | \`React.ReactNode\` | ❌ | hamburger | Custom icon element for the dropdown anchor |
| \`showAnchorLabel\` | \`boolean\` | ❌ | true | When false, renders icon-only anchor |
| \`anchorAriaLabel\` | \`string\` | ❌ | - | ARIA label used when label is hidden |
| \`closeOnSelect\` | \`boolean\` | ❌ | true | Close dropdown when selecting a tab |
| \`anchorClassName\` | \`string\` | ❌ | \`''\` | Classes for dropdown anchor button |
| \`menuClassName\` | \`string\` | ❌ | \`''\` | Classes for dropdown menu container |
| \`menuItemClassName\` | \`string\` | ❌ | \`''\` | Classes for dropdown menu items |
`,
      },
      argTypes: {
        // Hide type info since it's in markdown table above
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: false,
      table: {
        category: "Core",
        type: { summary: "readonly string[]" }
      },
      description: "Array of tab names to display"
    },
    activeTab: {
      control: { type: "select" },
      options: DEMO_TABS,
      table: {
        category: "Core",
        type: { summary: "string" }
      },
      description: "Currently active tab"
    },
    onTabChange: {
      action: "tab changed",
      table: {
        category: "Core",
        type: { summary: "(tab: string) => void" }
      },
      description: "Callback when a tab is selected"
    },

    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      table: {
        category: "Responsive",
        type: { summary: "'sm' | 'md' | 'lg' | ResponsiveValue<'sm' | 'md' | 'lg'>" }
      },
      description: "Tab size (supports ResponsiveValue)"
    },
    mode: {
      control: { type: "select" },
      options: ["scroll", "wrap", "dropdown"],
      table: {
        category: "Responsive",
        type: { summary: "'scroll' | 'wrap' | 'dropdown' | ResponsiveValue<TabNavigationMode>" }
      },
      description: "Layout mode (supports ResponsiveValue)"
    },

    containerClassName: {
      control: { type: "text" },
      table: {
        category: "Tab",
        type: { summary: "string" },
        defaultValue: { summary: "''" }
      },
      description: "Classes for root container"
    },
    tabsClassName: {
      control: { type: "text" },
      table: {
        category: "Tab",
        type: { summary: "string" },
        defaultValue: { summary: "''" }
      },
      description: "Classes for each tab button (scroll/wrap)"
    },

    dropdownLabel: {
      control: { type: "text" },
      table: {
        category: "Dropdown",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "activeTab" }
      },
      description: "Anchor label/content in dropdown"
    },
    anchorIcon: {
      control: false,
      table: {
        category: "Dropdown",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "hamburger icon" }
      },
      description: "Custom icon for dropdown anchor"
    },
    showAnchorLabel: {
      control: { type: "boolean" },
      table: {
        category: "Dropdown",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" }
      },
      description: "Render icon-only anchor when false"
    },
    anchorAriaLabel: {
      control: { type: "text" },
      table: {
        category: "Dropdown",
        type: { summary: "string" }
      },
      description: "ARIA label for icon-only anchor"
    },
    closeOnSelect: {
      control: { type: "boolean" },
      table: {
        category: "Dropdown",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" }
      },
      description: "Close menu after selecting a tab"
    },
    anchorClassName: {
      control: { type: "text" },
      table: {
        category: "Dropdown",
        type: { summary: "string" },
        defaultValue: { summary: "''" }
      },
      description: "Classes for dropdown anchor"
    },
    menuClassName: {
      control: { type: "text" },
      table: {
        category: "Dropdown",
        type: { summary: "string" },
        defaultValue: { summary: "''" }
      },
      description: "Classes for dropdown menu container"
    },
    menuItemClassName: {
      control: { type: "text" },
      table: {
        category: "Dropdown",
        type: { summary: "string" },
        defaultValue: { summary: "''" }
      },
      description: "Classes for dropdown menu items"
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
  },
};

export const DropdownMode: Story = {
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
    mode: "dropdown",
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
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
    mode: { base: "dropdown", md: "scroll" },
    size: { base: "sm", md: "md" },
  },
};

export const DropdownCustomLabel: Story = {
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
    mode: "dropdown",
    dropdownLabel: "Sections",
  },
  parameters: { layout: "padded" },
  render: (args) => (
    <div style={{ minHeight: 280, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 16 }}>
      <TabNavigation {...args} />
    </div>
  ),
};

export const DropdownCustomIcon: Story = {
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
    mode: "dropdown",
    anchorIcon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <circle cx="10" cy="10" r="8" />
      </svg>
    ),
  },
  parameters: { layout: "padded" },
  render: (args) => (
    <div style={{ minHeight: 280, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 16 }}>
      <TabNavigation {...args} />
    </div>
  ),
};

export const DropdownIconOnly: Story = {
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: (tab) => console.log("Tab changed to:", tab),
    mode: "dropdown",
    showAnchorLabel: false,
    anchorAriaLabel: "Open tabs",
    anchorIcon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <rect x="4" y="4" width="12" height="12" rx="2" />
      </svg>
    ),
  },
  parameters: { layout: "padded" },
  render: (args) => (
    <div style={{ minHeight: 280, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 16 }}>
      <TabNavigation {...args} />
    </div>
  ),
};
