import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as m}from"./index-ad58220e.js";import{d as u,o as pe}from"./styled-components.browser.esm-675ea4f2.js";import{t as k}from"./config-d87c20af.js";import{C as me}from"./index-a8a041d3.js";import{L as ge}from"./index-6dcb29cb.js";import{B as oe}from"./Button-21321eef.js";import{D as he}from"./Dropdown-e3088384.js";import{M as ye}from"./mixedChart-a504e99e.js";import"./_commonjsHelpers-de833af9.js";import"./Popup-7902b892.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./childrenUtils-dd3b0ba5.js";import"./includes-192f9362.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./toPropertyKey-4015efc6.js";import"./ltRadio-7f0a2b36.js";import"./Radio-e712d17b.js";import"./Checkbox-cb5dd6fb.js";import"./htmlPropsUtils-2b22d933.js";import"./index-f68427e8.js";import"./searchComponent-bcb17182.js";import"./Input-3f8aa787.js";import"./map-20538cdf.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./ltCheckBox-fb658f45.js";import"./index-426f0325.js";import"./Header-30441d32.js";import"./stringConstants-f1def6f8.js";import"./lodash-9978a6f3.js";import"./without-708f3584.js";import"./deburr-94e08562.js";import"./auto-a199c2c6.js";const Se=u.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding-bottom: ${({theme:e})=>e.padding.small};
`,re=(e,d,i)=>`
  font-weight: ${e.fontWeight};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-family: ${e.fontFamily};
  color: ${d};
  text-align: ${i||"left"};
`;u.div`
  ${({theme:e})=>re(e.typography.heading,e.colors.text)}
  font-size: 1.5rem;
`;const ve=u.div`
  ${({theme:e})=>re(e.typography.caption,e.colors.text,"center")}
  padding: ${({theme:e})=>e.padding.small};
