import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dhwu3wqV.js";import"./preload-helper-D9Z9MdNV.js";const r=({variant:y="primary",label:v,helperText:x,error:a,leftIcon:t,rightIcon:n,className:j="",disabled:b=!1,...E})=>{const C=["w-full","rounded-lg","bg-surface","text-default","placeholder-muted","transition-all","duration-300","focus:outline-none",b?"cursor-not-allowed opacity-60":"cursor-text"].join(" "),R=()=>t&&n?"py-3 pl-10 pr-10":t?"py-3 pl-10 pr-4":n?"py-3 pl-4 pr-10":"py-3 px-4",V=(o,S,_)=>S?"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base":_?{primary:"border-2 border-accent/20 shadow-none",secondary:"border-2 border-secondary/20 shadow-none",danger:"border-2 border-error/20 shadow-none",ghost:"border border-border-default shadow-none"}[o]:{primary:"border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base",secondary:"border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base",danger:"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base",ghost:"border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base"}[o],D=o=>({primary:"text-accent",secondary:"text-secondary",danger:"text-error",ghost:"text-muted"})[o],A=[C,R(),V(y,!!a,b),j].filter(Boolean).join(" "),I=D(y);return e.jsxs("div",{className:"space-y-2",children:[v&&e.jsx("label",{className:"block text-sm font-medium text-default",children:v}),e.jsxs("div",{className:"relative",children:[t&&e.jsx("div",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${I}`,children:t}),e.jsx("input",{className:A,disabled:b,...E}),n&&e.jsx("div",{className:`absolute inset-y-0 right-0 flex items-center pr-3 ${I}`,children:n})]}),(x||a)&&e.jsx("div",{className:`text-xs font-mono ${a?"text-error":"text-muted"}`,children:a||x})]})};r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const w=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),T=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),N=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),U={title:"Components/Input",component:r,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed input component with multiple variants, icon support, and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Input } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<Input
  variant="primary"
  label="Neural Interface Command"
  placeholder="Enter command..."
  helperText="Awaiting neural input..."
/>

// With search icon
<Input
  variant="secondary"
  label="Database Query"
  placeholder="Search database..."
  leftIcon={<SearchIcon />}
/>

// Different variants
<Input variant="primary" />    // accent colors
<Input variant="secondary" />  // secondary colors
<Input variant="danger" />     // error colors
<Input variant="ghost" />      // minimal styling

