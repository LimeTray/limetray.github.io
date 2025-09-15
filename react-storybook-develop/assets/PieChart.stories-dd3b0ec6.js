import{j as m}from"./jsx-runtime-8406ef1e.js";import{r as u}from"./index-ad58220e.js";import{C as L}from"./auto-a199c2c6.js";import{_ as l}from"./lodash-9978a6f3.js";import"./_commonjsHelpers-de833af9.js";const B=({data:r,options:o})=>{const p=u.useRef(null),a=u.useRef(null);function D(t){return t?t.toLocaleString():0}const _={responsive:!0,plugins:{legend:{position:"bottom",labels:{generateLabels:t=>{const s=t.data.datasets[0];return(t.data.labels??[]).map((n,e)=>{const $=s.data[e];return{text:`${n}: ${D(parseInt($.toFixed(0)))}`,fontColor:o&&o.legendLabelColor?o.legendLabelColor:"#000",...s.backgroundColor&&{fillStyle:s.backgroundColor[e]},hidden:!t.getDataVisibility(e),index:e}})}}},tooltip:{mode:"index",intersect:!1,callbacks:{label:function(t){const s=t.raw||0,n=t.chart._metasets[0].total;return` ${(s/n*100).toFixed(2)}%`}}}}};function W(t,s){return l.mergeWith({},t,s,(n,e)=>l.isObject(n)&&l.isObject(e)?l.merge({},n,e):e!==void 0?e:n)}return u.useEffect(()=>{const t=W(_,o);return p.current&&(a.current&&a.current.destroy(),a.current=new L(p.current,{type:"pie",data:r,options:t})),()=>{a.current&&a.current.destroy()}},[r,o]),m.jsx("canvas",{ref:p})},A=B;B.__docgenInfo={description:"",methods:[],displayName:"PieChart",props:{data:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  datasets: ChartDataset[];
  [key: string]: any;
}`,signature:{properties:[{key:"datasets",value:{name:"Array",elements:[{name:"ChartDataset"}],raw:"ChartDataset[]",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:""},options:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:""}}};const Z={title:"PieChart",component:A,argTypes:{data:{control:"object",description:"Data object defining the labels and datasets for the pie chart."},options:{control:"object",description:"Configuration options for the chart, including plugins, tooltips, and legend settings."}},parameters:{docs:{description:{component:"The `PieChart` component is a reusable chart component built using Chart.js. It renders a pie chart based on the data and options provided as props.\nThis documentation provides examples and configurations for using the `PieChart` component in various scenarios."}}}},g=r=>m.jsx("div",{style:{maxWidth:"400px",margin:"auto"},children:m.jsx(A,{...r})}),i=g.bind({});i.args={data:{labels:["Pos","Online order","Zomato"],datasets:[{data:[3e3,53.3444,1e3],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},options:{}};const d=g.bind({});d.args={data:{labels:["Pos","Online order","Zomato"],datasets:[{data:[200,150,300],backgroundColor:["#FF6384","#36A2EB","#4BC0C0"],hoverBackgroundColor:["#FF6384","#36A2EB","#4BC0C0"]}]},options:{plugins:{legend:{position:"right"}}}};const c=g.bind({});c.args={data:{labels:["Pos","Online order","Zomato"],datasets:[{data:[120,80,200],backgroundColor:["#FF6384","#FFA500","#FFFF00"],hoverBackgroundColor:["#FF6384","#FFA500","#FFFF00"]}]},options:{plugins:{tooltip:{callbacks:{label:function(r){const o=r.raw||0,p=r.chart._metasets[0].total,a=(o/p*100).toFixed(2);return`${r.label}: ${o} (${a}%)`}}}}}};i.parameters={docs:{description:{component:`
### How to Use the PieChart Component

1. **Import the Component**:  
\`\`\`jsx
import PieChart from './PieChart';
\`\`\`

2. **Provide Data and Options**:  
\`\`\`jsx
const data = { ... };
const options = { ... };
<PieChart data={data} options={options} />;
\`\`\`

3. **Customize Further**:  
Adjust tooltips, legends, and other plugins for additional customization.
      `}}};var h,C,f,b,F;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <div style={{
    maxWidth: '400px',
    margin: 'auto'
  }}>
      <PieChart {...args} />
    </div>;
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source},description:{story:"This story demonstrates the `PieChart` with default data and options.",...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.description}}};var y,v,P,x,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <div style={{
    maxWidth: '400px',
    margin: 'auto'
  }}>
      <PieChart {...args} />
    </div>;
}`,...(P=(v=d.parameters)==null?void 0:v.docs)==null?void 0:P.source},description:{story:"This story showcases how to position the legend to the right of the chart.",...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};var k,w,T,E,O;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <div style={{
    maxWidth: '400px',
    margin: 'auto'
  }}>
      <PieChart {...args} />
    </div>;
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"This story demonstrates how to customize tooltips to show both absolute values and percentages for each data segment.",...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};const N=["Default","CustomLegendPosition","WithCustomTooltips"];export{d as CustomLegendPosition,i as Default,c as WithCustomTooltips,N as __namedExportsOrder,Z as default};
