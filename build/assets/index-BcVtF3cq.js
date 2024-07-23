import{j as i,L as s}from"./index-CiR_osuU.js";import{d as a}from"./styled-components-BbBSjn3f.js";import"./react-CQo9HC6H.js";import"./react-router-BQRzHQ5X.js";import"./redux-toolkit-BcoMyLRW.js";import"./redux-C2XGIlQH.js";import"./transition-group-DFMasnQE.js";const l=a.button`
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${({theme:t})=>t.spacings.sm} ${({theme:t})=>t.spacings.xxl};
    font-size: ${({theme:t})=>t.fontSizes.md};
    color: ${({theme:t,$outline:e})=>e?t.button.background:t.button.textColor};
    background-color: ${({$outline:t,theme:e})=>t?"transparent":e.button.background};
    border: ${({$outline:t,theme:e})=>t?`1px solid ${e.button.background}`:"none"};
    border-radius: ${t=>t.theme.radiuses.md};
    transition: all ease-in-out 0.2s;
    .loading {
        position: absolute;
        right: 4px;
        margin-left: ${({theme:t})=>t.spacings.md};
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    &:hover {
        transform: scale(1.1);
    ;
    }
`,$=({children:t,outline:e=!1,loading:o,type:n="button",...r})=>i.jsxs(l,{$outline:e,disabled:o,type:n,...r,children:[t,o&&i.jsx(s,{size:14})]});export{$ as default};
//# sourceMappingURL=index-BcVtF3cq.js.map