`,fe=u.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.padding.medium} ${({theme:e})=>e.padding.small};
`,be=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small};
  gap: ${({theme:e})=>e.padding.medium};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,we=u.div`
  // Title takes available space
`,Be=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.padding.medium};
`,Ce=u.div`
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
`,Ge=u.button`
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
  ${({active:e,theme:d})=>e&&`
    border: 1.5px solid #000;
    background-color: ${d.colors.grey};
    color: ${d.colors.text};
  `}

  // Hover state styling
  &:hover {
    background-color: ${({active:e,theme:d})=>e?d.colors.grey:d.colors.mediumGray};
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
`,xe=u(he)`
  min-width: 150px;
  .ui.label {
      background-color: ${({theme:e})=>e.colors.grey} !important;
      padding: ${k.padding.tiny} !important;
  }
`,ke=u(oe.Group)`
  box-shadow: none !important;
  border-radius: ${({theme:e})=>e.borderRadius.medium??"6px"} !important;

  .ui.button {
    background-color: ${({theme:e})=>e.colors.grey} !important;
    color: ${({theme:e})=>e.colors.text} !important;
    padding: ${k.padding.tiny} ${k.padding.small} !important;
    font-weight: ${k.typography.label.fontWeight} !important;
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
`,ne=({footer:e,children:d,chartOptionsMenu:i,showSelectAll:P,showSelected:w,groupBySection:a,showSection:s,periodSection:l,selectedGroupBy:B,selectedShow:C,selectedGroupByPeriod:G,filterIconColor:g,onGroupByChange:y,onShowChange:S,onGroupByPeriodChange:v})=>{var T,F,D,M,N,W;(!g||g.trim()==="")&&(g="rgb(69 69 69 / 50%)");const[$,q]=m.useState(B??(a==null?void 0:a.defaultValue)??((F=(T=a==null?void 0:a.options)==null?void 0:T[0])==null?void 0:F.value)),[j,V]=m.useState(C??(s==null?void 0:s.defaultValue)??((M=(D=s==null?void 0:s.options)==null?void 0:D[0])==null?void 0:M.value)),[o,r]=m.useState(G??(l==null?void 0:l.defaultValue)??((W=(N=l==null?void 0:l.options)==null?void 0:N[0])==null?void 0:W.value)),c=y!==void 0?B:$,p=S!==void 0?C:j,le=v!==void 0?G:o,ie=(n,x)=>{const J=x.value;y?y(J):q(J)},se=n=>{S?S(n):V(n)},ue=n=>{v?v(n):r(n)},de=m.useMemo(()=>{var n;return((n=a==null?void 0:a.options)==null?void 0:n.map(x=>({key:x.value,text:x.label,value:x.value})))??[]},[a]),ce=t.jsx(ge,{icon:"filter",fitted:!0,color:g,style:{cursor:"pointer",color:g}});return t.jsx(pe,{theme:k,children:t.jsxs(Se,{children:[t.jsxs(be,{children:[t.jsx(we,{children:t.jsx(z,{children:s&&s.options.length>0&&t.jsx(t.Fragment,{children:s.options.map(n=>t.jsx(Ge,{active:p===n.value,onClick:()=>se(n.value),type:"button",children:n.label},n.value))})})}),t.jsxs(Be,{children:[a&&a.options.length>0&&t.jsx(xe,{selection:!0,options:de,value:c,onChange:ie,placeholder:a.placeholder??"Group By...",compact:!0}),i&&i.sections&&i.sections.length>0&&t.jsx(me,{...i,trigerElement:i.trigerElement||ce,showSelectAll:P!==void 0?P:i.showSelectAll!==void 0?i.showSelectAll:!0,showSelected:w!==void 0?w:!1})]})]}),l&&t.jsx(Ce,{children:l&&l.options.length>0&&t.jsx(z,{style:{marginLeft:"auto"},children:t.jsx(ke,{children:l.options.map(n=>t.jsx(oe,{active:le===n.value,onClick:()=>ue(n.value),children:n.label},n.value))})})}),t.jsx(fe,{children:d}),e&&t.jsx(ve,{children:e})]})})},ae=ne;ne.__docgenInfo={description:"",methods:[],displayName:"ChartContainer",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},chartOptionsMenu:{required:!1,tsType:{name:"intersection",raw:"Omit<ChartOptionsMenuProps, 'trigerElement'> & { trigerElement?: JSX.Element }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  sections: (Section | SectionGroup)[];
  onApply: (SelectedFilter: SelectedFilter) => void;
  trigerElement: JSX.Element;
  showSelectAll?: boolean;
   showSelected?: boolean;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"unknown"}],raw:"(Section | SectionGroup)[]",required:!0}},{key:"onApply",value:{name:"signature",type:"function",raw:"(SelectedFilter: SelectedFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: (string | number | undefined)[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | undefined)[]",required:!0}}]}},name:"SelectedFilter"}],return:{name:"void"}},required:!0}},{key:"trigerElement",value:{name:"JSX.Element",required:!0}},{key:"showSelectAll",value:{name:"boolean",required:!1}},{key:"showSelected",value:{name:"boolean",required:!1}}]}},{name:"literal",value:"'trigerElement'"}],raw:"Omit<ChartOptionsMenuProps, 'trigerElement'>"},{name:"signature",type:"object",raw:"{ trigerElement?: JSX.Element }",signature:{properties:[{key:"trigerElement",value:{name:"JSX.Element",required:!1}}]}}]},description:""},groupBySection:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}}]}},description:""},showSelectAll:{required:!1,tsType:{name:"boolean"},description:""},showSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedGroupBy:{required:!1,tsType:{name:"string"},description:""},onGroupByChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedShow:{required:!1,tsType:{name:"string"},description:""},onShowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedGroupByPeriod:{required:!1,tsType:{name:"string"},description:""},onGroupByPeriodChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},filterIconColor:{required:!1,tsType:{name:"string"},description:""}}};const Pe={data:{labels:["2023 April - June","2023 October - December","2024 April - June","2024 October - December","2023 April - June","2023 October - December","2024 April - June","2024 October - December"],datasets:[{type:"bar",label:"Call Center",data:[20,25,30,28,20,25,30,28],backgroundColor:"#8B0000",barPercentage:1},{type:"bar",label:"Order Online",data:[15,20,18,22,15,20,18,22],backgroundColor:"#0073e6",barPercentage:1},{type:"bar",label:"POS",data:[5,6,8,7,5,6,8,7],backgroundColor:"#32CD32",barPercentage:1},{type:"bar",label:"Magicpin",data:[2,3,4,3,2,3,4,3],backgroundColor:"#FFD700",barPercentage:1},{type:"line",label:"Total",data:[42,54,60,60,42,54,60,60],borderColor:"#0000FF",borderWidth:2,pointBackgroundColor:"#0000FF",fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"}}},yTicks:e=>`${e}L`},E={name:"groupBy",options:[{value:"channels",label:"Channels"},{value:"service",label:"Service"}],defaultValue:"channels",placeholder:"Group By..."},O={name:"show",options:[{value:"orders",label:"Orders"},{value:"revenue",label:"Revenue"},{value:"aov",label:"AOV"}],defaultValue:"orders"},A={name:"period",options:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],defaultValue:"daily"},$e={sections:[{name:"filters",sections:[{isMultiSelection:!1,label:"service:",name:"filtersService",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:"channel1",placeholder:"Select service"},{isMultiSelection:!0,label:"channel:",name:"filtersChannel",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select channels"},{isMultiSelection:!0,label:"meal group:",name:"filtersMealGroup",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select meal groups"}]}],onApply:e=>{console.log("Filters Applied:",e)},title:"Filter Options"};var H,_,L;const Ct={title:"ChartContainer",component:ae,parameters:{docs:{description:{component:`
The \`ChartContainer\` wraps charts. Header includes title, optional 'Group By' dropdown, and filter menu. 
Below header: optional 'Show' chips (left) and 'Group By Period' button group (right). Optional footer.
        `}}},argTypes:{title:{description:"Title displayed at the top of the ChartContainer.",control:{type:"text"}},children:{description:"Content inside the ChartContainer, typically a chart component."},footer:{description:"Footer content displayed at the bottom of the ChartContainer.",control:{type:"text"}},groupBySection:{control:{type:"object"}},showSection:{control:{type:"object"}},periodSection:{control:{type:"object"}},selectedGroupBy:{control:{type:"select"},options:["",...((H=E==null?void 0:E.options)==null?void 0:H.map(e=>e.value))??[]]},selectedShow:{control:{type:"select"},options:["",...((_=O==null?void 0:O.options)==null?void 0:_.map(e=>e.value))??[]]},selectedGroupByPeriod:{control:{type:"select"},options:["",...((L=A==null?void 0:A.options)==null?void 0:L.map(e=>e.value))??[]]},onGroupByChange:{action:"onGroupByChange"},onShowChange:{action:"onShowChange"},onGroupByPeriodChange:{action:"onGroupByPeriodChange"},chartOptionsMenu:{control:{type:"object"}},filterIconColor:{description:"Color of the filter icon in the header.",control:{type:"color"}}}},R=e=>{var l,B,C,G,g,y,S,v,$,q,j,V;const[d,i]=m.useState(e.selectedGroupBy??((l=e.groupBySection)==null?void 0:l.defaultValue)??((G=(C=(B=e.groupBySection)==null?void 0:B.options)==null?void 0:C[0])==null?void 0:G.value)),[P,w]=m.useState(e.selectedShow??((g=e.showSection)==null?void 0:g.defaultValue)??((v=(S=(y=e.showSection)==null?void 0:y.options)==null?void 0:S[0])==null?void 0:v.value)),[a,s]=m.useState(e.selectedGroupByPeriod??(($=e.periodSection)==null?void 0:$.defaultValue)??((V=(j=(q=e.periodSection)==null?void 0:q.options)==null?void 0:j[0])==null?void 0:V.value));return m.useEffect(()=>{var o,r,c,p;i(e.selectedGroupBy??((o=e.groupBySection)==null?void 0:o.defaultValue)??((p=(c=(r=e.groupBySection)==null?void 0:r.options)==null?void 0:c[0])==null?void 0:p.value))},[e.selectedGroupBy,e.groupBySection]),m.useEffect(()=>{var o,r,c,p;w(e.selectedShow??((o=e.showSection)==null?void 0:o.defaultValue)??((p=(c=(r=e.showSection)==null?void 0:r.options)==null?void 0:c[0])==null?void 0:p.value))},[e.selectedShow,e.showSection]),m.useEffect(()=>{var o,r,c,p;s(e.selectedGroupByPeriod??((o=e.periodSection)==null?void 0:o.defaultValue)??((p=(c=(r=e.periodSection)==null?void 0:r.options)==null?void 0:c[0])==null?void 0:p.value))},[e.selectedGroupByPeriod,e.periodSection]),t.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",maxWidth:"800px",margin:"auto"},children:t.jsx(ae,{...e,groupBySection:e.groupBySection,showSection:e.showSection,periodSection:e.periodSection,selectedGroupBy:d,selectedShow:P,selectedGroupByPeriod:a,onGroupByChange:o=>{var r;i(o),(r=e.onGroupByChange)==null||r.call(e,o)},onShowChange:o=>{var r;w(o),(r=e.onShowChange)==null||r.call(e,o)},onGroupByPeriodChange:o=>{var r;s(o),(r=e.onGroupByPeriodChange)==null||r.call(e,o)}})})},h=R.bind({});h.args={title:"Sales Performance",children:t.jsx(ye,{...Pe}),footer:"Data updated hourly.",groupBySection:E,showSection:O,periodSection:A,chartOptionsMenu:$e};h.storyName="Full Example";const f=R.bind({});f.args={title:"Basic Chart",children:t.jsx("div",{style:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed grey"},children:"Chart Content"})};f.storyName="Minimal Configuration";const b=R.bind({});b.args={...h.args,groupByOptions:void 0,chartOptionsMenu:void 0,title:"Chips and Button Group Only"};b.storyName="Chips & Periods Only";var X,I,U;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(U=(I=h.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var K,Q,Y;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Gt=["Default","Minimal","WithChipsAndPeriods"];export{h as Default,f as Minimal,b as WithChipsAndPeriods,Gt as __namedExportsOrder,Ct as default};
