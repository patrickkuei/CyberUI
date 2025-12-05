import type { Meta, StoryObj } from '@storybook/react-vite';
import SectionTitle from './SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A section title component with a cyberpunk-styled gradient line.

**Usage:**

\`\`\`tsx
import { SectionTitle } from 'cyberui-2045';

<SectionTitle>System Status</SectionTitle>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`children\` | \`React.ReactNode\` | ✅ | - | The title text content |
| \`showLine\` | \`boolean\` | ❌ | \`true\` | Whether to show a decorative gradient line |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Title size (supports responsive values) |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Title text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Title size (supports responsive values)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'System Overview',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <SectionTitle size="sm">Small Title</SectionTitle>
      <SectionTitle size="md">Medium Title (Default)</SectionTitle>
      <SectionTitle size="lg">Large Title</SectionTitle>
    </div>
  ),
};
