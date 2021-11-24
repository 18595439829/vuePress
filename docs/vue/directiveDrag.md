# vue添加全局自定义指令:拖拽
参考: [https://segmentfault.com/a/1190000014572113](https://segmentfault.com/a/1190000014572113)
  [https://cn.vuejs.org/v2/guide/custom-directive.html](https://cn.vuejs.org/v2/guide/custom-directive.html)
## 1.新建directives.js
```
import Vue from "vue";
Vue.directive("drag", {
    // 指令的定义
    bind: function(el) {
      let odiv = el; //获取当前元素
      odiv.style.position = 'fixed';
      odiv.onmousedown = (e) => {
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;
        document.onmousemove = (e) => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          //移动当前元素
          odiv.style.left = left + "px";
          odiv.style.top = top + "px";
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
});
```
## 2.在main.js引入
```
// main.js
import '**/directives.js'; 
```
## 3.在vue中使用
```
<!-- test.vue -->
<template>
  <div v-drag></div>
</template>
```
