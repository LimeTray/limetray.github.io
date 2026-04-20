import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{b as me}from"./index-4fee7e45.js";import{C as Ot}from"./calendarOutline-2f070bee.js";import{C as At}from"./closeIcon-fe6dfcab.js";import{I as J}from"./Icon-7990d6af.js";import{S as qt}from"./stringConstants-7a556fc0.js";import{m as X,d as s,l as k}from"./styled-components.browser.esm-675ea4f2.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";X`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const Ft=X`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,zt=X`
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`,Rt=X`
  0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.7; transform: translateX(-50%) scale(1.2); }
`,It=X`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,_t=s.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.3s ease;
  z-index: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif;

  .range-selector-icon {
    margin: 0;
  }
`,re=s.div`
  display: flex;
  align-items: center;
  padding: ${e=>(e.$isMobile,"8px 12px")};
  border: 1px solid ${e=>{var i;return(i=e.$customStyles)!=null&&i.borderColor?e.$customStyles.borderColor:e.$hasError?"#ef4444":e.$isOpen?"#3b82f6":"#d1d5db"}};
  border-radius: ${e=>{var i;return((i=e.$customStyles)==null?void 0:i.borderRadius)||(e.$isMobile?"8px":"6px")}};
  background-color: ${e=>{var i;return(i=e.$customStyles)!=null&&i.backgroundColor?e.$customStyles.backgroundColor:e.$isDisabled?"#f9fafb":"#fff"}};
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${e=>e.$isDisabled?.6:1};

  ${e=>e.$customStyles&&Object.entries(e.$customStyles).map(([i,l])=>["borderColor","borderRadius","backgroundColor"].includes(i)?"":`${i.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${l};`).join("")}

  &:hover {
    border-color: ${e=>{var i;return(i=e.$customStyles)!=null&&i.borderColor?e.$customStyles.borderColor:e.$hasError?"#dc2626":e.$isDisabled?"#d1d5db":"#9ca3af"}};
    box-shadow: ${e=>{var i;return e.$isDisabled?"none":((i=e.$customStyles)==null?void 0:i.boxShadow)||"0 2px 4px rgba(0, 0, 0, 0.1)"}};
  }

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    outline: none;
  }
`,Nt=s.div`
  margin-right: 10px;
  color: #6b7280;
  font-size: ${e=>e.$isMobile?"12px":"16px"};
  transition: color 0.2s ease;

  ${re}:hover & {
    color: #3b82f6;
  }
`,Ht=s.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  color: #1f2937;
  font-size: ${e=>e.$isMobile?"12px":"14px"};
  transition: color 0.2s ease;
`,Lt=s.div`
  margin-left: 8px;
  color: #6b7280;
  font-size: 16px;
  transition: transform 0.2s ease, color 0.2s ease;

  ${re}:hover & {
    color: #3b82f6;
  }

  transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)"};
`,Bt=s.div`
  background-color: white;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"12px"};
  box-shadow: ${e=>e.$isMobile?"0 -4px 20px rgba(0, 0, 0, 0.15)":"0 8px 24px rgba(0, 0, 0, 0.12)"};
  margin-top: ${e=>(e.$isMobile,0)}px;
  z-index: 99999;
  overflow: hidden;
  position: fixed;
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.2s;
  min-width: ${e=>e.$isMobile?"auto":"340px"};
  width: ${e=>e.$isMobile?"100%":"auto"};

  ${e=>e.$isMobile?k`
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    max-width: 100%;
    margin: 0;
    animation: ${Ft} 0.3s ease-out;
  `:k`
    top: ${e.$top!=null?`${e.$top}px`:"auto"};
    left: ${e.$left!=null?`${e.$left}px`:"auto"};
  `}
`,Ut=s.div`
  width: 100%;
  overflow-x: hidden;
  max-height: ${e=>e.$includeTime?"none":"85vh"};
  overflow-y: ${e=>e.$includeTime?"hidden":"auto"};
  background-color: white;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"8px"};

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bfc6d1;
  }
