import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-ChJ3X3oe.js";import{g as Pe,R as Ve}from"./responsive-CVpry9ax.js";import{c as k}from"./cn-CNMN3A1O.js";import"./preload-helper-D9Z9MdNV.js";const Ae=["Su","Mo","Tu","We","Th","Fr","Sa"],ue=["January","February","March","April","May","June","July","August","September","October","November","December"],C=t=>{const r=new Date(t);return r.setHours(0,0,0,0),r},X=(t,r)=>t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()&&t.getDate()===r.getDate(),g=(t,r)=>{const n=new Date(t);return n.setDate(n.getDate()+r),n},V=(t,r)=>{const n=t.getDate(),l=new Date(t);l.setDate(1),l.setMonth(l.getMonth()+r);const h=new Date(l.getFullYear(),l.getMonth()+1,0).getDate();return l.setDate(Math.min(n,h)),l},N=(t,r,n)=>!!(r&&t<C(r)||n&&t>C(n)),A=t=>{const r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${l}`},Re=t=>{const r=t.getMonth(),n=new Date(t.getFullYear(),r,1),l=g(n,-n.getDay());return Array.from({length:42},(h,T)=>{const M=g(l,T);return{date:M,inCurrentMonth:M.getMonth()===r}})},Ie=t=>{const r=[];for(let n=0;n<t.length;n+=7)r.push(t.slice(n,n+7));return r},c=({value:t,defaultValue:r=null,onValueChange:n,minDate:l,maxDate:h,label:T,placeholder:M="Select a date...",variant:ee="primary",size:me="md",disabled:m=!1,helperText:_,error:y,formatDate:pe=A,ariaLabel:ge="Choose date",className:he="",id:fe})=>{const ae=t!==void 0,[be,ye]=o.useState(r),v=ae?t:be,te=C(v??new Date),[p,E]=o.useState(te),[j,H]=o.useState(te),[d,re]=o.useState(!1),[x,K]=o.useState(!1),se=o.useId(),w=fe||se,ne=`datepicker-calendar-${se}`,ve=y?`${w}-error`:_?`${w}-help`:void 0,G=o.useRef(null),oe=o.useRef(null),f=o.useRef(null),J=o.useRef({}),P=o.useRef(!1);o.useEffect(()=>()=>{f.current&&clearTimeout(f.current)},[]);const b=o.useCallback(e=>{K(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{re(!1),K(!1),e&&oe.current?.focus()},180)},[]),Z=o.useCallback(()=>{if(m)return;f.current&&(clearTimeout(f.current),f.current=null),K(!1);const e=C(v??new Date);E(e),H(e),re(!0),P.current=!0},[m,v]),le=o.useCallback(()=>{d&&!x?b(!1):Z()},[d,x,Z,b]);o.useEffect(()=>{if(!d)return;const e=s=>{G.current&&!G.current.contains(s.target)&&b(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d,b]),o.useEffect(()=>{!d||!P.current||(P.current=!1,J.current[A(j)]?.focus())},[d]),o.useEffect(()=>{d&&!P.current&&J.current[A(j)]?.focus()},[j,d]);const u=e=>{let s=e;if(N(s,l,h)){const i=s.getTime()<j.getTime()?1:-1;let D=0;const S=3660;for(;N(s,l,h)&&D<S;)s=g(s,i),D++;if(N(s,l,h))return}H(s),(s.getMonth()!==p.getMonth()||s.getFullYear()!==p.getFullYear())&&E(s)},ie=e=>{N(e,l,h)||(ae||ye(e),n?.(e),b(!0))},De=e=>{m||(e.key==="ArrowDown"||e.key==="Enter"||e.key===" "?(e.preventDefault(),(!d||x)&&Z()):e.key==="Escape"&&d&&!x&&(e.preventDefault(),b(!1)))},xe=(e,s)=>{switch(e.key){case"ArrowLeft":e.preventDefault(),u(g(s,-1));break;case"ArrowRight":e.preventDefault(),u(g(s,1));break;case"ArrowUp":e.preventDefault(),u(g(s,-7));break;case"ArrowDown":e.preventDefault(),u(g(s,7));break;case"Home":e.preventDefault(),u(g(s,-s.getDay()));break;case"End":e.preventDefault(),u(g(s,6-s.getDay()));break;case"PageUp":e.preventDefault(),u(V(s,-1));break;case"PageDown":e.preventDefault(),u(V(s,1));break;case"Enter":case" ":e.preventDefault(),ie(s);break;case"Escape":e.preventDefault(),b(!0);break;case"Tab":b(!1);break}},we=()=>{const e=V(p,-1);E(e),u(e)},Se=()=>{const e=V(p,1);E(e),u(e)},ke=e=>Pe(e,Ve.input),je=(e,s,i)=>s?"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base":i?{primary:"border-2 border-accent/20 shadow-none",secondary:"border-2 border-secondary/20 shadow-none",danger:"border-2 border-error/20 shadow-none",ghost:"border border-border-default shadow-none"}[e]:{primary:"border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base",secondary:"border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base",danger:"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base",ghost:"border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base"}[e],Ne=m?"text-muted/50":{primary:"text-accent",secondary:"text-secondary",danger:"text-error",ghost:"text-muted"}[ee],Ce=k("w-full rounded-lg bg-surface text-default placeholder-muted transition-all duration-300 focus:outline-none pl-4 pr-10",m?"cursor-not-allowed opacity-60":"cursor-pointer",ke(me),je(ee,!!y,m)),Te=Ie(Re(p)),Me=C(new Date);return a.jsxs("div",{className:k("w-full",he),ref:G,children:[T&&a.jsx("label",{htmlFor:w,className:"block text-sm font-medium text-default mb-2",children:T}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{ref:oe,type:"text",readOnly:!0,role:"combobox","aria-haspopup":"dialog","aria-expanded":d,"aria-controls":ne,"aria-invalid":!!y,"aria-describedby":ve,id:w,value:v?pe(v):"",placeholder:M,disabled:m,onClick:le,onKeyDown:De,className:Ce}),a.jsx("button",{type:"button",tabIndex:-1,"aria-hidden":"true",disabled:m,onClick:le,className:k("absolute inset-y-0 right-0 flex items-center pr-3",m?"cursor-not-allowed":"cursor-pointer",Ne),children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),(d||x)&&a.jsxs("div",{id:ne,role:"dialog","aria-label":ge,"aria-hidden":!d,className:k("absolute z-50 mt-2 w-72 rounded-lg border-2 border-border-default bg-surface p-4 shadow-secondary","transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity",x?"pointer-events-none scale-y-0 opacity-0":"pointer-events-auto scale-y-100 opacity-100"),children:[a.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[a.jsx("button",{type:"button","aria-label":"Previous month",onClick:we,className:"rounded p-1 text-accent hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70",children:a.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),a.jsxs("span",{className:"font-mono text-sm font-bold text-default","aria-live":"polite",children:[ue[p.getMonth()]," ",p.getFullYear()]}),a.jsx("button",{type:"button","aria-label":"Next month",onClick:Se,className:"rounded p-1 text-accent hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70",children:a.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),a.jsxs("div",{role:"grid","aria-label":`${ue[p.getMonth()]} ${p.getFullYear()}`,children:[a.jsx("div",{role:"row",className:"grid grid-cols-7 mb-1",children:Ae.map(e=>a.jsx("div",{role:"columnheader",className:"text-center text-xs font-mono text-muted",children:e},e))}),Te.map((e,s)=>a.jsx("div",{role:"row",className:"grid grid-cols-7",children:e.map(i=>{const D=N(i.date,l,h),S=!!v&&X(i.date,v),de=X(i.date,Me),Ee=X(i.date,j),ce=A(i.date);return a.jsx("button",{ref:Q=>{J.current[ce]=Q},type:"button",role:"gridcell","aria-selected":S,"aria-disabled":D||void 0,"aria-current":de?"date":void 0,tabIndex:Ee?0:-1,disabled:D,onClick:()=>ie(i.date),onKeyDown:Q=>xe(Q,i.date),onFocus:()=>H(i.date),className:k("m-0.5 flex h-8 items-center justify-center rounded-md font-mono text-sm outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary/70",!i.inCurrentMonth&&"text-muted/30",D?"cursor-not-allowed text-muted/30 opacity-50":i.inCurrentMonth?"cursor-pointer text-default hover:bg-base/70 hover:text-secondary":"cursor-pointer",S&&"bg-accent text-base font-bold shadow-primary hover:bg-accent hover:text-base",!S&&de&&"border border-accent text-accent shadow-primary/50"),children:i.date.getDate()},ce)})},s))]})]})]}),(_||y)&&a.jsx("div",{id:y?`${w}-error`:`${w}-help`,className:k("mt-2 text-xs font-mono",y?"text-error":"text-muted"),children:y||_})]})};c.displayName="CyberUI.DatePicker";c.__docgenInfo={description:`A cyberpunk-styled single-date picker: a text-input trigger (matching
Input's styling) that opens a keyboard-navigable calendar grid popover
(matching Modal/Select's overlay treatment). Range selection is not yet
supported — a natural follow-up once single-date selection is proven out.

@example
// Basic uncontrolled usage
<DatePicker label="Deployment Date" placeholder="Select a date..." />

@example
// Controlled, bounded to the next 30 days
<DatePicker
  label="Extraction Window"
  value={date}
  onValueChange={setDate}
  minDate={new Date()}
  maxDate={addDays(new Date(), 30)}
/>`,methods:[],displayName:"CyberUI.DatePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"Selected date (controlled). Pass `null` to represent no selection."},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:`Initial selected date for uncontrolled usage.
@default null`,defaultValue:{value:"null",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:"Fired when the user selects a day in the calendar grid."},minDate:{required:!1,tsType:{name:"Date"},description:"Earliest selectable date (inclusive). Days before it render dimmed and disabled."},maxDate:{required:!1,tsType:{name:"Date"},description:"Latest selectable date (inclusive). Days after it render dimmed and disabled."},label:{required:!1,tsType:{name:"string"},description:"Label rendered above the trigger input."},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown in the trigger when no date is selected.
@default 'Select a date...'`,defaultValue:{value:"'Select a date...'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"}]},description:`Visual style of the trigger input, reusing Input's variant vocabulary.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the trigger input (height and padding).
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disables the trigger and prevents the calendar from opening.
@default false`,defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Optional helper text shown below the trigger."},error:{required:!1,tsType:{name:"string"},description:"Error message that overrides helper text and highlights the trigger."},formatDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => string",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"string"}}},description:"Formats the selected date for display in the trigger input.\n@default An ISO-like `YYYY-MM-DD` formatter.",defaultValue:{value:"(date: Date): string => {\n  const y = date.getFullYear();\n  const m = String(date.getMonth() + 1).padStart(2, '0');\n  const d = String(date.getDate()).padStart(2, '0');\n  return `${y}-${m}-${d}`;\n}",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the calendar dialog.
@default 'Choose date'`,defaultValue:{value:"'Choose date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer wrapper.",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"id applied to the trigger input."}}};const We={title:"Components/DatePicker",component:c,decorators:[t=>a.jsx("div",{className:"min-h-[420px] pt-4",children:a.jsx(t,{})})],parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-styled single-date picker — a text-input trigger (matching Input's styling) that opens a keyboard-navigable calendar grid popover (matching Modal/Select's overlay treatment). Range selection is a natural follow-up once single-date selection is proven out.\n\n**Usage:**\n\n```tsx\nimport { DatePicker } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Basic uncontrolled usage\n<DatePicker label=\"Deployment Date\" placeholder=\"Select a date...\" />\n\n// Controlled, bounded to the next 30 days\nconst [date, setDate] = React.useState<Date | null>(null);\n<DatePicker\n  label=\"Extraction Window\"\n  value={date}\n  onValueChange={setDate}\n  minDate={new Date()}\n  maxDate={addDays(new Date(), 30)}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `value` | `Date \\| null` | ❌ | - | Controlled selected date |\n| `defaultValue` | `Date \\| null` | ❌ | `null` | Initial selected date for uncontrolled usage |\n| `onValueChange` | `(date: Date \\| null) => void` | ❌ | - | Fired when a day is selected |\n| `minDate` | `Date` | ❌ | - | Earliest selectable date (inclusive) |\n| `maxDate` | `Date` | ❌ | - | Latest selectable date (inclusive) |\n| `label` | `string` | ❌ | - | Label rendered above the trigger |\n| `placeholder` | `string` | ❌ | `'Select a date...'` | Placeholder shown when no date is selected |\n| `variant` | `'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'` | ❌ | `'primary'` | Trigger visual style |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Trigger height/padding (supports responsive values) |\n| `disabled` | `boolean` | ❌ | `false` | Disables the trigger and prevents the calendar from opening |\n| `helperText` | `string` | ❌ | - | Helper text shown below the trigger |\n| `error` | `string` | ❌ | - | Error message that overrides helper text |\n| `formatDate` | `(date: Date) => string` | ❌ | ISO `YYYY-MM-DD` | Formats the selected date for display |\n| `ariaLabel` | `string` | ❌ | `'Choose date'` | Accessible label for the calendar dialog |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer wrapper |\n\n**Keyboard:** `ArrowDown`/`Enter`/`Space` on the trigger opens the calendar. Inside the grid, `ArrowLeft`/`ArrowRight` move focus by a day, `ArrowUp`/`ArrowDown` by a week, `Home`/`End` jump to the start/end of the focused week, `PageUp`/`PageDown` step a month, `Enter`/`Space` selects the focused day, and `Escape` closes the calendar and returns focus to the trigger.\n"}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Visual style of the trigger input"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the trigger input"},disabled:{control:"boolean",description:"Disables the trigger and prevents the calendar from opening"}}},R={args:{label:"Deployment Date",placeholder:"Select a date..."}},I={args:{label:"Neural Sync Window",variant:"primary"}},L={args:{label:"Uplink Schedule",variant:"secondary"}},q={args:{label:"Cold Storage Timestamp",variant:"ghost"}},z={parameters:{docs:{description:{story:"Days outside `minDate`/`maxDate` render dimmed and cannot be selected — here bounded to a 14-day extraction window starting today."}}},render:()=>{const t=new Date,r=new Date(t);return r.setDate(r.getDate()+14),a.jsx(c,{label:"Extraction Window",placeholder:"Select an extraction date...",minDate:t,maxDate:r})}},F={args:{label:"Recon Date",size:"sm"}},Y={args:{label:"Recon Date",size:"md"}},W={args:{label:"Recon Date",size:"lg"}},$={args:{label:"Handshake Expiry",error:"Selected date has already lapsed"}},O={args:{label:"Archive Purge Date",disabled:!0,defaultValue:new Date(2045,2,14)}},U={parameters:{docs:{description:{story:"Selected date lives in the parent — useful for syncing the picker with other UI state."}}},render:()=>{const t=()=>{const[r,n]=o.useState(null);return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("span",{className:"text-xs text-muted",children:["Selected: ",r?r.toDateString():"none"]}),a.jsx(c,{label:"Neural Link Activation",value:r,onValueChange:n})]})};return a.jsx(t,{})}},B={render:()=>a.jsxs("div",{className:"flex flex-col gap-10 p-8 bg-base max-w-2xl",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Variants"}),a.jsxs("div",{className:"flex gap-6 flex-wrap items-start",children:[a.jsx(c,{label:"Primary",variant:"primary"}),a.jsx(c,{label:"Secondary",variant:"secondary"}),a.jsx(c,{label:"Ghost",variant:"ghost"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Sizes"}),a.jsxs("div",{className:"flex gap-6 flex-wrap items-start",children:[a.jsx(c,{label:"Small",size:"sm"}),a.jsx(c,{label:"Medium",size:"md"}),a.jsx(c,{label:"Large",size:"lg"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"States"}),a.jsxs("div",{className:"flex gap-6 flex-wrap items-start",children:[a.jsx(c,{label:"With Error",error:"Selected date has already lapsed"}),a.jsx(c,{label:"Disabled",disabled:!0,defaultValue:new Date(2045,2,14)})]})]})]})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Deployment Date',
    placeholder: 'Select a date...'
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Neural Sync Window',
    variant: 'primary'
  }
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uplink Schedule',
    variant: 'secondary'
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Cold Storage Timestamp',
    variant: 'ghost'
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Days outside \`minDate\`/\`maxDate\` render dimmed and cannot be selected — here bounded to a 14-day extraction window starting today.'
      }
    }
  },
  render: () => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 14);
    return <DatePicker label="Extraction Window" placeholder="Select an extraction date..." minDate={today} maxDate={maxDate} />;
  }
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recon Date',
    size: 'sm'
  }
}`,...F.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recon Date',
    size: 'md'
  }
}`,...Y.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recon Date',
    size: 'lg'
  }
}`,...W.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Handshake Expiry',
    error: 'Selected date has already lapsed'
  }
}`,...$.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Archive Purge Date',
    disabled: true,
    defaultValue: new Date(2045, 2, 14)
  }
}`,...O.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Selected date lives in the parent — useful for syncing the picker with other UI state.'
      }
    }
  },
  render: () => {
    const Demo = () => {
      const [date, setDate] = useState<Date | null>(null);
      return <div className="flex flex-col gap-3">
          <span className="text-xs text-muted">
            Selected: {date ? date.toDateString() : 'none'}
          </span>
          <DatePicker label="Neural Link Activation" value={date} onValueChange={setDate} />
        </div>;
    };
    return <Demo />;
  }
}`,...U.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10 p-8 bg-base max-w-2xl">
      <div>
        <h4 className="text-secondary font-semibold mb-4">Variants</h4>
        <div className="flex gap-6 flex-wrap items-start">
          <DatePicker label="Primary" variant="primary" />
          <DatePicker label="Secondary" variant="secondary" />
          <DatePicker label="Ghost" variant="ghost" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Sizes</h4>
        <div className="flex gap-6 flex-wrap items-start">
          <DatePicker label="Small" size="sm" />
          <DatePicker label="Medium" size="md" />
          <DatePicker label="Large" size="lg" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">States</h4>
        <div className="flex gap-6 flex-wrap items-start">
          <DatePicker label="With Error" error="Selected date has already lapsed" />
          <DatePicker label="Disabled" disabled defaultValue={new Date(2045, 2, 14)} />
        </div>
      </div>
    </div>
}`,...B.parameters?.docs?.source}}};const $e=["Default","Primary","Secondary","Ghost","WithBoundedRange","Small","Medium","Large","WithError","Disabled","Controlled","AllVariants"];export{B as AllVariants,U as Controlled,R as Default,O as Disabled,q as Ghost,W as Large,Y as Medium,I as Primary,L as Secondary,F as Small,z as WithBoundedRange,$ as WithError,$e as __namedExportsOrder,We as default};
