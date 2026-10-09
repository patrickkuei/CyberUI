import{j as d}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-bwAE_uHO.js";import{c as g}from"./cn-CNMN3A1O.js";import"./preload-helper-D9Z9MdNV.js";const c=({children:e,variant:r="primary",as:a="span",className:m=""})=>{const p=y=>({primary:"bg-linear-135/srgb from-secondary from-10% to-primary to-90%",secondary:"bg-linear-135/srgb from-primary from-10% to-accent to-90%",accent:"bg-linear-135/srgb from-accent from-10% to-secondary to-90%"})[y];return d.jsx(a,{className:g("bg-clip-text text-transparent inline-block",p(r),m),children:e})};c.displayName="CyberUI.GradientText";c.__docgenInfo={description:"",methods:[],displayName:"CyberUI.GradientText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The text content to render."},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:"Visual style of the gradient.\n- `primary`: Cyan to pink gradient (secondary → primary).\n- `secondary`: Pink to yellow gradient (primary → accent).\n- `accent`: Yellow to cyan gradient (accent → secondary).\n@default 'primary'",defaultValue:{value:"'primary'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'div'"}]},description:`The HTML element to render as.
@default 'span'`,defaultValue:{value:"'span'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes.",defaultValue:{value:"''",computed:!1}}}};const{expect:l}=__STORYBOOK_MODULE_TEST__,b={title:"Components/GradientText",component:c,parameters:{layout:"centered",docs:{description:{component:`A component for rendering text with cyberpunk-themed gradients.

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
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent"],description:"Gradient color variant"},as:{control:{type:"text"},description:"HTML element to render as (e.g., h1, span, p)"},children:{control:"text",description:"Text content"},className:{control:"text",description:"Additional CSS classes"}}},t={args:{variant:"primary",children:"Neural Interface Active",className:"text-3xl font-bold"}},n={args:{variant:"secondary",children:"System Critical Alert",className:"text-3xl font-bold"}},o={args:{variant:"accent",children:"Warning Protocol Engaged",className:"text-3xl font-bold"}},s={args:{as:"h1",variant:"primary",children:"Main Heading",className:"text-5xl font-black uppercase tracking-tighter"}},i={args:{children:"Ghost in the Wire"},parameters:{docs:{description:{story:"Overriding `--color-secondary` and `--color-primary` on a wrapper re-colours the gradient text inside it."}}},render:e=>d.jsx("div",{className:"p-6 bg-base",style:{"--color-secondary":"#c084fc","--color-primary":"#c084fc"},children:d.jsx(c,{variant:"primary",className:"text-3xl font-bold",children:e.children})}),play:async({canvasElement:e})=>{const r=e.querySelector("span");if(!r)throw new Error("GradientText did not render");const a=getComputedStyle(r).backgroundImage;await l(a).toContain("192, 132, 252"),await l(a).not.toContain("0, 255, 249"),await l(a).not.toContain("255, 0, 93")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Neural Interface Active',
    className: 'text-3xl font-bold'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'System Critical Alert',
    className: 'text-3xl font-bold'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Warning Protocol Engaged',
    className: 'text-3xl font-bold'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    variant: 'primary',
    children: 'Main Heading',
    className: 'text-5xl font-black uppercase tracking-tighter'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost in the Wire'
  },
  parameters: {
    docs: {
      description: {
        story: 'Overriding \`--color-secondary\` and \`--color-primary\` on a wrapper re-colours the gradient text inside it.'
      }
    }
  },
  render: args => <div className="p-6 bg-base" style={{
    '--color-secondary': '#c084fc',
    '--color-primary': '#c084fc'
  } as React.CSSProperties}>
      <GradientText variant="primary" className="text-3xl font-bold">
        {args.children}
      </GradientText>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const text = canvasElement.querySelector('span');
    if (!text) throw new Error('GradientText did not render');
    const image = getComputedStyle(text).backgroundImage;
    // #c084fc = rgb(192, 132, 252); the defaults are secondary #00fff9 and primary #ff005d.
    await expect(image).toContain('192, 132, 252');
    await expect(image).not.toContain('0, 255, 249');
    await expect(image).not.toContain('255, 0, 93');
  }
}`,...i.parameters?.docs?.source}}};const S=["Primary","Secondary","Accent","AsHeading","ScopedColorOverride"];export{o as Accent,s as AsHeading,t as Primary,i as ScopedColorOverride,n as Secondary,S as __namedExportsOrder,b as default};
