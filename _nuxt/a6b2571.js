(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));n(9),n(7),n(11),n(13),n(8),n(14);var r=n(2);n(41),n(30),n(59),n(66),n(23);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={home:{title:"home.title",to:"/",icon:"mdi-home"},projects:{title:"projects.title",to:"/projects",icon:"mdi-movie-open-star"},hobby:{title:"hobby.title",to:"/hobby",icon:"mdi-brush"},about:{title:"about.title",to:"/about",icon:"mdi-file-document"}};function d(t,e){var n="en"===e?"/":"/".concat(e,"/");return t.map((function(t){return c(c({},t),{},{path:t.path.replace("/en/",n)})}))}function f(t,e){if(null!==t){var n="en"===e?"/":"/".concat(e,"/");return c(c({},t),{},{path:t.path.replace("/en/",n)})}}},224:function(t,e,n){"use strict";var r=n(1),o=n(314);r.default.use(o.a)},293:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f66ccd5e",content,!0,{sourceMap:!1})},294:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("d5c3f998",content,!0,{sourceMap:!1})},295:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("38828660",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n.r(e);n(41);var r=n(48),o=Object(r.a)({computed:{breadcrumbs:function(){var t=this,e=this.$i18n.locale,n=this.$store.state.breadcrumbs;return n.length<2?[]:n.map((function(r,o){return{text:r.text,to:t.localePath(r.to,e),disabled:o>=n.length-1}}))}}}),c=(n(395),n(32)),l=n(36),d=n.n(l),f=n(485),m=n(311),h=n(214),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:t.breadcrumbs,nuxt:"true",large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("v-breadcrumbs-item",{staticClass:"unselectable",attrs:{to:r.to,disabled:r.disabled,exact:!0}},[r.text.startsWith("mdi-")?n("v-icon",{staticClass:"text--primary",domProps:{textContent:t._s(r.text)}}):[t._v("\n        "+t._s(t.$t(r.text))+"\n      ")]],2)]}}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBreadcrumbs:f.a,VBreadcrumbsItem:m.a,VIcon:h.a})},319:function(t,e,n){"use strict";var r=n(48),o=n(83),c=Object(r.a)({data:function(){return{drawerOpen:!1}},head:function(){return{htmlAttrs:{lang:this.$i18n.locale},meta:[{hid:"description",name:"description",content:this.$t("meta.description")}],link:[{rel:"canonical",href:"https://magdalena-jirku.at".concat(this.$route.path,"/")}]}},computed:Object(o.c)(["breadcrumbs"]),methods:{toggleDrawer:function(){this.drawerOpen=!this.drawerOpen}}}),l=n(32),d=n(36),f=n.n(d),m=n(479),h=n(486),v=n(480),_=n(484),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:"","expand-on-hover":t.$vuetify.breakpoint.lgAndUp},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("app-sidebar")],1),t._v(" "),n("app-header",{attrs:{"drawer-open":t.drawerOpen,"on-nav-icon-clicked":t.toggleDrawer}}),t._v(" "),n("v-main",[t.$vuetify.breakpoint.mdAndDown&&t.breadcrumbs.length>0?n("breadcrumbs",{staticClass:"pa-3"}):t._e(),t._v(" "),n("v-container",{staticClass:"page-container"},[n("nuxt")],1)],1),t._v(" "),n("app-footer")],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{AppSidebar:n(463).default,AppHeader:n(458).default,Breadcrumbs:n(306).default,AppFooter:n(464).default}),f()(component,{VApp:m.a,VContainer:h.a,VMain:v.a,VNavigationDrawer:_.a})},322:function(t,e,n){t.exports=n.p+"img/logo.33d84d7.svg"},329:function(t,e,n){n(330),n(334),t.exports=n(335)},361:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("736e5d00",content,!0,{sourceMap:!1})},362:function(t,e,n){var r=n(19)(!1);r.push([t.i,'html{overflow-y:auto!important}.unselectable,.v-btn{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bitter-font,h1,h2,h3,h4,h5,h6{font-family:"Bitter",serif!important}h1,h2,h3,h4,h5,h6{line-height:1.2}h1{font-size:clamp(2rem,3vw,3rem)}.v-overlay__content .v-image{margin:0!important}.page-container{display:flex;justify-content:center}.bound-width,article{max-width:960px!important}article{margin:auto}article :is(video,.v-image){margin-bottom:1rem}@media(max-width:960px){article .v-image,article video{margin-left:-12px;margin-right:-12px;width:calc(100% + 24px);max-width:unset!important}}.masonry-wall{width:100%}a:not(:hover){text-decoration:none}.v-footer,.v-toolbar__content{display:flex}.v-footer>div,.v-toolbar__content>div{flex:1}.v-footer div:first-child>*,.v-toolbar__content div:first-child>*{margin-right:auto}.v-footer div:last-child>*,.v-toolbar__content div:last-child>*{margin-left:auto}',""]),t.exports=r},395:function(t,e,n){"use strict";n(293)},396:function(t,e,n){var r=n(19)(!1);r.push([t.i,".breadcrumbs li .v-icon{font-size:1.5rem}.breadcrumbs a{font-weight:700}.breadcrumbs a:not(.v-breadcrumbs__item--disabled){color:unset}",""]),t.exports=r},399:function(t,e,n){"use strict";n(294)},400:function(t,e,n){var r=n(19)(!1);r.push([t.i,".search-input{max-width:16rem}",""]),t.exports=r},416:function(t,e,n){"use strict";n(295)},417:function(t,e,n){var r=n(19)(!1);r.push([t.i,".link-container[data-v-e311387c]{width:48px;height:48px}img[data-v-e311387c]{width:36px;height:36px;margin:6px}",""]),t.exports=r},443:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{useDarkTheme:!0,breadcrumbs:[]}},o={setBreadcrumbs:function(t,e){t.breadcrumbs=e},loadTheme:function(t){var e=localStorage.getItem("useDarkTheme");null===e&&localStorage.setItem("useDarkTheme",String(t.useDarkTheme)),t.useDarkTheme=e!==String(!1)},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme,localStorage.setItem("useDarkTheme",String(t.useDarkTheme))}}},457:function(t,e,n){"use strict";n.r(e);n(126);var r=n(48),o=n(136),c=Object(r.a)({data:function(){return{routes:Object.values(o.c)}}}),l=n(32),d=n(36),f=n.n(d),m=n(214),h=n(131),v=n(73),_=n(219),x=n(110),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",[t._l(t.routes,(function(e,i){return n("v-list-item",{key:i,attrs:{to:t.localePath(e.to),exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$t(e.title))}})],1)],1)})),t._v(" "),n("v-list-item",{staticClass:"unselectable jan-link-container",attrs:{rel:"noopener",href:"https://github.com/DerYeger",target:"_blank"}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s("mdi-github")}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Website by Jan Müller")])],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VIcon:m.a,VListItem:h.a,VListItemContent:v.a,VListItemGroup:_.a,VListItemIcon:x.a,VListItemTitle:v.b})},458:function(t,e,n){"use strict";n.r(e);var r=n(48),o=Object(r.a)({props:{drawerOpen:{type:Boolean,required:!0},onNavIconClicked:{type:Function,required:!0}}}),c=n(32),l=n(36),d=n.n(l),f=n(483),m=n(477),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{fixed:"",app:"","elevate-on-scroll":"",dense:"",color:t.$vuetify.theme.dark?"#121212":"white"}},[n("div",[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],staticStyle:{"margin-left":"-16px"},attrs:{"aria-label":t.$t(t.drawerOpen?"actions.close-menu":"actions.open-menu")},on:{click:function(e){return e.stopPropagation(),t.onNavIconClicked()}}}),t._v(" "),n("breadcrumbs",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgAndUp,expression:"$vuetify.breakpoint.lgAndUp"}],staticClass:"pa-0"})],1),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"center"},style:t.$vuetify.breakpoint.mdAndDown?"flex-basis: auto":"margin-left: -56px"},[n("content-search")],1),t._v(" "),n("div",{staticStyle:{"margin-right":"-16px"}},[n("logo")],1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{Breadcrumbs:n(306).default,ContentSearch:n(459).default,Logo:n(460).default}),d()(component,{VAppBar:f.a,VAppBarNavIcon:m.a})},459:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(15),c=(n(23),n(30),n(153),n(65),n(48)),l=n(136),d=Object(c.a)({data:function(){return{results:[],query:"",showResults:!1}},computed:{currentLocale:function(){return this.$i18n.locale}},watch:{currentLocale:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(e.query,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},query:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(t,e.currentLocale);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},methods:{updateSearchResults:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=3;break}return n.results=[],o.abrupt("return");case 3:return o.t0=l.b,o.t1=[],o.t2=r.a,o.next=8,n.$content("".concat(e,"/hobby"),{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 8:return o.t3=o.sent,o.t4=(0,o.t2)(o.t3),o.t5=r.a,o.next=13,n.$content("".concat(e,"/projects"),{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 13:o.t6=o.sent,o.t7=(0,o.t5)(o.t6),o.t8=o.t1.concat.call(o.t1,o.t4,o.t7),o.t9=e,n.results=(0,o.t0)(o.t8,o.t9);case 18:case"end":return o.stop()}}),o)})))()},reset:function(){this.query="",this.showResults=!1}}}),f=(n(399),n(32)),m=n(36),h=n.n(m),v=n(215),_=n(131),x=n(73),y=n(482),w=n(481),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{value:t.showResults,"offset-y":"",bottom:"",rounded:"xl","open-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"search-input unselectable",attrs:{dense:"",rounded:"",filled:"","hide-details":"auto","prepend-inner-icon":"mdi-magnify",placeholder:t.$t("actions.search")},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},"v-text-field",o,!1),r))]}}])},[t._v(" "),t.results.length>0?n("v-list",t._l(t.results,(function(e){return n("v-list-item",{key:e.path,attrs:{to:e.path,width:"100%"},on:{click:function(e){return t.reset()}}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):n("v-list",[n("v-list-item",[t._v(t._s(t.$t("misc.no-results")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VList:v.a,VListItem:_.a,VListItemTitle:x.b,VMenu:y.a,VTextField:w.a})},460:function(t,e,n){"use strict";n.r(e);var r=n(48),o=Object(r.a)({data:function(){return{logo:n(322)}}}),c=(n(416),n(32)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-container unselectable"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,"e311387c",null);e.default=component.exports},461:function(t,e,n){"use strict";n.r(e);var r=n(48),o=n(83),c=Object(r.a)({computed:Object(o.c)(["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){this.$store.commit("loadTheme")},methods:Object(o.b)(["toggleTheme"])}),l=n(32),d=n(36),f=n.n(d),m=n(312),h=n(214),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","x-small":"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{domProps:{textContent:t._s(t.useDarkTheme?"mdi-brightness-5":"mdi-brightness-2")}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:m.a,VIcon:h.a})},462:function(t,e,n){"use strict";n.r(e);var r=n(48),o=Object(r.a)({data:function(){return{locales:[{code:"de",name:"DE"},{code:"en",name:"EN"}]}}}),c=n(32),l=n(36),d=n.n(l),f=n(312),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"max-content"}},t._l(t.locales,(function(e){return n("v-btn",{key:e.code,attrs:{plain:"","x-small":"",to:t.switchLocalePath(e.code)}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a})},463:function(t,e,n){"use strict";n.r(e);var r=n(32),o=n(36),c=n.n(o),l=n(215),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-list",{attrs:{dense:"",nav:""}},[e("app-navigation")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{AppNavigation:n(457).default}),c()(component,{VList:l.a})},464:function(t,e,n){"use strict";n.r(e);var r=n(32),o=n(36),c=n.n(o),l=n(478),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{app:"",dark:""}},[n("div",{staticStyle:{flex:"2"}},[n("span",{staticClass:"unselectable",staticStyle:{"font-size":"0.75rem",flex:"2"}},[t._v("\n      © "+t._s((new Date).getFullYear())+", Magdalena Jirku\n    ")])]),t._v(" "),n("div",[n("theme-toggle")],1),t._v(" "),n("div",[n("language-toggle")],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{ThemeToggle:n(461).default,LanguageToggle:n(462).default}),c()(component,{VFooter:l.a})},97:function(t,e,n){"use strict";var r=n(48),o=Object(r.a)({layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}}),c=n(32),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("home.title")))])],1)}),[],!1,null,null,null);e.a=component.exports}},[[329,17,1,18]]]);