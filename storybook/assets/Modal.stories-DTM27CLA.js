import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CoA5WcsP.js";import{M as t}from"./Modal-D3-TsEgz.js";import{B as c}from"./Button-gc-qTaXq.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B1VNQ6U5.js";import"./index-DHDDzP3O.js";import"./responsive-Zzx7ci0z.js";const y={title:"Components/Modal",component:t,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed modal dialog with CRT Power-on Effect animation, overlay backdrop, and portal rendering.

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
`}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls modal visibility"},title:{control:"text",description:"Optional modal title"},size:{control:{type:"select"},options:["sm","md","lg","xl","fullscreen"],description:"Modal size"},closeOnOverlayClick:{control:"boolean",description:"Allow closing by clicking overlay"},closeOnEscape:{control:"boolean",description:"Allow closing with Escape key"},showCloseButton:{control:"boolean",description:"Show close button"},children:{control:!1,description:"Modal content"},onClose:{action:"closed",description:"Close callback"},onOpen:{action:"opened",description:"Open callback"},onCRTBootComplete:{action:"boot-complete",description:"CRT boot complete callback"}}},d=({children:s,storyName:a})=>{const[l,o]=r.useState(!1),i=()=>o(!1);return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsxs(c,{onClick:()=>o(!0),variant:"ghost",size:"md",children:["Open ",a," Modal"]}),e.jsx(t,{isOpen:l,onClose:i,title:"System Alert",onCancel:()=>console.log("Cancelled"),onConfirm:()=>console.log("Confirmed"),cancelText:"Cancel",confirmText:"Execute",onOpen:()=>console.log("Modal opened"),onCRTBootComplete:()=>console.log("CRT boot complete"),children:s})]})},n={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(d,{storyName:"Default",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 bg-error rounded-full animate-pulse"}),e.jsx("p",{className:"text-error font-semibold",children:"Security Protocol Breach Detected"})]}),e.jsx("div",{className:"bg-surface/30 p-4 rounded border border-error/30",children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Source:"}),e.jsx("span",{className:"text-accent font-mono",children:"192.168.1.101"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Threat Level:"}),e.jsx("span",{className:"text-error font-mono",children:"CRITICAL"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Time:"}),e.jsx("span",{className:"text-primary font-mono",children:"2045-08-15 14:32:07"})]})]})}),e.jsx("p",{className:"text-muted text-sm",children:"An unauthorized access attempt has been detected on the neural network interface. The system recommends immediate isolation of the compromised node."}),e.jsx("div",{className:"border-l-2 border-accent pl-4",children:e.jsx("p",{className:"text-accent text-sm font-mono",children:"> Awaiting admin authorization..."})})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,y as default};
