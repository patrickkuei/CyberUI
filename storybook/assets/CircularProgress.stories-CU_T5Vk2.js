import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dqm9SG0A.js";import{c as h}from"./cn-CNMN3A1O.js";import{w as x}from"./devWarn-C2PD3-_Q.js";import"./preload-helper-D9Z9MdNV.js";const y={sm:"w-16 h-16",md:"w-24 h-24",lg:"w-32 h-32",xl:"w-40 h-40"},l=({progress:e,size:d="md",radius:i=20,className:u="",children:m,ariaLabel:p})=>{(e<0||e>100)&&x(`circularprogress-range-${e}`,`CircularProgress: progress={${e}} is outside the 0-100 range and will render an incorrect arc. Pass a percentage value, e.g. (loaded / total) * 100.`);const c=2*Math.PI*i,s=c/2,g=s*(1-e/100),f=s*(1-e/100);return r.jsxs("div",{className:h("relative",y[d],u),role:"progressbar","aria-label":p||"Progress","aria-valuenow":Math.max(0,Math.min(100,e)),"aria-valuemin":0,"aria-valuemax":100,children:[r.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"0 0 50 50",children:[r.jsx("circle",{cx:"25",cy:"25",r:i,fill:"none",stroke:"var(--color-accent)",strokeWidth:"4",strokeLinecap:"butt",strokeDasharray:`${s*.98} ${c}`,strokeDashoffset:g,transform:"rotate(-90 25 25)",style:{filter:"drop-shadow(0 0 8px var(--color-accent))"}}),r.jsx("circle",{cx:"25",cy:"25",r:i,fill:"none",stroke:"var(--color-primary)",strokeWidth:"4",strokeLinecap:"butt",strokeDasharray:`${s*.98} ${c}`,strokeDashoffset:f,transform:"rotate(90 25 25)",style:{filter:"drop-shadow(0 0 8px var(--color-primary))"}})]}),m&&r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:m})]})};l.displayName="CyberUI.CircularProgress";l.__docgenInfo={description:`A beautiful circular progress indicator with neon glow and dual-tone stroke.

@example
<CircularProgress progress={60} size="md">
  <span className="text-xs font-mono">60%</span>
</CircularProgress>`,methods:[],displayName:"CyberUI.CircularProgress",props:{progress:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Preset container size. Sets width and height of the component automatically.
- sm: 64px, md: 96px, lg: 128px, xl: 160px
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:`Radius of the SVG circle in SVG units (viewBox is 50×50, center at 25,25).
Default 20 fits cleanly within the viewBox. Only override for custom layouts.
@default 20`,defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional custom class name",defaultValue:{value:"''",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional content to render in the center of the circle"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers"}}};const C={title:"Components/CircularProgress",component:l,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed circular progress indicator with neon styling and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},radius:{control:{type:"range",min:10,max:30,step:1},description:"The radius of the progress circle"},className:{control:"text",description:"Additional CSS classes for styling"}}},a={args:{progress:50,radius:20,className:"w-32 h-32"}},t={args:{progress:75,radius:20,className:"w-32 h-32",children:r.jsx("span",{className:"text-accent font-bold",children:"75%"})}},o={args:{progress:30,radius:15,className:"w-20 h-20"}},n={args:{progress:90,radius:25,className:"w-48 h-48"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    radius: 20,
    className: 'w-32 h-32'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    radius: 20,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold">75%</span>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    radius: 15,
    className: 'w-20 h-20'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    radius: 25,
    className: 'w-48 h-48'
  }
}`,...n.parameters?.docs?.source}}};const S=["Default","WithText","Small","Large"];export{a as Default,n as Large,o as Small,t as WithText,S as __namedExportsOrder,C as default};
