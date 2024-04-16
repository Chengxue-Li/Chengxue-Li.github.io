"use strict";(self["webpackChunkpwa_example"]=self["webpackChunkpwa_example"]||[]).push([[336],{534:function(t,e,n){n.d(e,{a:function(){return u},c:function(){return m},g:function(){return l},s:function(){return f}});var o=n(185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const r="ION-CONTENT",s="ion-content",c=".ion-content-scroll-host",i=`${s}, ${c}`,a=t=>t.tagName===r,l=async t=>a(t)?(await new Promise((e=>(0,o.c)(t,e))),t.getScrollElement()):t,u=t=>t.closest(i),f=(t,e)=>{if(a(t)){const n=t;return n.scrollToTop(e)}return Promise.resolve(t.scrollTo({top:0,left:0,behavior:e>0?"smooth":"auto"}))},m=(t,e,n,o)=>{if(a(t)){const r=t;return r.scrollByPoint(e,n,o)}return Promise.resolve(t.scrollBy({top:n,left:e,behavior:o>0?"smooth":"auto"}))}},336:function(t,e,n){n.r(e),n.d(e,{startStatusTap:function(){return c}});var o=n(61),r=n(534),s=n(185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=()=>{const t=window;t.addEventListener("statusTap",(()=>{(0,o.gv)((()=>{const e=t.innerWidth,n=t.innerHeight,c=document.elementFromPoint(e/2,n/2);if(!c)return;const i=(0,r.a)(c);i&&new Promise((t=>(0,s.c)(i,t))).then((()=>{(0,o.bN)((async()=>{i.style.setProperty("--overflow","hidden"),await(0,r.s)(i,300),i.style.removeProperty("--overflow")}))}))}))}))}}}]);
//# sourceMappingURL=336.9d4330d5.js.map