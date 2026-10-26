import{aX as m,aY as a}from"./index-CPLjtwb_.js";const g="https://pubchem.ncbi.nlm.nih.gov/rest/pug";function t(e){return e.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}function u(e,o=6){const s=e.title.toLowerCase(),i=[];for(const n of e.synonyms){if(i.length>=o)break;n.toLowerCase()===s||n.length>40||/^(C\d{5}|CHEBI:\d+|HMDB\d+|\d+-\d+-\d+|[A-Z0-9]{8,}|.*\d{4,}.*)$/.test(n)||i.push(n)}return i}function x(e){if(!e.substanceClass)return e.compound?d(e.compound):"";const o=e.compound?`
      <div style="margin-top: 10px; padding: 6px 8px; border: 1px dashed #666; border-radius: 6px;">
        <div style="font-size: 11px; color: #e8b84a; margin-bottom: 6px;">Example compound of this class (found by name, not the class itself):</div>
        ${d(e.compound,{exampleOf:e.substanceClass})}
      </div>`:'<div style="margin-top: 8px; font-size: 12px; color: #999;">No example compound found.</div>';return f(e.substanceClass)+o}function r(e,o){return`<a href="${t(e)}" target="_blank" rel="noopener" style="color:#7fc8ff;text-decoration:none;">${t(o)}</a>`}function f(e){const[o,...s]=e.names,i=o?o.charAt(0).toUpperCase()+o.slice(1):e.keggId;return`
    <div style="padding-bottom: 4px; margin-bottom: 8px;">
      <div style="font-weight: 700; font-size: 16px; color: #00ffff; margin-bottom: 4px;">${t(i)}
        <span style="font-size: 11px; font-weight: 600; color: #000; background: #e8b84a; border-radius: 999px; padding: 1px 8px; margin-left: 6px; vertical-align: 2px;">substance class</span>
      </div>
      ${s.length?`<div style="font-size: 11px; color: #999;">${t(s.slice(0,6).join(", "))}</div>`:""}
    </div>
    <div style="color: #ddd; font-size: 12px; line-height: 1.45; margin-bottom: 8px;">
      KEGG ${t(e.keggId)} stands for a class of compounds with a generic structure (for example
      varying fatty acid chains), not a single molecule. PubChem has no single structure for it.
    </div>
    <div style="font-size: 11px; color: #aaa; padding-top: 6px;">
      ${r(`https://www.kegg.jp/entry/${e.keggId}`,`KEGG ${e.keggId}`)} &middot;
      ${r(`https://pubchem.ncbi.nlm.nih.gov/substance/${e.sid}`,`PubChem substance ${e.sid}`)}
    </div>`}function d(e,o={}){const s=[r(`https://pubchem.ncbi.nlm.nih.gov/compound/${e.cid}`,`PubChem ${e.cid}`),e.keggId&&!o.exampleOf?r(`https://www.kegg.jp/entry/${e.keggId}`,`KEGG ${e.keggId}`):"",e.hmdbId?r(`https://hmdb.ca/metabolites/${e.hmdbId}`,e.hmdbId):"",e.chebiId?r(`https://www.ebi.ac.uk/chebi/searchId.do?chebiId=${e.chebiId}`,e.chebiId):""].filter(Boolean).join(" &middot; "),i=[["Formula",e.formula],["Molecular weight",e.molecularWeight?`${e.molecularWeight} g/mol`:void 0],["IUPAC name",e.iupacName],["InChIKey",e.inchiKey]],n=u(e),p=m(a.pubchemPng(e.cid))??`${g}/compound/cid/${e.cid}/PNG?image_size=220x220`;return`
    <div style="padding-bottom: 4px; margin-bottom: 8px;">
      <div style="font-weight: 700; font-size: 16px; color: #00ffff; margin-bottom: 4px;">${t(e.title)}</div>
      ${n.length?`<div style="font-size: 11px; color: #999;">${t(n.join(", "))}</div>`:""}
    </div>
    <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 8px;">
      <img crossorigin="anonymous" src="${t(p)}" alt="Structure of ${t(e.title)}"
        style="width: 160px; height: 160px; flex-shrink: 0; background: #fff; border-radius: 6px;"
        onerror="this.style.display='none'"/>
      <div style="display: grid; grid-template-columns: auto 1fr; gap: 3px 10px; font-size: 12px; min-width: 0;">
        ${i.filter(([,c])=>c).map(([c,l])=>`<div style="color: #aaa;">${c}</div><div style="color: #fff; word-break: break-word;">${t(l)}</div>`).join("")}
      </div>
    </div>
    ${e.description?`
      <div style="color: #ddd; font-size: 12px; line-height: 1.45; margin-bottom: 8px;">${t(e.description.text)}
        ${e.description.source?`<span style="color: #888;">(${t(e.description.source)})</span>`:""}
      </div>`:""}
    <div style="font-size: 11px; color: #aaa; padding-top: 6px;">${s}</div>
  `}export{x as formatPubChemTooltip};
