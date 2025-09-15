import{j as k}from"./jsx-runtime-8406ef1e.js";import{r as g}from"./index-ad58220e.js";import{C as R}from"./auto-a199c2c6.js";import"./_commonjsHelpers-de833af9.js";const m=({data:e,tooltipCallback:p,xTicks:u,yTicks:d})=>{const y=g.useRef(null),r=g.useRef(null),q=a=>{var n,o;let t=(n=a.canvas.parentNode)==null?void 0:n.querySelector("div");if(!t){t=document.createElement("div"),t.style.background="rgba(0, 0, 0, 0.7)",t.style.borderRadius="3px",t.style.color="white",t.style.opacity="1",t.style.pointerEvents="none",t.style.position="absolute",t.style.transform="translate(-50%, 0)",t.style.transition="all .1s ease";const s=document.createElement("table");s.style.margin="0px",t.appendChild(s),(o=a.canvas.parentNode)==null||o.appendChild(t)}return t},A=a=>{const{chart:t,tooltip:n}=a,o=q(t);if(n.opacity===0){o.style.opacity="0";return}if(n.body){const w=n.body.map(c=>c.lines),b=o.querySelector("table");b&&(b.innerHTML="",w.forEach(c=>{const f=document.createElement("tr"),l=document.createElement("td");l.style.padding="4px",l.style.fontSize="12px",l.style.color="#fff",l.style.whiteSpace="nowrap",l.style.textAlign="center",l.appendChild(document.createTextNode(c[0])),f.appendChild(l),b.appendChild(f)}))}const{offsetLeft:s,offsetTop:D}=t.canvas;o.style.opacity="1",o.style.left=`${s+n.caretX}px`,o.style.top=`${D+n.caretY}px`};return g.useEffect(()=>{var a,t;if(y.current){const n=y.current.getContext("2d");r.current?(r.current.data=e,r.current.update()):n&&(r.current=new R(n,{type:"line",data:e,options:{responsive:!0,maintainAspectRatio:((a=e==null?void 0:e.options)==null?void 0:a.maintainAspectRatio)||!1,...((t=e==null?void 0:e.options)==null?void 0:t.aspectRatio)&&{aspectRatio:e.options.aspectRatio},scales:{x:{display:e.options.xAxis.display,type:"category",labels:e.labels,grid:{display:e.options.xAxis.gridDisplay},ticks:{font:{weight:300},color:e.options.xAxis.tickColor,...u&&{callback:u}},title:{color:e.options.xAxis.labelColor}},y:{display:e.options.yAxis.display,grid:{display:e.options.yAxis.gridDisplay},ticks:{color:e.options.yAxis.tickColor,...d&&{callback:d}},title:{color:e.options.yAxis.labelColor}}},plugins:{legend:{display:e.options.legend.display,position:e.options.legend.position,labels:{color:e.options.legend.legendLabelColor||"#666666"}},tooltip:{enabled:!1,external:A,callbacks:{label:p||(o=>o.parsed.y.toString())}},subtitle:{display:e.options.subtitle.display,text:e.options.subtitle.label,padding:{bottom:10},position:e.options.subtitle.position}}}}))}},[e,p,u,d]),k.jsx("canvas",{ref:y})};m.defaultProps={data:{labels:[],datasets:[],options:{subtitle:{display:!1,label:"",position:"bottom"},legend:{display:!1,position:"bottom"},xAxis:{display:!1,gridDisplay:!1},yAxis:{display:!1,gridDisplay:!1}}}};const h=m;m.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{data:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  labels: string[];
  datasets: ChartDataset[];
  options: {
    aspectRatio?: number;
    maintainAspectRatio?: boolean;
    subtitle:{
      display: boolean;
      label: string;
      position:  "top" | "bottom" | "left" | "right";
    },
    legend: {
      display: boolean;
      position:  "top" | "bottom" | "left" | "right";
      legendLabelColor?: string; 
    },
    xAxis:{
      display: boolean;
      gridDisplay: boolean;
      labelColor?: string; 
      tickColor?: string;  
    },
    yAxis:{
      display: boolean;
      gridDisplay: boolean;
      labelColor?: string; 
      tickColor?: string;  
    }
  },
}`,signature:{properties:[{key:"labels",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"datasets",value:{name:"Array",elements:[{name:"ChartDataset"}],raw:"ChartDataset[]",required:!0}},{key:"options",value:{name:"signature",type:"object",raw:`{
  aspectRatio?: number;
  maintainAspectRatio?: boolean;
  subtitle:{
    display: boolean;
    label: string;
    position:  "top" | "bottom" | "left" | "right";
  },
  legend: {
    display: boolean;
    position:  "top" | "bottom" | "left" | "right";
    legendLabelColor?: string; 
  },
  xAxis:{
    display: boolean;
    gridDisplay: boolean;
    labelColor?: string; 
    tickColor?: string;  
  },
  yAxis:{
    display: boolean;
    gridDisplay: boolean;
    labelColor?: string; 
    tickColor?: string;  
  }
}`,signature:{properties:[{key:"aspectRatio",value:{name:"number",required:!1}},{key:"maintainAspectRatio",value:{name:"boolean",required:!1}},{key:"subtitle",value:{name:"signature",type:"object",raw:`{
  display: boolean;
  label: string;
  position:  "top" | "bottom" | "left" | "right";
}`,signature:{properties:[{key:"display",value:{name:"boolean",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"position",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}}]},required:!0}},{key:"legend",value:{name:"signature",type:"object",raw:`{
  display: boolean;
  position:  "top" | "bottom" | "left" | "right";
  legendLabelColor?: string; 
}`,signature:{properties:[{key:"display",value:{name:"boolean",required:!0}},{key:"position",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}},{key:"legendLabelColor",value:{name:"string",required:!1}}]},required:!0}},{key:"xAxis",value:{name:"signature",type:"object",raw:`{
  display: boolean;
  gridDisplay: boolean;
  labelColor?: string; 
  tickColor?: string;  
}`,signature:{properties:[{key:"display",value:{name:"boolean",required:!0}},{key:"gridDisplay",value:{name:"boolean",required:!0}},{key:"labelColor",value:{name:"string",required:!1}},{key:"tickColor",value:{name:"string",required:!1}}]},required:!0}},{key:"yAxis",value:{name:"signature",type:"object",raw:`{
  display: boolean;
  gridDisplay: boolean;
  labelColor?: string; 
  tickColor?: string;  
}`,signature:{properties:[{key:"display",value:{name:"boolean",required:!0}},{key:"gridDisplay",value:{name:"boolean",required:!0}},{key:"labelColor",value:{name:"string",required:!1}},{key:"tickColor",value:{name:"string",required:!1}}]},required:!0}}]},required:!0}}]}},description:"",defaultValue:{value:`{
  labels: [],
  datasets: [],
  options: {
    subtitle: {
      display: false,
      label: '',
      position: 'bottom'
    },
    legend: {
      display: false,
      position: 'bottom'
    },
    xAxis: {
      display: false,
      gridDisplay: false
    },
    yAxis: {
      display: false,
      gridDisplay: false
    }
  }
}`,computed:!1}},xTicks:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | string) => string",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"string"}}},description:""},yTicks:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | string) => string",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"string"}}},description:""},tooltipCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(context: TooltipItem<'line'>) => string",signature:{arguments:[{type:{name:"TooltipItem",elements:[{name:"literal",value:"'line'"}],raw:"TooltipItem<'line'>"},name:"context"}],return:{name:"string"}}},description:""}}};const S={component:h,title:"LineChart",argTypes:{data:{control:{type:"object"}},tooltipCallback:{control:{type:"function"},description:"Custom tooltip callback to format the tooltip label"}}},i=e=>k.jsx(h,{...e});i.args={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Sales",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"blue",tension:.1,borderWidth:1},{label:"Dataset 2",data:[28,48,40,19,86],borderColor:"rgba(54, 162, 235, 1)",backgroundColor:"rgba(54, 162, 235, 0.2)",fill:!1,tension:.1,borderDash:[1,2]},{label:"Dataset 3",data:[50,70,60,40,90],borderColor:"rgba(75, 192, 192, 1)",backgroundColor:"rgba(75, 192, 192, 0.2)",fill:!1,tension:.1}],options:{subtitle:{display:!0,label:"chart subtitle",position:"left"},legend:{display:!0,position:"top"},xAxis:{display:!0,gridDisplay:!1},yAxis:{display:!0,gridDisplay:!1},aspectRatio:1}},tooltipCallback:e=>`Custom Value: ${e.parsed.y}`,yTicks:e=>`$${e}`};i.__docgenInfo={description:"",methods:[],displayName:"WithData"};var x,C,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"(args: any) => <LineChart {...args} />",...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const _=["WithData"];export{i as WithData,_ as __namedExportsOrder,S as default};
