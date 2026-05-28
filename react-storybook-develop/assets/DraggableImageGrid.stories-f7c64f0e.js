import{j as o}from"./jsx-runtime-8ae9c9ad.js";import{r as b}from"./index-04c7fd94.js";import{G as w}from"./Grid-3df97300.js";import{B as Oe}from"./Button-8d24c33b.js";import{I as Se}from"./Icon-6945f610.js";import{I as Ue}from"./Label-c1a3398d.js";import{g as r}from"./styled-components.browser.esm-f4af7a4c.js";import{I as F}from"./ImageAdd-8582d89d.js";import{L as _e}from"./index-c3b335ed.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./clsx.m-b06f1f65.js";import"./factories-559e568f.js";import"./invoke-58a3b25b.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./map-d105d6f1.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./index-4348461f.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";const N=r(w)`
  &&& {
    position: relative;
  }
`,T=r(w.Column)`
  &&&.image-grid-column {
    padding-left: 0;
    padding-right: 0;
  }
`,qe=r(w.Column)``,Ge=r(Ue)`
  &&&.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Ae=r.div`
  aspect-ratio: 1 / 1;
  position: relative;
  border-radius: 8px;
  opacity: 1;
  overflow: hidden;
  outline: none;
  cursor: ${({$clickable:a})=>a?"pointer":"default"};
  transition: ${({$isDragging:a})=>a?"none":"box-shadow 0.2s ease-out"};

  &.dragging-over {
    outline: 2px dashed #4A90E2;
  }

  ${({$draggable:a})=>a&&`
      &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      }
    `}

  ${({$draggable:a,$isDragging:n})=>a&&n&&`
      opacity: 0.6;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      transition: opacity 0.1s ease, box-shadow 0.1s ease;
    `}
