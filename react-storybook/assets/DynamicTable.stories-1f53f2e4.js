import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{F as C}from"./fuse.esm-88e2763d.js";import{B as f}from"./Button-1eadaef4.js";import{I as T}from"./Input-118b97ba.js";import{C as N}from"./Checkbox-b5314c7e.js";import{g as c}from"./requestIdGenerator-f6efc017.js";import{h as q}from"./util-85866ba9.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-aa9c7902.js";import"./getElementType-800224f7.js";import"./childrenUtils-ad5f8e12.js";import"./Icon-f4a5e358.js";import"./Label-f2be6096.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-09ff187c.js";import"./includes-2d2ad27d.js";import"./Portal-41e64c31.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-5ec937e9.js";import"./_baseSet-b544df4d.js";const y=r=>{const l=()=>{const{firstColumn:n,secondColumn:s,thirdColumn:i}=r,o=[n,s,i];return e.jsx("div",{className:"flex d-t-m-header",children:o&&o.map(u=>{if(u){const{width:d}=u;return e.jsx("div",{style:{width:d},className:"d-t-m-header-item",children:u.label},c())}return""})})},a=n=>{const{firstColumn:s,secondColumn:i,thirdColumn:o}=r,u=[s,i,o];return e.jsx("div",{className:"flex d-t-m-children-container",children:u.map(d=>{if(d){const{width:m}=d;return e.jsx("div",{style:{width:m},className:"d-t-m-children-item",children:d.skeleton?d.skeleton(n):""})}return""})},c())},{childrens:t}=r;return e.jsxs("div",{className:"d-t-m-container",children:[l(),t&&t.map(a)]})};y.defaultProps={childrens:[{orderId:"123123",orderName:"Burger",username:"Rishabh",date:Date.now()},{orderId:"14323",orderName:"Pizza",username:"Sajal",date:Date.now()},{orderId:"123123",orderName:"Pasta",username:"Sumit",date:Date.now()}],firstColumn:null,secondColumn:null,thirdColumn:null};y.__docgenInfo={description:"",methods:[],displayName:"DynamicTableMobile",props:{childrens:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  {
    orderId: '123123',
    orderName: 'Burger',
    username: 'Rishabh',
    date: Date.now()
  },
  {
    orderId: '14323',
    orderName: 'Pizza',
    username: 'Sajal',
    date: Date.now()
  },
  {
    orderId: '123123',
    orderName: 'Pasta',
    username: 'Sumit',
    date: Date.now()
  }
]`,computed:!1}},firstColumn:{required:!1,tsType:{name:"union",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
} | null`,elements:[{name:"signature",type:"object",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"skeleton",value:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}},required:!1}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},secondColumn:{required:!1,tsType:{name:"union",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
} | null`,elements:[{name:"signature",type:"object",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"skeleton",value:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}},required:!1}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},thirdColumn:{required:!1,tsType:{name:"union",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
} | null`,elements:[{name:"signature",type:"object",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"skeleton",value:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}},required:!1}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};let g=null;class p extends j.Component{constructor(l){super(l),this.searchLocally=a=>{const{searchKeys:t}=this.props;clearTimeout(g),g=setTimeout(()=>{if(a.length>0){const{childrens:n}=this.state,s=q.searchSetting(t),o=new C(n,s).search(a);this.setState({childrens:o})}else{const{duplicateChildrens:n}=this.state;this.setState({childrens:n})}},200)},this.searchTable=async a=>{const{searchFunc:t}=this.props,{childrens:n}=this.state;if(t&&a.length>0){const s=await t(a);this.setState({childrens:[...n,...s]})}else this.searchLocally(a)},this.renderHeader=()=>{const{headers:a}=this.props;return e.jsx("div",{className:"d-t-fixed-header",children:e.jsx("div",{className:"flex bdr-btm-grey",children:a.map(t=>t.isElementProvided?e.jsx("div",{style:{width:`${t.colCount/12*100}%`},className:"pdng-s d-t-fixed-header-child",children:t.view()},c()):e.jsx("div",{style:{width:`${t.colCount/12*100}%`},className:"pdng-s d-t-fixed-header-child",children:e.jsx("div",{className:"text-center",children:t.label})},c()))},c())})},this.renderContent=()=>{const{childrens:a,headers:t}=this.props;return e.jsx("div",{children:a.map((n,s)=>e.jsx("div",{className:"bdr-btm-grey d-l-child-items flex align-center",onClick:n.onClick?n.onClick:()=>{},children:t.map(i=>e.jsx("div",{style:{width:`${i.colCount/12*100}%`},className:"text-center d-l-child-items-cell material-show-id pdng-s",children:e.jsx("div",{style:{position:"relative"},children:typeof n[i.key]=="function"?n[i.key](i,s):n[i.key]})},c()))},c()))})},this.renderDesktopTable=()=>{const{headers:a}=this.props;return e.jsx("div",{className:"d-t-scroll-container no-scrollbar",children:e.jsx("div",{className:"bdr d-t-container margin-top-m",children:a.length>0?e.jsxs("div",{className:"no-scrollbar",style:{maxHeight:"500px",overflow:"auto"},children:[this.renderHeader(),this.renderContent()]}):e.jsx("div",{className:"flex align-center justify-center",style:{height:"400px"},children:"Invalid table"})})})},this.state={headers:[],childrens:[],duplicateChildrens:[],showDesktopTable:!0}}componentDidMount(){const{headers:l,childrens:a}=this.props;this.setState({headers:l||[],childrens:a||[],duplicateChildrens:a||[],showDesktopTable:window.innerWidth>768}),window.addEventListener("resize",t=>{const n=window.innerWidth,{showDesktopTable:s}=this.state;setTimeout(()=>{n>=768&&!s?this.setState({showDesktopTable:!0}):n<768&&s&&this.setState({showDesktopTable:!1})},200)})}render(){const{headerElements:l,showUpperRegion:a,shouldSearchClickableFunc:t,shouldSearchClickable:n,bottomFixedSection:s,firstColumn:i,secondColumn:o,thirdColumn:u,searchPlaceHolder:d}=this.props,{showDesktopTable:m,childrens:k}=this.state;return e.jsxs("div",{children:[a?e.jsxs("div",{className:"d-t-header-section",children:[e.jsx(T,{onFocus:()=>{n&&t&&t()},onChange:x=>this.searchTable(x.target.value),className:"d-t-search-input",icon:{name:"search",color:"blue"},iconPosition:"left",placeholder:d}),m?e.jsx("div",{className:"d-t-header-element",children:l}):""]}):null,m&&this.renderDesktopTable(),!m&&e.jsxs("div",{children:[e.jsx(y,{firstColumn:i,secondColumn:o,thirdColumn:u,childrens:k}),s&&e.jsx("div",{style:{position:"fixed",bottom:0,width:"100%",left:0},children:s})]})]})}}p.defaultProps={};const S=p;p.defaultProps={headers:[{key:"id",label:"Id",colCount:2},{key:"itemName",label:"Item Name",colCount:2},{key:"variant",label:"Variant",colCount:2},{key:"itemPrice",label:"Item Price",colCount:2},{key:"edit",label:"Edit",colCount:1},{key:"edit2",label:"Edit2",colCount:1},{key:"edit3",label:"Edit3",colCount:2}],childrens:Array.from({length:100},(r,l)=>l).map(()=>({id:c(),itemName:()=>e.jsx("div",{children:"Burger"}),variant:"Regular",itemPrice:"Rs 170",edit:()=>e.jsx("div",{children:"Price"}),edit2:()=>e.jsx("div",{children:"Price"}),edit3:()=>e.jsx("div",{children:"Price"})})),headerElements:e.jsxs("div",{children:[e.jsx(f,{children:"Create a new material"}),e.jsx(f,{children:"Import"})]}),searchKeys:["id"],searchFunc:null,showUpperRegion:!0,shouldSearchClickable:!1,shouldSearchClickableFunc:null,searchPlaceHolder:"Search...",bottomFixedSection:e.jsx("div",{className:"flex justify-center align-center bdr-top-grey",style:{backgroundColor:"white",height:"50px"},children:"Sort & Filter"}),firstColumn:{width:"35%",label:"Order Info",skeleton:r=>e.jsxs("div",{children:[r.id,e.jsx("div",{children:r.variant}),e.jsx("div",{children:r.variant}),e.jsx("div",{children:r.variant}),e.jsx("div",{children:r.variant})]})},secondColumn:{width:"35%",label:"Status",skeleton:r=>e.jsxs("div",{children:[r.variant,e.jsx("div",{children:r.variant}),e.jsx("div",{children:r.variant}),e.jsx("div",{children:r.variant})]})},thirdColumn:{width:"30%",label:"Toggle",skeleton:r=>e.jsx("div",{children:e.jsx(N,{label:r.variantName})})}};p.__docgenInfo={description:"",methods:[{name:"searchLocally",docblock:`In case external search function is not provided by the parent component
@param {String} text`,modifiers:[],params:[{name:"text",type:{name:"any"},optional:!1}],returns:null,description:"In case external search function is not provided by the parent component"},{name:"searchTable",docblock:`Function to search rows
@param {String} text`,modifiers:["async"],params:[{name:"text",type:{name:"any"},optional:!1}],returns:null,description:"Function to search rows"},{name:"renderHeader",docblock:"Function to render header of the table",modifiers:[],params:[],returns:null,description:"Function to render header of the table"},{name:"renderContent",docblock:"Function to render main content of the table",modifiers:[],params:[],returns:null,description:"Function to render main content of the table"},{name:"renderDesktopTable",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DynamicTable",props:{headers:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
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
    colCount: 2
  },
  {
    key: 'edit',
    label: 'Edit',
    colCount: 1
  },
  {
    key: 'edit2',
    label: 'Edit2',
    colCount: 1
  },
  {
    key: 'edit3',
    label: 'Edit3',
    colCount: 2
  }
]`,computed:!1}},childrens:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`Array.from({ length: 100 }, (_v, k) => k).map(() => ({
  id: generateRandomId(),
  itemName: () => <div>Burger</div>,
  variant: 'Regular',
  itemPrice: 'Rs 170',
  edit: () => <div>Price</div>,
  edit2: () => <div>Price</div>,
  edit3: () => <div>Price</div>
}))`,computed:!0}},headerElements:{required:!1,tsType:{name:"JSX.Element"},description:"",defaultValue:{value:`<div>
  <Button>Create a new material</Button>
  <Button>Import</Button>
</div>`,computed:!1}},searchKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"['id']",computed:!1}},searchFunc:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}},showUpperRegion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shouldSearchClickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shouldSearchClickableFunc:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}},searchPlaceHolder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}},bottomFixedSection:{required:!1,tsType:{name:"JSX.Element"},description:"",defaultValue:{value:`<div
  className="flex justify-center align-center bdr-top-grey"
  style={{
    backgroundColor: 'white',
    height: '50px'
  }}
>
  Sort & Filter
</div>`,computed:!1}},firstColumn:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"skeleton",value:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}},required:!1}}]}},description:"",defaultValue:{value:`{
  width: '35%',
  label: 'Order Info',
  skeleton: (row:any) => (
    <div>
      {row.id}
      <div>{row.variant}</div>
      <div>{row.variant}</div>
      <div>{row.variant}</div>
      <div>{row.variant}</div>
    </div>
  )
}`,computed:!1}},secondColumn:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"skeleton",value:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}},required:!1}}]}},description:"",defaultValue:{value:`{
  width: '35%',
  label: 'Status',
  skeleton: (row:any) => (
    <div>
      {row.variant}
      <div>{row.variant}</div>
      <div>{row.variant}</div>
      <div>{row.variant}</div>
    </div>
  )
}`,computed:!1}},thirdColumn:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string,
  label?: string,
  skeleton?: (...args: any[]) => any
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"skeleton",value:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}},required:!1}}]}},description:"",defaultValue:{value:`{
  width: '30%',
  label: 'Toggle',
  skeleton: (row:any) => (
    <div>
      <Checkbox label={row.variantName} />
    </div>
  )
}`,computed:!1}}}};const ae={component:S,title:"DynamicTable",tags:["autodocs"]},h={args:{}};var v,b,w;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(w=(b=h.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const te=["Default"];export{h as Default,te as __namedExportsOrder,ae as default};
