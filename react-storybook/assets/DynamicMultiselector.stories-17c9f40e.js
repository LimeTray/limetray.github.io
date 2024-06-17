import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as B}from"./index-76fb7be0.js";import{F as P}from"./fuse.esm-88e2763d.js";import{_ as k}from"./lodash-ee9167ea.js";import{c as x}from"./index-cb7fca97.js";import{h as b}from"./util-85866ba9.js";import{L as j}from"./Loader-6300fc2b.js";import{C as U}from"./Checkbox-647e2ca7.js";import{S as O}from"./searchComponent-3f2f3f9c.js";import{I as W}from"./Icon-84915bf2.js";import{M as Z}from"./Modal-a65a0305.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./getElementType-ead3b972.js";import"./childrenUtils-25a53b67.js";import"./inheritsLoose-c82a83d4.js";import"./_baseSet-20dcbcd5.js";import"./factories-a0d6c822.js";import"./includes-ae816ee0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-194f1060.js";import"./Input-87e74d35.js";import"./map-6332fbaf.js";import"./Button-28b2e7e6.js";import"./Label-fd2b2d7f.js";import"./Portal-73b13d0f.js";import"./Search-e28c6900.js";import"./isEmpty-d4f4cd99.js";import"./index-83dfe39a.js";import"./pick-8112d09a.js";const N=u=>e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:u.style?u.style:{},children:e.jsx("path",{fill:u.color||"#9CA3AF",d:"M11.7751 4.18583L11.1626 1.63667C11.0343 1.11167 10.5793 0.75 10.0485 0.75H1.94596C1.42096 0.75 0.960126 1.1175 0.837626 1.63667L0.225126 4.18583C0.0851259 4.78083 0.213459 5.3875 0.586793 5.86583C0.633459 5.93 0.697626 5.97667 0.750126 6.035V10.0833C0.750126 10.725 1.27513 11.25 1.91679 11.25H10.0835C10.7251 11.25 11.2501 10.725 11.2501 10.0833V6.035C11.3026 5.9825 11.3668 5.93 11.4135 5.87167C11.7868 5.39333 11.921 4.78083 11.7751 4.18583ZM10.031 1.91083L10.6435 4.46C10.7018 4.705 10.6493 4.95 10.4976 5.1425C10.416 5.2475 10.241 5.41667 9.9493 5.41667C9.59346 5.41667 9.28429 5.13083 9.24346 4.75167L8.90513 1.91667L10.031 1.91083ZM6.58346 1.91667H7.72679L8.04179 4.55333C8.07096 4.78083 8.00096 5.00833 7.84929 5.1775C7.72096 5.32917 7.53429 5.41667 7.29513 5.41667C6.90429 5.41667 6.58346 5.0725 6.58346 4.6525V1.91667ZM3.95263 4.55333L4.27346 1.91667H5.41679V4.6525C5.41679 5.0725 5.09596 5.41667 4.66429 5.41667C4.46596 5.41667 4.28513 5.32917 4.14513 5.1775C3.99929 5.00833 3.92929 4.78083 3.95263 4.55333ZM1.35679 4.46L1.94596 1.91667H3.09513L2.75679 4.75167C2.71013 5.13083 2.40679 5.41667 2.05096 5.41667C1.76513 5.41667 1.58429 5.2475 1.50846 5.1425C1.35096 4.95583 1.29846 4.705 1.35679 4.46ZM1.91679 10.0833V6.56583C1.96346 6.57167 2.00429 6.58333 2.05096 6.58333C2.55846 6.58333 3.01929 6.37333 3.35763 6.02917C3.70763 6.37917 4.17429 6.58333 4.70513 6.58333C5.21263 6.58333 5.66763 6.37333 6.00596 6.04083C6.35013 6.37333 6.81679 6.58333 7.34179 6.58333C7.83179 6.58333 8.29846 6.37917 8.64846 6.02917C8.98679 6.37333 9.44763 6.58333 9.95513 6.58333C10.0018 6.58333 10.0426 6.57167 10.0893 6.56583V10.0833H1.91679Z"})});N.__docgenInfo={description:"",methods:[],displayName:"OutletIcon"};const y=({className:u,...h})=>e.jsx(U,{className:`lt-checkbox ${u}`,...h});y.defaultProps={label:"",defaultChecked:!1,className:"",checked:!1,readOnly:!1};y.__docgenInfo={description:"",methods:[],displayName:"LtCheckbox",props:{label:{defaultValue:{value:"''",computed:!1},required:!1},defaultChecked:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},checked:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};function _(u){return e.jsx("svg",{className:u.className,viewBox:"0 0 12 12",style:{...u.style},fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 11L11 1M1 1L11 11",stroke:u.strokeColor,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}_.__docgenInfo={description:"",methods:[],displayName:"CloseIcon",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""},strokeColor:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const L=({header:u,showCloseIcon:h,onSaveIconClick:s})=>e.jsxs(Z.Header,{className:"lt-modal-header",children:[u,e.jsxs("div",{className:"header-icon-container",children:[h&&e.jsx("div",{className:"close-icon-container",children:e.jsx(_,{strokeColor:"#F87171",className:"close-icon"})}),h&&e.jsx(W,{name:"check",className:"check-icon",onClick:s})]})]});L.defaultProps={showCloseIcon:!0,header:"",showTickIcon:!1};L.__docgenInfo={description:"",methods:[],displayName:"LtModalHeader",props:{onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},header:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},showCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTickIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSaveIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const M={DEBOUNCE:{INPUT:300}};class w extends B.Component{constructor(h){super(h),this.removeDuplicates=s=>Array.from(new Set(s)),this.onSearchChange=k.debounce(s=>{const t=s.target.value;console.log("clicked",t);const{originalFilteredDataList:a}=this.state;this.setState({searchString:t});let l=[];if(t){let n=[];const o=x(a),r=b.searchSetting(["parentName","subParents.parentName"]);n=new P(o,r).search(t),n=n.map(g=>{const d=g.item;let i=[];if(d.subParents&&d.subParents.length>0){const p=x(d.subParents),f=b.searchSetting(["parentName"]);i=new P(p,f).search(t),d.subParents=i.map(S=>S.item)}return d}),l=n}else l=x(a);this.setState({filteredDataList:l}),this.props.handleSearch(t)},M.DEBOUNCE.INPUT),this.resetChildren=()=>{const{filteredDataList:s,selectedParentIndex:t,originalFilteredDataList:a}=this.state,l=x(a[t])||null;if(l){const n=k.find(a,{parentId:l.parentId});s[t].childrens=n.childrens,this.setState({filteredDataList:s})}},this.onSearchChildrenElement=k.debounce(s=>{let t=s.target.value;if(t.length>0){const{filteredDataList:a,selectedParentIndex:l,originalFilteredDataList:n}=this.state,o=x(n)||null,r=x(o[l])||null;if(r){const m=b.searchSetting(["childName"]),d=new P(r.childrens,m).search(t);o[l].childrens=d.map(i=>i.item),this.setState({filteredDataList:o})}}else this.resetChildren()},M.DEBOUNCE.INPUT),this.saveLocations=()=>{const{selectedChildrens:s}=this.state;let t=[...s];t.length>0&&(t=this.removeDuplicates(t)),this.props.onSave(t)},this.onChildrenCheckboxChange=s=>{const{selectedChildrens:t}=this.state;let a=[...t];if(s){const l=a.indexOf(s);l>-1?a.splice(l,1):a.push(s)}a.length>0&&(a=this.removeDuplicates(a)),this.setState({selectedChildrens:a})},this.onParentAllOutletsCheckboxChange=(s,t)=>{let a=[...this.state.selectedChildrens];if(t.childIds&&t.childIds.length>0&&(s?a=[...a,...t.childIds]:t.childIds.forEach(l=>{const n=a.indexOf(l);n>-1&&a.splice(n,1)})),t.subParents&&t.subParents.length>0){let l=[];t.subParents.forEach(n=>{l=[...l,...n.childIds]}),s?a=[...a,...l]:l.forEach(n=>{const o=a.indexOf(n);o>-1&&a.splice(o,1)})}a.length>0&&(a=this.removeDuplicates(a)),this.setState({selectedChildrens:a})},this.onAllParentCheckboxChange=(s,t)=>{const{selectedChildrens:a}=this.state;let l=[...a];t&&t.length>0&&(s?l=[...l,...t]:l=[]),l.length>0&&(l=this.removeDuplicates(l)),this.setState({selectedChildrens:l})},this.onShowSelectedCheckboxChange=s=>{this.setState({showSelectedCities:s})},this.changeSelectedParentIndex=s=>{this.setState({selectedParentIndex:s,selectedSubParentIndex:null})},this.changeSelectedSubParentIndex=(s,t)=>{this.setState({selectedParentIndex:s,selectedSubParentIndex:t})},this.renderChildrenList=()=>{const{selectedParentIndex:s,selectedSubParentIndex:t,showSelectedCities:a,selectedChildrens:l,filteredDataList:n}=this.state,{loading:o,data:{viewOnly:r,searchChildPlaceholder:m,icon:g}}=this.props;let d=n&&n.length>0?n[s]:{},i={};t!==null&&t>=0&&d.subParents.length>0?i=d.subParents[t]:i=d;let p=[],f=!1,C=[],S=0;return i&&Object.keys(i).length>0&&(p=i.childrens,f=i.childIds.every(c=>l.includes(c)),C=i.childIds.filter(c=>l.includes(c)),S=C&&C.length>0?C.length:0),e.jsxs("div",{children:[e.jsxs("div",{className:`container-row ${r?"":"children-item"}`,children:[e.jsxs("div",{className:"children-item-row",children:[e.jsxs("div",{className:"children-item-header",children:[g,i.parentName," ",e.jsxs("span",{className:` children-item-subheader ${r?"display-none":"display-initial"}`,children:[S," Selected"]})]}),e.jsx(O,{onChange:this.onSearchChildrenElement,placeholder:m})]}),o?e.jsx("div",{style:{paddingTop:"2rem",width:"100%",textAlign:"center"},children:e.jsx(j,{active:!0})}):n&&n.length>0&&e.jsxs("div",{className:`tab-header flex space-between ${r?"display-none":""}`,children:[e.jsx("div",{className:"checkbox-label",children:e.jsx(y,{checked:!!(p.length>0&&f),onChange:()=>this.onParentAllOutletsCheckboxChange(!f,i),label:"Select All"})}),e.jsxs("div",{className:"toggle",children:[e.jsx("span",{className:`${a?"":"active-selection"} crsr-pntr`,onClick:()=>this.onShowSelectedCheckboxChange(!1),style:{borderRight:"1px solid #D1D5DB",paddingRight:"12px"},children:"All"}),e.jsx("span",{className:`${a?"active-selection":""} crsr-pntr`,style:{paddingLeft:"12px"},onClick:()=>this.onShowSelectedCheckboxChange(!0),children:"Selected"})]})]})]}),!o&&p&&p.length>0?p.map((c,H)=>{let D=!!l.includes(c.childId);return e.jsx("div",{className:`container-row  ${H===p.length-1?"":"children-item"}`,style:{display:a?D?"block":"none":"block",textAlign:"left"},children:e.jsx("div",{className:"tab-header",children:e.jsx("div",{className:"checkbox-label",children:r?e.jsx("label",{className:`container ${r?"pdng-l-0":""}`,children:c.childName}):e.jsx(y,{checked:D,onChange:()=>this.onChildrenCheckboxChange(c.childId),label:c.childName})})})},c.childId)}):!o&&e.jsx("div",{className:"no-data-exists",children:"No Product exists"})]})},this.renderParentList=()=>{const{selectedChildrens:s,searchPlaceholder:t}=this.state,{data:{viewOnly:a}}=this.props,{filteredDataList:l}=this.state;let n=[];l.forEach(r=>{n=[...n,...r.childIds],r.subParents&&r.subParents.length>0&&r.subParents.forEach(m=>{n=[...n,...m.childIds]})});let o=n.every(r=>s.includes(r));return e.jsxs("div",{className:"city-outlet-list-container-left",id:"parentList",children:[e.jsx("div",{className:"search-field",children:e.jsx(O,{onChange:this.onSearchChange,placeholder:t})}),l&&l.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container-row",style:{display:a?"none":"block",padding:"0px 8px"},children:e.jsx("div",{className:"tab-header flex space-between",children:e.jsx("div",{className:"checkbox-label",style:{paddingTop:"0px"},children:e.jsx(y,{checked:!!o,onChange:()=>this.onAllParentCheckboxChange(!o,n),label:"Select All"})})})}),e.jsx("div",{className:"city-list-container",children:l.map((r,m)=>{let g=r.subParents&&r.subParents.length>0?r.subParents:[];return e.jsxs("div",{style:{borderBottom:"1px solid #F9FAFB"},children:[this.renderParentContent(r,m,null,!1),g.map((d,i)=>this.renderParentContent(d,m,i,!0))]},r.parentId)})})]}):e.jsx("div",{className:"no-data-exists",children:"No Category exists"})]})},this.renderParentContent=(s,t,a,l)=>{const{showSelectedCities:n,selectedParentIndex:o,selectedChildrens:r,selectedSubParentIndex:m}=this.state,{data:{viewOnly:g,icon:d}}=this.props;let i=o===t,p=!1,f=[...s.childIds];l&&(i=m===a),s.subParents&&s.subParents.length>0&&s.subParents.forEach(c=>{f=[...f,...c.childIds]});let C=f.filter(c=>r.includes(c)),S=C&&C.length>0?C.length:0;return p=S===f.length,e.jsx("div",{className:`container-row ${i&&!l?"activated":""}`,style:{display:n?S>0?"block":"none":"block",marginLeft:l?"20px":0,borderLeft:l?"1.5px solid #e3e3e3":0,paddingLeft:l?"12px":"8px",paddingRight:"8px",borderRadius:l?"0px":"16px"},children:e.jsxs("div",{className:"tab-header flex",children:[e.jsxs("div",{className:"checkbox-label",style:{width:"100%",display:"flex",alignItems:"center"},children:[g?null:e.jsx(y,{checked:S>0,onChange:()=>{this.onParentAllOutletsCheckboxChange(!p,s),l?this.changeSelectedSubParentIndex(t,a):this.changeSelectedParentIndex(t)},onClick:c=>{c.preventDefault(),c.stopPropagation(),l?this.changeSelectedSubParentIndex(t,a):this.changeSelectedParentIndex(t)}}),e.jsx("div",{className:`crsr-pntr category-checkbox-label ${i?"activated":""}`,onClick:()=>{l?this.changeSelectedSubParentIndex(t,a):this.changeSelectedParentIndex(t)},children:s.parentName})]}),e.jsxs("div",{className:`category-outlet-count ${g?"viewOnly":""}`,children:[e.jsx("div",{style:{display:"flex"},children:d}),e.jsxs("span",{children:[S,"/",f.length]})]})]})},s.parentId)},this.renderParentChildList=()=>{const{loading:s}=this.props;return this.state,s?e.jsx("div",{style:{paddingTop:"2rem",width:"100%",textAlign:"center"},children:e.jsx(j,{active:!0})}):e.jsx("div",{className:"city-outlet-list-main-container",children:e.jsxs("div",{className:"city-outlet-list-container",children:[this.renderParentList(),e.jsx("div",{className:"city-outlet-list-container-right",children:this.renderChildrenList()})]})})},this.state={originalFilteredDataList:[],filteredDataList:[],searchPlaceholder:"",searchString:"",showSelectedCities:!1,selectedChildrens:[],loading:!1,selectedParentIndex:0,selectedSubParentIndex:null}}componentDidMount(){let h=[],s="",t=[],a=this.props.data;b.schemaValidatorForDynamicSelector(a.dataSchema)&&(h=b.mapDataWithSchemaForDynamicMultiSelector(a.filterDataList,a.dataSchema)),s=a.searchPlaceholder,t=a.selectedIds&&a.selectedIds.length>0?a.selectedIds:[],this.setState({selectedChildrens:t,searchPlaceholder:s,originalFilteredDataList:h,filteredDataList:h,showSelectedCities:!1}),this.props.updateMultiSelectorDataInStore(h)}render(){this.state;const{data:{viewOnly:h},onClose:s}=this.props;return e.jsxs("div",{className:"dynamic-selector",children:[e.jsx(L,{header:this.props.data.title,onClose:s,showCloseIcon:!0,showTickIcon:!0,onSaveIconClick:h?s:this.saveLocations}),this.renderParentChildList()]})}}w.defaultProps={data:{dataSchema:[],filterDataList:[],searchPlaceholder:"Search Item",selectedIds:[],viewOnly:!1,footerText:"",title:"Select Items",searchChildPlaceholder:"Search products",showChildSearchInput:!0,icon:e.jsx(N,{style:{width:"12px",marginLeft:"8px",color:"#777777"}})},updateMultiSelectorDataInStore:()=>{},handleSearch:()=>{},onSave:()=>{},onClose:()=>{},handleChildSearch:()=>{},loading:!1,filteredDataList:[]};const z=w;w.__docgenInfo={description:"",methods:[{name:"removeDuplicates",docblock:null,modifiers:[],params:[{name:"arr",optional:!1,type:{name:"Array",elements:[{name:"string"}],raw:"string[]"}}],returns:{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"}}},{name:"resetChildren",docblock:null,modifiers:[],params:[],returns:null},{name:"saveLocations",docblock:null,modifiers:[],params:[],returns:null},{name:"onChildrenCheckboxChange",docblock:null,modifiers:[],params:[{name:"childId",optional:!1,type:{name:"string"}}],returns:null},{name:"onParentAllOutletsCheckboxChange",docblock:null,modifiers:[],params:[{name:"isAllSelected",optional:!1,type:{name:"boolean"}},{name:"parent",optional:!1,type:{name:"any"}}],returns:null},{name:"onAllParentCheckboxChange",docblock:null,modifiers:[],params:[{name:"isChecked",optional:!1,type:{name:"boolean"}},{name:"allChildIds",optional:!1,type:{name:"Array",elements:[{name:"string"}],raw:"string[]"}}],returns:null},{name:"onShowSelectedCheckboxChange",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"boolean"}}],returns:null},{name:"changeSelectedParentIndex",docblock:null,modifiers:[],params:[{name:"index",optional:!1,type:{name:"number"}}],returns:null},{name:"changeSelectedSubParentIndex",docblock:null,modifiers:[],params:[{name:"parentIndex",optional:!1,type:{name:"number"}},{name:"subParentIndex",optional:!1,type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]}}],returns:null},{name:"renderChildrenList",docblock:null,modifiers:[],params:[],returns:null},{name:"renderParentList",docblock:null,modifiers:[],params:[],returns:null},{name:"renderParentContent",docblock:null,modifiers:[],params:[{name:"parent",optional:!1,type:{name:"any"}},{name:"parentIndex",optional:!1,type:{name:"number"}},{name:"subParentIndex",optional:!1,type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]}},{name:"isSubParent",optional:!1,type:{name:"boolean"}}],returns:null},{name:"renderParentChildList",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DynamicMultiSelector",props:{data:{required:!1,tsType:{name:"Data"},description:"",defaultValue:{value:`{
  dataSchema: [],
  filterDataList: [],
  searchPlaceholder: 'Search Item',
  selectedIds: [],
  viewOnly: false,
  footerText: '',
  title: 'Select Items',
  searchChildPlaceholder: 'Search products',
  showChildSearchInput: true,
  icon: <OutletIcon style={{ width: '12px', marginLeft: '8px', color: "#777777" }} />
}`,computed:!1}},updateMultiSelectorDataInStore:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},handleSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchString: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchString"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},handleChildSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchString: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchString"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filteredDataList:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const Ne={component:z,title:"DynamicMultiselector",tags:["autodocs"]},R={parentId:"brandCategoryId",parentName:"categoryName",childrenElement:"productList",childName:"productName",childId:"brandProductSkuId",subParentElement:"childCategories"},$=[{brandCategoryId:1,categoryName:"category",productList:[{productName:"product",brandProductSkuId:11},{productName:"product2",brandProductSkuId:12},{productName:"product3",brandProductSkuId:13}]},{brandCategoryId:2,categoryName:"category 2",productList:[{productName:"Cat 2 product",brandProductSkuId:21},{productName:"Cat 2 product2",brandProductSkuId:22},{productName:"Cat 2  product3",brandProductSkuId:23}],childCategories:[{brandCategoryId:201,categoryName:"category 21",productList:[{productName:"Cat 21 product",brandProductSkuId:2011}]},{brandCategoryId:132,categoryName:"sub category 21",productList:[{productName:"sub Cat 21 product",brandProductSkuId:2012}]}]},{brandCategoryId:3,categoryName:"category 5",productList:[{productName:"product 5",brandProductSkuId:31},{productName:"product 10",brandProductSkuId:32},{productName:"product 11",brandProductSkuId:33}]}],v={args:{data:{dataSchema:R,filterDataList:$,selectedIds:[],searchPlaceholder:"Search Categories",title:"Select Products",viewOnly:!1,searchChildPlaceholder:"Search Products",showChildSearchInput:!1,icon:e.jsx(N,{style:{width:"12px",marginLeft:"8px",color:"#777777"}})},updateMultiSelectorDataInStore:()=>console.log("updateMultiSelectorDataInStore"),handleSearch:()=>console.log("handleSearch"),onSave:()=>console.log("onSave"),onClose:()=>console.log("onClose"),loading:!1,filteredDataList:[]}},I={args:{data:{dataSchema:R,filterDataList:$,selectedIds:[],searchPlaceholder:"Search Categories",title:"Select Products",viewOnly:!0,searchChildPlaceholder:"Search Products",showChildSearchInput:!1},updateMultiSelectorDataInStore:()=>console.log("updateMultiSelectorDataInStore"),handleSearch:()=>console.log("handleSearch"),onSave:()=>console.log("onSave"),onClose:()=>console.log("onClose"),loading:!0,filteredDataList:[]}};var A,T,V;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: {
      dataSchema,
      filterDataList: categoryData,
      selectedIds: [],
      searchPlaceholder: "Search Categories",
      title: "Select Products",
      viewOnly: false,
      searchChildPlaceholder: "Search Products",
      showChildSearchInput: false,
      icon: <OutletIcon style={{
        width: '12px',
        marginLeft: '8px',
        color: "#777777"
      }} />
    },
    updateMultiSelectorDataInStore: () => console.log('updateMultiSelectorDataInStore'),
    handleSearch: () => console.log('handleSearch'),
    onSave: () => console.log('onSave'),
    onClose: () => console.log('onClose'),
    loading: false,
    filteredDataList: []
  }
}`,...(V=(T=v.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,E,F;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: {
      dataSchema,
      filterDataList: categoryData,
      selectedIds: [],
      searchPlaceholder: "Search Categories",
      title: "Select Products",
      viewOnly: true,
      searchChildPlaceholder: "Search Products",
      showChildSearchInput: false
    },
    updateMultiSelectorDataInStore: () => console.log('updateMultiSelectorDataInStore'),
    handleSearch: () => console.log('handleSearch'),
    onSave: () => console.log('onSave'),
    onClose: () => console.log('onClose'),
    loading: true,
    filteredDataList: []
  }
}`,...(F=(E=I.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const Le=["WithMenuData","WhenLoading"];export{I as WhenLoading,v as WithMenuData,Le as __namedExportsOrder,Ne as default};