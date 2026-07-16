import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D,e as z}from"./iframe-Dqm9SG0A.js";import{g as T,R as S}from"./responsive-Kpc6VtDu.js";import{c as n}from"./cn-CNMN3A1O.js";import"./preload-helper-D9Z9MdNV.js";const _={default:"text-default",error:"text-error",success:"text-success"},M={default:"text-muted",error:"text-error",success:"text-success"},a=({label:r,helperText:q,error:v,success:F,required:y=!1,disabled:l=!1,size:w="md",children:t,id:j,className:C=""})=>{const k=D.useId(),b=j||t.props.id||k,i=v?"error":F?"success":"default",f=v||F||q,N=f?`${b}-description`:void 0,E=[t.props["aria-describedby"],N].filter(Boolean).join(" ")||void 0,I=x=>T(x,S.formField.label),L=x=>T(x,S.formField.message),V=n("block font-medium transition-colors duration-200",I(w),l?"text-muted opacity-50":_[i]),R=n("font-mono transition-colors duration-200",L(w),l?"text-muted opacity-50":M[i]),A=z.cloneElement(t,{id:b,disabled:l||!!t.props.disabled,"aria-invalid":i==="error"||void 0,"aria-required":y||void 0,"aria-describedby":E});return e.jsxs("div",{className:n("w-full space-y-2",C),children:[r&&e.jsxs("label",{htmlFor:b,className:V,children:[r,y&&e.jsx("span",{className:n("ml-1",l?"text-muted opacity-50":"text-error"),"aria-hidden":"true",children:"*"})]}),A,f&&e.jsx("div",{id:N,role:i==="error"?"alert":void 0,className:R,children:f})]})};a.displayName="CyberUI.FormField";a.__docgenInfo={description:`A cyberpunk-styled wrapper that gives any form control a consistent
label, helper text, and error/success validation state — without
requiring the control itself to know about labels or messages.

Built-in CyberUI controls like \`Input\` and \`Select\` already manage their
own label/error wiring; FormField is for wrapping native elements
(\`<textarea>\`, a raw \`<input>\`) or custom/third-party controls that don't.

@example
// Wrapping a native textarea
<FormField label="Transmission Log" helperText="Max 500 characters">
  <textarea className="w-full rounded-lg bg-surface border-2 border-accent p-3" />
</FormField>

@example
// Validation states
<FormField label="Access Code" error="Invalid — access denied">
  <input className="w-full rounded-lg bg-surface border-2 p-3" />
</FormField>

<FormField label="Callsign" success="Callsign verified" required>
  <input className="w-full rounded-lg bg-surface border-2 p-3" />
</FormField>`,methods:[],displayName:"CyberUI.FormField",props:{label:{required:!1,tsType:{name:"string"},description:"Label text rendered above the field."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown below the field. Overridden by `error` or `success` when set."},error:{required:!1,tsType:{name:"string"},description:"Error message. Takes priority over `success` and `helperText` (in that order) when more than one is set, sets validation state to `'error'`, and marks the field `aria-invalid`."},success:{required:!1,tsType:{name:"string"},description:"Success message. Overrides `helperText`, but is itself overridden by `error` when both are set."},required:{required:!1,tsType:{name:"boolean"},description:"Marks the field as required — appends a `*` indicator to the label (only\nrendered when `label` is also set) and sets `aria-required` on the child\ncontrol.\n@default false",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the field — dims the label/message and sets `disabled` on the\nchild control. The control ends up disabled if either this prop or the\nchild's own `disabled` prop is true.\n@default false",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Font size of the label and helper/error/success message. Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<FormFieldChildProps>",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  disabled?: boolean;
  'aria-invalid'?: boolean | 'true' | 'false';
  'aria-required'?: boolean;
  'aria-describedby'?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"aria-invalid",value:{name:"union",raw:"boolean | 'true' | 'false'",elements:[{name:"boolean"},{name:"literal",value:"'true'"},{name:"literal",value:"'false'"}],required:!1}},{key:"aria-required",value:{name:"boolean",required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}}]}}]},description:"The form control this field wraps — a single React element that accepts\n`id`, `disabled`, `aria-invalid`, `aria-required`, and `aria-describedby`\n(native form elements, or a custom control that forwards them)."},id:{required:!1,tsType:{name:"string"},description:"Id applied to the child control and referenced by the label's `htmlFor`. Auto-generated when omitted."},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the outer wrapper.",defaultValue:{value:"''",computed:!1}}}};const s="w-full rounded-lg bg-surface text-default placeholder-muted border-2 border-accent px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent",W={title:"Components/FormField",component:a,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-styled wrapper that gives any form control a consistent label, helper text, and error/success validation state — without the control itself needing to know about labels or messages.\n\nBuilt-in CyberUI controls like `Input` and `Select` already manage their own label/error wiring; `FormField` is for wrapping native elements (`<textarea>`, a raw `<input>`) or custom/third-party controls that don't.\n\n**When to use `Input`/`Select` vs `FormField`:**\n\n- **Use `Input`/`Select` directly** whenever your control is one of those two. They already accept `label`/`helperText`/`error`, and their border/background actively react to their own `error` prop — you get more polished, integrated visual feedback for less code. Don't wrap them in `FormField`; the two systems would be redundant and `FormField` won't add anything (only clutter the DOM with an extra label).\n- **Use `FormField`** only for what `Input`/`Select` don't cover: a native `<textarea>`, a native `<input type=\"range\">`/`type=\"date\"`, or a third-party/custom control (date picker, rich text editor, combobox) that doesn't manage its own label wiring.\n- **Know the limit:** `FormField` only recolors the *label* and *helper/error/success message* text, and sets `aria-invalid`/`aria-required`/`aria-describedby` on the child. It has no way to restyle the child's own border/background on error/success, since it doesn't own that element's class list. If you want the wrapped control itself to visually flag an error (e.g. a red border), wire that up yourself — conditionally apply your own error class based on the same `error`/`success` value you pass to `FormField`.\n\n**Usage:**\n\n```tsx\nimport React from 'react';\nimport { FormField } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n<FormField label=\"Transmission Log\" helperText=\"Max 500 characters\">\n  <textarea maxLength={500} className=\"w-full rounded-lg bg-surface border-2 border-accent p-3\" />\n</FormField>\n\n<FormField label=\"Access Code\" error=\"Invalid — access denied\">\n  <input className=\"w-full rounded-lg bg-surface border-2 p-3\" />\n</FormField>\n\n<FormField label=\"Callsign\" success=\"Callsign verified\" required>\n  <input className=\"w-full rounded-lg bg-surface border-2 p-3\" />\n</FormField>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `label` | `string` | ❌ | - | Label text rendered above the field |\n| `helperText` | `string` | ❌ | - | Helper text, overridden by `error`/`success` |\n| `error` | `string` | ❌ | - | Error message, sets validation state to error |\n| `success` | `string` | ❌ | - | Success message, sets validation state to success |\n| `required` | `boolean` | ❌ | `false` | Appends a `*` indicator and sets `aria-required` |\n| `disabled` | `boolean` | ❌ | `false` | Dims label/message and disables the child control |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>` | ❌ | `'md'` | Label/message font size (supports responsive values) |\n| `children` | `React.ReactElement` | ✅ | - | The form control this field wraps |\n| `id` | `string` | ❌ | - | Id applied to the child control |\n| `className` | `string` | ❌ | - | Additional class name for the outer wrapper |\n"}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text rendered above the field"},helperText:{control:"text",description:"Helper text, overridden by error/success"},error:{control:"text",description:"Error message, sets validation state to error"},success:{control:"text",description:"Success message, sets validation state to success"},required:{control:"boolean",description:"Appends a * indicator and sets aria-required"},disabled:{control:"boolean",description:"Dims label/message and disables the child control"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Label/message font size (supports responsive values)"}}},d={args:{label:"Callsign",helperText:"Visible to other operatives on the grid"},render:r=>e.jsx("div",{className:"min-w-96",children:e.jsx(a,{...r,children:e.jsx("input",{className:s,placeholder:"Enter callsign..."})})})},o={args:{label:"Access Code",error:"Invalid sequence — access denied"},render:r=>e.jsx("div",{className:"min-w-96",children:e.jsx(a,{...r,children:e.jsx("input",{className:s,defaultValue:"000-XXX"})})})},c={args:{label:"Neural Handshake",success:"Handshake verified — link established"},render:r=>e.jsx("div",{className:"min-w-96",children:e.jsx(a,{...r,children:e.jsx("input",{className:s,defaultValue:"synced"})})})},m={args:{label:"Operative Designation",required:!0,helperText:"Required for grid clearance"},render:r=>e.jsx("div",{className:"min-w-96",children:e.jsx(a,{...r,children:e.jsx("input",{className:s,placeholder:"Enter designation..."})})})},u={args:{label:"System Offline",helperText:"Neural interface disconnected",disabled:!0},render:r=>e.jsx("div",{className:"min-w-96",children:e.jsx(a,{...r,children:e.jsx("input",{className:s,defaultValue:"connection_lost"})})})},p={args:{label:"Transmission Log",helperText:"Max 500 characters"},render:r=>e.jsx("div",{className:"min-w-96",children:e.jsx(a,{...r,children:e.jsx("textarea",{className:s,rows:4,maxLength:500,placeholder:"Log transmission details..."})})})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx(a,{label:"Small Field",size:"sm",helperText:"Compact label and message text",children:e.jsx("input",{className:s,placeholder:"Small..."})}),e.jsx(a,{label:"Medium Field",size:"md",helperText:"Default label and message text",children:e.jsx("input",{className:s,placeholder:"Medium..."})}),e.jsx(a,{label:"Large Field",size:"lg",helperText:"Large label and message text",children:e.jsx("input",{className:s,placeholder:"Large..."})})]})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"FormField Validation States"}),e.jsx(a,{label:"Default State",helperText:"Awaiting neural input...",children:e.jsx("input",{className:s,placeholder:"Enter command..."})}),e.jsx(a,{label:"Required Field",required:!0,helperText:"Required for grid clearance",children:e.jsx("input",{className:s,placeholder:"Enter designation..."})}),e.jsx(a,{label:"Error State",error:"Invalid sequence — access denied",children:e.jsx("input",{className:s,defaultValue:"000-XXX"})}),e.jsx(a,{label:"Success State",success:"Handshake verified — link established",children:e.jsx("input",{className:s,defaultValue:"synced"})}),e.jsx(a,{label:"Disabled State",helperText:"Neural interface disconnected",disabled:!0,children:e.jsx("input",{className:s,defaultValue:"connection_lost"})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Callsign',
    helperText: 'Visible to other operatives on the grid'
  },
  render: args => <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldClasses} placeholder="Enter callsign..." />
      </FormField>
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Access Code',
    error: 'Invalid sequence — access denied'
  },
  render: args => <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldClasses} defaultValue="000-XXX" />
      </FormField>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Neural Handshake',
    success: 'Handshake verified — link established'
  },
  render: args => <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldClasses} defaultValue="synced" />
      </FormField>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Operative Designation',
    required: true,
    helperText: 'Required for grid clearance'
  },
  render: args => <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldClasses} placeholder="Enter designation..." />
      </FormField>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'System Offline',
    helperText: 'Neural interface disconnected',
    disabled: true
  },
  render: args => <div className="min-w-96">
      <FormField {...args}>
        <input className={fieldClasses} defaultValue="connection_lost" />
      </FormField>
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Transmission Log',
    helperText: 'Max 500 characters'
  },
  render: args => <div className="min-w-96">
      <FormField {...args}>
        <textarea className={fieldClasses} rows={4} maxLength={500} placeholder="Log transmission details..." />
      </FormField>
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <FormField label="Small Field" size="sm" helperText="Compact label and message text">
        <input className={fieldClasses} placeholder="Small..." />
      </FormField>
      <FormField label="Medium Field" size="md" helperText="Default label and message text">
        <input className={fieldClasses} placeholder="Medium..." />
      </FormField>
      <FormField label="Large Field" size="lg" helperText="Large label and message text">
        <input className={fieldClasses} placeholder="Large..." />
      </FormField>
    </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">FormField Validation States</h4>

      <FormField label="Default State" helperText="Awaiting neural input...">
        <input className={fieldClasses} placeholder="Enter command..." />
      </FormField>

      <FormField label="Required Field" required helperText="Required for grid clearance">
        <input className={fieldClasses} placeholder="Enter designation..." />
      </FormField>

      <FormField label="Error State" error="Invalid sequence — access denied">
        <input className={fieldClasses} defaultValue="000-XXX" />
      </FormField>

      <FormField label="Success State" success="Handshake verified — link established">
        <input className={fieldClasses} defaultValue="synced" />
      </FormField>

      <FormField label="Disabled State" helperText="Neural interface disconnected" disabled>
        <input className={fieldClasses} defaultValue="connection_lost" />
      </FormField>
    </div>
}`,...g.parameters?.docs?.source}}};const G=["Default","ErrorState","SuccessState","Required","Disabled","WithTextarea","Sizes","AllVariants"];export{g as AllVariants,d as Default,u as Disabled,o as ErrorState,m as Required,h as Sizes,c as SuccessState,p as WithTextarea,G as __namedExportsOrder,W as default};
