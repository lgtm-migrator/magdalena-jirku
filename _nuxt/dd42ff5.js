(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{605:function(t,e,n){var content=n(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("94c03fe8",content,!0,{sourceMap:!1})},633:function(t,e,n){"use strict";n(605)},634:function(t,e,n){var o=n(17)(!1);o.push([t.i,".document-link-container{width:100%;display:flex;justify-content:space-between}.document-link-container a{display:flex;align-items:center;color:unset!important;font-size:clamp(1rem,2vw,1.25rem);font-weight:700;text-decoration:none}.document-link-container a .v-icon+span,.document-link-container a span+.v-icon{margin-left:.25rem}.document-link-container a:hover span{text-decoration:underline}",""]),t.exports=o},637:function(t,e,n){"use strict";n.r(e);var o=n(52),r=n(37),c=Object(r.b)({props:{prev:{type:Object,default:void 0},next:{type:Object,default:void 0}},data:function(){return{mdiChevronLeft:o.e,mdiChevronRight:o.f}}}),l=(n(633),n(34)),v=n(39),d=n.n(v),f=n(206),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"document-link-container"},[t.prev?n("nuxt-link",{staticClass:"mr-4",attrs:{to:t.prev.path}},[n("v-icon",[t._v(t._s(t.mdiChevronLeft))]),t._v(" "),n("span",[t._v(t._s(t.prev.shortTitle||t.prev.title))])],1):n("span"),t._v(" "),t.next?n("nuxt-link",{staticStyle:{"text-align":"right"},attrs:{to:t.next.path}},[n("span",[t._v(t._s(t.next.shortTitle||t.next.title))]),t._v(" "),n("v-icon",[t._v(t._s(t.mdiChevronRight))])],1):n("span")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a})}}]);