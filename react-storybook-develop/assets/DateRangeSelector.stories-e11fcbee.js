import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as g}from"./index-ad58220e.js";import{T as Pe}from"./tickIcon-5d45ebc5.js";import{C as Be}from"./closeIcon-fe6dfcab.js";import{I as D}from"./Icon-33b7fdc8.js";import{S as Bt}from"./stringConstants-f1def6f8.js";import{a as Vt}from"./appConstants-0f4a1d00.js";import{m as j,d as r,l as k}from"./styled-components.browser.esm-675ea4f2.js";import{b as Ze}from"./index-4fee7e45.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";const Rt=({width:e,height:i,...c})=>{const f={svg:{display:"block",width:e||"100%",height:i||"100%",stroke:"#6b7280",fill:"#6b7280"},rect:{fill:"none",strokeWidth:"32px"},path:{fill:"none",strokeWidth:"32px"}};return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:f.svg,...c,children:[n.jsx("rect",{strokeLinejoin:"round",x:"48",y:"80",width:"416",height:"384",rx:"48",style:f.rect}),n.jsx("circle",{cx:"296",cy:"232",r:"24"}),n.jsx("circle",{cx:"376",cy:"232",r:"24"}),n.jsx("circle",{cx:"296",cy:"312",r:"24"}),n.jsx("circle",{cx:"376",cy:"312",r:"24"}),n.jsx("circle",{cx:"136",cy:"312",r:"24"}),n.jsx("circle",{cx:"216",cy:"312",r:"24"}),n.jsx("circle",{cx:"136",cy:"392",r:"24"}),n.jsx("circle",{cx:"216",cy:"392",r:"24"}),n.jsx("circle",{cx:"296",cy:"392",r:"24"}),n.jsx("path",{strokeLinejoin:"round",strokeLinecap:"round",d:"M128 48v32M384 48v32",style:f.path}),n.jsx("path",{strokeLinejoin:"round",d:"M464 160H48",style:f.path})]})};Rt.__docgenInfo={description:"",methods:[],displayName:"CalendarOutlineIcon",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}},composes:["SVGProps"]};const Zt=j`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Xt=j`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;j`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;const Jt=j`
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`,ea=j`
  0% { background-color: rgba(59, 130, 246, 0.2); }
  100% { background-color: #e6ecff; }
`,na=j`
  0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.7; transform: translateX(-50%) scale(1.2); }
`,ta=j`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,aa=j`
  0% { background-color: rgba(59, 130, 246, 0.2); }
  100% { background-color: rgba(59, 130, 246, 0.05); }
`,sa=r.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.3s ease;
  z-index: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif;

  .range-selector-icon{
    margin: 0;
  }
`,ze=r.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.$isMobile?"12px 16px":"8px 12px"};
  border: 1px solid ${e=>{var i;return(i=e.$customStyles)!=null&&i.borderColor?e.$customStyles.borderColor:e.$hasError?"#ef4444":e.$isOpen?"#3b82f6":"#d1d5db"}};
  border-radius: ${e=>{var i;return((i=e.$customStyles)==null?void 0:i.borderRadius)||(e.$isMobile?"8px":"6px")}};
  background-color: ${e=>{var i;return(i=e.$customStyles)!=null&&i.backgroundColor?e.$customStyles.backgroundColor:e.$isDisabled?"#f9fafb":"#fff"}};
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${e=>e.$isDisabled?.6:1};

  /* Apply custom styles */
  ${e=>e.$customStyles&&Object.entries(e.$customStyles).map(([i,c])=>["borderColor","borderRadius","backgroundColor"].includes(i)?"":`${i.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${c};`).join("")}

  &:hover {
    border-color: ${e=>{var i;return(i=e.$customStyles)!=null&&i.borderColor?e.$customStyles.borderColor:e.$hasError?"#dc2626":e.$isDisabled?"#d1d5db":"#9ca3af"}};
    box-shadow: ${e=>{var i;return e.$isDisabled?"none":((i=e.$customStyles)==null?void 0:i.boxShadow)||"0 2px 4px rgba(0, 0, 0, 0.1)"}};
  }

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    outline: none;
  }
`,ra=r.div`
  margin-right: 10px;
  color: #6b7280;
  font-size: ${e=>e.$isMobile?"18px":"16px"};
  transition: color 0.2s ease;

  ${ze}:hover & {
    color: #3b82f6;
  }
`,oa=r.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  color: #1f2937;
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  transition: color 0.2s ease;
`,ia=r.div`
  margin-left: 8px;
  color: #6b7280;
  font-size: 16px;
  transition: transform 0.2s ease, color 0.2s ease;

  ${ze}:hover & {
    color: #3b82f6;
  }

  transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)"};
`,Xe=r.div`
  background-color: white;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"8px"};
  box-shadow: ${e=>e.$isMobile?"0 -4px 20px rgba(0, 0, 0, 0.15)":"0 4px 20px rgba(0, 0, 0, 0.15)"};
  margin-top: 8px;
  z-index: 9999;
  overflow: hidden;
  position: ${e=>e.$isMobile?"fixed":"absolute"};
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.$isMobile&&k`
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
    z-index: 99999;
    animation: ${Xt} 0.3s ease-out;
  `}
