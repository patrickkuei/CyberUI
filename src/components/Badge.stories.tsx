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

// Neutral outline for quiet labels
<Badge variant="neutral">Operator Call</Badge>

// Flat (no resting shadow) and corner shapes
<Badge variant="secondary" shadow={false}>Included</Badge>
<Badge shape="rounded">Rounded</Badge>
<Badge variant="neutral" shape="square" shadow={false}>Square</Badge>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`string\` | ❌ | \`'primary'\` | Badge color variant |
| \`shadow\` | \`boolean\` | ❌ | \`true\` | Resting drop shadow (\`shadow-lg\`). A clickable badge keeps its hover effect when \`false\` |
| \`shape\` | \`'pill' \\| 'rounded' \\| 'square'\` | ❌ | \`'pill'\` | Corner shape: fully rounded, slightly rounded, or sharp |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Badge size (supports responsive values) |
| \`leftIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the left side |
| \`rightIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the right side |
| \`clickable\` | \`boolean\` | ❌ | \`false\` | Makes the badge interactive: hover effects, pointer cursor, focusable button semantics and keyboard activation |
| \`children\` | \`React.ReactNode\` | ✅ | - | Badge content |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes |
| \`onClick\` | \`() => void\` | ❌ | - | Click handler; fires on click, Enter and Space. Passing it also makes the badge interactive |

**Variant options:** \`'primary'\`, \`'secondary'\`, \`'accent'\`, \`'success'\`, \`'error'\`, \`'warning'\`, \`'neutral'\`

The six color variants are solid fills with dark text. \`neutral\` is transparent with a \`border-default\` outline and default-colored text, and is the same size as a filled badge. Use it for labels that carry no status.

An interactive badge (\`clickable\` or \`onClick\`) stays a \`<span>\` and gets \`role="button"\`, \`tabIndex={0}\` and a focus-visible ring. Enter activates it on keydown and Space on keyup, after a Space keydown on the badge. Keyboard activation dispatches a click event, which bubbles to ancestor click handlers. A non-interactive badge has none of these.

Additional HTML span attributes can be passed and will be applied to the badge element. An explicit \`role\`, \`tabIndex\` or \`aria-*\` attribute takes precedence, and an \`onKeyDown\` or \`onKeyUp\` handler runs before the built-in keyboard activation. Calling \`preventDefault()\` in it skips the activation.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'success', 'error', 'warning', 'neutral'],
      description: 'Badge color variant',
    },
    shadow: {
      control: 'boolean',
      description: 'Whether the badge has its resting drop shadow',
    },
    shape: {
      control: { type: 'select' },
      options: ['pill', 'rounded', 'square'],
      description: 'Corner shape of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Badge size (supports responsive values)',
    },
    clickable: {
      control: 'boolean',
      description: 'Makes the badge interactive: hover effects, pointer cursor, focusable button semantics and keyboard activation',
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

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Unverified Signal',
  },
};

export const Flat: Story = {
  name: 'Without Shadow',
  parameters: {
    docs: {
      description: {
        story: '`shadow={false}` removes the resting drop shadow.',
      },
    },
  },
  args: {
    variant: 'secondary',
    shadow: false,
    children: 'Uplink Included',
  },
};

export const Shapes: Story = {
  name: 'Shape Variants',
  render: () => (
    <div className="flex items-center gap-4">
      <Badge shape="pill" variant="accent">Pill Jack</Badge>
      <Badge shape="rounded" variant="accent">Rounded Chip</Badge>
      <Badge shape="square" variant="accent">Square Port</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Every variant in each shape, with and without the resting shadow.',
      },
    },
  },
  render: () => {
    const variants = ['primary', 'secondary', 'accent', 'success', 'error', 'warning', 'neutral'] as const;
    const shapes = ['pill', 'rounded', 'square'] as const;
    return (
      <div className="space-y-6">
        {[true, false].map((shadow) => (
          <div key={String(shadow)} className="space-y-3">
            <h3 className="text-default font-semibold">{shadow ? 'Shadow on' : 'Shadow off'}</h3>
            {shapes.map((shape) => (
              <div key={shape} className="flex flex-wrap items-center gap-2">
                {variants.map((variant) => (
                  <Badge key={variant} variant={variant} shape={shape} shadow={shadow} size="sm">
                    {variant.toUpperCase()}
                  </Badge>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const QuietLabels: Story = {
  name: 'Quiet Labels Example',
  parameters: {
    docs: {
      description: {
        story: 'Flat, square badges beside outlined option tiles: a neutral label for an open choice and a filled cyan label for an included item.',
      },
    },
  },
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 border border-border-default"></span>
        <span className="text-default">Optic Implant Upgrade</span>
        <Badge variant="neutral" shape="square" shadow={false} size="sm">Operator Call</Badge>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 border border-secondary bg-secondary"></span>
        <span className="text-default">Neural Firewall</span>
        <Badge variant="secondary" shape="square" shadow={false} size="sm">Included</Badge>
      </div>
    </div>
  ),
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
  parameters: {
    docs: {
      description: {
        story: 'Tab to the badge to show its focus ring, then press Enter or Space to fire `onClick`. Screen readers announce it as a button.',
      },
    },
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
