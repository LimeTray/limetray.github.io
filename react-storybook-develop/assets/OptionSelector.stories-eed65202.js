import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{L as H}from"./ltCheckBox-29163e21.js";import{L as K}from"./ltRadio-5ee3d22f.js";import{C as $}from"./Card-6ba48e0e.js";import"./index-04c7fd94.js";import"./_commonjsHelpers-725317a4.js";import"./Checkbox-ab34d2c3.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./_baseSet-aac0c625.js";import"./clsx.m-b06f1f65.js";import"./factories-559e568f.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./index-4348461f.js";import"./styled-components.browser.esm-f4af7a4c.js";import"./ThemeContext-ab9e94eb.js";import"./config-d270d9b6.js";import"./Radio-4e8451a7.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Label-c1a3398d.js";import"./Icon-6945f610.js";import"./Portal-f57c5e74.js";import"./map-d105d6f1.js";const z=({option:A,checked:m,onChange:B,type:l,className:F,style:G})=>{const{key:u,text:h,value:d,childElement:t}=A||{key:"",text:"",value:""},k=Q=>{B(d)};return e.jsxs("div",{className:F,style:G,children:[l==="radio"&&e.jsx(K,{className:"lt-radio",label:t||h,value:d,checked:m,onChange:k},u),l==="checkbox"&&e.jsx(H,{label:t||h,value:d,checked:m,onChange:k},u)]})},M=z;z.__docgenInfo={description:"",methods:[],displayName:"OptionSelector",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  key: string;
  text: string;
  value: string;
  // Optional property for custom child element
  childElement?: JSX.Element;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"childElement",value:{name:"JSX.Element",required:!1}}]}},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"}]},description:""},color:{required:!1,tsType:{name:"SemanticCOLORS"},description:""},icon:{required:!1,tsType:{name:"SemanticICONS"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Se={title:"OptionSelector",component:M,argTypes:{options:{control:{type:"object"}}}},o={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"radio"}},r={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!0,type:"radio"}},n={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"checkbox"}},a={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!0,type:"checkbox"}},i={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx($,{header:"Custom Card"})},checked:!1,type:"checkbox"}},s={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx("span",{children:"Custom Element for Option 2"})},checked:!1,type:"checkbox"}},c={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx($,{header:"Custom Card"})},checked:!0,type:"checkbox"}},p={args:{option:{key:"3",text:"Option 3",value:"option3"},checked:!0,type:"radio",className:"custom-radio",style:{backgroundColor:"lightblue",padding:"10px"}}};var y,x,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: false,
    type: 'radio'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,v,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: true,
    type: 'radio'
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var O,f,S;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: false,
    type: 'checkbox'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var E,R,q;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: true,
    type: 'checkbox'
  }
}`,...(q=(R=a.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var j,T,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    option: {
      key: '2',
      text: 'Option 2',
      value: 'option2',
      childElement: <Card header="Custom Card" />
    },
    checked: false,
    type: 'checkbox'
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,W,_;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    option: {
      key: '2',
      text: 'Option 2',
      value: 'option2',
      childElement: <span>Custom Element for Option 2</span>
    },
    checked: false,
    type: 'checkbox'
  }
}`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var L,w,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    option: {
      key: '2',
      text: 'Option 2',
      value: 'option2',
      childElement: <Card header="Custom Card" />
    },
    checked: true,
    type: 'checkbox'
  }
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var J,P,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    option: {
      key: '3',
      text: 'Option 3',
      value: 'option3'
    },
    checked: true,
    type: 'radio',
    className: 'custom-radio',
    style: {
      backgroundColor: 'lightblue',
      padding: '10px'
    }
  }
}`,...(X=(P=p.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};const Ee=["DefaultRadio","RadioChecked","DefaultCheckbox","CheckboxChecked","WithCustomChildElementRadio","WithCustomChildElementCheckbox","WithCustomChildElementCheckboxChecked","StyledDynamicRadio"];export{a as CheckboxChecked,n as DefaultCheckbox,o as DefaultRadio,r as RadioChecked,p as StyledDynamicRadio,s as WithCustomChildElementCheckbox,c as WithCustomChildElementCheckboxChecked,i as WithCustomChildElementRadio,Ee as __namedExportsOrder,Se as default};
