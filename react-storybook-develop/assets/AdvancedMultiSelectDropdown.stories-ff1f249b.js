import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{A as s}from"./index-a5330719.js";import{L as l}from"./index-c3b335ed.js";import{T as n}from"./ToggleComponent-e6524698.js";import{T as se}from"./ThemeContext-ab9e94eb.js";import"./index-04c7fd94.js";import"./_commonjsHelpers-725317a4.js";import"./styled-components.browser.esm-f4af7a4c.js";import"./config-d270d9b6.js";import"./ltButton-7f1666b9.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./searchComponent-7a2ff757.js";import"./Input-4003f5c3.js";import"./Search-ce2a06d3.js";import"./isEmpty-0f216811.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./ltCheckBox-29163e21.js";import"./Checkbox-ab34d2c3.js";import"./_baseSet-aac0c625.js";import"./index-995f6cf8.js";import"./Header-9a2ec54b.js";import"./stringConstants-7a556fc0.js";import"./lodash-15082d9a.js";const Ye={title:"AdvancedMultiSelectDropdown",component:s,decorators:[t=>e.jsx(se,{children:e.jsx(t,{})})]},g=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(s,{...t})]}),r=g.bind({});r.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,showCount:!1,showCustomLabel:"",isCollapsible:!1,defaultSelectedItems:[],onSelect:t=>{console.log(t)},options:[{label:"Option 1",id:"1",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const h=g.bind({});h.args={...r.args,options:Array(100).fill(null).map((t,o)=>({label:`Option ${o+1}`,id:`${o+1}`}))};const S=g.bind({});S.args={...r.args,defaultSelectedItems:["1","2.1"],showOnlyEnabledInInput:!0};const b=g.bind({});b.args={...r.args,placeholder:"Select your options..."};const x=g.bind({});x.args={...r.args,isSearchable:!0};const i=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(s,{...t,onSelect:o=>{console.log("Selected:",o)}})]});i.args={...r.args,isMultiSelect:!1,defaultSelectedItems:[]};const C=g.bind({});C.args={...r.args,isCollapsible:!0};const a=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Single Select with Checkmark Icon"}),e.jsx("p",{children:"Shows checkmark for selected item with modern rounded styling"}),e.jsx(s,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});a.args={placeholder:"Select an option",isMultiSelect:!1,isSearchable:!0,showCheckedIcon:!0,isCollapsible:!1,itemBorderRadius:"8px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#f0f4f8",selectedBgColor:"#e8f5e9",checkmarkColor:"#2e7d32",defaultSelectedItems:["2"],options:[{label:"Homepage / Discovery",id:"1"},{label:"Authentication & Profile",id:"2"},{label:"Menu Browsing",id:"3"},{label:"Product Detail Page",id:"4"},{label:"Cart & Checkout",id:"5"}]};const c=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Single Select with Bottom Button"}),e.jsx("p",{children:"Checkmark icon, custom colors, and bottom action button"}),e.jsx(s,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});c.args={placeholder:"Choose your plan",isMultiSelect:!1,isSearchable:!0,showCheckedIcon:!0,isCollapsible:!1,itemBorderRadius:"10px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#fff3e0",selectedBgColor:"#ffe0b2",checkmarkColor:"#e65100",defaultSelectedItems:["3"],bottomButton:{show:!0,text:"Upgrade Now",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdArrowForward",reactIconSet:"md",size:"small"}),color:"#e65100",hoverBgColor:"#e65100",hoverColor:"#ffffff",onClick:()=>alert("Upgrade clicked!")},options:[{label:"Free Plan - $0/month",id:"1"},{label:"Starter Plan - $9/month",id:"2"},{label:"Pro Plan - $29/month",id:"3"},{label:"Enterprise Plan - Custom",id:"4"}]};const d=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Multi-Select with Custom Styling"}),e.jsx("p",{children:"Collapsible groups, rounded items, custom hover colors"}),e.jsx(s,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});d.args={placeholder:"Select categories",isMultiSelect:!0,isSearchable:!0,isCollapsible:!0,showSelectAll:!0,itemBorderRadius:"10px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#e8f5e9",defaultSelectedItems:["1","2.1"],options:[{label:"Fruits",id:"1",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),children:[{label:"Apple",id:"1.1"},{label:"Banana",id:"1.2"},{label:"Orange",id:"1.3"}]},{label:"Vegetables",id:"2",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),children:[{label:"Carrot",id:"2.1"},{label:"Broccoli",id:"2.2"},{label:"Tomato",id:"2.3"}]},{label:"Dairy",id:"3",children:[{label:"Milk",id:"3.1"},{label:"Cheese",id:"3.2"},{label:"Yogurt",id:"3.3"}]}]};const m=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Custom Trigger Radius and Hover Text Color"}),e.jsx("p",{children:"Demonstrates rounded trigger styling and hover text/icon color updates on dropdown items"}),e.jsx(s,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});m.args={placeholder:"Select modules",isMultiSelect:!1,isSearchable:!1,showCheckedIcon:!0,isCollapsible:!1,borderRadius:"10px",itemBorderRadius:"10px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#eef2ff",hoverTextColor:"#4338ca",selectedBgColor:"#e0e7ff",checkmarkColor:"#4338ca",defaultSelectedItems:["2"],options:[{label:"Content",id:"1",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdOutlineArticle",reactIconSet:"md",size:"small",fitted:!0})},{label:"Display",id:"2",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdOutlineDesktopWindows",reactIconSet:"md",size:"small",fitted:!0})},{label:"Behavior",id:"3",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdOutlineTune",reactIconSet:"md",size:"small",fitted:!0})}]};const p=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Multi-Select - All Customizations Combined"}),e.jsx("p",{children:"Collapsible groups, custom colors (hover, selected, button), rounded items"}),e.jsx(s,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});p.args={placeholder:"Select features",isMultiSelect:!0,isSearchable:!0,isCollapsible:!0,showSelectAll:!0,itemBorderRadius:"8px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#e8eaf6",selectedBgColor:"#c5cae9",defaultSelectedItems:["1","1.1","2.2"],bottomButton:{show:!0,text:"Save Selection",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdSave",reactIconSet:"md",size:"small"}),color:"#3f51b5",hoverBgColor:"#3f51b5",hoverColor:"#ffffff",onClick:()=>alert("Selection saved!")},options:[{label:"Analytics",id:"1",children:[{label:"Basic Reports",id:"1.1"},{label:"Advanced Insights",id:"1.2"},{label:"Custom Dashboards",id:"1.3"}]},{label:"Integrations",id:"2",children:[{label:"API Access",id:"2.1"},{label:"Webhooks",id:"2.2"},{label:"Third-party Apps",id:"2.3"}]},{label:"Support",id:"3",children:[{label:"Email Support",id:"3.1"},{label:"Live Chat",id:"3.2"},{label:"Phone Support",id:"3.3"}]}]};const u=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Bottom Button Customization"}),e.jsx("p",{children:"Demonstrates custom className and icon color matching bottomButton.color"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"8px"},children:"Note: Custom className styling works without !important due to &&& specificity in styled-components"}),e.jsx("style",{children:`
          .my-custom-bottom-button {
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
        `}),e.jsx(s,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});u.args={placeholder:"Select tags",isMultiSelect:!0,isSearchable:!0,showSelectAll:!0,itemBorderRadius:"6px",defaultSelectedItems:["1","2"],bottomButton:{show:!0,text:"Apply Tags",icon:e.jsx(l,{useReactIcon:!0,reactIconName:"MdLocalOffer",reactIconSet:"md",size:"small"}),color:"#9c27b0",hoverBgColor:"#9c27b0",hoverColor:"#ffffff",className:"my-custom-bottom-button",onClick:()=>alert("Tags applied!")},options:[{label:"Important",id:"1"},{label:"Work",id:"2"},{label:"Personal",id:"3"},{label:"Follow-up",id:"4"},{label:"Archive",id:"5"}]};i.__docgenInfo={description:"",methods:[],displayName:"withSingleSelection"};a.__docgenInfo={description:"",methods:[],displayName:"SingleSelectWithCheckmark"};c.__docgenInfo={description:"",methods:[],displayName:"SingleSelectWithBottomButton"};d.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithCustomStyling"};m.__docgenInfo={description:"",methods:[],displayName:"TriggerRadiusAndHoverTextColor"};p.__docgenInfo={description:"",methods:[],displayName:"MultiSelectFullyCustomized"};u.__docgenInfo={description:"",methods:[],displayName:"BottomButtonCustomization"};var f,v,B;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(B=(v=r.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var w,I,j;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(j=(I=h.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var y,T,M;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(M=(T=S.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var k,A,D;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(D=(A=b.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var R,N,W;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(W=(N=x.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var z,F,O;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
      console.log('Selected:', items);
    }} />
    </>;
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var _,P,L;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(L=(P=C.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var E,H,$;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <div style={{
      marginBottom: '400px',
      paddingTop: '50px'
    }}>
        <h3>Single Select with Checkmark Icon</h3>
        <p>Shows checkmark for selected item with modern rounded styling</p>
        <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
        console.log('Selected:', items);
      }} />
      </div>
    </>;
}`,...($=(H=a.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var U,V,Y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <div style={{
      marginBottom: '400px',
      paddingTop: '50px'
    }}>
        <h3>Single Select with Bottom Button</h3>
        <p>Checkmark icon, custom colors, and bottom action button</p>
        <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
        console.log('Selected:', items);
      }} />
      </div>
    </>;
}`,...(Y=(V=c.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var q,G,J;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <div style={{
      marginBottom: '400px',
      paddingTop: '50px'
    }}>
        <h3>Multi-Select with Custom Styling</h3>
        <p>Collapsible groups, rounded items, custom hover colors</p>
        <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
        console.log('Selected:', items);
      }} />
      </div>
    </>;
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <div style={{
      marginBottom: '400px',
      paddingTop: '50px'
    }}>
        <h3>Custom Trigger Radius and Hover Text Color</h3>
        <p>Demonstrates rounded trigger styling and hover text/icon color updates on dropdown items</p>
        <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
        console.log('Selected:', items);
      }} />
      </div>
    </>;
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <div style={{
      marginBottom: '400px',
      paddingTop: '50px'
    }}>
        <h3>Multi-Select - All Customizations Combined</h3>
        <p>Collapsible groups, custom colors (hover, selected, button), rounded items</p>
        <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
        console.log('Selected:', items);
      }} />
      </div>
    </>;
}`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,le;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <div style={{
      marginBottom: '400px',
      paddingTop: '50px'
    }}>
        <h3>Bottom Button Customization</h3>
        <p>Demonstrates custom className and icon color matching bottomButton.color</p>
        <p style={{
        fontSize: '12px',
        color: '#666',
        marginTop: '8px'
      }}>
          Note: Custom className styling works without !important due to &&& specificity in styled-components
        </p>
        <style>{\`
          .my-custom-bottom-button {
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
        \`}</style>
        <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
        console.log('Selected:', items);
      }} />
      </div>
    </>;
}`,...(le=(re=u.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const qe=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible","SingleSelectWithCheckmark","SingleSelectWithBottomButton","MultiSelectWithCustomStyling","TriggerRadiusAndHoverTextColor","MultiSelectFullyCustomized","BottomButtonCustomization"];export{u as BottomButtonCustomization,b as CustomPlaceholder,r as Default,h as DropdownWithLongList,S as DropdownWithPreselectedOptions,p as MultiSelectFullyCustomized,d as MultiSelectWithCustomStyling,c as SingleSelectWithBottomButton,a as SingleSelectWithCheckmark,m as TriggerRadiusAndHoverTextColor,x as WithSearchEnabled,qe as __namedExportsOrder,Ye as default,C as withCollapsible,i as withSingleSelection};
