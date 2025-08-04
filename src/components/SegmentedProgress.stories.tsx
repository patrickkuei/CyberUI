import type { Meta, StoryObj } from '@storybook/react-vite';
import SegmentedProgress from './SegmentedProgress';

const meta: Meta<typeof SegmentedProgress> = {
  title: 'Components/SegmentedProgress',
  component: SegmentedProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    className: 'w-32 h-32',
  },
};

export const WithText: Story = {
  args: {
    progress: 75,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold text-lg">75%</span>,
  },
};

export const Empty: Story = {
  args: {
    progress: 0,
    className: 'w-32 h-32',
  },
};

export const Full: Story = {
  args: {
    progress: 100,
    className: 'w-32 h-32',
  },
};

export const Large: Story = {
  args: {
    progress: 60,
    className: 'w-48 h-48',
    children: <div className="text-center"><div className="text-2xl font-bold text-accent">60%</div><div className="text-sm text-muted">Complete</div></div>,
  },
};
