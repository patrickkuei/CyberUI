import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-D0UZTC13.js";import{r as G}from"./index-XzsDwp7_.js";import{c as g}from"./cn-CNMN3A1O.js";import{u as V}from"./useDialogBehavior-D_t8nrqX.js";import{B as D}from"./Button-CKXGPqRt.js";import{B as q}from"./Badge-OGtG51Ir.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D7fDg4Si.js";import"./usePrefersReducedMotion-BXrfJoqd.js";import"./responsive-Ba1K8uz_.js";const J={sm:"w-72",md:"w-96",lg:"w-[32rem]",xl:"w-[40rem]",full:"w-full"},K={sm:"h-56",md:"h-72",lg:"h-96",xl:"h-[32rem]",full:"h-full"},Q={left:"inset-y-0 left-0 border-r-2",right:"inset-y-0 right-0 border-l-2",top:"inset-x-0 top-0 border-b-2",bottom:"inset-x-0 bottom-0 border-t-2"},A={left:"-translate-x-full",right:"translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"},X=300,Y=250,I="motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-0",j=s.memo(({isOpen:r,onClose:o,side:t="right",title:a,children:i,size:p="md",variant:c="default",closeOnOverlayClick:d=!0,closeOnEscape:L=!0,showCloseButton:O=!0,ariaLabel:T="Drawer",className:k="",overlayClassName:P=""})=>{const[u,z]=s.useState(!1),B=s.useRef(null),H=s.useRef(!1),E=s.useId(),{isOpening:m,isClosing:f,close:U,handleOverlayClick:W}=V(r,{closeDuration:Y,openDuration:X,closeOnEscape:L,closeOnOutsideClick:d,lockScroll:!0,onOpenSettle:()=>B.current?.focus(),onClose:o});s.useLayoutEffect(()=>{r&&!H.current&&z(!1),H.current=r},[r]),s.useEffect(()=>{if(r&&!f&&m&&!u){const l=requestAnimationFrame(()=>z(!0));return()=>cancelAnimationFrame(l)}},[r,f,m,u]);const _=s.useMemo(()=>{const l=c==="danger",M=l?"border-error":"border-accent",$=l?"shadow-error":"shadow-lg-accent",F=l?"animate-danger-glow":"animate-rgb-glow",R=t==="left"||t==="right";return g("fixed z-50 bg-surface flex flex-col transition-transform motion-reduce:transition-opacity ease-out",Q[t],R?J[p]:K[p],R?"max-w-full":"max-h-full",M,f?`${A[t]} ${I} duration-[250ms] motion-reduce:duration-150`:m&&!u?`${A[t]} ${I} duration-0`:m?"translate-x-0 translate-y-0 duration-300 motion-reduce:duration-150":`translate-x-0 translate-y-0 duration-300 motion-reduce:duration-150 ${$} ${F}`,k)},[t,p,c,f,m,u,k]);return r?G.createPortal(e.jsx("div",{className:g("fixed inset-0 z-50 transition-all ease-out",f?"bg-black/0 backdrop-blur-none opacity-0 duration-[250ms] motion-reduce:duration-150":m&&!u?"bg-black/0 backdrop-blur-none opacity-0 duration-0":"bg-black/30 backdrop-blur-sm opacity-100 duration-300 motion-reduce:duration-150",P),onClick:W,children:e.jsxs("div",{ref:B,className:_,onClick:l=>l.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":a?E:void 0,"aria-label":a?void 0:T,tabIndex:-1,children:[(a||O)&&e.jsxs("div",{className:g("flex items-center justify-between gap-4 px-6 py-4 border-b flex-shrink-0",c==="danger"?"border-error/20":"border-accent/20"),children:[a&&e.jsx("h2",{id:E,className:g("text-lg font-semibold",c==="danger"?"text-error":"text-primary"),children:a}),O&&e.jsx("button",{onClick:U,className:"text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ml-auto","aria-label":"Close drawer",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{className:"flex-1 overflow-auto p-6",children:i})]})}),document.body):null});j.displayName="CyberUI.Drawer";const de={title:"Components/Drawer",component:j,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-styled slide-in side panel for mobile nav, filters, or detail views without a full page navigation. Shares Modal's controlled `isOpen`/`onClose` pattern, overlay backdrop, focus restoration, and RGB glow border — sliding in from an edge instead of scaling from the center.\n\nEscape restores focus to the trigger. Overlay click does not restore focus.\n\nUnder `prefers-reduced-motion: reduce`, the drawer fades in and out in 150ms instead of sliding, and the idle glow holds still.\n\n**Usage:**\n\n```tsx\nimport React, { useState } from 'react';\nimport { Drawer, Button } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\nfunction MyComponent() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setIsOpen(true)}>Open Filters</Button>\n\n      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title=\"Filter Results\">\n        <p>Drawer content goes here...</p>\n      </Drawer>\n    </>\n  );\n}\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `isOpen` | `boolean` | ✅ | - | Controls drawer visibility |\n| `onClose` | `() => void` | ✅ | - | Called when the drawer should close |\n| `children` | `React.ReactNode` | ✅ | - | Drawer content |\n| `side` | `'left' \\| 'right' \\| 'top' \\| 'bottom'` | ❌ | `'right'` | Edge the drawer slides in from |\n| `title` | `string` | ❌ | - | Optional header title |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| 'full'` | ❌ | `'md'` | Panel width (left/right) or height (top/bottom) |\n| `variant` | `'default' \\| 'danger'` | ❌ | `'default'` | RGB or red error glow |\n| `closeOnOverlayClick` | `boolean` | ❌ | `true` | Allow closing by clicking the overlay |\n| `closeOnEscape` | `boolean` | ❌ | `true` | Allow closing with Escape |\n| `showCloseButton` | `boolean` | ❌ | `true` | Show the header close (×) button |\n| `ariaLabel` | `string` | ❌ | `'Drawer'` | Accessible name when no `title` is set |\n| `className` | `string` | ❌ | `''` | Additional panel CSS classes |\n| `overlayClassName` | `string` | ❌ | `''` | Additional overlay CSS classes |\n"}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls drawer visibility"},side:{control:{type:"select"},options:["left","right","top","bottom"],description:"Edge the drawer slides in from"},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Panel width (left/right) or height (top/bottom)"},variant:{control:{type:"select"},options:["default","danger"],description:"RGB or red error glow"},title:{control:"text",description:"Optional header title"},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},showCloseButton:{control:"boolean"},children:{control:!1,description:"Drawer content"},onClose:{action:"closed",description:"Close callback"}}},n=({storyName:r,side:o="right",size:t="md",variant:a="default",closeOnOverlayClick:i=!0,showCloseButton:p=!0})=>{const[c,d]=s.useState(!1);return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsxs(D,{onClick:()=>d(!0),variant:"ghost",size:"md",children:["Open ",r," Drawer"]}),e.jsx(j,{isOpen:c,onClose:()=>d(!1),side:o,size:t,variant:a,closeOnOverlayClick:i,showCloseButton:p,title:"Neural Uplink Console",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-accent rounded-full animate-pulse"}),e.jsx("p",{className:"text-accent font-mono text-sm",children:"Link stable — 847ms latency"})]}),e.jsx("p",{className:"text-muted text-sm",children:"Adjust interface bandwidth and encryption tier before jacking back in."}),e.jsx("div",{className:"border-l-2 border-accent pl-4",children:e.jsx("p",{className:"text-primary text-sm font-mono",children:"> Route traffic through the Chiba relay?"})}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx(D,{variant:"primary",size:"sm",onClick:()=>d(!1),children:"Confirm Route"}),e.jsx(D,{variant:"ghost",size:"sm",onClick:()=>d(!1),children:"Cancel"})]})]})})]})},h={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(n,{storyName:"Default"})},x={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(n,{storyName:"Left Nav",side:"left"})},y={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(n,{storyName:"Top",side:"top",size:"sm"})},b={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(n,{storyName:"Bottom Sheet",side:"bottom",size:"sm"})},w={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>{const r=()=>{const[o,t]=s.useState(null),a=["sm","md","lg","xl","full"];return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsx("div",{className:"flex gap-3",children:a.map(i=>e.jsx(D,{onClick:()=>t(i),variant:"ghost",size:"sm",children:i.toUpperCase()},i))}),e.jsx(j,{isOpen:o!==null,onClose:()=>t(null),size:o??"md",title:`Panel — ${(o??"md").toUpperCase()}`,children:e.jsxs("p",{className:"text-muted text-sm",children:["Sector map loaded at ",o," resolution."]})})]})};return e.jsx(r,{})}},S={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(n,{storyName:"Purge Confirmation",variant:"danger"})},v={name:"Overlay Click Disabled",parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(n,{storyName:"Locked",closeOnOverlayClick:!1})},N={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(n,{storyName:"Minimal",showCloseButton:!1})},C={parameters:{docs:{story:{inline:!1,iframeHeight:500}}},render:()=>e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 bg-base p-8",children:["left","right","top","bottom"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(q,{variant:"secondary",children:r}),e.jsx(n,{storyName:r,side:r})]},r))})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Default" />
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Left Nav" side="left" />
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Top" side="top" size="sm" />
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Bottom Sheet" side="bottom" size="sm" />
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => {
    const SizesDemo = () => {
      const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | "xl" | "full" | null>(null);
      const sizes: Array<"sm" | "md" | "lg" | "xl" | "full"> = ["sm", "md", "lg", "xl", "full"];
      return <div className="flex items-center justify-center h-screen bg-base p-8">
          <div className="flex gap-3">
            {sizes.map(s => <Button key={s} onClick={() => setOpenSize(s)} variant="ghost" size="sm">
                {s.toUpperCase()}
              </Button>)}
          </div>

          <Drawer isOpen={openSize !== null} onClose={() => setOpenSize(null)} size={openSize ?? "md"} title={\`Panel — \${(openSize ?? "md").toUpperCase()}\`}>
            <p className="text-muted text-sm">Sector map loaded at {openSize} resolution.</p>
          </Drawer>
        </div>;
    };
    return <SizesDemo />;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Purge Confirmation" variant="danger" />
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Overlay Click Disabled",
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Locked" closeOnOverlayClick={false} />
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Minimal" showCloseButton={false} />
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
  },
  render: () => <div className="flex flex-wrap items-center justify-center gap-4 bg-base p-8">
      {(["left", "right", "top", "bottom"] as DrawerSide[]).map(side => <div key={side} className="flex flex-col items-center gap-2">
          <Badge variant="secondary">{side}</Badge>
          <DrawerWrapper storyName={side} side={side} />
        </div>)}
    </div>
}`,...C.parameters?.docs?.source}}};const me=["Default","LeftSide","TopSide","BottomSide","Sizes","DangerVariant","NoOverlayDismiss","NoCloseButton","AllVariants"];export{C as AllVariants,b as BottomSide,S as DangerVariant,h as Default,x as LeftSide,N as NoCloseButton,v as NoOverlayDismiss,w as Sizes,y as TopSide,me as __namedExportsOrder,de as default};
