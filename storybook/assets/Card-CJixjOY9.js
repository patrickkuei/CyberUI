import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-iLubtcHH.js";import{g as v,R as f}from"./responsive-BMEiTPX2.js";const g=({variant:n="default",size:t="md",title:l,titleBorder:s=!0,children:m,className:u="",...d})=>{const i=e=>v(e,f.card),o=e=>{const a=i(t);return{default:`bg-base border border-border-default rounded-xl ${a}`,accent:`bg-surface border-2 border-accent rounded-xl shadow-input-accent/50 hover:shadow-lg-accent transition-all duration-300 transform ${a}`,small:`bg-base rounded-lg border border-border-default ${a}`}[e]},c=e=>e?"text-xl font-semibold text-secondary mb-4 border-b border-accent pb-2":"text-xl font-semibold text-secondary mb-4";return r.jsxs("div",{className:`${o(n)} ${u}`,...d,children:[l&&r.jsx("h3",{className:c(s),children:l}),m]})};g.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'accent' | 'small'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:"",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},titleBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{g as C};
