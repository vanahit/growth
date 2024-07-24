import{j as t}from"./index-CVFg64WI.js";import{d as n}from"./styled-components-BbBSjn3f.js";import"./react-CQo9HC6H.js";import"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const a=n.span`
  background-color: yellow; /* or any highlight color */
  color: black; /* ensure text color contrasts with highlight color */
  font-weight: bold; /* optional: makes highlighted text stand out more */
`,x=({text:i,highlight:o})=>{if(!o.trim())return t.jsx(t.Fragment,{children:i});const e=i.split(new RegExp(`(${o})`,"gi"));return t.jsx(t.Fragment,{children:e.map((r,l)=>r.toLowerCase()===o.toLowerCase()?t.jsx(a,{children:r},l):r)})};export{x as default};
//# sourceMappingURL=index-DeTYGZfV.js.map
