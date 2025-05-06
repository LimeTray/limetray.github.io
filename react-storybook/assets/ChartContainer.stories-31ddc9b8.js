import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as p}from"./index-ad58220e.js";import{d as u,o as de}from"./styled-components.browser.esm-d2d81691.js";import{t as x}from"./config-d87c20af.js";import{C as ce}from"./index-f8d28ce8.js";import{L as pe}from"./index-6dcb29cb.js";import{B as oe}from"./Button-21321eef.js";import{D as ge}from"./Dropdown-e3088384.js";import{M as me}from"./mixedChart-a504e99e.js";import"./_commonjsHelpers-de833af9.js";import"./Popup-7902b892.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./childrenUtils-dd3b0ba5.js";import"./includes-192f9362.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./toPropertyKey-4015efc6.js";import"./ltRadio-7f0a2b36.js";import"./Radio-e712d17b.js";import"./Checkbox-cb5dd6fb.js";import"./htmlPropsUtils-2b22d933.js";import"./index-439054f5.js";import"./searchComponent-bcb17182.js";import"./Input-3f8aa787.js";import"./map-20538cdf.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./ltCheckBox-fb658f45.js";import"./index-7621d4b8.js";import"./Header-30441d32.js";import"./stringConstants-4e8cb88a.js";import"./lodash-9978a6f3.js";import"./without-708f3584.js";import"./deburr-94e08562.js";import"./auto-a199c2c6.js";const he=u.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding-bottom: ${({theme:e})=>e.padding.small};
`,re=(e,l,h)=>`
  font-weight: ${e.fontWeight};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-family: ${e.fontFamily};
  color: ${l};
  text-align: ${h||"left"};
`,ye=u.div`
  ${({theme:e})=>re(e.typography.heading,e.colors.text)}
  font-size: 1.5rem;
`,Se=u.div`
  ${({theme:e})=>re(e.typography.caption,e.colors.text,"center")}
  padding: ${({theme:e})=>e.padding.small};
`,ve=u.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.padding.medium} ${({theme:e})=>e.padding.small};
`,fe=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small};
  gap: ${({theme:e})=>e.padding.medium};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,be=u.div`
  // Title takes available space
`,Be=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.padding.medium};
`,we=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small} ${({theme:e})=>e.padding.small} 0;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.padding.small};
`,z=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.padding.tiny};
  align-items: center;