`,Fe=r.div`
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
`,Ne=r.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  gap: 4px;
`,Te=r(Oe)`
  &&&.image-action-button {
    opacity: 1;
    cursor: grab;
    width: 37px;
    height: 37px;

    &:active {
      cursor: grabbing;
    }
  }
`,W=r.div`
  border: 2px dashed #D1D5DB;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 20px;

  &.dragover {
    border-color: #4F46E5;
    background-color: #f5f5ff;
  }
`,E=r.div`
  color: #4B5563;
  margin-bottom: 10px;
`,L=r.div`
  color: #4338ca;
  font-size: 14px;
  margin-bottom: 5px;
`,V=r.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: #6B7280;
`,We=r.b`
  color: #4B5563;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`,Ee=r.button`
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
`,be=({showAddImageButton:a=!0,showOnlyAddImageButton:n=!1,initialImages:m,onUpdateImage:B=()=>{},onDeleteImage:fe=()=>{},noOfColumns:Ie=6,draggable:p=!0,onAddImage:O=()=>{},onClick:k})=>{const[g,d]=b.useState(m),[he,S]=b.useState(null),[c,U]=b.useState(null),_=a||n;b.useEffect(()=>{d(m)},[m]);const q=e=>()=>{U(e)},G=e=>{e.preventDefault()},xe=e=>s=>{if(c!==null){const t=[...g],[i]=t.splice(c,1);t.splice(e,0,i),d(t),B(t),U(null),s.currentTarget.classList.remove("dragging-over")}},De=e=>{e.preventDefault();const s=e.dataTransfer.files;if(s&&s.length){const t=s[0];if(t instanceof Blob){const i=URL.createObjectURL(t);d(u=>[...u,{url:i,isDisabled:!1}]),O(t)}}},ye=e=>()=>{const s=g[e],t=g.filter((i,u)=>u!==e);d(t),fe(s,e,t),B(t)},ve=(e,s)=>()=>{k&&k(e,s)},Ce=e=>()=>{S(e)},je=()=>{S(null)},A=()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.multiple=!1,e.onchange=s=>{const t=s.target.files;if(t&&t.length){const i=t[0];if(i instanceof Blob){const u=URL.createObjectURL(i);d(Be=>[...Be,{url:u,isDisabled:!1}]),O(i)}}},e.click()},ke=e=>s=>{c!==null&&c!==e&&s.currentTarget.classList.add("dragging-over")},we=e=>{e.currentTarget.classList.remove("dragging-over")};return g.length===0&&_||n?o.jsx(N,{doubling:!0,columns:1,className:"lt-image-grid",padded:!0,children:o.jsx(T,{className:"image-grid-column",textAlign:"center",children:o.jsxs(W,{id:"dropZone",onClick:A,children:[o.jsx(E,{children:o.jsx(F,{})}),o.jsxs(L,{children:["Upload a file ",o.jsx("b",{children:"or drag and drop"})]}),o.jsx(V,{children:"PNG, JPG, GIF up to 10MB"})]})},"addButton")}):o.jsxs(N,{doubling:!0,columns:Ie,className:"lt-image-grid",padded:!0,children:[_&&o.jsx(T,{className:"image-grid-column",textAlign:"center",children:o.jsxs(W,{onDrop:De,onDragOver:G,id:"dropZone",onClick:A,children:[o.jsx(E,{children:o.jsx(F,{})}),o.jsxs(L,{children:["Upload a file ",o.jsx(We,{children:"or drag and drop"})]}),o.jsx(V,{children:"PNG, JPG, GIF up to 10MB"})]})},"addButton"),g.map((e,s)=>o.jsxs(qe,{className:"image-grid-column",children:[!e.isDisabled&&o.jsx(Ee,{type:"button",onClick:t=>{t.stopPropagation(),ye(s)()},"aria-label":`Delete image ${s+1}`,children:o.jsx(_e,{useReactIcon:!0,reactIconName:"MdClose",reactIconSet:"md",size:"small"})}),o.jsxs(Ae,{$draggable:p,$isDragging:c===s,$clickable:!!k,draggable:p,onClick:ve(e,s),onDragStart:p?q(s):void 0,onMouseEnter:Ce(s),onMouseLeave:je,onDragOver:G,onDrop:xe(s),onDragEnter:ke(s),onDragLeave:we,children:[o.jsx(Ge,{"data-testid":`image-grid-item-${s}`,className:"image",src:e.url}),p&&he===s&&o.jsx(Fe,{className:"overlay",children:o.jsx(Ne,{children:o.jsx(Te,{circular:!0,icon:o.jsx(Se,{name:"arrows alternate",color:"black"}),draggable:!0,onClick:t=>t.stopPropagation(),onDragStart:q(s),className:"image-action-button drag-button"})})})]})]},s))]})};be.__docgenInfo={description:"",methods:[],displayName:"DraggableImageGrid",props:{initialImages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}}],raw:"{ url: string, isDisabled: boolean }[]"},description:""},onUpdateImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(images: { url: string, isDisabled: boolean }[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}}],raw:"{ url: string, isDisabled: boolean }[]"},name:"images"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},onDeleteImage:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  image: { url: string, isDisabled: boolean },
  index: number,
  updatedImages: { url: string, isDisabled: boolean }[]
) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}},name:"image"},{type:{name:"number"},name:"index"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}}],raw:"{ url: string, isDisabled: boolean }[]"},name:"updatedImages"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},onAddImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: any) => void",signature:{arguments:[{type:{name:"any"},name:"file"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  image: { url: string, isDisabled: boolean },
  index: number
) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ url: string, isDisabled: boolean }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"isDisabled",value:{name:"boolean",required:!0}}]}},name:"image"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},noOfColumns:{required:!1,tsType:{name:"SemanticWIDTHS"},description:"",defaultValue:{value:"6",computed:!1}},showAddImageButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showOnlyAddImageButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},draggable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const l=[{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699274534_ChickenChilliGarlicNoodlesServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1660250583_1615915093VegMakhaniBurst.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699274950_ClassicFriedRiceServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1675514033_16602346741614332550BrandTile18012021BKClassicVeg2.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699275016_VegChilliGarlicFriedRiceServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1699275038_ChickenFriedRiceServes2.webp",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1667214190_ClassicVegDoublePattyBurger.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1660235092_1655206550Crispychicken.jpg",isDisabled:!1},{url:"https://assets.limetray.com/assets/user_images/menus/compressed/1675526671_1667214223ClassicVegDoublePattyBurger.jpg",isDisabled:!1}],ga={title:"DraggableImageGrid",component:be},f={args:{initialImages:[...l],onUpdateImage:a=>console.log(a)}},I={args:{noOfColumns:4,initialImages:[...l],onUpdateImage:a=>console.log(a)}},h={args:{noOfColumns:5,showAddImageButton:!1,initialImages:[...l],onUpdateImage:a=>console.log(a)}},x={args:{showOnlyAddImageButton:!0,initialImages:l.slice(0,5)}},D={args:{noOfColumns:5,draggable:!1,initialImages:[...l],onUpdateImage:a=>console.log(a)}},y={args:{noOfColumns:5,initialImages:l.map((a,n)=>({...a,isDisabled:n===1||n===4})),onUpdateImage:a=>console.log(a)}},v={args:{noOfColumns:5,initialImages:[...l],onDeleteImage:(a,n,m)=>{console.log("Deleted image:",a),console.log("Deleted index:",n),console.log("Remaining images:",m)},onUpdateImage:a=>console.log(a)}},C={args:{noOfColumns:5,initialImages:[...l],onClick:(a,n)=>{console.log("Clicked image:",a),console.log("Clicked index:",n)},onUpdateImage:a=>console.log(a)}},j={args:{noOfColumns:6,initialImages:[]}};var R,P,$;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...($=(P=f.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var M,z,H;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    noOfColumns: 4,
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...(H=(z=I.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,Z,K;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    showAddImageButton: false,
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...(K=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    showOnlyAddImageButton: true,
    initialImages: sampleImages.slice(0, 5)
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ae,se;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    draggable: false,
    initialImages: [...sampleImages],
    onUpdateImage: images => console.log(images)
  }
}`,...(se=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,te,re;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    initialImages: sampleImages.map((image, index) => ({
      ...image,
      isDisabled: index === 1 || index === 4
    })),
    onUpdateImage: images => console.log(images)
  }
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ie,le;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var me,ge,de;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    noOfColumns: 5,
    initialImages: [...sampleImages],
    onClick: (image, index) => {
      console.log('Clicked image:', image);
      console.log('Clicked index:', index);
    },
    onUpdateImage: images => console.log(images)
  }
}`,...(de=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:de.source}}};var ce,ue,pe;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    noOfColumns: 6,
    initialImages: []
  }
}`,...(pe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const da=["WithCustomImages","WithCustomNoOfColumns","WithoutAddImageButton","AddButtonOnly","NotDraggable","WithDisabledImages","WithDeleteCallback","WithImageClickCallback","WithoutImages"];export{x as AddButtonOnly,D as NotDraggable,f as WithCustomImages,I as WithCustomNoOfColumns,v as WithDeleteCallback,y as WithDisabledImages,C as WithImageClickCallback,h as WithoutAddImageButton,j as WithoutImages,da as __namedExportsOrder,ga as default};
