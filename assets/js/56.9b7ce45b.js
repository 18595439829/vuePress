(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{404:function(t,n,e){"use strict";e.r(n);var r=e(44),a=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue中-将数组转化为通讯录格式-兼容手机端app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中-将数组转化为通讯录格式-兼容手机端app"}},[t._v("#")]),t._v(" vue中,将数组转化为通讯录格式(兼容手机端APP)")]),t._v(" "),e("p",[t._v("参考 "),e("a",{attrs:{href:"https://www.jianshu.com/u/101e206a52a8",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端小慵卿"),e("OutboundLink")],1),t._v("的"),e("a",{attrs:{href:"https://www.jianshu.com/p/1dac53aed886",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/1dac53aed886"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 测试数据\n[\n        {\n          text: '123',\n          value: 'id001',\n        },\n        {\n          text: '测试',\n          value: 'id002',\n        },\n        {\n          text: '#井号',\n          value: 'id003'\n        },\n        {\n          text: '_下划线',\n          value: 'id004'\n        },\n        {\n          text: 'test',\n          value: 'id005',\n        },\n ]\n")])])]),e("p",[e("img",{attrs:{src:"/img/%E6%95%88%E6%9E%9C.jpg",alt:"效果.jpg"}})]),t._v(" "),e("h2",{attrs:{id:"_1-项目中引入pinyin-js文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目中引入pinyin-js文件"}},[t._v("#")]),t._v(" 1.项目中引入pinyin.js文件")]),t._v(" "),e("p",[t._v("文件太长就不放上来了,放一下网盘链接\n链接: https://pan.baidu.com/s/18887RIfKE8OKDdHyCqom5Q 提取码: buqn")]),t._v(" "),e("h2",{attrs:{id:"新建sort-js文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建sort-js文件"}},[t._v("#")]),t._v(" 新建sort.js文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import {pinyin} from "pinyin.js";\n\nconst isChinese = (temp) => {\n  let re = /[^\\u4E00-\\u9FA5]/;\n  if (re.test(temp)) {\n    return false;\n  }\n  return true;\n};\nconst isChar = (char) => {\n  let reg = /[A-Za-z]/;\n  if (!reg.test(char)) {\n    return false;\n  }\n  return true;\n};\n//  数组格式默认显示text\nconst sort = (arr, text = \'text\') => {\n  if (!String.prototype.localeCompare) return null;\n  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split(""); //ABCDEFGHJKLMNOPQRSTWXYZ\n  let zh = "阿八嚓哒妸发旮哈*讥咔垃痳拏噢妑七呥涩它**穵夕丫帀".split("");\n  let result = [];\n  for (let i = 0; i < letters.length; i++) {\n   let curr = { title: letters[i], group: [] }; //字母对象，data数据\n    arr.forEach((n) => {\n      let initial = n[text][0]; //截取第一个字符\n      if (initial == letters[i] || initial == letters[i].toLowerCase()) {\n        //首字符是英文的\n        curr.group.push(n);\n      } else if (zh[i] !== "*" && isChinese(initial)) {\n        //判断是否是无汉字,是否是中文\n        let chinaName = pinyin.getFullChars(initial).split(\'\')[0]; //直接使用pinyin中方法\n        if (chinaName == letters[i] || chinaName == letters[i].toLowerCase()) {\n          //首字符是英文的\n          curr.group.push(n);\n        }\n      }\n      if (letters[i] == "#" && !isChar(initial) && !isChinese(initial)) {\n        curr.group.push(n);\n      }\n    });\n    if (curr.group.length) {\n      curr.group = Array.from(new Set(curr.group)); // 去重: 不知道为什么#开头的会重复,其他的不会\n      result.push(curr);\n    }\n  }\n  return result;\n};\nexport {\n  sort,\n}\n')])])]),e("h2",{attrs:{id:"其他转换方式-web端浏览器打开正常-手机端app不行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他转换方式-web端浏览器打开正常-手机端app不行"}},[t._v("#")]),t._v(" 其他转换方式(web端浏览器打开正常,手机端APP不行)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const sort2 = (arr) => {\n  if (!String.prototype.localeCompare) return null;\n  arr.forEach((item, index) => {\n    item.name = item.text;\n    item.id = item.value;\n  });\n  let letters = "*abcdefghjklmnopqrstwxyz".split("");\n  let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split("");\n\n  let segs = [];\n  let curr;\n  letters.forEach((item, i) => {\n    curr = {\n      title: item,\n      group: [],\n    };\n    arr.forEach((key, index) => {\n      let name = key.name.trim();\n      if (\n        (!zh[i - 1] || zh[i - 1].localeCompare(name, "zh-Hans-CN") <= 0) &&\n        name.localeCompare(zh[i], "zh-Hans-CN") == -1\n      ) {\n        curr.group.push(key);\n      }\n    });\n    if (curr.group.length) {\n      segs.push(curr);\n      curr.group.sort(function (a, b) {\n        return a.name.localeCompare(b.name, "zh-Hans-CN");\n      });\n    }\n  });\n  return segs;\n};\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);