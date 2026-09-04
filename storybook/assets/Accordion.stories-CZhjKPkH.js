import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CqxhrQKZ.js";import{g as Y,R as B}from"./responsive-DGbu8dPm.js";import{c as p}from"./cn-CNMN3A1O.js";import"./preload-helper-D9Z9MdNV.js";const n=({items:a,mode:g="single",defaultOpenIds:d,openIds:v,onOpenIdsChange:T,size:C="md",className:D=""})=>{const z=u.useId(),[_,q]=u.useState(d??[]),j=v!==void 0,c=j?v:_,k=u.useRef([]),M=a.map((s,l)=>({...s,resolvedId:s.id??`${z}-item-${l}`})),R=u.useCallback(s=>{const l=c.includes(s),r=g==="multiple"?l?c.filter(i=>i!==s):[...c,s]:l?[]:[s];j||q(r),T?.(r)},[g,c,j,T]),h=s=>{k.current[s]?.focus()},P=(s,l)=>{const r=M.map((t,m)=>t.disabled?-1:m).filter(t=>t!==-1);if(r.length===0)return;const i=r.indexOf(l);switch(s.key){case"ArrowDown":{s.preventDefault();const t=(i+1)%r.length;h(r[t]);break}case"ArrowUp":{s.preventDefault();const t=(i-1+r.length)%r.length;h(r[t]);break}case"Home":{s.preventDefault(),h(r[0]);break}case"End":{s.preventDefault(),h(r[r.length-1]);break}}},L=Y(C,B.accordion);return e.jsx("div",{className:p("flex flex-col gap-3",D),children:M.map((s,l)=>{const r=c.includes(s.resolvedId),i=`${s.resolvedId}-header`,t=`${s.resolvedId}-panel`;return e.jsxs("div",{className:p("rounded-lg border bg-surface transition-colors duration-300 overflow-hidden",r?"border-accent shadow-md-accent":"border-border-default"),children:[e.jsx("h3",{className:"m-0",children:e.jsxs("button",{ref:m=>{k.current[l]=m},type:"button",id:i,"aria-expanded":r,"aria-controls":t,disabled:s.disabled,onClick:()=>R(s.resolvedId),onKeyDown:m=>P(m,l),className:p("flex w-full items-center justify-between gap-3 text-left font-bold transition-colors duration-200 outline-none",L,s.disabled?"text-muted/40 cursor-not-allowed":p("cursor-pointer hover:text-secondary",r?"text-secondary":"text-default")),children:[e.jsx("span",{children:s.title}),e.jsx("span",{"aria-hidden":"true",className:p("shrink-0 text-sm transition-transform duration-300",r?"rotate-180 text-accent":"rotate-0 text-muted"),children:"▾"})]})}),e.jsx("div",{className:"grid transition-[grid-template-rows] duration-300 ease-out",style:{gridTemplateRows:r?"1fr":"0fr"},children:e.jsx("div",{className:"overflow-hidden",children:e.jsx("div",{id:t,role:"region","aria-labelledby":i,"aria-hidden":!r,inert:!r,className:"px-4 pb-4 text-sm text-muted",children:s.content})})})]},s.resolvedId)})})};n.displayName="CyberUI.Accordion";n.__docgenInfo={description:`A cyberpunk-styled collapsible section list for FAQs, settings panels,
and other grouped content. Expanded panels get a neon accent border and
a rotating glyph indicator; height transitions are pure CSS (no JS
measuring).

@example
// Single-open FAQ list (uncontrolled)
<Accordion
  items={[
    { title: 'What is a neural link?', content: 'A direct interface between mind and machine.' },
    { title: 'Is it reversible?', content: 'No. Proceed with caution.' },
  ]}
/>

@example
// Multiple panels open at once, controlled
<Accordion
  mode="multiple"
  openIds={openIds}
  onOpenIdsChange={setOpenIds}
  items={sections}
