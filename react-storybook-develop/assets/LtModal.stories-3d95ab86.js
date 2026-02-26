import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as s}from"./index-ad58220e.js";import{M as x}from"./ltModal-71608253.js";import{B as m}from"./Button-97fd5a94.js";import{I as y}from"./Icon-5cfe3eb1.js";import{I as u}from"./Input-94f4c1a5.js";import{L as j}from"./legends-1f8cd0ea.js";import{T as V,u as O}from"./ThemeContext-71b3bf8d.js";import{T as k}from"./ToggleComponent-7707e758.js";import"./_commonjsHelpers-de833af9.js";import"./Modal-88a99270.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./pick-7736bb65.js";import"./_baseSet-4a5e4309.js";import"./childrenUtils-250e70c5.js";import"./includes-c2454020.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./index-4fee7e45.js";import"./index-e8ec4132.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-f7f0c885.js";import"./Portal-86734c92.js";import"./map-db19bd84.js";import"./crossIcon-11d15636.js";import"./checkIcon-e2b8e3fe.js";import"./Label-11060fec.js";import"./htmlPropsUtils-25182749.js";const le={component:x,title:"LtModal",tags:["autodocs"],decorators:[o=>e.jsx(V,{children:e.jsx(o,{})})]},T=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],S=({modalProps:o})=>{const[v,l]=s.useState(!1),[r,i]=s.useState(""),[p,d]=s.useState(""),f=O().theme==="dark",C=()=>l(!0),n=()=>l(!1),I=()=>{console.log("Input 1:",r),console.log("Input 2:",p),i(""),d(""),n()},M="Legend";return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:16},children:e.jsx(k,{})}),e.jsx("button",{onClick:C,children:"Open Modal"}),e.jsx(x,{...o,open:v,onClose:n,headerIcon:e.jsx(y,{name:"close",style:{color:f?"#fff":"#000"}}),children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:r,onChange:a=>i(a.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:a=>d(a.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(j,{heading:M,legendsData:T}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(m,{content:"Cancel",onClick:n}),e.jsx(m,{content:"Create",color:"green",onClick:I})]})]})})]})},t=S.bind({});t.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0,className:"my-custom-class"}};var c,g,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
  modalProps
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const darkmode = useThemeMode().theme === 'dark';
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const handleCreate = () => {
    console.log("Input 1:", inputValue1);
    console.log("Input 2:", inputValue2);
    setInputValue1("");
    setInputValue2("");
    handleClose();
  };
  const heading = "Legend";
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={handleOpen}>Open Modal</button>
      <MyModal {...modalProps} open={modalOpen} onClose={handleClose} headerIcon={<Icon name="close" style={{
      color: darkmode ? "#fff" : "#000"
    }} />}>
        <div>
          <h5>Enter Goal Range (in Minutes)</h5>
          <div style={{
          display: "flex"
        }}>
            <Input placeholder="Min value" value={inputValue1} onChange={e => setInputValue1(e.target.value)} style={{
            margin: "10px",
            padding: "0px"
          }} />
            <Input placeholder="Min value" value={inputValue2} onChange={e => setInputValue2(e.target.value)} style={{
            margin: "10px",
            padding: "0px"
          }} />
          </div>
          <Legends heading={heading} legendsData={legendsData} />
          <div style={{
          marginTop: "20px",
          display: "flex"
        }}>
            <Button content="Cancel" onClick={handleClose} />
            <Button content="Create" color="green" onClick={handleCreate} />
          </div>
        </div>
      </MyModal>
    </div>;
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const re=["Default"];export{t as Default,re as __namedExportsOrder,le as default};
