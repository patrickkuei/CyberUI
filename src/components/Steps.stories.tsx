import type { Meta, StoryObj } from '@storybook/react-vite';
import Steps from './Steps';

const meta: Meta<typeof Steps> = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A multi-step progress indicator with cyberpunk styling.

**Usage:**

\`\`\`tsx
import { Steps } from 'cyberui-2045';

const steps = [
  { title: 'Initialization', description: 'System boot sequence' },
  { title: 'Verification', description: 'Biometric scan' },
  { title: 'Access Granted', description: 'Welcome user' },
];

<Steps steps={steps} currentStep={1} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`items\` | \`StepItem[]\` | ✅ | - | Array of step items to display |
| \`current\` | \`number\` | ❌ | \`0\` | Current active step index (0-based) |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |

**StepItem Interface:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| \`title\` | \`string\` | ✅ | Step title |
| \`description\` | \`string\` | ❌ | Optional step description |
| \`status\` | \`'pending' \\| 'current' \\| 'completed' \\| 'error'\` | ❌ | Step status for explicit control |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of step items to display',
    },
    current: {
      control: { type: 'number', min: 0 },
      description: 'Index of the current active step (0-based)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSteps = [
  { title: 'Initialization', description: 'System boot sequence' },
  { title: 'Verification', description: 'Biometric scan' },
  { title: 'Access Granted', description: 'Welcome user' },
];

export const Default: Story = {
  args: {
    items: defaultSteps,
    current: 1,
  },
};

export const Completed: Story = {
  args: {
    items: defaultSteps,
    current: 3,
  },
};
