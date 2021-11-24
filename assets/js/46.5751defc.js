(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{418:function(e,t,n){"use strict";n.r(t);var s=n(44),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vue3使用is和v-is"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue3使用is和v-is"}},[e._v("#")]),e._v(" vue3使用is和v-is")]),e._v(" "),n("h3",{attrs:{id:"is的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#is的使用"}},[e._v("#")]),e._v(" is的使用")]),e._v(" "),n("ul",[n("li",[e._v("当is使用在普通html标签(div,h1,p等)上是,会当做普通属性存在;")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<div :is=\"'我是is属性'\"></div>\n")])])]),n("ul",[n("li",[e._v("在component标签上,使用is属性,则会保留vue2.x的功能,渲染为对应的组件")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<component :is=\"'TheTestComponent'\"  />\n")])])]),n("h3",{attrs:{id:"v-is的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-is的使用"}},[e._v("#")]),e._v(" v-is的使用")]),e._v(" "),n("p",[e._v("https://vue3js.cn/docs/zh/guide/migration/custom-elements-interop.html#_3-x-%E8%AF%AD%E6%B3%95-2\n如果需要将普通html标签渲染为组件时,需要使用v-is指令:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<div v-is=\"'TheTestComponent'\"></div>\n")])])]),n("p",[e._v("则会将div渲染为TheTestComponent.vue组件的内容")]),e._v(" "),n("blockquote",[n("p",[e._v("注意: v-is的属性值必须为string类型,即v-is=\"'componentName'\"")])]),e._v(" "),n("p",[e._v("TheTestComponent.vue")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  <div :class=\"$style['container']\">\n    <slot />\n    css-module\n    <div>\n      测试组件\n    </div>\n  </div>\n  \n</template>\n\n<script>\nexport default {\n  name: 'TheTestComponent',\n  data() {\n    return {\n    };\n  },\n  methods: {},\n};\n<\/script>\n<style lang=\"less\" module>\n@red: red;\n.container {\n    color: @red;\n}\n</style>\n")])])]),n("p",[e._v("APP.vue")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  <div class=\"hello\">\n    <div v-is=\"'TheTestComponent'\">\n      <div>\n        使用v-is渲染的组件\n      </div>\n    </div>\n    <component :is=\"'TheTestComponent'\"  >\n      <div>\n        使用component渲染的组件\n      </div>\n    </component>\n  </div>\n</template>\n\n<script>\nimport TheTestComponent from '@/views/TheTestComponent.vue'\n\nexport default {\n  name: 'APP',\n  components: {\n    TheTestComponent,\n  },\n}\n<\/script>\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);