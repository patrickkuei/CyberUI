import type { Meta, StoryObj } from "@storybook/react-vite";
import Select from "./Select";
import { CORPORATIONS } from "../constants";

const corporationOptions = CORPORATIONS.map((corp) => ({
  value: corp.toLowerCase().replace(/\s+/g, "_"),
  label: corp,
}));

const statusOptions = [
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
  { value: "maintenance", label: "Under Maintenance" },
  { value: "critical", label: "Critical Error" },
];

const securityLevelOptions = [
  { value: "guest", label: "Guest Access" },
  { value: "operator", label: "Operator Level" },
  { value: "admin", label: "Administrator" },
  { value: "root", label: "Root Access", disabled: true },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed select dropdown component with multiple variants and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Select } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

<Select
  label="Choose Option"
  options={options}
  placeholder="Select an option..."
  helperText="Choose your preferred option"
/>

<Select variant="primary" options={options} />
<Select variant="secondary" options={options} />
<Select variant="danger" options={options} />
<Select variant="ghost" options={options} />

<Select size="sm" options={options} />
<Select size="md" options={options} />
<Select size="lg" options={options} />

<Select size={{ base: 'sm', md: 'md', lg: 'lg' }} options={options} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Select style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Select size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Select label text |
| \`options\` | \`SelectOption[]\` | ✅ | - | Array of options to display |
| \`placeholder\` | \`string\` | ❌ | - | Placeholder text when no option is selected |
| \`helperText\` | \`string\` | ❌ | - | Helper text below select |
| \`error\` | \`string\` | ❌ | - | Error message (overrides helperText) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the select is disabled |

All standard HTML select props are also supported.
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "ghost"],
      description: "Select style variant",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Select size (supports responsive values)",
    },
    label: {
      control: "text",
      description: "Select label text",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no option is selected",
    },
    helperText: {
      control: "text",
      description: "Helper text below select",
    },
    error: {
      control: "text",
      description: "Error message (overrides helperText)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
  },
  args: {
    options: corporationOptions,
    placeholder: "Choose option...",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Corporate Faction",
    options: corporationOptions,
    placeholder: "Select your faction...",
    helperText: "Choose your corporate allegiance",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "System Status",
    options: statusOptions,
    placeholder: "Select status...",
    helperText: "Current system operational state",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Security Level",
    options: securityLevelOptions,
    placeholder: "Select clearance...",
    helperText: "High-security authorization required",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost Protocol",
    options: statusOptions,
    placeholder: "Select protocol...",
    helperText: "Stealth mode configuration",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Select",
    options: corporationOptions,
    placeholder: "Select...",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Select",
    options: corporationOptions,
    placeholder: "Select...",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Select",
    options: corporationOptions,
    placeholder: "Select...",
  },
};

export const WithError: Story = {
  args: {
    variant: "primary",
    label: "Corporate Access",
    options: corporationOptions,
    error: "Faction selection required for neural link access",
    placeholder: "Select faction...",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "System Offline",
    options: statusOptions,
    placeholder: "Unavailable...",
    helperText: "Neural interface disconnected",
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    variant: "primary",
    options: corporationOptions,
    placeholder: "Select faction...",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select Variants</h4>

      <Select
        variant="primary"
        label="Primary Select"
        options={corporationOptions}
        placeholder="Primary selection..."
        helperText="Neural interface ready"
      />

      <Select
        variant="secondary"
        label="Secondary Select"
        options={statusOptions}
        placeholder="Secondary selection..."
        helperText="Database connection active"
      />

      <Select
        variant="danger"
        label="Danger Select"
        options={securityLevelOptions}
        placeholder="Critical selection..."
        helperText="High-security mode"
      />

      <Select
        variant="ghost"
        label="Ghost Select"
        options={statusOptions}
        placeholder="Minimal selection..."
        helperText="Stealth mode active"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select Sizes</h4>

      <Select
        variant="primary"
        size="sm"
        label="Small Select"
        options={corporationOptions}
        placeholder="Small selection..."
      />

      <Select
        variant="primary"
        size="md"
        label="Medium Select"
        options={corporationOptions}
        placeholder="Medium selection..."
      />

      <Select
        variant="primary"
        size="lg"
        label="Large Select"
        options={corporationOptions}
        placeholder="Large selection..."
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select States</h4>

      <Select
        variant="primary"
        label="Normal State"
        options={corporationOptions}
        placeholder="Select option..."
        helperText="Ready for selection"
      />

      <Select
        variant="primary"
        label="Error State"
        options={corporationOptions}
        error="Selection failed - authorization required"
        placeholder="Select faction..."
      />

      <Select
        variant="primary"
        label="Disabled State"
        options={statusOptions}
        placeholder="System offline..."
        helperText="Neural interface disconnected"
        disabled
      />
    </div>
  ),
};

export const CorporateDemo: Story = {
  render: () => (
    <div className="bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[400px]">
      <h3 className="text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2">
        Corporate Access Terminal
      </h3>

      <Select
        variant="primary"
        label="Corporate Faction"
        options={corporationOptions}
        placeholder="Select your faction..."
        helperText="Neural link authorization required"
      />

      <Select
        variant="secondary"
        label="Security Clearance"
        options={securityLevelOptions}
        placeholder="Select clearance level..."
        helperText="Biometric verification pending"
      />

      <Select
        variant="danger"
        label="System Access"
        options={statusOptions}
        placeholder="Select access mode..."
        helperText="High-security protocol active"
      />
    </div>
  ),
};
