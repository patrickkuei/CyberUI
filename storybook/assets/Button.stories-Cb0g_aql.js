import{j as a}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./Button-DKkKelU7.js";import"./iframe-qIXMJ8Q3.js";import"./preload-helper-PPVm8Dsz.js";import"./responsive-hlslnJmS.js";const y={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed button component with multiple variants, hover effects, and smooth animations.

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

// Responsive sizes
<Button variant="primary" size={{ base: 'sm', lg: 'lg' }}>Responsive</Button>
<Button variant="primary" size={{ base: 'md', md: 'sm', xl: 'lg' }}>Multi-breakpoint</Button>

// Disabled state
<Button variant="primary" disabled>Disabled Button</Button>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Button style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Button size (supports responsive values) |
| \`children\` | \`React.ReactNode\` | ✅ | - | Button content/text |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
| \`onClick\` | \`() => void\` | ❌ | - | Click handler function |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the button is disabled |

All standard HTML button props are also supported.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Button style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size (supports responsive values)"},children:{control:"text",description:"Button content/text"},disabled:{control:"boolean",description:"Whether the button is disabled"}},args:{onClick:()=>{},children:"Button"}},e={args:{variant:"primary",children:"Execute Protocol"}},t={args:{variant:"secondary",children:"Scan System"}},s={args:{variant:"danger",children:"Emergency Stop"}},n={args:{variant:"ghost",children:"Run Diagnostics"}},i={args:{variant:"primary",size:"sm",children:"Small Button"}},o={args:{variant:"primary",size:"md",children:"Medium Button"}},d={args:{variant:"primary",size:"lg",children:"Large Button"}},c={args:{variant:"primary",children:"Disabled Button",disabled:!0}},l={args:{children:"Button"},render:()=>a.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[a.jsxs("div",{className:"flex gap-4 flex-wrap",children:[a.jsx(r,{variant:"primary",children:"Primary"}),a.jsx(r,{variant:"secondary",children:"Secondary"}),a.jsx(r,{variant:"danger",children:"Danger"}),a.jsx(r,{variant:"ghost",children:"Ghost"})]}),a.jsxs("div",{className:"flex gap-4 flex-wrap",children:[a.jsx(r,{variant:"primary",size:"sm",children:"Small"}),a.jsx(r,{variant:"primary",size:"md",children:"Medium"}),a.jsx(r,{variant:"primary",size:"lg",children:"Large"})]})]})},m={args:{children:"Button"},render:()=>a.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[a.jsx("h4",{className:"text-secondary font-semibold",children:"Disabled States"}),a.jsxs("div",{className:"flex gap-4 flex-wrap",children:[a.jsx(r,{variant:"primary",disabled:!0,children:"Primary Disabled"}),a.jsx(r,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),a.jsx(r,{variant:"danger",disabled:!0,children:"Danger Disabled"}),a.jsx(r,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Execute Protocol'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Scan System'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Emergency Stop'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Run Diagnostics'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const B=["Primary","Secondary","Danger","Ghost","Small","Medium","Large","Disabled","AllVariants","AllDisabledVariants"];export{m as AllDisabledVariants,l as AllVariants,s as Danger,c as Disabled,n as Ghost,d as Large,o as Medium,e as Primary,t as Secondary,i as Small,B as __namedExportsOrder,y as default};
