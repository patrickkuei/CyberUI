import type { Meta, StoryObj } from "@storybook/react-vite";
import LinearProgress from "./LinearProgress";

const meta: Meta<typeof LinearProgress> = {
  title: "Components/LinearProgress",
  component: LinearProgress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed linear progress bar with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { LinearProgress } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage (medium size)
<LinearProgress progress={50} />

// Different sizes
<LinearProgress progress={30} size="sm" />
<LinearProgress progress={75} size="lg" />

// Responsive sizing
<LinearProgress
  progress={80}
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
/>

// Custom width with size
<LinearProgress progress={90} size="lg" className="w-48 max-w-lg" />
// ⚠️ Height classes in className may break the style
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Size variant affecting height and default width (supports responsive values) |
| \`className\` | \`string\` | ❌ | - | CSS classes for container styling (overrides default width) |
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
      description: "The progress value from 0 to 100",
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
      description: "The size variant of the progress bar",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    size: "md",
    className: "w-80",
  },
};

export const Small: Story = {
  args: {
    progress: 30,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    progress: 90,
    size: "lg",
  },
};

export const Responsive: Story = {
  args: {
    progress: 65,
    size: { base: "sm", md: "md", lg: "lg" },
  },
};

export const CustomWidth: Story = {
  args: {
    progress: 75,
    size: "md",
    className: "w-48 max-w-md",
  },
};
