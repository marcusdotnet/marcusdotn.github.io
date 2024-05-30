"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[418],{5815:function(e,t,l){l.d(t,{z:function(){return o}});var r=l(1721),n=l(7294);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const e={};Object.assign(e,this.props),e.className=`${e.btnType} button ${null==e?void 0:e.className}`;return n.createElement("button",Object.assign({},e,{onClick:t=>{e.gotoSectionId&&(window.location.hash=e.gotoSectionId),e.onClick&&e.onClick(t)}}),this.props.children)},t}(n.Component)},8725:function(e,t,l){l.d(t,{M:function(){return c},Z:function(){return a}});var r=l(7294);function n(e){let{direction:t,scale:l=100}=e;return"left"===t?r.createElement("svg",{style:{scale:`${l}%`},width:"72",height:"138",viewBox:"0 0 72 138",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M67 5L3 69L67 133",stroke:"white",strokeOpacity:"0.6",strokeWidth:"6",strokeLinecap:"square",strokeLinejoin:"round"})):"right"===t?r.createElement("svg",{style:{scale:`${l}%`},width:"72",height:"138",viewBox:"0 0 72 138",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5 133L69 69L5 5",stroke:"white",strokeOpacity:"0.6",strokeWidth:"6",strokeLinecap:"square",strokeLinejoin:"round"})):void 0}var o=l(5518);function c(e){return r.createElement("div",{style:e.style,className:`flex flex-row w-fit h-fit items-center text-4xl font-black ${o.tq&&"text-center"} ${null==e?void 0:e.className}`},r.createElement(n,{scale:70,direction:"left"}),null==e?void 0:e.children,r.createElement(n,{scale:70,direction:"right"}))}function a(e){return r.createElement("section",e,(null==e?void 0:e.header)&&("string"==typeof e.header?r.createElement(c,null,e.header):e.header),null==e?void 0:e.children)}},7912:function(e,t,l){l.r(t),l.d(t,{default:function(){return T}});var r={};l.r(r),l.d(r,{eh:function(){return O},u2:function(){return B},B9:function(){return q},n7:function(){return Z}});var n=l(5785),o=l(7294),c=l(5815),a=l(8725),i="ProjectCard-module--projectcard--1c97a",s="ProjectCard-module--projectcard_category--24434",m="ProjectCard-module--projectcard_image--e8b94",u="ProjectCard-module--projectcard_title--80b4a",d="ProjectCard-module--projectcard_title_container--94443";function p(e){let{project:t,onClick:l}=e;const r=t.images,n=0!=r.length?r[0]:"/static/img/placeholder.jpeg";return o.createElement("div",{className:i,onClick:l},o.createElement("img",{className:m,src:n,alt:"Project card image"}),o.createElement("div",{className:d},o.createElement("label",{className:u},t.title),o.createElement("label",{className:s},t.category)))}var h=l(448),f="ProjectViewDetails-module--backbutton--337b2",E="ProjectViewDetails-module--container--7f029",w="ProjectViewDetails-module--content--b8f4e",j="ProjectViewDetails-module--gallery_image--42ab4",g="ProjectViewDetails-module--invalid_link--519db",v="ProjectViewDetails-module--project_category--e93d4",k="ProjectViewDetails-module--project_description--1e970",b="ProjectViewDetails-module--project_details_container--e244c",y="ProjectViewDetails-module--project_gallery--d2ff1",_="ProjectViewDetails-module--project_header--ab884",N="ProjectViewDetails-module--project_info_container--42d0b",C="ProjectViewDetails-module--project_title--246a9",P="ProjectViewDetails-module--project_view_button--00665",x="ProjectViewDetails-module--project_view_container--a5145",S="ProjectViewDetails-module--project_view_title--afffb";function L(e){var t;let{project:l,onClose:r}=e;const n=()=>o.createElement("button",{className:`neutral ${f}`,onClick:r},o.createElement("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M19 12H5",stroke:"#E9E9E9","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o.createElement("path",{d:"M12 19L5 12L12 5",stroke:"#E9E9E9","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})));return o.createElement("div",{className:E},o.createElement("div",{className:w},o.createElement("div",{className:b},o.createElement("div",{className:N},o.createElement("div",{className:_},o.createElement("p",{className:v},l.category),o.createElement("h3",{className:`${C} mb-8`},l.title)),o.createElement("p",{className:k},(null==l?void 0:l.description)||"Oops, this project has no description!")),o.createElement("div",{className:x},null!=l&&l.link?o.createElement(o.Fragment,null,o.createElement("label",{className:S},"Want to see for yourself?"),o.createElement("a",{className:`button neutral ${P}`,href:l.link,target:"_blank"},"Open project",o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.createElement("polyline",{points:"12 5 19 12 12 19"})))):o.createElement("p",{className:g},"I'd let you open the project but that's not possible at the moment :("))),o.createElement("div",{className:y},null===(t=l.images)||void 0===t?void 0:t.map((e=>o.createElement("img",{className:j,src:e}))))),o.createElement(n,null))}var D="ProjectsSection-module--filter_by--9f879",V="ProjectsSection-module--filter_container--811db",W="ProjectsSection-module--filter_options_container--6aef0",$="ProjectsSection-module--project_container--7a9e2",M=l(5518),O="MobileProjectCarousel-module--carousel_btn--52250",B="MobileProjectCarousel-module--carousel_btn_right--d5885",q="MobileProjectCarousel-module--project_carousel--5a1a9",Z="MobileProjectCarousel-module--project_container--1741b";function H(e){let{children:t}=e;if(!t)return null;const l=(0,o.useRef)(null);var n=0;const{0:c,1:a}=(0,o.useState)(!1),{0:i,1:s}=(0,o.useState)(!1),m=e=>{const t=l.current;var r=.25*t.scrollWidth;"left"===e&&(r=-r),t.scrollBy({top:0,left:r,behavior:"smooth"})};return(0,o.useEffect)((()=>{const e=l.current;a(e.scrollWidth>document.body.clientWidth)}),[t]),o.createElement("div",{className:`${q} ${r.carousel_btn_left}`,onScrollCapture:e=>{const t=l.current;(n=t.scrollLeft)+t.clientWidth<t.scrollWidth?a(!0):a&&a(!1),n>0?s(!0):i&&s(!1)}},i&&o.createElement("button",{className:O,onClick:()=>m("left")},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("polyline",{points:"15 18 9 12 15 6"}))),o.createElement("div",{ref:l,className:Z,style:{scrollbarWidth:"none"}},t),c&&o.createElement("button",{className:`${O} ${B}`,onClick:()=>m("right")},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("polyline",{points:"9 18 15 12 9 6"}))))}function T(){const{0:e,1:t}=(0,o.useState)(null),{0:l,1:r}=(0,o.useState)(M.tq),{0:i,1:s}=(0,o.useState)(null),m=h.Z.PROJECTS,u=(0,n.Z)(new Set(m.map((e=>e.category)))),d=l=>{var r;let{children:n,category:c}=l;return o.createElement("button",{className:e===c?"text-purple-500":"",onClick:()=>t(c)},n||c," (",(null===(r=m.filter((e=>e.category===c)))||void 0===r?void 0:r.length)||m.length,")")},f=null!=e?m.filter((t=>t.category===e)):m,{0:E,1:w}=(0,o.useState)([]);(0,o.useEffect)((()=>{w(l?f:f.filter(((e,t)=>t<3)))}),[l,e]);const j=()=>E.map(((e,t)=>o.createElement(p,{key:t,project:e,onClick:()=>s(t)})));return o.createElement(a.Z,{header:"My projects",id:"projects",className:"h-fit flex flex-col items-center pb-80 pt-20"},o.createElement("div",{className:V},o.createElement("label",{className:D},"Filter by"),o.createElement("div",{className:W},o.createElement(d,{category:null},"All"),u.map((e=>o.createElement(d,{key:e,category:e}))))),M.tq?o.createElement(H,null,o.createElement(j,null)):o.createElement("div",{className:$,style:{maxHeight:"55em"}},o.createElement(j,null)),!M.tq&&f.length>3&&(l?o.createElement(c.z,{btnType:"transparentWhiteborder",onClick:()=>r(!1)},"SHOW LESS"):o.createElement(c.z,{btnType:"filledPrimary",onClick:()=>r(!0)},"SHOW MORE")),null!=i&&o.createElement(L,{project:m[i],onClose:()=>{s(null),w((0,n.Z)(E))}}))}}}]);
//# sourceMappingURL=component---src-pages-sections-projects-section-tsx-18a1adeafbbc1d57572b.js.map