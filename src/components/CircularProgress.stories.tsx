import type { Meta, StoryObj } from '@storybook/react-vite';
import CircularProgress from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed circular progress indicator with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { CircularProgress } from 'cyberui';
import 'cyberui/styles.css';

// Basic usage
<CircularProgress progress={50} radius={20} className="w-32 h-32" />

// With text inside
<CircularProgress progress={75} radius={20} className="w-32 h-32">
  <span className="text-accent font-bold">75%</span>
</CircularProgress>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`radius\` | \`number\` | ✅ | - | The radius of the circle in SVG units |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes for styling and sizing |
| \`children\` | \`React.ReactNode\` | ❌ | \`undefined\` | Optional content to display inside the circle (e.g., percentage text) |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
      description: 'The progress value from 0 to 100',
    },
    radius: {
      control: {
        type: 'range',
        min: 10,
        max: 30,
        step: 1,
      },
      description: 'The radius of the progress circle',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    radius: 20,
    className: 'w-32 h-32',
  },
};

export const WithText: Story = {
  args: {
    progress: 75,
    radius: 20,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold">75%</span>,
  },
};

export const Small: Story = {
  args: {
    progress: 30,
    radius: 15,
    className: 'w-20 h-20',
  },
};

export const Large: Story = {
  args: {
    progress: 90,
    radius: 25,
    className: 'w-48 h-48',
  },
};
