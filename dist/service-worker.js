if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}}))).then((e=>{const r=t(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"main.css",revision:"fdf9701fdccc800bcdcb2dbeceaccfe1"},{url:"main.js",revision:"a32c22e5db0c351b5d14bf100d978c88"}],{})}));
//# sourceMappingURL=service-worker.js.map
