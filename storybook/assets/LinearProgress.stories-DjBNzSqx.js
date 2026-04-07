import{j as m}from"./jsx-runtime-u17CrQMm.js";import"./iframe-BQ2vS_X5.js";import{g as d,R as g}from"./responsive-Cl9wjO7G.js";import{c as u}from"./cn-CNMN3A1O.js";import"./preload-helper-PPVm8Dsz.js";const c=({progress:t,size:i="md",className:p=""})=>{const v=l=>d(l,g.linearProgress.width),f=l=>d(l,g.linearProgress.height),h=v(i),o=f(i),w=u("bg-surface rounded-full shadow-inner",o,p||h),y=u("bg-gradient-to-r from-accent to-primary rounded-full shadow-lg-accent transition-all duration-500 ease-out",o);return m.jsx("div",{className:w,role:"progressbar","aria-valuenow":Math.max(0,Math.min(100,t)),"aria-valuemin":0,"aria-valuemax":100,children:m.jsx("div",{className:y,style:{width:`${t}%`}})})};c.__docgenInfo={description:`A sleek, animated linear progress bar with cyberpunk aesthetic.

The bar is \`w-full\` by default — it fills its container width.
Wrap it in a constrained element to control its width.

@example
// Full-width bar (fills parent)
<LinearProgress progress={75} />

@example
// Width-constrained
<div className="w-64">
  <LinearProgress progress={kbytesLoaded} size={{ base: 'sm', lg: 'md' }} />
</div>`,methods:[],displayName:"LinearProgress",props:{progress:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Height of the progress bar.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional custom class name to override default styles",defaultValue:{value:'""',computed:!1}}}};const S={title:"Components/LinearProgress",component:c,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed linear progress bar with neon styling and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size variant of the progress bar"},className:{control:"text",description:"Additional CSS classes for styling"}}},e={args:{progress:50,size:"md",className:"w-80"}},s={args:{progress:30,size:"sm"}},a={args:{progress:90,size:"lg"}},r={args:{progress:65,size:{base:"sm",md:"md",lg:"lg"}}},n={args:{progress:75,size:"md",className:"w-48 max-w-md"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: "md",
    className: "w-80"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    size: "sm"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    size: "lg"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 65,
    size: {
      base: "sm",
      md: "md",
      lg: "lg"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    size: "md",
    className: "w-48 max-w-md"
  }
}`,...n.parameters?.docs?.source}}};const L=["Default","Small","Large","Responsive","CustomWidth"];export{n as CustomWidth,e as Default,a as Large,r as Responsive,s as Small,L as __namedExportsOrder,S as default};
