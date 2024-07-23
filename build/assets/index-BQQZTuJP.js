const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CALBJpVp.js","assets/index-CiR_osuU.js","assets/react-CQo9HC6H.js","assets/styled-components-BbBSjn3f.js","assets/react-router-BQRzHQ5X.js","assets/redux-toolkit-BcoMyLRW.js","assets/redux-C2XGIlQH.js","assets/transition-group-DFMasnQE.js","assets/index-CXJGI9MH.css"])))=>i.map(i=>d[i]);
import{_ as c,j as e,E as l,R as o,C as r}from"./index-CiR_osuU.js";import{P as d}from"./index-CZeNZk4y.js";import h from"./index-BcVtF3cq.js";import{DeleteUser as p}from"./index-Cd3y5Wp5.js";import{d as a}from"./styled-components-BbBSjn3f.js";import{r as x}from"./react-CQo9HC6H.js";import{a as j,u}from"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const f=a.img`
    border-radius: 8px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-bottom: 20px;
`,m=a.div`
    margin-bottom: ${({theme:i})=>i.spacings.md};
    font-size: ${({theme:i})=>i.fontSizes.md};
`,t=a.h2`
    font-size:${({theme:i})=>i.fontSizes.xl};
    margin-bottom: ${({theme:i})=>i.spacings.lg};
`,g=x.lazy(()=>c(()=>import("./index-CALBJpVp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),R=()=>{const i=j(),n=u(),s=i.state;return s?e.jsx(d,{isWithBack:!0,title:`${s.fullName}'s profile page`,actions:e.jsx(p,{onSuccess:()=>{n(-1)},id:s.id,children:e.jsxs(h,{children:["Delete ",s.firstName," "]})}),children:e.jsxs(o,{gutter:[16,16],children:[e.jsx(r,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1200px)",srcSet:s.picture.large}),e.jsx("source",{media:"(min-width: 768px)",srcSet:s.picture.medium}),e.jsx(f,{width:120,height:120,loading:"lazy",src:s.picture.large,alt:`${s.fullName}'s avatar`})]})}),e.jsxs(r,{children:[e.jsx(t,{children:s.fullName}),e.jsxs(t,{children:["Age: ",s.age]})]}),e.jsx(r,{span:24,children:e.jsxs(o,{gutter:[32,16],children:[e.jsxs(r,{span:24,children:[e.jsx(t,{children:"Location:"}),e.jsxs(m,{children:[" ",s.location]})]}),e.jsxs(r,{span:24,children:[e.jsx(t,{children:"Email:"})," ",e.jsxs(m,{children:[" ",s.email]})]})]})})]})}):e.jsx(g,{icon:l.USER,message:"User data not found!"})};export{R as default};
//# sourceMappingURL=index-BQQZTuJP.js.map
