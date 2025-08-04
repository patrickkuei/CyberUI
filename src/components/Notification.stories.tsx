import type { Meta, StoryObj } from '@storybook/react-vite';
import Notification from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error'],
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please check your input and try again',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again',
  },
};

export const WithCloseButton: Story = {
  args: {
    type: 'success',
    title: 'Dismissible Notification',
    message: 'This notification can be closed',
    onClose: () => console.log('Notification closed'),
  },
};
