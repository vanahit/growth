const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C_y8aB-W.js","assets/index-CVFg64WI.js","assets/react-CQo9HC6H.js","assets/styled-components-BbBSjn3f.js","assets/react-router-BQRzHQ5X.js","assets/redux-toolkit-BcoMyLRW.js","assets/redux-C2XGIlQH.js","assets/transition-group-DFMasnQE.js","assets/index-CXJGI9MH.css","assets/index-BGn695lD.js","assets/index-cOaBdSpJ.js","assets/index-BwLey5bf.js"])))=>i.map(i=>d[i]);
import{_ as o,c as D,j as t,L as S}from"./index-CVFg64WI.js";import{r as s,a as n}from"./react-CQo9HC6H.js";import"./styled-components-BbBSjn3f.js";import"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const I=s.lazy(()=>o(()=>import("./index-C_y8aB-W.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),c=s.lazy(()=>o(()=>import("./index-CVFg64WI.js").then(e=>e.g),__vite__mapDeps([1,2,3,4,5,6,7,8])).then(e=>({default:e.Col}))),L=s.lazy(()=>o(()=>import("./index-CVFg64WI.js").then(e=>e.g),__vite__mapDeps([1,2,3,4,5,6,7,8])).then(e=>({default:e.Row}))),R=s.lazy(()=>o(()=>import("./index-cOaBdSpJ.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8])).then(e=>({default:e.Input}))),A=s.lazy(()=>o(()=>import("./index-cOaBdSpJ.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8])).then(e=>({default:e.Textarea}))),y=s.lazy(()=>o(()=>import("./index-BwLey5bf.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8]))),B=({children:e})=>{const[g,r]=s.useState(""),[j,u]=s.useState(""),[E,_]=n.useState(!1),[i,m]=n.useState(""),[l,h]=n.useState(""),[T,{isLoading:f}]=D(),d=()=>{r(""),u("")},x=()=>{h(""),m(""),d()},v=n.cloneElement(e,{onClick:()=>_(!0)});return t.jsxs(s.Suspense,{fallback:t.jsx(S,{}),children:[t.jsx(I,{loading:f,onSubmit:()=>{(async()=>{var a;if(i===""||l==="")r("Both fields are mandatory!");else try{await T({title:i.trim(),body:l.trim()}).unwrap(),x(),u("Post successfully added!")}catch(C){const p=C;r(((a=p==null?void 0:p.data)==null?void 0:a.message)||"Something went wrong!")}})()},submitText:"Create",cancelText:"Cancel",open:E,onClose:()=>{x(),_(!1)},title:"Add a new post",children:t.jsxs(L,{gutter:[16,16],justify:"start",children:[t.jsxs(c,{span:24,children:[t.jsx("h4",{children:"Title"}),t.jsx(R,{placeholder:"Type title...",value:i,name:"postTitle",onChange:a=>{m(a.target.value)}})]}),t.jsxs(c,{span:24,children:[t.jsx("h4",{children:"Description"}),t.jsx(A,{placeholder:"Type description...",value:l,name:"postDescription",onChange:a=>{h(a.target.value)}})]}),t.jsxs(c,{span:24,children:[t.jsx(y,{type:"success",onClose:d,message:j}),t.jsx(y,{type:"danger",onClose:d,message:g})]})]})}),v]})};export{B as default};
//# sourceMappingURL=index-D4gWPYyo.js.map
