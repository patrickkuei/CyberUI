import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A cyberpunk-themed image carousel with auto-play, navigation controls, and smooth transitions.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Carousel } from 'cyberui-2045';

// Basic usage
const [currentSlide, setCurrentSlide] = useState(0);
const images = [
  { src: '/img1.jpg', alt: 'Cyberpunk cityscape', caption: 'Neo-Tokyo' },
  { src: '/img2.jpg', alt: 'Neon district', caption: 'Corporate Zone' },
];

<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
/>

// Advanced configuration
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  size="lg"
  transition="matrix"
  autoPlay={true}
  interval={4000}
  infinite={false}
  objectFit="contain"
  onBeforeChange={(from, to) => console.log(\`Switching from \${from} to \${to}\`)}
  onAfterChange={(index) => console.log(\`Now showing slide \${index}\`)}
/>

// Responsive sizing
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
/>

// Signal glitch with custom rate
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  transition="signal-glitch"
  glitchRate={0.3}  // 30% chance of glitch effects
  autoPlay={true}
  interval={5000}
/>

// Accessibility and UX optimized
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  disableImagePreview={true}  // No click-to-expand
  showArrows={false}          // Touch/swipe only
  infinite={false}            // Clear start/end
  autoPlay={false}            // User controlled
/>

// Different transitions
<Carousel images={images} currentIndex={slide1} onChange={setSlide1} transition="slide" />
<Carousel images={images} currentIndex={slide2} onChange={setSlide2} transition="fade" />
<Carousel images={images} currentIndex={slide3} onChange={setSlide3} transition="matrix" />
<Carousel images={images} currentIndex={slide4} onChange={setSlide4} transition="signal-glitch" glitchRate={true} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`images\` | \`CarouselImageData[]\` | ✅ | - | Array of images to display |
| \`currentIndex\` | \`number\` | ✅ | - | Current slide index (controlled) |
| \`onChange\` | \`(index: number) => void\` | ✅ | - | Callback when slide changes |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Carousel size (supports responsive values) |
| \`autoPlay\` | \`boolean\` | ❌ | \`true\` | Enable auto-play functionality |
| \`interval\` | \`number\` | ❌ | \`3000\` | Auto-play interval in milliseconds |
| \`infinite\` | \`boolean\` | ❌ | \`true\` | Enable infinite loop |
| \`transition\` | \`'slide' \\| 'fade' \\| 'matrix' \\| 'signal-glitch'\` | ❌ | \`'slide'\` | Transition effect |
| \`objectFit\` | \`'cover' \\| 'contain'\` | ❌ | \`'cover'\` | Image display behavior |
| \`showArrows\` | \`boolean\` | ❌ | \`true\` | Show navigation arrows |
| \`showIndicators\` | \`boolean\` | ❌ | \`true\` | Show slide indicators |
| \`disableImagePreview\` | \`boolean\` | ❌ | \`false\` | Disable click-to-expand on images |
| \`onBeforeChange\` | \`(from: number, to: number) => void\` | ❌ | - | Callback before slide change |
| \`onAfterChange\` | \`(index: number) => void\` | ❌ | - | Callback after slide change |

**Types:**

\`\`\`tsx
interface CarouselImageData {
  src: string;        // Image source URL
  alt: string;        // Alternative text for accessibility
  fallbackSrc?: string; // Optional fallback image URL on error
  caption?: string;     // Optional caption text overlay
}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: false,
      description: "Array of images to display in the carousel",
    },
    currentIndex: {
      control: false,
      description: "Current slide index (managed internally)",
    },
    onChange: {
      control: false,
      description: "Callback function when slide changes",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Carousel size (supports responsive values)",
    },
    autoPlay: {
      control: "boolean",
      description: "Enable auto-play functionality",
    },
    interval: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Auto-play interval in milliseconds",
    },
    infinite: {
      control: "boolean",
      description: "Enable infinite loop",
    },
    transition: {
      control: { type: "select" },
      options: ["slide", "fade", "matrix", "signal-glitch"],
      description: "Transition effect type",
    },
    objectFit: {
      control: { type: "select" },
      options: ["cover", "contain"],
      description: "Image display behavior",
    },
    showArrows: {
      control: "boolean",
      description: "Show navigation arrows",
    },
    showIndicators: {
      control: "boolean",
      description: "Show slide indicators",
    },
    disableImagePreview: {
      control: "boolean",
      description: "Disable click-to-expand on images",
    },
    glitchRate: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description:
        "Control signal-glitch effect frequency (0.0-1.0 for probability, boolean for on/off)",
    },
  },
  args: {
    size: "md",
    autoPlay: true,
    interval: 3000,
    infinite: true,
    transition: "slide",
    objectFit: "cover",
    showArrows: true,
    showIndicators: true,
    disableImagePreview: false,
    glitchRate: 1.0,
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Minimal sample images
const demoImages = [
  {
    src: "image_demo_1.jpg",
    alt: "Cyberpunk cityscape",
    caption: "Neo-Tokyo District 7",
  },
  {
    src: "image_demo_2.jpg",
    alt: "Corporate architecture",
    caption: "Megacorp Tower",
  },
  {
    src: "image_demo_3.jpg",
    alt: "Underground market",
    caption: "Data Exchange",
  },
];

export const Default: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  args: {
    images: demoImages,
  },
  render: (args) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <div className="flex items-center justify-center min-h-screen bg-base p-8">
        <div className="w-full max-w-2xl space-y-4">
          <Carousel
            {...args}
            currentIndex={currentIndex}
            onChange={setCurrentIndex}
          />
          <div className="text-center">
            <p className="text-muted text-xs">
              ⚠️ Note: Controls are disabled due to state sync issues.
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export const AllTransitions: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  render: () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [fadeIndex, setFadeIndex] = useState(0);
    const [matrixIndex, setMatrixIndex] = useState(0);
    const [signalGlitchIndex, setSignalGlitchIndex] = useState(0);

    return (
      <div className="flex flex-col gap-8 p-6 bg-base min-h-screen">
        <div className="space-y-4">
          <h4 className="text-secondary font-semibold">All Transition Types</h4>
        </div>

        {/* Slide Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">Slide Transition</h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              default
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel
              images={demoImages}
              currentIndex={slideIndex}
              onChange={setSlideIndex}
              transition="slide"
              autoPlay={true}
              interval={4000}
              size="md"
            />
          </div>
        </div>

        {/* Fade Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">Fade Transition</h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              cross-fade
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel
              images={demoImages}
              currentIndex={fadeIndex}
              onChange={setFadeIndex}
              transition="fade"
              autoPlay={true}
              interval={3500}
              size="md"
            />
          </div>
        </div>

        {/* Matrix Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">Matrix Transition</h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              cyberpunk
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel
              images={demoImages}
              currentIndex={matrixIndex}
              onChange={setMatrixIndex}
              transition="matrix"
              autoPlay={true}
              interval={3000}
              size="md"
            />
          </div>
        </div>

        {/* Signal-Glitch Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">
              Signal-Glitch Transition
            </h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              analog-error
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel
              images={demoImages}
              currentIndex={signalGlitchIndex}
              onChange={setSignalGlitchIndex}
              transition="signal-glitch"
              autoPlay={true}
              interval={3500}
              size="md"
              glitchRate={0.7}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  render: () => {
    const [smallIndex, setSmallIndex] = useState(0);
    const [mediumIndex, setMediumIndex] = useState(0);
    const [largeIndex, setLargeIndex] = useState(0);

    return (
      <div className="flex flex-col gap-6 p-6 bg-base min-h-screen">
        <div className="space-y-2">
          <h4 className="text-secondary font-semibold text-lg">
            Size Comparison
          </h4>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h5 className="text-accent font-semibold">Small (sm)</h5>
              <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
                compact
              </span>
            </div>
            <div className="max-w-sm">
              <Carousel
                images={demoImages}
                currentIndex={smallIndex}
                onChange={setSmallIndex}
                size="sm"
                autoPlay={false}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h5 className="text-accent font-semibold">Medium (md)</h5>
              <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
                default
              </span>
            </div>
            <div className="max-w-md">
              <Carousel
                images={demoImages}
                currentIndex={mediumIndex}
                onChange={setMediumIndex}
                size="md"
                autoPlay={false}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h5 className="text-accent font-semibold">Large (lg)</h5>
              <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
                showcase
              </span>
            </div>
            <div className="max-w-lg">
              <Carousel
                images={demoImages}
                currentIndex={largeIndex}
                onChange={setLargeIndex}
                size="lg"
                autoPlay={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
