import{j as t,I as b,E as y,R as C,C as d,c as i,d as k}from"./index-CiR_osuU.js";import{r as o}from"./react-CQo9HC6H.js";import f from"./index-BcVtF3cq.js";import{d as r}from"./styled-components-BbBSjn3f.js";import{I as T,T as v}from"./index-yOVg_SV8.js";import"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const O=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({$isOpen:e})=>e?"block":"none"};
  z-index: 1000;
`,E=r.div`
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
`,W=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacings.md};
`,L=r.h2`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.main.textColor};
  margin: 0;
`,D=r.div`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.main.textColor};
    text-align: left;
`,I=({open:e,loading:s,submitText:l,onSubmit:n,cancelText:a,onClose:p,title:c,children:h})=>t.jsx(O,{$isOpen:e,children:t.jsxs(E,{children:[t.jsxs(W,{children:[c&&t.jsx(L,{children:c}),t.jsx(b,{size:20,className:"pointer",icon:y.CLOSE,onClick:p})]}),t.jsx(D,{children:h}),t.jsxs(C,{gutter:[16,12],justify:"end",children:[t.jsx(d,{children:t.jsx(f,{outline:!0,width:40,onClick:p,children:a})}),t.jsx(d,{children:t.jsx(f,{loading:s,onClick:n,children:l})})]})]})}),x={success:{bg:i.greenWithOpacity,color:i.green},danger:{bg:i.redWithOpacity,color:i.red},info:{bg:i.blueWithOpacity,color:i.blue},warning:{bg:i.orangeWithOpacity,color:i.orange},default:{bg:"transparent",color:"transparent"}},N=r.p`
    color: ${({$type:e})=>x[e].color};
    display: flex;
    gap: 12px;
    align-items: center;
    margin: ${({theme:e})=>e.spacings.lg} 0;
    border-radius: ${({theme:e})=>e.radiuses.sm};
    background-color: ${({$type:e})=>x[e].bg};
    font-size: ${({theme:e,$size:s})=>e.fontSizes.md||s};
    height: ${({$show:e})=>e?"36px":0};
    padding: 0 ${({theme:e})=>e.spacings.md};
    transition: all ease-in-out 0.5s;
    opacity: ${({$show:e})=>e?1:0};

    & {
        svg {
            margin-left: auto;

            path {
                fill: ${({$type:e})=>x[e].color};
            }
        }
    }
`,j=({size:e="sm",onClose:s,type:l="success",delay:n,message:a})=>(o.useEffect(()=>{n&&setTimeout(()=>s(),n)},[n,s]),t.jsxs(N,{$show:!!a,$type:l,$size:e,children:[a," ",t.jsx(b,{size:18,className:"pointer",onClick:s,icon:y.CLOSE})]})),P=({children:e})=>{const[s,l]=o.useState(""),[n,a]=o.useState(""),[p,c]=o.useState(!1),[h,u]=o.useState(""),[S,$]=o.useState(""),[A,{isLoading:w}]=k(),m=()=>{l(""),a("")},z=o.cloneElement(e,{onClick:()=>c(!0)});return t.jsxs(t.Fragment,{children:[t.jsx(I,{loading:w,onSubmit:()=>{},submitText:"Create",cancelText:"Cancel",open:p,onClose:()=>{$(""),u(""),m(),c(!1)},title:"Add a new post",children:t.jsxs(C,{gutter:[16,16],justify:"start",children:[t.jsxs(d,{span:24,children:[t.jsx("h4",{children:"Title"}),t.jsx(T,{placeholder:"Type title...",value:h,name:"postTitle",onChange:g=>{u(g.target.value)}})]}),t.jsxs(d,{span:24,children:[t.jsx("h4",{children:"Description"}),t.jsx(v,{placeholder:"Type description...",value:S,name:"postDescription",onChange:g=>{$(g.target.value)}})]}),t.jsxs(d,{span:24,children:[t.jsx(j,{type:"success",onClose:m,message:n}),t.jsx(j,{type:"danger",onClose:m,message:s})]})]})}),z]})};export{P as default};
//# sourceMappingURL=index-B--r5Ks6.js.map
