import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bb7R-1FN.js";import{g as n,R as r}from"./responsive-CMR7KYFx.js";const v=({progress:m,size:a="md",className:t=""})=>{const i=e=>n(e,r.linearProgress.width),u=e=>n(e,r.linearProgress.height),d=i(a),l=u(a),o=["bg-surface","rounded-full","shadow-inner",l,t||d].join(" "),g=["bg-gradient-to-r","from-accent","to-primary","rounded-full","shadow-lg-accent","transition-all","duration-500","ease-out",l].join(" ");return s.jsx("div",{className:o,children:s.jsx("div",{className:g,style:{width:`${m}%`}})})};v.__docgenInfo={description:"",methods:[],displayName:"LinearProgress",props:{progress:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:`T | {
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
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{v as L};
