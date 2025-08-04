import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CY0blb0B.js";import{P as $}from"./index-BBwP5Ey1.js";import"./preload-helper-D9Z9MdNV.js";const M=({progress:w,className:P="",children:f})=>{const{SEGMENT_COUNT:R,SEGMENT_ANGLE:y,GAP_ANGLE:v,INNER_RADIUS:o,OUTER_RADIUS:n,OUTER_TICK_RADIUS:c}=$,E=y-v;return t.jsxs("div",{className:`relative ${P}`,children:[t.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 60 60",style:{overflow:"visible"},children:[[...Array(60)].map((T,r)=>{const s=6*r,e=r%5===0?6:3,g="var(--color-muted)",h=30+c*Math.cos(s*Math.PI/180),u=30+c*Math.sin(s*Math.PI/180),x=30+(c-e)*Math.cos(s*Math.PI/180),N=30+(c-e)*Math.sin(s*Math.PI/180);return t.jsx("line",{x1:h,y1:u,x2:x,y2:N,stroke:g,strokeWidth:1,strokeLinecap:"round",opacity:.7},`tick-${r}`)}),[...Array(R)].map((T,r)=>{const s=y*r-90+v/2,a=s+E,e=I=>I*Math.PI/180,g=30+o*Math.cos(e(s)),h=30+o*Math.sin(e(s)),u=30+n*Math.cos(e(s)),x=30+n*Math.sin(e(s)),N=30+n*Math.cos(e(a)),b=30+n*Math.sin(e(a)),_=30+o*Math.cos(e(a)),A=30+o*Math.sin(e(a)),j=`M ${g} ${h} L ${u} ${x} L ${N} ${b} L ${_} ${A} Z`,S=r<Math.floor(w/5);return t.jsx("path",{d:j,fill:S?"var(--color-accent)":"var(--color-border-default)",style:{filter:S?"drop-shadow(0 0 6px var(--color-accent))":"none",transition:"fill 0.3s ease"}},`segment-${r}`)})]}),f&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:f})]})};M.__docgenInfo={description:"",methods:[],displayName:"SegmentedProgress",props:{progress:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U={title:"Components/SegmentedProgress",component:M,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed segmented progress bar with neon styling and smooth animations. Uses a fixed 20-segment circular design.

**Usage:**

\`\`\`tsx
import React from 'react';
import { SegmentedProgress } from 'cyberui-react';
import 'cyberui-react/styles.css';

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
`}}},tags:["autodocs"],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},className:{control:"text",description:"Additional CSS classes for styling"}}},i={args:{progress:50,className:"w-32 h-32"}},l={args:{progress:75,className:"w-32 h-32",children:t.jsx("span",{className:"text-accent font-bold text-lg",children:"75%"})}},m={args:{progress:0,className:"w-32 h-32"}},d={args:{progress:100,className:"w-32 h-32"}},p={args:{progress:60,className:"w-48 h-48",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-accent",children:"60%"}),t.jsx("div",{className:"text-sm text-muted",children:"Complete"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    className: 'w-32 h-32'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    className: 'w-32 h-32',
    children: <span className="text-accent font-bold text-lg">75%</span>
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 0,
    className: 'w-32 h-32'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 100,
    className: 'w-32 h-32'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 60,
    className: 'w-48 h-48',
    children: <div className="text-center">
        <div className="text-2xl font-bold text-accent">60%</div>
        <div className="text-sm text-muted">Complete</div>
      </div>
  }
}`,...p.parameters?.docs?.source}}};const G=["Default","WithText","Empty","Full","Large"];export{i as Default,m as Empty,d as Full,p as Large,l as WithText,G as __namedExportsOrder,U as default};
