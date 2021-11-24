# vue中,将数组转化为通讯录格式(兼容手机端APP)
参考 [前端小慵卿](https://www.jianshu.com/u/101e206a52a8)的[https://www.jianshu.com/p/1dac53aed886](https://www.jianshu.com/p/1dac53aed886)
## 效果
```
// 测试数据
[
        {
          text: '123',
          value: 'id001',
        },
        {
          text: '测试',
          value: 'id002',
        },
        {
          text: '#井号',
          value: 'id003'
        },
        {
          text: '_下划线',
          value: 'id004'
        },
        {
          text: 'test',
          value: 'id005',
        },
 ]
```
![效果.jpg](/img/效果.jpg)

## 1.项目中引入pinyin.js文件

文件太长就不放上来了,放一下网盘链接
链接: https://pan.baidu.com/s/18887RIfKE8OKDdHyCqom5Q 提取码: buqn
## 新建sort.js文件
```
import {pinyin} from "pinyin.js";

const isChinese = (temp) => {
  let re = /[^\u4E00-\u9FA5]/;
  if (re.test(temp)) {
    return false;
  }
  return true;
};
const isChar = (char) => {
  let reg = /[A-Za-z]/;
  if (!reg.test(char)) {
    return false;
  }
  return true;
};
//  数组格式默认显示text
const sort = (arr, text = 'text') => {
  if (!String.prototype.localeCompare) return null;
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split(""); //ABCDEFGHJKLMNOPQRSTWXYZ
  let zh = "阿八嚓哒妸发旮哈*讥咔垃痳拏噢妑七呥涩它**穵夕丫帀".split("");
  let result = [];
  for (let i = 0; i < letters.length; i++) {
   let curr = { title: letters[i], group: [] }; //字母对象，data数据
    arr.forEach((n) => {
      let initial = n[text][0]; //截取第一个字符
      if (initial == letters[i] || initial == letters[i].toLowerCase()) {
        //首字符是英文的
        curr.group.push(n);
      } else if (zh[i] !== "*" && isChinese(initial)) {
        //判断是否是无汉字,是否是中文
        let chinaName = pinyin.getFullChars(initial).split('')[0]; //直接使用pinyin中方法
        if (chinaName == letters[i] || chinaName == letters[i].toLowerCase()) {
          //首字符是英文的
          curr.group.push(n);
        }
      }
      if (letters[i] == "#" && !isChar(initial) && !isChinese(initial)) {
        curr.group.push(n);
      }
    });
    if (curr.group.length) {
      curr.group = Array.from(new Set(curr.group)); // 去重: 不知道为什么#开头的会重复,其他的不会
      result.push(curr);
    }
  }
  return result;
};
export {
  sort,
}
```
## 其他转换方式(web端浏览器打开正常,手机端APP不行)
```
const sort2 = (arr) => {
  if (!String.prototype.localeCompare) return null;
  arr.forEach((item, index) => {
    item.name = item.text;
    item.id = item.value;
  });
  let letters = "*abcdefghjklmnopqrstwxyz".split("");
  let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split("");

  let segs = [];
  let curr;
  letters.forEach((item, i) => {
    curr = {
      title: item,
      group: [],
    };
    arr.forEach((key, index) => {
      let name = key.name.trim();
      if (
        (!zh[i - 1] || zh[i - 1].localeCompare(name, "zh-Hans-CN") <= 0) &&
        name.localeCompare(zh[i], "zh-Hans-CN") == -1
      ) {
        curr.group.push(key);
      }
    });
    if (curr.group.length) {
      segs.push(curr);
      curr.group.sort(function (a, b) {
        return a.name.localeCompare(b.name, "zh-Hans-CN");
      });
    }
  });
  return segs;
};
```