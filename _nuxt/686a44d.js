(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{577:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return d}));var o=n(139),c={text:"mdi-home",to:o.c.home.to},r={text:o.c.hobby.title,to:o.c.hobby.to},l={text:o.c.projects.title,to:o.c.projects.to},h={text:o.c.about.title,to:o.c.about.to};function d(t,e){var n;return{text:null!==(n=t.shortTitle)&&void 0!==n?n:t.title,to:Object(o.a)(t,e).path}}},591:function(t,e,n){"use strict";n.r(e);var o=n(17),c=n(18),r=(n(69),n(21)),l=n(139),h=n(577),d=Object(r.a)({asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,r,h,d,m,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,c=t.$content,r=t.params,e.next=3,c("".concat(n.i18n.locale,"/hobby"),r.slug).fetch();case 3:return h=e.sent,e.next=6,c("".concat(n.i18n.locale,"/hobby")).only(["title","path"]).sortBy("createdAt","desc").surround(r.slug).fetch();case 6:return d=e.sent,m=Object(o.a)(d,2),f=m[0],v=m[1],e.abrupt("return",{hobby:h,prev:Object(l.a)(f,n.i18n.locale),next:Object(l.a)(v,n.i18n.locale)});case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{overlay:!1}},computed:{image:function(){return n(349)("./"+this.hobby.image)}},mounted:function(){this.$store.commit("setTitle",l.c.hobby.title),this.$store.commit("setBreadcrumbs",[h.d,h.c,Object(h.b)(this.hobby,this.$i18n.locale)])}}),m=n(20),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("article",[n("h1",[t._v(t._s(t.hobby.title))]),t._v(" "),n("p",[t._v(t._s(t.$d(new Date(t.hobby.createdAt),"long")))]),t._v(" "),n("div",{staticClass:"mb-4"},[n("asset-image",{attrs:{src:"hobby/"+t.hobby.image,alt:t.hobby.title,contain:"","max-height":"60vh","max-width":"100%",elevation:0}})],1),t._v(" "),n("nuxt-content",{attrs:{document:t.hobby}}),t._v(" "),n("document-switcher",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AssetImage:n(189).default,DocumentSwitcher:n(238).default})}}]);