import{j as r}from"./jsx-runtime-8406ef1e.js";import{L as D}from"./ltButton-9d7d3ed4.js";import{I as t}from"./Icon-7990d6af.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./Button-4d423377.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";import"./styled-components.browser.esm-675ea4f2.js";const ne={component:D,title:"Button",tags:["autodocs"]},L={borderRadius:"50px",border:"1px solid rgba(209, 213, 219, 1)",backgroundColor:"white"},e=()=>{alert("Button clicked")},o={args:{label:"default",onClick:e}},n={args:{label:"click me",size:"medium",onClick:e,customStyles:L,leftElement:r.jsx(t,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(t,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},l={args:{label:"Apply filter",size:"small",onClick:e,transparent:!0,leftElement:r.jsx(t,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(t,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},a={args:{label:"Disabled Button",size:"small",onClick:e,disabled:!0}},s={args:{label:"Select Categories",size:"small",onclick:e,customStyles:L,alignItemCenter:!0,leftElement:r.jsx(t,{fitted:!0,name:"plus",size:"small",color:"green"}),rightElement:r.jsx("span",{style:{color:"white",backgroundColor:"red",paddingRight:"5px",paddingLeft:"5px",borderRadius:"90%"},children:"14"})}},i={args:{label:"Styled Button",size:"small",onClick:e,backgroundColor:"#7b39ed",color:"#ffffff",padding:"12px 24px",width:"200px",hoverBackgroundColor:"#8541fa",hoverColor:"#ffffff",alignItemCenter:!0}},c={args:{label:"Custom Border",size:"small",onClick:e,border:!0,borderStyles:{width:"2px",type:"dashed",color:"#7b39ed",radius:"8px"}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "default",
    onClick: handleClick
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "click me",
    size: "medium",
    onClick: handleClick,
    customStyles: customStyles,
    leftElement: <Icon fitted name="filter" size="small" color="green" />,
    rightElement: <Icon fitted name="arrow right" size="small" color="blue" />
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Apply filter",
    size: "small",
    onClick: handleClick,
    transparent: true,
    leftElement: <Icon fitted name="filter" size="small" color="green" />,
    rightElement: <Icon fitted name="arrow right" size="small" color="blue" />
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,B,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    size: "small",
    onClick: handleClick,
    disabled: true
  }
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var z,S,y;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var E,I,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Styled Button",
    size: "small",
    onClick: handleClick,
    backgroundColor: "#7b39ed",
    color: "#ffffff",
    padding: "12px 24px",
    width: "200px",
    hoverBackgroundColor: "#8541fa",
    hoverColor: "#ffffff",
    alignItemCenter: true
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var j,R,W;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Custom Border",
    size: "small",
    onClick: handleClick,
    border: true,
    borderStyles: {
      width: "2px",
      type: "dashed",
      color: "#7b39ed",
      radius: "8px"
    }
  }
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const le=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton","ButtonWithLeftAndRightElement","StyledButton","ButtonWithCustomBorder"];export{c as ButtonWithCustomBorder,n as ButtonWithIcon,s as ButtonWithLeftAndRightElement,l as ButtonWithTransparentBackground,o as Default,a as DisabledButton,i as StyledButton,le as __namedExportsOrder,ne as default};
