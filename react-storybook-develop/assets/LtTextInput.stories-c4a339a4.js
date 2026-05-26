import{j as o}from"./jsx-runtime-8ae9c9ad.js";import{R as j}from"./index-04c7fd94.js";import{g as O,r as V}from"./styled-components.browser.esm-f4af7a4c.js";import{I as W}from"./Input-4003f5c3.js";import{t as e}from"./config-d270d9b6.js";import{L as R}from"./index-c3b335ed.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./includes-ceab992c.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./map-d105d6f1.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./Button-8d24c33b.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";const q=O(W)`
  &&& {
    position: relative;
    width: 100%;
  }

  &&& > input {
    min-height: 40px;
    padding: ${e.spacing.sm} ${e.spacing.sm};
    border: 1px solid ${e.colors.border};
    border-radius: ${e.borderRadius.large};
    background-color: ${e.colors.white};
    color: ${e.colors.text};
    font-size: ${e.typography.body.fontSize};
    font-weight: ${e.typography.body.fontWeight};
    line-height: ${e.typography.body.lineHeight};
    box-shadow: none;
  }

  &&& > input::placeholder {
    color: ${e.colors.muted};
  }

  &&& > .icon {
    cursor: default;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    height: 100%;
    width: 2.7em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-align: center;
    color: ${e.colors.muted};
    opacity: 1;
    pointer-events: none;
  }

  &&&[class*='left icon'] > .icon {
    right: auto;
    left: 1px;
  }

  &&&[class*='left icon'] > input {
    padding-left: 2.7em;
  }

  &&& > input:focus {
    outline: 2px solid ${({$outlineColor:t})=>t};
    outline-offset: 2px;
    box-shadow: none;
  }
`,N=({leftIcon:t,outlineColor:p=e.colors.primary,className:d,type:c="text",..._})=>{const E=t?j.cloneElement(t,{className:[t.props.className,"icon"].filter(Boolean).join(" ")}):void 0;return o.jsx(V,{theme:e,children:o.jsx(q,{..._,className:d,type:c,fluid:!0,icon:E,iconPosition:t?"left":void 0,$outlineColor:p})})},u=N;N.__docgenInfo={description:"",methods:[],displayName:"LtTextInput",props:{leftIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},outlineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#00CD7C"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const ie={title:"LtTextInput",component:u,tags:["autodocs"],argTypes:{placeholder:{control:"text"},outlineColor:{control:"color"},disabled:{control:"boolean"},leftIcon:{control:!1}}},l=t=>o.jsx("div",{style:{width:"360px"},children:o.jsx(u,{...t})}),r=l.bind({});r.args={placeholder:"Type here"};const s=l.bind({});s.args={placeholder:"Search",leftIcon:o.jsx(R,{useReactIcon:!0,reactIconName:"LuSearch",reactIconSet:"lu",color:"#767676",size:"small",fitted:!0})};const n=l.bind({});n.args={placeholder:"Focus to see custom outline",outlineColor:"#7b39ed",leftIcon:o.jsx(R,{useReactIcon:!0,reactIconName:"LuSearch",reactIconSet:"lu",color:"#767676",size:"small",fitted:!0})};const a=l.bind({});a.args={type:"number",placeholder:"Enter a number",outlineColor:"#7b39ed"};const i=()=>{const[t,p]=j.useState("");return o.jsxs("div",{style:{width:"360px"},children:[o.jsx(u,{value:t,placeholder:"Controlled input",onChange:(d,c)=>p(c.value)}),o.jsxs("p",{style:{marginTop:"10px"},children:["Current value: ",t]})]})};i.__docgenInfo={description:"",methods:[],displayName:"ControlledInput"};var m,h,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,f,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var y,v,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var C,T,L;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(L=(T=a.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var w,S,$;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <div style={{
    width: '360px'
  }}>
      <LtTextInput value={value} placeholder="Controlled input" onChange={(_event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => setValue(data.value)} />

      <p style={{
      marginTop: "10px"
    }}>Current value: {value}</p>
    </div>;
}`,...($=(S=i.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const le=["Default","WithLeftIcon","WithCustomOutlineColor","NumberInput","ControlledInput"];export{i as ControlledInput,r as Default,a as NumberInput,n as WithCustomOutlineColor,s as WithLeftIcon,le as __namedExportsOrder,ie as default};
