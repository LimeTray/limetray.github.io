import{j as s}from"./jsx-runtime-ffb262ed.js";import{S as b}from"./Button-28b2e7e6.js";const a=({label:d,onClick:u,size:p,border:l,icon:e,transparent:r,disabled:c,customStyles:f,iconPosition:t,className:m,...y})=>{const g={background:r?"transparent":void 0,border:r?"none":l||"1px solid black",...f,display:"flex",alignItems:"center"},n="4px",i="4px",o={margin:t==="left"?`0 ${n} 0 0`:`0 0 0 ${n}`},S={margin:t==="left"?`0 0 0 ${i}`:`0 ${i} 0 0`};return s.jsxs(b,{className:`ltButton ${m}`,size:p,onClick:u,style:g,disabled:c,border:l,...y,children:[t==="left"&&e&&s.jsx("span",{style:o,children:e}),e?" ":"",s.jsx("span",{style:S,children:d}),e?" ":"",t==="right"&&e&&s.jsx("span",{style:o,children:e})]})};a.defaultProps={size:"small",transparent:!1,disabled:!1,iconPosition:"left",className:""};const T=a;a.__docgenInfo={description:"",methods:[],displayName:"LtButton",props:{label:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:'"small"',computed:!1}},border:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},transparent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},iconPosition:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{T as L};