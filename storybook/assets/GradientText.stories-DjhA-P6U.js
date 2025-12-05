import{j as m}from"./jsx-runtime-u17CrQMm.js";import"./iframe-B52jae2o.js";import"./preload-helper-PPVm8Dsz.js";const n=({children:s,variant:i="primary",as:c="span",className:o=""})=>{const l=d=>({primary:"bg-linear-(--gradient-primary)",secondary:"bg-linear-(--gradient-secondary)",accent:"bg-linear-(--gradient-accent)"})[d];return m.jsx(c,{className:`bg-clip-text text-transparent inline-block ${l(i)} ${o}`,children:s})};n.__docgenInfo={description:"",methods:[],displayName:"GradientText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The text content to render."},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:"Visual style of the gradient.\n- `primary`: Cyan to pink gradient (secondary → primary).\n- `secondary`: Pink to yellow gradient (primary → accent).\n- `accent`: Yellow to cyan gradient (accent → secondary).\n@default 'primary'",defaultValue:{value:"'primary'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'div'"}]},description:`The HTML element to render as.
@default 'span'`,defaultValue:{value:"'span'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes.",defaultValue:{value:"''",computed:!1}}}};const x={title:"Components/GradientText",component:n,parameters:{layout:"centered",docs:{description:{component:`A component for rendering text with cyberpunk-themed gradients.

**Usage:**

\`\`\`tsx
import { GradientText } from 'cyberui-2045';

// Primary gradient
<GradientText variant="primary">CyberUI</GradientText>

// Secondary gradient
<GradientText variant="secondary">System Active</GradientText>

// Accent gradient
<GradientText variant="accent">Warning</GradientText>

// As different element (h1, h2, p, etc.)
<GradientText as="h1" className="text-4xl font-bold">
  Main Title
</GradientText>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`children\` | \`React.ReactNode\` | ✅ | - | The text content to render |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Gradient color variant |
| \`as\` | \`'span' \\| 'h1' \\| 'h2' \\| 'h3' \\| 'h4' \\| 'h5' \\| 'h6' \\| 'p' \\| 'div'\` | ❌ | \`'span'\` | The HTML element to render as |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent"],description:"Gradient color variant"},as:{control:{type:"text"},description:"HTML element to render as (e.g., h1, span, p)"},children:{control:"text",description:"Text content"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{variant:"primary",children:"Neural Interface Active",className:"text-3xl font-bold"}},a={args:{variant:"secondary",children:"System Critical Alert",className:"text-3xl font-bold"}},r={args:{variant:"accent",children:"Warning Protocol Engaged",className:"text-3xl font-bold"}},t={args:{as:"h1",variant:"primary",children:"Main Heading",className:"text-5xl font-black uppercase tracking-tighter"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Neural Interface Active',
    className: 'text-3xl font-bold'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'System Critical Alert',
    className: 'text-3xl font-bold'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Warning Protocol Engaged',
    className: 'text-3xl font-bold'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    variant: 'primary',
    children: 'Main Heading',
    className: 'text-5xl font-black uppercase tracking-tighter'
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary","Secondary","Accent","AsHeading"];export{r as Accent,t as AsHeading,e as Primary,a as Secondary,v as __namedExportsOrder,x as default};
