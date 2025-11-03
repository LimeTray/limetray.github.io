import{j as e}from"./jsx-runtime-8406ef1e.js";import{L as H}from"./ltCheckBox-fb658f45.js";import{L as K}from"./ltRadio-2e07b06f.js";import{C as $}from"./Card-7a020250.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./Checkbox-cb5dd6fb.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./_baseSet-d58de3a8.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./Radio-e712d17b.js";import"./ThemeContext-71b3bf8d.js";import"./childrenUtils-dd3b0ba5.js";import"./Label-d5345000.js";import"./Icon-370c2d23.js";import"./Portal-8d2f321a.js";import"./map-20538cdf.js";const z=({option:A,checked:l,onChange:B,type:m,className:F,style:G})=>{const{key:u,text:h,value:d,childElement:t}=A||{key:"",text:"",value:""},k=Q=>{B(d)};return e.jsxs("div",{className:F,style:G,children:[m==="radio"&&e.jsx(K,{className:"lt-radio",label:t||h,value:d,checked:l,onChange:k},u),m==="checkbox"&&e.jsx(H,{label:t||h,value:d,checked:l,onChange:k},u)]})},M=z;z.__docgenInfo={description:"",methods:[],displayName:"OptionSelector",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  key: string;
  text: string;
  value: string;
  // Optional property for custom child element
  childElement?: JSX.Element;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"childElement",value:{name:"JSX.Element",required:!1}}]}},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"}]},description:""},color:{required:!1,tsType:{name:"SemanticCOLORS"},description:""},icon:{required:!1,tsType:{name:"SemanticICONS"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Oe={title:"OptionSelector",component:M,argTypes:{options:{control:{type:"object"}}}},o={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"radio"}},r={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!0,type:"radio"}},n={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"checkbox"}},a={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!0,type:"checkbox"}},i={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx($,{header:"Custom Card"})},checked:!1,type:"checkbox"}},s={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx("span",{children:"Custom Element for Option 2"})},checked:!1,type:"checkbox"}},c={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx($,{header:"Custom Card"})},checked:!0,type:"checkbox"}},p={args:{option:{key:"3",text:"Option 3",value:"option3"},checked:!0,type:"radio",className:"custom-radio",style:{backgroundColor:"lightblue",padding:"10px"}}};var y,x,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(X=(P=p.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};const fe=["DefaultRadio","RadioChecked","DefaultCheckbox","CheckboxChecked","WithCustomChildElementRadio","WithCustomChildElementCheckbox","WithCustomChildElementCheckboxChecked","StyledDynamicRadio"];export{a as CheckboxChecked,n as DefaultCheckbox,o as DefaultRadio,r as RadioChecked,p as StyledDynamicRadio,s as WithCustomChildElementCheckbox,c as WithCustomChildElementCheckboxChecked,i as WithCustomChildElementRadio,fe as __namedExportsOrder,Oe as default};
