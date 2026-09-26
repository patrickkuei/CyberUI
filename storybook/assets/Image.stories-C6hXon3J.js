import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./Image-C_IXv7BW.js";import"./iframe-D0UZTC13.js";import"./preload-helper-D9Z9MdNV.js";import"./index-XzsDwp7_.js";import"./index-D7fDg4Si.js";import"./cn-CNMN3A1O.js";import"./usePrefersReducedMotion-BXrfJoqd.js";import"./responsive-Ba1K8uz_.js";const N={title:"Components/Image",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed image component with click-to-expand preview functionality, loading states, and smooth animations.

With no image source (\`src\` missing or empty, and no \`fallback\` URL), it renders a built-in stand-in instead of an \`<img>\`: a static neon gradient panel (\`fallbackStyle="gradient"\`, the default) or the same panel with a scanline sweeping down it (\`fallbackStyle="scanline"\`). The stand-in has \`role="img"\` with \`alt\` as its accessible name (with an empty \`alt\` it is hidden from assistive technology), is 16:9 by default (pass \`className\` to change the shape), and ignores \`preview\`. If \`src\` is missing or empty but \`fallback\` is set, the \`fallback\` URL is shown as the image.

Under \`prefers-reduced-motion: reduce\`, the preview opens and closes with a 150ms opacity-only fade (\`animation.openDuration\`/\`closeDuration\` are capped at 150ms), the scan line and pulsing effects hold still, the stand-in scanline stops, and the thumbnail does not zoom on hover.

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

// No assets yet: built-in gradient stand-in (the default style)
<Image alt="Neon district" size="lg" />

// Built-in stand-in with a sweeping scanline
<Image alt="Neon district" size="lg" fallbackStyle="scanline" />

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
| \`src\` | \`string\` | ❌ | - | Image source URL. With no \`src\` and no \`fallback\`, the built-in stand-in renders |
| \`alt\` | \`string\` | ✅ | - | Alternative text for accessibility |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Image container size (supports responsive values) |
| \`preview\` | \`boolean\` | ❌ | \`true\` | Enable click-to-expand preview. Ignored by the stand-in |
| \`fallback\` | \`string\` | ❌ | - | Fallback image URL on error. Also shown as the image when \`src\` is missing or empty |
| \`fallbackStyle\` | \`'gradient' \\| 'scanline'\` | ❌ | \`'gradient'\` | Built-in stand-in style when there is no image source |
| \`placeholder\` | \`React.ReactNode\` | ❌ | - | Custom loading placeholder |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
| \`animation\` | \`ImageAnimationConfig\` | ❌ | - | Animation configuration. Durations are capped at 150ms under reduced motion |
| \`eager\` | \`boolean\` | ❌ | \`false\` | Disable lazy loading |
| \`onPreviewOpen\` | \`() => void\` | ❌ | - | Preview open callback |
| \`onPreviewClose\` | \`() => void\` | ❌ | - | Preview close callback |

All standard HTML img props are also supported.
`}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL; with no src and no fallback the built-in stand-in renders"},alt:{control:"text",description:"Alternative text for accessibility"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Image container size (supports responsive values)"},preview:{control:"boolean",description:"Enable click-to-expand preview"},fallback:{control:"text",description:"Fallback image URL on error; also shown when src is missing or empty"},fallbackStyle:{control:{type:"inline-radio"},options:["gradient","scanline"],description:"Built-in stand-in style when there is no image source"},placeholder:{control:!1,description:"Custom loading placeholder component"},className:{control:"text",description:"Additional CSS classes"},eager:{control:"boolean",description:"Disable lazy loading"}},args:{src:"image_demo_1.jpg",alt:"Cyberpunk Demo Image",size:"md",preview:!0}},t={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},args:{src:"image_demo_1.jpg",alt:"Cyberpunk cityscape with neon lights"},render:s=>e.jsx("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:e.jsx(a,{...s})})},n={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4 bg-base min-h-screen",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Special Features"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"image_demo_2.jpg",alt:"No preview mode",preview:!1,size:"sm"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"No Preview"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"/nonexistent-image.jpg",alt:"Fallback demo",fallback:"image_demo_1.jpg",size:"sm"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"With Fallback"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"image_demo_3.jpg",alt:"Minimal effects",animation:{cyberpunkEffects:!1},size:"sm"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"Minimal Effects"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Gallery Layout"}),e.jsx("p",{className:"text-muted text-sm",children:"💡 Click images to test preview mode (simulates fullscreen within story)"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsx(a,{src:"image_demo_1.jpg",alt:"Cyberpunk cityscape",size:"md"}),e.jsx(a,{src:"image_demo_2.jpg",alt:"Neural network",size:"md"}),e.jsx(a,{src:"image_demo_3.jpg",alt:"Holographic display",size:"md"})]})]})]})},i={parameters:{docs:{story:{inline:!1,iframeHeight:500}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-base min-h-screen",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Size Comparison"}),e.jsxs("p",{className:"text-muted text-sm",children:[e.jsx("code",{className:"text-accent",children:"size"})," scales the frame (padding) around the image. Every image below is given the same width so the difference shows."]}),e.jsxs("div",{className:"flex flex-wrap gap-8 items-end justify-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"image_demo_1.jpg",alt:"Small size demo",size:"sm",className:"w-64 max-w-full"}),e.jsx("p",{className:"text-muted text-xs mt-2",children:"Small (sm)"}),e.jsx("p",{className:"text-accent text-xs font-mono",children:"12px frame"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"image_demo_2.jpg",alt:"Medium size demo",size:"md",className:"w-64 max-w-full"}),e.jsx("p",{className:"text-muted text-xs mt-2",children:"Medium (md)"}),e.jsx("p",{className:"text-accent text-xs font-mono",children:"24px frame"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{src:"image_demo_3.jpg",alt:"Large size demo",size:"lg",className:"w-64 max-w-full"}),e.jsx("p",{className:"text-muted text-xs mt-2",children:"Large (lg)"}),e.jsx("p",{className:"text-accent text-xs font-mono",children:"32px frame"})]})]})]})},m=({children:s})=>e.jsx("div",{className:"flex items-center justify-center min-h-[300px] bg-base p-8",children:e.jsx("div",{className:"w-80",children:s})}),l={parameters:{docs:{description:{story:"With no `src`, Image renders the static gradient stand-in. `fallbackStyle` defaults to `gradient`."}}},args:{src:void 0,alt:"Neon district, sector 7 (asset pending)"},render:s=>e.jsx(m,{children:e.jsx(a,{...s})})},r={parameters:{docs:{description:{story:'`fallbackStyle="scanline"` adds a scanline that sweeps down the panel. The sweep stops under `prefers-reduced-motion: reduce`.'}}},args:{src:void 0,alt:"Black-market terminal feed (asset pending)",fallbackStyle:"scanline"},render:s=>e.jsx(m,{children:e.jsx(a,{...s})})},c={parameters:{docs:{story:{inline:!1,iframeHeight:520}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4 bg-base min-h-screen",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Built-in stand-ins (no src)"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{alt:"Gradient stand-in: chrome alley",fallbackStyle:"gradient"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"gradient (default)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{alt:"Scanline stand-in: chrome alley",fallbackStyle:"scanline"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"scanline"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{alt:"Small scanline stand-in",fallbackStyle:"scanline",className:"w-32 h-24 mx-auto"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"scanline, custom size (w-32 h-24)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{alt:"Backup feed",fallback:"image_demo_2.jpg",fallbackStyle:"scanline",className:"w-64 mx-auto"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"fallback URL shown instead of the stand-in"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  args: {
    src: "image_demo_1.jpg",
    alt: "Cyberpunk cityscape with neon lights"
  },
  render: args => <div className="flex items-center justify-center h-screen bg-base p-8">
      <Image {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 p-4 bg-base min-h-screen">
      <div className="space-y-4">
        <h4 className="text-secondary font-semibold">Special Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Image src="image_demo_2.jpg" alt="No preview mode" preview={false} size="sm" />
            <p className="text-muted text-sm mt-2">No Preview</p>
          </div>
          <div className="text-center">
            <Image src="/nonexistent-image.jpg" alt="Fallback demo" fallback="image_demo_1.jpg" size="sm" />
            <p className="text-muted text-sm mt-2">With Fallback</p>
          </div>
          <div className="text-center">
            <Image src="image_demo_3.jpg" alt="Minimal effects" animation={{
            cyberpunkEffects: false
          }} size="sm" />
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Image src="image_demo_1.jpg" alt="Cyberpunk cityscape" size="md" />
          <Image src="image_demo_2.jpg" alt="Neural network" size="md" />
          <Image src="image_demo_3.jpg" alt="Holographic display" size="md" />
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
  },
  render: () => <div className="flex flex-col gap-4 p-4 bg-base min-h-screen">
      <h4 className="text-secondary font-semibold">Size Comparison</h4>
      <p className="text-muted text-sm">
        <code className="text-accent">size</code> scales the frame (padding) around the image. Every image below
        is given the same width so the difference shows.
      </p>
      <div className="flex flex-wrap gap-8 items-end justify-center">
        <div className="text-center">
          <Image src="image_demo_1.jpg" alt="Small size demo" size="sm" className="w-64 max-w-full" />
          <p className="text-muted text-xs mt-2">Small (sm)</p>
          <p className="text-accent text-xs font-mono">12px frame</p>
        </div>
        <div className="text-center">
          <Image src="image_demo_2.jpg" alt="Medium size demo" size="md" className="w-64 max-w-full" />
          <p className="text-muted text-xs mt-2">Medium (md)</p>
          <p className="text-accent text-xs font-mono">24px frame</p>
        </div>
        <div className="text-center">
          <Image src="image_demo_3.jpg" alt="Large size demo" size="lg" className="w-64 max-w-full" />
          <p className="text-muted text-xs mt-2">Large (lg)</p>
          <p className="text-accent text-xs font-mono">32px frame</p>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "With no \`src\`, Image renders the static gradient stand-in. \`fallbackStyle\` defaults to \`gradient\`."
      }
    }
  },
  args: {
    src: undefined,
    alt: "Neon district, sector 7 (asset pending)"
  },
  render: args => <StandInFrame>
      <Image {...args} />
    </StandInFrame>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`fallbackStyle=\\"scanline\\"\` adds a scanline that sweeps down the panel. The sweep stops under \`prefers-reduced-motion: reduce\`."
      }
    }
  },
  args: {
    src: undefined,
    alt: "Black-market terminal feed (asset pending)",
    fallbackStyle: "scanline"
  },
  render: args => <StandInFrame>
      <Image {...args} />
    </StandInFrame>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 520
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 p-4 bg-base min-h-screen">
      <h4 className="text-secondary font-semibold">Built-in stand-ins (no src)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <Image alt="Gradient stand-in: chrome alley" fallbackStyle="gradient" />
          <p className="text-muted text-sm mt-2">gradient (default)</p>
        </div>
        <div className="text-center">
          <Image alt="Scanline stand-in: chrome alley" fallbackStyle="scanline" />
          <p className="text-muted text-sm mt-2">scanline</p>
        </div>
        <div className="text-center">
          <Image alt="Small scanline stand-in" fallbackStyle="scanline" className="w-32 h-24 mx-auto" />
          <p className="text-muted text-sm mt-2">scanline, custom size (w-32 h-24)</p>
        </div>
        <div className="text-center">
          <Image alt="Backup feed" fallback="image_demo_2.jpg" fallbackStyle="scanline" className="w-64 mx-auto" />
          <p className="text-muted text-sm mt-2">fallback URL shown instead of the stand-in</p>
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const y=["Default","AllFeatures","AllSizes","FallbackGradient","FallbackScanline","AllFallbackStyles"];export{c as AllFallbackStyles,n as AllFeatures,i as AllSizes,t as Default,l as FallbackGradient,r as FallbackScanline,y as __namedExportsOrder,N as default};
