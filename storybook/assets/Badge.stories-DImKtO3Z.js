import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DGTRJ_05.js";import{g as R,R as A}from"./responsive-CG8DOH1x.js";import"./preload-helper-PPVm8Dsz.js";const a=({variant:f="primary",size:y="md",children:x,className:B="",leftIcon:w,rightIcon:N,clickable:S=!1,onClick:h,...k})=>{const j=r=>R(r,A.badge),I=r=>({primary:"text-base bg-primary shadow-lg",secondary:"text-base bg-secondary shadow-lg",accent:"text-base bg-accent shadow-lg",success:"text-base bg-success shadow-lg",error:"text-base bg-error shadow-lg",warning:"text-base bg-warning shadow-lg"})[r],E=(r,b)=>!b&&!h?"transition-shadow":{primary:"hover:shadow-primary transition-shadow cursor-pointer",secondary:"hover:shadow-secondary transition-shadow cursor-pointer",accent:"hover:shadow-lg-accent transition-shadow cursor-pointer",success:"hover:shadow-success transition-shadow cursor-pointer",error:"hover:shadow-error transition-shadow cursor-pointer",warning:"hover:shadow-warning transition-shadow cursor-pointer"}[r];return e.jsxs("span",{className:`inline-flex items-center ${j(y)} rounded-full font-semibold ${I(f)} ${E(f,S||!!h)} ${B}`,onClick:h,...k,children:[w,e.jsx("span",{children:x}),N]})};a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L={title:"Components/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed badge component with multiple variants, icon support, and interactive capabilities.

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
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`string\` | ❌ | \`'primary'\` | Badge color variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Badge size (supports responsive values) |
| \`leftIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the left side |
| \`rightIcon\` | \`React.ReactNode\` | ❌ | - | Icon on the right side |
| \`clickable\` | \`boolean\` | ❌ | \`false\` | Whether the badge is clickable with hover effects |
| \`children\` | \`React.ReactNode\` | ✅ | - | Badge content |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes |
| \`onClick\` | \`() => void\` | ❌ | - | Click handler function |

**Variant options:** \`'primary'\`, \`'secondary'\`, \`'accent'\`, \`'success'\`, \`'error'\`, \`'warning'\`

Additional HTML span attributes can be passed and will be applied to the badge element.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","success","error","warning"],description:"Badge color variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Badge size (supports responsive values)"},clickable:{control:"boolean",description:"Whether the badge is clickable with hover effects"},className:{control:"text",description:"Additional CSS classes"}}},s={args:{variant:"primary",children:"Primary"}},n={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"accent",children:"Accent"}},i={args:{variant:"success",children:"Success"}},c={args:{variant:"error",children:"Error"}},l={args:{variant:"warning",children:"Warning"}},o={name:"Size Variants",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",variant:"primary",children:"Small"}),e.jsx(a,{size:"md",variant:"primary",children:"Medium"}),e.jsx(a,{size:"lg",variant:"primary",children:"Large"})]})},d={args:{variant:"success",children:"Online",leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"})}},m={args:{variant:"accent",children:"Status",rightIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full ml-2"})}},u={args:{variant:"primary",children:"Click Me",clickable:!0,onClick:()=>alert("Badge clicked!")}},g={name:"Security Clearance Example",render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"Access Levels:"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{variant:"primary",clickable:!0,leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"}),onClick:()=>alert("Administrator access requested"),children:"Administrator"}),e.jsx(a,{variant:"secondary",clickable:!0,leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"}),onClick:()=>alert("Operator access requested"),children:"Operator"}),e.jsx(a,{variant:"accent",clickable:!0,leftIcon:e.jsx("span",{className:"w-2 h-2 bg-base rounded-full mr-2"}),onClick:()=>alert("Guest access requested"),children:"Guest Access"})]})]})})},p={name:"Status Examples",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"System Status:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"success",size:"sm",children:"ONLINE"}),e.jsx(a,{variant:"warning",size:"sm",children:"DEGRADED"}),e.jsx(a,{variant:"error",size:"sm",children:"OFFLINE"}),e.jsx(a,{variant:"secondary",size:"sm",children:"MAINTENANCE"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"Priority Levels:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"error",children:"CRITICAL"}),e.jsx(a,{variant:"warning",children:"HIGH"}),e.jsx(a,{variant:"accent",children:"MEDIUM"}),e.jsx(a,{variant:"secondary",children:"LOW"})]})]})]})},v={render:()=>e.jsxs("div",{className:"space-y-4 p-4 bg-surface rounded-lg",children:[e.jsx("h3",{className:"text-default font-semibold",children:"Hover Effects Demonstration:"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{variant:"primary",clickable:!0,children:"Hover Primary"}),e.jsx(a,{variant:"secondary",clickable:!0,children:"Hover Secondary"}),e.jsx(a,{variant:"accent",clickable:!0,children:"Hover Accent"}),e.jsx(a,{variant:"success",clickable:!0,children:"Hover Success"}),e.jsx(a,{variant:"error",clickable:!0,children:"Hover Error"}),e.jsx(a,{variant:"warning",clickable:!0,children:"Hover Warning"})]}),e.jsx("p",{className:"text-muted text-sm",children:"Each badge above demonstrates variant-specific hover shadow effects"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Accent'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Error'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
      <Badge size="lg" variant="primary">Large</Badge>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Online',
    leftIcon: <span className="w-2 h-2 bg-base rounded-full mr-2"></span>
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Status',
    rightIcon: <span className="w-2 h-2 bg-base rounded-full ml-2"></span>
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Click Me',
    clickable: true,
    onClick: () => alert('Badge clicked!')
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const D=["Primary","Secondary","Accent","Success","Error","Warning","AllSizes","WithLeftIcon","WithRightIcon","Clickable","SecurityClearance","StatusVariants","InteractiveDemo"];export{t as Accent,o as AllSizes,u as Clickable,c as Error,v as InteractiveDemo,s as Primary,n as Secondary,g as SecurityClearance,p as StatusVariants,i as Success,l as Warning,d as WithLeftIcon,m as WithRightIcon,D as __namedExportsOrder,L as default};
