import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as y}from"./index-ad58220e.js";import{L as u}from"./ltTable-b4afc241.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./map-20538cdf.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./factories-df82d7d3.js";import"./Icon-370c2d23.js";import"./inheritsLoose-5494d9cc.js";import"./index-6dcb29cb.js";import"./Button-21321eef.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./styled-components.browser.esm-675ea4f2.js";const se={component:u,title:"LtTable",tags:["autodocs"]},j=r=>o.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:o.jsx(u,{...r})}),i=j.bind({}),A=[["213912","213912","12233","Delhi"],["123456","789012","22222","delhi"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"]],I=["Metric Name","Trigger Value","Medium","Trigger Timestamp"];i.args={size:"small",cellData:A,headers:I};const p={args:{size:"small",headers:I,cellData:A,onSort:(r,n)=>{console.log(r,n)},pagination:!0,totalPage:1,currentPage:1,showDownload:!0}},d=()=>{const r=["ID","Date","Store","Sales","Revenue"],n=[["1001","2023-01-01","Store A","5,200","₹52,000"],["1002","2023-01-02","Store B","4,800","₹48,000"],["1003","2023-01-03","Store C","6,500","₹65,000"],["1004","2023-01-04","Store A","5,100","₹51,000"],["1005","2023-01-05","Store B","4,900","₹49,000"]],[l,m]=y.useState(new Set),h=t=>{m(s=>{const a=new Set(s);return a.has(t)?a.delete(t):a.add(t),a})},C=[{header:"Sales",isCollapsed:l.has("Sales"),subColumns:["Q1","Q2","Q3","Q4"]},{header:"Revenue",isCollapsed:l.has("Revenue"),subColumns:["Q1","Q2","Q3","Q4"]}],g=n.map(t=>{const a=[...t.slice(0,3)];return l.has("Sales")?a.push(t[3]):a.push("1,300","1,400","1,200","1,300"),l.has("Revenue")?a.push(t[4]):a.push("₹13,000","₹14,000","₹12,000","₹13,000"),a}),e=["ID","Date","Store"];return l.has("Sales")?e.push("Sales"):e.push("Sales (Q1)","Sales (Q2)","Sales (Q3)","Sales (Q4)"),l.has("Revenue")?e.push("Revenue"):e.push("Revenue (Q1)","Revenue (Q2)","Revenue (Q3)","Revenue (Q4)"),o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Collapsible Columns Example"}),o.jsx("p",{children:"Click on the chevron icons to expand/collapse the Sales and Revenue columns."}),o.jsx(u,{size:"small",headers:e,cellData:g,useCollapsibleColumns:!0,collapsibleColumns:C,onToggleCollapse:h,renderCustomHeader:t=>{if(t.includes(" (")){const[s]=t.split(" (");return s}return t},pagination:!0,totalPage:1,currentPage:1,showDownload:!0}),o.jsxs("div",{style:{marginTop:"40px"},children:[o.jsx("h3",{children:"Regular Table (for comparison)"}),o.jsx(u,{size:"small",headers:r,cellData:n,pagination:!0,totalPage:1,currentPage:1,showDownload:!0})]})]})},c=()=>{const[r,n]=y.useState(new Set),l=e=>{n(t=>{const s=new Set(t);return s.has(e)?s.delete(e):s.add(e),s})},m=[{header:"Sales",isCollapsed:r.has("Sales"),subColumns:["Product A","Product B","Product C"]},{header:"Profit",isCollapsed:r.has("Profit"),subColumns:["Product A","Product B","Product C"]}],h=[["2023-01-01","1200","800","500","300","200","100"],["2023-01-02","1100","750","450","280","190","95"],["2023-01-03","1300","850","550","320","210","105"],["2023-01-04","1250","825","525","310","205","102"],["2023-01-05","1150","775","475","290","195","97"]],C=()=>{const e=["Date"];return r.has("Sales")?e.push("Sales"):e.push("Sales (Product A)","Sales (Product B)","Sales (Product C)"),r.has("Profit")?e.push("Profit"):e.push("Profit (Product A)","Profit (Product B)","Profit (Product C)"),e},g=()=>h.map(e=>{const s=[...[e[0]]];if(r.has("Sales")){const a=parseInt(e[1])+parseInt(e[2])+parseInt(e[3]);s.push(a.toString())}else s.push(e[1],e[2],e[3]);if(r.has("Profit")){const a=parseInt(e[4])+parseInt(e[5])+parseInt(e[6]);s.push(a.toString())}else s.push(e[4],e[5],e[6]);return s});return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Pivot Table with Collapsible Metrics"}),o.jsx("p",{children:"This example demonstrates how collapsible metrics work in a pivot table structure."}),o.jsx(u,{size:"small",headers:C(),cellData:g(),useCollapsibleColumns:!0,collapsibleColumns:m,onToggleCollapse:l,renderCustomHeader:e=>{if(e.includes(" (")){const[t,s]=e.split(" (");return o.jsx("div",{style:{textAlign:"center"},children:t})}return e},pagination:!0,totalPage:1,currentPage:1,showDownload:!0})]})};d.__docgenInfo={description:"",methods:[],displayName:"TableWithCollapsibleColumns"};c.__docgenInfo={description:"",methods:[],displayName:"TableWithPivotMetrics"};var S,f,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <LtTable {...args} />
  </div>`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var P,v,b;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(b=(v=p.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,D,R;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var Q,M,T;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const ae=["Default","TableWithCustomheader","TableWithCollapsibleColumns","TableWithPivotMetrics"];export{i as Default,d as TableWithCollapsibleColumns,p as TableWithCustomheader,c as TableWithPivotMetrics,ae as __namedExportsOrder,se as default};
