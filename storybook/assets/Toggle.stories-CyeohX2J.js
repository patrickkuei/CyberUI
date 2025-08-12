import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-Bb7R-1FN.js";import{T as a}from"./Toggle-ChmPCDwt.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-CMR7KYFx.js";const L={title:"Components/Toggle",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed toggle switch component with smooth animations and neon styling.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Toggle } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const [enabled, setEnabled] = useState(false);

<Toggle
  label="Enable Ghost Mode"
  checked={enabled}
  onChange={setEnabled}
/>

<Toggle variant="primary" label="Primary Toggle" />
<Toggle variant="secondary" label="Secondary Toggle" />
<Toggle variant="accent" label="Accent Toggle" />

<Toggle size="sm" label="Small Toggle" />
<Toggle size="md" label="Medium Toggle" />
<Toggle size="lg" label="Large Toggle" />

<Toggle size={{ base: 'sm', md: 'md', lg: 'lg' }} label="Responsive Toggle" />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Toggle style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Toggle size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Toggle label text |
| \`checked\` | \`boolean\` | ❌ | \`false\` | Whether the toggle is checked |
| \`onChange\` | \`(checked: boolean) => void\` | ❌ | - | Callback when toggle state changes |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the toggle is disabled |

All standard HTML input props are also supported.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent"],description:"Toggle style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Toggle size (supports responsive values)"},label:{control:"text",description:"Toggle label text"},checked:{control:"boolean",description:"Whether the toggle is checked"},disabled:{control:"boolean",description:"Whether the toggle is disabled"}},args:{label:"Enable feature"}},s={args:{variant:"primary",label:"Neural Interface Active",checked:!0}},t={args:{variant:"secondary",label:"Database Connection",checked:!0}},l={args:{variant:"accent",label:"Ghost Mode Protocol",checked:!0}},o={args:{variant:"primary",size:"sm",label:"Small Toggle",checked:!0}},n={args:{variant:"primary",size:"md",label:"Medium Toggle",checked:!0}},c={args:{variant:"primary",size:"lg",label:"Large Toggle",checked:!0}},i={args:{label:void 0,variant:"primary",checked:!0}},d={args:{variant:"primary",label:"System Locked",checked:!0,disabled:!0}},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Toggle Variants"}),e.jsx(a,{variant:"primary",label:"Primary Toggle",checked:!0}),e.jsx(a,{variant:"secondary",label:"Secondary Toggle",checked:!0}),e.jsx(a,{variant:"accent",label:"Accent Toggle",checked:!0})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Toggle Sizes"}),e.jsx(a,{variant:"primary",size:"sm",label:"Small Toggle",checked:!0}),e.jsx(a,{variant:"primary",size:"md",label:"Medium Toggle",checked:!0}),e.jsx(a,{variant:"primary",size:"lg",label:"Large Toggle",checked:!0})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Toggle States"}),e.jsx(a,{variant:"primary",label:"Normal State",checked:!1}),e.jsx(a,{variant:"primary",label:"Checked State",checked:!0}),e.jsx(a,{variant:"primary",label:"Disabled Unchecked",checked:!1,disabled:!0}),e.jsx(a,{variant:"primary",label:"Disabled Checked",checked:!0,disabled:!0})]})},u={render:()=>{const[b,h]=r.useState(!1),[y,k]=r.useState(!0),[T,v]=r.useState(!1),[x]=r.useState(!0);return e.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-6 space-y-4 min-w-[320px]",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2",children:"System Configuration"}),e.jsx(a,{label:"Ghost Mode",variant:"primary",checked:b,onChange:h}),e.jsx(a,{label:"Hacking Tools",variant:"accent",checked:y,onChange:k}),e.jsx(a,{label:"Neural Link",variant:"secondary",checked:T,onChange:v}),e.jsx(a,{label:"Firewall Protection",variant:"primary",checked:x,disabled:!0})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Neural Interface Active",
    checked: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Database Connection",
    checked: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "accent",
    label: "Ghost Mode Protocol",
    checked: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Toggle",
    checked: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Toggle",
    checked: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Toggle",
    checked: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    variant: "primary",
    checked: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "System Locked",
    checked: true,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle Variants</h4>

      <Toggle variant="primary" label="Primary Toggle" checked={true} />

      <Toggle variant="secondary" label="Secondary Toggle" checked={true} />

      <Toggle variant="accent" label="Accent Toggle" checked={true} />
    </div>
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle Sizes</h4>

      <Toggle variant="primary" size="sm" label="Small Toggle" checked={true} />

      <Toggle variant="primary" size="md" label="Medium Toggle" checked={true} />

      <Toggle variant="primary" size="lg" label="Large Toggle" checked={true} />
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle States</h4>

      <Toggle variant="primary" label="Normal State" checked={false} />

      <Toggle variant="primary" label="Checked State" checked={true} />

      <Toggle variant="primary" label="Disabled Unchecked" checked={false} disabled />

      <Toggle variant="primary" label="Disabled Checked" checked={true} disabled />
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [ghostMode, setGhostMode] = useState(false);
    const [hackingTools, setHackingTools] = useState(true);
    const [neuralLink, setNeuralLink] = useState(false);
    const [firewall] = useState(true);
    return <div className="bg-surface border border-border-default rounded-lg p-6 space-y-4 min-w-[320px]">
        <h3 className="text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2">
          System Configuration
        </h3>

        <Toggle label="Ghost Mode" variant="primary" checked={ghostMode} onChange={setGhostMode} />

        <Toggle label="Hacking Tools" variant="accent" checked={hackingTools} onChange={setHackingTools} />

        <Toggle label="Neural Link" variant="secondary" checked={neuralLink} onChange={setNeuralLink} />

        <Toggle label="Firewall Protection" variant="primary" checked={firewall} disabled />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const M=["Primary","Secondary","Accent","Small","Medium","Large","WithoutLabel","Disabled","AllVariants","AllSizes","AllStates","SystemDemo"];export{l as Accent,m as AllSizes,p as AllStates,g as AllVariants,d as Disabled,c as Large,n as Medium,s as Primary,t as Secondary,o as Small,u as SystemDemo,i as WithoutLabel,M as __namedExportsOrder,L as default};
