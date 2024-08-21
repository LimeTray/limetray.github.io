import{j as e}from"./jsx-runtime-ffb262ed.js";import{L as H}from"./ltCheckBox-340f451f.js";import{L as K}from"./ltRadio-0dafada8.js";import{C as $}from"./Card-c01e2163.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Checkbox-4d253c68.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./_baseSet-c9884042.js";import"./factories-11ce6580.js";import"./getElementType-09c91dec.js";import"./ModernAutoControlledComponent-c1b6fd56.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-cb2aded5.js";import"./includes-ad1e3bca.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./Radio-283da465.js";import"./childrenUtils-9ef4481f.js";import"./Label-5ae2fa2f.js";import"./Icon-d9fe74ba.js";import"./Portal-1bd82a23.js";import"./map-e654f292.js";const z=({option:A,checked:l,onChange:B,type:m,className:F,style:G})=>{const{key:u,text:h,value:d,childElement:t}=A||{key:"",text:"",value:""},k=Q=>{B(d)};return e.jsxs("div",{className:F,style:G,children:[m==="radio"&&e.jsx(K,{className:"lt-radio",label:t||h,value:d,checked:l,onChange:k},u),m==="checkbox"&&e.jsx(H,{label:t||h,value:d,checked:l,onChange:k},u)]})},M=z;z.__docgenInfo={description:"",methods:[],displayName:"OptionSelector",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  key: string;
  text: string;
  value: string;
  // Optional property for custom child element
  childElement?: JSX.Element;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"childElement",value:{name:"JSX.Element",required:!1}}]}},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"}]},description:""},color:{required:!1,tsType:{name:"SemanticCOLORS"},description:""},icon:{required:!1,tsType:{name:"SemanticICONS"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const be={title:"OptionSelector",component:M,argTypes:{options:{control:{type:"object"}}}},o={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"radio"}},n={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!0,type:"radio"}},r={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"checkbox"}},a={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!0,type:"checkbox"}},i={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx($,{header:"Custom Card"})},checked:!1,type:"checkbox"}},s={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx("span",{children:"Custom Element for Option 2"})},checked:!1,type:"checkbox"}},c={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx($,{header:"Custom Card"})},checked:!0,type:"checkbox"}},p={args:{option:{key:"3",text:"Option 3",value:"option3"},checked:!0,type:"radio",className:"custom-radio",style:{backgroundColor:"lightblue",padding:"10px"}}};var y,x,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: false,
    type: 'radio'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,v,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: true,
    type: 'radio'
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var O,f,S;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: false,
    type: 'checkbox'
  }
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var E,R,q;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(X=(P=p.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};const Oe=["DefaultRadio","RadioChecked","DefaultCheckbox","CheckboxChecked","WithCustomChildElementRadio","WithCustomChildElementCheckbox","WithCustomChildElementCheckboxChecked","StyledDynamicRadio"];export{a as CheckboxChecked,r as DefaultCheckbox,o as DefaultRadio,n as RadioChecked,p as StyledDynamicRadio,s as WithCustomChildElementCheckbox,c as WithCustomChildElementCheckboxChecked,i as WithCustomChildElementRadio,Oe as __namedExportsOrder,be as default};
