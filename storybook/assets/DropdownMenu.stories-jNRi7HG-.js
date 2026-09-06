import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o,e as le}from"./iframe-CJzUki5p.js";import{g as de,R as ce}from"./responsive-v9ihdETy.js";import{c as x}from"./cn-CNMN3A1O.js";import{u as me}from"./useDialogBehavior-CREKUwcM.js";import{B as n}from"./Button-B-qCsdq8.js";import"./preload-helper-D9Z9MdNV.js";const $=r=>typeof r!="function",m=({items:r,trigger:l,align:p="start",size:Z="md",closeOnSelect:J=!0,open:P,onOpenChange:q,disabled:f=!1,ariaLabel:Q="Menu",className:X="",menuClassName:ee=""})=>{const[te,re]=o.useState(!1),[se,ne]=o.useState(p==="end"),[E,u]=o.useState(0),B=P!==void 0,d=B?P:te,_=`dropdown-menu-${o.useId()}`,L=o.useRef(null),W=o.useRef([]),I=o.useRef(null),a=r.map((t,s)=>t.disabled?-1:s).filter(t=>t!==-1),T=o.useCallback(t=>{B||re(t),q?.(t)},[B,q]),{isOpening:z,isClosing:h,open:U,close:v,containerRef:ae}=me(d,{closeDuration:180,openDuration:30,onClose:()=>T(!1),getRestoreFocusTarget:()=>I.current}),y=o.useCallback(t=>{u(t),T(!0),U()},[T,U]),V=o.useCallback(()=>{f||(d&&!h?v():y(a[0]??0))},[f,d,h,v,y,a]);o.useEffect(()=>{if(!d)return;const t=L.current;if(!t)return;const s=t.getBoundingClientRect();ne(p==="end"||s.right>window.innerWidth)},[d,p]),o.useEffect(()=>{d&&!z&&W.current[E]?.focus()},[d,z,E]);const K=t=>{t.disabled||(t.onClick?.(),J&&v())},F=t=>{f||(t.key==="ArrowDown"?(t.preventDefault(),y(a[0]??0)):t.key==="ArrowUp"&&(t.preventDefault(),y(a[a.length-1]??0)))},oe=(t,s)=>{if(a.length===0)return;const g=a.indexOf(s);switch(t.key){case"ArrowDown":{t.preventDefault();const M=(g+1)%a.length;u(a[M]);break}case"ArrowUp":{t.preventDefault();const M=(g-1+a.length)%a.length;u(a[M]);break}case"Home":{t.preventDefault(),u(a[0]);break}case"End":{t.preventDefault(),u(a[a.length-1]);break}case"Enter":case" ":{t.preventDefault(),K(r[s]);break}case"Tab":{v();break}}},ie=de(Z,ce.dropdownMenu),H={"aria-haspopup":"menu","aria-expanded":d,"aria-controls":_,onClick:V,onKeyDown:F},Y=$(l)?le.cloneElement(l,{...H,onClick:t=>{l.props.onClick?.(t),V()},onKeyDown:t=>{l.props.onKeyDown?.(t),F(t)},"aria-disabled":f||void 0,ref:t=>{I.current=t;const{ref:s}=l;typeof s=="function"?s(t):s&&typeof s=="object"&&(s.current=t)}}):l(H);return e.jsxs("div",{ref:ae,className:x("relative inline-block",X),children:[$(l)?Y:e.jsx("span",{ref:t=>{I.current=t},children:Y}),(d||h)&&e.jsx("div",{ref:L,id:_,role:"menu","aria-label":Q,"aria-hidden":!d,className:x("absolute z-50 mt-2 min-w-44 overflow-hidden rounded-lg border-2 border-border-default bg-surface shadow-secondary",se?"right-0":"left-0","transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity",z||h?"pointer-events-none scale-y-0 opacity-0":"pointer-events-auto scale-y-100 opacity-100",ee),children:e.jsx("div",{className:"py-1",children:r.map((t,s)=>e.jsxs("button",{ref:g=>{W.current[s]=g},type:"button",role:"menuitem",disabled:t.disabled,tabIndex:E===s?0:-1,onClick:()=>K(t),onKeyDown:g=>oe(g,s),onMouseEnter:()=>!t.disabled&&u(s),className:x("flex w-full items-center gap-2 text-left font-bold outline-none transition-colors duration-200",ie,t.disabled?"cursor-not-allowed text-muted/40":x("cursor-pointer",t.danger?"text-error hover:bg-error hover:text-inverse focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error/70":"text-default hover:bg-base/70 hover:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary/70")),children:[t.icon,e.jsx("span",{children:t.label})]},`${t.label}-${s}`))})})]})};m.displayName="CyberUI.DropdownMenu";m.__docgenInfo={description:`A cyberpunk-styled dropdown/context menu anchored to a trigger element,
reusing TabNavigation's dropdown anchor+menu pattern (click-outside close,
viewport-aware alignment, staged open/close transition) with full arrow-key
navigation and single/danger item styling.

@example
// Row action menu
<DropdownMenu
  trigger={<Button variant="ghost" size="sm">⋯</Button>}
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Duplicate', onClick: handleDuplicate },
    { label: 'Delete', danger: true, onClick: handleDelete },
  ]}
/>

@example
// Controlled, right-aligned
<DropdownMenu
  open={open}
  onOpenChange={setOpen}
  align="end"
  trigger={<Button variant="secondary">System</Button>}
  items={systemActions}
/>`,methods:[],displayName:"CyberUI.DropdownMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownMenuItem"}],raw:"DropdownMenuItem[]"},description:"Actions to render, in order."},trigger:{required:!0,tsType:{name:"union",raw:"React.ReactElement | ((triggerProps: DropdownMenuTriggerProps) => React.ReactElement)",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"unknown"}]},description:`The trigger that opens the menu. Pass a single React element (e.g. a
\`Button\`) to have it cloned with the required \`onClick\`/\`aria-*\`
wiring, or a render prop for full control over how those props are
applied. If the element already has its own \`onClick\`/\`onKeyDown\`,
they're called first, before the dropdown's own handling runs.

@example
// Element trigger
<DropdownMenu trigger={<Button variant="secondary">Actions</Button>} items={items} />

@example
// Render-prop trigger
<DropdownMenu
  trigger={(triggerProps) => <button {...triggerProps}>Actions</button>}
  items={items}
/>`},align:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`Horizontal alignment of the menu panel relative to the trigger.
Automatically flips to \`end\` if the panel would overflow the right
edge of the viewport when opened.
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Padding and text size of each menu item. Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:`Whether selecting an item closes the menu.
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state. When set, DropdownMenu stops managing its own\nopen state and `onOpenChange` becomes the only way to react to\ntrigger clicks, item selection, Escape, and outside clicks."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Fired whenever a trigger click, item selection, Escape, or outside click would change visibility."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the trigger and prevents the menu from opening.",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the menu panel (`aria-label`). @default 'Menu'",defaultValue:{value:"'Menu'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer wrapper.",defaultValue:{value:"''",computed:!1}},menuClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the menu panel.",defaultValue:{value:"''",computed:!1}}}};const i=r=>{const[l,p]=o.useState(!0);return e.jsx(m,{...r,open:l,onOpenChange:p})},c=[{label:"Edit Profile",onClick:()=>{}},{label:"Duplicate Node",onClick:()=>{}},{label:"Revoke Access",danger:!0,onClick:()=>{}}],G=[{label:"Restart Subsystem",onClick:()=>{}},{label:"View Access Logs",onClick:()=>{}},{label:"Firmware Update",disabled:!0,onClick:()=>{}},{label:"Purge Local Cache",danger:!0,onClick:()=>{}}],be={title:"Components/DropdownMenu",component:m,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-styled dropdown/context menu anchored to a trigger element — for row actions, context menus, and command panels attached to a button.\n\n**Usage:**\n\n```tsx\nimport { DropdownMenu, Button } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Row action menu\n<DropdownMenu\n  trigger={<Button variant=\"ghost\" size=\"sm\">⋯</Button>}\n  items={[\n    { label: 'Edit', onClick: handleEdit },\n    { label: 'Duplicate', onClick: handleDuplicate },\n    { label: 'Delete', danger: true, onClick: handleDelete },\n  ]}\n/>\n\n// Controlled, right-aligned\nconst [open, setOpen] = React.useState(false);\n<DropdownMenu\n  open={open}\n  onOpenChange={setOpen}\n  align=\"end\"\n  trigger={<Button variant=\"secondary\">System</Button>}\n  items={systemActions}\n/>\n\n// Render-prop trigger for full control over the anchor element\n<DropdownMenu\n  trigger={(triggerProps) => <button {...triggerProps}>Actions</button>}\n  items={items}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `items` | `DropdownMenuItem[]` | ✅ | - | Actions to render, in order |\n| `trigger` | `ReactElement \\| (props) => ReactElement` | ✅ | - | Element or render prop for the anchor that opens the menu |\n| `align` | `'start' \\| 'end'` | ❌ | `'start'` | Horizontal alignment of the menu panel (auto-flips if it would overflow) |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Item padding/text size (supports responsive values) |\n| `closeOnSelect` | `boolean` | ❌ | `true` | Whether selecting an item closes the menu |\n| `open` | `boolean` | ❌ | - | Controlled visibility |\n| `onOpenChange` | `(open: boolean) => void` | ❌ | - | Fired on trigger click, item selection, Escape, or outside click |\n| `disabled` | `boolean` | ❌ | `false` | Disables the trigger and prevents the menu from opening |\n| `ariaLabel` | `string` | ❌ | `'Menu'` | Accessible label for the menu panel |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer wrapper |\n| `menuClassName` | `string` | ❌ | - | Additional CSS classes for the menu panel |\n\n**Keyboard:** `ArrowDown`/`ArrowUp` on the trigger opens the menu focused on the first/last item. Inside the menu, `ArrowDown`/`ArrowUp` move focus (wrapping), `Home`/`End` jump to the first/last item, `Enter`/`Space` activates the focused item, `Escape` closes and returns focus to the trigger, and clicking outside closes the menu.\n"}}},tags:["autodocs"],argTypes:{align:{control:{type:"select"},options:["start","end"],description:"Horizontal alignment of the menu panel"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Item padding/text size"},closeOnSelect:{control:"boolean",description:"Whether selecting an item closes the menu"},disabled:{control:"boolean",description:"Disables the trigger and prevents the menu from opening"}},args:{items:c}},b={args:{align:"start",size:"md"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(n,{variant:"secondary",children:"Row Actions"})})})},w={args:{align:"start"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(n,{variant:"secondary",children:"Left-Aligned"})})})},D={args:{align:"end"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-end w-96",children:e.jsx(i,{...r,trigger:e.jsx(n,{variant:"secondary",children:"Right-Aligned"})})})},j={args:{size:"sm"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(n,{size:"sm",variant:"secondary",children:"Row Actions"})})})},S={args:{size:"md"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(n,{size:"md",variant:"secondary",children:"Row Actions"})})})},A={args:{size:"lg"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(n,{size:"lg",variant:"secondary",children:"Row Actions"})})})},k={args:{disabled:!0,open:!1},render:r=>e.jsx("div",{className:"p-20",children:e.jsx(m,{...r,trigger:e.jsx(n,{variant:"ghost",disabled:!0,children:"Access Denied"})})})},C={args:{items:G},parameters:{layout:"padded",docs:{description:{story:'"Firmware Update" is locked and skipped by keyboard navigation; "Purge Local Cache" is a destructive action styled with the `danger` treatment.'}}},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(n,{variant:"secondary",children:"System"})})})},N={args:{items:c},parameters:{docs:{description:{story:"Uncontrolled — click to open, arrow keys to navigate, Enter/Space to select, Escape or an outside click to dismiss. Escape restores focus to the trigger. Outside click does not."}}},render:r=>e.jsx("div",{className:"p-20",children:e.jsx(m,{...r,trigger:e.jsx(n,{variant:"primary",children:"⋯ Row Actions"})})})},O={parameters:{docs:{description:{story:"Open state lives in the parent — useful for syncing a menu with other UI (e.g. closing it when a modal opens elsewhere)."}}},render:()=>{const r=()=>{const[l,p]=o.useState(!1);return e.jsxs("div",{className:"p-20 flex flex-col gap-3 items-start",children:[e.jsxs("span",{className:"text-xs text-muted",children:["Menu is ",l?"OPEN":"CLOSED"]}),e.jsx(m,{open:l,onOpenChange:p,items:c,trigger:e.jsx(n,{variant:"secondary",children:"Neural Link"})})]})};return e.jsx(r,{})}},R={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-col gap-64 p-16 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Alignment"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-start",children:[e.jsx(i,{items:c,align:"start",trigger:e.jsx(n,{variant:"secondary",children:"Start"})}),e.jsx(i,{items:c,align:"end",trigger:e.jsx(n,{variant:"secondary",children:"End"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Sizes"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-start",children:[e.jsx(i,{size:"sm",items:c,trigger:e.jsx(n,{size:"sm",variant:"secondary",children:"SM"})}),e.jsx(i,{size:"md",items:c,trigger:e.jsx(n,{size:"md",variant:"secondary",children:"MD"})}),e.jsx(i,{size:"lg",items:c,trigger:e.jsx(n,{size:"lg",variant:"secondary",children:"LG"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Danger + Disabled Items"}),e.jsx("div",{className:"flex gap-16 flex-wrap items-start",children:e.jsx(i,{items:G,trigger:e.jsx(n,{variant:"secondary",children:"System"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Disabled Trigger"}),e.jsx("div",{className:"flex gap-16 flex-wrap items-start",children:e.jsx(m,{disabled:!0,items:c,trigger:e.jsx(n,{variant:"ghost",disabled:!0,children:"Access Denied"})})})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start',
    size: 'md'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button variant="secondary">Row Actions</Button>} />
    </div>
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button variant="secondary">Left-Aligned</Button>} />
    </div>
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'end'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-end w-96">
      <OpenDemo {...args} trigger={<Button variant="secondary">Right-Aligned</Button>} />
    </div>
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button size="sm" variant="secondary">Row Actions</Button>} />
    </div>
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button size="md" variant="secondary">Row Actions</Button>} />
    </div>
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button size="lg" variant="secondary">Row Actions</Button>} />
    </div>
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    open: false
  },
  render: args => <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="ghost" disabled>Access Denied</Button>} />
    </div>
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: SYSTEM_ACTIONS
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '"Firmware Update" is locked and skipped by keyboard navigation; "Purge Local Cache" is a destructive action styled with the \`danger\` treatment.'
      }
    }
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button variant="secondary">System</Button>} />
    </div>
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    // Runs uncontrolled (no \`open\` in meta.args anymore) — click the
    // trigger below, or focus it and press ArrowDown/ArrowUp/Enter/Escape.
    items: ROW_ACTIONS
  },
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled — click to open, arrow keys to navigate, Enter/Space to select, Escape or an outside click to dismiss. Escape restores focus to the trigger. Outside click does not.'
      }
    }
  },
  render: args => <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="primary">⋯ Row Actions</Button>} />
    </div>
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open state lives in the parent — useful for syncing a menu with other UI (e.g. closing it when a modal opens elsewhere).'
      }
    }
  },
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return <div className="p-20 flex flex-col gap-3 items-start">
          <span className="text-xs text-muted">Menu is {open ? 'OPEN' : 'CLOSED'}</span>
          <DropdownMenu open={open} onOpenChange={setOpen} items={ROW_ACTIONS} trigger={<Button variant="secondary">Neural Link</Button>} />
        </div>;
    };
    return <Demo />;
  }
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="flex flex-col gap-64 p-16 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-4">Alignment</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <OpenDemo items={ROW_ACTIONS} align="start" trigger={<Button variant="secondary">Start</Button>} />
          <OpenDemo items={ROW_ACTIONS} align="end" trigger={<Button variant="secondary">End</Button>} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Sizes</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <OpenDemo size="sm" items={ROW_ACTIONS} trigger={<Button size="sm" variant="secondary">SM</Button>} />
          <OpenDemo size="md" items={ROW_ACTIONS} trigger={<Button size="md" variant="secondary">MD</Button>} />
          <OpenDemo size="lg" items={ROW_ACTIONS} trigger={<Button size="lg" variant="secondary">LG</Button>} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Danger + Disabled Items</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <OpenDemo items={SYSTEM_ACTIONS} trigger={<Button variant="secondary">System</Button>} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Disabled Trigger</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <DropdownMenu disabled items={ROW_ACTIONS} trigger={<Button variant="ghost" disabled>Access Denied</Button>} />
        </div>
      </div>
    </div>
}`,...R.parameters?.docs?.source}}};const we=["Default","AlignStart","AlignEnd","Small","Medium","Large","Disabled","WithDangerAndDisabledItems","Interactive","ControlledDemo","AllVariants"];export{D as AlignEnd,w as AlignStart,R as AllVariants,O as ControlledDemo,b as Default,k as Disabled,N as Interactive,A as Large,S as Medium,j as Small,C as WithDangerAndDisabledItems,we as __namedExportsOrder,be as default};
