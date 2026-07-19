import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RadioGroup from './RadioGroup';
import type { RadioOption } from './RadioGroup';

const TIER_OPTIONS: RadioOption[] = [
  { value: 'street', label: 'Street' },
  { value: 'corp', label: 'Corporate' },
  { value: 'net', label: 'Netrunner' },
];

const DIFFICULTY_OPTIONS: RadioOption[] = [
  { value: 'easy', label: 'Recruit' },
  { value: 'normal', label: 'Operative' },
  { value: 'hard', label: 'Ghost' },
];

const CLEARANCE_OPTIONS: RadioOption[] = [
  { value: 'l1', label: 'Level 1 — Public' },
  { value: 'l3', label: 'Level 3 — Restricted', disabled: true },
  { value: 'l5', label: 'Level 5 — Black Site' },
];

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A cyberpunk-styled radio group for mutually-exclusive single-choice selection, matching Checkbox's neon SVG dot treatment.

**Usage:**

\`\`\`tsx
import { RadioGroup } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage (uncontrolled)
<RadioGroup
  label="Access Tier"
  options={[
    { value: 'street', label: 'Street' },
    { value: 'corp', label: 'Corporate' },
    { value: 'net', label: 'Netrunner' },
  ]}
/>

// Controlled, horizontal layout
const [tier, setTier] = useState('street');
<RadioGroup
  label="Access Tier"
  orientation="horizontal"
  value={tier}
  onValueChange={setTier}
  options={tierOptions}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`options\` | \`RadioOption[]\` | ✅ | - | Options to render, in order |
| \`value\` | \`string\` | ❌ | - | Controlled selected value |
| \`defaultValue\` | \`string\` | ❌ | - | Initial selected value, uncontrolled |
| \`onValueChange\` | \`(value: string) => void\` | ❌ | - | Fired when selection changes |
| \`name\` | \`string\` | ❌ | auto-generated | Name for the native \`<input type="radio">\` group |
| \`label\` | \`string\` | ❌ | - | Group label, rendered as a \`<legend>\` |
| \`error\` | \`string\` | ❌ | - | Error message shown below the options |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Radio dot/label size (supports responsive values) |
| \`orientation\` | \`'horizontal' \\| 'vertical' \\| ResponsiveValue<...>\` | ❌ | \`'vertical'\` | Layout direction (supports responsive values) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables every option in the group |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the outer \`<fieldset>\` |

**Keyboard:** \`ArrowDown\`/\`ArrowRight\` and \`ArrowUp\`/\`ArrowLeft\` move focus *and* selection between enabled options, wrapping at the ends (roving tabindex — only the selected, or first enabled, option is a Tab stop).
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Group label, rendered as a legend',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio dot/label size (supports responsive values)',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction (supports responsive values)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables every option in the group',
    },
    error: {
      control: 'text',
      description: 'Error message shown below the options',
    },
    onValueChange: { action: 'changed' },
  },
  args: {
    options: TIER_OPTIONS,
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Access Tier',
    defaultValue: 'street',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Difficulty',
    orientation: 'horizontal',
    options: DIFFICULTY_OPTIONS,
    defaultValue: 'normal',
  },
};

export const Vertical: Story = {
  args: {
    label: 'Access Tier',
    orientation: 'vertical',
    defaultValue: 'corp',
  },
};

export const WithError: Story = {
  args: {
    label: 'Security Protocol',
    error: 'You must select a clearance tier to continue',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RadioGroup label="Small" size="sm" options={TIER_OPTIONS} defaultValue="street" />
      <RadioGroup label="Medium (default)" size="md" options={TIER_OPTIONS} defaultValue="street" />
      <RadioGroup label="Large" size="lg" options={TIER_OPTIONS} defaultValue="street" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Access Tier (locked)',
    disabled: true,
    defaultValue: 'corp',
  },
};

export const DisabledOption: Story = {
  args: {
    label: 'Clearance Level',
    options: CLEARANCE_OPTIONS,
    defaultValue: 'l1',
  },
  parameters: {
    docs: {
      description: {
        story: '"Level 3 — Restricted" is disabled — it renders dimmed and is skipped by both click and arrow-key navigation.',
      },
    },
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Selection lives in the parent — useful for syncing with other controls or a form store.',
      },
    },
  },
  render: () => {
    const ControlledDemo = () => {
      const [tier, setTier] = useState('street');
      return (
        <div className="flex flex-col gap-3">
          <RadioGroup label="Access Tier" options={TIER_OPTIONS} value={tier} onValueChange={setTier} />
          <p className="text-xs text-muted">Selected: {tier}</p>
        </div>
      );
    };
    return <ControlledDemo />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-4 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Vertical (default)</h4>
        <RadioGroup label="Access Tier" options={TIER_OPTIONS} defaultValue="street" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Horizontal</h4>
        <RadioGroup label="Difficulty" orientation="horizontal" options={DIFFICULTY_OPTIONS} defaultValue="normal" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <RadioGroup size="sm" options={TIER_OPTIONS.slice(0, 2)} defaultValue="street" />
          <RadioGroup size="md" options={TIER_OPTIONS.slice(0, 2)} defaultValue="street" />
          <RadioGroup size="lg" options={TIER_OPTIONS.slice(0, 2)} defaultValue="street" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled group</h4>
        <RadioGroup label="Access Tier (locked)" disabled options={TIER_OPTIONS} defaultValue="corp" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled option</h4>
        <RadioGroup label="Clearance Level" options={CLEARANCE_OPTIONS} defaultValue="l1" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Error state</h4>
        <RadioGroup label="Security Protocol" error="You must select a clearance tier to continue" />
      </div>
    </div>
  ),
};
