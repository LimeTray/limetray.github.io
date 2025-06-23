import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as g}from"./index-ad58220e.js";import{d as s,o as ue}from"./styled-components.browser.esm-d2d81691.js";import{t as G}from"./config-d87c20af.js";import{C as de}from"./index-3ff0a7a2.js";import{L as ce}from"./index-6dcb29cb.js";import{B as oe}from"./Button-21321eef.js";import{D as pe}from"./Dropdown-e3088384.js";import{M as ge}from"./mixedChart-a504e99e.js";import"./_commonjsHelpers-de833af9.js";import"./Popup-7902b892.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./childrenUtils-dd3b0ba5.js";import"./includes-192f9362.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./toPropertyKey-4015efc6.js";import"./ltRadio-7f0a2b36.js";import"./Radio-e712d17b.js";import"./Checkbox-cb5dd6fb.js";import"./htmlPropsUtils-2b22d933.js";import"./index-10f59e57.js";import"./searchComponent-bcb17182.js";import"./Input-3f8aa787.js";import"./map-20538cdf.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./ltCheckBox-fb658f45.js";import"./index-7621d4b8.js";import"./Header-30441d32.js";import"./stringConstants-ce0893de.js";import"./lodash-9978a6f3.js";import"./without-708f3584.js";import"./deburr-94e08562.js";import"./auto-a199c2c6.js";const me=s.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding-bottom: ${({theme:e})=>e.padding.small};
`,re=(e,u,d)=>`
  font-weight: ${e.fontWeight};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-family: ${e.fontFamily};
  color: ${u};
  text-align: ${d||"left"};
`;s.div`
  ${({theme:e})=>re(e.typography.heading,e.colors.text)}
  font-size: 1.5rem;
`;const ye=s.div`
  ${({theme:e})=>re(e.typography.caption,e.colors.text,"center")}
  padding: ${({theme:e})=>e.padding.small};
`,he=s.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.padding.medium} ${({theme:e})=>e.padding.small};
`,Se=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small};
  gap: ${({theme:e})=>e.padding.medium};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,ve=s.div`
  // Title takes available space
`,fe=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.padding.medium};
`,be=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small} ${({theme:e})=>e.padding.small} 0;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.padding.small};
`,z=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.padding.tiny};
  align-items: center;
`,Be=s.button`
  font-family: 'Poppins', sans-serif;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  background-color: ${({theme:e})=>e.colors.grey};
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  // Active state styling
  ${({active:e,theme:u})=>e&&`
    border: 1.5px solid #000;
    background-color: ${u.colors.grey};
    color: ${u.colors.text};
  `}

  // Hover state styling
  &:hover {
    background-color: ${({active:e,theme:u})=>e?u.colors.grey:u.colors.mediumGray};
    border-color: ${({active:e})=>e?"#000":"transparent"};
  }

  // Remove default button focus outline
  &:focus {
    outline: none;
  }
  // Add focus-visible for accessibility if outline is removed
  &:focus-visible {
     box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary} ;
  }
`,we=s(pe)`
  min-width: 150px;
  .ui.label {
      background-color: ${({theme:e})=>e.colors.grey} !important;
      padding: ${G.padding.tiny} !important;
  }
`,Ce=s(oe.Group)`
  box-shadow: none !important;
  border-radius: ${({theme:e})=>e.borderRadius.medium??"6px"} !important;

  .ui.button {
    background-color: ${({theme:e})=>e.colors.grey} !important;
    color: ${({theme:e})=>e.colors.text} !important;
    padding: ${G.padding.tiny} ${G.padding.small} !important;
    font-weight: ${G.typography.label.fontWeight} !important;
    font-size: 1rem !important;
    box-shadow: none !important; // Keep this
    border: 1px solid ${({theme:e})=>e.colors.border} !important;

    &:hover {
       background-color: ${({theme:e})=>e.colors.mediumGray} !important;
    }

    &.active {
       background-color: ${({theme:e})=>e.colors.secondary} !important;
       color: ${({theme:e})=>e.colors.white} !important;
       border-color: ${({theme:e})=>e.colors.secondary} !important;
    }

    &:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    &:focus-visible {
        box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary} !important;
        z-index: 1;
    }
  }