// With validation
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
| \`label\` | \`string\` | ❌ | - | Input label text |
| \`helperText\` | \`string\` | ❌ | - | Helper text below input |
| \`error\` | \`string\` | ❌ | - | Error message (overrides helperText) |
| \`leftIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the left side |
| \`rightIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the right side |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the input is disabled |

All standard HTML input props are also supported.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Input style variant"},label:{control:"text",description:"Input label text"},helperText:{control:"text",description:"Helper text below input"},error:{control:"text",description:"Error message (overrides helperText)"},placeholder:{control:"text",description:"Input placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"}},args:{placeholder:"Enter text..."}},s={args:{variant:"primary",label:"Neural Interface Command",placeholder:"Enter command...",helperText:"Awaiting neural input..."}},l={args:{variant:"secondary",label:"Database Query",placeholder:"Search database...",helperText:"Search through encrypted corporate files"}},c={args:{variant:"danger",label:"Critical Access Code",placeholder:"Enter security code...",helperText:"High-security authentication required"}},i={args:{variant:"ghost",label:"Ghost Protocol",placeholder:"Enter stealth command...",helperText:"Minimal trace mode active"}},d={args:{variant:"secondary",label:"Search Database",placeholder:"Search files...",leftIcon:e.jsx(w,{}),helperText:"Search through encrypted files"}},p={args:{variant:"primary",label:"User Authentication",placeholder:"Enter username...",rightIcon:e.jsx(T,{}),helperText:"Neural identity verification"}},u={args:{variant:"danger",label:"Secure Access",placeholder:"Enter credentials...",leftIcon:e.jsx(N,{}),rightIcon:e.jsx(T,{}),helperText:"Dual-factor authentication"}},h={args:{variant:"primary",label:"Neural Link Password",placeholder:"Enter password...",error:"Invalid credentials - access denied",defaultValue:"invalid_password"}},m={args:{variant:"primary",label:"System Offline",placeholder:"Unavailable...",helperText:"Neural interface disconnected",disabled:!0,defaultValue:"connection_lost"}},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Input Variants"}),e.jsx(r,{variant:"primary",label:"Primary Input",placeholder:"Primary input...",helperText:"Neural interface ready"}),e.jsx(r,{variant:"secondary",label:"Secondary Input",placeholder:"Secondary input...",helperText:"Database connection active",leftIcon:e.jsx(w,{})}),e.jsx(r,{variant:"danger",label:"Danger Input",placeholder:"Critical input...",helperText:"High-security mode",leftIcon:e.jsx(N,{})}),e.jsx(r,{variant:"ghost",label:"Ghost Input",placeholder:"Minimal input...",helperText:"Stealth mode active"})]})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Input States"}),e.jsx(r,{variant:"primary",label:"Normal State",placeholder:"Enter text...",helperText:"Ready for input"}),e.jsx(r,{variant:"primary",label:"With Value",defaultValue:"neural_link_active",helperText:"Connection established"}),e.jsx(r,{variant:"primary",label:"Error State",placeholder:"Enter text...",error:"Connection failed - retry authentication",defaultValue:"invalid_input"}),e.jsx(r,{variant:"primary",label:"Disabled State",placeholder:"System offline...",helperText:"Neural interface disconnected",disabled:!0,defaultValue:"system_locked"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Neural Interface Command',
    placeholder: 'Enter command...',
    helperText: 'Awaiting neural input...'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Database Query',
    placeholder: 'Search database...',
    helperText: 'Search through encrypted corporate files'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Critical Access Code',
    placeholder: 'Enter security code...',
    helperText: 'High-security authentication required'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    label: 'Ghost Protocol',
    placeholder: 'Enter stealth command...',
    helperText: 'Minimal trace mode active'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Search Database',
    placeholder: 'Search files...',
    leftIcon: <SearchIcon />,
    helperText: 'Search through encrypted files'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'User Authentication',
    placeholder: 'Enter username...',
    rightIcon: <UserIcon />,
    helperText: 'Neural identity verification'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Secure Access',
    placeholder: 'Enter credentials...',
    leftIcon: <LockIcon />,
    rightIcon: <UserIcon />,
    helperText: 'Dual-factor authentication'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Neural Link Password',
    placeholder: 'Enter password...',
    error: 'Invalid credentials - access denied',
    defaultValue: 'invalid_password'
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'System Offline',
    placeholder: 'Unavailable...',
    helperText: 'Neural interface disconnected',
    disabled: true,
    defaultValue: 'connection_lost'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input Variants</h4>

      <Input variant="primary" label="Primary Input" placeholder="Primary input..." helperText="Neural interface ready" />

      <Input variant="secondary" label="Secondary Input" placeholder="Secondary input..." helperText="Database connection active" leftIcon={<SearchIcon />} />

      <Input variant="danger" label="Danger Input" placeholder="Critical input..." helperText="High-security mode" leftIcon={<LockIcon />} />

      <Input variant="ghost" label="Ghost Input" placeholder="Minimal input..." helperText="Stealth mode active" />
    </div>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input States</h4>

      <Input variant="primary" label="Normal State" placeholder="Enter text..." helperText="Ready for input" />

      <Input variant="primary" label="With Value" defaultValue="neural_link_active" helperText="Connection established" />

      <Input variant="primary" label="Error State" placeholder="Enter text..." error="Connection failed - retry authentication" defaultValue="invalid_input" />

      <Input variant="primary" label="Disabled State" placeholder="System offline..." helperText="Neural interface disconnected" disabled defaultValue="system_locked" />
    </div>
}`,...g.parameters?.docs?.source}}};const M=["Primary","Secondary","Danger","Ghost","WithLeftIcon","WithRightIcon","WithBothIcons","WithError","Disabled","AllVariants","AllStates"];export{g as AllStates,f as AllVariants,c as Danger,m as Disabled,i as Ghost,s as Primary,l as Secondary,u as WithBothIcons,h as WithError,d as WithLeftIcon,p as WithRightIcon,M as __namedExportsOrder,U as default};
