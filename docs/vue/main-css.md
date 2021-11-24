# vue中使用全局css变量
1.vue中使用全局css变量
在vue.config.js文件中添加:
```
const path = require('path');
module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        localIdentName: "'[name]__[local]-[hash:base64:5]'",
        camelCase: true,
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/css/main.less')], // css文件路径
    },
  },
```
