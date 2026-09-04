import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-BUcRIGg7.js";import{g as ne,R as le}from"./responsive-DiKsBA-2.js";import{c as S}from"./cn-CNMN3A1O.js";import{C as ze}from"./index-Dm1LNrgC.js";import"./preload-helper-D9Z9MdNV.js";const n=({label:d,options:s,value:V,defaultValue:K,onValueChange:Q,placeholder:ce,variant:Z="primary",size:J="md",disabled:h=!1,helperText:_,error:u,allowCustomValue:N=!1,noOptionsText:de="No matches found",ariaLabel:X,className:pe="",id:ue,name:me})=>{const y=V!==void 0,[he,be]=r.useState(K??""),[fe,ge]=r.useState(!1),c=y?V:he,B=!y&&K===void 0&&!fe,b=r.useCallback(e=>{if(B)return"";const t=s.find(i=>i.value===e);return t?t.label:N?e:""},[s,N,B]),[C,T]=r.useState(()=>b(c)),[l,O]=r.useState(!1),[p,v]=r.useState(-1),Y=r.useRef(b);r.useEffect(()=>{Y.current=b},[b]);const G=r.useRef(null);r.useEffect(()=>{if(G.current===c){G.current=null;return}T(Y.current(c))},[c]);const ve=r.useId(),f=ue||ve,j=`${f}-listbox`,xe=me||f,ee=r.useRef([]),[ae,re]=r.useState(!1),x=r.useMemo(()=>{if(!ae)return s;const e=C.trim().toLowerCase();return e?s.filter(t=>t.label.toLowerCase().includes(e)):s},[s,C,ae]),m=r.useMemo(()=>x.map((e,t)=>e.disabled?-1:t).filter(e=>e!==-1),[x]),te=r.useRef(s);r.useEffect(()=>{te.current!==s&&(te.current=s,l&&v(-1))},[s,l]),r.useEffect(()=>{l&&p>=0&&ee.current[p]?.scrollIntoView?.({block:"nearest"})},[p,l]);const k=r.useCallback(()=>{O(!1),v(-1),re(!1)},[]),q=r.useCallback(e=>{y||be(e),ge(!0),Q?.(e)},[y,Q]),z=r.useCallback(e=>{e.disabled||(q(e.value),y||T(e.label),k())},[q,y,k]),oe=r.useCallback(()=>{const e=C.trim();if(N&&e&&e!==b(c)){const t=s.find(i=>!i.disabled&&i.label.toLowerCase()===e.toLowerCase());if(t){z(t);return}G.current=e,q(e)}else T(b(c));k()},[C,N,b,c,s,z,q,k]),ye=()=>{T(b(c)),k()},se=e=>{if(m.length===0)return;const t=m.indexOf(p);let i;t===-1?i=e===1?0:m.length-1:i=(t+e+m.length)%m.length,v(m[i])},we=e=>{T(e.target.value),O(!0),v(-1),re(!0)},Se=e=>{if(!h)switch(e.key){case"ArrowDown":e.preventDefault(),l||O(!0),se(1);break;case"ArrowUp":e.preventDefault(),l||O(!0),se(-1);break;case"Home":l&&(e.preventDefault(),v(m[0]??-1));break;case"End":l&&(e.preventDefault(),v(m[m.length-1]??-1));break;case"Enter":e.preventDefault(),l&&p>=0&&x[p]?z(x[p]):oe();break;case"Escape":e.preventDefault(),ye();break}},Ce=e=>ne(e,le.input),Te=(e,t,i)=>{if(t)return"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error";if(i){const g={primary:"border-2 border-accent/20 shadow-none",secondary:"border-2 border-secondary/20 shadow-none",danger:"border-2 border-error/20 shadow-none",ghost:"border border-border-default shadow-none"};return g[e]||g.primary}const w={primary:"border-2 border-accent shadow-input-accent hover:shadow-lg-accent focus:ring-2 focus:ring-accent focus:shadow-lg-accent",secondary:"border-2 border-secondary shadow-secondary/30 hover:shadow-secondary focus:ring-2 focus:ring-secondary focus:shadow-secondary",danger:"border-2 border-error shadow-error/30 hover:shadow-error focus:ring-2 focus:ring-error focus:shadow-error",ghost:"border border-border-default shadow-none hover:border-accent focus:ring-2 focus:ring-accent focus:border-accent"};return w[e]||w.primary},Oe=()=>{if(u)return"text-error";if(h)return"text-muted/50";const e={primary:"text-accent",secondary:"text-secondary",danger:"text-error",ghost:"text-muted"};return e[Z]||e.primary},ke=S("w-full rounded-lg bg-surface text-default placeholder-muted transition-all duration-300 focus:outline-none px-4 pr-10",h?"cursor-not-allowed opacity-60":"cursor-text",Ce(J),Te(Z,!!u,h),pe),Ve=S("block text-sm font-medium mb-2 transition-colors duration-200",h?"text-muted opacity-50":u?"text-error":"text-default"),Ne=S("mt-2 text-xs font-mono transition-colors duration-200",u?"text-error":"text-muted"),je=ne(J,le.dropdownMenu),qe=u?`${f}-error`:_?`${f}-help`:void 0;return a.jsxs("div",{className:"w-full",children:[d&&a.jsx("label",{htmlFor:f,className:Ve,children:d}),a.jsxs("div",{className:"relative w-full",children:[a.jsx("input",{type:"hidden",name:xe,value:c}),a.jsx("input",{id:f,type:"text",role:"combobox","aria-expanded":l,"aria-controls":j,"aria-autocomplete":"list","aria-activedescendant":l&&p>=0?`${j}-option-${p}`:void 0,"aria-label":X,"aria-invalid":!!u,"aria-describedby":qe,"aria-disabled":h||void 0,autoComplete:"off",disabled:h,placeholder:ce,value:C,onChange:we,onFocus:()=>!h&&O(!0),onKeyDown:Se,onBlur:oe,className:ke}),a.jsx("div",{className:S("pointer-events-none absolute inset-y-0 right-0 flex items-center px-3",Oe()),children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"})})}),l&&a.jsx("ul",{id:j,role:"listbox","aria-label":X||d||"Options",className:"absolute z-50 mt-2 w-full max-h-60 overflow-y-auto overflow-x-hidden rounded-lg border-2 border-border-default bg-surface shadow-secondary py-1",children:x.length===0?a.jsx("li",{className:"px-4 py-2 text-sm text-muted font-mono",role:"presentation",children:de}):x.map((e,t)=>{const i=t===p,w=!B&&e.value===c&&x.findIndex(g=>g.value===c)===t;return a.jsxs("li",{id:`${j}-option-${t}`,role:"option","aria-selected":w,"aria-disabled":e.disabled||void 0,ref:g=>{ee.current[t]=g},onMouseDown:g=>g.preventDefault(),onClick:()=>z(e),onMouseEnter:()=>!e.disabled&&v(t),className:S("flex items-center justify-between gap-2 font-mono transition-colors duration-150",je,e.disabled?"cursor-not-allowed text-muted/40":S("cursor-pointer",i?"bg-base/70 text-secondary":w?"text-accent":"text-default")),children:[a.jsx("span",{children:e.label}),w&&a.jsx("svg",{className:"w-4 h-4 flex-shrink-0 text-accent",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})]},e.value)})})]}),(_||u)&&a.jsx("div",{id:u?`${f}-error`:`${f}-help`,className:Ne,children:u||_})]})};n.displayName="CyberUI.Combobox";n.__docgenInfo={description:`A cyberpunk-styled searchable dropdown — a text input that filters a list
of options as the user types, extending Select's controlled-value pattern
with Input's focus-glow styling. Follows the WAI-ARIA combobox pattern
(role="combobox" + a listbox popup with \`aria-activedescendant\`) so arrow
keys move a highlight without moving DOM focus off the input.

@example
// Basic searchable select
<Combobox
  label="Target Sector"
  options={[
    { value: 'sector-7', label: 'Sector 7 — Corporate Plaza' },
    { value: 'sector-9', label: 'Sector 9 — The Sprawl' },
  ]}
  onValueChange={setSector}
/>

@example
// Free-text tag entry
<Combobox
  label="Tag Search"
  options={knownTags}
  allowCustomValue
  value={tag}
  onValueChange={setTag}
/>`,methods:[],displayName:"CyberUI.Combobox",props:{label:{required:!1,tsType:{name:"string"},description:"Label rendered above the input."},options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:"Full list of options to filter and choose from."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value. Pass alongside `onValueChange` to fully\ncontrol selection — the displayed text always reflects this value's\nmatching option label (or the raw string itself when `allowCustomValue`\nis set and no option matches it)."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initial value for uncontrolled usage. @default ''"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Fired when the value is committed: on option selection (click or Enter),\nand on blur/Enter with unmatched text when `allowCustomValue` is set."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown when the input is empty."},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"}]},description:`Visual style variant, matching Input/Select's palette vocabulary.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the input and dropdown option text. Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input and prevents opening the dropdown. @default false",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Optional helper text shown below the input."},error:{required:!1,tsType:{name:"string"},description:"Error message that overrides helper text and highlights the input."},allowCustomValue:{required:!1,tsType:{name:"boolean"},description:`Allows committing free text that doesn't match any option, instead of
requiring a selection from the list. A typed value is committed as-is
on Enter (when no option is highlighted) or on blur; text that exactly
matches an option's label (case-insensitive) selects that option
instead. When \`false\` (the default), unmatched text reverts to the
last committed value's label on blur or Escape.
@default false`,defaultValue:{value:"false",computed:!1}},noOptionsText:{required:!1,tsType:{name:"string"},description:`Message shown in the dropdown when no options match the current query.
@default 'No matches found'`,defaultValue:{value:"'No matches found'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the input and listbox, used when `label` isn't descriptive enough on its own."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer wrapper.",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Element id for the input. Auto-generated via `useId` when omitted."},name:{required:!1,tsType:{name:"string"},description:"Name attribute for native form submission. Applied to a hidden input\nthat carries the committed option `value` (not the display label), so\n`FormData`/uncontrolled form libraries read the same thing `Select`'s\nnative `<select>` would."}}};const o=[{value:"sector-1",label:"Sector 1 — Corporate Plaza"},{value:"sector-2",label:"Sector 2 — The Sprawl"},{value:"sector-3",label:"Sector 3 — Docklands"},{value:"sector-4",label:"Sector 4 — Undercroft"},{value:"sector-5",label:"Sector 5 — Black Site",disabled:!0},{value:"sector-6",label:"Sector 6 — Neon District"},{value:"sector-7",label:"Sector 7 — Old Town"}],H=ze.map(d=>({value:d.toLowerCase().replace(/\s+/g,"_"),label:d})),ie=[{value:"netrunner",label:"Netrunner"},{value:"solo",label:"Solo"},{value:"fixer",label:"Fixer"},{value:"techie",label:"Techie"},{value:"rockerboy",label:"Rockerboy"}],Fe={title:"Components/Combobox",component:n,decorators:[d=>a.jsx("div",{className:"min-h-[320px] pt-4",children:a.jsx(d,{})})],parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed searchable dropdown — a text input that filters a list of options as the user types, for long option lists (country pickers, tag search, corporation lookup).

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Combobox } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const options = [
  { value: 'sector-1', label: 'Sector 1 — Corporate Plaza' },
  { value: 'sector-2', label: 'Sector 2 — The Sprawl' },
  { value: 'sector-3', label: 'Sector 3 — Docklands', disabled: true },
];

