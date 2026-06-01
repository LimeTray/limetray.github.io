import{j as n}from"./jsx-runtime-8ae9c9ad.js";import{r as l,R as or}from"./index-04c7fd94.js";import{g as b,f as ir,r as dr}from"./styled-components.browser.esm-f4af7a4c.js";import{t as cr}from"./config-d270d9b6.js";import{P as ur}from"./pumpkinIcon-bee1f8c5.js";import{L as mr}from"./Loader-97ea5cc7.js";import{u as pr}from"./ThemeContext-ab9e94eb.js";import{L as lr}from"./ltButton-eaec3cd4.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Button-8d24c33b.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./index-bbb1e5b1.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./isEmpty-0f216811.js";import"./deburr-bb2546ff.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-9f7569d5.js";import"./index-c3b335ed.js";const gr=b.div`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  .thead {
    box-shadow: 0px 1px 3px 0px #0000001A;
    border-bottom: 1px solid rgba(229, 231, 235, 1);
    background-color: ${({darkMode:e})=>e?"transparent":"#F3F4F6"};
    border-radius: ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large} 0 0;

    .tr {
      display: flex;

      .th {
        text-align: left;
        padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
        font-weight: 600;
        font-size: 14px;
        color: ${({darkMode:e,theme:r})=>e?"#d1d5db":r.colors.text};
      }
    }
  }

  .tbody {
    box-shadow: 0px 1px 3px 0px #0000001A;
    border-radius: 0px 0px ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large};
    background-color: ${({darkMode:e,theme:r})=>e?"transparent":r.colors.white};

    .tr {
      display: flex;
      transition: all 0.2s ease;
      outline: none;
      border-top: 1px solid ${({darkMode:e,theme:r})=>e?"#374151":r.colors.border};
      align-items: center;

      &:first-child {
        border-top: none;
      }

      &.expanded-row {
        // margin-bottom: ${({theme:e})=>e.spacing.md};
        // border-bottom: 1px solid ${({darkMode:e,theme:r})=>e?"#374151":r.colors.border};
        // border-radius: 0 0 ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large};
        &:last-child {
          border-bottom: 0px;
          border-radius: 0px;
        }

      }

      .td {
        padding: ${({theme:e})=>e.spacing.md};
        font-size: 14px;
        color: ${({darkMode:e,theme:r})=>e?"#e5e7eb":r.colors.text};

        &:first-child {
          padding-left: ${({theme:e})=>e.spacing.lg};
        }

        &:last-child {
          padding-right: ${({theme:e})=>e.spacing.lg};
        }
      }

      &.expanded {
        background-color: ${({darkMode:e})=>e?"#374151":"#F9FAFB"};
        // border-radius: ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large} 0 0;
        // margin-top: ${({theme:e})=>e.spacing.md};

        &:first-child {
          margin-top: 0;
        }
      }

      &.expanded-row {
        .td {
          padding: 0;
          border: none;

          /* Each child item inside the expanded panel */
          .draggable-item-content {
            display: flex;
            align-items: center;
            min-height: 44px;
            padding: ${({theme:e})=>e.spacing.md};
            padding-left: ${({theme:e})=>e.spacing.lg};
            font-size: 14px;
            color: ${({darkMode:e,theme:r})=>e?"#e5e7eb":r.colors.text};
            box-sizing: border-box;
          }

          /* Separator between consecutive child items (skip the first) */
          & > div > div + div .draggable-item-content {
            border-top: 1px solid ${({darkMode:e})=>e?"#4b5563":"#e5e7eb"};
          }
        }
      }
    }
  }
`,fr=b.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid ${({theme:e})=>e.colors.border};
  // border-radius: ${({theme:e})=>e.borderRadius.large};
`,hr=b.div`
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
`,br=b.div`
  ${({isLoading:e})=>e&&ir`
    opacity: 0.5;
    pointer-events: none;
  `}
