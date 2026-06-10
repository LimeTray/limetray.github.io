import{j as o}from"./jsx-runtime-8ae9c9ad.js";import{r as h}from"./index-04c7fd94.js";import{L as i}from"./ltButton-603a60bb.js";import{L as g}from"./index-97640e21.js";import{L as f}from"./ltInput-11ca1aea.js";import{t as e}from"./config-d270d9b6.js";import{L as y}from"./index-9e8f50bb.js";import{g as t}from"./styled-components.browser.esm-b57a6336.js";import"./_commonjsHelpers-725317a4.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./index-019b0ce5.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./isEmpty-0f216811.js";import"./deburr-bb2546ff.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-9f7569d5.js";import"./Card-6ba48e0e.js";import"./requestIdGenerator-f6efc017.js";import"./Input-4003f5c3.js";const pe={title:"Demo Page",tags:["autodocs"]},x=t.div`
  padding: ${e.spacing.xl};
  background-color: ${e.colors.backgroundSecondary};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: ${e.typography.body.fontFamily};
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.sm};
  padding: ${e.spacing.sm} ${e.spacing.md} ${e.spacing.md};
`,C=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.xs};
`,S=t.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e.spacing.sm};
  padding-top: ${e.spacing.sm};
  border-top: 1px solid ${e.colors.border};
`,v=t.div`
  color: ${e.colors.text};
  font-size: ${e.typography.body.fontSize};
  line-height: ${e.typography.body.lineHeight};
`,$=t.span`
  color: ${e.colors.muted};
  font-size: ${e.typography.caption.fontSize};
`,I=t.label`
  display: block;
  color: ${e.colors.text};
  font-size: ${e.typography.caption.fontSize};
  font-weight: ${e.typography.body.fontWeight};
  margin-bottom: ${e.spacing.xs};
`,n=()=>{const[r,a]=h.useState(""),p=u=>{a(u.target.value)},d=()=>{alert(`Saved value: ${r}`)},m=()=>{a("")};return o.jsx(x,{children:o.jsx(g,{width:"500px",heading:"User Profile Settings",subHeading:o.jsx($,{children:"Manage your account preferences and details."}),cardTheme:"ok",body:[],actionBar:o.jsx(o.Fragment,{}),children:o.jsxs(b,{children:[o.jsx(v,{children:"Please update your profile information below. This information will be used for your account verification."}),o.jsxs(C,{children:[o.jsx(I,{htmlFor:"name-input",children:"Full Name"}),o.jsx(f,{id:"name-input",placeholder:"Enter your name",defaultValue:r,onChange:p,icon:o.jsx(y,{className:"icon",useReactIcon:!0,reactIconName:"MdPerson",reactIconSet:"md",size:"small",color:e.colors.muted}),iconPosition:"left"})]}),o.jsxs(S,{children:[o.jsx(i,{label:"Cancel",onClick:m,transparent:!0,color:e.colors.muted}),o.jsx(i,{label:"Save Changes",onClick:d,backgroundColor:e.colors.primary,color:e.colors.white,border:!0,borderStyles:{radius:e.borderRadius.medium,color:e.colors.primary,width:"1px",type:"solid"}})]})]})})})};n.__docgenInfo={description:"",methods:[],displayName:"InteractiveDashboard"};var s,l,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleSave = () => {
    alert(\`Saved value: \${inputValue}\`);
  };
  const handleCancel = () => {
    setInputValue("");
  };
  return <DemoContainer>
            <LtCard width="500px" heading="User Profile Settings" subHeading={<MutedText>
                        Manage your account preferences and details.
                    </MutedText>} cardTheme="ok" body={[]} actionBar={<></>}>
                <CardContentWrapper>
                    <NeutralText>
                        Please update your profile information below. This information will be used for your account verification.
                    </NeutralText>

                    <FormSection>
                        <LabelText htmlFor="name-input">Full Name</LabelText>
                        <LtInput id="name-input" placeholder="Enter your name" defaultValue={inputValue} onChange={handleInputChange} icon={<LtIcon className="icon" useReactIcon reactIconName="MdPerson" reactIconSet="md" size="small" color={theme.colors.muted} />} iconPosition="left" />
                    </FormSection>

                    <ButtonGroup>
                        <LtButton label="Cancel" onClick={handleCancel} transparent color={theme.colors.muted} />
                        <LtButton label="Save Changes" onClick={handleSave} backgroundColor={theme.colors.primary} color={theme.colors.white} border borderStyles={{
            radius: theme.borderRadius.medium,
            color: theme.colors.primary,
            width: "1px",
            type: "solid"
          }} />
                    </ButtonGroup>
                </CardContentWrapper>
            </LtCard>
        </DemoContainer>;
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const de=["InteractiveDashboard"];export{n as InteractiveDashboard,de as __namedExportsOrder,pe as default};
