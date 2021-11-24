(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{414:function(e,s,t){"use strict";t.r(s);var n=t(44),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"使用vuepress搭建自己的博客网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用vuepress搭建自己的博客网站"}},[e._v("#")]),e._v(" 使用vuePress搭建自己的博客网站")]),e._v(" "),t("p",[t("em",[t("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress官网"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"先行测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先行测试"}},[e._v("#")]),e._v(" 先行测试")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 安装\nyarn global add vuepress # 或者：npm install -g vuepress\n\n# 新建一个 markdown 文件\necho '# Hello VuePress!' > README.md\n\n# 开始写作\nvuepress dev .\n\n# 构建静态文件\nvuepress build .\n")])])]),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yarn global add vuepress # 或者：npm install -g vuepress\n")])])]),t("h3",{attrs:{id:"项目目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目目录"}},[e._v("#")]),e._v(" 项目目录")]),e._v(" "),t("p",[t("em",[e._v("我自己写的博客地址,可以参考着看,更方便理解,"),t("a",{attrs:{href:"https://18595439829.github.io/vuePress/vue/vuePress.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://18595439829.github.io/vuePress/vue/vuePress.html"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" docs\n   |____ .vuepress  //  构建后dist包,静态资源存放位置\n             |_____dist   //  项目打包后存放的位置\n             |_____public   //  静态资源存放的位置\n             |____config.js   //  项目配置文件:路由,菜单等\n   |____ vue  //  导航栏主菜单文件夹\n          |____ nginx.md  // vue主菜单下的第一个子菜单\n          |____ markdown.md   //  vue 主菜单下的第二个子菜单\n node_modules  //  项目依赖\n package.json  // webpack配置文件,指令/依赖版本\n README.md  // git项目自带文件\n")])])]),t("h2",{attrs:{id:"开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[e._v("#")]),e._v(" 开始")]),e._v(" "),t("ol",[t("li",[e._v("docs文件夹下新增README.md文件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#  README.md\n---\nhome: true   ##是否启用主页\nheroImage: /img/羊驼.jpg    ## 主页的图片\nactionText: 开始    ##  主页功能按钮\nactionLink: /vue/   ##  主页功能按钮跳转页面路径\nfeatures:\n# - title: 个人开发博客\n#   details: 针对在平时开发中碰到的问题,做一个总结。\n# - title: Vue驱动\n#   details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n# - title: 高性能\n#   details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\nfooter: MIT Licensed | Copyright © 2018-present Evan You\n---\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("docs文件夹下新增package.json配置文件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "name": "docs",\n    "version": "0.1.0",\n    "scripts": {\n        "docs:dev": "vuepress dev docs",  // 程序启动指令\n        "docs:build": "vuepress build docs",  // 程序构建指令\n        "deploy": "./docs/deploy.sh"  //  程序发布到github指令(下面会讲到)\n    }\n}\n')])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("docs文件下下新增.vuepress文件夹\n3.1 .vuepress文件夹下新增pulics文件夹,用来放置静态资源(eg: 图片/音视频)\n3.2 .vuepress文件夹下新增config.js配置文件"),t("img",{attrs:{src:"/img/vuepress%E9%85%8D%E7%BD%AE.png",alt:"vuepress配置.png"}})])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' // config.js\nmodule.exports = {\n  base: \'/vuePress/\',\n  title: "洋洋", // 设置网站标题\n  description: "个人开发博客",  // home页描述\n  port: "8000",  // 监听端口\n  head: [\n    ["link", { rel: "icon", href: "/img/羊驼.png" }]   // home页图片,路径基于pubilc为\'/\'根路径\n  ],\n  themeConfig: {\n   // 右上角导航\n    nav: [\n      {\n        text: "开始",\n        link: "/start/"\n      },\n      {\n        text: "vue",\n        link: "/vue/"\n      },\n      {\n        text: "github",\n        link: "https://github.com/18595439829/vuePress"\n      }\n    ],\n //  左侧侧边栏\n    sidebar: {\n      "/vue/": ["nginx", "markdown", "vuePress", "fileUpload"]\n    }\n  }\n};\n')])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("在docs下新增vue文件夹,在vue文件夹下新增nginx.md,  markdown.md等文件,这是侧边栏sidebar  vue菜单下的子菜单")]),e._v(" "),t("li",[e._v("启动项目")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vuepress dev \n// 或 npm run docs:dev\n// 或 yarn docs:dev\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("构建静态文件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vuepress build\n// 或 npm run docs:build\n// 或 yarn docs:build\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[e._v("部署到服务器\n我是用的腾讯云部署的,没有使用官网的githun部署,参考我的另一篇文章\n使用nginx将自己的vue项目部署到服务器上("),t("RouterLink",{attrs:{to:"/nginx/nginx/"}},[e._v("使用nginx将自己的vue项目部署到服务器上")]),e._v(")")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);