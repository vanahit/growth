import{f as o,j as a,I as p,E as l}from"./index-CVFg64WI.js";import{r as m}from"./react-CQo9HC6H.js";import{d as g}from"./styled-components-BbBSjn3f.js";import"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const s={success:{bg:o.greenWithOpacity,color:o.green},danger:{bg:o.redWithOpacity,color:o.red},info:{bg:o.blueWithOpacity,color:o.blue},warning:{bg:o.orangeWithOpacity,color:o.orange},default:{bg:"transparent",color:"transparent"}},$=g.p`
    color: ${({$type:e})=>s[e].color};
    display: flex;
    gap: 12px;
    align-items: center;
    margin: ${({theme:e})=>e.spacings.lg} 0;
    border-radius: ${({theme:e})=>e.radiuses.sm};
    background-color: ${({$type:e})=>s[e].bg};
    font-size: ${({theme:e,$size:t})=>e.fontSizes.md||t};
    height: ${({$show:e})=>e?"36px":0};
    padding: 0 ${({theme:e})=>e.spacings.md};
    transition: all ease-in-out 0.5s;
    opacity: ${({$show:e})=>e?1:0};

    & {
        svg {
            margin-left: auto;

            path {
                fill: ${({$type:e})=>s[e].color};
            }
        }
    }
`,z=({size:e="sm",onClose:t,type:n="success",delay:r,message:i})=>(m.useEffect(()=>{if(r){const c=setTimeout(()=>t(),r);return()=>clearTimeout(c)}},[]),a.jsxs($,{$show:!!i,$type:n,$size:e,children:[i," ",a.jsx(p,{size:18,className:"pointer",onClick:t,icon:l.CLOSE})]}));export{z as default};
//# sourceMappingURL=index-BwLey5bf.js.map
