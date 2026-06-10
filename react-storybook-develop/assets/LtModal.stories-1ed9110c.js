import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{r as s}from"./index-04c7fd94.js";import{M as x}from"./ltModal-751d9e8d.js";import{B as m}from"./Button-8d24c33b.js";import{I as y}from"./Icon-6945f610.js";import{I as u}from"./Input-4003f5c3.js";import{L as j}from"./legends-f4d937df.js";import{T as V,u as O}from"./ThemeContext-ab9e94eb.js";import{T as k}from"./ToggleComponent-e6524698.js";import"./_commonjsHelpers-725317a4.js";import"./Modal-39f90a8c.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./includes-ceab992c.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-0f216811.js";import"./ModernAutoControlledComponent-9145494f.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./crossIcon-81d02106.js";import"./checkIcon-7642d33c.js";import"./Label-c1a3398d.js";import"./htmlPropsUtils-c8ab4bb9.js";const ie={component:x,title:"LtModal",tags:["autodocs"],decorators:[o=>e.jsx(V,{children:e.jsx(o,{})})]},T=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],S=({modalProps:o})=>{const[v,l]=s.useState(!1),[r,i]=s.useState(""),[p,d]=s.useState(""),f=O().theme==="dark",C=()=>l(!0),n=()=>l(!1),I=()=>{console.log("Input 1:",r),console.log("Input 2:",p),i(""),d(""),n()},M="Legend";return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:16},children:e.jsx(k,{})}),e.jsx("button",{onClick:C,children:"Open Modal"}),e.jsx(x,{...o,open:v,onClose:n,headerIcon:e.jsx(y,{name:"close",style:{color:f?"#fff":"#000"}}),children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:r,onChange:a=>i(a.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:a=>d(a.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(j,{heading:M,legendsData:T}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(m,{content:"Cancel",onClick:n}),e.jsx(m,{content:"Create",color:"green",onClick:I})]})]})})]})},t=S.bind({});t.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0,className:"my-custom-class"}};var c,g,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