/>`,methods:[],displayName:"CyberUI.Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:"Sections to render, in order."},mode:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"Whether one panel or several panels can be open at once.\n- `single`: opening a panel closes any other open panel.\n- `multiple`: panels open and close independently.\n@default 'single'",defaultValue:{value:"'single'",computed:!1}},defaultOpenIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Initial open item id(s) for uncontrolled usage. Ignored when `openIds`\nis provided."},openIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled open item id(s). When set, the Accordion stops managing its\nown open state and `onOpenIdsChange` becomes the only way to react to\nheader toggles."},onOpenIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(openIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"openIds"}],return:{name:"void"}}},description:"Fired whenever a header is toggled, with the resulting open id(s) —\na single-element (or empty) array in `single` mode, any length in\n`multiple` mode."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Header padding and text size. Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer container.",defaultValue:{value:"''",computed:!1}}}};const E=[{id:"neural-link",title:"What is a neural link?",content:"A direct interface between mind and machine, bypassing conventional I/O entirely. Latency: sub-millisecond."},{id:"reversible",title:"Is the procedure reversible?",content:"No. Once the handshake completes, the implant is permanently bonded to your neural pathways. Proceed with caution."},{id:"compat",title:"Is it compatible with legacy augments?",content:"Most Gen-3 augments and later. Gen-1/Gen-2 hardware requires a bridge adapter, sold separately."}],o=[{id:"power",title:"Power Grid",content:"Fusion core at 94% capacity. All subsystems nominal."},{id:"network",title:"Network Uplink",content:"Encrypted tunnel active. 3 relay nodes online, 0 dropped packets."},{id:"security",title:"Security Protocols",content:"Intrusion countermeasures armed. Last breach attempt: 14 days ago."}],O=[{id:"access",title:"Access Logs",content:"Full audit trail of every neural handshake this cycle."},{id:"blackbox",title:"Black Box Recorder",content:"Restricted — requires Level 5 clearance.",disabled:!0},{id:"diag",title:"Diagnostics",content:"Run a full-spectrum system self-test."}],U={title:"Components/Accordion",component:n,parameters:{layout:"padded",docs:{description:{component:"A cyberpunk-styled collapsible section list for FAQs, settings panels, and grouped content.\n\n**Usage:**\n\n```tsx\nimport { Accordion } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Basic single-open list\n<Accordion\n  items={[\n    { title: 'What is a neural link?', content: 'A direct interface between mind and machine.' },\n    { title: 'Is it reversible?', content: 'No. Proceed with caution.' },\n  ]}\n/>\n\n// Multiple panels open at once\n<Accordion mode=\"multiple\" items={systemItems} />\n\n// Controlled\nconst [openIds, setOpenIds] = useState<string[]>(['neural-link']);\n<Accordion items={faqItems} openIds={openIds} onOpenIdsChange={setOpenIds} />\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `items` | `AccordionItem[]` | ✅ | - | Sections to render, in order |\n| `mode` | `'single' \\| 'multiple'` | ❌ | `'single'` | Whether one or several panels can be open at once |\n| `defaultOpenIds` | `string[]` | ❌ | `[]` | Initial open item id(s), uncontrolled |\n| `openIds` | `string[]` | ❌ | - | Controlled open item id(s) |\n| `onOpenIdsChange` | `(openIds: string[]) => void` | ❌ | - | Fired on header toggle |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Header padding/text size (supports responsive values) |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer container |\n\n**Keyboard:** `ArrowDown`/`ArrowUp` move focus between headers, `Home`/`End` jump to the first/last header, `Enter`/`Space` toggles the focused header.\n"}}},tags:["autodocs"],argTypes:{mode:{control:{type:"select"},options:["single","multiple"],description:"Whether one or several panels can be open at once"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Header padding/text size"}},args:{items:E}},x={args:{mode:"single",size:"md"},render:a=>e.jsx("div",{className:"w-96",children:e.jsx(n,{...a})})},f={args:{mode:"single",items:E,defaultOpenIds:["neural-link"]},render:a=>e.jsx("div",{className:"w-96",children:e.jsx(n,{...a})})},y={args:{mode:"multiple",items:o,defaultOpenIds:["power","network"]},render:a=>e.jsx("div",{className:"w-96",children:e.jsx(n,{...a})})},b={args:{size:"sm",items:o},render:a=>e.jsx("div",{className:"w-96",children:e.jsx(n,{...a})})},I={args:{size:"md",items:o},render:a=>e.jsx("div",{className:"w-96",children:e.jsx(n,{...a})})},w={args:{size:"lg",items:o},render:a=>e.jsx("div",{className:"w-96",children:e.jsx(n,{...a})})},S={args:{items:O},parameters:{docs:{description:{story:'"Black Box Recorder" requires Level 5 clearance — its header is disabled and skipped by arrow-key navigation.'}}},render:a=>e.jsx("div",{className:"w-96",children:e.jsx(n,{...a})})},A={parameters:{docs:{description:{story:'Open state lives in the parent — useful for syncing with a "Collapse All"/"Expand All" control.'}}},render:()=>{const a=()=>{const[g,d]=u.useState(["power"]);return e.jsxs("div",{className:"w-96 flex flex-col gap-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",className:"text-xs px-3 py-1 rounded border border-secondary text-secondary hover:bg-secondary/10 cursor-pointer",onClick:()=>d(o.map(v=>v.id)),children:"Expand All"}),e.jsx("button",{type:"button",className:"text-xs px-3 py-1 rounded border border-border-default text-muted hover:text-secondary cursor-pointer",onClick:()=>d([]),children:"Collapse All"})]}),e.jsx(n,{mode:"multiple",items:o,openIds:g,onOpenIdsChange:d})]})};return e.jsx(a,{})}},N={render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-4 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Single mode"}),e.jsx("div",{className:"w-96",children:e.jsx(n,{mode:"single",items:E,defaultOpenIds:["neural-link"]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Multiple mode"}),e.jsx("div",{className:"w-96",children:e.jsx(n,{mode:"multiple",items:o,defaultOpenIds:["power","security"]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"w-96",children:e.jsx(n,{size:"sm",items:o.slice(0,1),defaultOpenIds:["power"]})}),e.jsx("div",{className:"w-96",children:e.jsx(n,{size:"md",items:o.slice(0,1),defaultOpenIds:["power"]})}),e.jsx("div",{className:"w-96",children:e.jsx(n,{size:"lg",items:o.slice(0,1),defaultOpenIds:["power"]})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Disabled item"}),e.jsx("div",{className:"w-96",children:e.jsx(n,{items:O})})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    size: 'md'
  },
  render: args => <div className="w-96">
      <Accordion {...args} />
    </div>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    items: FAQ_ITEMS,
    defaultOpenIds: ['neural-link']
  },
  render: args => <div className="w-96">
      <Accordion {...args} />
    </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'multiple',
    items: SYSTEM_ITEMS,
    defaultOpenIds: ['power', 'network']
  },
  render: args => <div className="w-96">
      <Accordion {...args} />
    </div>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    items: SYSTEM_ITEMS
  },
  render: args => <div className="w-96">
      <Accordion {...args} />
    </div>
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    items: SYSTEM_ITEMS
  },
  render: args => <div className="w-96">
      <Accordion {...args} />
    </div>
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    items: SYSTEM_ITEMS
  },
  render: args => <div className="w-96">
      <Accordion {...args} />
    </div>
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: DISABLED_ITEMS
  },
  parameters: {
    docs: {
      description: {
        story: '"Black Box Recorder" requires Level 5 clearance — its header is disabled and skipped by arrow-key navigation.'
      }
    }
  },
  render: args => <div className="w-96">
      <Accordion {...args} />
    </div>
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open state lives in the parent — useful for syncing with a "Collapse All"/"Expand All" control.'
      }
    }
  },
  render: () => {
    const ControlledDemo = () => {
      const [openIds, setOpenIds] = useState<string[]>(['power']);
      return <div className="w-96 flex flex-col gap-3">
          <div className="flex gap-2">
            <button type="button" className="text-xs px-3 py-1 rounded border border-secondary text-secondary hover:bg-secondary/10 cursor-pointer" onClick={() => setOpenIds(SYSTEM_ITEMS.map(item => item.id as string))}>
              Expand All
            </button>
            <button type="button" className="text-xs px-3 py-1 rounded border border-border-default text-muted hover:text-secondary cursor-pointer" onClick={() => setOpenIds([])}>
              Collapse All
            </button>
          </div>
          <Accordion mode="multiple" items={SYSTEM_ITEMS} openIds={openIds} onOpenIdsChange={setOpenIds} />
        </div>;
    };
    return <ControlledDemo />;
  }
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10 p-4 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Single mode</h4>
        <div className="w-96">
          <Accordion mode="single" items={FAQ_ITEMS} defaultOpenIds={['neural-link']} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Multiple mode</h4>
        <div className="w-96">
          <Accordion mode="multiple" items={SYSTEM_ITEMS} defaultOpenIds={['power', 'security']} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <div className="w-96">
            <Accordion size="sm" items={SYSTEM_ITEMS.slice(0, 1)} defaultOpenIds={['power']} />
          </div>
          <div className="w-96">
            <Accordion size="md" items={SYSTEM_ITEMS.slice(0, 1)} defaultOpenIds={['power']} />
          </div>
          <div className="w-96">
            <Accordion size="lg" items={SYSTEM_ITEMS.slice(0, 1)} defaultOpenIds={['power']} />
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled item</h4>
        <div className="w-96">
          <Accordion items={DISABLED_ITEMS} />
        </div>
      </div>
    </div>
}`,...N.parameters?.docs?.source}}};const G=["Default","SingleMode","MultipleMode","Small","Medium","Large","Disabled","Controlled","AllVariants"];export{N as AllVariants,A as Controlled,x as Default,S as Disabled,w as Large,I as Medium,y as MultipleMode,f as SingleMode,b as Small,G as __namedExportsOrder,U as default};
