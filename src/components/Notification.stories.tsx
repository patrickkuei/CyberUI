import type { Meta, StoryObj } from '@storybook/react-vite';
import Notification from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed notification component with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Notification } from 'cyberui';
import 'cyberui/styles.css';

// Success notification
<Notification
  type="success"
  title="Success"
  message="Operation completed successfully"
/>

// Warning notification
<Notification
  type="warning"
  title="Warning"
  message="Please check your input and try again"
/>

// Error notification
<Notification
  type="error"
  title="Error"
  message="Something went wrong. Please try again"
/>

// With close button
<Notification
  type="success"
  title="Dismissible Notification"
  message="This notification can be closed"
  onClose={() => console.log('Notification closed')}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`type\` | \`'success' | 'warning' | 'error'\` | ✅ | - | Determines the visual style and icon of the notification |
| \`title\` | \`string\` | ✅ | - | The main heading text displayed prominently |
| \`message\` | \`string\` | ✅ | - | The descriptive content below the title |
| \`onClose\` | \`() => void\` | ❌ | \`undefined\` | Callback function triggered when close button is clicked. When provided, renders a close button |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error'],
      description: 'The type of notification to display',
    },
    title: {
      control: 'text',
      description: 'The title of the notification',
    },
    message: {
      control: 'text',
      description: 'The message content of the notification',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when notification is closed',
    },
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
