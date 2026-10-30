import{F as E}from"./index-3Ha73GA2.js";function I(r){const a=new Map;if(!r||typeof r!="string")return a;const s=r.split(",");for(const n of s){const e=n.trim();if(!e)continue;const t=e.indexOf(":");if(t===-1)continue;const l=e.substring(0,t).trim(),i=e.substring(t+1).trim();if(!l||!i)continue;const o=Number(i);Number.isFinite(o)&&a.set(l,o)}return a}function C(r){const a=r.length;if(a===0)return[];const s=r.map((e,t)=>({index:t,pValue:e}));s.sort((e,t)=>e.pValue-t.pValue);const n=new Array(a);for(let e=0;e<a;e++){const t=e+1;n[s[e].index]=s[e].pValue*(a/t)}for(let e=a-2;e>=0;e--){const t=s[e].index,l=s[e+1].index;n[t]>n[l]&&(n[t]=n[l])}return n.map(e=>Math.min(e,1))}function A(r,a){const s=new Map,n=new Set;for(const o of r){if(!o.attributes||!o.attributes[a])continue;const c=String(o.attributes[a]),u=I(c);for(const[d,f]of u.entries())n.add(d),s.has(d)||s.set(d,[]),s.get(d).push(f)}const e=[],t=new Map;for(const o of Array.from(n).sort()){const c=s.get(o)||[],u=[];for(const d of c)if(d>0&&d<=1){const f=e.length;e.push(d),u.push(f)}u.length>0&&t.set(o,u)}const l=e.length>0?C(e):[],i=[];for(const o of Array.from(n).sort()){const c=s.get(o)||[];if(c.length===0)continue;const u=c.length,d=c.reduce((m,p)=>m+p,0),f=d/u,h=Math.min(...c),b=Math.max(...c),x=1e-300,k=f+x,v=-Math.log10(k),V=1-f;let y=0;const g=t.get(o);if(g&&g.length>0){const m=g.map(p=>l[p]).filter(p=>p>0);if(m.length>0){const w=m.reduce((M,S)=>M+S,0)/m.length+x;y=-Math.log10(w)}}i.push({key:o,count:u,sum:d,mean:f,negLog:v,confidence:V,min:h,max:b,fdrNegLog:y})}return i}const K=E,L=`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1a1a1a;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 20px;
  z-index: 999999;
  min-width: 600px;
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
`,N=`
  margin-top: 15px;
  background: #4a4a4a;
  color: #fff;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;function z(r,a,s){let n=document.getElementById(r);if(!n){const e=document.createElement("div");e.id=r,e.style.cssText=L;const t=document.createElement("div");t.textContent=a,t.style.cssText="font-size: 18px; font-weight: 600; margin-bottom: 15px; color: #fff;";const l=document.createElement("div");l.className="info-dialog-content",l.style.cssText="color: #ccc; font-size: 13px; line-height: 1.6;";const i=document.createElement("button");i.textContent="Close",i.style.cssText=N,i.onmouseover=()=>{i.style.background="#5a5a5a"},i.onmouseout=()=>{i.style.background="#4a4a4a"};const o=()=>{e.style.display="none"};i.addEventListener("click",o),e.addEventListener("click",c=>{c.target===e&&o()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&e.style.display==="block"&&o()}),e.append(t,l,i),document.body.appendChild(e),n=e}n.querySelector(".info-dialog-content").innerHTML=s,n.style.display="block"}export{A as a,C as b,K as g,z as s};
