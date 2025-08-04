import type { Meta, StoryObj } from '@storybook/react-vite';
import CircularProgress from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    radius: {
      control: { type: 'range', min: 10, max: 30, step: 1 },
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
    radius: 20,
    className: 'w-32 h-32',
  },
};

export const WithText: Story = {
  args: {
    progress: 75,
    radius: 20,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold">75%</span>,
  },
};

export const Small: Story = {
  args: {
    progress: 30,
    radius: 15,
    className: 'w-20 h-20',
  },
};

export const Large: Story = {
  args: {
    progress: 90,
    radius: 25,
    className: 'w-48 h-48',
  },
};
