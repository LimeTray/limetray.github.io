import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as i}from"./index-ad58220e.js";import{S as x}from"./stepperHeader-57c5b953.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-370c2d23.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";const T={title:"StepperHeader",component:x,tags:["autodocs"]},C=s=>{const[r,o]=i.useState(0),[b,a]=i.useState(!1),g=()=>{o(p=>Math.max(0,p-1)),a(!1)},v=()=>{o(p=>{const l=Math.min(s.steps.length,p+1);return l===s.steps.length&&a(!0),l})};return e.jsxs("div",{style:{width:"600px"},children:[e.jsx(x,{...s,currentStep:r,isCompleted:b}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("button",{onClick:g,disabled:r===0,children:"Previous Step"}),e.jsx("button",{onClick:v,disabled:r===s.steps.length,children:"Next Step"})]})]})},t=C.bind({});t.args={steps:[{label:"Naming",width:"25%"},{label:"rules",width:"25%"},{label:"Audience",width:"25%"},{label:"Notifications",width:"25%"}]};const n=C.bind({});n.args={steps:[{label:"Naming"},{label:"rules"},{label:"Audience"},{label:"Notifications"}]};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.steps.length, prevStep + 1);
      if (nextStep === args.steps.length) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "600px"
  }}>
      <StepperHeader {...args} currentStep={currentStep} isCompleted={isCompleted} />
      <div style={{
      marginTop: "20px"
    }}>
        <button onClick={handlePrev} disabled={currentStep === 0}>
          Previous Step
        </button>
        <button onClick={handleNext} disabled={currentStep === args.steps.length}>
          Next Step
        </button>
      </div>
    </div>;
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var S,m,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.steps.length, prevStep + 1);
      if (nextStep === args.steps.length) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "600px"
  }}>
      <StepperHeader {...args} currentStep={currentStep} isCompleted={isCompleted} />
      <div style={{
      marginTop: "20px"
    }}>
        <button onClick={handlePrev} disabled={currentStep === 0}>
          Previous Step
        </button>
        <button onClick={handleNext} disabled={currentStep === args.steps.length}>
          Next Step
        </button>
      </div>
    </div>;
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const E=["Default","NoWidth"];export{t as Default,n as NoWidth,E as __namedExportsOrder,T as default};
