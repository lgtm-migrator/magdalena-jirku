(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";var r=n(37),o=Object(r.b)({layout:"default",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}}),c=n(34),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("home.title")))])],1)}),[],!1,null,null,null);e.a=component.exports},138:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return m}));n(8),n(7),n(11),n(13),n(10),n(14);var r=n(2),o=(n(46),n(30),n(65),n(66),n(23),n(52));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={home:{title:"home.title",to:"/",icon:o.k},projects:{title:"projects.title",to:"/projects",icon:o.p},hobby:{title:"hobby.title",to:"/hobby",icon:o.d},about:{title:"about.title",to:"/about",icon:o.i}};function f(t,e){var n="en"===e?"/":"/".concat(e,"/");return t.map((function(t){return l(l({},t),{},{path:t.path.replace("/en/",n)})}))}function m(t,e){if(null!==t){var n="en"===e?"/":"/".concat(e,"/");return l(l({},t),{},{path:t.path.replace("/en/",n)})}}},215:function(t,e,n){"use strict";var r=n(1),o=n(301);r.default.use(o.a)},216:function(t,e,n){"use strict";var r=n(1),o=n(304);r.default.use(o.a)},280:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("f884d80c",content,!0,{sourceMap:!1})},281:function(t,e,n){var content=n(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("59ee0068",content,!0,{sourceMap:!1})},282:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("27b7df17",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);n(46);var r=n(52),o=n(37),c=Object(o.b)({data:function(){return{mdiChevronRight:r.f}},computed:{breadcrumbs:function(){var t=this,e=this.$i18n.locale,n=this.$store.state.breadcrumbs;return n.length<2?[]:n.map((function(r,o){return{text:r.text,to:t.localePath(r.to,e),icon:r.icon,disabled:o>=n.length-1}}))}}}),l=(n(413),n(34)),d=n(38),f=n.n(d),m=n(498),v=n(298),h=n(205),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:t.breadcrumbs,nuxt:"true",large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v(t._s(t.mdiChevronRight))])]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("v-breadcrumbs-item",{staticClass:"unselectable",attrs:{to:r.to,disabled:r.disabled,exact:!0}},[r.icon?n("v-icon",{staticClass:"text--primary",attrs:{"aria-label":t.$t(r.text)},domProps:{textContent:t._s(r.icon)}}):[t._v("\n        "+t._s(t.$t(r.text))+"\n      ")]],2)]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBreadcrumbs:m.a,VBreadcrumbsItem:v.a,VIcon:h.a})},307:function(t,e,n){"use strict";var r=n(37),o=n(84),c=Object(r.b)({data:function(){return{drawerOpen:this.$vuetify.breakpoint.lgAndUp}},head:function(){return{htmlAttrs:{lang:this.$i18n.locale},meta:[{hid:"description",name:"description",content:this.$t("meta.description")}],link:[{rel:"canonical",href:"https://magdalena-jirku.at".concat(this.$route.path,"/")}]}},computed:Object(o.c)(["breadcrumbs"])}),l=n(34),d=n(38),f=n.n(d),m=n(492),v=n(499),h=n(493),_=n(497),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:"","expand-on-hover":t.$vuetify.breakpoint.lgAndUp},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("app-sidebar")],1),t._v(" "),n("app-header",{model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}}),t._v(" "),n("v-main",[t.$vuetify.breakpoint.mdAndDown&&t.breadcrumbs.length>0?n("breadcrumbs",{staticClass:"pa-3"}):t._e(),t._v(" "),n("v-container",{staticClass:"page-container"},[n("nuxt")],1)],1),t._v(" "),n("app-footer")],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{AppSidebar:n(477).default,AppHeader:n(472).default,Breadcrumbs:n(293).default,AppFooter:n(478).default}),f()(component,{VApp:m.a,VContainer:v.a,VMain:h.a,VNavigationDrawer:_.a})},310:function(t,e,n){t.exports=n.p+"img/logo.33d84d7.svg"},317:function(t,e,n){n(318),n(319),t.exports=n(323)},375:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("736e5d00",content,!0,{sourceMap:!1})},376:function(t,e,n){var r=n(18)(!1);r.push([t.i,'html{overflow-y:auto!important}.unselectable,.v-btn{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bitter-font,h1,h2,h3,h4,h5,h6{font-family:"Bitter",serif!important}h1,h2,h3,h4,h5,h6{line-height:1.2}h1{font-size:clamp(2rem,3vw,3rem)}.v-overlay__content .v-image{margin:0!important}.page-container{display:flex;justify-content:center;height:100%}.bound-width,article{max-width:960px!important}article{margin:auto}article :is(video,.v-image,.model-viewer){margin-bottom:1rem}@media(max-width:960px){article .model-viewer,article .v-image,article video{margin-left:-12px;margin-right:-12px;width:calc(100% + 24px);max-width:unset!important}}.masonry-wall{width:100%}a:not(:hover){text-decoration:none}.responsive-list{display:flex;flex-direction:row;flex-wrap:wrap}.responsive-list>:not(:last-child){margin-right:1rem}.svg-icon{font-size:0}.v-footer,.v-toolbar__content{display:flex}.v-footer>div,.v-toolbar__content>div{flex:1}.v-footer div:first-child>*,.v-toolbar__content div:first-child>*{margin-right:auto}.v-footer div:last-child>*,.v-toolbar__content div:last-child>*{margin-left:auto}.page-enter-active,.page-leave-active{transition:opacity .1s}.page-enter,.page-leave-to{opacity:0}',""]),t.exports=r},413:function(t,e,n){"use strict";n(280)},414:function(t,e,n){var r=n(18)(!1);r.push([t.i,".breadcrumbs li .v-icon{font-size:1.5rem}.breadcrumbs a{font-weight:700}.breadcrumbs a:not(.v-breadcrumbs__item--disabled){color:unset}",""]),t.exports=r},417:function(t,e,n){"use strict";n(281)},418:function(t,e,n){var r=n(18)(!1);r.push([t.i,".search-input{max-width:16rem}",""]),t.exports=r},434:function(t,e,n){"use strict";n(282)},435:function(t,e,n){var r=n(18)(!1);r.push([t.i,".link-container[data-v-6fde8b85]{width:48px;height:48px}img[data-v-6fde8b85]{width:36px;height:36px;margin:6px}",""]),t.exports=r},461:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{useDarkTheme:!0,breadcrumbs:[]}},o={setBreadcrumbs:function(t,e){t.breadcrumbs=e},loadTheme:function(t){var e=localStorage.getItem("useDarkTheme");null===e&&localStorage.setItem("useDarkTheme",String(t.useDarkTheme)),t.useDarkTheme=e!==String(!1)},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme,localStorage.setItem("useDarkTheme",String(t.useDarkTheme))}}},471:function(t,e,n){"use strict";n.r(e);n(157);var r=n(52),o=n(37),c=n(138),l=Object(o.b)({data:function(){return{mdiGithub:r.j,routes:Object.values(c.c)}}}),d=n(34),f=n(38),m=n.n(f),v=n(205),h=n(133),_=n(74),x=n(210),y=n(114),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",[t._l(t.routes,(function(e,i){return n("v-list-item",{key:i,attrs:{to:t.localePath(e.to),exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$t(e.title))}})],1)],1)})),t._v(" "),n("v-list-item",{staticClass:"unselectable jan-link-container",attrs:{rel:"noopener",href:"https://github.com/DerYeger",target:"_blank"}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.mdiGithub))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Website by Jan Müller")])],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VIcon:v.a,VListItem:h.a,VListItemContent:_.a,VListItemGroup:x.a,VListItemIcon:y.a,VListItemTitle:_.b})},472:function(t,e,n){"use strict";n.r(e);var r=n(37),o=n(52),c=Object(r.b)({props:{value:{type:Boolean,required:!0}},data:function(){return{mdiMenu:o.o}}}),l=n(34),d=n(38),f=n.n(d),m=n(496),v=n(490),h=n(205),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{fixed:"",app:"","elevate-on-scroll":"",dense:"",color:t.$vuetify.theme.dark?"#121212":"white"}},[n("div",[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],staticStyle:{"margin-left":"-16px"},attrs:{"aria-label":t.$t(t.value?"actions.close-menu":"actions.open-menu")},on:{click:function(e){return t.$emit("input",!t.value)}}},[n("v-icon",[t._v(t._s(t.mdiMenu))])],1),t._v(" "),n("breadcrumbs",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgAndUp,expression:"$vuetify.breakpoint.lgAndUp"}],staticClass:"pa-0"})],1),t._v(" "),n("div",{staticClass:"d-flex justify-center",style:t.$vuetify.breakpoint.mdAndDown?"flex-basis: auto":"margin-left: -56px"},[n("content-search")],1),t._v(" "),n("div",{staticStyle:{"margin-right":"-16px"}},[n("logo")],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{Breadcrumbs:n(293).default,ContentSearch:n(473).default,Logo:n(474).default}),f()(component,{VAppBar:m.a,VAppBarNavIcon:v.a,VIcon:h.a})},473:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(16),c=(n(23),n(30),n(154),n(75),n(52)),l=n(37),d=n(138),f=Object(l.b)({data:function(){return{mdiMagnify:c.n,results:[],query:"",showResults:!1}},computed:{currentLocale:function(){return this.$i18n.locale}},watch:{currentLocale:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(e.query,t);case 2:case"end":return n.stop()}}),n)})))()},query:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(t,e.currentLocale);case 2:case"end":return n.stop()}}),n)})))()}},methods:{updateSearchResults:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=3;break}return n.results=[],o.abrupt("return");case 3:return o.t0=d.b,o.t1=[],o.t2=r.a,o.next=8,n.$content("".concat(e,"/hobby"),{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 8:return o.t3=o.sent,o.t4=(0,o.t2)(o.t3),o.t5=r.a,o.next=13,n.$content("".concat(e,"/projects"),{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 13:o.t6=o.sent,o.t7=(0,o.t5)(o.t6),o.t8=o.t1.concat.call(o.t1,o.t4,o.t7),o.t9=e,n.results=(0,o.t0)(o.t8,o.t9);case 18:case"end":return o.stop()}}),o)})))()},reset:function(){this.query="",this.showResults=!1}}}),m=(n(417),n(34)),v=n(38),h=n.n(v),_=n(206),x=n(133),y=n(74),w=n(495),k=n(494),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{value:t.showResults,"offset-y":"",bottom:"",rounded:"xl","open-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"search-input unselectable",attrs:{dense:"",rounded:"",filled:"","hide-details":"auto","prepend-inner-icon":t.mdiMagnify,placeholder:t.$t("actions.search")},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},"v-text-field",o,!1),r))]}}])},[t._v(" "),t.results.length>0?n("v-list",t._l(t.results,(function(e){return n("v-list-item",{key:e.path,attrs:{to:e.path,width:"100%"},on:{click:function(e){return t.reset()}}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):n("v-list",[n("v-list-item",[t._v(t._s(t.$t("misc.no-results")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VList:_.a,VListItem:x.a,VListItemTitle:y.b,VMenu:w.a,VTextField:k.a})},474:function(t,e,n){"use strict";n.r(e);var r=n(37),o=Object(r.b)({data:function(){return{logo:n(310)}}}),c=(n(434),n(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-container unselectable"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,"6fde8b85",null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);var r=n(52),o=n(37),c=n(84),l=Object(o.b)({data:function(){return{mdiBrightness2:r.b,mdiBrightness5:r.c}},computed:Object(c.c)(["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){this.$store.commit("loadTheme")},methods:Object(c.b)(["toggleTheme"])}),d=n(34),f=n(38),m=n.n(f),v=n(299),h=n(205),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","x-small":"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",[t._v(t._s(t.useDarkTheme?t.mdiBrightness5:t.mdiBrightness2))])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VIcon:h.a})},476:function(t,e,n){"use strict";n.r(e);var r=n(37),o=Object(r.b)({data:function(){return{locales:[{code:"de",name:"DE"},{code:"en",name:"EN"}]}}}),c=n(34),l=n(38),d=n.n(l),f=n(299),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"max-content"}},t._l(t.locales,(function(e){return n("v-btn",{key:e.code,attrs:{plain:"","x-small":"",to:t.switchLocalePath(e.code)}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a})},477:function(t,e,n){"use strict";n.r(e);var r=n(34),o=n(38),c=n.n(o),l=n(206),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-list",{attrs:{dense:"",nav:""}},[e("app-navigation")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{AppNavigation:n(471).default}),c()(component,{VList:l.a})},478:function(t,e,n){"use strict";n.r(e);var r=n(34),o=n(38),c=n.n(o),l=n(491),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{app:"",dark:""}},[n("div",{staticStyle:{flex:"2"}},[n("span",{staticClass:"unselectable",staticStyle:{"font-size":"0.75rem",flex:"2"}},[t._v("\n      © "+t._s((new Date).getFullYear())+", Magdalena Jirku\n    ")])]),t._v(" "),n("div",[n("theme-toggle")],1),t._v(" "),n("div",[n("language-toggle")],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{ThemeToggle:n(475).default,LanguageToggle:n(476).default}),c()(component,{VFooter:l.a})}},[[317,26,1,27]]]);