`,ne=({footer:e,children:u,chartOptionsMenu:d,groupBySection:a,showSection:i,periodSection:l,selectedGroupBy:b,selectedShow:B,selectedGroupByPeriod:w,onGroupByChange:y,onShowChange:h,onGroupByPeriodChange:S})=>{var F,T,M,D,N,W;const[x,k]=g.useState(b??(a==null?void 0:a.defaultValue)??((T=(F=a==null?void 0:a.options)==null?void 0:F[0])==null?void 0:T.value)),[P,$]=g.useState(B??(i==null?void 0:i.defaultValue)??((D=(M=i==null?void 0:i.options)==null?void 0:M[0])==null?void 0:D.value)),[q,j]=g.useState(w??(l==null?void 0:l.defaultValue)??((W=(N=l==null?void 0:l.options)==null?void 0:N[0])==null?void 0:W.value)),V=y!==void 0?b:x,o=h!==void 0?B:P,r=S!==void 0?w:q,c=(n,C)=>{const J=C.value;y?y(J):k(J)},p=n=>{h?h(n):$(n)},ie=n=>{S?S(n):j(n)},le=g.useMemo(()=>{var n;return((n=a==null?void 0:a.options)==null?void 0:n.map(C=>({key:C.value,text:C.label,value:C.value})))??[]},[a]),se=t.jsx(ce,{icon:"filter",fitted:!0,color:"rgb(2, 8, 23)",style:{cursor:"pointer",color:"rgb(2, 8, 23)"}});return t.jsx(ue,{theme:G,children:t.jsxs(me,{children:[t.jsxs(Se,{children:[t.jsx(ve,{children:t.jsx(z,{children:i&&i.options.length>0&&t.jsx(t.Fragment,{children:i.options.map(n=>t.jsx(Be,{active:o===n.value,onClick:()=>p(n.value),type:"button",children:n.label},n.value))})})}),t.jsxs(fe,{children:[a&&a.options.length>0&&t.jsx(we,{selection:!0,options:le,value:V,onChange:c,placeholder:a.placeholder??"Group By...",compact:!0}),d&&d.sections&&d.sections.length>0&&t.jsx(de,{...d,trigerElement:d.trigerElement||se})]})]}),l&&t.jsx(be,{children:l&&l.options.length>0&&t.jsx(z,{style:{marginLeft:"auto"},children:t.jsx(Ce,{children:l.options.map(n=>t.jsx(oe,{active:r===n.value,onClick:()=>ie(n.value),children:n.label},n.value))})})}),t.jsx(he,{children:u}),e&&t.jsx(ye,{children:e})]})})},ae=ne;ne.__docgenInfo={description:"",methods:[],displayName:"ChartContainer",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},chartOptionsMenu:{required:!1,tsType:{name:"intersection",raw:"Omit<ChartOptionsMenuProps, 'trigerElement'> & { trigerElement?: JSX.Element }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  sections: (Section | SectionGroup)[];
  onApply: (SelectedFilter: SelectedFilter) => void;
  trigerElement: JSX.Element;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"unknown"}],raw:"(Section | SectionGroup)[]",required:!0}},{key:"onApply",value:{name:"signature",type:"function",raw:"(SelectedFilter: SelectedFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: (string | number | undefined)[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | undefined)[]",required:!0}}]}},name:"SelectedFilter"}],return:{name:"void"}},required:!0}},{key:"trigerElement",value:{name:"JSX.Element",required:!0}}]}},{name:"literal",value:"'trigerElement'"}],raw:"Omit<ChartOptionsMenuProps, 'trigerElement'>"},{name:"signature",type:"object",raw:"{ trigerElement?: JSX.Element }",signature:{properties:[{key:"trigerElement",value:{name:"JSX.Element",required:!1}}]}}]},description:""},groupBySection:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label?: string;
  name: string;
  options: Option[];
  defaultValue: string;
  placeholder?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}}]}},description:""},showSection:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label?: string;
  name: string;
  options: Option[];
  defaultValue: string;
  placeholder?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}}]}},description:""},periodSection:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label?: string;
  name: string;
  options: Option[];
  defaultValue: string;
  placeholder?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}}]}},description:""},selectedGroupBy:{required:!1,tsType:{name:"string"},description:""},onGroupByChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedShow:{required:!1,tsType:{name:"string"},description:""},onShowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedGroupByPeriod:{required:!1,tsType:{name:"string"},description:""},onGroupByPeriodChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const Ge={data:{labels:["2023 April - June","2023 October - December","2024 April - June","2024 October - December","2023 April - June","2023 October - December","2024 April - June","2024 October - December"],datasets:[{type:"bar",label:"Call Center",data:[20,25,30,28,20,25,30,28],backgroundColor:"#8B0000",barPercentage:1},{type:"bar",label:"Order Online",data:[15,20,18,22,15,20,18,22],backgroundColor:"#0073e6",barPercentage:1},{type:"bar",label:"POS",data:[5,6,8,7,5,6,8,7],backgroundColor:"#32CD32",barPercentage:1},{type:"bar",label:"Magicpin",data:[2,3,4,3,2,3,4,3],backgroundColor:"#FFD700",barPercentage:1},{type:"line",label:"Total",data:[42,54,60,60,42,54,60,60],borderColor:"#0000FF",borderWidth:2,pointBackgroundColor:"#0000FF",fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"}}},yTicks:e=>`${e}L`},E={name:"groupBy",options:[{value:"channels",label:"Channels"},{value:"service",label:"Service"}],defaultValue:"channels",placeholder:"Group By..."},O={name:"show",options:[{value:"orders",label:"Orders"},{value:"revenue",label:"Revenue"},{value:"aov",label:"AOV"}],defaultValue:"orders"},R={name:"period",options:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],defaultValue:"daily"},xe={sections:[{name:"filters",sections:[{isMultiSelection:!1,label:"service:",name:"filtersService",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:"channel1",placeholder:"Select service"},{isMultiSelection:!0,label:"channel:",name:"filtersChannel",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select channels"},{isMultiSelection:!0,label:"meal group:",name:"filtersMealGroup",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select meal groups"}]}],onApply:e=>{console.log("Filters Applied:",e)},title:"Filter Options"};var H,I,_;const bt={title:"ChartContainer",component:ae,parameters:{docs:{description:{component:`
