if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const t=e=>i(e,n),u={module:{uri:n},exports:a,require:t};s[n]=Promise.all(l.map((e=>u[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"22e70cdeb518f4a245e8a86170330c6a"},{url:"assets/_...all_.601b1395.js",revision:null},{url:"assets/[...all].c240d5f2.css",revision:null},{url:"assets/app.8bff323f.js",revision:null},{url:"assets/Gallery.vue_vue_type_script_setup_true_lang.515fa2e1.js",revision:null},{url:"assets/impressum.66ebebdf.js",revision:null},{url:"assets/index.026ac80d.js",revision:null},{url:"assets/index.14841fa0.css",revision:null},{url:"assets/index.7ac01176.css",revision:null},{url:"assets/index.875a49c3.js",revision:null},{url:"assets/index.97bd84bc.js",revision:null},{url:"assets/legal.e73a7b57.js",revision:null},{url:"assets/slide-in.5be038ad.js",revision:null},{url:"assets/virtual_pwa-register.9b01f6a2.js",revision:null},{url:"drawings.html",revision:"f75a6a0a9a14adf2da0505f1806c85b2"},{url:"graphic-design.html",revision:"258103e8cc1864d9582abba6f0a22121"},{url:"impressum.html",revision:"7ac87d90c33c965c0ff536b230740d10"},{url:"index.html",revision:"780992d6af5962464c0335eadc9e9c95"},{url:"legal.html",revision:"7a92627548c965cebe4796e4a8e2bb22"},{url:"motion-design.html",revision:"098949061c0c9adeb22f1b9450eb2ab6"},{url:"logo.svg",revision:"0caa6b54fb9265b4cec00d9dbe94b140"},{url:"robots.txt",revision:"e7575cf6d7bd2395b20ff14185a2cc37"},{url:"pwa-192x192.png",revision:"50c6dd7ba79ea7e15e6f9840513fc016"},{url:"pwa-512x512.png",revision:"edd03016ee9a7915929021c23e9f31a0"},{url:"manifest.webmanifest",revision:"3dfd412ab2ecc320692aabe5f3d3589f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
