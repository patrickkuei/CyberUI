import type { Meta, StoryObj } from '@storybook/react-vite';
import TabNavigation from './TabNavigation';
import { TABS } from '../constants';

const meta: Meta<typeof TabNavigation> = {
  title: 'Components/TabNavigation',
  component: TabNavigation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed tab navigation component with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { TabNavigation } from 'cyberui';
import 'cyberui/styles.css';

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
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`tabs\` | \`readonly Tab[]\` | ✅ | - | Array of tab names to display |
| \`activeTab\` | \`Tab\` | ✅ | - | Currently selected tab name |
| \`onTabChange\` | \`(tab: Tab) => void\` | ✅ | - | Callback function triggered when a tab is clicked |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: false,
      description: 'Array of tab names',
    },
    activeTab: {
      control: {
        type: 'select',
      },
      options: TABS,
      description: 'Currently active tab',
    },
    onTabChange: {
      action: 'tab changed',
      description: 'Callback function when tab is changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: TABS,
    activeTab: 'Home',
    onTabChange: (tab) => console.log('Tab changed to:', tab),
  },
};

export const InteractiveTab: Story = {
  args: {
    tabs: TABS,
    activeTab: 'Interactive',
    onTabChange: (tab) => console.log('Tab changed to:', tab),
  },
};

export const ElementsTab: Story = {
  args: {
    tabs: TABS,
    activeTab: 'Elements',
    onTabChange: (tab) => console.log('Tab changed to:', tab),
  },
};

export const FeedbackTab: Story = {
  args: {
    tabs: TABS,
    activeTab: 'Feedback',
    onTabChange: (tab) => console.log('Tab changed to:', tab),
  },
};
