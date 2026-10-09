import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-DnolOwwo.js";import{g as j,R as P}from"./responsive-CSCt6PSS.js";import{c as b}from"./cn-CNMN3A1O.js";import{w as T}from"./devWarn-C2PD3-_Q.js";import"./preload-helper-D9Z9MdNV.js";const a=({progress:s,size:f="md",animate:r=!0,className:v=""})=>{const n=z=>j(z,P.linearProgress.height);(s<0||s>100)&&T(`linearprogress-range-${s}`,`LinearProgress: progress={${s}} is outside the 0-100 range — the bar is not clamped and will visually overflow its container. Pass a percentage value, e.g. (loaded / total) * 100.`);const t=n(f),w=b("w-full bg-surface rounded-full shadow-inner",t,v),y=b("bg-gradient-to-r from-accent to-primary rounded-full shadow-lg-accent",r&&"transition-all duration-500 ease-out motion-reduce:transition-none",t);return e.jsx("div",{className:w,role:"progressbar","aria-valuenow":Math.max(0,Math.min(100,s)),"aria-valuemin":0,"aria-valuemax":100,children:e.jsx("div",{className:y,style:{width:`${s}%`}})})};a.displayName="CyberUI.LinearProgress";a.__docgenInfo={description:`A sleek, animated linear progress bar with cyberpunk aesthetic.

