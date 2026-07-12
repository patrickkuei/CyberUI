import type { Meta, StoryObj } from '@storybook/react-vite';
import FormField from './FormField';

const fieldInputClasses =
  'w-full rounded-lg bg-surface text-default placeholder-muted border-2 border-accent px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-styled wrapper that gives any form control a consistent label, helper text, and error/success validation state — without the control itself needing to know about labels or messages.

Built-in CyberUI controls like \`Input\` and \`Select\` already manage their own label/error wiring; \`FormField\` is for wrapping native elements (\`<textarea>\`, a raw \`<input>\`) or custom/third-party controls that don't.

**Usage:**

\`\`\`tsx
import React from 'react';
import { FormField } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

<FormField label="Transmission Log" helperText="Max 500 characters">
  <textarea className="w-full rounded-lg bg-surface border-2 border-accent p-3" />
</FormField>

<FormField label="Access Code" error="Invalid — access denied">
  <input className="w-full rounded-lg bg-surface border-2 p-3" />
</FormField>

<FormField label="Callsign" success="Callsign verified" required>
  <input className="w-full rounded-lg bg-surface border-2 p-3" />
</FormField>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`label\` | \`string\` | ❌ | - | Label text rendered above the field |
| \`helperText\` | \`string\` | ❌ | - | Helper text, overridden by \`error\`/\`success\` |
| \`error\` | \`string\` | ❌ | - | Error message, sets validation state to error |
| \`success\` | \`string\` | ❌ | - | Success message, sets validation state to success |
| \`required\` | \`boolean\` | ❌ | \`false\` | Appends a \`*\` indicator and sets \`aria-required\` |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Dims label/message and disables the child control |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Label/message font size (supports responsive values) |
| \`children\` | \`React.ReactElement\` | ✅ | - | The form control this field wraps |
| \`id\` | \`string\` | ❌ | - | Id applied to the child control |
| \`className\` | \`string\` | ❌ | - | Additional class name for the outer wrapper |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text rendered above the field',
    },
    helperText: {
      control: 'text',
      description: 'Helper text, overridden by error/success',
    },
    error: {
      control: 'text',
      description: 'Error message, sets validation state to error',
    },
    success: {
      control: 'text',
      description: 'Success message, sets validation state to success',
    },
    required: {
      control: 'boolean',
      description: 'Appends a * indicator and sets aria-required',
    },
    disabled: {
      control: 'boolean',
      description: 'Dims label/message and disables the child control',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Label/message font size (supports responsive values)',
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Callsign',
    helperText: 'Visible to other operatives on the grid',
  },
  render: (args) => (
    <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldInputClasses} placeholder="Enter callsign..." />
      </FormField>
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    label: 'Access Code',
    error: 'Invalid sequence — access denied',
  },
  render: (args) => (
    <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldInputClasses} defaultValue="000-XXX" />
      </FormField>
    </div>
  ),
};

export const SuccessState: Story = {
  args: {
    label: 'Neural Handshake',
    success: 'Handshake verified — link established',
  },
  render: (args) => (
    <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldInputClasses} defaultValue="synced" />
      </FormField>
    </div>
  ),
};

export const Required: Story = {
  args: {
    label: 'Operative Designation',
    required: true,
    helperText: 'Required for grid clearance',
  },
  render: (args) => (
    <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldInputClasses} placeholder="Enter designation..." />
      </FormField>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'System Offline',
    helperText: 'Neural interface disconnected',
    disabled: true,
  },
  render: (args) => (
    <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldInputClasses} defaultValue="connection_lost" />
      </FormField>
    </div>
  ),
};

export const WithTextarea: Story = {
  args: {
    label: 'Transmission Log',
    helperText: 'Max 500 characters',
  },
  render: (args) => (
    <div className="min-w-96">
      <FormField {...args}>
        <textarea className={fieldInputClasses} rows={4} placeholder="Log transmission details..." />
      </FormField>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <FormField label="Small Field" size="sm" helperText="Compact label and message text">
        <input className={fieldInputClasses} placeholder="Small..." />
      </FormField>
      <FormField label="Medium Field" size="md" helperText="Default label and message text">
        <input className={fieldInputClasses} placeholder="Medium..." />
      </FormField>
      <FormField label="Large Field" size="lg" helperText="Large label and message text">
        <input className={fieldInputClasses} placeholder="Large..." />
      </FormField>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">FormField Validation States</h4>

      <FormField label="Default State" helperText="Awaiting neural input...">
        <input className={fieldInputClasses} placeholder="Enter command..." />
      </FormField>

      <FormField label="Required Field" required helperText="Required for grid clearance">
        <input className={fieldInputClasses} placeholder="Enter designation..." />
      </FormField>

      <FormField label="Error State" error="Invalid sequence — access denied">
        <input className={fieldInputClasses} defaultValue="000-XXX" />
      </FormField>

      <FormField label="Success State" success="Handshake verified — link established">
        <input className={fieldInputClasses} defaultValue="synced" />
      </FormField>

      <FormField label="Disabled State" helperText="Neural interface disconnected" disabled>
        <input className={fieldInputClasses} defaultValue="connection_lost" />
      </FormField>
    </div>
  ),
};
