"use strict";(self["webpackChunkpwa_example"]=self["webpackChunkpwa_example"]||[]).push([[0],[function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return c}});var r=n(185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase());var a=n(635);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,n,c,i)=>{const s=t.ownerDocument.defaultView;let u=o(t);const d=t=>{const e=50,{startX:n}=t;return u?n>=s.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,h=t=>u?-t.velocityX:t.velocityX,w=n=>(u=o(t),d(n)&&e()),m=t=>{const e=l(t),n=e/s.innerWidth;c(n)},p=t=>{const e=l(t),n=s.innerWidth,o=e/n,a=h(t),c=n/2,u=a>=0&&(a>.2||e>c),d=u?1-o:o,w=d*n;let m=0;if(w>5){const t=w/Math.abs(a);m=Math.min(t,540)}i(u,o<=0?.01:(0,r.m)(0,o,.9999),m)};return(0,a.G)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:w,onStart:n,onMove:m,onEnd:p})}}]]);
//# sourceMappingURL=0.4ab3b64c.js.map