function Example() {
  const [value, setValue] = useState('');
  return (
    <Combobox
      label="Target Sector"
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Search sectors..."
    />
  );
}

<Combobox variant="primary" options={options} />
<Combobox variant="secondary" options={options} />
<Combobox variant="danger" options={options} />
<Combobox variant="ghost" options={options} />

<Combobox size="sm" options={options} />
<Combobox size="md" options={options} />
<Combobox size="lg" options={options} />

// Free-text entry — commits typed text that doesn't match any option
<Combobox options={tagOptions} allowCustomValue />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`options\` | \`ComboboxOption[]\` | ✅ | - | Full list of options to filter and choose from |
| \`value\` | \`string\` | ❌ | - | Controlled selected value |
| \`defaultValue\` | \`string\` | ❌ | \`''\` | Initial value for uncontrolled usage |
| \`onValueChange\` | \`(value: string) => void\` | ❌ | - | Fired when the value is committed |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Visual style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Input and dropdown size (supports responsive values) |
| \`label\` | \`string\` | ❌ | - | Label text |
| \`placeholder\` | \`string\` | ❌ | - | Placeholder shown when input is empty |
| \`helperText\` | \`string\` | ❌ | - | Helper text below the input |
| \`error\` | \`string\` | ❌ | - | Error message (overrides helperText) |
| \`allowCustomValue\` | \`boolean\` | ❌ | \`false\` | Allow committing free text that doesn't match any option |
| \`noOptionsText\` | \`string\` | ❌ | \`'No matches found'\` | Message shown when no options match the query |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Whether the combobox is disabled |
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"],description:"Visual style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input and dropdown size (supports responsive values)"},label:{control:"text",description:"Label text"},placeholder:{control:"text",description:"Placeholder shown when input is empty"},helperText:{control:"text",description:"Helper text below the input"},error:{control:"text",description:"Error message (overrides helperText)"},allowCustomValue:{control:"boolean",description:"Allow committing free text that doesn't match any option"},disabled:{control:"boolean",description:"Whether the combobox is disabled"}},args:{options:o,placeholder:"Search sectors..."}},D={args:{variant:"primary",label:"Target Sector",options:o,placeholder:"Search sectors...",helperText:"Type to filter — arrow keys to navigate"}},E={args:{variant:"secondary",label:"Corporate Faction",options:H,placeholder:"Search factions...",helperText:"Neural link authorization required"}},I={args:{variant:"danger",label:"Purge Target",options:o,placeholder:"Search targets...",helperText:"Irreversible — verify before confirming"}},A={args:{variant:"ghost",label:"Ghost Protocol",options:o,placeholder:"Search protocols...",helperText:"Stealth mode configuration"}},R={args:{variant:"primary",size:"sm",label:"Small Combobox",options:o,placeholder:"Search..."}},M={args:{variant:"primary",size:"md",label:"Medium Combobox",options:o,placeholder:"Search..."}},F={args:{variant:"primary",size:"lg",label:"Large Combobox",options:o,placeholder:"Search..."}},P={args:{variant:"primary",label:"Corporate Access",options:H,error:"Faction selection required for neural link access",placeholder:"Search factions..."}},L={args:{variant:"primary",label:"System Offline",options:o,placeholder:"Unavailable...",helperText:"Neural interface disconnected",disabled:!0}},$={args:{variant:"primary",label:"Tag Search",options:ie,placeholder:"Search or add a tag...",helperText:"Type a new tag and press Enter to add it",allowCustomValue:!0}},U={render:()=>{const d=()=>{const[s,V]=r.useState("sector-2");return a.jsx("div",{className:"flex flex-col gap-4 min-w-96",children:a.jsx(n,{variant:"primary",label:"Target Sector",options:o,value:s,onValueChange:V,placeholder:"Search sectors...",helperText:`Current lock: ${s||"none"}`})})};return a.jsx(d,{})}},W={render:()=>a.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[a.jsx("h4",{className:"text-secondary font-semibold",children:"Combobox Variants"}),a.jsx(n,{variant:"primary",label:"Primary Combobox",options:o,placeholder:"Primary search...",helperText:"Neural interface ready"}),a.jsx(n,{variant:"secondary",label:"Secondary Combobox",options:H,placeholder:"Secondary search...",helperText:"Database connection active"}),a.jsx(n,{variant:"danger",label:"Danger Combobox",options:o,placeholder:"Critical search...",helperText:"High-security mode"}),a.jsx(n,{variant:"ghost",label:"Ghost Combobox",options:o,placeholder:"Minimal search...",helperText:"Stealth mode active"}),a.jsx("h4",{className:"text-secondary font-semibold pt-4",children:"Sizes"}),a.jsx(n,{variant:"primary",size:"sm",label:"Small",options:o,placeholder:"Small search..."}),a.jsx(n,{variant:"primary",size:"md",label:"Medium",options:o,placeholder:"Medium search..."}),a.jsx(n,{variant:"primary",size:"lg",label:"Large",options:o,placeholder:"Large search..."}),a.jsx("h4",{className:"text-secondary font-semibold pt-4",children:"States"}),a.jsx(n,{variant:"primary",label:"Error State",options:o,error:"Selection failed — authorization required",placeholder:"Search sectors..."}),a.jsx(n,{variant:"primary",label:"Disabled State",options:o,placeholder:"System offline...",helperText:"Neural interface disconnected",disabled:!0}),a.jsx(n,{variant:"primary",label:"Free-Text Tag Entry",options:ie,placeholder:"Search or add a tag...",allowCustomValue:!0,helperText:"Type a new tag and press Enter"})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Target Sector",
    options: sectorOptions,
    placeholder: "Search sectors...",
    helperText: "Type to filter — arrow keys to navigate"
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Corporate Faction",
    options: corporationOptions,
    placeholder: "Search factions...",
    helperText: "Neural link authorization required"
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    label: "Purge Target",
    options: sectorOptions,
    placeholder: "Search targets...",
    helperText: "Irreversible — verify before confirming"
  }
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    label: "Ghost Protocol",
    options: sectorOptions,
    placeholder: "Search protocols...",
    helperText: "Stealth mode configuration"
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Combobox",
    options: sectorOptions,
    placeholder: "Search..."
  }
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Combobox",
    options: sectorOptions,
    placeholder: "Search..."
  }
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Combobox",
    options: sectorOptions,
    placeholder: "Search..."
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Corporate Access",
    options: corporationOptions,
    error: "Faction selection required for neural link access",
    placeholder: "Search factions..."
  }
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "System Offline",
    options: sectorOptions,
    placeholder: "Unavailable...",
    helperText: "Neural interface disconnected",
    disabled: true
  }
}`,...L.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Tag Search",
    options: tagOptions,
    placeholder: "Search or add a tag...",
    helperText: "Type a new tag and press Enter to add it",
    allowCustomValue: true
  }
}`,...$.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledDemo = () => {
      const [value, setValue] = useState("sector-2");
      return <div className="flex flex-col gap-4 min-w-96">
          <Combobox variant="primary" label="Target Sector" options={sectorOptions} value={value} onValueChange={setValue} placeholder="Search sectors..." helperText={\`Current lock: \${value || "none"}\`} />
        </div>;
    };
    return <ControlledDemo />;
  }
}`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Combobox Variants</h4>

      <Combobox variant="primary" label="Primary Combobox" options={sectorOptions} placeholder="Primary search..." helperText="Neural interface ready" />

      <Combobox variant="secondary" label="Secondary Combobox" options={corporationOptions} placeholder="Secondary search..." helperText="Database connection active" />

      <Combobox variant="danger" label="Danger Combobox" options={sectorOptions} placeholder="Critical search..." helperText="High-security mode" />

      <Combobox variant="ghost" label="Ghost Combobox" options={sectorOptions} placeholder="Minimal search..." helperText="Stealth mode active" />

      <h4 className="text-secondary font-semibold pt-4">Sizes</h4>

      <Combobox variant="primary" size="sm" label="Small" options={sectorOptions} placeholder="Small search..." />
      <Combobox variant="primary" size="md" label="Medium" options={sectorOptions} placeholder="Medium search..." />
      <Combobox variant="primary" size="lg" label="Large" options={sectorOptions} placeholder="Large search..." />

      <h4 className="text-secondary font-semibold pt-4">States</h4>

      <Combobox variant="primary" label="Error State" options={sectorOptions} error="Selection failed — authorization required" placeholder="Search sectors..." />

      <Combobox variant="primary" label="Disabled State" options={sectorOptions} placeholder="System offline..." helperText="Neural interface disconnected" disabled />

      <Combobox variant="primary" label="Free-Text Tag Entry" options={tagOptions} placeholder="Search or add a tag..." allowCustomValue helperText="Type a new tag and press Enter" />
    </div>
}`,...W.parameters?.docs?.source}}};const Pe=["Default","Secondary","Danger","Ghost","Small","Medium","Large","WithError","Disabled","AllowCustomValue","Controlled","AllVariants"];export{W as AllVariants,$ as AllowCustomValue,U as Controlled,I as Danger,D as Default,L as Disabled,A as Ghost,F as Large,M as Medium,E as Secondary,R as Small,P as WithError,Pe as __namedExportsOrder,Fe as default};
