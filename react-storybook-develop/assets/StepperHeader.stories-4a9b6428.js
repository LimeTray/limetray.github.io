import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{r as i}from"./index-04c7fd94.js";import{S as x}from"./stepperHeader-6c94ad75.js";import"./_commonjsHelpers-725317a4.js";import"./Icon-6945f610.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";const E={title:"StepperHeader",component:x,tags:["autodocs"]},C=s=>{const[r,o]=i.useState(0),[b,a]=i.useState(!1),g=()=>{o(p=>Math.max(0,p-1)),a(!1)},v=()=>{o(p=>{const l=Math.min(s.steps.length,p+1);return l===s.steps.length&&a(!0),l})};return e.jsxs("div",{style:{width:"600px"},children:[e.jsx(x,{...s,currentStep:r,isCompleted:b}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("button",{onClick:g,disabled:r===0,children:"Previous Step"}),e.jsx("button",{onClick:v,disabled:r===s.steps.length,children:"Next Step"})]})]})},t=C.bind({});t.args={steps:[{label:"Naming",width:"25%"},{label:"rules",width:"25%"},{label:"Audience",width:"25%"},{label:"Notifications",width:"25%"}]};const n=C.bind({});n.args={steps:[{label:"Naming"},{label:"rules"},{label:"Audience"},{label:"Notifications"}]};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const _=["Default","NoWidth"];export{t as Default,n as NoWidth,_ as __namedExportsOrder,E as default};
