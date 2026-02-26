import{j as e}from"./jsx-runtime-8406ef1e.js";import{A as l}from"./index-d1022375.js";import{L as s}from"./index-f03014ac.js";import{T as n}from"./ToggleComponent-7707e758.js";import{T as te}from"./ThemeContext-71b3bf8d.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-675ea4f2.js";import"./config-43c6afbd.js";import"./ltButton-662e626e.js";import"./Button-97fd5a94.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./Icon-5cfe3eb1.js";import"./Label-11060fec.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-25182749.js";import"./includes-c2454020.js";import"./index-4fee7e45.js";import"./Portal-86734c92.js";import"./map-db19bd84.js";import"./searchComponent-c3fbd203.js";import"./Input-94f4c1a5.js";import"./Search-0f2c1240.js";import"./isEmpty-f7f0c885.js";import"./index-e8ec4132.js";import"./_arrayReduce-865b0d3f.js";import"./ltCheckBox-53af272b.js";import"./Checkbox-a190a734.js";import"./_baseSet-4a5e4309.js";import"./index-bffd4006.js";import"./Header-81a0b955.js";import"./stringConstants-f1def6f8.js";import"./lodash-9978a6f3.js";const Le={title:"AdvancedMultiSelectDropdown",component:l,decorators:[t=>e.jsx(te,{children:e.jsx(t,{})})]},u=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(l,{...t})]}),r=u.bind({});r.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,showCount:!1,showCustomLabel:"",isCollapsible:!1,defaultSelectedItems:[],onSelect:t=>{console.log(t)},options:[{label:"Option 1",id:"1",icon:e.jsx(s,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:e.jsx(s,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const g=u.bind({});g.args={...r.args,options:Array(100).fill(null).map((t,o)=>({label:`Option ${o+1}`,id:`${o+1}`}))};const h=u.bind({});h.args={...r.args,defaultSelectedItems:["1","2.1"],showOnlyEnabledInInput:!0};const S=u.bind({});S.args={...r.args,placeholder:"Select your options..."};const b=u.bind({});b.args={...r.args,isSearchable:!0};const i=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(l,{...t,onSelect:o=>{console.log("Selected:",o)}})]});i.args={...r.args,isMultiSelect:!1,defaultSelectedItems:[]};const x=u.bind({});x.args={...r.args,isCollapsible:!0};const a=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Single Select with Checkmark Icon"}),e.jsx("p",{children:"Shows checkmark for selected item with modern rounded styling"}),e.jsx(l,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});a.args={placeholder:"Select an option",isMultiSelect:!1,isSearchable:!0,showCheckedIcon:!0,isCollapsible:!1,itemBorderRadius:"8px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#f0f4f8",selectedBgColor:"#e8f5e9",checkmarkColor:"#2e7d32",defaultSelectedItems:["2"],options:[{label:"Homepage / Discovery",id:"1"},{label:"Authentication & Profile",id:"2"},{label:"Menu Browsing",id:"3"},{label:"Product Detail Page",id:"4"},{label:"Cart & Checkout",id:"5"}]};const c=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Single Select with Bottom Button"}),e.jsx("p",{children:"Checkmark icon, custom colors, and bottom action button"}),e.jsx(l,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});c.args={placeholder:"Choose your plan",isMultiSelect:!1,isSearchable:!0,showCheckedIcon:!0,isCollapsible:!1,itemBorderRadius:"10px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#fff3e0",selectedBgColor:"#ffe0b2",checkmarkColor:"#e65100",defaultSelectedItems:["3"],bottomButton:{show:!0,text:"Upgrade Now",icon:e.jsx(s,{useReactIcon:!0,reactIconName:"MdArrowForward",reactIconSet:"md",size:"small"}),color:"#e65100",hoverBgColor:"#e65100",hoverColor:"#ffffff",onClick:()=>alert("Upgrade clicked!")},options:[{label:"Free Plan - $0/month",id:"1"},{label:"Starter Plan - $9/month",id:"2"},{label:"Pro Plan - $29/month",id:"3"},{label:"Enterprise Plan - Custom",id:"4"}]};const d=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Multi-Select with Custom Styling"}),e.jsx("p",{children:"Collapsible groups, rounded items, custom hover colors"}),e.jsx(l,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});d.args={placeholder:"Select categories",isMultiSelect:!0,isSearchable:!0,isCollapsible:!0,showSelectAll:!0,itemBorderRadius:"10px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#e8f5e9",defaultSelectedItems:["1","2.1"],options:[{label:"Fruits",id:"1",icon:e.jsx(s,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),children:[{label:"Apple",id:"1.1"},{label:"Banana",id:"1.2"},{label:"Orange",id:"1.3"}]},{label:"Vegetables",id:"2",icon:e.jsx(s,{useReactIcon:!0,reactIconName:"MdRestaurant",reactIconSet:"md",size:"small",fitted:!0}),children:[{label:"Carrot",id:"2.1"},{label:"Broccoli",id:"2.2"},{label:"Tomato",id:"2.3"}]},{label:"Dairy",id:"3",children:[{label:"Milk",id:"3.1"},{label:"Cheese",id:"3.2"},{label:"Yogurt",id:"3.3"}]}]};const m=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Multi-Select - All Customizations Combined"}),e.jsx("p",{children:"Collapsible groups, custom colors (hover, selected, button), rounded items"}),e.jsx(l,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});m.args={placeholder:"Select features",isMultiSelect:!0,isSearchable:!0,isCollapsible:!0,showSelectAll:!0,itemBorderRadius:"8px",removeBorderBetweenItems:!0,itemsFullWidth:!1,hoverBgColor:"#e8eaf6",selectedBgColor:"#c5cae9",defaultSelectedItems:["1","1.1","2.2"],bottomButton:{show:!0,text:"Save Selection",icon:e.jsx(s,{useReactIcon:!0,reactIconName:"MdSave",reactIconSet:"md",size:"small"}),color:"#3f51b5",hoverBgColor:"#3f51b5",hoverColor:"#ffffff",onClick:()=>alert("Selection saved!")},options:[{label:"Analytics",id:"1",children:[{label:"Basic Reports",id:"1.1"},{label:"Advanced Insights",id:"1.2"},{label:"Custom Dashboards",id:"1.3"}]},{label:"Integrations",id:"2",children:[{label:"API Access",id:"2.1"},{label:"Webhooks",id:"2.2"},{label:"Third-party Apps",id:"2.3"}]},{label:"Support",id:"3",children:[{label:"Email Support",id:"3.1"},{label:"Live Chat",id:"3.2"},{label:"Phone Support",id:"3.3"}]}]};const p=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsxs("div",{style:{marginBottom:"400px",paddingTop:"50px"},children:[e.jsx("h3",{children:"Bottom Button Customization"}),e.jsx("p",{children:"Demonstrates custom className and icon color matching bottomButton.color"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"8px"},children:"Note: Custom className styling works without !important due to &&& specificity in styled-components"}),e.jsx("style",{children:`
          .my-custom-bottom-button {
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
        `}),e.jsx(l,{...t,onSelect:o=>{console.log("Selected:",o)}})]})]});p.args={placeholder:"Select tags",isMultiSelect:!0,isSearchable:!0,showSelectAll:!0,itemBorderRadius:"6px",defaultSelectedItems:["1","2"],bottomButton:{show:!0,text:"Apply Tags",icon:e.jsx(s,{useReactIcon:!0,reactIconName:"MdLocalOffer",reactIconSet:"md",size:"small"}),color:"#9c27b0",hoverBgColor:"#9c27b0",hoverColor:"#ffffff",className:"my-custom-bottom-button",onClick:()=>alert("Tags applied!")},options:[{label:"Important",id:"1"},{label:"Work",id:"2"},{label:"Personal",id:"3"},{label:"Follow-up",id:"4"},{label:"Archive",id:"5"}]};i.__docgenInfo={description:"",methods:[],displayName:"withSingleSelection"};a.__docgenInfo={description:"",methods:[],displayName:"SingleSelectWithCheckmark"};c.__docgenInfo={description:"",methods:[],displayName:"SingleSelectWithBottomButton"};d.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithCustomStyling"};m.__docgenInfo={description:"",methods:[],displayName:"MultiSelectFullyCustomized"};p.__docgenInfo={description:"",methods:[],displayName:"BottomButtonCustomization"};var f,C,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var B,v,I;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(I=(v=g.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var j,y,M;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(M=(y=h.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var k,T,A;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(A=(T=S.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var D,N,W;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(W=(N=b.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var z,F,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <>
      <ToggleComponent />
      <AdvancedMultiSelectDropdown {...args} onSelect={(items: string[]) => {
      console.log('Selected:', items);
    }} />
    </>;
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var O,P,_;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`args => <>
    <ToggleComponent />
    <AdvancedMultiSelectDropdown {...args} />
  </>`,...(_=(P=x.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var L,E,$;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...($=(E=a.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var U,H,V;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var Y,q,G;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
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
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ee=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible","SingleSelectWithCheckmark","SingleSelectWithBottomButton","MultiSelectWithCustomStyling","MultiSelectFullyCustomized","BottomButtonCustomization"];export{p as BottomButtonCustomization,S as CustomPlaceholder,r as Default,g as DropdownWithLongList,h as DropdownWithPreselectedOptions,m as MultiSelectFullyCustomized,d as MultiSelectWithCustomStyling,c as SingleSelectWithBottomButton,a as SingleSelectWithCheckmark,b as WithSearchEnabled,Ee as __namedExportsOrder,Le as default,x as withCollapsible,i as withSingleSelection};
