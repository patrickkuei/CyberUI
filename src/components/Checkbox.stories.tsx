import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed checkbox component with custom SVG icons and neon glow effects.

**Usage:**

\`\`\`tsx
import { Checkbox } from 'cyberui-2045';

// Basic usage
<Checkbox label="Enable Neural Link" />

// Controlled usage
<Checkbox
  checked={isChecked}
  onChange={(checked) => setIsChecked(checked)}
  label="System Override"
/>

// With error
<Checkbox label="Security Protocol" error="Authentication failed" />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`label\` | \`string\` | ❌ | - | Label text displayed next to the checkbox |
| \`error\` | \`string\` | ❌ | - | Error message to display below the checkbox |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Checkbox size (supports responsive values) |
| \`checked\` | \`boolean\` | ❌ | - | Checked state (controlled) |
| \`defaultChecked\` | \`boolean\` | ❌ | - | Initial checked state (uncontrolled) |
| \`onChange\` | \`(event: React.ChangeEvent<HTMLInputElement>) => void\` | ❌ | - | Change handler |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the checkbox is disabled |

All standard HTML input props (except 'type') are also supported.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text to display next to the checkbox',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size (supports responsive values)',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state (controlled)',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable Neural Link',
  },
};

export const Checked: Story = {
  args: {
    label: 'System Online',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Access Denied',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Security Protocol',
    error: 'Authentication failed',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Small checkbox" size="sm" />
      <Checkbox label="Medium checkbox (default)" size="md" />
      <Checkbox label="Large checkbox" size="lg" />
    </div>
  ),
};
