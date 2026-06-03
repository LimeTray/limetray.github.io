import{j as r}from"./jsx-runtime-8ae9c9ad.js";import{R as k}from"./index-04c7fd94.js";import{g as A,r as G}from"./styled-components.browser.esm-b57a6336.js";import{I as J}from"./Input-4003f5c3.js";import{t}from"./config-d270d9b6.js";import{L as B}from"./index-9e8f50bb.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./includes-ceab992c.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./map-d105d6f1.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./Button-8d24c33b.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";const K=A(J)`
  &&& {
    position: relative;
    width: 100%;
  }

  &&& > input {
    border: 1px solid ${t.colors.border};
    border-radius: ${t.borderRadius.large};
    background-color: ${t.colors.white};
    color: ${t.colors.text};
    font-size: inherit;
    font-weight: ${t.typography.body.fontWeight};
    line-height: ${t.typography.body.lineHeight};
    box-shadow: none;
  }

  &&& > input::placeholder {
    color: ${t.colors.muted};
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
    color: ${t.colors.muted};
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
    border-color: ${t.colors.border};
    outline: 2px solid ${({$outlineColor:e})=>e};
    outline-offset: 2px;
    box-shadow: none;
  }
`,F=({leftIcon:e,outlineColor:u=t.colors.primary,className:h,type:m="text",...M})=>{const P=e?k.cloneElement(e,{className:[e.props.className,"icon"].filter(Boolean).join(" ")}):void 0;return r.jsx(G,{theme:t,children:r.jsx(K,{...M,className:h,type:m,fluid:!0,icon:P,iconPosition:e?"left":void 0,$outlineColor:u})})},g=F;F.__docgenInfo={description:"",methods:[],displayName:"LtTextInput",props:{leftIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},outlineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#00CD7C"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const Ie={title:"LtTextInput",component:g,tags:["autodocs"],argTypes:{placeholder:{control:"text"},outlineColor:{control:"color"},disabled:{control:"boolean"},size:{control:"select",options:["mini","small","large","big","huge","massive"]},leftIcon:{control:!1}}},o=e=>r.jsx("div",{style:{width:"360px"},children:r.jsx(g,{...e})}),s=o.bind({});s.args={placeholder:"Type here"};const a=o.bind({});a.args={placeholder:"Very small input",size:"mini"};const n=o.bind({});n.args={placeholder:"Small input",size:"small"};const i=o.bind({});i.args={placeholder:"Large input",size:"large"};const l=o.bind({});l.args={placeholder:"Search",leftIcon:r.jsx(B,{useReactIcon:!0,reactIconName:"LuSearch",reactIconSet:"lu",color:"#767676",size:"small",fitted:!0})};const c=o.bind({});c.args={placeholder:"Focus to see custom outline",outlineColor:"#7b39ed",leftIcon:r.jsx(B,{useReactIcon:!0,reactIconName:"LuSearch",reactIconSet:"lu",color:"#767676",size:"small",fitted:!0})};const p=o.bind({});p.args={type:"number",placeholder:"Enter a number",outlineColor:"#7b39ed"};const d=()=>{const[e,u]=k.useState("");return r.jsxs("div",{style:{width:"360px"},children:[r.jsx(g,{value:e,placeholder:"Controlled input",onChange:(h,m)=>u(m.value)}),r.jsxs("p",{style:{marginTop:"10px"},children:["Current value: ",e]})]})};d.__docgenInfo={description:"",methods:[],displayName:"ControlledInput"};var x,f,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var I,y,b;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var L,C,T;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,w,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var R,$,N;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(N=($=l.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var _,E,V;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(V=(E=c.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var z,O,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextInput {...args} />
  </div>`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var q,D,H;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <div style={{
    width: '360px'
  }}>
      <LtTextInput value={value} placeholder="Controlled input" onChange={(_event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => setValue(data.value)} />

      <p style={{
      marginTop: "10px"
    }}>Current value: {value}</p>
    </div>;
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const ye=["Default","VerySmall","Small","Large","WithLeftIcon","WithCustomOutlineColor","NumberInput","ControlledInput"];export{d as ControlledInput,s as Default,i as Large,p as NumberInput,n as Small,a as VerySmall,c as WithCustomOutlineColor,l as WithLeftIcon,ye as __namedExportsOrder,Ie as default};