`,Ce=u.button`
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
  ${({active:e,theme:l})=>e&&`
    border: 1.5px solid #000;
    background-color: ${l.colors.grey};
    color: ${l.colors.text};
  `}

  // Hover state styling
  &:hover {
    background-color: ${({active:e,theme:l})=>e?l.colors.grey:l.colors.mediumGray};
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
`,Ge=u(ge)`
  min-width: 150px;
  .ui.label {
      background-color: ${({theme:e})=>e.colors.grey} !important;
      padding: ${x.padding.tiny} !important;
  }
`,xe=u(oe.Group)`
  box-shadow: none !important;
  border-radius: ${({theme:e})=>e.borderRadius.medium??"6px"} !important;

  .ui.button {
    background-color: ${({theme:e})=>e.colors.grey} !important;
    color: ${({theme:e})=>e.colors.text} !important;
    padding: ${x.padding.tiny} ${x.padding.small} !important;
    font-weight: ${x.typography.label.fontWeight} !important;
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
`,ne=({title:e,footer:l,children:h,chartOptionsMenu:g,groupBySection:a,showSection:s,periodSection:i,selectedGroupBy:B,selectedShow:w,selectedGroupByPeriod:C,onGroupByChange:y,onShowChange:S,onGroupByPeriodChange:v})=>{var A,F,M,D,N,W;const[k,P]=p.useState(B??(a==null?void 0:a.defaultValue)??((F=(A=a==null?void 0:a.options)==null?void 0:A[0])==null?void 0:F.value)),[$,j]=p.useState(w??(s==null?void 0:s.defaultValue)??((D=(M=s==null?void 0:s.options)==null?void 0:M[0])==null?void 0:D.value)),[q,V]=p.useState(C??(i==null?void 0:i.defaultValue)??((W=(N=i==null?void 0:i.options)==null?void 0:N[0])==null?void 0:W.value)),o=y!==void 0?B:k,r=S!==void 0?w:$,d=v!==void 0?C:q,c=(n,G)=>{const J=G.value;y?y(J):P(J)},ie=n=>{S?S(n):j(n)},le=n=>{v?v(n):V(n)},se=p.useMemo(()=>{var n;return((n=a==null?void 0:a.options)==null?void 0:n.map(G=>({key:G.value,text:G.label,value:G.value})))??[]},[a]),ue=t.jsx(pe,{icon:"filter",fitted:!0,color:"rgb(2, 8, 23)",style:{cursor:"pointer",color:"rgb(2, 8, 23)"}});return t.jsx(de,{theme:x,children:t.jsxs(he,{children:[t.jsxs(fe,{children:[t.jsx(be,{children:t.jsx(ye,{children:e})}),t.jsxs(Be,{children:[a&&a.options.length>0&&t.jsx(Ge,{selection:!0,options:se,value:o,onChange:c,placeholder:a.placeholder??"Group By...",compact:!0}),g&&g.sections&&g.sections.length>0&&t.jsx(ce,{...g,trigerElement:g.trigerElement||ue})]})]}),(s||i)&&t.jsxs(we,{children:[t.jsx(z,{children:s&&s.options.length>0&&t.jsx(t.Fragment,{children:s.options.map(n=>t.jsx(Ce,{active:r===n.value,onClick:()=>ie(n.value),type:"button",children:n.label},n.value))})}),t.jsx(z,{children:i&&i.options.length>0&&t.jsx(xe,{children:i.options.map(n=>t.jsx(oe,{active:d===n.value,onClick:()=>le(n.value),children:n.label},n.value))})})]}),t.jsx(ve,{children:h}),l&&t.jsx(Se,{children:l})]})})},ae=ne;ne.__docgenInfo={description:"",methods:[],displayName:"ChartContainer",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},chartOptionsMenu:{required:!1,tsType:{name:"intersection",raw:"Omit<ChartOptionsMenuProps, 'trigerElement'> & { trigerElement?: JSX.Element }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}}]}},description:""},selectedGroupBy:{required:!1,tsType:{name:"string"},description:""},onGroupByChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedShow:{required:!1,tsType:{name:"string"},description:""},onShowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedGroupByPeriod:{required:!1,tsType:{name:"string"},description:""},onGroupByPeriodChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const ke={data:{labels:["2023 April - June","2023 October - December","2024 April - June","2024 October - December","2023 April - June","2023 October - December","2024 April - June","2024 October - December"],datasets:[{type:"bar",label:"Call Center",data:[20,25,30,28,20,25,30,28],backgroundColor:"#8B0000",barPercentage:1},{type:"bar",label:"Order Online",data:[15,20,18,22,15,20,18,22],backgroundColor:"#0073e6",barPercentage:1},{type:"bar",label:"POS",data:[5,6,8,7,5,6,8,7],backgroundColor:"#32CD32",barPercentage:1},{type:"bar",label:"Magicpin",data:[2,3,4,3,2,3,4,3],backgroundColor:"#FFD700",barPercentage:1},{type:"line",label:"Total",data:[42,54,60,60,42,54,60,60],borderColor:"#0000FF",borderWidth:2,pointBackgroundColor:"#0000FF",fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"}}},yTicks:e=>`${e}L`},E={name:"groupBy",options:[{value:"channels",label:"Channels"},{value:"service",label:"Service"}],defaultValue:"channels",placeholder:"Group By..."},O={name:"show",options:[{value:"orders",label:"Orders"},{value:"revenue",label:"Revenue"},{value:"aov",label:"AOV"}],defaultValue:"orders"},R={name:"period",options:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],defaultValue:"daily"},Pe={sections:[{name:"filters",sections:[{isMultiSelection:!1,label:"service:",name:"filtersService",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:"channel1",placeholder:"Select service"},{isMultiSelection:!0,label:"channel:",name:"filtersChannel",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select channels"},{isMultiSelection:!0,label:"meal group:",name:"filtersMealGroup",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select meal groups"}]}],onApply:e=>{console.log("Filters Applied:",e)},title:"Filter Options"};var H,I,_;const wt={title:"ChartContainer",component:ae,parameters:{docs:{description:{component:`
The \`ChartContainer\` wraps charts. Header includes title, optional 'Group By' dropdown, and filter menu. 
Below header: optional 'Show' chips (left) and 'Group By Period' button group (right). Optional footer.
        `}}},argTypes:{title:{description:"Title displayed at the top of the ChartContainer.",control:{type:"text"}},children:{description:"Content inside the ChartContainer, typically a chart component."},footer:{description:"Footer content displayed at the bottom of the ChartContainer.",control:{type:"text"}},groupBySection:{control:{type:"object"}},showSection:{control:{type:"object"}},periodSection:{control:{type:"object"}},selectedGroupBy:{control:{type:"select"},options:["",...((H=E==null?void 0:E.options)==null?void 0:H.map(e=>e.value))??[]]},selectedShow:{control:{type:"select"},options:["",...((I=O==null?void 0:O.options)==null?void 0:I.map(e=>e.value))??[]]},selectedGroupByPeriod:{control:{type:"select"},options:["",...((_=R==null?void 0:R.options)==null?void 0:_.map(e=>e.value))??[]]},onGroupByChange:{action:"onGroupByChange"},onShowChange:{action:"onShowChange"},onGroupByPeriodChange:{action:"onGroupByPeriodChange"},chartOptionsMenu:{control:{type:"object"}}}},T=e=>{var B,w,C,y,S,v,k,P,$,j,q,V;const[l,h]=p.useState(e.selectedGroupBy??((B=e.groupBySection)==null?void 0:B.defaultValue)??((y=(C=(w=e.groupBySection)==null?void 0:w.options)==null?void 0:C[0])==null?void 0:y.value)),[g,a]=p.useState(e.selectedShow??((S=e.showSection)==null?void 0:S.defaultValue)??((P=(k=(v=e.showSection)==null?void 0:v.options)==null?void 0:k[0])==null?void 0:P.value)),[s,i]=p.useState(e.selectedGroupByPeriod??(($=e.periodSection)==null?void 0:$.defaultValue)??((V=(q=(j=e.periodSection)==null?void 0:j.options)==null?void 0:q[0])==null?void 0:V.value));return p.useEffect(()=>{var o,r,d,c;h(e.selectedGroupBy??((o=e.groupBySection)==null?void 0:o.defaultValue)??((c=(d=(r=e.groupBySection)==null?void 0:r.options)==null?void 0:d[0])==null?void 0:c.value))},[e.selectedGroupBy,e.groupBySection]),p.useEffect(()=>{var o,r,d,c;a(e.selectedShow??((o=e.showSection)==null?void 0:o.defaultValue)??((c=(d=(r=e.showSection)==null?void 0:r.options)==null?void 0:d[0])==null?void 0:c.value))},[e.selectedShow,e.showSection]),p.useEffect(()=>{var o,r,d,c;i(e.selectedGroupByPeriod??((o=e.periodSection)==null?void 0:o.defaultValue)??((c=(d=(r=e.periodSection)==null?void 0:r.options)==null?void 0:d[0])==null?void 0:c.value))},[e.selectedGroupByPeriod,e.periodSection]),t.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",maxWidth:"800px",margin:"auto"},children:t.jsx(ae,{...e,groupBySection:e.groupBySection,showSection:e.showSection,periodSection:e.periodSection,selectedGroupBy:l,selectedShow:g,selectedGroupByPeriod:s,onGroupByChange:o=>{var r;h(o),(r=e.onGroupByChange)==null||r.call(e,o)},onShowChange:o=>{var r;a(o),(r=e.onShowChange)==null||r.call(e,o)},onGroupByPeriodChange:o=>{var r;i(o),(r=e.onGroupByPeriodChange)==null||r.call(e,o)}})})},m=T.bind({});m.args={title:"Sales Performance",children:t.jsx(me,{...ke}),footer:"Data updated hourly.",groupBySection:E,showSection:O,periodSection:R,chartOptionsMenu:Pe};m.storyName="Full Example";const f=T.bind({});f.args={title:"Basic Chart",children:t.jsx("div",{style:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed grey"},children:"Chart Content"})};f.storyName="Minimal Configuration";const b=T.bind({});b.args={...m.args,groupByOptions:void 0,chartOptionsMenu:void 0,title:"Chips and Button Group Only"};b.storyName="Chips & Periods Only";var X,L,U;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var K,Q,Y;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(Y=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ct=["Default","Minimal","WithChipsAndPeriods"];export{m as Default,f as Minimal,b as WithChipsAndPeriods,Ct as __namedExportsOrder,wt as default};
