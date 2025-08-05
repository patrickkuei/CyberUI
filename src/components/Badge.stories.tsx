import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The badge color variant',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'success', 'error', 'warning'],
    },
    size: {
      description: 'The badge size',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    clickable: {
      description: 'Whether the badge is clickable with hover effects',
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const AllSizes: Story = {
  name: 'Size Variants',
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
      <Badge size="lg" variant="primary">Large</Badge>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'success',
    children: 'Online',
    leftIcon: <span className="w-2 h-2 bg-base rounded-full mr-2"></span>,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'accent',
    children: 'Status',
    rightIcon: <span className="w-2 h-2 bg-base rounded-full ml-2"></span>,
  },
};

export const Clickable: Story = {
  args: {
    variant: 'primary',
    children: 'Click Me',
    clickable: true,
    onClick: () => alert('Badge clicked!'),
  },
};

export const SecurityClearance: Story = {
  name: 'Security Clearance Example',
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-default font-semibold mb-2">Access Levels:</h3>
        <div className="flex flex-wrap gap-3">
          <Badge
            variant="primary"
            clickable
            leftIcon={<span className="w-2 h-2 bg-base rounded-full mr-2"></span>}
            onClick={() => alert('Administrator access requested')}
          >
            Administrator
          </Badge>
          <Badge
            variant="secondary"
            clickable
            leftIcon={<span className="w-2 h-2 bg-base rounded-full mr-2"></span>}
            onClick={() => alert('Operator access requested')}
          >
            Operator
          </Badge>
          <Badge
            variant="accent"
            clickable
            leftIcon={<span className="w-2 h-2 bg-base rounded-full mr-2"></span>}
            onClick={() => alert('Guest access requested')}
          >
            Guest Access
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const StatusVariants: Story = {
  name: 'Status Examples',
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-default font-semibold mb-2">System Status:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success" size="sm">ONLINE</Badge>
          <Badge variant="warning" size="sm">DEGRADED</Badge>
          <Badge variant="error" size="sm">OFFLINE</Badge>
          <Badge variant="secondary" size="sm">MAINTENANCE</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-default font-semibold mb-2">Priority Levels:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="error">CRITICAL</Badge>
          <Badge variant="warning">HIGH</Badge>
          <Badge variant="accent">MEDIUM</Badge>
          <Badge variant="secondary">LOW</Badge>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-4 p-4 bg-surface rounded-lg">
      <h3 className="text-default font-semibold">Hover Effects Demonstration:</h3>
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary" clickable>Hover Primary</Badge>
        <Badge variant="secondary" clickable>Hover Secondary</Badge>
        <Badge variant="accent" clickable>Hover Accent</Badge>
        <Badge variant="success" clickable>Hover Success</Badge>
        <Badge variant="error" clickable>Hover Error</Badge>
        <Badge variant="warning" clickable>Hover Warning</Badge>
      </div>
      <p className="text-muted text-sm">
        Each badge above demonstrates variant-specific hover shadow effects
      </p>
    </div>
  ),
};
