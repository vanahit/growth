const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CPSKwC74.js","assets/index-CiR_osuU.js","assets/react-CQo9HC6H.js","assets/styled-components-BbBSjn3f.js","assets/react-router-BQRzHQ5X.js","assets/redux-toolkit-BcoMyLRW.js","assets/redux-C2XGIlQH.js","assets/transition-group-DFMasnQE.js","assets/index-CXJGI9MH.css","assets/Users.styles-DI5dw4ME.js","assets/index-yOVg_SV8.js","assets/index-Cd3y5Wp5.js"])))=>i.map(i=>d[i]);
import{j as t,I as w,E as u,L as z,P as T,_ as k,a as I,b as N}from"./index-CiR_osuU.js";import{r as o}from"./react-CQo9HC6H.js";import{d as m}from"./styled-components-BbBSjn3f.js";import{P as O}from"./index-CZeNZk4y.js";import{u as A}from"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const L=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
    width: 100%;

    table {
        table-layout: fixed;
        flex: 1;
        border: 1px solid ${({theme:e})=>e.table.border};
        display: table;
        border-collapse: collapse;
        height: 100%;
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
    }

    margin: ${({theme:e})=>e.spacings.md};
`,D=m.thead`
    background-color: ${({theme:e})=>e.table.headerBackground};
    color: ${({theme:e})=>e.table.headerText};
    border-bottom: 1px solid ${({theme:e})=>e.table.border};
    vertical-align: middle;
    & > tr {
        vertical-align: middle;
    }
`,W=m.th`
    padding: ${({theme:e})=>e.spacings.sm};
    cursor: ${({$sortable:e})=>e?"pointer":"default"};
    position: relative;
    width: ${({$width:e})=>e||"max-content"};
    text-align: center; /* Center align header text */
    border-left: 1px solid ${({theme:e})=>e.table.border};
    vertical-align: middle;
    height: 40px;
    &:hover {
        background-color: ${({theme:e,$sortable:a})=>a?e.table.headerHover:"inherit"};
    }

    & .sort-icons {
        display: inline-flex;
        flex-direction: column;
        vertical-align: middle;
        margin-left: 8px;
    }

    & > div > span {
        margin: 2px 0;
    }
`,U=o.memo(({columns:e,onSortChange:a,sortConfig:n})=>t.jsx(D,{children:t.jsx("tr",{children:e.map(r=>t.jsxs(W,{$width:r.width,$sortable:r.sortable,onClick:()=>r.sortable&&(d=>{let c="asc";n&&n.key===d&&n.direction==="asc"&&(c="desc"),a&&a({key:d,direction:c})})(r.key),children:[r.header,n&&n.key===r.key?t.jsx("span",{className:"sort-icons",children:n.direction==="asc"?t.jsx(w,{size:16,icon:u.ARROW_UP}):t.jsx(w,{size:16,icon:u.ARROW_DOWN})}):r.sortable&&t.jsxs("span",{className:"sort-icons",children:[t.jsx(w,{size:16,icon:u.ARROW_UP}),t.jsx(w,{size:16,icon:u.ARROW_DOWN})]})]},String(r.key)))})})),V=m.tbody`
    background-color: ${({theme:e})=>e.table.bodyBackground};
`,B=m.span`
    padding: ${({theme:e})=>e.spacings.md};
    font-size: ${({theme:e})=>e.fontSizes.xxl};
    text-align: center;
    color: ${({theme:e})=>e.table.headerText};
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`,H=m.tr`
    vertical-align: middle;
    &:nth-child(even) {
        background-color: ${({theme:e})=>e.table.rowEven};
    }
    &:nth-child(odd) {
        background-color: ${({theme:e})=>e.table.rowOdd};
    }
    &:hover {
        background-color: ${({theme:e})=>e.table.rowHover};
    }
`,E=m.td`
    padding: ${({theme:e})=>e.spacings.md};
    border-bottom: 1px solid ${({theme:e})=>e.table.border};
    width: auto;
    border-left: 1px solid ${({theme:e})=>e.table.border};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: ${({$align:e})=>e||"left"};
