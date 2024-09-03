import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{L as N}from"./ltButton-8a4ab908.js";import{I as s}from"./Icon-c71aa201.js";import{L as d}from"./ltCardV2-e5485308.js";import"./_commonjsHelpers-de833af9.js";import"./Button-4bb9fc92.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-5eda43f6.js";import"./getElementType-605cc275.js";import"./childrenUtils-eea4be66.js";import"./Label-4ead698f.js";import"./ModernAutoControlledComponent-1c638d94.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-54dd1e2d.js";import"./includes-d285d188.js";import"./Portal-1cdc15ec.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-81dc436d.js";import"./Header-0dde6c88.js";import"./Card-f9701def.js";const x=({hiddenCardText:a,collapsedCardText:f,hiddenContent:t,hiddenCardIcon:h,collapsedCardIcon:g,collapsedCardHoveredIcon:I})=>{const[n,T]=c.useState(!1),[r,i]=c.useState(!1),l=()=>{T(!n)},j=()=>{i(!0)},v=()=>{i(!1)};return e.jsx("div",{className:"collapsableCard-container",children:e.jsxs("div",{className:"collapsableCard-content",children:[n&&e.jsx("div",{className:"hidden-content",children:t==null?void 0:t.map((S,b)=>e.jsx("div",{className:"hidden-content-item",children:S},`hiddenContent_${b}`))}),e.jsx("div",{className:`collapsableCard-Content-div ${r?"hovered":""}`,onClick:l,onMouseEnter:j,onMouseLeave:v,children:e.jsx(N,{label:n?a:f,customStyles:{fontSize:"14px",padding:"17px",fontWeight:"400",color:"#6B7280",...r&&{color:"#00CD7C"}},onClick:l,transparent:!0,size:"small",rightElement:n?e.jsx(s,{name:h,size:"small",color:"green"}):r?e.jsx(s,{name:I,size:"small",color:"green"}):e.jsx(s,{name:g,size:"small",color:"green"})})})]})})},u=x;x.__docgenInfo={description:"",methods:[],displayName:"CollapsibleCard",props:{collapsedCardText:{required:!1,tsType:{name:"string"},description:""},hiddenCardText:{required:!1,tsType:{name:"string"},description:""},hiddenContent:{required:!1,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},hiddenCardIcon:{required:!1,tsType:{name:"union",raw:"SemanticICONS | undefined",elements:[{name:"SemanticICONS"},{name:"undefined"}]},description:""},collapsedCardIcon:{required:!1,tsType:{name:"union",raw:"SemanticICONS | undefined",elements:[{name:"SemanticICONS"},{name:"undefined"}]},description:""},collapsedCardHoveredIcon:{required:!1,tsType:{name:"union",raw:"SemanticICONS | undefined",elements:[{name:"SemanticICONS"},{name:"undefined"}]},description:""}}};const X={title:"CollapsibleCard",component:u,argTypes:{hiddenCardText:{control:"text"},collapsedCardText:{control:"text"},hiddenContent:{control:"object"},hiddenCardIcon:{control:"text"},collapsedCardIcon:{control:"text"},collapsedCardHoveredIcon:{control:"text"}},tags:["autodocs"]},y=a=>e.jsx("div",{style:{width:"100%",marginBottom:"20px",marginTop:"5px"},children:e.jsx(u,{...a})}),o=y.bind({});o.args={hiddenCardText:"Hidden Content",collapsedCardText:"Collapsed Content",hiddenContent:[e.jsx(d,{children:"Card Content 1"},"1"),e.jsx(d,{children:"Card Content 2"},"2"),e.jsx(d,{children:"Card Content 3"},"3")],hiddenCardIcon:"angle double up",collapsedCardIcon:"angle down",collapsedCardHoveredIcon:"angle double down"};var p,m,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  marginBottom: "20px",
  marginTop: "5px"
}}>
    <CollapsibleCard {...args} />
  </div>`,...(C=(m=o.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const Y=["Default"];export{o as Default,Y as __namedExportsOrder,X as default};