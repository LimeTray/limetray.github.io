import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{r as j}from"./index-04c7fd94.js";/* empty css              */import{I as p}from"./Icon-6945f610.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";const A="ERROR_MAX",q="ERROR_MIN",i=t=>{const{count:n,maxCount:s,minCount:u,onChange:a,style:r,className:E,buttonClassName:l,subtractIcon:h,addIcon:S,counterClassName:_}=t,M=()=>{n>u?a(n-1):a(n,{code:q,value:u})},O=()=>{n<s?a(n+1):a(n,{code:A,value:s})};return e.jsxs("div",{className:`flex ${E}`,style:r,children:[e.jsx("button",{name:"subtract",type:"button",className:`counter-button ${l}`,onClick:M,children:h}),e.jsx("div",{"data-name":"counter-count",className:`counter-count ${_}`,children:n}),e.jsx("button",{name:"add",type:"button",className:`counter-button ${l}`,onClick:O,children:S})]})},v=i;i.defaultProps={maxCount:1e16,minCount:1,style:{},className:"",buttonClassName:"",subtractIcon:"−",addIcon:"+",counterClassName:""};i.__docgenInfo={description:"",methods:[],displayName:"Counter",props:{count:{required:!0,tsType:{name:"number"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"9999999999999999",computed:!1}},minCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(newCount: number, error?: { code: typeof ERROR_MAX | typeof ERROR_MIN, value: number }) => void",signature:{arguments:[{type:{name:"number"},name:"newCount"},{type:{name:"signature",type:"object",raw:"{ code: typeof ERROR_MAX | typeof ERROR_MIN, value: number }",signature:{properties:[{key:"code",value:{name:"union",raw:"typeof ERROR_MAX | typeof ERROR_MIN",elements:[{name:"ERROR_MAX"},{name:"ERROR_MIN"}],required:!0}},{key:"value",value:{name:"number",required:!0}}]}},name:"error"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},buttonClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},subtractIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"−"',computed:!1}},addIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"+"',computed:!1}},counterClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const B={component:v,title:"Counter",tags:["autodocs"]},d=t=>{const[n,s]=j.useState(t.count),u=(a,r)=>{if(r){alert(`Error: ${r.code}, Value: ${r.value}`);return}s(a)};return e.jsx("div",{children:e.jsx(v,{...t,count:n,onChange:u})})},c={render:t=>e.jsx(d,{...t}),args:{count:0}},o={render:t=>e.jsx(d,{...t}),args:{count:9,maxCount:10,minCount:0,className:"custom-class",buttonClassName:"custom-button-class",subtractIcon:e.jsx(p,{name:"minus",color:"grey"}),addIcon:e.jsx(p,{name:"plus",color:"grey"}),counterClassName:"modified-counter",style:{border:"1px solid #ccc",padding:"10px"}}},m={render:t=>e.jsx(d,{...t}),args:{...o.args,count:10}};var R,C,b;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: JSX.IntrinsicAttributes & {
    count: number;
    maxCount?: number;
    minCount?: number;
    onChange: (newCount: number, error?: {
      code: "ERROR_MAX" | "ERROR_MIN";
      value: number;
    }) => void;
    style?: React.CSSProperties;
    className?: string;
    buttonClassName?: string;
    subtractIcon?: React.ReactNode;
    addIcon?: React.ReactNode;
    counterClassName?: string;
  }) => <CounterWithState {...args} />,
  args: {
    count: 0
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,N,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: JSX.IntrinsicAttributes & {
    count: number;
    maxCount?: number;
    minCount?: number;
    onChange: (newCount: number, error?: {
      code: "ERROR_MAX" | "ERROR_MIN";
      value: number;
    }) => void;
    style?: React.CSSProperties;
    className?: string;
    buttonClassName?: string;
    subtractIcon?: React.ReactNode;
    addIcon?: React.ReactNode;
    counterClassName?: string;
  }) => <CounterWithState {...args} />,
  args: {
    count: 9,
    maxCount: 10,
    minCount: 0,
    className: "custom-class",
    buttonClassName: "custom-button-class",
    subtractIcon: <Icon name="minus" color="grey" />,
    addIcon: <Icon name="plus" color="grey" />,
    counterClassName: "modified-counter",
    style: {
      border: '1px solid #ccc',
      padding: '10px'
    }
  }
}`,...(f=(N=o.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var y,x,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: JSX.IntrinsicAttributes & {
    count: number;
    maxCount?: number;
    minCount?: number;
    onChange: (newCount: number, error?: {
      code: "ERROR_MAX" | "ERROR_MIN";
      value: number;
    }) => void;
    style?: React.CSSProperties;
    className?: string;
    buttonClassName?: string;
    subtractIcon?: React.ReactNode;
    addIcon?: React.ReactNode;
    counterClassName?: string;
  }) => <CounterWithState {...args} />,
  args: {
    ...WithCustomProps.args,
    count: 10 // Start at max count
  }
}`,...(I=(x=m.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const F=["Default","WithCustomProps","MaxCountError"];export{c as Default,m as MaxCountError,o as WithCustomProps,F as __namedExportsOrder,B as default};
