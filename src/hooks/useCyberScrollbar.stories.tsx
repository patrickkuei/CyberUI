import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { useCyberScrollbar } from "./useCyberScrollbar";

const meta: Meta = {
  title: "Hooks/useCyberScrollbar",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed scrollbar hook that replaces native browser scrollbars with animated arrows and visual effects.

**Usage:**

\`\`\`tsx
import React from 'react';
import { useCyberScrollbar } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Container scrolling
const MyComponent = () => {
  const scrollbarRef = useCyberScrollbar({
    glowColor: 'primary',
    sensitivity: 2
  });

  return (
    <div ref={scrollbarRef} className="h-96 overflow-y-auto">
      {/* Your scrollable content */}
    </div>
  );
};

// Page-level scrolling
const App = () => {
  useCyberScrollbar({
    glowColor: 'secondary',
    pageLevel: true
  });

  return <div>{/* Your app content */}</div>;
};

// Different sensitivity levels
<useCyberScrollbar sensitivity={0.5} /> // Subtle
<useCyberScrollbar sensitivity={2.5} />  // Dramatic

// Different glow colors
<useCyberScrollbar glowColor="primary" />   // Pink/Red
<useCyberScrollbar glowColor="secondary" /> // Cyan
<useCyberScrollbar glowColor="accent" />    // Yellow

// Disable on specific conditions
<useCyberScrollbar disabled={isMobile} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`glowColor\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Color theme for the scrollbar glow effects |
| \`sensitivity\` | \`number\` | ❌ | \`2\` | Scroll velocity sensitivity multiplier (higher = more responsive) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disable the scrollbar completely |
| \`pageLevel\` | \`boolean\` | ❌ | \`undefined\` (auto-detect) | Apply to page-level scrolling instead of container scrolling |
| \`variant\` | \`'default' \\| 'minimal' \\| 'transparent'\` | ❌ | \`'default'\` | Style variant for the scrollbar background (transparent on mobile) |
| \`className\` | \`string\` | ❌ | \`''\` | Custom CSS classes for the scrollbar container |

**Page-level or container:**

1. \`pageLevel: true\` scrolls the page and leaves the returned ref unused.
2. \`pageLevel: false\` is container mode. The container can attach later: the scrollbar appears as soon as the ref points at an element and is removed when it detaches.
3. \`pageLevel\` omitted is decided once, in the first post-commit effect: container mode if the ref is attached, page-level otherwise.

**Behavior:**

- The scrollbar appears and disappears as the scroll target's content grows and shrinks, and restyles when the viewport crosses the 768px mobile breakpoint.
- Scrolling does not re-render the component that calls the hook.
- With \`prefers-reduced-motion: reduce\`, the velocity glow and arrow sequences are skipped and transitions are disabled.
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    glowColor: {
      control: "select",
      options: ["primary", "secondary", "accent"],
      description: "Color theme for the scrollbar glow effects",
    },
    sensitivity: {
      control: { type: "range", min: 0.5, max: 5, step: 0.5 },
      description:
        "Scroll velocity sensitivity multiplier (higher = more responsive)",
    },
    disabled: {
      control: "boolean",
      description: "Disable the cyber scrollbar",
    },
    pageLevel: {
      control: "boolean",
      description:
        "Apply to page-level scrolling instead of container scrolling. Omitted = auto-detect: container mode if the ref is attached on mount, page-level otherwise.",
    },
    variant: {
      control: "select", 
      options: ["default", "minimal", "transparent"],
      description: "Predefined style variant for the scrollbar background (auto-switches to transparent on mobile)",
    },
    className: {
      control: "text",
      description: "Custom CSS classes to apply to the scrollbar container",
    },
  },
  args: {
    glowColor: "primary",
    sensitivity: 2,
    disabled: false,
    variant: "default",
    className: "",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div className="space-y-6">
    <section>
      <h3 className="text-xl font-bold text-primary mb-3">
        🎮 Neural Network Interface
      </h3>
      <p className="text-default leading-relaxed mb-4">
        The cyberpunk scrollbar responds dynamically to your scrolling behavior.
        Scroll slowly to see individual arrows animate in sequence. Scroll
        faster to see more arrows appear and animate more quickly.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-semibold text-secondary mb-3">
        Data Stream Analysis
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-base rounded border border-border-default">
          <h4 className="font-semibold text-accent mb-2">Velocity Detection</h4>
          <p className="text-muted text-sm">
            The scrollbar detects your scroll velocity and adjusts arrow
            animation speed accordingly. Fast scrolling = fast animations.
          </p>
        </div>
        <div className="p-4 bg-base rounded border border-border-default">
          <h4 className="font-semibold text-accent mb-2">
            Direction Awareness
          </h4>
          <p className="text-muted text-sm">
            Arrows appear in the correct direction - up arrows above the pause
            lines when scrolling up, down arrows below when scrolling down.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-lg font-semibold text-accent mb-3">
        Distance Accumulation
      </h3>
      <p className="text-default leading-relaxed mb-4">
        Keep scrolling without stopping to see more arrows appear! The scrollbar
        tracks your cumulative scroll distance during a session, showing more
        arrows as you scroll more. Stop scrolling to see the arrows transition
        to pause lines.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-semibold text-primary mb-3">
        Terminal Output Log
      </h3>
      <div className="bg-base border border-border-default rounded p-4 font-mono text-sm mb-4">
        <div className="text-primary">$ cyber-scroll --initialize</div>
        <div className="text-muted">
          Initializing quantum scroll interface...
        </div>
        <div className="text-secondary">✓ Neural pathways connected</div>
        <div className="text-accent">✓ Velocity sensors calibrated</div>
        <div className="text-primary">✓ Direction matrix synchronized</div>
        <div className="text-muted">System ready. Begin navigation.</div>
      </div>
    </section>

    {/* Neural Node Data Streams */}
    <section>
      <h3 className="text-lg font-semibold text-accent mb-3">
        Neural Node Data Streams
      </h3>
      <div className="space-y-3">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="bg-surface border border-border-default rounded-lg p-4"
          >
            <div className="text-sm text-default">
              Neural Node {i + 1}: {Math.random().toString(36).substring(2, 15)}
            </div>
            <div className="text-xs text-muted mt-1">
              Status: {Math.random() > 0.5 ? "ACTIVE" : "STANDBY"} | Sync:{" "}
              {Math.floor(Math.random() * 100)}% | Latency:{" "}
              {Math.floor(Math.random() * 100)}ms
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h3 className="text-lg font-semibold text-primary mb-3">
        End of Demo Content
      </h3>
      <p className="text-muted text-center py-8">
        Scroll back up to see the scrollbar arrows reverse direction! ⬆️
      </p>
    </section>
  </div>
);

const CyberScrollDemo: React.FC<{
  glowColor?: "primary" | "secondary" | "accent";
  sensitivity?: number;
  disabled?: boolean;
  variant?: "default" | "minimal" | "transparent";
  className?: string;
}> = ({
  glowColor = "primary",
  sensitivity = 2,
  disabled = false,
  variant = "default",
  className = "",
}) => {
  const scrollRef = useCyberScrollbar({
    glowColor,
    sensitivity,
    disabled,
    variant,
    className,
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4 p-4 bg-surface rounded-lg border border-border-default">
        <h3 className="text-lg font-semibold text-primary mb-2">
          🎮 Cyberpunk Scrollbar Demo
        </h3>
        <p className="text-muted text-sm">
          Scroll in the container below to see the animated cyberpunk scrollbar
          with velocity-responsive arrows and dynamic distance-based scaling.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="border-2 border-border-default rounded-lg bg-base overflow-y-auto relative"
        style={{ height: "500px" }}
      >
        <div className="p-6">
          <DemoContent />
        </div>
      </div>

      <div className="mt-4 p-3 bg-base rounded text-xs text-muted">
        <strong>Tips:</strong> Try different scroll speeds and directions to see
        all the scrollbar animations in action! Keep scrolling to see more
        arrows appear.
      </div>
    </div>
  );
};

export const Default: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  args: {
    glowColor: "primary",
    sensitivity: 2,
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center justify-center min-h-screen bg-base p-8">
      <CyberScrollDemo {...args} />
    </div>
  ),
};

const ContentGrowShrinkDemo: React.FC = () => {
  const [shards, setShards] = useState(3);
  const scrollRef = useCyberScrollbar({
    glowColor: "secondary",
    variant: "minimal",
    pageLevel: false,
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4 p-4 bg-surface rounded-lg border border-border-default">
        <h3 className="text-lg font-semibold text-secondary mb-2">
          Data Shard Buffer
        </h3>
        <p className="text-muted text-sm mb-3">
          Inject shards until the buffer overflows and the cyber scrollbar
          appears. Purge the cache and it disappears again.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            className="px-3 py-1 text-sm border border-secondary text-secondary rounded"
            onClick={() => setShards((n) => n + 6)}
          >
            Inject shards
          </button>
          <button
            type="button"
            className="px-3 py-1 text-sm border border-primary text-primary rounded"
            onClick={() => setShards(3)}
          >
            Purge cache
          </button>
          <span className="ml-auto self-center text-xs text-muted">
            {shards} shards loaded
          </span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="border-2 border-border-default rounded-lg bg-base overflow-y-auto"
        style={{ height: "260px" }}
        data-testid="shard-buffer"
      >
        <div className="p-4 space-y-2">
          {Array.from({ length: shards }, (_, i) => (
            <div
              key={i}
              className="bg-surface border border-border-default rounded p-3 text-sm text-default"
            >
              Shard {String(i + 1).padStart(2, "0")} | checksum{" "}
              {((i + 1) * 2654435761 % 4294967296).toString(16)} | ICE: STANDBY
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ContentGrowShrink: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The scrollbar follows the container's content: it appears when the buffer overflows and is removed when the content fits again.",
      },
      story: {
        inline: false,
        iframeHeight: 560,
      },
    },
  },
  render: () => (
    <div className="flex items-center justify-center min-h-screen bg-base p-8">
      <ContentGrowShrinkDemo />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollbars = () => document.querySelectorAll(".cyber-scrollbar");

    // Starts with content that fits: no scrollbar.
    await expect(scrollbars()).toHaveLength(0);

    await userEvent.click(canvas.getByRole("button", { name: "Inject shards" }));
    await waitFor(() => expect(scrollbars()).toHaveLength(1));

    await userEvent.click(canvas.getByRole("button", { name: "Purge cache" }));
    await waitFor(() => expect(scrollbars()).toHaveLength(0));
  },
};
