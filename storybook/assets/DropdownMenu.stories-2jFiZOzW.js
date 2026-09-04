import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s,e as me}from"./iframe-mP1eHMDB.js";import{g as ue,R as pe}from"./responsive-Cmibuo0E.js";import{c as w}from"./cn-CNMN3A1O.js";import{B as a}from"./Button-aW_SFg-4.js";import"./preload-helper-D9Z9MdNV.js";const Q=r=>typeof r!="function",u=({items:r,trigger:l,align:p="start",size:ee="md",closeOnSelect:te=!0,open:L,onOpenChange:_,disabled:y=!1,ariaLabel:re="Menu",className:se="",menuClassName:ne=""})=>{const[ae,oe]=s.useState(!1),[B,W]=s.useState(!1),[U,V]=s.useState(!1),[ie,le]=s.useState(p==="end"),[I,g]=s.useState(0),M=L!==void 0,d=M?L:ae,K=`dropdown-menu-${s.useId()}`,z=s.useRef(null),F=s.useRef(null),H=s.useRef([]),P=s.useRef(null),h=s.useRef(null),v=s.useRef(null);s.useEffect(()=>()=>{h.current&&clearTimeout(h.current),v.current&&clearTimeout(v.current)},[]);const o=r.map((t,n)=>t.disabled?-1:n).filter(t=>t!==-1),x=s.useCallback(t=>{M||oe(t),_?.(t)},[M,_]),m=s.useCallback(t=>{V(!0),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{x(!1),V(!1),t&&P.current?.focus()},180)},[x]),b=s.useCallback(t=>{W(!0),g(t),x(!0),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>W(!1),30)},[x]),Y=s.useCallback(()=>{y||(d?m(!1):b(o[0]??0))},[y,d,m,b,o]);s.useEffect(()=>{if(!d)return;const t=n=>{z.current&&!z.current.contains(n.target)&&m(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[d,m]),s.useEffect(()=>{if(!d)return;const t=F.current;if(!t)return;const n=t.getBoundingClientRect();le(p==="end"||n.right>window.innerWidth)},[d,p]),s.useEffect(()=>{d&&!B&&H.current[I]?.focus()},[d,B,I]);const $=t=>{t.disabled||(t.onClick?.(),te&&m(!0))},G=t=>{y||(t.key==="ArrowDown"?(t.preventDefault(),b(o[0]??0)):t.key==="ArrowUp"?(t.preventDefault(),b(o[o.length-1]??0)):t.key==="Escape"&&d&&(t.preventDefault(),m(!1)))},de=(t,n)=>{if(o.length===0)return;const f=o.indexOf(n);switch(t.key){case"ArrowDown":{t.preventDefault();const q=(f+1)%o.length;g(o[q]);break}case"ArrowUp":{t.preventDefault();const q=(f-1+o.length)%o.length;g(o[q]);break}case"Home":{t.preventDefault(),g(o[0]);break}case"End":{t.preventDefault(),g(o[o.length-1]);break}case"Enter":case" ":{t.preventDefault(),$(r[n]);break}case"Escape":{t.preventDefault(),m(!0);break}case"Tab":{m(!1);break}}},ce=ue(ee,pe.dropdownMenu),Z={"aria-haspopup":"menu","aria-expanded":d,"aria-controls":K,onClick:Y,onKeyDown:G},J=Q(l)?me.cloneElement(l,{...Z,onClick:t=>{l.props.onClick?.(t),Y()},onKeyDown:t=>{l.props.onKeyDown?.(t),G(t)},"aria-disabled":y||void 0,ref:t=>{P.current=t;const{ref:n}=l;typeof n=="function"?n(t):n&&typeof n=="object"&&(n.current=t)}}):l(Z);return e.jsxs("div",{ref:z,className:w("relative inline-block",se),children:[Q(l)?J:e.jsx("span",{ref:t=>{P.current=t},children:J}),(d||U)&&e.jsx("div",{ref:F,id:K,role:"menu","aria-label":re,"aria-hidden":!d,className:w("absolute z-50 mt-2 min-w-44 overflow-hidden rounded-lg border-2 border-border-default bg-surface shadow-secondary",ie?"right-0":"left-0","transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity",B||U?"pointer-events-none scale-y-0 opacity-0":"pointer-events-auto scale-y-100 opacity-100",ne),children:e.jsx("div",{className:"py-1",children:r.map((t,n)=>e.jsxs("button",{ref:f=>{H.current[n]=f},type:"button",role:"menuitem",disabled:t.disabled,tabIndex:I===n?0:-1,onClick:()=>$(t),onKeyDown:f=>de(f,n),onMouseEnter:()=>!t.disabled&&g(n),className:w("flex w-full items-center gap-2 text-left font-bold outline-none transition-colors duration-200",ce,t.disabled?"cursor-not-allowed text-muted/40":w("cursor-pointer",t.danger?"text-error hover:bg-error hover:text-base focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error/70":"text-default hover:bg-base/70 hover:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary/70")),children:[t.icon,e.jsx("span",{children:t.label})]},`${t.label}-${n}`))})})]})};u.displayName="CyberUI.DropdownMenu";u.__docgenInfo={description:`A cyberpunk-styled dropdown/context menu anchored to a trigger element,
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
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state. When set, DropdownMenu stops managing its own\nopen state and `onOpenChange` becomes the only way to react to\ntrigger clicks, item selection, Escape, and outside clicks."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Fired whenever a trigger click, item selection, Escape, or outside click would change visibility."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the trigger and prevents the menu from opening.",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the menu panel (`aria-label`). @default 'Menu'",defaultValue:{value:"'Menu'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer wrapper.",defaultValue:{value:"''",computed:!1}},menuClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the menu panel.",defaultValue:{value:"''",computed:!1}}}};const i=r=>{const[l,p]=s.useState(!0);return e.jsx(u,{...r,open:l,onOpenChange:p})},c=[{label:"Edit Profile",onClick:()=>{}},{label:"Duplicate Node",onClick:()=>{}},{label:"Revoke Access",danger:!0,onClick:()=>{}}],X=[{label:"Restart Subsystem",onClick:()=>{}},{label:"View Access Logs",onClick:()=>{}},{label:"Firmware Update",disabled:!0,onClick:()=>{}},{label:"Purge Local Cache",danger:!0,onClick:()=>{}}],we={title:"Components/DropdownMenu",component:u,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-styled dropdown/context menu anchored to a trigger element — for row actions, context menus, and command panels attached to a button.\n\n**Usage:**\n\n```tsx\nimport { DropdownMenu, Button } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Row action menu\n<DropdownMenu\n  trigger={<Button variant=\"ghost\" size=\"sm\">⋯</Button>}\n  items={[\n    { label: 'Edit', onClick: handleEdit },\n    { label: 'Duplicate', onClick: handleDuplicate },\n    { label: 'Delete', danger: true, onClick: handleDelete },\n  ]}\n/>\n\n// Controlled, right-aligned\nconst [open, setOpen] = React.useState(false);\n<DropdownMenu\n  open={open}\n  onOpenChange={setOpen}\n  align=\"end\"\n  trigger={<Button variant=\"secondary\">System</Button>}\n  items={systemActions}\n/>\n\n// Render-prop trigger for full control over the anchor element\n<DropdownMenu\n  trigger={(triggerProps) => <button {...triggerProps}>Actions</button>}\n  items={items}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `items` | `DropdownMenuItem[]` | ✅ | - | Actions to render, in order |\n| `trigger` | `ReactElement \\| (props) => ReactElement` | ✅ | - | Element or render prop for the anchor that opens the menu |\n| `align` | `'start' \\| 'end'` | ❌ | `'start'` | Horizontal alignment of the menu panel (auto-flips if it would overflow) |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Item padding/text size (supports responsive values) |\n| `closeOnSelect` | `boolean` | ❌ | `true` | Whether selecting an item closes the menu |\n| `open` | `boolean` | ❌ | - | Controlled visibility |\n| `onOpenChange` | `(open: boolean) => void` | ❌ | - | Fired on trigger click, item selection, Escape, or outside click |\n| `disabled` | `boolean` | ❌ | `false` | Disables the trigger and prevents the menu from opening |\n| `ariaLabel` | `string` | ❌ | `'Menu'` | Accessible label for the menu panel |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer wrapper |\n| `menuClassName` | `string` | ❌ | - | Additional CSS classes for the menu panel |\n\n**Keyboard:** `ArrowDown`/`ArrowUp` on the trigger opens the menu focused on the first/last item. Inside the menu, `ArrowDown`/`ArrowUp` move focus (wrapping), `Home`/`End` jump to the first/last item, `Enter`/`Space` activates the focused item, `Escape` closes and returns focus to the trigger, and clicking outside closes the menu.\n"}}},tags:["autodocs"],argTypes:{align:{control:{type:"select"},options:["start","end"],description:"Horizontal alignment of the menu panel"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Item padding/text size"},closeOnSelect:{control:"boolean",description:"Whether selecting an item closes the menu"},disabled:{control:"boolean",description:"Disables the trigger and prevents the menu from opening"}},args:{items:c}},D={args:{align:"start",size:"md"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(a,{variant:"secondary",children:"Row Actions"})})})},j={args:{align:"start"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(a,{variant:"secondary",children:"Left-Aligned"})})})},S={args:{align:"end"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-end w-96",children:e.jsx(i,{...r,trigger:e.jsx(a,{variant:"secondary",children:"Right-Aligned"})})})},A={args:{size:"sm"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(a,{size:"sm",variant:"secondary",children:"Row Actions"})})})},k={args:{size:"md"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(a,{size:"md",variant:"secondary",children:"Row Actions"})})})},C={args:{size:"lg"},parameters:{layout:"padded"},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(a,{size:"lg",variant:"secondary",children:"Row Actions"})})})},N={args:{disabled:!0,open:!1},render:r=>e.jsx("div",{className:"p-20",children:e.jsx(u,{...r,trigger:e.jsx(a,{variant:"ghost",disabled:!0,children:"Access Denied"})})})},O={args:{items:X},parameters:{layout:"padded",docs:{description:{story:'"Firmware Update" is locked and skipped by keyboard navigation; "Purge Local Cache" is a destructive action styled with the `danger` treatment.'}}},render:r=>e.jsx("div",{className:"min-h-[320px] pt-4 flex items-start justify-center",children:e.jsx(i,{...r,trigger:e.jsx(a,{variant:"secondary",children:"System"})})})},R={args:{items:c},parameters:{docs:{description:{story:"Uncontrolled — click to open, arrow keys to navigate, Enter/Space to select, Escape or an outside click to dismiss."}}},render:r=>e.jsx("div",{className:"p-20",children:e.jsx(u,{...r,trigger:e.jsx(a,{variant:"primary",children:"⋯ Row Actions"})})})},E={parameters:{docs:{description:{story:"Open state lives in the parent — useful for syncing a menu with other UI (e.g. closing it when a modal opens elsewhere)."}}},render:()=>{const r=()=>{const[l,p]=s.useState(!1);return e.jsxs("div",{className:"p-20 flex flex-col gap-3 items-start",children:[e.jsxs("span",{className:"text-xs text-muted",children:["Menu is ",l?"OPEN":"CLOSED"]}),e.jsx(u,{open:l,onOpenChange:p,items:c,trigger:e.jsx(a,{variant:"secondary",children:"Neural Link"})})]})};return e.jsx(r,{})}},T={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-col gap-64 p-16 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Alignment"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-start",children:[e.jsx(i,{items:c,align:"start",trigger:e.jsx(a,{variant:"secondary",children:"Start"})}),e.jsx(i,{items:c,align:"end",trigger:e.jsx(a,{variant:"secondary",children:"End"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Sizes"}),e.jsxs("div",{className:"flex gap-16 flex-wrap items-start",children:[e.jsx(i,{size:"sm",items:c,trigger:e.jsx(a,{size:"sm",variant:"secondary",children:"SM"})}),e.jsx(i,{size:"md",items:c,trigger:e.jsx(a,{size:"md",variant:"secondary",children:"MD"})}),e.jsx(i,{size:"lg",items:c,trigger:e.jsx(a,{size:"lg",variant:"secondary",children:"LG"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Danger + Disabled Items"}),e.jsx("div",{className:"flex gap-16 flex-wrap items-start",children:e.jsx(i,{items:X,trigger:e.jsx(a,{variant:"secondary",children:"System"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Disabled Trigger"}),e.jsx("div",{className:"flex gap-16 flex-wrap items-start",children:e.jsx(u,{disabled:!0,items:c,trigger:e.jsx(a,{variant:"ghost",disabled:!0,children:"Access Denied"})})})]})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button variant="secondary">Left-Aligned</Button>} />
    </div>
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'end'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-end w-96">
      <OpenDemo {...args} trigger={<Button variant="secondary">Right-Aligned</Button>} />
    </div>
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button size="sm" variant="secondary">Row Actions</Button>} />
    </div>
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button size="md" variant="secondary">Row Actions</Button>} />
    </div>
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div className="min-h-[320px] pt-4 flex items-start justify-center">
      <OpenDemo {...args} trigger={<Button size="lg" variant="secondary">Row Actions</Button>} />
    </div>
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    open: false
  },
  render: args => <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="ghost" disabled>Access Denied</Button>} />
    </div>
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    // Runs uncontrolled (no \`open\` in meta.args anymore) — click the
    // trigger below, or focus it and press ArrowDown/ArrowUp/Enter/Escape.
    items: ROW_ACTIONS
  },
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled — click to open, arrow keys to navigate, Enter/Space to select, Escape or an outside click to dismiss.'
      }
    }
  },
  render: args => <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="primary">⋯ Row Actions</Button>} />
    </div>
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const De=["Default","AlignStart","AlignEnd","Small","Medium","Large","Disabled","WithDangerAndDisabledItems","Interactive","ControlledDemo","AllVariants"];export{S as AlignEnd,j as AlignStart,T as AllVariants,E as ControlledDemo,D as Default,N as Disabled,R as Interactive,C as Large,k as Medium,A as Small,O as WithDangerAndDisabledItems,De as __namedExportsOrder,we as default};
