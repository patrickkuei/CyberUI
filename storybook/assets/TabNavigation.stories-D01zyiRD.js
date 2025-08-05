import{j as c}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dhwu3wqV.js";import{T as a}from"./index-BBwP5Ey1.js";import"./preload-helper-D9Z9MdNV.js";const b=({tabs:e,activeTab:i,onTabChange:d})=>c.jsx("div",{className:"flex space-x-2",children:e.map(t=>c.jsx("button",{onClick:()=>d(t),className:`
            px-6 py-2 font-bold text-lg transition-all duration-300 rounded-t-lg cursor-pointer
            ${i===t?"bg-surface text-secondary border-2 border-border-default border-b-0 shadow-secondary -mb-[2px] hover:shadow-lg-accent":"text-muted border-b-2 border-border-default hover:text-secondary hover:border-secondary"}
          `,children:t},t))});b.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{tabs:{required:!0,tsType:{name:"unknown"},description:""},activeTab:{required:!0,tsType:{name:"TABS[number]",raw:"typeof TABS[number]"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: Tab) => void",signature:{arguments:[{type:{name:"TABS[number]",raw:"typeof TABS[number]"},name:"tab"}],return:{name:"void"}}},description:""}}};const l={title:"Components/TabNavigation",component:b,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed tab navigation component with neon styling and smooth animations.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { TabNavigation } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const tabs = ['Home', 'Interactive', 'Feedback', 'Elements'];

function MyComponent() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <TabNavigation
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`tabs\` | \`readonly Tab[]\` | ✅ | - | Array of tab names to display |
| \`activeTab\` | \`Tab\` | ✅ | - | Currently selected tab name |
| \`onTabChange\` | \`(tab: Tab) => void\` | ✅ | - | Callback function triggered when a tab is clicked |
`}}},tags:["autodocs"],argTypes:{tabs:{control:!1,description:"Array of tab names"},activeTab:{control:{type:"select"},options:a,description:"Currently active tab"},onTabChange:{action:"tab changed",description:"Callback function when tab is changed"}}},o={args:{tabs:a,activeTab:"Home",onTabChange:e=>console.log("Tab changed to:",e)}},n={args:{tabs:a,activeTab:"Interactive",onTabChange:e=>console.log("Tab changed to:",e)}},r={args:{tabs:a,activeTab:"Elements",onTabChange:e=>console.log("Tab changed to:",e)}},s={args:{tabs:a,activeTab:"Feedback",onTabChange:e=>console.log("Tab changed to:",e)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Home',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Interactive',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Elements',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Feedback',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...s.parameters?.docs?.source}}};const u=["Default","InteractiveTab","ElementsTab","FeedbackTab"];export{o as Default,r as ElementsTab,s as FeedbackTab,n as InteractiveTab,u as __namedExportsOrder,l as default};
