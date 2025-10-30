import{j as a}from"./jsx-runtime-8406ef1e.js";import{r as g,R as h}from"./index-ad58220e.js";import{B as c}from"./Button-13ce16b7.js";import{I as f}from"./Icon-33b7fdc8.js";import{C as b}from"./Checkbox-c82fc3e6.js";import{h as m}from"./util-bfaa5c4b.js";import{g as d}from"./requestIdGenerator-f6efc017.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Label-32ef75b5.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-9497f5af.js";import"./includes-646822e3.js";import"./Portal-25fcd847.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./_baseSet-bea29546.js";class o extends g.Component{constructor(s){super(s),this.addRemoveFilter=(e,t,r)=>{const{selectedFilters:n}=this.state;r?n[t.parentId]?n[t.parentId].push(e.childId):n[t.parentId]=[e.childId]:n[t.parentId]&&(n[t.parentId]=n[t.parentId].filter(l=>l!==e.childId)),this.setState({selectedFilters:n})},this.mapFilterChildren=(e,t)=>{const{selectedFilters:r}=this.state;let n=!1;return r[t.parentId]&&r[t.parentId].indexOf(e.childId)>-1&&(n=!0),a.jsx("div",{className:"f-children",children:a.jsx(b,{checked:n,onChange:()=>this.addRemoveFilter(e,t,!n),label:e.childName})},d())},this.mapFilters=e=>a.jsxs("div",{children:[a.jsx("div",{className:"fnt-s text-black",children:e.parentName}),a.jsx("div",{className:"flex margin-top-xs margin-bottom-m f-childrens",children:e.childrens&&e.childrens.map(t=>this.mapFilterChildren(t,e))})]},d()),this.renderFilterSection=()=>{const{sanitizedData:e}=this.state;return a.jsx("div",{children:e&&e.map(this.mapFilters)})},this.applyFilter=()=>{const{selectedFilters:e}=this.state,{applyFilter:t}=this.props;t&&t(e)},this.cancelFilter=()=>{const{cancelFilter:e}=this.props;e&&e()},this.renderActionButton=()=>{const{cancelLabel:e,doneLabel:t,customActionElements:r,cancelFilter:n}=this.props;return a.jsxs("div",{className:"pdng-m bdr-top-grey fixed-action-button flex align-center justify-end",children:[a.jsxs("div",{className:"margin-right-m",children:[r.map(l=>l),a.jsx(c,{onClick:n,content:e,basic:!0})]}),a.jsx(c,{className:"blue-btn",onClick:this.applyFilter,content:t,primary:!0})]})},this.closeFilterFunction=()=>{const{closeFilterFunction:e}=this.props;e&&e()},this.renderTopSection=()=>{const{headerLabel:e}=this.props;return a.jsxs("div",{className:"top-section pdng-m flex align-center bdr-btm-grey",children:[a.jsx("div",{className:"fnt-l",children:e}),a.jsx("div",{className:"flex flex-grow-1 justify-end",children:a.jsx(f,{size:"large",onClick:this.closeFilterFunction,name:"delete"})})]})},this.state={selectedFilters:{},sanitizedData:[],showDataSchemaError:!1}}componentDidMount(){const{selectedFilters:s,dataSchema:e,filterList:t}=this.props;if(m.schemaValidator(e)){const n=m.mapDataWithSchema(t,e);this.setState({sanitizedData:n||[],showDataSchemaError:!1,selectedFilters:s})}else this.setState({showDataSchemaError:!0,selectedFilters:s})}render(){const{showDataSchemaError:s}=this.state;return a.jsx("div",{className:"filter-container bdr bdr-rds no-scrollbar",children:s?a.jsx("div",{children:"Wrong Schema mapping"}):a.jsxs(h.Fragment,{children:[this.renderTopSection(),a.jsx("div",{className:"pdng-m",children:this.renderFilterSection()}),this.renderActionButton()]})})}}o.defaultProps={};const F=o;o.defaultProps={filterList:[{categoryName:"Items",categoryId:"items",subCategories:[{subCategoryId:12,subCategoryName:"All Items"},{subCategoryId:22,subCategoryName:"All Items"},{subCategoryId:32,subCategoryName:"Combo Items"}]},{categoryName:"Food type",categoryId:"foodType",subCategories:[{subCategoryId:332,subCategoryName:"All Types"},{subCategoryId:122,subCategoryName:"Veg"},{subCategoryId:132,subCategoryName:"Non-veg"}]}],cancelFilter:()=>{},applyFilter:()=>{},selectedFilters:{},closeFilterFunction:()=>{},dataSchema:{parentId:"categoryId",parentName:"categoryName",childrenElement:"subCategories",childName:"subCategoryName",childId:"subCategoryId"},headerLabel:"Filters",cancelLabel:"CANCEL",doneLabel:"APPLY FILTERS",customActionElements:[a.jsx(c,{className:"margin-right-m",children:"FAQ"},d())]};o.__docgenInfo={description:"",methods:[{name:"addRemoveFilter",docblock:`Function to select/unselect a filter
@param {Object} children
@param {Object} parent
@param {Boolean} status`,modifiers:[],params:[{name:"children",type:{name:"any"},optional:!1},{name:"parent",type:{name:"any"},optional:!1},{name:"status",type:{name:"any"},optional:!1}],returns:null,description:"Function to select/unselect a filter"},{name:"mapFilterChildren",docblock:`Function to map childrens of a parent.
@param {Object} children
@param {Object} parent`,modifiers:[],params:[{name:"children",type:{name:"any"},optional:!1},{name:"parent",type:{name:"any"},optional:!1}],returns:null,description:"Function to map childrens of a parent."},{name:"mapFilters",docblock:`Function to map all the filters
@param {Object} value`,modifiers:[],params:[{name:"value",type:{name:"any"},optional:!1}],returns:null,description:"Function to map all the filters"},{name:"renderFilterSection",docblock:"Function to render the filter section",modifiers:[],params:[],returns:null,description:"Function to render the filter section"},{name:"applyFilter",docblock:`Function for applying filter and
calling the function provided by parent component for apply filters.`,modifiers:[],params:[],returns:null,description:`Function for applying filter and
calling the function provided by parent component for apply filters.`},{name:"cancelFilter",docblock:`Function for applying filter
and calling the function provided by parent component to cancel the filter.`,modifiers:[],params:[],returns:null,description:`Function for applying filter
and calling the function provided by parent component to cancel the filter.`},{name:"renderActionButton",docblock:"Render Action section which contains apply and cancel button",modifiers:[],params:[],returns:null,description:"Render Action section which contains apply and cancel button"},{name:"closeFilterFunction",docblock:"Function to call the closeFilterFunction provided by the parent.",modifiers:[],params:[],returns:null,description:"Function to call the closeFilterFunction provided by the parent."},{name:"renderTopSection",docblock:"Render Top section containing Filter label and close button",modifiers:[],params:[],returns:null,description:"Render Top section containing Filter label and close button"}],displayName:"Filter",props:{filterList:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  {
    categoryName: 'Items',
    categoryId: 'items',
    subCategories: [
      {
        subCategoryId: 12,
        subCategoryName: 'All Items'
      },
      {
        subCategoryId: 22,
        subCategoryName: 'All Items'
      },
      {
        subCategoryId: 32,
        subCategoryName: 'Combo Items'
      }
    ]
  },
  {
    categoryName: 'Food type',
    categoryId: 'foodType',
    subCategories: [
      {
        subCategoryId: 332,
        subCategoryName: 'All Types'
      },
      {
        subCategoryId: 122,
        subCategoryName: 'Veg'
      },
      {
        subCategoryId: 132,
        subCategoryName: 'Non-veg'
      }
    ]
  }
]`,computed:!1}},cancelFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},applyFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},selectedFilters:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: any[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"any"}],raw:"any[]",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1}},closeFilterFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},dataSchema:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  parentId?: string,
  parentName?: string,
  childrenElement?: string,
  childName?: string,
  childId?: string
}`,signature:{properties:[{key:"parentId",value:{name:"string",required:!1}},{key:"parentName",value:{name:"string",required:!1}},{key:"childrenElement",value:{name:"string",required:!1}},{key:"childName",value:{name:"string",required:!1}},{key:"childId",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  parentId: 'categoryId',
  parentName: 'categoryName',
  childrenElement: 'subCategories',
  childName: 'subCategoryName',
  childId: 'subCategoryId'
}`,computed:!1}},headerLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Filters'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'CANCEL'",computed:!1}},doneLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'APPLY FILTERS'",computed:!1}},customActionElements:{required:!1,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:"",defaultValue:{value:`[
  <Button key={generateRandomId()} className="margin-right-m">
    FAQ
  </Button>
]`,computed:!1}}}};const X={component:F,title:"Filters",tags:["autodocs"]},i={args:{}};var p,u,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Y=["WithMultipleSelection"];export{i as WithMultipleSelection,Y as __namedExportsOrder,X as default};
