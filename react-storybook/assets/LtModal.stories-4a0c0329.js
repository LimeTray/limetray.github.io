import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as s}from"./index-ad58220e.js";import{M as x}from"./ltModal-56d573bd.js";import{B as m}from"./Button-21321eef.js";import{I as y}from"./Icon-370c2d23.js";import{I as u}from"./Input-3f8aa787.js";import{L as j}from"./legends-66516f4a.js";import{T as V,u as O}from"./ThemeContext-71b3bf8d.js";import{T as k}from"./ToggleComponent-2e9a605f.js";import"./_commonjsHelpers-de833af9.js";import"./Modal-220c81f3.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./childrenUtils-dd3b0ba5.js";import"./includes-192f9362.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-b690c58c.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./crossIcon-11d15636.js";import"./checkIcon-e2b8e3fe.js";import"./Label-d5345000.js";import"./htmlPropsUtils-2b22d933.js";const ie={component:x,title:"LtModal",tags:["autodocs"],decorators:[o=>e.jsx(V,{children:e.jsx(o,{})})]},T=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],S=({modalProps:o})=>{const[v,l]=s.useState(!1),[r,i]=s.useState(""),[p,d]=s.useState(""),f=O().theme==="dark",C=()=>l(!0),n=()=>l(!1),I=()=>{console.log("Input 1:",r),console.log("Input 2:",p),i(""),d(""),n()},M="Legend";return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:16},children:e.jsx(k,{})}),e.jsx("button",{onClick:C,children:"Open Modal"}),e.jsx(x,{...o,open:v,onClose:n,headerIcon:e.jsx(y,{name:"close",style:{color:f?"#fff":"#000"}}),children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:r,onChange:a=>i(a.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:a=>d(a.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(j,{heading:M,legendsData:T}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(m,{content:"Cancel",onClick:n}),e.jsx(m,{content:"Create",color:"green",onClick:I})]})]})})]})},t=S.bind({});t.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0,className:"my-custom-class"}};var c,g,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const pe=["Default"];export{t as Default,pe as __namedExportsOrder,ie as default};
