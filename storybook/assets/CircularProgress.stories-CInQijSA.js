import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-B4DURm2g.js";import{c as h}from"./cn-CNMN3A1O.js";import"./preload-helper-PPVm8Dsz.js";const x={sm:"w-16 h-16",md:"w-24 h-24",lg:"w-32 h-32",xl:"w-40 h-40"},m=({progress:n,size:d="md",radius:i=20,className:p="",children:l,ariaLabel:u})=>{const c=2*Math.PI*i,r=c/2,g=r*(1-n/100),f=r*(1-n/100);return e.jsxs("div",{className:h("relative",x[d],p),role:"progressbar","aria-label":u||"Progress","aria-valuenow":Math.max(0,Math.min(100,n)),"aria-valuemin":0,"aria-valuemax":100,children:[e.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"0 0 50 50",children:[e.jsx("circle",{cx:"25",cy:"25",r:i,fill:"none",stroke:"var(--color-accent)",strokeWidth:"4",strokeLinecap:"butt",strokeDasharray:`${r*.98} ${c}`,strokeDashoffset:g,transform:"rotate(-90 25 25)",style:{filter:"drop-shadow(0 0 8px var(--color-accent))"}}),e.jsx("circle",{cx:"25",cy:"25",r:i,fill:"none",stroke:"var(--color-primary)",strokeWidth:"4",strokeLinecap:"butt",strokeDasharray:`${r*.98} ${c}`,strokeDashoffset:f,transform:"rotate(90 25 25)",style:{filter:"drop-shadow(0 0 8px var(--color-primary))"}})]}),l&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:l})]})};m.__docgenInfo={description:`A beautiful circular progress indicator with neon glow and dual-tone stroke.

@example
<CircularProgress progress={60} size="md">
  <span className="text-xs font-mono">60%</span>
</CircularProgress>`,methods:[],displayName:"CircularProgress",props:{progress:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Preset container size. Sets width and height of the component automatically.
- sm: 64px, md: 96px, lg: 128px, xl: 160px
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:`Radius of the SVG circle in SVG units (viewBox is 50×50, center at 25,25).
Default 20 fits cleanly within the viewBox. Only override for custom layouts.
@default 20`,defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional custom class name",defaultValue:{value:"''",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional content to render in the center of the circle"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers"}}};const b={title:"Components/CircularProgress",component:m,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed circular progress indicator with neon styling and smooth animations.

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
}`,...o.parameters?.docs?.source}}};const P=["Default","WithText","Small","Large"];export{s as Default,o as Large,t as Small,a as WithText,P as __namedExportsOrder,b as default};
