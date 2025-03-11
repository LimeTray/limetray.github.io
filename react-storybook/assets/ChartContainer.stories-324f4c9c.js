import{j as t}from"./jsx-runtime-8406ef1e.js";import{d as o,o as v}from"./styled-components.browser.esm-d2d81691.js";import{t as y}from"./config-15336477.js";import{C as S}from"./index-b5f4272b.js";import{L as x}from"./index-6dcb29cb.js";import{M as w}from"./mixedChart-a504e99e.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./Popup-7902b892.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./toPropertyKey-4015efc6.js";import"./ltRadio-7f0a2b36.js";import"./Radio-e712d17b.js";import"./Checkbox-cb5dd6fb.js";import"./index-7d7a0a6e.js";import"./searchComponent-bcb17182.js";import"./Input-3f8aa787.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./ltCheckBox-fb658f45.js";import"./index-9561a1c8.js";import"./Header-30441d32.js";import"./stringConstants-4e8cb88a.js";import"./lodash-9978a6f3.js";import"./auto-a199c2c6.js";const k=o.div`
  background-color: ${({theme:e})=>e.colors.white};
`,h=(e,a,i)=>`
  font-weight: ${e.fontWeight};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-family: ${e.fontFamily};
  color: ${a};
  text-align: ${i||"left"};
`,O=o.div`
  ${({theme:e})=>h(e.typography.heading,e.colors.text)}
`,j=o.div`
  ${({theme:e})=>h(e.typography.caption,e.colors.text,"center")}
`,E=o.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.padding.medium} 0;
`,R=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small};
`,g=({title:e,footer:a,children:i,chartOptionsMenu:l})=>{const f=t.jsx(x,{icon:"bars",fitted:!0,color:"rgb(2, 8, 23)",style:{cursor:"pointer",color:"rgb(2, 8, 23)"}});return t.jsx(v,{theme:y,children:t.jsxs(k,{children:[t.jsxs(R,{children:[t.jsx(O,{children:e}),l&&t.jsx(S,{...l,trigerElement:l.trigerElement||f})]}),t.jsx(E,{children:i}),t.jsx(j,{children:a})]})})},b=g;g.__docgenInfo={description:"",methods:[],displayName:"ChartContainer",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},chartOptionsMenu:{required:!1,tsType:{name:"intersection",raw:"Omit<ChartOptionsMenuProps, 'trigerElement'> & { trigerElement?: JSX.Element }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  sections: (Section | SectionGroup)[];
  onApply: (SelectedFilter: SelectedFilter) => void;
  trigerElement: JSX.Element;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"unknown"}],raw:"(Section | SectionGroup)[]",required:!0}},{key:"onApply",value:{name:"signature",type:"function",raw:"(SelectedFilter: SelectedFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: (string | number | undefined)[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | undefined)[]",required:!0}}]}},name:"SelectedFilter"}],return:{name:"void"}},required:!0}},{key:"trigerElement",value:{name:"JSX.Element",required:!0}}]}},{name:"literal",value:"'trigerElement'"}],raw:"Omit<ChartOptionsMenuProps, 'trigerElement'>"},{name:"signature",type:"object",raw:"{ trigerElement?: JSX.Element }",signature:{properties:[{key:"trigerElement",value:{name:"JSX.Element",required:!1}}]}}]},description:""}}};const F={data:{labels:["2023 April - June","2023 October - December","2024 April - June","2024 October - December","2023 April - June","2023 October - December","2024 April - June","2024 October - December"],datasets:[{type:"bar",label:"Call Center",data:[20,25,30,28,20,25,30,28],backgroundColor:"#8B0000",barPercentage:1},{type:"bar",label:"Order Online",data:[15,20,18,22,15,20,18,22],backgroundColor:"#0073e6",barPercentage:1},{type:"bar",label:"POS",data:[5,6,8,7,5,6,8,7],backgroundColor:"#32CD32",barPercentage:1},{type:"bar",label:"Magicpin",data:[2,3,4,3,2,3,4,3],backgroundColor:"#FFD700",barPercentage:1},{type:"line",label:"Total",data:[42,54,60,60,42,54,60,60],borderColor:"#0000FF",borderWidth:2,pointBackgroundColor:"#0000FF",fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"}}},yTicks:e=>`${e}L`},$={sections:[{label:"Group By:",name:"groupBy",options:[{value:"channels",label:"Channels"},{value:"service",label:"Service"}],defaultValue:"channels"},{label:"Show:",name:"show",options:[{value:"orders",label:"Orders"},{value:"revenue",label:"Revenue"}],defaultValue:"orders"},{label:"Filter:",sections:[{isMultiSelection:!1,label:"service:",name:"filters",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:"channel1",placeholder:"Select filters"},{isMultiSelection:!0,label:"channel:",name:"filters",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:"channel1",placeholder:"Select filters"},{isMultiSelection:!0,label:"meal group:",name:"filters",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:"channel1",placeholder:"Select filters"}]}],onApply:e=>{console.log(e)},title:"Chart Options"},xe={title:"ChartContainer",component:b,parameters:{docs:{description:{component:`
The \`ChartContainer\` is a reusable container component designed to wrap charts. 
It includes optional features like titles and footers to provide context for the chart content.
        `}}},argTypes:{title:{description:"Title displayed at the top of the ChartContainer.",control:{type:"text"}},children:{description:"Content inside the ChartContainer, typically a chart component.",control:{type:"text"}},footer:{description:"Footer content displayed at the bottom of the ChartContainer.",control:{type:"text"}},chartMenuOptions:{description:"Options for the chart menu.",control:{type:"object"}}}},C=e=>t.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:t.jsx(b,{...e})}),r=C.bind({});r.args={title:"Chart Container",children:t.jsx(w,{...F}),footer:"There is an increase of 5% compared to the 30-day average. (Mocked)",chartOptionsMenu:$};r.parameters={docs:{storyDescription:"The default usage of the `ChartContainer` with title, children, and footer."}};const n=C.bind({});n.args={title:"Chart Container",children:"Chart goes here"};n.parameters={docs:{storyDescription:"This example shows the `ChartContainer` without the footer."}};var s,c,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <ChartContainer {...args} />
  </div>`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <ChartContainer {...args} />
  </div>`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const we=["Default","WithoutFooter"];export{r as Default,n as WithoutFooter,we as __namedExportsOrder,xe as default};
