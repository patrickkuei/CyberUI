import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-B52jae2o.js";import{g as a}from"./responsive-ChLhblTX.js";import"./preload-helper-PPVm8Dsz.js";const i=({events:m,size:s="md",className:u=""})=>{const p={sm:"w-5 h-5",md:"w-6 h-6",lg:"w-8 h-8"},g={sm:"inset-1.5",md:"inset-2",lg:"inset-2.5"},v={sm:"text-sm",md:"text-base",lg:"text-lg"},x={sm:"text-xs",md:"text-sm",lg:"text-base"},f={sm:"text-[10px]",md:"text-xs",lg:"text-sm"},b={sm:"gap-3",md:"gap-4",lg:"gap-5"},h={sm:"space-y-4",md:"space-y-6",lg:"space-y-8"},y=a(s,p),w=a(s,g),j=a(s,v),T=a(s,x),_=a(s,f),S=a(s,b),N=a(s,h),z=t=>{const n={success:{border:"border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]",background:"border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]",inner:"bg-success/60"},error:{border:"border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]",background:"border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]",inner:"bg-error/60"},warning:{border:"border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]",background:"border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]",inner:"bg-warning/60"},info:{border:"border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]",background:"border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]",inner:"bg-info/60"}};return n[t]||n.info},d="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";return e.jsx("div",{className:`${N} ${u}`,children:m.map((t,n)=>{const c=z(t.status);return e.jsxs("div",{className:`flex ${S} group`,children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("div",{className:`relative ${y} flex-shrink-0 mt-1.5`,children:[e.jsx("div",{className:`absolute inset-0 border-2 transition-all duration-300 ${c.border}`,style:{clipPath:d}}),e.jsx("div",{className:`absolute ${w} ${c.inner}`,style:{clipPath:d}})]}),n<m.length-1&&e.jsx("div",{className:"w-[2px] flex-1 bg-gradient-to-b from-secondary/50 to-transparent mt-2"})]}),e.jsxs("div",{className:"flex-1 pb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h4",{className:`font-semibold text-default group-hover:text-secondary transition-colors ${j}`,children:t.title}),e.jsx("span",{className:`text-muted whitespace-nowrap ml-4 ${_}`,children:t.time})]}),t.description&&e.jsx("p",{className:`text-muted mt-1 ${T}`,children:t.description})]})]},n)})})};i.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{events:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineEvent"}],raw:"TimelineEvent[]"},description:"Array of timeline events to display."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the timeline. Supports responsive values.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes.",defaultValue:{value:"''",computed:!1}}}};const E={title:"Components/Timeline",component:i,parameters:{layout:"padded",docs:{description:{component:`A vertical timeline component for displaying events or history with cyberpunk styling.

**Usage:**

\`\`\`tsx
import { Timeline } from 'cyberui-2045';

const events = [
  {
    title: 'System Breach',
    time: '10:42 AM',
    description: 'Unauthorized access detected in sector 7',
    status: 'error'
  },
  {
    title: 'Patch Applied',
    time: '10:45 AM',
    description: 'Security patch v2.4 installed',
    status: 'success'
  }
];

<Timeline events={events} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`events\` | \`TimelineEvent[]\` | ✅ | - | Array of timeline events to display |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Timeline size (supports responsive values) |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |

**TimelineEvent Interface:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| \`title\` | \`string\` | ✅ | Event title |
| \`time\` | \`string\` | ✅ | Event timestamp display string |
| \`description\` | \`string\` | ❌ | Optional event description |
| \`status\` | \`'success' \\| 'error' \\| 'warning' \\| 'info'\` | ❌ | Event status/type (default: 'info') |
`}}},tags:["autodocs"],argTypes:{events:{control:"object",description:"Array of event objects { title, time, description, status }"},size:{control:"select",options:["sm","md","lg"],description:"Timeline size (supports responsive values)"},className:{control:"text",description:"Additional CSS classes"}}},o=[{title:"System Initialization",time:"08:00 AM",description:"Boot sequence completed successfully",status:"success"},{title:"Network Warning",time:"09:15 AM",description:"High latency detected in node 4",status:"warning"},{title:"Security Alert",time:"10:30 AM",description:"Unauthorized access attempt blocked",status:"error"},{title:"Routine Maintenance",time:"12:00 PM",description:"Scheduled database optimization",status:"info"}],r={args:{events:o}},l={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-muted mb-4",children:"Small"}),e.jsx(i,{events:o.slice(0,2),size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-muted mb-4",children:"Medium (Default)"}),e.jsx(i,{events:o.slice(0,2),size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-muted mb-4",children:"Large"}),e.jsx(i,{events:o.slice(0,2),size:"lg"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    events: defaultEvents
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-sm font-bold text-muted mb-4">Small</h3>
        <Timeline events={defaultEvents.slice(0, 2)} size="sm" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-muted mb-4">Medium (Default)</h3>
        <Timeline events={defaultEvents.slice(0, 2)} size="md" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-muted mb-4">Large</h3>
        <Timeline events={defaultEvents.slice(0, 2)} size="lg" />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const q=["Default","Sizes"];export{r as Default,l as Sizes,q as __namedExportsOrder,E as default};
