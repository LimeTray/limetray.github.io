import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as h}from"./index-ad58220e.js";import{L as i}from"./ltButton-662e626e.js";import{L as g}from"./index-14b95da5.js";import{L as f}from"./ltInput-944293e8.js";import{t as e}from"./config-d270d9b6.js";import{L as y}from"./index-f03014ac.js";import{d as t}from"./styled-components.browser.esm-675ea4f2.js";import"./_commonjsHelpers-de833af9.js";import"./Button-97fd5a94.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./Icon-5cfe3eb1.js";import"./Label-11060fec.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-25182749.js";import"./includes-c2454020.js";import"./index-4fee7e45.js";import"./Portal-86734c92.js";import"./map-db19bd84.js";import"./Card-def7022a.js";import"./requestIdGenerator-f6efc017.js";import"./Input-94f4c1a5.js";import"./Dropdown-66d5c8fe.js";import"./without-bae35c35.js";import"./isEmpty-f7f0c885.js";import"./deburr-8ac57e57.js";import"./pick-7736bb65.js";import"./_baseSet-4a5e4309.js";import"./index-e8ec4132.js";import"./_arrayReduce-865b0d3f.js";const ie={title:"Demo Page",tags:["autodocs"]},x=t.div`
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const se=["InteractiveDashboard"];export{n as InteractiveDashboard,se as __namedExportsOrder,ie as default};
