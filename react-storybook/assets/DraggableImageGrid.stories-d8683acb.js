import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as m}from"./index-ad58220e.js";import{G as B}from"./Grid-b66b00e0.js";import{B as Se}from"./Button-4d423377.js";import{I as _e}from"./Icon-7990d6af.js";import{I as Ae}from"./Label-7a818bf9.js";import{d as r}from"./styled-components.browser.esm-9c5c32f2.js";import{I as Fe}from"./ImageAdd-5a251b54.js";import{L as Te}from"./index-c869fee8.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./clsx.m-64db5d3b.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./map-61d3de0c.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";const N=r(B)`
  &&& {
    position: relative;
  }
`,E=r(B.Column)`
  &&&.image-grid-column {
    padding-left: 0;
    padding-right: 0;
  }
`,qe=r(B.Column)``,$e=r(Ae)`
  &&&.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,We=r.div`
  aspect-ratio: 1 / 1;
  position: relative;
  border-radius: 8px;
  opacity: 1;
  overflow: hidden;
  outline: none;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  transition: ${({$isDragging:e})=>e?"none":"box-shadow 0.2s ease-out"};

  &.dragging-over {
    outline: 2px dashed #4A90E2;
  }

  ${({$draggable:e})=>e&&`
      &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      }
    `}

  ${({$draggable:e,$isDragging:i})=>e&&i&&`
      opacity: 0.6;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      transition: opacity 0.1s ease, box-shadow 0.1s ease;
    `}
`,Ne=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ee=r.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  gap: 4px;
`,Ge=r(Se)`
  &&&.image-action-button {
    opacity: 1;
    cursor: grab;
    width: 37px;
    height: 37px;

    &:active {
      cursor: grabbing;
    }
  }
`,Le=r.div`
  border: 2px dashed ${({$isDragActive:e})=>e?"#4F46E5":"#D1D5DB"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({$isDragActive:e})=>e?"#F5F5FF":"transparent"};
  box-shadow: ${({$isDragActive:e})=>e?"0 0 0 4px rgba(79, 70, 229, 0.12)":"none"};
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  padding: 20px;
`,Ve=r.div`
  color: #4B5563;
  margin-bottom: 10px;
  transform: ${({$isDragActive:e})=>e?"scale(1.1)":"scale(1)"};
  transition: transform 0.2s ease;
`,Re=r.div`
  display: grid;
  color: #4338ca;
  font-size: 14px;
  margin-bottom: 5px;

  & > span {
    grid-area: 1 / 1;
  }
`,G=r.span`
  visibility: ${({$isVisible:e})=>e?"visible":"hidden"};
  opacity: ${({$isVisible:e})=>e?1:0};
  transition: opacity 0.2s ease;
`,Pe=r.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: #6B7280;
`,Me=r.b`
  color: #4338ca;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`,ze=r.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 2;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background-color: #FF4D4F;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 20px rgba(255, 77, 79, 0.25);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #F43F5E;
  }
