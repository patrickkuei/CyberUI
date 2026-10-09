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
        component: `A cyberpunk-themed linear progress bar with neon styling and smooth animations. By default the bar has a fixed width chosen by \`size\` (\`sm\` w-48, \`md\` w-80, \`lg\` w-96), and any \`className\` replaces that width. Set \`fullWidth\` to make the bar fill its container.

**Deprecation:** the fixed-width default is deprecated. From 3.0 the bar will fill its container, \`size\` will set the height only, and \`className\` will be added after the base classes. Set \`fullWidth\` now if you want that.

**Usage:**

\`\`\`tsx
import React from 'react';
import { LinearProgress } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage (medium size, w-80)
<LinearProgress progress={50} />

// Different sizes (height and width)
<LinearProgress progress={30} size="sm" />
<LinearProgress progress={75} size="lg" />

// Responsive sizing
<LinearProgress
  progress={80}
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
/>

// Fills its container; size sets the height only
<LinearProgress progress={90} fullWidth />

// With fullWidth, className is added to the base classes
<LinearProgress progress={90} fullWidth className="my-4" />
<LinearProgress progress={90} fullWidth className="w-64" />

// Without fullWidth, any className replaces the size-based width
<LinearProgress progress={90} size="lg" className="w-48 max-w-lg" />

// Bar driven every frame (e.g. requestAnimationFrame) — no width transition
<LinearProgress progress={frameProgress} animate={false} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Height of the bar (supports responsive values). Without \`fullWidth\` it also sets a fixed width: \`sm\` w-48, \`md\` w-80, \`lg\` w-96. That width is deprecated; from 3.0 \`size\` sets the height only |
| \`fullWidth\` | \`boolean\` | ❌ | \`false\` | The bar fills its container (\`w-full\`) and \`className\` is added after the base classes. This becomes the only behaviour in 3.0 |
| \`animate\` | \`boolean\` | ❌ | \`true\` | Animates width changes with a 500 ms ease-out transition. Set to \`false\` for values updated every frame so the bar tracks \`progress\` exactly. The transition is also disabled for users who prefer reduced motion |
| \`className\` | \`string\` | ❌ | - | Custom classes for the track. Without \`fullWidth\`, any \`className\` replaces the size-based width; this is deprecated and from 3.0 \`className\` is always added. With \`fullWidth\`, a width class (e.g. \`w-64\`) overrides \`w-full\` |
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
      description:
        "Size of the progress bar. Sets the height; without `fullWidth` it also sets a fixed width (sm w-48, md w-80, lg w-96). The fixed width is deprecated: from 3.0 `size` sets the height only",
      table: { defaultValue: { summary: "md" } },
    },
    fullWidth: {
      control: "boolean",
      description:
        "Whether the bar fills its container. With `fullWidth`, `className` is added after the base classes. The fixed-width default is deprecated; this becomes the only behaviour in 3.0",
      table: { defaultValue: { summary: "false" } },
    },
    animate: {
      control: "boolean",
      description: "Whether width changes animate with a 500 ms transition",
      table: { defaultValue: { summary: "true" } },
    },
    className: {
      control: "text",
      description:
        "Custom classes for the track. Without `fullWidth`, any `className` replaces the size-based width (deprecated). With `fullWidth`, a width class such as `w-64` overrides `w-full`",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: '`size="md"` gives a `w-80` bar, 3 spacing units high.',
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
    docs: {
      description: {
        story: '`size="sm"` gives a `w-48` bar, 1.5 spacing units high.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    progress: 90,
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: '`size="lg"` gives a `w-96` bar, 4 spacing units high.',
      },
    },
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
        story: "`size` accepts a responsive value that changes the bar height and width per breakpoint.",
      },
    },
  },
};

export const CustomWidth: Story = {
  args: {
    progress: 75,
    size: "md",
    className: "w-48 max-w-md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Without `fullWidth`, a `className` replaces the size-based width, so this bar is `w-48`. Any `className` does this, including one with no width class. This is deprecated: from 3.0 `className` is added after the base classes.",
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    progress: 72,
    size: "md",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "`fullWidth` makes the bar fill its container, here a `w-96` wrapper. `size` sets the height only. This becomes the default in 3.0.",
      },
    },
  },
};

export const FullWidthWithClassName: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">NEURAL SYNC · my-4 keeps the full width</span>
        <LinearProgress {...args} className="my-4" />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">BUFFER · w-48 sets the width</span>
        <LinearProgress {...args} className="w-48" />
      </div>
    </div>
  ),
  args: {
    progress: 64,
    size: "md",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "With `fullWidth`, `className` is added after the base classes. `my-4` leaves the bar full width; a width class such as `w-48` overrides `w-full`.",
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
      <LinearProgress progress={progress} animate={false} fullWidth />
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
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={`full-${size}`} className="space-y-1">
          <span className="font-mono text-xs text-muted">size={size} fullWidth</span>
          <LinearProgress progress={60} size={size} fullWidth />
        </div>
      ))}
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">className=&quot;w-48&quot;</span>
        <LinearProgress progress={60} className="w-48" />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">fullWidth className=&quot;w-48&quot;</span>
        <LinearProgress progress={60} fullWidth className="w-48" />
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
