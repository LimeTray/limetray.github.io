import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as g}from"./index-ad58220e.js";import{d as u,o as ge}from"./styled-components.browser.esm-675ea4f2.js";import{t as ye}from"./config-92a52d19.js";import{C as he}from"./index-eef5d194.js";import{L as Se}from"./index-6dcb29cb.js";import{B as te}from"./Button-21321eef.js";import{D as fe}from"./Dropdown-e3088384.js";import{M as ve}from"./mixedChart-a504e99e.js";import"./_commonjsHelpers-de833af9.js";import"./Popup-7902b892.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./childrenUtils-dd3b0ba5.js";import"./includes-192f9362.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./toPropertyKey-4015efc6.js";import"./ltRadio-7f0a2b36.js";import"./Radio-e712d17b.js";import"./Checkbox-cb5dd6fb.js";import"./htmlPropsUtils-2b22d933.js";import"./index-9a96a2ee.js";import"./searchComponent-bcb17182.js";import"./Input-3f8aa787.js";import"./map-20538cdf.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./ltCheckBox-fb658f45.js";import"./index-1a186ea7.js";import"./Header-30441d32.js";import"./stringConstants-f1def6f8.js";import"./lodash-9978a6f3.js";import"./without-708f3584.js";import"./deburr-94e08562.js";import"./auto-a199c2c6.js";const be=u.div`
  background-color: ${({theme:e,darkMode:t,darkBgColor:o})=>t?o||e.colors.darkmodechartbg:e.colors.white};
  padding-bottom: ${({theme:e})=>e.padding.small};
`,oe=(e,t,o)=>`
  font-weight: ${e.fontWeight};
  font-size: ${e.fontSize};
  line-height: ${e.lineHeight};
  font-family: ${e.fontFamily};
  color: ${t};
  text-align: ${o||"left"};
`;u.div`
  ${({theme:e,darkMode:t,darkTextColor:o})=>oe(e.typography.heading,t?o||e.colors.darkmodetextsecondary:e.colors.text)}
  font-size: 1.5rem;
`;const we=u.div`
  ${({theme:e,darkMode:t,darkTextColor:o})=>oe(e.typography.caption,t?o||e.colors.darkmodetextthird:e.colors.text,"center")}
  padding: ${({theme:e})=>e.padding.small};
`,Be=u.div`
  background-color: ${({theme:e,darkMode:t,darkBgColor:o})=>t?o||e.colors.darkmodechartbg:e.colors.white};
  color: ${({theme:e,darkMode:t,darkTextColor:o})=>t?o||e.colors.darkmodecharttext:e.colors.text};
  padding: ${({theme:e})=>e.padding.medium} ${({theme:e})=>e.padding.small};
`,Ce=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small};
  gap: ${({theme:e})=>e.padding.medium};
  border-bottom: 1px solid
    ${({theme:e,darkMode:t})=>t?e.colors.darkmodeborder:e.colors.border};
  color: ${({darkMode:e,darkTextColor:t})=>e?t||"#fff":"inherit"};
`,Ge=u.div`
  // Title takes available space
  
