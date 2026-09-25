import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CT3GTHqC.js";import{g as S,R as k}from"./responsive-Cvf1DXTs.js";import{c as o}from"./cn-CNMN3A1O.js";import{B as P}from"./Badge-CIJrn7EM.js";import{B as F}from"./Button-UFgybE27.js";import"./preload-helper-D9Z9MdNV.js";const N={left:"text-left",center:"text-center",right:"text-right"};function s({columns:t,data:T,getRowId:A,variant:E="default",size:O="md",caption:w,ariaLabel:C,emptyMessage:R="No data available.",onRowClick:n,className:j=""}){const c=S(O,k.table),_=(a,r,x)=>{!n||a.target!==a.currentTarget||(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n(r,x))};return e.jsx("div",{className:o("overflow-x-auto rounded-xl border border-border-default bg-base",j),children:e.jsxs("table",{className:"w-full border-collapse","aria-label":w?void 0:C,children:[w&&e.jsx("caption",{className:o("caption-top text-left text-secondary font-semibold",c),children:w}),e.jsx("thead",{children:e.jsx("tr",{className:"border-b-2 border-accent bg-surface",children:t.map(a=>e.jsx("th",{scope:"col",style:a.width?{width:a.width}:void 0,className:o("font-semibold text-secondary",c,N[a.align??"left"]),children:a.header},a.key))})}),e.jsx("tbody",{children:T.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t.length,className:o("bg-no-signal text-center align-middle text-muted",c,S(O,k.tableEmpty)),children:R})}):T.map((a,r)=>{const x=A?A(a,r):r,z=E==="striped"&&r%2===1;return e.jsx("tr",{className:o("border-b border-border-default last:border-b-0 transition-colors duration-200","hover:bg-surface hover:shadow-[inset_0_0_0_1px_var(--color-secondary)]",z&&"bg-surface/40",n&&"cursor-pointer focus-visible:outline-none focus-visible:bg-surface focus-visible:shadow-[inset_0_0_0_2px_var(--color-accent)]"),tabIndex:n?0:void 0,onClick:n?()=>n(a,r):void 0,onKeyDown:n?i=>_(i,a,r):void 0,children:t.map(i=>e.jsx("td",{className:o("text-default",c,N[i.align??"left"]),children:i.render?i.render(a,r):a[i.key]},i.key))},x)})})]})})}s.displayName="CyberUI.Table";s.__docgenInfo={description:`A cyberpunk-styled, semantic data table: neon header row, hover-glow rows,
and an optional alternating row tint. Sorting, filtering, pagination, and
virtualization are intentionally out of scope — pair with \`Pagination\` for
paged data.

@example
<Table
  columns={[
    { key: 'callsign', header: 'Callsign' },
    { key: 'status', header: 'Status', align: 'center' },
  ]}
  data={[
    { callsign: 'Ghost', status: 'Online' },
    { callsign: 'Wraith', status: 'Offline' },
  ]}
/>`,methods:[],displayName:"CyberUI.Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`TableColumnBase &
(
  | {
      /** Property read off each row via \`row[key]\`; also the column's unique id. */
      key: RenderableKey<T>;
      render?: undefined;
    }
  | {
      /** Unique id for this column. */
      key: string;
      /** Custom cell renderer — use for computed, composite, or non-renderable values (dates, booleans, nested objects). */
      render: (row: T, rowIndex: number) => React.ReactNode;
    }
)`,elements:[{name:"TableColumnBase"},{name:"unknown"}]}],raw:"TableColumn<T>[]"},description:"Column definitions, in display order."},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Row data, one entry per rendered row."},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string | number",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"Derives a stable React key per row.\n@default (_row, index) => index — pass a real id accessor (e.g. `(row) => row.id`) whenever rows can be added, removed, or reordered, otherwise React can misattribute focus/animation state across re-renders."},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'striped'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'striped'"}]},description:"Visual style.\n- `default`: flat body rows.\n- `striped`: alternating row background tint.\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Header/cell padding and text size.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Caption rendered above the table, visible to sighted and screen-reader users. Takes precedence over `ariaLabel`."},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible name for the table when no `caption` is given. No-op if `caption` is set."},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content shown in place of rows when `data` is empty.\n@default 'No data available.'",defaultValue:{value:"'No data available.'",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"void"}}},description:"Fired when a row is clicked, or activated via Enter/Space while it has\nfocus. Providing this makes every row keyboard-focusable (`tabIndex={0}`)\n— rows keep their native `row` semantics rather than switching to\n`role=\"button\"`, since overriding a `<tr>`'s role breaks its `<td>`\nchildren's column association for assistive tech. The click affordance\nis visual + keyboard only, not announced as a button."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer scroll container.",defaultValue:{value:"''",computed:!1}}}};const l=[{key:"callsign",header:"Callsign"},{key:"sector",header:"Sector"},{key:"status",header:"Status",align:"center",render:t=>e.jsx(P,{variant:t.status==="Online"?"success":t.status==="Compromised"?"error":"secondary",size:"sm",children:t.status})},{key:"clearance",header:"Clearance",align:"right"}],d=[{callsign:"Ghost",sector:"Chiba",status:"Online",clearance:"Level 5"},{callsign:"Wraith",sector:"Night City",status:"Offline",clearance:"Level 3"},{callsign:"Case",sector:"Freeside",status:"Online",clearance:"Level 4"},{callsign:"Molly",sector:"Sprawl",status:"Compromised",clearance:"Level 2"},{callsign:"Armitage",sector:"Villa Straylight",status:"Online",clearance:"Level 5"}],B={title:"Components/Table",component:s,parameters:{layout:"padded",docs:{description:{component:"A cyberpunk-styled, semantic data table for lists of records — neon header row, hover-glow rows, and an optional alternating row tint.\n\nSorting, filtering, pagination, and virtualization are intentionally out of scope — pair with `Pagination` for paged data.\n\n**Usage:**\n\n```tsx\nimport { Table } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n<Table\n  columns={[\n    { key: 'callsign', header: 'Callsign' },\n    { key: 'status', header: 'Status', align: 'center' },\n  ]}\n  data={[\n    { callsign: 'Ghost', status: 'Online' },\n    { callsign: 'Wraith', status: 'Offline' },\n  ]}\n/>\n\n// Typed rows: pass your own row type (inferred from `data`) for typed\n// render/getRowId/onRowClick callbacks. Columns without `render` only\n// accept keys whose values are directly renderable.\ninterface Operative { id: number; callsign: string; lastSeen: Date }\nconst columns: TableColumn<Operative>[] = [\n  { key: 'callsign', header: 'Callsign' },\n  { key: 'lastSeen', header: 'Last seen', render: (row) => row.lastSeen.toLocaleDateString() },\n];\n<Table columns={columns} data={operatives} getRowId={(row) => row.id} />\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `columns` | `TableColumn<T>[]` | ✅ | - | Column definitions, in display order |\n| `data` | `T[]` | ✅ | - | Row data, one entry per rendered row. `T` is your row type |\n| `getRowId` | `(row, index) => string \\| number` | ❌ | index | Stable row key accessor |\n| `variant` | `'default' \\| 'striped'` | ❌ | `'default'` | Flat rows vs. alternating tint |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Cell padding/text size (supports responsive values) |\n| `caption` | `string` | ❌ | - | Visible caption above the table |\n| `ariaLabel` | `string` | ❌ | - | Accessible name when no `caption` is set |\n| `emptyMessage` | `ReactNode` | ❌ | `'No data available.'` | Shown in place of rows when `data` is empty |\n| `onRowClick` | `(row, index) => void` | ❌ | - | Makes rows keyboard-focusable and clickable |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer scroll container |\n\n**Keyboard:** when `onRowClick` is set, rows are focusable (`Tab`) and activate on `Enter`/`Space`.\n"}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","striped"],description:"Flat rows vs. alternating row tint"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Cell padding/text size"}},args:{columns:l,data:d}},m={args:{variant:"default",size:"md",caption:"Active Field Operatives"}},p={args:{variant:"striped",caption:"Active Field Operatives"}},u={args:{size:"sm",caption:"Active Field Operatives"}},v={args:{size:"md",caption:"Active Field Operatives"}},g={args:{size:"lg",caption:"Active Field Operatives"}},y={args:{caption:"Active Field Operatives — select a row to pull the dossier",onRowClick:t=>alert(`Pulling dossier for ${t.callsign}...`)},parameters:{docs:{description:{story:"Passing `onRowClick` makes every row keyboard-focusable (Tab) and activatable via Enter/Space, with a hover-glow affordance."}}}},f={args:{data:[],caption:"Active Field Operatives",emptyMessage:"No operatives currently deployed."}},b={args:{data:[],caption:"Active Field Operatives",emptyMessage:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("span",{children:"No operatives deployed to this sector yet."}),e.jsx(F,{variant:"secondary",size:"sm",children:"Deploy operative"})]})},parameters:{docs:{description:{story:"`emptyMessage` accepts any React node, so the empty state can offer the next step."}}}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-4 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Default"}),e.jsx(s,{columns:l,data:d,caption:"Active Field Operatives"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Striped"}),e.jsx(s,{columns:l,data:d,variant:"striped",caption:"Active Field Operatives"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{columns:l,data:d.slice(0,2),size:"sm"}),e.jsx(s,{columns:l,data:d.slice(0,2),size:"md"}),e.jsx(s,{columns:l,data:d.slice(0,2),size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Empty"}),e.jsx(s,{columns:l,data:[],emptyMessage:"No operatives currently deployed."})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    caption: 'Active Field Operatives'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    caption: 'Active Field Operatives'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    caption: 'Active Field Operatives'
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    caption: 'Active Field Operatives'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    caption: 'Active Field Operatives'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Active Field Operatives — select a row to pull the dossier',
    onRowClick: row => alert(\`Pulling dossier for \${row.callsign}...\`)
  },
  parameters: {
    docs: {
      description: {
        story: 'Passing \`onRowClick\` makes every row keyboard-focusable (Tab) and activatable via Enter/Space, with a hover-glow affordance.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    caption: 'Active Field Operatives',
    emptyMessage: 'No operatives currently deployed.'
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    caption: 'Active Field Operatives',
    emptyMessage: <div className="flex flex-col items-center gap-3">
        <span>No operatives deployed to this sector yet.</span>
        <Button variant="secondary" size="sm">
          Deploy operative
        </Button>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '\`emptyMessage\` accepts any React node, so the empty state can offer the next step.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10 p-4 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Default</h4>
        <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA} caption="Active Field Operatives" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Striped</h4>
        <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA} variant="striped" caption="Active Field Operatives" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA.slice(0, 2)} size="sm" />
          <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA.slice(0, 2)} size="md" />
          <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA.slice(0, 2)} size="lg" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Empty</h4>
        <Table columns={OPERATIVE_COLUMNS} data={[]} emptyMessage="No operatives currently deployed." />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};const K=["Default","Striped","Small","Medium","Large","Clickable","Empty","EmptyWithAction","AllVariants"];export{h as AllVariants,y as Clickable,m as Default,f as Empty,b as EmptyWithAction,g as Large,v as Medium,u as Small,p as Striped,K as __namedExportsOrder,B as default};
