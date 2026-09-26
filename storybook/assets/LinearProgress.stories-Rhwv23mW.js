import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-DrYUIB3m.js";import{g as b,R as N}from"./responsive-DIyY3Grf.js";import{c as P}from"./cn-CNMN3A1O.js";import{w as A}from"./devWarn-C2PD3-_Q.js";import"./preload-helper-D9Z9MdNV.js";const a=({progress:s,size:t="md",animate:r=!0,className:v=""})=>{const n=y=>b(y,N.linearProgress.width),o=y=>b(y,N.linearProgress.height);(s<0||s>100)&&A(`linearprogress-range-${s}`,`LinearProgress: progress={${s}} is outside the 0-100 range — the bar is not clamped and will visually overflow its container. Pass a percentage value, e.g. (loaded / total) * 100.`);const w=n(t),i=o(t),z=P("bg-surface rounded-full shadow-inner",i,v||w),S=P("bg-gradient-to-r from-accent to-primary rounded-full shadow-lg-accent",r&&"transition-all duration-500 ease-out motion-reduce:transition-none",i);return e.jsx("div",{className:z,role:"progressbar","aria-valuenow":Math.max(0,Math.min(100,s)),"aria-valuemin":0,"aria-valuemax":100,children:e.jsx("div",{className:S,style:{width:`${s}%`}})})};a.displayName="CyberUI.LinearProgress";a.__docgenInfo={description:`A sleek, animated linear progress bar with cyberpunk aesthetic.

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
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether the bar animates width changes with a 500 ms ease-out transition.\nSet to `false` for values driven every frame (e.g. a `requestAnimationFrame` loop) so the bar tracks `progress` exactly.\n@default true",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional custom class name to override default styles",defaultValue:{value:'""',computed:!1}}}};const F={title:"Components/LinearProgress",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed linear progress bar with neon styling and smooth animations.

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

// Bar driven every frame (e.g. requestAnimationFrame) — no width transition
<LinearProgress progress={frameProgress} animate={false} />

// Custom width with size
<LinearProgress progress={90} size="lg" className="w-48 max-w-lg" />
// ⚠️ Height classes in className may break the style
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Size variant affecting height and default width (supports responsive values) |
| \`animate\` | \`boolean\` | ❌ | \`true\` | Animates width changes with a 500 ms ease-out transition. Set to \`false\` for values updated every frame so the bar tracks \`progress\` exactly. The transition is also disabled for users who prefer reduced motion |
| \`className\` | \`string\` | ❌ | - | CSS classes for container styling (overrides default width) |
\`\`\`
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size variant of the progress bar"},animate:{control:"boolean",description:"Whether width changes animate with a 500 ms transition",table:{defaultValue:{summary:"true"}}},className:{control:"text",description:"Additional CSS classes for styling"}}},l={args:{progress:50,size:"md",className:"w-80"}},m={args:{progress:30,size:"sm"}},d={args:{progress:90,size:"lg"}},c={args:{progress:65,size:{base:"sm",md:"md",lg:"lg"}}},u={args:{progress:75,size:"md",className:"w-48 max-w-md"}},p={args:{progress:70,size:"md",animate:!0,className:"w-80"},parameters:{docs:{description:{story:"Default behaviour: changes to `progress` slide in over a 500 ms ease-out transition. Use the controls to change the value."}}}},g={args:{progress:70,size:"md",animate:!1,className:"w-80"},parameters:{docs:{description:{story:"With `animate={false}` the bar has no transition and follows `progress` exactly. Use the controls to change the value."}}}},L=()=>{const[s,t]=x.useState(0);return x.useEffect(()=>{let r=0;const v=performance.now(),n=4e3,o=w=>{const i=(w-v)%n/n;t(Math.round(i*1e3)/10),r=requestAnimationFrame(o)};return r=requestAnimationFrame(o),()=>cancelAnimationFrame(r)},[]),e.jsxs("div",{className:"w-80 space-y-2",children:[e.jsxs("div",{className:"flex justify-between font-mono text-xs text-muted",children:[e.jsx("span",{children:"UPLOADING NEURAL PATCH"}),e.jsxs("span",{children:[s.toFixed(1),"%"]})]}),e.jsx(a,{progress:s,animate:!1})]})},h={render:()=>e.jsx(L,{}),parameters:{docs:{description:{story:"`progress` is updated from a `requestAnimationFrame` loop with `animate={false}`, so the bar follows the value on every frame."}}}},f={render:()=>e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"animate (default)"}),e.jsx(a,{progress:60})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"animate=false"}),e.jsx(a,{progress:60,animate:!1})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: "md",
    className: "w-80"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    size: "sm"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    size: "lg"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 65,
    size: {
      base: "sm",
      md: "md",
      lg: "lg"
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    size: "md",
    className: "w-48 max-w-md"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 70,
    size: "md",
    animate: true,
    className: "w-80"
  },
  parameters: {
    docs: {
      description: {
        story: "Default behaviour: changes to \`progress\` slide in over a 500 ms ease-out transition. Use the controls to change the value."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 70,
    size: "md",
    animate: false,
    className: "w-80"
  },
  parameters: {
    docs: {
      description: {
        story: "With \`animate={false}\` the bar has no transition and follows \`progress\` exactly. Use the controls to change the value."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <FrameDrivenDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`progress\` is updated from a \`requestAnimationFrame\` loop with \`animate={false}\`, so the bar follows the value on every frame."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">animate (default)</span>
        <LinearProgress progress={60} />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">animate=false</span>
        <LinearProgress progress={60} animate={false} />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};const R=["Default","Small","Large","Responsive","CustomWidth","Animated","NotAnimated","FrameDriven","AllVariants"];export{f as AllVariants,p as Animated,u as CustomWidth,l as Default,h as FrameDriven,d as Large,g as NotAnimated,c as Responsive,m as Small,R as __namedExportsOrder,F as default};