The bar is \`w-full\` by default — it fills its container width, whatever the \`size\`.
\`size\` sets the height only. Wrap the bar in a constrained element, or pass a width
class such as \`w-64\` in \`className\`, to control its width. \`className\` is added after
the base classes, so it never removes the default width unless it sets its own.

@example
// Full-width bar (fills parent)
<LinearProgress progress={75} />

@example
// Width-constrained
<div className="w-64">
  <LinearProgress progress={kbytesLoaded} size={{ base: 'sm', lg: 'md' }} />
</div>`,methods:[],displayName:"CyberUI.LinearProgress",props:{progress:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:"Height of the progress bar (`sm` 1.5, `md` 3, `lg` 4 spacing units). Does not affect width: the bar always fills its container.\n@default 'md'",defaultValue:{value:"'md'",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether the bar animates width changes with a 500 ms ease-out transition.\nSet to `false` for values driven every frame (e.g. a `requestAnimationFrame` loop) so the bar tracks `progress` exactly.\nThe transition is also off while the user prefers reduced motion.\n@default true",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra classes merged onto the track after the base classes (`w-full` included).\nPassing a width class such as `w-64` overrides the full width; other classes such as `my-4` leave it unchanged.",defaultValue:{value:'""',computed:!1}}}};const C={title:"Components/LinearProgress",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed linear progress bar with neon styling and smooth animations. The bar fills the width of its container; \`size\` sets the height only.

**Usage:**

\`\`\`tsx
import React from 'react';
import { LinearProgress } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic usage (medium height, fills its container)
<LinearProgress progress={50} />

// Different heights
<LinearProgress progress={30} size="sm" />
<LinearProgress progress={75} size="lg" />

// Responsive height
<LinearProgress
  progress={80}
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
/>

// Bar driven every frame (e.g. requestAnimationFrame) — no width transition
<LinearProgress progress={frameProgress} animate={false} />

// Control the width with a wrapper
<div className="w-64">
  <LinearProgress progress={90} />
</div>

// Or with a width class in className
<LinearProgress progress={90} className="w-64" />

// className is added to the base classes, so other classes keep the full width
<LinearProgress progress={90} className="my-4" />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`progress\` | \`number\` | ✅ | - | The progress value (0-100) |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Height of the bar (supports responsive values). Width is not affected |
| \`animate\` | \`boolean\` | ❌ | \`true\` | Animates width changes with a 500 ms ease-out transition. Set to \`false\` for values updated every frame so the bar tracks \`progress\` exactly. The transition is also disabled for users who prefer reduced motion |
| \`className\` | \`string\` | ❌ | - | Classes added after the base classes. A width class (e.g. \`w-64\`) overrides the default \`w-full\` |
`}}},tags:["autodocs"],decorators:[s=>e.jsx("div",{className:"w-96 max-w-full",children:e.jsx(s,{})})],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Height of the progress bar. Width is not affected",table:{defaultValue:{summary:"md"}}},animate:{control:"boolean",description:"Whether width changes animate with a 500 ms transition",table:{defaultValue:{summary:"true"}}},className:{control:"text",description:"Classes added after the base classes. A width class such as `w-64` overrides the default `w-full`"}}},N=s=>`\`size="${s}"\` sets the bar height. The bar fills its container, here a \`w-96\` wrapper.`,o={args:{progress:50,size:"md"},parameters:{docs:{description:{story:"The bar fills the width of its container. Here the container is a `w-96` wrapper."}}}},i={args:{progress:30,size:"sm"},parameters:{docs:{description:{story:N("sm")}}}},l={args:{progress:90,size:"lg"},parameters:{docs:{description:{story:N("lg")}}}},m={args:{progress:65,size:{base:"sm",md:"md",lg:"lg"}},parameters:{docs:{description:{story:"`size` accepts a responsive value that changes the bar height per breakpoint. The width stays the container width."}}}},d={render:s=>e.jsx("div",{className:"w-48",children:e.jsx(a,{...s})}),args:{progress:75,size:"md"},parameters:{docs:{description:{story:"Wrap the bar in a constrained element to control its width. This wrapper is `w-48`."}}}},c={args:{progress:75,size:"md",className:"w-48"},parameters:{docs:{description:{story:"A width class in `className` overrides the default `w-full`. Other classes, such as `my-4`, are added without changing the width."}}}},p={args:{progress:70,size:"md",animate:!0},parameters:{docs:{description:{story:"Default behaviour: changes to `progress` slide in over a 500 ms ease-out transition. Use the controls to change the value."}}}},u={args:{progress:70,size:"md",animate:!1},parameters:{docs:{description:{story:"With `animate={false}` the bar has no transition and follows `progress` exactly. Use the controls to change the value."}}}},L=()=>{const[s,f]=x.useState(0);return x.useEffect(()=>{let r=0;const v=performance.now(),n=4e3,t=w=>{const y=(w-v)%n/n;f(Math.round(y*1e3)/10),r=requestAnimationFrame(t)};return r=requestAnimationFrame(t),()=>cancelAnimationFrame(r)},[]),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between font-mono text-xs text-muted",children:[e.jsx("span",{children:"UPLOADING NEURAL PATCH"}),e.jsxs("span",{children:[s.toFixed(1),"%"]})]}),e.jsx(a,{progress:s,animate:!1})]})},h={render:()=>e.jsx(L,{}),parameters:{docs:{description:{story:"`progress` is updated from a `requestAnimationFrame` loop with `animate={false}`, so the bar follows the value on every frame."}}}},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[["sm","md","lg"].map(s=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"font-mono text-xs text-muted",children:["size=",s]}),e.jsx(a,{progress:60,size:s})]},s)),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"w-48 wrapper"}),e.jsx("div",{className:"w-48",children:e.jsx(a,{progress:60})})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:'className="w-48"'}),e.jsx(a,{progress:60,className:"w-48"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"animate (default)"}),e.jsx(a,{progress:60})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"animate=false"}),e.jsx(a,{progress:60,animate:!1})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "The bar fills the width of its container. Here the container is a \`w-96\` wrapper."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    size: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: sizeStoryDescription("sm")
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    size: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: sizeStoryDescription("lg")
      }
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 65,
    size: {
      base: "sm",
      md: "md",
      lg: "lg"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "\`size\` accepts a responsive value that changes the bar height per breakpoint. The width stays the container width."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-48">
      <LinearProgress {...args} />
    </div>,
  args: {
    progress: 75,
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Wrap the bar in a constrained element to control its width. This wrapper is \`w-48\`."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    size: "md",
    className: "w-48"
  },
  parameters: {
    docs: {
      description: {
        story: "A width class in \`className\` overrides the default \`w-full\`. Other classes, such as \`my-4\`, are added without changing the width."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 70,
    size: "md",
    animate: true
  },
  parameters: {
    docs: {
      description: {
        story: "Default behaviour: changes to \`progress\` slide in over a 500 ms ease-out transition. Use the controls to change the value."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 70,
    size: "md",
    animate: false
  },
  parameters: {
    docs: {
      description: {
        story: "With \`animate={false}\` the bar has no transition and follows \`progress\` exactly. Use the controls to change the value."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <FrameDrivenDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`progress\` is updated from a \`requestAnimationFrame\` loop with \`animate={false}\`, so the bar follows the value on every frame."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="space-y-1">
          <span className="font-mono text-xs text-muted">size={size}</span>
          <LinearProgress progress={60} size={size} />
        </div>)}
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">w-48 wrapper</span>
        <div className="w-48">
          <LinearProgress progress={60} />
        </div>
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">className=&quot;w-48&quot;</span>
        <LinearProgress progress={60} className="w-48" />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">animate (default)</span>
        <LinearProgress progress={60} />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">animate=false</span>
        <LinearProgress progress={60} animate={false} />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};const F=["Default","Small","Large","Responsive","WidthViaWrapper","WidthViaClassName","Animated","NotAnimated","FrameDriven","AllVariants"];export{g as AllVariants,p as Animated,o as Default,h as FrameDriven,l as Large,u as NotAnimated,m as Responsive,i as Small,c as WidthViaClassName,d as WidthViaWrapper,F as __namedExportsOrder,C as default};
