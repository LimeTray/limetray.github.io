import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as m}from"./Radio-f1cd070d.js";import{T as k}from"./TextArea-c125c8d0.js";import{B as s}from"./Button-4d603abf.js";import{I as a}from"./Icon-c6fca73b.js";import{I as c}from"./Input-44f566af.js";import{r as R}from"./index-76fb7be0.js";/* empty css              */import"./extends-98964cd2.js";import"./getElementType-751ca897.js";import"./Checkbox-ae73ffda.js";import"./inheritsLoose-c82a83d4.js";import"./_baseSet-16f9c6a2.js";import"./factories-34c191df.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-26f5100b.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./childrenUtils-5b78ad27.js";import"./Label-0be1d8a8.js";import"./Portal-07b213b9.js";import"./map-0d286b3c.js";class r extends R.Component{render(){const{headerText:F,onClose:T,columnFooter:W,showColumnFooter:p,columnBody:L,className:N}=this.props;return e.jsxs("div",{className:`column-layout-container ${N}`,children:[e.jsxs("div",{className:"column-layout-container-header",children:[e.jsx("div",{children:F}),e.jsx("div",{children:e.jsxs(s,{className:"column-layout-container-header-close-btn",onClick:T,children:["Close",e.jsx(a,{name:"close"})]})})]}),e.jsx("div",{className:`column-layout-container-body ${p?"body-with-action":"body-wo-action"}`,children:L}),p&&e.jsx("div",{className:"column-layout-container-footer",children:W})]})}}r.defaultProps={};r.defaultProps={headerText:"Header",columnFooter:e.jsx(e.Fragment,{}),showColumnFooter:!1,columnBody:e.jsx(e.Fragment,{}),className:""};const E=r;r.__docgenInfo={description:"",methods:[],displayName:"ColumnLayout",props:{onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},headerText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Header"',computed:!1}},columnFooter:{required:!1,tsType:{name:"JSX.Element"},description:"",defaultValue:{value:"<></>",computed:!1}},showColumnFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},columnBody:{required:!1,tsType:{name:"JSX.Element"},description:"",defaultValue:{value:"<></>",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const se={component:E,title:"ColumnLayout",tags:["autodocs"]},n={args:{}},l=()=>{alert("closed")},B=()=>{alert("saved")},d={minHeight:"100px",borderRadius:"6px",padding:"24px",boxShadow:"0px 1px 2px 0px #0000000F",background:"#fff"},o={args:{onClose:l,headerText:"Column Layout",showColumnFooter:!0,columnFooter:e.jsx("div",{style:{justifyContent:"flex-end",display:"flex",width:"100%"},children:e.jsx(s,{color:"green",onClick:B,children:e.jsxs("div",{style:{fontWeight:"600"},children:["Create",e.jsx(a,{name:"check",style:{marginLeft:"8px"}})]})})}),columnBody:e.jsx("div",{style:{width:"95%",margin:"auto"},children:e.jsx("div",{style:d,children:"Body"})})}},t={args:{onClose:l,headerText:"Column Layout",showColumnFooter:!1,columnBody:e.jsx("div",{style:{width:"95%",margin:"auto"},children:e.jsx("div",{style:d,children:"Body"})})}},i={args:{onClose:l,headerText:"Column Layout",showColumnFooter:!0,columnFooter:e.jsx("div",{style:{justifyContent:"flex-end",display:"flex",width:"100%"},children:e.jsx(s,{color:"green",onClick:B,children:e.jsxs("div",{style:{fontWeight:"600"},children:["Create",e.jsx(a,{name:"check",style:{marginLeft:"8px"}})]})})}),columnBody:e.jsx("div",{style:{width:"95%",margin:"auto"},children:e.jsxs("div",{style:d,children:[e.jsxs("div",{style:{padding:"12px 16px 12px 16px",borderRadius:"6px",background:"#fff !important",boxShadow:"0px 1px 3px 0px #0000001A"},children:[e.jsxs("div",{style:{fontWeight:"500",fontSize:"14px",lineHeight:"20px",color:"#545454",display:"inline-block",marginRight:"20px"},children:[e.jsx(m,{style:{marginRight:"5px"}}),"Create Category"]}),e.jsxs("div",{style:{fontWeight:"500",fontSize:"14px",lineHeight:"20px",color:"#545454",display:"inline-block",marginRight:"20px"},children:[e.jsx(m,{style:{marginRight:"5px"}}),"Create Sub-Category"]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsxs("div",{style:{width:"48%"},children:[e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("div",{style:{paddingBottom:"6px",fontWeight:"500",fontSize:"13px",color:"#374151"},children:"Category Name"}),e.jsx(c,{placeholder:"Enter Full Category Name"})]}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("div",{style:{paddingBottom:"6px",fontWeight:"500",fontSize:"13px",color:"#374151"},children:"Display Name"}),e.jsx(c,{placeholder:"Enter short name"})]})]}),e.jsx("div",{style:{width:"48%"},children:e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("div",{style:{paddingBottom:"6px",fontWeight:"500",fontSize:"13px",color:"#374151"},children:"Enter Description"}),e.jsx(k,{rows:7,style:{width:"100%"}})]})})]})]})})}};var u,y,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    onClose: onClose,
    headerText: "Column Layout",
    showColumnFooter: true,
    columnFooter: <div style={{
      justifyContent: "flex-end",
      display: "flex",
      width: "100%"
    }}>
        <Button color={"green"} onClick={onSave}>
          <div style={{
          fontWeight: "600"
        }}>
            Create
            <Icon name={"check"} style={{
            marginLeft: "8px"
          }} />
          </div>
        </Button>
      </div>,
    columnBody: <div style={{
      width: "95%",
      margin: "auto"
    }}>
        <div style={bodyStyle}>Body</div>
      </div>
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,C,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    onClose: onClose,
    headerText: "Column Layout",
    showColumnFooter: false,
    columnBody: <div style={{
      width: "95%",
      margin: "auto"
    }}>
        <div style={bodyStyle}>Body</div>
      </div>
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var w,S,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    onClose: onClose,
    headerText: "Column Layout",
    showColumnFooter: true,
    columnFooter: <div style={{
      justifyContent: "flex-end",
      display: "flex",
      width: "100%"
    }}>
        <Button color={"green"} onClick={onSave}>
          <div style={{
          fontWeight: "600"
        }}>
            Create
            <Icon name={"check"} style={{
            marginLeft: "8px"
          }} />
          </div>
        </Button>
      </div>,
    columnBody: <div style={{
      width: "95%",
      margin: "auto"
    }}>
        <div style={bodyStyle}>
          <div style={{
          padding: "12px 16px 12px 16px",
          borderRadius: "6px",
          background: "#fff !important",
          boxShadow: "0px 1px 3px 0px #0000001A"
        }}>
            <div style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#545454",
            display: "inline-block",
            marginRight: "20px"
          }}>
              <Radio style={{
              marginRight: "5px"
            }} />
              Create Category
            </div>
            <div style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#545454",
            display: "inline-block",
            marginRight: "20px"
          }}>
              <Radio style={{
              marginRight: "5px"
            }} />
              Create Sub-Category
            </div>
          </div>

          <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}>
            <div style={{
            width: "48%"
          }}>
              <div style={{
              marginTop: "24px"
            }}>
                <div style={{
                paddingBottom: "6px",
                fontWeight: "500",
                fontSize: "13px",
                color: "#374151"
              }}>
                  Category Name
                </div>
                <Input placeholder={"Enter Full Category Name"} />
              </div>

              <div style={{
              marginTop: "24px"
            }}>
                <div style={{
                paddingBottom: "6px",
                fontWeight: "500",
                fontSize: "13px",
                color: "#374151"
              }}>
                  Display Name
                </div>
                <Input placeholder={"Enter short name"} />
              </div>
            </div>

            <div style={{
            width: "48%"
          }}>
              <div style={{
              marginTop: "24px"
            }}>
                <div style={{
                paddingBottom: "6px",
                fontWeight: "500",
                fontSize: "13px",
                color: "#374151"
              }}>
                  Enter Description
                </div>
                <TextArea rows={7} style={{
                width: "100%"
              }} />
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const ae=["Default","WithFooter","WithoutFooter","AddNewCategoryColumnLayout"];export{i as AddNewCategoryColumnLayout,n as Default,o as WithFooter,t as WithoutFooter,ae as __namedExportsOrder,se as default};
