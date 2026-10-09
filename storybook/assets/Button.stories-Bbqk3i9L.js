import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Button-BBoIyt2X.js";import"./iframe-90mDVGZA.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-DmtwlApZ.js";import"./cn-CNMN3A1O.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,I={title:"Components/Button",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed button component with multiple variants, hover effects, and smooth animations.

Under \`prefers-reduced-motion: reduce\`, the primary shimmer sweep and the press scale are off.

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
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Button style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size (supports responsive values)"},children:{control:"text",description:"Button content/text"},disabled:{control:"boolean",description:"Whether the button is disabled"}},args:{onClick:()=>{},children:"Button"}},i={args:{variant:"primary",children:"Execute Protocol"}},d={args:{variant:"secondary",children:"Scan System"}},c={args:{variant:"danger",children:"Emergency Stop"}},l={args:{variant:"ghost",children:"Run Diagnostics"}},p={args:{variant:"primary",size:"sm",children:"Small Button"}},m={args:{variant:"primary",size:"md",children:"Medium Button"}},u={args:{variant:"primary",size:"lg",children:"Large Button"}},g={args:{variant:"primary",children:"Disabled Button",disabled:!0}},h={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{variant:"ghost",children:"Ghost"})]}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"primary",size:"sm",children:"Small"}),e.jsx(a,{variant:"primary",size:"md",children:"Medium"}),e.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})]})},v={args:{children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 p-6 bg-base",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Disabled States"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"primary",disabled:!0,children:"Primary Disabled"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),e.jsx(a,{variant:"danger",disabled:!0,children:"Danger Disabled"}),e.jsx(a,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]})},x=["primary","secondary","danger","ghost"],S=["sm","md","lg"],b={args:{children:"Button"},parameters:{docs:{description:{story:"Each row pairs an enabled and a disabled button with the same label. Both render at exactly the same size."}}},render:()=>e.jsx("div",{className:"flex flex-col gap-4 p-6 bg-base",children:x.flatMap(r=>S.map(t=>e.jsxs("div",{className:"flex gap-4 items-start",children:[e.jsx(a,{variant:r,size:t,"data-testid":`${r}-${t}-enabled`,children:"Jack In"}),e.jsx(a,{variant:r,size:t,disabled:!0,"data-testid":`${r}-${t}-disabled`,children:"Jack In"})]},`${r}-${t}`)))}),play:async({canvasElement:r})=>{const t=w(r);for(const n of x)for(const s of S){const B=t.getByTestId(`${n}-${s}-enabled`).getBoundingClientRect(),f=t.getByTestId(`${n}-${s}-disabled`).getBoundingClientRect();await o({variant:n,size:s,width:f.width,height:f.height}).toEqual({variant:n,size:s,width:B.width,height:B.height})}}},y={args:{children:"Execute Protocol"},parameters:{docs:{description:{story:"Overriding `--color-accent` and `--color-secondary` on a wrapper re-colours the primary gradient inside it. A default-themed button sits below for comparison."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base",children:[e.jsx("div",{className:"flex gap-4 p-4 border border-border-default",style:{"--color-accent":"#c084fc","--color-secondary":"#c084fc"},children:e.jsx(a,{variant:"primary","data-testid":"violet-button",children:"Violet Uplink"})}),e.jsx("div",{className:"flex gap-4 p-4 border border-border-default",children:e.jsx(a,{variant:"primary","data-testid":"default-button",children:"Neon Uplink"})})]}),play:async({canvasElement:r})=>{const t=w(r),n=getComputedStyle(t.getByTestId("violet-button")).backgroundImage,s=getComputedStyle(t.getByTestId("default-button")).backgroundImage;await o(n).toContain("192, 132, 252"),await o(n).not.toContain("255, 251, 0"),await o(n).not.toContain("0, 255, 249"),await o(s).toBe("linear-gradient(135deg, rgb(255, 251, 0) 10%, rgb(0, 255, 249) 90%)"),await o(s).toContain("0, 255, 249")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Execute Protocol'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Scan System'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Emergency Stop'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Run Diagnostics'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Execute Protocol'
  },
  parameters: {
    docs: {
      description: {
        story: 'Overriding \`--color-accent\` and \`--color-secondary\` on a wrapper re-colours the primary gradient inside it. A default-themed button sits below for comparison.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 p-6 bg-base">
      <div className="flex gap-4 p-4 border border-border-default" style={{
      '--color-accent': '#c084fc',
      '--color-secondary': '#c084fc'
    } as React.CSSProperties}>
        <Button variant="primary" data-testid="violet-button">
          Violet Uplink
        </Button>
      </div>
      <div className="flex gap-4 p-4 border border-border-default">
        <Button variant="primary" data-testid="default-button">
          Neon Uplink
        </Button>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scoped = getComputedStyle(canvas.getByTestId('violet-button')).backgroundImage;
    const root = getComputedStyle(canvas.getByTestId('default-button')).backgroundImage;
    // #c084fc = rgb(192, 132, 252); the defaults are accent #fffb00 and secondary #00fff9.
    await expect(scoped).toContain('192, 132, 252');
    await expect(scoped).not.toContain('255, 251, 0');
    await expect(scoped).not.toContain('0, 255, 249');
    await expect(root).toBe('linear-gradient(135deg, rgb(255, 251, 0) 10%, rgb(0, 255, 249) 90%)');
    await expect(root).toContain('0, 255, 249');
  }
}`,...y.parameters?.docs?.source}}};const k=["Primary","Secondary","Danger","Ghost","Small","Medium","Large","Disabled","AllVariants","AllDisabledVariants","DisabledKeepsSize","ScopedColorOverride"];export{v as AllDisabledVariants,h as AllVariants,c as Danger,g as Disabled,b as DisabledKeepsSize,l as Ghost,u as Large,m as Medium,i as Primary,y as ScopedColorOverride,d as Secondary,p as Small,k as __namedExportsOrder,I as default};
