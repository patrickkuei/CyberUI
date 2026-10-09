import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-DTsJLDyS.js";import{I as U}from"./Image-BrGRyzSp.js";import{g as le,R as oe}from"./responsive-bOO5eIx7.js";import{c as $}from"./cn-CNMN3A1O.js";import{u as ce}from"./usePrefersReducedMotion-Doh-zfwu.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Wgf_q-Br.js";import"./index-Bvhmzyd1.js";import"./reducedMotionSubscription-DIxCKqWn.js";const F="rgbBackground 1.5s linear infinite, pulse 2s ease-in-out infinite",E=({src:a,...s})=>a===void 0?e.jsx(U,{...s}):e.jsx(U,{...s,src:a}),G=({images:a,currentIndex:s,onChange:o,size:g="md",autoPlay:p=!0,interval:x=3e3,infinite:m=!0,transition:y="slide",objectFit:X="cover",showArrows:W=!0,showIndicators:Y=!0,className:R="",disableImagePreview:z=!1,fallbackStyle:A="gradient",glitchRate:N=1,onBeforeChange:q,onAfterChange:O})=>{const[c,B]=i.useState(!1),[V,h]=i.useState(p),[v,K]=i.useState(!0),b=ce(),r=b&&(y==="signal-glitch"||y==="matrix")?"fade":y,M=i.useCallback(()=>h(p),[p]),Z=i.useMemo(()=>le(g,oe.carousel),[g]),_="w-full h-full [&_[data-standin-corners]]:hidden",f=i.useCallback(t=>{if(t===s||c)return;const n=r==="signal-glitch"&&(typeof N=="boolean"?N:Math.random()<N);K(n),B(!0),q?.(s,t),setTimeout(()=>{o(t),B(!1),O?.(t)},r==="slide"?0:r==="signal-glitch"&&n?600:250)},[s,c,o,q,O,r,N]);i.useEffect(()=>{if(!V||b||a.length<=1)return;const t=setInterval(()=>{const n=m?(s+1)%a.length:Math.min(s+1,a.length-1);if(!m&&n===a.length-1){h(!1);return}f(n)},x);return()=>clearInterval(t)},[V,b,s,a.length,m,x,f]);const L=i.useCallback(()=>{if(a.length<=1)return;const t=m?(s-1+a.length)%a.length:Math.max(s-1,0);h(!1),f(t)},[s,a.length,m,f]),D=i.useCallback(()=>{if(a.length<=1)return;const t=m?(s+1)%a.length:Math.min(s+1,a.length-1);h(!1),f(t)},[s,a.length,m,f]),Q=i.useCallback(t=>{h(!1),f(t)},[f]);i.useEffect(()=>{const t=n=>{n.key==="ArrowLeft"&&L(),n.key==="ArrowRight"&&D()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[L,D]);const J=()=>e.jsx("div",{className:"flex h-full transition-transform duration-500 ease-in-out motion-reduce:transition-none",style:{transform:`translateX(-${s*100}%)`,willChange:"transform"},children:a.map((t,n)=>e.jsx("div",{className:"w-full h-full flex-shrink-0",children:e.jsx(E,{src:t.src,alt:t.alt,fallback:t.fallbackSrc,fallbackStyle:A,className:_,size:"lg",preview:!z,loading:n<=1?"eager":"lazy",onPreviewOpen:()=>h(!1),onPreviewClose:M})},n))}),ee=()=>e.jsx(e.Fragment,{children:a.map((t,n)=>{const l=n===s,w=r==="fade"?{opacity:l?1:0,transition:"opacity 500ms ease-in-out",willChange:"opacity"}:r==="matrix"?{opacity:l?1:0,transform:l?"scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0) skew(0deg) perspective(1000px)":c?"scale(0.6) rotateX(35deg) rotateY(15deg) rotateZ(-3deg) translateZ(-80px) skew(5deg, 2deg) perspective(1000px)":"scale(0.92) rotateX(8deg) rotateY(2deg) translateZ(-20px) skew(1deg) perspective(1000px)",filter:l?"brightness(1) contrast(1) hue-rotate(0deg) saturate(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))":c?"brightness(0.1) contrast(4) hue-rotate(270deg) saturate(3) blur(2px) drop-shadow(0 0 20px rgba(255, 0, 93, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 249, 0.6))":"brightness(0.7) contrast(1.5) hue-rotate(120deg) saturate(1.4) drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))",transition:"all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",willChange:"transform, opacity, filter",boxShadow:l?"0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.15), 0 0 60px rgba(0, 255, 136, 0.2)":c?"0 0 50px rgba(255, 0, 93, 1), 0 0 100px rgba(0, 255, 249, 0.8), 0 0 150px rgba(255, 251, 0, 0.6), inset 0 0 50px rgba(255, 0, 93, 0.3), inset 0 0 80px rgba(0, 255, 249, 0.2), 0 0 0 3px rgba(255, 0, 93, 0.8), 0 0 0 6px rgba(0, 255, 249, 0.6), 0 0 200px rgba(255, 251, 0, 0.3)":"0 0 20px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1), 0 0 40px rgba(0, 255, 136, 0.2)"}:{};return e.jsxs("div",{className:"absolute inset-0 w-full h-full",style:{...w,pointerEvents:l?"auto":"none"},children:[e.jsx(E,{src:t.src,alt:t.alt,fallback:t.fallbackSrc,fallbackStyle:A,className:_,size:"lg",preview:!z,loading:n<=1?"eager":"lazy",onPreviewOpen:()=>h(!1),onPreviewClose:M}),r==="matrix"&&se(l,c)]},n)})}),ae=()=>e.jsx(e.Fragment,{children:a.map((t,n)=>{const l=n===s,w=n===(s-1+a.length)%a.length,re=c&&r==="signal-glitch"&&v?{opacity:l?1:w?.8:0,animation:l?"signal-image-flicker-in 1s ease-out forwards":w?"signal-image-flicker-out 1s ease-out forwards":"none",willChange:"opacity",pointerEvents:c&&!l?"none":"auto",transform:c?"translateZ(0)":"none"}:{opacity:l?1:0,transition:"opacity 250ms ease-in-out",willChange:"opacity",pointerEvents:l?"auto":"none"};return e.jsxs("div",{className:"absolute inset-0 w-full h-full",style:re,children:[e.jsx(E,{src:t.src,alt:t.alt,fallback:t.fallbackSrc,fallbackStyle:A,className:_,size:"lg",preview:!z&&!(c&&r==="signal-glitch"&&v),loading:n<=1?"eager":"lazy",onPreviewOpen:()=>h(!1),onPreviewClose:M}),r==="signal-glitch"&&c&&v&&te(l)]},n)})}),se=(t,n)=>e.jsx(e.Fragment,{children:n&&e.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:t?e.jsx("div",{className:"w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-30"}):e.jsx("div",{className:"w-full h-full bg-gradient-to-b from-primary/10 via-secondary/5 to-accent/10 opacity-50"})})}),te=t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`absolute inset-0 pointer-events-none z-5 ${t?"opacity-30":"opacity-15"}`,children:e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
              linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
            `,backgroundSize:"40px 40px",animation:"signal-glitch-blink 1s ease-in-out infinite"}})}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10 overflow-hidden",children:[e.jsx("div",{className:"absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-80",style:{top:"20%",animation:"signal-glitch-vertical-sweep 1s linear infinite",boxShadow:"0 0 8px rgba(255, 0, 93, 1), 0 0 16px rgba(255, 0, 93, 0.5)"}}),e.jsx("div",{className:"absolute w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60",style:{top:"60%",animation:"signal-glitch-vertical-sweep 1.5s linear infinite 0.3s",boxShadow:"0 0 6px rgba(0, 255, 249, 0.8)"}}),e.jsx("div",{className:"absolute w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70",style:{top:"80%",animation:"signal-glitch-vertical-sweep 0.8s linear infinite 0.7s",boxShadow:"0 0 10px rgba(255, 251, 0, 0.9)"}})]}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-30",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent",style:{animation:"signal-glitch-blink 1s ease-in-out infinite"}}),e.jsx("div",{className:"absolute w-full h-px bg-accent/80 top-1/3",style:{animation:"signal-scanline-jitter 1s linear infinite",boxShadow:"0 0 4px rgba(255, 251, 0, 1)"}}),e.jsx("div",{className:"absolute w-full h-px bg-secondary/60 top-2/3",style:{animation:"signal-scanline-jitter 1s linear infinite 0.4s",boxShadow:"0 0 4px rgba(0, 255, 249, 0.8)"}})]}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-40",style:{animation:"signal-rgb-separation 1s ease-in-out infinite",mixBlendMode:"screen"},children:e.jsx("div",{className:"absolute inset-0 bg-transparent"})}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-50",children:[e.jsx("div",{className:"absolute top-1/4 left-1/2 w-24 h-2 bg-white/30",style:{animation:"signal-glitch-blink 1s ease-in-out infinite 0.1s",transform:"translateX(-50%)",filter:"blur(0.8px)"}}),e.jsx("div",{className:"absolute top-3/4 right-1/4 w-20 h-1 bg-primary/40",style:{animation:"signal-glitch-blink 1s ease-in-out infinite 0.8s",filter:"blur(0.4px)"}}),e.jsx("div",{className:"absolute top-1/2 left-1/4 w-3 h-12 bg-accent/60",style:{animation:"signal-glitch-blink 1s ease-in-out infinite 0.5s",filter:"blur(1.5px)"}})]})]}),ne=()=>W&&a.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:L,disabled:!m&&s===0||c&&r==="signal-glitch"&&v,className:"group absolute left-2 top-1/2 -translate-y-1/2 w-16 h-16 text-primary hover:text-accent cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none transition-all duration-300 flex items-center justify-center hover:scale-110 motion-reduce:hover:scale-100","aria-label":"Previous image",children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 100 100",className:"transition-all duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100 overflow-visible",style:{overflow:"visible"},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"arrow-gradient-left",x1:"100%",y1:"0%",x2:"0%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgb(0, 255, 136)",stopOpacity:"1",className:"transition-all duration-500 opacity-0 group-hover:opacity-100"}),e.jsx("stop",{offset:"50%",stopColor:"rgb(0, 255, 249)",stopOpacity:"1",className:"transition-all duration-500 opacity-0 group-hover:opacity-100"}),e.jsx("stop",{offset:"100%",stopColor:"rgb(255, 0, 93)",stopOpacity:"1",className:"transition-all duration-500 opacity-0 group-hover:opacity-100"})]})}),e.jsx("path",{d:"M70 20 L20 50 L70 80 L60 50 Z",stroke:"currentColor",strokeWidth:"3",fill:"none",className:"transition-all duration-300 group-hover:stroke-[4]"}),e.jsx("path",{d:"M70 20 L20 50 L70 80 L60 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-hover:opacity-100 group-hover:animate-[rgbStroke_1.5s_linear_infinite] motion-reduce:group-hover:animate-none group-active:opacity-0",style:{filter:"drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 18px currentColor)"}}),e.jsx("path",{d:"M70 20 L20 50 L70 80 L60 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-active:opacity-100 group-active:animate-[rgbStroke_1.5s_linear_infinite] motion-reduce:group-active:animate-none"})]})}),e.jsx("button",{onClick:D,disabled:!m&&s===a.length-1||c&&r==="signal-glitch"&&v,className:"group absolute right-2 top-1/2 -translate-y-1/2 w-16 h-16 text-primary hover:text-accent cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none transition-all duration-300 flex items-center justify-center hover:scale-110 motion-reduce:hover:scale-100","aria-label":"Next image",children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 100 100",className:"transition-all duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100 overflow-visible",style:{overflow:"visible"},children:[e.jsx("path",{d:"M30 20 L80 50 L30 80 L40 50 Z",stroke:"currentColor",strokeWidth:"3",fill:"none",className:"transition-all duration-300 group-hover:stroke-[4]"}),e.jsx("path",{d:"M30 20 L80 50 L30 80 L40 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-hover:opacity-100 group-hover:animate-[rgbStroke_1.5s_linear_infinite] motion-reduce:group-hover:animate-none group-active:opacity-0",style:{filter:"drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 18px currentColor)"}}),e.jsx("path",{d:"M30 20 L80 50 L30 80 L40 50 Z",stroke:"rgb(255, 0, 93)",strokeWidth:"4",fill:"none",className:"opacity-0 group-active:opacity-100 group-active:animate-[rgbStroke_1.5s_linear_infinite] motion-reduce:group-active:animate-none"})]})})]}),ie=()=>Y&&a.length>1&&e.jsx("div",{className:"flex justify-center mt-4 space-x-4",children:a.map((t,n)=>e.jsxs("button",{onClick:()=>Q(n),disabled:c&&r==="signal-glitch"&&v,className:"group relative transition-all duration-300 hover:scale-110 motion-reduce:hover:scale-100 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-30",style:{width:"24px",height:"24px"},"aria-label":`Go to slide ${n+1}`,children:[n===s&&e.jsx("div",{className:"absolute inset-[-1px] border-2",style:{borderColor:"rgb(255, 0, 93)",...b?{transform:"rotate(135deg)"}:{animation:"rotateFocusRing 0.8s ease-out forwards, rgbBorder 1.5s linear infinite 0.8s"}}}),e.jsx("div",{className:`absolute inset-0 border-2 transition-all duration-300 ${n===s?"border-primary bg-primary/30 animate-[rgbBorder_1.5s_linear_infinite] motion-reduce:animate-none":"border-accent bg-surface/50 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-primary group-hover:animate-[rgbBorder_1.5s_linear_infinite] motion-reduce:group-hover:animate-none"}`,style:{clipPath:"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"}}),n===s&&e.jsx("div",{className:"absolute inset-2 bg-primary/60 animate-pulse motion-reduce:animate-none",style:{clipPath:"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",animation:b?void 0:F}}),n===s&&e.jsxs("div",{className:"absolute inset-0 opacity-80",children:[e.jsx("div",{className:"absolute top-1/2 left-2 right-2 h-0.5 bg-primary/80 animate-pulse motion-reduce:animate-none",style:{transform:"translateY(-50%)",animation:b?void 0:F}}),e.jsx("div",{className:"absolute left-1/2 top-2 bottom-2 w-0.5 bg-primary/80 animate-pulse motion-reduce:animate-none",style:{transform:"translateX(-50%)",animation:b?void 0:F}})]})]},n))});if(a.length===0)return e.jsx("div",{className:$(Z,"w-full bg-surface border border-accent rounded-lg flex items-center justify-center",R),children:e.jsx("p",{className:"text-muted",children:"No images to display"})});const H=a[s];return e.jsxs("div",{className:$("relative w-full",R),children:[e.jsxs("div",{className:`relative w-full overflow-hidden rounded-lg border border-accent bg-surface ${Z}`,children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1 animate-pulse motion-reduce:animate-none"})]}),e.jsxs("div",{className:`relative w-full h-full overflow-hidden carousel-${X}`,children:[r==="slide"&&J(),(r==="fade"||r==="matrix")&&ee(),r==="signal-glitch"&&ae()]}),H.caption&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4",children:e.jsx("p",{className:"text-white text-sm font-medium",children:H.caption})}),ne()]}),ie()]})};G.displayName="CyberUI.Carousel";const d=i.memo(G);G.__docgenInfo={description:`A cinematic, high-performance cyberpunk carousel with glitch transitions and responsive scaling.

