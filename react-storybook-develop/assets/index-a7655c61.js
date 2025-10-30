import{j as a}from"./jsx-runtime-8406ef1e.js";import{r as u}from"./index-ad58220e.js";import{f as h}from"./index-d50b82e2.js";import{L as y}from"./ltRadio-70ea14cc.js";import{C as m}from"./Checkbox-c82fc3e6.js";import{g as p}from"./requestIdGenerator-f6efc017.js";class d extends u.Component{constructor(l){super(l),this.mapRadioButton=(e,n)=>{const{storedValueObject:t}=this.state,o=t[n];return a.jsx("div",{className:"margin-right-s",children:a.jsx(y,{className:"selector-radio",onChange:()=>{t[n].value=e.key,this.setState({storedValueObject:t},()=>{this.sendUpdates()})},checked:o.value===e.key,label:e.value})},p())},this.sendUpdates=()=>{const{storedValueObject:e}=this.state,{onChangeUpdates:n}=this.props;n&&n(e)},this.mapCheckboxOptions=(e,n,t)=>{const{storedValueObject:o}=this.state,r=o[n].options[t].selectedValues||[],s=h(r,{key:e.key}),c=!!s;return a.jsx("div",{className:"margin-right-s",children:a.jsx(m,{onChange:()=>{c?(o[n].options[t].selectedValues=o[n].options[t].selectedValues.filter(i=>i.key!==s.key),o[n].options[t].selected=!!o[n].options[t].selectedValues.length):(o[n].options[t].selectedValues.push(e),o[n].options[t].selected=!0),this.setState({storedValueObject:o},()=>{this.sendUpdates()})},checked:c,label:e.value})},p())},this.addRemoveCheckbox=(e,n,t)=>{let{storedValueObject:o}=this.state,r=o[e].options[t].key;o[e].options[t].selected=n,o[e].options[t].selectedValues=n?o[e].options[t].childrens:[],o=o.map((s,c)=>(c!==e&&(s.options=s.options.map(i=>(i.key===r&&(i.selected=n,i.selectedValues=n?i.childrens:[]),i))),s)),this.setState({storedValueObject:o},()=>{this.sendUpdates()})},this.mapCheckbox=(e,n,t)=>{const{storedValueObject:o}=this.state,{selected:r}=o[t].options[n];return a.jsxs("div",{className:"margin-right-s margin-bottom-xs",children:[a.jsx(m,{checked:r,onChange:()=>this.addRemoveCheckbox(t,!r,n),label:e.value,id:e.key}),a.jsx("div",{className:"margin-left-s",children:e.childrens&&a.jsx("div",{className:"flex align-center margin-top-xs",children:e.childrens.map(s=>this.mapCheckboxOptions(s,t,n))})})]},p())},this.mapElement=(e,n)=>a.jsxs("div",{className:"margin-bottom-s",children:[e.label,e.type==="radio"&&e.options&&a.jsx("div",{className:"flex align-center margin-top-xs",children:e.options.map(t=>this.mapRadioButton(t,n))}),e.type==="checkbox"&&e.options&&a.jsx("div",{className:"margin-top-xs",children:e.options.map((t,o)=>this.mapCheckbox(t,o,n))})]},p()),this.state={storedValueObject:[],originalObject:[]}}componentDidMount(){const{options:l,storedValueObject:e}=this.props,n=JSON.parse(JSON.stringify(l));this.setState({storedValueObject:e||n||[],originalObject:n||[]})}render(){const{originalObject:l}=this.state,{className:e=""}=this.props;return a.jsx("div",{className:e,children:l.map(this.mapElement)})}}d.defaultProps={options:[{label:"Type",type:"radio",options:[{key:"veg",value:"Veg"},{key:"nonveg",value:"Non-veg"}]},{label:"Services",type:"checkbox",options:[{key:"delivery",value:"Delivery",childrens:[{key:"zomato",value:"Zomato"},{key:"swiggy",value:"Swiggy"}],selectedValues:[]},{key:"takeaway",value:"Take away",selectedValues:[]}]}],onChangeUpdates:()=>{},storedValueObject:null};const V=d;d.__docgenInfo={description:"",methods:[{name:"mapRadioButton",docblock:`Function to render group of radio buttons
@param {Object} value contains the information for the radio button
@param {Number} groupIndex index of the radio button group`,modifiers:[],params:[{name:"value",description:"contains the information for the radio button",type:{name:"any"},optional:!1},{name:"groupIndex",description:"index of the radio button group",type:{name:"any"},optional:!1}],returns:null,description:"Function to render group of radio buttons"},{name:"sendUpdates",docblock:`Function to send updates on every change to a prop function which can
be called in the parent component.`,modifiers:[],params:[],returns:null,description:`Function to send updates on every change to a prop function which can
be called in the parent component.`},{name:"mapCheckboxOptions",docblock:`Function to render Checkbox nested element
@param {Object} value contains the information for the elment
@param {Number} index element index
@param {Number} i index of the option`,modifiers:[],params:[{name:"value",description:"contains the information for the elment",type:{name:"any"},optional:!1},{name:"index",description:"element index",type:{name:"any"},optional:!1},{name:"i",description:"index of the option",type:{name:"any"},optional:!1}],returns:null,description:"Function to render Checkbox nested element"},{name:"addRemoveCheckbox",docblock:`Add/Remove whole checkbox and the childrens in/from the storedValueObject
@param {Number} index contains the information for the elment
@param {Boolean} status element index
@param {Number} i index of the option`,modifiers:[],params:[{name:"index",description:"contains the information for the elment",type:{name:"any"},optional:!1},{name:"status",description:"element index",type:{name:"any"},optional:!1},{name:"i",description:"index of the option",type:{name:"any"},optional:!1}],returns:null,description:"Add/Remove whole checkbox and the childrens in/from the storedValueObject"},{name:"mapCheckbox",docblock:`Function to render Checkbox element
@param {Object} value contains the information for the elment
@param {Number} index element index
@param {Number} i index of the option`,modifiers:[],params:[{name:"value",description:"contains the information for the elment",type:{name:"any"},optional:!1},{name:"i",description:"index of the option",type:{name:"any"},optional:!1},{name:"index",description:"element index",type:{name:"any"},optional:!1}],returns:null,description:"Function to render Checkbox element"},{name:"mapElement",docblock:`Function to map all the element
there are different function for rendering checkbox and radio buttons
@param {Object} value contains the information for the element
@param {Number} index element index`,modifiers:[],params:[{name:"value",description:"contains the information for the element",type:{name:"any"},optional:!1},{name:"index",description:"element index",type:{name:"any"},optional:!1}],returns:null,description:`Function to map all the element
there are different function for rendering checkbox and radio buttons`}],displayName:"SelectorGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  {
    label: 'Type',
    type: 'radio',
    options: [
      {
        key: 'veg',
        value: 'Veg',
      },
      {
        key: 'nonveg',
        value: 'Non-veg',
      },
    ],
  },
  {
    label: 'Services',
    type: 'checkbox',
    options: [
      {
        key: 'delivery',
        value: 'Delivery',
        childrens: [
          {
            key: 'zomato',
            value: 'Zomato',
          },
          {
            key: 'swiggy',
            value: 'Swiggy',
          },
        ],
        selectedValues: [],
      },
      {
        key: 'takeaway',
        value: 'Take away',
        selectedValues: [],
      },
    ],
  },
]`,computed:!1}},onChangeUpdates:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},storedValueObject:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: any[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"any"}],raw:"any[]",required:!0}}]}},description:"",defaultValue:{value:"null",computed:!1}}}};export{V as S};
