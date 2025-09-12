import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./CircularProgress-DeeSRG5T.js";import"./iframe-3mg8uO-U.js";import"./preload-helper-D9Z9MdNV.js";const l={title:"Components/CircularProgress",component:t,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed circular progress indicator with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { CircularProgress } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<CircularProgress progress={50} radius={20} className="w-32 h-32" />

// With text inside
<CircularProgress progress={75} radius={20} className="w-32 h-32">
  <span className="text-accent font-bold">75%</span>
</CircularProgress>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`radius\` | \`number\` | ✅ | - | The radius of the circle in SVG units |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes for styling and sizing |
| \`children\` | \`React.ReactNode\` | ❌ | \`undefined\` | Optional content to display inside the circle (e.g., percentage text) |
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},radius:{control:{type:"range",min:10,max:30,step:1},description:"The radius of the progress circle"},className:{control:"text",description:"Additional CSS classes for styling"}}},s={args:{progress:50,radius:20,className:"w-32 h-32"}},r={args:{progress:75,radius:20,className:"w-32 h-32",children:o.jsx("span",{className:"text-accent font-bold",children:"75%"})}},e={args:{progress:30,radius:15,className:"w-20 h-20"}},a={args:{progress:90,radius:25,className:"w-48 h-48"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    radius: 20,
    className: 'w-32 h-32'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    radius: 20,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold">75%</span>
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    radius: 15,
    className: 'w-20 h-20'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    radius: 25,
    className: 'w-48 h-48'
  }
}`,...a.parameters?.docs?.source}}};const m=["Default","WithText","Small","Large"];export{s as Default,a as Large,e as Small,r as WithText,m as __namedExportsOrder,l as default};
