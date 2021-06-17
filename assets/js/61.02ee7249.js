(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{410:function(t,e,n){"use strict";n.r(e);var a=n(44),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"将vue使用iframe嵌套至html中使用-页面交互传值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将vue使用iframe嵌套至html中使用-页面交互传值"}},[t._v("#")]),t._v(" 将vue使用iframe嵌套至html中使用(页面交互传值)")]),t._v(" "),n("h2",{attrs:{id:"_1-放置iframe的父文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-放置iframe的父文件"}},[t._v("#")]),t._v(" 1.放置iframe的父文件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\x3c!-- parent.html --\x3e\n<!DOCTYPE html>\n<html lang="cn">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width,initial-scale=1.0">\n    <title>parent</title>\n  </head>\n  <body>\n    <iframe id="parent-iframe" src="./son.html"></iframe>\n    <button id="button-get-son">调用子组件的方法</button>\n  </body>\n</html>\n<script>\nconst iframe = document.getElementById(\'parent-iframe\');\nconst button = document.getElementById(\'button-get-son\');\nbutton.onclick = function () {\n  console.log(iframe.contentWindow);\n  iframe.contentWindow.init();\n};\n<\/script>\n')])])]),n("ul",[n("li",[t._v("父组件调用子组件方法\niframe.contentWindow可以获取到子组件")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const iframe = document.getElementById(iframe');\niframe.contentWindow.子组件方法名(arguments);\n")])])]),n("h2",{attrs:{id:"_2-使用vue的子文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用vue的子文件"}},[t._v("#")]),t._v(" 2.使用vue的子文件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\x3c!-- son.html --\x3e\n<!DOCTYPE html>\n<html lang="cn">\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width,initial-scale=1.0" />\n    <title>parent</title>\n  </head>\n  <script src="https://cdn.jsdelivr.net/npm/vue"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>\n  <body>\n    <div id="app">\n      APP子组件\n      <button @click="getParent">获取iframe父组件</button>\n      {{parentData}}\n    </div>\n  </body>\n</html>\n<script>\nconst vm = new Vue({\n  el: \'#app\',\n  name: \'Son\',\n  data: {\n    parentData: \'\',\n  },\n  methods: {\n    getParent() {\n      const parent = window.parent.document.getElementById(\'parent-iframe\');\n      console.log(parent);\n      window.parent.parentFn();\n    },\n  },\n});\nfunction init() {\n  vm.parentData = \'父组件调用子组件方法\';\n}\n<\/script>\n')])])]),n("ul",[n("li",[t._v("子组件获取父组件对象\nwindow.parent 获取父组件")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const parent = window.parent.document.getElementById('parent-iframe');\nconsole.log(parent);\nwindow.parent.父页面方法(arguments);\n")])])]),n("h2",{attrs:{id:"_3-不要直接在浏览器打开文件-否则会报跨域错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-不要直接在浏览器打开文件-否则会报跨域错误"}},[t._v("#")]),t._v(" 3.不要直接在浏览器打开文件,否则会报跨域错误")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('DOMException: Blocked a frame with origin "null" from accessing a cross-origin frame...\n')])])]),n("p",[t._v("原因: 同源安全策略\n你不能用javascript访问一个"),n("iframe",[t._v("，如果你能做到这一点，那将是一个巨大的安全缺陷。对于同一源策略浏览器，阻止脚本尝试访问具有不同源的帧。")])]),t._v(" "),n("h2",{attrs:{id:"建议使用nginx访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建议使用nginx访问"}},[t._v("#")]),t._v(" "),n("em",[n("strong",[t._v("建议使用nginx访问")])])]),t._v(" "),n("p",[t._v("参见: https://www.jianshu.com/p/daaaaef7fe8f")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# nginx.conf\nserver {\n       listen       9000;\n       server_name  localhost;\n\n       location / {\n           root html/test;\n           index parent.html parent.htm;\n       }\n }\n")])])]),n("h2",{attrs:{id:"_4-在html中使用-vue组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-在html中使用-vue组件"}},[t._v("#")]),t._v(" 4.在html中使用.vue组件")]),t._v(" "),n("ul",[n("li",[t._v("引入 httpVueLoader.js 插件")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<script src="https://unpkg.com/http-vue-loader"><\/script>\n')])])]),n("ul",[n("li",[t._v("Vue.use注册插件")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<body>\n  <div id=\"app\">\n    <TestComp />\n  </div>\n</body>\n<script>\nVue.use(httpVueLoader)\nnew Vue({\n  el: '#app',\n  components: {\n    TestComp: 'url: ./TestComp.vue',\n  }\n});\n<\/script>\n")])])]),n("h2",{attrs:{id:"_5-iframe父自页面交互传值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-iframe父自页面交互传值"}},[t._v("#")]),t._v(" 5.iframe父自页面交互传值")]),t._v(" "),n("ul",[n("li",[t._v("iframe页面调用子页面方法")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("iframe.contentWindow.子页面方法();\n")])])]),n("ul",[n("li",[t._v("子页面调用iframe页面方法")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("window.parent.父页面方法();\n")])])]),n("p",[t._v("----这是一条分割线----\n"),n("strong",[t._v("不推荐使用,可能会产生安全隐患,如果使用,请详细阅读文档:\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage")])]),t._v(" "),n("ul",[n("li",[t._v("iframe向子页面传值")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 父页面传值 iframe.html\niframe.contentWindow.postMessage (data, 'http://localhost:8000/');\n// 子页面接收 son.html\nwindow. addEventListener ('message', function(event) {\n    //event.data获取传过来的数据\n  console.log(event.data)\n});\n")])])]),n("ul",[n("li",[t._v("子页面向iframe传值")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 子页面传值 son.html\n window.parent.postMessage(data, 'http://localhost:8000/');\n// 父页面接收 iframe.html\nwindow.addEventListener('message', function(e){\n    console.log(e.data)\n}, false);\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);