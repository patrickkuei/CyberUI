import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-BUcRIGg7.js";import{g as H,R as W}from"./responsive-DiKsBA-2.js";import{c as V}from"./cn-CNMN3A1O.js";import{w as K}from"./devWarn-C2PD3-_Q.js";import"./preload-helper-D9Z9MdNV.js";const pe={primary:"bg-gradient-to-r from-secondary to-primary shadow-primary",secondary:"bg-gradient-to-r from-primary to-secondary shadow-secondary",accent:"bg-gradient-to-r from-accent to-primary shadow-lg-accent"},fe={primary:"bg-primary shadow-primary",secondary:"bg-secondary shadow-secondary",accent:"bg-accent shadow-lg-accent"};function X(n,s){if(typeof n.setPointerCapture=="function")try{n.setPointerCapture(s)}catch{}}const u=({min:n=0,max:s=100,step:d=1,value:A,defaultValue:G,onValueChange:P,variant:z="accent",size:q="md",disabled:m=!1,label:p,showValue:$=!1,formatValue:w=D=>String(D),ariaLabel:L,ariaLabelMin:Z,ariaLabelMax:J,className:Q="",id:Y})=>{const D=c.useId(),E=Y||D,F=`${E}-label`;s<=n&&K(`slider-invalid-range-${n}-${s}`,`Slider: max (${s}) must be greater than min (${n}) — values will not update correctly.`),d<=0&&K(`slider-invalid-step-${d}`,`Slider: step (${d}) must be greater than 0.`);const[ee,ae]=c.useState(()=>A??G??n),I=A!==void 0,v=I?A:ee,i=Array.isArray(v),o=c.useMemo(()=>i?v:[v,v],[i,v]),U=c.useRef(null),[y,g]=c.useState(null),O=c.useRef(o);O.current=o;const _=c.useCallback(e=>{const r=d>0?d:1,t=Math.round((e-n)/r)*r+n,l=Math.min(s,Math.max(n,t));return Math.round(l*1e10)/1e10},[n,s,d]),f=c.useCallback((e,r)=>{const t=_(r),l=[...O.current];i?e===0?l[0]=Math.min(t,l[1]):l[1]=Math.max(t,l[0]):l[0]=t;const b=i?[l[0],l[1]]:l[0];I||ae(b),P?.(b)},[i,I,P,_]),M=c.useCallback(e=>{const r=U.current?.getBoundingClientRect();if(!r||r.width===0)return n;const t=(e-r.left)/r.width,l=Math.min(1,Math.max(0,t));return n+l*(s-n)},[n,s]);c.useEffect(()=>{if(!y)return;if(m){g(null);return}const{index:e,pointerId:r}=y,t=b=>{if(b.pointerId===r){if(m||b.buttons===0){g(null);return}f(e,M(b.clientX))}},l=b=>{b.pointerId===r&&g(null)};return window.addEventListener("pointermove",t),window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),()=>{window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l)}},[y,m,f,M]);const re=e=>{if(m)return;const r=M(e.clientX),t=i&&Math.abs(r-o[1])<Math.abs(r-o[0])?1:0;f(t,r),g({index:t,pointerId:e.pointerId}),X(e.currentTarget,e.pointerId)},ne=(e,r)=>{m||(e.stopPropagation(),e.currentTarget.focus(),g({index:r,pointerId:e.pointerId}),X(e.currentTarget,e.pointerId))},B=d*10,te=(e,r)=>{if(m)return;const t=o[r];switch(e.key){case"ArrowRight":case"ArrowUp":e.preventDefault(),f(r,t+d);break;case"ArrowLeft":case"ArrowDown":e.preventDefault(),f(r,t-d);break;case"PageUp":e.preventDefault(),f(r,t+B);break;case"PageDown":e.preventDefault(),f(r,t-B);break;case"Home":e.preventDefault(),f(r,n);break;case"End":e.preventDefault(),f(r,s);break}},h=e=>{const r=s-n;return r<=0?0:(e-n)/r*100},le=e=>y?.index===e?3:e===0?2:1,se=H(q,W.slider.track),oe=H(q,W.slider.thumb),ue=i?h(o[0]):0,ie=i?h(o[1])-h(o[0]):h(o[0]),de=i?[0,1]:[0],me=e=>i?e===0?Z||(p?`${p} minimum`:"Minimum value"):J||(p?`${p} maximum`:"Maximum value"):L||(p?void 0:"Slider"),ce=i?`${w(o[0])} – ${w(o[1])}`:w(o[0]);return a.jsxs("div",{id:E,className:V("flex flex-col gap-2",m&&"opacity-50",Q),children:[(p||$)&&a.jsxs("div",{className:"flex items-center justify-between",children:[p&&a.jsx("span",{id:F,className:"text-sm text-muted",children:p}),$&&a.jsx("span",{className:"text-sm font-mono text-accent",children:ce})]}),a.jsxs("div",{ref:U,className:V("relative w-full rounded-full bg-surface shadow-inner",se,m?"cursor-not-allowed":"cursor-pointer"),onPointerDown:re,children:[a.jsx("div",{className:V("absolute top-0 h-full rounded-full transition-[left,width] duration-100",pe[z]),style:{left:`${ue}%`,width:`${ie}%`}}),de.map(e=>a.jsx("div",{role:"slider",tabIndex:m?-1:0,"aria-valuenow":o[e],"aria-valuemin":n,"aria-valuemax":s,"aria-valuetext":w(o[e]),"aria-orientation":"horizontal","aria-disabled":m||void 0,"aria-label":me(e),"aria-labelledby":!i&&!L&&p?F:void 0,className:V("absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform","focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-base",m?"cursor-not-allowed":"cursor-grab active:cursor-grabbing hover:scale-110",oe,fe[z]),style:{left:`${h(o[e])}%`,zIndex:le(e)},onPointerDown:r=>ne(r,e),onKeyDown:r=>te(r,e)},e))]})]})};u.displayName="CyberUI.Slider";u.__docgenInfo={description:`A cyberpunk-styled slider for single-value or two-thumb range selection —
volume, brightness, price range, and similar numeric inputs.

