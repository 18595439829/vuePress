# vscode添加vue模板(用户代码片段输出$)
参考"小鸟睡在我身旁"的问题答案 [https://segmentfault.com/q/1010000017374634](https://segmentfault.com/q/1010000017374634)
## 1.文件->首选项->用户片段: 输入vue,找到vue.json
```
{
  "Print to console": {
    "prefix": "vue",
    "body": [
      "<template>",
      "  <div :class=\"\\$style['container']\">",
      "    $Index",
      "  </div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name: 'Index',",
      "  data() {",
      "    return {",
      "    };",
      "  },",
      "  methods: {},",
      "};",
      "</script>",
      "",
      "<style lang=\"less\" module>",
	    " .container {",
	    " }",
      "</style>",
      ""
    ],
    "description": "Log output to console"
  }
}

```
## vue.json文件中:
```
\ 用来转义 如 \"
$ 用来控制光标位置
\\$ 转义$ ,可以输出$字符
```