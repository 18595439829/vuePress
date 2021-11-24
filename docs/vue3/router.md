# vue3使用vue-router
https://vue3js.cn/docs/zh/guide/migration/global-api.html#%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%80%85%E9%A1%BB%E7%9F%A5
由于 use 全局 API 在 Vue 3 中不再使用，此方法将停止工作并停止调用 Vue.use() 现在将触发警告，于是，开发者必须在应用程序实例上显式指定使用此插件：
```
const app = createApp(MyApp)
app.use(VueRouter)
```
推荐大家使用指令添加vue-router
*注意:使用vue add router指令会直接修改APP.vue文件,之前所做得更改将会被全部覆盖*
```
vue add router
```