`,Kt=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isMobile?"10px 14px":"12px 24px"};
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
  position: ${e=>e.$isMobile?"sticky":"static"};
  top: ${e=>e.$isMobile?"0":"auto"};
  z-index: 10;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"0"};
`,Gt=s.h4`
  margin: 0;
  font-size: ${e=>e.$isMobile?"12px":"15px"};
  font-weight: 600;
  color: #111827;
`,Jt=s.button`
  background: transparent;
  border: none;
  padding: 6px;
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
`,Xt=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  gap: 0;
`,Zt=s.div`
  display: flex;
  flex-direction: ${e=>e.$includeTime&&!e.$isMobile?"row":"column"};
  padding: ${e=>e.$isMobile?"6px 12px 4px":"16px 24px 12px"};
  align-items: ${e=>e.$includeTime&&!e.$isMobile?"flex-start":"stretch"};
  min-width: 0;
`,Qt=s.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$isMobile?"6px":"16px"};
  border-right: ${e=>e.$isMobile||!e.$includeTime?"none":"1px solid #e5e7eb"};
  padding: ${e=>e.$isMobile||!e.$includeTime?"0":"0 16px 0 0"};
`,en=s.div`
  padding: 0;
  width: 100%;
`,tn=s.div`
  display: flex;
  flex-direction: column;
  padding: ${e=>e.$isMobile?"12px 0 6px 0px":"0 0 0 16px"};
  border-top: ${e=>e.$isMobile?"1px solid #e5e7eb":"none"};
  min-width: 0;
  flex-shrink: 0;
  width: ${e=>e.$isMobile?"100%":"auto"};
`,he=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${e=>e.$isMobile?4:10}px;
  padding: 0 4px;
`,Q=s.button`
  background: #f3f4f6;
  border: none;
  width: ${e=>e.$isMobile?28:32}px;
  height: ${e=>e.$isMobile?28:32}px;
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
`,nn=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$isMobile?4:6}px;
  flex: 1;
  min-width: 0;
`,an=s.button`
  flex: 1;
  min-width: 100px;
  text-align: center;
  font-size: 15px;
  margin: 0;
  color: #111827;
  font-weight: 600;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(59, 130, 246, 0.08);
  }
`,on=s.div`
  text-align: center;
  font-size: 15px;
  margin: 0;
  color: #111827;
  font-weight: 600;
  min-width: 100px;

  @media (max-width: 767px) {
    font-size: 13px;
    min-width: 70px;
  }
`,rn=s.button`
  padding: ${e=>e.$isMobile?"4px 8px":"6px 10px"};
  font-size: ${e=>e.$isMobile?12:14}px;
  font-weight: 600;
  color: #111827;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  min-width: ${e=>e.$isMobile?52:64}px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3b82f6;
    background-color: rgba(59, 130, 246, 0.08);
    color: #2563eb;
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`,sn=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${e=>e.$isMobile?4:8}px;
  padding: ${e=>e.$isMobile?8:12}px 0;
  width: 100%;
`,ln=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.$isMobile?"8px":"10px"};
  font-size: ${e=>e.$isMobile?12:14}px;
  font-weight: ${e=>e.$isSelected?600:500};
  color: ${e=>e.$isDisabled?"#9ca3af":e.$isSelected?"white":e.$isCurrentYear?"#2563eb":"#111827"};
  background: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":"#f9fafb"};
  border-radius: 4px;
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${e=>e.$isDisabled?.5:1};

  &:hover {
    background-color: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":"rgba(59, 130, 246, 0.1)"};
  }
`,dn=s.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: ${e=>e.$isMobile?4:8}px;
  width: 100%;
`,cn=s.div`
  text-align: center;
  font-size: ${e=>e.$isMobile?9:11}px;
  font-weight: 600;
  color: #6b7280;
  padding: ${e=>e.$isMobile?0:8}px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,un=s.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
