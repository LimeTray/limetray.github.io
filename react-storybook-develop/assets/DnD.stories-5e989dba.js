import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as C}from"./index-ad58220e.js";import{u as q,a as u,D as N,c as A,S as F,v as G,s as M,K as P,P as L,b as V,C as B,g as W,f as H,h as J}from"./sortable.esm-9bf26abb.js";import{d as T}from"./styled-components.browser.esm-675ea4f2.js";import{u as D}from"./ThemeContext-71b3bf8d.js";import{t as a}from"./config-d270d9b6.js";import{T as g}from"./index-ac3e4a43.js";import"./_commonjsHelpers-de833af9.js";import"./index-4fee7e45.js";import"./Header-81a0b955.js";import"./extends-4c19d496.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./Icon-5cfe3eb1.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./Label-11060fec.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-25182749.js";import"./includes-c2454020.js";import"./Portal-86734c92.js";const Q=T.div`
  display: flex;
  flex-direction: column;
  gap: ${a.spacing.xs};
  width: 100%;
`,O=({items:e,onDragEnd:n,onDragStart:l,children:t,className:d,style:o,"aria-label":p="Sortable list"})=>{D();const c=q(u(L,{activationConstraint:{distance:5}}),u(P,{coordinateGetter:M}));return r.jsx(N,{sensors:c,collisionDetection:A,onDragStart:l,onDragEnd:n,accessibility:{announcements:{onDragStart({active:i}){return`Picked up sortable item ${i.id}.`},onDragOver({active:i,over:s}){return s?`Sortable item ${i.id} was moved over droppable area ${s.id}.`:`Sortable item ${i.id} is no longer over a droppable area.`},onDragEnd({active:i,over:s}){return s?`Sortable item ${i.id} was dropped over droppable area ${s.id}.`:`Sortable item ${i.id} was dropped.`},onDragCancel({active:i}){return`Dragging was cancelled. Sortable item ${i.id} was dropped.`}}},children:r.jsx(F,{items:e.map(i=>i.id),strategy:G,children:r.jsx(Q,{className:`sortable-list ${d||""}`,style:o,role:"list","aria-label":p,children:t})})})},_=O;O.__docgenInfo={description:"",methods:[],displayName:"SortableList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"{ id: string } & Record<string, any>",elements:[{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]}],raw:"Array<{ id: string } & Record<string, any>>"},description:""},onDragEnd:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: DragEndEvent) => void",signature:{arguments:[{type:{name:"DragEndEvent"},name:"event"}],return:{name:"void"}}},description:""},onDragStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: DragStartEvent) => void",signature:{arguments:[{type:{name:"DragStartEvent"},name:"event"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Sortable list'",computed:!1}}}};const K=T.div`
  background-color: ${e=>e.$isDragging?e.$isDark?a.colors.darkModeChipBgActive:a.colors.backgroundSecondary:e.$isDark?a.colors.darkModeBgSecondary:a.colors.white};
  
  color: ${e=>e.$isDark?a.colors.darkModeText:a.colors.text};
  border: ${e=>e.$isDark?`1px solid ${a.colors.darkModeBorder}`:a.border.default};
  border-radius: ${a.borderRadius.medium};
  padding: ${a.padding.medium};
  box-shadow: ${e=>e.$isDragging?a.shadows.medium:a.shadows.small};
  opacity: ${e=>e.$isDragging?.8:1};
  position: relative;
  z-index: ${e=>e.$isDragging?1:"auto"};
  transition: ${e=>e.$isDragging?"none":"box-shadow 0.15s ease, opacity 0.15s ease, background-color 0.15s ease"};
  user-select: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
  
  &:focus-visible {
    outline: 2px solid ${a.colors.primary};
    outline-offset: 2px;
  }
`,U=({id:e,children:n,className:l,disabled:t=!1,style:d,"aria-label":o,"aria-describedby":p})=>{const{theme:c}=D(),i=c==="dark",{attributes:s,listeners:m,setNodeRef:f,transform:h,transition:S,isDragging:v}=V({id:e,disabled:t}),z={...d,transform:B.Transform.toString(h),transition:S};return r.jsx(K,{ref:f,className:`draggable-item ${l||""}`,style:z,$isDragging:v,$isDark:i,...s,...m,role:"listitem","aria-label":o,"aria-describedby":p||s["aria-describedby"],tabIndex:t?-1:0,children:n})},X=({id:e,children:n,className:l,disabled:t=!1,style:d,"aria-label":o,"aria-describedby":p})=>{const{theme:c}=D(),i=c==="dark",{attributes:s,listeners:m,setNodeRef:f,transform:h,isDragging:S}=W({id:e,disabled:t}),v={...d,transform:B.Transform.toString(h)};return r.jsx(K,{ref:f,className:`draggable-item ${l||""}`,style:v,$isDragging:S,$isDark:i,...s,...m,role:"button","aria-label":o,"aria-describedby":p||s["aria-describedby"],tabIndex:t?-1:0,children:n})},x=e=>{const{isSortable:n=!0}=e;return n?r.jsx(U,{...e}):r.jsx(X,{...e})};x.__docgenInfo={description:"",methods:[],displayName:"DraggableItem",props:{id:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isSortable:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const Y=T.div`
  border: 2px dashed ${e=>e.$isOver?a.colors.primary:e.$isDark?a.colors.darkModeBorder:a.colors.border};
  background-color: ${e=>e.$isOver?e.$isDark?a.colors.darkModeChipBgActive:a.colors.backgroundSecondary:"transparent"};
  color: ${e=>e.$isDark?a.colors.darkModeText:a.colors.text};
  border-radius: ${a.borderRadius.medium};
  padding: ${a.padding.large};
  transition: all 0.2s ease;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:focus-visible {
    outline: 2px solid ${a.colors.primary};
    outline-offset: 2px;
  }
`,$=({id:e,children:n,className:l,style:t,disabled:d=!1,"aria-label":o,"aria-describedby":p})=>{const{theme:c}=D(),i=c==="dark",{isOver:s,setNodeRef:m}=H({id:e,disabled:d});return r.jsx(Y,{ref:m,className:`droppable-area ${l||""}`,style:t,$isOver:s,$isDark:i,role:"region","aria-label":o||`Droppable area ${e}`,"aria-describedby":p,tabIndex:0,children:n})};$.__docgenInfo={description:"",methods:[],displayName:"DroppableArea",props:{id:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const Se={title:"DnD",component:_,tags:["autodocs"],parameters:{docs:{description:{component:"Accessible drag and drop primitives (`SortableList`, `DraggableItem`, `DroppableArea`) built on `@dnd-kit`. Keyboard navigation: focus with `Tab`, pick up with `Space`, move with `Arrow` keys, drop with `Space`."}}}},b={render:()=>{const[e,n]=C.useState([{id:"1",content:"Design System Primitives"},{id:"2",content:"Drag and Drop Support"},{id:"3",content:"Keyboard Accessibility"},{id:"4",content:"Theming Tokens & Dark Mode"}]),l=t=>{const{active:d,over:o}=t;o&&d.id!==o.id&&n(p=>{const c=p.findIndex(s=>s.id===d.id),i=p.findIndex(s=>s.id===o.id);return J(p,c,i)})};return r.jsxs("div",{style:{padding:"20px",maxWidth:"500px"},children:[r.jsx(g,{type:"heading",size:"medium",text:"Sortable List",id:"sortable-list-title",style:{marginBottom:"16px"}}),r.jsx(_,{items:e,onDragEnd:l,"aria-label":"Sortable item list",children:e.map(t=>r.jsx(x,{id:t.id,isSortable:!0,"aria-label":`Draggable item ${t.content}`,children:r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r.jsx("span",{style:{marginRight:"16px",cursor:"grab",color:"var(--color-muted)"},"aria-hidden":"true",children:"⠿"}),r.jsx(g,{type:"body",text:t.content,id:`typography-body-${t.id}`})]})},t.id))})]})}},y={render:()=>{const[e,n]=C.useState("origin"),l=q(u(L,{activationConstraint:{distance:5}}),u(P,{coordinateGetter:M})),t=d=>{const{over:o}=d;o&&n(String(o.id))};return r.jsx(N,{sensors:l,collisionDetection:A,onDragEnd:t,children:r.jsxs("div",{style:{display:"flex",gap:"32px",padding:"20px"},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx(g,{type:"heading",size:"small",text:"Origin",id:"origin-typography",style:{marginBottom:"16px"}}),r.jsxs($,{id:"origin","aria-label":"Origin drop area",children:[e==="origin"&&r.jsx(x,{id:"draggable-free",isSortable:!1,"aria-label":"Free draggable item",children:r.jsx(g,{type:"label",text:"Drag me around!",id:"draggable-free-typography"})}),e!=="origin"&&r.jsx("span",{style:{color:"#999"},children:"Drop here to bring back"})]})]}),r.jsxs("div",{style:{flex:1},children:[r.jsx(g,{type:"heading",size:"small",text:"Destination",id:"destination-typography",style:{marginBottom:"16px"}}),r.jsxs($,{id:"destination","aria-label":"Destination drop area",children:[e==="destination"&&r.jsx(x,{id:"draggable-free",isSortable:!1,"aria-label":"Free draggable item",children:r.jsx(g,{type:"label",text:"Drag me around!",id:"draggable-free-typography-dest"})}),e!=="destination"&&r.jsx("span",{style:{color:"#999"},children:"Drop here"})]})]})]})})}};var k,I,j;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: '1',
      content: 'Design System Primitives'
    }, {
      id: '2',
      content: 'Drag and Drop Support'
    }, {
      id: '3',
      content: 'Keyboard Accessibility'
    }, {
      id: '4',
      content: 'Theming Tokens & Dark Mode'
    }]);
    const handleDragEnd = (event: DragEndEvent) => {
      const {
        active,
        over
      } = event;
      if (over && active.id !== over.id) {
        setItems(prevItems => {
          const oldIndex = prevItems.findIndex(i => i.id === active.id);
          const newIndex = prevItems.findIndex(i => i.id === over.id);
          return arrayMove(prevItems, oldIndex, newIndex);
        });
      }
    };
    return <div style={{
      padding: '20px',
      maxWidth: '500px'
    }}>
                <Typography type="heading" size="medium" text="Sortable List" id="sortable-list-title" style={{
        marginBottom: '16px'
      }} />
                <SortableList items={items} onDragEnd={handleDragEnd} aria-label="Sortable item list">
                    {items.map(item => <DraggableItem key={item.id} id={item.id} isSortable={true} aria-label={\`Draggable item \${item.content}\`}>
                            <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
                                <span style={{
              marginRight: '16px',
              cursor: 'grab',
              color: 'var(--color-muted)'
            }} aria-hidden="true">
                                    ⠿
                                </span>
                                <Typography type="body" text={item.content} id={\`typography-body-\${item.id}\`} />
                            </div>
                        </DraggableItem>)}
                </SortableList>
            </div>;
  }
}`,...(j=(I=b.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var w,R,E;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [parent, setParent] = useState<string>('origin');
    const sensors = useSensors(useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5
      }
    }), useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    }));
    const handleDragEnd = (event: DragEndEvent) => {
      const {
        over
      } = event;
      if (over) {
        setParent(String(over.id));
      }
    };
    return <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <div style={{
        display: 'flex',
        gap: '32px',
        padding: '20px'
      }}>
                    <div style={{
          flex: 1
        }}>
                        <Typography type="heading" size="small" text="Origin" id="origin-typography" style={{
            marginBottom: '16px'
          }} />
                        <DroppableArea id="origin" aria-label="Origin drop area">
                            {parent === 'origin' && <DraggableItem id="draggable-free" isSortable={false} aria-label="Free draggable item">
                                    <Typography type="label" text="Drag me around!" id="draggable-free-typography" />
                                </DraggableItem>}
                            {parent !== 'origin' && <span style={{
              color: '#999'
            }}>Drop here to bring back</span>}
                        </DroppableArea>
                    </div>

                    <div style={{
          flex: 1
        }}>
                        <Typography type="heading" size="small" text="Destination" id="destination-typography" style={{
            marginBottom: '16px'
          }} />
                        <DroppableArea id="destination" aria-label="Destination drop area">
                            {parent === 'destination' && <DraggableItem id="draggable-free" isSortable={false} aria-label="Free draggable item">
                                    <Typography type="label" text="Drag me around!" id="draggable-free-typography-dest" />
                                </DraggableItem>}
                            {parent !== 'destination' && <span style={{
              color: '#999'
            }}>Drop here</span>}
                        </DroppableArea>
                    </div>
                </div>
            </DndContext>;
  }
}`,...(E=(R=y.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const ve=["SortableListExample","FreeDragExample"];export{y as FreeDragExample,b as SortableListExample,ve as __namedExportsOrder,Se as default};