`,Je=r.div`
  width: 100%;
  overflow: hidden;
  max-height: 85vh;
  overflow-y: auto;
  background-color: white;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"8px"};

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 4px;
    transition: background 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bfc6d1;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`,en=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isMobile?"16px":"12px 16px"};
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
  position: ${e=>e.$isMobile?"sticky":"static"};
  top: ${e=>e.$isMobile?"0":"auto"};
  z-index: 10;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"0"};
`,nn=r.h4`
  margin: 0;
  font-size: ${e=>e.$isMobile?"16px":"14px"};
  font-weight: 600;
  color: #111827;
`,tn=r.button`
  background: transparent;
  border: none;
  padding: ${e=>e.$isMobile?"8px":"6px"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.$isMobile?"18px":"16px"};
  cursor: pointer;
  color: #6b7280;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,an=r.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: white;
`,sn=r.div`
  flex: 1;
  margin-bottom: 0;
  min-width: 0;

  @media (max-width: 768px) {
    padding: 5px 12px;
    border-right: none;
  }
`,rn=r.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background-color: white;
  padding: 16px;
  position: relative;
`,ye=r.div`
  position: absolute;
  z-index: 10;
  top: 8px;
  ${e=>e.$position==="left"?"left: 16px;":"right: 16px;"}
`,we=r.button`
  background: #f3f4f6;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e5e7eb;
    color: #111827;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,la=r.div`
  flex: 1;
  min-width: 240px;
`,ca=r.div`
  text-align: center;
  font-size: 14px;
  margin: 0 0 12px 0;
  color: #111827;
  font-weight: 600;
`,da=r.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin-bottom: 8px;
`,ua=r.div`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  padding: 8px 0;
`,ga=r.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
`,pa=r.div`
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  color: ${e=>e.$isDisabled||!e.$isCurrentMonth?"#9ca3af":e.$isSelected?"white":"#111827"};
  position: relative;
  background: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":e.$isInRange?"#e6ecff":e.$isInHoverRange?"#edf2ff":"#f9fafb"};
  transition: all 0.2s ease;
  border-radius: 0;
  z-index: ${e=>e.$isEnd?3:e.$isSelected?2:1};
  opacity: ${e=>e.$isDisabled?.5:1};

  &:hover {
    background-color: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":"rgba(59, 130, 246, 0.1)"};
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>e.$isDisabled?"none":"0 0 0 3px rgba(59, 130, 246, 0.2)"};
  }

  ${e=>e.$isSelected&&!e.$isDisabled&&k`
    animation: ${Jt} 0.3s ease-in-out;
  `}

  ${e=>e.$isInRange&&!e.$isDisabled&&k`
    animation: ${ea} 0.3s ease-in-out;
  `}

  ${e=>e.$isToday&&!e.$isDisabled&&k`
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background-color: #4f7bff;
      border-radius: 50%;
      animation: ${na} 2s ease-in-out infinite;
    }
  `}
`,on=r.div`
  width: 180px;
  border-left: 1px solid #e5e7eb;
  background-color: #f9fafb;
  overflow-y: auto;
  max-height: 500px;
`,ha=r.div`
  width: 100%;
  background-color: white;
  border-radius: ${e=>(e.$isMobile,"8px")};
  box-shadow: ${e=>e.$isMobile?"0 4px 15px rgba(0, 0, 0, 0.1)":"0 2px 10px rgba(0, 0, 0, 0.12)"};
  z-index: 10000;
  opacity: ${e=>e.$isOpen?1:0};
  transform: translateY(${e=>e.$isOpen?"0":"-10px"});
  transition: all 0.2s ease;
  animation: ${Zt} 0.15s ease-out;
  border: ${e=>e.$isMobile?"1px solid #e5e7eb":"none"};
  margin-top: 4px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  max-height: 80vh;
  overflow-y: auto;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 4px;
    transition: background 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bfc6d1;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`,qe=r.ul`
  list-style: none;
  padding: 4px 0;
  margin: 0;
`,He=r.li`
  display: flex;
  align-items: center;
  padding: ${e=>e.$isMobile?"12px 16px":"10px 16px"};
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  color: ${e=>e.$isActive?"#3b82f6":"#374151"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  background-color: ${e=>e.$isActive?"rgba(59, 130, 246, 0.05)":"transparent"};
  font-weight: ${e=>e.$isActive?"500":"normal"};

  &:hover {
    background-color: rgba(59, 130, 246, 0.05);
  }

  &:focus {
    outline: none;
    background-color: rgba(59, 130, 246, 0.1);
    box-shadow: inset 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  ${e=>e.$isActive&&k`
    animation: ${aa} 0.3s ease-in-out;
  `}

  ${e=>e.$isCustom&&k`
    border-top: 1px solid #e5e7eb;
    margin-top: 4px;
    padding-top: 12px;
    color: #3b82f6;
    font-weight: 500;
  `}
`,Ue=r.span`
  width: 20px;
  margin-right: ${e=>e.$isMobile?"12px":"8px"};
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s ease;
`,ln=r.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.$isMobile?"16px":"12px"};
  padding: ${e=>e.$isMobile?"16px":"12px 16px"};
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
  position: sticky;
  bottom: 0;
  z-index: 10;
`,Se=r.button`
  padding: 12px 16px;
  border-radius: 6px;
  font-size: ${e=>e.$isMobile?"16px":"14px"};
  font-weight: 500;
  cursor: ${e=>e.$isLoading?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  flex: 1;

  ${e=>e.$variant==="cancel"&&k`
    background-color: transparent;
    border: 1px solid #d1d5db;
    color: #4b5563;

    &:hover {
      background-color: #f3f4f6;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `}

  ${e=>e.$variant==="apply"&&k`
    background-color: #3b82f6;
    border: 1px solid #3b82f6;
    color: white;

    &:hover {
      background-color: #2563eb;
      box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: none;
    }

    ${e.$isLoading&&k`
      color: transparent;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        margin: -8px 0 0 -8px;
        border: 2px solid transparent;
        border-top: 2px solid white;
        border-radius: 50%;
        animation: ${ta} 1s linear infinite;
      }
    `}
  `}
`,cn=r.div`
  border-top: 1px solid #e5e7eb;
  padding: ${e=>(e.$isMobile,"16px")};
  background-color: white;
`,dn=r.div`
  display: flex;
  gap: ${e=>e.$isMobile?"20px":"24px"};
  flex-direction: ${e=>(e.$isMobile,"row")};

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`,$e=r.div`
  flex: 1;
  max-width: ${e=>e.$isMobile?"100%":"300px"};
  display: flex;
  flex-direction: column;
`,Ce=r.div`
  font-size: 14px;
  color: #111827;
  margin-bottom: 8px;
  font-weight: 500;
`,Ee=r.input`
  padding: 8px 12px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#d1d5db"};
  border-radius: 6px;
  font-size: ${e=>e.$isMobile?"16px":"14px"};
  background-color: white;
  color: #111827;
  flex: 1;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: ${e=>e.$hasError?"#dc2626":"#9ca3af"};
  }
`,un=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #6b7280;
  padding: ${e=>e.$isMobile?"8px 0":"0 16px"};
  margin-top: ${e=>e.$isMobile?"0":"22px"};
`,gn=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.$isMobile?"16px":"8px 0"};
  border-bottom: 1px solid #e5e7eb;
