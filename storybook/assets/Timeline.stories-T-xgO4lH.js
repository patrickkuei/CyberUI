import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CGqSOYcI.js";import{g as i}from"./responsive-0jukkKQ9.js";import{c as s}from"./cn-CNMN3A1O.js";import"./preload-helper-D9Z9MdNV.js";const g=({events:h,size:n="md",className:f=""})=>{const y={sm:"w-5 h-5",md:"w-6 h-6",lg:"w-8 h-8"},v={sm:"inset-1.5",md:"inset-2",lg:"inset-2.5"},w={sm:"text-sm",md:"text-(length:--text-base)",lg:"text-lg"},N={sm:"text-xs",md:"text-sm",lg:"text-(length:--text-base)"},S={sm:"text-[10px]",md:"text-xs",lg:"text-sm"},j={sm:"gap-3",md:"gap-4",lg:"gap-5"},k={sm:"space-y-4",md:"space-y-6",lg:"space-y-8"},T=i(n,y),C=i(n,v),_=i(n,w),R=i(n,N),E=i(n,S),I=i(n,j),M=i(n,k),D=t=>{const r={success:{border:"border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]",background:"border-success bg-success/30 shadow-[0_0_10px_var(--color-success)]",inner:"bg-success/60"},error:{border:"border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]",background:"border-error bg-error/30 shadow-[0_0_10px_var(--color-error)]",inner:"bg-error/60"},warning:{border:"border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]",background:"border-warning bg-warning/30 shadow-[0_0_10px_var(--color-warning)]",inner:"bg-warning/60"},info:{border:"border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]",background:"border-info bg-info/30 shadow-[0_0_10px_var(--color-info)]",inner:"bg-info/60"},neutral:{border:"border-border-default bg-border-default/30",background:"border-border-default bg-border-default/30",inner:"bg-muted/40"}};return r[t]||r.info},b="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";return e.jsx("div",{className:s(M,f),children:h.map((t,r)=>{const x=D(t.status),z=typeof t.description=="string"||typeof t.description=="number"?"p":"div",A=t.description!==void 0&&t.description!==null&&typeof t.description!="boolean"&&t.description!=="";return e.jsxs("div",{className:s("flex",I,"group"),children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("div",{className:s("relative flex-shrink-0 mt-1.5",T),children:[e.jsx("div",{className:s("absolute inset-0 border-2 transition-all duration-300",x.border),style:{clipPath:b}}),e.jsx("div",{className:s("absolute",C,x.inner),style:{clipPath:b}})]}),r<h.length-1&&e.jsx("div",{className:"w-[2px] flex-1 bg-gradient-to-b from-secondary/50 to-transparent mt-2"})]}),e.jsxs("div",{className:"flex-1 pb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h4",{className:s("font-semibold text-default group-hover:text-secondary transition-colors",_),children:t.title}),t.time!==void 0&&e.jsx("span",{className:s("text-muted whitespace-nowrap ml-4",E),children:t.time})]}),A&&e.jsx(z,{className:s("text-muted mt-1",R),children:t.description})]})]},r)})})};g.displayName="CyberUI.Timeline";const p=g;g.__docgenInfo={description:"",methods:[],displayName:"CyberUI.Timeline",props:{events:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:"Array of timeline entries to display. `TimelineEvent[]` is also accepted."},size:{defaultValue:{value:"'md'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const H={title:"Components/Timeline",component:p,parameters:{layout:"padded",docs:{description:{component:"A vertical timeline component for displaying events or history with cyberpunk styling.\n\n**Usage:**\n\n```tsx\nimport { Timeline } from 'cyberui-2045';\n\nconst events = [\n  {\n    title: 'System Breach',\n    time: '10:42 AM',\n    description: 'Unauthorized access detected in sector 7',\n    status: 'error'\n  },\n  {\n    title: 'Patch Applied',\n    time: '10:45 AM',\n    description: 'Security patch v2.4 installed',\n    status: 'success'\n  }\n];\n\n<Timeline events={events} />\n```\n\nFor process steps, leave out `time`, pass React content as `description`, and use `status: 'neutral'` for plain steps:\n\n```tsx\n<Timeline\n  events={[\n    { title: 'Recon', status: 'neutral' },\n    {\n      title: 'Breach',\n      status: 'warning',\n      description: <>Run <code>ice-breaker --stealth</code></>,\n    },\n    { title: 'Extract', status: 'neutral' },\n  ]}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `events` | `TimelineItem[]` (or `TimelineEvent[]`) | ✅ | - | Array of timeline entries to display |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>` | ❌ | `'md'` | Timeline size (supports responsive values) |\n| `className` | `string` | ❌ | `''` | Additional CSS classes |\n\n**TimelineItem Interface:**\n\n| Property | Type | Required | Description |\n|----------|------|----------|-------------|\n| `title` | `string` | ✅ | Entry title |\n| `time` | `string` | ❌ | Time shown beside the title. When omitted, no time element is rendered |\n| `description` | `React.ReactNode` | ❌ | Optional description. Strings render in a `<p>`, other React content in a `<div>` |\n| `status` | `'success' \\| 'error' \\| 'warning' \\| 'info' \\| 'neutral'` | ❌ | Status styling (default: 'info'). `'neutral'` renders an unlit diamond with no glow |\n\n`TimelineEvent` is the original, narrower shape (`time` required, string `description`, no `'neutral'`); every `TimelineEvent` is a valid `TimelineItem`.\n"}}},tags:["autodocs"],argTypes:{events:{control:"object",description:"Array of TimelineItem (or TimelineEvent) objects { title, time?, description?, status? }. time is optional; description accepts React content; status adds neutral"},size:{control:"select",options:["sm","md","lg"],description:"Timeline size (supports responsive values)"},className:{control:"text",description:"Additional CSS classes"}}},u=[{title:"System Initialization",time:"08:00 AM",description:"Boot sequence completed successfully",status:"success"},{title:"Network Warning",time:"09:15 AM",description:"High latency detected in node 4",status:"warning"},{title:"Security Alert",time:"10:30 AM",description:"Unauthorized access attempt blocked",status:"error"},{title:"Routine Maintenance",time:"12:00 PM",description:"Scheduled database optimization",status:"info"}],a={args:{events:u}},o={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-muted mb-4",children:"Small"}),e.jsx(p,{events:u.slice(0,2),size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-muted mb-4",children:"Medium (Default)"}),e.jsx(p,{events:u.slice(0,2),size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-muted mb-4",children:"Large"}),e.jsx(p,{events:u.slice(0,2),size:"lg"})]})]})},c={parameters:{docs:{description:{story:"Every status: four glowing neon diamonds plus the unlit `neutral` diamond."}}},args:{events:[{title:"Uplink Established",time:"00:01",description:"Neural link synced",status:"success"},{title:"Firewall Breach",time:"00:07",description:"ICE layer 3 compromised",status:"error"},{title:"Heat Spike",time:"00:12",description:"Core temperature climbing",status:"warning"},{title:"Packet Relay",time:"00:15",description:"Routing through node 9",status:"info"},{title:"Standby",time:"00:20",description:"Daemon idle, awaiting orders",status:"neutral"}]}},l={parameters:{docs:{description:{story:"`description` accepts React content: code excerpts, links and notes render inside the entry."}}},args:{events:[{title:"Jack In",time:"22:04",status:"success",description:e.jsxs(e.Fragment,{children:["Open the session with ",e.jsx("code",{className:"text-secondary",children:"netrun connect --node 7"}),"."]})},{title:"Bypass ICE",time:"22:09",status:"warning",description:e.jsxs("div",{className:"space-y-2",children:[e.jsx("pre",{className:"bg-base border border-border-default rounded p-2 text-xs overflow-x-auto",children:e.jsx("code",{children:`ice-breaker --stealth \\
  --target arasaka-subnet`})}),e.jsx("p",{className:"text-xs text-warning",children:"Note: the trace timer starts as soon as the first layer drops."})]})},{title:"Read the Runbook",time:"22:15",status:"info",description:e.jsx("a",{href:"https://patrickkuei.github.io/CyberUI/",className:"text-secondary underline",children:"Netrunner field manual"})}]}},d={parameters:{docs:{description:{story:"Entries without `time` render no time element, for ordered process stages."}}},args:{events:[{title:"Stage 1: Recon",description:"Map the target subnet",status:"success"},{title:"Stage 2: Infiltrate",description:"Slip past the perimeter daemons",status:"success"},{title:"Stage 3: Extract",description:"Pull the data shard",status:"info"},{title:"Stage 4: Ghost",description:"Wipe logs and disconnect",status:"neutral"}]}},m={parameters:{docs:{description:{story:"Neutral steps with one highlighted stage: only the highlighted diamond glows."}}},args:{events:[{title:"Boot Cyberdeck",status:"neutral"},{title:"Load Daemons",status:"neutral"},{title:"Breach Mainframe",description:"Current stage",status:"warning"},{title:"Download Payload",status:"neutral"},{title:"Flatline Trace",status:"neutral"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    events: defaultEvents
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Every status: four glowing neon diamonds plus the unlit \`neutral\` diamond.'
      }
    }
  },
  args: {
    events: [{
      title: 'Uplink Established',
      time: '00:01',
      description: 'Neural link synced',
      status: 'success'
    }, {
      title: 'Firewall Breach',
      time: '00:07',
      description: 'ICE layer 3 compromised',
      status: 'error'
    }, {
      title: 'Heat Spike',
      time: '00:12',
      description: 'Core temperature climbing',
      status: 'warning'
    }, {
      title: 'Packet Relay',
      time: '00:15',
      description: 'Routing through node 9',
      status: 'info'
    }, {
      title: 'Standby',
      time: '00:20',
      description: 'Daemon idle, awaiting orders',
      status: 'neutral'
    }]
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`description\` accepts React content: code excerpts, links and notes render inside the entry.'
      }
    }
  },
  args: {
    events: [{
      title: 'Jack In',
      time: '22:04',
      status: 'success',
      description: <>
            Open the session with <code className="text-secondary">netrun connect --node 7</code>.
          </>
    }, {
      title: 'Bypass ICE',
      time: '22:09',
      status: 'warning',
      description: <div className="space-y-2">
            <pre className="bg-base border border-border-default rounded p-2 text-xs overflow-x-auto">
              <code>{'ice-breaker --stealth \\\\\\n  --target arasaka-subnet'}</code>
            </pre>
            <p className="text-xs text-warning">Note: the trace timer starts as soon as the first layer drops.</p>
          </div>
    }, {
      title: 'Read the Runbook',
      time: '22:15',
      status: 'info',
      description: <a href="https://patrickkuei.github.io/CyberUI/" className="text-secondary underline">
            Netrunner field manual
          </a>
    }]
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Entries without \`time\` render no time element, for ordered process stages.'
      }
    }
  },
  args: {
    events: [{
      title: 'Stage 1: Recon',
      description: 'Map the target subnet',
      status: 'success'
    }, {
      title: 'Stage 2: Infiltrate',
      description: 'Slip past the perimeter daemons',
      status: 'success'
    }, {
      title: 'Stage 3: Extract',
      description: 'Pull the data shard',
      status: 'info'
    }, {
      title: 'Stage 4: Ghost',
      description: 'Wipe logs and disconnect',
      status: 'neutral'
    }]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Neutral steps with one highlighted stage: only the highlighted diamond glows.'
      }
    }
  },
  args: {
    events: [{
      title: 'Boot Cyberdeck',
      status: 'neutral'
    }, {
      title: 'Load Daemons',
      status: 'neutral'
    }, {
      title: 'Breach Mainframe',
      description: 'Current stage',
      status: 'warning'
    }, {
      title: 'Download Payload',
      status: 'neutral'
    }, {
      title: 'Flatline Trace',
      status: 'neutral'
    }]
  }
}`,...m.parameters?.docs?.source}}};const O=["Default","Sizes","AllVariants","RichDescription","ProcessSteps","NeutralWithHighlight"];export{c as AllVariants,a as Default,m as NeutralWithHighlight,d as ProcessSteps,l as RichDescription,o as Sizes,O as __namedExportsOrder,H as default};
