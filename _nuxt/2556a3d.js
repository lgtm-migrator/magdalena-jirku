(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{526:function(t,e,n){"use strict";function r(title,t){var image="https://magdalena-jirku.at/og-logo.png",e="".concat(title," · Magdalena Jirku");return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image",property:"og:image",content:image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:image},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return r}))},595:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return h}));var r=n(52),o=n(138),c={text:o.c.home.title,to:o.c.home.to,icon:r.k},d={text:o.c.hobby.title,to:o.c.hobby.to},l={text:o.c.projects.title,to:o.c.projects.to},m={text:o.c.about.title,to:o.c.about.to};function h(t,e){var n;return{text:null!==(n=t.shortTitle)&&void 0!==n?n:t.title,to:Object(o.a)(t,e).path}}},665:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(16),c=(n(75),n(37)),d=n(138),l=n(595),meta=n(526),m=Object(c.b)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app.i18n.locale,e.next=3,t.$content("".concat(n,"/projects")).without(["body"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{projects:Object(d.b)(r,n)});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t(d.c.projects.title),t=this.$t("meta.description");return{title:title,meta:Object(r.a)(Object(meta.a)(title,t))}},mounted:function(){this.$store.commit("setBreadcrumbs",[l.d,l.e])}}),h=n(34),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-masonry-wall",{attrs:{items:t.projects,ssr:{columns:1},options:{width:400,padding:12}},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[n("project-card",{attrs:{project:e}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectCard:n(659).default})}}]);