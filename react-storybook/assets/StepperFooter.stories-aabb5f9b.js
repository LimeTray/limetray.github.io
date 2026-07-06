import{j as p}from"./jsx-runtime-8406ef1e.js";import{r as d}from"./index-ad58220e.js";import{S as L}from"./stepperFooter-bf596f6f.js";import"./_commonjsHelpers-de833af9.js";import"./ltButton-103c141c.js";import"./Button-4d423377.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Icon-7990d6af.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";import"./styled-components.browser.esm-9c5c32f2.js";import"./config-1dd99552.js";import"./index-ea508ff6.js";import"./Dropdown-50ab2943.js";import"./without-5fd6c2fa.js";import"./isEmpty-38656364.js";import"./deburr-dcf23c3e.js";import"./pick-19a3cad7.js";import"./_baseSet-c85e4edd.js";import"./index-d2fcf037.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-5d45ebc5.js";import"./index-c869fee8.js";const ve={title:"StepperFooter",component:L,tags:["autodocs"]},o=a=>{const[F,l]=d.useState(0),[m,S]=d.useState(!1),j=()=>{l(i=>Math.max(0,i-1)),S(!1)},w=()=>{l(i=>{const c=Math.min(a.totalSteps-1,i+1);return c===a.totalSteps-1&&S(!0),c})};return p.jsx("div",{style:{width:"300px"},children:p.jsx(L,{...a,currentStep:F,onPrevClick:j,onNextClick:w,nextButtonLabel:m?"Done":"Next",isCompleted:m})})},e=o.bind({});e.args={totalSteps:3,previousButtonLabel:"Previous",nextButtonLabel:"Next",steptext:"Step"};const t=o.bind({});t.args={...e.args,currentStep:0,isNextDisabled:!0};const r=o.bind({});r.args={...e.args,currentStep:2};const n=o.bind({});n.args={...e.args,currentStep:2,isCompleted:!0};const s=o.bind({});s.args={...e.args,previousIcon:p.jsx("span",{children:"←"}),nextIcon:p.jsx("span",{children:"→"}),doneIcon:p.jsx("span",{children:"✓"})};var u,x,C;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var N,f,I;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(I=(f=r.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var P,b,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var M,D,B;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const he=["Default","NextButtonDisabled","LastStep","Completed","CustomIcons"];export{n as Completed,s as CustomIcons,e as Default,r as LastStep,t as NextButtonDisabled,he as __namedExportsOrder,ve as default};
