(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{521:function(t,e,r){var content=r(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("f884d80c",content,!0,{sourceMap:!1})},546:function(t,e,r){"use strict";r(521)},547:function(t,e,r){var n=r(54)(!1);n.push([t.i,".breadcrumbs li .v-icon{font-size:1.5rem}.breadcrumbs a{font-weight:700}.breadcrumbs a:not(.v-breadcrumbs__item--disabled){color:unset}",""]),t.exports=n},630:function(t,e,r){"use strict";r.r(e);r(42);var n=r(388),c=r(74),o=Object(c.b)({data:function(){return{mdiChevronRight:n.f}},computed:{breadcrumbs:function(){var t=this,e=this.$i18n.locale,r=this.$store.state.breadcrumbs;return r.length<2?[]:r.map((function(n,c){return{text:n.text,to:t.localePath(n.to,e),icon:n.icon,disabled:c>=r.length-1}}))}}}),l=(r(546),r(89)),d=r(137),m=r.n(d),f=r(656),v=r(550),h=r(405),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-breadcrumbs",{staticClass:"breadcrumbs",attrs:{items:t.breadcrumbs,nuxt:"true",large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v(t._s(t.mdiChevronRight))])]},proxy:!0},{key:"item",fn:function(e){var n=e.item;return[r("v-breadcrumbs-item",{staticClass:"unselectable",attrs:{to:n.to,disabled:n.disabled,exact:!0}},[n.icon?r("v-icon",{staticClass:"text--primary",attrs:{"aria-label":t.$t(n.text)},domProps:{textContent:t._s(n.icon)}}):[t._v("\n        "+t._s(t.$t(n.text))+"\n      ")]],2)]}}])})}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBreadcrumbs:f.a,VBreadcrumbsItem:v.a,VIcon:h.a})}}]);