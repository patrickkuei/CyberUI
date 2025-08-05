import{N as i}from"./Notification-jfqZvEHX.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-iLubtcHH.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-BMEiTPX2.js";const p={title:"Components/Notification",component:i,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed notification component with neon styling and smooth animations.

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

// Responsive sizes
<Notification
  type="success"
  title="Responsive Notification"
  message="This notification adapts to screen size"
  size={{ base: 'sm', lg: 'lg' }}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`type\` | \`'success' | 'warning' | 'error'\` | ✅ | - | Determines the visual style and icon of the notification |
| \`title\` | \`string\` | ✅ | - | The main heading text displayed prominently |
| \`message\` | \`string\` | ✅ | - | The descriptive content below the title |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Notification size (supports responsive values) |
| \`onClose\` | \`() => void\` | ❌ | \`undefined\` | Callback function triggered when close button is clicked. When provided, renders a close button |
`}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","warning","error"],description:"The type of notification to display"},title:{control:"text",description:"The title of the notification"},message:{control:"text",description:"The message content of the notification"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Notification size (supports responsive values)"},onClose:{action:"closed",description:"Callback function when notification is closed"}}},e={args:{type:"success",title:"Success",message:"Operation completed successfully"}},t={args:{type:"warning",title:"Warning",message:"Please check your input and try again"}},s={args:{type:"error",title:"Error",message:"Something went wrong. Please try again"}},o={args:{type:"success",title:"Dismissible Notification",message:"This notification can be closed",onClose:()=>console.log("Notification closed")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please check your input and try again'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Dismissible Notification',
    message: 'This notification can be closed',
    onClose: () => console.log('Notification closed')
  }
}`,...o.parameters?.docs?.source}}};const m=["Success","Warning","Error","WithCloseButton"];export{s as Error,e as Success,t as Warning,o as WithCloseButton,m as __namedExportsOrder,p as default};