`,K=o.memo(({row:e,columns:a,rowIndex:n})=>t.jsx(H,{children:a.map(r=>r.key!=="actions"?t.jsx(E,{$align:r.align,children:r.render?r.render({value:e[r.key],row:e,rowIndex:n}):e[r.key]},String(r.key)):r.render?t.jsx(E,{$align:r.align,children:r.render({row:e,rowIndex:n})},"actions"):null)})),Q=o.memo(({data:e,columns:a,loading:n,emptyText:r})=>{const d=o.useMemo(()=>n&&e.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:a.length,children:t.jsx(z,{centered:!0})})}):e.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:a.length,children:t.jsx(B,{children:r||"No data found!"})})}):e.map((c,h)=>t.jsx(K,{row:c,columns:a,rowIndex:h},h)),[e,a,n,r]);return t.jsx(V,{children:d})}),F=({columns:e,data:a,sortConfig:n,onSortChange:r,currentPage:d,onPageChange:c,pageSize:h=10,loading:g,emptyText:$,filterQuery:v,filterKeys:S})=>{const i=((s,l)=>{const[p,f]=o.useState(s);return o.useEffect(()=>{if(l){const b=[...s].sort((y,j)=>y[l.key]<j[l.key]?l.direction==="asc"?-1:1:y[l.key]>j[l.key]?l.direction==="asc"?1:-1:0);f(b)}else f(s)},[s,l]),p})(a,n),x=((s,l,p)=>{const[f,b]=o.useState(s);return o.useEffect(()=>{if(l){const y=l.toLowerCase(),j=s.filter(P=>p.some(R=>String(P[R]).toLowerCase().includes(y)));b(j)}else b(s)},[s,l,p]),f})(i,v,S),_=x.slice((d-1)*h,d*h);return t.jsxs(L,{children:[t.jsxs("table",{children:[t.jsx(U,{columns:e,onSortChange:r,sortConfig:n}),t.jsx(Q,{loading:g,emptyText:$,data:_,columns:e})]}),t.jsx(T,{currentPage:d,totalCount:x.length,pageSize:h,onPageChange:c})]})},C=o.lazy(()=>k(()=>import("./index-CPSKwC74.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),M=o.lazy(()=>k(()=>import("./Users.styles-DI5dw4ME.js"),__vite__mapDeps([9,3,2,10,1,4,5,6,7,8])).then(e=>({default:e.SStyledInput}))),q=o.lazy(()=>k(()=>import("./index-Cd3y5Wp5.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8])).then(e=>({default:e.DeleteUser}))),G=o.lazy(()=>k(()=>import("./index-CiR_osuU.js").then(e=>e.i),__vite__mapDeps([1,2,3,4,5,6,7,8])).then(e=>({default:e.Icon}))),ne=()=>{const e=A(),[a,n]=o.useState({key:"fullName",direction:"asc"}),[r,d]=o.useState(""),[c,h]=o.useState(1),{data:g,isLoading:$}=I(),v=function(i,x){const[_,s]=o.useState(i);return o.useEffect(()=>{const l=setTimeout(()=>{s(i)},x);return()=>{clearTimeout(l)}},[i,x]),_}(r,300),S=[{key:"fullName",header:"Full Name",sortable:!0,width:"300px",render:({row:i})=>t.jsx("div",{className:"pointer link",onClick:()=>e(`/${N.USERS}/${i.id}`,{state:i}),children:t.jsx(C,{highlight:r,text:i.fullName})})},{key:"email",width:"300px",header:"Email",sortable:!0,render:({row:i})=>t.jsx(C,{highlight:r,text:i.email})},{key:"age",width:"150px",header:"Age",align:"center"},{key:"actions",width:"100px",header:"Actions",align:"center",render:({row:i})=>t.jsx(q,{id:i.id,children:t.jsx(G,{size:20,icon:u.DELETE})})}];return t.jsx(o.Suspense,{fallback:t.jsx(z,{}),children:t.jsx(O,{title:"Users",actions:t.jsx(M,{value:r,onChange:i=>d(i.target.value),placeholder:"Search by name,email..."}),children:t.jsx(F,{loading:$,columns:S,data:(g==null?void 0:g.content)||[],sortConfig:a,onSortChange:n,currentPage:c,pageSize:10,onPageChange:h,filterKeys:["firstName","email"],filterQuery:v})})})};export{ne as default};
//# sourceMappingURL=index-y15clodc.js.map
