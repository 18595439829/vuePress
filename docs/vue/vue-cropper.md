# vue中使用vue-cropper裁剪图片
一个简易的demo,直接可以使用
### 下载安装
```
npm install vue-cropper
// 或者
yarn add vue-cropper
```
### 使用
```
<template>
  <div :class="$style['container']">
    <div :class="$style['content']">
      <!-- 预览 使用zoom固定预览区域大小 150为固定宽度150px -->
      <div :class="$style['current']">
        <div>当前内容</div>
        <div
          class="show-preview"
          :style="{
            width: previews.w + 'px',
            height: previews.h + 'px',
            overflow: 'hidden',
            margin: '0',
            zoom: 150 / previews.w,
          }"
        >
          <div :style="previews.div">
            <img :src="previews.url" :style="previews.img" />
          </div>
        </div>
      </div>
      <VueCropper
        :class="$style['clip']"
        ref="cropper"
        :img="option.img"
        :autoCrop="option.autoCrop"
        :canScale="option.canScale"
        :fixed="option.fixed"
        :fixedNumber="option.fixedNumber"
        :centerBox="option.centerBox"
        @realTime="realTime"
      />
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import TEST from '@/assets/image/test.png'

export default {
  name: 'TheEditSurface',
  components: {
    VueCropper
  },
  data () {
    return {
      previews: {},
      option: {
        img: TEST, // 图片源
        autoCrop: true, // 自动添加裁剪范围(80%宽高)
        fixed: true, // 裁剪框是否等比缩放
        canScale: false, // 图片是否支持鼠标滚轮缩放
        fixedNumber: [16, 9], // 裁剪框比例
        centerBox: true // 裁剪框是否必须在图片内部
      }
    }
  },
  methods: {
    realTime (data) {
      this.previews = data
    }
  }
}
</script>

<style lang="less" module>
.container {
  .content {
    display: flex;
    .title-height {
      height: 36px;
      line-height: 36px;
    }
    .current {
      margin-right: 33px;
      .show-preview {
        width: 150px;
        height: 84px;
      }
      & > div:nth-child(1) {
        .title-height;
      }
      & > div:nth-child(2) {
        width: 150px;
        height: 84px;
        background: #cccccc;
        text-align: center;
        line-height: 84px;
      }
    }
    .clip {
      width: 497px;
      height: 279px;
    }
  }
}
</style>

```