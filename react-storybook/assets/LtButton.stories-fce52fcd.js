import{j as r}from"./jsx-runtime-8406ef1e.js";import{L as O}from"./ltButton-68514868.js";import{I as o}from"./Icon-7990d6af.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./Button-4d423377.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";import"./styled-components.browser.esm-9c5c32f2.js";import"./config-43c6afbd.js";import"./index-59c1fcc1.js";import"./Dropdown-50ab2943.js";import"./without-5fd6c2fa.js";import"./isEmpty-38656364.js";import"./deburr-dcf23c3e.js";import"./pick-19a3cad7.js";import"./_baseSet-c85e4edd.js";import"./index-d2fcf037.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-5d45ebc5.js";import"./index-c869fee8.js";const Se={component:O,title:"Button",tags:["autodocs"]},P={borderRadius:"50px",border:"1px solid rgba(209, 213, 219, 1)",backgroundColor:"white"},e=()=>{alert("Button clicked")},t={args:{label:"default",onClick:e}},n={args:{label:"click me",size:"medium",onClick:e,customStyles:P,leftElement:r.jsx(o,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(o,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},l={args:{label:"Apply filter",size:"small",onClick:e,transparent:!0,leftElement:r.jsx(o,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(o,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},s={args:{label:"Disabled Button",size:"small",onClick:e,disabled:!0}},a={args:{label:"Select Categories",size:"small",onClick:e,customStyles:P,alignItemCenter:!0,leftElement:r.jsx(o,{fitted:!0,name:"plus",size:"small",color:"green"}),rightElement:r.jsx("span",{style:{color:"white",backgroundColor:"red",paddingRight:"5px",paddingLeft:"5px",borderRadius:"90%"},children:"4"})}},i={args:{label:"Styled Button",size:"small",onClick:e,backgroundColor:"#7b39ed",color:"#ffffff",padding:"12px 24px",width:"200px",hoverBackgroundColor:"#8541fa",hoverColor:"#ffffff",alignItemCenter:!0}},d={args:{label:"Custom Border",size:"small",onClick:e,border:!0,borderStyles:{width:"2px",type:"dashed",color:"#7b39ed",radius:"8px"}}},c={args:{label:"Publish",size:"medium",onClick:e,backgroundColor:"#1f2947",color:"#ffffff",hoverBackgroundColor:"#283456",hoverColor:"#ffffff",padding:"14px 24px",border:!0,borderStyles:{width:"1px",type:"solid",color:"#1f2947",radius:"8px"},menuDropdownOptions:[{text:"Publish now",id:"publish-now"},{text:"Schedule publish",id:"schedule-publish"},{text:"Save as draft",id:"save-as-draft"}],onMenuDropdownClick:(A,$)=>alert(`Menu option ${A}: ${$.text}`),menuDropdownPointing:"top left",menuDropdownHoverStyles:{backgroundColor:"#eef2ff",contentColor:"#1f2947"}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "default",
    onClick: handleClick
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "click me",
    size: "medium",
    onClick: handleClick,
    customStyles: customStyles,
    leftElement: <Icon fitted name="filter" size="small" color="green" />,
    rightElement: <Icon fitted name="arrow right" size="small" color="blue" />
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,C,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Apply filter",
    size: "small",
    onClick: handleClick,
    transparent: true,
    leftElement: <Icon fitted name="filter" size="small" color="green" />,
    rightElement: <Icon fitted name="arrow right" size="small" color="blue" />
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var x,B,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    size: "small",
    onClick: handleClick,
    disabled: true
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var w,z,y;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Select Categories",
    size: "small",
    onClick: handleClick,
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
        4
      </span>
  }
}`,...(y=(z=a.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var E,v,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var I,W,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var R,L,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Publish",
    size: "medium",
    onClick: handleClick,
    backgroundColor: "#1f2947",
    color: "#ffffff",
    hoverBackgroundColor: "#283456",
    hoverColor: "#ffffff",
    padding: "14px 24px",
    border: true,
    borderStyles: {
      width: "1px",
      type: "solid",
      color: "#1f2947",
      radius: "8px"
    },
    menuDropdownOptions: [{
      text: "Publish now",
      id: "publish-now"
    }, {
      text: "Schedule publish",
      id: "schedule-publish"
    }, {
      text: "Save as draft",
      id: "save-as-draft"
    }],
    onMenuDropdownClick: (index: number, option: {
      text: string;
    }) => alert(\`Menu option \${index}: \${option.text}\`),
    menuDropdownPointing: "top left",
    menuDropdownHoverStyles: {
      backgroundColor: "#eef2ff",
      contentColor: "#1f2947"
    }
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const we=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton","ButtonWithLeftAndRightElement","StyledButton","ButtonWithCustomBorder","SplitButtonWithMenu"];export{d as ButtonWithCustomBorder,n as ButtonWithIcon,a as ButtonWithLeftAndRightElement,l as ButtonWithTransparentBackground,t as Default,s as DisabledButton,c as SplitButtonWithMenu,i as StyledButton,we as __namedExportsOrder,Se as default};
