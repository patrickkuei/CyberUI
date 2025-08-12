import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./Input-BDDUl2YL.js";import"./iframe-Bb7R-1FN.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-CMR7KYFx.js";const h=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),m=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),v=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),f={title:"Components/Input",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed input component with multiple variants, icon support, and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Input } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

<Input
  variant="primary"
  label="Neural Interface Command"
  placeholder="Enter command..."
  helperText="Awaiting neural input..."
/>

<Input
  variant="secondary"
  label="Database Query"
  placeholder="Search database..."
  leftIcon={<SearchIcon />}
/>

<Input variant="primary" />
<Input variant="secondary" />
<Input variant="danger" />
<Input variant="ghost" />

<Input variant="primary" size="sm" placeholder="Small input" />
<Input variant="primary" size="lg" placeholder="Large input" />

<Input variant="primary" size={{ base: 'sm', lg: 'lg' }} placeholder="Responsive input" />
<Input variant="primary" size={{ base: 'md', md: 'sm', xl: 'lg' }} placeholder="Multi-breakpoint" />

<Input
  variant="primary"
  label="Username"
  error="Username is required"
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Input style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Input size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Input label text |
| \`helperText\` | \`string\` | ❌ | - | Helper text below input |
| \`error\` | \`string\` | ❌ | - | Error message (overrides helperText) |
| \`leftIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the left side |
| \`rightIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the right side |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the input is disabled |

All standard HTML input props are also supported.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Input style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size (supports responsive values)"},label:{control:"text",description:"Input label text"},helperText:{control:"text",description:"Helper text below input"},error:{control:"text",description:"Error message (overrides helperText)"},placeholder:{control:"text",description:"Input placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"}},args:{placeholder:"Enter text..."}},r={args:{variant:"primary",label:"Neural Interface Command",placeholder:"Enter command...",helperText:"Awaiting neural input..."}},t={args:{variant:"secondary",label:"Database Query",placeholder:"Search database...",helperText:"Search through encrypted corporate files"}},n={args:{variant:"danger",label:"Critical Access Code",placeholder:"Enter security code...",helperText:"High-security authentication required"}},l={args:{variant:"ghost",label:"Ghost Protocol",placeholder:"Enter stealth command...",helperText:"Minimal trace mode active"}},o={args:{variant:"secondary",label:"Search Database",placeholder:"Search files...",leftIcon:e.jsx(h,{}),helperText:"Search through encrypted files"}},s={args:{variant:"primary",label:"User Authentication",placeholder:"Enter username...",rightIcon:e.jsx(m,{}),helperText:"Neural identity verification"}},i={args:{variant:"danger",label:"Secure Access",placeholder:"Enter credentials...",leftIcon:e.jsx(v,{}),rightIcon:e.jsx(m,{}),helperText:"Dual-factor authentication"}},c={args:{variant:"primary",label:"Neural Link Password",placeholder:"Enter password...",error:"Invalid credentials - access denied",defaultValue:"invalid_password"}},p={args:{variant:"primary",label:"System Offline",placeholder:"Unavailable...",helperText:"Neural interface disconnected",disabled:!0,defaultValue:"connection_lost"}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Input Variants"}),e.jsx(a,{variant:"primary",label:"Primary Input",placeholder:"Primary input...",helperText:"Neural interface ready"}),e.jsx(a,{variant:"secondary",label:"Secondary Input",placeholder:"Secondary input...",helperText:"Database connection active",leftIcon:e.jsx(h,{})}),e.jsx(a,{variant:"danger",label:"Danger Input",placeholder:"Critical input...",helperText:"High-security mode",leftIcon:e.jsx(v,{})}),e.jsx(a,{variant:"ghost",label:"Ghost Input",placeholder:"Minimal input...",helperText:"Stealth mode active"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Input States"}),e.jsx(a,{variant:"primary",label:"Normal State",placeholder:"Enter text...",helperText:"Ready for input"}),e.jsx(a,{variant:"primary",label:"With Value",defaultValue:"neural_link_active",helperText:"Connection established"}),e.jsx(a,{variant:"primary",label:"Error State",placeholder:"Enter text...",error:"Connection failed - retry authentication",defaultValue:"invalid_input"}),e.jsx(a,{variant:"primary",label:"Disabled State",placeholder:"System offline...",helperText:"Neural interface disconnected",disabled:!0,defaultValue:"system_locked"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Neural Interface Command',
    placeholder: 'Enter command...',
    helperText: 'Awaiting neural input...'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Database Query',
    placeholder: 'Search database...',
    helperText: 'Search through encrypted corporate files'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Critical Access Code',
    placeholder: 'Enter security code...',
    helperText: 'High-security authentication required'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    label: 'Ghost Protocol',
    placeholder: 'Enter stealth command...',
    helperText: 'Minimal trace mode active'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Search Database',
    placeholder: 'Search files...',
    leftIcon: <SearchIcon />,
    helperText: 'Search through encrypted files'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'User Authentication',
    placeholder: 'Enter username...',
    rightIcon: <UserIcon />,
    helperText: 'Neural identity verification'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Secure Access',
    placeholder: 'Enter credentials...',
    leftIcon: <LockIcon />,
    rightIcon: <UserIcon />,
    helperText: 'Dual-factor authentication'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Neural Link Password',
    placeholder: 'Enter password...',
    error: 'Invalid credentials - access denied',
    defaultValue: 'invalid_password'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'System Offline',
    placeholder: 'Unavailable...',
    helperText: 'Neural interface disconnected',
    disabled: true,
    defaultValue: 'connection_lost'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input Variants</h4>

      <Input variant="primary" label="Primary Input" placeholder="Primary input..." helperText="Neural interface ready" />

      <Input variant="secondary" label="Secondary Input" placeholder="Secondary input..." helperText="Database connection active" leftIcon={<SearchIcon />} />

      <Input variant="danger" label="Danger Input" placeholder="Critical input..." helperText="High-security mode" leftIcon={<LockIcon />} />

      <Input variant="ghost" label="Ghost Input" placeholder="Minimal input..." helperText="Stealth mode active" />
    </div>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input States</h4>

      <Input variant="primary" label="Normal State" placeholder="Enter text..." helperText="Ready for input" />

      <Input variant="primary" label="With Value" defaultValue="neural_link_active" helperText="Connection established" />

      <Input variant="primary" label="Error State" placeholder="Enter text..." error="Connection failed - retry authentication" defaultValue="invalid_input" />

      <Input variant="primary" label="Disabled State" placeholder="System offline..." helperText="Neural interface disconnected" disabled defaultValue="system_locked" />
    </div>
}`,...u.parameters?.docs?.source}}};const S=["Primary","Secondary","Danger","Ghost","WithLeftIcon","WithRightIcon","WithBothIcons","WithError","Disabled","AllVariants","AllStates"];export{u as AllStates,d as AllVariants,n as Danger,p as Disabled,l as Ghost,r as Primary,t as Secondary,i as WithBothIcons,c as WithError,o as WithLeftIcon,s as WithRightIcon,S as __namedExportsOrder,f as default};
