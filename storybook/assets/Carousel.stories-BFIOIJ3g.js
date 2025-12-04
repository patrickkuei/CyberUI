import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-qIXMJ8Q3.js";import{I as T}from"./Image-ZahXRDlD.js";import{g as Y,R as K}from"./responsive-hlslnJmS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CovUby51.js";import"./index-CGGz6Qgb.js";const E=({images:s,currentIndex:n,onChange:u,size:f="md",autoPlay:p=!0,interval:h=3e3,infinite:c=!0,transition:i="slide",objectFit:F="cover",showArrows:R=!0,showIndicators:G=!0,className:z="",disableImagePreview:C=!1,glitchRate:v=1,onBeforeChange:P,onAfterChange:A})=>{const[o,_]=r.useState(!1),[L,d]=r.useState(p),[b,D]=r.useState(!0),M=r.useMemo(()=>Y(f,K.carousel),[f]),S="w-full h-full",g=r.useCallback(a=>{if(a===n||o)return;const t=i==="signal-glitch"&&(typeof v=="boolean"?v:Math.random()<v);D(t),_(!0),P?.(n,a),setTimeout(()=>{u(a),_(!1),A?.(a)},i==="slide"?0:i==="signal-glitch"&&t?600:250)},[n,o,u,P,A,i,v]);r.useEffect(()=>{if(!L||s.length<=1)return;const a=setInterval(()=>{const t=c?(n+1)%s.length:Math.min(n+1,s.length-1);if(!c&&t===s.length-1){d(!1);return}g(t)},h);return()=>clearInterval(a)},[L,n,s.length,c,h,g]);const I=r.useCallback(()=>{if(s.length<=1)return;const a=c?(n-1+s.length)%s.length:Math.max(n-1,0);d(!1),g(a)},[n,s.length,c,g]),k=r.useCallback(()=>{if(s.length<=1)return;const a=c?(n+1)%s.length:Math.min(n+1,s.length-1);d(!1),g(a)},[n,s.length,c,g]),Z=r.useCallback(a=>{d(!1),g(a)},[g]);r.useEffect(()=>{const a=t=>{t.key==="ArrowLeft"&&I(),t.key==="ArrowRight"&&k()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[I,k]);const V=()=>e.jsx("div",{className:"flex h-full transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${n*100}%)`,willChange:"transform"},children:s.map((a,t)=>e.jsx("div",{className:"w-full h-full flex-shrink-0",children:e.jsx(T,{src:a.src,alt:a.alt,fallback:a.fallbackSrc,className:S,size:"lg",preview:!C,loading:t<=1?"eager":"lazy",onPreviewOpen:()=>d(!1),onPreviewClose:()=>d(p)})},t))}),$=()=>e.jsx(e.Fragment,{children:s.map((a,t)=>{const l=t===n,y=i==="fade"?{opacity:l?1:0,transition:"opacity 500ms ease-in-out",willChange:"opacity"}:i==="matrix"?{opacity:l?1:0,transform:l?"scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0) skew(0deg) perspective(1000px)":o?"scale(0.6) rotateX(35deg) rotateY(15deg) rotateZ(-3deg) translateZ(-80px) skew(5deg, 2deg) perspective(1000px)":"scale(0.92) rotateX(8deg) rotateY(2deg) translateZ(-20px) skew(1deg) perspective(1000px)",filter:l?"brightness(1) contrast(1) hue-rotate(0deg) saturate(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))":o?"brightness(0.1) contrast(4) hue-rotate(270deg) saturate(3) blur(2px) drop-shadow(0 0 20px rgba(255, 0, 93, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 249, 0.6))":"brightness(0.7) contrast(1.5) hue-rotate(120deg) saturate(1.4) drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))",transition:"all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",willChange:"transform, opacity, filter",boxShadow:l?"0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.15), 0 0 60px rgba(0, 255, 136, 0.2)":o?"0 0 50px rgba(255, 0, 93, 1), 0 0 100px rgba(0, 255, 249, 0.8), 0 0 150px rgba(255, 251, 0, 0.6), inset 0 0 50px rgba(255, 0, 93, 0.3), inset 0 0 80px rgba(0, 255, 249, 0.2), 0 0 0 3px rgba(255, 0, 93, 0.8), 0 0 0 6px rgba(0, 255, 249, 0.6), 0 0 200px rgba(255, 251, 0, 0.3)":"0 0 20px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1), 0 0 40px rgba(0, 255, 136, 0.2)"}:{};return e.jsxs("div",{className:"absolute inset-0 w-full h-full",style:{...y,pointerEvents:l?"auto":"none"},children:[e.jsx(T,{src:a.src,alt:a.alt,fallback:a.fallbackSrc,className:S,size:"lg",preview:!C,loading:t<=1?"eager":"lazy",onPreviewOpen:()=>d(!1),onPreviewClose:()=>d(p)}),i==="matrix"&&O(l,o)]},t)})}),B=()=>e.jsx(e.Fragment,{children:s.map((a,t)=>{const l=t===n,y=t===(n-1+s.length)%s.length,W=o&&i==="signal-glitch"&&b?{opacity:l?1:y?.8:0,animation:l?"signal-image-flicker-in 1s ease-out forwards":y?"signal-image-flicker-out 1s ease-out forwards":"none",willChange:"opacity",pointerEvents:o&&!l?"none":"auto",transform:o?"translateZ(0)":"none"}:{opacity:l?1:0,transition:"opacity 250ms ease-in-out",willChange:"opacity",pointerEvents:l?"auto":"none"};return e.jsxs("div",{className:"absolute inset-0 w-full h-full",style:W,children:[e.jsx(T,{src:a.src,alt:a.alt,fallback:a.fallbackSrc,className:S,size:"lg",preview:!C&&!(o&&i==="signal-glitch"&&b),loading:t<=1?"eager":"lazy",onPreviewOpen:()=>d(!1),onPreviewClose:()=>d(p)}),i==="signal-glitch"&&o&&b&&U(l)]},t)})}),O=(a,t)=>e.jsx(e.Fragment,{children:t&&e.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:a?e.jsx("div",{className:"w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-30"}):e.jsx("div",{className:"w-full h-full bg-gradient-to-b from-primary/10 via-secondary/5 to-accent/10 opacity-50"})})}),U=a=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`absolute inset-0 pointer-events-none z-5 ${a?"opacity-30":"opacity-15"}`,children:e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
              linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
            `,backgroundSize:"40px 40px",animation:"signal-glitch-blink 1s ease-in-out infinite"}})}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10 overflow-hidden",children:[e.jsx("div",{className:"absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-80",style:{top:"20%",animation:"signal-glitch-vertical-sweep 1s linear infinite",boxShadow:"0 0 8px rgba(255, 0, 93, 1), 0 0 16px rgba(255, 0, 93, 0.5)"}}),e.jsx("div",{className:"absolute w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60",style:{top:"60%",animation:"signal-glitch-vertical-sweep 1.5s linear infinite 0.3s",boxShadow:"0 0 6px rgba(0, 255, 249, 0.8)"}}),e.jsx("div",{className:"absolute w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70",style:{top:"80%",animation:"signal-glitch-vertical-sweep 0.8s linear infinite 0.7s",boxShadow:"0 0 10px rgba(255, 251, 0, 0.9)"}})]}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-30",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent",style:{animation:"signal-glitch-blink 1s ease-in-out infinite"}}),e.jsx("div",{className:"absolute w-full h-px bg-accent/80 top-1/3",style:{animation:"signal-scanline-jitter 1s linear infinite",boxShadow:"0 0 4px rgba(255, 251, 0, 1)"}}),e.jsx("div",{className:"absolute w-full h-px bg-secondary/60 top-2/3",style:{animation:"signal-scanline-jitter 1s linear infinite 0.4s",boxShadow:"0 0 4px rgba(0, 255, 249, 0.8)"}})]}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-40",style:{animation:"signal-rgb-separation 1s ease-in-out infinite",mixBlendMode:"screen"},children:e.jsx("div",{className:"absolute inset-0 bg-transparent"})}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-50",children:[e.jsx("div",{className:"absolute top-1/4 left-1/2 w-24 h-2 bg-white/30",style:{animation:"signal-glitch-blink 1s ease-in-out infinite 0.1s",transform:"translateX(-50%)",filter:"blur(0.8px)"}}),e.jsx("div",{className:"absolute top-3/4 right-1/4 w-20 h-1 bg-primary/40",style:{animation:"signal-glitch-blink 1s ease-in-out infinite 0.8s",filter:"blur(0.4px)"}}),e.jsx("div",{className:"absolute top-1/2 left-1/4 w-3 h-12 bg-accent/60",style:{animation:"signal-glitch-blink 1s ease-in-out infinite 0.5s",filter:"blur(1.5px)"}})]})]}),X=()=>R&&s.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:I,disabled:!c&&n===0||o&&i==="signal-glitch"&&b,className:"group absolute left-2 top-1/2 -translate-y-1/2 w-16 h-16 text-primary hover:text-accent cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none transition-all duration-300 flex items-center justify-center hover:scale-110","aria-label":"Previous image",children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 100 100",className:"transition-all duration-300 group-hover:scale-110 overflow-visible",style:{overflow:"visible"},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"arrow-gradient-left",x1:"100%",y1:"0%",x2:"0%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgb(0, 255, 136)",stopOpacity:"1",className:"transition-all duration-500 opacity-0 group-hover:opacity-100"}),e.jsx("stop",{offset:"50%",stopColor:"rgb(0, 255, 249)",stopOpacity:"1",className:"transition-all duration-500 opacity-0 group-hover:opacity-100"}),e.jsx("stop",{offset:"100%",stopColor:"rgb(255, 0, 93)",stopOpacity:"1",className:"transition-all duration-500 opacity-0 group-hover:opacity-100"})]})}),e.jsx("path",{d:"M70 20 L20 50 L70 80 L60 50 Z",stroke:"currentColor",strokeWidth:"3",fill:"none",className:"transition-all duration-300 group-hover:stroke-[4]"}),e.jsx("path",{d:"M70 20 L20 50 L70 80 L60 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-hover:opacity-100 group-hover:animate-[rgbStroke_1.5s_linear_infinite] group-active:opacity-0",style:{filter:"drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 18px currentColor)"}}),e.jsx("path",{d:"M70 20 L20 50 L70 80 L60 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-active:opacity-100 group-active:animate-[rgbStroke_1.5s_linear_infinite]"})]})}),e.jsx("button",{onClick:k,disabled:!c&&n===s.length-1||o&&i==="signal-glitch"&&b,className:"group absolute right-2 top-1/2 -translate-y-1/2 w-16 h-16 text-primary hover:text-accent cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none transition-all duration-300 flex items-center justify-center hover:scale-110","aria-label":"Next image",children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 100 100",className:"transition-all duration-300 group-hover:scale-110 overflow-visible",style:{overflow:"visible"},children:[e.jsx("path",{d:"M30 20 L80 50 L30 80 L40 50 Z",stroke:"currentColor",strokeWidth:"3",fill:"none",className:"transition-all duration-300 group-hover:stroke-[4]"}),e.jsx("path",{d:"M30 20 L80 50 L30 80 L40 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-hover:opacity-100 group-hover:animate-[rgbStroke_1.5s_linear_infinite] group-active:opacity-0",style:{filter:"drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 18px currentColor)"}}),e.jsx("path",{d:"M30 20 L80 50 L30 80 L40 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-active:opacity-100 group-active:animate-[rgbStroke_1.5s_linear_infinite]"})]})})]}),H=()=>G&&s.length>1&&e.jsx("div",{className:"flex justify-center mt-4 space-x-4",children:s.map((a,t)=>e.jsxs("button",{onClick:()=>Z(t),disabled:o&&i==="signal-glitch"&&b,className:"group relative transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-30",style:{width:"24px",height:"24px"},"aria-label":`Go to slide ${t+1}`,children:[t===n&&e.jsx("div",{className:"absolute inset-[-1px] border-2",style:{borderColor:"rgb(255, 0, 93)",animation:"rotateFocusRing 0.8s ease-out forwards, rgbBorder 1.5s linear infinite 0.8s"}}),e.jsx("div",{className:`absolute inset-0 border-2 transition-all duration-300 ${t===n?"border-primary bg-primary/30 shadow-lg-primary animate-[rgbBorder_1.5s_linear_infinite]":"border-accent bg-surface/50 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-primary group-hover:animate-[rgbBorder_1.5s_linear_infinite]"}`,style:{clipPath:"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"}}),t===n&&e.jsx("div",{className:"absolute inset-2 bg-primary/60 animate-pulse",style:{clipPath:"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",animation:"rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"}}),t===n&&e.jsxs("div",{className:"absolute inset-0 opacity-80",children:[e.jsx("div",{className:"absolute top-1/2 left-2 right-2 h-0.5 bg-primary/80 animate-pulse",style:{transform:"translateY(-50%)",animation:"rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"}}),e.jsx("div",{className:"absolute left-1/2 top-2 bottom-2 w-0.5 bg-primary/80 animate-pulse",style:{transform:"translateX(-50%)",animation:"rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite"}})]})]},t))});if(s.length===0)return e.jsx("div",{className:`${M} w-full bg-surface border border-accent rounded-lg flex items-center justify-center ${z}`,children:e.jsx("p",{className:"text-muted",children:"No images to display"})});const q=s[n];return e.jsxs("div",{className:`relative w-full ${z}`,children:[e.jsxs("div",{className:`relative w-full overflow-hidden rounded-lg border border-accent bg-surface ${M}`,children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1 animate-pulse"})]}),e.jsxs("div",{className:`relative w-full h-full overflow-hidden carousel-${F}`,children:[i==="slide"&&V(),(i==="fade"||i==="matrix")&&$(),i==="signal-glitch"&&B()]}),q.caption&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4",children:e.jsx("p",{className:"text-white text-sm font-medium",children:q.caption})}),X()]}),H()]})},m=r.memo(E);E.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{onBeforeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(fromIndex: number, toIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"fromIndex"},{type:{name:"number"},name:"toIndex"}],return:{name:"void"}}},description:"Fired before slide change (fromIndex, toIndex)"},onAfterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Fired after slide change"},images:{required:!0,tsType:{name:"Array",elements:[{name:"CarouselImageData"}],raw:"CarouselImageData[]"},description:"Array of images to display"},currentIndex:{required:!0,tsType:{name:"number"},description:"Current slide index (controlled)"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when slide changes"},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"sm",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"md",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"lg",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"2xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}}]}}]},description:"Size variant with responsive support",defaultValue:{value:'"md"',computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"Enable auto-play functionality",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"Auto-play interval in milliseconds",defaultValue:{value:"3000",computed:!1}},infinite:{required:!1,tsType:{name:"boolean"},description:"Enable infinite loop",defaultValue:{value:"true",computed:!1}},transition:{required:!1,tsType:{name:"union",raw:'"slide" | "fade" | "matrix" | "signal-glitch"',elements:[{name:"literal",value:'"slide"'},{name:"literal",value:'"fade"'},{name:"literal",value:'"matrix"'},{name:"literal",value:'"signal-glitch"'}]},description:"Transition effect",defaultValue:{value:'"slide"',computed:!1}},objectFit:{required:!1,tsType:{name:"union",raw:'"cover" | "contain"',elements:[{name:"literal",value:'"cover"'},{name:"literal",value:'"contain"'}]},description:"Image object fit behavior",defaultValue:{value:'"cover"',computed:!1}},showArrows:{required:!1,tsType:{name:"boolean"},description:"Show navigation arrows",defaultValue:{value:"true",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"Show slide indicators",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},disableImagePreview:{required:!1,tsType:{name:"boolean"},description:"Disable click-to-expand on images",defaultValue:{value:"false",computed:!1}},glitchRate:{required:!1,tsType:{name:"union",raw:"number | boolean",elements:[{name:"number"},{name:"boolean"}]},description:"Control signal-glitch effect frequency. Float (0.0-1.0) for probability, boolean for on/off",defaultValue:{value:"1.0",computed:!1}}}};const ie={title:"Components/Carousel",component:m,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed image carousel with auto-play, navigation controls, and smooth transitions.

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Carousel } from 'cyberui-2045';

