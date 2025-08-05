import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed badge component with multiple variants, icon support, and interactive capabilities.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Badge } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="accent">Accent</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Responsive sizes
<Badge size={{ base: 'sm', lg: 'lg' }}>Responsive</Badge>
<Badge size={{ base: 'md', md: 'sm', xl: 'lg' }}>Multi-breakpoint</Badge>

<Badge
  variant="success"
  leftIcon={<StatusIcon />}
>
  Online
</Badge>

<Badge
  variant="accent"
  rightIcon={<ArrowIcon />}
>
  Action
</Badge>

// Interactive badges
<Badge
  variant="primary"
  clickable
  onClick={() => console.log('Badge clicked')}
>
  Click Me
</Badge>

// Status indicators
<Badge variant="success">ONLINE</Badge>
<Badge variant="warning">DEGRADED</Badge>
<Badge variant="error">OFFLINE</Badge>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`string\` | ❌ | \`'primary'\` | Badge color variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Badge size (supports responsive values) |
| \`leftIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the left side |
| \`rightIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the right side |
| \`clickable\` | \`boolean\` | ❌ | \`false\` | Whether the badge is clickable with hover effects |
| \`children\` | \`React.ReactNode\` | ✅ | - | Badge content |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes |
| \`onClick\` | \`() => void\` | ❌ | - | Click handler function |

**Variant options:** \`'primary'\`, \`'secondary'\`, \`'accent'\`, \`'success'\`, \`'error'\`, \`'warning'\`

Additional HTML span attributes can be passed and will be applied to the badge element.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'success', 'error', 'warning'],
      description: 'Badge color variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Badge size (supports responsive values)',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the badge is clickable with hover effects',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
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
