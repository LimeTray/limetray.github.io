import{j as r}from"./jsx-runtime-8ae9c9ad.js";import{r as f,R as tr}from"./index-04c7fd94.js";import{r as or}from"./styled-components.browser.esm-b57a6336.js";import{L as sr}from"./Loader-97ea5cc7.js";import{t as ir}from"./config-d270d9b6.js";import{P as dr}from"./pumpkinIcon-bee1f8c5.js";import{u as cr}from"./ThemeContext-ab9e94eb.js";import{L as ur}from"./ltButton-6dc4d92b.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Button-8d24c33b.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./index-61b62994.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./isEmpty-0f216811.js";import"./deburr-bb2546ff.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-9f7569d5.js";import"./index-9e8f50bb.js";const lr="_scrollContainer_6jk9t_3",mr="_tableWrapper_6jk9t_20",pr="_thead_6jk9t_28",gr="_tr_6jk9t_32",fr="_tbody_6jk9t_33",hr="_th_6jk9t_28",br="_td_6jk9t_71",vr="_expandedRow_6jk9t_79",kr="_expanded_6jk9t_79",yr="_loaderWrapper_6jk9t_116",wr="_emptyState_6jk9t_122",xr="_footer_6jk9t_131",Rr="_footerInfo_6jk9t_143",Tr="_footerActions_6jk9t_150",qr="_footerRight_6jk9t_157",jr="_pageSizeSelect_6jk9t_163",_r="_pageBtn_6jk9t_185",Nr="_pageBtnDisabled_6jk9t_200",Lr="_pageBtnActive_6jk9t_200",Ir="_loadMoreWrapper_6jk9t_217",Ar="_darkMode_6jk9t_224",t={scrollContainer:lr,tableWrapper:mr,thead:pr,tr:gr,tbody:fr,th:hr,td:br,expandedRow:vr,expanded:kr,loaderWrapper:yr,emptyState:wr,footer:xr,footerInfo:Rr,footerActions:Tr,footerRight:qr,pageSizeSelect:jr,pageBtn:_r,pageBtnDisabled:Nr,pageBtnActive:Lr,loadMoreWrapper:Ir,darkMode:Ar};function Vr(n,o,i){if(o<=Math.max(5,i))return Array.from({length:o},(v,N)=>N+1);const p=[];p.push(1);let k=Math.max(2,n-1),x=Math.min(o-1,n+1);n<=3&&(x=Math.max(x,3)),n>=o-2&&(k=Math.min(k,o-2)),k>2&&p.push("...");for(let v=k;v<=x;v++)p.push(v);return x<o-1&&p.push("..."),p.push(o),p}function y(n){return Object.fromEntries(n.filter(([,o])=>o!==void 0&&o!==""))}const We=({tableData:n,columns:o,expandable:i=!0,defaultExpandedRows:p=[],disableRowToggle:k=!1,expandAll:x=!1,onRowToggle:v,onRowClick:N,isLoading:D=!1,emptyMessage:J="",footerMode:R="none",paginationConfig:e,loadMoreConfig:E,tableHeaderStyles:T,tableHeaderCellStyles:d,tableBodyStyles:g,tableBodyRowStyles:q,tableBodyCellStyles:u,tableExpandedRowStyles:W,tableExpandedPanelStyles:j,tableFooterStyles:h,tablePaginationButtonStyles:s,renderExpandedContent:ae,darkMode:Oe})=>{const Ue=cr().theme,Se=Oe??Ue==="dark",C=a=>Array.isArray(a.items)&&a.items.length>0,[$e,te]=f.useState(p);f.useEffect(()=>{x&&i&&te(a=>{const c=n.filter(C).map(b=>b.id);return Array.from(new Set([...a,...c]))})},[x,i,n]);const P=(e==null?void 0:e.mode)??"client",[l,B]=f.useState((e==null?void 0:e.currentPage)??1),[O,oe]=f.useState((e==null?void 0:e.pageSize)??10);f.useEffect(()=>{e!=null&&e.pageSize&&oe(e.pageSize)},[e==null?void 0:e.pageSize]),f.useEffect(()=>{P==="server"&&(e==null?void 0:e.currentPage)!==void 0&&B(e.currentPage)},[e==null?void 0:e.currentPage,P]);const se=f.useMemo(()=>{if(R!=="pagination"||P==="server")return n;const a=(l-1)*O;return n.slice(a,a+O)},[n,R,P,l,O]),U=f.useMemo(()=>R!=="pagination"?1:P==="server"?(e==null?void 0:e.totalPages)??1:Math.max(1,Math.ceil(n.length/O)),[n.length,R,P,e==null?void 0:e.totalPages,O]),H=(e==null?void 0:e.totalItems)??(P==="client"?n.length:void 0),Ge=(a,c)=>{i&&C(a)&&!k&&te(b=>{const L=b.includes(a.id)?b.filter(I=>I!==a.id):[...b,a.id];return v==null||v(L),L}),N==null||N(a,c)},Ye=a=>r.jsx("div",{children:a.map(c=>r.jsx("div",{children:r.jsx("div",{className:"draggable-item-content",children:c.content})},c.id))}),ee=a=>{var c;a<1||a>U||(B(a),(c=e==null?void 0:e.onPageChange)==null||c.call(e,a))},Ze=a=>{var c;oe(a),B(1),(c=e==null?void 0:e.onPageSizeChange)==null||c.call(e,a)},Ke=y([["background",T==null?void 0:T.background],["borderBottom",T==null?void 0:T.borderBottom],["borderRadius",T==null?void 0:T.borderRadius]]),Xe=y([["background",d==null?void 0:d.background],["color",d==null?void 0:d.color],["fontSize",d==null?void 0:d.fontSize],["fontWeight",d==null?void 0:d.fontWeight],["padding",d==null?void 0:d.padding],["textTransform",d==null?void 0:d.textTransform],["letterSpacing",d==null?void 0:d.letterSpacing]]),Je=y([["background",g==null?void 0:g.background],["border",g==null?void 0:g.border],["borderRadius",g==null?void 0:g.borderRadius]]),Qe=y([["background",q==null?void 0:q.background],["borderColor",q==null?void 0:q.borderColor],["minHeight",q==null?void 0:q.minHeight]]),Fe=y([["background",u==null?void 0:u.background],["color",u==null?void 0:u.color],["fontSize",u==null?void 0:u.fontSize],["fontWeight",u==null?void 0:u.fontWeight],["padding",u==null?void 0:u.padding]]),Ce=y([["background",W==null?void 0:W.background],["borderColor",W==null?void 0:W.borderColor]]),Be=y([["background",j==null?void 0:j.background],["borderTop",j==null?void 0:j.borderTop],["padding",j==null?void 0:j.padding]]),He=y([["background",h==null?void 0:h.background],["color",h==null?void 0:h.color],["borderTop",h==null?void 0:h.borderTop],["padding",h==null?void 0:h.padding]]),re=y([["background",s==null?void 0:s.background],["color",s==null?void 0:s.color],["border",s==null?void 0:s.border],["borderRadius",s==null?void 0:s.borderRadius]]),er=y([["background",s==null?void 0:s.activeBackground],["color",s==null?void 0:s.activeColor],["border",s==null?void 0:s.activeBorder],["borderRadius",s==null?void 0:s.borderRadius]]),rr=()=>{if(R!=="pagination")return null;const{showPageNumbers:a=!0,maxPageButtons:c=5,renderInfo:b,rightSlot:L,pageSizeOptions:I=[10,25,50]}=e??{},ne=a?Vr(l,U,c):[],nr=r.jsxs("span",{children:["Page ",r.jsx("strong",{children:l})," of ",r.jsx("strong",{children:U}),H!==void 0&&r.jsxs(r.Fragment,{children:["  ·  ",H," items"]})]});return r.jsxs("div",{className:t.footer,style:He,children:[r.jsx("div",{className:t.footerInfo,children:b?b(l,U,H):nr}),r.jsxs("div",{className:t.footerActions,children:[I&&I.length>0&&r.jsx("select",{className:t.pageSizeSelect,value:O,onChange:m=>Ze(Number(m.target.value)),"aria-label":"Rows per page",children:I.map(m=>r.jsxs("option",{value:m,children:[m," / page"]},m))}),r.jsx("div",{className:[t.pageBtn,l===1?t.pageBtnDisabled:""].join(" "),style:l===1?{}:re,onClick:()=>ee(l-1),role:"button","aria-label":"Previous page",children:"‹"}),a&&ne.map((m,ar)=>m==="..."?r.jsx("div",{className:t.pageBtn,style:{cursor:"default",border:"none"},children:"…"},`ellipsis-${ar}`):r.jsx("div",{className:[t.pageBtn,m===l?t.pageBtnActive:""].join(" "),style:m===l?er:re,onClick:()=>m!==l&&ee(m),role:"button","aria-label":`Page ${m}`,"aria-current":m===l?"page":void 0,children:m},m)),r.jsx("div",{className:[t.pageBtn,l===U?t.pageBtnDisabled:""].join(" "),style:l===U?{}:re,onClick:()=>ee(l+1),role:"button","aria-label":"Next page",children:"›"})]}),L&&r.jsx("div",{className:t.footerRight,children:L})]})};return r.jsx(or,{theme:ir,children:r.jsxs("div",{className:Se?t.darkMode:"",children:[r.jsx("div",{style:D?{opacity:.5,pointerEvents:"none"}:void 0,children:r.jsx("div",{className:t.scrollContainer,children:r.jsxs("div",{className:t.tableWrapper,style:g!=null&&g.minWidth?{minWidth:g.minWidth}:void 0,children:[r.jsx("div",{className:t.thead,style:Ke,children:r.jsx("div",{className:t.tr,children:o.map((a,c)=>r.jsx("div",{className:t.th,style:{width:a.width,...Xe},children:a.header},c))})}),se.length===0?r.jsxs("div",{className:t.emptyState,children:[r.jsx(dr,{}),J&&r.jsx("p",{children:J})]}):r.jsx("div",{className:t.tbody,style:Je,children:se.map((a,c)=>{const b=i&&$e.includes(a.id),L=i&&C(a)||!!N;return r.jsxs(tr.Fragment,{children:[r.jsx("div",{"data-testid":`lt-table-v2-row-${c}`,className:[t.tr,b?t.expandedRow:""].join(" "),onClick:L?()=>Ge(a,c):void 0,style:{cursor:L?"pointer":void 0,...Qe,...b?Ce:{}},children:o.map((I,ne)=>r.jsx("div",{className:t.td,style:{width:I.width,...Fe},children:I.accessor(a)},ne))}),b&&r.jsx("div",{className:[t.tr,t.expanded].join(" "),style:Be,children:r.jsx("div",{className:t.td,style:{width:"100%"},children:ae?ae(a):a.items?Ye(a.items):null})})]},a.id)})})]})})}),D&&r.jsx("div",{className:t.loaderWrapper,children:r.jsx(sr,{active:!0,inline:"centered"})}),!D&&R==="pagination"&&rr(),!D&&R==="loadMore"&&E&&r.jsx("div",{className:t.loadMoreWrapper,children:E.button})]})})},Q=We;We.__docgenInfo={description:"",methods:[],displayName:"LtTableV2",props:{tableData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Unique row identifier used for expansion tracking */
  id: string;
  /** Optional nested items rendered inside the expanded panel */
  items?: LtTableV2Item[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique row identifier used for expansion tracking"},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: LtTableV2Item[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"LtTableV2Item"}],raw:"LtTableV2Item[]",required:!1}}]}}],raw:"LtTableV2Item[]",required:!1},description:"Optional nested items rendered inside the expanded panel"},{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"LtTableV2Row[]"},description:`Rows to display.
In client-mode pagination supply the full dataset; the table slices it.
In server-mode pagination supply only the current page's rows.`},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Text rendered in the header cell */
  header: string;
  /** Returns the cell content for a given row */
  accessor: (row: LtTableV2Row) => React.ReactNode;
  /** Column width – any valid CSS value, e.g. "20%" or "120px" */
  width?: string;
}`,signature:{properties:[{key:"header",value:{name:"string",required:!0},description:"Text rendered in the header cell"},{key:"accessor",value:{name:"signature",type:"function",raw:"(row: LtTableV2Row) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /** Unique row identifier used for expansion tracking */
  id: string;
  /** Optional nested items rendered inside the expanded panel */
  items?: LtTableV2Item[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique row identifier used for expansion tracking"},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: LtTableV2Item[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"LtTableV2Item"}],raw:"LtTableV2Item[]",required:!1}}]}}],raw:"LtTableV2Item[]",required:!1},description:"Optional nested items rendered inside the expanded panel"},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!0},description:"Returns the cell content for a given row"},{key:"width",value:{name:"string",required:!1},description:'Column width – any valid CSS value, e.g. "20%" or "120px"'}]}}],raw:"LtTableV2Column[]"},description:"Column definitions — header label, cell accessor, and optional width."},expandable:{required:!1,tsType:{name:"boolean"},description:"When `false` rows cannot be expanded, effectively making this a plain table.\n@default true",defaultValue:{value:"true",computed:!1}},defaultExpandedRows:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"IDs of rows that should be expanded on first render.\nHas no effect when `expandable` is `false`.",defaultValue:{value:"[]",computed:!1}},onRowToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedRows: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedRows"}],return:{name:"void"}}},description:`Called whenever the set of currently expanded row IDs changes.
Receives the full updated array of expanded IDs.`},disableRowToggle:{required:!1,tsType:{name:"boolean"},description:"When `true`, prevents the user from expanding or collapsing rows by clicking on them.\nRows can still be expanded initially via `defaultExpandedRows`.\n@default false",defaultValue:{value:"false",computed:!1}},expandAll:{required:!1,tsType:{name:"boolean"},description:"When `true`, automatically expands all rows that have children.\nNew rows loaded via pagination will also be expanded.\n@default false",defaultValue:{value:"false",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: LtTableV2Row, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /** Unique row identifier used for expansion tracking */
  id: string;
  /** Optional nested items rendered inside the expanded panel */
  items?: LtTableV2Item[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique row identifier used for expansion tracking"},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: LtTableV2Item[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"LtTableV2Item"}],raw:"LtTableV2Item[]",required:!1}}]}}],raw:"LtTableV2Item[]",required:!1},description:"Optional nested items rendered inside the expanded panel"},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called when any row is clicked, even if the row is not expandable.\nReceives the row object and its index in `tableData`."},isLoading:{required:!1,tsType:{name:"boolean"},description:`Overlay a loading spinner over the table and prevent interaction.
Use this while async data is being fetched.
@default false`,defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content shown inside the empty-state panel when `tableData` is empty\nand `isLoading` is `false`. Accepts a string or any React node.",defaultValue:{value:"''",computed:!1}},footerMode:{required:!1,tsType:{name:"union",raw:"'pagination' | 'loadMore' | 'none'",elements:[{name:"literal",value:"'pagination'"},{name:"literal",value:"'loadMore'"},{name:"literal",value:"'none'"}]},description:"Which footer style to render below the table.\n- `'pagination'` — page controls; configure via `paginationConfig`.\n- `'loadMore'`   — a custom button; configure via `loadMoreConfig`.\n- `'none'`       — no footer.\n@default 'none'",defaultValue:{value:"'none'",computed:!1}},paginationConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Whether pagination is driven by the component (client) or by an external
   * data source such as an API (server).
   * @default 'client'
   */
  mode?: PaginationMode;

  /** Page number to start on (1-based).
   * In client mode this is managed internally but seeded from this value.
   * In server mode this must be kept in sync by the caller. */
  currentPage?: number;

  /** Total number of pages. Required in server mode; computed in client mode. */
  totalPages?: number;

  /** Total number of records across all pages (used for the info label). */
  totalItems?: number;

  /** Number of rows per page.
   * In client mode the table slices \`tableData\` accordingly.
   * @default 10 */
  pageSize?: number;

  /**
   * Available page-size options shown in the selector dropdown.
   * Pass an empty array or omit to hide the selector.
   * @default [10, 25, 50]
   */
  pageSizeOptions?: number[];

  /**
   * Called when the user navigates to a different page.
   * In server mode use this to fetch the next page from your API.
   */
  onPageChange?: (page: number) => void;

  /**
   * Called when the user selects a different page size.
   * Update your own state / API call accordingly.
   */
  onPageSizeChange?: (pageSize: number) => void;

  /** Show numbered page buttons between prev / next.
   * @default true */
  showPageNumbers?: boolean;

  /** Maximum number of page number buttons before ellipsis is inserted.
   * @default 5 */
  maxPageButtons?: number;

  /** Replace the default "Page X of Y · N items" info label with a custom node. */
  renderInfo?: (currentPage: number, totalPages: number, totalItems?: number) => React.ReactNode;

  /** Any node rendered at the far right of the footer bar (e.g. a download button). */
  rightSlot?: React.ReactNode;
}`,signature:{properties:[{key:"mode",value:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}],required:!1},description:`Whether pagination is driven by the component (client) or by an external
data source such as an API (server).
@default 'client'`},{key:"currentPage",value:{name:"number",required:!1},description:`Page number to start on (1-based).
In client mode this is managed internally but seeded from this value.
In server mode this must be kept in sync by the caller.`},{key:"totalPages",value:{name:"number",required:!1},description:"Total number of pages. Required in server mode; computed in client mode."},{key:"totalItems",value:{name:"number",required:!1},description:"Total number of records across all pages (used for the info label)."},{key:"pageSize",value:{name:"number",required:!1},description:"Number of rows per page.\nIn client mode the table slices `tableData` accordingly.\n@default 10"},{key:"pageSizeOptions",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:`Available page-size options shown in the selector dropdown.
Pass an empty array or omit to hide the selector.
@default [10, 25, 50]`},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!1},description:`Called when the user navigates to a different page.
In server mode use this to fetch the next page from your API.`},{key:"onPageSizeChange",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!1},description:`Called when the user selects a different page size.
Update your own state / API call accordingly.`},{key:"showPageNumbers",value:{name:"boolean",required:!1},description:`Show numbered page buttons between prev / next.
@default true`},{key:"maxPageButtons",value:{name:"number",required:!1},description:`Maximum number of page number buttons before ellipsis is inserted.
@default 5`},{key:"renderInfo",value:{name:"signature",type:"function",raw:"(currentPage: number, totalPages: number, totalItems?: number) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"currentPage"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1},description:'Replace the default "Page X of Y · N items" info label with a custom node.'},{key:"rightSlot",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"Any node rendered at the far right of the footer bar (e.g. a download button)."}]}},description:"Pagination configuration. Required when `footerMode` is `'pagination'`.\nSupports both client-side slicing and server-side (async) fetching."},loadMoreConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** The custom button (or any node) to render in the footer. */
  button: React.ReactNode;
}`,signature:{properties:[{key:"button",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"The custom button (or any node) to render in the footer."}]}},description:"Load-more configuration. Required when `footerMode` is `'loadMore'`."},tableHeaderStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderBottom?: string;
  borderRadius?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderBottom",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}}]}},description:"Styles for the header container (`<thead>`)."},tableHeaderCellStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
  textTransform?: React.CSSProperties['textTransform'];
  letterSpacing?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"padding",value:{name:"string",required:!1}},{key:"textTransform",value:{name:"ReactCSSProperties['textTransform']",raw:"React.CSSProperties['textTransform']",required:!1}},{key:"letterSpacing",value:{name:"string",required:!1}}]}},description:"Styles for each header cell (`<th>`)."},tableBodyStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  border?: string;
  borderRadius?: string;
  /**
   * Minimum width of the table before horizontal scrolling kicks in.
   * Defaults to \`'800px'\`. Set to \`'none'\` to remove the minimum.
   */
  minWidth?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"minWidth",value:{name:"string",required:!1},description:"Minimum width of the table before horizontal scrolling kicks in.\nDefaults to `'800px'`. Set to `'none'` to remove the minimum."}]}},description:"Styles for the body container (`<tbody>`)."},tableBodyRowStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderColor?: string;
  minHeight?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"minHeight",value:{name:"string",required:!1}}]}},description:"Styles applied to every body row."},tableBodyCellStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"padding",value:{name:"string",required:!1}}]}},description:"Styles applied to every body data cell (`<td>`)."},tableExpandedRowStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderColor?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}}]}},description:"Styles for the parent row when it is in its expanded (open) state."},tableExpandedPanelStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderTop?: string;
  padding?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderTop",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}}]}},description:"Styles for the expanded content panel that slides open below a row."},tableFooterStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  borderTop?: string;
  padding?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"borderTop",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}}]}},description:"Styles for the footer bar."},tablePaginationButtonStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  /** Applied to the currently active page button */
  activeBackground?: string;
  activeColor?: string;
  activeBorder?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"activeBackground",value:{name:"string",required:!1},description:"Applied to the currently active page button"},{key:"activeColor",value:{name:"string",required:!1}},{key:"activeBorder",value:{name:"string",required:!1}}]}},description:"Styles for pagination page buttons."},renderExpandedContent:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: LtTableV2Row) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /** Unique row identifier used for expansion tracking */
  id: string;
  /** Optional nested items rendered inside the expanded panel */
  items?: LtTableV2Item[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Unique row identifier used for expansion tracking"},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: LtTableV2Item[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"LtTableV2Item"}],raw:"LtTableV2Item[]",required:!1}}]}}],raw:"LtTableV2Item[]",required:!1},description:"Optional nested items rendered inside the expanded panel"},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Provide a custom renderer for the expanded panel instead of the default\n`items` list. Receives the full row object."},darkMode:{required:!1,tsType:{name:"boolean"},description:"Forces dark mode styles. When not provided, falls back to the global ThemeContext."}}};const bn={title:"LtTableV2",component:Q,parameters:{docs:{description:{component:"\n**LtTableV2** is a flexible, zero-dependency table component that supports:\n\n- **Expandable rows** — rows with `items` can be toggled open to reveal nested content.\n- **Flat (non-expandable) mode** — disable expansion entirely with `expandable={false}`.\n- **Client-side pagination** — pass all rows via `tableData`; the table slices them automatically.\n- **Server-side (async) pagination** — supply only the current page; fire an API call in `onPageChange`.\n- **Load-more mode** — render any custom button in the footer instead of page controls.\n- **Per-section style overrides** — fine-grained control via `tableHeaderStyles`, `tableHeaderCellStyles`, `tableBodyStyles`, `tableBodyRowStyles`, `tableBodyCellStyles`, `tableExpandedRowStyles`, `tableExpandedPanelStyles`, `tableFooterStyles`, `tablePaginationButtonStyles`.\n- **Custom expanded panels** — supply `renderExpandedContent` to fully control the expanded panel instead of the default items renderer.\n        ".trim()}}},argTypes:{tableData:{description:"Array of row objects. In client-mode pagination supply the full dataset; in server mode supply only the current page.",control:"object",table:{type:{summary:"LtTableV2Row[]"}}},columns:{description:"Column definitions. Each column needs a `header` string, an `accessor(row)` function, and an optional `width`.",control:"object",table:{type:{summary:"LtTableV2Column[]"}}},expandable:{description:"When `false` rows are never expandable, making this a plain flat table.",control:"boolean",defaultValue:!0},defaultExpandedRows:{description:"Array of row IDs that should be expanded on first render.",control:"object"},disableRowToggle:{description:"When `true`, rows cannot be expanded or collapsed by clicking on them.",control:"boolean",defaultValue:!1},expandAll:{description:"When `true`, automatically expands all expandable rows.",control:"boolean",defaultValue:!1},isLoading:{description:"Dims the table and shows a spinner. Use while async data is fetching.",control:"boolean",defaultValue:!1},emptyMessage:{description:"Message or node displayed when `tableData` is empty and not loading.",control:"text"},footerMode:{description:"`pagination` — shows page controls. `loadMore` — shows a custom button. `none` — hides the footer.",control:{type:"select"},options:["none","pagination","loadMore"],defaultValue:"none"},paginationConfig:{description:'Required when `footerMode` is `"pagination"`. Configures mode (client/server), page size, callbacks, and display options.',control:"object",table:{type:{summary:"PaginationConfig"}}},loadMoreConfig:{description:'Required when `footerMode` is `"loadMore"`. Provide a `button` node to render in the footer.',control:!1,table:{type:{summary:"LoadMoreConfig"}}},tableHeaderStyles:{description:"Style overrides for the `<thead>` container: `background`, `borderBottom`, `borderRadius`.",control:"object",table:{type:{summary:"TableHeaderStyles"}}},tableHeaderCellStyles:{description:"Style overrides for each `<th>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`, `textTransform`, `letterSpacing`.",control:"object",table:{type:{summary:"TableHeaderCellStyles"}}},tableBodyStyles:{description:"Style overrides for the `<tbody>` container: `background`, `border`, `borderRadius`.",control:"object",table:{type:{summary:"TableBodyStyles"}}},tableBodyRowStyles:{description:"Style overrides applied to every body row: `background`, `borderColor`, `minHeight`.",control:"object",table:{type:{summary:"TableBodyRowStyles"}}},tableBodyCellStyles:{description:"Style overrides for every `<td>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`.",control:"object",table:{type:{summary:"TableBodyCellStyles"}}},tableExpandedRowStyles:{description:"Style overrides for the parent row when it is open: `background`, `borderColor`.",control:"object",table:{type:{summary:"TableExpandedRowStyles"}}},tableExpandedPanelStyles:{description:"Style overrides for the expanded content panel: `background`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableExpandedPanelStyles"}}},tableFooterStyles:{description:"Style overrides for the footer bar: `background`, `color`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableFooterStyles"}}},tablePaginationButtonStyles:{description:"Style overrides for pagination page buttons: `background`, `color`, `border`, `borderRadius`, `activeBackground`, `activeColor`, `activeBorder`.",control:"object",table:{type:{summary:"TablePaginationButtonStyles"}}},onRowClick:{description:"Called on every row click. Receives `(row, index)`. Works alongside expandable rows.",action:"row clicked"},onRowToggle:{description:"Called whenever a row is expanded or collapsed. Receives the full array of currently expanded row IDs.",action:"row toggled"},renderExpandedContent:{description:"Custom renderer for the expanded panel. If provided, overrides the default `items` renderer.",control:!1,table:{type:{summary:"(row: LtTableV2Row) => React.ReactNode"}}}}},_=(n=12)=>Array.from({length:n},(o,i)=>({id:String(i+1),name:["Connaught Place","Koramangala","Bandra West","Anna Nagar","Park Street"][i%5],city:["Delhi","Bangalore","Mumbai","Chennai","Kolkata"][i%5],status:i%3===0?"Inactive":"Active",revenue:`₹${((i+1)*12345).toLocaleString("en-IN")}`,...i%2===1?{items:[{id:`${i+1}-1`,content:"📍 Sub-outlet Alpha"},{id:`${i+1}-2`,content:"📍 Sub-outlet Beta"}]}:{}})),w=[{header:"OUTLET NAME",accessor:n=>n.name,width:"30%"},{header:"CITY",accessor:n=>n.city,width:"20%"},{header:"STATUS",accessor:n=>n.status,width:"20%"},{header:"REVENUE",accessor:n=>n.revenue,width:"30%"}],z=n=>r.jsx(Q,{...n}),S=z.bind({});S.storyName="Default (expandable)";S.args={tableData:_(8),columns:w,expandable:!0,footerMode:"none"};const $=z.bind({});$.storyName="Client-side pagination";$.args={tableData:_(30),columns:w,expandable:!0,footerMode:"pagination",paginationConfig:{mode:"client",pageSize:10,pageSizeOptions:[5,10,25],showPageNumbers:!0,maxPageButtons:5,onPageChange:n=>console.log("[client] page →",n),onPageSizeChange:n=>console.log("[client] pageSize →",n)}};const F=_(40),ie=8,A=n=>{const[o,i]=f.useState(1),[p,k]=f.useState(ie),[x,v]=f.useState(!1),[N,D]=f.useState(F.slice(0,ie)),J=(e,E)=>{v(!0),setTimeout(()=>{D(F.slice((e-1)*E,e*E)),i(e),k(E),v(!1)},600)},R=Math.ceil(F.length/p);return r.jsx(Q,{...n,tableData:N,isLoading:x||n.isLoading,paginationConfig:{mode:"server",currentPage:o,totalPages:R,totalItems:F.length,pageSize:p,pageSizeOptions:[8,16,24],showPageNumbers:!0,maxPageButtons:7,onPageChange:e=>J(e,p),onPageSizeChange:e=>J(1,e)}})};A.storyName="Server-side (async) pagination";A.args={columns:w,expandable:!0,footerMode:"pagination"};A.parameters={docs:{source:{type:"code"}}};const V=n=>{const o=_(20),[i,p]=f.useState(5);return r.jsx(Q,{...n,tableData:o.slice(0,i),footerMode:i<o.length?"loadMore":"none",loadMoreConfig:{button:r.jsx(ur,{transparent:!0,border:!0,label:`Load More (${o.length-i} remaining)`,onClick:()=>p(k=>Math.min(k+5,o.length))})}})};V.storyName="Load-more footer";V.args={columns:w,expandable:!0};V.parameters={docs:{source:{type:"code"}}};const G=z.bind({});G.storyName="Flat (non-expandable)";G.args={tableData:_(6),columns:w,expandable:!1,footerMode:"none"};const Y=z.bind({});Y.storyName="Custom style overrides";Y.args={tableData:_(8),columns:w,expandable:!0,footerMode:"pagination",paginationConfig:{mode:"client",pageSize:4,pageSizeOptions:[4,8,12],showPageNumbers:!0,totalItems:8},tableHeaderCellStyles:{color:"#0080ffff",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em"},tableBodyCellStyles:{color:"#111827",fontSize:"14px"},tableExpandedPanelStyles:{background:"#eff6ff",borderTop:"1px solid #bfdbfe"},tableFooterStyles:{background:"#f8fafc",borderTop:"1px solid #e2e8f0"},tablePaginationButtonStyles:{activeBackground:"#4f46e5",activeColor:"#ffffff",activeBorder:"1px solid #4f46e5"}};const M=n=>r.jsx(Q,{...n,tableData:_(6),columns:w,renderExpandedContent:o=>r.jsxs("div",{style:{padding:"16px 24px",fontSize:14,color:"#374151"},children:[r.jsx("strong",{children:"Custom panel ·"})," ",o.name," — ",o.city," — ",o.revenue]})});M.storyName="Custom expanded content";M.args={expandable:!0};M.parameters={docs:{source:{type:"code"}}};const Z=z.bind({});Z.storyName="Loading state";Z.args={tableData:_(4),columns:w,isLoading:!0};const K=z.bind({});K.storyName="Empty state";K.args={tableData:[],columns:w,emptyMessage:"No outlets found."};const X=z.bind({});X.storyName="Locked Expanded Rows";X.args={tableData:_(4),columns:w,expandable:!0,disableRowToggle:!0,expandAll:!0};A.__docgenInfo={description:"",methods:[],displayName:"ServerPagination"};V.__docgenInfo={description:"",methods:[],displayName:"LoadMore"};M.__docgenInfo={description:"",methods:[],displayName:"CustomExpandedContent"};var de,ce,ue;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:"args => <LtTableV2 {...args} />",...(ue=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var le,me,pe;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:"args => <LtTableV2 {...args} />",...(pe=(me=$.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,fe,he;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const [page, setPage] = useState(1);
  const [pageSize, setPs] = useState(SERVER_PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(ALL_SERVER_DATA.slice(0, SERVER_PAGE_SIZE));
  const fetchPage = (p: number, ps: number) => {
    setLoading(true);
    // Simulate an async API call with a 600 ms delay
    setTimeout(() => {
      setData(ALL_SERVER_DATA.slice((p - 1) * ps, p * ps));
      setPage(p);
      setPs(ps);
      setLoading(false);
    }, 600);
  };
  const totalPages = Math.ceil(ALL_SERVER_DATA.length / pageSize);
  return <LtTableV2 {...args} tableData={data} isLoading={loading || args.isLoading} paginationConfig={{
    mode: 'server',
    currentPage: page,
    totalPages,
    totalItems: ALL_SERVER_DATA.length,
    pageSize,
    pageSizeOptions: [8, 16, 24],
    showPageNumbers: true,
    maxPageButtons: 7,
    onPageChange: p => fetchPage(p, pageSize),
    onPageSizeChange: ps => fetchPage(1, ps)
  }} />;
}`,...(he=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,ve,ke;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const allData = makeData(20);
  const [visible, setVisible] = useState(5);
  return <LtTableV2 {...args} tableData={allData.slice(0, visible)} footerMode={visible < allData.length ? 'loadMore' : 'none'} loadMoreConfig={{
    button: <LtButton transparent border label={\`Load More (\${allData.length - visible} remaining)\`} onClick={() => setVisible(v => Math.min(v + 5, allData.length))} />
  }} />;
}`,...(ke=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var ye,we,xe;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:"args => <LtTableV2 {...args} />",...(xe=(we=G.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Re,Te,qe;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:"args => <LtTableV2 {...args} />",...(qe=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};var je,_e,Ne;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`args => <LtTableV2 {...args} tableData={makeData(6)} columns={columns} renderExpandedContent={row => <div style={{
  padding: '16px 24px',
  fontSize: 14,
  color: '#374151'
}}>
        <strong>Custom panel ·</strong> {row.name} — {row.city} — {row.revenue}
      </div>} />`,...(Ne=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Le,Ie,Ae;Z.parameters={...Z.parameters,docs:{...(Le=Z.parameters)==null?void 0:Le.docs,source:{originalSource:"args => <LtTableV2 {...args} />",...(Ae=(Ie=Z.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var Ve,Me,Pe;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:"args => <LtTableV2 {...args} />",...(Pe=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var ze,De,Ee;X.parameters={...X.parameters,docs:{...(ze=X.parameters)==null?void 0:ze.docs,source:{originalSource:"args => <LtTableV2 {...args} />",...(Ee=(De=X.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};const vn=["Default","ClientPagination","ServerPagination","LoadMore","Flat","CustomStyles","CustomExpandedContent","Loading","Empty","LockedExpanded"];export{$ as ClientPagination,M as CustomExpandedContent,Y as CustomStyles,S as Default,K as Empty,G as Flat,V as LoadMore,Z as Loading,X as LockedExpanded,A as ServerPagination,vn as __namedExportsOrder,bn as default};
