import{L as t}from"./LinearProgress-DYzwPoEC.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CoA5WcsP.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-Zzx7ci0z.js";const c={title:"Components/LinearProgress",component:t,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed linear progress bar with neon styling and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size variant of the progress bar"},className:{control:"text",description:"Additional CSS classes for styling"}}},s={args:{progress:50,size:"md",className:"w-80"}},e={args:{progress:30,size:"sm"}},r={args:{progress:90,size:"lg"}},a={args:{progress:65,size:{base:"sm",md:"md",lg:"lg"}}},o={args:{progress:75,size:"md",className:"w-48 max-w-md"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: "md",
    className: "w-80"
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    size: "sm"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    size: "lg"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 65,
    size: {
      base: "sm",
      md: "md",
      lg: "lg"
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    size: "md",
    className: "w-48 max-w-md"
  }
}`,...o.parameters?.docs?.source}}};const l=["Default","Small","Large","Responsive","CustomWidth"];export{o as CustomWidth,s as Default,r as Large,a as Responsive,e as Small,l as __namedExportsOrder,c as default};
