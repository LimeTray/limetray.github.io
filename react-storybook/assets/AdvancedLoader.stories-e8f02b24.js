import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as L}from"./index-76fb7be0.js";import{S}from"./Button-28b2e7e6.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-a0d6c822.js";import"./getElementType-ead3b972.js";import"./childrenUtils-25a53b67.js";import"./Icon-84915bf2.js";import"./Label-fd2b2d7f.js";import"./includes-ae816ee0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-194f1060.js";import"./Portal-73b13d0f.js";import"./map-6332fbaf.js";const b=""+new URL("pending-bf6253e5.png",import.meta.url).href,v=""+new URL("publishError-0a25f147.png",import.meta.url).href,T=""+new URL("publishSuccess-fd1e1a9a.png",import.meta.url).href;class o extends L.Component{constructor(e){super(e),this.state={}}render(){const{loaderStatus:e,loadingText:f,doneLabel:x,onOk:h}=this.props;return s.jsxs("div",{className:"publish-container",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"display-inline",children:s.jsx("img",{src:e==="pending"?b:e==="success"?T:e==="error"?v:"",alt:"penidig"})}),s.jsxs("div",{className:"display-inline status",children:["Status:",s.jsx("span",{style:{marginLeft:"6px",color:e==="pending"?"#297DE0":e==="success"?"#008000":e==="error"?"#CF2A27":"#000000"},children:e==="pending"?"Pending":e==="success"?"Success":e==="error"?"Failed":null})]})]}),s.jsx("div",{className:"display-inline publish-text",children:f}),s.jsx("div",{className:"display-inline text-center",children:s.jsx(S,{className:"blue-btn ok-btn-width",content:x,primary:!0,disabled:e==="pending",onClick:h})})]})}}o.defaultProps={loaderStatus:"success",loadingText:"Loader",doneLabel:"OK",onOk:()=>{console.log("ok works")}};const y=o;o.__docgenInfo={description:"",methods:[],displayName:"AdvanceLoader",props:{loaderStatus:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"success"',computed:!1}},loadingText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loader"',computed:!1}},doneLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"OK"',computed:!1}},onOk:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:`() => {
  console.log("ok works");
}`,computed:!1}}}};const G={component:y,title:"AdvancedLoader",tags:["autodocs"]},r={args:{loaderStatus:"pending",loadingText:"Loading pending"}},a={args:{loaderStatus:"success",loadingText:"Loading successful"}},n={args:{loaderStatus:"error",loadingText:"Loading failed"}};var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    loaderStatus: "pending",
    loadingText: "Loading pending"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    loaderStatus: "success",
    loadingText: "Loading successful"
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    loaderStatus: "error",
    loadingText: "Loading failed"
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const H=["Pending","Success","Failed"];export{n as Failed,r as Pending,a as Success,H as __namedExportsOrder,G as default};
