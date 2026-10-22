import{g as y,s as v,a as b}from"./InfoDialog-Cvqr5Qee.js";import{d as h,u as k}from"./index-DBkdZ22l.js";const w=`
  <div style="margin-bottom: 15px;">
    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">Key</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">All unique keys found across all selected nodes in the key-value pairs (format: "key1:value1,key2:value2,...").</div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">Count</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">Number of occurrences of this key across all selected nodes and all key-value pairs in those nodes.</div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">Sum</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">Sum of all values for this key across all selected nodes.</div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">Mean</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">Arithmetic mean (average) of all values for this key: <code style="background: #2a2a2a; padding: 2px 4px; border-radius: 2px;">mean = sum / count</code></div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">-Log10</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">Negative base-10 logarithm transformation of the mean value: <code style="background: #2a2a2a; padding: 2px 4px; border-radius: 2px;">Score = -log₁₀(mean + ε)</code> where ε = 1×10⁻³⁰⁰<br/>
    The epsilon (ε) prevents division by zero when p-values are exactly 0. Higher scores indicate greater significance:<br/>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li>p = 0.05 → Score ≈ 1.3 (standard significance threshold)</li>
      <li>p = 0.01 → Score = 2.0</li>
      <li>p = 0.001 → Score = 3.0</li>
      <li>p = 10⁻⁶ → Score = 6.0</li>
    </ul>
    </div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">FDR -Log10</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">FDR-adjusted negative log transformation using <strong>Benjamini-Hochberg</strong> method:<br/>
    <ol style="margin-left: 20px; margin-top: 8px;">
      <li>All p-values across all keys are collected and sorted</li>
      <li>FDR correction is applied: <code style="background: #2a2a2a; padding: 2px 4px; border-radius: 2px;">q = p × (m / rank)</code> where m is total number of tests</li>
      <li>Q-values are made monotonic (non-decreasing) and capped at 1.0</li>
      <li>For each key, the mean of all q-values is calculated</li>
      <li>Then apply: <code style="background: #2a2a2a; padding: 2px 4px; border-radius: 2px;">Score = -log₁₀(meanQValue + ε)</code> where ε = 1×10⁻³⁰⁰</li>
    </ol>
    This corrects for multiple hypothesis testing, reducing false discovery rate. The negative log is applied to the mean q-value (not the mean of individual log values).</div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">Confidence</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">Confidence score calculated as: <code style="background: #2a2a2a; padding: 2px 4px; border-radius: 2px;">1 - mean</code><br/>
    Assumes values are p-values (lower p-value = higher confidence).</div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">Min</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">Minimum value found for this key across all selected nodes.</div>

    <div style="font-weight: 600; color: #fff; margin-bottom: 8px;">Max</div>
    <div style="margin-left: 10px; margin-bottom: 12px;">Maximum value found for this key across all selected nodes.</div>
  </div>
`;function C(){v("kvCalcsInfoDialog","KV Calculations - Column Explanations",w)}function S(t){return t.replace(/\.0+$/,"").replace(/(\.\d*?[1-9])0+$/,"$1")}function c(t){return Number.isFinite(t)?t!==0&&Math.abs(t)<1e-4||Math.abs(t)>1e6?t.toExponential(3):S(t.toFixed(10)):String(t)}function L(t,x,a,i,m,p){if(t.length===0){a.innerHTML='<div style="color: #666; font-style: italic; padding: 10px;">No nodes selected</div>';return}const l=b(t,x);if(l.length===0){a.innerHTML='<div style="color: #666; font-style: italic; padding: 10px;">No key-value pairs found</div>';return}const r=m==="asc"?1:-1;l.sort((o,g)=>{const f=o[i],u=g[i];return typeof f=="number"&&typeof u=="number"?(f-u)*r:String(f).localeCompare(String(u))*r});const d=["key","count","sum","mean","negLog","fdrNegLog","confidence","min","max"],n=["Key","Count","Sum","Mean","-Log10","FDR -Log10","Confidence","Min","Max"];let e='<table style="width: 100%; border-collapse: collapse;">';e+='<thead><tr style="background: #333;">';for(let o=0;o<d.length;o++){const g=d[o],f=n[o];e+=`<th data-col="${g}" style="padding: 4px; border: 1px solid #555; cursor: pointer; white-space: nowrap;">${f}${i===g?m==="asc"?" ▲":" ▼":""}</th>`}e+="</tr></thead><tbody>";for(const o of l)e+='<tr style="border-bottom: 1px solid #444;">',e+=`<td style="padding: 4px; border: 1px solid #555;">${k(o.key)}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right;">${o.count}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right; font-family: monospace;">${c(o.sum)}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right; font-family: monospace;">${c(o.mean)}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right; font-family: monospace;">${c(o.negLog)}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right; font-family: monospace;">${c(o.fdrNegLog)}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right; font-family: monospace;">${c(o.confidence)}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right; font-family: monospace;">${c(o.min)}</td>`,e+=`<td style="padding: 4px; border: 1px solid #555; text-align: right; font-family: monospace;">${c(o.max)}</td>`,e+="</tr>";e+="</tbody></table>",a.innerHTML=e,a.querySelectorAll("th[data-col]").forEach(o=>{o.addEventListener("click",()=>{const g=o.getAttribute("data-col");p(g)})})}function T(t){const{ctx:x,content:a}=t;a.style.gap="10px";const i=document.createElement("select");i.style.cssText="width:100%;padding:6px;background:#333;color:#fff;border:1px solid #555;border-radius:4px;",i.innerHTML='<option value="">Select _kv column...</option>';const m=y(x.getAllNodeAttributeKeys());m.sort().forEach(e=>{const s=document.createElement("option");s.value=e,s.textContent=e,i.appendChild(s)});const p=document.createElement("div");p.style.cssText="flex:1;min-height:120px;overflow:auto;border:1px solid #444;border-radius:4px;background:rgba(20,20,30,0.6);font-size:11px;",a.append(i,p);let l="key",r="asc";const d=()=>{const e=t.options().column;if(i.value=m.includes(e)?e:"",!i.value){p.replaceChildren();return}L(t.nodes(),i.value,p,l,r,s=>{l===s?r=r==="asc"?"desc":"asc":(l=s,r="asc"),d()})};i.addEventListener("change",()=>t.set({column:i.value}));const n=document.createElement("button");return n.type="button",n.title="Column explanations",n.style.cssText=`
    width: 28px; height: 100%; padding: 0; border: none;
    background: transparent; color: #98fb98; cursor: pointer;
    display: flex; align-items: center; justify-content: center; font-size: 16px; line-height: 1;
  `,n.textContent="ℹ",n.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),C()}),t.titleBar.style.alignItems="stretch",t.titleBar.appendChild(n),t.onSelection(d),d(),{update:d}}h({type:"kv-table",title:"KV table",titleIcon:"🔑",defaults:{column:"",frozen:!1},frame:{width:520,height:400,minWidth:320,minHeight:240,position:"center",freeze:!0,clone:!1},mount:T});