`,pe=({showAddImageButton:e=!0,showOnlyAddImageButton:i=!1,initialImages:g,onUpdateImage:S=()=>{},onDeleteImage:be=()=>{},noOfColumns:fe=6,draggable:b=!0,onAddImage:_=()=>{},onClick:w})=>{const[d,c]=m.useState(g),[he,A]=m.useState(null),[u,F]=m.useState(null),[f,U]=m.useState(!1),p=m.useRef(0),T=e||i;m.useEffect(()=>{c(g)},[g]);const q=a=>()=>{F(a)},$=a=>{a.preventDefault(),a.stopPropagation(),a.dataTransfer.dropEffect="copy"},Ie=a=>s=>{if(u!==null){const t=[...d],[n]=t.splice(u,1);t.splice(a,0,n),c(t),S(t),F(null),s.currentTarget.classList.remove("dragging-over")}},De=a=>{a.preventDefault(),a.stopPropagation(),p.current=0,U(!1);const s=Array.from(a.dataTransfer.files).find(({type:n})=>n.startsWith("image/"));if(!s)return;const t=URL.createObjectURL(s);c(n=>[...n,{url:t,isDisabled:!1}]),_(s)},xe=a=>()=>{const s=d[a],t=d.filter((n,O)=>O!==a);c(t),be(s,a,t),S(t)},ye=(a,s)=>()=>{w&&w(a,s)},ve=a=>()=>{A(a)},Ce=()=>{A(null)},ke=()=>{const a=document.createElement("input");a.type="file",a.accept="image/*",a.multiple=!1,a.onchange=s=>{const t=s.target.files;if(t&&t.length){const n=t[0];if(n instanceof Blob){const O=URL.createObjectURL(n);c(Be=>[...Be,{url:O,isDisabled:!1}]),_(n)}}},a.click()},je=a=>s=>{u!==null&&u!==a&&s.currentTarget.classList.add("dragging-over")},we=a=>{a.currentTarget.classList.remove("dragging-over")},Ue=a=>{a.preventDefault(),a.stopPropagation(),Array.from(a.dataTransfer.items).some(({kind:t,type:n})=>t==="file"&&n.startsWith("image/"))&&(p.current+=1,U(!0))},Oe=a=>{a.preventDefault(),a.stopPropagation(),p.current=Math.max(0,p.current-1),p.current===0&&U(!1)},W=()=>o.jsxs(Le,{$isDragActive:f,id:"dropZone",onClick:ke,onDrop:De,onDragOver:$,onDragEnter:Ue,onDragLeave:Oe,children:[o.jsx(Ve,{$isDragActive:f,children:o.jsx(Fe,{})}),o.jsxs(Re,{children:[o.jsxs(G,{$isVisible:!f,children:["Upload a file ",o.jsx(Me,{children:"or drag and drop"})]}),o.jsx(G,{$isVisible:f,children:"Drop image to upload"})]}),o.jsx(Pe,{children:"PNG, JPG, GIF up to 10MB"})]});return d.length===0&&T||i?o.jsx(N,{doubling:!0,columns:1,className:"lt-image-grid",padded:!0,children:o.jsx(E,{className:"image-grid-column",textAlign:"center",children:W()},"addButton")}):o.jsxs(N,{doubling:!0,columns:fe,className:"lt-image-grid",padded:!0,children:[T&&o.jsx(E,{className:"image-grid-column",textAlign:"center",children:W()},"addButton"),d.map((a,s)=>o.jsxs(qe,{className:"image-grid-column",children:[!a.isDisabled&&o.jsx(ze,{type:"button",onClick:t=>{t.stopPropagation(),xe(s)()},"aria-label":`Delete image ${s+1}`,children:o.jsx(Te,{useReactIcon:!0,reactIconName:"MdClose",reactIconSet:"md",size:"small"})}),o.jsxs(We,{$draggable:b,$isDragging:u===s,$clickable:!!w,draggable:b,onClick:ye(a,s),onDragStart:b?q(s):void 0,onMouseEnter:ve(s),onMouseLeave:Ce,onDragOver:$,onDrop:Ie(s),onDragEnter:je(s),onDragLeave:we,children:[o.jsx($e,{"data-testid":`image-grid-item-${s}`,className:"image",src:a.url}),b&&he===s&&o.jsx(Ne,{className:"overlay",children:o.jsx(Ee,{children:o.jsx(Ge,{circular:!0,icon:o.jsx(_e,{name:"arrows alternate",color:"black"}),draggable:!0,onClick:t=>t.stopPropagation(),onDragStart:q(s),className:"image-action-button drag-button"})})})]})]},s))]})};pe.__docgenInfo={description:"",methods:[],displayName:"DraggableImageGrid",props:{initialImages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}}],raw:"{ url: string, isDisabled: boolean }[]"},description:""},onUpdateImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(images: { url: string, isDisabled: boolean }[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}}],raw:"{ url: string, isDisabled: boolean }[]"},name:"images"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},onDeleteImage:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  image: { url: string, isDisabled: boolean },
  index: number,
  updatedImages: { url: string, isDisabled: boolean }[]
) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}},name:"image"},{type:{name:"number"},name:"index"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}}],raw:"{ url: string, isDisabled: boolean }[]"},name:"updatedImages"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},onAddImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: any) => void",signature:{arguments:[{type:{name:"any"},name:"file"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  image: { url: string, isDisabled: boolean },
  index: number
) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}},name:"image"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},noOfColumns:{required:!1,tsType:{name:"SemanticWIDTHS"},description:"",defaultValue:{value:"6",computed:!1}},showAddImageButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showOnlyAddImageButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},draggable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const l=[{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699274534_ChickenChilliGarlicNoodlesServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1660250583_1615915093VegMakhaniBurst.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699274950_ClassicFriedRiceServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1675514033_16602346741614332550BrandTile18012021BKClassicVeg2.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699275016_VegChilliGarlicFriedRiceServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699275038_ChickenFriedRiceServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1667214190_ClassicVegDoublePattyBurger.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1660235092_1655206550Crispychicken.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1675526671_1667214223ClassicVegDoublePattyBurger.jpg",isDisabled:!1}],xa={title:"DraggableImageGrid",component:pe},h={args:{initialImages:[...l],onUpdateImage:e=>console.log(e)}},I={args:{noOfColumns:4,initialImages:[...l],onUpdateImage:e=>console.log(e)}},D={args:{noOfColumns:5,showAddImageButton:!1,initialImages:[...l],onUpdateImage:e=>console.log(e)}},x={args:{showOnlyAddImageButton:!0,initialImages:l.slice(0,5)}},y={args:{noOfColumns:5,draggable:!1,initialImages:[...l],onUpdateImage:e=>console.log(e)}},v={args:{noOfColumns:5,initialImages:l.map((e,i)=>({...e,isDisabled:i===1||i===4})),onUpdateImage:e=>console.log(e)}},C={args:{noOfColumns:5,initialImages:[...l],onDeleteImage:(e,i,g)=>{console.log("Deleted image:",e),console.log("Deleted index:",i),console.log("Remaining images:",g)},onUpdateImage:e=>console.log(e)}},k={args:{noOfColumns:5,initialImages:[...l],onClick:(e,i)=>{console.log("Clicked image:",e),console.log("Clicked index:",i)},onUpdateImage:e=>console.log(e)}},j={args:{noOfColumns:6,initialImages:[]}};var L,V,R;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...(R=(V=h.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var P,M,z;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    noOfColumns: 4,
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...(z=(M=I.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var H,J,K;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    showAddImageButton: false,
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...(K=(J=D.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,Q,X;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    showOnlyAddImageButton: true,
    initialImages: sampleImages.slice(0, 5)
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    draggable: false,
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,oe,te;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    initialImages: sampleImages.map((image, index) => ({
      ...image,
      isDisabled: index === 1 || index === 4
    })),
    onUpdateImage: images => console.log(images)
  }
}`,...(te=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,ne,ie;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    initialImages: [...sampleImages],
    onDeleteImage: (image, index, updatedImages) => {
      console.log('Deleted image:', image);
      console.log('Deleted index:', index);
      console.log('Remaining images:', updatedImages);
    },
    onUpdateImage: images => console.log(images)
  }
}`,...(ie=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,me,ge;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    initialImages: [...sampleImages],
    onClick: (image, index) => {
      console.log('Clicked image:', image);
      console.log('Clicked index:', index);
    },
    onUpdateImage: images => console.log(images)
  }
}`,...(ge=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var de,ce,ue;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    noOfColumns: 6,
    initialImages: []
  }
}`,...(ue=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const ya=["WithCustomImages","WithCustomNoOfColumns","WithoutAddImageButton","AddButtonOnly","NotDraggable","WithDisabledImages","WithDeleteCallback","WithImageClickCallback","WithoutImages"];export{x as AddButtonOnly,y as NotDraggable,h as WithCustomImages,I as WithCustomNoOfColumns,C as WithDeleteCallback,v as WithDisabledImages,k as WithImageClickCallback,D as WithoutAddImageButton,j as WithoutImages,ya as __namedExportsOrder,xa as default};
