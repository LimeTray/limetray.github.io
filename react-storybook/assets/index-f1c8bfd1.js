import{j as t}from"./jsx-runtime-8406ef1e.js";import{d as i}from"./styled-components.browser.esm-d2d81691.js";import{C as d}from"./Card-7a020250.js";const c=i(d)`
    &&& {
        background: var(--card-bg-color, ${r=>{var e;return((e=r.$styled)==null?void 0:e.backgroundColor)||"white"}});
        border-radius: var(--card-radius, ${r=>{var e;return((e=r.$styled)==null?void 0:e.borderRadius)||"12px"}});
        overflow: hidden;
        border: var(--card-border, ${r=>{var e;return((e=r.$styled)==null?void 0:e.border)||"1px solid rgba(0, 0, 0, 0.05)"}});
        transition: box-shadow 0.3s ease, transform 0.2s ease;
        min-width: var(--card-min-width, ${r=>{var e;return((e=r.$styled)==null?void 0:e.minWidth)||"100px"}});
        min-height: var(--card-min-height, ${r=>{var e;return((e=r.$styled)==null?void 0:e.minHeight)||"30px"}});
        margin: var(--card-margin, ${r=>{var e;return((e=r.$styled)==null?void 0:e.margin)||"0"}});
        padding: var(--card-padding, ${r=>{var e;return((e=r.$styled)==null?void 0:e.padding)||"0px"}});
        width: var(--card-width, ${r=>{var e;return((e=r.$styled)==null?void 0:e.width)||"100%"}});
        height: var(--card-height, ${r=>{var e;return((e=r.$styled)==null?void 0:e.height)||"auto"}});
        max-width: var(--card-max-width, ${r=>{var e;return((e=r.$styled)==null?void 0:e.maxWidth)||"100%"}});
        max-height: var(--card-max-height, ${r=>{var e;return((e=r.$styled)==null?void 0:e.maxHeight)||"none"}});
        cursor: pointer;
        box-shadow: ${r=>{var e;return`var(--card-shadow, ${((e=r.$styled)==null?void 0:e.boxShadow)||"none"})`}};        

        &:hover {
            color: unset;
            transform: unset;
            border: ${r=>{var e,a;return`var(--card-hover-border, var(--card-border, ${((e=r.$styled)==null?void 0:e.hoverBorder)||((a=r.$styled)==null?void 0:a.border)||"1px solid rgba(0, 0, 0, 0.05)"}))`}};
            box-shadow: ${r=>{var e,a;return`var(--card-hover-shadow, var(--card-shadow, ${((e=r.$styled)==null?void 0:e.hoverBoxShadow)||((a=r.$styled)==null?void 0:a.boxShadow)||"none"}))`}};
            background: ${r=>{var e,a;return`var(--card-hover-bg-color, var(--card-bg-color, ${((e=r.$styled)==null?void 0:e.hoverBgColor)||((a=r.$styled)==null?void 0:a.backgroundColor)||"inherit"}))`}};
        }
    }
`,y=i(d.Header)`
    &&&{
        padding: ${r=>{var e;return((e=r.$styles)==null?void 0:e.padding)||"18px 20px"}};
        border-bottom: 1px solid ${r=>{var e;return((e=r.$styles)==null?void 0:e.borderColor)||"#f3f4f6"}};
        display: flex;
        align-items: center;
        background: ${r=>{var e;return((e=r.$styles)==null?void 0:e.backgroundColor)||"transparent"}};
        border-radius: ${r=>{var e;return((e=r.$styles)==null?void 0:e.borderRadius)||"0px"}};
        flex: 1;
        justify-content: space-between;
        gap: 12px;

        @media (max-width: 640px) {
            padding: ${r=>{var e;return((e=r.$styles)==null?void 0:e.padding)||"16px"}};
            flex-direction: column;
            align-items: flex-start;
        }
    }
`,m=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 10px;
    margin-right: 15px;
    color: ${r=>{var e;return((e=r.$styles)==null?void 0:e.iconColor)||"#3b82f6"}};
    background-color: ${r=>{var e;return((e=r.$styles)==null?void 0:e.iconBackgroundColor)||"rgba(59, 130, 246, 0.12)"}};

    @media (max-width: 640px) {
        width: 36px;
        height: 36px;
        margin-right: 12px;
    }
`,h=i.div`
    display: flex;
    align-items: center;
