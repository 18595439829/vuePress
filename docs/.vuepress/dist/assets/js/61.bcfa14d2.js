(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{411:function(e,t,n){"use strict";n.r(t);var s=n(44),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vue添加全局自定义指令-拖拽"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue添加全局自定义指令-拖拽"}},[e._v("#")]),e._v(" vue添加全局自定义指令:拖拽")]),e._v(" "),n("p",[e._v("参考: "),n("a",{attrs:{href:"https://segmentfault.com/a/1190000014572113",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://segmentfault.com/a/1190000014572113"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/custom-directive.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cn.vuejs.org/v2/guide/custom-directive.html"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"_1-新建directives-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建directives-js"}},[e._v("#")]),e._v(" 1.新建directives.js")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('import Vue from "vue";\nVue.directive("drag", {\n    // 指令的定义\n    bind: function(el) {\n      let odiv = el; //获取当前元素\n      odiv.style.position = \'fixed\';\n      odiv.onmousedown = (e) => {\n        //算出鼠标相对元素的位置\n        let disX = e.clientX - odiv.offsetLeft;\n        let disY = e.clientY - odiv.offsetTop;\n        document.onmousemove = (e) => {\n          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置\n          let left = e.clientX - disX;\n          let top = e.clientY - disY;\n          //移动当前元素\n          odiv.style.left = left + "px";\n          odiv.style.top = top + "px";\n        };\n        document.onmouseup = (e) => {\n          document.onmousemove = null;\n          document.onmouseup = null;\n        };\n      };\n    },\n});\n')])])]),n("h2",{attrs:{id:"_2-在main-js引入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-在main-js引入"}},[e._v("#")]),e._v(" 2.在main.js引入")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// main.js\nimport '**/directives.js'; \n")])])]),n("h2",{attrs:{id:"_3-在vue中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-在vue中使用"}},[e._v("#")]),e._v(" 3.在vue中使用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\x3c!-- test.vue --\x3e\n<template>\n  <div v-drag></div>\n</template>\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);