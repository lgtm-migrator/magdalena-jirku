if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const t=e=>i(e,n),u={module:{uri:n},exports:d,require:t};s[n]=Promise.all(l.map((e=>u[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"383863119cd5698d45f7f537566f0491"},{url:"assets/_...all_.6f7161f8.js",revision:null},{url:"assets/[...all].c240d5f2.css",revision:null},{url:"assets/app.d1ee09c1.js",revision:null},{url:"assets/Gallery.vue_vue_type_script_setup_true_lang.77423771.js",revision:null},{url:"assets/impressum.4ad40a60.js",revision:null},{url:"assets/index.26af618a.js",revision:null},{url:"assets/index.7ac01176.css",revision:null},{url:"assets/index.80d81638.js",revision:null},{url:"assets/index.b0711d00.css",revision:null},{url:"assets/index.d86f3eeb.js",revision:null},{url:"assets/legal.daab94f1.js",revision:null},{url:"assets/slide-in.401e4d16.js",revision:null},{url:"assets/virtual_pwa-register.9b01f6a2.js",revision:null},{url:"drawings.html",revision:"785198506976b765e4dbbe589f17aeb7"},{url:"graphic-design.html",revision:"d8db215de4d68dae042bc28111538040"},{url:"impressum.html",revision:"303158dbf47d3dd99ad9c134c514fdec"},{url:"index.html",revision:"ec191e038d0cc9cc4180241a4f43d189"},{url:"legal.html",revision:"2ca52f175eab91f6d4c135b0c7a3972b"},{url:"motion-design.html",revision:"1fc2d2b5c3b1b870c272b2513e818404"},{url:"logo.svg",revision:"0caa6b54fb9265b4cec00d9dbe94b140"},{url:"robots.txt",revision:"e7575cf6d7bd2395b20ff14185a2cc37"},{url:"pwa-192x192.png",revision:"50c6dd7ba79ea7e15e6f9840513fc016"},{url:"pwa-512x512.png",revision:"edd03016ee9a7915929021c23e9f31a0"},{url:"manifest.webmanifest",revision:"3dfd412ab2ecc320692aabe5f3d3589f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
