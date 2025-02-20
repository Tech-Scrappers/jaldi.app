import{d as x,s as f,e as m,v as z,x as L,o as k,c as P,m as T,l as H,P as $,y as C}from"./index-A9etwCCW.js";const V=["innerHTML"],G=x({__name:"MazIcon",props:{src:{type:String,default:void 0},path:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:void 0},title:{type:String,default:void 0},transformSource:{type:Function,default:u=>u}},emits:["loaded","unloaded","error"],setup(u,{emit:p}){const a=u,c=p,l={},s=f(),i=f();function v(){try{return $("mazIconPath")}catch{return}}const d=m(()=>a.path??v()),g=m(()=>a.src?a.src:d.value?`${d.value}/${a.name}.svg`:`/${a.name}.svg`);z(()=>{!a.name&&!a.src&&console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop')});function y(e,n){const t=e.querySelectorAll("title");if(t.length>0)t[0].textContent=n;else{const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=n,e.append(r)}}function h(e){return Object.keys(e).reduce((n,t)=>(e[t]!==!1&&e[t]!==null&&e[t]!==void 0&&(n[t]=e[t]),n),{})}function S(e){const n={},t=e.attributes;if(!t)return n;for(let r=t.length-1;r>=0;r--)n[t[r].name]=t[r].value;return n}function w(e){e.cloneNode(!0);const n=a.transformSource(e);return a.title&&y(n,a.title),e.innerHTML}async function E(e){l[e]||(l[e]=M(e));try{s.value=await l[e],await C(),c("loaded",i.value)}catch(n){s.value&&(s.value=void 0,c("unloaded")),delete l[e],c("error",n)}}function M(e){return new Promise((n,t)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.addEventListener("load",()=>{if(r.status>=200&&r.status<400)try{let o=new DOMParser().parseFromString(r.responseText,"text/xml").querySelectorAll("svg")[0];o?(o=a.transformSource(o),n(o)):t(new Error('Loaded file is not valid SVG"'))}catch(o){t(o)}else t(new Error("Error loading SVG"))}),r.addEventListener("error",o=>t(o)),r.send()})}return L(()=>E(g.value)),(e,n)=>s.value?(k(),P("svg",T({key:0,ref_key:"svgElem",ref:i,class:"m-icon m-reset-css",width:"1em",height:"1em"},{...S(s.value),...h(e.$attrs)},{style:`font-size: ${u.size}`,innerHTML:w(s.value)}),null,16,V)):H("v-if",!0)}});export{G as default};
