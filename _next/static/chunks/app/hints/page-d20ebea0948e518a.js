(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[315],{5641:function(e,r,t){Promise.resolve().then(t.bind(t,3493)),Promise.resolve().then(t.t.bind(t,2972,23))},3493:function(e,r,t){"use strict";t.d(r,{Accordion:function(){return eo},AccordionContent:function(){return el},AccordionItem:function(){return ea},AccordionTrigger:function(){return ei}});var n=t(7437),o=t(2265),a=t(3966),i=t(7822),l=t(8575),c=t(6741),s=t(886),d=t(6840),u=t(1188),f=t(1599),p=t(9255),m="Collapsible",[v,h]=(0,a.b)(m),[x,b]=v(m),w=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,open:a,defaultOpen:i,disabled:l,onOpenChange:c,...u}=e,[f=!1,m]=(0,s.T)({prop:a,defaultProp:i,onChange:c});return(0,n.jsx)(x,{scope:t,disabled:l,contentId:(0,p.M)(),open:f,onOpenToggle:o.useCallback(()=>m(e=>!e),[m]),children:(0,n.jsx)(d.WV.div,{"data-state":N(f),"data-disabled":l?"":void 0,...u,ref:r})})});w.displayName=m;var y="CollapsibleTrigger",g=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,...o}=e,a=b(y,t);return(0,n.jsx)(d.WV.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":N(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...o,ref:r,onClick:(0,c.M)(e.onClick,a.onOpenToggle)})});g.displayName=y;var j="CollapsibleContent",R=o.forwardRef((e,r)=>{let{forceMount:t,...o}=e,a=b(j,e.__scopeCollapsible);return(0,n.jsx)(f.z,{present:t||a.open,children:e=>{let{present:t}=e;return(0,n.jsx)(C,{...o,ref:r,present:t})}})});R.displayName=j;var C=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,present:a,children:i,...c}=e,s=b(j,t),[f,p]=o.useState(a),m=o.useRef(null),v=(0,l.e)(r,m),h=o.useRef(0),x=h.current,w=o.useRef(0),y=w.current,g=s.open||f,R=o.useRef(g),C=o.useRef(void 0);return o.useEffect(()=>{let e=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=m.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let r=e.getBoundingClientRect();h.current=r.height,w.current=r.width,R.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),p(a)}},[s.open,a]),(0,n.jsx)(d.WV.div,{"data-state":N(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!g,...c,ref:v,style:{"--radix-collapsible-content-height":x?"".concat(x,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:g&&i})});function N(e){return e?"open":"closed"}var A=t(9114),k="Accordion",I=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[_,D,M]=(0,i.B)(k),[O,P]=(0,a.b)(k,[M,h]),S=h(),T=o.forwardRef((e,r)=>{let{type:t,...o}=e;return(0,n.jsx)(_.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,n.jsx)(B,{...o,ref:r}):(0,n.jsx)(z,{...o,ref:r})})});T.displayName=k;var[E,W]=O(k),[V,q]=O(k,{collapsible:!1}),z=o.forwardRef((e,r)=>{let{value:t,defaultValue:a,onValueChange:i=()=>{},collapsible:l=!1,...c}=e,[d,u]=(0,s.T)({prop:t,defaultProp:a,onChange:i});return(0,n.jsx)(E,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:u,onItemClose:o.useCallback(()=>l&&u(""),[l,u]),children:(0,n.jsx)(V,{scope:e.__scopeAccordion,collapsible:l,children:(0,n.jsx)(F,{...c,ref:r})})})}),B=o.forwardRef((e,r)=>{let{value:t,defaultValue:a,onValueChange:i=()=>{},...l}=e,[c=[],d]=(0,s.T)({prop:t,defaultProp:a,onChange:i}),u=o.useCallback(e=>d(function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...r,e]}),[d]),f=o.useCallback(e=>d(function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.filter(r=>r!==e)}),[d]);return(0,n.jsx)(E,{scope:e.__scopeAccordion,value:c,onItemOpen:u,onItemClose:f,children:(0,n.jsx)(V,{scope:e.__scopeAccordion,collapsible:!0,children:(0,n.jsx)(F,{...l,ref:r})})})}),[H,Z]=O(k),F=o.forwardRef((e,r)=>{let{__scopeAccordion:t,disabled:a,dir:i,orientation:s="vertical",...u}=e,f=o.useRef(null),p=(0,l.e)(f,r),m=D(t),v="ltr"===(0,A.gm)(i),h=(0,c.M)(e.onKeyDown,e=>{var r;if(!I.includes(e.key))return;let t=e.target,n=m().filter(e=>{var r;return!(null===(r=e.ref.current)||void 0===r?void 0:r.disabled)}),o=n.findIndex(e=>e.ref.current===t),a=n.length;if(-1===o)return;e.preventDefault();let i=o,l=a-1,c=()=>{(i=o+1)>l&&(i=0)},d=()=>{(i=o-1)<0&&(i=l)};switch(e.key){case"Home":i=0;break;case"End":i=l;break;case"ArrowRight":"horizontal"===s&&(v?c():d());break;case"ArrowDown":"vertical"===s&&c();break;case"ArrowLeft":"horizontal"===s&&(v?d():c());break;case"ArrowUp":"vertical"===s&&d()}null===(r=n[i%a].ref.current)||void 0===r||r.focus()});return(0,n.jsx)(H,{scope:t,disabled:a,direction:i,orientation:s,children:(0,n.jsx)(_.Slot,{scope:t,children:(0,n.jsx)(d.WV.div,{...u,"data-orientation":s,ref:p,onKeyDown:a?void 0:h})})})}),K="AccordionItem",[L,U]=O(K),G=o.forwardRef((e,r)=>{let{__scopeAccordion:t,value:o,...a}=e,i=Z(K,t),l=W(K,t),c=S(t),s=(0,p.M)(),d=o&&l.value.includes(o)||!1,u=i.disabled||e.disabled;return(0,n.jsx)(L,{scope:t,open:d,disabled:u,triggerId:s,children:(0,n.jsx)(w,{"data-orientation":i.orientation,"data-state":er(d),...c,...a,ref:r,disabled:u,open:d,onOpenChange:e=>{e?l.onItemOpen(o):l.onItemClose(o)}})})});G.displayName=K;var J="AccordionHeader",Q=o.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,a=Z(k,t),i=U(J,t);return(0,n.jsx)(d.WV.h3,{"data-orientation":a.orientation,"data-state":er(i.open),"data-disabled":i.disabled?"":void 0,...o,ref:r})});Q.displayName=J;var X="AccordionTrigger",Y=o.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,a=Z(k,t),i=U(X,t),l=q(X,t),c=S(t);return(0,n.jsx)(_.ItemSlot,{scope:t,children:(0,n.jsx)(g,{"aria-disabled":i.open&&!l.collapsible||void 0,"data-orientation":a.orientation,id:i.triggerId,...c,...o,ref:r})})});Y.displayName=X;var $="AccordionContent",ee=o.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,a=Z(k,t),i=U($,t),l=S(t);return(0,n.jsx)(R,{role:"region","aria-labelledby":i.triggerId,"data-orientation":a.orientation,...l,...o,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function er(e){return e?"open":"closed"}ee.displayName=$;var et=t(875),en=t(4508);let eo=T,ea=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)(G,{ref:r,className:(0,en.cn)("border-b",t),...o})});ea.displayName="AccordionItem";let ei=o.forwardRef((e,r)=>{let{className:t,children:o,...a}=e;return(0,n.jsx)(Q,{className:"flex",children:(0,n.jsxs)(Y,{ref:r,className:(0,en.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...a,children:[o,(0,n.jsx)(et.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});ei.displayName=Y.displayName;let el=o.forwardRef((e,r)=>{let{className:t,children:o,...a}=e;return(0,n.jsx)(ee,{ref:r,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:(0,n.jsx)("div",{className:(0,en.cn)("pb-4 pt-0",t),children:o})})});el.displayName=ee.displayName},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(1994),o=t(3335);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,o.m6)((0,n.W)(r))}},875:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});let n=(0,t(9205).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},7822:function(e,r,t){"use strict";t.d(r,{B:function(){return c}});var n=t(2265),o=t(3966),a=t(8575),i=t(7495),l=t(7437);function c(e){let r=e+"CollectionProvider",[t,c]=(0,o.b)(r),[s,d]=t(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:t}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,l.jsx)(s,{scope:r,itemMap:a,collectionRef:o,children:t})};u.displayName=r;let f=e+"CollectionSlot",p=n.forwardRef((e,r)=>{let{scope:t,children:n}=e,o=d(f,t),c=(0,a.e)(r,o.collectionRef);return(0,l.jsx)(i.g7,{ref:c,children:n})});p.displayName=f;let m=e+"CollectionItemSlot",v="data-radix-collection-item",h=n.forwardRef((e,r)=>{let{scope:t,children:o,...c}=e,s=n.useRef(null),u=(0,a.e)(r,s),f=d(m,t);return n.useEffect(()=>(f.itemMap.set(s,{ref:s,...c}),()=>void f.itemMap.delete(s))),(0,l.jsx)(i.g7,{[v]:"",ref:u,children:o})});return h.displayName=m,[{Provider:u,Slot:p,ItemSlot:h},function(r){let t=d(e+"CollectionConsumer",r);return n.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},c]}},9114:function(e,r,t){"use strict";t.d(r,{gm:function(){return a}});var n=t(2265);t(7437);var o=n.createContext(void 0);function a(e){let r=n.useContext(o);return e||r||"ltr"}}},function(e){e.O(0,[234,972,971,117,744],function(){return e(e.s=5641)}),_N_E=e.O()}]);