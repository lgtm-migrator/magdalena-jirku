if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const t=e=>i(e,n),u={module:{uri:n},exports:a,require:t};s[n]=Promise.all(l.map((e=>u[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7be4e9ce50bfe1b02a57311e17711c05"},{url:"assets/_...all_.296246ad.js",revision:null},{url:"assets/[...all].c240d5f2.css",revision:null},{url:"assets/app.c32ad8bd.js",revision:null},{url:"assets/Gallery.vue_vue_type_script_setup_true_lang.9eb867bc.js",revision:null},{url:"assets/impressum.b19d28ba.js",revision:null},{url:"assets/index.2033638c.js",revision:null},{url:"assets/index.40bf5c3e.js",revision:null},{url:"assets/index.7ac01176.css",revision:null},{url:"assets/index.9bcb2bb7.js",revision:null},{url:"assets/index.b0711d00.css",revision:null},{url:"assets/legal.a894de1d.js",revision:null},{url:"assets/slide-in.880839c5.js",revision:null},{url:"assets/virtual_pwa-register.9b01f6a2.js",revision:null},{url:"drawings.html",revision:"0323f58e4db126c506274a25f626d9d8"},{url:"graphic-design.html",revision:"04bf54318bafacf3ca29112d95e76996"},{url:"impressum.html",revision:"52e6714bce55b2d623cd4e5a9314dca5"},{url:"index.html",revision:"a4ca5868c5190256de2affc9160ab7b5"},{url:"legal.html",revision:"899821e6232d0605eaf34574b12bf1bd"},{url:"motion-design.html",revision:"43f2a594e99859aa9b2a83713ee13c47"},{url:"logo.svg",revision:"0caa6b54fb9265b4cec00d9dbe94b140"},{url:"robots.txt",revision:"e7575cf6d7bd2395b20ff14185a2cc37"},{url:"pwa-192x192.png",revision:"50c6dd7ba79ea7e15e6f9840513fc016"},{url:"pwa-512x512.png",revision:"edd03016ee9a7915929021c23e9f31a0"},{url:"manifest.webmanifest",revision:"3dfd412ab2ecc320692aabe5f3d3589f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
