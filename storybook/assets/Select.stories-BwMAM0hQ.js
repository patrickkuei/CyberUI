import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as W}from"./iframe-qIXMJ8Q3.js";import{g as B,R as U}from"./responsive-hlslnJmS.js";import{C as Z}from"./index-Dm1LNrgC.js";import"./preload-helper-PPVm8Dsz.js";const a=({label:s,size:z="md",variant:C="primary",options:q,placeholder:N,helperText:j,error:l,className:A="",disabled:n=!1,id:L,name:P,...R})=>{const D=W.useId(),T=L||D,M=P||T,E=t=>B(t,U.input),k=(t,I,_)=>{if(I)return"bg-base border-2 border-border-default/30 text-muted/50 cursor-not-allowed opacity-50";if(_)return"bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error";const w={primary:"bg-surface border-2 border-border-default text-default focus:ring-2 focus:ring-primary focus:border-primary shadow-primary",secondary:"bg-surface border-2 border-secondary text-default focus:ring-2 focus:ring-secondary focus:border-secondary shadow-secondary/30",danger:"bg-surface border-2 border-error text-default focus:ring-2 focus:ring-error focus:border-error shadow-error/30",ghost:"bg-base border-2 border-accent/20 text-default focus:ring-2 focus:ring-accent focus:border-accent shadow-secondary"};return w[t]||w.primary},V=["appearance-none w-full rounded-lg font-mono transition-all duration-300","focus:outline-none px-4 pr-10",E(z),k(C,n,!!l),A].filter(Boolean).join(" "),H="relative w-full",F=["block text-sm font-medium mb-2 transition-colors duration-200",n?"text-muted opacity-50":l?"text-error":"text-default"].join(" "),G=["mt-2 text-xs transition-colors duration-200",l?"text-error":"text-muted"].join(" ");return e.jsxs("div",{className:"w-full",children:[s&&e.jsx("label",{htmlFor:T,className:F,children:s}),e.jsxs("div",{className:H,children:[e.jsxs("select",{className:V,disabled:n,id:T,name:M,...R,children:[N&&e.jsx("option",{value:"",disabled:!0,children:N}),q.map(t=>e.jsx("option",{value:t.value,disabled:t.disabled,className:"bg-surface text-default",children:t.label},t.value))]}),e.jsx("div",{className:`pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ${n?"text-muted/50":l?"text-error":"text-accent"}`,children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(j||l)&&e.jsx("div",{className:G,children:l||j})]})};a.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"sm",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"md",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"lg",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"2xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}}]}}]},description:`Size of the select input.
@default 'md'`,defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"ghost"'}]},description:`Visual style variant.
@default 'primary'`,defaultValue:{value:'"primary"',computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const r=Z.map(s=>({value:s.toLowerCase().replace(/\s+/g,"_"),label:s})),o=[{value:"online",label:"Online"},{value:"offline",label:"Offline"},{value:"maintenance",label:"Under Maintenance"},{value:"critical",label:"Critical Error"}],O=[{value:"guest",label:"Guest Access"},{value:"operator",label:"Operator Level"},{value:"admin",label:"Administrator"},{value:"root",label:"Root Access",disabled:!0}],Y={title:"Components/Select",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed select dropdown component with multiple variants and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Select style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Select size (supports responsive values)"},label:{control:"text",description:"Select label text"},placeholder:{control:"text",description:"Placeholder text when no option is selected"},helperText:{control:"text",description:"Helper text below select"},error:{control:"text",description:"Error message (overrides helperText)"},disabled:{control:"boolean",description:"Whether the select is disabled"}},args:{options:r,placeholder:"Choose option..."}},i={args:{variant:"primary",label:"Corporate Faction",options:r,placeholder:"Select your faction...",helperText:"Choose your corporate allegiance"}},c={args:{variant:"secondary",label:"System Status",options:o,placeholder:"Select status...",helperText:"Current system operational state"}},p={args:{variant:"danger",label:"Security Level",options:O,placeholder:"Select clearance...",helperText:"High-security authorization required"}},d={args:{variant:"ghost",label:"Ghost Protocol",options:o,placeholder:"Select protocol...",helperText:"Stealth mode configuration"}},m={args:{variant:"primary",size:"sm",label:"Small Select",options:r,placeholder:"Select..."}},u={args:{variant:"primary",size:"md",label:"Medium Select",options:r,placeholder:"Select..."}},h={args:{variant:"primary",size:"lg",label:"Large Select",options:r,placeholder:"Select..."}},g={args:{variant:"primary",label:"Corporate Access",options:r,error:"Faction selection required for neural link access",placeholder:"Select faction..."}},b={args:{variant:"primary",label:"System Offline",options:o,placeholder:"Unavailable...",helperText:"Neural interface disconnected",disabled:!0}},v={args:{variant:"primary",options:r,placeholder:"Select faction..."}},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Select Variants"}),e.jsx(a,{variant:"primary",label:"Primary Select",options:r,placeholder:"Primary selection...",helperText:"Neural interface ready"}),e.jsx(a,{variant:"secondary",label:"Secondary Select",options:o,placeholder:"Secondary selection...",helperText:"Database connection active"}),e.jsx(a,{variant:"danger",label:"Danger Select",options:O,placeholder:"Critical selection...",helperText:"High-security mode"}),e.jsx(a,{variant:"ghost",label:"Ghost Select",options:o,placeholder:"Minimal selection...",helperText:"Stealth mode active"})]})},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Select Sizes"}),e.jsx(a,{variant:"primary",size:"sm",label:"Small Select",options:r,placeholder:"Small selection..."}),e.jsx(a,{variant:"primary",size:"md",label:"Medium Select",options:r,placeholder:"Medium selection..."}),e.jsx(a,{variant:"primary",size:"lg",label:"Large Select",options:r,placeholder:"Large selection..."})]})},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Select States"}),e.jsx(a,{variant:"primary",label:"Normal State",options:r,placeholder:"Select option...",helperText:"Ready for selection"}),e.jsx(a,{variant:"primary",label:"Error State",options:r,error:"Selection failed - authorization required",placeholder:"Select faction..."}),e.jsx(a,{variant:"primary",label:"Disabled State",options:o,placeholder:"System offline...",helperText:"Neural interface disconnected",disabled:!0})]})},x={render:()=>e.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[400px]",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2",children:"Corporate Access Terminal"}),e.jsx(a,{variant:"primary",label:"Corporate Faction",options:r,placeholder:"Select your faction...",helperText:"Neural link authorization required"}),e.jsx(a,{variant:"secondary",label:"Security Clearance",options:O,placeholder:"Select clearance level...",helperText:"Biometric verification pending"}),e.jsx(a,{variant:"danger",label:"System Access",options:o,placeholder:"Select access mode...",helperText:"High-security protocol active"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Corporate Faction",
    options: corporationOptions,
    placeholder: "Select your faction...",
    helperText: "Choose your corporate allegiance"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "System Status",
    options: statusOptions,
    placeholder: "Select status...",
    helperText: "Current system operational state"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    label: "Security Level",
    options: securityLevelOptions,
    placeholder: "Select clearance...",
    helperText: "High-security authorization required"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    label: "Ghost Protocol",
    options: statusOptions,
    placeholder: "Select protocol...",
    helperText: "Stealth mode configuration"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Select",
    options: corporationOptions,
    placeholder: "Select..."
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Select",
    options: corporationOptions,
    placeholder: "Select..."
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Select",
    options: corporationOptions,
    placeholder: "Select..."
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Corporate Access",
    options: corporationOptions,
    error: "Faction selection required for neural link access",
    placeholder: "Select faction..."
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "System Offline",
    options: statusOptions,
    placeholder: "Unavailable...",
    helperText: "Neural interface disconnected",
    disabled: true
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    options: corporationOptions,
    placeholder: "Select faction..."
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select Variants</h4>

      <Select variant="primary" label="Primary Select" options={corporationOptions} placeholder="Primary selection..." helperText="Neural interface ready" />

      <Select variant="secondary" label="Secondary Select" options={statusOptions} placeholder="Secondary selection..." helperText="Database connection active" />

      <Select variant="danger" label="Danger Select" options={securityLevelOptions} placeholder="Critical selection..." helperText="High-security mode" />

      <Select variant="ghost" label="Ghost Select" options={statusOptions} placeholder="Minimal selection..." helperText="Stealth mode active" />
    </div>
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select Sizes</h4>

      <Select variant="primary" size="sm" label="Small Select" options={corporationOptions} placeholder="Small selection..." />

      <Select variant="primary" size="md" label="Medium Select" options={corporationOptions} placeholder="Medium selection..." />

      <Select variant="primary" size="lg" label="Large Select" options={corporationOptions} placeholder="Large selection..." />
    </div>
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Select States</h4>

      <Select variant="primary" label="Normal State" options={corporationOptions} placeholder="Select option..." helperText="Ready for selection" />

      <Select variant="primary" label="Error State" options={corporationOptions} error="Selection failed - authorization required" placeholder="Select faction..." />

      <Select variant="primary" label="Disabled State" options={statusOptions} placeholder="System offline..." helperText="Neural interface disconnected" disabled />
    </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[400px]">
      <h3 className="text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2">
        Corporate Access Terminal
      </h3>

      <Select variant="primary" label="Corporate Faction" options={corporationOptions} placeholder="Select your faction..." helperText="Neural link authorization required" />

      <Select variant="secondary" label="Security Clearance" options={securityLevelOptions} placeholder="Select clearance level..." helperText="Biometric verification pending" />

      <Select variant="danger" label="System Access" options={statusOptions} placeholder="Select access mode..." helperText="High-security protocol active" />
    </div>
}`,...x.parameters?.docs?.source}}};const ee=["Primary","Secondary","Danger","Ghost","Small","Medium","Large","WithError","Disabled","WithoutLabel","AllVariants","AllSizes","AllStates","CorporateDemo"];export{y as AllSizes,f as AllStates,S as AllVariants,x as CorporateDemo,p as Danger,b as Disabled,d as Ghost,h as Large,u as Medium,i as Primary,c as Secondary,m as Small,g as WithError,v as WithoutLabel,ee as __namedExportsOrder,Y as default};
