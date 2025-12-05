import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-B52jae2o.js";import"./preload-helper-PPVm8Dsz.js";const t=({variant:a="gradient",orientation:d="horizontal",className:c=""})=>{const m=o=>o==="horizontal"?"w-full h-[1px]":"w-[1px] h-full",p=(o,l)=>({gradient:l==="horizontal"?"bg-gradient-to-r from-transparent via-secondary/50 to-transparent":"bg-gradient-to-b from-transparent via-secondary/50 to-transparent",solid:"bg-secondary/30",dashed:`border-dashed border-secondary/50 ${l==="horizontal"?"border-t":"border-l"}`})[o],u=[m(d),p(a,d),c].filter(Boolean).join(" ");return e.jsx("div",{className:u})};t.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{variant:{required:!1,tsType:{name:"union",raw:"'gradient' | 'solid' | 'dashed'",elements:[{name:"literal",value:"'gradient'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"}]},description:"Visual style of the divider.\n- `gradient`: Gradient fade from center (default).\n- `solid`: Solid semi-transparent line.\n- `dashed`: Dashed border style.\n@default 'gradient'",defaultValue:{value:"'gradient'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Orientation of the divider.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes.",defaultValue:{value:"''",computed:!1}}}};const x={title:"Components/Divider",component:t,parameters:{layout:"padded",docs:{description:{component:`A flexible divider component for separating content with cyberpunk styling.

**Usage:**

\`\`\`tsx
import { Divider } from 'cyberui-2045';

// Horizontal dividers
<Divider variant="gradient" />
<Divider variant="solid" />
<Divider variant="dashed" />

// Vertical divider (needs height container)
<div className="h-20 flex">
  <Divider orientation="vertical" />
</div>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'gradient' \\| 'solid' \\| 'dashed'\` | ❌ | \`'gradient'\` | Visual style of the divider |
| \`orientation\` | \`'horizontal' \\| 'vertical'\` | ❌ | \`'horizontal'\` | Orientation of the divider |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
`}}},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientation of the divider"},variant:{control:{type:"select"},options:["gradient","solid","dashed"],description:"Visual style of the divider"},className:{control:"text",description:"Additional CSS classes"}}},r={args:{orientation:"horizontal",variant:"gradient"},render:a=>e.jsxs("div",{className:"w-full py-4",children:[e.jsx("p",{className:"mb-2 text-muted",children:"Content Above"}),e.jsx(t,{...a}),e.jsx("p",{className:"mt-2 text-muted",children:"Content Below"})]})},s={args:{orientation:"horizontal",variant:"solid"},render:a=>e.jsxs("div",{className:"w-full py-4",children:[e.jsx("p",{className:"mb-2 text-muted",children:"Content Above"}),e.jsx(t,{...a}),e.jsx("p",{className:"mt-2 text-muted",children:"Content Below"})]})},i={args:{orientation:"horizontal",variant:"dashed"},render:a=>e.jsxs("div",{className:"w-full py-4",children:[e.jsx("p",{className:"mb-2 text-muted",children:"Content Above"}),e.jsx(t,{...a}),e.jsx("p",{className:"mt-2 text-muted",children:"Content Below"})]})},n={args:{orientation:"vertical",variant:"gradient"},render:a=>e.jsxs("div",{className:"flex h-32 items-center justify-center gap-4",children:[e.jsx("span",{className:"text-muted",children:"Left"}),e.jsx(t,{...a}),e.jsx("span",{className:"text-muted",children:"Right"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'gradient'
  },
  render: args => <div className="w-full py-4">
      <p className="mb-2 text-muted">Content Above</p>
      <Divider {...args} />
      <p className="mt-2 text-muted">Content Below</p>
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid'
  },
  render: args => <div className="w-full py-4">
      <p className="mb-2 text-muted">Content Above</p>
      <Divider {...args} />
      <p className="mt-2 text-muted">Content Below</p>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'dashed'
  },
  render: args => <div className="w-full py-4">
      <p className="mb-2 text-muted">Content Above</p>
      <Divider {...args} />
      <p className="mt-2 text-muted">Content Below</p>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    variant: 'gradient'
  },
  render: args => <div className="flex h-32 items-center justify-center gap-4">
      <span className="text-muted">Left</span>
      <Divider {...args} />
      <span className="text-muted">Right</span>
    </div>
}`,...n.parameters?.docs?.source}}};const N=["GradientHorizontal","SolidHorizontal","DashedHorizontal","Vertical"];export{i as DashedHorizontal,r as GradientHorizontal,s as SolidHorizontal,n as Vertical,N as __namedExportsOrder,x as default};
