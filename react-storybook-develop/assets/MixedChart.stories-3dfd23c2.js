import{j as i}from"./jsx-runtime-8406ef1e.js";import{M as h}from"./mixedChart-a504e99e.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./auto-a199c2c6.js";import"./lodash-9978a6f3.js";const M={title:"MixedChart",component:h,parameters:{docs:{description:{component:`
The \`MixedChart\` component is a versatile chart wrapper built using Chart.js. 
It supports mixed datasets and customizable options, including responsive design, 
custom tick callbacks, and plugin configurations.

### Features
- Easily customizable using \`data\` and \`options\`.
- Supports callbacks for X and Y axis ticks.
- Automatically merges user-provided options with default configurations.
        `}}},argTypes:{data:{description:"Chart.js-compatible dataset for rendering the chart.",control:"object"},options:{description:"Chart.js configuration options.",control:"object"},xTicks:{description:"Custom callback function for formatting X-axis tick values.",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}}},yTicks:{description:"Custom callback function for formatting Y-axis tick values.",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}}}}},o=e=>i.jsx("div",{style:{maxWidth:"1000px",margin:"auto"},children:i.jsx(h,{...e})}),a=o.bind({});a.args={data:{labels:["2023 April - June","2023 October - December","2024 April - June","2024 October - December","2023 April - June","2023 October - December","2024 April - June","2024 October - December"],datasets:[{type:"bar",label:"Call Center",data:[20,25,30,28,20,25,30,28],backgroundColor:"#8B0000",barPercentage:1},{type:"bar",label:"Order Online",data:[15,20,18,22,15,20,18,22],backgroundColor:"#0073e6",barPercentage:1},{type:"bar",label:"POS",data:[5,6,8,7,5,6,8,7],backgroundColor:"#32CD32",barPercentage:1},{type:"bar",label:"Magicpin",data:[2,3,4,3,2,3,4,3],backgroundColor:"#FFD700",barPercentage:1},{type:"line",label:"Total",data:[42,54,60,60,42,54,60,60],borderColor:"#0000FF",borderWidth:2,pointBackgroundColor:"#0000FF",fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"}}},yTicks:e=>`${e}L`};a.parameters={docs:{storyDescription:"Default configuration of the `MixedChart` component, showcasing bar and line datasets."}};const t=o.bind({});t.args={data:{labels:["Q1","Q2","Q3","Q4"],datasets:[{type:"bar",label:"Quarterly Revenue",data:[15e3,2e4,25e3,3e4],backgroundColor:"#36A2EB"}]},options:{plugins:{title:{display:!0,text:"Custom Ticks Example"}}},xTicks:e=>`Q${e}`,yTicks:e=>`$${e/1e3}k`};t.parameters={docs:{storyDescription:"This example demonstrates custom tick formatting for both axes."}};const r=o.bind({});r.args={data:{labels:["January","February","March","April","May","June","July","August"],datasets:[{type:"line",label:"Profit",data:[10,20,15,25,30,40,35,50],borderColor:"#0000FF",borderWidth:2,fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"top"}},scales:{x:{grid:{display:!1}}}},xTicks:e=>`Q${e}`,yTicks:e=>`${e}%`};r.parameters={docs:{storyDescription:"This example showcases a line chart with custom tick formatting and no grid lines."}};const s=o.bind({});s.args={data:{labels:["Week 1","Week 2","Week 3","Week 4"],datasets:[{type:"bar",label:"Category A",data:[15,25,30,35],backgroundColor:"#FFC300"},{type:"bar",label:"Category B",data:[20,15,25,30],backgroundColor:"#DAF7A6"},{type:"bar",label:"Category C",data:[10,20,15,25],backgroundColor:"#FF5733"}]},options:{responsive:!0,plugins:{legend:{position:"right"}},scales:{x:{stacked:!0},y:{stacked:!0,ticks:{callback:e=>`${e} units`}}}}};s.parameters={docs:{storyDescription:"This example demonstrates a stacked bar chart with custom Y-axis tick formatting."}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`args => <div style={{
  maxWidth: '1000px',
  margin: 'auto'
}}>
    <MixedChart {...args} />
  </div>`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => <div style={{
  maxWidth: '1000px',
  margin: 'auto'
}}>
    <MixedChart {...args} />
  </div>`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  maxWidth: '1000px',
  margin: 'auto'
}}>
    <MixedChart {...args} />
  </div>`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,k,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div style={{
  maxWidth: '1000px',
  margin: 'auto'
}}>
    <MixedChart {...args} />
  </div>`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const W=["Default","WithCustomTicks","LineOnly","BarStacked"];export{s as BarStacked,a as Default,r as LineOnly,t as WithCustomTicks,W as __namedExportsOrder,M as default};
