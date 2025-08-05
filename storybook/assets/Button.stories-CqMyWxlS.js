import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dhwu3wqV.js";import"./preload-helper-D9Z9MdNV.js";const a=({variant:p="primary",size:g="md",className:v="",disabled:r=!1,children:h,...b})=>{const y=["group","relative","overflow-hidden","rounded-lg","font-bold","uppercase","tracking-wider","transition-all","duration-300","ease-in-out","transform","focus:outline-none",r?"cursor-not-allowed":"cursor-pointer"].join(" "),x={sm:"py-1 px-4 text-sm",md:"py-2 px-6 text-lg",lg:"py-3 px-8 text-xl"},f=(D,w)=>({primary:{enabled:"bg-linear-(--gradient-accent) text-base shadow-primary border-none hover:shadow-lg-accent hover:scale-105 focus:ring-4 focus:ring-accent active:scale-95",disabled:"bg-base border-2 border-accent/20 text-accent/40 shadow-none opacity-50 hover:scale-100"},secondary:{enabled:"bg-surface border-2 border-secondary text-secondary shadow-secondary/30 hover:bg-secondary hover:text-base hover:shadow-secondary hover:scale-105 focus:ring-4 focus:ring-secondary active:scale-95",disabled:"bg-base border-2 border-secondary/20 text-secondary/40 shadow-none opacity-50 hover:bg-base hover:text-secondary/40 hover:scale-100"},danger:{enabled:"bg-surface border-2 border-error text-error shadow-error/30 hover:bg-error hover:text-base hover:shadow-error hover:scale-105 focus:ring-4 focus:ring-error active:scale-95",disabled:"bg-base border-2 border-error/20 text-error/40 shadow-none opacity-50 hover:bg-base hover:text-error/40 hover:scale-100"},ghost:{enabled:"bg-surface border-2 border-accent text-accent shadow-secondary hover:bg-accent hover:text-base hover:shadow-lg-accent hover:scale-105 focus:ring-4 focus:ring-accent active:scale-95",disabled:"bg-base border-2 border-accent/10 text-muted/60 shadow-none opacity-40 hover:bg-base hover:text-muted/60 hover:scale-100"}})[D][w?"disabled":"enabled"],B=[y,x[g],f(p,r),v].filter(Boolean).join(" "),S=p==="primary"&&!r;return e.jsxs("button",{className:B,disabled:r,...b,children:[e.jsx("span",{className:"relative z-10",children:h}),S&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"}),r&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-base/10 to-transparent pointer-events-none"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const P={title:"Components/Button",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed button component with multiple variants, hover effects, and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Button } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<Button variant="primary" onClick={() => console.log('clicked')}>
  Execute Protocol
</Button>

// Different variants
<Button variant="secondary">Scan System</Button>
<Button variant="danger">Emergency Stop</Button>
<Button variant="ghost">Run Diagnostics</Button>

// Different sizes
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="lg">Large</Button>

// Disabled state
<Button variant="primary" disabled>Disabled Button</Button>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Button style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg'\` | ❌ | \`'md'\` | Button size |
| \`children\` | \`React.ReactNode\` | ✅ | - | Button content/text |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
| \`onClick\` | \`() => void\` | ❌ | - | Click handler function |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the button is disabled |

All standard HTML button props are also supported.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Button style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},children:{control:"text",description:"Button content/text"},disabled:{control:"boolean",description:"Whether the button is disabled"}},args:{onClick:()=>{},children:"Button"}},t={args:{variant:"primary",children:"Execute Protocol"}},s={args:{variant:"secondary",children:"Scan System"}},n={args:{variant:"danger",children:"Emergency Stop"}},o={args:{variant:"ghost",children:"Run Diagnostics"}},i={args:{variant:"primary",size:"sm",children:"Small Button"}},d={args:{variant:"primary",size:"md",children:"Medium Button"}},c={args:{variant:"primary",size:"lg",children:"Large Button"}},l={args:{variant:"primary",children:"Disabled Button",disabled:!0}},m={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{variant:"ghost",children:"Ghost"})]}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"primary",size:"sm",children:"Small"}),e.jsx(a,{variant:"primary",size:"md",children:"Medium"}),e.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})]})},u={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Disabled States"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"primary",disabled:!0,children:"Primary Disabled"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),e.jsx(a,{variant:"danger",disabled:!0,children:"Danger Disabled"}),e.jsx(a,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Execute Protocol'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Scan System'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Emergency Stop'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Run Diagnostics'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-col gap-4 p-6 bg-base">
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-col gap-4 p-6 bg-base">
      <h4 className="text-secondary font-semibold">Disabled States</h4>
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="danger" disabled>Danger Disabled</Button>
        <Button variant="ghost" disabled>Ghost Disabled</Button>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const V=["Primary","Secondary","Danger","Ghost","Small","Medium","Large","Disabled","AllVariants","AllDisabledVariants"];export{u as AllDisabledVariants,m as AllVariants,n as Danger,l as Disabled,o as Ghost,c as Large,d as Medium,t as Primary,s as Secondary,i as Small,V as __namedExportsOrder,P as default};
