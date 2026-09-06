import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-CJzUki5p.js";import{g as Pe,R as Ve}from"./responsive-v9ihdETy.js";import{c as x}from"./cn-CNMN3A1O.js";import{u as Ee}from"./useDialogBehavior-CREKUwcM.js";import"./preload-helper-D9Z9MdNV.js";const Ae=["Su","Mo","Tu","We","Th","Fr","Sa"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],j=t=>{const r=new Date(t);return r.setHours(0,0,0,0),r},J=(t,r)=>t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()&&t.getDate()===r.getDate(),g=(t,r)=>{const n=new Date(t);return n.setDate(n.getDate()+r),n},V=(t,r)=>{const n=t.getDate(),o=new Date(t);o.setDate(1),o.setMonth(o.getMonth()+r);const h=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();return o.setDate(Math.min(n,h)),o},k=(t,r,n)=>!!(r&&t<j(r)||n&&t>j(n)),E=t=>{const r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${o}`},Re=t=>{const r=t.getMonth(),n=new Date(t.getFullYear(),r,1),o=g(n,-n.getDay());return Array.from({length:42},(h,N)=>{const C=g(o,N);return{date:C,inCurrentMonth:C.getMonth()===r}})},Ie=t=>{const r=[];for(let n=0;n<t.length;n+=7)r.push(t.slice(n,n+7));return r},d=({value:t,defaultValue:r=null,onValueChange:n,minDate:o,maxDate:h,label:N,placeholder:C="Select a date...",variant:Z="primary",size:ce="md",disabled:m=!1,helperText:U,error:f,formatDate:ue=E,ariaLabel:me="Choose date",className:pe="",id:ge})=>{const Q=t!==void 0,[he,fe]=i.useState(r),b=Q?t:he,X=j(b??new Date),[p,T]=i.useState(X),[w,_]=i.useState(X),[c,ee]=i.useState(!1),ae=i.useId(),v=ge||ae,te=`datepicker-calendar-${ae}`,be=f?`${v}-error`:U?`${v}-help`:void 0,re=i.useRef(null),H=i.useRef({}),M=i.useRef(!1),{isClosing:S,open:se,close:P,containerRef:ye}=Ee(c,{closeDuration:180,onClose:()=>ee(!1),getRestoreFocusTarget:()=>re.current}),K=i.useCallback(()=>{if(m)return;const a=j(b??new Date);T(a),_(a),ee(!0),se(),M.current=!0},[m,b,se]),ne=i.useCallback(()=>{c&&!S?P():K()},[c,S,K,P]);i.useEffect(()=>{!c||!M.current||(M.current=!1,H.current[E(w)]?.focus())},[c]),i.useEffect(()=>{c&&!M.current&&H.current[E(w)]?.focus()},[w,c]);const u=a=>{let s=a;if(k(s,o,h)){const l=s.getTime()<w.getTime()?1:-1;let y=0;const D=3660;for(;k(s,o,h)&&y<D;)s=g(s,l),y++;if(k(s,o,h))return}_(s),(s.getMonth()!==p.getMonth()||s.getFullYear()!==p.getFullYear())&&T(s)},oe=a=>{k(a,o,h)||(Q||fe(a),n?.(a),P())},ve=a=>{m||(a.key==="ArrowDown"||a.key==="Enter"||a.key===" ")&&(a.preventDefault(),(!c||S)&&K())},De=(a,s)=>{switch(a.key){case"ArrowLeft":a.preventDefault(),u(g(s,-1));break;case"ArrowRight":a.preventDefault(),u(g(s,1));break;case"ArrowUp":a.preventDefault(),u(g(s,-7));break;case"ArrowDown":a.preventDefault(),u(g(s,7));break;case"Home":a.preventDefault(),u(g(s,-s.getDay()));break;case"End":a.preventDefault(),u(g(s,6-s.getDay()));break;case"PageUp":a.preventDefault(),u(V(s,-1));break;case"PageDown":a.preventDefault(),u(V(s,1));break;case"Enter":case" ":a.preventDefault(),oe(s);break;case"Tab":P();break}},xe=()=>{const a=V(p,-1);T(a),u(a)},we=()=>{const a=V(p,1);T(a),u(a)},Se=a=>Pe(a,Ve.input),ke=(a,s,l)=>s?"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base":l?{primary:"border-2 border-accent/20 shadow-none",secondary:"border-2 border-secondary/20 shadow-none",danger:"border-2 border-error/20 shadow-none",ghost:"border border-border-default shadow-none"}[a]:{primary:"border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent active:bg-base",secondary:"border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary active:bg-base",danger:"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error active:bg-base",ghost:"border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent active:bg-base"}[a],je=m?"text-muted/50":{primary:"text-accent",secondary:"text-secondary",danger:"text-error",ghost:"text-muted"}[Z],Ne=x("w-full rounded-lg bg-surface text-default placeholder-muted transition-all duration-300 focus:outline-none pl-4 pr-10",m?"cursor-not-allowed opacity-60":"cursor-pointer",Se(ce),ke(Z,!!f,m)),Ce=Ie(Re(p)),Te=j(new Date);return e.jsxs("div",{className:x("w-full",pe),ref:ye,children:[N&&e.jsx("label",{htmlFor:v,className:"block text-sm font-medium text-default mb-2",children:N}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:re,type:"text",readOnly:!0,role:"combobox","aria-haspopup":"dialog","aria-expanded":c,"aria-controls":te,"aria-invalid":!!f,"aria-describedby":be,id:v,value:b?ue(b):"",placeholder:C,disabled:m,onClick:ne,onKeyDown:ve,className:Ne}),e.jsx("button",{type:"button",tabIndex:-1,"aria-hidden":"true",disabled:m,onClick:ne,className:x("absolute inset-y-0 right-0 flex items-center pr-3",m?"cursor-not-allowed":"cursor-pointer",je),children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),(c||S)&&e.jsxs("div",{id:te,role:"dialog","aria-label":me,"aria-hidden":!c,className:x("absolute z-50 mt-2 w-72 rounded-lg border-2 border-border-default bg-surface p-4 shadow-secondary","transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity",S?"pointer-events-none scale-y-0 opacity-0":"pointer-events-auto scale-y-100 opacity-100"),children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("button",{type:"button","aria-label":"Previous month",onClick:xe,className:"rounded p-1 text-accent hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsxs("span",{className:"font-mono text-sm font-bold text-default","aria-live":"polite",children:[de[p.getMonth()]," ",p.getFullYear()]}),e.jsx("button",{type:"button","aria-label":"Next month",onClick:we,className:"rounded p-1 text-accent hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsxs("div",{role:"grid","aria-label":`${de[p.getMonth()]} ${p.getFullYear()}`,children:[e.jsx("div",{role:"row",className:"grid grid-cols-7 mb-1",children:Ae.map(a=>e.jsx("div",{role:"columnheader",className:"text-center text-xs font-mono text-muted",children:a},a))}),Ce.map((a,s)=>e.jsx("div",{role:"row",className:"grid grid-cols-7",children:a.map(l=>{const y=k(l.date,o,h),D=!!b&&J(l.date,b),le=J(l.date,Te),Me=J(l.date,w),ie=E(l.date);return e.jsx("button",{ref:G=>{H.current[ie]=G},type:"button",role:"gridcell","aria-selected":D,"aria-disabled":y||void 0,"aria-current":le?"date":void 0,tabIndex:Me?0:-1,disabled:y,onClick:()=>oe(l.date),onKeyDown:G=>De(G,l.date),onFocus:()=>_(l.date),className:x("m-0.5 flex h-8 items-center justify-center rounded-md font-mono text-sm outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary/70",!l.inCurrentMonth&&"text-muted/30",y?"cursor-not-allowed text-muted/30 opacity-50":l.inCurrentMonth?"cursor-pointer text-default hover:bg-base/70 hover:text-secondary":"cursor-pointer",D&&"bg-accent text-inverse font-bold shadow-primary hover:bg-accent hover:text-inverse",!D&&le&&"border border-accent text-accent shadow-primary/50"),children:l.date.getDate()},ie)})},s))]})]})]}),(U||f)&&e.jsx("div",{id:f?`${v}-error`:`${v}-help`,className:x("mt-2 text-xs font-mono",f?"text-error":"text-muted"),children:f||U})]})};d.displayName="CyberUI.DatePicker";d.__docgenInfo={description:`A cyberpunk-styled single-date picker: a text-input trigger (matching
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
@default 'Choose date'`,defaultValue:{value:"'Choose date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer wrapper.",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"id applied to the trigger input."}}};const Oe={title:"Components/DatePicker",component:d,decorators:[t=>e.jsx("div",{className:"min-h-[420px] pt-4",children:e.jsx(t,{})})],parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-styled single-date picker — a text-input trigger (matching Input's styling) that opens a keyboard-navigable calendar grid popover (matching Modal/Select's overlay treatment). Range selection is a natural follow-up once single-date selection is proven out.\n\nEscape or outside click closes the calendar. Escape restores focus to the trigger. Outside click does not.\n\n**Usage:**\n\n```tsx\nimport { DatePicker } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Basic uncontrolled usage\n<DatePicker label=\"Deployment Date\" placeholder=\"Select a date...\" />\n\n// Controlled, bounded to the next 30 days\nconst [date, setDate] = React.useState<Date | null>(null);\n<DatePicker\n  label=\"Extraction Window\"\n  value={date}\n  onValueChange={setDate}\n  minDate={new Date()}\n  maxDate={addDays(new Date(), 30)}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `value` | `Date \\| null` | ❌ | - | Controlled selected date |\n| `defaultValue` | `Date \\| null` | ❌ | `null` | Initial selected date for uncontrolled usage |\n| `onValueChange` | `(date: Date \\| null) => void` | ❌ | - | Fired when a day is selected |\n| `minDate` | `Date` | ❌ | - | Earliest selectable date (inclusive) |\n| `maxDate` | `Date` | ❌ | - | Latest selectable date (inclusive) |\n| `label` | `string` | ❌ | - | Label rendered above the trigger |\n| `placeholder` | `string` | ❌ | `'Select a date...'` | Placeholder shown when no date is selected |\n| `variant` | `'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'` | ❌ | `'primary'` | Trigger visual style |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Trigger height/padding (supports responsive values) |\n| `disabled` | `boolean` | ❌ | `false` | Disables the trigger and prevents the calendar from opening |\n| `helperText` | `string` | ❌ | - | Helper text shown below the trigger |\n| `error` | `string` | ❌ | - | Error message that overrides helper text |\n| `formatDate` | `(date: Date) => string` | ❌ | ISO `YYYY-MM-DD` | Formats the selected date for display |\n| `ariaLabel` | `string` | ❌ | `'Choose date'` | Accessible label for the calendar dialog |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer wrapper |\n\n**Keyboard:** `ArrowDown`/`Enter`/`Space` on the trigger opens the calendar. Inside the grid, `ArrowLeft`/`ArrowRight` move focus by a day, `ArrowUp`/`ArrowDown` by a week, `Home`/`End` jump to the start/end of the focused week, `PageUp`/`PageDown` step a month, `Enter`/`Space` selects the focused day, and `Escape` closes the calendar and returns focus to the trigger.\n"}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Visual style of the trigger input"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the trigger input"},disabled:{control:"boolean",description:"Disables the trigger and prevents the calendar from opening"}}},A={args:{label:"Deployment Date",placeholder:"Select a date..."}},R={args:{label:"Neural Sync Window",variant:"primary"}},I={args:{label:"Uplink Schedule",variant:"secondary"}},F={args:{label:"Cold Storage Timestamp",variant:"ghost"}},L={parameters:{docs:{description:{story:"Days outside `minDate`/`maxDate` render dimmed and cannot be selected — here bounded to a 14-day extraction window starting today."}}},render:()=>{const t=new Date,r=new Date(t);return r.setDate(r.getDate()+14),e.jsx(d,{label:"Extraction Window",placeholder:"Select an extraction date...",minDate:t,maxDate:r})}},q={args:{label:"Recon Date",size:"sm"}},z={args:{label:"Recon Date",size:"md"}},Y={args:{label:"Recon Date",size:"lg"}},W={args:{label:"Handshake Expiry",error:"Selected date has already lapsed"}},O={args:{label:"Archive Purge Date",disabled:!0,defaultValue:new Date(2045,2,14)}},$={parameters:{docs:{description:{story:"Selected date lives in the parent — useful for syncing the picker with other UI state."}}},render:()=>{const t=()=>{const[r,n]=i.useState(null);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("span",{className:"text-xs text-muted",children:["Selected: ",r?r.toDateString():"none"]}),e.jsx(d,{label:"Neural Link Activation",value:r,onValueChange:n})]})};return e.jsx(t,{})}},B={render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-8 bg-base max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Variants"}),e.jsxs("div",{className:"flex gap-6 flex-wrap items-start",children:[e.jsx(d,{label:"Primary",variant:"primary"}),e.jsx(d,{label:"Secondary",variant:"secondary"}),e.jsx(d,{label:"Ghost",variant:"ghost"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"Sizes"}),e.jsxs("div",{className:"flex gap-6 flex-wrap items-start",children:[e.jsx(d,{label:"Small",size:"sm"}),e.jsx(d,{label:"Medium",size:"md"}),e.jsx(d,{label:"Large",size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-4",children:"States"}),e.jsxs("div",{className:"flex gap-6 flex-wrap items-start",children:[e.jsx(d,{label:"With Error",error:"Selected date has already lapsed"}),e.jsx(d,{label:"Disabled",disabled:!0,defaultValue:new Date(2045,2,14)})]})]})]})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Deployment Date',
    placeholder: 'Select a date...'
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Neural Sync Window',
    variant: 'primary'
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uplink Schedule',
    variant: 'secondary'
  }
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Cold Storage Timestamp',
    variant: 'ghost'
  }
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recon Date',
    size: 'sm'
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recon Date',
    size: 'md'
  }
}`,...z.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recon Date',
    size: 'lg'
  }
}`,...Y.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Handshake Expiry',
    error: 'Selected date has already lapsed'
  }
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Archive Purge Date',
    disabled: true,
    defaultValue: new Date(2045, 2, 14)
  }
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const $e=["Default","Primary","Secondary","Ghost","WithBoundedRange","Small","Medium","Large","WithError","Disabled","Controlled","AllVariants"];export{B as AllVariants,$ as Controlled,A as Default,O as Disabled,F as Ghost,Y as Large,z as Medium,R as Primary,I as Secondary,q as Small,L as WithBoundedRange,W as WithError,$e as __namedExportsOrder,Oe as default};
