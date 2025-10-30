import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as f}from"./index-ad58220e.js";import{S as D}from"./index-493d6c1b.js";import{C as L}from"./Checkbox-c82fc3e6.js";import{g as N}from"./requestIdGenerator-f6efc017.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./_baseSet-bea29546.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-9497f5af.js";import"./includes-646822e3.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";const h=s=>e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"21.457",viewBox:"0 0 18 21.457",children:e.jsxs("g",{id:"Group_7890","data-name":"Group 7890",transform:"translate(0 1.805)",children:[e.jsx("path",{id:"Path_3110","data-name":"Path 3110",d:"M0,0H18V18H0Z",fill:"none"}),e.jsx("path",{id:"Path_3111","data-name":"Path 3111",d:"M10.75,6.75h6L9.25,18V11.25H4L10.75,0Zm-1.5,1.5V5.415L6.649,9.75h4.1v3.3l3.2-4.8Z",transform:"translate(-1)",fill:"#202223",stroke:"rgba(0,0,0,0)",strokeWidth:"1"})]})})});h.__docgenInfo={description:"",methods:[],displayName:"QuickAccessMenu"};const g=s=>{const[t,r]=f.useState(!1),[c,p]=f.useState(s.pinnedServices),{headerDetails:C,servicesList:O,height:w,handleChangeOnPinning:m}=s,{title:b,description:j,SvgComponent:M}=C,y=(n,d,i)=>{const{checked:a,label:S}=d;if(a){if(c.length>4)return;p(u=>{const l=[...u,i];return m(a,i,l),l})}else p(u=>{const l=u.filter(A=>A.title!==S.children);return m(a,i,l),l})},P=()=>{r(!t),s.onClick()};return e.jsx("div",{className:" quick-access-menu",children:e.jsxs("div",{className:"border-1 padding-1 align-center",style:{height:w},children:[e.jsxs("div",{className:"flex justify-spc-btwn",children:[e.jsx(D,{title:b,description:j,SvgComponent:M}),e.jsx("div",{}),e.jsxs("div",{className:"relative",children:[e.jsx("button",{className:"three-dots-btn flex justify-spc-btwn align-center cursor-pr relative",style:{background:t?"#F8F8F8":"",border:t?"1px solid #188038":""},onClick:P,children:[...Array(3)].map(()=>e.jsx("div",{className:"each-dot",style:{background:t?"#188038":""}},N()))}),t?e.jsxs("div",{className:"modal absolute border-1",children:[e.jsx("header",{className:"no-wrap",children:"Pin any 5 modules at a time"}),e.jsx("div",{children:O.map((n,d)=>e.jsx("div",{className:"each-module",children:e.jsx(L,{onChange:(i,a)=>{y(i,a,n)},label:{children:n.title},checked:c.some(i=>i.title===n.title)},n.title)},d))})]}):""]})]}),e.jsx("div",{className:"margin-top-20 flex flex-wrap",children:c.map(n=>e.jsx("a",{className:"modal-items",href:n.link,children:n.title},n.title))})]})})},Q=g;g.defaultProps={headerDetails:{title:"Quick Access Menu",description:"Access anything you need in just few clicks",SvgComponent:h},servicesList:[{title:"Product On/Off",link:""},{title:"Taxes and Charges",link:"www.google.com"},{title:"Integrations",link:""},{title:"Web POS Dashboard",link:""},{title:"Logs",link:""},{title:"Outlet Manager",link:""},{title:"Offer Manager",link:""},{title:"Logs Manager",link:""},{title:"Analytics Dashboard",link:""}],pinnedServices:[{title:"Product On/Off",link:""},{title:"Taxes and Charges",link:""},{title:"Integrations",link:""}],height:"430px",width:"380px",onClick:V,handleChangeOnPinning:_};function V(){console.log("write your function here while on click on options button")}function _(s,t,r){console.log(s,t,r)}g.__docgenInfo={description:"",methods:[],displayName:"QuickAccessMenu",props:{headerDetails:{defaultValue:{value:`{
  title: "Quick Access Menu",
  description: "Access anything you need in just few clicks",
  SvgComponent: QuickAccessSVG
}`,computed:!1},required:!1},servicesList:{defaultValue:{value:`[
  {
    title: "Product On/Off",
    link: ""
  },
  {
    title: "Taxes and Charges",
    link: "www.google.com"
  },
  {
    title: "Integrations",
    link: ""
  },
  {
    title: "Web POS Dashboard",
    link: ""
  },
  {
    title: "Logs",
    link: ""
  },
  {
    title: "Outlet Manager",
    link: ""
  },
  {
    title: "Offer Manager",
    link: ""
  },
  {
    title: "Logs Manager",
    link: ""
  },
  {
    title: "Analytics Dashboard",
    link: ""
  }
]`,computed:!1},required:!1},pinnedServices:{defaultValue:{value:`[
  {
    title: "Product On/Off",
    link: ""
  },
  {
    title: "Taxes and Charges",
    link: ""
  },
  {
    title: "Integrations",
    link: ""
  }
]`,computed:!1},required:!1},height:{defaultValue:{value:'"430px"',computed:!1},required:!1},width:{defaultValue:{value:'"380px"',computed:!1},required:!1},onClick:{defaultValue:{value:`function Demo() {
  console.log("write your function here while on click on options button");
}`,computed:!1},required:!1},handleChangeOnPinning:{defaultValue:{value:`function handleChangeOnPinning(isChecked:any, service:any, pinnedServices:any) {
  console.log(isChecked, service, pinnedServices);
}`,computed:!1},required:!1}}};const te={component:Q,title:"QuickAccessMenu",tags:["autodocs"]},I=()=>{console.log("Call back for onClick on options")},o={args:{headerDetails:{title:"Quick Access Menu",description:"Access anything you need in just few clicks",SvgComponent:h},servicesList:["Product On/Off","Taxes and Charges","Integrations","Web POS Dashboard","Logs","Outlet Manager","Offer Manager","Logs Manager","Analytics Dashboard"],height:"430px",width:"380px",onClick:{Demo:I}}};var k,x,v;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    headerDetails: {
      title: "Quick Access Menu",
      description: "Access anything you need in just few clicks",
      SvgComponent: QuickAccessSVG
    },
    servicesList: ["Product On/Off", "Taxes and Charges", "Integrations", "Web POS Dashboard", "Logs", "Outlet Manager", "Offer Manager", "Logs Manager", "Analytics Dashboard"],
    height: "430px",
    width: "380px",
    onClick: {
      Demo
    }
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const ie=["Default"];export{o as Default,ie as __namedExportsOrder,te as default};
