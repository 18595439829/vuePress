# js比对两段文本的异同
使用[jsDiff](https://www.npmjs.com/package/diff/v/3.5.0)
## 1.下载
```
npm install diff --save
```
## 2.引入
不支持使用import引入
```
const Diff= require('diff');
```
## 3.使用
```
const Diff = require('diff')
const str1 = '天将降大任于斯人也'
const str2 = '天将降大于任斯人也'
const result = Diff.diffChars(str1, str2)
console.log(result)
/**
 * result
 * [
  { count: 4, value: '天将降大' },
  { count: 1, added: true, removed: undefined, value: '于' },
  { count: 1, value: '任' },
  { count: 1, added: undefined, removed: true, value: '于' },
  { count: 3, value: '斯人也' }
]
 */
```

