if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const t=e=>i(e,n),u={module:{uri:n},exports:a,require:t};s[n]=Promise.all(l.map((e=>u[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"5ea0af61daf207898f80ff94cef89930"},{url:"assets/_...all_.9bee4e0b.js",revision:null},{url:"assets/[...all].c240d5f2.css",revision:null},{url:"assets/app.3437baaf.js",revision:null},{url:"assets/Gallery.vue_vue_type_script_setup_true_lang.79765b02.js",revision:null},{url:"assets/impressum.9d521983.js",revision:null},{url:"assets/index.1f1f70b0.js",revision:null},{url:"assets/index.7ac01176.css",revision:null},{url:"assets/index.b4b14835.js",revision:null},{url:"assets/index.bad6b44c.css",revision:null},{url:"assets/index.bf9c58f6.js",revision:null},{url:"assets/legal.2aa83419.js",revision:null},{url:"assets/slide-in.1ba00dd7.js",revision:null},{url:"assets/virtual_pwa-register.9b01f6a2.js",revision:null},{url:"drawings.html",revision:"3a4da1b0100e8a9c17adada45def1385"},{url:"graphic-design.html",revision:"73f0fd851c4a4a0b9d2e28bbf1d3cb99"},{url:"impressum.html",revision:"c11d2b441c9cb0ef8e8188903b589a2a"},{url:"index.html",revision:"5c2410d6296f2415400667666109be98"},{url:"legal.html",revision:"e8288988c88a062eacb1c272891f5e83"},{url:"motion-design.html",revision:"f8fd96339212f79052ce5fb30f707fc1"},{url:"logo.svg",revision:"0caa6b54fb9265b4cec00d9dbe94b140"},{url:"robots.txt",revision:"e7575cf6d7bd2395b20ff14185a2cc37"},{url:"pwa-192x192.png",revision:"50c6dd7ba79ea7e15e6f9840513fc016"},{url:"pwa-512x512.png",revision:"edd03016ee9a7915929021c23e9f31a0"},{url:"manifest.webmanifest",revision:"3dfd412ab2ecc320692aabe5f3d3589f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
