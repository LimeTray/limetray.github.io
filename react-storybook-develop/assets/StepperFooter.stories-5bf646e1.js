import{j as p}from"./jsx-runtime-8406ef1e.js";import{r as m}from"./index-ad58220e.js";import{S as L}from"./stepperFooter-69c65538.js";import"./_commonjsHelpers-de833af9.js";import"./ltButton-bd8533d9.js";import"./Button-a1cbfca3.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./Icon-5cfe3eb1.js";import"./Label-78d4db42.js";import"./ModernAutoControlledComponent-ac79fba3.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-e61b253b.js";import"./includes-03b4ffc2.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./Portal-392918f3.js";import"./map-db19bd84.js";import"./styled-components.browser.esm-675ea4f2.js";const te={title:"StepperFooter",component:L,tags:["autodocs"]},o=a=>{const[F,i]=m.useState(0),[S,c]=m.useState(!1),j=()=>{i(l=>Math.max(0,l-1)),c(!1)},w=()=>{i(l=>{const d=Math.min(a.totalSteps-1,l+1);return d===a.totalSteps-1&&c(!0),d})};return p.jsx("div",{style:{width:"300px"},children:p.jsx(L,{...a,currentStep:F,onPrevClick:j,onNextClick:w,nextButtonLabel:S?"Done":"Next",isCompleted:S})})},e=o.bind({});e.args={totalSteps:3,previousButtonLabel:"Previous",nextButtonLabel:"Next",steptext:"Step"};const t=o.bind({});t.args={...e.args,currentStep:0,isNextDisabled:!0};const n=o.bind({});n.args={...e.args,currentStep:2};const r=o.bind({});r.args={...e.args,currentStep:2,isCompleted:!0};const s=o.bind({});s.args={...e.args,previousIcon:p.jsx("span",{children:"←"}),nextIcon:p.jsx("span",{children:"→"}),doneIcon:p.jsx("span",{children:"✓"})};var u,x,C;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const ne=["Default","NextButtonDisabled","LastStep","Completed","CustomIcons"];export{r as Completed,s as CustomIcons,e as Default,n as LastStep,t as NextButtonDisabled,ne as __namedExportsOrder,te as default};
