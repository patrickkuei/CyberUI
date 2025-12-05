import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-B52jae2o.js";import{r as q}from"./index-Bxr336h0.js";import{B as b}from"./Button-sjFmoU1J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CD-jWTpJ.js";import"./responsive-ChLhblTX.js";const _={openDuration:600,closeDuration:400,crtEffects:!0},H={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",fullscreen:"max-w-none w-full h-full"},y=t.memo(({isOpen:a,onClose:d,title:i,children:m,footer:c,onCancel:u,onConfirm:p,cancelText:A="Cancel",confirmText:S="Confirm",confirmLoading:I=!1,showCancel:D=!0,showConfirm:B=!0,size:g="md",closeOnOverlayClick:v=!0,closeOnEscape:C=!0,animation:w,className:N="",overlayClassName:z="",showCloseButton:L=!0,onOpen:j,onCRTBootComplete:k})=>{const l=t.useMemo(()=>({..._,...w}),[w]),[r,M]=t.useState(!1),[s,x]=t.useState(!0),O=t.useRef(null),R=t.useRef(null),E=t.useRef(null),T=t.useRef(`modal-title-${Math.random().toString(36).slice(2)}`),o=t.useCallback(()=>{M(!0),setTimeout(()=>{M(!1),x(!0),d()},l.closeDuration)},[d,l.closeDuration]);t.useEffect(()=>{a&&!r&&(E.current=document.activeElement||null,x(!0),j?.(),setTimeout(()=>{x(!1),k?.(),R.current?.focus()},l.openDuration))},[a,r,j,k,l.openDuration]);const P=t.useCallback(()=>{u?.(),o()},[u,o]),$=t.useCallback(()=>{p?.(),o()},[p,o]),F=t.useCallback(n=>{v&&(n.target===O.current||n.target===n.currentTarget)&&o()},[o,v]),h=t.useCallback(n=>{C&&n.key==="Escape"&&o()},[o,C]);t.useEffect(()=>{if(a){document.addEventListener("keydown",h);const n=document.body.style.overflow,U=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${U}px`,()=>{document.removeEventListener("keydown",h),document.body.style.overflow=n,document.body.style.paddingRight="",E.current?.focus?.()}}},[a,h]);const W=t.useMemo(()=>["relative","bg-surface","border-2","rounded-lg","max-h-[90vh]","overflow-hidden","flex","flex-col","transform","transition-all","duration-300",H[g],l.crtEffects&&s?"animate-crt-power-on border-accent shadow-lg-accent":l.crtEffects&&r?"animate-crt-power-off border-accent shadow-lg-accent":r?"scale-95 opacity-0 border-accent/20":s?"scale-105 opacity-90 border-accent shadow-input-accent/50":"scale-100 opacity-100 animate-rgb-glow",N].filter(Boolean).join(" "),[g,l.crtEffects,r,s,N]);return a?q.createPortal(e.jsx("div",{ref:O,className:`fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${z} ${r?"bg-black/0 backdrop-blur-none opacity-0 duration-800":s?"bg-black/30 backdrop-blur-md opacity-100 duration-500":"bg-black/30 backdrop-blur-sm opacity-100 duration-300"}`,style:{top:0,left:0,width:"100vw",height:"100vh"},onClick:F,"aria-hidden":!0,children:e.jsxs("div",{ref:R,className:W,onClick:n=>n.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":i?T.current:void 0,tabIndex:-1,children:[L&&e.jsx("button",{onClick:o,className:`absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${r?"scale-0 rotate-180 opacity-0":s?"scale-0 opacity-0":"scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"}`,"aria-label":"Close modal",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",className:"relative",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&e.jsx("div",{className:`px-6 py-4 border-b border-accent/20 flex-shrink-0 transition-all duration-300 ${s?"opacity-0 translate-y-2":"opacity-100 translate-y-0"}`,children:e.jsx("h2",{id:T.current,className:"text-lg font-semibold text-primary",children:i})}),e.jsx("div",{className:`flex-1 overflow-auto p-6 transition-all duration-500 ${s?"opacity-0 translate-y-4":"opacity-100 translate-y-0"}`,children:m}),(c||u||p)&&e.jsx("div",{className:`px-6 py-4 border-t border-accent/20 flex-shrink-0 transition-all duration-300 ${s?"opacity-0 translate-y-2":"opacity-100 translate-y-0"}`,children:c||e.jsxs("div",{className:"flex flex-col-reverse sm:flex-row justify-between items-center gap-3",children:[e.jsx("span",{className:"text-muted text-xs font-mono hidden sm:block",children:"> ESC to abort"}),e.jsxs("div",{className:"flex gap-3 w-full sm:w-auto",children:[D&&u&&e.jsx(b,{variant:"ghost",size:"sm",onClick:P,className:"flex-1 sm:flex-none",children:A}),B&&p&&e.jsx(b,{variant:"primary",size:"sm",onClick:$,disabled:I,className:"flex-1 sm:flex-none",children:S})]})]})})]})}),document.body):null});y.displayName="CyberUI.Modal";const ee={title:"Components/Modal",component:y,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed modal dialog with CRT Power-on Effect animation, overlay backdrop, and portal rendering.

**Features:**
- **CRT Power-on Effect:** Authentic retro monitor boot sequence with flickering and horizontal line expansion
- **Portal Rendering:** Uses React Portal for proper z-index layering
- **Backdrop Controls:** Configurable overlay click and escape key handling
- **Multiple Sizes:** From small dialogs to fullscreen modals
- **Accessibility:** Full ARIA support with focus management and screen reader compatibility
- **Cyberpunk Aesthetics:** Grid background, scanline effects, corner accents, and neon styling

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Modal, Button } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="System Configuration"
      >
        <p>Modal content goes here...</p>
      </Modal>
    </>
  );
}
\`\`\`

**Advanced Usage:**

\`\`\`tsx
// Custom CRT animations
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Terminal Access"
  animation={{
    crtEffects: true,
    openDuration: 2000,
    closeDuration: 1000,
    flickerIntensity: 1.2
  }}
  onCRTBootComplete={() => console.log('Boot sequence complete')}
>
  <div className="font-mono text-accent">
    > System ready...
  </div>
</Modal>

// Fullscreen modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="fullscreen"
  closeOnOverlayClick={false}
>
  <div className="h-full flex items-center justify-center">
    <h1 className="text-4xl text-accent">Immersive Experience</h1>
  </div>
</Modal>

// Minimal styling
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  animation={{ crtEffects: false }}
  showCloseButton={false}
>
  <p>Clean, simple modal without CRT effects</p>
</Modal>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`isOpen\` | \`boolean\` | ✅ | - | Controls modal visibility |
| \`onClose\` | \`() => void\` | ✅ | - | Called when modal should close |
| \`children\` | \`React.ReactNode\` | ✅ | - | Modal content |
| \`title\` | \`string\` | ❌ | - | Optional modal title in header |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| 'fullscreen'\` | ❌ | \`'md'\` | Modal size |
| \`closeOnOverlayClick\` | \`boolean\` | ❌ | \`true\` | Allow closing by clicking overlay |
| \`closeOnEscape\` | \`boolean\` | ❌ | \`true\` | Allow closing with Escape key |
| \`showCloseButton\` | \`boolean\` | ❌ | \`true\` | Show close button in header |
| \`animation\` | \`ModalAnimationConfig\` | ❌ | CRT enabled | Animation configuration |
| \`className\` | \`string\` | ❌ | \`''\` | Additional modal CSS classes |
| \`overlayClassName\` | \`string\` | ❌ | \`''\` | Additional overlay CSS classes |
| \`onOpen\` | \`() => void\` | ❌ | - | Called when modal opens |
| \`onCRTBootComplete\` | \`() => void\` | ❌ | - | Called when CRT boot animation completes |

**Animation Configuration:**

\`\`\`tsx
interface ModalAnimationConfig {
  openDuration?: number;      // Boot sequence duration (ms)
  closeDuration?: number;     // Shutdown animation duration (ms)  
  crtEffects?: boolean;       // Enable CRT power-on effects
  flickerIntensity?: number;  // Flicker effect intensity (0-2)
}
\`\`\`
`}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls modal visibility"},title:{control:"text",description:"Optional modal title"},size:{control:{type:"select"},options:["sm","md","lg","xl","fullscreen"],description:"Modal size"},closeOnOverlayClick:{control:"boolean",description:"Allow closing by clicking overlay"},closeOnEscape:{control:"boolean",description:"Allow closing with Escape key"},showCloseButton:{control:"boolean",description:"Show close button"},children:{control:!1,description:"Modal content"},onClose:{action:"closed",description:"Close callback"},onOpen:{action:"opened",description:"Open callback"},onCRTBootComplete:{action:"boot-complete",description:"CRT boot complete callback"}}},G=({children:a,storyName:d})=>{const[i,m]=t.useState(!1),c=()=>m(!1);return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsxs(b,{onClick:()=>m(!0),variant:"ghost",size:"md",children:["Open ",d," Modal"]}),e.jsx(y,{isOpen:i,onClose:c,title:"System Alert",onCancel:()=>console.log("Cancelled"),onConfirm:()=>console.log("Confirmed"),cancelText:"Cancel",confirmText:"Execute",onOpen:()=>console.log("Modal opened"),onCRTBootComplete:()=>console.log("CRT boot complete"),children:a})]})},f={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(G,{storyName:"Default",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 bg-error rounded-full animate-pulse"}),e.jsx("p",{className:"text-error font-semibold",children:"Security Protocol Breach Detected"})]}),e.jsx("div",{className:"bg-surface/30 p-4 rounded border border-error/30",children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Source:"}),e.jsx("span",{className:"text-accent font-mono",children:"192.168.1.101"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Threat Level:"}),e.jsx("span",{className:"text-error font-mono",children:"CRITICAL"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Time:"}),e.jsx("span",{className:"text-primary font-mono",children:"2045-08-15 14:32:07"})]})]})}),e.jsx("p",{className:"text-muted text-sm",children:"An unauthorized access attempt has been detected on the neural network interface. The system recommends immediate isolation of the compromised node."}),e.jsx("div",{className:"border-l-2 border-accent pl-4",children:e.jsx("p",{className:"text-accent text-sm font-mono",children:"> Awaiting admin authorization..."})})]})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <ModalWrapper storyName="Default">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
          <p className="text-error font-semibold">
            Security Protocol Breach Detected
          </p>
        </div>
        
        <div className="bg-surface/30 p-4 rounded border border-error/30">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Source:</span>
              <span className="text-accent font-mono">192.168.1.101</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Threat Level:</span>
              <span className="text-error font-mono">CRITICAL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Time:</span>
              <span className="text-primary font-mono">2045-08-15 14:32:07</span>
            </div>
          </div>
        </div>

        <p className="text-muted text-sm">
          An unauthorized access attempt has been detected on the neural network interface. 
          The system recommends immediate isolation of the compromised node.
        </p>

        <div className="border-l-2 border-accent pl-4">
          <p className="text-accent text-sm font-mono">
            &gt; Awaiting admin authorization...
          </p>
        </div>
      </div>
    </ModalWrapper>
}`,...f.parameters?.docs?.source}}};const te=["Default"];export{f as Default,te as __namedExportsOrder,ee as default};
