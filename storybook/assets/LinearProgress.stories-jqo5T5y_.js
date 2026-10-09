import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./iframe-eo5wVqYd.js";import{g as j,R as P}from"./responsive-DONDvOGG.js";import{c as W}from"./cn-CNMN3A1O.js";import{w as S}from"./devWarn-C2PD3-_Q.js";import"./preload-helper-D9Z9MdNV.js";const a=({progress:s,size:n="md",fullWidth:t=!1,animate:v=!0,className:r=""})=>{const i=N=>j(N,P.linearProgress.width),y=N=>j(N,P.linearProgress.height);(s<0||s>100)&&S(`linearprogress-range-${s}`,`LinearProgress: progress={${s}} is outside the 0-100 range — the bar is not clamped and will visually overflow its container. Pass a percentage value, e.g. (loaded / total) * 100.`);const x=i(n),b=y(n),T=t?W("w-full bg-surface rounded-full shadow-inner",b,r):W("bg-surface rounded-full shadow-inner",b,r||x),L=W("bg-gradient-to-r from-accent to-primary rounded-full shadow-lg-accent",v&&"transition-all duration-500 ease-out motion-reduce:transition-none",b);return e.jsx("div",{className:T,role:"progressbar","aria-valuenow":Math.max(0,Math.min(100,s)),"aria-valuemin":0,"aria-valuemax":100,children:e.jsx("div",{className:L,style:{width:`${s}%`}})})};a.displayName="CyberUI.LinearProgress";a.__docgenInfo={description:"A sleek, animated linear progress bar with cyberpunk aesthetic.\n\nBy default the bar has a fixed width chosen by `size` (`sm` w-48, `md` w-80, `lg` w-96),\nand any `className` replaces that width. This default is deprecated: from 3.0 the bar\nwill fill its container, so set `fullWidth` now if that is what you want.\nWith `fullWidth` the bar is `w-full` and `className` is merged after the base classes.\n\n@example\n// Fills its parent\n<LinearProgress progress={75} fullWidth />\n\n@example\n// Width-constrained by a wrapper\n<div className=\"w-64\">\n  <LinearProgress progress={kbytesLoaded} fullWidth size={{ base: 'sm', lg: 'md' }} />\n</div>",methods:[],displayName:"CyberUI.LinearProgress",props:{progress:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:"Size of the progress bar (`sm` 1.5, `md` 3, `lg` 4 spacing units of height).\nWithout `fullWidth`, `size` also picks a fixed width (`sm` w-48, `md` w-80, `lg` w-96).\nThat fixed-width default is deprecated: from 3.0 the bar will fill its container and `size` will set the height only.\nSet `fullWidth` now if you want that.\n@default 'md'",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the bar fills the width of its container (`w-full`).\nWith `fullWidth`, `className` is merged after the base classes: a width class such as `w-64` overrides the full width, and other classes such as `my-4` leave it unchanged.\nThis will be the only behaviour from 3.0; the fixed-width default is deprecated.\n@default false",defaultValue:{value:"false",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether the bar animates width changes with a 500 ms ease-out transition.\nSet to `false` for values driven every frame (e.g. a `requestAnimationFrame` loop) so the bar tracks `progress` exactly.\nThe transition is also off while the user prefers reduced motion.\n@default true",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the track.\nWithout `fullWidth`, passing any `className` replaces the size-based width, so the bar has no width class unless you add one.\nThat replace behaviour is deprecated: from 3.0 `className` will be added after the base classes, as it already is with `fullWidth`.",defaultValue:{value:'""',computed:!1}}}};const U={title:"Components/LinearProgress",component:a,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-themed linear progress bar with neon styling and smooth animations. By default the bar has a fixed width chosen by `size` (`sm` w-48, `md` w-80, `lg` w-96), and any `className` replaces that width. Set `fullWidth` to make the bar fill its container.\n\n**Deprecation:** the fixed-width default is deprecated. From 3.0 the bar will fill its container, `size` will set the height only, and `className` will be added after the base classes. Set `fullWidth` now if you want that.\n\n**Usage:**\n\n```tsx\nimport React from 'react';\nimport { LinearProgress } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\n// Basic usage (medium size, w-80)\n<LinearProgress progress={50} />\n\n// Different sizes (height and width)\n<LinearProgress progress={30} size=\"sm\" />\n<LinearProgress progress={75} size=\"lg\" />\n\n// Responsive sizing\n<LinearProgress\n  progress={80}\n  size={{ base: 'sm', md: 'md', lg: 'lg' }}\n/>\n\n// Fills its container; size sets the height only\n<LinearProgress progress={90} fullWidth />\n\n// With fullWidth, className is added to the base classes\n<LinearProgress progress={90} fullWidth className=\"my-4\" />\n<LinearProgress progress={90} fullWidth className=\"w-64\" />\n\n// Without fullWidth, any className replaces the size-based width\n<LinearProgress progress={90} size=\"lg\" className=\"w-48 max-w-lg\" />\n\n// Bar driven every frame (e.g. requestAnimationFrame) — no width transition\n<LinearProgress progress={frameProgress} animate={false} />\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `progress` | `number` | ✅ | - | The progress value (0-100) |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>` | ❌ | `'md'` | Height of the bar (supports responsive values). Without `fullWidth` it also sets a fixed width: `sm` w-48, `md` w-80, `lg` w-96. That width is deprecated; from 3.0 `size` sets the height only |\n| `fullWidth` | `boolean` | ❌ | `false` | The bar fills its container (`w-full`) and `className` is added after the base classes. This becomes the only behaviour in 3.0 |\n| `animate` | `boolean` | ❌ | `true` | Animates width changes with a 500 ms ease-out transition. Set to `false` for values updated every frame so the bar tracks `progress` exactly. The transition is also disabled for users who prefer reduced motion |\n| `className` | `string` | ❌ | - | Custom classes for the track. Without `fullWidth`, any `className` replaces the size-based width; this is deprecated and from 3.0 `className` is always added. With `fullWidth`, a width class (e.g. `w-64`) overrides `w-full` |\n"}}},tags:["autodocs"],decorators:[s=>e.jsx("div",{className:"w-96 max-w-full",children:e.jsx(s,{})})],argTypes:{progress:{control:{type:"range",min:0,max:100,step:1},description:"The progress value from 0 to 100"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the progress bar. Sets the height; without `fullWidth` it also sets a fixed width (sm w-48, md w-80, lg w-96). The fixed width is deprecated: from 3.0 `size` sets the height only",table:{defaultValue:{summary:"md"}}},fullWidth:{control:"boolean",description:"Whether the bar fills its container. With `fullWidth`, `className` is added after the base classes. The fixed-width default is deprecated; this becomes the only behaviour in 3.0",table:{defaultValue:{summary:"false"}}},animate:{control:"boolean",description:"Whether width changes animate with a 500 ms transition",table:{defaultValue:{summary:"true"}}},className:{control:"text",description:"Custom classes for the track. Without `fullWidth`, any `className` replaces the size-based width (deprecated). With `fullWidth`, a width class such as `w-64` overrides `w-full`"}}},l={args:{progress:50,size:"md"},parameters:{docs:{description:{story:'`size="md"` gives a `w-80` bar, 3 spacing units high.'}}}},o={args:{progress:30,size:"sm"},parameters:{docs:{description:{story:'`size="sm"` gives a `w-48` bar, 1.5 spacing units high.'}}}},d={args:{progress:90,size:"lg"},parameters:{docs:{description:{story:'`size="lg"` gives a `w-96` bar, 4 spacing units high.'}}}},m={args:{progress:65,size:{base:"sm",md:"md",lg:"lg"}},parameters:{docs:{description:{story:"`size` accepts a responsive value that changes the bar height and width per breakpoint."}}}},c={args:{progress:75,size:"md",className:"w-48 max-w-md"},parameters:{docs:{description:{story:"Without `fullWidth`, a `className` replaces the size-based width, so this bar is `w-48`. Any `className` does this, including one with no width class. This is deprecated: from 3.0 `className` is added after the base classes."}}}},h={args:{progress:72,size:"md",fullWidth:!0},parameters:{docs:{description:{story:"`fullWidth` makes the bar fill its container, here a `w-96` wrapper. `size` sets the height only. This becomes the default in 3.0."}}}},u={render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"NEURAL SYNC · my-4 keeps the full width"}),e.jsx(a,{...s,className:"my-4"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"BUFFER · w-48 sets the width"}),e.jsx(a,{...s,className:"w-48"})]})]}),args:{progress:64,size:"md",fullWidth:!0},parameters:{docs:{description:{story:"With `fullWidth`, `className` is added after the base classes. `my-4` leaves the bar full width; a width class such as `w-48` overrides `w-full`."}}}},p={args:{progress:70,size:"md",animate:!0},parameters:{docs:{description:{story:"Default behaviour: changes to `progress` slide in over a 500 ms ease-out transition. Use the controls to change the value."}}}},g={args:{progress:70,size:"md",animate:!1},parameters:{docs:{description:{story:"With `animate={false}` the bar has no transition and follows `progress` exactly. Use the controls to change the value."}}}},k=()=>{const[s,n]=z.useState(0);return z.useEffect(()=>{let t=0;const v=performance.now(),r=4e3,i=y=>{const x=(y-v)%r/r;n(Math.round(x*1e3)/10),t=requestAnimationFrame(i)};return t=requestAnimationFrame(i),()=>cancelAnimationFrame(t)},[]),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between font-mono text-xs text-muted",children:[e.jsx("span",{children:"UPLOADING NEURAL PATCH"}),e.jsxs("span",{children:[s.toFixed(1),"%"]})]}),e.jsx(a,{progress:s,animate:!1,fullWidth:!0})]})},f={render:()=>e.jsx(k,{}),parameters:{docs:{description:{story:"`progress` is updated from a `requestAnimationFrame` loop with `animate={false}`, so the bar follows the value on every frame."}}}},w={render:()=>e.jsxs("div",{className:"space-y-4",children:[["sm","md","lg"].map(s=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"font-mono text-xs text-muted",children:["size=",s]}),e.jsx(a,{progress:60,size:s})]},s)),["sm","md","lg"].map(s=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"font-mono text-xs text-muted",children:["size=",s," fullWidth"]}),e.jsx(a,{progress:60,size:s,fullWidth:!0})]},`full-${s}`)),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:'className="w-48"'}),e.jsx(a,{progress:60,className:"w-48"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:'fullWidth className="w-48"'}),e.jsx(a,{progress:60,fullWidth:!0,className:"w-48"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"animate (default)"}),e.jsx(a,{progress:60})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"font-mono text-xs text-muted",children:"animate=false"}),e.jsx(a,{progress:60,animate:!1})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: '\`size="md"\` gives a \`w-80\` bar, 3 spacing units high.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 30,
    size: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: '\`size="sm"\` gives a \`w-48\` bar, 1.5 spacing units high.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 90,
    size: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: '\`size="lg"\` gives a \`w-96\` bar, 4 spacing units high.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        story: "\`size\` accepts a responsive value that changes the bar height and width per breakpoint."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 75,
    size: "md",
    className: "w-48 max-w-md"
  },
  parameters: {
    docs: {
      description: {
        story: "Without \`fullWidth\`, a \`className\` replaces the size-based width, so this bar is \`w-48\`. Any \`className\` does this, including one with no width class. This is deprecated: from 3.0 \`className\` is added after the base classes."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 72,
    size: "md",
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: "\`fullWidth\` makes the bar fill its container, here a \`w-96\` wrapper. \`size\` sets the height only. This becomes the default in 3.0."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">NEURAL SYNC · my-4 keeps the full width</span>
        <LinearProgress {...args} className="my-4" />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">BUFFER · w-48 sets the width</span>
        <LinearProgress {...args} className="w-48" />
      </div>
    </div>,
  args: {
    progress: 64,
    size: "md",
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: "With \`fullWidth\`, \`className\` is added after the base classes. \`my-4\` leaves the bar full width; a width class such as \`w-48\` overrides \`w-full\`."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <FrameDrivenDemo />,
  parameters: {
    docs: {
      description: {
        story: "\`progress\` is updated from a \`requestAnimationFrame\` loop with \`animate={false}\`, so the bar follows the value on every frame."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="space-y-1">
          <span className="font-mono text-xs text-muted">size={size}</span>
          <LinearProgress progress={60} size={size} />
        </div>)}
      {(["sm", "md", "lg"] as const).map(size => <div key={\`full-\${size}\`} className="space-y-1">
          <span className="font-mono text-xs text-muted">size={size} fullWidth</span>
          <LinearProgress progress={60} size={size} fullWidth />
        </div>)}
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">className=&quot;w-48&quot;</span>
        <LinearProgress progress={60} className="w-48" />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs text-muted">fullWidth className=&quot;w-48&quot;</span>
        <LinearProgress progress={60} fullWidth className="w-48" />
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
}`,...w.parameters?.docs?.source}}};const E=["Default","Small","Large","Responsive","CustomWidth","FullWidth","FullWidthWithClassName","Animated","NotAnimated","FrameDriven","AllVariants"];export{w as AllVariants,p as Animated,c as CustomWidth,l as Default,f as FrameDriven,h as FullWidth,u as FullWidthWithClassName,d as Large,g as NotAnimated,m as Responsive,o as Small,E as __namedExportsOrder,U as default};
