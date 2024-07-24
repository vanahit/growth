import{j as i,I as h,E as x,R as p,C as s}from"./index-CVFg64WI.js";import r from"./index-BGn695lD.js";import{d as t}from"./styled-components-BbBSjn3f.js";import"./react-CQo9HC6H.js";import"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const f=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({$isOpen:e})=>e?"block":"none"};
  z-index: 1000;
`,g=t.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme:e})=>e.main.background};
    border-radius: ${({theme:e})=>e.radiuses.md};
    box-shadow: ${({theme:e})=>e.boxShadows.boxShadow2};
    padding: ${({theme:e})=>e.spacings.lg};
    z-index: 1001;
    width: 500px;
    max-width: calc(100% - 32px);
`,j=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacings.md};
`,b=t.h2`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.main.textColor};
  margin: 0;
`,u=t.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.main.textColor};
    text-align: left;
`,O=({open:e,loading:d,submitText:l,onSubmit:a,cancelText:m,onClose:o,title:n,children:c})=>i.jsx(f,{$isOpen:e,children:i.jsxs(g,{children:[i.jsxs(j,{children:[n&&i.jsx(b,{children:n}),i.jsx(h,{size:20,className:"pointer",icon:x.CLOSE,onClick:o})]}),i.jsx(u,{children:c}),i.jsxs(p,{gutter:[16,12],justify:"end",children:[i.jsx(s,{children:i.jsx(r,{outline:!0,width:40,onClick:o,children:m})}),i.jsx(s,{children:i.jsx(r,{loading:d,onClick:a,children:l})})]})]})});export{O as default};
//# sourceMappingURL=index-C_y8aB-W.js.map
