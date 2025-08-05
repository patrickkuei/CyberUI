import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  </svg>
);

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed input component with multiple variants, icon support, and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Input } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

<Input
  variant="primary"
  label="Neural Interface Command"
  placeholder="Enter command..."
  helperText="Awaiting neural input..."
/>

<Input
  variant="secondary"
  label="Database Query"
  placeholder="Search database..."
  leftIcon={<SearchIcon />}
/>

<Input variant="primary" />
<Input variant="secondary" />
<Input variant="danger" />
<Input variant="ghost" />

<Input variant="primary" size="sm" placeholder="Small input" />
<Input variant="primary" size="lg" placeholder="Large input" />

<Input variant="primary" size={{ base: 'sm', lg: 'lg' }} placeholder="Responsive input" />
<Input variant="primary" size={{ base: 'md', md: 'sm', xl: 'lg' }} placeholder="Multi-breakpoint" />

<Input
  variant="primary"
  label="Username"
  error="Username is required"
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Input style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Input size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Input label text |
| \`helperText\` | \`string\` | ❌ | - | Helper text below input |
| \`error\` | \`string\` | ❌ | - | Error message (overrides helperText) |
| \`leftIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the left side |
| \`rightIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the right side |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the input is disabled |

All standard HTML input props are also supported.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Input style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Input size (supports responsive values)',
    },
    label: {
      control: 'text',
      description: 'Input label text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
    },
    error: {
      control: 'text',
      description: 'Error message (overrides helperText)',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Neural Interface Command',
    placeholder: 'Enter command...',
    helperText: 'Awaiting neural input...',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Database Query',
    placeholder: 'Search database...',
    helperText: 'Search through encrypted corporate files',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Critical Access Code',
    placeholder: 'Enter security code...',
    helperText: 'High-security authentication required',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Protocol',
    placeholder: 'Enter stealth command...',
    helperText: 'Minimal trace mode active',
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'secondary',
    label: 'Search Database',
    placeholder: 'Search files...',
    leftIcon: <SearchIcon />,
    helperText: 'Search through encrypted files',
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    label: 'User Authentication',
    placeholder: 'Enter username...',
    rightIcon: <UserIcon />,
    helperText: 'Neural identity verification',
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'danger',
    label: 'Secure Access',
    placeholder: 'Enter credentials...',
    leftIcon: <LockIcon />,
    rightIcon: <UserIcon />,
    helperText: 'Dual-factor authentication',
  },
};

export const WithError: Story = {
  args: {
    variant: 'primary',
    label: 'Neural Link Password',
    placeholder: 'Enter password...',
    error: 'Invalid credentials - access denied',
    defaultValue: 'invalid_password',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'System Offline',
    placeholder: 'Unavailable...',
    helperText: 'Neural interface disconnected',
    disabled: true,
    defaultValue: 'connection_lost',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input Variants</h4>

      <Input
        variant="primary"
        label="Primary Input"
        placeholder="Primary input..."
        helperText="Neural interface ready"
      />

      <Input
        variant="secondary"
        label="Secondary Input"
        placeholder="Secondary input..."
        helperText="Database connection active"
        leftIcon={<SearchIcon />}
      />

      <Input
        variant="danger"
        label="Danger Input"
        placeholder="Critical input..."
        helperText="High-security mode"
        leftIcon={<LockIcon />}
      />

      <Input
        variant="ghost"
        label="Ghost Input"
        placeholder="Minimal input..."
        helperText="Stealth mode active"
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input States</h4>

      <Input
        variant="primary"
        label="Normal State"
        placeholder="Enter text..."
        helperText="Ready for input"
      />

      <Input
        variant="primary"
        label="With Value"
        defaultValue="neural_link_active"
        helperText="Connection established"
      />

      <Input
        variant="primary"
        label="Error State"
        placeholder="Enter text..."
        error="Connection failed - retry authentication"
        defaultValue="invalid_input"
      />

      <Input
        variant="primary"
        label="Disabled State"
        placeholder="System offline..."
        helperText="Neural interface disconnected"
        disabled
        defaultValue="system_locked"
      />
    </div>
  ),
};
