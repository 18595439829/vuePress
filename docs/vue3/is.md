# vue3使用is和v-is
### is的使用
* 当is使用在普通html标签(div,h1,p等)上是,会当做普通属性存在;
```
<div :is="'我是is属性'"></div>
```
* 在component标签上,使用is属性,则会保留vue2.x的功能,渲染为对应的组件
```
<component :is="'TheTestComponent'"  />
```
### v-is的使用
https://vue3js.cn/docs/zh/guide/migration/custom-elements-interop.html#_3-x-%E8%AF%AD%E6%B3%95-2
如果需要将普通html标签渲染为组件时,需要使用v-is指令:
```
<div v-is="'TheTestComponent'"></div>
```
则会将div渲染为TheTestComponent.vue组件的内容 
> 注意: v-is的属性值必须为string类型,即v-is="'componentName'"

TheTestComponent.vue
```
<template>
  <div :class="$style['container']">
    <slot />
    css-module
    <div>
      测试组件
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'TheTestComponent',
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="less" module>
@red: red;
.container {
    color: @red;
}
</style>
```
APP.vue
```
<template>
  <div class="hello">
    <div v-is="'TheTestComponent'">
      <div>
        使用v-is渲染的组件
      </div>
    </div>
    <component :is="'TheTestComponent'"  >
      <div>
        使用component渲染的组件
      </div>
    </component>
  </div>
</template>

<script>
import TheTestComponent from '@/views/TheTestComponent.vue'

export default {
  name: 'APP',
  components: {
    TheTestComponent,
  },
}
</script>
```