import{j as e}from"./jsx-runtime-8406ef1e.js";import{L as S}from"./ltButton-9eac04b0.js";import{I as t}from"./Icon-33b7fdc8.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./Button-13ce16b7.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Label-32ef75b5.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-9497f5af.js";import"./includes-646822e3.js";import"./Portal-25fcd847.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const P={component:S,title:"Button",tags:["autodocs"]},E={borderRadius:"50px",border:"1px solid rgba(209, 213, 219, 1)",backgroundColor:"white"},r=()=>{alert("Button clicked")},n={args:{label:"default",onClick:r}},o={args:{label:"click me",size:"medium",onClick:r,customStyles:E,leftElement:e.jsx(t,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:e.jsx(t,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},l={args:{label:"Apply filter",size:"small",onClick:r,transparent:!0,leftElement:e.jsx(t,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:e.jsx(t,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},a={args:{label:"Disabled Button",size:"small",onClick:r,disabled:!0}},s={args:{label:"Select Categories",size:"small",onclick:r,customStyles:E,alignItemCenter:!0,leftElement:e.jsx(t,{fitted:!0,name:"plus",size:"small",color:"green"}),rightElement:e.jsx("span",{style:{color:"white",backgroundColor:"red",paddingRight:"5px",paddingLeft:"5px",borderRadius:"90%"},children:"14"})}};var i,m,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "default",
    onClick: handleClick
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "click me",
    size: "medium",
    onClick: handleClick,
    customStyles: customStyles,
    leftElement: <Icon fitted name="filter" size="small" color="green" />,
    rightElement: <Icon fitted name="arrow right" size="small" color="blue" />
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Apply filter",
    size: "small",
    onClick: handleClick,
    transparent: true,
    leftElement: <Icon fitted name="filter" size="small" color="green" />,
    rightElement: <Icon fitted name="arrow right" size="small" color="blue" />
  }
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,k,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    size: "small",
    onClick: handleClick,
    disabled: true
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var z,x,B;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Select Categories",
    size: "small",
    onclick: handleClick,
    customStyles: customStyles,
    alignItemCenter: true,
    leftElement: <Icon fitted name="plus" size="small" color="green" />,
    rightElement: <span style={{
      color: "white",
      backgroundColor: "red",
      paddingRight: "5px",
      paddingLeft: "5px",
      borderRadius: "90%"
    }}>
        14
      </span>
  }
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const Q=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton","ButtonWithLeftAndRightElement"];export{o as ButtonWithIcon,s as ButtonWithLeftAndRightElement,l as ButtonWithTransparentBackground,n as Default,a as DisabledButton,Q as __namedExportsOrder,P as default};
