import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{S as c}from"./SegmentedProgress-Hz-M-26k.js";import"./iframe-Duw4cJgX.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CUXcN9Hm.js";const d={title:"Components/SegmentedProgress",component:c,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed segmented progress bar with neon styling and smooth animations. Uses a fixed 20-segment circular design.

**Usage:**

\`\`\`tsx
import React from 'react';
import { SegmentedProgress } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<SegmentedProgress progress={60} />

// With custom styling
<SegmentedProgress progress={45} className="w-48 h-48" />

// With text inside
<SegmentedProgress progress={75} className="w-32 h-32">
  <span className="text-accent font-bold">75%</span>
</SegmentedProgress>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100), each 5% fills one segment |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes for styling and sizing |
| \`children\` | \`React.ReactNode\` | ❌ | \`undefined\` | Optional content to display in the center (e.g., percentage text) |
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},className:{control:"text",description:"Additional CSS classes for styling"}}},e={args:{progress:50,className:"w-32 h-32"}},s={args:{progress:75,className:"w-32 h-32",children:o.jsx("span",{className:"text-accent font-bold text-lg",children:"75%"})}},r={args:{progress:0,className:"w-32 h-32"}},t={args:{progress:100,className:"w-32 h-32"}},a={args:{progress:60,className:"w-48 h-48",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"text-2xl font-bold text-accent",children:"60%"}),o.jsx("div",{className:"text-sm text-muted",children:"Complete"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    className: 'w-32 h-32'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold text-lg">75%</span>
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 0,
    className: 'w-32 h-32'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 100,
    className: 'w-32 h-32'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 60,
    className: 'w-48 h-48',
    children: <div className="text-center">
        <div className="text-2xl font-bold text-accent">60%</div>
        <div className="text-sm text-muted">Complete</div>
      </div>
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","WithText","Empty","Full","Large"];export{e as Default,r as Empty,t as Full,a as Large,s as WithText,g as __namedExportsOrder,d as default};
