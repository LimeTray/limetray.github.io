import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as R}from"./index-ad58220e.js";import{L as d}from"./ltTable-1f2bb5e2.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./map-20538cdf.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./factories-f5adea19.js";import"./Icon-33b7fdc8.js";import"./inheritsLoose-5494d9cc.js";import"./index-4ec9b07a.js";import"./Button-13ce16b7.js";import"./Label-32ef75b5.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-9497f5af.js";import"./includes-646822e3.js";import"./Portal-25fcd847.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./styled-components.browser.esm-675ea4f2.js";const fe={component:d,title:"LtTable",tags:["autodocs"]},P=t=>o.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:o.jsx(d,{...t})}),p=P.bind({}),b=[["213912","213912","12233","Delhi"],["123456","789012","22222","delhi"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"]],w=["Metric Name","Trigger Value","Medium","Trigger Timestamp"];p.args={size:"small",cellData:b,headers:w};const x={args:{size:"small",headers:w,cellData:b,onSort:(t,i)=>{console.log(t,i)},pagination:!0,totalPage:1,currentPage:1,showDownload:!0}},m=()=>{const t=["ID","Date","Store","Sales","Revenue"],i=[["1001","2023-01-01","Store A","5,200","₹52,000"],["1002","2023-01-02","Store B","4,800","₹48,000"],["1003","2023-01-03","Store C","6,500","₹65,000"],["1004","2023-01-04","Store A","5,100","₹51,000"],["1005","2023-01-05","Store B","4,900","₹49,000"]],[l,c]=R.useState(new Set),v=a=>{c(s=>{const r=new Set(s);return r.has(a)?r.delete(a):r.add(a),r})},u=[{header:"Sales",isCollapsed:l.has("Sales"),subColumns:["Q1","Q2","Q3","Q4"]},{header:"Revenue",isCollapsed:l.has("Revenue"),subColumns:["Q1","Q2","Q3","Q4"]}],n=i.map(a=>{const r=[...a.slice(0,3)];return l.has("Sales")?r.push(a[3]):r.push("1,300","1,400","1,200","1,300"),l.has("Revenue")?r.push(a[4]):r.push("₹13,000","₹14,000","₹12,000","₹13,000"),r}),e=["ID","Date","Store"];return l.has("Sales")?e.push("Sales"):e.push("Sales (Q1)","Sales (Q2)","Sales (Q3)","Sales (Q4)"),l.has("Revenue")?e.push("Revenue"):e.push("Revenue (Q1)","Revenue (Q2)","Revenue (Q3)","Revenue (Q4)"),o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Collapsible Columns Example"}),o.jsx("p",{children:"Click on the chevron icons to expand/collapse the Sales and Revenue columns."}),o.jsx(d,{size:"small",headers:e,cellData:n,useCollapsibleColumns:!0,collapsibleColumns:u,onToggleCollapse:v,renderCustomHeader:a=>{if(a.includes(" (")){const[s]=a.split(" (");return s}return a},pagination:!0,totalPage:1,currentPage:1,showDownload:!0}),o.jsxs("div",{style:{marginTop:"40px"},children:[o.jsx("h3",{children:"Regular Table (for comparison)"}),o.jsx(d,{size:"small",headers:t,cellData:i,pagination:!0,totalPage:1,currentPage:1,showDownload:!0})]})]})},h=()=>{const[t,i]=R.useState(new Set),l=e=>{i(a=>{const s=new Set(a);return s.has(e)?s.delete(e):s.add(e),s})},c=[{header:"Sales",isCollapsed:t.has("Sales"),subColumns:["Product A","Product B","Product C"]},{header:"Profit",isCollapsed:t.has("Profit"),subColumns:["Product A","Product B","Product C"]}],v=[["2023-01-01","1200","800","500","300","200","100"],["2023-01-02","1100","750","450","280","190","95"],["2023-01-03","1300","850","550","320","210","105"],["2023-01-04","1250","825","525","310","205","102"],["2023-01-05","1150","775","475","290","195","97"]],u=()=>{const e=["Date"];return t.has("Sales")?e.push("Sales"):e.push("Sales (Product A)","Sales (Product B)","Sales (Product C)"),t.has("Profit")?e.push("Profit"):e.push("Profit (Product A)","Profit (Product B)","Profit (Product C)"),e},n=()=>v.map(e=>{const s=[...[e[0]]];if(t.has("Sales")){const r=parseInt(e[1])+parseInt(e[2])+parseInt(e[3]);s.push(r.toString())}else s.push(e[1],e[2],e[3]);if(t.has("Profit")){const r=parseInt(e[4])+parseInt(e[5])+parseInt(e[6]);s.push(r.toString())}else s.push(e[4],e[5],e[6]);return s});return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Pivot Table with Collapsible Metrics"}),o.jsx("p",{children:"This example demonstrates how collapsible metrics work in a pivot table structure."}),o.jsx(d,{size:"small",headers:u(),cellData:n(),useCollapsibleColumns:!0,collapsibleColumns:c,onToggleCollapse:l,renderCustomHeader:e=>{if(e.includes(" (")){const[a,s]=e.split(" (");return o.jsx("div",{style:{textAlign:"center"},children:a})}return e},pagination:!0,totalPage:1,currentPage:1,showDownload:!0})]})},C=P.bind({});C.args={size:"small",cellData:b,headers:w,backgroundColor:"#1f2937",textColor:"#f9fafb",pagination:!0,totalPage:3,currentPage:1};const g=P.bind({});g.args={size:"small",cellData:b,headers:w,backgroundColor:"#f8fafc",textColor:"#374151",pagination:!0,totalPage:3,currentPage:1};const S=P.bind({});S.args={size:"small",cellData:b,headers:w,backgroundColor:"#3b82f6",textColor:"#ffffff",pagination:!0,totalPage:3,currentPage:1};const f=()=>{const[t,i]=R.useState(new Set),l=e=>{i(a=>{const s=new Set(a);return s.has(e)?s.delete(e):s.add(e),s})},c=[{header:"Sales",isCollapsed:t.has("Sales"),subColumns:["Q1","Q2","Q3","Q4"]},{header:"Revenue",isCollapsed:t.has("Revenue"),subColumns:["Q1","Q2","Q3","Q4"]}],u=[["1001","2023-01-01","Store A","5,200","₹52,000"],["1002","2023-01-02","Store B","4,800","₹48,000"],["1003","2023-01-03","Store C","6,500","₹65,000"],["1004","2023-01-04","Store A","5,100","₹51,000"],["1005","2023-01-05","Store B","4,900","₹49,000"]].map(e=>{const s=[...e.slice(0,3)];return t.has("Sales")?s.push(e[3]):s.push("1,300","1,400","1,200","1,300"),t.has("Revenue")?s.push(e[4]):s.push("₹13,000","₹14,000","₹12,000","₹13,000"),s}),n=["ID","Date","Store"];return t.has("Sales")?n.push("Sales"):n.push("Sales (Q1)","Sales (Q2)","Sales (Q3)","Sales (Q4)"),t.has("Revenue")?n.push("Revenue"):n.push("Revenue (Q1)","Revenue (Q2)","Revenue (Q3)","Revenue (Q4)"),o.jsxs("div",{style:{padding:"20px",backgroundColor:"#111827"},children:[o.jsx("h3",{style:{color:"#f9fafb"},children:"Dark Theme Collapsible Table"}),o.jsx("p",{style:{color:"#d1d5db"},children:"Collapsible columns with dark theme colors."}),o.jsx(d,{size:"small",headers:n,cellData:u,backgroundColor:"#374151",textColor:"#f9fafb",useCollapsibleColumns:!0,collapsibleColumns:c,onToggleCollapse:l,renderCustomHeader:e=>{if(e.includes(" (")){const[a]=e.split(" (");return a}return e},pagination:!0,totalPage:1,currentPage:1,showDownload:!0})]})};m.__docgenInfo={description:"",methods:[],displayName:"TableWithCollapsibleColumns"};h.__docgenInfo={description:"",methods:[],displayName:"TableWithPivotMetrics"};f.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTableWithCustomColors"};var Q,D,T;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <LtTable {...args} />
  </div>`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var M,y,A;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(y=x.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var I,k,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  // Sample data for a metrics table
  const metricsHeaders = ['ID', 'Date', 'Store', 'Sales', 'Revenue'];

  // Create metrics data with different dimensions
  const metricsData = [['1001', '2023-01-01', 'Store A', '5,200', '₹52,000'], ['1002', '2023-01-02', 'Store B', '4,800', '₹48,000'], ['1003', '2023-01-03', 'Store C', '6,500', '₹65,000'], ['1004', '2023-01-04', 'Store A', '5,100', '₹51,000'], ['1005', '2023-01-05', 'Store B', '4,900', '₹49,000']];

  // State for tracking which metrics are collapsed
  const [collapsedMetrics, setCollapsedMetrics] = useState<Set<string>>(new Set());

  // Toggle function for collapsing/expanding metrics
  const toggleMetricCollapse = (metric: string) => {
    setCollapsedMetrics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(metric)) {
        newSet.delete(metric);
      } else {
        newSet.add(metric);
      }
      return newSet;
    });
  };

  // Collapsible column definitions
  const collapsibleColumns = [{
    header: 'Sales',
    isCollapsed: collapsedMetrics.has('Sales'),
    subColumns: ['Q1', 'Q2', 'Q3', 'Q4']
  }, {
    header: 'Revenue',
    isCollapsed: collapsedMetrics.has('Revenue'),
    subColumns: ['Q1', 'Q2', 'Q3', 'Q4']
  }];

  // Create expanded data with sub-columns for metrics
  const expandedData = metricsData.map(row => {
    const baseRow = row.slice(0, 3); // ID, Date, Store
    const expandedRow = [...baseRow];

    // Add sales data for each quarter
    if (!collapsedMetrics.has('Sales')) {
      // If Sales is expanded, add one column for each quarter
      expandedRow.push('1,300', '1,400', '1,200', '1,300'); // Q1, Q2, Q3, Q4 sales
    } else {
      // If Sales is collapsed, add just the total
      expandedRow.push(row[3]); // Total sales
    }

    // Add revenue data for each quarter
    if (!collapsedMetrics.has('Revenue')) {
      // If Revenue is expanded, add one column for each quarter
      expandedRow.push('₹13,000', '₹14,000', '₹12,000', '₹13,000'); // Q1, Q2, Q3, Q4 revenue
    } else {
      // If Revenue is collapsed, add just the total
      expandedRow.push(row[4]); // Total revenue
    }
    return expandedRow;
  });

  // Create headers that match the expanded data
  const expandedHeaders = ['ID', 'Date', 'Store'];

  // Add Sales columns (either just 'Sales' or individual quarters)
  if (collapsedMetrics.has('Sales')) {
    expandedHeaders.push('Sales');
  } else {
    expandedHeaders.push('Sales (Q1)', 'Sales (Q2)', 'Sales (Q3)', 'Sales (Q4)');
  }

  // Add Revenue columns (either just 'Revenue' or individual quarters)
  if (collapsedMetrics.has('Revenue')) {
    expandedHeaders.push('Revenue');
  } else {
    expandedHeaders.push('Revenue (Q1)', 'Revenue (Q2)', 'Revenue (Q3)', 'Revenue (Q4)');
  }
  return <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5'
  }}>
      <h3>Collapsible Columns Example</h3>
      <p>Click on the chevron icons to expand/collapse the Sales and Revenue columns.</p>
      <LtTable size="small" headers={expandedHeaders} cellData={expandedData} useCollapsibleColumns={true} collapsibleColumns={collapsibleColumns} onToggleCollapse={toggleMetricCollapse} renderCustomHeader={header => {
      // For headers like "Sales (Q1)", extract just the metric name
      if (header.includes(' (')) {
        const [metric] = header.split(' (');
        return metric;
      }
      return header;
    }} pagination={true} totalPage={1} currentPage={1} showDownload={true} />
      
      <div style={{
      marginTop: '40px'
    }}>
        <h3>Regular Table (for comparison)</h3>
        <LtTable size="small" headers={metricsHeaders} cellData={metricsData} pagination={true} totalPage={1} currentPage={1} showDownload={true} />
      </div>
    </div>;
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var j,N,B;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  // Sample data for a metrics table with dimensions
  const [collapsedMetrics, setCollapsedMetrics] = useState<Set<string>>(new Set());

  // Toggle function for collapsing/expanding metrics
  const toggleMetricCollapse = (metric: string) => {
    setCollapsedMetrics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(metric)) {
        newSet.delete(metric);
      } else {
        newSet.add(metric);
      }
      return newSet;
    });
  };

  // Define collapsible metrics
  const collapsibleColumns = [{
    header: 'Sales',
    isCollapsed: collapsedMetrics.has('Sales'),
    subColumns: ['Product A', 'Product B', 'Product C']
  }, {
    header: 'Profit',
    isCollapsed: collapsedMetrics.has('Profit'),
    subColumns: ['Product A', 'Product B', 'Product C']
  }];

  // Create pivot data
  const pivotData = [['2023-01-01', '1200', '800', '500', '300', '200', '100'], ['2023-01-02', '1100', '750', '450', '280', '190', '95'], ['2023-01-03', '1300', '850', '550', '320', '210', '105'], ['2023-01-04', '1250', '825', '525', '310', '205', '102'], ['2023-01-05', '1150', '775', '475', '290', '195', '97']];

  // Generate headers based on collapsed state
  const generatePivotHeaders = () => {
    const headers = ['Date'];

    // Add Sales headers
    if (collapsedMetrics.has('Sales')) {
      headers.push('Sales');
    } else {
      headers.push('Sales (Product A)', 'Sales (Product B)', 'Sales (Product C)');
    }

    // Add Profit headers
    if (collapsedMetrics.has('Profit')) {
      headers.push('Profit');
    } else {
      headers.push('Profit (Product A)', 'Profit (Product B)', 'Profit (Product C)');
    }
    return headers;
  };

  // Generate data based on collapsed state
  const generatePivotData = () => {
    return pivotData.map(row => {
      const date = [row[0]];
      const newRow = [...date];

      // Add Sales data
      if (collapsedMetrics.has('Sales')) {
        // Sum all sales
        const totalSales = parseInt(row[1]) + parseInt(row[2]) + parseInt(row[3]);
        newRow.push(totalSales.toString());
      } else {
        // Individual product sales
        newRow.push(row[1], row[2], row[3]);
      }

      // Add Profit data
      if (collapsedMetrics.has('Profit')) {
        // Sum all profits
        const totalProfit = parseInt(row[4]) + parseInt(row[5]) + parseInt(row[6]);
        newRow.push(totalProfit.toString());
      } else {
        // Individual product profits
        newRow.push(row[4], row[5], row[6]);
      }
      return newRow;
    });
  };
  return <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5'
  }}>
      <h3>Pivot Table with Collapsible Metrics</h3>
      <p>This example demonstrates how collapsible metrics work in a pivot table structure.</p>
      <LtTable size="small" headers={generatePivotHeaders()} cellData={generatePivotData()} useCollapsibleColumns={true} collapsibleColumns={collapsibleColumns} onToggleCollapse={toggleMetricCollapse} renderCustomHeader={header => {
      // For headers like "Sales (Product A)", show just the metric name
      if (header.includes(' (')) {
        const [metric, dimension] = header.split(' (');
        return <div style={{
          textAlign: 'center'
        }}>
                {metric}
              </div>;
      }
      return header;
    }} pagination={true} totalPage={1} currentPage={1} showDownload={true} />
    </div>;
}`,...(B=(N=h.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var W,L,z;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <LtTable {...args} />
  </div>`,...(z=(L=C.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var _,q,E;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <LtTable {...args} />
  </div>`,...(E=(q=g.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var F,G,O;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <LtTable {...args} />
  </div>`,...(O=(G=S.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,J,K;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [collapsedMetrics, setCollapsedMetrics] = useState<Set<string>>(new Set());
  const toggleMetricCollapse = (metric: string) => {
    setCollapsedMetrics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(metric)) {
        newSet.delete(metric);
      } else {
        newSet.add(metric);
      }
      return newSet;
    });
  };
  const collapsibleColumns = [{
    header: 'Sales',
    isCollapsed: collapsedMetrics.has('Sales'),
    subColumns: ['Q1', 'Q2', 'Q3', 'Q4']
  }, {
    header: 'Revenue',
    isCollapsed: collapsedMetrics.has('Revenue'),
    subColumns: ['Q1', 'Q2', 'Q3', 'Q4']
  }];
  const metricsHeaders = ['ID', 'Date', 'Store', 'Sales', 'Revenue'];
  const metricsData = [['1001', '2023-01-01', 'Store A', '5,200', '₹52,000'], ['1002', '2023-01-02', 'Store B', '4,800', '₹48,000'], ['1003', '2023-01-03', 'Store C', '6,500', '₹65,000'], ['1004', '2023-01-04', 'Store A', '5,100', '₹51,000'], ['1005', '2023-01-05', 'Store B', '4,900', '₹49,000']];
  const expandedData = metricsData.map(row => {
    const baseRow = row.slice(0, 3);
    const expandedRow = [...baseRow];
    if (!collapsedMetrics.has('Sales')) {
      expandedRow.push('1,300', '1,400', '1,200', '1,300');
    } else {
      expandedRow.push(row[3]);
    }
    if (!collapsedMetrics.has('Revenue')) {
      expandedRow.push('₹13,000', '₹14,000', '₹12,000', '₹13,000');
    } else {
      expandedRow.push(row[4]);
    }
    return expandedRow;
  });
  const expandedHeaders = ['ID', 'Date', 'Store'];
  if (collapsedMetrics.has('Sales')) {
    expandedHeaders.push('Sales');
  } else {
    expandedHeaders.push('Sales (Q1)', 'Sales (Q2)', 'Sales (Q3)', 'Sales (Q4)');
  }
  if (collapsedMetrics.has('Revenue')) {
    expandedHeaders.push('Revenue');
  } else {
    expandedHeaders.push('Revenue (Q1)', 'Revenue (Q2)', 'Revenue (Q3)', 'Revenue (Q4)');
  }
  return <div style={{
    padding: '20px',
    backgroundColor: '#111827'
  }}>
      <h3 style={{
      color: '#f9fafb'
    }}>Dark Theme Collapsible Table</h3>
      <p style={{
      color: '#d1d5db'
    }}>Collapsible columns with dark theme colors.</p>
      <LtTable size="small" headers={expandedHeaders} cellData={expandedData} backgroundColor="#374151" textColor="#f9fafb" useCollapsibleColumns={true} collapsibleColumns={collapsibleColumns} onToggleCollapse={toggleMetricCollapse} renderCustomHeader={header => {
      if (header.includes(' (')) {
        const [metric] = header.split(' (');
        return metric;
      }
      return header;
    }} pagination={true} totalPage={1} currentPage={1} showDownload={true} />
    </div>;
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const be=["Default","TableWithCustomheader","TableWithCollapsibleColumns","TableWithPivotMetrics","TableWithCustomColors","TableWithLightTheme","TableWithBrandColors","CollapsibleTableWithCustomColors"];export{f as CollapsibleTableWithCustomColors,p as Default,S as TableWithBrandColors,m as TableWithCollapsibleColumns,C as TableWithCustomColors,x as TableWithCustomheader,g as TableWithLightTheme,h as TableWithPivotMetrics,be as __namedExportsOrder,fe as default};
