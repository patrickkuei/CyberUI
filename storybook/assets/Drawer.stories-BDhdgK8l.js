import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-ChJ3X3oe.js";import{r as Y}from"./index-BjHMiN2C.js";import{c as x}from"./cn-CNMN3A1O.js";import{B as O}from"./Button-Cazn9Aez.js";import{B as Z}from"./Badge-IFpmNhAm.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B9QkRKxS.js";import"./responsive-CVpry9ax.js";const ee={sm:"w-72",md:"w-96",lg:"w-[32rem]",xl:"w-[40rem]",full:"w-full"},re={sm:"h-56",md:"h-72",lg:"h-96",xl:"h-[32rem]",full:"h-full"},te={left:"inset-y-0 left-0 border-r-2",right:"inset-y-0 right-0 border-l-2",top:"inset-x-0 top-0 border-b-2",bottom:"inset-x-0 bottom-0 border-t-2"},G={left:"-translate-x-full",right:"translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"},se=300,ne=250,z=r.memo(({isOpen:t,onClose:a,side:n="right",title:o,children:c,size:f="md",variant:u="default",closeOnOverlayClick:d=!0,closeOnEscape:H=!0,showCloseButton:T=!0,ariaLabel:V="Drawer",className:A="",overlayClassName:q=""})=>{const[l,L]=r.useState(!1),[p,R]=r.useState(!0),[g,I]=r.useState(!1),W=r.useRef(null),P=r.useRef(null),U=r.useRef(null),h=r.useRef(null),m=r.useRef(null),M=r.useId(),y=r.useCallback(()=>{L(!0),m.current&&clearTimeout(m.current),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{L(!1),R(!0),a()},ne)},[a]);r.useLayoutEffect(()=>{t&&!l&&(U.current=document.activeElement||null,R(!0),I(!1))},[t,l]),r.useEffect(()=>{t&&!l&&(m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{R(!1),P.current?.focus()},se))},[t,l]),r.useEffect(()=>{if(t&&!l&&p&&!g){const s=requestAnimationFrame(()=>I(!0));return()=>cancelAnimationFrame(s)}},[t,l,p,g]),r.useEffect(()=>()=>{h.current&&clearTimeout(h.current),m.current&&clearTimeout(m.current)},[]);const K=r.useCallback(s=>{d&&(s.target===W.current||s.target===s.currentTarget)&&y()},[y,d]),_=r.useRef(H);_.current=H;const $=r.useRef(y);$.current=y;const E=r.useCallback(s=>{_.current&&s.key==="Escape"&&$.current()},[]);r.useEffect(()=>{if(t){document.addEventListener("keydown",E);const s=document.body.style.overflow,B=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${B}px`,()=>{document.removeEventListener("keydown",E),document.body.style.overflow=s,document.body.style.paddingRight="",U.current?.focus?.()}}},[t,E]);const J=r.useMemo(()=>{const s=u==="danger",B=s?"border-error":"border-accent",Q=s?"shadow-error":"shadow-lg-accent",X=s?"animate-danger-glow":"animate-rgb-glow",F=n==="left"||n==="right";return x("fixed z-50 bg-surface flex flex-col transition-transform ease-out",te[n],F?ee[f]:re[f],F?"max-w-full":"max-h-full",B,l?`${G[n]} duration-[250ms]`:p&&!g?`${G[n]} duration-0`:p?"translate-x-0 translate-y-0 duration-300":`translate-x-0 translate-y-0 duration-300 ${Q} ${X}`,A)},[n,f,u,l,p,g,A]);return t?Y.createPortal(e.jsx("div",{ref:W,className:x("fixed inset-0 z-50 transition-all ease-out",l?"bg-black/0 backdrop-blur-none opacity-0 duration-[250ms]":p&&!g?"bg-black/0 backdrop-blur-none opacity-0 duration-0":"bg-black/30 backdrop-blur-sm opacity-100 duration-300",q),onClick:K,children:e.jsxs("div",{ref:P,className:J,onClick:s=>s.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":o?M:void 0,"aria-label":o?void 0:V,tabIndex:-1,children:[(o||T)&&e.jsxs("div",{className:x("flex items-center justify-between gap-4 px-6 py-4 border-b flex-shrink-0",u==="danger"?"border-error/20":"border-accent/20"),children:[o&&e.jsx("h2",{id:M,className:x("text-lg font-semibold",u==="danger"?"text-error":"text-primary"),children:o}),T&&e.jsx("button",{onClick:y,className:"text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ml-auto","aria-label":"Close drawer",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{className:"flex-1 overflow-auto p-6",children:c})]})}),document.body):null});z.displayName="CyberUI.Drawer";const fe={title:"Components/Drawer",component:z,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-styled slide-in side panel for mobile nav, filters, or detail views without a full page navigation. Shares Modal's controlled `isOpen`/`onClose` pattern, overlay backdrop, focus restoration, and RGB glow border — sliding in from an edge instead of scaling from the center.\n\n**Usage:**\n\n```tsx\nimport React, { useState } from 'react';\nimport { Drawer, Button } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\nfunction MyComponent() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setIsOpen(true)}>Open Filters</Button>\n\n      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title=\"Filter Results\">\n        <p>Drawer content goes here...</p>\n      </Drawer>\n    </>\n  );\n}\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `isOpen` | `boolean` | ✅ | - | Controls drawer visibility |\n| `onClose` | `() => void` | ✅ | - | Called when the drawer should close |\n| `children` | `React.ReactNode` | ✅ | - | Drawer content |\n| `side` | `'left' \\| 'right' \\| 'top' \\| 'bottom'` | ❌ | `'right'` | Edge the drawer slides in from |\n| `title` | `string` | ❌ | - | Optional header title |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| 'full'` | ❌ | `'md'` | Panel width (left/right) or height (top/bottom) |\n| `variant` | `'default' \\| 'danger'` | ❌ | `'default'` | RGB or red error glow |\n| `closeOnOverlayClick` | `boolean` | ❌ | `true` | Allow closing by clicking the overlay |\n| `closeOnEscape` | `boolean` | ❌ | `true` | Allow closing with Escape |\n| `showCloseButton` | `boolean` | ❌ | `true` | Show the header close (×) button |\n| `ariaLabel` | `string` | ❌ | `'Drawer'` | Accessible name when no `title` is set |\n| `className` | `string` | ❌ | `''` | Additional panel CSS classes |\n| `overlayClassName` | `string` | ❌ | `''` | Additional overlay CSS classes |\n"}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls drawer visibility"},side:{control:{type:"select"},options:["left","right","top","bottom"],description:"Edge the drawer slides in from"},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Panel width (left/right) or height (top/bottom)"},variant:{control:{type:"select"},options:["default","danger"],description:"RGB or red error glow"},title:{control:"text",description:"Optional header title"},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},showCloseButton:{control:"boolean"},children:{control:!1,description:"Drawer content"},onClose:{action:"closed",description:"Close callback"}}},i=({storyName:t,side:a="right",size:n="md",variant:o="default",closeOnOverlayClick:c=!0,showCloseButton:f=!0})=>{const[u,d]=r.useState(!1);return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsxs(O,{onClick:()=>d(!0),variant:"ghost",size:"md",children:["Open ",t," Drawer"]}),e.jsx(z,{isOpen:u,onClose:()=>d(!1),side:a,size:n,variant:o,closeOnOverlayClick:c,showCloseButton:f,title:"Neural Uplink Console",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-accent rounded-full animate-pulse"}),e.jsx("p",{className:"text-accent font-mono text-sm",children:"Link stable — 847ms latency"})]}),e.jsx("p",{className:"text-muted text-sm",children:"Adjust interface bandwidth and encryption tier before jacking back in."}),e.jsx("div",{className:"border-l-2 border-accent pl-4",children:e.jsx("p",{className:"text-primary text-sm font-mono",children:"> Route traffic through the Chiba relay?"})}),e.jsxs("div",{className:"flex gap-3 pt-2",children:[e.jsx(O,{variant:"primary",size:"sm",onClick:()=>d(!1),children:"Confirm Route"}),e.jsx(O,{variant:"ghost",size:"sm",onClick:()=>d(!1),children:"Cancel"})]})]})})]})},b={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(i,{storyName:"Default"})},w={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(i,{storyName:"Left Nav",side:"left"})},v={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(i,{storyName:"Top",side:"top",size:"sm"})},S={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(i,{storyName:"Bottom Sheet",side:"bottom",size:"sm"})},C={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>{const t=()=>{const[a,n]=r.useState(null),o=["sm","md","lg","xl","full"];return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsx("div",{className:"flex gap-3",children:o.map(c=>e.jsx(O,{onClick:()=>n(c),variant:"ghost",size:"sm",children:c.toUpperCase()},c))}),e.jsx(z,{isOpen:a!==null,onClose:()=>n(null),size:a??"md",title:`Panel — ${(a??"md").toUpperCase()}`,children:e.jsxs("p",{className:"text-muted text-sm",children:["Sector map loaded at ",a," resolution."]})})]})};return e.jsx(t,{})}},N={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(i,{storyName:"Purge Confirmation",variant:"danger"})},j={name:"Overlay Click Disabled",parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(i,{storyName:"Locked",closeOnOverlayClick:!1})},D={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(i,{storyName:"Minimal",showCloseButton:!1})},k={parameters:{docs:{story:{inline:!1,iframeHeight:500}}},render:()=>e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 bg-base p-8",children:["left","right","top","bottom"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(Z,{variant:"secondary",children:t}),e.jsx(i,{storyName:t,side:t})]},t))})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Default" />
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Left Nav" side="left" />
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Top" side="top" size="sm" />
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Bottom Sheet" side="bottom" size="sm" />
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Purge Confirmation" variant="danger" />
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <DrawerWrapper storyName="Minimal" showCloseButton={false} />
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const ge=["Default","LeftSide","TopSide","BottomSide","Sizes","DangerVariant","NoOverlayDismiss","NoCloseButton","AllVariants"];export{k as AllVariants,S as BottomSide,N as DangerVariant,b as Default,w as LeftSide,D as NoCloseButton,j as NoOverlayDismiss,C as Sizes,v as TopSide,ge as __namedExportsOrder,fe as default};
