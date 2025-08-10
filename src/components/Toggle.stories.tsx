import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed toggle switch component with smooth animations and neon styling.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Toggle } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const [enabled, setEnabled] = useState(false);

<Toggle
  label="Enable Ghost Mode"
  checked={enabled}
  onChange={setEnabled}
/>

<Toggle variant="primary" label="Primary Toggle" />
<Toggle variant="secondary" label="Secondary Toggle" />
<Toggle variant="accent" label="Accent Toggle" />

<Toggle size="sm" label="Small Toggle" />
<Toggle size="md" label="Medium Toggle" />
<Toggle size="lg" label="Large Toggle" />

<Toggle size={{ base: 'sm', md: 'md', lg: 'lg' }} label="Responsive Toggle" />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Toggle style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Toggle size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Toggle label text |
| \`checked\` | \`boolean\` | ❌ | \`false\` | Whether the toggle is checked |
| \`onChange\` | \`(checked: boolean) => void\` | ❌ | - | Callback when toggle state changes |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the toggle is disabled |

All standard HTML input props are also supported.
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent"],
      description: "Toggle style variant",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Toggle size (supports responsive values)",
    },
    label: {
      control: "text",
      description: "Toggle label text",
    },
    checked: {
      control: "boolean",
      description: "Whether the toggle is checked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
    },
  },
  args: {
    label: "Enable feature",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Neural Interface Active",
    checked: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Database Connection",
    checked: true,
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    label: "Ghost Mode Protocol",
    checked: true,
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Toggle",
    checked: true,
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Toggle",
    checked: true,
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Toggle",
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    variant: "primary",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "System Locked",
    checked: true,
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle Variants</h4>

      <Toggle variant="primary" label="Primary Toggle" checked={true} />

      <Toggle variant="secondary" label="Secondary Toggle" checked={true} />

      <Toggle variant="accent" label="Accent Toggle" checked={true} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle Sizes</h4>

      <Toggle variant="primary" size="sm" label="Small Toggle" checked={true} />

      <Toggle
        variant="primary"
        size="md"
        label="Medium Toggle"
        checked={true}
      />

      <Toggle variant="primary" size="lg" label="Large Toggle" checked={true} />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle States</h4>

      <Toggle variant="primary" label="Normal State" checked={false} />

      <Toggle variant="primary" label="Checked State" checked={true} />

      <Toggle
        variant="primary"
        label="Disabled Unchecked"
        checked={false}
        disabled
      />

      <Toggle
        variant="primary"
        label="Disabled Checked"
        checked={true}
        disabled
      />
    </div>
  ),
};

export const SystemDemo: Story = {
  render: () => {
    const [ghostMode, setGhostMode] = useState(false);
    const [hackingTools, setHackingTools] = useState(true);
    const [neuralLink, setNeuralLink] = useState(false);
    const [firewall] = useState(true);

    return (
      <div className="bg-surface border border-border-default rounded-lg p-6 space-y-4 min-w-[320px]">
        <h3 className="text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2">
          System Configuration
        </h3>

        <Toggle
          label="Ghost Mode"
          variant="primary"
          checked={ghostMode}
          onChange={setGhostMode}
        />

        <Toggle
          label="Hacking Tools"
          variant="accent"
          checked={hackingTools}
          onChange={setHackingTools}
        />

        <Toggle
          label="Neural Link"
          variant="secondary"
          checked={neuralLink}
          onChange={setNeuralLink}
        />

        <Toggle
          label="Firewall Protection"
          variant="primary"
          checked={firewall}
          disabled
        />
      </div>
    );
  },
};
