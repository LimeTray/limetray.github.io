import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as f,R as tr}from"./index-ad58220e.js";import{o as or}from"./styled-components.browser.esm-675ea4f2.js";import{L as sr}from"./Loader-70696280.js";import{t as ir}from"./config-d270d9b6.js";import{P as dr}from"./pumpkinIcon-7a5587d6.js";import{u as cr}from"./ThemeContext-71b3bf8d.js";import{L as ur}from"./ltButton-9d7d3ed4.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./clsx.m-64db5d3b.js";import"./getElementType-727593ce.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Button-4d423377.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./factories-499f84ec.js";import"./Icon-7990d6af.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";const mr="_scrollContainer_rskam_3",lr="_tableWrapper_rskam_20",pr="_thead_rskam_28",gr="_tr_rskam_32",fr="_tbody_rskam_33",hr="_th_rskam_28",br="_td_rskam_71",vr="_expandedRow_rskam_79",kr="_expanded_rskam_79",wr="_loaderWrapper_rskam_116",yr="_emptyState_rskam_122",xr="_footer_rskam_134",Rr="_footerInfo_rskam_146",Tr="_footerActions_rskam_153",qr="_footerRight_rskam_160",_r="_pageSizeSelect_rskam_166",Nr="_pageBtn_rskam_188",jr="_pageBtnDisabled_rskam_203",Lr="_pageBtnActive_rskam_203",Ir="_loadMoreWrapper_rskam_220",Ar="_darkMode_rskam_227",t={scrollContainer:mr,tableWrapper:lr,thead:pr,tr:gr,tbody:fr,th:hr,td:br,expandedRow:vr,expanded:kr,loaderWrapper:wr,emptyState:yr,footer:xr,footerInfo:Rr,footerActions:Tr,footerRight:qr,pageSizeSelect:_r,pageBtn:Nr,pageBtnDisabled:jr,pageBtnActive:Lr,loadMoreWrapper:Ir,darkMode:Ar};function Vr(e,o,i){if(o<=Math.max(5,i))return Array.from({length:o},(v,I)=>I+1);const p=[];p.push(1);let w=Math.max(2,e-1),T=Math.min(o-1,e+1);e<=3&&(T=Math.max(T,3)),e>=o-2&&(w=Math.min(w,o-2)),w>2&&p.push("...");for(let v=w;v<=T;v++)p.push(v);return T<o-1&&p.push("..."),p.push(o),p}function y(e){return Object.fromEntries(e.filter(([,o])=>o!==void 0&&o!==""))}const We=({tableData:e,columns:o,expandable:i=!0,defaultExpandedRows:p=[],disableRowToggle:w=!1,expandAll:T=!1,onRowToggle:v,onRowClick:I,isLoading:Y=!1,emptyMessage:Q="",footerMode:q="none",paginationConfig:n,loadMoreConfig:Z,tableHeaderStyles:_,tableHeaderCellStyles:d,tableBodyStyles:g,tableBodyRowStyles:N,tableBodyCellStyles:u,tableExpandedRowStyles:K,tableExpandedPanelStyles:j,tableFooterStyles:h,tablePaginationButtonStyles:s,renderExpandedContent:ae,darkMode:Oe})=>{const Se=cr().theme,Ue=Oe??Se==="dark",C=a=>Array.isArray(a.items)&&a.items.length>0,[$e,te]=f.useState(p);f.useEffect(()=>{T&&i&&te(a=>{const c=e.filter(C).map(b=>b.id);return Array.from(new Set([...a,...c]))})},[T,i,e]);const P=(n==null?void 0:n.mode)??"client",[m,B]=f.useState((n==null?void 0:n.currentPage)??1),[X,oe]=f.useState((n==null?void 0:n.pageSize)??10);f.useEffect(()=>{n!=null&&n.pageSize&&oe(n.pageSize)},[n==null?void 0:n.pageSize]),f.useEffect(()=>{P==="server"&&(n==null?void 0:n.currentPage)!==void 0&&B(n.currentPage)},[n==null?void 0:n.currentPage,P]);const se=f.useMemo(()=>{if(q!=="pagination"||P==="server")return e;const a=(m-1)*X;return e.slice(a,a+X)},[e,q,P,m,X]),J=f.useMemo(()=>q!=="pagination"?1:P==="server"?(n==null?void 0:n.totalPages)??1:Math.max(1,Math.ceil(e.length/X)),[e.length,q,P,n==null?void 0:n.totalPages,X]),H=(n==null?void 0:n.totalItems)??(P==="client"?e.length:void 0),Ge=(a,c)=>{i&&C(a)&&!w&&te(b=>{const A=b.includes(a.id)?b.filter(V=>V!==a.id):[...b,a.id];return v==null||v(A),A}),I==null||I(a,c)},Ye=a=>r.jsx("div",{children:a.map(c=>r.jsx("div",{children:r.jsx("div",{className:"draggable-item-content",children:c.content})},c.id))}),ee=a=>{var c;a<1||a>J||(B(a),(c=n==null?void 0:n.onPageChange)==null||c.call(n,a))},Ze=a=>{var c;oe(a),B(1),(c=n==null?void 0:n.onPageSizeChange)==null||c.call(n,a)},Ke=y([["background",_==null?void 0:_.background],["borderBottom",_==null?void 0:_.borderBottom],["borderRadius",_==null?void 0:_.borderRadius]]),Xe=y([["background",d==null?void 0:d.background],["color",d==null?void 0:d.color],["fontSize",d==null?void 0:d.fontSize],["fontWeight",d==null?void 0:d.fontWeight],["padding",d==null?void 0:d.padding],["textTransform",d==null?void 0:d.textTransform],["letterSpacing",d==null?void 0:d.letterSpacing]]),Je=y([["background",g==null?void 0:g.background],["border",g==null?void 0:g.border],["borderRadius",g==null?void 0:g.borderRadius]]),Qe=y([["background",N==null?void 0:N.background],["borderColor",N==null?void 0:N.borderColor],["minHeight",N==null?void 0:N.minHeight]]),Fe=y([["background",u==null?void 0:u.background],["color",u==null?void 0:u.color],["fontSize",u==null?void 0:u.fontSize],["fontWeight",u==null?void 0:u.fontWeight],["padding",u==null?void 0:u.padding]]),Ce=y([["background",K==null?void 0:K.background],["borderColor",K==null?void 0:K.borderColor]]),Be=y([["background",j==null?void 0:j.background],["borderTop",j==null?void 0:j.borderTop],["padding",j==null?void 0:j.padding]]),He=y([["background",h==null?void 0:h.background],["color",h==null?void 0:h.color],["borderTop",h==null?void 0:h.borderTop],["padding",h==null?void 0:h.padding]]),re=y([["background",s==null?void 0:s.background],["color",s==null?void 0:s.color],["border",s==null?void 0:s.border],["borderRadius",s==null?void 0:s.borderRadius]]),er=y([["background",s==null?void 0:s.activeBackground],["color",s==null?void 0:s.activeColor],["border",s==null?void 0:s.activeBorder],["borderRadius",s==null?void 0:s.borderRadius]]),rr=()=>{if(q!=="pagination")return null;const{showPageNumbers:a=!0,maxPageButtons:c=5,renderInfo:b,rightSlot:A,pageSizeOptions:V=[10,25,50]}=n??{},ne=a?Vr(m,J,c):[],nr=r.jsxs("span",{children:["Page ",r.jsx("strong",{children:m})," of ",r.jsx("strong",{children:J}),H!==void 0&&r.jsxs(r.Fragment,{children:["  ·  ",H," items"]})]});return r.jsxs("div",{className:t.footer,style:He,children:[r.jsx("div",{className:t.footerInfo,children:b?b(m,J,H):nr}),r.jsxs("div",{className:t.footerActions,children:[V&&V.length>0&&r.jsx("select",{className:t.pageSizeSelect,value:X,onChange:l=>Ze(Number(l.target.value)),"aria-label":"Rows per page",children:V.map(l=>r.jsxs("option",{value:l,children:[l," / page"]},l))}),r.jsx("div",{className:[t.pageBtn,m===1?t.pageBtnDisabled:""].join(" "),style:m===1?{}:re,onClick:()=>ee(m-1),role:"button","aria-label":"Previous page",children:"‹"}),a&&ne.map((l,ar)=>l==="..."?r.jsx("div",{className:t.pageBtn,style:{cursor:"default",border:"none"},children:"…"},`ellipsis-${ar}`):r.jsx("div",{className:[t.pageBtn,l===m?t.pageBtnActive:""].join(" "),style:l===m?er:re,onClick:()=>l!==m&&ee(l),role:"button","aria-label":`Page ${l}`,"aria-current":l===m?"page":void 0,children:l},l)),r.jsx("div",{className:[t.pageBtn,m===J?t.pageBtnDisabled:""].join(" "),style:m===J?{}:re,onClick:()=>ee(m+1),role:"button","aria-label":"Next page",children:"›"})]}),A&&r.jsx("div",{className:t.footerRight,children:A})]})};return r.jsx(or,{theme:ir,children:r.jsxs("div",{className:Ue?t.darkMode:"",children:[r.jsx("div",{style:Y?{opacity:.5,pointerEvents:"none"}:void 0,children:r.jsx("div",{className:t.scrollContainer,children:r.jsxs("div",{className:t.tableWrapper,style:g!=null&&g.minWidth?{minWidth:g.minWidth}:void 0,children:[r.jsx("div",{className:t.thead,style:Ke,children:r.jsx("div",{className:t.tr,children:o.map((a,c)=>r.jsx("div",{className:t.th,style:{width:a.width,...Xe},children:a.header},c))})}),se.length===0?r.jsxs("div",{className:t.emptyState,children:[r.jsx(dr,{}),Q&&r.jsx("p",{children:Q})]}):r.jsx("div",{className:t.tbody,style:Je,children:se.map((a,c)=>{const b=i&&$e.includes(a.id),A=i&&C(a)||!!I;return r.jsxs(tr.Fragment,{children:[r.jsx("div",{"data-testid":`lt-table-v2-row-${c}`,className:[t.tr,b?t.expandedRow:""].join(" "),onClick:A?()=>Ge(a,c):void 0,style:{cursor:A?"pointer":void 0,...Qe,...b?Ce:{}},children:o.map((V,ne)=>r.jsx("div",{className:t.td,style:{width:V.width,...Fe},children:V.accessor(a)},ne))}),b&&r.jsx("div",{className:[t.tr,t.expanded].join(" "),style:Be,children:r.jsx("div",{className:t.td,style:{width:"100%"},children:ae?ae(a):a.items?Ye(a.items):null})})]},a.id)})})]})})}),Y&&r.jsx("div",{className:t.loaderWrapper,children:r.jsx(sr,{active:!0,inline:"centered"})}),!Y&&q==="pagination"&&rr(),!Y&&q==="loadMore"&&Z&&r.jsx("div",{className:t.loadMoreWrapper,children:Z.button})]})})},k=We;We.__docgenInfo={description:"",methods:[],displayName:"LtTableV2",props:{tableData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"LtTableV2Item"}],raw:"LtTableV2Item[]",required:!1}}]}}],raw:"LtTableV2Item[]",required:!1},description:"Optional nested items rendered inside the expanded panel"},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Provide a custom renderer for the expanded panel instead of the default\n`items` list. Receives the full row object."},darkMode:{required:!1,tsType:{name:"boolean"},description:"Forces dark mode styles. When not provided, falls back to the global ThemeContext."}}};const cn={title:"LtTableV2",component:k,parameters:{docs:{description:{component:"\n**LtTableV2** is a flexible, zero-dependency table component that supports:\n\n- **Expandable rows** — rows with `items` can be toggled open to reveal nested content.\n- **Flat (non-expandable) mode** — disable expansion entirely with `expandable={false}`.\n- **Client-side pagination** — pass all rows via `tableData`; the table slices them automatically.\n- **Server-side (async) pagination** — supply only the current page; fire an API call in `onPageChange`.\n- **Load-more mode** — render any custom button in the footer instead of page controls.\n- **Per-section style overrides** — fine-grained control via `tableHeaderStyles`, `tableHeaderCellStyles`, `tableBodyStyles`, `tableBodyRowStyles`, `tableBodyCellStyles`, `tableExpandedRowStyles`, `tableExpandedPanelStyles`, `tableFooterStyles`, `tablePaginationButtonStyles`.\n- **Custom expanded panels** — supply `renderExpandedContent` to fully control the expanded panel instead of the default items renderer.\n        ".trim()},source:{type:"code"}}},argTypes:{tableData:{description:"Array of row objects. In client-mode pagination supply the full dataset; in server mode supply only the current page.",control:"object",table:{type:{summary:"LtTableV2Row[]"}}},columns:{description:"Column definitions. Each column needs a `header` string, an `accessor(row)` function, and an optional `width`.",control:"object",table:{type:{summary:"LtTableV2Column[]"}}},expandable:{description:"When `false` rows are never expandable, making this a plain flat table.",control:"boolean",defaultValue:!0},defaultExpandedRows:{description:"Array of row IDs that should be expanded on first render.",control:"object"},disableRowToggle:{description:"When `true`, rows cannot be expanded or collapsed by clicking on them.",control:"boolean",defaultValue:!1},expandAll:{description:"When `true`, automatically expands all expandable rows.",control:"boolean",defaultValue:!1},isLoading:{description:"Dims the table and shows a spinner. Use while async data is fetching.",control:"boolean",defaultValue:!1},emptyMessage:{description:"Message or node displayed when `tableData` is empty and not loading.",control:"text"},footerMode:{description:"`pagination` — shows page controls. `loadMore` — shows a custom button. `none` — hides the footer.",control:{type:"select"},options:["none","pagination","loadMore"],defaultValue:"none"},paginationConfig:{description:'Required when `footerMode` is `"pagination"`. Configures mode (client/server), page size, callbacks, and display options.',control:"object",table:{type:{summary:"PaginationConfig"}}},loadMoreConfig:{description:'Required when `footerMode` is `"loadMore"`. Provide a `button` node to render in the footer.',control:!1,table:{type:{summary:"LoadMoreConfig"}}},tableHeaderStyles:{description:"Style overrides for the `<thead>` container: `background`, `borderBottom`, `borderRadius`.",control:"object",table:{type:{summary:"TableHeaderStyles"}}},tableHeaderCellStyles:{description:"Style overrides for each `<th>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`, `textTransform`, `letterSpacing`.",control:"object",table:{type:{summary:"TableHeaderCellStyles"}}},tableBodyStyles:{description:"Style overrides for the `<tbody>` container: `background`, `border`, `borderRadius`.",control:"object",table:{type:{summary:"TableBodyStyles"}}},tableBodyRowStyles:{description:"Style overrides applied to every body row: `background`, `borderColor`, `minHeight`.",control:"object",table:{type:{summary:"TableBodyRowStyles"}}},tableBodyCellStyles:{description:"Style overrides for every `<td>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`.",control:"object",table:{type:{summary:"TableBodyCellStyles"}}},tableExpandedRowStyles:{description:"Style overrides for the parent row when it is open: `background`, `borderColor`.",control:"object",table:{type:{summary:"TableExpandedRowStyles"}}},tableExpandedPanelStyles:{description:"Style overrides for the expanded content panel: `background`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableExpandedPanelStyles"}}},tableFooterStyles:{description:"Style overrides for the footer bar: `background`, `color`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableFooterStyles"}}},tablePaginationButtonStyles:{description:"Style overrides for pagination page buttons: `background`, `color`, `border`, `borderRadius`, `activeBackground`, `activeColor`, `activeBorder`.",control:"object",table:{type:{summary:"TablePaginationButtonStyles"}}},onRowClick:{description:"Called on every row click. Receives `(row, index)`. Works alongside expandable rows.",action:"row clicked"},onRowToggle:{description:"Called whenever a row is expanded or collapsed. Receives the full array of currently expanded row IDs.",action:"row toggled"},renderExpandedContent:{description:"Custom renderer for the expanded panel. If provided, overrides the default `items` renderer.",control:!1,table:{type:{summary:"(row: LtTableV2Row) => React.ReactNode"}}}}},L=(e=12)=>Array.from({length:e},(o,i)=>({id:String(i+1),name:["Connaught Place","Koramangala","Bandra West","Anna Nagar","Park Street"][i%5],city:["Delhi","Bangalore","Mumbai","Chennai","Kolkata"][i%5],status:i%3===0?"Inactive":"Active",revenue:`₹${((i+1)*12345).toLocaleString("en-IN")}`,...i%2===1?{items:[{id:`${i+1}-1`,content:"📍 Sub-outlet Alpha"},{id:`${i+1}-2`,content:"📍 Sub-outlet Beta"}]}:{}})),x=[{header:"OUTLET NAME",accessor:e=>e.name,width:"30%"},{header:"CITY",accessor:e=>e.city,width:"20%"},{header:"STATUS",accessor:e=>e.status,width:"20%"},{header:"REVENUE",accessor:e=>e.revenue,width:"30%"}],R=e=>r.jsx("div",{style:{padding:"24px",background:"#f9fafb"},children:e}),M=e=>R(r.jsx(k,{...e}));M.storyName="Default (expandable)";M.args={tableData:L(8),columns:x,expandable:!0,footerMode:"none"};const z=e=>R(r.jsx(k,{...e}));z.storyName="Client-side pagination";z.args={tableData:L(30),columns:x,expandable:!0,footerMode:"pagination",paginationConfig:{mode:"client",pageSize:10,pageSizeOptions:[5,10,25],showPageNumbers:!0,maxPageButtons:5,onPageChange:e=>console.log("[client] page →",e),onPageSizeChange:e=>console.log("[client] pageSize →",e)}};const F=L(40),ie=8,D=e=>{const[o,i]=f.useState(1),[p,w]=f.useState(ie),[T,v]=f.useState(!1),[I,Y]=f.useState(F.slice(0,ie)),Q=(n,Z)=>{v(!0),setTimeout(()=>{Y(F.slice((n-1)*Z,n*Z)),i(n),w(Z),v(!1)},600)},q=Math.ceil(F.length/p);return R(r.jsx(k,{...e,tableData:I,isLoading:T||e.isLoading,paginationConfig:{mode:"server",currentPage:o,totalPages:q,totalItems:F.length,pageSize:p,pageSizeOptions:[8,16,24],showPageNumbers:!0,maxPageButtons:7,onPageChange:n=>Q(n,p),onPageSizeChange:n=>Q(1,n)}}))};D.storyName="Server-side (async) pagination";D.args={columns:x,expandable:!0,footerMode:"pagination"};const E=e=>{const o=L(20),[i,p]=f.useState(5);return R(r.jsx(k,{...e,tableData:o.slice(0,i),footerMode:i<o.length?"loadMore":"none",loadMoreConfig:{button:r.jsx(ur,{transparent:!0,border:!0,label:`Load More (${o.length-i} remaining)`,onClick:()=>p(w=>Math.min(w+5,o.length))})}}))};E.storyName="Load-more footer";E.args={columns:x,expandable:!0};const W=e=>R(r.jsx(k,{...e}));W.storyName="Flat (non-expandable)";W.args={tableData:L(6),columns:x,expandable:!1,footerMode:"none"};const O=e=>R(r.jsx(k,{...e}));O.storyName="Custom style overrides";O.args={tableData:L(8),columns:x,expandable:!0,footerMode:"pagination",paginationConfig:{mode:"client",pageSize:4,pageSizeOptions:[4,8,12],showPageNumbers:!0,totalItems:8},tableHeaderCellStyles:{color:"#0080ffff",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em"},tableBodyCellStyles:{color:"#111827",fontSize:"14px"},tableExpandedPanelStyles:{background:"#eff6ff",borderTop:"1px solid #bfdbfe"},tableFooterStyles:{background:"#f8fafc",borderTop:"1px solid #e2e8f0"},tablePaginationButtonStyles:{activeBackground:"#4f46e5",activeColor:"#ffffff",activeBorder:"1px solid #4f46e5"}};const S=e=>R(r.jsx(k,{...e,tableData:L(6),columns:x,renderExpandedContent:o=>r.jsxs("div",{style:{padding:"16px 24px",fontSize:14,color:"#374151"},children:[r.jsx("strong",{children:"Custom panel ·"})," ",o.name," — ",o.city," — ",o.revenue]})}));S.storyName="Custom expanded content";S.args={expandable:!0};const U=e=>R(r.jsx(k,{...e}));U.storyName="Loading state";U.args={tableData:L(4),columns:x,isLoading:!0};const $=e=>R(r.jsx(k,{...e}));$.storyName="Empty state";$.args={tableData:[],columns:x,emptyMessage:"No outlets found."};const G=e=>R(r.jsx(k,{...e}));G.storyName="Locked Expanded Rows";G.args={tableData:L(4),columns:x,expandable:!0,disableRowToggle:!0,expandAll:!0};M.__docgenInfo={description:"",methods:[],displayName:"Default"};z.__docgenInfo={description:"",methods:[],displayName:"ClientPagination"};D.__docgenInfo={description:"",methods:[],displayName:"ServerPagination"};E.__docgenInfo={description:"",methods:[],displayName:"LoadMore"};W.__docgenInfo={description:"",methods:[],displayName:"Flat"};O.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};S.__docgenInfo={description:"",methods:[],displayName:"CustomExpandedContent"};U.__docgenInfo={description:"",methods:[],displayName:"Loading"};$.__docgenInfo={description:"",methods:[],displayName:"Empty"};G.__docgenInfo={description:"",methods:[],displayName:"LockedExpanded"};var de,ce,ue;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:"args => wrap(<LtTableV2 {...args} />)",...(ue=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,le,pe;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:"args => wrap(<LtTableV2 {...args} />)",...(pe=(le=z.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ge,fe,he;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
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
  return wrap(<LtTableV2 {...args} tableData={data} isLoading={loading || args.isLoading} paginationConfig={{
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
  }} />);
}`,...(he=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,ve,ke;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const allData = makeData(20);
  const [visible, setVisible] = useState(5);
  return wrap(<LtTableV2 {...args} tableData={allData.slice(0, visible)} footerMode={visible < allData.length ? 'loadMore' : 'none'} loadMoreConfig={{
    button: <LtButton transparent border label={\`Load More (\${allData.length - visible} remaining)\`} onClick={() => setVisible(v => Math.min(v + 5, allData.length))} />
  }} />);
}`,...(ke=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var we,ye,xe;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:"args => wrap(<LtTableV2 {...args} />)",...(xe=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Re,Te,qe;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:"args => wrap(<LtTableV2 {...args} />)",...(qe=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};var _e,Ne,je;S.parameters={...S.parameters,docs:{...(_e=S.parameters)==null?void 0:_e.docs,source:{originalSource:`args => wrap(<LtTableV2 {...args} tableData={makeData(6)} columns={columns} renderExpandedContent={row => <div style={{
  padding: '16px 24px',
  fontSize: 14,
  color: '#374151'
}}>
          <strong>Custom panel ·</strong> {row.name} — {row.city} — {row.revenue}
        </div>} />)`,...(je=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Le,Ie,Ae;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:"args => wrap(<LtTableV2 {...args} />)",...(Ae=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var Ve,Pe,Me;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:"args => wrap(<LtTableV2 {...args} />)",...(Me=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var ze,De,Ee;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:"args => wrap(<LtTableV2 {...args} />)",...(Ee=(De=G.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};const un=["Default","ClientPagination","ServerPagination","LoadMore","Flat","CustomStyles","CustomExpandedContent","Loading","Empty","LockedExpanded"];export{z as ClientPagination,S as CustomExpandedContent,O as CustomStyles,M as Default,$ as Empty,W as Flat,E as LoadMore,U as Loading,G as LockedExpanded,D as ServerPagination,un as __namedExportsOrder,cn as default};
