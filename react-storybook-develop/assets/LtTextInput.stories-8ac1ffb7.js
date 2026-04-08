import{j as o}from"./jsx-runtime-8406ef1e.js";import{R as j}from"./index-ad58220e.js";import{d as O,o as V}from"./styled-components.browser.esm-675ea4f2.js";import{I as W}from"./Input-94f4c1a5.js";import{t as e}from"./config-d270d9b6.js";import{L as R}from"./index-f03014ac.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-c2454020.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./index-4fee7e45.js";import"./map-db19bd84.js";import"./childrenUtils-250e70c5.js";import"./htmlPropsUtils-25182749.js";import"./Button-97fd5a94.js";import"./Icon-5cfe3eb1.js";import"./Label-11060fec.js";import"./Portal-86734c92.js";const q=O(W)`
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
`,N=({leftIcon:t,outlineColor:c=e.colors.primary,className:d,type:p="text",..._})=>{const E=t?j.cloneElement(t,{className:[t.props.className,"icon"].filter(Boolean).join(" ")}):void 0;return o.jsx(V,{theme:e,children:o.jsx(q,{..._,className:d,type:p,fluid:!0,icon:E,iconPosition:t?"left":void 0,$outlineColor:c})})},u=N;N.__docgenInfo={description:"",methods:[],displayName:"LtTextInput",props:{leftIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},outlineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#00CD7C"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const ne={title:"LtTextInput",component:u,tags:["autodocs"],argTypes:{placeholder:{control:"text"},outlineColor:{control:"color"},disabled:{control:"boolean"},leftIcon:{control:!1}}},l=t=>o.jsx("div",{style:{width:"360px"},children:o.jsx(u,{...t})}),r=l.bind({});r.args={placeholder:"Type here"};const s=l.bind({});s.args={placeholder:"Search",leftIcon:o.jsx(R,{useReactIcon:!0,reactIconName:"LuSearch",reactIconSet:"lu",color:"#767676",size:"small",fitted:!0})};const n=l.bind({});n.args={placeholder:"Focus to see custom outline",outlineColor:"#7b39ed",leftIcon:o.jsx(R,{useReactIcon:!0,reactIconName:"LuSearch",reactIconSet:"lu",color:"#767676",size:"small",fitted:!0})};const a=l.bind({});a.args={type:"number",placeholder:"Enter a number",outlineColor:"#7b39ed"};const i=()=>{const[t,c]=j.useState("");return o.jsxs("div",{style:{width:"360px"},children:[o.jsx(u,{value:t,placeholder:"Controlled input",onChange:(d,p)=>c(p.value)}),o.jsxs("p",{style:{marginTop:"10px"},children:["Current value: ",t]})]})};i.__docgenInfo={description:"",methods:[],displayName:"ControlledInput"};var m,h,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
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
}`,...($=(S=i.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const ae=["Default","WithLeftIcon","WithCustomOutlineColor","NumberInput","ControlledInput"];export{i as ControlledInput,r as Default,a as NumberInput,n as WithCustomOutlineColor,s as WithLeftIcon,ae as __namedExportsOrder,ne as default};
