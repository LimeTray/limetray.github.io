import{j as o}from"./jsx-runtime-8406ef1e.js";import{R as _}from"./index-ad58220e.js";import{d as R,o as D}from"./styled-components.browser.esm-675ea4f2.js";import{T as V}from"./TextArea-59eb91fb.js";import{t as e}from"./config-43c6afbd.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./get-9dca3307.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";const W=R(V)`
  &&& {
    width: 100%;
    min-height: 96px;
    padding: ${e.spacing.sm} ${e.spacing.sm};
    border: 1px solid ${e.colors.border};
    border-radius: ${e.borderRadius.large};
    background-color: ${e.colors.white};
    color: ${e.colors.text};
    font-size: ${e.typography.body.fontSize};
    font-weight: ${e.typography.body.fontWeight};
    line-height: ${e.typography.body.lineHeight};
    box-shadow: none;
    resize: vertical;
  }

  &&&::placeholder {
    color: ${e.colors.muted};
  }

  &&&:focus {
    outline: 2px solid ${({$outlineColor:r})=>r};
    outline-offset: 2px;
    box-shadow: none;
  }
`,j=({outlineColor:r=e.colors.primary,className:d,rows:u=3,...p})=>o.jsx(D,{theme:e,children:o.jsx(W,{...p,className:d,rows:u,$outlineColor:r})}),c=j;j.__docgenInfo={description:"",methods:[],displayName:"LtTextArea",props:{outlineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#00CD7C"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},rows:{defaultValue:{value:"3",computed:!1},required:!1}},composes:["Omit"]};const K={title:"LtTextArea",component:c,tags:["autodocs"],argTypes:{placeholder:{control:"text"},outlineColor:{control:"color"},disabled:{control:"boolean"},rows:{control:"number"}}},n=r=>o.jsx("div",{style:{width:"360px"},children:o.jsx(c,{...r})}),t=n.bind({});t.args={placeholder:"Type your message here"};const a=n.bind({});a.args={placeholder:"Focus to see custom outline",outlineColor:"#7b39ed"};const s=n.bind({});s.args={placeholder:"Tell us more",rows:6};const l=n.bind({});l.args={placeholder:"Disabled text area",disabled:!0};const i=()=>{const[r,d]=_.useState("");return o.jsxs("div",{style:{width:"360px"},children:[o.jsx(c,{value:r,placeholder:"Controlled text area",onChange:(u,p)=>d(String(p.value||""))}),o.jsxs("p",{style:{marginTop:"10px"},children:["Current value: ",r]})]})};i.__docgenInfo={description:"",methods:[],displayName:"ControlledTextArea"};var m,x,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextArea {...args} />
  </div>`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,v,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextArea {...args} />
  </div>`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,f,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextArea {...args} />
  </div>`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var C,w,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextArea {...args} />
  </div>`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var $,L,S;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <div style={{
    width: '360px'
  }}>
      <LtTextArea value={value} placeholder="Controlled text area" onChange={(_event: React.ChangeEvent<HTMLTextAreaElement>, data: TextAreaProps) => setValue(String(data.value || ''))} />

      <p style={{
      marginTop: '10px'
    }}>Current value: {value}</p>
    </div>;
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Q=["Default","WithCustomOutlineColor","WithMoreRows","Disabled","ControlledTextArea"];export{i as ControlledTextArea,t as Default,l as Disabled,a as WithCustomOutlineColor,s as WithMoreRows,Q as __namedExportsOrder,K as default};