`,p=i.div`
    color: ${r=>{var e;return((e=r.$styles)==null?void 0:e.headerColor)||"#1f2937"}};
    font-size: ${r=>{var e;return((e=r.$styles)==null?void 0:e.headerFontSize)||"1.1rem"}};
    font-weight: 600;
    margin: 0;
`,b=i.div`
    color: ${r=>{var e;return((e=r.$styles)==null?void 0:e.subheaderColor)||"#6b7280"}};
    font-size: ${r=>{var e;return((e=r.$styles)==null?void 0:e.subheaderFontSize)||"0.85rem"}};
    margin: 3px 0 0 0;
    font-weight: 400;
`,v=i(d.Content)`
    &&& {
        padding: ${r=>{var e;return((e=r.$styles)==null?void 0:e.padding)||"20px"}};
        background: ${r=>{var e;return((e=r.$styles)==null?void 0:e.backgroundColor)||"transparent"}};
        border-radius: ${r=>{var e;return((e=r.$styles)==null?void 0:e.borderRadius)||"0px"}};
        border-top: 1px solid ${r=>{var e;return((e=r.$styles)==null?void 0:e.borderColor)||"transparent"}};

        @media (max-width: 640px) {
            padding: ${r=>{var e;return((e=r.$styles)==null?void 0:e.padding)||"16px"}};
        }
    }
`,l=({className:r,styled:e,children:a,header:n,content:s,onClick:g,cardId:u="",disabled:o=!1})=>t.jsxs(c,{className:r,$styled:e,onClick:o?void 0:g,id:u,style:{cursor:o?"not-allowed":"pointer",opacity:o?.6:1},children:[n&&t.jsxs(y,{$styles:n.styles,children:[t.jsxs(h,{children:[n.icon&&t.jsx(m,{$styles:n.styles,children:n.icon}),t.jsxs(p,{$styles:n.styles,children:[n.content,n.subheader&&t.jsx(b,{$styles:n.styles,children:n.subheader})]})]}),n.action]}),a&&t.jsx(v,{$styles:s==null?void 0:s.styles,children:a})]}),k=l;l.__docgenInfo={description:"",methods:[],displayName:"LtCardV3",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},styled:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    border?: string;
    minWidth?: string;
    minHeight?: string;
    hoverBoxShadow?: string;
    hoverBorder?: string;
    hoverBgColor?: string;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
}`,signature:{properties:[{key:"backgroundColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"minWidth",value:{name:"string",required:!1}},{key:"minHeight",value:{name:"string",required:!1}},{key:"hoverBoxShadow",value:{name:"string",required:!1}},{key:"hoverBorder",value:{name:"string",required:!1}},{key:"hoverBgColor",value:{name:"string",required:!1}},{key:"margin",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}},{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}},{key:"maxWidth",value:{name:"string",required:!1}},{key:"maxHeight",value:{name:"string",required:!1}}]}},description:""},header:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    content: string | React.ReactNode;
    subheader?: string | React.ReactNode;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    styles?: {
        backgroundColor?: string;
        borderColor?: string;
        padding?: string;
        iconBackgroundColor?: string;
        iconColor?: string;
        headerColor?: string;
        subheaderColor?: string;
        headerFontSize?: string;
        subheaderFontSize?: string;
        borderRadius?: string;
    };
}`,signature:{properties:[{key:"content",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!0}},{key:"subheader",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"action",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"styles",value:{name:"signature",type:"object",raw:`{
    backgroundColor?: string;
    borderColor?: string;
    padding?: string;
    iconBackgroundColor?: string;
    iconColor?: string;
    headerColor?: string;
    subheaderColor?: string;
    headerFontSize?: string;
    subheaderFontSize?: string;
    borderRadius?: string;
}`,signature:{properties:[{key:"backgroundColor",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}},{key:"iconBackgroundColor",value:{name:"string",required:!1}},{key:"iconColor",value:{name:"string",required:!1}},{key:"headerColor",value:{name:"string",required:!1}},{key:"subheaderColor",value:{name:"string",required:!1}},{key:"headerFontSize",value:{name:"string",required:!1}},{key:"subheaderFontSize",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},content:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    styles?: {
        padding?: string;
        backgroundColor?: string;
        borderRadius?: string;
        borderColor?: string;
    };
}`,signature:{properties:[{key:"styles",value:{name:"signature",type:"object",raw:`{
    padding?: string;
    backgroundColor?: string;
    borderRadius?: string;
    borderColor?: string;
}`,signature:{properties:[{key:"padding",value:{name:"string",required:!1}},{key:"backgroundColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cardId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{k as L};
