import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as b}from"./index-ad58220e.js";import{g as p}from"./requestIdGenerator-f6efc017.js";import{D as x,C as j,P as k}from"./react-beautiful-dnd.esm-970fb784.js";import{B as C}from"./Button-13ce16b7.js";import{D}from"./grippy-fc4fd531.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-5494d9cc.js";import"./extends-4c19d496.js";import"./toPropertyKey-4015efc6.js";import"./index-4fee7e45.js";import"./tiny-invariant-dd7d57d2.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-33b7fdc8.js";import"./Label-32ef75b5.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-9497f5af.js";import"./includes-646822e3.js";import"./Portal-25fcd847.js";import"./Ref-51c42093.js";import"./map-20538cdf.js";const v=(i,n,t)=>{const r=Array.from(i),[s]=r.splice(n,1);return r.splice(t,0,s),r},I=(i,n)=>({userSelect:"none",background:i?"darkgrey":"white",...n});class m extends b.Component{constructor(n){super(n),this.onDragEnd=t=>{if(!t.destination)return;const{childrens:r}=this.state,s=v(r,t.source.index,t.destination.index);this.setState({childrens:s},()=>{const{onDragEnd:a,identifier:l}=this.props,o={newRank:t.destination.index,identifier:l};a&&a(o)})},this.renderHeader=()=>{const{headers:t}=this.state;return e.jsx("div",{className:"d-l-fixed-header bdr-btm-grey",children:e.jsx("div",{className:"flex align-center",children:t.map(r=>e.jsx("div",{style:{width:`${r.colCount/12*100}%`},className:"pdng-top-s pdng-bottom-s d-l-fixed-header-child",children:r.label},p()))})})},this.renderContent=()=>{const{childrens:t,headers:r}=this.state;return e.jsx(x,{onDragEnd:this.onDragEnd,children:e.jsx(j,{droppableId:"droppable",children:s=>e.jsxs("div",{className:"no-scrollbar",...s.droppableProps,ref:s.innerRef,children:[t.map((a,l)=>e.jsx(k,{draggableId:a.id,index:l,children:(o,f)=>e.jsx("div",{ref:o.innerRef,...o.draggableProps,...o.dragHandleProps,style:I(f.isDragging,o.draggableProps.style),className:"bdr-btm-grey d-l-child-items flex align-center",children:r.map((d,y)=>e.jsx("div",{style:{width:`${d.colCount/12*100}%`},className:"pdng-top-s d-l-child-items-cell pdng-bottom-s text-center",children:e.jsxs("div",{style:{position:"relative"},children:[y===0&&e.jsx("div",{className:"d-l-list-icon",children:e.jsx("div",{children:e.jsx("img",{src:D,alt:"draggable"})})}),typeof a[d.key]=="function"?a[d.key](d.key,l):a[d.key]]})},p()))})},a.id)),s.placeholder]})})})},this.state={headers:[],childrens:[]}}componentDidMount(){const{headers:n,childrens:t}=this.props;this.setState({headers:n||[],childrens:t||[]})}render(){const{headers:n}=this.state;return e.jsx("div",{style:{minWidth:"700px",maxWidth:"900px"},className:"d-l-list-container bdr tableCustom",children:n.length>0?e.jsxs("div",{className:"no-scrollbar",style:{maxHeight:"500px",overflow:"auto"},children:[this.renderHeader(),this.renderContent()]}):e.jsx("div",{className:"flex align-center justify-center",style:{height:"400px"},children:"Invalid table"})})}}m.defaultProps={};const N=m;m.defaultProps={headers:[{key:"id",label:"Id",colCount:2},{key:"itemName",label:"Item Name",colCount:2},{key:"variant",label:"Variant",colCount:2},{key:"itemPrice",label:"Item Price",colCount:3},{key:"edit",label:"Edit",colCount:3}],childrens:Array.from({length:100},(i,n)=>n).map(()=>({id:p(),itemName:i=>e.jsx("div",{children:"Burger"}),variant:"Regular",itemPrice:"Rs 170",edit:i=>e.jsx("div",{children:e.jsx(C,{children:"PRICE"})})})),onDragEnd:()=>{}};m.__docgenInfo={description:"",methods:[{name:"onDragEnd",docblock:`Function to notify when an item position is changed to parent by onDragEnd function
which is passed by the parent to this component
@param {Object} result contains the info of old index and new index of the item in the list`,modifiers:[],params:[{name:"result",description:"contains the info of old index and new index of the item in the list",type:{name:"any"},optional:!1}],returns:null,description:`Function to notify when an item position is changed to parent by onDragEnd function
which is passed by the parent to this component`},{name:"renderHeader",docblock:"Function to render the header of the draggable List",modifiers:[],params:[],returns:null,description:"Function to render the header of the draggable List"},{name:"renderContent",docblock:"Function to render the content of the draggable List",modifiers:[],params:[],returns:null,description:"Function to render the content of the draggable List"}],displayName:"DraggableList",props:{headers:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  {
    key: 'id',
    label: 'Id',
    colCount: 2
  },
  {
    key: 'itemName',
    label: 'Item Name',
    colCount: 2
  },
  {
    key: 'variant',
    label: 'Variant',
    colCount: 2
  },
  {
    key: 'itemPrice',
    label: 'Item Price',
    colCount: 3
  },
  {
    key: 'edit',
    label: 'Edit',
    colCount: 3
  }
]`,computed:!1}},childrens:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`Array.from({ length: 100 }, (_v:any, k:any) => k).map(() => ({
  id: generateRandomId(),
  itemName: (_item:any) => <div>Burger</div>,
  variant: 'Regular',
  itemPrice: 'Rs 170',
  edit: (_item:any) => (
    <div>
      <Button>PRICE</Button>
    </div>
  )
}))`,computed:!0}},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},identifier:{required:!1,tsType:{name:"string"},description:""}}};const Z={component:N,title:"DraggableList",tags:["autodocs"]},c={args:{}};var h,u,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const ee=["Default"];export{c as Default,ee as __namedExportsOrder,Z as default};