`,vr=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  box-sizing: border-box;
  width: 100%;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 13px;
  color: #6b7280;
`,xr=b.div`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  color: inherit;
`,kr=b.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,wr=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,yr=b.select`
  appearance: none;
  -webkit-appearance: none;
  height: 32px;
  padding: 0 28px 0 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #ffffff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat right 8px center;
  font-size: 13px;
  color: #374151;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s;

  &:hover { border-color: #d1d5db; }
  &:focus { border-color: ${({theme:e})=>e.colors.primary}; box-shadow: 0 0 0 2px rgba(99,102,241,0.15); }
`,H=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${({active:e})=>e?"transparent":"#e5e7eb"};
  border-radius: 6px;
  background: ${({active:e})=>e?"#00cd7c":"#ffffff"};
  color: ${({active:e})=>e?"#ffffff":"#374151"};
  cursor: ${({active:e,disabled:r})=>e||r?r?"not-allowed":"default":"pointer"};
  font-size: 13px;
  user-select: none;
  opacity: ${({disabled:e})=>e?.4:1};
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${({active:e,disabled:r})=>!e&&!r?"#f3f4f6":void 0};
    border-color: ${({active:e,disabled:r})=>!e&&!r?"#d1d5db":void 0};
  }
`,Rr=b.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;function qr(e,r,o){if(r<=Math.max(5,o))return Array.from({length:r},(h,M)=>M+1);const d=[];d.push(1);let v=Math.max(2,e-1),x=Math.min(r-1,e+1);e<=3&&(x=Math.max(x,3)),e>=r-2&&(v=Math.min(v,r-2)),v>2&&d.push("...");for(let h=v;h<=x;h++)d.push(h);return x<r-1&&d.push("..."),d.push(r),d}function k(e){return Object.fromEntries(e.filter(([,r])=>r!==void 0&&r!==""))}const Ue=({tableData:e,columns:r,emptyMessage:o="",expandable:d=!0,defaultExpandedRows:v=[],onRowToggle:x,disableRowToggle:h=!1,expandAll:M=!1,isLoading:_=!1,paginationEnabled:y=!1,paginationConfig:a,showLoadMore:R=!1,loadMoreButton:V,onRowClick:S,renderExpandedContent:oe,tableHeaderStyles:q,tableHeaderCellStyles:i,tableBodyStyles:T,tableBodyRowStyles:j,tableBodyCellStyles:u,tableExpandedRowStyles:W,tableExpandedPanelStyles:N,tableFooterStyles:g,tablePaginationButtonStyles:s,darkMode:Fe})=>{const ee=pr(),Ge=Fe??(ee==null?void 0:ee.theme)==="dark",[Ye,ie]=l.useState(v),C=t=>Array.isArray(t.items)&&t.items.length>0;l.useEffect(()=>{M&&d&&ie(t=>{const c=e.filter(C).map(f=>f.id);return Array.from(new Set([...t,...c]))})},[M,d,e]);const P=(a==null?void 0:a.mode)??"client",[m,re]=l.useState((a==null?void 0:a.currentPage)??1),[O,de]=l.useState((a==null?void 0:a.pageSize)??10);l.useEffect(()=>{a!=null&&a.pageSize&&de(a.pageSize)},[a==null?void 0:a.pageSize]),l.useEffect(()=>{P==="server"&&(a==null?void 0:a.currentPage)!==void 0&&re(a.currentPage)},[a==null?void 0:a.currentPage,P]);const ce=l.useMemo(()=>{if(!y||P==="server")return e;const t=(m-1)*O;return e.slice(t,t+O)},[e,y,P,m,O]),U=l.useMemo(()=>y?P==="server"?(a==null?void 0:a.totalPages)??1:Math.max(1,Math.ceil(e.length/O)):1,[e.length,y,P,a==null?void 0:a.totalPages,O]),ae=(a==null?void 0:a.totalItems)??(P==="client"?e.length:void 0),ne=t=>{var c;t<1||t>U||(re(t),(c=a==null?void 0:a.onPageChange)==null||c.call(a,t))},Ze=t=>{var c;de(t),re(1),(c=a==null?void 0:a.onPageSizeChange)==null||c.call(a,t)},Ke=(t,c)=>{d&&C(t)&&!h&&ie(f=>{const $=f.includes(t.id)?f.filter(L=>L!==t.id):[...f,t.id];return x==null||x($),$}),S==null||S(t,c)},Xe=t=>n.jsx("div",{children:t.map(c=>n.jsx("div",{children:n.jsx("div",{className:"draggable-item-content",children:c.content})},c.id))}),Je=k([["background",q==null?void 0:q.background],["borderBottom",q==null?void 0:q.borderBottom],["borderRadius",q==null?void 0:q.borderRadius]]),Qe=k([["background",i==null?void 0:i.background],["color",i==null?void 0:i.color],["fontSize",i==null?void 0:i.fontSize],["fontWeight",i==null?void 0:i.fontWeight],["padding",i==null?void 0:i.padding],["textTransform",i==null?void 0:i.textTransform],["letterSpacing",i==null?void 0:i.letterSpacing]]),Se=k([["background",T==null?void 0:T.background],["border",T==null?void 0:T.border],["borderRadius",T==null?void 0:T.borderRadius]]),Ce=k([["background",j==null?void 0:j.background],["borderColor",j==null?void 0:j.borderColor],["minHeight",j==null?void 0:j.minHeight]]),He=k([["background",u==null?void 0:u.background],["color",u==null?void 0:u.color],["fontSize",u==null?void 0:u.fontSize],["fontWeight",u==null?void 0:u.fontWeight],["padding",u==null?void 0:u.padding]]),Be=k([["background",W==null?void 0:W.background],["borderColor",W==null?void 0:W.borderColor]]),er=k([["background",N==null?void 0:N.background],["borderTop",N==null?void 0:N.borderTop],["padding",N==null?void 0:N.padding]]),rr=k([["background",g==null?void 0:g.background],["color",g==null?void 0:g.color],["borderTop",g==null?void 0:g.borderTop],["padding",g==null?void 0:g.padding]]),te=k([["background",s==null?void 0:s.background],["color",s==null?void 0:s.color],["border",s==null?void 0:s.border],["borderRadius",s==null?void 0:s.borderRadius]]),ar=k([["background",s==null?void 0:s.activeBackground],["color",s==null?void 0:s.activeColor],["border",s==null?void 0:s.activeBorder],["borderRadius",s==null?void 0:s.borderRadius]]),nr=()=>{if(!y)return null;const{showPageNumbers:t=!0,maxPageButtons:c=5,renderInfo:f,rightSlot:$,pageSizeOptions:L=[10,25,50]}=a??{},se=t?qr(m,U,c):[],tr=n.jsxs("span",{children:["Page ",n.jsx("strong",{children:m})," of ",n.jsx("strong",{children:U}),ae!==void 0&&n.jsxs(n.Fragment,{children:["  ·  ",ae," items"]})]});return n.jsxs(vr,{style:rr,children:[n.jsx(xr,{children:f?f(m,U,ae):tr}),n.jsxs(kr,{children:[L&&L.length>0&&n.jsx(yr,{value:O,onChange:p=>Ze(Number(p.target.value)),"aria-label":"Rows per page",children:L.map(p=>n.jsxs("option",{value:p,children:[p," / page"]},p))}),n.jsx(H,{disabled:m===1,onClick:()=>ne(m-1),role:"button","aria-label":"Previous page",style:m===1?{}:te,children:"‹"}),t&&se.map((p,sr)=>p==="..."?n.jsx(H,{style:{cursor:"default",border:"none"},children:"…"},`ellipsis-${sr}`):n.jsx(H,{active:p===m,onClick:()=>p!==m&&ne(p),role:"button","aria-label":`Page ${p}`,"aria-current":p===m?"page":void 0,style:p===m?ar:te,children:p},p)),n.jsx(H,{disabled:m===U,onClick:()=>ne(m+1),role:"button","aria-label":"Next page",style:m===U?{}:te,children:"›"})]}),$&&n.jsx(wr,{children:$})]})};return n.jsxs(dr,{theme:cr,children:[n.jsx(br,{isLoading:_,children:n.jsxs(gr,{darkMode:Ge,children:[n.jsx("div",{className:"thead",style:Je,children:n.jsx("div",{className:"tr",children:r.map((t,c)=>n.jsx("div",{className:"th",style:{width:t.width,...Qe},children:t.header},c))})}),ce.length===0?n.jsxs(fr,{children:[n.jsx(ur,{}),typeof o=="string"?n.jsx("p",{children:o}):o]}):n.jsx("div",{className:"tbody",style:Se,children:ce.map((t,c)=>{const f=d&&Ye.includes(t.id),$=d&&C(t)&&!h||!!S;return n.jsxs(or.Fragment,{children:[n.jsx("div",{"data-testid":`row-${c}`,className:`tr ${f?"expanded":""}`,onClick:$?()=>Ke(t,c):void 0,style:{cursor:d&&C(t)&&!h?"pointer":"default",...Ce,...f?Be:{}},children:r.map((L,se)=>n.jsx("div",{className:"td",style:{width:L.width,...He},children:L.accessor(t)},se))}),f&&n.jsx("div",{className:"tr expanded-row",style:er,children:n.jsx("div",{className:"td",style:{width:"100%"},children:oe?oe(t):t.items?Xe(t.items):null})})]},t.id)})})]})}),_&&n.jsx(hr,{children:n.jsx(mr,{active:!0,inline:"centered"})}),!_&&y&&nr(),!_&&(R||!!V)&&n.jsx(Rr,{children:V})]})},Q=Ue;Ue.__docgenInfo={description:"",methods:[],displayName:"ExpandableTable",props:{tableData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  items?: ListItem[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: ListItem[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ListItem"}],raw:"ListItem[]",required:!1}}]}}],raw:"ListItem[]",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"TableRow[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  header: string;
  accessor: (row: TableRow) => React.ReactNode;
  /** Column width – any valid CSS value e.g. "20%" or "120px" */
  width?: string;
}`,signature:{properties:[{key:"header",value:{name:"string",required:!0}},{key:"accessor",value:{name:"signature",type:"function",raw:"(row: TableRow) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  items?: ListItem[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: ListItem[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ListItem"}],raw:"ListItem[]",required:!1}}]}}],raw:"ListItem[]",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!0}},{key:"width",value:{name:"string",required:!1},description:'Column width – any valid CSS value e.g. "20%" or "120px"'}]}}],raw:"TableColumn[]"},description:""},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"''",computed:!1}},expandable:{required:!1,tsType:{name:"boolean"},description:"When `false` rows cannot be expanded (plain table mode).\n@default true",defaultValue:{value:"true",computed:!1}},defaultExpandedRows:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"IDs of rows that should be expanded on first render.\nHas no effect when `expandable` is `false`.",defaultValue:{value:"[]",computed:!1}},onRowToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedRows: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedRows"}],return:{name:"void"}}},description:"Called whenever the set of currently expanded row IDs changes."},disableRowToggle:{required:!1,tsType:{name:"boolean"},description:"When `true`, prevents the user from toggling rows by clicking.\nRows can still be pre-expanded via `defaultExpandedRows`.\n@default false",defaultValue:{value:"false",computed:!1}},expandAll:{required:!1,tsType:{name:"boolean"},description:"When `true`, automatically expands all rows that have children.\n@default false",defaultValue:{value:"false",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TableRow, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  items?: ListItem[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: ListItem[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ListItem"}],raw:"ListItem[]",required:!1}}]}}],raw:"ListItem[]",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},paginationEnabled:{required:!1,tsType:{name:"boolean"},description:"When `true`, renders page controls below the table configured via `paginationConfig`.\n@default false",defaultValue:{value:"false",computed:!1}},paginationConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * \`'client'\` — all data is in \`tableData\`; the table slices it.
   * \`'server'\` — only the current page is in \`tableData\`; caller fetches pages.
   * @default 'client'
   */
  mode?: PaginationMode;
  /** Current page number (1-based). In server mode keep this in sync externally. */
  currentPage?: number;
  /** Total number of pages. Required in server mode; computed in client mode. */
  totalPages?: number;
  /** Total records across all pages (shown in the info label). */
  totalItems?: number;
  /** Rows per page. In client mode the table slices accordingly. @default 10 */
  pageSize?: number;
  /**
   * Page-size options shown in the selector. Pass \`[]\` to hide.
   * @default [10, 25, 50]
   */
  pageSizeOptions?: number[];
  /** Called when the user navigates to a different page. */
  onPageChange?: (page: number) => void;
  /** Called when the user picks a different page size. */
  onPageSizeChange?: (pageSize: number) => void;
  /** Show numbered page buttons between prev / next. @default true */
  showPageNumbers?: boolean;
  /** Maximum numbered buttons before ellipsis collapses them. @default 5 */
  maxPageButtons?: number;
  /** Replace the default "Page X of Y · N items" label with a custom node. */
  renderInfo?: (currentPage: number, totalPages: number, totalItems?: number) => React.ReactNode;
  /** Any node rendered at the far right of the footer bar. */
  rightSlot?: React.ReactNode;
}`,signature:{properties:[{key:"mode",value:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}],required:!1},description:"`'client'` — all data is in `tableData`; the table slices it.\n`'server'` — only the current page is in `tableData`; caller fetches pages.\n@default 'client'"},{key:"currentPage",value:{name:"number",required:!1},description:"Current page number (1-based). In server mode keep this in sync externally."},{key:"totalPages",value:{name:"number",required:!1},description:"Total number of pages. Required in server mode; computed in client mode."},{key:"totalItems",value:{name:"number",required:!1},description:"Total records across all pages (shown in the info label)."},{key:"pageSize",value:{name:"number",required:!1},description:"Rows per page. In client mode the table slices accordingly. @default 10"},{key:"pageSizeOptions",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:"Page-size options shown in the selector. Pass `[]` to hide.\n@default [10, 25, 50]"},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!1},description:"Called when the user navigates to a different page."},{key:"onPageSizeChange",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!1},description:"Called when the user picks a different page size."},{key:"showPageNumbers",value:{name:"boolean",required:!1},description:"Show numbered page buttons between prev / next. @default true"},{key:"maxPageButtons",value:{name:"number",required:!1},description:"Maximum numbered buttons before ellipsis collapses them. @default 5"},{key:"renderInfo",value:{name:"signature",type:"function",raw:"(currentPage: number, totalPages: number, totalItems?: number) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"currentPage"},{type:{name:"number"},name:"totalPages"},{type:{name:"number"},name:"totalItems"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1},description:'Replace the default "Page X of Y · N items" label with a custom node.'},{key:"rightSlot",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"Any node rendered at the far right of the footer bar."}]}},description:"Pagination configuration. Required when `paginationEnabled` is `true`."},showLoadMore:{required:!1,tsType:{name:"boolean"},description:"When `true`, renders `loadMoreButton` centered below the table.\nCan be used independently of `paginationEnabled`.",defaultValue:{value:"false",computed:!1}},loadMoreButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The button or node to render in the load-more footer."},renderExpandedContent:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TableRow) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  items?: ListItem[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: ListItem[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ListItem"}],raw:"ListItem[]",required:!1}}]}}],raw:"ListItem[]",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom renderer for the expanded panel.\nIf provided, overrides the default `items` list. Receives the full row."},tableHeaderStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderBottom?: string;
  borderRadius?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderBottom",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}}]}},description:""},tableHeaderCellStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
  textTransform?: React.CSSProperties['textTransform'];
  letterSpacing?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"padding",value:{name:"string",required:!1}},{key:"textTransform",value:{name:"ReactCSSProperties['textTransform']",raw:"React.CSSProperties['textTransform']",required:!1}},{key:"letterSpacing",value:{name:"string",required:!1}}]}},description:""},tableBodyStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  border?: string;
  borderRadius?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}}]}},description:""},tableBodyRowStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderColor?: string;
  minHeight?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"minHeight",value:{name:"string",required:!1}}]}},description:""},tableBodyCellStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"padding",value:{name:"string",required:!1}}]}},description:""},tableExpandedRowStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderColor?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}}]}},description:""},tableExpandedPanelStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  borderTop?: string;
  padding?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"borderTop",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}}]}},description:""},tableFooterStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  borderTop?: string;
  padding?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"borderTop",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}}]}},description:""},tablePaginationButtonStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  activeBackground?: string;
  activeColor?: string;
  activeBorder?: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"activeBackground",value:{name:"string",required:!1}},{key:"activeColor",value:{name:"string",required:!1}},{key:"activeBorder",value:{name:"string",required:!1}}]}},description:""},darkMode:{required:!1,tsType:{name:"boolean"},description:"Forces dark mode styles."}}};const da={title:"ExpandableTable",component:Q,argTypes:{tableData:{description:"Array of row objects. In client-mode pagination supply the full dataset; in server mode supply only the current page.",control:"object",table:{type:{summary:"TableRow[]"}}},columns:{description:"Column definitions. Each column needs a `header` string, an `accessor(row)` function, and an optional `width`.",control:"object",table:{type:{summary:"TableColumn[]"}}},expandable:{description:"When `false` rows are never expandable, making this a plain flat table.",control:"boolean",defaultValue:!0},defaultExpandedRows:{description:"Array of row IDs that should be expanded on first render.",control:"object"},disableRowToggle:{description:"When `true`, rows cannot be expanded or collapsed by clicking on them.",control:"boolean",defaultValue:!1},expandAll:{description:"When `true`, automatically expands all expandable rows.",control:"boolean",defaultValue:!1},isLoading:{description:"Dims the table and shows a spinner. Use while async data is fetching.",control:"boolean",defaultValue:!1},emptyMessage:{description:"Message or node displayed when `tableData` is empty and not loading.",control:"text"},paginationEnabled:{description:"Whether pagination controls are rendered in the footer.",control:"boolean",defaultValue:!1},paginationConfig:{description:"Required when `paginationEnabled` is `true`. Configures mode (client/server), page size, callbacks, and display options.",control:"object",table:{type:{summary:"PaginationConfig"}}},tableHeaderStyles:{description:"Style overrides for the `<thead>` container: `background`, `borderBottom`, `borderRadius`.",control:"object",table:{type:{summary:"TableHeaderStyles"}}},tableHeaderCellStyles:{description:"Style overrides for each `<th>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`, `textTransform`, `letterSpacing`.",control:"object",table:{type:{summary:"TableHeaderCellStyles"}}},tableBodyStyles:{description:"Style overrides for the `<tbody>` container: `background`, `border`, `borderRadius`.",control:"object",table:{type:{summary:"TableBodyStyles"}}},tableBodyRowStyles:{description:"Style overrides applied to every body row: `background`, `borderColor`, `minHeight`.",control:"object",table:{type:{summary:"TableBodyRowStyles"}}},tableBodyCellStyles:{description:"Style overrides for every `<td>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`.",control:"object",table:{type:{summary:"TableBodyCellStyles"}}},tableExpandedRowStyles:{description:"Style overrides for the parent row when it is open: `background`, `borderColor`.",control:"object",table:{type:{summary:"TableExpandedRowStyles"}}},tableExpandedPanelStyles:{description:"Style overrides for the expanded content panel: `background`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableExpandedPanelStyles"}}},tableFooterStyles:{description:"Style overrides for the footer bar: `background`, `color`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableFooterStyles"}}},tablePaginationButtonStyles:{description:"Style overrides for pagination page buttons: `background`, `color`, `border`, `borderRadius`, `activeBackground`, `activeColor`, `activeBorder`.",control:"object",table:{type:{summary:"TablePaginationButtonStyles"}}},onRowClick:{description:"Called on every row click. Receives `(row, index)`. Works alongside expandable rows.",action:"row clicked"},onRowToggle:{description:"Called whenever a row is expanded or collapsed. Receives the full array of currently expanded row IDs.",action:"row toggled"},renderExpandedContent:{description:"Custom renderer for the expanded panel. If provided, overrides the default `items` renderer.",control:!1,table:{type:{summary:"(row: TableRow) => React.ReactNode"}}},darkMode:{description:"Forces dark mode styles.",control:"boolean",defaultValue:!1}}},E=(e=12)=>Array.from({length:e},(r,o)=>({id:String(o+1),name:["Connaught Place","Koramangala","Bandra West","Anna Nagar","Park Street"][o%5],city:["Delhi","Bangalore","Mumbai","Chennai","Kolkata"][o%5],status:o%3===0?"Inactive":"Active",revenue:`₹${((o+1)*12345).toLocaleString("en-IN")}`,...o%2===1?{items:[{id:`${o+1}-1`,content:"📍 Sub-outlet Alpha"},{id:`${o+1}-2`,content:"📍 Sub-outlet Beta"}]}:{}})),w=[{header:"OUTLET NAME",accessor:e=>e.name,width:"30%"},{header:"CITY",accessor:e=>e.city,width:"20%"},{header:"STATUS",accessor:e=>e.status,width:"20%"},{header:"REVENUE",accessor:e=>e.revenue,width:"30%"}],D=e=>n.jsx(Q,{...e}),F=D.bind({});F.storyName="Default (expandable)";F.args={tableData:E(8),columns:w,expandable:!0,paginationEnabled:!1};const G=D.bind({});G.storyName="Client-side pagination";G.args={tableData:E(30),columns:w,expandable:!0,paginationEnabled:!0,paginationConfig:{mode:"client",pageSize:10,pageSizeOptions:[5,10,25],showPageNumbers:!0,maxPageButtons:5,onPageChange:e=>console.log("[client] page →",e),onPageSizeChange:e=>console.log("[client] pageSize →",e)}};const B=E(40),ue=8,z=e=>{const[r,o]=l.useState(1),[d,v]=l.useState(ue),[x,h]=l.useState(!1),[M,_]=l.useState(B.slice(0,ue)),y=(R,V)=>{h(!0),setTimeout(()=>{_(B.slice((R-1)*V,R*V)),o(R),v(V),h(!1)},600)},a=Math.ceil(B.length/d);return n.jsx(Q,{...e,tableData:M,isLoading:x||e.isLoading,paginationConfig:{mode:"server",currentPage:r,totalPages:a,totalItems:B.length,pageSize:d,pageSizeOptions:[8,16,24],showPageNumbers:!0,maxPageButtons:7,onPageChange:R=>y(R,d),onPageSizeChange:R=>y(1,R)}})};z.storyName="Server-side (async) pagination";z.args={columns:w,expandable:!0,paginationEnabled:!0};z.parameters={docs:{source:{type:"code"}}};const I=e=>{const r=E(20),[o,d]=l.useState(5);return n.jsx(Q,{...e,tableData:r.slice(0,o),showLoadMore:o<r.length,loadMoreButton:o<r.length?n.jsx(lr,{transparent:!0,border:!0,label:`Load More (${r.length-o} remaining)`,onClick:()=>d(v=>Math.min(v+5,r.length))}):void 0})};I.storyName="Load-more footer";I.args={columns:w,expandable:!0};I.parameters={docs:{source:{type:"code"}}};const Y=D.bind({});Y.storyName="Flat (non-expandable)";Y.args={tableData:E(6),columns:w,expandable:!1,paginationEnabled:!1};const Z=D.bind({});Z.storyName="Custom style overrides";Z.args={tableData:E(8),columns:w,expandable:!0,paginationEnabled:!0,paginationConfig:{mode:"client",pageSize:4,pageSizeOptions:[4,8,12],showPageNumbers:!0,totalItems:8},tableHeaderCellStyles:{color:"#0080ffff",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em"},tableBodyCellStyles:{color:"#111827",fontSize:"14px"},tableExpandedPanelStyles:{background:"#eff6ff",borderTop:"1px solid #bfdbfe"},tableFooterStyles:{background:"#f8fafc",borderTop:"1px solid #e2e8f0"},tablePaginationButtonStyles:{activeBackground:"#4f46e5",activeColor:"#ffffff",activeBorder:"1px solid #4f46e5"}};const A=e=>n.jsx(Q,{...e,tableData:E(6),columns:w,renderExpandedContent:r=>n.jsxs("div",{style:{padding:"16px 24px",fontSize:14,color:"#374151"},children:[n.jsx("strong",{children:"Custom panel ·"})," ",r.name," — ",r.city," — ",r.revenue]})});A.storyName="Custom expanded content";A.args={expandable:!0};A.parameters={docs:{source:{type:"code"}}};const K=D.bind({});K.storyName="Loading state";K.args={tableData:E(4),columns:w,isLoading:!0};const X=D.bind({});X.storyName="Empty state";X.args={tableData:[],columns:w,emptyMessage:"No outlets found."};const J=D.bind({});J.storyName="Locked Expanded Rows";J.args={tableData:E(4),columns:w,expandable:!0,disableRowToggle:!0,expandAll:!0};z.__docgenInfo={description:"",methods:[],displayName:"ServerPagination"};I.__docgenInfo={description:"",methods:[],displayName:"LoadMore"};A.__docgenInfo={description:"",methods:[],displayName:"CustomExpandedContent"};var me,pe,le;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(le=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var ge,fe,he;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(he=(fe=G.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,ve,xe;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const [page, setPage] = useState(1);
  const [pageSize, setPs] = useState(SERVER_PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(ALL_SERVER_DATA.slice(0, SERVER_PAGE_SIZE));
  const fetchPage = (p: number, ps: number) => {
    setLoading(true);
    setTimeout(() => {
      setData(ALL_SERVER_DATA.slice((p - 1) * ps, p * ps));
      setPage(p);
      setPs(ps);
      setLoading(false);
    }, 600);
  };
  const totalPages = Math.ceil(ALL_SERVER_DATA.length / pageSize);
  return <ExpandableTable {...args} tableData={data} isLoading={loading || args.isLoading} paginationConfig={{
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
}`,...(xe=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ke,we,ye;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  const allData = makeData(20);
  const [visible, setVisible] = useState(5);
  return <ExpandableTable {...args} tableData={allData.slice(0, visible)} showLoadMore={visible < allData.length} loadMoreButton={visible < allData.length ? <LtButton transparent border label={\`Load More (\${allData.length - visible} remaining)\`} onClick={() => setVisible(v => Math.min(v + 5, allData.length))} /> : undefined} />;
}`,...(ye=(we=I.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Re,qe,Te;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(Te=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:Te.source}}};var je,Ne,Ee;Z.parameters={...Z.parameters,docs:{...(je=Z.parameters)==null?void 0:je.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(Ee=(Ne=Z.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var Le,ze,Ie;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <ExpandableTable {...args} tableData={makeData(6)} columns={columns} renderExpandedContent={row => <div style={{
  padding: '16px 24px',
  fontSize: 14,
  color: '#374151'
}}>
        <strong>Custom panel ·</strong> {row.name} — {row.city} — {row.revenue}
      </div>} />`,...(Ie=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Ae,Pe,$e;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...($e=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:$e.source}}};var De,Me,_e;X.parameters={...X.parameters,docs:{...(De=X.parameters)==null?void 0:De.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(_e=(Me=X.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Ve,We,Oe;J.parameters={...J.parameters,docs:{...(Ve=J.parameters)==null?void 0:Ve.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(Oe=(We=J.parameters)==null?void 0:We.docs)==null?void 0:Oe.source}}};const ca=["Default","ClientPagination","ServerPagination","LoadMore","Flat","CustomStyles","CustomExpandedContent","Loading","Empty","LockedExpanded"];export{G as ClientPagination,A as CustomExpandedContent,Z as CustomStyles,F as Default,X as Empty,Y as Flat,I as LoadMore,K as Loading,J as LockedExpanded,z as ServerPagination,ca as __namedExportsOrder,da as default};
