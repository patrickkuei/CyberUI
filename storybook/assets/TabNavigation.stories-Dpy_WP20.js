import{T as r}from"./TabNavigation-BxxAH7Bu.js";import{T as e}from"./index-CUXcN9Hm.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Duw4cJgX.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-CMR7KYFx.js";const l={title:"Components/TabNavigation",component:r,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed tab navigation component with neon styling and smooth animations.

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

// Responsive sizes
<TabNavigation
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  size={{ base: 'sm', lg: 'lg' }}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`tabs\` | \`readonly Tab[]\` | ✅ | - | Array of tab names to display |
| \`activeTab\` | \`Tab\` | ✅ | - | Currently selected tab name |
| \`onTabChange\` | \`(tab: Tab) => void\` | ✅ | - | Callback function triggered when a tab is clicked |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Tab size (supports responsive values) |
`}}},tags:["autodocs"],argTypes:{tabs:{control:!1,description:"Array of tab names"},activeTab:{control:{type:"select"},options:e,description:"Currently active tab"},onTabChange:{action:"tab changed",description:"Callback function when tab is changed"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tab size (supports responsive values)"}}},t={args:{tabs:e,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a)}},o={args:{tabs:e,activeTab:"Interactive",onTabChange:a=>console.log("Tab changed to:",a)}},s={args:{tabs:e,activeTab:"Elements",onTabChange:a=>console.log("Tab changed to:",a)}},n={args:{tabs:e,activeTab:"Feedback",onTabChange:a=>console.log("Tab changed to:",a)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Home',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Interactive',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Elements',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: TABS,
    activeTab: 'Feedback',
    onTabChange: tab => console.log('Tab changed to:', tab)
  }
}`,...n.parameters?.docs?.source}}};const p=["Default","InteractiveTab","ElementsTab","FeedbackTab"];export{t as Default,s as ElementsTab,n as FeedbackTab,o as InteractiveTab,p as __namedExportsOrder,l as default};
