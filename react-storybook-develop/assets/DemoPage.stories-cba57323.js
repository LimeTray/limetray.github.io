import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as x}from"./index-ad58220e.js";import{L as s}from"./ltButton-3f888cf3.js";import{L as y}from"./index-c86d2f87.js";import{T as n}from"./index-0c2df6d5.js";import{L as g}from"./ltInput-f5f95991.js";import{t as e}from"./config-43c6afbd.js";import{I as f}from"./Icon-370c2d23.js";import{d as o}from"./styled-components.browser.esm-675ea4f2.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./Card-7a020250.js";import"./requestIdGenerator-f6efc017.js";import"./Header-30441d32.js";import"./Input-3f8aa787.js";import"./Dropdown-e3088384.js";import"./without-708f3584.js";import"./isEmpty-b690c58c.js";import"./deburr-94e08562.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./index-c4e29528.js";const ce={title:"Demo Page",tags:["autodocs"]},b=o.div`
  padding: ${e.spacing.xl};
  background-color: ${e.colors.backgroundSecondary};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: ${e.typography.body.fontFamily};
`,C=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.md};
  padding: ${e.spacing.md};
`,v=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.sm};
  margin-top: ${e.spacing.md};
  margin-bottom: ${e.spacing.md};
`,j=o.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e.spacing.sm};
  margin-top: ${e.spacing.md};
`,S=o.span`
  color: ${e.colors.muted};
`,T=o.div`
  color: ${e.colors.text};
`,I=o.div`
  color: ${e.colors.text};
  margin-bottom: ${e.spacing.xs};
`,r=()=>{const[a,i]=x.useState(""),c=h=>{i(h.target.value)},m=()=>{alert(`Saved value: ${a}`)},u=()=>{i("")};return t.jsx(b,{children:t.jsx(y,{width:"500px",heading:"User Profile Settings",subHeading:t.jsx(S,{children:t.jsx(n,{type:"caption",text:"Manage your account preferences and details.",id:"subtitle"})}),cardTheme:"ok",body:[],actionBar:t.jsx(t.Fragment,{}),children:t.jsxs(C,{children:[t.jsx(T,{children:t.jsx(n,{type:"body",text:"Please update your profile information below. This information will be used for your account verification.",id:"body-text"})}),t.jsxs(v,{children:[t.jsx(I,{children:t.jsx(n,{type:"label",text:"Full Name",id:"input-label"})}),t.jsx(g,{placeholder:"Enter your name",defaultValue:a,onChange:c,icon:t.jsx(f,{name:"user"}),iconPosition:"left"})]}),t.jsxs(j,{children:[t.jsx(s,{label:"Cancel",onClick:u,transparent:!0,color:e.colors.error}),t.jsx(s,{label:"Save Changes",onClick:m,backgroundColor:e.colors.primary,color:e.colors.white,border:!0,borderStyles:{radius:e.borderRadius.medium,color:e.colors.primary,width:"1px",type:"solid"}})]})]})})})};r.__docgenInfo={description:"",methods:[],displayName:"InteractiveDashboard"};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
                        <Typography type="caption" text="Manage your account preferences and details." id="subtitle" />
                    </MutedText>} cardTheme="ok" body={[]} actionBar={<></>}>
                <CardContentWrapper>
                    <BodyText>
                        <Typography type="body" text="Please update your profile information below. This information will be used for your account verification." id="body-text" />
                    </BodyText>

                    <FormSection>
                        <LabelText>
                            <Typography type="label" text="Full Name" id="input-label" />
                        </LabelText>
                        <LtInput placeholder="Enter your name" defaultValue={inputValue} onChange={handleInputChange} icon={<Icon name="user" />} iconPosition="left" />
                    </FormSection>

                    <ButtonGroup>
                        <LtButton label="Cancel" onClick={handleCancel} transparent color={theme.colors.error} />
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const me=["InteractiveDashboard"];export{r as InteractiveDashboard,me as __namedExportsOrder,ce as default};
