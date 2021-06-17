# uni-app由于map层级问题,使用sunNVue展示弹窗
[uni-app nvue文档](https://uniapp.dcloud.io/use-weex?id=%e5%bf%ab%e9%80%9f%e4%b8%8a%e6%89%8b)
以下实例可直接使用
github地址 https://github.com/18595439829/vue-uni-app-login
**subNvue在浏览器打开会报错**
*API `getSubNVueById` is not yet implemented*
**请使用模拟器或者真机调试**
## 1. 新建father.vue 父组件
```
<template>
  <div class="container">
    我是父组件
    <map
      style="width: 100%; height: 300px;"
      :latitude="latitude"
      :longitude="longitude"
    />
    <button @tap="toSon">
      点击父组件按钮,弹出子组件模态框
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.909,
      longitude: 116.39742,
      subNvue: null,
    };
  },
  onLoad() {
    uni.$on("modal-change", (data) => {
      console.log("子组件传递给父组件的值", data);
      this.subNvue.hide();
    });
  },
  methods: {
    toSon() {
      this.subNvue = uni.getSubNVueById("sonModal"); //获取
      this.subNvue.show(); // 显示
      uni.$emit("to-modal", '我是父组件传给子组件的值');
    },
  },
};
</script>

<style></style>
```
## 2.新建 son.nvue
```
<template>
  <div class="container">
    我是子组件
    <button @tap="toFather">点击子组件按钮,向父组件传值</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            latitude: 39.909,
            longitude: 116.39742,
        }
    },
    onLoad() {
        uni.$on("to-modal", (data) => {
            console.log('父组件传递给子组件的值', data);
        });
    },
    methods: {
        toFather() {
            uni.$emit("modal-change", '我是传递给父组件的值');
        }
    }
}
</script>

<style>

</style>
```
## 3. 在pages.json中注册son.nvue
```
{
  "pages": [
    {
      "path": "pages/father",
      "style": {
        "navigationBarTitleText": "父组件",
        "app-plus": {
          "subNVues": [
            {
              "id": "sonModal", // 唯一标识
              "path": "pages/son", // 页面路径
              "type": "popup", //原生子窗口内置样式，可取值：'popup',弹出层；"navigationBar",导航栏
              "style": {
                "top": "0",
                "left": "0",
                "bottom": "0",
                "right": "0",
                "background": "transparent"
              }
            }
          ]
        }
      }
    },
  ]
}
```
