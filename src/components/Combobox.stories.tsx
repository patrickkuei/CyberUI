import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Combobox from "./Combobox";
import { CORPORATIONS } from "../constants";

const sectorOptions = [
  { value: "sector-1", label: "Sector 1 — Corporate Plaza" },
  { value: "sector-2", label: "Sector 2 — The Sprawl" },
  { value: "sector-3", label: "Sector 3 — Docklands" },
  { value: "sector-4", label: "Sector 4 — Undercroft" },
  { value: "sector-5", label: "Sector 5 — Black Site", disabled: true },
  { value: "sector-6", label: "Sector 6 — Neon District" },
  { value: "sector-7", label: "Sector 7 — Old Town" },
];

const corporationOptions = CORPORATIONS.map((corp) => ({
  value: corp.toLowerCase().replace(/\s+/g, "_"),
  label: corp,
}));

const tagOptions = [
  { value: "netrunner", label: "Netrunner" },
  { value: "solo", label: "Solo" },
  { value: "fixer", label: "Fixer" },
  { value: "techie", label: "Techie" },
  { value: "rockerboy", label: "Rockerboy" },
];

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  // The filtered listbox is up to ~290px tall (max-h-60 + the input above
  // it) when open; without reserved canvas height every story renders at
  // just the input's collapsed height and the opened listbox gets clipped
  // by Storybook's canvas — the same class of issue DropdownMenu.stories.tsx
  // and DatePicker.stories.tsx already guard against for their own popovers.
  decorators: [
    (Story) => (
      <div className="min-h-[320px] pt-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed searchable dropdown — a text input that filters a list of options as the user types, for long option lists (country pickers, tag search, corporation lookup).

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Combobox } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const options = [
  { value: 'sector-1', label: 'Sector 1 — Corporate Plaza' },
  { value: 'sector-2', label: 'Sector 2 — The Sprawl' },
  { value: 'sector-3', label: 'Sector 3 — Docklands', disabled: true },
];

function Example() {
  const [value, setValue] = useState('');
  return (
    <Combobox
      label="Target Sector"
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Search sectors..."
    />
  );
}

<Combobox variant="primary" options={options} />
<Combobox variant="secondary" options={options} />
<Combobox variant="danger" options={options} />
<Combobox variant="ghost" options={options} />

<Combobox size="sm" options={options} />
<Combobox size="md" options={options} />
<Combobox size="lg" options={options} />

// Free-text entry — commits typed text that doesn't match any option
<Combobox options={tagOptions} allowCustomValue />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`options\` | \`ComboboxOption[]\` | ✅ | - | Full list of options to filter and choose from |
| \`value\` | \`string\` | ❌ | - | Controlled selected value |
| \`defaultValue\` | \`string\` | ❌ | \`''\` | Initial value for uncontrolled usage |
| \`onValueChange\` | \`(value: string) => void\` | ❌ | - | Fired when the value is committed |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Visual style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Input and dropdown size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Label text |
| \`placeholder\` | \`string\` | ❌ | - | Placeholder shown when input is empty |
| \`helperText\` | \`string\` | ❌ | - | Helper text below the input |
| \`error\` | \`string\` | ❌ | - | Error message (overrides helperText) |
| \`allowCustomValue\` | \`boolean\` | ❌ | \`false\` | Allow committing free text that doesn't match any option |
| \`noOptionsText\` | \`string\` | ❌ | \`'No matches found'\` | Message shown when no options match the query |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the combobox is disabled |
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "ghost"],
      description: "Visual style variant",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Input and dropdown size (supports responsive values)",
    },
    label: {
      control: "text",
      description: "Label text",
    },
    placeholder: {
      control: "text",
      description: "Placeholder shown when input is empty",
    },
    helperText: {
      control: "text",
      description: "Helper text below the input",
    },
    error: {
      control: "text",
      description: "Error message (overrides helperText)",
    },
    allowCustomValue: {
      control: "boolean",
      description: "Allow committing free text that doesn't match any option",
    },
    disabled: {
      control: "boolean",
      description: "Whether the combobox is disabled",
    },
  },
  args: {
    options: sectorOptions,
    placeholder: "Search sectors...",
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    label: "Target Sector",
    options: sectorOptions,
    placeholder: "Search sectors...",
    helperText: "Type to filter — arrow keys to navigate",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Corporate Faction",
    options: corporationOptions,
    placeholder: "Search factions...",
    helperText: "Neural link authorization required",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Purge Target",
    options: sectorOptions,
    placeholder: "Search targets...",
    helperText: "Irreversible — verify before confirming",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost Protocol",
    options: sectorOptions,
    placeholder: "Search protocols...",
    helperText: "Stealth mode configuration",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Combobox",
    options: sectorOptions,
    placeholder: "Search...",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Combobox",
    options: sectorOptions,
    placeholder: "Search...",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Combobox",
    options: sectorOptions,
    placeholder: "Search...",
  },
};

export const WithError: Story = {
  args: {
    variant: "primary",
    label: "Corporate Access",
    options: corporationOptions,
    error: "Faction selection required for neural link access",
    placeholder: "Search factions...",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "System Offline",
    options: sectorOptions,
    placeholder: "Unavailable...",
    helperText: "Neural interface disconnected",
    disabled: true,
  },
};

export const AllowCustomValue: Story = {
  args: {
    variant: "primary",
    label: "Tag Search",
    options: tagOptions,
    placeholder: "Search or add a tag...",
    helperText: "Type a new tag and press Enter to add it",
    allowCustomValue: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const ControlledDemo = () => {
      const [value, setValue] = useState("sector-2");
      return (
        <div className="flex flex-col gap-4 min-w-96">
          <Combobox
            variant="primary"
            label="Target Sector"
            options={sectorOptions}
            value={value}
            onValueChange={setValue}
            placeholder="Search sectors..."
            helperText={`Current lock: ${value || "none"}`}
          />
        </div>
      );
    };
    return <ControlledDemo />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Combobox Variants</h4>

      <Combobox
        variant="primary"
        label="Primary Combobox"
        options={sectorOptions}
        placeholder="Primary search..."
        helperText="Neural interface ready"
      />

      <Combobox
        variant="secondary"
        label="Secondary Combobox"
        options={corporationOptions}
        placeholder="Secondary search..."
        helperText="Database connection active"
      />

      <Combobox
        variant="danger"
        label="Danger Combobox"
        options={sectorOptions}
        placeholder="Critical search..."
        helperText="High-security mode"
      />

      <Combobox
        variant="ghost"
        label="Ghost Combobox"
        options={sectorOptions}
        placeholder="Minimal search..."
        helperText="Stealth mode active"
      />

      <h4 className="text-secondary font-semibold pt-4">Sizes</h4>

      <Combobox variant="primary" size="sm" label="Small" options={sectorOptions} placeholder="Small search..." />
      <Combobox variant="primary" size="md" label="Medium" options={sectorOptions} placeholder="Medium search..." />
      <Combobox variant="primary" size="lg" label="Large" options={sectorOptions} placeholder="Large search..." />

      <h4 className="text-secondary font-semibold pt-4">States</h4>

      <Combobox
        variant="primary"
        label="Error State"
        options={sectorOptions}
        error="Selection failed — authorization required"
        placeholder="Search sectors..."
      />

      <Combobox
        variant="primary"
        label="Disabled State"
        options={sectorOptions}
        placeholder="System offline..."
        helperText="Neural interface disconnected"
        disabled
      />

      <Combobox
        variant="primary"
        label="Free-Text Tag Entry"
        options={tagOptions}
        placeholder="Search or add a tag..."
        allowCustomValue
        helperText="Type a new tag and press Enter"
      />
    </div>
  ),
};
