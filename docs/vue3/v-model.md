# vue3在组件上使用自定义v-model
父组件使用v-model:xxx传递prop,子组件使用$emit('update:xxx', argu)返回给父组件值(xxx为组件传值的属性名;argu为子组件返回给父组件的值)
### 1.父组件
我们使用title作为prop传递给子组件的值; 我们使用v-model:title,给v-model传递一个title的参数,来让子组件可以接收到属性名为title的prop;
```
<template>
  <Model v-model:title="title"></Model>
</template>

<script>
import { defineComponent, ref } from "vue";
import Model from ''xxx/Model.vue"

export default defineComponent({
  components: {
    Model
  },
  setup(){
    const title = ref('传递给子组件的值')
    return { title }
  }
}
</script>
```
### 2.子组件Model.vue
子组件使用$emit('update:title', argu)事件,返回给父组件argu值,以更改title
```
<template>
  <div >
    <button @click="$emit('update:title', '子组件传递给父组件的值')">子组件点击</button>
    <div>{{title}}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
