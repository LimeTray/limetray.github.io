import{j as p}from"./jsx-runtime-8ae9c9ad.js";import{r as d}from"./index-04c7fd94.js";import{S as L}from"./stepperFooter-c80c21b7.js";import"./_commonjsHelpers-725317a4.js";import"./ltButton-c2816c4f.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./styled-components.browser.esm-f4af7a4c.js";import"./index-bbb1e5b1.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./isEmpty-0f216811.js";import"./deburr-bb2546ff.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-9f7569d5.js";import"./config-d270d9b6.js";import"./index-c3b335ed.js";const ue={title:"StepperFooter",component:L,tags:["autodocs"]},o=a=>{const[F,i]=d.useState(0),[m,S]=d.useState(!1),j=()=>{i(l=>Math.max(0,l-1)),S(!1)},w=()=>{i(l=>{const c=Math.min(a.totalSteps-1,l+1);return c===a.totalSteps-1&&S(!0),c})};return p.jsx("div",{style:{width:"300px"},children:p.jsx(L,{...a,currentStep:F,onPrevClick:j,onNextClick:w,nextButtonLabel:m?"Done":"Next",isCompleted:m})})},e=o.bind({});e.args={totalSteps:3,previousButtonLabel:"Previous",nextButtonLabel:"Next",steptext:"Step"};const t=o.bind({});t.args={...e.args,currentStep:0,isNextDisabled:!0};const n=o.bind({});n.args={...e.args,currentStep:2};const r=o.bind({});r.args={...e.args,currentStep:2,isCompleted:!0};const s=o.bind({});s.args={...e.args,previousIcon:p.jsx("span",{children:"←"}),nextIcon:p.jsx("span",{children:"→"}),doneIcon:p.jsx("span",{children:"✓"})};var u,x,C;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.totalSteps - 1, prevStep + 1);
      if (nextStep === args.totalSteps - 1) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "300px"
  }}>
      <StepperFooter {...args} currentStep={currentStep} onPrevClick={handlePrev} onNextClick={handleNext} nextButtonLabel={isCompleted ? "Done" : "Next"} isCompleted={isCompleted} />
    </div>;
}`,...(C=(x=e.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,h,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.totalSteps - 1, prevStep + 1);
      if (nextStep === args.totalSteps - 1) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "300px"
  }}>
      <StepperFooter {...args} currentStep={currentStep} onPrevClick={handlePrev} onNextClick={handleNext} nextButtonLabel={isCompleted ? "Done" : "Next"} isCompleted={isCompleted} />
    </div>;
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var N,f,I;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.totalSteps - 1, prevStep + 1);
      if (nextStep === args.totalSteps - 1) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "300px"
  }}>
      <StepperFooter {...args} currentStep={currentStep} onPrevClick={handlePrev} onNextClick={handleNext} nextButtonLabel={isCompleted ? "Done" : "Next"} isCompleted={isCompleted} />
    </div>;
}`,...(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var P,b,k;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.totalSteps - 1, prevStep + 1);
      if (nextStep === args.totalSteps - 1) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "300px"
  }}>
      <StepperFooter {...args} currentStep={currentStep} onPrevClick={handlePrev} onNextClick={handleNext} nextButtonLabel={isCompleted ? "Done" : "Next"} isCompleted={isCompleted} />
    </div>;
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var M,D,B;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.totalSteps - 1, prevStep + 1);
      if (nextStep === args.totalSteps - 1) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "300px"
  }}>
      <StepperFooter {...args} currentStep={currentStep} onPrevClick={handlePrev} onNextClick={handleNext} nextButtonLabel={isCompleted ? "Done" : "Next"} isCompleted={isCompleted} />
    </div>;
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const xe=["Default","NextButtonDisabled","LastStep","Completed","CustomIcons"];export{r as Completed,s as CustomIcons,e as Default,n as LastStep,t as NextButtonDisabled,xe as __namedExportsOrder,ue as default};
