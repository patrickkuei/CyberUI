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
