import{j as t}from"./jsx-runtime-8406ef1e.js";import{B as x}from"./Button-21321eef.js";import{d as S}from"./styled-components.browser.esm-675ea4f2.js";const B=S(x)`
  border-radius: 10px;
  margin: 0px;

  &&& {
    display: flex;
    flex-direction: row;
    align-items: ${e=>e.$alignItemCenter?"center":""};
    justify-content: ${e=>e.$justifyItem||"center"};
    gap: ${e=>e.$gap||"10px"};
  }

  /* Apply custom styles with higher specificity to override Semantic UI */
  ${e=>e.$backgroundColor&&`&&& { background-color: ${e.$backgroundColor}; }`}
  ${e=>e.$color&&`&&& { color: ${e.$color}; }`}
  ${e=>e.$padding&&`&&& { padding: ${e.$padding}; }`}
  ${e=>e.$width&&`&&& { width: ${e.$width}; }`}

  &.ltButton {
    &.transparent {
      background: transparent;
      border: none;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.65;
    }

    &.border {
      ${e=>{if(e.$borderStyles){const{width:a="1px",type:n="solid",color:s="rgb(209, 213, 219)",radius:r="24px"}=e.$borderStyles;return`
            border-radius: ${r};
            border: ${a} ${n} ${s};
          `}return`
          border-radius: 24px;
          border: 1px solid rgb(209, 213, 219);
        `}}
    }
  }

  /* Hover effects - only apply when props are provided */
  &:hover:not(.disabled) {
    ${e=>e.$hoverBackgroundColor&&`background-color: ${e.$hoverBackgroundColor};`}
    ${e=>e.$hoverColor&&`color: ${e.$hoverColor};`}
  }
`,l=({label:e,onClick:a,size:n="small",border:s,leftElement:r,rightElement:o,transparent:d=!1,disabled:i=!1,customStyles:u,className:c,id:p,alignItemCenter:m=!1,justifyItem:f,gap:g,backgroundColor:y,color:$,hoverBackgroundColor:b,hoverColor:v,padding:h,width:q,borderStyles:T,...w})=>{const C=["ltButton",d?"transparent":"",i?"disabled":"",s?"border":"",m?"alignItemCenter":"",c].filter(Boolean).join(" "),k={...u};return t.jsxs(B,{id:p,className:C,size:n,onClick:a,style:k,disabled:i,$backgroundColor:y,$color:$,$hoverBackgroundColor:b,$hoverColor:v,$padding:h,$width:q,$justifyItem:f,$gap:g,$borderStyles:T,...w,children:[r&&t.jsx("span",{children:r}),e&&t.jsx("span",{className:"label",children:e}),o&&t.jsx("span",{children:o})]})},R=l;l.__docgenInfo={description:"",methods:[],displayName:"LtButton",props:{label:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:'"small"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:""},leftElement:{required:!1,tsType:{name:"ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactNode"},description:""},transparent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},alignItemCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},justifyItem:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:""},gap:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},hoverBackgroundColor:{required:!1,tsType:{name:"string"},description:""},hoverColor:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},borderStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string;
  type?: string;
  color?: string;
  radius?: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"radius",value:{name:"string",required:!1}}]}},description:""}}};export{R as L};
