(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5,8],{489:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f}));var o=n(130),r={text:"mdi-home",to:o.c.home.to},c={text:o.c.hobby.title,to:o.c.hobby.to},l={text:o.c.projects.title,to:o.c.projects.to},d={text:o.c.about.title,to:o.c.about.to};function f(t,e){return{text:t.title,to:Object(o.a)(t,e).path}}},490:function(t,e,n){"use strict";function o(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}n.d(e,"a",(function(){return o}))},491:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e998d72e",content,!0,{sourceMap:!1})},492:function(t,e,n){"use strict";n(491)},493:function(t,e,n){var o=n(16)(!1);o.push([t.i,".link-container{width:100%;display:flex;justify-content:space-between}.link-container a{display:flex;align-items:center;color:unset!important;font-size:1.25rem;font-weight:700;text-decoration:none}.link-container a .v-icon+span,.link-container a span+.v-icon{margin-left:.25rem}.link-container a:hover span{text-decoration:underline}",""]),t.exports=o},496:function(t,e,n){"use strict";n.r(e);var o=n(46),r=Object(o.defineComponent)({props:{document:{type:Object,required:!0}}}),c=n(52),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("h2",[t._v("Content")]),t._v(" "),n("ul",t._l(t.document.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{attrs:{to:"#"+link.id},domProps:{textContent:t._s(link.text)}})],1)})),0)]),t._v(" "),n("p")])}),[],!1,null,null,null);e.default=component.exports},497:function(t,e,n){"use strict";n.r(e);var o=n(46),r=Object(o.defineComponent)({props:{prev:{type:Object,default:void 0},next:{type:Object,default:void 0}}}),c=(n(492),n(52)),l=n(59),d=n.n(l),f=n(211),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"link-container"},[t.prev?n("NuxtLink",{attrs:{to:t.prev.path}},[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-left")}}),t._v(" "),n("span",[t._v(t._s(t.prev.title))])],1):n("span"),t._v(" "),t.next?n("NuxtLink",{attrs:{to:t.next.path}},[n("span",[t._v(t._s(t.next.title))]),t._v(" "),n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):n("span")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a})},522:function(t,e,n){"use strict";n.r(e);var o=n(15),r=n(19),c=(n(64),n(46)),l=n(490),d=n(130),f=n(489),v=Object(c.defineComponent)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,f,v,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,c=t.params,e.next=3,r("".concat(n.i18n.locale,"/projects"),c.slug).fetch();case 3:return l=e.sent,e.next=6,r("".concat(n.i18n.locale,"/projects")).only(["title","path"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return f=e.sent,v=Object(o.a)(f,2),m=v[0],h=v[1],e.abrupt("return",{project:l,prev:Object(d.a)(m,n.i18n.locale),next:Object(d.a)(h,n.i18n.locale)});case 11:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$store.commit("setTitle",d.c.projects.title),this.$store.commit("setBreadcrumbs",[f.d,f.e,Object(f.b)(this.project,this.$i18n.locale)])},methods:{formatDate:l.a}}),m=n(52),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-container"},[n("article",[n("h1",[t._v(t._s(t.project.title))]),t._v(" "),n("p",[t._v("Last update: "+t._s(t.formatDate(t.project.updatedAt)))]),t._v(" "),t.project.toc.length>0?n("table-of-contents",{attrs:{document:t.project}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.project}})],1),t._v(" "),n("document-switcher",{attrs:{collection:"projects",prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableOfContents:n(496).default,DocumentSwitcher:n(497).default})}}]);