(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{408:function(s,e,t){"use strict";t.r(e);var n=t(44),a=Object(n.a)({},(function(){var s=this.$createElement,e=this._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"vue中使用全局css变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中使用全局css变量"}},[this._v("#")]),this._v(" vue中使用全局css变量")]),this._v(" "),e("p",[this._v("1.vue中使用全局css变量\n在vue.config.js文件中添加:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const path = require('path');\nmodule.exports = {\n  css: {\n    modules: true,\n    loaderOptions: {\n      // 给 less-loader 传递选项\n      less: {\n        localIdentName: \"'[name]__[local]-[hash:base64:5]'\",\n        camelCase: true,\n      }\n    }\n  },\n  pluginOptions: {\n    'style-resources-loader': {\n      preProcessor: 'less',\n      patterns: [path.resolve(__dirname, 'src/css/main.less')], // css文件路径\n    },\n  },\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);