import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-DjgdDX3T.js";import{g as L,R as z}from"./responsive-DQhaiqep.js";import{u as M,R as _}from"./usePrefersReducedMotion-Dw7YQZ8Y.js";import"./preload-helper-D9Z9MdNV.js";import"./reducedMotionSubscription-DIxCKqWn.js";const R=({type:e,title:s,message:r,size:d="md",onClose:o})=>{const u=g=>L(g,z.notification),l=(()=>{switch(e){case"success":return{container:"bg-linear-135/srgb from-accent from-10% to-secondary to-90% shadow-lg-accent",textColor:"text-inverse",icon:t.jsx("svg",{className:"w-6 h-6 text-inverse",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})};case"warning":return{container:"bg-surface border-l-4 border-secondary shadow-lg",textColor:"text-default",icon:t.jsx("svg",{className:"w-6 h-6 text-secondary",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})};case"error":return{container:"bg-error shadow-error",textColor:"text-inverse",icon:t.jsx("svg",{className:"w-6 h-6 text-inverse",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})};default:return{container:"bg-surface border-l-4 border-secondary shadow-lg",textColor:"text-default",icon:null}}})(),f=u(d),m=e==="error"?"alert":"status",h=e==="warning"?"hover:text-default/70":"hover:text-inverse/70";return t.jsxs("div",{className:`flex items-start rounded-lg ${f} ${l.container}`,role:m,"aria-atomic":"true",children:[t.jsx("div",{className:"flex-shrink-0",children:l.icon}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h4",{className:`font-bold ${l.textColor}`,children:s}),t.jsx("p",{className:`${e==="success"||e==="error"?"text-inverse/80":"text-muted"} text-sm mt-1`,children:r})]}),o&&t.jsx("button",{className:`flex-shrink-0 ${l.textColor} ${h} transition-colors cursor-pointer`,onClick:o,"aria-label":"Close notification",children:t.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})};R.displayName="CyberUI.Notification";R.__docgenInfo={description:`A cyberpunk-themed toast or inline notification for system alerts and status updates.

@example
<Notification 
  type="success" 
  title="Neural Link Established" 
  message="Connection stable at 0.3ms latency." 
/>`,methods:[],displayName:"CyberUI.Notification",props:{type:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Semantic type of the notification."},title:{required:!0,tsType:{name:"string"},description:"Bold title for the notification"},message:{required:!0,tsType:{name:"string"},description:"Detailed message content"},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the notification.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional callback for when the close button is clicked"}}};const D=c.createContext(void 0),W=({notification:e,index:s,position:r,reduceMotion:d,onWidth:o,onClose:u})=>{const p=c.useRef(null),{id:l}=e,f=!!e.width;c.useLayoutEffect(()=>{if(f)return;const i=p.current?.scrollWidth??0;i>0&&o(l,i)}),c.useLayoutEffect(()=>{const i=p.current;if(f||!i||typeof ResizeObserver>"u")return;const n=new ResizeObserver(()=>{const a=i.scrollWidth;a>0&&(o(l,a),n.disconnect())});return n.observe(i),()=>n.disconnect()},[f,l,o]);const m=r.includes("right"),h=r.startsWith("bottom"),g=`${s*70}px`;return t.jsx("div",{className:"absolute",style:{right:m?0:void 0,left:r.includes("left")?0:void 0,top:h?void 0:g,bottom:h?g:void 0,width:e.width?`${e.width}px`:"auto"},children:t.jsx("div",{className:`transform transition-all duration-500 motion-reduce:duration-150 motion-reduce:translate-x-0 ease-out opacity-90 w-full ${m?"flex justify-end":"flex justify-start"} ${e.isClosing?"opacity-0":"opacity-90"}`,style:{whiteSpace:"nowrap",transformOrigin:m?"right center":"left center",transform:d?"scale(0.75)":e.isClosing?`translateX(${m?"100%":"-100%"}) scale(0.75)`:`translateX(${e.width?"0px":m?"100%":"-100%"}) scale(0.75)`,...d&&!e.width?{opacity:0}:{}},ref:p,children:t.jsx(R,{type:e.type,title:e.title,message:e.message,onClose:()=>u(l),size:"sm"})})})},P=e=>e?_:500,O=({children:e,position:s="top-right",defaultDuration:r=2500})=>{const[d,o]=c.useState([]),u=M(),p=c.useRef(u);p.current=u;const l=c.useCallback((i,n,a,y={})=>{const w=Date.now().toString(),{autoHide:B=!0,duration:q=r}=y;return o(v=>[...v,{id:w,type:i,title:n,message:a}]),B&&setTimeout(()=>{o(v=>v.map(b=>b.id===w?{...b,isClosing:!0}:b)),setTimeout(()=>{o(v=>v.filter(b=>b.id!==w))},P(p.current))},q),w},[r]),f=c.useCallback(i=>{o(n=>n.map(a=>a.id===i?{...a,isClosing:!0}:a)),setTimeout(()=>{o(n=>n.filter(a=>a.id!==i))},P(p.current))},[]),m=c.useCallback(()=>{o([])},[]),h=c.useCallback((i,n)=>{o(a=>a.map(y=>y.id===i?{...y,width:n}:y))},[]),g={notifications:d,showNotification:l,hideNotification:f,clearAllNotifications:m};return t.jsxs(D.Provider,{value:g,children:[e,d.length>0&&t.jsx("div",{className:`fixed z-50 ${I(s)}`,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"true",children:d.map((i,n)=>t.jsx(W,{notification:i,index:n,position:s,reduceMotion:u,onWidth:h,onClose:f},i.id))})]})},I=e=>{const s={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4"};return s[e]||s["top-right"]};O.__docgenInfo={description:`Context provider for the Cyberpunk notification system.
Wrap your application root with this provider to enable toasts.

While the user prefers reduced motion (\`prefers-reduced-motion: reduce\`),
toasts fade in and out in 150ms instead of sliding.

@example
<CyberNotificationProvider position="top-right">
  <App />
</CyberNotificationProvider>`,methods:[],displayName:"CyberNotificationProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},defaultDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2500",computed:!1}}}};const U=()=>{const e=c.useContext(D);if(e===void 0)throw new Error("useCyberNotifications must be used within a CyberNotificationProvider");return e},{expect:S,userEvent:j,waitFor:$,within:E}=__STORYBOOK_MODULE_TEST__,X={title:"Components/Notification",component:R,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed notification component with neon styling and smooth animations.

## 🚀 Recommended: Use the Notification System

For real applications, use the notification system with provider + hook:

\`\`\`tsx
import React from 'react';
import { CyberNotificationProvider, useCyberNotifications } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// 1. Wrap your app with the provider
function App() {
  return (
    <CyberNotificationProvider position="top-right" defaultDuration={2500}>
      <MyComponent />
    </CyberNotificationProvider>
  );
}

// 2. Use the hook in any component
function MyComponent() {
  const { showNotification } = useCyberNotifications();

  const handleClick = () => {
    showNotification('success', 'NEURAL.SYS', 'Operation completed successfully');
    showNotification('warning', 'SECURITY.SYS', 'Check your input');
    showNotification('error', 'SYSTEM.ERR', 'Something went wrong');
  };

  return <button onClick={handleClick}>Show Notifications</button>;
}
\`\`\`

## 📋 Static Usage (for demos/storybook)

For static displays or when you need full control:

\`\`\`tsx
import { Notification } from 'cyberui-2045';

<Notification
  type="success"
  title="Success"
  message="Operation completed successfully"
/>

<Notification
  type="warning"
  title="Warning" 
  message="Please check your input"
  onClose={() => console.log('Closed')}
/>
\`\`\`

## 📋 API Reference

### CyberNotificationProvider Props

Under \`prefers-reduced-motion: reduce\`, toasts fade in and out in 150ms instead of sliding.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`children\` | \`ReactNode\` | ✅ | - | The app content to wrap with notification context |
| \`position\` | \`'top-right' \\| 'top-left' \\| 'bottom-right' \\| 'bottom-left'\` | ❌ | \`'top-right'\` | Position where notifications will appear |
| \`defaultDuration\` | \`number\` | ❌ | \`2500\` | Default auto-hide duration in milliseconds |

### useCyberNotifications Hook

Returns an object with:

| Method | Type | Description |
|--------|------|-------------|
| \`showNotification\` | \`(type, title, message, options?) => string\` | Display a new notification. Returns the notification ID |
| \`hideNotification\` | \`(id: string) => void\` | Manually hide a specific notification |
| \`clearAllNotifications\` | \`() => void\` | Clear all visible notifications |

#### showNotification Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`type\` | \`'success' \\| 'warning' \\| 'error'\` | ✅ | Notification type determining style and icon |
| \`title\` | \`string\` | ✅ | Main heading text |
| \`message\` | \`string\` | ✅ | Descriptive content |
| \`options\` | \`NotificationOptions\` | ❌ | Additional configuration |

#### NotificationOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| \`autoHide\` | \`boolean\` | \`true\` | Whether notification auto-hides |
| \`duration\` | \`number\` | \`defaultDuration\` | Custom duration in milliseconds |

### Notification Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`type\` | \`'success' \\| 'warning' \\| 'error'\` | ✅ | - | Determines the visual style and icon of the notification |
| \`title\` | \`string\` | ✅ | - | The main heading text displayed prominently |
| \`message\` | \`string\` | ✅ | - | The descriptive content below the title |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Notification size (supports responsive values) |
| \`onClose\` | \`() => void\` | ❌ | \`undefined\` | Callback function triggered when close button is clicked. When provided, renders a close button |
`}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","warning","error"],description:"The type of notification to display"},title:{control:"text",description:"The title of the notification"},message:{control:"text",description:"The message content of the notification"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Notification size (supports responsive values)"},onClose:{action:"closed",description:"Callback function when notification is closed"}}},x={args:{type:"success",title:"Success",message:"Operation completed successfully"}},N={args:{type:"warning",title:"Warning",message:"Please check your input and try again"}},C={args:{type:"error",title:"Error",message:"Something went wrong. Please try again"}},T={args:{type:"success",title:"Dismissible Notification",message:"This notification can be closed",onClose:()=>console.log("Notification closed")}};function A(){const{showNotification:e}=U();return t.jsx("button",{type:"button",className:"px-4 py-2 border border-cyan-400 text-cyan-300 font-mono",onClick:()=>{e("success","UPLINK.SYS","Neural handshake complete",{autoHide:!1})},children:"Jack in"})}const k={parameters:{layout:"fullscreen",docs:{description:{story:'Toasts from a `CyberNotificationProvider` with `position="bottom-right"` or `"bottom-left"` appear above the bottom edge of the viewport and stack upward, newest on top.'}}},render:()=>t.jsx(O,{position:"bottom-right",children:t.jsx("div",{className:"p-8",children:t.jsx(A,{})})}),play:async({canvasElement:e})=>{const s=E(e).getByRole("button",{name:/jack in/i});await j.click(s),await j.click(s);const r=await E(document.body).findAllByText("UPLINK.SYS");S(r).toHaveLength(2),await $(()=>{for(const d of r){const{top:o,bottom:u}=d.getBoundingClientRect();S(o).toBeGreaterThanOrEqual(0),S(u).toBeLessThanOrEqual(window.innerHeight)}})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully'
  }
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please check your input and try again'
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again'
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Dismissible Notification',
    message: 'This notification can be closed',
    onClose: () => console.log('Notification closed')
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Toasts from a \`CyberNotificationProvider\` with \`position="bottom-right"\` or \`"bottom-left"\` appear above the bottom edge of the viewport and stack upward, newest on top.'
      }
    }
  },
  render: () => <CyberNotificationProvider position="bottom-right">
      <div className="p-8">
        <BottomToastDemo />
      </div>
    </CyberNotificationProvider>,
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /jack in/i
    });
    await userEvent.click(button);
    await userEvent.click(button);
    const toasts = await within(document.body).findAllByText('UPLINK.SYS');
    expect(toasts).toHaveLength(2);
    await waitFor(() => {
      for (const toast of toasts) {
        const {
          top,
          bottom
        } = toast.getBoundingClientRect();
        expect(top).toBeGreaterThanOrEqual(0);
        expect(bottom).toBeLessThanOrEqual(window.innerHeight);
      }
    });
  }
}`,...k.parameters?.docs?.source}}};const J=["Success","Warning","Error","WithCloseButton","BottomPosition"];export{k as BottomPosition,C as Error,x as Success,N as Warning,T as WithCloseButton,J as __namedExportsOrder,X as default};
