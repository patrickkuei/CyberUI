import type { Meta, StoryObj } from '@storybook/react-vite';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A flexible divider component for separating content with cyberpunk styling.

**Usage:**

\`\`\`tsx
import { Divider } from 'cyberui-2045';

// Horizontal dividers
<Divider variant="gradient" />
<Divider variant="solid" />
<Divider variant="dashed" />

// Vertical divider (needs height container)
<div className="h-20 flex">
  <Divider orientation="vertical" />
</div>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'gradient' \\| 'solid' \\| 'dashed'\` | ❌ | \`'gradient'\` | Visual style of the divider |
| \`orientation\` | \`'horizontal' \\| 'vertical'\` | ❌ | \`'horizontal'\` | Orientation of the divider |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    variant: {
      control: { type: 'select' },
      options: ['gradient', 'solid', 'dashed'],
      description: 'Visual style of the divider',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GradientHorizontal: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'gradient',
  },
  render: (args) => (
    <div className="w-full py-4">
      <p className="mb-2 text-muted">Content Above</p>
      <Divider {...args} />
      <p className="mt-2 text-muted">Content Below</p>
    </div>
  ),
};

export const SolidHorizontal: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
  },
  render: (args) => (
    <div className="w-full py-4">
      <p className="mb-2 text-muted">Content Above</p>
      <Divider {...args} />
      <p className="mt-2 text-muted">Content Below</p>
    </div>
  ),
};

export const DashedHorizontal: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'dashed',
  },
  render: (args) => (
    <div className="w-full py-4">
      <p className="mb-2 text-muted">Content Above</p>
      <Divider {...args} />
      <p className="mt-2 text-muted">Content Below</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'gradient',
  },
  render: (args) => (
    <div className="flex h-32 items-center justify-center gap-4">
      <span className="text-muted">Left</span>
      <Divider {...args} />
      <span className="text-muted">Right</span>
    </div>
  ),
};
