import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CJzUki5p.js";import{r as G}from"./index-Cp4TZisB.js";import{B as y}from"./Button-B-qCsdq8.js";import{c as x}from"./cn-CNMN3A1O.js";import{u as H}from"./useDialogBehavior-CREKUwcM.js";import"./preload-helper-D9Z9MdNV.js";import"./index-COCebXvP.js";import"./responsive-v9ihdETy.js";const Z={openDuration:600,closeDuration:400,crtEffects:!0},J={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",fullscreen:"max-w-none w-full h-full"},g=t.memo(({isOpen:n,onClose:b,title:l,children:m,footer:r,onCancel:p,onConfirm:u,cancelText:A="Cancel",confirmText:R="Confirm",confirmLoading:T=!1,showCancel:S=!0,showConfirm:E=!0,size:C="lg",variant:s="default",closeOnOverlayClick:D=!0,closeOnEscape:I=!0,animation:v,className:w="",overlayClassName:B="",showCloseButton:z=!0,onOpen:N,onCRTBootComplete:$})=>{const i=t.useMemo(()=>({...Z,...v}),[v]),j=t.useRef(null),k=t.useRef(`modal-title-${Math.random().toString(36).slice(2)}`),O=t.useRef(!1),{overlayRef:L,isOpening:o,isClosing:c,close:d,handleOverlayClick:P}=H(n,{closeDuration:i.closeDuration,openDuration:i.openDuration,closeOnEscape:I,closeOnOutsideClick:D,lockScroll:!0,onOpenSettle:()=>{$?.(),j.current?.focus()},onClose:b});t.useEffect(()=>{n&&!O.current&&N?.(),O.current=n},[n,N]);const F=t.useCallback(()=>{p?.(),d()},[p,d]),U=t.useCallback(()=>{u?.(),d()},[u,d]),q=t.useMemo(()=>{const a=s==="danger",f=a?"border-error":"border-accent",M=a?"shadow-error":"shadow-lg-accent",W=a?"shadow-error/50":"shadow-input-accent/50",_=a?"animate-danger-glow":"animate-rgb-glow";return x("relative bg-surface border-2 rounded-lg max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300",J[C],i.crtEffects&&o?`animate-crt-power-on ${f} ${M}`:i.crtEffects&&c?`animate-crt-power-off ${f} ${M}`:c?`scale-95 opacity-0 ${f}/20`:o?`scale-105 opacity-90 ${f} ${W}`:`scale-100 opacity-100 ${_}`,w)},[C,i.crtEffects,c,o,w,s]);return n?G.createPortal(e.jsx("div",{ref:L,className:`fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${B} ${c?"bg-black/0 backdrop-blur-none opacity-0 duration-800":o?"bg-black/30 backdrop-blur-md opacity-100 duration-500":"bg-black/30 backdrop-blur-sm opacity-100 duration-300"}`,style:{top:0,left:0,width:"100vw",height:"100vh"},onClick:P,"aria-hidden":!0,children:e.jsxs("div",{ref:j,className:q,onClick:a=>a.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":l?k.current:void 0,tabIndex:-1,children:[z&&e.jsx("button",{onClick:d,className:`absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${c?"scale-0 rotate-180 opacity-0":o?"scale-0 opacity-0":"scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"}`,"aria-label":"Close modal",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",className:"relative",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),l&&e.jsx("div",{className:x("px-6 py-4 border-b flex-shrink-0 transition-all duration-300",s==="danger"?"border-error/20":"border-accent/20",o?"opacity-0 translate-y-2":"opacity-100 translate-y-0"),children:e.jsx("h2",{id:k.current,className:x("text-lg font-semibold",s==="danger"?"text-error":"text-primary"),children:l})}),e.jsx("div",{className:`flex-1 overflow-auto p-6 transition-all duration-500 ${o?"opacity-0 translate-y-4":"opacity-100 translate-y-0"}`,children:m}),(r||p||u)&&e.jsx("div",{className:x("px-6 py-4 border-t flex-shrink-0 transition-all duration-300",s==="danger"?"border-error/20":"border-accent/20",o?"opacity-0 translate-y-2":"opacity-100 translate-y-0"),children:r||e.jsxs("div",{className:"flex flex-col-reverse sm:flex-row justify-between items-center gap-3",children:[e.jsx("span",{className:"text-muted text-xs font-mono hidden sm:block",children:"> ESC to abort"}),e.jsxs("div",{className:"flex gap-3 w-full sm:w-auto",children:[S&&p&&e.jsx(y,{variant:"ghost",size:"sm",onClick:F,className:"flex-1 sm:flex-none",children:A}),E&&u&&e.jsx(y,{variant:s==="danger"?"danger":"primary",size:"sm",onClick:U,disabled:T,className:"flex-1 sm:flex-none",children:R})]})]})})]})}),document.body):null});g.displayName="CyberUI.Modal";const ae={title:"Components/Modal",component:g,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed modal dialog with CRT Power-on Effect animation, overlay backdrop, and portal rendering.

**Features:**
- **CRT Power-on Effect:** Authentic retro monitor boot sequence with flickering and horizontal line expansion
- **Portal Rendering:** Uses React Portal for proper z-index layering
- **Backdrop Controls:** Configurable overlay click and escape key handling
- **Multiple Sizes:** From small dialogs to fullscreen modals
- **Accessibility:** Full ARIA support with focus management and screen reader compatibility. Escape restores focus to the trigger; overlay click does not.
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
`}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls modal visibility"},title:{control:"text",description:"Optional modal title"},size:{control:{type:"select"},options:["sm","md","lg","xl","fullscreen"],description:"Modal size"},closeOnOverlayClick:{control:"boolean",description:"Allow closing by clicking overlay"},closeOnEscape:{control:"boolean",description:"Allow closing with Escape key"},showCloseButton:{control:"boolean",description:"Show close button"},children:{control:!1,description:"Modal content"},onClose:{action:"closed",description:"Close callback"},onOpen:{action:"opened",description:"Open callback"},onCRTBootComplete:{action:"boot-complete",description:"CRT boot complete callback"}}},K=({children:n,storyName:b})=>{const[l,m]=t.useState(!1),r=()=>m(!1);return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsxs(y,{onClick:()=>m(!0),variant:"ghost",size:"md",children:["Open ",b," Modal"]}),e.jsx(g,{isOpen:l,onClose:r,title:"System Alert",onCancel:()=>console.log("Cancelled"),onConfirm:()=>console.log("Confirmed"),cancelText:"Cancel",confirmText:"Execute",onOpen:()=>console.log("Modal opened"),onCRTBootComplete:()=>console.log("CRT boot complete"),children:n})]})},h={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(K,{storyName:"Default",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 bg-error rounded-full animate-pulse"}),e.jsx("p",{className:"text-error font-semibold",children:"Security Protocol Breach Detected"})]}),e.jsx("div",{className:"bg-surface/30 p-4 rounded border border-error/30",children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Source:"}),e.jsx("span",{className:"text-accent font-mono",children:"192.168.1.101"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Threat Level:"}),e.jsx("span",{className:"text-error font-mono",children:"CRITICAL"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Time:"}),e.jsx("span",{className:"text-primary font-mono",children:"2045-08-15 14:32:07"})]})]})}),e.jsx("p",{className:"text-muted text-sm",children:"An unauthorized access attempt has been detected on the neural network interface. The system recommends immediate isolation of the compromised node."}),e.jsx("div",{className:"border-l-2 border-accent pl-4",children:e.jsx("p",{className:"text-accent text-sm font-mono",children:"> Awaiting admin authorization..."})})]})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const le=["Default"];export{h as Default,le as __namedExportsOrder,ae as default};
