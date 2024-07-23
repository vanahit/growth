import{R as c,j as t,C as o,I as h,E as m,L as d}from"./index-CiR_osuU.js";import{r as x}from"./react-CQo9HC6H.js";import{d as i}from"./styled-components-BbBSjn3f.js";import{u as f}from"./react-router-BQRzHQ5X.js";const g=i.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    background-color: ${({theme:e})=>e.main.background};
`,p=i(c)`
    height: 40px;
    max-width: 1200px;
    width: 100%;
    text-align: left;
    margin-bottom: ${({theme:e})=>e.spacings.xl}; /* Space for fixed header */
    font-size: ${({theme:e})=>e.fontSizes.xl};
    color: ${({theme:e})=>e.main.textColor};
    h1 {
        display: inline-block;
        font-size: ${({theme:e})=>e.fontSizes.xxl};
        font-weight: ${({theme:e})=>e.fontWeights.bold};
    }
  .actions {
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
  }
  svg {
        transition: 0.3s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
`,u=i.button`
  background: none;
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.main.textColor};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,j=i.main`
    margin-top: ${({theme:e})=>e.spacings.xl}; /* Space for fixed header */
    margin: ${({theme:e})=>e.spacings.lg} auto;
    max-width: 1200px;
    height: calc(100vh - 180px);
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`,y=x.memo(({title:e,isLoading:n,children:s,isWithBack:r,actions:a})=>{const l=f();return t.jsxs(g,{children:[t.jsxs(p,{align:"middle",justify:"space-between",gutter:[12,12],children:[t.jsxs(o,{children:[r&&t.jsx(u,{onClick:()=>l(-1),children:t.jsx(h,{icon:m.ARROW_LEFT})}),t.jsx("h1",{children:e})]}),t.jsx(o,{xs:24,className:"actions",flex:1,children:a})]}),t.jsx(j,{children:n?t.jsx(d,{centered:!0}):s})]})});export{y as P};
//# sourceMappingURL=index-CZeNZk4y.js.map