`,ke=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.padding.medium};
`,xe=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.padding.small} ${({theme:e})=>e.padding.small} 0;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.padding.small};
`,J=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.padding.tiny};
  align-items: center;
`,Pe=u.button`
  font-family: 'Poppins', sans-serif;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme:e,darkMode:t,darkTextColor:o})=>t?o||e.colors.darkmodetextsecondary:e.colors.text};
  background-color: ${({theme:e,darkMode:t,darkBgColor:o,active:f})=>t?f?o||e.colors.darkmodechipbgactive:o||e.colors.darkmodechipbg:e.colors.grey};
  cursor: pointer;
  border: 1.5px solid
    ${({theme:e,darkMode:t,active:o})=>o?t?e.colors.primary:"#000":"transparent"};
  transition: background-color 0.2s ease, border-color 0.2s ease;

  // Hover state styling
  &:hover {
    background-color: ${({theme:e,darkMode:t,active:o})=>o?t?e.colors.darkmodechipbgactive:e.colors.grey:t?e.colors.darkmodechipbg:e.colors.mediumGray};
    border-color: ${({active:e,theme:t,darkMode:o})=>e?o?t.colors.primary:"#000":"transparent"};
  }

  // Remove default button focus outline
  &:focus {
    outline: none;
  }
  // Add focus-visible for accessibility if outline is removed
  &:focus-visible {
     box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary} ;
  }
`,qe=u(fe)`
  min-width: 150px;
  .ui.label {
      background-color: ${({theme:e,darkMode:t,darkBgColor:o})=>t?o||e.colors.darkmodechipbg:e.colors.grey} !important;
      color: ${({theme:e,darkMode:t,darkTextColor:o})=>t?o||e.colors.darkmodetextsecondary:e.colors.text} !important;
      padding: ${({theme:e})=>e.padding.tiny} !important;
  }
  .menu {
    background-color: ${({theme:e,darkMode:t,darkBgColor:o})=>t?o||e.colors.darkmodebgsecondary:e.colors.white} !important;
    color: ${({theme:e,darkMode:t,darkTextColor:o})=>t?o||e.colors.darkmodetext:e.colors.text} !important;
  }
  .item {
    color: ${({theme:e,darkMode:t,darkTextColor:o})=>t?o||e.colors.darkmodetext:e.colors.text} !important;
  }
`,$e=u(te.Group)`
  box-shadow: none !important;
  border-radius: ${({theme:e})=>e.borderRadius.medium??"6px"} !important;
  
  .ui.button {
    background-color: ${({theme:e,darkMode:t,darkBgColor:o})=>t?o||e.colors.darkmodechipbg:e.colors.grey} !important;
    color: ${({theme:e,darkMode:t,darkTextColor:o})=>t?o||e.colors.darkmodetextsecondary:e.colors.text} !important;
    padding: ${({theme:e})=>e.padding.tiny} ${({theme:e})=>e.padding.small} !important;
    font-weight: ${({theme:e})=>e.typography.label.fontWeight} !important;
    font-size: 1rem !important;
    box-shadow: none !important;
    border: 1px solid
      ${({theme:e,darkMode:t})=>t?e.colors.darkmodeborder:e.colors.border} !important;

    &:hover {
       background-color: ${({theme:e,darkMode:t})=>t?e.colors.darkmodechipbgactive:e.colors.mediumGray} !important;
    }

    &.active {
       background-color: ${({theme:e,darkMode:t})=>e.colors.secondary} !important;
       color: ${({theme:e,darkMode:t})=>e.colors.white} !important;
       border-color: ${({theme:e,darkMode:t})=>e.colors.secondary} !important;
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
`,re=({footer:e,children:t,chartOptionsMenu:o,showSelectAll:f,showSelected:k,groupBySection:i,showSection:c,periodSection:s,selectedGroupBy:x,selectedShow:P,selectedGroupByPeriod:q,filterIconColor:y,onGroupByChange:v,onShowChange:b,onGroupByPeriodChange:w,darkMode:d=!1,darkBgColor:B,darkTextColor:h})=>{var A,R,F,D,N,M;(!y||y.trim()==="")&&(y=d?"#fff":"rgb(69 69 69 / 50%)");const[j,n]=g.useState(x??(i==null?void 0:i.defaultValue)??((R=(A=i==null?void 0:i.options)==null?void 0:A[0])==null?void 0:R.value)),[a,p]=g.useState(P??(c==null?void 0:c.defaultValue)??((D=(F=c==null?void 0:c.options)==null?void 0:F[0])==null?void 0:D.value)),[m,ae]=g.useState(q??(s==null?void 0:s.defaultValue)??((M=(N=s==null?void 0:s.options)==null?void 0:N[0])==null?void 0:M.value)),le=v!==void 0?x:j,ie=b!==void 0?P:a,se=w!==void 0?q:m,de=(l,$)=>{const W=$.value;v?v(W):n(W)},ce=l=>{b?b(l):p(l)},ue=l=>{w?w(l):ae(l)},pe=g.useMemo(()=>{var l;return((l=i==null?void 0:i.options)==null?void 0:l.map($=>({key:$.value,text:$.label,value:$.value})))??[]},[i]),me=r.jsx(Se,{icon:"filter",fitted:!0,color:y,style:{cursor:"pointer",color:y}});return r.jsx(ge,{theme:ye,children:r.jsxs(be,{darkMode:d,darkBgColor:B,children:[r.jsxs(Ce,{darkMode:d,darkTextColor:h,children:[r.jsx(Ge,{children:r.jsx(J,{children:c&&c.options.length>0&&r.jsx(r.Fragment,{children:c.options.map(l=>r.jsx(Pe,{darkMode:d,active:ie===l.value,onClick:()=>ce(l.value),type:"button",children:l.label},l.value))})})}),r.jsxs(ke,{children:[i&&i.options.length>0&&r.jsx(qe,{selection:!0,options:pe,value:le,onChange:de,placeholder:i.placeholder??"Group By...",compact:!0,darkMode:d,darkBgColor:B,darkTextColor:h}),o&&o.sections&&o.sections.length>0&&r.jsx(he,{...o,darkMode:d,trigerElement:o.trigerElement||me,showSelectAll:f!==void 0?f:o.showSelectAll!==void 0?o.showSelectAll:!0,showSelected:k!==void 0?k:!1})]})]}),s&&r.jsx(xe,{darkMode:d,children:s&&s.options.length>0&&r.jsx(J,{style:{marginLeft:"auto"},children:r.jsx($e,{darkMode:d,darkBgColor:"white",darkTextColor:"black",children:s.options.map(l=>r.jsx(te,{active:se===l.value,onClick:()=>ue(l.value),children:l.label},l.value))})})}),r.jsx(Be,{darkMode:d,darkBgColor:B,darkTextColor:h,children:t}),e&&r.jsx(we,{darkMode:d,darkTextColor:h,children:e})]})})},ne=re;re.__docgenInfo={description:"",methods:[],displayName:"ChartContainer",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},chartOptionsMenu:{required:!1,tsType:{name:"intersection",raw:"Omit<ChartOptionsMenuProps, 'trigerElement'> & { trigerElement?: JSX.Element,darkmode?: boolean }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  sections: (Section | SectionGroup)[];
  onApply: (SelectedFilter: SelectedFilter) => void;
  trigerElement: JSX.Element;
  showSelectAll?: boolean;
   showSelected?: boolean;
  darkMode?: boolean;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"unknown"}],raw:"(Section | SectionGroup)[]",required:!0}},{key:"onApply",value:{name:"signature",type:"function",raw:"(SelectedFilter: SelectedFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: (string | number | undefined)[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | undefined)[]",required:!0}}]}},name:"SelectedFilter"}],return:{name:"void"}},required:!0}},{key:"trigerElement",value:{name:"JSX.Element",required:!0}},{key:"showSelectAll",value:{name:"boolean",required:!1}},{key:"showSelected",value:{name:"boolean",required:!1}},{key:"darkMode",value:{name:"boolean",required:!1}}]}},{name:"literal",value:"'trigerElement'"}],raw:"Omit<ChartOptionsMenuProps, 'trigerElement'>"},{name:"signature",type:"object",raw:"{ trigerElement?: JSX.Element,darkmode?: boolean }",signature:{properties:[{key:"trigerElement",value:{name:"JSX.Element",required:!1}},{key:"darkmode",value:{name:"boolean",required:!1}}]}}]},description:""},groupBySection:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}}]}},description:""},showSelectAll:{required:!1,tsType:{name:"boolean"},description:""},showSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedGroupBy:{required:!1,tsType:{name:"string"},description:""},onGroupByChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedShow:{required:!1,tsType:{name:"string"},description:""},onShowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selectedGroupByPeriod:{required:!1,tsType:{name:"string"},description:""},onGroupByPeriodChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},filterIconColor:{required:!1,tsType:{name:"string"},description:""},darkMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""}}};const je={data:{labels:["2023 April - June","2023 October - December","2024 April - June","2024 October - December","2023 April - June","2023 October - December","2024 April - June","2024 October - December"],datasets:[{type:"bar",label:"Call Center",data:[20,25,30,28,20,25,30,28],backgroundColor:"#8B0000",barPercentage:1},{type:"bar",label:"Order Online",data:[15,20,18,22,15,20,18,22],backgroundColor:"#0073e6",barPercentage:1},{type:"bar",label:"POS",data:[5,6,8,7,5,6,8,7],backgroundColor:"#32CD32",barPercentage:1},{type:"bar",label:"Magicpin",data:[2,3,4,3,2,3,4,3],backgroundColor:"#FFD700",barPercentage:1},{type:"line",label:"Total",data:[42,54,60,60,42,54,60,60],borderColor:"#0000FF",borderWidth:2,pointBackgroundColor:"#0000FF",fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"}}},yTicks:e=>`${e}L`},V={name:"groupBy",options:[{value:"channels",label:"Channels"},{value:"service",label:"Service"}],defaultValue:"channels",placeholder:"Group By..."},E={name:"show",options:[{value:"orders",label:"Orders"},{value:"revenue",label:"Revenue"},{value:"aov",label:"AOV"}],defaultValue:"orders"},O={name:"period",options:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],defaultValue:"daily"},Ve={sections:[{name:"filters",sections:[{isMultiSelection:!1,label:"service:",name:"filtersService",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:"channel1",placeholder:"Select service"},{isMultiSelection:!0,label:"channel:",name:"filtersChannel",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select channels"},{isMultiSelection:!0,label:"meal group:",name:"filtersMealGroup",options:[{value:"channel1",label:"Channel 1"},{value:"channel2",label:"Channel 2"},{value:"service1",label:"Service 1"}],value:["channel1"],placeholder:"Select meal groups"}]}],onApply:e=>{console.log("Filters Applied:",e)},title:"Filter Options"};var z,H,_;const xt={title:"ChartContainer",component:ne,parameters:{docs:{description:{component:`
The \`ChartContainer\` wraps charts. Header includes title, optional 'Group By' dropdown, and filter menu. 
Below header: optional 'Show' chips (left) and 'Group By Period' button group (right). Optional footer.
        `}}},argTypes:{title:{description:"Title displayed at the top of the ChartContainer.",control:{type:"text"}},children:{description:"Content inside the ChartContainer, typically a chart component."},footer:{description:"Footer content displayed at the bottom of the ChartContainer.",control:{type:"text"}},groupBySection:{control:{type:"object"}},showSection:{control:{type:"object"}},periodSection:{control:{type:"object"}},selectedGroupBy:{control:{type:"select"},options:["",...((z=V==null?void 0:V.options)==null?void 0:z.map(e=>e.value))??[]]},selectedShow:{control:{type:"select"},options:["",...((H=E==null?void 0:E.options)==null?void 0:H.map(e=>e.value))??[]]},selectedGroupByPeriod:{control:{type:"select"},options:["",...((_=O==null?void 0:O.options)==null?void 0:_.map(e=>e.value))??[]]},onGroupByChange:{action:"onGroupByChange"},onShowChange:{action:"onShowChange"},onGroupByPeriodChange:{action:"onGroupByPeriodChange"},chartOptionsMenu:{control:{type:"object"}},filterIconColor:{description:"Color of the filter icon in the header.",control:{type:"color"}}}},T=e=>{var s,x,P,q,y,v,b,w,d,B,h,j;const[t,o]=g.useState(e.selectedGroupBy??((s=e.groupBySection)==null?void 0:s.defaultValue)??((q=(P=(x=e.groupBySection)==null?void 0:x.options)==null?void 0:P[0])==null?void 0:q.value)),[f,k]=g.useState(e.selectedShow??((y=e.showSection)==null?void 0:y.defaultValue)??((w=(b=(v=e.showSection)==null?void 0:v.options)==null?void 0:b[0])==null?void 0:w.value)),[i,c]=g.useState(e.selectedGroupByPeriod??((d=e.periodSection)==null?void 0:d.defaultValue)??((j=(h=(B=e.periodSection)==null?void 0:B.options)==null?void 0:h[0])==null?void 0:j.value));return g.useEffect(()=>{var n,a,p,m;o(e.selectedGroupBy??((n=e.groupBySection)==null?void 0:n.defaultValue)??((m=(p=(a=e.groupBySection)==null?void 0:a.options)==null?void 0:p[0])==null?void 0:m.value))},[e.selectedGroupBy,e.groupBySection]),g.useEffect(()=>{var n,a,p,m;k(e.selectedShow??((n=e.showSection)==null?void 0:n.defaultValue)??((m=(p=(a=e.showSection)==null?void 0:a.options)==null?void 0:p[0])==null?void 0:m.value))},[e.selectedShow,e.showSection]),g.useEffect(()=>{var n,a,p,m;c(e.selectedGroupByPeriod??((n=e.periodSection)==null?void 0:n.defaultValue)??((m=(p=(a=e.periodSection)==null?void 0:a.options)==null?void 0:p[0])==null?void 0:m.value))},[e.selectedGroupByPeriod,e.periodSection]),r.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",maxWidth:"800px",margin:"auto"},children:r.jsx(ne,{...e,groupBySection:e.groupBySection,showSection:e.showSection,periodSection:e.periodSection,selectedGroupBy:t,selectedShow:f,selectedGroupByPeriod:i,onGroupByChange:n=>{var a;o(n),(a=e.onGroupByChange)==null||a.call(e,n)},onShowChange:n=>{var a;k(n),(a=e.onShowChange)==null||a.call(e,n)},onGroupByPeriodChange:n=>{var a;c(n),(a=e.onGroupByPeriodChange)==null||a.call(e,n)}})})},S=T.bind({});S.args={title:"Sales Performance",children:r.jsx(ve,{...je}),footer:"Data updated hourly.",groupBySection:V,showSection:E,periodSection:O,chartOptionsMenu:Ve,darkMode:!1};S.storyName="Full Example";const C=T.bind({});C.args={title:"Basic Chart",children:r.jsx("div",{style:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed grey"},children:"Chart Content"}),darkMode:!0};C.storyName="Minimal Configuration";const G=T.bind({});G.args={...S.args,groupByOptions:void 0,chartOptionsMenu:void 0,title:"Chips and Button Group Only",darkMode:!0};G.storyName="Chips & Periods Only";var L,X,I;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...(I=(X=S.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};var U,K,Q;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;G.parameters={...G.parameters,docs:{...(Y=G.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
}`,...(ee=(Z=G.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Pt=["Default","Minimal","WithChipsAndPeriods"];export{S as Default,C as Minimal,G as WithChipsAndPeriods,Pt as __namedExportsOrder,xt as default};
