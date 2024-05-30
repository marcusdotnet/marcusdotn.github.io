"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[691],{5815:function(e,t,n){n.d(t,{z:function(){return o}});var l=n(1721),r=n(7294);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){const e={};Object.assign(e,this.props),e.className=`${e.btnType} button ${null==e?void 0:e.className}`;return r.createElement("button",Object.assign({},e,{onClick:t=>{e.gotoSectionId&&(window.location.hash=e.gotoSectionId),e.onClick&&e.onClick(t)}}),this.props.children)},t}(r.Component)},2708:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return m}});var l=n(7294),r=n(6906),o=n(3771),a=n(7912),c=n(8367),i=n(2650);function s(e){return l.createElement("div",{className:`w-full ${null!=e&&e.className?e.className:""}`,style:{background:`linear-gradient(180deg, ${e.startColor} ${e.start}, ${e.endColor} ${e.end})`,...null==e?void 0:e.style}})}const u=()=>l.createElement("title",null,"< my portfolio />");function m(){const e=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var t;const n=t=>{var n;const l=t.target;let r=null,o=null;Array.from(l.children).forEach((e=>{if(!(e instanceof HTMLElement)||"section"!==e.tagName.toLowerCase())return;const t=e,n=t.getBoundingClientRect(),l=n.top,a=n.height,c=window.innerHeight/2,i=l+a/2,s=Math.abs(c-i)/a;s<(o||1/0)&&(o=s,r=t.id)})),null===(n=e.current)||void 0===n||n.setAttribute("section",r||"intro")};return null===(t=e.current)||void 0===t||t.addEventListener("scroll",n),()=>{var t;null===(t=e.current)||void 0===t||t.removeEventListener("scroll",n)}}),[]),l.createElement("main",{ref:e,id:"page-container",className:"absolute top-0 left-0 w-full h-screen overflow-y-scroll overflow-x-hidden",style:{backgroundColor:"var(--background-color)"}},l.createElement(r.default,null),l.createElement(o.default,null),l.createElement(a.default,null),l.createElement(c.default,null),l.createElement(s,{start:"6%",end:"30%",startColor:"var(--background-color)",endColor:"black",className:"h-1/3"}),l.createElement(i.default,null))}},8367:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var l={};n.r(l),n.d(l,{LI:function(){return c},ZN:function(){return i},nC:function(){return s},kQ:function(){return u},gO:function(){return m},We:function(){return d},uN:function(){return p},$_:function(){return E},MC:function(){return f},UR:function(){return h},xu:function(){return g},p1:function(){return w},i7:function(){return v},TN:function(){return b}});var r=n(7294),o=n(8725),a=n(448),c="ExperienceDropdown-module--button--9e1f2",i="ExperienceDropdown-module--button_alt--48302",s="ExperienceDropdown-module--container--28291",u="ExperienceDropdown-module--content--5678d",m="ExperienceDropdown-module--content_alt--e0945",d="ExperienceDropdown-module--datespan--28937",p="ExperienceDropdown-module--mobile_expanded_indicator--a7a33",E="ExperienceDropdown-module--mobile_title--65cbf",f="ExperienceDropdown-module--mobile_wrapper--b8f80",h="ExperienceDropdown-module--skill--07b0b",g="ExperienceDropdown-module--skill_alt--348c2",w="ExperienceDropdown-module--skills_container--da8ab",v="ExperienceDropdown-module--status--e5132",b="ExperienceDropdown-module--title--3eca3",k=n(5518);const N=e=>{let{isExpanded:t}=e;return t?r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5 12H19",stroke:"#F1F1F1","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"})):r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M12 5V19",stroke:"#F1F1F1","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}),r.createElement("path",{d:"M5 12H19",stroke:"#F1F1F1","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}))};function j(e){let{experience:t,defaultExpanded:n=!1,onToggle:o}=e;const{0:a,1:j}=(0,r.useState)(n),x=t.isAlt;return r.createElement("div",{className:`${s}`},r.createElement("button",{className:`${c} ${x?i:""}`,onClick:()=>{j(!a),o&&o(a)}},k.tq?r.createElement("div",{className:f},r.createElement("div",{className:E},r.createElement("span",{className:b},t.title),r.createElement("span",{className:d},t.start," - ",t.end)),r.createElement("span",{className:p},r.createElement(N,{isExpanded:a}))):r.createElement(r.Fragment,null,r.createElement("p",{className:b},t.title),r.createElement("div",{className:v},r.createElement("span",null,t.start," - ",t.end),r.createElement(N,{isExpanded:a})))),r.createElement("div",{className:`${u} ${x?m:""} ${a?"h-fit p-4":"h-0 p-0 visible"}`},r.createElement("p",{className:l.description},t.description),r.createElement("div",{className:w},t.skills.map(((e,t)=>r.createElement("span",{key:t,className:`${h} ${x?g:""}`},e))))))}var x="ExperienceSection-module--experience_container--6b2b2";function _(){const e=a.Z.EXPERIENCE;return r.createElement(o.Z,{header:"Professional experience",id:"experience",className:"h-fit flex flex-col items-center pb-80 pt-20"},r.createElement("div",{className:x},e.map(((e,t)=>r.createElement(j,{key:t,experience:e})))))}},6906:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var l=n(7294),r=n(5815),o=n(8725);function a(){return l.createElement(o.Z,{id:"intro",className:"h-screen flex flex-col",header:l.createElement(o.M,{className:"font-black text-4xl text-nowrap self-center mt-80"},"Hi, ",l.createElement("br",null),"I'm marcus"),style:{background:"linear-gradient(180deg, #241F35 6%, var(--background-color) 80%)"}},l.createElement("div",{className:"flex flex-col gap-7 self-center mt-10 items-center text-center"},l.createElement("p",null,"full-stack developer, app dev & game enthusiast"),l.createElement(r.z,{className:"mt-16",btnType:"transparentWhiteborder",gotoSectionId:"skills"},"GET TO KNOW ME")))}},7912:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var l={};n.r(l),n.d(l,{eh:function(){return I},u2:function(){return L},B9:function(){return O},n7:function(){return T}});var r=n(5785),o=n(7294),a=n(5815),c=n(8725),i="ProjectCard-module--projectcard--1c97a",s="ProjectCard-module--projectcard_category--24434",u="ProjectCard-module--projectcard_image--e8b94",m="ProjectCard-module--projectcard_title--80b4a",d="ProjectCard-module--projectcard_title_container--94443";function p(e){let{project:t,onClick:n}=e;const l=t.images,r=0!=l.length?l[0]:"/static/img/placeholder.jpeg";return o.createElement("div",{className:i,onClick:n},o.createElement("img",{className:u,src:r,alt:"Project card image"}),o.createElement("div",{className:d},o.createElement("label",{className:m},t.title),o.createElement("label",{className:s},t.category)))}var E=n(448),f="ProjectViewDetails-module--backbutton--337b2",h="ProjectViewDetails-module--container--7f029",g="ProjectViewDetails-module--content--b8f4e",w="ProjectViewDetails-module--gallery_image--42ab4",v="ProjectViewDetails-module--invalid_link--519db",b="ProjectViewDetails-module--project_category--e93d4",k="ProjectViewDetails-module--project_description--1e970",N="ProjectViewDetails-module--project_details_container--e244c",j="ProjectViewDetails-module--project_gallery--d2ff1",x="ProjectViewDetails-module--project_header--ab884",_="ProjectViewDetails-module--project_info_container--42d0b",y="ProjectViewDetails-module--project_title--246a9",C="ProjectViewDetails-module--project_view_button--00665",P="ProjectViewDetails-module--project_view_container--a5145",D="ProjectViewDetails-module--project_view_title--afffb";function S(e){var t;let{project:n,onClose:l}=e;const r=()=>o.createElement("button",{className:`neutral ${f}`,onClick:l},o.createElement("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M19 12H5",stroke:"#E9E9E9","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o.createElement("path",{d:"M12 19L5 12L12 5",stroke:"#E9E9E9","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})));return o.createElement("div",{className:h},o.createElement("div",{className:g},o.createElement("div",{className:N},o.createElement("div",{className:_},o.createElement("div",{className:x},o.createElement("p",{className:b},n.category),o.createElement("h3",{className:`${y} mb-8`},n.title)),o.createElement("p",{className:k},(null==n?void 0:n.description)||"Oops, this project has no description!")),o.createElement("div",{className:P},null!=n&&n.link?o.createElement(o.Fragment,null,o.createElement("label",{className:D},"Want to see for yourself?"),o.createElement("a",{className:`button neutral ${C}`,href:n.link,target:"_blank"},"Open project",o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.createElement("polyline",{points:"12 5 19 12 12 19"})))):o.createElement("p",{className:v},"I'd let you open the project but that's not possible at the moment :("))),o.createElement("div",{className:j},null===(t=n.images)||void 0===t?void 0:t.map((e=>o.createElement("img",{className:w,src:e}))))),o.createElement(r,null))}var $="ProjectsSection-module--filter_by--9f879",M="ProjectsSection-module--filter_container--811db",V="ProjectsSection-module--filter_options_container--6aef0",W="ProjectsSection-module--project_container--7a9e2",F=n(5518),I="MobileProjectCarousel-module--carousel_btn--52250",L="MobileProjectCarousel-module--carousel_btn_right--d5885",O="MobileProjectCarousel-module--project_carousel--5a1a9",T="MobileProjectCarousel-module--project_container--1741b";function H(e){let{children:t}=e;if(!t)return null;const n=(0,o.useRef)(null);var r=0;const{0:a,1:c}=(0,o.useState)(!1),{0:i,1:s}=(0,o.useState)(!1),u=e=>{const t=n.current;var l=.25*t.scrollWidth;"left"===e&&(l=-l),t.scrollBy({top:0,left:l,behavior:"smooth"})};return(0,o.useEffect)((()=>{const e=n.current;c(e.scrollWidth>document.body.clientWidth)}),[t]),o.createElement("div",{className:`${O} ${l.carousel_btn_left}`,onScrollCapture:e=>{const t=n.current;(r=t.scrollLeft)+t.clientWidth<t.scrollWidth?c(!0):c&&c(!1),r>0?s(!0):i&&s(!1)}},i&&o.createElement("button",{className:I,onClick:()=>u("left")},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("polyline",{points:"15 18 9 12 15 6"}))),o.createElement("div",{ref:n,className:T,style:{scrollbarWidth:"none"}},t),a&&o.createElement("button",{className:`${I} ${L}`,onClick:()=>u("right")},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("polyline",{points:"9 18 15 12 9 6"}))))}function Z(){const{0:e,1:t}=(0,o.useState)(null),{0:n,1:l}=(0,o.useState)(F.tq),{0:i,1:s}=(0,o.useState)(null),u=E.Z.PROJECTS,m=(0,r.Z)(new Set(u.map((e=>e.category)))),d=n=>{var l;let{children:r,category:a}=n;return o.createElement("button",{className:e===a?"text-purple-500":"",onClick:()=>t(a)},r||a," (",(null===(l=u.filter((e=>e.category===a)))||void 0===l?void 0:l.length)||u.length,")")},f=null!=e?u.filter((t=>t.category===e)):u,{0:h,1:g}=(0,o.useState)([]);(0,o.useEffect)((()=>{g(n?f:f.filter(((e,t)=>t<3)))}),[n,e]);const w=()=>h.map(((e,t)=>o.createElement(p,{key:t,project:e,onClick:()=>s(t)})));return o.createElement(c.Z,{header:"My projects",id:"projects",className:"h-fit flex flex-col items-center pb-80 pt-20"},o.createElement("div",{className:M},o.createElement("label",{className:$},"Filter by"),o.createElement("div",{className:V},o.createElement(d,{category:null},"All"),m.map((e=>o.createElement(d,{key:e,category:e}))))),F.tq?o.createElement(H,null,o.createElement(w,null)):o.createElement("div",{className:W,style:{maxHeight:"55em"}},o.createElement(w,null)),!F.tq&&f.length>3&&(n?o.createElement(a.z,{btnType:"transparentWhiteborder",onClick:()=>l(!1)},"SHOW LESS"):o.createElement(a.z,{btnType:"filledPrimary",onClick:()=>l(!0)},"SHOW MORE")),null!=i&&o.createElement(S,{project:u[i],onClose:()=>{s(null),g((0,r.Z)(h))}}))}},3771:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(7294),r="SkillCard-module--skillcard--fe20a",o="SkillCard-module--titleicon--8dbe0";function a(e){return l.createElement("div",Object.assign({},e,{className:`${r} ${null!=e.className?e.className:""}`}),l.createElement("h2",null,l.createElement("img",{src:e.titleIconSrc,alt:e.title,className:o}),e.title),l.createElement("p",null,e.content))}var c=n(8725),i=n(5518),s="SkillsSection-module--section--89a56";function u(){return l.createElement(c.Z,{header:"My skills",id:"skills",className:s},l.createElement("div",{className:`flex ${i.tq?"flex-col":"flex-row"} w-4/5 h-fit gap-4 mt-20`},l.createElement(a,{title:"Full-stack Web Development",titleIconSrc:"/static/img/logo_html.png",content:"Experience in developing full-stack applications, primarily using ASP.NET, Next.js, Express.js and React"}),l.createElement(a,{title:"Cross-platform Application Development",titleIconSrc:"/static/img/logo_desktop.png",content:"Passionate about designing applications that look beautiful while also prioritizing the user experience"}),l.createElement(a,{title:"UI/UX Design",titleIconSrc:"/static/img/logo_figma.png",content:"Software should adapt to every platform - I can make that happen using Electron, .NET MAUI & Capacitor"})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-18871db73ae5253d621a.js.map