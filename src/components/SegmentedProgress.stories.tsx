import type { Meta, StoryObj } from '@storybook/react-vite';
import SegmentedProgress from './SegmentedProgress';

const meta: Meta<typeof SegmentedProgress> = {
  title: 'Components/SegmentedProgress',
  component: SegmentedProgress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed segmented progress bar with neon styling and smooth animations. Uses a fixed 20-segment circular design.

**Usage:**

\`\`\`tsx
import React from 'react';
import { SegmentedProgress } from 'cyberui';
import 'cyberui/styles.css';

// Basic usage
<SegmentedProgress progress={60} />

// With custom styling
<SegmentedProgress progress={45} className="w-48 h-48" />

// With text inside
<SegmentedProgress progress={75} className="w-32 h-32">
  <span className="text-accent font-bold">75%</span>
</SegmentedProgress>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100), each 5% fills one segment |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes for styling and sizing |
| \`children\` | \`React.ReactNode\` | ❌ | \`undefined\` | Optional content to display in the center (e.g., percentage text) |
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
    className: 'w-32 h-32',
  },
};

export const WithText: Story = {
  args: {
    progress: 75,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold text-lg">75%</span>,
  },
};

export const Empty: Story = {
  args: {
    progress: 0,
    className: 'w-32 h-32',
  },
};

export const Full: Story = {
  args: {
    progress: 100,
    className: 'w-32 h-32',
  },
};

export const Large: Story = {
  args: {
    progress: 60,
    className: 'w-48 h-48',
    children: (
      <div className="text-center">
        <div className="text-2xl font-bold text-accent">60%</div>
        <div className="text-sm text-muted">Complete</div>
      </div>
    ),
  },
};
