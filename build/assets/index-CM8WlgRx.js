import{R as r,j as i,C as n,d as c,I as p,E as g}from"./index-CVFg64WI.js";import{r as h}from"./react-CQo9HC6H.js";import{d as s}from"./styled-components-BbBSjn3f.js";import"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const x=s(r)`
  flex-direction: column;  
  background-color: ${({theme:e})=>e.main.secondaryBackgroundColor};
  border-radius: ${({theme:e})=>e.radiuses.md};
  padding: ${({theme:e})=>e.spacings.lg};
  position: relative;
  margin-bottom: ${({theme:e})=>e.spacings.lg};
`,f=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacings.sm};
    
`,j=s.h2`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.main.textColor};
  margin: 0;
  margin-bottom: ${({theme:e})=>e.spacings.md};
  overflow-wrap: break-word;
    
`,u=s.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.main.textColor};
  margin: 0;
  white-space: pre-line;  
`,$=({title:e,body:t,actions:o})=>i.jsxs(x,{children:[i.jsxs(r,{gutter:[16,12],justify:"space-between",align:"top",wrap:!1,children:[i.jsxs(n,{span:20,children:[i.jsx(j,{children:e})," "]}),"    ",o&&i.jsx(n,{children:i.jsx(f,{children:o})})]}),i.jsx(u,{children:t})]}),b=({post:e,index:t})=>{const{title:o,id:a,body:m}=e,[d,{isLoading:l}]=c();return i.jsx($,{title:o,body:m,actions:i.jsx(p,{icon:g.DELETE,size:20,loading:l,className:"pointer",onClick:()=>{(async()=>a&&await d({id:a,index:t}).unwrap())()}})})},I=h.memo(b);export{b as PostItem,I as default};
//# sourceMappingURL=index-CM8WlgRx.js.map
