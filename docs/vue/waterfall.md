# vue图片瀑布流组件
### 使用
```
<template>
  <TheWaterfall :list="list"/>
</template>
<script>
  import TheWaterfall from './TheWaterfall.vue'
  export default {
    components: {
      TheWaterfall
    },
    data() {
      return {
        list: [
          {
              id: 1,
              url: require('@/tests/images/Rectangle 2031.png'),
              width: 142,
              height: 80
          }
        ]
      }
    }
  }
</script>
```
TheWaterfall.vue
```
<template>
  <div :class="$style['container']" @click="click">
    <div
      :class="$style['item']"
      :style="{ width: `${width}px` }"
      ref="item"
      v-for="item in list"
      :current="current == item.id"
      :id="item.id"
      :key="item.id"
    >
      <img :src="item.url" :id="item.id" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheWaterfall',
  props: {
    /**
       * img数组
       * {
       *    id: string,
       *    url: string,
       *    width: number,
       *    height: number
       * }[]
       */
    list: {
      type: Array,
      required: true
    },
    /**
     * 图片的宽度
     */
    width: {
      type: Number,
      required: false,
      default: 142
    },
    /**
     * 瀑布流有多少列
     */
    columns: {
      type: Number,
      required: false,
      default: 2
    },
    /**
     * 图片的右边距
     */
    right: {
      type: Number,
      required: false,
      default: 10
    },
    /**
     * 图片的下边距
     */
    bottom: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data () {
    return {
      current: null
    }
  },
  methods: {
    click (e) {
      this.current = e.target.id
    },
    waterFall () {
      // 1- 确定图片的宽度 - 滚动条宽度
      const columns = this.columns // 默认2 列
      const itemWidth = this.width // 得到item的宽度
      // 设置到item的宽度

      const arr = []

      this.list.forEach((item, index) => {
        const height = item.height + this.bottom
        const width = item.width
        const bi = itemWidth / width // 获取缩小的比值
        const boxheight = height * bi // 图片的高度*比值 = item的高度
        if (index < columns) {
          // 2- 确定第一行
          this.$refs.item[index].style.top = '0px'
          this.$refs.item[index].style.left = `${
            itemWidth * index
              ? itemWidth * index + this.right
              : itemWidth * index
          }px`
          arr.push(boxheight)
        } else {
          // 其他行
          // 3- 找到数组中最小高度  和 它的索引
          let minHeight = arr[0]
          let min = 0
          for (let j = 0; j < arr.length; j++) {
            if (minHeight > arr[j]) {
              minHeight = arr[j]
              min = j
            }
          }
          // 4- 设置下一行的第一个盒子位置
          // top值就是最小列的高度
          this.$refs.item[index].style.top = `${arr[min]}px`
          this.$refs.item[index].style.left = this.$refs.item[min].style.left

          // 5- 修改最小列的高度
          // 最小列的高度 = 当前自己的高度 + 拼接过来的高度
          arr[min] = arr[min] + boxheight
        }
      })
    }
  },
  mounted () {
    this.waterFall()
  }
}
</script>

<style lang="less" module>
.container {
  width: 100%;
  position: relative;
  height: 100vh;
  background: #fff;
  .item {
    z-index: 10;
    transition: 0.25s;
    overflow: hidden;
    position: absolute;
    &[current="true"] {
      outline: 1px solid #3307fe;
      box-sizing: border-box;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

```