import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-B52jae2o.js";import{g as D}from"./responsive-ChLhblTX.js";import"./preload-helper-PPVm8Dsz.js";const a=({label:l,size:f="md",variant:k="primary",className:T="",checked:x=!1,onChange:t,disabled:r=!1,id:S,...N})=>{const z=s=>{t&&t(s.target.checked)},C=s=>D(s,{sm:"w-10 h-5 after:h-4 after:w-4",md:"w-14 h-7 after:h-6 after:w-6",lg:"w-16 h-8 after:h-7 after:w-7"}),M=(s,w)=>{if(w)return"bg-gray-600 peer-checked:bg-gray-500 opacity-50 cursor-not-allowed";const j={primary:"bg-gray-600 peer-checked:bg-linear-(--gradient-accent) peer-focus:ring-primary",secondary:"bg-gray-600 peer-checked:bg-secondary peer-focus:ring-secondary",accent:"bg-gray-600 peer-checked:bg-accent peer-focus:ring-accent"};return j[s]||j.primary},L=["relative inline-flex items-center cursor-pointer",r?"cursor-not-allowed opacity-50":"cursor-pointer"].join(" "),A=[C(f),M(k,r),"peer-focus:outline-none rounded-full peer","peer-checked:after:translate-x-full peer-checked:after:border-white","after:content-[''] after:absolute after:top-[2px] after:left-[2px]","after:bg-white after:rounded-full after:transition-all","transition-colors duration-300"].filter(Boolean).join(" "),q=["flex items-center justify-between",l?"space-x-3":"",T].filter(Boolean).join(" ");return e.jsxs("div",{className:q,children:[l&&e.jsx("label",{htmlFor:S,className:`text-default font-medium ${r?"text-muted opacity-50":"cursor-pointer"}`,children:l}),e.jsxs("label",{className:L,children:[e.jsx("input",{type:"checkbox",className:"sr-only peer",checked:x,onChange:z,disabled:r,id:S,...N}),e.jsx("div",{className:A})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the toggle.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:`Visual style variant.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const R={title:"Components/Toggle",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed toggle switch component with smooth animations and neon styling.

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
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent"],description:"Toggle style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Toggle size (supports responsive values)"},label:{control:"text",description:"Toggle label text"},checked:{control:"boolean",description:"Whether the toggle is checked"},disabled:{control:"boolean",description:"Whether the toggle is disabled"}},args:{label:"Enable feature"}},o={args:{variant:"primary",label:"Neural Interface Active",checked:!0}},c={args:{variant:"secondary",label:"Database Connection",checked:!0}},i={args:{variant:"accent",label:"Ghost Mode Protocol",checked:!0}},d={args:{variant:"primary",size:"sm",label:"Small Toggle",checked:!0}},m={args:{variant:"primary",size:"md",label:"Medium Toggle",checked:!0}},g={args:{variant:"primary",size:"lg",label:"Large Toggle",checked:!0}},u={args:{label:void 0,variant:"primary",checked:!0}},p={args:{variant:"primary",label:"System Locked",checked:!0,disabled:!0}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Toggle Variants"}),e.jsx(a,{variant:"primary",label:"Primary Toggle",checked:!0}),e.jsx(a,{variant:"secondary",label:"Secondary Toggle",checked:!0}),e.jsx(a,{variant:"accent",label:"Accent Toggle",checked:!0})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Toggle Sizes"}),e.jsx(a,{variant:"primary",size:"sm",label:"Small Toggle",checked:!0}),e.jsx(a,{variant:"primary",size:"md",label:"Medium Toggle",checked:!0}),e.jsx(a,{variant:"primary",size:"lg",label:"Large Toggle",checked:!0})]})},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Toggle States"}),e.jsx(a,{variant:"primary",label:"Normal State",checked:!1}),e.jsx(a,{variant:"primary",label:"Checked State",checked:!0}),e.jsx(a,{variant:"primary",label:"Disabled Unchecked",checked:!1,disabled:!0}),e.jsx(a,{variant:"primary",label:"Disabled Checked",checked:!0,disabled:!0})]})},v={render:()=>{const[l,f]=n.useState(!1),[k,T]=n.useState(!0),[x,t]=n.useState(!1),[r]=n.useState(!0);return e.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-6 space-y-4 min-w-[320px]",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2",children:"System Configuration"}),e.jsx(a,{label:"Ghost Mode",variant:"primary",checked:l,onChange:f}),e.jsx(a,{label:"Hacking Tools",variant:"accent",checked:k,onChange:T}),e.jsx(a,{label:"Neural Link",variant:"secondary",checked:x,onChange:t}),e.jsx(a,{label:"Firewall Protection",variant:"primary",checked:r,disabled:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Neural Interface Active",
    checked: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Database Connection",
    checked: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "accent",
    label: "Ghost Mode Protocol",
    checked: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Toggle",
    checked: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Toggle",
    checked: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Toggle",
    checked: true
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    variant: "primary",
    checked: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "System Locked",
    checked: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle Variants</h4>

      <Toggle variant="primary" label="Primary Toggle" checked={true} />

      <Toggle variant="secondary" label="Secondary Toggle" checked={true} />

      <Toggle variant="accent" label="Accent Toggle" checked={true} />
    </div>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle Sizes</h4>

      <Toggle variant="primary" size="sm" label="Small Toggle" checked={true} />

      <Toggle variant="primary" size="md" label="Medium Toggle" checked={true} />

      <Toggle variant="primary" size="lg" label="Large Toggle" checked={true} />
    </div>
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Toggle States</h4>

      <Toggle variant="primary" label="Normal State" checked={false} />

      <Toggle variant="primary" label="Checked State" checked={true} />

      <Toggle variant="primary" label="Disabled Unchecked" checked={false} disabled />

      <Toggle variant="primary" label="Disabled Checked" checked={true} disabled />
    </div>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const H=["Primary","Secondary","Accent","Small","Medium","Large","WithoutLabel","Disabled","AllVariants","AllSizes","AllStates","SystemDemo"];export{i as Accent,h as AllSizes,y as AllStates,b as AllVariants,p as Disabled,g as Large,m as Medium,o as Primary,c as Secondary,d as Small,v as SystemDemo,u as WithoutLabel,H as __namedExportsOrder,R as default};