The \`ChartContainer\` wraps charts. Header includes title, optional 'Group By' dropdown, and filter menu. 
Below header: optional 'Show' chips (left) and 'Group By Period' button group (right). Optional footer.
        `}}},argTypes:{title:{description:"Title displayed at the top of the ChartContainer.",control:{type:"text"}},children:{description:"Content inside the ChartContainer, typically a chart component."},footer:{description:"Footer content displayed at the bottom of the ChartContainer.",control:{type:"text"}},groupBySection:{control:{type:"object"}},showSection:{control:{type:"object"}},periodSection:{control:{type:"object"}},selectedGroupBy:{control:{type:"select"},options:["",...((H=E==null?void 0:E.options)==null?void 0:H.map(e=>e.value))??[]]},selectedShow:{control:{type:"select"},options:["",...((I=O==null?void 0:O.options)==null?void 0:I.map(e=>e.value))??[]]},selectedGroupByPeriod:{control:{type:"select"},options:["",...((_=R==null?void 0:R.options)==null?void 0:_.map(e=>e.value))??[]]},onGroupByChange:{action:"onGroupByChange"},onShowChange:{action:"onShowChange"},onGroupByPeriodChange:{action:"onGroupByPeriodChange"},chartOptionsMenu:{control:{type:"object"}}}},A=e=>{var B,w,y,h,S,x,k,P,$,q,j,V;const[u,d]=g.useState(e.selectedGroupBy??((B=e.groupBySection)==null?void 0:B.defaultValue)??((h=(y=(w=e.groupBySection)==null?void 0:w.options)==null?void 0:y[0])==null?void 0:h.value)),[a,i]=g.useState(e.selectedShow??((S=e.showSection)==null?void 0:S.defaultValue)??((P=(k=(x=e.showSection)==null?void 0:x.options)==null?void 0:k[0])==null?void 0:P.value)),[l,b]=g.useState(e.selectedGroupByPeriod??(($=e.periodSection)==null?void 0:$.defaultValue)??((V=(j=(q=e.periodSection)==null?void 0:q.options)==null?void 0:j[0])==null?void 0:V.value));return g.useEffect(()=>{var o,r,c,p;d(e.selectedGroupBy??((o=e.groupBySection)==null?void 0:o.defaultValue)??((p=(c=(r=e.groupBySection)==null?void 0:r.options)==null?void 0:c[0])==null?void 0:p.value))},[e.selectedGroupBy,e.groupBySection]),g.useEffect(()=>{var o,r,c,p;i(e.selectedShow??((o=e.showSection)==null?void 0:o.defaultValue)??((p=(c=(r=e.showSection)==null?void 0:r.options)==null?void 0:c[0])==null?void 0:p.value))},[e.selectedShow,e.showSection]),g.useEffect(()=>{var o,r,c,p;b(e.selectedGroupByPeriod??((o=e.periodSection)==null?void 0:o.defaultValue)??((p=(c=(r=e.periodSection)==null?void 0:r.options)==null?void 0:c[0])==null?void 0:p.value))},[e.selectedGroupByPeriod,e.periodSection]),t.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",maxWidth:"800px",margin:"auto"},children:t.jsx(ae,{...e,groupBySection:e.groupBySection,showSection:e.showSection,periodSection:e.periodSection,selectedGroupBy:u,selectedShow:a,selectedGroupByPeriod:l,onGroupByChange:o=>{var r;d(o),(r=e.onGroupByChange)==null||r.call(e,o)},onShowChange:o=>{var r;i(o),(r=e.onShowChange)==null||r.call(e,o)},onGroupByPeriodChange:o=>{var r;b(o),(r=e.onGroupByPeriodChange)==null||r.call(e,o)}})})},m=A.bind({});m.args={title:"Sales Performance",children:t.jsx(ge,{...Ge}),footer:"Data updated hourly.",groupBySection:E,showSection:O,periodSection:R,chartOptionsMenu:xe};m.storyName="Full Example";const v=A.bind({});v.args={title:"Basic Chart",children:t.jsx("div",{style:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed grey"},children:"Chart Content"})};v.storyName="Minimal Configuration";const f=A.bind({});f.args={...m.args,groupByOptions:void 0,chartOptionsMenu:void 0,title:"Chips and Button Group Only"};f.storyName="Chips & Periods Only";var L,X,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [selectedGroupBy, setSelectedGroupBy] = useState(args.selectedGroupBy ?? args.groupBySection?.defaultValue ?? args.groupBySection?.options?.[0]?.value);
  const [selectedShow, setSelectedShow] = useState(args.selectedShow ?? args.showSection?.defaultValue ?? args.showSection?.options?.[0]?.value);
  const [selectedGroupByPeriod, setSelectedGroupByPeriod] = useState(args.selectedGroupByPeriod ?? args.periodSection?.defaultValue ?? args.periodSection?.options?.[0]?.value);

  // Update state if controls change args
  useEffect(() => {
    setSelectedGroupBy(args.selectedGroupBy ?? args.groupBySection?.defaultValue ?? args.groupBySection?.options?.[0]?.value);
  }, [args.selectedGroupBy, args.groupBySection]);
  useEffect(() => {
    setSelectedShow(args.selectedShow ?? args.showSection?.defaultValue ?? args.showSection?.options?.[0]?.value);
  }, [args.selectedShow, args.showSection]);
  useEffect(() => {
    setSelectedGroupByPeriod(args.selectedGroupByPeriod ?? args.periodSection?.defaultValue ?? args.periodSection?.options?.[0]?.value);
  }, [args.selectedGroupByPeriod, args.periodSection]);
  return <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5',
    maxWidth: '800px',
    margin: 'auto'
  }}>
      <ChartContainer {...args} groupBySection={args.groupBySection} showSection={args.showSection} periodSection={args.periodSection} selectedGroupBy={selectedGroupBy} selectedShow={selectedShow} selectedGroupByPeriod={selectedGroupByPeriod} onGroupByChange={value => {
      setSelectedGroupBy(value);
      args.onGroupByChange?.(value); // Call Storybook action
    }} onShowChange={value => {
      setSelectedShow(value);
      args.onShowChange?.(value); // Call Storybook action
    }} onGroupByPeriodChange={value => {
      setSelectedGroupByPeriod(value);
      args.onGroupByPeriodChange?.(value); // Call Storybook action
    }} />
    </div>;
}`,...(U=(X=m.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var K,Q,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [selectedGroupBy, setSelectedGroupBy] = useState(args.selectedGroupBy ?? args.groupBySection?.defaultValue ?? args.groupBySection?.options?.[0]?.value);
  const [selectedShow, setSelectedShow] = useState(args.selectedShow ?? args.showSection?.defaultValue ?? args.showSection?.options?.[0]?.value);
  const [selectedGroupByPeriod, setSelectedGroupByPeriod] = useState(args.selectedGroupByPeriod ?? args.periodSection?.defaultValue ?? args.periodSection?.options?.[0]?.value);

  // Update state if controls change args
  useEffect(() => {
    setSelectedGroupBy(args.selectedGroupBy ?? args.groupBySection?.defaultValue ?? args.groupBySection?.options?.[0]?.value);
  }, [args.selectedGroupBy, args.groupBySection]);
  useEffect(() => {
    setSelectedShow(args.selectedShow ?? args.showSection?.defaultValue ?? args.showSection?.options?.[0]?.value);
  }, [args.selectedShow, args.showSection]);
  useEffect(() => {
    setSelectedGroupByPeriod(args.selectedGroupByPeriod ?? args.periodSection?.defaultValue ?? args.periodSection?.options?.[0]?.value);
  }, [args.selectedGroupByPeriod, args.periodSection]);
  return <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5',
    maxWidth: '800px',
    margin: 'auto'
  }}>
      <ChartContainer {...args} groupBySection={args.groupBySection} showSection={args.showSection} periodSection={args.periodSection} selectedGroupBy={selectedGroupBy} selectedShow={selectedShow} selectedGroupByPeriod={selectedGroupByPeriod} onGroupByChange={value => {
      setSelectedGroupBy(value);
      args.onGroupByChange?.(value); // Call Storybook action
    }} onShowChange={value => {
      setSelectedShow(value);
      args.onShowChange?.(value); // Call Storybook action
    }} onGroupByPeriodChange={value => {
      setSelectedGroupByPeriod(value);
      args.onGroupByPeriodChange?.(value); // Call Storybook action
    }} />
    </div>;
}`,...(Y=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [selectedGroupBy, setSelectedGroupBy] = useState(args.selectedGroupBy ?? args.groupBySection?.defaultValue ?? args.groupBySection?.options?.[0]?.value);
  const [selectedShow, setSelectedShow] = useState(args.selectedShow ?? args.showSection?.defaultValue ?? args.showSection?.options?.[0]?.value);
  const [selectedGroupByPeriod, setSelectedGroupByPeriod] = useState(args.selectedGroupByPeriod ?? args.periodSection?.defaultValue ?? args.periodSection?.options?.[0]?.value);

  // Update state if controls change args
  useEffect(() => {
    setSelectedGroupBy(args.selectedGroupBy ?? args.groupBySection?.defaultValue ?? args.groupBySection?.options?.[0]?.value);
  }, [args.selectedGroupBy, args.groupBySection]);
  useEffect(() => {
    setSelectedShow(args.selectedShow ?? args.showSection?.defaultValue ?? args.showSection?.options?.[0]?.value);
  }, [args.selectedShow, args.showSection]);
  useEffect(() => {
    setSelectedGroupByPeriod(args.selectedGroupByPeriod ?? args.periodSection?.defaultValue ?? args.periodSection?.options?.[0]?.value);
  }, [args.selectedGroupByPeriod, args.periodSection]);
  return <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5',
    maxWidth: '800px',
    margin: 'auto'
  }}>
      <ChartContainer {...args} groupBySection={args.groupBySection} showSection={args.showSection} periodSection={args.periodSection} selectedGroupBy={selectedGroupBy} selectedShow={selectedShow} selectedGroupByPeriod={selectedGroupByPeriod} onGroupByChange={value => {
      setSelectedGroupBy(value);
      args.onGroupByChange?.(value); // Call Storybook action
    }} onShowChange={value => {
      setSelectedShow(value);
      args.onShowChange?.(value); // Call Storybook action
    }} onGroupByPeriodChange={value => {
      setSelectedGroupByPeriod(value);
      args.onGroupByPeriodChange?.(value); // Call Storybook action
    }} />
    </div>;
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Bt=["Default","Minimal","WithChipsAndPeriods"];export{m as Default,v as Minimal,f as WithChipsAndPeriods,Bt as __namedExportsOrder,bt as default};
