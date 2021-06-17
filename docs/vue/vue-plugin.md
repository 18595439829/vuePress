# vue自定义进度条插件(Vue.use())
### 1. Progress.vue
```
<template>
  <div
    v-show="isShow"
    :class="$style['container']"
    :style="{ width: `${theWidth}%`, height: `${height}px`, background: theBackground }"
  >
    <!-- <div v-show="isShow" :class="$style['progress']" /> -->
  </div>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    height: {
      type: Number,
      required: false,
      default: 5,
    },
    background: {
      type: String,
      required: false,
      default: '#00b35c',
    },
    hideTime: {
      type: Number,
      required: false,
      default: 300,
    },
  },
  data() {
    return {
      theWidth: 0,
      theBackground: this.background,
      isShow: false,
    };
  },
  watch: {
    theWidth(v) {
      if (v >= 0 && v < 50) {
        this.setWidth(5);
      } else if (v >= 50 && v < 80) {
        this.setWidth(10);
      } else if (v >= 80 && v < 95) {
        this.setWidth(50);
      } else if (v >= 95 && v < 99) {
        this.setWidth(100);
      }
    },
  },
  // mounted() {
  //   this.start();
  //   setTimeout(()=> {
  //     this.finish();
  //   },5000)
  // },
  methods: {
    setWidth(time) {
      setTimeout(() => {
        this.theWidth += 0.1;
      }, time);
    },
    start() {
      this.theWidth = 0;
      this.isShow = true;
      this.theBackground = '#00b35c';
      this.setWidth(50);
      console.log('progress.start()')
    },
    finish() {
      this.theWidth = 100;
      this.theBackground = '#00b35c';
      setTimeout(() => {
        this.isShow = false;
      }, this.hideTime);
    },
    fail() {
      this.theWidth = 100;
      this.theBackground = '#ff4a46';
      setTimeout(() => {
        this.isShow = false;
      }, this.hideTime);
    },
  },
};
</script>
<style lang="less" module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
</style>
```
### 2.progress.ts
```
import Progress from "@/components/progress/Progress.vue";
class Pro {
  instense: any;
  constructor(Vue: any, options = {}) {
    const Pro = Vue.extend(Progress);
    this.instense = new Pro({
      propsData: options,
    });
    let progress = document.createElement("div");
    document.body.appendChild(progress);
    this.instense.$mount(progress);
  }
  start() {
    this.instense.start();
  }
  finish() {
    this.instense.finish();
  }
  fail() {
    this.instense.fail();
  }
}
const install = function(Vue: any, options: {}) {
  const progress = new Pro(Vue, options);
  //  通过原型对象去拓展对应的插件，可以使得所有的vue实例直接访问
  Vue.prototype.$progress = progress;
};
export default install;
```
### 3.在main.ts中引入
```
import Progress from '@/components/progress/index';

Vue.use(Progress);
```
