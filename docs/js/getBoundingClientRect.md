# 获取元素在整个窗口中的位置getBoundingClientRect

使用getBoundingClientRect()方法
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
```
getElementPosition(element) {
  let {left, top, right, bottom, width, height} = element.getBoundingClientRect()
  return {left, top, right, bottom, width, height}
}
```