// Basic usage
const [currentSlide, setCurrentSlide] = useState(0);
const images = [
  { src: '/img1.jpg', alt: 'Cyberpunk cityscape', caption: 'Neo-Tokyo' },
  { src: '/img2.jpg', alt: 'Neon district', caption: 'Corporate Zone' },
];

<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
/>

// Advanced configuration
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  size="lg"
  transition="matrix"
  autoPlay={true}
  interval={4000}
  infinite={false}
  objectFit="contain"
  onBeforeChange={(from, to) => console.log(\`Switching from \${from} to \${to}\`)}
  onAfterChange={(index) => console.log(\`Now showing slide \${index}\`)}
/>

// Responsive sizing
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
/>

// Signal glitch with custom rate
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  transition="signal-glitch"
  glitchRate={0.3}  // 30% chance of glitch effects
  autoPlay={true}
  interval={5000}
/>

// Accessibility and UX optimized
<Carousel
  images={images}
  currentIndex={currentSlide}
  onChange={setCurrentSlide}
  disableImagePreview={true}  // No click-to-expand
  showArrows={false}          // Touch/swipe only
  infinite={false}            // Clear start/end
  autoPlay={false}            // User controlled
/>

// Different transitions
<Carousel images={images} currentIndex={slide1} onChange={setSlide1} transition="slide" />
<Carousel images={images} currentIndex={slide2} onChange={setSlide2} transition="fade" />
<Carousel images={images} currentIndex={slide3} onChange={setSlide3} transition="matrix" />
<Carousel images={images} currentIndex={slide4} onChange={setSlide4} transition="signal-glitch" glitchRate={true} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`images\` | \`CarouselImageData[]\` | ✅ | - | Array of images to display |
| \`currentIndex\` | \`number\` | ✅ | - | Current slide index (controlled) |
| \`onChange\` | \`(index: number) => void\` | ✅ | - | Callback when slide changes |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Carousel size (supports responsive values) |
| \`autoPlay\` | \`boolean\` | ❌ | \`true\` | Enable auto-play functionality |
| \`interval\` | \`number\` | ❌ | \`3000\` | Auto-play interval in milliseconds |
| \`infinite\` | \`boolean\` | ❌ | \`true\` | Enable infinite loop |
| \`transition\` | \`'slide' \\| 'fade' \\| 'matrix' \\| 'signal-glitch'\` | ❌ | \`'slide'\` | Transition effect |
| \`objectFit\` | \`'cover' \\| 'contain'\` | ❌ | \`'cover'\` | Image display behavior |
| \`showArrows\` | \`boolean\` | ❌ | \`true\` | Show navigation arrows |
| \`showIndicators\` | \`boolean\` | ❌ | \`true\` | Show slide indicators |
| \`disableImagePreview\` | \`boolean\` | ❌ | \`false\` | Disable click-to-expand on images |
| \`onBeforeChange\` | \`(from: number, to: number) => void\` | ❌ | - | Callback before slide change |
| \`onAfterChange\` | \`(index: number) => void\` | ❌ | - | Callback after slide change |

**Types:**

\`\`\`tsx
interface CarouselImageData {
  src: string;        // Image source URL
  alt: string;        // Alternative text for accessibility
  fallbackSrc?: string; // Optional fallback image URL on error
  caption?: string;     // Optional caption text overlay
}
\`\`\`
`}}},tags:["autodocs"],argTypes:{images:{control:!1,description:"Array of images to display in the carousel"},currentIndex:{control:!1,description:"Current slide index (managed internally)"},onChange:{control:!1,description:"Callback function when slide changes"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Carousel size (supports responsive values)"},autoPlay:{control:"boolean",description:"Enable auto-play functionality"},interval:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Auto-play interval in milliseconds"},infinite:{control:"boolean",description:"Enable infinite loop"},transition:{control:{type:"select"},options:["slide","fade","matrix","signal-glitch"],description:"Transition effect type"},objectFit:{control:{type:"select"},options:["cover","contain"],description:"Image display behavior"},showArrows:{control:"boolean",description:"Show navigation arrows"},showIndicators:{control:"boolean",description:"Show slide indicators"},disableImagePreview:{control:"boolean",description:"Disable click-to-expand on images"},glitchRate:{control:{type:"range",min:0,max:1,step:.1},description:"Control signal-glitch effect frequency (0.0-1.0 for probability, boolean for on/off)"}},args:{size:"md",autoPlay:!0,interval:3e3,infinite:!0,transition:"slide",objectFit:"cover",showArrows:!0,showIndicators:!0,disableImagePreview:!1,glitchRate:1}},x=[{src:"image_demo_1.jpg",alt:"Cyberpunk cityscape",caption:"Neo-Tokyo District 7"},{src:"image_demo_2.jpg",alt:"Corporate architecture",caption:"Megacorp Tower"},{src:"image_demo_3.jpg",alt:"Underground market",caption:"Data Exchange"}],w={parameters:{docs:{story:{inline:!1,iframeHeight:400}}},args:{images:x},render:s=>{const[n,u]=r.useState(0);return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(m,{...s,currentIndex:n,onChange:u}),e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"text-muted text-xs",children:["⚠️ Note: Controls are disabled due to state sync issues.",e.jsx("br",{})]})})]})})}},N={parameters:{docs:{story:{inline:!1,iframeHeight:800}}},render:()=>{const[s,n]=r.useState(0),[u,f]=r.useState(0),[p,h]=r.useState(0),[c,i]=r.useState(0);return e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-h-screen",children:[e.jsx("div",{className:"space-y-4",children:e.jsx("h4",{className:"text-secondary font-semibold",children:"All Transition Types"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Slide Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"default"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(m,{images:x,currentIndex:s,onChange:n,transition:"slide",autoPlay:!0,interval:4e3,size:"md"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Fade Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"cross-fade"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(m,{images:x,currentIndex:u,onChange:f,transition:"fade",autoPlay:!0,interval:3500,size:"md"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Matrix Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"cyberpunk"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(m,{images:x,currentIndex:p,onChange:h,transition:"matrix",autoPlay:!0,interval:3e3,size:"md"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Signal-Glitch Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"analog-error"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(m,{images:x,currentIndex:c,onChange:i,transition:"signal-glitch",autoPlay:!0,interval:3500,size:"md",glitchRate:.7})})]})]})}},j={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>{const[s,n]=r.useState(0),[u,f]=r.useState(0),[p,h]=r.useState(0);return e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-h-screen",children:[e.jsx("div",{className:"space-y-2",children:e.jsx("h4",{className:"text-secondary font-semibold text-lg",children:"Size Comparison"})}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Small (sm)"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"compact"})]}),e.jsx("div",{className:"max-w-sm",children:e.jsx(m,{images:x,currentIndex:s,onChange:n,size:"sm",autoPlay:!1})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Medium (md)"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"default"})]}),e.jsx("div",{className:"max-w-md",children:e.jsx(m,{images:x,currentIndex:u,onChange:f,size:"md",autoPlay:!1})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Large (lg)"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"showcase"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(m,{images:x,currentIndex:p,onChange:h,size:"lg",autoPlay:!1})})]})]})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400
      }
    }
  },
  args: {
    images: demoImages
  },
  render: args => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return <div className="flex items-center justify-center min-h-screen bg-base p-8">
        <div className="w-full max-w-2xl space-y-4">
          <Carousel {...args} currentIndex={currentIndex} onChange={setCurrentIndex} />
          <div className="text-center">
            <p className="text-muted text-xs">
              ⚠️ Note: Controls are disabled due to state sync issues.
              <br />
            </p>
          </div>
        </div>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 800
      }
    }
  },
  render: () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [fadeIndex, setFadeIndex] = useState(0);
    const [matrixIndex, setMatrixIndex] = useState(0);
    const [signalGlitchIndex, setSignalGlitchIndex] = useState(0);
    return <div className="flex flex-col gap-8 p-6 bg-base min-h-screen">
        <div className="space-y-4">
          <h4 className="text-secondary font-semibold">All Transition Types</h4>
        </div>

        {/* Slide Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">Slide Transition</h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              default
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel images={demoImages} currentIndex={slideIndex} onChange={setSlideIndex} transition="slide" autoPlay={true} interval={4000} size="md" />
          </div>
        </div>

        {/* Fade Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">Fade Transition</h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              cross-fade
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel images={demoImages} currentIndex={fadeIndex} onChange={setFadeIndex} transition="fade" autoPlay={true} interval={3500} size="md" />
          </div>
        </div>

        {/* Matrix Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">Matrix Transition</h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              cyberpunk
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel images={demoImages} currentIndex={matrixIndex} onChange={setMatrixIndex} transition="matrix" autoPlay={true} interval={3000} size="md" />
          </div>
        </div>

        {/* Signal-Glitch Transition */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h5 className="text-accent font-semibold">
              Signal-Glitch Transition
            </h5>
            <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
              analog-error
            </span>
          </div>
          <div className="max-w-lg">
            <Carousel images={demoImages} currentIndex={signalGlitchIndex} onChange={setSignalGlitchIndex} transition="signal-glitch" autoPlay={true} interval={3500} size="md" glitchRate={0.7} />
          </div>
        </div>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => {
    const [smallIndex, setSmallIndex] = useState(0);
    const [mediumIndex, setMediumIndex] = useState(0);
    const [largeIndex, setLargeIndex] = useState(0);
    return <div className="flex flex-col gap-6 p-6 bg-base min-h-screen">
        <div className="space-y-2">
          <h4 className="text-secondary font-semibold text-lg">
            Size Comparison
          </h4>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h5 className="text-accent font-semibold">Small (sm)</h5>
              <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
                compact
              </span>
            </div>
            <div className="max-w-sm">
              <Carousel images={demoImages} currentIndex={smallIndex} onChange={setSmallIndex} size="sm" autoPlay={false} />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h5 className="text-accent font-semibold">Medium (md)</h5>
              <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
                default
              </span>
            </div>
            <div className="max-w-md">
              <Carousel images={demoImages} currentIndex={mediumIndex} onChange={setMediumIndex} size="md" autoPlay={false} />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h5 className="text-accent font-semibold">Large (lg)</h5>
              <span className="text-muted text-xs font-mono bg-surface px-2 py-1 rounded">
                showcase
              </span>
            </div>
            <div className="max-w-lg">
              <Carousel images={demoImages} currentIndex={largeIndex} onChange={setLargeIndex} size="lg" autoPlay={false} />
            </div>
          </div>
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const re=["Default","AllTransitions","AllSizes"];export{j as AllSizes,N as AllTransitions,w as Default,re as __namedExportsOrder,ie as default};
