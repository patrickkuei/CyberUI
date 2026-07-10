import type { Meta, StoryObj } from '@storybook/react-vite';
import Tooltip from './Tooltip';
import Button from './Button';
import Badge from './Badge';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A neon-bordered popover that reveals supplemental info on hover or keyboard focus.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Tooltip, Button, Badge } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<Tooltip content="Initiates a full system diagnostic scan.">
  <Button variant="primary">Run Diagnostics</Button>
</Tooltip>

// Placement
<Tooltip content="Cannot be undone." placement="right">
  <Badge variant="error">DANGER</Badge>
</Tooltip>

// Variant
<Tooltip content="Neural link established." variant="accent">
  <Badge variant="success">ONLINE</Badge>
</Tooltip>

// Controlled
const [open, setOpen] = React.useState(false);
<Tooltip content="Manually controlled." open={open} onOpenChange={setOpen}>
  <Button>Toggle</Button>
</Tooltip>

// Disabled
<Tooltip content="Never shows." disabled>
  <Button>No Tooltip</Button>
</Tooltip>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`children\` | \`React.ReactElement\` | ✅ | - | Trigger element (must accept \`aria-describedby\`) |
| \`content\` | \`React.ReactNode\` | ✅ | - | Tooltip panel content |
| \`placement\` | \`'top' \\| 'bottom' \\| 'left' \\| 'right' \\| ResponsiveValue<...>\` | ❌ | \`'top'\` | Side of the trigger the panel is anchored to (supports responsive values) |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Neon color variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Panel text size / padding (supports responsive values) |
| \`delay\` | \`number\` | ❌ | \`200\` | Delay in ms before showing on hover/focus |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables hover/focus behavior entirely |
| \`open\` | \`boolean\` | ❌ | - | Controlled visibility |
| \`onOpenChange\` | \`(open: boolean) => void\` | ❌ | - | Fired on visibility change attempts |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the panel |

Stories below force \`open\` for visual documentation — in real usage the tooltip opens on hover/focus.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Side of the trigger the panel is anchored to',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
      description: 'Neon color variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Panel text size / padding',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables hover/focus behavior entirely',
    },
  },
  args: {
    content: 'Neural link status: stable.',
    open: true,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: 'top',
    variant: 'primary',
  },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button variant="primary">Run Diagnostics</Button>
      </Tooltip>
    </div>
  ),
};

export const Top: Story = {
  args: { placement: 'top', content: 'Executes protocol immediately.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button variant="primary">Execute Protocol</Button>
      </Tooltip>
    </div>
  ),
};

export const Bottom: Story = {
  args: { placement: 'bottom', content: 'Scans local network for threats.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button variant="secondary">Scan System</Button>
      </Tooltip>
    </div>
  ),
};

export const Left: Story = {
  args: { placement: 'left', content: 'Irreversible — proceed with caution.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="error">DANGER</Badge>
      </Tooltip>
    </div>
  ),
};

export const Right: Story = {
  args: { placement: 'right', content: 'Neural link established.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="success">ONLINE</Badge>
      </Tooltip>
    </div>
  ),
};

export const Secondary: Story = {
  args: { variant: 'secondary', content: 'Runs passive diagnostics.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button variant="ghost">Run Diagnostics</Button>
      </Tooltip>
    </div>
  ),
};

export const Accent: Story = {
  args: { variant: 'accent', content: 'Highlights critical systems.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="accent">PRIORITY</Badge>
      </Tooltip>
    </div>
  ),
};

export const Small: Story = {
  args: { size: 'sm', content: 'Compact readout.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button size="sm">Small</Button>
      </Tooltip>
    </div>
  ),
};

export const Medium: Story = {
  args: { size: 'md', content: 'Standard readout.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button size="md">Medium</Button>
      </Tooltip>
    </div>
  ),
};

export const Large: Story = {
  args: { size: 'lg', content: 'Expanded readout.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button size="lg">Large</Button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, open: false, content: 'You should never see this.' },
  render: (args) => (
    <div className="p-16">
      <Tooltip {...args}>
        <Button variant="ghost">No Tooltip</Button>
      </Tooltip>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-16 p-16 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-4">Placements</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="Top placement" placement="top" open>
            <Button variant="primary">Top</Button>
          </Tooltip>
          <Tooltip content="Bottom placement" placement="bottom" open>
            <Button variant="primary">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left placement" placement="left" open>
            <Button variant="primary">Left</Button>
          </Tooltip>
          <Tooltip content="Right placement" placement="right" open>
            <Button variant="primary">Right</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Variants</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="Primary variant" variant="primary" open>
            <Badge variant="primary">Primary</Badge>
          </Tooltip>
          <Tooltip content="Secondary variant" variant="secondary" open>
            <Badge variant="secondary">Secondary</Badge>
          </Tooltip>
          <Tooltip content="Accent variant" variant="accent" open>
            <Badge variant="accent">Accent</Badge>
          </Tooltip>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Sizes</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="Small" size="sm" open>
            <Button size="sm">SM</Button>
          </Tooltip>
          <Tooltip content="Medium" size="md" open>
            <Button size="md">MD</Button>
          </Tooltip>
          <Tooltip content="Large" size="lg" open>
            <Button size="lg">LG</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Disabled</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="You should never see this." disabled>
            <Button variant="ghost">No Tooltip</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};
