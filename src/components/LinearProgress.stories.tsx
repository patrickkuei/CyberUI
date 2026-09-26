import { useEffect, useState } from "react";
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

// Bar driven every frame (e.g. requestAnimationFrame) — no width transition
<LinearProgress progress={frameProgress} animate={false} />

// Custom width with size
<LinearProgress progress={90} size="lg" className="w-48 max-w-lg" />
// ⚠️ Height classes in className may break the style
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Size variant affecting height and default width (supports responsive values) |
| \`animate\` | \`boolean\` | ❌ | \`true\` | Animates width changes with a 500 ms ease-out transition. Set to \`false\` for values updated every frame so the bar tracks \`progress\` exactly. The transition is also disabled for users who prefer reduced motion |
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
    animate: {
      control: "boolean",
      description: "Whether width changes animate with a 500 ms transition",
      table: { defaultValue: { summary: "true" } },
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

export const Animated: Story = {
  args: {
    progress: 70,
    size: "md",
    animate: true,
    className: "w-80",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default behaviour: changes to `progress` slide in over a 500 ms ease-out transition. Use the controls to change the value.",
      },
    },
  },
};

export const NotAnimated: Story = {
  args: {
    progress: 70,
    size: "md",
    animate: false,
    className: "w-80",
  },
  parameters: {
    docs: {
      description: {
        story:
          "With `animate={false}` the bar has no transition and follows `progress` exactly. Use the controls to change the value.",
      },
    },
  },
};

const FrameDrivenDemo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const durationMs = 4000;
    const tick = (now: number) => {
      const t = ((now - start) % durationMs) / durationMs;
      setProgress(Math.round(t * 1000) / 10);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-80 space-y-2">
      <div className="flex justify-between font-mono text-xs text-muted">
        <span>UPLOADING NEURAL PATCH</span>
        <span>{progress.toFixed(1)}%</span>
      </div>
      <LinearProgress progress={progress} animate={false} />
    </div>
  );
};

export const FrameDriven: Story = {
  render: () => <FrameDrivenDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "`progress` is updated from a `requestAnimationFrame` loop with `animate={false}`, so the bar follows the value on every frame.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">animate (default)</span>
        <LinearProgress progress={60} />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">animate=false</span>
        <LinearProgress progress={60} animate={false} />
      </div>
    </div>
  ),
};
