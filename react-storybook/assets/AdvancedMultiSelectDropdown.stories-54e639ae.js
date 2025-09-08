import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as F}from"./index-ad58220e.js";import{A as d}from"./index-a689518f.js";import{L as m}from"./index-6dcb29cb.js";import{T as P}from"./ToggleComponent-2e9a605f.js";import{T as $}from"./ThemeContext-71b3bf8d.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-675ea4f2.js";import"./config-43c6afbd.js";import"./searchComponent-bcb17182.js";import"./Input-3f8aa787.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-192f9362.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./htmlPropsUtils-2b22d933.js";import"./Button-21321eef.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./ltCheckBox-fb658f45.js";import"./Checkbox-cb5dd6fb.js";import"./_baseSet-d58de3a8.js";import"./index-0c2df6d5.js";import"./Header-30441d32.js";import"./stringConstants-f1def6f8.js";import"./lodash-9978a6f3.js";const Me={title:"AdvancedMultiSelectDropdown",component:d,decorators:[o=>e.jsx($,{children:e.jsx(o,{})})]},s=o=>e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsx(d,{...o})]}),t=s.bind({});t.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,showCount:!1,showCustomLabel:"",isCollapsible:!1,defaultSelectedItems:[],onSelect:o=>{console.log(o)},options:[{label:"Option 1",id:"1",icon:e.jsx(m,{icon:"food",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:e.jsx(m,{icon:"food",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const a=s.bind({});a.args={...t.args,options:Array(100).fill(null).map((o,p)=>({label:`Option ${p+1}`,id:`${p+1}`}))};const i=s.bind({});i.args={...t.args,defaultSelectedItems:["1","2.1"],showOnlyEnabledInInput:!0};const l=s.bind({});l.args={...t.args,placeholder:"Select your options..."};const n=s.bind({});n.args={...t.args,isSearchable:!0};const r=o=>{const[p,y]=F.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsx(d,{...o,isMultiSelect:!1,onSelect:z=>{y(z)},defaultSelectedItems:p})]})};r.args={...t.args,isMultiSelect:!1};const c=s.bind({});c.args={...t.args,isCollapsible:!0};r.__docgenInfo={description:"",methods:[],displayName:"withSingleSelection"};var u,g,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var h,b,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,D,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var I,x,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(M=(x=l.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var O,j,A;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(A=(j=n.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var T,v,L;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return <>
      <ToggleComponent />
      <AdvancedMultiSelectDropdown {...args} isMultiSelect={false} onSelect={(selectedItems: string[]) => {
      setSelectedItems(selectedItems);
    }} defaultSelectedItems={selectedItems} />
    </>;
}`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var E,W,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const Oe=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible"];export{l as CustomPlaceholder,t as Default,a as DropdownWithLongList,i as DropdownWithPreselectedOptions,n as WithSearchEnabled,Oe as __namedExportsOrder,Me as default,c as withCollapsible,r as withSingleSelection};
