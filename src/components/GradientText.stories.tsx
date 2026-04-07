import type { Meta, StoryObj } from '@storybook/react-vite';
import GradientText from './GradientText';

const meta: Meta<typeof GradientText> = {
  title: 'Components/GradientText',
  component: GradientText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A component for rendering text with cyberpunk-themed gradients.

**Usage:**

\`\`\`tsx
import { GradientText } from 'cyberui-2045';

// Primary gradient
<GradientText variant="primary">CyberUI</GradientText>

// Secondary gradient
<GradientText variant="secondary">System Active</GradientText>

// Accent gradient
<GradientText variant="accent">Warning</GradientText>

// As different element (h1, h2, p, etc.)
<GradientText as="h1" className="text-4xl font-bold">
  Main Title
</GradientText>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`children\` | \`React.ReactNode\` | ✅ | - | The text content to render |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Gradient color variant |
| \`as\` | \`'span' \\| 'h1' \\| 'h2' \\| 'h3' \\| 'h4' \\| 'h5' \\| 'h6' \\| 'p' \\| 'div'\` | ❌ | \`'span'\` | The HTML element to render as |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
      description: 'Gradient color variant',
    },
    as: {
      control: { type: 'text' },
      description: 'HTML element to render as (e.g., h1, span, p)',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Neural Interface Active',
    className: 'text-3xl font-bold',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'System Critical Alert',
    className: 'text-3xl font-bold',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Warning Protocol Engaged',
    className: 'text-3xl font-bold',
  },
};

export const AsHeading: Story = {
  args: {
    as: 'h1',
    variant: 'primary',
    children: 'Main Heading',
    className: 'text-5xl font-black uppercase tracking-tighter',
  },
};
