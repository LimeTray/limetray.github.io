import{j as t}from"./jsx-runtime-8ae9c9ad.js";import{r as p,R as gr}from"./index-04c7fd94.js";import{g as f,f as Se,r as hr}from"./styled-components.browser.esm-b57a6336.js";import{t as fr}from"./config-d270d9b6.js";import{P as br}from"./pumpkinIcon-bee1f8c5.js";import{L as xr}from"./Loader-97ea5cc7.js";import{u as vr}from"./ThemeContext-ab9e94eb.js";import{S as oe}from"./stringConstants-798199f9.js";import{L as kr}from"./ltButton-603a60bb.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Button-8d24c33b.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./index-019b0ce5.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./isEmpty-0f216811.js";import"./deburr-bb2546ff.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-9f7569d5.js";import"./index-9e8f50bb.js";const wr=f.div`
  width: 100%;
  min-width: ${({minWidth:e})=>e||"auto"};
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
`,yr=f.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f4f5;
  border-radius: 0 0 ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large};
  box-shadow: 0px 1px 3px 0px #0000001A;
  // border: 1px solid ${({theme:e})=>e.colors.border};
`,Rr=f.div`
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
`,Tr=f.div`
  overflow-x: auto;
  position: relative;
  width: 100%;

  /* Slim scrollbar standard */
  scrollbar-width: thin;
  scrollbar-color: #f3f4f6 transparent;

  /* Slim scrollbar WebKit */
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #f3f4f6;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  ${({isLoading:e})=>e&&Se`
    opacity: 0.5;
    pointer-events: none;
  `}
`,qr=f.div`
  ${({maxHeight:e})=>e&&Se`
    max-height: ${e};
    overflow-y: auto;

    /* Slim scrollbar standard */
    scrollbar-width: thin;
    scrollbar-color: #f3f4f6 transparent;

    /* Slim scrollbar WebKit */
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #f3f4f6;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
  `}
`,jr=f.div`
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
`,Nr=f.div`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  color: inherit;
`,Er=f.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,Ir=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Lr=f.select`
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
`,B=f.div`
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
`,Ar=f.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;function zr(e,r,o){if(r<=Math.max(5,o))return Array.from({length:r},(b,M)=>M+1);const d=[];d.push(1);let v=Math.max(2,e-1),k=Math.min(r-1,e+1);e<=3&&(k=Math.max(k,3)),e>=r-2&&(v=Math.min(v,r-2)),v>2&&d.push("...");for(let b=v;b<=k;b++)d.push(b);return k<r-1&&d.push("..."),d.push(r),d}function w(e){return Object.fromEntries(e.filter(([,r])=>r!==void 0&&r!==""))}const Ye=({tableData:e,columns:r,emptyMessage:o="",expandable:d=!0,defaultExpandedRows:v=[],onRowToggle:k,disableRowToggle:b=!1,expandAll:M=!1,isLoading:W=!1,paginationEnabled:T=!1,paginationConfig:a,showLoadMore:q=!1,loadMoreButton:_,onRowClick:C,renderExpandedContent:ie,tableHeaderStyles:j,tableHeaderCellStyles:i,tableBodyStyles:N,tableBodyRowStyles:E,tableBodyCellStyles:u,tableExpandedRowStyles:V,tableExpandedPanelStyles:I,tableFooterStyles:g,tablePaginationButtonStyles:s,darkMode:Ze,maxHeight:Xe,minWidth:Je})=>{const re=vr(),Qe=Ze??(re==null?void 0:re.theme)==="dark",[Ce,de]=p.useState(v),H=n=>Array.isArray(n.items)&&n.items.length>0;p.useEffect(()=>{M&&d&&de(n=>{const c=e.filter(H).map(h=>h.id);return Array.from(new Set([...n,...c]))})},[M,d,e]);const P=(a==null?void 0:a.mode)??"client",[l,ae]=p.useState((a==null?void 0:a.currentPage)??1),[O,ce]=p.useState((a==null?void 0:a.pageSize)??10);p.useEffect(()=>{a!=null&&a.pageSize&&ce(a.pageSize)},[a==null?void 0:a.pageSize]),p.useEffect(()=>{P==="server"&&(a==null?void 0:a.currentPage)!==void 0&&ae(a.currentPage)},[a==null?void 0:a.currentPage,P]);const ue=p.useMemo(()=>{if(!T||P==="server")return e;const n=(l-1)*O;return e.slice(n,n+O)},[e,T,P,l,O]),G=p.useMemo(()=>T?P==="server"?(a==null?void 0:a.totalPages)??1:Math.max(1,Math.ceil(e.length/O)):1,[e.length,T,P,a==null?void 0:a.totalPages,O]),te=(a==null?void 0:a.totalItems)??(P==="client"?e.length:void 0),ne=n=>{var c;n<1||n>G||(ae(n),(c=a==null?void 0:a.onPageChange)==null||c.call(a,n))},He=n=>{var c;ce(n),ae(1),(c=a==null?void 0:a.onPageSizeChange)==null||c.call(a,n)},Be=(n,c)=>{d&&H(n)&&!b&&de(h=>{const D=h.includes(n.id)?h.filter(x=>x!==n.id):[...h,n.id];return k==null||k(D),D}),C==null||C(n,c)},er=n=>t.jsx("div",{children:n.map(c=>t.jsx("div",{children:t.jsx("div",{className:"draggable-item-content",children:c.content})},c.id))}),rr=w([["background",j==null?void 0:j.background],["borderBottom",j==null?void 0:j.borderBottom],["borderRadius",j==null?void 0:j.borderRadius]]),ar=w([["background",i==null?void 0:i.background],["color",i==null?void 0:i.color],["fontSize",i==null?void 0:i.fontSize],["fontWeight",i==null?void 0:i.fontWeight],["padding",i==null?void 0:i.padding],["textTransform",i==null?void 0:i.textTransform],["letterSpacing",i==null?void 0:i.letterSpacing]]),tr=w([["background",N==null?void 0:N.background],["border",N==null?void 0:N.border],["borderRadius",N==null?void 0:N.borderRadius]]),nr=w([["background",E==null?void 0:E.background],["borderColor",E==null?void 0:E.borderColor],["minHeight",E==null?void 0:E.minHeight]]),sr=w([["background",u==null?void 0:u.background],["color",u==null?void 0:u.color],["fontSize",u==null?void 0:u.fontSize],["fontWeight",u==null?void 0:u.fontWeight],["padding",u==null?void 0:u.padding]]),or=w([["background",V==null?void 0:V.background],["borderColor",V==null?void 0:V.borderColor]]),ir=w([["background",I==null?void 0:I.background],["borderTop",I==null?void 0:I.borderTop],["padding",I==null?void 0:I.padding]]),dr=w([["background",g==null?void 0:g.background],["color",g==null?void 0:g.color],["borderTop",g==null?void 0:g.borderTop],["padding",g==null?void 0:g.padding]]),se=w([["background",s==null?void 0:s.background],["color",s==null?void 0:s.color],["border",s==null?void 0:s.border],["borderRadius",s==null?void 0:s.borderRadius]]),cr=w([["background",s==null?void 0:s.activeBackground],["color",s==null?void 0:s.activeColor],["border",s==null?void 0:s.activeBorder],["borderRadius",s==null?void 0:s.borderRadius]]),ur=()=>{if(!T)return null;const{showPageNumbers:n=!0,maxPageButtons:c=5,renderInfo:h,rightSlot:D,pageSizeOptions:x=[10,25,50]}=a??{},lr=n?zr(l,G,c):[],mr=t.jsxs("span",{children:[oe.PAGINATION.PAGE," ",t.jsx("strong",{children:l})," ",oe.PAGINATION.OF," ",t.jsx("strong",{children:G}),te!==void 0&&t.jsxs(t.Fragment,{children:["  ·  ",te," ",oe.PAGINATION.ITEMS]})]});return t.jsxs(jr,{style:dr,children:[t.jsx(Nr,{children:h?h(l,G,te):mr}),t.jsxs(Er,{children:[x&&x.length>0&&t.jsx(Lr,{value:O,onChange:m=>He(Number(m.target.value)),"aria-label":"Rows per page",children:x.map(m=>t.jsxs("option",{value:m,children:[m," / page"]},m))}),t.jsx(B,{disabled:l===1,onClick:()=>ne(l-1),role:"button","aria-label":"Previous page",style:l===1?{}:se,children:"‹"}),n&&lr.map((m,pr)=>m==="..."?t.jsx(B,{style:{cursor:"default",border:"none"},children:"…"},`ellipsis-${pr}`):t.jsx(B,{active:m===l,onClick:()=>m!==l&&ne(m),role:"button","aria-label":`Page ${m}`,"aria-current":m===l?"page":void 0,style:m===l?cr:se,children:m},m)),t.jsx(B,{disabled:l===G,onClick:()=>ne(l+1),role:"button","aria-label":"Next page",style:l===G?{}:se,children:"›"})]}),D&&t.jsx(Ir,{children:D})]})};return t.jsxs(hr,{theme:fr,children:[t.jsx(Tr,{isLoading:W,children:t.jsxs(wr,{darkMode:Qe,minWidth:Je,children:[t.jsx("div",{className:"thead",style:rr,children:t.jsx("div",{className:"tr",children:r.map(n=>t.jsx("div",{className:"th",style:{width:n.width,...ar},children:n.header},`head-${n.id||n.key||n.header}`))})}),ue.length===0?t.jsxs(yr,{children:[t.jsx(br,{}),typeof o=="string"?t.jsx("p",{children:o}):o]}):t.jsx(qr,{maxHeight:Xe,children:t.jsx("div",{className:"tbody",style:tr,children:ue.map((n,c)=>{const h=d&&Ce.includes(n.id),D=d&&H(n)&&!b||!!C;return t.jsxs(gr.Fragment,{children:[t.jsx("div",{"data-testid":`row-${c}`,className:`tr ${h?"expanded":""}`,onClick:D?()=>Be(n,c):void 0,style:{cursor:d&&H(n)&&!b?"pointer":"default",...nr,...h?or:{}},children:r.map(x=>t.jsx("div",{className:"td",style:{width:x.width,...sr},children:x.accessor(n)},`row-${n.id}-${x.id||x.key||x.header}`))}),h&&t.jsx("div",{className:"tr expanded-row",style:ir,children:t.jsx("div",{className:"td",style:{width:"100%"},children:ie?ie(n):n.items?er(n.items):null})})]},n.id)})})})]})}),W&&t.jsx(Rr,{children:t.jsx(xr,{active:!0,inline:"centered"})}),!W&&T&&ur(),!W&&(q||!!_)&&t.jsx(Ar,{children:_})]})},Q=Ye;Ye.__docgenInfo={description:"",methods:[],displayName:"ExpandableTable",props:{tableData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  items?: ListItem[];
  [key: string]: any;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  content: React.ReactNode;
  children?: ListItem[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ListItem"}],raw:"ListItem[]",required:!1}}]}}],raw:"ListItem[]",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"TableRow[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  key?: string;
  header: string;
  accessor: (row: TableRow) => React.ReactNode;
  /** Column width – any valid CSS value e.g. "20%" or "120px" */
  width?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"key",value:{name:"string",required:!1}},{key:"header",value:{name:"string",required:!0}},{key:"accessor",value:{name:"signature",type:"function",raw:"(row: TableRow) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"background",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"activeBackground",value:{name:"string",required:!1}},{key:"activeColor",value:{name:"string",required:!1}},{key:"activeBorder",value:{name:"string",required:!1}}]}},description:""},darkMode:{required:!1,tsType:{name:"boolean"},description:"Forces dark mode styles."},maxHeight:{required:!1,tsType:{name:"string"},description:"Max height of the table container (enables sticky header when set)"},minWidth:{required:!1,tsType:{name:"string"},description:"Min width of the table (enables horizontal scrollbar when container is narrower)"}}};const ba={title:"ExpandableTable",component:Q,argTypes:{tableData:{description:"Array of row objects. In client-mode pagination supply the full dataset; in server mode supply only the current page.",control:"object",table:{type:{summary:"TableRow[]"}}},columns:{description:"Column definitions. Each column needs a `header` string, an `accessor(row)` function, and an optional `width`.",control:"object",table:{type:{summary:"TableColumn[]"}}},expandable:{description:"When `false` rows are never expandable, making this a plain flat table.",control:"boolean",defaultValue:!0},defaultExpandedRows:{description:"Array of row IDs that should be expanded on first render.",control:"object"},disableRowToggle:{description:"When `true`, rows cannot be expanded or collapsed by clicking on them.",control:"boolean",defaultValue:!1},expandAll:{description:"When `true`, automatically expands all expandable rows.",control:"boolean",defaultValue:!1},isLoading:{description:"Dims the table and shows a spinner. Use while async data is fetching.",control:"boolean",defaultValue:!1},emptyMessage:{description:"Message or node displayed when `tableData` is empty and not loading.",control:"text"},paginationEnabled:{description:"Whether pagination controls are rendered in the footer.",control:"boolean",defaultValue:!1},paginationConfig:{description:"Required when `paginationEnabled` is `true`. Configures mode (client/server), page size, callbacks, and display options.",control:"object",table:{type:{summary:"PaginationConfig"}}},tableHeaderStyles:{description:"Style overrides for the `<thead>` container: `background`, `borderBottom`, `borderRadius`.",control:"object",table:{type:{summary:"TableHeaderStyles"}}},tableHeaderCellStyles:{description:"Style overrides for each `<th>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`, `textTransform`, `letterSpacing`.",control:"object",table:{type:{summary:"TableHeaderCellStyles"}}},tableBodyStyles:{description:"Style overrides for the `<tbody>` container: `background`, `border`, `borderRadius`.",control:"object",table:{type:{summary:"TableBodyStyles"}}},tableBodyRowStyles:{description:"Style overrides applied to every body row: `background`, `borderColor`, `minHeight`.",control:"object",table:{type:{summary:"TableBodyRowStyles"}}},tableBodyCellStyles:{description:"Style overrides for every `<td>` cell: `background`, `color`, `fontSize`, `fontWeight`, `padding`.",control:"object",table:{type:{summary:"TableBodyCellStyles"}}},tableExpandedRowStyles:{description:"Style overrides for the parent row when it is open: `background`, `borderColor`.",control:"object",table:{type:{summary:"TableExpandedRowStyles"}}},tableExpandedPanelStyles:{description:"Style overrides for the expanded content panel: `background`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableExpandedPanelStyles"}}},tableFooterStyles:{description:"Style overrides for the footer bar: `background`, `color`, `borderTop`, `padding`.",control:"object",table:{type:{summary:"TableFooterStyles"}}},tablePaginationButtonStyles:{description:"Style overrides for pagination page buttons: `background`, `color`, `border`, `borderRadius`, `activeBackground`, `activeColor`, `activeBorder`.",control:"object",table:{type:{summary:"TablePaginationButtonStyles"}}},onRowClick:{description:"Called on every row click. Receives `(row, index)`. Works alongside expandable rows.",action:"row clicked"},onRowToggle:{description:"Called whenever a row is expanded or collapsed. Receives the full array of currently expanded row IDs.",action:"row toggled"},renderExpandedContent:{description:"Custom renderer for the expanded panel. If provided, overrides the default `items` renderer.",control:!1,table:{type:{summary:"(row: TableRow) => React.ReactNode"}}},darkMode:{description:"Forces dark mode styles.",control:"boolean",defaultValue:!1},maxHeight:{description:"Max height of the table container (enables sticky header and vertical scrolling when set).",control:"text"},minWidth:{description:"Min width of the table (enables horizontal scrollbar when container is narrower).",control:"text"}}},y=(e=12)=>Array.from({length:e},(r,o)=>({id:String(o+1),name:["Connaught Place","Koramangala","Bandra West","Anna Nagar","Park Street"][o%5],city:["Delhi","Bangalore","Mumbai","Chennai","Kolkata"][o%5],status:o%3===0?"Inactive":"Active",revenue:`₹${((o+1)*12345).toLocaleString("en-IN")}`,...o%2===1?{items:[{id:`${o+1}-1`,content:"📍 Sub-outlet Alpha"},{id:`${o+1}-2`,content:"📍 Sub-outlet Beta"}]}:{}})),R=[{header:"OUTLET NAME",accessor:e=>e.name,width:"30%"},{header:"CITY",accessor:e=>e.city,width:"20%"},{header:"STATUS",accessor:e=>e.status,width:"20%"},{header:"REVENUE",accessor:e=>e.revenue,width:"30%"}],$=e=>t.jsx(Q,{...e}),F=$.bind({});F.storyName="Default (expandable)";F.args={tableData:y(8),columns:R,expandable:!0,paginationEnabled:!1};const U=$.bind({});U.storyName="Client-side pagination";U.args={tableData:y(30),columns:R,expandable:!0,paginationEnabled:!0,paginationConfig:{mode:"client",pageSize:10,pageSizeOptions:[5,10,25],showPageNumbers:!0,maxPageButtons:5,onPageChange:e=>console.log("[client] page →",e),onPageSizeChange:e=>console.log("[client] pageSize →",e)}};const ee=y(40),le=8,L=e=>{const[r,o]=p.useState(1),[d,v]=p.useState(le),[k,b]=p.useState(!1),[M,W]=p.useState(ee.slice(0,le)),T=(q,_)=>{b(!0),setTimeout(()=>{W(ee.slice((q-1)*_,q*_)),o(q),v(_),b(!1)},600)},a=Math.ceil(ee.length/d);return t.jsx(Q,{...e,tableData:M,isLoading:k||e.isLoading,paginationConfig:{mode:"server",currentPage:r,totalPages:a,totalItems:ee.length,pageSize:d,pageSizeOptions:[8,16,24],showPageNumbers:!0,maxPageButtons:7,onPageChange:q=>T(q,d),onPageSizeChange:q=>T(1,q)}})};L.storyName="Server-side (async) pagination";L.args={columns:R,expandable:!0,paginationEnabled:!0};L.parameters={docs:{source:{type:"code"}}};const A=e=>{const r=y(20),[o,d]=p.useState(5);return t.jsx(Q,{...e,tableData:r.slice(0,o),showLoadMore:o<r.length,loadMoreButton:o<r.length?t.jsx(kr,{transparent:!0,border:!0,label:`Load More (${r.length-o} remaining)`,onClick:()=>d(v=>Math.min(v+5,r.length))}):void 0})};A.storyName="Load-more footer";A.args={columns:R,expandable:!0};A.parameters={docs:{source:{type:"code"}}};const K=$.bind({});K.storyName="Flat (non-expandable)";K.args={tableData:y(6),columns:R,expandable:!1,paginationEnabled:!1};const S=$.bind({});S.storyName="Custom style overrides";S.args={tableData:y(8),columns:R,expandable:!0,paginationEnabled:!0,paginationConfig:{mode:"client",pageSize:4,pageSizeOptions:[4,8,12],showPageNumbers:!0,totalItems:8},tableHeaderCellStyles:{color:"#0080ffff",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em"},tableBodyCellStyles:{color:"#111827",fontSize:"14px"},tableExpandedPanelStyles:{background:"#eff6ff",borderTop:"1px solid #bfdbfe"},tableFooterStyles:{background:"#f8fafc",borderTop:"1px solid #e2e8f0"},tablePaginationButtonStyles:{activeBackground:"#4f46e5",activeColor:"#ffffff",activeBorder:"1px solid #4f46e5"}};const z=e=>t.jsx(Q,{...e,tableData:y(6),columns:R,renderExpandedContent:r=>t.jsxs("div",{style:{padding:"16px 24px",fontSize:14,color:"#374151"},children:[t.jsx("strong",{children:"Custom panel ·"})," ",r.name," — ",r.city," — ",r.revenue]})});z.storyName="Custom expanded content";z.args={expandable:!0};z.parameters={docs:{source:{type:"code"}}};const Y=$.bind({});Y.storyName="Loading state";Y.args={tableData:y(4),columns:R,isLoading:!0};const Z=$.bind({});Z.storyName="Empty state";Z.args={tableData:[],columns:R,emptyMessage:"No outlets found."};const X=$.bind({});X.storyName="Locked Expanded Rows";X.args={tableData:y(4),columns:R,expandable:!0,disableRowToggle:!0,expandAll:!0};const J=$.bind({});J.storyName="Responsive & Sticky Header";J.args={tableData:y(50),columns:[{header:"OUTLET NAME",accessor:e=>e.name,width:"250px"},{header:"CITY",accessor:e=>e.city,width:"150px"},{header:"STATUS",accessor:e=>e.status,width:"150px"},{header:"REVENUE",accessor:e=>e.revenue,width:"150px"},{header:"FIELD A",accessor:e=>`Extra A-${e.id}`,width:"150px"},{header:"FIELD B",accessor:e=>`Extra B-${e.id}`,width:"150px"},{header:"FIELD C",accessor:e=>`Extra C-${e.id}`,width:"150px"}],expandable:!0,maxHeight:"400px",minWidth:"800px",paginationEnabled:!1};L.__docgenInfo={description:"",methods:[],displayName:"ServerPagination"};A.__docgenInfo={description:"",methods:[],displayName:"LoadMore"};z.__docgenInfo={description:"",methods:[],displayName:"CustomExpandedContent"};var me,pe,ge;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(ge=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,fe,be;U.parameters={...U.parameters,docs:{...(he=U.parameters)==null?void 0:he.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(be=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var xe,ve,ke;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`args => {
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
}`,...(ke=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var we,ye,Re;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`args => {
  const allData = makeData(20);
  const [visible, setVisible] = useState(5);
  return <ExpandableTable {...args} tableData={allData.slice(0, visible)} showLoadMore={visible < allData.length} loadMoreButton={visible < allData.length ? <LtButton transparent border label={\`Load More (\${allData.length - visible} remaining)\`} onClick={() => setVisible(v => Math.min(v + 5, allData.length))} /> : undefined} />;
}`,...(Re=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var Te,qe,je;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(je=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:je.source}}};var Ne,Ee,Ie;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(Ie=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Le,Ae,ze;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <ExpandableTable {...args} tableData={makeData(6)} columns={columns} renderExpandedContent={row => <div style={{
  padding: '16px 24px',
  fontSize: 14,
  color: '#374151'
}}>
        <strong>Custom panel ·</strong> {row.name} — {row.city} — {row.revenue}
      </div>} />`,...(ze=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var $e,Pe,De;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(De=(Pe=Y.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var Me,We,_e;Z.parameters={...Z.parameters,docs:{...(Me=Z.parameters)==null?void 0:Me.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(_e=(We=Z.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Ve,Oe,Ge;X.parameters={...X.parameters,docs:{...(Ve=X.parameters)==null?void 0:Ve.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(Ge=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var Fe,Ue,Ke;J.parameters={...J.parameters,docs:{...(Fe=J.parameters)==null?void 0:Fe.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(Ke=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};const xa=["Default","ClientPagination","ServerPagination","LoadMore","Flat","CustomStyles","CustomExpandedContent","Loading","Empty","LockedExpanded","ResponsiveStickyHeader"];export{U as ClientPagination,z as CustomExpandedContent,S as CustomStyles,F as Default,Z as Empty,K as Flat,A as LoadMore,Y as Loading,X as LockedExpanded,J as ResponsiveStickyHeader,L as ServerPagination,xa as __namedExportsOrder,ba as default};
