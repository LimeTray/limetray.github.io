import{j as r}from"./jsx-runtime-8ae9c9ad.js";import{L as O}from"./ltButton-c2816c4f.js";import{I as o}from"./Icon-6945f610.js";import"./index-04c7fd94.js";import"./_commonjsHelpers-725317a4.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./styled-components.browser.esm-f4af7a4c.js";import"./index-bbb1e5b1.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./isEmpty-0f216811.js";import"./deburr-bb2546ff.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-9f7569d5.js";import"./config-d270d9b6.js";import"./index-c3b335ed.js";const ke={component:O,title:"Button",tags:["autodocs"]},P={borderRadius:"50px",border:"1px solid rgba(209, 213, 219, 1)",backgroundColor:"white"},e=()=>{alert("Button clicked")},t={args:{label:"default",onClick:e}},n={args:{label:"click me",size:"medium",onClick:e,customStyles:P,leftElement:r.jsx(o,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(o,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},l={args:{label:"Apply filter",size:"small",onClick:e,transparent:!0,leftElement:r.jsx(o,{fitted:!0,name:"filter",size:"small",color:"green"}),rightElement:r.jsx(o,{fitted:!0,name:"arrow right",size:"small",color:"blue"})}},s={args:{label:"Disabled Button",size:"small",onClick:e,disabled:!0}},a={args:{label:"Select Categories",size:"small",onClick:e,customStyles:P,alignItemCenter:!0,leftElement:r.jsx(o,{fitted:!0,name:"plus",size:"small",color:"green"}),rightElement:r.jsx("span",{style:{color:"white",backgroundColor:"red",paddingRight:"5px",paddingLeft:"5px",borderRadius:"90%"},children:"14"})}},i={args:{label:"Styled Button",size:"small",onClick:e,backgroundColor:"#7b39ed",color:"#ffffff",padding:"12px 24px",width:"200px",hoverBackgroundColor:"#8541fa",hoverColor:"#ffffff",alignItemCenter:!0}},d={args:{label:"Custom Border",size:"small",onClick:e,border:!0,borderStyles:{width:"2px",type:"dashed",color:"#7b39ed",radius:"8px"}}},c={args:{label:"Publish",size:"medium",onClick:e,backgroundColor:"#1f2947",color:"#ffffff",hoverBackgroundColor:"#283456",hoverColor:"#ffffff",padding:"14px 24px",border:!0,borderStyles:{width:"1px",type:"solid",color:"#1f2947",radius:"8px"},menuDropdownOptions:[{text:"Publish now",id:"publish-now"},{text:"Schedule publish",id:"schedule-publish"},{text:"Save as draft",id:"save-as-draft"}],onMenuDropdownClick:(A,$)=>alert(`Menu option ${A}: ${$.text}`),menuDropdownHoverStyles:{backgroundColor:"#eef2ff",contentColor:"#1f2947"},menuDropdownPointing:"top right"}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        14
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
    menuDropdownHoverStyles: {
      backgroundColor: "#eef2ff",
      contentColor: "#1f2947"
    },
    menuDropdownPointing: "top right"
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const xe=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton","ButtonWithLeftAndRightElement","StyledButton","ButtonWithCustomBorder","SplitButtonWithMenu"];export{d as ButtonWithCustomBorder,n as ButtonWithIcon,a as ButtonWithLeftAndRightElement,l as ButtonWithTransparentBackground,t as Default,s as DisabledButton,c as SplitButtonWithMenu,i as StyledButton,xe as __namedExportsOrder,ke as default};
