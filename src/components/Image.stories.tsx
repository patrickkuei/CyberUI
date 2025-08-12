import type { Meta, StoryObj } from "@storybook/react-vite";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed image component with click-to-expand preview functionality, loading states, and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Image } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<Image
  src="/path/to/image.jpg"
  alt="Cyberpunk cityscape"
/>

// Different sizes
<Image
  src="/path/to/image.jpg"
  alt="System diagnostic"
  size="sm"
/>
<Image
  src="/path/to/image.jpg"
  alt="Neural network"
  size="lg"
/>

// Responsive sizes
<Image
  src="/path/to/image.jpg"
  alt="Data stream"
  size={{ base: 'sm', lg: 'lg' }}
/>

// Disable preview
<Image
  src="/path/to/image.jpg"
  alt="Static image"
  preview={false}
/>

// With fallback
<Image
  src="/invalid-image.jpg"
  alt="System error"
  fallback="/fallback-image.jpg"
/>

// Custom placeholder
<Image
  src="/slow-loading-image.jpg"
  alt="Loading content"
  placeholder={<div className="text-accent">Custom Loading...</div>}
/>

// Custom animation settings
<Image
  src="/path/to/image.jpg"
  alt="Animated preview"
  animation={{ cyberpunkEffects: false, openDuration: 300 }}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`src\` | \`string\` | ✅ | - | Image source URL |
| \`alt\` | \`string\` | ✅ | - | Alternative text for accessibility |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Image container size (supports responsive values) |
| \`preview\` | \`boolean\` | ❌ | \`true\` | Enable click-to-expand preview |
| \`fallback\` | \`string\` | ❌ | - | Fallback image URL on error |
| \`placeholder\` | \`React.ReactNode\` | ❌ | - | Custom loading placeholder |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
| \`animation\` | \`ImageAnimationConfig\` | ❌ | - | Animation configuration |
| \`eager\` | \`boolean\` | ❌ | \`false\` | Disable lazy loading |
| \`onPreviewOpen\` | \`() => void\` | ❌ | - | Preview open callback |
| \`onPreviewClose\` | \`() => void\` | ❌ | - | Preview close callback |

All standard HTML img props are also supported.
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL",
    },
    alt: {
      control: "text",
      description: "Alternative text for accessibility",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Image container size (supports responsive values)",
    },
    preview: {
      control: "boolean",
      description: "Enable click-to-expand preview",
    },
    fallback: {
      control: "text",
      description: "Fallback image URL on error",
    },
    placeholder: {
      control: false,
      description: "Custom loading placeholder component",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    eager: {
      control: "boolean",
      description: "Disable lazy loading",
    },
  },
  args: {
    src: "image_demo_1.jpg",
    alt: "Cyberpunk Demo Image",
    size: "md",
    preview: true,
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  args: {
    src: "image_demo_1.jpg",
    alt: "Cyberpunk cityscape with neon lights",
  },
  render: (args) => (
    <div className="flex items-center justify-center h-screen bg-base p-8">
      <Image {...args} />
    </div>
  ),
};

export const AllFeatures: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6 p-4 bg-base min-h-screen">
      <div className="space-y-4">
        <h4 className="text-secondary font-semibold">Special Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Image
              src="image_demo_2.jpg"
              alt="No preview mode"
              preview={false}
              size="sm"
            />
            <p className="text-muted text-sm mt-2">No Preview</p>
          </div>
          <div className="text-center">
            <Image
              src="/nonexistent-image.jpg"
              alt="Fallback demo"
              fallback="image_demo_1.jpg"
              size="sm"
            />
            <p className="text-muted text-sm mt-2">With Fallback</p>
          </div>
          <div className="text-center">
            <Image
              src="image_demo_3.jpg"
              alt="Minimal effects"
              animation={{ cyberpunkEffects: false }}
              size="sm"
            />
            <p className="text-muted text-sm mt-2">Minimal Effects</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-secondary font-semibold">Gallery Layout</h4>
        <p className="text-muted text-sm">
          💡 Click images to test preview mode (simulates fullscreen within
          story)
        </p>
        <div className="grid grid-cols-3 gap-4">
          <Image src="image_demo_1.jpg" alt="Cyberpunk cityscape" size="md" />
          <Image src="image_demo_2.jpg" alt="Neural network" size="md" />
          <Image src="image_demo_3.jpg" alt="Holographic display" size="md" />
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 p-4 bg-base min-h-screen">
      <h4 className="text-secondary font-semibold">Size Comparison</h4>
      <div className="flex gap-8 items-end justify-center">
        <div className="text-center">
          <Image src="image_demo_1.jpg" alt="Small size demo" size="sm" />
          <p className="text-muted text-xs mt-2">Small (sm)</p>
          <p className="text-accent text-xs font-mono">128×96px</p>
        </div>
        <div className="text-center">
          <Image src="image_demo_2.jpg" alt="Medium size demo" size="md" />
          <p className="text-muted text-xs mt-2">Medium (md)</p>
          <p className="text-accent text-xs font-mono">256×192px</p>
        </div>
        <div className="text-center">
          <Image src="image_demo_3.jpg" alt="Large size demo" size="lg" />
          <p className="text-muted text-xs mt-2">Large (lg)</p>
          <p className="text-accent text-xs font-mono">384×288px</p>
        </div>
      </div>
    </div>
  ),
};
