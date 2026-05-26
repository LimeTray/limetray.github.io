import{j as r}from"./jsx-runtime-8ae9c9ad.js";import{L as D}from"./ltButton-7f1666b9.js";import{I as t}from"./Icon-6945f610.js";import"./index-04c7fd94.js";import"./_commonjsHelpers-725317a4.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./styled-components.browser.esm-f4af7a4c.js";const re={component:D,title:"Button",tags:["autodocs"]},L={borderRadius:"50px",border:"1px solid rgba(209, 213, 219, 1)",backgroundColor:"white"},e=()=>{alert("Button clicked")},o={args:{label:"default",onClick:e}},n={args:{label:"click me",size:"medium",onClick:e,customStyles:L,leftElement:r.jsx(t,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(t,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},l={args:{label:"Apply filter",size:"small",onClick:e,transparent:!0,leftElement:r.jsx(t,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(t,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},a={args:{label:"Disabled Button",size:"small",onClick:e,disabled:!0}},s={args:{label:"Select Categories",size:"small",onclick:e,customStyles:L,alignItemCenter:!0,leftElement:r.jsx(t,{fitted:!0,name:"plus",size:"small",color:"green"}),rightElement:r.jsx("span",{style:{color:"white",backgroundColor:"red",paddingRight:"5px",paddingLeft:"5px",borderRadius:"90%"},children:"14"})}},i={args:{label:"Styled Button",size:"small",onClick:e,backgroundColor:"#7b39ed",color:"#ffffff",padding:"12px 24px",width:"200px",hoverBackgroundColor:"#8541fa",hoverColor:"#ffffff",alignItemCenter:!0}},c={args:{label:"Custom Border",size:"small",onClick:e,border:!0,borderStyles:{width:"2px",type:"dashed",color:"#7b39ed",radius:"8px"}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "default",
    onClick: handleClick
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const te=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton","ButtonWithLeftAndRightElement","StyledButton","ButtonWithCustomBorder"];export{c as ButtonWithCustomBorder,n as ButtonWithIcon,s as ButtonWithLeftAndRightElement,l as ButtonWithTransparentBackground,o as Default,a as DisabledButton,i as StyledButton,te as __namedExportsOrder,re as default};
