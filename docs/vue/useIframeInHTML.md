# 将vue使用iframe嵌套至html中使用(页面交互传值)
## 1.放置iframe的父文件
```
<!-- parent.html -->
<!DOCTYPE html>
<html lang="cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>parent</title>
  </head>
  <body>
    <iframe id="parent-iframe" src="./son.html"></iframe>
    <button id="button-get-son">调用子组件的方法</button>
  </body>
</html>
<script>
const iframe = document.getElementById('parent-iframe');
const button = document.getElementById('button-get-son');
button.onclick = function () {
  console.log(iframe.contentWindow);
  iframe.contentWindow.init();
};
</script>
```
- 父组件调用子组件方法
iframe.contentWindow可以获取到子组件
```
const iframe = document.getElementById(iframe');
iframe.contentWindow.子组件方法名(arguments);
```
## 2.使用vue的子文件
```
<!-- son.html -->
<!DOCTYPE html>
<html lang="cn">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>parent</title>
  </head>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <body>
    <div id="app">
      APP子组件
      <button @click="getParent">获取iframe父组件</button>
      {{parentData}}
    </div>
  </body>
</html>
<script>
const vm = new Vue({
  el: '#app',
  name: 'Son',
  data: {
    parentData: '',
  },
  methods: {
    getParent() {
      const parent = window.parent.document.getElementById('parent-iframe');
      console.log(parent);
      window.parent.parentFn();
    },
  },
});
function init() {
  vm.parentData = '父组件调用子组件方法';
}
</script>
```
- 子组件获取父组件对象
window.parent 获取父组件
```
const parent = window.parent.document.getElementById('parent-iframe');
console.log(parent);
window.parent.父页面方法(arguments);
```
## 3.不要直接在浏览器打开文件,否则会报跨域错误
```
DOMException: Blocked a frame with origin "null" from accessing a cross-origin frame...
```
原因: 同源安全策略
        你不能用javascript访问一个<iframe>，如果你能做到这一点，那将是一个巨大的安全缺陷。对于同一源策略浏览器，阻止脚本尝试访问具有不同源的帧。
## ***建议使用nginx访问***
参见: https://www.jianshu.com/p/daaaaef7fe8f
```
# nginx.conf
server {
       listen       9000;
       server_name  localhost;

       location / {
           root html/test;
           index parent.html parent.htm;
       }
 }
```
## 4.在html中使用.vue组件
- 引入 httpVueLoader.js 插件
```
<script src="https://unpkg.com/http-vue-loader"></script>
```
- Vue.use注册插件
```
<body>
  <div id="app">
    <TestComp />
  </div>
</body>
<script>
Vue.use(httpVueLoader)
new Vue({
  el: '#app',
  components: {
    TestComp: 'url: ./TestComp.vue',
  }
});
</script>
```
## 5.iframe父自页面交互传值
-  iframe页面调用子页面方法
```
iframe.contentWindow.子页面方法();
```
- 子页面调用iframe页面方法
```
window.parent.父页面方法();
```
----这是一条分割线----
**不推荐使用,可能会产生安全隐患,如果使用,请详细阅读文档:
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage**
- iframe向子页面传值
```
// 父页面传值 iframe.html
iframe.contentWindow.postMessage (data, 'http://localhost:8000/');
// 子页面接收 son.html
window. addEventListener ('message', function(event) {
    //event.data获取传过来的数据
  console.log(event.data)
});
```
- 子页面向iframe传值
```
// 子页面传值 son.html
 window.parent.postMessage(data, 'http://localhost:8000/');
// 父页面接收 iframe.html
window.addEventListener('message', function(e){
    console.log(e.data)
}, false);
```