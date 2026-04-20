import{j as e}from"./jsx-runtime-8406ef1e.js";import{I as d}from"./Label-7a818bf9.js";import{C as t}from"./Card-90278e88.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./factories-499f84ec.js";import"./Icon-7990d6af.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";const n=({position:m="top",image:c,title:p,description:N,className:q="",imageClassName:l=""})=>e.jsxs(t,{className:`image-card image-card--${m} ${q}`,children:[["top","left"].includes(m)&&e.jsx(d,{src:c,alt:p,className:`image-card__image ${l}`,wrapped:!0,ui:!1}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:p}),e.jsx(t.Description,{children:N})]}),["right","bottom"].includes(m)&&e.jsx(d,{src:c,alt:p,className:`image-card__image ${l}`,wrapped:!0,ui:!1})]}),V=n;n.defaultProps={position:"top",image:"https://via.placeholder.com/400",title:"Default Title",description:"Default Description",className:"",imageClassName:""};n.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{position:{required:!1,tsType:{name:"union",raw:'"top" | "left" | "right" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"https://via.placeholder.com/400"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Default Title"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Default Description"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},imageClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ee={component:V,title:"ImageCard",tags:["autodocs"]},a={args:{}},i={args:{position:"top",image:"https://via.placeholder.com/400",title:"Top Image",description:"This is a description with the image at the top."}},o={args:{position:"bottom",image:"https://via.placeholder.com/400",title:"Bottom Image",description:"This is a description with the image at the bottom."}},r={args:{position:"left",image:"https://via.placeholder.com/400",title:"Left Image",description:"This is a description with the image on the left."}},s={args:{position:"right",image:"https://via.placeholder.com/400",title:"Right Image",description:"This is a description with the image on the right."}};var g,h,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,I,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    position: "top",
    image: "https://via.placeholder.com/400",
    title: "Top Image",
    description: "This is a description with the image at the top."
  }
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var T,w,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    image: "https://via.placeholder.com/400",
    title: "Bottom Image",
    description: "This is a description with the image at the bottom."
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,D,_;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    position: "left",
    image: "https://via.placeholder.com/400",
    title: "Left Image",
    description: "This is a description with the image on the left."
  }
}`,...(_=(D=r.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var j,b,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    position: "right",
    image: "https://via.placeholder.com/400",
    title: "Right Image",
    description: "This is a description with the image on the right."
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const te=["Default","TopImage","BottomImage","LeftImage","RightImage"];export{o as BottomImage,a as Default,r as LeftImage,s as RightImage,i as TopImage,te as __namedExportsOrder,ee as default};
