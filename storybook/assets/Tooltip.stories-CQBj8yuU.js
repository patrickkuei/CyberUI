import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o,e as ce}from"./iframe-Dk0Rt4CJ.js";import{i as de,g as I,R as pe}from"./responsive-BeepcCFS.js";import{c as F}from"./cn-CNMN3A1O.js";import{B as n}from"./Button-DJuikVQ_.js";import{B as s}from"./Badge-CEO-aRgb.js";import"./preload-helper-D9Z9MdNV.js";const me={top:"inset-auto bottom-full left-1/2 -translate-x-1/2 translate-y-0 m-0 mb-2",bottom:"inset-auto top-full left-1/2 -translate-x-1/2 translate-y-0 m-0 mt-2",left:"inset-auto right-full top-1/2 translate-x-0 -translate-y-1/2 m-0 mr-2",right:"inset-auto left-full top-1/2 translate-x-0 -translate-y-1/2 m-0 ml-2"},ue={top:"inset-auto top-full left-1/2 -translate-x-1/2 translate-y-0 m-0 -mt-[5px]",bottom:"inset-auto bottom-full left-1/2 -translate-x-1/2 translate-y-0 m-0 -mb-[5px]",left:"inset-auto left-full top-1/2 translate-x-0 -translate-y-1/2 m-0 -ml-[5px]",right:"inset-auto right-full top-1/2 translate-x-0 -translate-y-1/2 m-0 -mr-[5px]"},K={primary:"border-primary",secondary:"border-secondary",accent:"border-accent"},Y={primary:"shadow-primary",secondary:"shadow-secondary",accent:"shadow-lg-accent"},ge=1e3,t=({children:a,content:u,placement:d="top",variant:g="primary",glow:q=!0,size:Q="md",delay:M=200,disabled:m=!1,open:_,onOpenChange:U,className:Z="",id:$})=>{const[J,X]=o.useState(!1),O=_!==void 0,l=(O?_:J)&&!m,ee=o.useId(),V=$||`tooltip-${ee}`,h=o.useRef(void 0),A=o.useRef(null),v=o.useRef(null),[f,L]=o.useState(!1),i=o.useCallback(()=>{h.current&&(clearTimeout(h.current),h.current=void 0)},[]);o.useEffect(()=>i,[i]);const p=o.useCallback(r=>{O||X(r),U?.(r)},[O,U]),W=o.useCallback(()=>v.current!==null&&Date.now()-v.current<ge,[]),G=o.useCallback(()=>{m||W()||(i(),h.current=setTimeout(()=>p(!0),M))},[m,M,i,p,W]),c=o.useCallback(()=>{i(),L(!1),p(!1)},[i,p]),te=o.useCallback(r=>{r.pointerType==="touch"&&(v.current=Date.now())},[]),ae=o.useCallback(r=>{r.pointerType!=="touch"||m||(v.current=Date.now(),l?c():(i(),L(!0),p(!0)))},[m,l,c,i,p]);o.useEffect(()=>{!l&&f&&L(!1)},[l,f]),o.useEffect(()=>{if(!l||!f)return;const r=ie=>{A.current&&!A.current.contains(ie.target)&&c()};return document.addEventListener("pointerdown",r,{capture:!0}),()=>document.removeEventListener("pointerdown",r,{capture:!0})},[l,f,c]);const ne=o.useCallback(r=>{r.key==="Escape"&&c()},[c]),oe=r=>I(r,pe.tooltip),H=de(d)?{...d,base:d.base??"top"}:d,re=I(H,me),se=I(H,ue),le=ce.cloneElement(a,{"aria-describedby":l?V:void 0});return e.jsxs("span",{ref:A,className:"relative inline-flex w-fit",onPointerDown:te,onPointerUp:ae,onMouseEnter:G,onMouseLeave:c,onFocus:G,onBlur:c,onKeyDown:ne,children:[le,l&&e.jsxs("span",{role:"tooltip",id:V,className:F("absolute z-50 overflow-hidden whitespace-nowrap rounded-md border bg-surface font-mono text-default pointer-events-none",oe(Q),re,K[g],q&&Y[g],Z),children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,currentColor_0px,currentColor_1px,transparent_1px,transparent_3px)]"}),e.jsx("span",{className:"relative",children:u}),e.jsx("span",{"aria-hidden":"true",className:F("absolute w-2.5 h-2.5 rotate-45 bg-surface border",se,K[g],q&&Y[g])})]})]})};t.displayName="CyberUI.Tooltip";t.__docgenInfo={description:`A neon-bordered popover that reveals supplemental info on hover, keyboard
focus, or (on touch devices) a tap on the trigger.

@example
<Tooltip content="Initiates a full system diagnostic scan.">
  <Button variant="primary">Run Diagnostics</Button>
</Tooltip>

@example
<Tooltip content="Cannot be undone." variant="accent" placement="right">
  <Badge variant="error">DANGER</Badge>
</Tooltip>`,methods:[],displayName:"CyberUI.Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ 'aria-describedby'?: string }>",elements:[{name:"signature",type:"object",raw:"{ 'aria-describedby'?: string }",signature:{properties:[{key:"aria-describedby",value:{name:"string",required:!1}}]}}]},description:"The trigger element. Must be a single React element that accepts an\n`aria-describedby` attribute (native elements, `Button`, `Badge`, etc).\nWrap plain text/icons in a `<span tabIndex={0}>` so the trigger is\nkeyboard-focusable — mouse users open the tooltip on hover, keyboard users\non focus, and touch users by tapping the trigger (see below).\n\nOn touch input (`pointerType: 'touch'`) a tap on the trigger toggles the\ntooltip immediately (no `delay`), and a tap anywhere outside closes it.\nThis works for non-focusable triggers too. A tap still reaches the\ntrigger itself, so a `Button` trigger's `onClick` runs as usual."},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content rendered inside the tooltip panel."},placement:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"md",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}}]}}]},description:`Side of the trigger the tooltip is anchored to. Supports responsive values.
@default 'top'`,defaultValue:{value:"'top'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:`Visual style, reusing the neon palette from Button/Card.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},glow:{required:!1,tsType:{name:"boolean"},description:"Draws the neon glow (box-shadow) around the panel and arrow. Set `false`\nfor a quieter look next to dense content (tables, stat rows, icon\nstrips): the panel keeps its `variant`-colored border but drops the glow.\n@default true",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the tooltip panel (text size + padding). Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:`Delay in ms before the tooltip appears after hover/focus starts.
Hiding is always immediate so the panel doesn't linger. Touch taps open
immediately and ignore this value.

The 200ms default suits standalone triggers (buttons, badges). For a
dense row of small targets (icon strips, table headers, step labels)
lower it to 0–100ms so moving across the row doesn't feel laggy.
@default 200`,defaultValue:{value:"200",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disables the tooltip — the trigger renders as-is with no hover, focus, or tap behavior.
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled visibility. When set, the tooltip stops managing its own open\nstate and `onOpenChange` becomes the only way to react to hover/focus/Escape/tap."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Fired whenever hover, focus, blur, Escape, or a touch tap would change visibility."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the tooltip panel.",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Id for the tooltip panel. Auto-generated when omitted."}}};const je={title:"Components/Tooltip",component:t,parameters:{layout:"centered",docs:{description:{component:`A neon-bordered popover that reveals supplemental info on hover, keyboard focus, or tap.

On touch devices, tapping the trigger toggles the tooltip open or closed with no delay, and tapping anywhere else closes it. This works for non-focusable triggers such as a plain \`<span>\` label.

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

// Quiet: keeps the variant border, drops the neon glow
<Tooltip content="Packet loss: 0.02%" glow={false}>
  <span>PKT</span>
</Tooltip>

// Dense row of small targets: lower the delay
<Tooltip content="CPU core temperature" delay={50} glow={false} size="sm">
  <span>CPU</span>
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
| \`glow\` | \`boolean\` | ❌ | \`true\` | Neon glow around the panel; \`false\` keeps the border and drops the glow |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Panel text size / padding (supports responsive values) |
| \`delay\` | \`number\` | ❌ | \`200\` | Delay in ms before showing on hover/focus (taps open immediately) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables hover, focus, and tap behavior entirely |
| \`open\` | \`boolean\` | ❌ | - | Controlled visibility (hover, focus, Escape, and taps report through \`onOpenChange\`) |
| \`onOpenChange\` | \`(open: boolean) => void\` | ❌ | - | Fired on visibility change attempts (hover, focus, Escape, tap) |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the panel |

**When to lower \`delay\`:** keep the 200ms default for standalone triggers such as buttons and badges. For a dense row of small targets (icon strips, table headers, step labels) use 0–100ms so moving across the row doesn't feel laggy.

**When to use \`glow={false}\`:** next to dense content (tables, stat rows, icon strips) where a glowing panel competes with the data. Keep the default glow for standalone triggers.

Most stories below force \`open\` for visual documentation. See **Interactive** for the real hover/focus/Escape behavior and **DenseRow** for tap and low-delay behavior.
`}}},tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right"],description:"Side of the trigger the panel is anchored to"},variant:{control:{type:"select"},options:["primary","secondary","accent"],description:"Neon color variant"},glow:{control:"boolean",description:"Neon glow around the panel; false keeps the border and drops the glow"},delay:{control:{type:"number"},description:"Delay in ms before showing on hover/focus (taps open immediately)"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Panel text size / padding"},disabled:{control:"boolean",description:"Disables hover, focus, and tap behavior entirely"}},args:{content:"Neural link status: stable.",open:!0}},y={args:{placement:"top",variant:"primary"},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{variant:"primary",children:"Run Diagnostics"})})})},b={args:{placement:"top",content:"Executes protocol immediately."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{variant:"primary",children:"Execute Protocol"})})})},x={args:{placement:"bottom",content:"Scans local network for threats."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{variant:"secondary",children:"Scan System"})})})},T={args:{placement:"left",content:"Irreversible — proceed with caution."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(s,{variant:"error",children:"DANGER"})})})},w={args:{placement:"right",content:"Neural link established."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(s,{variant:"success",children:"ONLINE"})})})},j={args:{variant:"secondary",content:"Runs passive diagnostics."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{variant:"ghost",children:"Run Diagnostics"})})})},N={args:{variant:"accent",content:"Highlights critical systems."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(s,{variant:"accent",children:"PRIORITY"})})})},B={args:{placement:{base:"top",md:"right"},content:"Signal routed via orbital relay."},argTypes:{placement:{control:"object"}},parameters:{docs:{description:{story:"`placement={{ base: 'top', md: 'right' }}` — above the trigger on small screens, to its right from `md` up. The arrow follows the panel."}}},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{variant:"secondary",children:"Route Signal"})})})},S={args:{glow:!1,variant:"secondary",content:"Packet loss: 0.02%"},parameters:{docs:{description:{story:"`glow={false}` keeps the variant-colored border and drops the neon glow."}}},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(s,{variant:"secondary",children:"PKT LOSS"})})})},R={args:{size:"sm",content:"Compact readout."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{size:"sm",children:"Small"})})})},E={args:{size:"md",content:"Standard readout."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{size:"md",children:"Medium"})})})},k={args:{size:"lg",content:"Expanded readout."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{size:"lg",children:"Large"})})})},C={args:{disabled:!0,open:!1,content:"You should never see this."},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{variant:"ghost",children:"No Tooltip"})})})},D={args:{open:void 0,content:"Neural link status: stable.",placement:"top",variant:"primary"},parameters:{docs:{description:{story:"Uncontrolled — hover or Tab-focus the trigger to open, move away or press Escape to close."}}},render:a=>e.jsx("div",{className:"p-16",children:e.jsx(t,{...a,children:e.jsx(n,{variant:"primary",children:"Hover or Focus Me"})})})},he=[{label:"CPU",detail:"Core temp: 71°C"},{label:"MEM",detail:"Neural cache: 12.4 / 16 GB"},{label:"NET",detail:"Uplink latency: 12ms"},{label:"GPU",detail:"Render cores: 98% load"},{label:"PWR",detail:"Fusion cell: 64%"},{label:"ICE",detail:"Intrusion countermeasures: armed"}],P={args:{open:void 0,delay:50,glow:!1,size:"sm",variant:"primary"},parameters:{docs:{description:{story:"A dense row of non-focusable labels with `delay={50}` and `glow={false}`. Hover across the row, or on a touch device tap a label to open its tooltip, tap it again or tap elsewhere to close."}}},render:a=>e.jsx("div",{className:"p-16",children:e.jsx("div",{className:"flex gap-2 font-mono text-sm text-muted",children:he.map(({label:u,detail:d})=>e.jsx(t,{...a,content:d,children:e.jsx("span",{className:"px-2 py-1 border border-border-default rounded-sm cursor-default",children:u})},u))})})},z={render:()=>e.jsxs("div",{className:"flex flex-col gap-16 p-16 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Placements"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-center",children:[e.jsx(t,{content:"Top placement",placement:"top",open:!0,children:e.jsx(n,{variant:"primary",children:"Top"})}),e.jsx(t,{content:"Bottom placement",placement:"bottom",open:!0,children:e.jsx(n,{variant:"primary",children:"Bottom"})}),e.jsx(t,{content:"Left placement",placement:"left",open:!0,children:e.jsx(n,{variant:"primary",children:"Left"})}),e.jsx(t,{content:"Right placement",placement:"right",open:!0,children:e.jsx(n,{variant:"primary",children:"Right"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Variants"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-center",children:[e.jsx(t,{content:"Primary variant",variant:"primary",open:!0,children:e.jsx(s,{variant:"primary",children:"Primary"})}),e.jsx(t,{content:"Secondary variant",variant:"secondary",open:!0,children:e.jsx(s,{variant:"secondary",children:"Secondary"})}),e.jsx(t,{content:"Accent variant",variant:"accent",open:!0,children:e.jsx(s,{variant:"accent",children:"Accent"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Quiet (glow off)"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-center",children:[e.jsx(t,{content:"Primary, no glow",variant:"primary",glow:!1,open:!0,children:e.jsx(s,{variant:"primary",children:"Primary"})}),e.jsx(t,{content:"Secondary, no glow",variant:"secondary",glow:!1,open:!0,children:e.jsx(s,{variant:"secondary",children:"Secondary"})}),e.jsx(t,{content:"Accent, no glow",variant:"accent",glow:!1,open:!0,children:e.jsx(s,{variant:"accent",children:"Accent"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Sizes"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-center",children:[e.jsx(t,{content:"Small",size:"sm",open:!0,children:e.jsx(n,{size:"sm",children:"SM"})}),e.jsx(t,{content:"Medium",size:"md",open:!0,children:e.jsx(n,{size:"md",children:"MD"})}),e.jsx(t,{content:"Large",size:"lg",open:!0,children:e.jsx(n,{size:"lg",children:"LG"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Disabled"}),e.jsx("div",{className:"flex gap-16 flex-wrap items-center",children:e.jsx(t,{content:"You should never see this.",disabled:!0,children:e.jsx(n,{variant:"ghost",children:"No Tooltip"})})})]})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    variant: 'primary'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="primary">Run Diagnostics</Button>
      </Tooltip>
    </div>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    content: 'Executes protocol immediately.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="primary">Execute Protocol</Button>
      </Tooltip>
    </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    content: 'Scans local network for threats.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="secondary">Scan System</Button>
      </Tooltip>
    </div>
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    content: 'Irreversible — proceed with caution.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="error">DANGER</Badge>
      </Tooltip>
    </div>
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    content: 'Neural link established.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="success">ONLINE</Badge>
      </Tooltip>
    </div>
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    content: 'Runs passive diagnostics.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="ghost">Run Diagnostics</Button>
      </Tooltip>
    </div>
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    content: 'Highlights critical systems.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="accent">PRIORITY</Badge>
      </Tooltip>
    </div>
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    placement: {
      base: 'top',
      md: 'right'
    },
    content: 'Signal routed via orbital relay.'
  },
  argTypes: {
    placement: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`placement={{ base: \\'top\\', md: \\'right\\' }}\` — above the trigger on small screens, to its right from \`md\` up. The arrow follows the panel.'
      }
    }
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button variant="secondary">Route Signal</Button>
      </Tooltip>
    </div>
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    glow: false,
    variant: 'secondary',
    content: 'Packet loss: 0.02%'
  },
  parameters: {
    docs: {
      description: {
        story: '\`glow={false}\` keeps the variant-colored border and drops the neon glow.'
      }
    }
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Badge variant="secondary">PKT LOSS</Badge>
      </Tooltip>
    </div>
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    content: 'Compact readout.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button size="sm">Small</Button>
      </Tooltip>
    </div>
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    content: 'Standard readout.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button size="md">Medium</Button>
      </Tooltip>
    </div>
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    content: 'Expanded readout.'
  },
  render: args => <div className="p-16">
      <Tooltip {...args}>
        <Button size="lg">Large</Button>
      </Tooltip>
    </div>
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    // Overrides meta's forced \`open: true\` so every tooltip in the row runs uncontrolled.
    open: undefined,
    delay: 50,
    glow: false,
    size: 'sm',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'A dense row of non-focusable labels with \`delay={50}\` and \`glow={false}\`. Hover across the row, or on a touch device tap a label to open its tooltip, tap it again or tap elsewhere to close.'
      }
    }
  },
  render: args => <div className="p-16">
      <div className="flex gap-2 font-mono text-sm text-muted">
        {DENSE_ROW_READOUTS.map(({
        label,
        detail
      }) => <Tooltip key={label} {...args} content={detail}>
            <span className="px-2 py-1 border border-border-default rounded-sm cursor-default">
              {label}
            </span>
          </Tooltip>)}
      </div>
    </div>
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        <h4 className="text-secondary font-semibold mb-4">Quiet (glow off)</h4>
        <div className="flex gap-16 flex-wrap items-center">
          <Tooltip content="Primary, no glow" variant="primary" glow={false} open>
            <Badge variant="primary">Primary</Badge>
          </Tooltip>
          <Tooltip content="Secondary, no glow" variant="secondary" glow={false} open>
            <Badge variant="secondary">Secondary</Badge>
          </Tooltip>
          <Tooltip content="Accent, no glow" variant="accent" glow={false} open>
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
}`,...z.parameters?.docs?.source}}};const Ne=["Default","Top","Bottom","Left","Right","Secondary","Accent","ResponsivePlacement","Quiet","Small","Medium","Large","Disabled","Interactive","DenseRow","AllVariants"];export{N as Accent,z as AllVariants,x as Bottom,y as Default,P as DenseRow,C as Disabled,D as Interactive,k as Large,T as Left,E as Medium,S as Quiet,B as ResponsivePlacement,w as Right,j as Secondary,R as Small,b as Top,Ne as __namedExportsOrder,je as default};
