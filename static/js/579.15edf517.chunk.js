"use strict";(self.webpackChunktravel_world=self.webpackChunktravel_world||[]).push([[579],{188:(e,t,s)=>{s.d(t,{z:()=>a});class a{static async fetchPhotos(e){let{query:t,amount:s,page:a,size:n,orientation:c,color:r}=e;const i=await fetch("https://api.pexels.com/v1/search?\n\t\t\tquery=".concat(t,"\n\t\t\t&per_page=").concat(s,"\n\t\t\t").concat(a?"&page="+a:"","\n\t\t\t").concat(n?"&size="+n:"","\n\t\t\t").concat(c?"&orientation="+c:"","\n\t\t\t").concat(r?"&color="+r:""),{method:"GET",headers:{Authorization:"NbdqIOBp8joqQ7sN65U05Ffnj64ucXNhNxKBFAv0RMub83isPhIK0i6k"}});return await i.json()}}},840:(e,t,s)=>{s.d(t,{A:()=>n});s(43),s(242);var a=s(579);const n=e=>{let{className:t,imgFit:s="cover",src:n,...c}=e;return(0,a.jsx)("div",{className:"image ".concat(t||""),children:(0,a.jsx)("img",{loading:"lazy",src:n,...c,className:"image__content",style:{objectFit:s}})})}},912:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(43);s(242);var n=s(537),c=s(579);const r=e=>{let{className:t,imgFit:s="cover",src:r,skeletonColor:i,...o}=e;const l=function(e){const[t,s]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{if(!e)return;const t=document.createElement("img");t.src=e,t.onload=()=>{s(!0)}}),[e]),t}(r),d=(0,a.useRef)(null);return(0,n.d)(d,"--skeleton-color",i),(0,c.jsx)("div",{className:"image image-skeleton ".concat(t||""," ").concat(l?"":"isLoading"),children:l?(0,c.jsx)("img",{loading:"lazy",src:r,...o,className:"image__content",style:{objectFit:s}}):(0,c.jsx)("div",{ref:d,className:"image__content-skeleton"})})}},32:(e,t,s)=>{s.d(t,{A:()=>n});s(43);var a=s(579);const n=function(e){let{className:t}=e;return(0,a.jsx)("div",{className:"fake-searchbar ".concat(t||""),children:(0,a.jsxs)("div",{className:"fake-searchbar__container",children:[(0,a.jsxs)("div",{className:"fake-searchbar__item-container",children:[(0,a.jsx)("i",{className:"icon-location fake-searchbar__icon"}),(0,a.jsxs)("div",{className:"fake-searchbar__content",children:[(0,a.jsx)("h3",{className:"fake-searchbar__title",children:"Location"}),(0,a.jsx)("p",{className:"fake-searchbar__text",children:"Where are you going?"})]})]}),(0,a.jsxs)("div",{className:"fake-searchbar__item-container fake-searchbar__item-container_mid",children:[(0,a.jsx)("i",{className:"icon-distance fake-searchbar__icon"}),(0,a.jsxs)("div",{className:"fake-searchbar__content",children:[(0,a.jsx)("h3",{className:"fake-searchbar__title",children:"Distance"}),(0,a.jsx)("p",{className:"fake-searchbar__text",children:"Distance k/m"})]})]}),(0,a.jsxs)("div",{className:"fake-searchbar__item-container fake-searchbar__item-container_last",children:[(0,a.jsx)("i",{className:"icon-avatar fake-searchbar__icon"}),(0,a.jsxs)("div",{className:"fake-searchbar__content",children:[(0,a.jsx)("h3",{className:"fake-searchbar__title",children:"Max People"}),(0,a.jsx)("p",{className:"fake-searchbar__text",children:"0"})]})]}),(0,a.jsx)("div",{className:"fake-searchbar__search",children:(0,a.jsx)("i",{className:"icon-search fake-searchbar__search-icon"})})]})})}},989:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(43),n=s(537),c=s(579);const r=function(e){let{skeletonColor:t,className:s}=e;const r=(0,a.useRef)(null);return(0,n.d)(r,"--skeleton-color",t),(0,c.jsx)("div",{ref:r,className:"skeleton-element ".concat(s||"")})}},725:(e,t,s)=>{s.d(t,{A:()=>c});s(43);var a=s(579);const n=function(e){let{iconClass:t,title:s,text:n,className:c}=e;return(0,a.jsxs)("div",{className:"text-card ".concat(c||""),children:[(0,a.jsx)("div",{className:"text-card__icon ".concat(t?"":"no-icon"),children:(0,a.jsx)("i",{className:"text-card__icon-content ".concat(t||"")})}),(0,a.jsxs)("div",{className:"text-card__content",children:[(0,a.jsx)("h3",{className:"text-card__title",children:s}),(0,a.jsx)("p",{className:"text-card__text",children:n})]})]})};const c=function(e){let{className:t,isAnimated:s=!0}=e;return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"service-section ".concat(t||""),children:[(0,a.jsxs)("div",{className:"service-section__header",children:[(0,a.jsx)("h3",{className:"service-section__sub-title",children:"What we serve"}),(0,a.jsx)("h2",{className:"service-section__title",children:"We offer out best services"})]}),(0,a.jsx)("div",{className:"service-section__content ".concat(s?"_scroll-animation-once":""),children:[{icon:"icon-weather",title:"Calculate Weather",text:"Check weather forecasts quickly."},{icon:"icon-guide",title:"Best Tour Guide",text:"Explore with expert guides."},{icon:"icon-customization",title:"Customization",text:"Personalize your travel experience."}].map(((e,t)=>(0,a.jsx)(n,{className:"service-section__text-card service-section__text-card_".concat(t),title:e.title,text:e.text,iconClass:e.icon},t)))})]})})}},414:(e,t,s)=>{s.d(t,{A:()=>i});s(43);var a=s(840),n=s(475),c=s(579);const r=e=>{let{className:t}=e;return(0,c.jsxs)(n.lV,{className:"submit-input ".concat(t||""),method:"post",children:[(0,c.jsx)("input",{placeholder:"Enter your email",className:"submit-input__input",type:"text",name:"title"}),(0,c.jsx)("button",{className:"submit-input__submit",type:"submit",children:"Subscribe"})]})},i=e=>{let{className:t,animated:n=!0}=e;return(0,c.jsx)("div",{className:"subscribe-section ".concat(t||""),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"subscribe-section__container",children:[(0,c.jsxs)("div",{className:"subscribe-section__content",children:[(0,c.jsx)("h2",{className:"subscribe-section__title",children:"Subscribe now to get useful traveling information"}),(0,c.jsx)(r,{className:"subscribe-section__input ".concat(n?"_scroll-animation-once":"")}),(0,c.jsx)("p",{className:"subscribe-section__text",children:"Enter your email to unlock travel secrets, exclusive deals, and expert tips delivered straight to your inbox!"})]}),(0,c.jsx)(a.A,{src:s(345),className:"subscribe-section__image _scroll-animation"})]})})})}},813:(e,t,s)=>{s.d(t,{_:()=>c});var a=s(43),n=s(260);function c(e){const t=(0,a.useContext)(n.x);(0,a.useEffect)((()=>{if(e&&e.current&&t)return t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[])}},78:(e,t,s)=>{s.d(t,{o:()=>n});var a=s(43);function n(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const[s,n]=(0,a.useState)(t),[c,r]=(0,a.useState)(null);return[async function(){try{n(!0),await e(...arguments)}catch(t){t instanceof Error?r(t):r(new Error("Unknown error occurred"))}finally{n(!1)}},s,c]}},537:(e,t,s)=>{s.d(t,{d:()=>c});var a=s(43),n=s(729);function c(e,t,s){(0,a.useEffect)((()=>{s&&(0,n.CJ)(e,t,s)}),[])}},686:(e,t,s)=>{s.d(t,{U:()=>c});var a=s(43),n=s(921);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};const[s,c,r]=(0,n.B)(!1),i=e=>{r(e.matches),t&&e.matches&&t(e)};return(0,a.useEffect)((()=>{const t=window.matchMedia(e);return r(t.matches),t.addEventListener("change",i),()=>{t.removeEventListener("change",i)}}),[]),[s,c]}},921:(e,t,s)=>{s.d(t,{B:()=>n});var a=s(43);function n(e){const[t,s]=(0,a.useState)(e),n=(0,a.useRef)(t);return[t,n,function(e){s(e),n.current=e}]}},960:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var a=s(43),n=s(665),c=s(912),r=s(32),i=s(78),o=s(188),l=s(579);const d=function(e){let{}=e;const[t,s]=(0,a.useState)(["","",""]),[n,d,u]=(0,i.o)((async()=>{const e=await o.z.fetchPhotos({query:"a hiker standing on a mountain ridge above the clouds, an aerial view of a coastal fortress on a small island, and a person in front of the Louvre Pyramid in Paris.",page:Math.round(20*Math.random()),amount:3,orientation:"portrait",size:"medium"});s(e.photos.map((e=>e.src.medium)))}),!0);return(0,a.useEffect)((()=>{n()}),[]),(0,l.jsx)("section",{className:"introduction-section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"introduction-section__container",children:[(0,l.jsxs)("div",{className:"introduction-section__content",children:[(0,l.jsxs)("div",{className:"introduction-section__sub-title",children:[(0,l.jsx)("h3",{className:"_filled-text-orange",children:"Know Before You Go"})," ",(0,l.jsx)("span",{children:"\ud83c\udf0d"})]}),(0,l.jsxs)("h2",{className:"introduction-section__title",children:["Traveling opens the door to creating ",(0,l.jsx)("span",{className:"_colored-orange",children:"memories"})]}),(0,l.jsx)("p",{className:"introduction-section__text",children:"Discover new horizons, explore breathtaking landscapes, and immerse yourself in diverse cultures. Adventure awaits as you embark on journeys that will leave you with unforgettable stories and cherished experiences."})]}),(0,l.jsxs)("div",{className:"introduction-section__images _scroll-animation-once",children:[(0,l.jsx)(c.A,{className:"introduction-section__image introduction-section__image_1",src:t[0],alt:"intro image"}),(0,l.jsx)(c.A,{className:"introduction-section__image introduction-section__image_2",src:t[1],alt:"intro image"}),(0,l.jsx)(c.A,{className:"introduction-section__image introduction-section__image_3",src:t[2],alt:"intro image"})]})]}),(0,l.jsx)(r.A,{})]})})};var u=s(725);const m=function(e){let{title:t,text:s}=e;return(0,l.jsxs)("div",{className:"section-header",children:[(0,l.jsx)("h2",{className:"section-header__title _filled-text-orange",children:t}),(0,l.jsx)("p",{className:"section-header__text",children:s})]})};var h=s(813);const _=e=>{let{className:t,imageClass:s,title:n,text:r,hasScrollAnimation:i,animated:o=!1,...d}=e;const u=(0,a.useRef)(null);return(0,h._)(i?u:null),(0,l.jsxs)("div",{ref:u,onClick:e=>{e.currentTarget.classList.toggle("_active")},className:"collage-image ".concat(t||""," ").concat(n?"dark-image":"light-image"),children:[(0,l.jsx)(c.A,{className:"collage-image__img ".concat(s||""),...d}),r&&(0,l.jsxs)("div",{className:"collage-image__description",children:[(0,l.jsx)("h3",{className:"collage-image__title",children:n}),(0,l.jsx)("h3",{className:"collage-image__text",children:r.toUpperCase()})]})]})};var f=s(686),x=s(921);const p=function(e){let{overscroll:t=10,elements:s,className:n,gap:c=0,elemMinWidth:r,amount:i,swipeByChunks:o=!1,containerClass:d,navigationContainerClass:u,navigationClass:m,elementClass:h,autoScrollingByTime:_}=e;const[f,p]=(0,a.useState)([]),[v,g]=(0,a.useState)(!1),[N,j]=(0,a.useState)(!0),[b,y,k]=(0,x.B)(!1),[w,E,A]=(0,x.B)(!1),[L,S,C]=(0,x.B)(0);function T(e){const a={minWidth:L+"px",borderRight:e==s.length-1?"".concat(t,"px solid transparent"):"none"};let n=null;return n=c?{...a,borderLeft:"".concat(0==e?t:c,"px solid transparent")}:0==e?{...a,borderLeft:"".concat(t,"px solid transparent")}:{...a},n}const W=(0,a.useRef)(setInterval((()=>{}),Number.MAX_SAFE_INTEGER)),z=(0,a.useRef)(0),M=(0,a.useRef)(0),R=(0,a.useRef)(0),I=(0,a.useRef)(0),B=(0,a.useRef)(0),P=(0,a.useRef)(null),F=(0,a.useRef)(null),q=(0,a.useRef)(null);function D(e,t){return t&&(e=Math.floor(e/z.current)),e}function U(e,t,s){s&&(t=Math.floor(t*z.current));const a=e.children[t];e.scrollLeft=a.offsetLeft+a.clientLeft,M.current=t,X(e,s)}function G(e){let t=0;return t=e?Math.ceil(s.length/z.current):s.length-z.current+1,t}function X(e,t){const s=D(M.current,t),a=G(t),n=[];for(let c=0;c<a;c++)n.push((0,l.jsx)("span",{onClick:()=>U(e,c,t),className:"super-duper-slider__navigation = ".concat(c==s?"active":""," ").concat(m||"")},c));p(n)}function J(e){const t=e.lastElementChild.clientLeft;if(r){let s=Math.floor((e.clientWidth+t)/(r+t));e.clientWidth<=r&&(s=1);let a=(e.clientWidth-t*(s-1))/s;z.current!==s&&(z.current=s),window.innerWidth<a?C(e.clientWidth):C(a)}i&&C((e.clientWidth-t*(i-1))/i),function(e,t){e.classList.add("dragging"),setTimeout((()=>{const t=e.children[M.current];e.scrollLeft=t.offsetLeft+t.clientLeft,setTimeout((()=>{e.classList.remove("dragging")}),0)}),0),X(e,t)}(e,o),X(e,o)}function K(e,t,a,n,c){let r=0;0!==n&&(r=(e.scrollLeft-a)/(t-e.scrollLeft));let i=0;return B.current<0?n<s.length-z.current&&r<.3?(i=a,M.current=n-c):(i=t,M.current=n):0!==n&&1/r>.3?(i=a,M.current=n-c):(i=t,M.current=n),i}function O(e){let t=function(e,t){const s=t?z.current:1,a=Array.from(e.children);let n=0;for(let c=0;c<a.length;c+=s){const t=a[c].offsetLeft+a[c].clientLeft;let r=0;if(0!==c&&(r=a[c-s].offsetLeft+a[c-s].clientLeft),!(t<e.scrollLeft&&c<a.length-z.current)){n=K(e,t,r,c,s);break}}return n}(e,o);e.scrollLeft=t}const H=(e,t,s)=>{y.current||E.current?(W.current&&clearInterval(W.current),j(!1),setTimeout((()=>j(!0)),s[1])):N&&(W.current=setInterval((()=>((e,t)=>{let s=D(M.current,t);s>=G(t)-1&&(s=-1),U(e,s+1,t)})(e,t)),s[0]))};return(0,a.useEffect)((()=>{if(_){const e=F.current;if(!e)return;H(e,o,_)}}),_?[N,b,w,s]:[s]),(0,a.useEffect)((()=>{const e=F.current;if(!e)return;const t=function(e){i&&(z.current=i);let t=new ResizeObserver((()=>{J(e)}));return t.observe(e),t}(e),s=t=>function(e,t){e.preventDefault(),k(!0),e instanceof MouseEvent?R.current=e.pageX:R.current=e.touches[0].pageX,I.current=t.scrollLeft}(t,e),a=t=>function(e,t){y.current&&(e.preventDefault(),A(!0),t.classList.add("dragging"),B.current=0,e instanceof MouseEvent?B.current=e.pageX-R.current:B.current=e.touches[0].pageX-R.current,t.scrollLeft=I.current-B.current)}(t,e),n=()=>(e=>{k(!1),e.classList.remove("dragging"),E.current&&(A(!1),O(e),X(e,o))})(e);return e.addEventListener("mousedown",s),e.addEventListener("touchstart",s),document.addEventListener("mousemove",a),e.addEventListener("touchmove",a),document.addEventListener("mouseup",n),e.addEventListener("touchend",n),J(e),setTimeout((()=>g(!0)),5),()=>{t&&t.disconnect(),e.removeEventListener("mousedown",s),e.removeEventListener("touchstart",s),document.removeEventListener("mousemove",a),e.removeEventListener("touchmove",a),document.removeEventListener("mouseup",n),e.removeEventListener("touchend",n)}}),[s]),(0,l.jsxs)("div",{ref:P,className:"super-duper-slider ".concat(n||""),children:[(0,l.jsx)("div",{ref:F,className:"super-duper-slider__container ".concat(d||""),children:s.map(((e,t)=>(0,l.jsx)("div",{className:"super-duper-slider__element-container ".concat(h||""),style:T(t),children:v?e:(0,l.jsx)("div",{})},t)))}),(0,l.jsx)("div",{ref:q,className:"super-duper-slider__navigation-container ".concat(u||""),children:f})]})};var v=s(989);const g=[{title:"Big Ben",description:"London"},{title:"Bali",description:"Indonesia"},{title:"Sydney",description:"Australia"},{title:"Dubai",description:"UAE"},{title:"Phetchabun",description:"THAILAND"},{title:"Paris",description:"FRANCE"},{title:"Wuxi",description:"CHINA"}];const N=function(e){let{className:t}=e;const[s,n]=(0,f.U)("(max-width: 768px)"),[c,r]=(0,a.useState)(),[d,u]=(0,a.useState)(null),[h,x]=(0,a.useState)(null),[N,j,b]=(0,i.o)((async()=>{const e=await Promise.all(g.map((e=>o.z.fetchPhotos({query:e.title+" "+e.description,page:Math.round(20*Math.random()),amount:1,orientation:"Sydney"!==e.title||n.current?"portrait":"landscape",size:"medium"})))),t=g.map(((t,s)=>({title:t.title,description:t.description,src:e[s].photos[0].src.large})));r(t)}),!0);return(0,a.useEffect)((()=>{c&&(n.current?u(c.map(((e,t)=>(0,l.jsx)(_,{hasScrollAnimation:!0,src:e.src,title:e.title,text:e.description,className:"featured-tours__image-slider"},t)))):x(c.map(((e,t)=>(0,l.jsx)(_,{hasScrollAnimation:!0,src:e.src,title:e.title,text:e.description,className:"featured-tours__image featured-tours__image_".concat(t+1)},t)))))}),[c]),(0,a.useEffect)((()=>{N()}),[]),(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"featured-tours ".concat(t||""),children:[(0,l.jsx)(m,{title:"Explore",text:"Our featured tours"}),s?(0,l.jsx)("div",{className:"featured-tours__slider",children:j||!d?(0,l.jsx)(v.A,{className:"featured-tours__image-slider_skeleton"}):(0,l.jsx)(p,{gap:15,elements:d,elemMinWidth:200})}):(0,l.jsx)("div",{className:"featured-tours__collage",children:j||!h?Array.from({length:7},((e,t)=>(0,l.jsx)(v.A,{className:"featured-tours__image_skeleton featured-tours__image_".concat(t+1)},t))):h})]})})};const j=function(e){let{title:t,text:s,className:a}=e;return(0,l.jsxs)("div",{className:"metric-icon ".concat(a||""),children:[(0,l.jsx)("div",{className:"metric-icon__header",children:(0,l.jsx)("h4",{className:"metric-icon__title",children:t})}),(0,l.jsx)("p",{className:"metric-icon__text",children:s})]})};var b=s(840);const y=function(e){let{className:t}=e;return(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"experience-section ".concat(t||""),children:[(0,l.jsx)(m,{title:"Experience",text:"With our all experience will serve you"}),(0,l.jsx)("p",{className:"experience-section__text",children:"We have organized numerous trips, satisfied countless clients, and accumulated years of expertise to ensure your travels are unforgettable."}),(0,l.jsxs)("div",{className:"experience-section__metrics _scroll-animation-once",children:[(0,l.jsx)(j,{title:"12k+",text:"Successful trip",className:"experience-section__metric experience-section__metric_1"}),(0,l.jsx)(j,{title:"2k+",text:"Regular clients",className:"experience-section__metric experience-section__metric_2"}),(0,l.jsx)(j,{title:"15",text:"Year experience",className:"experience-section__metric experience-section__metric_3"})]}),(0,l.jsx)(b.A,{className:"experience-section__image",imgFit:"contain",src:s(98)})]})})};const k=function(e){let{className:t}=e;const[s,n]=(0,f.U)("(max-width: 768px)"),[c,r]=(0,a.useState)(null),[d,u]=(0,a.useState)(null),[h,x]=(0,a.useState)(null),[g,N,j]=(0,i.o)((async()=>{const e=await o.z.fetchPhotos({query:"our customers travelling gallery",amount:8,page:Math.round(20*Math.random()),size:"medium",orientation:"portrait"});r(e.photos.map((e=>e.src.large)))}),!0);return(0,a.useEffect)((()=>{c&&(n.current?u(c.map(((e,t)=>(0,l.jsx)(_,{hasScrollAnimation:!0,src:e,className:"gallery-section__image-slider"},t)))):x(c.map(((e,t)=>(0,l.jsx)(_,{hasScrollAnimation:!0,src:e,className:"gallery-section__image gallery-section__image_".concat(t+1," _scroll-animation")},t)))))}),[c]),(0,a.useEffect)((()=>{g()}),[]),(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"gallery-section ".concat(t||""),children:[(0,l.jsx)(m,{title:"Gallery",text:"Visit our customers tour gallery"}),s&&d?(0,l.jsx)("div",{className:"gallery-section__slider",children:N||!d?(0,l.jsx)(v.A,{className:"gallery-section__image-slider_skeleton"}):(0,l.jsx)(p,{gap:15,elements:d,elemMinWidth:200})}):(0,l.jsx)("div",{className:"gallery-section__collage",children:N||!h?Array.from({length:8},((e,t)=>(0,l.jsx)(v.A,{className:"gallery-section__image_skeleton gallery-section__image_".concat(t+1)},t))):h})]})})},w=e=>{let{text:t,imgSrc:s,name:a,role:n,className:r}=e;return(0,l.jsxs)("div",{className:"user-comment ".concat(r||""),children:[(0,l.jsx)("p",{className:"user-comment__text",children:t}),(0,l.jsxs)("div",{className:"user-comment__user",children:[(0,l.jsx)(c.A,{className:"user-comment__image",src:s}),(0,l.jsxs)("div",{className:"user-comment__user-info",children:[(0,l.jsx)("h4",{className:"user-comment__name",children:a}),(0,l.jsx)("p",{className:"user-comment__role",children:n})]})]})]})},E=[{name:"John Deep",role:"Customer",text:"Travel World made booking my recent trip a breeze. Their website was easy to navigate and offered a great selection of travel options. I found a perfect hotel at a fantastic price and the booking process was smooth and secure."},{name:"Ally Gomez",role:"Customer",text:"I wasn't sure where to start planning my vacation, so I contacted Travel World. Their customer service representatives were incredibly helpful and knowledgeable. They listened to my preferences and put together a personalized itinerary that exceeded my expectations."},{name:"John Deep",role:"Customer",text:"I've used Travel World for several trips now and I've always had a positive experience. They consistently offer competitive prices and a wide variety of travel options. Their website is user-friendly and the booking process is efficient."},{name:"Alex Bugg",role:"Customer",text:"Travel World's customer service is top-notch! They were friendly, patient, and always available to answer my questions. They helped me navigate the travel planning process with ease and ensured I had everything I needed for a stress-free vacation."},{name:"Johny Dep",role:"Customer",text:"Travel World offers a one-stop shop for all my travel needs. From booking flights and hotels to finding car rentals and tours, they have it all. Their website is comprehensive and allows me to easily compare different options to find the best deals."},{name:"Pidrahui Semen",role:"Customer",text:"Thanks to Travel World, my recent vacation was a success! Their expertise and attention to detail ensured I had a smooth and enjoyable travel experience. I would highly recommend them to anyone planning a trip."}],A=e=>{let{className:t}=e;const[s,n]=(0,a.useState)(null),[c,r]=(0,a.useState)(null),[d,u]=(0,a.useState)(null),[h,_,f]=(0,i.o)((async()=>{const e=await o.z.fetchPhotos({query:"human official colorful smile face",amount:6,page:Math.round(20*Math.random()),orientation:"portrait",size:"small"});r(e.photos.map((e=>({name:e.photographer,src:e.src.medium}))))}),!0);return(0,a.useEffect)((()=>{s&&s[0].src&&u(s.map(((e,t)=>(0,l.jsx)(w,{className:"feedback-section__comment",name:e.name,imgSrc:e.src?e.src:"",text:e.text,role:e.role},t))))}),[s]),(0,a.useEffect)((()=>{s&&c&&n(s.map(((e,t)=>({...e,src:c[t].src,name:c[t].name}))))}),[c]),(0,a.useEffect)((()=>{n(E),h()}),[]),(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"feedback-section ".concat(t||""),children:[(0,l.jsx)(m,{title:"Fans Love",text:"What our fans say about us"}),d?(0,l.jsx)(p,{elements:d,elemMinWidth:300,className:"feedback-section__slider",elementClass:"feedback-section__slider-element",autoScrollingByTime:[5e3,3e4]}):(0,l.jsx)(v.A,{className:"feedback-section__slider_skeleton"})]})})};var L=s(414),S=s(948);const C=function(e){let{}=e;const t=(0,n.r)();return(0,S.A)(),(0,a.useEffect)((()=>{t("all")}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(u.A,{className:"home-page__service"}),(0,l.jsx)(N,{className:"home-page__featured-tours"}),(0,l.jsx)(y,{className:"home-page__experience"}),(0,l.jsx)(k,{className:"home-page__gallery"}),(0,l.jsx)(A,{className:"home-page__gallery"}),(0,l.jsx)(L.A,{})]})}},242:()=>{},98:(e,t,s)=>{e.exports=s.p+"static/media/tourist 1.039ae4d89747914e0278.png"},345:(e,t,s)=>{e.exports=s.p+"static/media/tourist 2.3a581c8f654ee61635c5.png"}}]);
//# sourceMappingURL=579.15edf517.chunk.js.map