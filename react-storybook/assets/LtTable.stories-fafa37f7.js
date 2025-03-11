import{j as o}from"./jsx-runtime-8406ef1e.js";import{L as p}from"./ltTable-dd2083ba.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./map-20538cdf.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./factories-df82d7d3.js";import"./Icon-370c2d23.js";import"./inheritsLoose-5494d9cc.js";import"./index-6dcb29cb.js";import"./Button-21321eef.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";const O={component:p,title:"LtTable",tags:["autodocs"]},u=a=>o.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:o.jsx(p,{...a})}),e=u.bind({}),c=[["213912","213912","12233","Delhi"],["123456","789012","22222","delhi"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"]],d=["Metric Name","Trigger Value","Medium","Trigger Timestamp"];e.args={size:"small",cellData:c,headers:d};const t={args:{size:"small",headers:d,cellData:c,onSort:(a,g)=>{console.log(a,g)},pagination:!0,totalPage:1,currentPage:1,showDownload:!0}};var r,i,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <LtTable {...args} />
  </div>`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'small',
    headers: headers,
    cellData: LogData,
    onSort: (col: number, isAs: boolean) => {
      console.log(col, isAs);
    },
    pagination: true,
    totalPage: 1,
    currentPage: 1,
    showDownload: true
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const R=["Default","TableWithCustomheader"];export{e as Default,t as TableWithCustomheader,R as __namedExportsOrder,O as default};
