(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{591:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f}));var o=n(138),r={text:"mdi-home",to:o.c.home.to},c={text:o.c.hobby.title,to:o.c.hobby.to},l={text:o.c.projects.title,to:o.c.projects.to},d={text:o.c.about.title,to:o.c.about.to};function f(t,e){var n;return{text:null!==(n=t.shortTitle)&&void 0!==n?n:t.title,to:Object(o.a)(t,e).path}}},603:function(t,e,n){"use strict";n.r(e);var o=n(19),r=(n(67),n(21)),c=n(138),l=n(591),d=Object(r.defineComponent)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,o=t.$content,e.next=3,o("".concat(n.i18n.locale,"/about")).fetch();case 3:return r=e.sent,e.abrupt("return",{document:r});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$store.commit("setTitle",c.c.about.title),this.$store.commit("setBreadcrumbs",[l.d,l.a])}}),f=n(22),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-content",{attrs:{document:t.document}})}),[],!1,null,null,null);e.default=component.exports}}]);