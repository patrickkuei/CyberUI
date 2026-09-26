import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-DVF7VTZb.js";import"./iframe-DrYUIB3m.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-DIyY3Grf.js";import"./cn-CNMN3A1O.js";const{expect:S,within:f}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Button",component:e,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed button component with multiple variants, hover effects, and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Button style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size (supports responsive values)"},children:{control:"text",description:"Button content/text"},disabled:{control:"boolean",description:"Whether the button is disabled"}},args:{onClick:()=>{},children:"Button"}},i={args:{variant:"primary",children:"Execute Protocol"}},o={args:{variant:"secondary",children:"Scan System"}},d={args:{variant:"danger",children:"Emergency Stop"}},c={args:{variant:"ghost",children:"Run Diagnostics"}},l={args:{variant:"primary",size:"sm",children:"Small Button"}},m={args:{variant:"primary",size:"md",children:"Medium Button"}},p={args:{variant:"primary",size:"lg",children:"Large Button"}},u={args:{variant:"primary",children:"Disabled Button",disabled:!0}},g={args:{children:"Button"},render:()=>a.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[a.jsxs("div",{className:"flex gap-4 flex-wrap",children:[a.jsx(e,{variant:"primary",children:"Primary"}),a.jsx(e,{variant:"secondary",children:"Secondary"}),a.jsx(e,{variant:"danger",children:"Danger"}),a.jsx(e,{variant:"ghost",children:"Ghost"})]}),a.jsxs("div",{className:"flex gap-4 flex-wrap",children:[a.jsx(e,{variant:"primary",size:"sm",children:"Small"}),a.jsx(e,{variant:"primary",size:"md",children:"Medium"}),a.jsx(e,{variant:"primary",size:"lg",children:"Large"})]})]})},h={args:{children:"Button"},render:()=>a.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[a.jsx("h4",{className:"text-secondary font-semibold",children:"Disabled States"}),a.jsxs("div",{className:"flex gap-4 flex-wrap",children:[a.jsx(e,{variant:"primary",disabled:!0,children:"Primary Disabled"}),a.jsx(e,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),a.jsx(e,{variant:"danger",disabled:!0,children:"Danger Disabled"}),a.jsx(e,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]})},B=["primary","secondary","danger","ghost"],x=["sm","md","lg"],v={args:{children:"Button"},parameters:{docs:{description:{story:"Each row pairs an enabled and a disabled button with the same label. Both render at exactly the same size."}}},render:()=>a.jsx("div",{className:"flex flex-col gap-4 p-6 bg-base",children:B.flatMap(r=>x.map(t=>a.jsxs("div",{className:"flex gap-4 items-start",children:[a.jsx(e,{variant:r,size:t,"data-testid":`${r}-${t}-enabled`,children:"Jack In"}),a.jsx(e,{variant:r,size:t,disabled:!0,"data-testid":`${r}-${t}-disabled`,children:"Jack In"})]},`${r}-${t}`)))}),play:async({canvasElement:r})=>{const t=f(r);for(const n of B)for(const s of x){const b=t.getByTestId(`${n}-${s}-enabled`).getBoundingClientRect(),y=t.getByTestId(`${n}-${s}-disabled`).getBoundingClientRect();await S({variant:n,size:s,width:y.width,height:y.height}).toEqual({variant:n,size:s,width:b.width,height:b.height})}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Execute Protocol'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Scan System'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Emergency Stop'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Run Diagnostics'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  parameters: {
    docs: {
      description: {
        story: 'Each row pairs an enabled and a disabled button with the same label. Both render at exactly the same size.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4 p-6 bg-base">
      {SIZE_CHECK_VARIANTS.flatMap(variant => SIZE_CHECK_SIZES.map(size => <div key={\`\${variant}-\${size}\`} className="flex gap-4 items-start">
            <Button variant={variant} size={size} data-testid={\`\${variant}-\${size}-enabled\`}>
              Jack In
            </Button>
            <Button variant={variant} size={size} disabled data-testid={\`\${variant}-\${size}-disabled\`}>
              Jack In
            </Button>
          </div>))}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const variant of SIZE_CHECK_VARIANTS) {
      for (const size of SIZE_CHECK_SIZES) {
        const enabled = canvas.getByTestId(\`\${variant}-\${size}-enabled\`).getBoundingClientRect();
        const disabled = canvas.getByTestId(\`\${variant}-\${size}-disabled\`).getBoundingClientRect();
        await expect({
          variant,
          size,
          width: disabled.width,
          height: disabled.height
        }).toEqual({
          variant,
          size,
          width: enabled.width,
          height: enabled.height
        });
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const I=["Primary","Secondary","Danger","Ghost","Small","Medium","Large","Disabled","AllVariants","AllDisabledVariants","DisabledKeepsSize"];export{h as AllDisabledVariants,g as AllVariants,d as Danger,u as Disabled,v as DisabledKeepsSize,c as Ghost,p as Large,m as Medium,i as Primary,o as Secondary,l as Small,I as __namedExportsOrder,N as default};
