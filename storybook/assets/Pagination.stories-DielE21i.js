import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CqxhrQKZ.js";import{g as H,R as _}from"./responsive-DGbu8dPm.js";import{c}from"./cn-CNMN3A1O.js";import{w as L}from"./devWarn-C2PD3-_Q.js";import"./preload-helper-D9Z9MdNV.js";const k="ellipsis";function h(r,a){return a<r?[]:Array.from({length:a-r+1},(o,n)=>r+n)}function W(r,a,o,n){const g=n*2+o*2+5;if(a<=g)return h(1,a);const d=h(1,Math.min(n,a)),m=h(Math.max(a-n+1,n+1),a),v=Math.max(Math.min(r-o,a-n-o*2-1),n+2),P=Math.min(Math.max(r+o,n+o*2+2),m.length>0?m[0]-2:a-1);return[...d,...v>n+2?[k]:n+1<a-n?[n+1]:[],...h(v,P),...P<a-n-1?[k]:a-n>n?[a-n]:[],...m]}const O={primary:{active:"bg-linear-(--gradient-accent) text-base shadow-primary border-transparent",inactiveHover:"hover:border-accent hover:text-accent hover:shadow-primary"},secondary:{active:"bg-secondary text-base shadow-secondary border-transparent",inactiveHover:"hover:border-secondary hover:text-secondary hover:shadow-secondary"},accent:{active:"bg-accent text-base shadow-lg-accent border-transparent",inactiveHover:"hover:border-accent hover:text-accent hover:shadow-lg-accent"}},E=({direction:r,disabled:a,onClick:o,controlBaseClasses:n,inactiveHover:g})=>{const d=r==="previous";return e.jsx("li",{children:e.jsx("button",{type:"button","aria-label":d?"Previous page":"Next page",disabled:a,onClick:o,className:c(n,"bg-surface border border-muted/30",a?"text-secondary opacity-40 cursor-not-allowed":c("text-secondary cursor-pointer",g)),children:e.jsx("span",{"aria-hidden":"true",children:d?"‹":"›"})})})},q=({currentPage:r,totalPages:a,onPageChange:o,compact:n=!0,siblingCount:g=1,boundaryCount:d=1,showPrevNext:m=!0,variant:v="primary",size:P="md",disabled:l=!1,ariaLabel:V="Pagination",className:M=""})=>{a>0&&(r<1||r>a)&&L(`pagination-oob-${r}-${a}`,`Pagination: currentPage={${r}} is out of range for ${a} page(s) (valid: 1-${a}).`);const i=a>0?Math.min(Math.max(r,1),a):r,u=p.useCallback(s=>{l||s<1||s>a||s===i||o(s)},[l,a,i,o]),R=p.useCallback(s=>{l||(s.key==="Home"?(s.preventDefault(),u(1)):s.key==="End"&&(s.preventDefault(),u(a)))},[l,u,a]),I=p.useMemo(()=>a<1?[]:n?W(i,a,g,d):h(1,a),[n,i,a,g,d]);if(a<1)return null;const A=H(P,_.pagination),{active:$,inactiveHover:z}=O[v],D=c("flex items-center justify-center rounded-md font-bold leading-none transition-all duration-200","focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",A);return e.jsx("nav",{"aria-label":V,className:c("inline-flex",M),onKeyDown:R,children:e.jsxs("ul",{className:"flex items-center gap-1.5 list-none m-0 p-0",children:[m&&e.jsx(E,{direction:"previous",disabled:l||i<=1,onClick:()=>u(i-1),controlBaseClasses:D,inactiveHover:z}),I.map((s,B)=>s===k?e.jsx("li",{"aria-hidden":"true",children:e.jsx("span",{className:c("flex items-center justify-center select-none text-muted",A),children:"…"})},`ellipsis-${B}`):e.jsx("li",{children:e.jsx("button",{type:"button","aria-label":`Page ${s}`,"aria-current":s===i?"page":void 0,disabled:l,onClick:()=>u(s),className:c(D,l?"bg-base border border-muted/20 text-muted/40 cursor-not-allowed opacity-50":s===i?c($,"cursor-default"):c("bg-surface border border-muted/30 text-muted cursor-pointer",z)),children:s})},s)),m&&e.jsx(E,{direction:"next",disabled:l||i>=a,onClick:()=>u(i+1),controlBaseClasses:D,inactiveHover:z})]})})};q.displayName="CyberUI.Pagination";const t=p.memo(q);q.__docgenInfo={description:`A cyberpunk-styled page control for list/table views with more results
than fit on one page. Always controlled via \`currentPage\`/\`onPageChange\`,
with a compact ellipsis-collapsing mode for large page counts.

@example
// Basic controlled pagination
<Pagination
  currentPage={page}
  totalPages={12}
  onPageChange={setPage}
/>

@example
// Wider window around the current page, no boundary pages
<Pagination
  currentPage={page}
  totalPages={200}
  onPageChange={setPage}
  siblingCount={2}
  boundaryCount={0}
/>

@example
// Secondary variant, small size, no Previous/Next
<Pagination
  currentPage={page}
  totalPages={5}
  onPageChange={setPage}
  variant="secondary"
  size="sm"
  showPrevNext={false}
/>`,methods:[],displayName:"CyberUI.Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"Current active page, 1-based. Pagination is always controlled by this value."},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages available."},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Fired with the newly selected page number when the user clicks a page, Previous/Next, or uses Home/End."},compact:{required:!1,tsType:{name:"boolean"},description:"Collapses distant page numbers behind an ellipsis for large page counts,\nalways keeping `boundaryCount` pages at each edge and `siblingCount`\npages around `currentPage` visible. When `false`, every page renders.\n@default true",defaultValue:{value:"true",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of page buttons shown on each side of `currentPage` when `compact` is true.\n@default 1",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"Number of page buttons always shown at the start and end when `compact` is true.\n@default 1",defaultValue:{value:"1",computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:`Whether to render Previous/Next controls alongside the page numbers.
@default true`,defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:`Visual style for the active page and hover glow, matching Button/Badge's variant vocabulary.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of each page control. Can be a static value or a responsive object.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disables every control in the group — no page can be selected.
@default false`,defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the containing `<nav>` landmark.\n@default 'Pagination'",defaultValue:{value:"'Pagination'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer `<nav>`.",defaultValue:{value:"''",computed:!1}}}};const Q={title:"Components/Pagination",component:t,parameters:{layout:"padded",docs:{description:{component:"A cyberpunk-styled page control for list/table views with more results than fit on one page. Always controlled via `currentPage`/`onPageChange`, with a compact ellipsis-collapsing mode for large page counts, matching Button/Badge's neon variant treatment.\n\n**Usage:**\n\n```tsx\nimport { Pagination } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\nconst [page, setPage] = useState(1);\n\n<Pagination\n  currentPage={page}\n  totalPages={12}\n  onPageChange={setPage}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `currentPage` | `number` | ✅ | - | Current active page, 1-based |\n| `totalPages` | `number` | ✅ | - | Total number of pages available |\n| `onPageChange` | `(page: number) => void` | ✅ | - | Fired when the user selects a new page |\n| `compact` | `boolean` | ❌ | `true` | Collapses distant pages behind an ellipsis for large page counts |\n| `siblingCount` | `number` | ❌ | `1` | Pages shown on each side of `currentPage` when `compact` |\n| `boundaryCount` | `number` | ❌ | `1` | Pages always shown at the start/end when `compact` |\n| `showPrevNext` | `boolean` | ❌ | `true` | Renders Previous/Next controls |\n| `variant` | `'primary' \\| 'secondary' \\| 'accent'` | ❌ | `'primary'` | Active page color and hover glow |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Page control size (supports responsive values) |\n| `disabled` | `boolean` | ❌ | `false` | Disables every control in the group |\n| `ariaLabel` | `string` | ❌ | `'Pagination'` | Accessible label for the `<nav>` landmark |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer `<nav>` |\n\n**Keyboard:** page/Previous/Next buttons sit in normal tab order (native `<button>` semantics — `Enter`/`Space` activate). `Home`/`End` jump to the first/last page from anywhere inside the control.\n"}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"Current active page, 1-based"},totalPages:{control:{type:"number",min:1},description:"Total number of pages available"},compact:{control:"boolean",description:"Collapses distant pages behind an ellipsis for large page counts"},siblingCount:{control:{type:"number",min:0},description:"Pages shown on each side of currentPage when compact"},boundaryCount:{control:{type:"number",min:0},description:"Pages always shown at the start/end when compact"},showPrevNext:{control:"boolean",description:"Renders Previous/Next controls"},variant:{control:"select",options:["primary","secondary","accent"],description:"Active page color and hover glow"},size:{control:"select",options:["sm","md","lg"],description:"Page control size (supports responsive values)"},disabled:{control:"boolean",description:"Disables every control in the group"},onPageChange:{action:"page changed"}},args:{currentPage:5,totalPages:20}},f={render:r=>{const a=()=>{const[o,n]=p.useState(r.currentPage??5);return e.jsx(t,{...r,currentPage:o,onPageChange:n})};return e.jsx(a,{})}},b={args:{variant:"secondary"}},x={args:{variant:"accent"}},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(t,{currentPage:3,totalPages:10,onPageChange:()=>{},size:"sm"}),e.jsx(t,{currentPage:3,totalPages:10,onPageChange:()=>{},size:"md"}),e.jsx(t,{currentPage:3,totalPages:10,onPageChange:()=>{},size:"lg"})]})},w={args:{disabled:!0}},C={parameters:{docs:{description:{story:"With 200 archive pages, distant pages collapse behind an ellipsis — only the boundary pages and a window around the current page render."}}},args:{currentPage:47,totalPages:200}},N={parameters:{docs:{description:{story:"`compact={false}` always renders every page number — only sensible for small archives."}}},args:{currentPage:3,totalPages:7,compact:!1}},j={args:{showPrevNext:!1}},S={parameters:{docs:{description:{story:"Page state lives in the parent — useful for syncing with data fetching or a router."}}},render:()=>{const r=()=>{const[a,o]=p.useState(1);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(t,{currentPage:a,totalPages:30,onPageChange:o}),e.jsxs("p",{className:"text-xs text-muted",children:["Loading archive shard ",a," of 30…"]})]})};return e.jsx(r,{})}},T={render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-4 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Primary (default)"}),e.jsx(t,{currentPage:5,totalPages:20,onPageChange:()=>{},variant:"primary"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Secondary"}),e.jsx(t,{currentPage:5,totalPages:20,onPageChange:()=>{},variant:"secondary"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Accent"}),e.jsx(t,{currentPage:5,totalPages:20,onPageChange:()=>{},variant:"accent"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{currentPage:3,totalPages:10,onPageChange:()=>{},size:"sm"}),e.jsx(t,{currentPage:3,totalPages:10,onPageChange:()=>{},size:"md"}),e.jsx(t,{currentPage:3,totalPages:10,onPageChange:()=>{},size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Disabled"}),e.jsx(t,{currentPage:5,totalPages:20,onPageChange:()=>{},disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Compact collapsing (200 pages)"}),e.jsx(t,{currentPage:47,totalPages:200,onPageChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Expanded (compact off, 7 pages)"}),e.jsx(t,{currentPage:3,totalPages:7,onPageChange:()=>{},compact:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"No Previous/Next"}),e.jsx(t,{currentPage:3,totalPages:7,onPageChange:()=>{},showPrevNext:!1})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const DefaultDemo = () => {
      const [page, setPage] = useState(args.currentPage ?? 5);
      return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
    };
    return <DefaultDemo />;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="sm" />
      <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="md" />
      <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="lg" />
    </div>
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'With 200 archive pages, distant pages collapse behind an ellipsis — only the boundary pages and a window around the current page render.'
      }
    }
  },
  args: {
    currentPage: 47,
    totalPages: 200
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`compact={false}\` always renders every page number — only sensible for small archives.'
      }
    }
  },
  args: {
    currentPage: 3,
    totalPages: 7,
    compact: false
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    showPrevNext: false
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Page state lives in the parent — useful for syncing with data fetching or a router.'
      }
    }
  },
  render: () => {
    const ControlledDemo = () => {
      const [page, setPage] = useState(1);
      return <div className="flex flex-col gap-3">
          <Pagination currentPage={page} totalPages={30} onPageChange={setPage} />
          <p className="text-xs text-muted">Loading archive shard {page} of 30…</p>
        </div>;
    };
    return <ControlledDemo />;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10 p-4 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Primary (default)</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} variant="primary" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Secondary</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} variant="secondary" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Accent</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} variant="accent" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="sm" />
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="md" />
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="lg" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} disabled />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Compact collapsing (200 pages)</h4>
        <Pagination currentPage={47} totalPages={200} onPageChange={() => {}} />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Expanded (compact off, 7 pages)</h4>
        <Pagination currentPage={3} totalPages={7} onPageChange={() => {}} compact={false} />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">No Previous/Next</h4>
        <Pagination currentPage={3} totalPages={7} onPageChange={() => {}} showPrevNext={false} />
      </div>
    </div>
}`,...T.parameters?.docs?.source}}};const X=["Default","Secondary","Accent","Sizes","Disabled","CompactCollapsing","ExpandedMode","NoPrevNext","Controlled","AllVariants"];export{x as Accent,T as AllVariants,C as CompactCollapsing,S as Controlled,f as Default,w as Disabled,N as ExpandedMode,j as NoPrevNext,b as Secondary,y as Sizes,X as __namedExportsOrder,Q as default};