@example
// Single value, uncontrolled
<Slider label="Brightness" defaultValue={40} showValue />

@example
// Controlled range (two thumbs)
<Slider
  label="Price Range"
  min={0}
  max={500}
  step={5}
  value={priceRange}
  onValueChange={setPriceRange}
  formatValue={(v) => \`$\${v}\`}
  showValue
/>`,methods:[],displayName:"CyberUI.Slider",props:{min:{required:!1,tsType:{name:"number"},description:`Minimum allowed value.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum allowed value.
@default 100`,defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Increment between selectable values. Also used as the Arrow key step;\nPage Up/Page Down move by `step * 10`.\n@default 1",defaultValue:{value:"1",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"Controlled value. Pass a single number for a single-thumb slider, or a\n`[min, max]` tuple for a two-thumb range slider. Whichever shape is used\non mount (via `value` or `defaultValue`) decides the mode for the\ncomponent's lifetime — switching between number and tuple afterwards is\nnot supported."},defaultValue:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"Initial value for uncontrolled usage, and what determines single- vs\nrange-mode when `value` is never passed. Ignored once `value` is set.\n@default min"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SliderValue) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:"Fired with the next value on every drag move and keyboard adjustment."},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:`Visual style, reusing the neon palette from Button/Badge/Tooltip.
\`accent\` matches LinearProgress's default accent-to-primary gradient
treatment on the filled track.
@default 'accent'`,defaultValue:{value:"'accent'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Track thickness and thumb diameter. Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disables dragging and keyboard interaction.
@default false`,defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label rendered above the track, and used to build each thumb's accessible name."},showValue:{required:!1,tsType:{name:"boolean"},description:`Renders the current numeric value(s) next to the label.
@default false`,defaultValue:{value:"false",computed:!1}},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Formats the value(s) rendered by `showValue`.\n@default String(value)",defaultValue:{value:"(v: number) => String(v)",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:'Accessible name for the thumb in single-value mode. Falls back to `label`, then `"Slider"`.'},ariaLabelMin:{required:!1,tsType:{name:"string"},description:"Accessible name for the lower thumb in range mode. Falls back to `${label} minimum`."},ariaLabelMax:{required:!1,tsType:{name:"string"},description:"Accessible name for the upper thumb in range mode. Falls back to `${label} maximum`."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the outer container.",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Optional id override for the outer container."}}};const Ve={title:"Components/Slider",component:u,parameters:{layout:"padded",docs:{description:{component:"A cyberpunk-styled slider for single-value or two-thumb range selection, with a neon-glow track fill matching LinearProgress's gradient treatment.\n\n**Usage:**\n\n```tsx\nimport { Slider } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Single value (uncontrolled)\n<Slider label=\"Brightness\" defaultValue={40} showValue />\n\n// Controlled range (two thumbs)\nconst [priceRange, setPriceRange] = useState<[number, number]>([50, 250]);\n<Slider\n  label=\"Price Range\"\n  min={0}\n  max={500}\n  step={5}\n  value={priceRange}\n  onValueChange={setPriceRange}\n  formatValue={(v) => `$${v}`}\n  showValue\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `min` | `number` | ❌ | `0` | Minimum allowed value |\n| `max` | `number` | ❌ | `100` | Maximum allowed value |\n| `step` | `number` | ❌ | `1` | Increment between values; also the Arrow key step |\n| `value` | `number \\| [number, number]` | ❌ | - | Controlled value — a tuple renders a range slider |\n| `defaultValue` | `number \\| [number, number]` | ❌ | `min` | Initial value, uncontrolled; determines single vs. range mode |\n| `onValueChange` | `(value: number \\| [number, number]) => void` | ❌ | - | Fired on every drag move / keyboard adjustment |\n| `variant` | `'primary' \\| 'secondary' \\| 'accent'` | ❌ | `'accent'` | Track fill / thumb color |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Track thickness and thumb diameter |\n| `disabled` | `boolean` | ❌ | `false` | Disables dragging and keyboard interaction |\n| `label` | `string` | ❌ | - | Label rendered above the track |\n| `showValue` | `boolean` | ❌ | `false` | Renders the current value(s) next to the label |\n| `formatValue` | `(value: number) => string` | ❌ | `String` | Formats the value(s) shown by `showValue` |\n| `className` | `string` | ❌ | - | Additional CSS classes for the outer container |\n\n**Keyboard:** `ArrowRight`/`ArrowUp` and `ArrowLeft`/`ArrowDown` step by `step`; `PageUp`/`PageDown` step by `step * 10`; `Home`/`End` jump to `min`/`max`. Range sliders expose two independently focusable thumbs.\n"}}},tags:["autodocs"],argTypes:{min:{control:"number",description:"Minimum allowed value"},max:{control:"number",description:"Maximum allowed value"},step:{control:"number",description:"Increment between values"},variant:{control:"select",options:["primary","secondary","accent"],description:"Track fill / thumb color"},size:{control:"select",options:["sm","md","lg"],description:"Track thickness and thumb diameter"},disabled:{control:"boolean",description:"Disables dragging and keyboard interaction"},label:{control:"text",description:"Label rendered above the track"},showValue:{control:"boolean",description:"Renders the current value(s) next to the label"},onValueChange:{action:"changed"}}},x={args:{label:"Neural Interface Gain",defaultValue:40,showValue:!0}},S={args:{label:"Signal Boost",variant:"primary",defaultValue:65,showValue:!0}},k={args:{label:"Coolant Flow",variant:"secondary",defaultValue:30,showValue:!0}},T={args:{label:"Firewall Threshold Window",min:0,max:500,step:5,defaultValue:[50,250],showValue:!0,formatValue:n=>`${n} MHz`}},j={render:()=>a.jsxs("div",{className:"flex flex-col gap-8 w-80",children:[a.jsx(u,{label:"Small",size:"sm",defaultValue:30,showValue:!0}),a.jsx(u,{label:"Medium (default)",size:"md",defaultValue:50,showValue:!0}),a.jsx(u,{label:"Large",size:"lg",defaultValue:70,showValue:!0})]})},R={args:{label:"Reactor Output (locked)",disabled:!0,defaultValue:80,showValue:!0}},C={parameters:{docs:{description:{story:"Value lives in the parent — useful for syncing with other controls or a form store."}}},render:()=>{const n=()=>{const[s,d]=c.useState(55);return a.jsxs("div",{className:"flex flex-col gap-3 w-80",children:[a.jsx(u,{label:"Audio Uplink Volume",value:s,onValueChange:d,showValue:!0}),a.jsxs("p",{className:"text-xs text-muted",children:["Current: ",s]})]})};return a.jsx(n,{})}},N={render:()=>a.jsxs("div",{className:"flex flex-col gap-10 p-4 bg-base w-96",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Variants"}),a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(u,{label:"Accent (default)",variant:"accent",defaultValue:45,showValue:!0}),a.jsx(u,{label:"Primary",variant:"primary",defaultValue:60,showValue:!0}),a.jsx(u,{label:"Secondary",variant:"secondary",defaultValue:35,showValue:!0})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Sizes"}),a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(u,{size:"sm",defaultValue:30}),a.jsx(u,{size:"md",defaultValue:50}),a.jsx(u,{size:"lg",defaultValue:70})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Range mode"}),a.jsx(u,{label:"Firewall Threshold Window",min:0,max:500,step:5,defaultValue:[50,250],showValue:!0,formatValue:n=>`${n} MHz`})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-secondary font-semibold mb-3",children:"Disabled"}),a.jsx(u,{label:"Reactor Output (locked)",disabled:!0,defaultValue:80,showValue:!0})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Neural Interface Gain',
    defaultValue: 40,
    showValue: true
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Signal Boost',
    variant: 'primary',
    defaultValue: 65,
    showValue: true
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Coolant Flow',
    variant: 'secondary',
    defaultValue: 30,
    showValue: true
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Firewall Threshold Window',
    min: 0,
    max: 500,
    step: 5,
    defaultValue: [50, 250],
    showValue: true,
    formatValue: (v: number) => \`\${v} MHz\`
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-80">
      <Slider label="Small" size="sm" defaultValue={30} showValue />
      <Slider label="Medium (default)" size="md" defaultValue={50} showValue />
      <Slider label="Large" size="lg" defaultValue={70} showValue />
    </div>
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Reactor Output (locked)',
    disabled: true,
    defaultValue: 80,
    showValue: true
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Value lives in the parent — useful for syncing with other controls or a form store.'
      }
    }
  },
  render: () => {
    const ControlledDemo = () => {
      const [volume, setVolume] = useState(55);
      return <div className="flex flex-col gap-3 w-80">
          <Slider label="Audio Uplink Volume" value={volume} onValueChange={setVolume} showValue />
          <p className="text-xs text-muted">Current: {volume}</p>
        </div>;
    };
    return <ControlledDemo />;
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10 p-4 bg-base w-96">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Variants</h4>
        <div className="flex flex-col gap-6">
          <Slider label="Accent (default)" variant="accent" defaultValue={45} showValue />
          <Slider label="Primary" variant="primary" defaultValue={60} showValue />
          <Slider label="Secondary" variant="secondary" defaultValue={35} showValue />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-6">
          <Slider size="sm" defaultValue={30} />
          <Slider size="md" defaultValue={50} />
          <Slider size="lg" defaultValue={70} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Range mode</h4>
        <Slider label="Firewall Threshold Window" min={0} max={500} step={5} defaultValue={[50, 250]} showValue formatValue={v => \`\${v} MHz\`} />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled</h4>
        <Slider label="Reactor Output (locked)" disabled defaultValue={80} showValue />
      </div>
    </div>
}`,...N.parameters?.docs?.source}}};const xe=["Default","Primary","Secondary","Range","Sizes","Disabled","Controlled","AllVariants"];export{N as AllVariants,C as Controlled,x as Default,R as Disabled,S as Primary,T as Range,k as Secondary,j as Sizes,xe as __namedExportsOrder,Ve as default};
