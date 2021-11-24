# 在vue项目中(vue-cli3.0)展示markdown文件

## 第一种: vue组建中部分代码块展示markdown语法:
*[原文链接](https://blog.csdn.net/qq_42334965/article/details/89107132)*

1.安装
```
npm install movon-editor --save
```
2.引入
在 main.js 中引入以下字段：
```
 // 全局注册
 // import with ES6
 import Vue from 'vue'
 import mavonEditor from 'mavon-editor'
 import 'mavon-editor/dist/css/index.css'
```
*如果引入css报错,参考[该链接](https://www.jianshu.com/p/c324711f12b5)*

3.使用
```
<template>
    <div>
      <mavon-editor
        class="md"
        :value="value"
        :subfield="false"
        :defaultOpen="'preview'"
        :toolbarsFlag="false"
        :editable="false"
        :scrollStyle="true"
        :ishljs="true"
      ></mavon-editor>
    </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      value: '### test' // markdown语法
    };
  },
};
</script>
```
> 
// 注释

:value="detailContent.content"：引入要转换的内容

:subfield = "false"：开启单栏模式

:defaultOpen = "'preview'"：默认展示预览区域

:toolbarsFlag = "false"：关闭工具栏

:editable="false"：不允许编辑

scrollStyle="true"：开启滚动条样式(暂时仅支持chrome)

:ishljs = "true"：开启代码高亮

## 第二种: 直接使用整个markdown文件作为vue组件或者页面
*[参考文章(vue-cli2创建的vue项目)](https://www.jianshu.com/p/c7b2966f9d3c)*

1.安装
```
npm install markdown-it --save
```
2.新建markdownLoader.js文件(自定义loader)
```
const markdown = require('markdown-it')
module.exports = function(src) {
  const md = markdown({
    html: true,
    typographer: true,
  })
  const html = md.render(src)

  return (
    `<template>\n` +
    `<div class="markdown">${html}</div>\n` +
    `</template>\n`
  )
}
```
3.在vue.config.js(如果没有,在根目录下自行创建)文件中配置
```
module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
      // 处理markdown文件
      test: /\.md$/,
      use: [
        {
          loader: "vue-loader"
        },
        {
          loader: require.resolve("./src/common/markdownLoader")
        }
      ],
    },
    );
  }
};
```
4.新建测试文件test.md
```
# woshimarkdown测试文件
```
5.在router.js中引入test.md文件
```
import Router from 'vue-router';
import Test from '@/docs/test.md'; // 自己创建的文件夹目录

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
});
```
6.保存后重新启动项目(**尤其是修改自定义lodaer和vue.config.js配置文件,必须重新启动项目生效**)