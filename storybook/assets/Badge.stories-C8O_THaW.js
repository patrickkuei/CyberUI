import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Badge-D04xw0w6.js";import"./iframe-i39TiQeM.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-CWb7r9Tt.js";import"./cn-CNMN3A1O.js";const A={title:"Components/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed badge component with multiple variants, icon support, and interactive capabilities.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Badge } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="accent">Accent</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Responsive sizes
<Badge size={{ base: 'sm', lg: 'lg' }}>Responsive</Badge>
<Badge size={{ base: 'md', md: 'sm', xl: 'lg' }}>Multi-breakpoint</Badge>

<Badge
  variant="success"
  leftIcon={<StatusIcon />}
>
  Online
</Badge>

<Badge
  variant="accent"
  rightIcon={<ArrowIcon />}
>
  Action
</Badge>

// Interactive badges
<Badge
  variant="primary"
  clickable
  onClick={() => console.log('Badge clicked')}
>
  Click Me
</Badge>

// Status indicators
<Badge variant="success">ONLINE</Badge>
<Badge variant="warning">DEGRADED</Badge>
<Badge variant="error">OFFLINE</Badge>

// Neutral outline for quiet labels
<Badge variant="neutral">Operator Call</Badge>

// Flat (no resting shadow) and corner shapes
<Badge variant="secondary" shadow={false}>Included</Badge>
<Badge shape="rounded">Rounded</Badge>
<Badge variant="neutral" shape="square" shadow={false}>Square</Badge>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`string\` | ❌ | \`'primary'\` | Badge color variant |
| \`shadow\` | \`boolean\` | ❌ | \`true\` | Resting drop shadow (\`shadow-lg\`). A clickable badge keeps its hover effect when \`false\` |
| \`shape\` | \`'pill' \\| 'rounded' \\| 'square'\` | ❌ | \`'pill'\` | Corner shape: fully rounded, slightly rounded, or sharp |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Badge size (supports responsive values) |
| \`leftIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the left side |
| \`rightIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the right side |
| \`clickable\` | \`boolean\` | ❌ | \`false\` | Whether the badge is clickable with hover effects |
| \`children\` | \`React.ReactNode\` | ✅ | - | Badge content |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes |
| \`onClick\` | \`() => void\` | ❌ | - | Click handler function |

**Variant options:** \`'primary'\`, \`'secondary'\`, \`'accent'\`, \`'success'\`, \`'error'\`, \`'warning'\`, \`'neutral'\`

The six color variants are solid fills with dark text. \`neutral\` is transparent with a \`border-default\` outline and default-colored text, and is the same size as a filled badge. Use it for labels that carry no status.

Additional HTML span attributes can be passed and will be applied to the badge element.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","success","error","warning","neutral"],description:"Badge color variant"},shadow:{control:"boolean",description:"Whether the badge has its resting drop shadow"},shape:{control:{type:"select"},options:["pill","rounded","square"],description:"Corner shape of the badge"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Badge size (supports responsive values)"},clickable:{control:"boolean",description:"Whether the badge is clickable with hover effects"},className:{control:"text",description:"Additional CSS classes"}}},r={args:{variant:"primary",children:"Primary"}},s={args:{variant:"secondary",children:"Secondary"}},n={args:{variant:"accent",children:"Accent"}},c={args:{variant:"success",children:"Success"}},t={args:{variant:"error",children:"Error"}},i={args:{variant:"warning",children:"Warning"}},d={args:{variant:"neutral",children:"Unverified Signal"}},o={name:"Without Shadow",parameters:{docs:{description:{story:"`shadow={false}` removes the resting drop shadow."}}},args:{variant:"secondary",shadow:!1,children:"Uplink Included"}},l={name:"Shape Variants",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{shape:"pill",variant:"accent",children:"Pill Jack"}),e.jsx(a,{shape:"rounded",variant:"accent",children:"Rounded Chip"}),e.jsx(a,{shape:"square",variant:"accent",children:"Square Port"})]})},p={parameters:{docs:{description:{story:"Every variant in each shape, with and without the resting shadow."}}},render:()=>{const w=["primary","secondary","accent","success","error","warning","neutral"],S=["pill","rounded","square"];return e.jsx("div",{className:"space-y-6",children:[!0,!1].map(y=>e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-default font-semibold",children:y?"Shadow on":"Shadow off"}),S.map(N=>e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:w.map(B=>e.jsx(a,{variant:B,shape:N,shadow:y,size:"sm",children:B.toUpperCase()},B))},N))]},String(y)))})}},m={name:"Quiet Labels Example",parameters:{docs:{description:{story:"Flat, square badges beside outlined option tiles: a neutral label for an open choice and a filled cyan label for an included item."}}},render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-4 h-4 border border-border-default"}),e.jsx("span",{className:"text-default",children:"Optic Implant Upgrade"}),e.jsx(a,{variant:"neutral",shape:"square",shadow:!1,size:"sm",children:"Operator Call"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-4 h-4 border border-secondary bg-secondary"}),e.jsx("span",{className:"text-default",children:"Neural Firewall"}),e.jsx(a,{variant:"secondary",shape:"square",shadow:!1,size:"sm",children:"Included"})]})]})},u={name:"Size Variants",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",variant:"primary",children:"Small"}),e.jsx(a,{size:"md",variant:"primary",children:"Medium"}),e.jsx(a,{size:"lg",variant:"primary",children:"Large"})]})},g={args:{variant:"success",children:"Online",leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"})}},h={args:{variant:"accent",children:"Status",rightIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full ml-2"})}},v={args:{variant:"primary",children:"Click Me",clickable:!0,onClick:()=>alert("Badge clicked!")}},f={name:"Security Clearance Example",render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"Access Levels:"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{variant:"primary",clickable:!0,leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"}),onClick:()=>alert("Administrator access requested"),children:"Administrator"}),e.jsx(a,{variant:"secondary",clickable:!0,leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"}),onClick:()=>alert("Operator access requested"),children:"Operator"}),e.jsx(a,{variant:"accent",clickable:!0,leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"}),onClick:()=>alert("Guest access requested"),children:"Guest Access"})]})]})})},x={name:"Status Examples",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"System Status:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"success",size:"sm",children:"ONLINE"}),e.jsx(a,{variant:"warning",size:"sm",children:"DEGRADED"}),e.jsx(a,{variant:"error",size:"sm",children:"OFFLINE"}),e.jsx(a,{variant:"secondary",size:"sm",children:"MAINTENANCE"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"Priority Levels:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"error",children:"CRITICAL"}),e.jsx(a,{variant:"warning",children:"HIGH"}),e.jsx(a,{variant:"accent",children:"MEDIUM"}),e.jsx(a,{variant:"secondary",children:"LOW"})]})]})]})},b={render:()=>e.jsxs("div",{className:"space-y-4 p-4 bg-surface rounded-lg",children:[e.jsx("h3",{className:"text-default font-semibold",children:"Hover Effects Demonstration:"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{variant:"primary",clickable:!0,children:"Hover Primary"}),e.jsx(a,{variant:"secondary",clickable:!0,children:"Hover Secondary"}),e.jsx(a,{variant:"accent",clickable:!0,children:"Hover Accent"}),e.jsx(a,{variant:"success",clickable:!0,children:"Hover Success"}),e.jsx(a,{variant:"error",clickable:!0,children:"Hover Error"}),e.jsx(a,{variant:"warning",clickable:!0,children:"Hover Warning"})]}),e.jsx("p",{className:"text-muted text-sm",children:"Each badge above demonstrates variant-specific hover shadow effects"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Accent'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Error'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    children: 'Unverified Signal'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Without Shadow',
  parameters: {
    docs: {
      description: {
        story: '\`shadow={false}\` removes the resting drop shadow.'
      }
    }
  },
  args: {
    variant: 'secondary',
    shadow: false,
    children: 'Uplink Included'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Shape Variants',
  render: () => <div className="flex items-center gap-4">
      <Badge shape="pill" variant="accent">Pill Jack</Badge>
      <Badge shape="rounded" variant="accent">Rounded Chip</Badge>
      <Badge shape="square" variant="accent">Square Port</Badge>
    </div>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Every variant in each shape, with and without the resting shadow.'
      }
    }
  },
  render: () => {
    const variants = ['primary', 'secondary', 'accent', 'success', 'error', 'warning', 'neutral'] as const;
    const shapes = ['pill', 'rounded', 'square'] as const;
    return <div className="space-y-6">
        {[true, false].map(shadow => <div key={String(shadow)} className="space-y-3">
            <h3 className="text-default font-semibold">{shadow ? 'Shadow on' : 'Shadow off'}</h3>
            {shapes.map(shape => <div key={shape} className="flex flex-wrap items-center gap-2">
                {variants.map(variant => <Badge key={variant} variant={variant} shape={shape} shadow={shadow} size="sm">
                    {variant.toUpperCase()}
                  </Badge>)}
              </div>)}
          </div>)}
      </div>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Quiet Labels Example',
  parameters: {
    docs: {
      description: {
        story: 'Flat, square badges beside outlined option tiles: a neutral label for an open choice and a filled cyan label for an included item.'
      }
    }
  },
  render: () => <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 border border-border-default"></span>
        <span className="text-default">Optic Implant Upgrade</span>
        <Badge variant="neutral" shape="square" shadow={false} size="sm">Operator Call</Badge>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 border border-secondary bg-secondary"></span>
        <span className="text-default">Neural Firewall</span>
        <Badge variant="secondary" shape="square" shadow={false} size="sm">Included</Badge>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
      <Badge size="lg" variant="primary">Large</Badge>
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Online',
    leftIcon: <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Status',
    rightIcon: <span className="w-2 h-2 bg-base rounded-full ml-2"></span>
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Click Me',
    clickable: true,
    onClick: () => alert('Badge clicked!')
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Security Clearance Example',
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-default font-semibold mb-2">Access Levels:</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary" clickable leftIcon={<span className="w-2 h-2 bg-base rounded-full mr-2"></span>} onClick={() => alert('Administrator access requested')}>
            Administrator
          </Badge>
          <Badge variant="secondary" clickable leftIcon={<span className="w-2 h-2 bg-base rounded-full mr-2"></span>} onClick={() => alert('Operator access requested')}>
            Operator
          </Badge>
          <Badge variant="accent" clickable leftIcon={<span className="w-2 h-2 bg-base rounded-full mr-2"></span>} onClick={() => alert('Guest access requested')}>
            Guest Access
          </Badge>
        </div>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Status Examples',
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-default font-semibold mb-2">System Status:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success" size="sm">ONLINE</Badge>
          <Badge variant="warning" size="sm">DEGRADED</Badge>
          <Badge variant="error" size="sm">OFFLINE</Badge>
          <Badge variant="secondary" size="sm">MAINTENANCE</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-default font-semibold mb-2">Priority Levels:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="error">CRITICAL</Badge>
          <Badge variant="warning">HIGH</Badge>
          <Badge variant="accent">MEDIUM</Badge>
          <Badge variant="secondary">LOW</Badge>
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4 bg-surface rounded-lg">
      <h3 className="text-default font-semibold">Hover Effects Demonstration:</h3>
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary" clickable>Hover Primary</Badge>
        <Badge variant="secondary" clickable>Hover Secondary</Badge>
        <Badge variant="accent" clickable>Hover Accent</Badge>
        <Badge variant="success" clickable>Hover Success</Badge>
        <Badge variant="error" clickable>Hover Error</Badge>
        <Badge variant="warning" clickable>Hover Warning</Badge>
      </div>
      <p className="text-muted text-sm">
        Each badge above demonstrates variant-specific hover shadow effects
      </p>
    </div>
}`,...b.parameters?.docs?.source}}};const q=["Primary","Secondary","Accent","Success","Error","Warning","Neutral","Flat","Shapes","AllVariants","QuietLabels","AllSizes","WithLeftIcon","WithRightIcon","Clickable","SecurityClearance","StatusVariants","InteractiveDemo"];export{n as Accent,u as AllSizes,p as AllVariants,v as Clickable,t as Error,o as Flat,b as InteractiveDemo,d as Neutral,r as Primary,m as QuietLabels,s as Secondary,f as SecurityClearance,l as Shapes,x as StatusVariants,c as Success,i as Warning,g as WithLeftIcon,h as WithRightIcon,q as __namedExportsOrder,A as default};
