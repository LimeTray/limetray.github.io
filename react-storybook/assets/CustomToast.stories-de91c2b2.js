import{j as f}from"./jsx-runtime-8406ef1e.js";import{C as U}from"./customToastContent-d0c5706e.js";import{I as D}from"./Icon-7990d6af.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./Button-4d423377.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";const s=()=>{console.log("primary button clicked")},o=()=>{console.log("secondary button clicked")},e="Continue",n="Delete",a=f.jsx(D,{name:"bell"}),ts={component:U,title:"Custom Toast Content",tags:["autodocs"]},r={args:{status:"success",heading:"Custom Heading",message:"This is a custom success message.",upperBoxMessage:"New Product Draft lorem ipsum random message how are you",primaryActionButtonLabel:e,secondaryActionButtonLabel:n,onPrimaryActionClick:s,onSecondaryActionClick:o,iconElement:a}},t={args:{status:"error",heading:"Error Heading",message:"This is a custom error message.",upperBoxMessage:"Error-Message",primaryActionButtonLabel:e,secondaryActionButtonLabel:n,onPrimaryActionClick:s,onSecondaryActionClick:o,iconElement:a}},c={args:{status:"warning",heading:"Warning Heading",message:"This is a custom warn message.",upperBoxMessage:"",primaryActionButtonLabel:e,secondaryActionButtonLabel:n,onPrimaryActionClick:s,onSecondaryActionClick:o,iconElement:a}},i={args:{status:"warning",heading:"Warning Heading",message:"This is a custom warn message.",upperBoxMessage:"Upper-box message",primaryActionButtonLabel:e,secondaryActionButtonLabel:n,onPrimaryActionClick:s,onSecondaryActionClick:o,iconElement:a}},m={args:{status:"success",heading:"success Heading",message:"This is a custom success message.",upperBoxMessage:"Success-Message",primaryActionButtonLabel:e,secondaryActionButtonLabel:n,onPrimaryActionClick:s,onSecondaryActionClick:o}},u={args:{status:"success",heading:"",message:"This is a custom success message.",upperBoxMessage:"success-Message",primaryActionButtonLabel:e,secondaryActionButtonLabel:n,onPrimaryActionClick:s,onSecondaryActionClick:o,iconElement:a}},g={args:{status:"error",heading:"error heading",message:"This is a custom error message.",upperBoxMessage:"Error-Message",primaryActionButtonLabel:"",secondaryActionButtonLabel:"",onPrimaryActionClick:"",onSecondaryActionClick:"",iconElement:a}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'success',
    heading: 'Custom Heading',
    message: 'This is a custom success message.',
    upperBoxMessage: 'New Product Draft lorem ipsum random message how are you',
    primaryActionButtonLabel: primaryActionButtonLabel,
    secondaryActionButtonLabel: secondaryActionButtonLabel,
    onPrimaryActionClick: onPrimaryActionClick,
    onSecondaryActionClick: onSecondaryActionClick,
    iconElement: customIcon
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var y,A,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'error',
    heading: 'Error Heading',
    message: 'This is a custom error message.',
    upperBoxMessage: 'Error-Message',
    primaryActionButtonLabel: primaryActionButtonLabel,
    secondaryActionButtonLabel: secondaryActionButtonLabel,
    onPrimaryActionClick: onPrimaryActionClick,
    onSecondaryActionClick: onSecondaryActionClick,
    iconElement: customIcon
  }
}`,...(B=(A=t.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var h,C,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    heading: 'Warning Heading',
    message: 'This is a custom warn message.',
    upperBoxMessage: '',
    primaryActionButtonLabel: primaryActionButtonLabel,
    secondaryActionButtonLabel: secondaryActionButtonLabel,
    onPrimaryActionClick: onPrimaryActionClick,
    onSecondaryActionClick: onSecondaryActionClick,
    iconElement: customIcon
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var k,T,L;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    heading: 'Warning Heading',
    message: 'This is a custom warn message.',
    upperBoxMessage: 'Upper-box message',
    primaryActionButtonLabel: primaryActionButtonLabel,
    secondaryActionButtonLabel: secondaryActionButtonLabel,
    onPrimaryActionClick: onPrimaryActionClick,
    onSecondaryActionClick: onSecondaryActionClick,
    iconElement: customIcon
  }
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var S,E,M;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'success',
    heading: 'success Heading',
    message: 'This is a custom success message.',
    upperBoxMessage: 'Success-Message',
    primaryActionButtonLabel: primaryActionButtonLabel,
    secondaryActionButtonLabel: secondaryActionButtonLabel,
    onPrimaryActionClick: onPrimaryActionClick,
    onSecondaryActionClick: onSecondaryActionClick
  }
}`,...(M=(E=m.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var x,W,P;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'success',
    heading: '',
    message: 'This is a custom success message.',
    upperBoxMessage: 'success-Message',
    primaryActionButtonLabel: primaryActionButtonLabel,
    secondaryActionButtonLabel: secondaryActionButtonLabel,
    onPrimaryActionClick: onPrimaryActionClick,
    onSecondaryActionClick: onSecondaryActionClick,
    iconElement: customIcon
  }
}`,...(P=(W=u.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var I,w,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'error',
    heading: 'error heading',
    message: 'This is a custom error message.',
    upperBoxMessage: 'Error-Message',
    primaryActionButtonLabel: '',
    secondaryActionButtonLabel: '',
    onPrimaryActionClick: '',
    onSecondaryActionClick: '',
    iconElement: customIcon
  }
}`,...(H=(w=g.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const cs=["SuccessToastWithAutocloseDisabled","ErrorToastWithAutocloseEnabled","WarningToastWithoutUpperBoxMessage","WarningToastWithUpperBoxMessage","SuccessToastWithoutIcon","SuccessToastWithoutHeader","ErrorToastWithoutButtonsButWithClosingIcon"];export{t as ErrorToastWithAutocloseEnabled,g as ErrorToastWithoutButtonsButWithClosingIcon,r as SuccessToastWithAutocloseDisabled,u as SuccessToastWithoutHeader,m as SuccessToastWithoutIcon,i as WarningToastWithUpperBoxMessage,c as WarningToastWithoutUpperBoxMessage,cs as __namedExportsOrder,ts as default};
