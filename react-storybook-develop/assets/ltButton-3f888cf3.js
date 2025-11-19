import{j as a}from"./jsx-runtime-8406ef1e.js";import{B as x}from"./Button-21321eef.js";import{d as S}from"./styled-components.browser.esm-675ea4f2.js";const B=S(x)`
  border-radius: 10px;
  margin: 0px;

  &&& {
    display: flex;
    flex-direction: row;
    align-items: ${e=>e.$alignItemCenter?"center":"stretch"};
    justify-content: ${e=>e.$justifyItem||"center"};
    gap: ${e=>e.$gap||"10px"};
  }

  /* Apply custom styles with higher specificity to override Semantic UI */
  ${e=>e.$backgroundColor&&`&&& { background-color: ${e.$backgroundColor}; }`}
  ${e=>e.$color&&`&&& { color: ${e.$color}; }`}
  ${e=>e.$padding&&`&&& { padding: ${e.$padding}; }`}
  ${e=>e.$width&&`&&& { width: ${e.$width}; }`}

  /* Transparent styling */
  ${e=>e.$transparent&&`
    &&& {
      background: transparent;
      border: none;
    }
  `}

  /* Disabled styling */
  ${e=>e.disabled&&`
    &&& {
      cursor: not-allowed;
      opacity: 0.65;
    }
  `}

  /* Border styling */
  ${e=>{if(e.$border){if(e.$borderStyles){const{width:n="1px",type:s="solid",color:r="rgb(209, 213, 219)",radius:t="24px"}=e.$borderStyles;return`
          &&& {
            border-radius: ${t};
            border: ${n} ${s} ${r};
          }
        `}return`
        &&& {
          border-radius: 24px;
          border: 1px solid rgb(209, 213, 219);
        }
      `}return""}}

  /* Hover effects - only apply when props are provided */
  &:hover:not(:disabled) {
    ${e=>e.$hoverBackgroundColor&&`background-color: ${e.$hoverBackgroundColor};`}
    ${e=>e.$hoverColor&&`color: ${e.$hoverColor};`}
  }
`,u=({label:e,onClick:n,size:s="small",border:r,leftElement:t,rightElement:i,transparent:o=!1,disabled:l=!1,customStyles:c,className:p,id:m,alignItemCenter:d=!1,justifyItem:f,gap:g,backgroundColor:y,color:$,hoverBackgroundColor:b,hoverColor:v,padding:h,width:q,borderStyles:T,...w})=>{const C=["ltButton",o?"transparent":"",l?"disabled":"",r?"border":"",d?"alignItemCenter":"",p].filter(Boolean).join(" "),k={...c};return a.jsxs(B,{id:m,className:C,size:s,onClick:n,style:k,disabled:l,$alignItemCenter:d,$transparent:o,$border:r,$backgroundColor:y,$color:$,$hoverBackgroundColor:b,$hoverColor:v,$padding:h,$width:q,$justifyItem:f,$gap:g,$borderStyles:T,...w,children:[t&&a.jsx("span",{children:t}),e&&a.jsx("span",{className:"label",children:e}),i&&a.jsx("span",{children:i})]})},R=u;u.__docgenInfo={description:"",methods:[],displayName:"LtButton",props:{label:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:'"small"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:""},leftElement:{required:!1,tsType:{name:"ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactNode"},description:""},transparent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},alignItemCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},justifyItem:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:""},gap:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},hoverBackgroundColor:{required:!1,tsType:{name:"string"},description:""},hoverColor:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},borderStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string;
  type?: string;
  color?: string;
  radius?: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"radius",value:{name:"string",required:!1}}]}},description:""}}};export{R as L};
