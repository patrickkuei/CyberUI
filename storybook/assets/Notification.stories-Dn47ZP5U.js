import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-B52jae2o.js";import{g as y,R as v}from"./responsive-ChLhblTX.js";import"./preload-helper-PPVm8Dsz.js";const l=({type:t,title:c,message:u,size:m="md",onClose:r})=>{const d=h=>y(h,v.notification),i=(()=>{switch(t){case"success":return{container:"bg-linear-(--gradient-accent) shadow-lg-accent",textColor:"text-base",icon:e.jsx("svg",{className:"w-6 h-6 text-base",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})};case"warning":return{container:"bg-surface border-l-4 border-secondary shadow-lg",textColor:"text-default",icon:e.jsx("svg",{className:"w-6 h-6 text-secondary",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})};case"error":return{container:"bg-error shadow-error",textColor:"text-base",icon:e.jsx("svg",{className:"w-6 h-6 text-base",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})};default:return{container:"bg-surface border-l-4 border-secondary shadow-lg",textColor:"text-default",icon:null}}})(),p=d(m),f=t==="error"?"alert":"status",g=t==="warning"?"hover:text-default/70":"hover:text-base/70";return e.jsxs("div",{className:`flex items-start rounded-lg ${p} ${i.container}`,role:f,"aria-atomic":"true",children:[e.jsx("div",{className:"flex-shrink-0",children:i.icon}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:`font-bold ${i.textColor}`,children:c}),e.jsx("p",{className:`${t==="success"||t==="error"?"text-base/80":"text-muted"} text-sm mt-1`,children:u})]}),r&&e.jsx("button",{className:`flex-shrink-0 ${i.textColor} ${g} transition-colors cursor-pointer`,onClick:r,"aria-label":"Close notification",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})};l.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{type:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Semantic type of the notification."},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:`Size of the notification.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const S={title:"Components/Notification",component:l,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed notification component with neon styling and smooth animations.

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
`}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","warning","error"],description:"The type of notification to display"},title:{control:"text",description:"The title of the notification"},message:{control:"text",description:"The message content of the notification"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Notification size (supports responsive values)"},onClose:{action:"closed",description:"Callback function when notification is closed"}}},o={args:{type:"success",title:"Success",message:"Operation completed successfully"}},n={args:{type:"warning",title:"Warning",message:"Please check your input and try again"}},s={args:{type:"error",title:"Error",message:"Something went wrong. Please try again"}},a={args:{type:"success",title:"Dismissible Notification",message:"This notification can be closed",onClose:()=>console.log("Notification closed")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please check your input and try again'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Dismissible Notification',
    message: 'This notification can be closed',
    onClose: () => console.log('Notification closed')
  }
}`,...a.parameters?.docs?.source}}};const T=["Success","Warning","Error","WithCloseButton"];export{s as Error,o as Success,n as Warning,a as WithCloseButton,T as __namedExportsOrder,S as default};
