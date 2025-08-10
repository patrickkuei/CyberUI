import type { Meta, StoryObj } from "@storybook/react-vite";
import Skeleton from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed skeleton loader component for displaying loading placeholders with smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Skeleton } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

<Skeleton variant="text" lines={3} />
<Skeleton variant="circular" size="lg" />
<Skeleton variant="rectangular" height="200px" />
<Skeleton variant="avatar-text" />
<Skeleton variant="card" />

<Skeleton variant="text" size="sm" />
<Skeleton variant="text" size="md" />
<Skeleton variant="text" size="lg" />

<Skeleton width="300px" height="50px" />
<Skeleton animate={false} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'text' \\| 'circular' \\| 'rectangular' \\| 'card' \\| 'avatar-text' \\| 'button-group'\` | ❌ | \`'text'\` | Skeleton variant type |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Skeleton size (supports responsive values) |
| \`lines\` | \`number\` | ❌ | \`3\` | Number of lines for text variant |
| \`width\` | \`string \\| number\` | ❌ | - | Custom width override |
| \`height\` | \`string \\| number\` | ❌ | - | Custom height override |
| \`animate\` | \`boolean\` | ❌ | \`true\` | Whether to show pulse animation |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes |
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "text",
        "circular",
        "rectangular",
        "card",
        "avatar-text",
        "button-group",
      ],
      description: "Skeleton variant type",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Skeleton size (supports responsive values)",
    },
    lines: {
      control: { type: "number", min: 1, max: 10 },
      description: "Number of lines for text variant",
    },
    width: {
      control: "text",
      description: "Custom width override",
    },
    height: {
      control: "text",
      description: "Custom height override",
    },
    animate: {
      control: "boolean",
      description: "Whether to show pulse animation",
    },
  },
  args: {
    variant: "text",
    animate: true,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: "text",
    lines: 3,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Circular: Story = {
  args: {
    variant: "circular",
    size: "md",
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    size: "md",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const AvatarText: Story = {
  args: {
    variant: "avatar-text",
    size: "md",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const ButtonGroup: Story = {
  args: {
    variant: "button-group",
    size: "md",
  },
};

export const Card: Story = {
  args: {
    variant: "card",
    size: "md",
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    variant: "text",
    size: "sm",
    lines: 3,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Medium: Story = {
  args: {
    variant: "text",
    size: "md",
    lines: 3,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    variant: "text",
    size: "lg",
    lines: 3,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithoutAnimation: Story = {
  args: {
    variant: "text",
    animate: false,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const CustomDimensions: Story = {
  args: {
    variant: "rectangular",
    width: "300px",
    height: "100px",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Skeleton Variants</h4>

      <div className="space-y-6">
        <div>
          <h5 className="text-sm text-muted mb-2">Text Lines</h5>
          <Skeleton variant="text" lines={4} />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Circular Avatar</h5>
          <Skeleton variant="circular" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Rectangular Image</h5>
          <Skeleton variant="rectangular" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Avatar + Text</h5>
          <Skeleton variant="avatar-text" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Button Group</h5>
          <Skeleton variant="button-group" />
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Skeleton Sizes</h4>

      <div className="space-y-6">
        <div>
          <h5 className="text-sm text-muted mb-2">Small</h5>
          <Skeleton variant="avatar-text" size="sm" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Medium</h5>
          <Skeleton variant="avatar-text" size="md" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Large</h5>
          <Skeleton variant="avatar-text" size="lg" />
        </div>
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Loading States</h4>

      <div className="space-y-6">
        <div>
          <h5 className="text-sm text-muted mb-2">With Animation</h5>
          <Skeleton variant="text" lines={2} animate={true} />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Without Animation</h5>
          <Skeleton variant="text" lines={2} animate={false} />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Custom Dimensions</h5>
          <Skeleton variant="rectangular" width="250px" height="80px" />
        </div>
      </div>
    </div>
  ),
};

export const CyberpunkDemo: Story = {
  render: () => (
    <div className="bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[500px]">
      <h3 className="text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2">
        Neural Interface Loading...
      </h3>

      {/* User Profile Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">User Profile</h4>
        <Skeleton variant="avatar-text" size="lg" />
      </div>

      {/* System Status Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">System Status</h4>
        <Skeleton variant="text" lines={4} />
      </div>

      {/* Action Buttons Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">Actions</h4>
        <Skeleton variant="button-group" />
      </div>

      {/* Dashboard Card Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">Dashboard</h4>
        <Skeleton variant="card" />
      </div>
    </div>
  ),
};