@example
<Carousel 
  images={[
    { src: 'city.jpg', alt: 'Neo-Tokyo', caption: 'Sector 7' },
    { src: 'lab.jpg', alt: 'Bio-Lab', caption: 'Deep Research' }
  ]} 
  currentIndex={index} 
  onChange={setIndex} 
  transition="signal-glitch" 
/>`,methods:[],displayName:"CyberUI.Carousel",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:'Omit<CarouselImageData, "src"> & { src?: string }',elements:[{name:"Omit",elements:[{name:"CarouselImageData"},{name:"literal",value:'"src"'}],raw:'Omit<CarouselImageData, "src">'},{name:"signature",type:"object",raw:"{ src?: string }",signature:{properties:[{key:"src",value:{name:"string",required:!1}}]}}]}],raw:"CarouselSlide[]"},description:""},size:{defaultValue:{value:'"md"',computed:!1},required:!1},autoPlay:{defaultValue:{value:"true",computed:!1},required:!1},interval:{defaultValue:{value:"3000",computed:!1},required:!1},infinite:{defaultValue:{value:"true",computed:!1},required:!1},transition:{defaultValue:{value:'"slide"',computed:!1},required:!1},objectFit:{defaultValue:{value:'"cover"',computed:!1},required:!1},showArrows:{defaultValue:{value:"true",computed:!1},required:!1},showIndicators:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},disableImagePreview:{defaultValue:{value:"false",computed:!1},required:!1},fallbackStyle:{defaultValue:{value:'"gradient"',computed:!1},required:!1},glitchRate:{defaultValue:{value:"1.0",computed:!1},required:!1}}};const ye={title:"Components/Carousel",component:d,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-themed image carousel with auto-play, navigation controls, and smooth transitions.\n\nA slide with no image source (an empty `src`, or a `CarouselStandInData` slide that leaves `src` out) and no `fallbackSrc` shows a built-in stand-in chosen by the Carousel's `fallbackStyle`: a static neon gradient panel (`gradient`, the default) or the same panel with a scanline sweeping down it (`scanline`). Captions, navigation and keyboard behavior are the same as for slides with images. A slide with no `src` but a `fallbackSrc` shows the `fallbackSrc` image. `CarouselImageData.src` is a required `string`; `images` also accepts `CarouselStandInData` slides, so an array can mix both.\n\nUnder `prefers-reduced-motion: reduce`, `autoPlay` does not advance (also after an image preview closes), `matrix` and `signal-glitch` render as a plain `fade` with no glitch overlays, `slide` changes slides without sliding, the stand-in scanline stops, and the indicators hold still.\n\n**Usage:**\n\n```tsx\nimport React, { useState } from 'react';\nimport { Carousel } from 'cyberui-2045';\n\n// Basic usage\nconst [currentSlide, setCurrentSlide] = useState(0);\nconst images = [\n  { src: '/img1.jpg', alt: 'Cyberpunk cityscape', caption: 'Neo-Tokyo' },\n  { src: '/img2.jpg', alt: 'Neon district', caption: 'Corporate Zone' },\n];\n\n<Carousel\n  images={images}\n  currentIndex={currentSlide}\n  onChange={setCurrentSlide}\n/>\n\n// Advanced configuration\n<Carousel\n  images={images}\n  currentIndex={currentSlide}\n  onChange={setCurrentSlide}\n  size=\"lg\"\n  transition=\"matrix\"\n  autoPlay={true}\n  interval={4000}\n  infinite={false}\n  objectFit=\"contain\"\n  onBeforeChange={(from, to) => console.log(`Switching from ${from} to ${to}`)}\n  onAfterChange={(index) => console.log(`Now showing slide ${index}`)}\n/>\n\n// Responsive sizing\n<Carousel\n  images={images}\n  currentIndex={currentSlide}\n  onChange={setCurrentSlide}\n  size={{ base: 'sm', md: 'md', lg: 'lg' }}\n/>\n\n// Signal glitch with custom rate\n<Carousel\n  images={images}\n  currentIndex={currentSlide}\n  onChange={setCurrentSlide}\n  transition=\"signal-glitch\"\n  glitchRate={0.3}  // 30% chance of glitch effects\n  autoPlay={true}\n  interval={5000}\n/>\n\n// Accessibility and UX optimized\n<Carousel\n  images={images}\n  currentIndex={currentSlide}\n  onChange={setCurrentSlide}\n  disableImagePreview={true}  // No click-to-expand\n  showArrows={false}          // Touch/swipe only\n  infinite={false}            // Clear start/end\n  autoPlay={false}            // User controlled\n/>\n\n// No assets yet: slides without a src render a built-in stand-in\nconst placeholders: CarouselStandInData[] = [\n  { alt: 'Neon district', caption: 'Sector 7' },\n  { alt: 'Corporate tower', caption: 'Megacorp HQ' },\n];\n<Carousel\n  images={placeholders}\n  currentIndex={currentSlide}\n  onChange={setCurrentSlide}\n  fallbackStyle=\"scanline\"   // or 'gradient' (default)\n/>\n\n// Different transitions\n<Carousel images={images} currentIndex={slide1} onChange={setSlide1} transition=\"slide\" />\n<Carousel images={images} currentIndex={slide2} onChange={setSlide2} transition=\"fade\" />\n<Carousel images={images} currentIndex={slide3} onChange={setSlide3} transition=\"matrix\" />\n<Carousel images={images} currentIndex={slide4} onChange={setSlide4} transition=\"signal-glitch\" glitchRate={true} />\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `images` | `(CarouselImageData \\| CarouselStandInData)[]` | ✅ | - | Array of slides to display; a slide may leave `src` out to show the stand-in |\n| `currentIndex` | `number` | ✅ | - | Current slide index (controlled) |\n| `onChange` | `(index: number) => void` | ✅ | - | Callback when slide changes |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>` | ❌ | `'md'` | Carousel size (supports responsive values) |\n| `autoPlay` | `boolean` | ❌ | `true` | Enable auto-play functionality. Does not advance under reduced motion |\n| `interval` | `number` | ❌ | `3000` | Auto-play interval in milliseconds |\n| `infinite` | `boolean` | ❌ | `true` | Enable infinite loop |\n| `transition` | `'slide' \\| 'fade' \\| 'matrix' \\| 'signal-glitch'` | ❌ | `'slide'` | Transition effect. `matrix`/`signal-glitch` render as `fade` under reduced motion |\n| `objectFit` | `'cover' \\| 'contain'` | ❌ | `'cover'` | Image display behavior |\n| `showArrows` | `boolean` | ❌ | `true` | Show navigation arrows |\n| `showIndicators` | `boolean` | ❌ | `true` | Show slide indicators |\n| `disableImagePreview` | `boolean` | ❌ | `false` | Disable click-to-expand on images |\n| `fallbackStyle` | `'gradient' \\| 'scanline'` | ❌ | `'gradient'` | Built-in stand-in style for any slide with no image source |\n| `onBeforeChange` | `(from: number, to: number) => void` | ❌ | - | Callback before slide change |\n| `onAfterChange` | `(index: number) => void` | ❌ | - | Callback after slide change |\n\n**Types:**\n\n```tsx\ninterface CarouselImageData {\n  src: string;        // Image source URL; an empty string shows the built-in stand-in\n  alt: string;        // Alternative text for accessibility\n  fallbackSrc?: string; // Optional fallback image URL on error; also shown when src is missing\n  caption?: string;     // Optional caption text overlay\n}\n\n// A slide with no image source: CarouselImageData without the required src\ntype CarouselStandInData = Omit<CarouselImageData, 'src'> & { src?: undefined };\n```\n"}}},tags:["autodocs"],argTypes:{images:{control:!1,description:"Array of images to display in the carousel"},currentIndex:{control:!1,description:"Current slide index (managed internally)"},onChange:{control:!1,description:"Callback function when slide changes"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Carousel size (supports responsive values)"},autoPlay:{control:"boolean",description:"Enable auto-play functionality"},interval:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Auto-play interval in milliseconds"},infinite:{control:"boolean",description:"Enable infinite loop"},transition:{control:{type:"select"},options:["slide","fade","matrix","signal-glitch"],description:"Transition effect type"},objectFit:{control:{type:"select"},options:["cover","contain"],description:"Image display behavior"},showArrows:{control:"boolean",description:"Show navigation arrows"},showIndicators:{control:"boolean",description:"Show slide indicators"},disableImagePreview:{control:"boolean",description:"Disable click-to-expand on images"},fallbackStyle:{control:{type:"inline-radio"},options:["gradient","scanline"],description:"Built-in stand-in style for any slide with no image source"},glitchRate:{control:{type:"range",min:0,max:1,step:.1},description:"Control signal-glitch effect frequency (0.0-1.0 for probability, boolean for on/off)"}},args:{size:"md",autoPlay:!0,interval:3e3,infinite:!0,transition:"slide",objectFit:"cover",showArrows:!0,showIndicators:!0,disableImagePreview:!1,glitchRate:1}},u=[{src:"image_demo_1.jpg",alt:"Cyberpunk cityscape",caption:"Neo-Tokyo District 7"},{src:"image_demo_2.jpg",alt:"Corporate architecture",caption:"Megacorp Tower"},{src:"image_demo_3.jpg",alt:"Underground market",caption:"Data Exchange"}],j={parameters:{docs:{story:{inline:!1,iframeHeight:400}}},args:{images:u},render:a=>{const[s,o]=i.useState(0);return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(d,{...a,currentIndex:s,onChange:o}),e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"text-muted text-xs",children:["⚠️ Note: Controls are disabled due to state sync issues.",e.jsx("br",{})]})})]})})}},C={parameters:{docs:{story:{inline:!1,iframeHeight:800}}},render:()=>{const[a,s]=i.useState(0),[o,g]=i.useState(0),[p,x]=i.useState(0),[m,y]=i.useState(0);return e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-h-screen",children:[e.jsx("div",{className:"space-y-4",children:e.jsx("h4",{className:"text-secondary font-semibold",children:"All Transition Types"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Slide Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"default"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(d,{images:u,currentIndex:a,onChange:s,transition:"slide",autoPlay:!0,interval:4e3,size:"md"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Fade Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"cross-fade"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(d,{images:u,currentIndex:o,onChange:g,transition:"fade",autoPlay:!0,interval:3500,size:"md"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Matrix Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"cyberpunk"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(d,{images:u,currentIndex:p,onChange:x,transition:"matrix",autoPlay:!0,interval:3e3,size:"md"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Signal-Glitch Transition"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"analog-error"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(d,{images:u,currentIndex:m,onChange:y,transition:"signal-glitch",autoPlay:!0,interval:3500,size:"md",glitchRate:.7})})]})]})}},S={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>{const[a,s]=i.useState(0),[o,g]=i.useState(0),[p,x]=i.useState(0);return e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-h-screen",children:[e.jsx("div",{className:"space-y-2",children:e.jsx("h4",{className:"text-secondary font-semibold text-lg",children:"Size Comparison"})}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Small (sm)"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"compact"})]}),e.jsx("div",{className:"max-w-sm",children:e.jsx(d,{images:u,currentIndex:a,onChange:s,size:"sm",autoPlay:!1})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Medium (md)"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"default"})]}),e.jsx("div",{className:"max-w-md",children:e.jsx(d,{images:u,currentIndex:o,onChange:g,size:"md",autoPlay:!1})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Large (lg)"}),e.jsx("span",{className:"text-muted text-xs font-mono bg-surface px-2 py-1 rounded",children:"showcase"})]}),e.jsx("div",{className:"max-w-lg",children:e.jsx(d,{images:u,currentIndex:p,onChange:x,size:"lg",autoPlay:!1})})]})]})]})}},T=[{alt:"Neon district (asset pending)",caption:"Sector 7 Uplink"},{alt:"Corporate tower (asset pending)",caption:"Megacorp Atrium"},{alt:"Back-alley market (asset pending)",caption:"Black Market Feed"}],I={parameters:{docs:{description:{story:"Slides with no `src` render the static gradient stand-in. `fallbackStyle` defaults to `gradient`."},story:{inline:!1,iframeHeight:400}}},args:{autoPlay:!1},render:a=>{const[s,o]=i.useState(0);return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(d,{...a,images:T,currentIndex:s,onChange:o})})})}},k={parameters:{docs:{description:{story:'`fallbackStyle="scanline"` adds a scanline that sweeps down each stand-in. The sweep stops under `prefers-reduced-motion: reduce`.'},story:{inline:!1,iframeHeight:400}}},args:{autoPlay:!1,fallbackStyle:"scanline"},render:a=>{const[s,o]=i.useState(0);return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(d,{...a,images:T,currentIndex:s,onChange:o})})})}},P={parameters:{docs:{story:{inline:!1,iframeHeight:900}}},render:()=>{const[a,s]=i.useState(0),[o,g]=i.useState(0),[p,x]=i.useState(1);return e.jsxs("div",{className:"flex flex-col gap-8 p-6 bg-base min-h-screen",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"gradient (default)"}),e.jsx("div",{className:"max-w-md",children:e.jsx(d,{images:T,currentIndex:a,onChange:s,autoPlay:!1,fallbackStyle:"gradient"})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"scanline"}),e.jsx("div",{className:"max-w-md",children:e.jsx(d,{images:T,currentIndex:o,onChange:g,autoPlay:!1,fallbackStyle:"scanline"})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h5",{className:"text-accent font-semibold",children:"Mixed: real images and slides with no src"}),e.jsx("div",{className:"max-w-md",children:e.jsx(d,{images:[u[0],{alt:"Signal lost (asset pending)",caption:"Signal Lost"},u[1]],currentIndex:p,onChange:x,autoPlay:!1,fallbackStyle:"scanline"})})]})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Slides with no \`src\` render the static gradient stand-in. \`fallbackStyle\` defaults to \`gradient\`."
      },
      story: {
        inline: false,
        iframeHeight: 400
      }
    }
  },
  args: {
    autoPlay: false
  },
  render: args => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return <div className="flex items-center justify-center min-h-screen bg-base p-8">
        <div className="w-full max-w-2xl">
          <Carousel {...args} images={placeholderSlides} currentIndex={currentIndex} onChange={setCurrentIndex} />
        </div>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`fallbackStyle=\\"scanline\\"\` adds a scanline that sweeps down each stand-in. The sweep stops under \`prefers-reduced-motion: reduce\`."
      },
      story: {
        inline: false,
        iframeHeight: 400
      }
    }
  },
  args: {
    autoPlay: false,
    fallbackStyle: "scanline"
  },
  render: args => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return <div className="flex items-center justify-center min-h-screen bg-base p-8">
        <div className="w-full max-w-2xl">
          <Carousel {...args} images={placeholderSlides} currentIndex={currentIndex} onChange={setCurrentIndex} />
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 900
      }
    }
  },
  render: () => {
    const [gradientIndex, setGradientIndex] = useState(0);
    const [scanlineIndex, setScanlineIndex] = useState(0);
    const [mixedIndex, setMixedIndex] = useState(1);
    return <div className="flex flex-col gap-8 p-6 bg-base min-h-screen">
        <div className="space-y-3">
          <h5 className="text-accent font-semibold">gradient (default)</h5>
          <div className="max-w-md">
            <Carousel images={placeholderSlides} currentIndex={gradientIndex} onChange={setGradientIndex} autoPlay={false} fallbackStyle="gradient" />
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="text-accent font-semibold">scanline</h5>
          <div className="max-w-md">
            <Carousel images={placeholderSlides} currentIndex={scanlineIndex} onChange={setScanlineIndex} autoPlay={false} fallbackStyle="scanline" />
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="text-accent font-semibold">
            Mixed: real images and slides with no src
          </h5>
          <div className="max-w-md">
            <Carousel images={[demoImages[0], {
            alt: "Signal lost (asset pending)",
            caption: "Signal Lost"
          }, demoImages[1]]} currentIndex={mixedIndex} onChange={setMixedIndex} autoPlay={false} fallbackStyle="scanline" />
          </div>
        </div>
      </div>;
  }
}`,...P.parameters?.docs?.source}}};const Ne=["Default","AllTransitions","AllSizes","FallbackGradient","FallbackScanline","AllFallbackStyles"];export{P as AllFallbackStyles,S as AllSizes,C as AllTransitions,j as Default,I as FallbackGradient,k as FallbackScanline,Ne as __namedExportsOrder,ye as default};
