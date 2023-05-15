"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9514,4972],{90606:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(67294),l=a(86010),o=a(10833),r=a(35281),c=a(43320),i=a(53438),s=a(74477),d=a(1116),m=a(7452),u=a(95999),b=a(12466),p=a(85936);const h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(c(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var g=a(16550),v=a(68612),_=a(6023);const k="expandButton_m80_",C="expandButtonIcon_BlDH";function S(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:k,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(_.Z,{className:C}))}const I={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function N(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function Z(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,g.TH)(),[i,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return n.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,I.docSidebarContainer,a&&I.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(I.docSidebarContainer)&&a&&s(!0)}},n.createElement(N,null,n.createElement("div",{className:(0,l.Z)(I.sidebarViewport,i&&I.sidebarViewportHidden)},n.createElement(v.Z,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&n.createElement(S,{toggleSidebar:d}))))}const T={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function y(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(T.docMainContainer,(t||!o)&&T.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",T.docItemWrapper,t&&T.docItemWrapperEnhanced)},a))}const x="docPage__5DB",w="docsWrapper_BCFX";function L(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.default,{wrapperClassName:w},n.createElement(f,null),n.createElement("div",{className:x},a&&n.createElement(Z,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(y,{hiddenSidebarContainer:l},t)))}var A=a(4972),M=a(90197);function B(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(M.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function F(e){const{versionMetadata:t}=e,a=(0,i.hI)(e);if(!a)return n.createElement(A.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(B,e),n.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(L,null,c)))))}},68612:(e,t,a)=>{a.d(t,{Z:()=>J});var n=a(67294),l=a(87524),o=a(86010),r=a(86668),c=a(21327),i=a(95999),s=a(6023);const d="collapseSidebarButton_PEFL",m="collapseSidebarButtonIcon_kv0_";function u(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,i.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",d),onClick:t},n.createElement(s.Z,{className:m}))}var b=a(35281),p=a(59689),h=a(12466),E=a(87462),f=a(902);const g=Symbol("EmptyContext"),v=n.createContext(g);function _(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(v.Provider,{value:o},t)}var k=a(86043),C=a(53438),S=a(48596),I=a(39960),N=a(72389);function Z(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,i.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function T(e){let{item:t,onItemClick:a,activePath:l,level:c,index:i,...s}=e;const{items:d,label:m,collapsible:u,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:_}}}=(0,r.L)(),T=function(e){const t=(0,N.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,C.Wl)(e):void 0),[e,t])}(t),y=(0,C._F)(t,l),x=(0,S.Mg)(h,l),{collapsed:w,setCollapsed:L}=(0,k.u)({initialState:()=>!!u&&(!y&&t.collapsed)}),{expandedItem:A,setExpandedItem:M}=function(){const e=(0,n.useContext)(v);if(e===g)throw new f.i6("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!w),M(e?null:i),L(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,f.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:y,collapsed:w,updateCollapsed:B}),(0,n.useEffect)((()=>{u&&null!=A&&A!==i&&_&&L(!0)}),[u,A,i,L,_]),n.createElement("li",{className:(0,o.Z)(b.k.docs.docSidebarItemCategory,b.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":w},p)},n.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":x})},n.createElement(I.Z,(0,E.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!h&&u,"menu__link--active":y}),onClick:u?e=>{a?.(t),h?B(!1):(e.preventDefault(),B())}:()=>{a?.(t)},"aria-current":x?"page":void 0,"aria-expanded":u?!w:void 0,href:u?T??"#":T},s),m),h&&u&&n.createElement(Z,{categoryLabel:m,onClick:e=>{e.preventDefault(),B()}})),n.createElement(k.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:w},n.createElement(H,{items:d,tabIndex:w?-1:0,onItemClick:a,activePath:l,level:c+1})))}var y=a(13919),x=a(39471);const w="menuExternalLink_NmtK";function L(e){let{item:t,onItemClick:a,activePath:l,level:r,index:c,...i}=e;const{href:s,label:d,className:m,autoAddBaseUrl:u}=t,p=(0,C._F)(t,l),h=(0,y.Z)(s);return n.createElement("li",{className:(0,o.Z)(b.k.docs.docSidebarItemLink,b.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),key:d},n.createElement(I.Z,(0,E.Z)({className:(0,o.Z)("menu__link",!h&&w,{"menu__link--active":p}),autoAddBaseUrl:u,"aria-current":p?"page":void 0,to:s},h&&{onClick:a?()=>a(t):void 0},i),d,!h&&n.createElement(x.Z,null)))}const A="menuHtmlItem_M9Kj";function M(e){let{item:t,level:a,index:l}=e;const{value:r,defaultStyle:c,className:i}=t;return n.createElement("li",{className:(0,o.Z)(b.k.docs.docSidebarItemLink,b.k.docs.docSidebarItemLinkLevel(a),c&&[A,"menu__list-item"],i),key:l,dangerouslySetInnerHTML:{__html:r}})}function B(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(T,(0,E.Z)({item:t},a));case"html":return n.createElement(M,(0,E.Z)({item:t},a));default:return n.createElement(L,(0,E.Z)({item:t},a))}}function F(e){let{items:t,...a}=e;return n.createElement(_,null,t.map(((e,t)=>n.createElement(B,(0,E.Z)({key:t,item:e,index:t},a)))))}const H=(0,n.memo)(F),P="menu_SIkG",W="menuWithAnnouncementBar_GW3s";function D(e){let{path:t,sidebar:a,className:l}=e;const r=function(){const{isActive:e}=(0,p.nT)(),[t,a]=(0,n.useState)(e);return(0,h.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,i.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",P,r&&W,l)},n.createElement("ul",{className:(0,o.Z)(b.k.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:a,activePath:t,level:1})))}const R="sidebar_njMd",V="sidebarWithHideableNavbar_wUlq",z="sidebarHidden_VK0M",U="sidebarLogo_isFc";function K(e){let{path:t,sidebar:a,onCollapse:l,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:d}}}=(0,r.L)();return n.createElement("div",{className:(0,o.Z)(R,s&&V,i&&z)},s&&n.createElement(c.Z,{tabIndex:-1,className:U}),n.createElement(D,{path:t,sidebar:a}),d&&n.createElement(u,{onClick:l}))}const j=n.memo(K);var G=a(13102),Y=a(93163);const q=e=>{let{sidebar:t,path:a}=e;const l=(0,Y.e)();return n.createElement("ul",{className:(0,o.Z)(b.k.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function O(e){return n.createElement(G.Zo,{component:q,props:e})}const X=n.memo(O);function J(e){const t=(0,l.i)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(j,e),o&&n.createElement(X,e))}},6023:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),l=a(67294);function o(e){return l.createElement("svg",(0,n.Z)({width:"20",height:"20","aria-hidden":"true"},e),l.createElement("g",{fill:"#7a7a7a"},l.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),l=a(95999),o=a(10833),r=a(7452);function c(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.default,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);