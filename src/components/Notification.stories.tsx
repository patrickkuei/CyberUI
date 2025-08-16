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

## 🚀 Recommended: Use the Notification System

For real applications, use the notification system with provider + hook:

\`\`\`tsx
import React from 'react';
import { CyberNotificationProvider, useCyberNotifications } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// 1. Wrap your app with the provider
function App() {
  return (
    <CyberNotificationProvider position="top-right" defaultDuration={2500}>
      <MyComponent />
    </CyberNotificationProvider>
  );
}

// 2. Use the hook in any component
function MyComponent() {
  const { showNotification } = useCyberNotifications();

  const handleClick = () => {
    showNotification('success', 'NEURAL.SYS', 'Operation completed successfully');
    showNotification('warning', 'SECURITY.SYS', 'Check your input');
    showNotification('error', 'SYSTEM.ERR', 'Something went wrong');
  };

  return <button onClick={handleClick}>Show Notifications</button>;
}
\`\`\`

## 📋 Static Usage (for demos/storybook)

For static displays or when you need full control:

\`\`\`tsx
import { Notification } from 'cyberui-2045';

<Notification
  type="success"
  title="Success"
  message="Operation completed successfully"
/>

<Notification
  type="warning"
  title="Warning" 
  message="Please check your input"
  onClose={() => console.log('Closed')}
/>
\`\`\`

## 📋 API Reference

### CyberNotificationProvider Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`children\` | \`ReactNode\` | ✅ | - | The app content to wrap with notification context |
| \`position\` | \`'top-right' \\| 'top-left' \\| 'bottom-right' \\| 'bottom-left'\` | ❌ | \`'top-right'\` | Position where notifications will appear |
| \`defaultDuration\` | \`number\` | ❌ | \`2500\` | Default auto-hide duration in milliseconds |

### useCyberNotifications Hook

Returns an object with:

| Method | Type | Description |
|--------|------|-------------|
| \`showNotification\` | \`(type, title, message, options?) => string\` | Display a new notification. Returns the notification ID |
| \`hideNotification\` | \`(id: string) => void\` | Manually hide a specific notification |
| \`clearAllNotifications\` | \`() => void\` | Clear all visible notifications |

#### showNotification Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`type\` | \`'success' \\| 'warning' \\| 'error'\` | ✅ | Notification type determining style and icon |
| \`title\` | \`string\` | ✅ | Main heading text |
| \`message\` | \`string\` | ✅ | Descriptive content |
| \`options\` | \`NotificationOptions\` | ❌ | Additional configuration |

#### NotificationOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| \`autoHide\` | \`boolean\` | \`true\` | Whether notification auto-hides |
| \`duration\` | \`number\` | \`defaultDuration\` | Custom duration in milliseconds |

### Notification Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`type\` | \`'success' \\| 'warning' \\| 'error'\` | ✅ | - | Determines the visual style and icon of the notification |
| \`title\` | \`string\` | ✅ | - | The main heading text displayed prominently |
| \`message\` | \`string\` | ✅ | - | The descriptive content below the title |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Notification size (supports responsive values) |
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Notification size (supports responsive values)',
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
