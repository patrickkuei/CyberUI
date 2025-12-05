import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as M}from"./iframe-B52jae2o.js";import{g as $,R as H}from"./responsive-ChLhblTX.js";import"./preload-helper-PPVm8Dsz.js";const a=({variant:I="primary",size:E="md",label:S,helperText:y,error:t,leftIcon:s,rightIcon:o,className:C="",disabled:x=!1,...w})=>{const V=M.useId(),l=w.id||V,q=["w-full","rounded-lg","bg-surface","text-default","placeholder-muted","transition-all","duration-300","focus:outline-none",x?"cursor-not-allowed opacity-60":"cursor-text"].join(" "),D=r=>$(r,H.input),k=r=>{const n=D(r);return s&&o?`pl-10 pr-10 ${n}`:s?`pl-10 pr-4 ${n}`:o?`pl-4 pr-10 ${n}`:`px-4 ${n}`},z=(r,n,W)=>n?"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base":W?{primary:"border-2 border-accent/20 shadow-none",secondary:"border-2 border-secondary/20 shadow-none",danger:"border-2 border-error/20 shadow-none",ghost:"border border-border-default shadow-none"}[r]:{primary:"border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base",secondary:"border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base",danger:"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base",ghost:"border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base"}[r],_=r=>({primary:"text-accent",secondary:"text-secondary",danger:"text-error",ghost:"text-muted"})[r],A=[q,k(E),z(I,!!t,x),C].filter(Boolean).join(" "),T=_(I),P=t?`${l}-error`:y?`${l}-help`:void 0;return e.jsxs("div",{className:"space-y-2",children:[S&&e.jsx("label",{htmlFor:l,className:"block text-sm font-medium text-default",children:S}),e.jsxs("div",{className:"relative",children:[s&&e.jsx("div",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${T}`,children:s}),e.jsx("input",{className:A,disabled:x,id:l,"aria-invalid":!!t,"aria-describedby":P,...w}),o&&e.jsx("div",{className:`absolute inset-y-0 right-0 flex items-center pr-3 ${T}`,children:o})]}),(y||t)&&e.jsx("div",{id:t?`${l}-error`:`${l}-help`,className:`text-xs font-mono ${t?"text-error":"text-muted"}`,children:t||y})]})};a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"}]},description:`Visual style of the input.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the input (height and padding).
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const N=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),j=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),R=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),F={title:"Components/Input",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed input component with multiple variants, icon support, and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Input style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size (supports responsive values)"},label:{control:"text",description:"Input label text"},helperText:{control:"text",description:"Helper text below input"},error:{control:"text",description:"Error message (overrides helperText)"},placeholder:{control:"text",description:"Input placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"}},args:{placeholder:"Enter text..."}},i={args:{variant:"primary",label:"Neural Interface Command",placeholder:"Enter command...",helperText:"Awaiting neural input..."}},c={args:{variant:"secondary",label:"Database Query",placeholder:"Search database...",helperText:"Search through encrypted corporate files"}},d={args:{variant:"danger",label:"Critical Access Code",placeholder:"Enter security code...",helperText:"High-security authentication required"}},p={args:{variant:"ghost",label:"Ghost Protocol",placeholder:"Enter stealth command...",helperText:"Minimal trace mode active"}},u={args:{variant:"secondary",label:"Search Database",placeholder:"Search files...",leftIcon:e.jsx(N,{}),helperText:"Search through encrypted files"}},m={args:{variant:"primary",label:"User Authentication",placeholder:"Enter username...",rightIcon:e.jsx(j,{}),helperText:"Neural identity verification"}},h={args:{variant:"danger",label:"Secure Access",placeholder:"Enter credentials...",leftIcon:e.jsx(R,{}),rightIcon:e.jsx(j,{}),helperText:"Dual-factor authentication"}},g={args:{variant:"primary",label:"Neural Link Password",placeholder:"Enter password...",error:"Invalid credentials - access denied",defaultValue:"invalid_password"}},v={args:{variant:"primary",label:"System Offline",placeholder:"Unavailable...",helperText:"Neural interface disconnected",disabled:!0,defaultValue:"connection_lost"}},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Input Variants"}),e.jsx(a,{variant:"primary",label:"Primary Input",placeholder:"Primary input...",helperText:"Neural interface ready"}),e.jsx(a,{variant:"secondary",label:"Secondary Input",placeholder:"Secondary input...",helperText:"Database connection active",leftIcon:e.jsx(N,{})}),e.jsx(a,{variant:"danger",label:"Danger Input",placeholder:"Critical input...",helperText:"High-security mode",leftIcon:e.jsx(R,{})}),e.jsx(a,{variant:"ghost",label:"Ghost Input",placeholder:"Minimal input...",helperText:"Stealth mode active"})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Input States"}),e.jsx(a,{variant:"primary",label:"Normal State",placeholder:"Enter text...",helperText:"Ready for input"}),e.jsx(a,{variant:"primary",label:"With Value",defaultValue:"neural_link_active",helperText:"Connection established"}),e.jsx(a,{variant:"primary",label:"Error State",placeholder:"Enter text...",error:"Connection failed - retry authentication",defaultValue:"invalid_input"}),e.jsx(a,{variant:"primary",label:"Disabled State",placeholder:"System offline...",helperText:"Neural interface disconnected",disabled:!0,defaultValue:"system_locked"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Neural Interface Command',
    placeholder: 'Enter command...',
    helperText: 'Awaiting neural input...'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Database Query',
    placeholder: 'Search database...',
    helperText: 'Search through encrypted corporate files'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Critical Access Code',
    placeholder: 'Enter security code...',
    helperText: 'High-security authentication required'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    label: 'Ghost Protocol',
    placeholder: 'Enter stealth command...',
    helperText: 'Minimal trace mode active'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Search Database',
    placeholder: 'Search files...',
    leftIcon: <SearchIcon />,
    helperText: 'Search through encrypted files'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'User Authentication',
    placeholder: 'Enter username...',
    rightIcon: <UserIcon />,
    helperText: 'Neural identity verification'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Secure Access',
    placeholder: 'Enter credentials...',
    leftIcon: <LockIcon />,
    rightIcon: <UserIcon />,
    helperText: 'Dual-factor authentication'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Neural Link Password',
    placeholder: 'Enter password...',
    error: 'Invalid credentials - access denied',
    defaultValue: 'invalid_password'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'System Offline',
    placeholder: 'Unavailable...',
    helperText: 'Neural interface disconnected',
    disabled: true,
    defaultValue: 'connection_lost'
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input Variants</h4>

      <Input variant="primary" label="Primary Input" placeholder="Primary input..." helperText="Neural interface ready" />

      <Input variant="secondary" label="Secondary Input" placeholder="Secondary input..." helperText="Database connection active" leftIcon={<SearchIcon />} />

      <Input variant="danger" label="Danger Input" placeholder="Critical input..." helperText="High-security mode" leftIcon={<LockIcon />} />

      <Input variant="ghost" label="Ghost Input" placeholder="Minimal input..." helperText="Stealth mode active" />
    </div>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Input States</h4>

      <Input variant="primary" label="Normal State" placeholder="Enter text..." helperText="Ready for input" />

      <Input variant="primary" label="With Value" defaultValue="neural_link_active" helperText="Connection established" />

      <Input variant="primary" label="Error State" placeholder="Enter text..." error="Connection failed - retry authentication" defaultValue="invalid_input" />

      <Input variant="primary" label="Disabled State" placeholder="System offline..." helperText="Neural interface disconnected" disabled defaultValue="system_locked" />
    </div>
}`,...b.parameters?.docs?.source}}};const Z=["Primary","Secondary","Danger","Ghost","WithLeftIcon","WithRightIcon","WithBothIcons","WithError","Disabled","AllVariants","AllStates"];export{b as AllStates,f as AllVariants,d as Danger,v as Disabled,p as Ghost,i as Primary,c as Secondary,h as WithBothIcons,g as WithError,u as WithLeftIcon,m as WithRightIcon,Z as __namedExportsOrder,F as default};
