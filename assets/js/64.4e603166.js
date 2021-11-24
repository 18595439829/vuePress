(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{413:function(n,e,t){"use strict";t.r(e);var r=t(44),i=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"vue中使用vue-cropper裁剪图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue中使用vue-cropper裁剪图片"}},[n._v("#")]),n._v(" vue中使用vue-cropper裁剪图片")]),n._v(" "),t("p",[n._v("一个简易的demo,直接可以使用")]),n._v(" "),t("h3",{attrs:{id:"下载安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[n._v("#")]),n._v(" 下载安装")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("npm install vue-cropper\n// 或者\nyarn add vue-cropper\n")])])]),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[n._v("#")]),n._v(" 使用")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<template>\n  <div :class="$style[\'container\']">\n    <div :class="$style[\'content\']">\n      \x3c!-- 预览 使用zoom固定预览区域大小 150为固定宽度150px --\x3e\n      <div :class="$style[\'current\']">\n        <div>当前内容</div>\n        <div\n          class="show-preview"\n          :style="{\n            width: previews.w + \'px\',\n            height: previews.h + \'px\',\n            overflow: \'hidden\',\n            margin: \'0\',\n            zoom: 150 / previews.w,\n          }"\n        >\n          <div :style="previews.div">\n            <img :src="previews.url" :style="previews.img" />\n          </div>\n        </div>\n      </div>\n      <VueCropper\n        :class="$style[\'clip\']"\n        ref="cropper"\n        :img="option.img"\n        :autoCrop="option.autoCrop"\n        :canScale="option.canScale"\n        :fixed="option.fixed"\n        :fixedNumber="option.fixedNumber"\n        :centerBox="option.centerBox"\n        @realTime="realTime"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { VueCropper } from \'vue-cropper\'\nimport TEST from \'@/assets/image/test.png\'\n\nexport default {\n  name: \'TheEditSurface\',\n  components: {\n    VueCropper\n  },\n  data () {\n    return {\n      previews: {},\n      option: {\n        img: TEST, // 图片源\n        autoCrop: true, // 自动添加裁剪范围(80%宽高)\n        fixed: true, // 裁剪框是否等比缩放\n        canScale: false, // 图片是否支持鼠标滚轮缩放\n        fixedNumber: [16, 9], // 裁剪框比例\n        centerBox: true // 裁剪框是否必须在图片内部\n      }\n    }\n  },\n  methods: {\n    realTime (data) {\n      this.previews = data\n    }\n  }\n}\n<\/script>\n\n<style lang="less" module>\n.container {\n  .content {\n    display: flex;\n    .title-height {\n      height: 36px;\n      line-height: 36px;\n    }\n    .current {\n      margin-right: 33px;\n      .show-preview {\n        width: 150px;\n        height: 84px;\n      }\n      & > div:nth-child(1) {\n        .title-height;\n      }\n      & > div:nth-child(2) {\n        width: 150px;\n        height: 84px;\n        background: #cccccc;\n        text-align: center;\n        line-height: 84px;\n      }\n    }\n    .clip {\n      width: 497px;\n      height: 279px;\n    }\n  }\n}\n</style>\n\n')])])])])}),[],!1,null,null,null);e.default=i.exports}}]);