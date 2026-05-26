import{j as p}from"./jsx-runtime-8ae9c9ad.js";import{r as m}from"./index-04c7fd94.js";import{S as L}from"./stepperFooter-ec037fb4.js";import"./_commonjsHelpers-725317a4.js";import"./ltButton-7f1666b9.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./styled-components.browser.esm-f4af7a4c.js";const ne={title:"StepperFooter",component:L,tags:["autodocs"]},o=a=>{const[F,i]=m.useState(0),[S,c]=m.useState(!1),j=()=>{i(l=>Math.max(0,l-1)),c(!1)},w=()=>{i(l=>{const d=Math.min(a.totalSteps-1,l+1);return d===a.totalSteps-1&&c(!0),d})};return p.jsx("div",{style:{width:"300px"},children:p.jsx(L,{...a,currentStep:F,onPrevClick:j,onNextClick:w,nextButtonLabel:S?"Done":"Next",isCompleted:S})})},e=o.bind({});e.args={totalSteps:3,previousButtonLabel:"Previous",nextButtonLabel:"Next",steptext:"Step"};const t=o.bind({});t.args={...e.args,currentStep:0,isNextDisabled:!0};const n=o.bind({});n.args={...e.args,currentStep:2};const r=o.bind({});r.args={...e.args,currentStep:2,isCompleted:!0};const s=o.bind({});s.args={...e.args,previousIcon:p.jsx("span",{children:"←"}),nextIcon:p.jsx("span",{children:"→"}),doneIcon:p.jsx("span",{children:"✓"})};var u,x,C;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const re=["Default","NextButtonDisabled","LastStep","Completed","CustomIcons"];export{r as Completed,s as CustomIcons,e as Default,n as LastStep,t as NextButtonDisabled,re as __namedExportsOrder,ne as default};
