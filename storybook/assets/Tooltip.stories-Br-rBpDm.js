import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n,e as $}from"./iframe-mP1eHMDB.js";import{i as J,g as I,R as Q}from"./responsive-Cmibuo0E.js";import{c as L}from"./cn-CNMN3A1O.js";import{B as r}from"./Button-aW_SFg-4.js";import{B as l}from"./Badge-Cb7RgkJI.js";import"./preload-helper-D9Z9MdNV.js";const M={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},X={top:"top-full left-1/2 -translate-x-1/2 -mt-[5px]",bottom:"bottom-full left-1/2 -translate-x-1/2 -mb-[5px]",left:"left-full top-1/2 -translate-y-1/2 -ml-[5px]",right:"right-full top-1/2 -translate-y-1/2 -mr-[5px]"},O={primary:"border-primary shadow-primary",secondary:"border-secondary shadow-secondary",accent:"border-accent shadow-lg-accent"},t=({children:a,content:P,placement:i="top",variant:R="primary",size:V="md",delay:E=200,disabled:S=!1,open:z,onOpenChange:C,className:_="",id:G})=>{const[H,Y]=n.useState(!1),w=z!==void 0,k=(w?z:H)&&!S,F=n.useId(),D=G||`tooltip-${F}`,c=n.useRef(void 0),o=n.useCallback(()=>{c.current&&(clearTimeout(c.current),c.current=void 0)},[]);n.useEffect(()=>o,[o]);const d=n.useCallback(s=>{w||Y(s),C?.(s)},[w,C]),q=n.useCallback(()=>{S||(o(),c.current=setTimeout(()=>d(!0),E))},[S,E,o,d]),p=n.useCallback(()=>{o(),d(!1)},[o,d]),U=n.useCallback(s=>{s.key==="Escape"&&p()},[p]),W=s=>I(s,Q.tooltip),A=J(i)?i.base??"top":i,K=I(i,M)||M[A],Z=$.cloneElement(a,{"aria-describedby":k?D:void 0});return e.jsxs("span",{className:"relative inline-flex w-fit",onMouseEnter:q,onMouseLeave:p,onFocus:q,onBlur:p,onKeyDown:U,children:[Z,k&&e.jsxs("span",{role:"tooltip",id:D,className:L("absolute z-50 overflow-hidden whitespace-nowrap rounded-md border bg-surface font-mono text-default pointer-events-none",W(V),K,O[R],_),children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,currentColor_0px,currentColor_1px,transparent_1px,transparent_3px)]"}),e.jsx("span",{className:"relative",children:P}),e.jsx("span",{"aria-hidden":"true",className:L("absolute w-2.5 h-2.5 rotate-45 bg-surface border",X[A],O[R])})]})]})};t.displayName="CyberUI.Tooltip";t.__docgenInfo={description:`A neon-bordered popover that reveals supplemental info on hover or keyboard focus.

@example
<Tooltip content="Initiates a full system diagnostic scan.">
  <Button variant="primary">Run Diagnostics</Button>
</Tooltip>

@example
<Tooltip content="Cannot be undone." variant="accent" placement="right">
  <Badge variant="error">DANGER</Badge>
</Tooltip>`,methods:[],displayName:"CyberUI.Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ 'aria-describedby'?: string }>",elements:[{name:"signature",type:"object",raw:"{ 'aria-describedby'?: string }",signature:{properties:[{key:"aria-describedby",value:{name:"string",required:!1}}]}}]},description:"The trigger element. Must be a single React element that accepts an\n`aria-describedby` attribute (native elements, `Button`, `Badge`, etc).\nWrap plain text/icons in a `<span tabIndex={0}>` so the trigger is\nkeyboard-focusable — the tooltip only opens on hover or focus."},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content rendered inside the tooltip panel."},placement:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"md",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}}]}}]},description:`Side of the trigger the tooltip is anchored to. Supports responsive values.
@default 'top'`,defaultValue:{value:"'top'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:`Visual style, reusing the neon palette from Button/Card.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the tooltip panel (text size + padding). Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:`Delay in ms before the tooltip appears after hover/focus starts.
Hiding is always immediate so the panel doesn't linger.
@default 200`,defaultValue:{value:"200",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disables the tooltip — the trigger renders as-is with no hover/focus behavior.
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled visibility. When set, the tooltip stops managing its own open\nstate and `onOpenChange` becomes the only way to react to hover/focus/Escape."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Fired whenever hover, focus, blur, or Escape would change visibility."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the tooltip panel.",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Id for the tooltip panel. Auto-generated when omitted."}}};const le={title:"Components/Tooltip",component:t,parameters:{layout:"centered",docs:{description:{component:`A neon-bordered popover that reveals supplemental info on hover or keyboard focus.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Tooltip, Button, Badge } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage
<Tooltip content="Initiates a full system diagnostic scan.">
  <Button variant="primary">Run Diagnostics</Button>
</Tooltip>

// Placement
<Tooltip content="Cannot be undone." placement="right">
  <Badge variant="error">DANGER</Badge>
</Tooltip>

// Variant
<Tooltip content="Neural link established." variant="accent">
  <Badge variant="success">ONLINE</Badge>
</Tooltip>

// Controlled
const [open, setOpen] = React.useState(false);
<Tooltip content="Manually controlled." open={open} onOpenChange={setOpen}>
  <Button>Toggle</Button>
</Tooltip>

// Disabled
<Tooltip content="Never shows." disabled>
  <Button>No Tooltip</Button>
</Tooltip>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`children\` | \`React.ReactElement\` | ✅ | - | Trigger element (must accept \`aria-describedby\`) |
| \`content\` | \`React.ReactNode\` | ✅ | - | Tooltip panel content |
| \`placement\` | \`'top' \\| 'bottom' \\| 'left' \\| 'right' \\| ResponsiveValue<...>\` | ❌ | \`'top'\` | Side of the trigger the panel is anchored to (supports responsive values) |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Neon color variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Panel text size / padding (supports responsive values) |
| \`delay\` | \`number\` | ❌ | \`200\` | Delay in ms before showing on hover/focus |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables hover/focus behavior entirely |
| \`open\` | \`boolean\` | ❌ | - | Controlled visibility |
| \`onOpenChange\` | \`(open: boolean) => void\` | ❌ | - | Fired on visibility change attempts |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the panel |

Most stories below force \`open\` for visual documentation. See **Interactive** for the real hover/focus/Escape behavior.
`}}},tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right"],description:"Side of the trigger the panel is anchored to"},variant:{control:{type:"select"},options:["primary","secondary","accent"],description:"Neon color variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Panel text size / padding"},disabled:{control:"boolean",description:"Disables hover/focus behavior entirely"}},args:{content:"Neural link status: stable.",open:!0}},m={args:{placement:"top",variant:"primary"},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{variant:"primary",children:"Run Diagnostics"})})})},u={args:{placement:"top",content:"Executes protocol immediately."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{variant:"primary",children:"Execute Protocol"})})})},v={args:{placement:"bottom",content:"Scans local network for threats."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{variant:"secondary",children:"Scan System"})})})},g={args:{placement:"left",content:"Irreversible — proceed with caution."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(l,{variant:"error",children:"DANGER"})})})},h={args:{placement:"right",content:"Neural link established."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(l,{variant:"success",children:"ONLINE"})})})},f={args:{variant:"secondary",content:"Runs passive diagnostics."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{variant:"ghost",children:"Run Diagnostics"})})})},y={args:{variant:"accent",content:"Highlights critical systems."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(l,{variant:"accent",children:"PRIORITY"})})})},b={args:{size:"sm",content:"Compact readout."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{size:"sm",children:"Small"})})})},x={args:{size:"md",content:"Standard readout."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{size:"md",children:"Medium"})})})},T={args:{size:"lg",content:"Expanded readout."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{size:"lg",children:"Large"})})})},j={args:{disabled:!0,open:!1,content:"You should never see this."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{variant:"ghost",children:"No Tooltip"})})})},N={args:{open:void 0,content:"Neural link status: stable.",placement:"top",variant:"primary"},parameters:{docs:{description:{story:"Uncontrolled — hover or Tab-focus the trigger to open, move away or press Escape to close."}}},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(r,{variant:"primary",children:"Hover or Focus Me"})})})},B={render:()=>e.jsxs("div",{className:"flex flex-col gap-16 p-16 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Placements"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-center",children:[e.jsx(t,{content:"Top placement",placement:"top",open:!0,children:e.jsx(r,{variant:"primary",children:"Top"})}),e.jsx(t,{content:"Bottom placement",placement:"bottom",open:!0,children:e.jsx(r,{variant:"primary",children:"Bottom"})}),e.jsx(t,{content:"Left placement",placement:"left",open:!0,children:e.jsx(r,{variant:"primary",children:"Left"})}),e.jsx(t,{content:"Right placement",placement:"right",open:!0,children:e.jsx(r,{variant:"primary",children:"Right"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Variants"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-center",children:[e.jsx(t,{content:"Primary variant",variant:"primary",open:!0,children:e.jsx(l,{variant:"primary",children:"Primary"})}),e.jsx(t,{content:"Secondary variant",variant:"secondary",open:!0,children:e.jsx(l,{variant:"secondary",children:"Secondary"})}),e.jsx(t,{content:"Accent variant",variant:"accent",open:!0,children:e.jsx(l,{variant:"accent",children:"Accent"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Sizes"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-center",children:[e.jsx(t,{content:"Small",size:"sm",open:!0,children:e.jsx(r,{size:"sm",children:"SM"})}),e.jsx(t,{content:"Medium",size:"md",open:!0,children:e.jsx(r,{size:"md",children:"MD"})}),e.jsx(t,{content:"Large",size:"lg",open:!0,children:e.jsx(r,{size:"lg",children:"LG"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Disabled"}),e.jsx("div",{className:"flex gap-16 flex-wrap items-center",children:e.jsx(t,{content:"You should never see this.",disabled:!0,children:e.jsx(r,{variant:"ghost",children:"No Tooltip"})})})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    variant: 'primary'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="primary">Run Diagnostics</Button>
      </Tooltip>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    content: 'Executes protocol immediately.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="primary">Execute Protocol</Button>
      </Tooltip>
    </div>
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    content: 'Scans local network for threats.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="secondary">Scan System</Button>
      </Tooltip>
    </div>
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    content: 'Irreversible — proceed with caution.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="error">DANGER</Badge>
      </Tooltip>
    </div>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    content: 'Neural link established.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="success">ONLINE</Badge>
      </Tooltip>
    </div>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    content: 'Runs passive diagnostics.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="ghost">Run Diagnostics</Button>
      </Tooltip>
    </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    content: 'Highlights critical systems.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="accent">PRIORITY</Badge>
      </Tooltip>
    </div>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    content: 'Compact readout.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button size="sm">Small</Button>
      </Tooltip>
    </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    content: 'Standard readout.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button size="md">Medium</Button>
      </Tooltip>
    </div>
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    content: 'Expanded readout.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button size="lg">Large</Button>
      </Tooltip>
    </div>
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    open: false,
    content: 'You should never see this.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="ghost">No Tooltip</Button>
      </Tooltip>
    </div>
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    // Overrides meta's forced \`open: true\` so this story runs uncontrolled —
    // hover or keyboard-focus the button below to see the real show/hide/delay/Escape behavior.
    open: undefined,
    content: 'Neural link status: stable.',
    placement: 'top',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled — hover or Tab-focus the trigger to open, move away or press Escape to close.'
      }
    }
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="primary">Hover or Focus Me</Button>
      </Tooltip>
    </div>
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16 p-16 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-4">Placements</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="Top placement" placement="top" open>
            <Button variant="primary">Top</Button>
          </Tooltip>
          <Tooltip content="Bottom placement" placement="bottom" open>
            <Button variant="primary">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left placement" placement="left" open>
            <Button variant="primary">Left</Button>
          </Tooltip>
          <Tooltip content="Right placement" placement="right" open>
            <Button variant="primary">Right</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Variants</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="Primary variant" variant="primary" open>
            <Badge variant="primary">Primary</Badge>
          </Tooltip>
          <Tooltip content="Secondary variant" variant="secondary" open>
            <Badge variant="secondary">Secondary</Badge>
          </Tooltip>
          <Tooltip content="Accent variant" variant="accent" open>
            <Badge variant="accent">Accent</Badge>
          </Tooltip>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Sizes</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="Small" size="sm" open>
            <Button size="sm">SM</Button>
          </Tooltip>
          <Tooltip content="Medium" size="md" open>
            <Button size="md">MD</Button>
          </Tooltip>
          <Tooltip content="Large" size="lg" open>
            <Button size="lg">LG</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Disabled</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="You should never see this." disabled>
            <Button variant="ghost">No Tooltip</Button>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...B.parameters?.docs?.source}}};const ie=["Default","Top","Bottom","Left","Right","Secondary","Accent","Small","Medium","Large","Disabled","Interactive","AllVariants"];export{y as Accent,B as AllVariants,v as Bottom,m as Default,j as Disabled,N as Interactive,T as Large,g as Left,x as Medium,h as Right,f as Secondary,b as Small,u as Top,ie as __namedExportsOrder,le as default};
