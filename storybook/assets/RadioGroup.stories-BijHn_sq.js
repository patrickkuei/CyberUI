import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-BUcRIGg7.js";import{u as ee,g as b}from"./responsive-DiKsBA-2.js";import{c as n}from"./cn-CNMN3A1O.js";import"./preload-helper-D9Z9MdNV.js";const ae={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},le={sm:"text-xs",md:"text-sm",lg:"text-base"},te={sm:"text-sm",md:"text-base",lg:"text-lg"},re={horizontal:"flex-row flex-wrap gap-x-6 gap-y-3",vertical:"flex-col gap-3"},l=({options:c,value:u,defaultValue:z,onValueChange:k,name:V,label:O,error:p,size:C="md",orientation:A="vertical",disabled:i=!1,className:q="",id:L})=>{const _=m.useId(),v=L||_,F=V||v,[U,Y]=m.useState(z),j=u!==void 0,D=j?u:U,E=m.useRef([]),M=ee(A,"vertical"),G=m.useCallback(a=>{j||Y(a),k?.(a)},[j,k]),B=(a,d)=>{i||d||G(a)},H=a=>{E.current[a]?.focus()},W=(a,d)=>{if(i)return;const r=c.map((t,Z)=>t.disabled?-1:Z).filter(t=>t!==-1);if(r.length===0)return;const o=r.indexOf(d),f=t=>{H(t),G(c[t].value)};switch(a.key){case"ArrowDown":case"ArrowRight":{a.preventDefault();const t=(o+1)%r.length;f(r[t]);break}case"ArrowUp":case"ArrowLeft":{a.preventDefault();const t=(o-1+r.length)%r.length;f(r[t]);break}}},K=b(C,ae),$=b(C,le),J=b(C,te),Q=b(A,re),X=c.findIndex(a=>!a.disabled);return e.jsxs("fieldset",{id:v,className:n("flex flex-col gap-2 border-0 m-0 p-0",q,i&&"opacity-50 cursor-not-allowed"),disabled:i,"aria-label":!O&&V?V:void 0,"aria-describedby":p&&!i?`${v}-error`:void 0,children:[O&&e.jsx("legend",{className:n("p-0 mb-2 font-medium",J,p?"text-error":"text-default"),children:O}),e.jsx("div",{className:n("flex",Q),"data-orientation":M,children:c.map((a,d)=>{const r=D===a.value,o=i||!!a.disabled,f=D!==void 0?r:d===X;return e.jsxs("label",{className:n("flex items-center gap-3 group",o?"cursor-not-allowed pointer-events-none":"cursor-pointer"),children:[e.jsxs("div",{className:n("relative flex-shrink-0",K),children:[e.jsx("input",{ref:t=>{E.current[d]=t},type:"radio",name:F,value:a.value,checked:r,disabled:o,tabIndex:f?0:-1,onChange:()=>B(a.value,a.disabled),onKeyDown:t=>W(t,d),className:"peer absolute opacity-0 w-0 h-0"}),e.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-secondary",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"10",cy:"10",r:"9",className:"fill-base/50"}),e.jsx("circle",{cx:"10",cy:"10",r:"9",strokeWidth:"1",fill:"none",className:n("transition-all duration-200 group-hover:stroke-secondary group-hover:stroke-[1.5]",o?"stroke-muted/20":r?"stroke-secondary":"stroke-secondary/50")}),e.jsx("circle",{cx:"10",cy:"10",r:"4.5",className:n("transition-all duration-200",o?r?"fill-muted/20":"fill-transparent":r?"fill-secondary":"fill-transparent")})]})]}),e.jsx("span",{className:n("transition-colors",$,o?"text-muted":"text-muted group-hover:text-secondary"),children:a.label})]},a.value)})}),p&&!i&&e.jsx("span",{id:`${v}-error`,className:"text-xs text-error",children:p})]})};l.displayName="CyberUI.RadioGroup";l.__docgenInfo={description:`A cyberpunk-styled radio group for mutually-exclusive single-choice
selection, matching Checkbox's neon SVG icon treatment. Supports both
controlled and uncontrolled modes, and arrow-key navigation between
options via a roving tabindex.

@example
// Basic radio group (uncontrolled)
<RadioGroup
  label="Access Tier"
  options={[
    { value: 'street', label: 'Street' },
    { value: 'corp', label: 'Corporate' },
    { value: 'net', label: 'Netrunner' },
  ]}
/>

@example
// Controlled, horizontal layout
<RadioGroup
  label="Difficulty"
  orientation="horizontal"
  value={difficulty}
  onValueChange={setDifficulty}
  options={difficultyOptions}
/>`,methods:[],displayName:"CyberUI.RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:"Options to render, in order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value. When set, RadioGroup stops managing its own\nselection state and `onValueChange` becomes the only way to react to\noption changes."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initial selected value for uncontrolled usage. Ignored when `value` is\nprovided."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Fired with the newly selected option's value whenever selection changes."},name:{required:!1,tsType:{name:"string"},description:'Name for the underlying native `<input type="radio">` group. Auto-generated\nwhen omitted — pass an explicit name if this RadioGroup is submitted\ninside a native `<form>` and the field name matters server-side.'},label:{required:!1,tsType:{name:"string"},description:"Group label, rendered as a `<legend>` above the options."},error:{required:!1,tsType:{name:"string"},description:"Error message to display below the options."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of each radio dot and its label. Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}],required:!1}},{key:"md",value:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}],required:!1}}]}}]},description:`Layout direction of the options. Supports responsive values.
@default 'vertical'`,defaultValue:{value:"'vertical'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables every option in the group.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer `<fieldset>`.",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Optional id override for the group's `<fieldset>` element."}}};const s=[{value:"street",label:"Street"},{value:"corp",label:"Corporate"},{value:"net",label:"Netrunner"}],P=[{value:"easy",label:"Recruit"},{value:"normal",label:"Operative"},{value:"hard",label:"Ghost"}],I=[{value:"l1",label:"Level 1 — Public"},{value:"l3",label:"Level 3 — Restricted",disabled:!0},{value:"l5",label:"Level 5 — Black Site"}],ce={title:"Components/RadioGroup",component:l,parameters:{layout:"padded",docs:{description:{component:"A cyberpunk-styled radio group for mutually-exclusive single-choice selection, matching Checkbox's neon SVG dot treatment.\n\n**Usage:**\n\n```tsx\nimport { RadioGroup } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Basic usage (uncontrolled)\n<RadioGroup\n  label=\"Access Tier\"\n  options={[\n    { value: 'street', label: 'Street' },\n    { value: 'corp', label: 'Corporate' },\n    { value: 'net', label: 'Netrunner' },\n  ]}\n/>\n\n// Controlled, horizontal layout\nconst [tier, setTier] = useState('street');\n<RadioGroup\n  label=\"Access Tier\"\n  orientation=\"horizontal\"\n  value={tier}\n  onValueChange={setTier}\n  options={tierOptions}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `options` | `RadioOption[]` | ✅ | - | Options to render, in order |\n| `value` | `string` | ❌ | - | Controlled selected value |\n| `defaultValue` | `string` | ❌ | - | Initial selected value, uncontrolled |\n| `onValueChange` | `(value: string) => void` | ❌ | - | Fired when selection changes |\n| `name` | `string` | ❌ | auto-generated | Name for the native `<input type=\"radio\">` group |\n| `label` | `string` | ❌ | - | Group label, rendered as a `<legend>` |\n| `error` | `string` | ❌ | - | Error message shown below the options |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Radio dot/label size (supports responsive values) |\n| `orientation` | `'horizontal' \\| 'vertical' \\| ResponsiveValue<...>` | ❌ | `'vertical'` | Layout direction (supports responsive values) |\n| `disabled` | `boolean` | ❌ | `false` | Disables every option in the group |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer `<fieldset>` |\n\n**Keyboard:** `ArrowDown`/`ArrowRight` and `ArrowUp`/`ArrowLeft` move focus *and* selection between enabled options, wrapping at the ends (roving tabindex — only the selected, or first enabled, option is a Tab stop).\n"}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Group label, rendered as a legend"},size:{control:"select",options:["sm","md","lg"],description:"Radio dot/label size (supports responsive values)"},orientation:{control:"select",options:["horizontal","vertical"],description:"Layout direction (supports responsive values)"},disabled:{control:"boolean",description:"Disables every option in the group"},error:{control:"text",description:"Error message shown below the options"},onValueChange:{action:"changed"}},args:{options:s}},g={args:{label:"Access Tier",defaultValue:"street"}},h={args:{label:"Difficulty",orientation:"horizontal",options:P,defaultValue:"normal"}},x={args:{label:"Access Tier",orientation:"vertical",defaultValue:"corp"}},y={args:{label:"Security Protocol",error:"You must select a clearance tier to continue"}},T={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(l,{label:"Small",size:"sm",options:s,defaultValue:"street"}),e.jsx(l,{label:"Medium (default)",size:"md",options:s,defaultValue:"street"}),e.jsx(l,{label:"Large",size:"lg",options:s,defaultValue:"street"})]})},w={args:{label:"Access Tier (locked)",disabled:!0,defaultValue:"corp"}},N={args:{label:"Clearance Level",options:I,defaultValue:"l1"},parameters:{docs:{description:{story:'"Level 3 — Restricted" is disabled — it renders dimmed and is skipped by both click and arrow-key navigation.'}}}},S={parameters:{docs:{description:{story:"Selection lives in the parent — useful for syncing with other controls or a form store."}}},render:()=>{const c=()=>{const[u,z]=m.useState("street");return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(l,{label:"Access Tier",options:s,value:u,onValueChange:z}),e.jsxs("p",{className:"text-xs text-muted",children:["Selected: ",u]})]})};return e.jsx(c,{})}},R={render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-4 bg-base",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Vertical (default)"}),e.jsx(l,{label:"Access Tier",options:s,defaultValue:"street"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Horizontal"}),e.jsx(l,{label:"Difficulty",orientation:"horizontal",options:P,defaultValue:"normal"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{size:"sm",options:s.slice(0,2),defaultValue:"street"}),e.jsx(l,{size:"md",options:s.slice(0,2),defaultValue:"street"}),e.jsx(l,{size:"lg",options:s.slice(0,2),defaultValue:"street"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Disabled group"}),e.jsx(l,{label:"Access Tier (locked)",disabled:!0,options:s,defaultValue:"corp"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Disabled option"}),e.jsx(l,{label:"Clearance Level",options:I,defaultValue:"l1"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Error state"}),e.jsx(l,{label:"Security Protocol",options:I,error:"You must select a clearance tier to continue"})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Access Tier',
    defaultValue: 'street'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Difficulty',
    orientation: 'horizontal',
    options: DIFFICULTY_OPTIONS,
    defaultValue: 'normal'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Access Tier',
    orientation: 'vertical',
    defaultValue: 'corp'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Security Protocol',
    error: 'You must select a clearance tier to continue'
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <RadioGroup label="Small" size="sm" options={TIER_OPTIONS} defaultValue="street" />
      <RadioGroup label="Medium (default)" size="md" options={TIER_OPTIONS} defaultValue="street" />
      <RadioGroup label="Large" size="lg" options={TIER_OPTIONS} defaultValue="street" />
    </div>
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Access Tier (locked)',
    disabled: true,
    defaultValue: 'corp'
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clearance Level',
    options: CLEARANCE_OPTIONS,
    defaultValue: 'l1'
  },
  parameters: {
    docs: {
      description: {
        story: '"Level 3 — Restricted" is disabled — it renders dimmed and is skipped by both click and arrow-key navigation.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Selection lives in the parent — useful for syncing with other controls or a form store.'
      }
    }
  },
  render: () => {
    const ControlledDemo = () => {
      const [tier, setTier] = useState('street');
      return <div className="flex flex-col gap-3">
          <RadioGroup label="Access Tier" options={TIER_OPTIONS} value={tier} onValueChange={setTier} />
          <p className="text-xs text-muted">Selected: {tier}</p>
        </div>;
    };
    return <ControlledDemo />;
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10 p-4 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Vertical (default)</h4>
        <RadioGroup label="Access Tier" options={TIER_OPTIONS} defaultValue="street" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Horizontal</h4>
        <RadioGroup label="Difficulty" orientation="horizontal" options={DIFFICULTY_OPTIONS} defaultValue="normal" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <RadioGroup size="sm" options={TIER_OPTIONS.slice(0, 2)} defaultValue="street" />
          <RadioGroup size="md" options={TIER_OPTIONS.slice(0, 2)} defaultValue="street" />
          <RadioGroup size="lg" options={TIER_OPTIONS.slice(0, 2)} defaultValue="street" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled group</h4>
        <RadioGroup label="Access Tier (locked)" disabled options={TIER_OPTIONS} defaultValue="corp" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled option</h4>
        <RadioGroup label="Clearance Level" options={CLEARANCE_OPTIONS} defaultValue="l1" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Error state</h4>
        <RadioGroup label="Security Protocol" options={CLEARANCE_OPTIONS} error="You must select a clearance tier to continue" />
      </div>
    </div>
}`,...R.parameters?.docs?.source}}};const ue=["Default","Horizontal","Vertical","WithError","Sizes","Disabled","DisabledOption","Controlled","AllVariants"];export{R as AllVariants,S as Controlled,g as Default,w as Disabled,N as DisabledOption,h as Horizontal,T as Sizes,x as Vertical,y as WithError,ue as __namedExportsOrder,ce as default};
