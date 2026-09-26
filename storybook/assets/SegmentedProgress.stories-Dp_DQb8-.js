import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bn34fd_r.js";import{c as A}from"./cn-CNMN3A1O.js";import{P as G}from"./index-CHO2xkCo.js";import"./preload-helper-D9Z9MdNV.js";const U={sm:"w-16 h-16",md:"w-24 h-24",lg:"w-32 h-32",xl:"w-40 h-40"},W=({progress:s,size:m="md",className:S,children:i})=>{const{SEGMENT_COUNT:z,SEGMENT_ANGLE:R,GAP_ANGLE:l,INNER_RADIUS:o,OUTER_RADIUS:d,OUTER_TICK_RADIUS:p}=G,I=R-l;return e.jsxs("div",{className:A("relative",U[m],S),children:[e.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 60 60",style:{overflow:"visible"},children:[[...Array(60)].map((D,n)=>{const t=6*n,a=n%5===0?6:3,w=30+p*Math.cos(t*Math.PI/180),M=30+p*Math.sin(t*Math.PI/180),P=30+(p-a)*Math.cos(t*Math.PI/180),B=30+(p-a)*Math.sin(t*Math.PI/180);return e.jsx("line",{x1:w,y1:M,x2:P,y2:B,stroke:"var(--color-muted)",strokeWidth:1,strokeLinecap:"round",opacity:.7},`tick-${n}`)}),[...Array(z)].map((D,n)=>{const t=R*n-90+l/2,c=t+I,a=O=>O*Math.PI/180,w=30+o*Math.cos(a(t)),M=30+o*Math.sin(a(t)),P=30+d*Math.cos(a(t)),B=30+d*Math.sin(a(t)),L=30+d*Math.cos(a(c)),C=30+d*Math.sin(a(c)),T=30+o*Math.cos(a(c)),$=30+o*Math.sin(a(c)),_=n<Math.floor(s/5);return e.jsx("path",{d:`M ${w} ${M} L ${P} ${B} L ${L} ${C} L ${T} ${$} Z`,fill:_?"var(--color-accent)":"var(--color-border-default)",style:{filter:_?"drop-shadow(0 0 6px var(--color-accent))":"none",transition:"fill 0.3s ease"}},`segment-${n}`)})]}),i&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:i})]})},F={sm:"h-3",md:"h-5",lg:"h-7",xl:"h-9"},H=({progress:s,segments:m=10,size:S="md",className:i})=>{const z=Math.round(Math.min(100,Math.max(0,s))/100*m);return e.jsx("div",{className:A("flex gap-1 w-full",i),children:[...Array(m)].map((R,l)=>{const o=l<z;return e.jsx("div",{className:A("flex-1 rounded-sm transition-all duration-300",F[S]),style:{backgroundColor:o?"var(--color-accent)":"var(--color-border-default)",boxShadow:o?"0 0 6px var(--color-accent)":"none"}},l)})})},r=s=>s.variant==="block"?e.jsx(H,{...s}):e.jsx(W,{...s});r.displayName="CyberUI.SegmentedProgress";r.__docgenInfo={description:"",methods:[],displayName:"CyberUI.SegmentedProgress"};const Q={title:"Components/SegmentedProgress",component:r,parameters:{layout:"centered",docs:{description:{component:'A cyberpunk-themed segmented progress indicator with two display modes.\n\n**Radial** (default) — circular arc-segment gauge, great for power levels, stats, or radial meters.\n\n**Block** — linear discrete-block bar (▮▮▮▮▯▯), ideal for health bars, step-based loading, or ammo counts.\n\n```tsx\nimport { SegmentedProgress } from \'cyberui-2045\';\nimport \'cyberui-2045/styles.css\';\n\n// Radial gauge (default)\n<SegmentedProgress progress={60} size="md">\n  <span className="text-accent font-bold">60%</span>\n</SegmentedProgress>\n\n// Linear block bar\n<SegmentedProgress variant="block" progress={60} segments={10} size="md" />\n```\n\n| Prop | Variants | Default | Description |\n|------|----------|---------|-------------|\n| `progress` | `0–100` | — | Fill level |\n| `variant` | `"radial" \\| "block"` | `"radial"` | Display mode |\n| `size` | `"sm" \\| "md" \\| "lg" \\| "xl"` | `"md"` | Diameter (radial) or height (block) |\n| `segments` | `number` | `10` | Number of blocks — **block only** |\n| `children` | `ReactNode` | — | Center content — **radial only** |\n'}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"radio",options:["radial","block"]},size:{control:"radio",options:["sm","md","lg","xl"]}}},x={args:{progress:50,size:"md"}},g={name:"Radial — with center text",args:{progress:75,size:"lg",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-accent",children:"75%"}),e.jsx("div",{className:"text-xs text-muted",children:"LOADED"})]})}},u={name:"Radial — empty",args:{progress:0,size:"md"}},f={name:"Radial — full",args:{progress:100,size:"md"}},v={name:"Radial — all sizes",render:()=>e.jsx("div",{className:"flex items-end gap-6",children:["sm","md","lg","xl"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(r,{progress:60,size:s}),e.jsx("span",{className:"text-muted text-xs font-mono",children:s})]},s))})},E=s=>e.jsx("div",{className:"w-64",children:e.jsx(s,{})}),h={name:"Block — default",args:{variant:"block",progress:60,segments:10,size:"md"},decorators:[E]},k={name:"Block — empty",args:{variant:"block",progress:0,segments:10,size:"md"},decorators:[E]},N={name:"Block — full",args:{variant:"block",progress:100,segments:10,size:"md"},decorators:[E]},b={name:"Block — segment counts",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-64",children:[5,10,20].map(s=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{variant:"block",progress:60,segments:s,size:"md"}),e.jsxs("span",{className:"text-muted text-xs font-mono",children:[s," segments"]})]},s))})},j={name:"Block — all sizes",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-64",children:["sm","md","lg","xl"].map(s=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{variant:"block",progress:60,segments:10,size:s}),e.jsx("span",{className:"text-muted text-xs font-mono",children:s})]},s))})},y={name:"All variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-muted text-xs font-mono uppercase tracking-widest",children:"Radial"}),e.jsx("div",{className:"flex items-end gap-6",children:[25,50,75,100].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(r,{progress:s,size:"md",children:e.jsxs("span",{className:"text-accent text-xs font-bold",children:[s,"%"]})}),e.jsxs("span",{className:"text-muted text-xs font-mono",children:[s,"%"]})]},s))})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 w-72",children:[e.jsx("span",{className:"text-muted text-xs font-mono uppercase tracking-widest",children:"Block"}),[25,50,75,100].map(s=>e.jsxs("div",{className:"w-full flex flex-col gap-1",children:[e.jsx(r,{variant:"block",progress:s,segments:10,size:"md"}),e.jsxs("span",{className:"text-muted text-xs font-mono",children:[s,"%"]})]},s))]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: 'md'
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Radial — with center text',
  args: {
    progress: 75,
    size: 'lg',
    children: <div className="text-center">
        <div className="text-2xl font-bold text-accent">75%</div>
        <div className="text-xs text-muted">LOADED</div>
      </div>
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Radial — empty',
  args: {
    progress: 0,
    size: 'md'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Radial — full',
  args: {
    progress: 100,
    size: 'md'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Radial — all sizes',
  render: () => <div className="flex items-end gap-6">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} className="flex flex-col items-center gap-2">
          <SegmentedProgress progress={60} size={size} />
          <span className="text-muted text-xs font-mono">{size}</span>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Block — default',
  args: {
    variant: 'block',
    progress: 60,
    segments: 10,
    size: 'md'
  },
  decorators: [blockWidth]
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Block — empty',
  args: {
    variant: 'block',
    progress: 0,
    segments: 10,
    size: 'md'
  },
  decorators: [blockWidth]
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Block — full',
  args: {
    variant: 'block',
    progress: 100,
    segments: 10,
    size: 'md'
  },
  decorators: [blockWidth]
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Block — segment counts',
  render: () => <div className="flex flex-col gap-4 w-64">
      {[5, 10, 20].map(segments => <div key={segments} className="flex flex-col gap-1">
          <SegmentedProgress variant="block" progress={60} segments={segments} size="md" />
          <span className="text-muted text-xs font-mono">{segments} segments</span>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Block — all sizes',
  render: () => <div className="flex flex-col gap-4 w-64">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} className="flex flex-col gap-1">
          <SegmentedProgress variant="block" progress={60} segments={10} size={size} />
          <span className="text-muted text-xs font-mono">{size}</span>
        </div>)}
    </div>
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: () => <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted text-xs font-mono uppercase tracking-widest">Radial</span>
        <div className="flex items-end gap-6">
          {([25, 50, 75, 100] as const).map(p => <div key={p} className="flex flex-col items-center gap-2">
              <SegmentedProgress progress={p} size="md">
                <span className="text-accent text-xs font-bold">{p}%</span>
              </SegmentedProgress>
              <span className="text-muted text-xs font-mono">{p}%</span>
            </div>)}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-72">
        <span className="text-muted text-xs font-mono uppercase tracking-widest">Block</span>
        {[25, 50, 75, 100].map(p => <div key={p} className="w-full flex flex-col gap-1">
            <SegmentedProgress variant="block" progress={p} segments={10} size="md" />
            <span className="text-muted text-xs font-mono">{p}%</span>
          </div>)}
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};const X=["Default","RadialWithText","RadialEmpty","RadialFull","RadialSizes","Block","BlockEmpty","BlockFull","BlockSegments","BlockSizes","AllVariants"];export{y as AllVariants,h as Block,k as BlockEmpty,N as BlockFull,b as BlockSegments,j as BlockSizes,x as Default,u as RadialEmpty,f as RadialFull,v as RadialSizes,g as RadialWithText,X as __namedExportsOrder,Q as default};