`,pn=s.div`
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.$isMobile?0:10}px;
  box-sizing: border-box;
  min-height: ${e=>e.$isMobile?0:"auto"};
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  font-size: ${e=>e.$isMobile?12:14}px;
  color: ${e=>e.$isDisabled||!e.$isCurrentMonth?"#9ca3af":e.$isSelected?"white":"#111827"};
  position: relative;
  background: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":"#f9fafb"};
  transition: all 0.2s ease;
  border-radius: 4px;
  opacity: ${e=>e.$isDisabled?.5:1};

  &:hover {
    background-color: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":"rgba(59, 130, 246, 0.1)"};
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>e.$isDisabled?"none":"0 0 0 3px rgba(59, 130, 246, 0.2)"};
  }

  ${e=>e.$isSelected&&!e.$isDisabled&&k`
    animation: ${zt} 0.3s ease-in-out;
  `}

  ${e=>e.$isToday&&!e.$isDisabled&&!e.$isSelected&&k`
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      height: 3px;
      background-color: #4f7bff;
      border-radius: 50%;
      animation: ${Rt} 2s ease-in-out infinite;
    }
  `}
`,gn=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.$isMobile?"8px 12px":"8px 0"};
  border-bottom: 1px solid #e5e7eb;
  background-color: #fafbfc;
`,mn=s.div`
  font-size: ${e=>e.$isMobile?"13px":"15px"};
  font-weight: 600;
  color: #111827;
  letter-spacing: 0.01em;
`,hn=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${e=>e.$isMobile?"6px":"12px"};
  width: 100%;
  min-width: ${e=>e.$isMobile?"0":"140px"};
`,bn=s.div`
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 767px) {
    font-size: 11px;
  }
`,fn=s.input`
  padding: ${e=>e.$isMobile?"6px 8px":"10px 12px"};
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#d1d5db"};
  border-radius: 8px;
  font-size: ${e=>e.$isMobile?"13px":"14px"};
  background-color: white;
  color: #111827;
  transition: all 0.2s ease;
  width: ${e=>e.$isMobile?"100%":"120px"};
  min-width: ${e=>e.$isMobile?"0":"100px"};
  flex: ${e=>e.$isMobile?1:"none"};
  box-sizing: border-box;
  flex-shrink: ${e=>e.$isMobile?1:0};
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
  }

  &:hover {
    border-color: ${e=>e.$hasError?"#dc2626":"#9ca3af"};
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.7;
  }
