import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as s}from"./Image-ZahXRDlD.js";import"./iframe-qIXMJ8Q3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CovUby51.js";import"./index-CGGz6Qgb.js";import"./responsive-hlslnJmS.js";const g={title:"Components/Image",component:s,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed image component with click-to-expand preview functionality, loading states, and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for accessibility"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Image container size (supports responsive values)"},preview:{control:"boolean",description:"Enable click-to-expand preview"},fallback:{control:"text",description:"Fallback image URL on error"},placeholder:{control:!1,description:"Custom loading placeholder component"},className:{control:"text",description:"Additional CSS classes"},eager:{control:"boolean",description:"Disable lazy loading"}},args:{src:"image_demo_1.jpg",alt:"Cyberpunk Demo Image",size:"md",preview:!0}},a={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},args:{src:"image_demo_1.jpg",alt:"Cyberpunk cityscape with neon lights"},render:n=>e.jsx("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:e.jsx(s,{...n})})},t={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4 bg-base min-h-screen",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Special Features"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{src:"image_demo_2.jpg",alt:"No preview mode",preview:!1,size:"sm"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"No Preview"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{src:"/nonexistent-image.jpg",alt:"Fallback demo",fallback:"image_demo_1.jpg",size:"sm"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"With Fallback"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{src:"image_demo_3.jpg",alt:"Minimal effects",animation:{cyberpunkEffects:!1},size:"sm"}),e.jsx("p",{className:"text-muted text-sm mt-2",children:"Minimal Effects"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Gallery Layout"}),e.jsx("p",{className:"text-muted text-sm",children:"💡 Click images to test preview mode (simulates fullscreen within story)"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(s,{src:"image_demo_1.jpg",alt:"Cyberpunk cityscape",size:"md"}),e.jsx(s,{src:"image_demo_2.jpg",alt:"Neural network",size:"md"}),e.jsx(s,{src:"image_demo_3.jpg",alt:"Holographic display",size:"md"})]})]})]})},i={parameters:{docs:{story:{inline:!1,iframeHeight:500}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-base min-h-screen",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Size Comparison"}),e.jsxs("div",{className:"flex gap-8 items-end justify-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{src:"image_demo_1.jpg",alt:"Small size demo",size:"sm"}),e.jsx("p",{className:"text-muted text-xs mt-2",children:"Small (sm)"}),e.jsx("p",{className:"text-accent text-xs font-mono",children:"128×96px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{src:"image_demo_2.jpg",alt:"Medium size demo",size:"md"}),e.jsx("p",{className:"text-muted text-xs mt-2",children:"Medium (md)"}),e.jsx("p",{className:"text-accent text-xs font-mono",children:"256×192px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{src:"image_demo_3.jpg",alt:"Large size demo",size:"lg"}),e.jsx("p",{className:"text-muted text-xs mt-2",children:"Large (lg)"}),e.jsx("p",{className:"text-accent text-xs font-mono",children:"384×288px"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        <div className="grid grid-cols-3 gap-4">
          <Image src="image_demo_1.jpg" alt="Cyberpunk cityscape" size="md" />
          <Image src="image_demo_2.jpg" alt="Neural network" size="md" />
          <Image src="image_demo_3.jpg" alt="Holographic display" size="md" />
        </div>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const x=["Default","AllFeatures","AllSizes"];export{t as AllFeatures,i as AllSizes,a as Default,x as __namedExportsOrder,g as default};
