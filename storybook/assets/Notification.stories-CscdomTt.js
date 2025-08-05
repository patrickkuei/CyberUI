import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D2UWPkh6.js";import"./preload-helper-D9Z9MdNV.js";const c=({type:r,title:l,message:d,onClose:a})=>{const t=(()=>{switch(r){case"success":return{container:"bg-linear-(--gradient-accent) shadow-lg-accent",textColor:"text-base",icon:e.jsx("svg",{className:"w-6 h-6 text-base",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})};case"warning":return{container:"bg-surface border-l-4 border-secondary shadow-lg",textColor:"text-default",icon:e.jsx("svg",{className:"w-6 h-6 text-secondary",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})};case"error":return{container:"bg-error shadow-error",textColor:"text-base",icon:e.jsx("svg",{className:"w-6 h-6 text-base",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})};default:return{container:"bg-surface border-l-4 border-secondary shadow-lg",textColor:"text-default",icon:null}}})();return e.jsxs("div",{className:`flex items-start space-x-4 rounded-lg p-4 ${t.container}`,children:[e.jsx("div",{className:"flex-shrink-0",children:t.icon}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:`font-bold ${t.textColor}`,children:l}),e.jsx("p",{className:`${r==="success"||r==="error"?"text-base/80":"text-muted"} text-sm mt-1`,children:d})]}),a&&e.jsx("button",{className:`flex-shrink-0 ${t.textColor} hover:${t.textColor}/30 transition-colors cursor-pointer`,onClick:a,children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{type:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const f={title:"Components/Notification",component:c,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed notification component with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Notification } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Success notification
<Notification
  type="success"
  title="Success"
  message="Operation completed successfully"
/>

// Warning notification
<Notification
  type="warning"
  title="Warning"
  message="Please check your input and try again"
/>

// Error notification
<Notification
  type="error"
  title="Error"
  message="Something went wrong. Please try again"
/>

// With close button
<Notification
  type="success"
  title="Dismissible Notification"
  message="This notification can be closed"
  onClose={() => console.log('Notification closed')}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`type\` | \`'success' | 'warning' | 'error'\` | ✅ | - | Determines the visual style and icon of the notification |
| \`title\` | \`string\` | ✅ | - | The main heading text displayed prominently |
| \`message\` | \`string\` | ✅ | - | The descriptive content below the title |
| \`onClose\` | \`() => void\` | ❌ | \`undefined\` | Callback function triggered when close button is clicked. When provided, renders a close button |
`}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","warning","error"],description:"The type of notification to display"},title:{control:"text",description:"The title of the notification"},message:{control:"text",description:"The message content of the notification"},onClose:{action:"closed",description:"Callback function when notification is closed"}}},s={args:{type:"success",title:"Success",message:"Operation completed successfully"}},o={args:{type:"warning",title:"Warning",message:"Please check your input and try again"}},n={args:{type:"error",title:"Error",message:"Something went wrong. Please try again"}},i={args:{type:"success",title:"Dismissible Notification",message:"This notification can be closed",onClose:()=>console.log("Notification closed")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please check your input and try again'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Dismissible Notification',
    message: 'This notification can be closed',
    onClose: () => console.log('Notification closed')
  }
}`,...i.parameters?.docs?.source}}};const h=["Success","Warning","Error","WithCloseButton"];export{n as Error,s as Success,o as Warning,i as WithCloseButton,h as __namedExportsOrder,f as default};
