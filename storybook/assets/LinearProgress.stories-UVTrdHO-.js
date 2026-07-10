import{j as d}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-MaQcQnv3.js";import{g,R as u}from"./responsive-BPH5MnMe.js";import{c}from"./cn-CNMN3A1O.js";import{w as b}from"./devWarn-C2PD3-_Q.js";import"./preload-helper-D9Z9MdNV.js";const i=({progress:e,size:o="md",className:p=""})=>{const v=t=>g(t,u.linearProgress.width),f=t=>g(t,u.linearProgress.height);(e<0||e>100)&&b(`linearprogress-range-${e}`,`LinearProgress: progress={${e}} is outside the 0-100 range — the bar is not clamped and will visually overflow its container. Pass a percentage value, e.g. (loaded / total) * 100.`);const h=v(o),m=f(o),w=c("bg-surface rounded-full shadow-inner",m,p||h),y=c("bg-gradient-to-r from-accent to-primary rounded-full shadow-lg-accent transition-all duration-500 ease-out",m);return d.jsx("div",{className:w,role:"progressbar","aria-valuenow":Math.max(0,Math.min(100,e)),"aria-valuemin":0,"aria-valuemax":100,children:d.jsx("div",{className:y,style:{width:`${e}%`}})})};i.displayName="CyberUI.LinearProgress";i.__docgenInfo={description:`A sleek, animated linear progress bar with cyberpunk aesthetic.

The bar is \`w-full\` by default — it fills its container width.
Wrap it in a constrained element to control its width.

@example
// Full-width bar (fills parent)
<LinearProgress progress={75} />

@example
// Width-constrained
<div className="w-64">
  <LinearProgress progress={kbytesLoaded} size={{ base: 'sm', lg: 'md' }} />
</div>`,methods:[],displayName:"CyberUI.LinearProgress",props:{progress:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Height of the progress bar.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional custom class name to override default styles",defaultValue:{value:'""',computed:!1}}}};const C={title:"Components/LinearProgress",component:i,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed linear progress bar with neon styling and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size variant of the progress bar"},className:{control:"text",description:"Additional CSS classes for styling"}}},s={args:{progress:50,size:"md",className:"w-80"}},a={args:{progress:30,size:"sm"}},r={args:{progress:90,size:"lg"}},n={args:{progress:65,size:{base:"sm",md:"md",lg:"lg"}}},l={args:{progress:75,size:"md",className:"w-48 max-w-md"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: "md",
    className: "w-80"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    size: "sm"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    size: "lg"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 65,
    size: {
      base: "sm",
      md: "md",
      lg: "lg"
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    size: "md",
    className: "w-48 max-w-md"
  }
}`,...l.parameters?.docs?.source}}};const N=["Default","Small","Large","Responsive","CustomWidth"];export{l as CustomWidth,s as Default,r as Large,n as Responsive,a as Small,N as __namedExportsOrder,C as default};
