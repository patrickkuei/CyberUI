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
        component: `A cyberpunk-themed linear progress bar with neon styling and smooth animations. The bar fills the width of its container; \`size\` sets the height only.

**Usage:**

\`\`\`tsx
import React from 'react';
import { LinearProgress } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage (medium height, fills its container)
<LinearProgress progress={50} />

// Different heights
<LinearProgress progress={30} size="sm" />
<LinearProgress progress={75} size="lg" />

// Responsive height
<LinearProgress
  progress={80}
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
/>

// Bar driven every frame (e.g. requestAnimationFrame) — no width transition
<LinearProgress progress={frameProgress} animate={false} />

// Control the width with a wrapper
<div className="w-64">
  <LinearProgress progress={90} />
</div>

// Or with a width class in className
<LinearProgress progress={90} className="w-64" />

// className is added to the base classes, so other classes keep the full width
<LinearProgress progress={90} className="my-4" />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Height of the bar (supports responsive values). Width is not affected |
| \`animate\` | \`boolean\` | ❌ | \`true\` | Animates width changes with a 500 ms ease-out transition. Set to \`false\` for values updated every frame so the bar tracks \`progress\` exactly. The transition is also disabled for users who prefer reduced motion |
| \`className\` | \`string\` | ❌ | - | Classes added after the base classes. A width class (e.g. \`w-64\`) overrides the default \`w-full\` |
`,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-96 max-w-full">
        <Story />
      </div>
    ),
  ],
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
      description: "Height of the progress bar. Width is not affected",
      table: { defaultValue: { summary: "md" } },
    },
    animate: {
      control: "boolean",
      description: "Whether width changes animate with a 500 ms transition",
      table: { defaultValue: { summary: "true" } },
    },
    className: {
      control: "text",
      description:
        "Classes added after the base classes. A width class such as `w-64` overrides the default `w-full`",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sizeStoryDescription = (size: string) =>
  `\`size="${size}"\` sets the bar height. The bar fills its container, here a \`w-96\` wrapper.`;

export const Default: Story = {
  args: {
    progress: 50,
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "The bar fills the width of its container. Here the container is a `w-96` wrapper.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    progress: 30,
    size: "sm",
  },
  parameters: {
    docs: { description: { story: sizeStoryDescription("sm") } },
  },
};

export const Large: Story = {
  args: {
    progress: 90,
    size: "lg",
  },
  parameters: {
    docs: { description: { story: sizeStoryDescription("lg") } },
  },
};

export const Responsive: Story = {
  args: {
    progress: 65,
    size: { base: "sm", md: "md", lg: "lg" },
  },
  parameters: {
    docs: {
      description: {
        story:
          "`size` accepts a responsive value that changes the bar height per breakpoint. The width stays the container width.",
      },
    },
  },
};

export const WidthViaWrapper: Story = {
  render: (args) => (
    <div className="w-48">
      <LinearProgress {...args} />
    </div>
  ),
  args: {
    progress: 75,
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Wrap the bar in a constrained element to control its width. This wrapper is `w-48`.",
      },
    },
  },
};

export const WidthViaClassName: Story = {
  args: {
    progress: 75,
    size: "md",
    className: "w-48",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A width class in `className` overrides the default `w-full`. Other classes, such as `my-4`, are added without changing the width.",
      },
    },
  },
};

export const Animated: Story = {
  args: {
    progress: 70,
    size: "md",
    animate: true,
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
    <div className="space-y-2">
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
    <div className="space-y-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="space-y-1">
          <span className="font-mono text-xs text-muted">size={size}</span>
          <LinearProgress progress={60} size={size} />
        </div>
      ))}
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">w-48 wrapper</span>
        <div className="w-48">
          <LinearProgress progress={60} />
        </div>
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">className=&quot;w-48&quot;</span>
        <LinearProgress progress={60} className="w-48" />
      </div>
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
