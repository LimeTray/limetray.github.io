import{j as t}from"./jsx-runtime-8ae9c9ad.js";import{R as _}from"./index-04c7fd94.js";import{g as R,r as D}from"./styled-components.browser.esm-f4af7a4c.js";import{T as V}from"./TextArea-be459a84.js";import{t as e}from"./config-d270d9b6.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./get-2a449dd5.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./index-4348461f.js";const W=R(V)`
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
`,j=({outlineColor:r=e.colors.primary,className:d,rows:u=3,...c})=>t.jsx(D,{theme:e,children:t.jsx(W,{...c,className:d,rows:u,$outlineColor:r})}),p=j;j.__docgenInfo={description:"",methods:[],displayName:"LtTextArea",props:{outlineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#00CD7C"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},rows:{defaultValue:{value:"3",computed:!1},required:!1}},composes:["Omit"]};const G={title:"LtTextArea",component:p,tags:["autodocs"],argTypes:{placeholder:{control:"text"},outlineColor:{control:"color"},disabled:{control:"boolean"},rows:{control:"number"}}},n=r=>t.jsx("div",{style:{width:"360px"},children:t.jsx(p,{...r})}),o=n.bind({});o.args={placeholder:"Type your message here"};const a=n.bind({});a.args={placeholder:"Focus to see custom outline",outlineColor:"#7b39ed"};const s=n.bind({});s.args={placeholder:"Tell us more",rows:6};const l=n.bind({});l.args={placeholder:"Disabled text area",disabled:!0};const i=()=>{const[r,d]=_.useState("");return t.jsxs("div",{style:{width:"360px"},children:[t.jsx(p,{value:r,placeholder:"Controlled text area",onChange:(u,c)=>d(String(c.value||""))}),t.jsxs("p",{style:{marginTop:"10px"},children:["Current value: ",r]})]})};i.__docgenInfo={description:"",methods:[],displayName:"ControlledTextArea"};var m,x,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  width: '360px'
}}>
    <LtTextArea {...args} />
  </div>`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,v,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
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
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const J=["Default","WithCustomOutlineColor","WithMoreRows","Disabled","ControlledTextArea"];export{i as ControlledTextArea,o as Default,l as Disabled,a as WithCustomOutlineColor,s as WithMoreRows,J as __namedExportsOrder,G as default};
