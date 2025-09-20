import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DGTRJ_05.js";import{g as T,R as A}from"./responsive-CG8DOH1x.js";import"./preload-helper-PPVm8Dsz.js";const r=({variant:a="text",size:n="md",width:l,height:o,className:i="",lines:z=3,animate:$=!0})=>{const s=["bg-gray-600",$?"animate-pulse":"",(t=>T(t,A.skeleton))(n),i].filter(Boolean).join(" "),d=()=>{const t={};return l&&(t.width=typeof l=="number"?`${l}px`:l),o&&(t.height=typeof o=="number"?`${o}px`:o),t};if(a==="text")return e.jsx("div",{className:`space-y-3 ${i}`,children:Array.from({length:z}).map((t,k)=>{const C=k===z-1?"w-2/3":k%2===0?"w-full":"w-5/6";return e.jsx("div",{className:`h-3 rounded ${s} ${C}`,style:d()},k)})});if(a==="circular"){const t=n==="sm"?"h-12 w-12":n==="lg"?"h-20 w-20":"h-16 w-16";return e.jsx("div",{className:`rounded-full ${s} ${t}`,style:d()})}if(a==="rectangular"){const t=n==="sm"?"h-20":n==="lg"?"h-40":"h-32";return e.jsx("div",{className:`rounded-lg ${s} w-full ${t}`,style:d()})}if(a==="avatar-text"){const t=n==="sm"?"h-12 w-12":n==="lg"?"h-20 w-20":"h-16 w-16";return e.jsxs("div",{className:`flex items-center space-x-4 ${i}`,children:[e.jsx("div",{className:`rounded-full ${s} ${t}`}),e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsx("div",{className:`h-4 rounded w-3/4 ${s}`}),e.jsx("div",{className:`h-3 rounded w-1/2 ${s}`})]})]})}if(a==="button-group"){const t=n==="sm"?"h-8":n==="lg"?"h-12":"h-10";return e.jsxs("div",{className:`flex space-x-4 ${i}`,children:[e.jsx("div",{className:`${t} rounded w-20 ${s}`}),e.jsx("div",{className:`${t} rounded w-24 ${s}`})]})}if(a==="card"){const t=n==="sm"?"p-4":n==="lg"?"p-8":"p-6";return e.jsx("div",{className:`border border-border-default rounded-lg bg-surface ${t} space-y-4 ${i}`,children:$&&e.jsxs("div",{className:"animate-pulse space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:`rounded-full ${s} h-16 w-16`}),e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsx("div",{className:`h-4 rounded w-3/4 ${s}`}),e.jsx("div",{className:`h-3 rounded w-1/2 ${s}`})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:`h-3 rounded ${s}`}),e.jsx("div",{className:`h-3 rounded w-5/6 ${s}`}),e.jsx("div",{className:`h-3 rounded w-4/6 ${s}`})]}),e.jsxs("div",{className:"flex space-x-4 pt-4",children:[e.jsx("div",{className:`h-8 rounded w-20 ${s}`}),e.jsx("div",{className:`h-8 rounded w-24 ${s}`})]})]})})}return e.jsx("div",{className:`h-4 rounded ${s} w-full`,style:d()})};r.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "text"
| "circular"
| "rectangular"
| "card"
| "avatar-text"
| "button-group"`,elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"circular"'},{name:"literal",value:'"rectangular"'},{name:"literal",value:'"card"'},{name:"literal",value:'"avatar-text"'},{name:"literal",value:'"button-group"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"sm",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"md",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"lg",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"2xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}}]}}]},description:"",defaultValue:{value:'"md"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const I={title:"Components/Skeleton",component:r,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed skeleton loader component for displaying loading placeholders with smooth animations.

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
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["text","circular","rectangular","card","avatar-text","button-group"],description:"Skeleton variant type"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Skeleton size (supports responsive values)"},lines:{control:{type:"number",min:1,max:10},description:"Number of lines for text variant"},width:{control:"text",description:"Custom width override"},height:{control:"text",description:"Custom height override"},animate:{control:"boolean",description:"Whether to show pulse animation"}},args:{variant:"text",animate:!0}},m={args:{variant:"text",lines:3},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},c={args:{variant:"circular",size:"md"}},u={args:{variant:"rectangular",size:"md"},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},x={args:{variant:"avatar-text",size:"md"},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},v={args:{variant:"button-group",size:"md"}},p={args:{variant:"card",size:"md"},decorators:[a=>e.jsx("div",{className:"w-96",children:e.jsx(a,{})})]},h={args:{variant:"text",size:"sm",lines:3},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},g={args:{variant:"text",size:"md",lines:3},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},N={args:{variant:"text",size:"lg",lines:3},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},b={args:{variant:"text",animate:!1},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},j={args:{variant:"rectangular",width:"300px",height:"100px"}},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Skeleton Variants"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Text Lines"}),e.jsx(r,{variant:"text",lines:4})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Circular Avatar"}),e.jsx(r,{variant:"circular"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Rectangular Image"}),e.jsx(r,{variant:"rectangular"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Avatar + Text"}),e.jsx(r,{variant:"avatar-text"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Button Group"}),e.jsx(r,{variant:"button-group"})]})]})]})},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Skeleton Sizes"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Small"}),e.jsx(r,{variant:"avatar-text",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Medium"}),e.jsx(r,{variant:"avatar-text",size:"md"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Large"}),e.jsx(r,{variant:"avatar-text",size:"lg"})]})]})]})},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Loading States"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"With Animation"}),e.jsx(r,{variant:"text",lines:2,animate:!0})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Without Animation"}),e.jsx(r,{variant:"text",lines:2,animate:!1})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm text-muted mb-2",children:"Custom Dimensions"}),e.jsx(r,{variant:"rectangular",width:"250px",height:"80px"})]})]})]})},w={render:()=>e.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-6 space-y-6 min-w-[500px]",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-4 border-b border-accent pb-2",children:"Neural Interface Loading..."}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"User Profile"}),e.jsx(r,{variant:"avatar-text",size:"lg"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"System Status"}),e.jsx(r,{variant:"text",lines:4})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"Actions"}),e.jsx(r,{variant:"button-group"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm text-accent",children:"Dashboard"}),e.jsx(r,{variant:"card"})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    size: "md"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    size: "md"
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "avatar-text",
    size: "md"
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "button-group",
    size: "md"
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "card",
    size: "md"
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "sm",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "md",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "lg",
    lines: 3
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    animate: false
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    width: "300px",
    height: "100px"
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const P=["Text","Circular","Rectangular","AvatarText","ButtonGroup","Card","Small","Medium","Large","WithoutAnimation","CustomDimensions","AllVariants","AllSizes","LoadingStates","CyberpunkDemo"];export{S as AllSizes,f as AllVariants,x as AvatarText,v as ButtonGroup,p as Card,c as Circular,j as CustomDimensions,w as CyberpunkDemo,N as Large,y as LoadingStates,g as Medium,u as Rectangular,h as Small,m as Text,b as WithoutAnimation,P as __namedExportsOrder,I as default};
