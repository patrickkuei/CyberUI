import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import Drawer from "./Drawer";
import type { DrawerSide } from "./Drawer";
import Button from "./Button";
import Badge from "./Badge";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-styled slide-in side panel for mobile nav, filters, or detail views without a full page navigation. Shares Modal's controlled \`isOpen\`/\`onClose\` pattern, overlay backdrop, focus restoration, and RGB glow border — sliding in from an edge instead of scaling from the center.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Drawer, Button } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Filters</Button>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Filter Results">
        <p>Drawer content goes here...</p>
      </Drawer>
    </>
  );
}
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`isOpen\` | \`boolean\` | ✅ | - | Controls drawer visibility |
| \`onClose\` | \`() => void\` | ✅ | - | Called when the drawer should close |
| \`children\` | \`React.ReactNode\` | ✅ | - | Drawer content |
| \`side\` | \`'left' \\| 'right' \\| 'top' \\| 'bottom'\` | ❌ | \`'right'\` | Edge the drawer slides in from |
| \`title\` | \`string\` | ❌ | - | Optional header title |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| 'full'\` | ❌ | \`'md'\` | Panel width (left/right) or height (top/bottom) |
| \`variant\` | \`'default' \\| 'danger'\` | ❌ | \`'default'\` | RGB or red error glow |
| \`closeOnOverlayClick\` | \`boolean\` | ❌ | \`true\` | Allow closing by clicking the overlay |
| \`closeOnEscape\` | \`boolean\` | ❌ | \`true\` | Allow closing with Escape |
| \`showCloseButton\` | \`boolean\` | ❌ | \`true\` | Show the header close (×) button |
| \`ariaLabel\` | \`string\` | ❌ | \`'Drawer'\` | Accessible name when no \`title\` is set |
| \`className\` | \`string\` | ❌ | \`''\` | Additional panel CSS classes |
| \`overlayClassName\` | \`string\` | ❌ | \`''\` | Additional overlay CSS classes |
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean", description: "Controls drawer visibility" },
    side: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
      description: "Edge the drawer slides in from",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Panel width (left/right) or height (top/bottom)",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "danger"],
      description: "RGB or red error glow",
    },
    title: { control: "text", description: "Optional header title" },
    closeOnOverlayClick: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
    showCloseButton: { control: "boolean" },
    children: { control: false, description: "Drawer content" },
    onClose: { action: "closed", description: "Close callback" },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerWrapper: React.FC<{
  storyName: string;
  side?: DrawerSide;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  variant?: "default" | "danger";
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}> = ({ storyName, side = "right", size = "md", variant = "default", closeOnOverlayClick = true, showCloseButton = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-base p-8">
      <Button onClick={() => setIsOpen(true)} variant="ghost" size="md">
        Open {storyName} Drawer
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side={side}
        size={size}
        variant={variant}
        closeOnOverlayClick={closeOnOverlayClick}
        showCloseButton={showCloseButton}
        title="Neural Uplink Console"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <p className="text-accent font-mono text-sm">Link stable — 847ms latency</p>
          </div>
          <p className="text-muted text-sm">
            Adjust interface bandwidth and encryption tier before jacking back in.
          </p>
          <div className="border-l-2 border-accent pl-4">
            <p className="text-primary text-sm font-mono">
              &gt; Route traffic through the Chiba relay?
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
              Confirm Route
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => <DrawerWrapper storyName="Default" />,
};

export const LeftSide: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => <DrawerWrapper storyName="Left Nav" side="left" />,
};

export const TopSide: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => <DrawerWrapper storyName="Top" side="top" size="sm" />,
};

export const BottomSide: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => <DrawerWrapper storyName="Bottom Sheet" side="bottom" size="sm" />,
};

export const Sizes: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => {
    const SizesDemo = () => {
      const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | "xl" | "full" | null>(null);
      const sizes: Array<"sm" | "md" | "lg" | "xl" | "full"> = ["sm", "md", "lg", "xl", "full"];
      return (
        <div className="flex items-center justify-center h-screen bg-base p-8">
          <div className="flex gap-3">
            {sizes.map((s) => (
              <Button key={s} onClick={() => setOpenSize(s)} variant="ghost" size="sm">
                {s.toUpperCase()}
              </Button>
            ))}
          </div>

          <Drawer
            isOpen={openSize !== null}
            onClose={() => setOpenSize(null)}
            size={openSize ?? "md"}
            title={`Panel — ${(openSize ?? "md").toUpperCase()}`}
          >
            <p className="text-muted text-sm">Sector map loaded at {openSize} resolution.</p>
          </Drawer>
        </div>
      );
    };
    return <SizesDemo />;
  },
};

export const DangerVariant: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => <DrawerWrapper storyName="Purge Confirmation" variant="danger" />,
};

export const NoOverlayDismiss: Story = {
  name: "Overlay Click Disabled",
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => <DrawerWrapper storyName="Locked" closeOnOverlayClick={false} />,
};

export const NoCloseButton: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 600 } } },
  render: () => <DrawerWrapper storyName="Minimal" showCloseButton={false} />,
};

export const AllVariants: Story = {
  parameters: { docs: { story: { inline: false, iframeHeight: 500 } } },
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-4 bg-base p-8">
      {(["left", "right", "top", "bottom"] as DrawerSide[]).map((side) => (
        <div key={side} className="flex flex-col items-center gap-2">
          <Badge variant="secondary">{side}</Badge>
          <DrawerWrapper storyName={side} side={side} />
        </div>
      ))}
    </div>
  ),
};
