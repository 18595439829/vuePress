# 使用vuePress搭建自己的博客网站
*[vuepress官网](https://v1.vuepress.vuejs.org/zh/)*
## 先行测试
```
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```
##  安装
```
yarn global add vuepress # 或者：npm install -g vuepress
```
### 项目目录   
*我自己写的博客地址,可以参考着看,更方便理解,链接([http://134.175.115.187/vuePress/](http://134.175.115.187/vuePress/), 用的腾讯云(挺便宜的))*
```
 docs
   |____ .vuepress  //  构建后dist包,静态资源存放位置
             |_____dist   //  项目打包后存放的位置
             |_____public   //  静态资源存放的位置
             |____config.js   //  项目配置文件:路由,菜单等
   |____ vue  //  导航栏主菜单文件夹
          |____ nginx.md  // vue主菜单下的第一个子菜单
          |____ markdown.md   //  vue 主菜单下的第二个子菜单
 node_modules  //  项目依赖
 package.json  // webpack配置文件,指令/依赖版本
 README.md  // git项目自带文件
```
## 开始
1.  docs文件夹下新增README.md文件
```
#  README.md
---
home: true   ##是否启用主页
heroImage: /img/羊驼.jpg    ## 主页的图片
actionText: 开始    ##  主页功能按钮
actionLink: /vue/   ##  主页功能按钮跳转页面路径
features:
# - title: 个人开发博客
#   details: 针对在平时开发中碰到的问题,做一个总结。
# - title: Vue驱动
#   details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
# - title: 高性能
#   details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
2. docs文件夹下新增package.json配置文件
```
{
    "name": "docs",
    "version": "0.1.0",
    "scripts": {
        "docs:dev": "vuepress dev docs",  // 程序启动指令
        "docs:build": "vuepress build docs",  // 程序构建指令
        "deploy": "./docs/deploy.sh"  //  程序发布到github指令(下面会讲到)
    }
}
```
3.  docs文件下下新增.vuepress文件夹
 3.1 .vuepress文件夹下新增pulics文件夹,用来放置静态资源(eg: 图片/音视频)
 3.2 .vuepress文件夹下新增config.js配置文件![vuepress配置.png](/img/vuepress配置.png)

```
 // config.js
module.exports = {
  base: '/vuePress/',
  title: "洋洋", // 设置网站标题
  description: "个人开发博客",  // home页描述
  port: "8000",  // 监听端口
  head: [
    ["link", { rel: "icon", href: "/img/羊驼.png" }]   // home页图片,路径基于pubilc为'/'根路径
  ],
  themeConfig: {
   // 右上角导航
    nav: [
      {
        text: "开始",
        link: "/start/"
      },
      {
        text: "vue",
        link: "/vue/"
      },
      {
        text: "github",
        link: "https://github.com/18595439829/vuePress"
      }
    ],
 //  左侧侧边栏
    sidebar: {
      "/vue/": ["nginx", "markdown", "vuePress", "fileUpload"]
    }
  }
};
```
4. 在docs下新增vue文件夹,在vue文件夹下新增nginx.md,  markdown.md等文件,这是侧边栏sidebar  vue菜单下的子菜单
5.  启动项目
```
vuepress dev 
// 或 npm run docs:dev
// 或 yarn docs:dev
```
6.  构建静态文件
```
vuepress build
// 或 npm run docs:build
// 或 yarn docs:build
```
7. 部署到服务器
我是用的腾讯云部署的,没有使用官网的githun部署,参考我的另一篇文章
使用nginx将自己的vue项目部署到服务器上([使用nginx将自己的vue项目部署到服务器上](/nginx/nginx/))