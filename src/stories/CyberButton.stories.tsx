import type { Meta, StoryObj } from '@storybook/react-vite';
import CyberButton from '../components/CyberButton';

const meta: Meta<typeof CyberButton> = {
  title: 'Components/CyberButton',
  component: CyberButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof CyberButton>;

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    className: 'text-lg py-3 px-6',
  },
};