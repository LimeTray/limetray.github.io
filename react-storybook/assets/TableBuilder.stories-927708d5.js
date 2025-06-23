import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as d}from"./index-ad58220e.js";import{d as u}from"./styled-components.browser.esm-d2d81691.js";import{S as W}from"./searchComponent-bcb17182.js";import{L as J}from"./ltTable-a82ecb6b.js";import{C as K}from"./crossIcon-11d15636.js";import"./_commonjsHelpers-de833af9.js";import"./Input-3f8aa787.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-192f9362.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./htmlPropsUtils-2b22d933.js";import"./Button-21321eef.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./index-6dcb29cb.js";const q=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-grip-vertical",children:[n.jsx("circle",{cx:"9",cy:"12",r:"1"}),n.jsx("circle",{cx:"9",cy:"5",r:"1"}),n.jsx("circle",{cx:"9",cy:"19",r:"1"}),n.jsx("circle",{cx:"15",cy:"12",r:"1"}),n.jsx("circle",{cx:"15",cy:"5",r:"1"}),n.jsx("circle",{cx:"15",cy:"19",r:"1"})]});q.__docgenInfo={description:"",methods:[],displayName:"GripVerticalIcon"};const z=({height:t=48,width:i=48,color:l="currentColor"})=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:t,viewBox:"0 0 24 24",fill:"none",stroke:l,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-table",children:[n.jsx("path",{d:"M12 3v18"}),n.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n.jsx("path",{d:"M3 9h18"}),n.jsx("path",{d:"M3 15h18"})]});z.__docgenInfo={description:"",methods:[],displayName:"TableIcon",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},style:{required:!1,tsType:{name:"object"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const U=u.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`,X=u.div`
  width: 25%;
  background: white;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: calc(100vh - 64px);
`,M=u.div`
  font-size: 16px;
  font-weight: 500;
  color: rgb(2, 8, 23);
`,Y=u.div`
  max-height: 24rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,Z=u.div`
  background: white;
  border: 1px solid #e5e7eb;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #f9fafb;
  }
`,ee=u.div`
  max-height: 24rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,te=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 1px solid #e5e7eb;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  gap: 4px;
  cursor: grab;
`,ne=u.div`
  width: ${t=>t.width||"75%"};
`,oe=u.div`
  font-size: 18px;
  font-weight: 500;
  color: rgb(2, 8, 23);
  margin: 16px 0 10px 0;
`,ae=u.div`
  font-size: 14px;
  color: rgb(107, 114, 128);
  text-align: center;
`,re=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 16px;
  height: 256px;
  background: white;
  border-radius: 16px;
`,E=({builderMode:t=!1,tableData:i,columnsInfo:l,selectedColumnsInfo:g,tableOptions:y={},tableActions:f,onColumnChange:p,onColumnReorder:S})=>{const[j,T]=d.useState(""),[r,b]=d.useState(g||[]),[P,v]=d.useState(l||[]),[m,x]=d.useState([[]]),[c,h]=d.useState(null),O=e=>{const o=r.filter(s=>s.type==="dimension"),a=r.filter(s=>s.type==="metric");if(e.type==="dimension"){if(p)return p([...o,e,...a]);b([...o,e,...a])}else{if(p)return p([...o,...a,e]);b([...o,...a,e])}v(P.filter(s=>s.id!==e.id))},$=e=>{const o=r.find(s=>s.id===e),a=r.filter(s=>s.id!==e);if((c==null?void 0:c.columnIndex)===r.indexOf(o)&&h(null),p)return p(a);b(a),o&&v([...P,o])},H=(e,o)=>{e.dataTransfer.setData("text/plain",o.toString())},G=(e,o)=>{e.preventDefault();const a=parseInt(e.dataTransfer.getData("text/plain")),s=Array.from(r),[k]=s.splice(a,1),A=s.filter(D=>D.type==="dimension");s.filter(D=>D.type==="metric");let I=o;if(k.type==="dimension"?I=Math.min(o,A.length):I=Math.max(o,A.length),s.splice(I,0,k),S)return S(s);b(s)};d.useEffect(()=>{l&&(v(l.filter(e=>!(g!=null&&g.find(o=>o.id===e.id)))),b(g||[]))},[g]),d.useEffect(()=>{if(!i)return;const e=(i==null?void 0:i.map(o=>r.map(a=>o[a.id])))||[];if(x(e),c){const o=r.findIndex(a=>a.id===c.columnsId);h(o===-1?null:{columnIndex:o,isAscending:c.isAscending,columnsId:r[o].id})}},[r,i]);const F=e=>{T(e.target.value)},Q=(e,o)=>{h({columnIndex:e,isAscending:o,columnsId:r[e].id}),y.onSort&&y.onSort(r[e],o)};return n.jsxs(U,{children:[t&&n.jsxs(X,{children:[n.jsx(W,{placeholder:"Search columns",onChange:F,fluid:!0}),n.jsx(M,{children:"Available Columns"}),n.jsx(Y,{children:P.filter(e=>e.name.toLowerCase().includes(j.toLowerCase())).map(e=>n.jsx(Z,{onClick:()=>O(e),children:n.jsx("span",{children:e.name})},e.id))}),n.jsx(M,{children:"Selected Columns (drag to reorder)"}),n.jsx(ee,{children:r.map((e,o)=>n.jsxs(te,{draggable:!0,onDragStart:a=>H(a,o),onDragOver:a=>a.preventDefault(),onDrop:a=>G(a,o),children:[n.jsx(q,{}),n.jsx("div",{style:{marginRight:"auto"},children:e.name}),n.jsx(K,{color:"rgb(156, 163, 175)",height:16,width:16,style:{cursor:"pointer"},onClick:()=>$(e.id)})]},e.id))})]}),n.jsxs(ne,{width:t?"75%":"100%",children:[f,t&&r.length===0?n.jsxs(re,{children:[n.jsx(z,{height:96,width:96,color:"rgb(156, 163, 175)"}),n.jsx(oe,{children:"Customized Data Table"}),n.jsx(ae,{children:"Select columns from the available options on the left to build your custom data table."})]}):n.jsx(J,{...y,cellData:m,headers:r.map(e=>e.name),sortableColumns:r.map(e=>e.isSortable||!1),onSort:Q,sortConfig:c})]})]})},V=E;E.__docgenInfo={description:"",methods:[],displayName:"TableBuilder",props:{builderMode:{defaultValue:{value:"false",computed:!1},required:!1},tableOptions:{defaultValue:{value:"{}",computed:!1},required:!1}}};const R=[{id:"outlet",name:"Outlet",type:"dimension",isSortable:!0},{id:"channel",name:"Channel",type:"dimension",isSortable:!0},{id:"service",name:"Service",type:"dimension",isSortable:!0},{id:"net_subtotal",name:"Net Subtotal",type:"metric",isSortable:!0},{id:"net_revenue",name:"Net Revenue",type:"metric",isSortable:!0},{id:"net_discount",name:"Net Discount",type:"metric",isSortable:!0}],se=t=>{const i=[];for(let l=1;l<=t;l++)i.push({outlet:`Outlet ${l}`,channel:`Channel ${l}`,service:`Service ${l}`,net_subtotal:Math.floor(Math.random()*1e3)+1,net_revenue:Math.floor(Math.random()*1e3)+1,net_discount:Math.floor(Math.random()*100)+1}),l===1&&i.push({outlet:"Outlet 1",channel:"Channel 1",service:"Service 3",net_subtotal:Math.floor(Math.random()*1e3)+1,net_revenue:Math.floor(Math.random()*1e3)+1,net_discount:Math.floor(Math.random()*100)+1});return i},C=se(30),L=[{id:"outlet",name:"Outlet",type:"dimension",isSortable:!0}],ie={builderMode:!0,columnsInfo:R,selectedColumnsInfo:L,tableData:C,tableOptions:{size:"small",pagination:!0,rowsPerPage:10,onSort:(t,i)=>{console.log(t,i)},totalPage:Math.ceil(C.length/10),currentPage:1}},Ve={component:V,title:"TableBuilder",parameters:{docs:{description:{component:"\nThe `TableBuilder` component is a table-building utility that allows users to customize the columns and data displayed. It supports features like pagination, column reordering, and sorting.\n\n### Props:\n\n- `builderMode?: boolean`: Determines whether the table is in builder mode. In this mode, users can customize columns and other table settings.\n\n- `columnsInfo?: ColumnsInfo`: An array of objects defining all available columns.\n  - **Properties**:\n    - `id: string`: A unique identifier for the column.\n    - `name: string`: The display name of the column.\n    - `type: string`: The type of the column (e.g., dimension or metric).\n    - `isSortable?: boolean`: Specifies if the column is sortable.\n\n- `selectedColumnsInfo?: ColumnsInfo`: An array of objects defining the columns selected for display. These objects have the same structure as `columnsInfo`.\n\n- `tableData?: any[]`: An array of objects defining the data to be displayed in the table.\n  - Each object represents a row, where the keys correspond to column IDs, and the values are the data for each column.\n\n- `tableOptions?: TableOption`: An object defining table-specific options.\n  - **Properties**:\n    - `searchQuery?: string`: A search query to filter table data.\n    - `sortableColumns?: boolean[]`: An optional array specifying which columns are sortable.\n    - `pagination?: boolean`: Enables or disables pagination.\n    - `rowsPerPage?: number`: The number of rows to display per page.\n    - `totalPage?: number`: The total number of pages available.\n    - `currentPage?: number`: The current page number.\n    - `onPrevPage?: () => void`: A function triggered when navigating to the previous page.\n    - `onNextPage?: () => void`: A function triggered when navigating to the next page.\n    - `onSort?: (column: Column, isAscending: boolean) => void`: A callback for handling sorting.\n      - **Parameters**:\n        - `column: Column`: The column to sort by.\n        - `isAscending: boolean`: Whether the sorting is in ascending order.\n\n- `tableActions?: React.ReactNode`: Custom actions or buttons displayed with the table.\n\n- `onColumnChange?: (selectedColumns: Column[]) => void`: A callback triggered when the selected columns change.\n\n- `onColumnReorder?: (selectedColumns: Column[]) => void`: A callback triggered when columns are reordered.\n\n- `currentPage?: number`: The current page number of the table (used when pagination is enabled).\n\n- `totalPage?: number`: The total number of pages (used when pagination is enabled).\n    "}}}},le=t=>{var P,v;const[i,l]=d.useState(R),[g,y]=d.useState(L),[f,p]=d.useState(((P=t==null?void 0:t.tableOptions)==null?void 0:P.currentPage)||1),[S,j]=d.useState(C.slice(0,(v=t==null?void 0:t.tableOptions)==null?void 0:v.rowsPerPage)),T=m=>{y(m)},r=()=>{var m,x;if((m=t==null?void 0:t.tableOptions)!=null&&m.totalPage&&((x=t==null?void 0:t.tableOptions)!=null&&x.rowsPerPage)&&f<t.tableOptions.totalPage){const c=f+1;p(c);const h=(c-1)*t.tableOptions.rowsPerPage,O=h+t.tableOptions.rowsPerPage;j(C.slice(h,O))}},b=()=>{var m;if((m=t==null?void 0:t.tableOptions)!=null&&m.rowsPerPage&&f>1){const x=f-1;p(x);const c=(x-1)*t.tableOptions.rowsPerPage,h=c+t.tableOptions.rowsPerPage;j(C.slice(c,h))}};return n.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:n.jsx(V,{...t,columnsInfo:i,selectedColumnsInfo:g,onColumnChange:T,tableData:S,tableOptions:{...t.tableOptions,currentPage:f,onPrevPage:b,onNextPage:r}})})},w=le.bind({});w.args={...ie};var _,N,B;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [columnsInfos, setColumnsInfos] = useState<Column[]>(columnsInfo);
  const [selectedColumnsInfos, setSelectedColumnsInfos] = useState<Column[]>(selectedColumns);
  const [currentPage, setCurrentPage] = useState<number>(args?.tableOptions?.currentPage || 1);
  const [data, setData] = useState<any[]>(tableData.slice(0, args?.tableOptions?.rowsPerPage));
  const handleColumn = (columns: Column[]) => {
    setSelectedColumnsInfos(columns);
  };
  const handleNextPage = () => {
    if (args?.tableOptions?.totalPage && args?.tableOptions?.rowsPerPage) {
      if (currentPage < args.tableOptions.totalPage) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        const start = (nextPage - 1) * args.tableOptions.rowsPerPage;
        const end = start + args.tableOptions.rowsPerPage;
        setData(tableData.slice(start, end));
      }
    }
  };
  const handlePrevPage = () => {
    if (args?.tableOptions?.rowsPerPage) {
      if (currentPage > 1) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        const start = (prevPage - 1) * args.tableOptions.rowsPerPage;
        const end = start + args.tableOptions.rowsPerPage;
        setData(tableData.slice(start, end));
      }
    }
  };
  return <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5'
  }}>
      <TableBuilder {...args} columnsInfo={columnsInfos} selectedColumnsInfo={selectedColumnsInfos} onColumnChange={handleColumn} tableData={data} tableOptions={{
      ...args.tableOptions,
      currentPage: currentPage,
      onPrevPage: handlePrevPage,
      onNextPage: handleNextPage
    }} />
    </div>;
}`,...(B=(N=w.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const Re=["Default"];export{w as Default,Re as __namedExportsOrder,Ve as default};
