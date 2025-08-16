import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as r}from"./Select-DE9Ck4kW.js";import{C as x}from"./index-CUXcN9Hm.js";import"./iframe-CoA5WcsP.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-Zzx7ci0z.js";const a=x.map(v=>({value:v.toLowerCase().replace(/\s+/g,"_"),label:v})),t=[{value:"online",label:"Online"},{value:"offline",label:"Offline"},{value:"maintenance",label:"Under Maintenance"},{value:"critical",label:"Critical Error"}],y=[{value:"guest",label:"Guest Access"},{value:"operator",label:"Operator Level"},{value:"admin",label:"Administrator"},{value:"root",label:"Root Access",disabled:!0}],j={title:"Components/Select",component:r,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed select dropdown component with multiple variants and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Select } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

<Select
  label="Choose Option"
  options={options}
  placeholder="Select an option..."
  helperText="Choose your preferred option"
/>

<Select variant="primary" options={options} />
<Select variant="secondary" options={options} />
<Select variant="danger" options={options} />
<Select variant="ghost" options={options} />

<Select size="sm" options={options} />
<Select size="md" options={options} />
<Select size="lg" options={options} />

<Select size={{ base: 'sm', md: 'md', lg: 'lg' }} options={options} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Select style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Select size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Select label text |
| \`options\` | \`SelectOption[]\` | ✅ | - | Array of options to display |
| \`placeholder\` | \`string\` | ❌ | - | Placeholder text when no option is selected |
| \`helperText\` | \`string\` | ❌ | - | Helper text below select |
| \`error\` | \`string\` | ❌ | - | Error message (overrides helperText) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the select is disabled |

All standard HTML select props are also supported.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Select style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Select size (supports responsive values)"},label:{control:"text",description:"Select label text"},placeholder:{control:"text",description:"Placeholder text when no option is selected"},helperText:{control:"text",description:"Helper text below select"},error:{control:"text",description:"Error message (overrides helperText)"},disabled:{control:"boolean",description:"Whether the select is disabled"}},args:{options:a,placeholder:"Choose option..."}},o={args:{variant:"primary",label:"Corporate Faction",options:a,placeholder:"Select your faction...",helperText:"Choose your corporate allegiance"}},l={args:{variant:"secondary",label:"System Status",options:t,placeholder:"Select status...",helperText:"Current system operational state"}},s={args:{variant:"danger",label:"Security Level",options:y,placeholder:"Select clearance...",helperText:"High-security authorization required"}},n={args:{variant:"ghost",label:"Ghost Protocol",options:t,placeholder:"Select protocol...",helperText:"Stealth mode configuration"}},i={args:{variant:"primary",size:"sm",label:"Small Select",options:a,placeholder:"Select..."}},c={args:{variant:"primary",size:"md",label:"Medium Select",options:a,placeholder:"Select..."}},p={args:{variant:"primary",size:"lg",label:"Large Select",options:a,placeholder:"Select..."}},d={args:{variant:"primary",label:"Corporate Access",options:a,error:"Faction selection required for neural link access",placeholder:"Select faction..."}},m={args:{variant:"primary",label:"System Offline",options:t,placeholder:"Unavailable...",helperText:"Neural interface disconnected",disabled:!0}},h={args:{variant:"primary",options:a,placeholder:"Select faction..."}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Select Variants"}),e.jsx(r,{variant:"primary",label:"Primary Select",options:a,placeholder:"Primary selection...",helperText:"Neural interface ready"}),e.jsx(r,{variant:"secondary",label:"Secondary Select",options:t,placeholder:"Secondary selection...",helperText:"Database connection active"}),e.jsx(r,{variant:"danger",label:"Danger Select",options:y,placeholder:"Critical selection...",helperText:"High-security mode"}),e.jsx(r,{variant:"ghost",label:"Ghost Select",options:t,placeholder:"Minimal selection...",helperText:"Stealth mode active"})]})},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Select Sizes"}),e.jsx(r,{variant:"primary",size:"sm",label:"Small Select",options:a,placeholder:"Small selection..."}),e.jsx(r,{variant:"primary",size:"md",label:"Medium Select",options:a,placeholder:"Medium selection..."}),e.jsx(r,{variant:"primary",size:"lg",label:"Large Select",options:a,placeholder:"Large selection..."})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Select States"}),e.jsx(r,{variant:"primary",label:"Normal State",options:a,placeholder:"Select option...",helperText:"Ready for selection"}),e.jsx(r,{variant:"primary",label:"Error State",options:a,error:"Selection failed - authorization required",placeholder:"Select faction..."}),e.jsx(r,{variant:"primary",label:"Disabled State",options:t,placeholder:"System offline...",helperText:"Neural interface disconnected",disabled:!0})]})},g={render:()=>e.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[400px]",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2",children:"Corporate Access Terminal"}),e.jsx(r,{variant:"primary",label:"Corporate Faction",options:a,placeholder:"Select your faction...",helperText:"Neural link authorization required"}),e.jsx(r,{variant:"secondary",label:"Security Clearance",options:y,placeholder:"Select clearance level...",helperText:"Biometric verification pending"}),e.jsx(r,{variant:"danger",label:"System Access",options:t,placeholder:"Select access mode...",helperText:"High-security protocol active"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Corporate Faction",
    options: corporationOptions,
    placeholder: "Select your faction...",
    helperText: "Choose your corporate allegiance"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "System Status",
    options: statusOptions,
    placeholder: "Select status...",
    helperText: "Current system operational state"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    label: "Security Level",
    options: securityLevelOptions,
    placeholder: "Select clearance...",
    helperText: "High-security authorization required"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    label: "Ghost Protocol",
    options: statusOptions,
    placeholder: "Select protocol...",
    helperText: "Stealth mode configuration"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Select",
    options: corporationOptions,
    placeholder: "Select..."
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Select",
    options: corporationOptions,
    placeholder: "Select..."
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Select",
    options: corporationOptions,
    placeholder: "Select..."
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Corporate Access",
    options: corporationOptions,
    error: "Faction selection required for neural link access",
    placeholder: "Select faction..."
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "System Offline",
    options: statusOptions,
    placeholder: "Unavailable...",
    helperText: "Neural interface disconnected",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    options: corporationOptions,
    placeholder: "Select faction..."
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select Variants</h4>

      <Select variant="primary" label="Primary Select" options={corporationOptions} placeholder="Primary selection..." helperText="Neural interface ready" />

      <Select variant="secondary" label="Secondary Select" options={statusOptions} placeholder="Secondary selection..." helperText="Database connection active" />

      <Select variant="danger" label="Danger Select" options={securityLevelOptions} placeholder="Critical selection..." helperText="High-security mode" />

      <Select variant="ghost" label="Ghost Select" options={statusOptions} placeholder="Minimal selection..." helperText="Stealth mode active" />
    </div>
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select Sizes</h4>

      <Select variant="primary" size="sm" label="Small Select" options={corporationOptions} placeholder="Small selection..." />

      <Select variant="primary" size="md" label="Medium Select" options={corporationOptions} placeholder="Medium selection..." />

      <Select variant="primary" size="lg" label="Large Select" options={corporationOptions} placeholder="Large selection..." />
    </div>
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select States</h4>

      <Select variant="primary" label="Normal State" options={corporationOptions} placeholder="Select option..." helperText="Ready for selection" />

      <Select variant="primary" label="Error State" options={corporationOptions} error="Selection failed - authorization required" placeholder="Select faction..." />

      <Select variant="primary" label="Disabled State" options={statusOptions} placeholder="System offline..." helperText="Neural interface disconnected" disabled />
    </div>
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[400px]">
      <h3 className="text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2">
        Corporate Access Terminal
      </h3>

      <Select variant="primary" label="Corporate Faction" options={corporationOptions} placeholder="Select your faction..." helperText="Neural link authorization required" />

      <Select variant="secondary" label="Security Clearance" options={securityLevelOptions} placeholder="Select clearance level..." helperText="Biometric verification pending" />

      <Select variant="danger" label="System Access" options={statusOptions} placeholder="Select access mode..." helperText="High-security protocol active" />
    </div>
}`,...g.parameters?.docs?.source}}};const A=["Primary","Secondary","Danger","Ghost","Small","Medium","Large","WithError","Disabled","WithoutLabel","AllVariants","AllSizes","AllStates","CorporateDemo"];export{S as AllSizes,b as AllStates,u as AllVariants,g as CorporateDemo,s as Danger,m as Disabled,n as Ghost,p as Large,c as Medium,o as Primary,l as Secondary,i as Small,d as WithError,h as WithoutLabel,A as __namedExportsOrder,j as default};