`,xn=s.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>(e.$isMobile,"12px")};
  padding: ${e=>(e.$isMobile,"12px 16px")};
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
  position: sticky;
  bottom: 0;
  z-index: 10;
`,be=s.button`
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
        animation: ${It} 1s linear infinite;
      }
    `}
  `}
`,wn=s.div`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(31, 41, 55, 0.45);
  transition: opacity 0.2s;
`,{DATE_TIME_PICKER:m}=qt,fe=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),xe=e=>{try{let i=e;return e.split(":").length===2&&(i=`${e}:00`),new Date(`2000-01-01T${i}`).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}catch{return e}},we=(e,i)=>e.getFullYear()===i.getFullYear()&&e.getMonth()===i.getMonth()&&e.getDate()===i.getDate(),oe=()=>{const e=new Date,i=e.getHours().toString().padStart(2,"0"),l=e.getMinutes().toString().padStart(2,"0");return`${i}:${l}`},$n=(e,i)=>{const[l,w]=i.split(":").map(Number),f=new Date(e);return f.setHours(l,w,0,0),f},ut=({value:e,onChange:i,includeTime:l=!1,includeYearSelection:w=!1,disabled:f=!1,error:C=!1,popoverTitle:L,minDate:h,maxDate:$,customStyles:pt={}})=>{const[p,B]=c.useState(!1),[D,T]=c.useState(new Date),[U,S]=c.useState(oe()),[se,x]=c.useState(new Date),[gt,mt]=c.useState(""),[ht,V]=c.useState(!1),M=c.useRef(null),ee=c.useRef(null),[o,bt]=c.useState(window.innerWidth<768),[le,de]=c.useState({top:0,left:0});c.useEffect(()=>{const t=()=>{bt(window.innerWidth<768)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),c.useEffect(()=>{if(e)if(typeof e=="number"){const t=new Date(e);if(T(t),x(t),l){const a=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");S(`${a}:${r}`)}}else if(typeof e=="string"){const t=new Date(e);if(!isNaN(t.getTime())&&(T(t),x(t),l)){const a=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");S(`${a}:${r}`)}}else if(e instanceof Date){if(T(e),x(e),l){const t=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0");S(`${t}:${a}`)}}else typeof e=="object"&&e!==null&&"epoch"in e&&(T(new Date(e.date)),x(new Date(e.date)),l&&e.time?S(e.time):l&&S(oe()));else{const t=new Date;T(t),x(t),l&&S(oe())}},[e,l]),c.useEffect(()=>{let t=fe(D);l&&(t+=` (${xe(U)})`),mt(t)},[D,U,l]),c.useEffect(()=>{const t=a=>{p&&ee.current&&!ee.current.contains(a.target)&&M.current&&!M.current.contains(a.target)&&B(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[p]);const ft=t=>h?t<new Date(h.getFullYear(),h.getMonth(),h.getDate()):!1,xt=t=>$?t>new Date($.getFullYear(),$.getMonth(),$.getDate()):!1,ce=t=>ft(t)||xt(t),wt=t=>{ce(t)||T(t)},$t=()=>{x(t=>{const a=new Date(t);return a.setMonth(a.getMonth()-1),h&&a<new Date(h.getFullYear(),h.getMonth(),1)?t:a})},yt=()=>{x(t=>{const a=new Date(t);return a.setMonth(a.getMonth()+1),$&&a>new Date($.getFullYear(),$.getMonth(),1)?t:a})},Z=()=>{const t=new Date,a=t.getFullYear()-100,r=t.getFullYear()+10,d=h?h.getFullYear():a,u=$?$.getFullYear():r;return{minYear:d,maxYear:u}},vt=t=>{x(a=>{const r=new Date(a);return r.setFullYear(t),r}),V(!1)},K=12,te=()=>{const{minYear:t,maxYear:a}=Z(),r=se.getFullYear(),d=Math.floor((r-t)/K)*K+t,u=Math.min(d+K-1,a);return{start:d,end:Math.max(u,d)}},Dt=()=>{const{start:t}=te(),a=Math.max(Z().minYear,t-K);x(r=>{const d=new Date(r);return d.setFullYear(a),d})},St=()=>{const{end:t}=te(),a=Math.min(Z().maxYear,t+K);x(r=>{const d=new Date(r);return d.setFullYear(a),d})},Mt=(t,a)=>{let r;if(l&&a)r=$n(t,a).getTime();else{const d=new Date(t);d.setHours(12,0,0,0),r=d.getTime()}return{epoch:r,date:t.toISOString(),time:l?a:null}},kt=()=>{const t=Mt(D,l?U:null);i(t),B(!1)},Ct=t=>{const a=t.getFullYear(),r=t.getMonth(),u=new Date(a,r,1).getDay(),ne=new Date(a,r+1,0).getDate(),G=[];if(u>0){const ge=new Date(a,r,0).getDate();for(let ae=ge-u+1;ae<=ge;ae++)G.push(new Date(a,r-1,ae))}const b=[];for(let v=1;v<=ne;v++)b.push(new Date(a,r,v));const Pt=42-G.length-b.length,pe=[];for(let v=1;v<=Pt;v++)pe.push(new Date(a,r+1,v));return[...G,...b,...pe]},Tt=(t,a=!0)=>{const r=we(t,D),d=ce(t),y=we(t,new Date);return n.jsx(pn,{$isCurrentMonth:a,$isSelected:r,$isToday:y,$isMobile:o,$isDisabled:d,onClick:()=>wt(t),children:t.getDate()},t.toISOString())},Vt=()=>{const{start:t,end:a}=te(),{minYear:r,maxYear:d}=Z(),u=Array.from({length:a-t+1},(b,ue)=>t+ue),ne=new Date().getFullYear(),G=D.getFullYear();return n.jsxs(n.Fragment,{children:[n.jsxs(he,{$isMobile:o,children:[n.jsx(Q,{$isMobile:o,onClick:Dt,disabled:t<=r,children:n.jsx(J,{name:"chevron left",className:"range-selector-icon"})}),n.jsxs(an,{type:"button",onClick:()=>V(!1),children:[t," – ",a]}),n.jsx(Q,{$isMobile:o,onClick:St,disabled:a>=d,children:n.jsx(J,{name:"chevron right",className:"range-selector-icon"})})]}),n.jsx(sn,{$isMobile:o,children:u.map(b=>n.jsx(ln,{$isSelected:b===G,$isCurrentYear:b===ne,$isMobile:o,$isDisabled:b<r||b>d,onClick:()=>vt(b),children:b},b))})]})},Yt=t=>{const a=t.toLocaleString("default",{month:"long"}),r=t.getFullYear(),d=Ct(t),u=[m.DAYS_OF_WEEK.SUNDAY,m.DAYS_OF_WEEK.MONDAY,m.DAYS_OF_WEEK.TUESDAY,m.DAYS_OF_WEEK.WEDNESDAY,m.DAYS_OF_WEEK.THURSDAY,m.DAYS_OF_WEEK.FRIDAY,m.DAYS_OF_WEEK.SATURDAY];return n.jsxs(n.Fragment,{children:[n.jsxs(he,{$isMobile:o,children:[n.jsx(Q,{$isMobile:o,onClick:$t,children:n.jsx(J,{name:"chevron left",className:"range-selector-icon"})}),n.jsxs(nn,{$isMobile:o,children:[n.jsx(on,{children:w?a:`${a} ${r}`}),w&&n.jsx(rn,{$isMobile:o,onClick:()=>V(!0),type:"button","aria-label":m.YEAR,children:r})]}),n.jsx(Q,{$isMobile:o,onClick:yt,children:n.jsx(J,{name:"chevron right",className:"range-selector-icon"})})]}),n.jsx(dn,{$isMobile:o,children:u.map(y=>n.jsx(cn,{$isMobile:o,children:y},y))}),n.jsx(un,{$isMobile:o,children:d.map(y=>Tt(y,y.getMonth()===t.getMonth()))})]})},jt=()=>{if(!f){if(!p&&!o&&M.current){const t=M.current.getBoundingClientRect(),a=400,r=8,d=window.innerHeight-t.bottom,u=d<a&&t.top>d;de({top:u?t.top-a-r:t.bottom+r,left:Math.max(8,Math.min(t.left,window.innerWidth-356))})}B(!p),p||(x(D),V(!1))}};c.useEffect(()=>(o&&p?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o,p]),c.useLayoutEffect(()=>{if(!o&&p&&M.current){const t=M.current.getBoundingClientRect(),a=400,r=8,d=window.innerHeight-t.bottom,u=d<a&&t.top>d;de({top:u?t.top-a-r:t.bottom+r,left:Math.max(8,Math.min(t.left,window.innerWidth-356))})}},[o,p]);const Wt=L||(l?m.SELECT_DATE_TIME:m.SELECT_DATE),Et=n.jsxs(n.Fragment,{children:[n.jsxs(Kt,{$isMobile:o,children:[n.jsx(Gt,{$isMobile:o,children:Wt}),n.jsx(Jt,{$isMobile:o,onClick:()=>{B(!1),V(!1)},children:n.jsx(At,{style:{width:"10px",height:"10px"},strokeColor:"#6b7280"})})]}),n.jsxs("div",{children:[n.jsxs(Xt,{children:[n.jsx(gn,{$isMobile:o,children:n.jsxs(mn,{$isMobile:o,children:[fe(D),l&&` (${xe(U)})`]})}),n.jsxs(Zt,{$includeTime:l,$isMobile:o,children:[n.jsx(Qt,{$isMobile:o,$includeTime:l,children:n.jsx(en,{children:w&&ht?Vt():Yt(se)})}),l&&n.jsx(tn,{$isMobile:o,children:n.jsxs(hn,{$isMobile:o,children:[n.jsx(bn,{children:m.TIME}),n.jsx(fn,{type:"time",$isMobile:o,value:U,onChange:t=>S(t.target.value),onClick:t=>{const a=t.currentTarget;typeof a.showPicker=="function"&&a.showPicker()}})]})})]})]}),n.jsxs(xn,{$isMobile:o,children:[n.jsx(be,{$variant:"cancel",$isMobile:o,onClick:()=>{B(!1),V(!1)},children:m.CANCEL}),n.jsx(be,{$variant:"apply",$isMobile:o,onClick:kt,children:m.APPLY})]})]})]});return n.jsxs(_t,{children:[n.jsxs(re,{$isMobile:o,$isOpen:p,$hasError:C,$isDisabled:f,$customStyles:pt,onClick:f?void 0:jt,ref:M,children:[n.jsx(Nt,{$isMobile:o,children:n.jsx(Ot,{width:"20px"})}),n.jsx(Ht,{$isMobile:o,children:gt}),n.jsx(Lt,{$isOpen:p,children:n.jsx(J,{name:"chevron down",className:"range-selector-icon"})})]}),o&&p&&me.createPortal(n.jsx(wn,{}),document.body),p&&me.createPortal(n.jsx(Bt,{$isMobile:o,$isOpen:p,$top:o?void 0:le.top,$left:o?void 0:le.left,ref:ee,children:n.jsx(Ut,{$isMobile:o,$includeTime:l,children:Et})}),document.body)]})},ie=ut;ut.__docgenInfo={description:"",methods:[],displayName:"DateTimePicker",props:{value:{required:!1,tsType:{name:"union",raw:`Date | number | string | {
  epoch: number;
  date: string;
  time: string | null;
}`,elements:[{name:"Date"},{name:"number"},{name:"string"},{name:"signature",type:"object",raw:`{
  epoch: number;
  date: string;
  time: string | null;
}`,signature:{properties:[{key:"epoch",value:{name:"number",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"time",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(value: {
  epoch: number;
  date: string;
  time: string | null;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  epoch: number;
  date: string;
  time: string | null;
}`,signature:{properties:[{key:"epoch",value:{name:"number",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"time",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""},includeTime:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},includeYearSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},popoverTitle:{required:!1,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},customStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}},{key:"maxWidth",value:{name:"string",required:!1}},{key:"maxHeight",value:{name:"string",required:!1}},{key:"minWidth",value:{name:"string",required:!1}},{key:"minHeight",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}},{key:"margin",value:{name:"string",required:!1}},{key:"backgroundColor",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const zn={component:ie,title:"DateTimePicker",tags:["autodocs"],argTypes:{value:{control:"date",description:"The selected date/time value (Date, epoch, ISO string, or object)"},onChange:{action:"date changed"},includeTime:{control:"boolean",description:"Whether to include time selection"},includeYearSelection:{control:"boolean",description:"Whether to enable year selection via clickable year button and year grid picker"},disabled:{control:"boolean",description:"Whether the component is disabled"},error:{control:"boolean",description:"Whether to show error state"},popoverTitle:{control:"text",description:"Custom title for the popover"},minDate:{control:"date",description:"Minimum selectable date"},maxDate:{control:"date",description:"Maximum selectable date"},customStyles:{control:"object",description:"Custom styles to apply to the component"}},parameters:{docs:{description:{component:"\nA date and time picker for selecting a single date with optional time and year selection. Supports min/max date constraints, mobile-responsive layout (bottom sheet on mobile), and custom styling. `onChange` returns `{ epoch, date, time }` when Apply is clicked.\n\n### Additional Context (in simple terms)\n\n- **Pick a date** — Click any day on the calendar to select it. Use the arrow buttons to move between months.\n- **Pick a time (optional)** — Turn on `includeTime` to choose hours and minutes. The time input uses the native picker on phones.\n- **Jump to any year (optional)** — Turn on `includeYearSelection` to make the year clickable. A grid of years appears so you can quickly pick one instead of tapping the month arrows many times.\n- **Works on phones** — On small screens, the picker opens as a slide-up panel from the bottom instead of a floating popover.\n- **Limit allowed dates** — Use `minDate` and `maxDate` to block dates outside a range (e.g. no past dates, or only the next 30 days).\n- **What you get back** — When you click Apply, you receive the date as text (ISO string), as a number (milliseconds since 1970), and the time (if time selection is on).\n        ".trim()}}}},g=e=>{const[i,l]=c.useState(e.value??new Date),w=f=>{var C;l(f),(C=e.onChange)==null||C.call(e,f)};return n.jsx("div",{style:{padding:"20px",maxWidth:"400px"},children:n.jsx(ie,{...e,value:i,onChange:w})})},yn=e=>{const[i,l]=c.useState(e.value??new Date),[w,f]=c.useState(null),C=L=>{var h;l(L),f(L),(h=e.onChange)==null||h.call(e,L)};return n.jsxs("div",{style:{padding:"20px",maxWidth:"400px"},children:[n.jsx(ie,{...e,value:i,onChange:C}),w&&n.jsxs("div",{style:{marginTop:16,padding:12,background:"#f9fafb",borderRadius:8,fontSize:12,fontFamily:"monospace",whiteSpace:"pre-wrap",border:"1px solid #e5e7eb"},children:[n.jsx("strong",{children:"onChange payload:"}),`
`,JSON.stringify(w,null,2)]})]})},Y=g.bind({});Y.args={value:new Date,includeTime:!1,includeYearSelection:!1,disabled:!1,error:!1};Y.parameters={docs:{description:{story:"Default DateTimePicker with date selection only. Navigate months with the arrow buttons."}}};const j=yn.bind({});j.args={value:new Date,includeTime:!0,includeYearSelection:!0,disabled:!1,error:!1,popoverTitle:"Select date and time"};j.parameters={docs:{description:{story:"Full-featured DateTimePicker with date, time, and year selection. The onChange payload is shown below when Apply is clicked."}}};const W=g.bind({});W.args={value:new Date,includeTime:!0,includeYearSelection:!1,disabled:!1,error:!1};W.parameters={docs:{description:{story:"DateTimePicker with time selection enabled. Users can select both date and time."}}};const E=g.bind({});E.args={value:new Date,includeTime:!1,includeYearSelection:!0,disabled:!1,error:!1};E.parameters={docs:{description:{story:"DateTimePicker with year selection enabled. Click the year button to open a grid of years for quick selection."}}};const P=g.bind({});P.args={value:new Date,includeTime:!1,includeYearSelection:!1,disabled:!0,error:!1};P.parameters={docs:{description:{story:"Disabled state of the DateTimePicker."}}};const O=g.bind({});O.args={value:new Date,includeTime:!1,includeYearSelection:!1,disabled:!1,error:!0};O.parameters={docs:{description:{story:"Error state of the DateTimePicker, indicating validation issues."}}};const A=g.bind({});A.args={value:new Date,includeTime:!1,includeYearSelection:!1,popoverTitle:"Choose appointment date",disabled:!1,error:!1};A.parameters={docs:{description:{story:"DateTimePicker with a custom popover title."}}};const q=g.bind({});q.args={value:new Date,includeTime:!1,includeYearSelection:!1,minDate:(()=>{const e=new Date;return e.setDate(e.getDate()-30),e})(),disabled:!1,error:!1};q.parameters={docs:{description:{story:"DateTimePicker with minimum date set to 30 days ago. Dates before this cannot be selected."}}};const F=g.bind({});F.args={value:new Date,includeTime:!1,includeYearSelection:!1,maxDate:(()=>{const e=new Date;return e.setDate(e.getDate()+30),e})(),disabled:!1,error:!1};F.parameters={docs:{description:{story:"DateTimePicker with maximum date set to 30 days from now. Future dates beyond this cannot be selected."}}};const z=g.bind({});z.args={value:new Date,includeTime:!1,includeYearSelection:!0,minDate:(()=>{const e=new Date;return e.setMonth(e.getMonth()-1),e})(),maxDate:(()=>{const e=new Date;return e.setMonth(e.getMonth()+1),e})(),disabled:!1,error:!1};z.parameters={docs:{description:{story:"DateTimePicker with both minimum and maximum date constraints (1 month in the past to 1 month in the future). Year selection shows the limited year range."}}};const R=g.bind({});R.args={value:Date.now(),includeTime:!1,disabled:!1,error:!1};R.parameters={docs:{description:{story:"Value provided as epoch timestamp (milliseconds). The component accepts number, Date, ISO string, or { epoch, date, time } object."}}};const I=g.bind({});I.args={value:{epoch:new Date().getTime(),date:new Date().toISOString(),time:null},includeTime:!0,disabled:!1,error:!1};I.parameters={docs:{description:{story:"Value provided as the onChange payload shape: { epoch, date, time }. Useful when wiring the picker to form state."}}};const _=g.bind({});_.args={value:new Date,includeTime:!1,includeYearSelection:!0,disabled:!1,error:!1};_.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile layout: the picker opens as a bottom sheet. Tap outside or use Cancel/Apply to close."}}};const N=g.bind({});N.args={value:new Date,includeTime:!0,includeYearSelection:!0,disabled:!1,error:!1};N.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile layout with date and time selection. The time input uses the native picker on supported devices."}}};const H=g.bind({});H.args={value:new Date,includeTime:!1,includeYearSelection:!1,customStyles:{width:"100%",maxWidth:"320px",padding:"12px 16px",borderRadius:"8px"},disabled:!1,error:!1};H.parameters={docs:{description:{story:"DateTimePicker with custom styling applied."}}};var $e,ye,ve;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(ve=(ye=Y.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var De,Se,Me;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const [output, setOutput] = useState<{
    epoch: number;
    date: string;
    time: string | null;
  } | null>(null);
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    setOutput(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
      {output && <div style={{
      marginTop: 16,
      padding: 12,
      background: '#f9fafb',
      borderRadius: 8,
      fontSize: 12,
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      border: '1px solid #e5e7eb'
    }}>
          <strong>onChange payload:</strong>
          {'\\n'}
          {JSON.stringify(output, null, 2)}
        </div>}
    </div>;
}`,...(Me=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};var ke,Ce,Te;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Te=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ve,Ye,je;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(je=(Ye=E.parameters)==null?void 0:Ye.docs)==null?void 0:je.source}}};var We,Ee,Pe;P.parameters={...P.parameters,docs:{...(We=P.parameters)==null?void 0:We.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Pe=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Oe,Ae,qe;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(qe=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Fe,ze,Re;A.parameters={...A.parameters,docs:{...(Fe=A.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Re=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var Ie,_e,Ne;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Ne=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var He,Le,Be;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Be=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var Ue,Ke,Ge;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Ge=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Je,Xe,Ze;R.parameters={...R.parameters,docs:{...(Je=R.parameters)==null?void 0:Je.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Ze=(Xe=R.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Qe,et,tt;I.parameters={...I.parameters,docs:{...(Qe=I.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(tt=(et=I.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,ot;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(ot=(at=_.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var rt,it,st;N.parameters={...N.parameters,docs:{...(rt=N.parameters)==null?void 0:rt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(st=(it=N.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var lt,dt,ct;H.parameters={...H.parameters,docs:{...(lt=H.parameters)==null?void 0:lt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ValueType>(args.value ?? new Date());
  const handleChange = (newValue: {
    epoch: number;
    date: string;
    time: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateTimePicker {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(ct=(dt=H.parameters)==null?void 0:dt.docs)==null?void 0:ct.source}}};const Rn=["Default","Playground","WithTimeSelection","WithYearSelection","Disabled","Error","WithCustomTitle","WithMinDate","WithMaxDate","WithMinAndMaxDate","WithEpochValue","WithObjectValue","MobileDateOnly","MobileWithTime","WithCustomStyles"];export{Y as Default,P as Disabled,O as Error,_ as MobileDateOnly,N as MobileWithTime,j as Playground,H as WithCustomStyles,A as WithCustomTitle,R as WithEpochValue,F as WithMaxDate,z as WithMinAndMaxDate,q as WithMinDate,I as WithObjectValue,W as WithTimeSelection,E as WithYearSelection,Rn as __namedExportsOrder,zn as default};
