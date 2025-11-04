import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as b}from"./index-ad58220e.js";import{A as d}from"./index-7f7620fc.js";import{L as B}from"./index-6dcb29cb.js";import{T as I}from"./ToggleComponent-7707e758.js";import{T as V}from"./ThemeContext-71b3bf8d.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-675ea4f2.js";import"./config-43c6afbd.js";import"./searchComponent-bcb17182.js";import"./Input-3f8aa787.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-192f9362.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./htmlPropsUtils-2b22d933.js";import"./Button-21321eef.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./ltCheckBox-fb658f45.js";import"./Checkbox-cb5dd6fb.js";import"./_baseSet-d58de3a8.js";import"./index-0c2df6d5.js";import"./Header-30441d32.js";import"./stringConstants-f1def6f8.js";import"./lodash-9978a6f3.js";const _e={title:"AdvancedMultiSelectDropdown",component:d,decorators:[t=>e.jsx(V,{children:e.jsx(t,{})})]},m=t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(d,{...t})]}),o=m.bind({});o.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,showCount:!1,showCustomLabel:"",isCollapsible:!1,defaultSelectedItems:[],onSelect:t=>{console.log(t)},options:[{label:"Option 1",id:"1",icon:e.jsx(B,{icon:"food",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:e.jsx(B,{icon:"food",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const p=m.bind({});p.args={...o.args,options:Array(100).fill(null).map((t,s)=>({label:`Option ${s+1}`,id:`${s+1}`}))};const u=m.bind({});u.args={...o.args,defaultSelectedItems:["1","2.1"],showOnlyEnabledInInput:!0};const g=m.bind({});g.args={...o.args,placeholder:"Select your options..."};const S=m.bind({});S.args={...o.args,isSearchable:!0};const c=t=>{const[s,l]=b.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(d,{...t,isMultiSelect:!1,onSelect:r=>{l(r)},defaultSelectedItems:s})]})};c.args={...o.args,isMultiSelect:!1};const h=m.bind({});h.args={...o.args,isCollapsible:!0};const a=t=>{const[s,l]=b.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(d,{...t,isMultiSelect:!1,showCheckedIcon:!0,onSelect:r=>{l(r)},defaultSelectedItems:s})]})};a.args={placeholder:"Select an option",isMultiSelect:!1,isSearchable:!1,showCheckedIcon:!0,isCollapsible:!1,defaultSelectedItems:[],options:[{label:"Homepage / Discovery",id:"1"},{label:"Authentication & Profile",id:"2"},{label:"Menu Browsing",id:"3"},{label:"Product Detail Page",id:"4"},{label:"Cart & Checkout",id:"5"},{label:"Order Tracking",id:"6"},{label:"Order History & Reordering",id:"7"},{label:"Support & Feedback",id:"8"}]};const n=t=>{const[s,l]=b.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(d,{...t,isMultiSelect:!1,showBottomButton:!0,bottomButtonText:"Add New Page",onBottomButtonClick:()=>alert("Add New Page clicked!"),showCheckedIcon:!0,onSelect:r=>{l(r)},defaultSelectedItems:s})]})};n.args={...a.args,showBottomButton:!0,bottomButtonText:"Add New Page"};const i=t=>{const[s,l]=b.useState(["1"]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Basic Select with Hover Effects, Checked Icons, and Bottom Button"}),e.jsx(d,{...t,isMultiSelect:!1,isSearchable:!0,showBottomButton:!0,bottomButtonText:"+ Add New Page",onBottomButtonClick:()=>alert("Add New Page clicked!"),showCheckedIcon:!0,onSelect:r=>{l(r),console.log("Selected:",r)},defaultSelectedItems:s})]})]})};i.args={placeholder:"Homepage / Discovery",options:[{label:"Homepage / Discovery",id:"1"},{label:"Authentication & Profile",id:"2"},{label:"Menu Browsing",id:"3"},{label:"Product Detail Page",id:"4"},{label:"Cart & Checkout",id:"5"},{label:"Order Tracking",id:"6"},{label:"Order History & Reordering",id:"7"},{label:"Support & Feedback",id:"8"}]};c.__docgenInfo={description:"",methods:[],displayName:"withSingleSelection"};a.__docgenInfo={description:"",methods:[],displayName:"BasicSelectWithCheckedIcon"};n.__docgenInfo={description:"",methods:[],displayName:"BasicSelectWithBottomButton"};i.__docgenInfo={description:"",methods:[],displayName:"BasicSelectWithCheckedIconAndBottomButton"};var w,f,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,k,A;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,M,T;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(T=(M=u.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var j,v,P;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(P=(v=g.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var O,W,y;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(y=(W=S.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var N,_,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return <>
      <ToggleComponent />
      <AdvancedMultiSelectDropdown {...args} isMultiSelect={false} onSelect={(selectedItems: string[]) => {
      setSelectedItems(selectedItems);
    }} defaultSelectedItems={selectedItems} />
    </>;
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,H,L;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var R,z,$;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return <>
      <ToggleComponent />
      <AdvancedMultiSelectDropdown {...args} isMultiSelect={false} showCheckedIcon={true} onSelect={(selectedItems: string[]) => {
      setSelectedItems(selectedItems);
    }} defaultSelectedItems={selectedItems} />
    </>;
}`,...($=(z=a.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var q,G,J;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return <>
      <ToggleComponent />
      <AdvancedMultiSelectDropdown {...args} isMultiSelect={false} showBottomButton={true} bottomButtonText="Add New Page" onBottomButtonClick={() => alert('Add New Page clicked!')} showCheckedIcon={true} onSelect={(selectedItems: string[]) => {
      setSelectedItems(selectedItems);
    }} defaultSelectedItems={selectedItems} />
    </>;
}`,...(J=(G=n.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['1']);
  return <>
      <ToggleComponent />
      <div style={{
      marginBottom: '400px',
      paddingTop: '50px'
    }}>
        <h3>Basic Select with Hover Effects, Checked Icons, and Bottom Button</h3>
        <AdvancedMultiSelectDropdown {...args} isMultiSelect={false} isSearchable={true} showBottomButton={true} bottomButtonText="+ Add New Page" onBottomButtonClick={() => alert('Add New Page clicked!')} showCheckedIcon={true} onSelect={(items: string[]) => {
        setSelectedItems(items);
        console.log('Selected:', items);
      }} defaultSelectedItems={selectedItems} />
      </div>
    </>;
}`,...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ee=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible","BasicSelectWithCheckedIcon","BasicSelectWithBottomButton","BasicSelectWithCheckedIconAndBottomButton"];export{n as BasicSelectWithBottomButton,a as BasicSelectWithCheckedIcon,i as BasicSelectWithCheckedIconAndBottomButton,g as CustomPlaceholder,o as Default,p as DropdownWithLongList,u as DropdownWithPreselectedOptions,S as WithSearchEnabled,Ee as __namedExportsOrder,_e as default,h as withCollapsible,c as withSingleSelection};
