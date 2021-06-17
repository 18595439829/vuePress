(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{409:function(e,t,a){"use strict";a.r(t);var n=a(44),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"在vue项目中-vue-cli3-0-展示markdown文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在vue项目中-vue-cli3-0-展示markdown文件"}},[e._v("#")]),e._v(" 在vue项目中(vue-cli3.0)展示markdown文件")]),e._v(" "),a("h2",{attrs:{id:"第一种-vue组建中部分代码块展示markdown语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种-vue组建中部分代码块展示markdown语法"}},[e._v("#")]),e._v(" 第一种: vue组建中部分代码块展示markdown语法:")]),e._v(" "),a("p",[a("em",[a("a",{attrs:{href:"https://blog.csdn.net/qq_42334965/article/details/89107132",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("1.安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install movon-editor --save\n")])])]),a("p",[e._v("2.引入\n在 main.js 中引入以下字段：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" // 全局注册\n // import with ES6\n import Vue from 'vue'\n import mavonEditor from 'mavon-editor'\n import 'mavon-editor/dist/css/index.css'\n")])])]),a("p",[a("em",[e._v("如果引入css报错,参考"),a("a",{attrs:{href:"https://www.jianshu.com/p/c324711f12b5",target:"_blank",rel:"noopener noreferrer"}},[e._v("该链接"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("3.使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<template>\n    <div>\n      <mavon-editor\n        class="md"\n        :value="value"\n        :subfield="false"\n        :defaultOpen="\'preview\'"\n        :toolbarsFlag="false"\n        :editable="false"\n        :scrollStyle="true"\n        :ishljs="true"\n      ></mavon-editor>\n    </div>\n</template>\n<script>\nexport default {\n  name: "Home",\n  data() {\n    return {\n      value: \'### test\' // markdown语法\n    };\n  },\n};\n<\/script>\n')])])]),a("blockquote"),e._v(" "),a("p",[e._v("// 注释")]),e._v(" "),a("p",[e._v(':value="detailContent.content"：引入要转换的内容')]),e._v(" "),a("p",[e._v(':subfield = "false"：开启单栏模式')]),e._v(" "),a("p",[e._v(":defaultOpen = \"'preview'\"：默认展示预览区域")]),e._v(" "),a("p",[e._v(':toolbarsFlag = "false"：关闭工具栏')]),e._v(" "),a("p",[e._v(':editable="false"：不允许编辑')]),e._v(" "),a("p",[e._v('scrollStyle="true"：开启滚动条样式(暂时仅支持chrome)')]),e._v(" "),a("p",[e._v(':ishljs = "true"：开启代码高亮')]),e._v(" "),a("h2",{attrs:{id:"第二种-直接使用整个markdown文件作为vue组件或者页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种-直接使用整个markdown文件作为vue组件或者页面"}},[e._v("#")]),e._v(" 第二种: 直接使用整个markdown文件作为vue组件或者页面")]),e._v(" "),a("p",[a("em",[a("a",{attrs:{href:"https://www.jianshu.com/p/c7b2966f9d3c",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文章(vue-cli2创建的vue项目)"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("1.安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install markdown-it --save\n")])])]),a("p",[e._v("2.新建markdownLoader.js文件(自定义loader)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const markdown = require('markdown-it')\nmodule.exports = function(src) {\n  const md = markdown({\n    html: true,\n    typographer: true,\n  })\n  const html = md.render(src)\n\n  return (\n    `<template>\\n` +\n    `<div class=\"markdown\">${html}</div>\\n` +\n    `</template>\\n`\n  )\n}\n")])])]),a("p",[e._v("3.在vue.config.js(如果没有,在根目录下自行创建)文件中配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('module.exports = {\n  configureWebpack: config => {\n    config.module.rules.push({\n      // 处理markdown文件\n      test: /\\.md$/,\n      use: [\n        {\n          loader: "vue-loader"\n        },\n        {\n          loader: require.resolve("./src/common/markdownLoader")\n        }\n      ],\n    },\n    );\n  }\n};\n')])])]),a("p",[e._v("4.新建测试文件test.md")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# woshimarkdown测试文件\n")])])]),a("p",[e._v("5.在router.js中引入test.md文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import Router from 'vue-router';\nimport Test from '@/docs/test.md'; // 自己创建的文件夹目录\n\nVue.use(Router);\n\nexport default new Router({\n  routes: [\n    {\n      path: '/test',\n      name: 'test',\n      component: Test,\n    },\n  ],\n});\n")])])]),a("p",[e._v("6.保存后重新启动项目("),a("strong",[e._v("尤其是修改自定义lodaer和vue.config.js配置文件,必须重新启动项目生效")]),e._v(")")])])}),[],!1,null,null,null);t.default=r.exports}}]);