import type { Meta, StoryObj } from '@storybook/react-vite';
import TabNavigation from './TabNavigation';
import { TABS } from '../constants';

const meta: Meta<typeof TabNavigation> = {
  title: 'Components/TabNavigation',
  component: TabNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: false,
    },
    activeTab: {
      control: { type: 'select' },
      options: TABS,
    },
    onTabChange: { action: 'tab changed' },
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