`,Ae=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Me=r.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
`,ke=r.div`
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  font-weight: 500;
  color: #111827;
`,pn=r.div`
  margin: 0 16px;
  font-size: 16px;
  color: #6b7280;
`,hn=r.div`
  padding: 16px;
  width: 100%;
`,mn=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,_e=r.button`
  background: #f3f4f6;
  border: none;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e5e7eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,bn=r.span`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`,fn=r.div`
  width: 100%;
`,ma=r.div`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(31, 41, 55, 0.45); // semi-transparent dark
  transition: opacity 0.2s;
`,{DATE_RANGE_SELECTOR:{QUICK_OPTIONS:M,DAYS_OF_WEEK:Y},DATE_RANGE_SELECTOR:m}=Bt,{DATE_RANGE_QUICK_OPTIONS:l}=Vt,xn=(e,i)=>{const c=new Date(e);return c.setMonth(c.getMonth()+i),c},W=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),Dn=e=>{try{let i=e;return e.split(":").length===2&&(i=`${e}:00`),new Date(`2000-01-01T${i}`).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}catch{return e}},ge=(e,i)=>e.getFullYear()===i.getFullYear()&&e.getMonth()===i.getMonth()&&e.getDate()===i.getDate(),vn=(e,i,c)=>{const f=new Date(e.getFullYear(),e.getMonth(),e.getDate()),y=new Date(i.getFullYear(),i.getMonth(),i.getDate()),V=new Date(c.getFullYear(),c.getMonth(),c.getDate());return f>=y&&f<=V},N=()=>{const e=new Date,i=e.getHours().toString().padStart(2,"0"),c=e.getMinutes().toString().padStart(2,"0");return`${i}:${c}`},Tn=(e,i)=>{const[c,f]=i.split(":").map(Number),y=new Date(e);return y.setHours(c,f,0,0),y},Yt=({value:e,onChange:i,includeTime:c=!1,disabled:f=!1,error:y=!1,popoverTitle:V,minDate:R,customStyles:It={}})=>{const[x,w]=g.useState(!1),[ie,le]=g.useState(!1),[b,_]=g.useState(new Date),[v,S]=g.useState(new Date),[Ke,Wt]=g.useState(null),[Oe,je]=g.useState(!1),[T,Ve]=g.useState(new Date),[Lt,Pt]=g.useState(""),Re=g.useRef(null),he=g.useRef(null),Ye=g.useRef(null),[s,qt]=g.useState(window.innerWidth<768),me=[{value:l.TODAY,label:M.TODAY},{value:l.YESTERDAY,label:M.YESTERDAY},{value:l.LAST_7_DAYS,label:M.LAST_7_DAYS},{value:l.LAST_14_DAYS,label:M.LAST_14_DAYS},{value:l.LAST_30_DAYS,label:M.LAST_30_DAYS},{value:l.THIS_WEEK,label:M.THIS_WEEK},{value:l.LAST_WEEK,label:M.LAST_WEEK},{value:l.THIS_MONTH,label:M.THIS_MONTH},{value:l.LAST_MONTH,label:M.LAST_MONTH}];s&&me.push({value:l.CUSTOM,label:m.CUSTOM_RANGE});const[ce,$]=g.useState("00:00"),[de,C]=g.useState(N()),[E,be]=g.useState(typeof e=="string"&&Object.values(l).includes(e)?e:null);g.useEffect(()=>{typeof e=="string"&&Object.values(l).includes(e)?be(e):be(null)},[e]),g.useEffect(()=>{const t=()=>{qt(window.innerWidth<768)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),g.useEffect(()=>{if(!e||e===l.TODAY){const t=new Date;_(t),S(t),c&&($("00:00"),C(N()))}else if(typeof e=="string"&&e.startsWith("custom_")){const t=e.split("_");t.length>=3&&(_(new Date(t[1])),S(new Date(t[2])),c&&t.length>=5?($(t[3]),C(t[4])):c&&($("00:00"),C(N())))}else if(typeof e=="number"){const t=new Date(e);_(t),S(t),c&&($("00:00"),C(N()))}else if(typeof e=="object"&&e!==null&&"startEpoch"in e)_(new Date(e.startDate)),S(new Date(e.endDate)),c&&e.startTime&&e.endTime?($(e.startTime),C(e.endTime)):c&&($("00:00"),C(N()));else if(typeof e=="string"){const t=new Date;let a=new Date(t),o=new Date(t);switch(e){case l.YESTERDAY:a.setDate(t.getDate()-1),o.setDate(t.getDate()-1);break;case l.LAST_7_DAYS:a.setDate(t.getDate()-6);break;case l.LAST_14_DAYS:a.setDate(t.getDate()-13);break;case l.LAST_30_DAYS:a.setDate(t.getDate()-29);break;case l.THIS_WEEK:{const u=t.getDay();a.setDate(t.getDate()-u),o.setDate(a.getDate()+6);break}case l.LAST_WEEK:{const u=t.getDay();a.setDate(t.getDate()-u-7),o.setDate(a.getDate()+6);break}case l.THIS_MONTH:{a=new Date(t.getFullYear(),t.getMonth(),1),o=new Date(t.getFullYear(),t.getMonth()+1,0);break}case l.LAST_MONTH:{a=new Date(t.getFullYear(),t.getMonth()-1,1),o=new Date(t.getFullYear(),t.getMonth(),0);break}}_(a),S(o),c&&($("00:00"),C(N()))}Ve(new Date(b))},[e,c]),g.useEffect(()=>{Ht()},[b,v]),g.useEffect(()=>{const t=a=>{x&&he.current&&!he.current.contains(a.target)&&Re.current&&!Re.current.contains(a.target)&&w(!1),ie&&Ye.current&&!Ye.current.contains(a.target)&&!a.composedPath().some(o=>o instanceof HTMLElement&&o.className&&o.className.toString().includes("quickOptionsToggle"))&&le(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[x,ie]);const Ht=()=>{const t=W(b),a=W(v);let o="";if(ge(b,v)?o=t:o=`${t} - ${a}`,c){const u=Dn(ce),h=Dn(de);ge(b,v)?o+=` (${u} - ${h})`:o+=` (${u} to ${h})`}Pt(o)},Ne=t=>R?t<new Date(R.getFullYear(),R.getMonth(),R.getDate()):!1,Ut=t=>{Ne(t)||(Oe?(t<b?(S(b),_(t)):S(t),je(!1)):(_(t),S(t),je(!0)))},zt=t=>{Oe&&!Ne(t)&&Wt(t)},fe=()=>{Ve(t=>{const a=new Date(t);return a.setMonth(a.getMonth()-1),R&&a<new Date(R.getFullYear(),R.getMonth(),1)?t:a})},xe=()=>{Ve(t=>{const a=new Date(t);return a.setMonth(a.getMonth()+1),a})},Qe=()=>{let t,a;if(c){const u=Tn(b,ce),h=Tn(v,de);t=u.getTime(),a=h.getTime()}else{const u=new Date(b);u.setHours(0,0,0,0);const h=new Date(v);h.setHours(23,59,59,999),t=u.getTime(),a=h.getTime()}const o={startEpoch:t,endEpoch:a,startDate:b.toISOString(),endDate:v.toISOString(),startTime:c?ce:null,endTime:c?de:null};i(o),w(!1)},Ie=t=>{if(t===l.CUSTOM){le(!1),je(!1),w(!0),be(null);return}const a=new Date;let o=new Date(a),u=new Date(a);switch(t){case l.TODAY:break;case l.YESTERDAY:o.setDate(a.getDate()-1),u.setDate(a.getDate()-1);break;case l.LAST_7_DAYS:o.setDate(a.getDate()-6);break;case l.LAST_14_DAYS:o.setDate(a.getDate()-13);break;case l.LAST_30_DAYS:o.setDate(a.getDate()-29);break;case l.THIS_WEEK:{const h=a.getDay();o.setDate(a.getDate()-h),u.setDate(o.getDate()+6);break}case l.LAST_WEEK:{const h=a.getDay();o.setDate(a.getDate()-h-7),u.setDate(o.getDate()+6);break}case l.THIS_MONTH:{o=new Date(a.getFullYear(),a.getMonth(),1),u=new Date(a.getFullYear(),a.getMonth()+1,0);break}case l.LAST_MONTH:{o=new Date(a.getFullYear(),a.getMonth()-1,1),u=new Date(a.getFullYear(),a.getMonth(),0);break}}_(o),S(u),c&&($("00:00"),C(N())),le(!1),be(t)},Kt=()=>{s?(le(!ie),w(!1)):(w(!x),le(!1))},Qt=t=>{const a=t.getFullYear(),o=t.getMonth(),h=new Date(a,o,1).getDay(),We=new Date(a,o+1,0).getDate(),ve=h,Te=[];if(ve>0){const Fe=new Date(a,o,0).getDate();for(let Le=Fe-ve+1;Le<=Fe;Le++)Te.push(new Date(a,o-1,Le))}const ue=[];for(let O=1;O<=We;O++)ue.push(new Date(a,o,O));const Ge=[],Ft=42-Te.length-ue.length;for(let O=1;O<=Ft;O++)Ge.push(new Date(a,o+1,O));return[...Te,...ue,...Ge]},Gt=(t,a=!0)=>{const o=ge(t,b),u=ge(t,v),h=o||u,A=Ne(t),We=vn(t,b,v)&&!h,ve=!!(Oe&&Ke&&!h&&!A&&vn(t,b,Ke)&&t>b),ue=ge(t,new Date);return n.jsx(pa,{$isCurrentMonth:a,$isSelected:h,$isStart:o,$isEnd:u,$isInRange:We,$isInHoverRange:ve,$isToday:ue,$isMobile:s,$isDisabled:A,onClick:()=>Ut(t),onMouseEnter:()=>zt(t),children:t.getDate()},t.toISOString())},I=t=>{const a=t.toLocaleString("default",{month:"long"}),o=t.getFullYear(),u=Qt(t),h=[Y.SUNDAY,Y.MONDAY,Y.TUESDAY,Y.WEDNESDAY,Y.THURSDAY,Y.FRIDAY,Y.SATURDAY];return n.jsxs(la,{children:[!s&&n.jsx("div",{children:n.jsxs(ca,{children:[a," ",o]})}),n.jsx(da,{children:h.map(A=>n.jsx(ua,{children:A},A))}),n.jsx(ga,{children:u.map(A=>Gt(A,A.getMonth()===t.getMonth()))})]})},De=(t,a)=>{a?$(t):C(t)};return g.useEffect(()=>(s&&x?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s,x]),n.jsxs(sa,{children:[n.jsxs(ze,{$isMobile:s,$isOpen:x,$hasError:y,$isDisabled:f,$customStyles:It,onClick:f?void 0:Kt,ref:Re,children:[n.jsx(ra,{$isMobile:s,children:n.jsx(Rt,{width:"20px"})}),n.jsx(oa,{$isMobile:s,children:Lt}),n.jsx(ia,{$isOpen:x,children:n.jsx(D,{name:"chevron down",className:"range-selector-icon"})})]}),s&&ie&&n.jsx(ha,{$isMobile:s,$isOpen:ie,ref:Ye,children:n.jsx(qe,{children:me.map(t=>n.jsxs(He,{$isActive:E===t.value,$isCustom:t.value===l.CUSTOM,$isMobile:s,onClick:()=>Ie(t.value),children:[n.jsxs(Ue,{$isMobile:s,children:[E===t.value&&n.jsx(Pe,{fill:"#3b82f6"}),t.value===l.CUSTOM&&E!==t.value&&n.jsx(D,{name:"calendar outline",className:"range-selector-icon"})]}),t.label]},t.value))})}),s&&x&&Ze.createPortal(n.jsx(ma,{}),document.body),s&&x&&Ze.createPortal(n.jsx(Xe,{$isMobile:s,$isOpen:x,ref:he,children:n.jsxs(Je,{$isMobile:s,children:[n.jsxs(en,{$isMobile:s,children:[n.jsx(nn,{$isMobile:s,children:V||m.SELECT_DATE_RANGE}),n.jsx(tn,{$isMobile:s,onClick:()=>w(!1),children:n.jsx(Be,{style:{width:"10px",height:"10px"},strokeColor:"#6b7280"})})]}),n.jsxs("div",{children:[n.jsxs(an,{children:[n.jsxs(sn,{children:[n.jsxs(gn,{$isMobile:s,children:[n.jsxs(Ae,{children:[n.jsx(Me,{$isMobile:s,children:m.START_DATE}),n.jsx(ke,{$isMobile:s,children:W(b)})]}),n.jsx(pn,{children:"-"}),n.jsxs(Ae,{children:[n.jsx(Me,{$isMobile:s,children:m.END_DATE}),n.jsx(ke,{$isMobile:s,children:W(v)})]})]}),s?n.jsxs(hn,{children:[n.jsxs(mn,{children:[n.jsx(_e,{onClick:fe,children:n.jsx(D,{name:"chevron left",className:"range-selector-icon"})}),n.jsxs(bn,{children:[T.toLocaleString("default",{month:"long"})," ",T.getFullYear()]}),n.jsx(_e,{onClick:xe,children:n.jsx(D,{name:"chevron right",className:"range-selector-icon"})})]}),n.jsx(fn,{children:I(T)})]}):n.jsxs(rn,{children:[n.jsx(ye,{$position:"left",children:n.jsx(we,{onClick:fe,children:n.jsx(D,{name:"chevron left",className:"range-selector-icon"})})}),I(T),I(xn(T,1)),n.jsx(ye,{$position:"right",children:n.jsx(we,{onClick:xe,children:n.jsx(D,{name:"chevron right",className:"range-selector-icon"})})})]}),c&&n.jsx(cn,{$isMobile:s,children:n.jsxs(dn,{$isMobile:s,children:[n.jsxs($e,{$isMobile:s,children:[n.jsx(Ce,{children:m.START_TIME}),n.jsx(Ee,{type:"time",$isMobile:s,value:ce,onChange:t=>De(t.target.value,!0)})]}),n.jsx(un,{$isMobile:s,children:m.TO}),n.jsxs($e,{$isMobile:s,children:[n.jsx(Ce,{children:m.END_TIME}),n.jsx(Ee,{type:"time",$isMobile:s,value:de,onChange:t=>De(t.target.value,!1)})]})]})})]}),!s&&n.jsx(on,{children:n.jsx(qe,{children:me.map(t=>n.jsxs(He,{$isActive:E===t.value,$isCustom:t.value===l.CUSTOM,$isMobile:!1,onClick:()=>Ie(t.value),children:[n.jsxs(Ue,{$isMobile:!1,children:[E===t.value&&n.jsx(Pe,{fill:"#3b82f6"}),t.value===l.CUSTOM&&E!==t.value&&n.jsx(D,{name:"calendar outline",className:"range-selector-icon"})]}),t.label]},t.value))})})]}),n.jsxs(ln,{$isMobile:s,children:[n.jsx(Se,{$variant:"cancel",$isMobile:s,onClick:()=>w(!1),children:m.CANCEL}),n.jsx(Se,{$variant:"apply",$isMobile:s,onClick:Qe,children:m.APPLY})]})]})]})}),document.body),!s&&x&&n.jsx(Xe,{$isMobile:s,$isOpen:x,ref:he,children:n.jsxs(Je,{$isMobile:s,children:[n.jsxs(en,{$isMobile:s,children:[n.jsx(nn,{$isMobile:s,children:V||m.SELECT_DATE_RANGE}),n.jsx(tn,{$isMobile:s,onClick:()=>w(!1),children:n.jsx(Be,{style:{width:"10px",height:"10px"},strokeColor:"#6b7280"})})]}),n.jsxs("div",{children:[n.jsxs(an,{children:[n.jsxs(sn,{children:[n.jsxs(gn,{$isMobile:s,children:[n.jsxs(Ae,{children:[n.jsx(Me,{$isMobile:s,children:m.START_DATE}),n.jsx(ke,{$isMobile:s,children:W(b)})]}),n.jsx(pn,{children:"-"}),n.jsxs(Ae,{children:[n.jsx(Me,{$isMobile:s,children:m.END_DATE}),n.jsx(ke,{$isMobile:s,children:W(v)})]})]}),s?n.jsxs(hn,{children:[n.jsxs(mn,{children:[n.jsx(_e,{onClick:fe,children:n.jsx(D,{name:"chevron left",className:"range-selector-icon"})}),n.jsxs(bn,{children:[T.toLocaleString("default",{month:"long"})," ",T.getFullYear()]}),n.jsx(_e,{onClick:xe,children:n.jsx(D,{name:"chevron right",className:"range-selector-icon"})})]}),n.jsx(fn,{children:I(T)})]}):n.jsxs(rn,{children:[n.jsx(ye,{$position:"left",children:n.jsx(we,{onClick:fe,children:n.jsx(D,{name:"chevron left",className:"range-selector-icon"})})}),I(T),I(xn(T,1)),n.jsx(ye,{$position:"right",children:n.jsx(we,{onClick:xe,children:n.jsx(D,{name:"chevron right",className:"range-selector-icon"})})})]}),c&&n.jsx(cn,{$isMobile:s,children:n.jsxs(dn,{$isMobile:s,children:[n.jsxs($e,{$isMobile:s,children:[n.jsx(Ce,{children:m.START_TIME}),n.jsx(Ee,{type:"time",$isMobile:s,value:ce,onChange:t=>De(t.target.value,!0)})]}),n.jsx(un,{$isMobile:s,children:m.TO}),n.jsxs($e,{$isMobile:s,children:[n.jsx(Ce,{children:m.END_TIME}),n.jsx(Ee,{type:"time",$isMobile:s,value:de,onChange:t=>De(t.target.value,!1)})]})]})})]}),!s&&n.jsx(on,{children:n.jsx(qe,{children:me.map(t=>n.jsxs(He,{$isActive:E===t.value,$isCustom:t.value===l.CUSTOM,$isMobile:!1,onClick:()=>Ie(t.value),children:[n.jsxs(Ue,{$isMobile:!1,children:[E===t.value&&n.jsx(Pe,{fill:"#3b82f6"}),t.value===l.CUSTOM&&E!==t.value&&n.jsx(D,{name:"calendar outline",className:"range-selector-icon"})]}),t.label]},t.value))})})]}),n.jsxs(ln,{$isMobile:s,children:[n.jsx(Se,{$variant:"cancel",$isMobile:s,onClick:()=>w(!1),children:m.CANCEL}),n.jsx(Se,{$variant:"apply",$isMobile:s,onClick:Qe,children:m.APPLY})]})]})]})})]})},Nt=Yt;Yt.__docgenInfo={description:"",methods:[],displayName:"DateRangeSelector",props:{value:{required:!1,tsType:{name:"union",raw:`string | number | {
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}`,elements:[{name:"string"},{name:"number"},{name:"signature",type:"object",raw:`{
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}`,signature:{properties:[{key:"startEpoch",value:{name:"number",required:!0}},{key:"endEpoch",value:{name:"number",required:!0}},{key:"startDate",value:{name:"string",required:!0}},{key:"endDate",value:{name:"string",required:!0}},{key:"startTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(value: {
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}`,signature:{properties:[{key:"startEpoch",value:{name:"number",required:!0}},{key:"endEpoch",value:{name:"number",required:!0}},{key:"startDate",value:{name:"string",required:!0}},{key:"endDate",value:{name:"string",required:!0}},{key:"startTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""},includeTime:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},popoverTitle:{required:!1,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},customStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  boxShadow?: string;
  [key: string]: any;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}},{key:"maxWidth",value:{name:"string",required:!1}},{key:"maxHeight",value:{name:"string",required:!1}},{key:"minWidth",value:{name:"string",required:!1}},{key:"minHeight",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}},{key:"margin",value:{name:"string",required:!1}},{key:"backgroundColor",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const{DATE_RANGE_QUICK_OPTIONS:d}=Vt,Oa={component:Nt,title:"DateRangeSelector",tags:["autodocs"],argTypes:{value:{control:"select",options:[d.TODAY,d.YESTERDAY,d.LAST_7_DAYS,d.LAST_14_DAYS,d.LAST_30_DAYS,d.THIS_WEEK,d.LAST_WEEK,d.THIS_MONTH,d.LAST_MONTH,"custom_2025-01-01T00:00:00.000Z_2025-01-31T00:00:00.000Z"],description:"The selected date range value"},onChange:{action:"date range changed"},includeTime:{control:"boolean",description:"Whether to include time selection"},disabled:{control:"boolean",description:"Whether the component is disabled"},error:{control:"boolean",description:"Whether to show error state"},popoverTitle:{control:"text",description:"Custom title for the popover"},customStyles:{control:"object",description:"Custom styles to apply to the component"},minDate:{control:"date",description:"Minimum date for date range selection"}},parameters:{docs:{description:{component:"A comprehensive date range selector component with quick options, calendar view, and optional time selection. Supports both desktop and mobile layouts."}}}},p=e=>{const[i,c]=g.useState(e.value||d.TODAY),f=y=>{var V;c(y),(V=e.onChange)==null||V.call(e,y)};return n.jsx("div",{style:{padding:"20px",maxWidth:"400px"},children:n.jsx(Nt,{...e,value:i,onChange:f})})},pe=p.bind({});pe.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1};const L=p.bind({});L.args={value:d.TODAY,includeTime:!0,disabled:!1,error:!1};L.parameters={docs:{description:{story:"DateRangeSelector with time selection enabled, allowing users to specify both date and time ranges."}}};const P=p.bind({});P.args={value:d.LAST_7_DAYS,includeTime:!1,disabled:!1,error:!1};P.parameters={docs:{description:{story:"Pre-selected with the last 7 days option, commonly used for weekly reports and analytics."}}};const q=p.bind({});q.args={value:d.LAST_30_DAYS,includeTime:!1,disabled:!1,error:!1};q.parameters={docs:{description:{story:"Pre-selected with the last 30 days option, ideal for monthly reports and trend analysis."}}};const H=p.bind({});H.args={value:d.THIS_MONTH,includeTime:!1,disabled:!1,error:!1};H.parameters={docs:{description:{story:"Pre-selected with the current month option, useful for monthly summaries and comparisons."}}};const U=p.bind({});U.args={value:"custom_2025-01-01T00:00:00.000Z_2025-01-31T00:00:00.000Z",includeTime:!1,disabled:!1,error:!1};U.parameters={docs:{description:{story:"Shows a custom date range selection, demonstrating the component's ability to handle specific date ranges."}}};const z=p.bind({});z.args={value:d.TODAY,includeTime:!1,disabled:!0,error:!1};z.parameters={docs:{description:{story:"Disabled state of the DateRangeSelector, typically used when the component should not be interactive."}}};const K=p.bind({});K.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!0};K.parameters={docs:{description:{story:"Error state of the DateRangeSelector, indicating validation issues or invalid date selections."}}};const Q=p.bind({});Q.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1,popoverTitle:"Date Range Selector"};Q.parameters={docs:{description:{story:"DateRangeSelector with a custom popover title, allowing for contextual labeling."}}};const G=p.bind({});G.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1,customStyles:{width:"300px",backgroundColor:"#f8f9fa",borderColor:"#007bff",borderRadius:"8px",fontSize:"14px",fontWeight:"500"}};G.parameters={docs:{description:{story:"DateRangeSelector with custom styling applied, demonstrating the component's flexibility for different design requirements."}}};const F=p.bind({});F.args={value:d.YESTERDAY,includeTime:!0,disabled:!1,error:!1};F.parameters={docs:{description:{story:"Yesterday's date range with time selection enabled, useful for detailed time-based analysis."}}};const B=p.bind({});B.args={value:d.THIS_WEEK,includeTime:!1,disabled:!1,error:!1};B.parameters={docs:{description:{story:"Current week selection, commonly used for weekly reports and planning interfaces."}}};const Z=p.bind({});Z.args={value:d.LAST_WEEK,includeTime:!1,disabled:!1,error:!1};Z.parameters={docs:{description:{story:"Previous week selection, useful for comparing current week performance with the previous week."}}};const X=p.bind({});X.args={value:d.LAST_MONTH,includeTime:!1,disabled:!1,error:!1};X.parameters={docs:{description:{story:"Previous month selection, ideal for monthly comparisons and historical analysis."}}};const J=p.bind({});J.args={value:d.LAST_14_DAYS,includeTime:!1,disabled:!1,error:!1};J.parameters={docs:{description:{story:"Last 14 days selection, useful for bi-weekly reports and fortnightly analysis."}}};const ee=p.bind({});ee.args={value:d.TODAY,includeTime:!0,disabled:!1,error:!1};ee.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile view of the DateRangeSelector with responsive design. The component automatically adapts to mobile layout with single calendar view, mobile-optimized quick options, and touch-friendly interface."}}};const ne=p.bind({});ne.args={value:"custom_2025-01-01T00:00:00.000Z_2025-01-31T00:00:00.000Z",includeTime:!1,disabled:!1,error:!1};ne.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile view with custom date range selection, demonstrating the mobile-optimized calendar interface for selecting specific date ranges."}}};const te=p.bind({});te.args={value:d.LAST_7_DAYS,includeTime:!1,disabled:!1,error:!1,minDate:new Date(Date.now()-30*24*60*60*1e3)};te.parameters={docs:{description:{story:"DateRangeSelector with a recent minimum date (30 days ago). This prevents users from selecting dates too far in the past, useful for applications with data retention policies."}}};const ae=p.bind({});ae.args={value:d.TODAY,includeTime:!0,disabled:!1,error:!1};ae.parameters={docs:{description:{story:'DateRangeSelector that outputs epoch timestamps in milliseconds. The onChange callback is only triggered when the user clicks the "Apply" button, providing a JSON object containing startEpoch, endEpoch, startDate, endDate, startTime, and endTime. Quick options update the internal state but do not trigger onChange until Apply is clicked.'}}};const se=p.bind({});se.args={value:d.LAST_30_DAYS,includeTime:!1,disabled:!1,error:!1};se.parameters={docs:{description:{story:"DateRangeSelector with epoch output but without time selection. The onChange callback is only triggered on Apply button click, returning epoch objects with startTime and endTime set to null when includeTime is false. The epoch values represent the start of day (00:00:00) for start date and end of day (23:59:59) for end date."}}};const re=p.bind({});re.args={value:"custom_2025-01-15T00:00:00.000Z_2025-01-20T00:00:00.000Z",includeTime:!0,disabled:!1,error:!1};re.parameters={docs:{description:{story:"Custom date range with epoch output and time selection. The onChange callback is triggered only when the user clicks the Apply button, providing complete date and time information in epoch format (milliseconds) for backend processing."}}};const oe=p.bind({});oe.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1,minDate:new Date(Date.now()-24*60*60*1e3)};oe.parameters={docs:{description:{story:"DateRangeSelector with minimum date set to yesterday. This prevents users from selecting today or any future dates, only allowing selection of yesterday and earlier dates. Useful for historical data analysis or when you want to restrict selection to past dates only."}}};var yn,wn,Sn;pe.parameters={...pe.parameters,docs:{...(yn=pe.parameters)==null?void 0:yn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Sn=(wn=pe.parameters)==null?void 0:wn.docs)==null?void 0:Sn.source}}};var $n,Cn,En;L.parameters={...L.parameters,docs:{...($n=L.parameters)==null?void 0:$n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(En=(Cn=L.parameters)==null?void 0:Cn.docs)==null?void 0:En.source}}};var An,Mn,kn;P.parameters={...P.parameters,docs:{...(An=P.parameters)==null?void 0:An.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(kn=(Mn=P.parameters)==null?void 0:Mn.docs)==null?void 0:kn.source}}};var _n,On,jn;q.parameters={...q.parameters,docs:{...(_n=q.parameters)==null?void 0:_n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(jn=(On=q.parameters)==null?void 0:On.docs)==null?void 0:jn.source}}};var Vn,Rn,Yn;H.parameters={...H.parameters,docs:{...(Vn=H.parameters)==null?void 0:Vn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Yn=(Rn=H.parameters)==null?void 0:Rn.docs)==null?void 0:Yn.source}}};var Nn,In,Wn;U.parameters={...U.parameters,docs:{...(Nn=U.parameters)==null?void 0:Nn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Wn=(In=U.parameters)==null?void 0:In.docs)==null?void 0:Wn.source}}};var Ln,Pn,qn;z.parameters={...z.parameters,docs:{...(Ln=z.parameters)==null?void 0:Ln.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(qn=(Pn=z.parameters)==null?void 0:Pn.docs)==null?void 0:qn.source}}};var Hn,Un,zn;K.parameters={...K.parameters,docs:{...(Hn=K.parameters)==null?void 0:Hn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(zn=(Un=K.parameters)==null?void 0:Un.docs)==null?void 0:zn.source}}};var Kn,Qn,Gn;Q.parameters={...Q.parameters,docs:{...(Kn=Q.parameters)==null?void 0:Kn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Gn=(Qn=Q.parameters)==null?void 0:Qn.docs)==null?void 0:Gn.source}}};var Fn,Bn,Zn;G.parameters={...G.parameters,docs:{...(Fn=G.parameters)==null?void 0:Fn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Zn=(Bn=G.parameters)==null?void 0:Bn.docs)==null?void 0:Zn.source}}};var Xn,Jn,et;F.parameters={...F.parameters,docs:{...(Xn=F.parameters)==null?void 0:Xn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(et=(Jn=F.parameters)==null?void 0:Jn.docs)==null?void 0:et.source}}};var nt,tt,at;B.parameters={...B.parameters,docs:{...(nt=B.parameters)==null?void 0:nt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(at=(tt=B.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var st,rt,ot;Z.parameters={...Z.parameters,docs:{...(st=Z.parameters)==null?void 0:st.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(ot=(rt=Z.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,lt,ct;X.parameters={...X.parameters,docs:{...(it=X.parameters)==null?void 0:it.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(ct=(lt=X.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,gt;J.parameters={...J.parameters,docs:{...(dt=J.parameters)==null?void 0:dt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(gt=(ut=J.parameters)==null?void 0:ut.docs)==null?void 0:gt.source}}};var pt,ht,mt;ee.parameters={...ee.parameters,docs:{...(pt=ee.parameters)==null?void 0:pt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(mt=(ht=ee.parameters)==null?void 0:ht.docs)==null?void 0:mt.source}}};var bt,ft,xt;ne.parameters={...ne.parameters,docs:{...(bt=ne.parameters)==null?void 0:bt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(xt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:xt.source}}};var Dt,vt,Tt;te.parameters={...te.parameters,docs:{...(Dt=te.parameters)==null?void 0:Dt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Tt=(vt=te.parameters)==null?void 0:vt.docs)==null?void 0:Tt.source}}};var yt,wt,St;ae.parameters={...ae.parameters,docs:{...(yt=ae.parameters)==null?void 0:yt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(St=(wt=ae.parameters)==null?void 0:wt.docs)==null?void 0:St.source}}};var $t,Ct,Et;se.parameters={...se.parameters,docs:{...($t=se.parameters)==null?void 0:$t.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Et=(Ct=se.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var At,Mt,kt;re.parameters={...re.parameters,docs:{...(At=re.parameters)==null?void 0:At.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(kt=(Mt=re.parameters)==null?void 0:Mt.docs)==null?void 0:kt.source}}};var _t,Ot,jt;oe.parameters={...oe.parameters,docs:{...(_t=oe.parameters)==null?void 0:_t.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(jt=(Ot=oe.parameters)==null?void 0:Ot.docs)==null?void 0:jt.source}}};const ja=["Default","WithTimeSelection","Last7Days","Last30Days","ThisMonth","CustomDateRange","Disabled","WithError","CustomTitle","CustomStyling","YesterdayWithTime","ThisWeek","LastWeek","LastMonth","Last14Days","MobileView","MobileWithCustomRange","WithRecentMinDate","EpochOutput","EpochOutputWithoutTime","CustomRangeWithEpoch","WithMinDateYesterday"];export{U as CustomDateRange,re as CustomRangeWithEpoch,G as CustomStyling,Q as CustomTitle,pe as Default,z as Disabled,ae as EpochOutput,se as EpochOutputWithoutTime,J as Last14Days,q as Last30Days,P as Last7Days,X as LastMonth,Z as LastWeek,ee as MobileView,ne as MobileWithCustomRange,H as ThisMonth,B as ThisWeek,K as WithError,oe as WithMinDateYesterday,te as WithRecentMinDate,L as WithTimeSelection,F as YesterdayWithTime,ja as __namedExportsOrder,Oa as default};
