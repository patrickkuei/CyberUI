import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./Skeleton-B19-L52B.js";import"./iframe-Duw4cJgX.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-CMR7KYFx.js";const f={title:"Components/Skeleton",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed skeleton loader component for displaying loading placeholders with smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Skeleton } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

<Skeleton variant="text" lines={3} />
<Skeleton variant="circular" size="lg" />
<Skeleton variant="rectangular" height="200px" />
<Skeleton variant="avatar-text" />
<Skeleton variant="card" />

<Skeleton variant="text" size="sm" />
<Skeleton variant="text" size="md" />
<Skeleton variant="text" size="lg" />

<Skeleton width="300px" height="50px" />
<Skeleton animate={false} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'text' \\| 'circular' \\| 'rectangular' \\| 'card' \\| 'avatar-text' \\| 'button-group'\` | ❌ | \`'text'\` | Skeleton variant type |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Skeleton size (supports responsive values) |
| \`lines\` | \`number\` | ❌ | \`3\` | Number of lines for text variant |
| \`width\` | \`string \\| number\` | ❌ | - | Custom width override |
| \`height\` | \`string \\| number\` | ❌ | - | Custom height override |
| \`animate\` | \`boolean\` | ❌ | \`true\` | Whether to show pulse animation |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes |
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["text","circular","rectangular","card","avatar-text","button-group"],description:"Skeleton variant type"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Skeleton size (supports responsive values)"},lines:{control:{type:"number",min:1,max:10},description:"Number of lines for text variant"},width:{control:"text",description:"Custom width override"},height:{control:"text",description:"Custom height override"},animate:{control:"boolean",description:"Whether to show pulse animation"}},args:{variant:"text",animate:!0}},s={args:{variant:"text",lines:3},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},r={args:{variant:"circular",size:"md"}},n={args:{variant:"rectangular",size:"md"},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},i={args:{variant:"avatar-text",size:"md"},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},o={args:{variant:"button-group",size:"md"}},c={args:{variant:"card",size:"md"},decorators:[t=>e.jsx("div",{className:"w-96",children:e.jsx(t,{})})]},d={args:{variant:"text",size:"sm",lines:3},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},m={args:{variant:"text",size:"md",lines:3},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},l={args:{variant:"text",size:"lg",lines:3},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},x={args:{variant:"text",animate:!1},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},v={args:{variant:"rectangular",width:"300px",height:"100px"}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Skeleton Variants"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Text Lines"}),e.jsx(a,{variant:"text",lines:4})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Circular Avatar"}),e.jsx(a,{variant:"circular"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Rectangular Image"}),e.jsx(a,{variant:"rectangular"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Avatar + Text"}),e.jsx(a,{variant:"avatar-text"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Button Group"}),e.jsx(a,{variant:"button-group"})]})]})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Skeleton Sizes"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Small"}),e.jsx(a,{variant:"avatar-text",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Medium"}),e.jsx(a,{variant:"avatar-text",size:"md"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Large"}),e.jsx(a,{variant:"avatar-text",size:"lg"})]})]})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Loading States"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"With Animation"}),e.jsx(a,{variant:"text",lines:2,animate:!0})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Without Animation"}),e.jsx(a,{variant:"text",lines:2,animate:!1})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Custom Dimensions"}),e.jsx(a,{variant:"rectangular",width:"250px",height:"80px"})]})]})]})},g={render:()=>e.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[500px]",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2",children:"Neural Interface Loading..."}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"User Profile"}),e.jsx(a,{variant:"avatar-text",size:"lg"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"System Status"}),e.jsx(a,{variant:"text",lines:4})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"Actions"}),e.jsx(a,{variant:"button-group"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"Dashboard"}),e.jsx(a,{variant:"card"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    size: "md"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    size: "md"
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "avatar-text",
    size: "md"
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "button-group",
    size: "md"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "card",
    size: "md"
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "sm",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "md",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "lg",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    animate: false
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    width: "300px",
    height: "100px"
  }
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Skeleton Variants</h4>

      <div className="space-y-6">
        <div>
          <h5 className="text-sm text-muted mb-2">Text Lines</h5>
          <Skeleton variant="text" lines={4} />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Circular Avatar</h5>
          <Skeleton variant="circular" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Rectangular Image</h5>
          <Skeleton variant="rectangular" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Avatar + Text</h5>
          <Skeleton variant="avatar-text" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Button Group</h5>
          <Skeleton variant="button-group" />
        </div>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Skeleton Sizes</h4>

      <div className="space-y-6">
        <div>
          <h5 className="text-sm text-muted mb-2">Small</h5>
          <Skeleton variant="avatar-text" size="sm" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Medium</h5>
          <Skeleton variant="avatar-text" size="md" />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Large</h5>
          <Skeleton variant="avatar-text" size="lg" />
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Loading States</h4>

      <div className="space-y-6">
        <div>
          <h5 className="text-sm text-muted mb-2">With Animation</h5>
          <Skeleton variant="text" lines={2} animate={true} />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Without Animation</h5>
          <Skeleton variant="text" lines={2} animate={false} />
        </div>

        <div>
          <h5 className="text-sm text-muted mb-2">Custom Dimensions</h5>
          <Skeleton variant="rectangular" width="250px" height="80px" />
        </div>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[500px]">
      <h3 className="text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2">
        Neural Interface Loading...
      </h3>

      {/* User Profile Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">User Profile</h4>
        <Skeleton variant="avatar-text" size="lg" />
      </div>

      {/* System Status Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">System Status</h4>
        <Skeleton variant="text" lines={4} />
      </div>

      {/* Action Buttons Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">Actions</h4>
        <Skeleton variant="button-group" />
      </div>

      {/* Dashboard Card Loading */}
      <div className="space-y-4">
        <h4 className="text-sm text-accent">Dashboard</h4>
        <Skeleton variant="card" />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};const k=["Text","Circular","Rectangular","AvatarText","ButtonGroup","Card","Small","Medium","Large","WithoutAnimation","CustomDimensions","AllVariants","AllSizes","LoadingStates","CyberpunkDemo"];export{p as AllSizes,u as AllVariants,i as AvatarText,o as ButtonGroup,c as Card,r as Circular,v as CustomDimensions,g as CyberpunkDemo,l as Large,h as LoadingStates,m as Medium,n as Rectangular,d as Small,s as Text,x as WithoutAnimation,k as __namedExportsOrder,f as default};
