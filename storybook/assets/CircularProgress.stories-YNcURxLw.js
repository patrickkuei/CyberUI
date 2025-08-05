import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D2UWPkh6.js";import"./preload-helper-D9Z9MdNV.js";const p=({progress:n,radius:c,className:d="",children:l})=>{const i=2*Math.PI*c,r=i/2,m=r*(1-n/100),u=r*(1-n/100);return e.jsxs("div",{className:`relative ${d}`,children:[e.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"0 0 50 50",children:[e.jsx("circle",{cx:"25",cy:"25",r:c,fill:"none",stroke:"var(--color-accent)",strokeWidth:"4",strokeLinecap:"butt",strokeDasharray:`${r*.98} ${i}`,strokeDashoffset:m,transform:"rotate(-90 25 25)",style:{filter:"drop-shadow(0 0 8px var(--color-accent))"}}),e.jsx("circle",{cx:"25",cy:"25",r:c,fill:"none",stroke:"var(--color-primary)",strokeWidth:"4",strokeLinecap:"butt",strokeDasharray:`${r*.98} ${i}`,strokeDashoffset:u,transform:"rotate(90 25 25)",style:{filter:"drop-shadow(0 0 8px var(--color-primary))"}})]}),l&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:l})]})};p.__docgenInfo={description:"",methods:[],displayName:"CircularProgress",props:{progress:{required:!0,tsType:{name:"number"},description:""},radius:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x={title:"Components/CircularProgress",component:p,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed circular progress indicator with neon styling and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},radius:{control:{type:"range",min:10,max:30,step:1},description:"The radius of the progress circle"},className:{control:"text",description:"Additional CSS classes for styling"}}},s={args:{progress:50,radius:20,className:"w-32 h-32"}},a={args:{progress:75,radius:20,className:"w-32 h-32",children:e.jsx("span",{className:"text-accent font-bold",children:"75%"})}},t={args:{progress:30,radius:15,className:"w-20 h-20"}},o={args:{progress:90,radius:25,className:"w-48 h-48"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    radius: 20,
    className: 'w-32 h-32'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    radius: 20,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold">75%</span>
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    radius: 15,
    className: 'w-20 h-20'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    radius: 25,
    className: 'w-48 h-48'
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","WithText","Small","Large"];export{s as Default,o as Large,t as Small,a as WithText,y as __namedExportsOrder,x as default};
