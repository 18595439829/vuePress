# 关于元素contenteditable时的dom操作

## 1.光标的操作: document.execCommand()
>已废弃: This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.
这个特性已经过时了。尽管它在一些浏览器中仍然可以工作，但不鼓励使用它，因为它可能随时被删除。尽量避免使用它

https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
### 1.1 在光标处插入元素
```
document.execCommand('insertHTML',
   true,
  '<img id="cursor-position" src="" alt="" />'
)
```
### 1.2 全选光标所在可编辑元素的内容
```
this.$refs.text.focus()
document.execCommand('selectAll', true)
```
## 2.dom添加多个子节点使用createDocumentFragment()方法优化性能
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment
```
const fragment = document.createDocumentFragment()
nodes.forEach(node => {
     fragment.appendChild(node)
})
dom.appendChild(fragment)
```
## 3.设置光标位置(光标移至元素末尾)
```
//  光标移至dom元素末尾
setRange(){
  const dom = document.getElementById('xxx')
  const sel = window.getSelection()
  const range = document.createRange()
  range.selectNodeContents(dom)
  range.collapse(false)
  sel.removeAllRanges()
  sel.addRange(range)
}
```
## 4.手动去除粘贴样式,只留下纯文本
```
// 使用
window.addEventListener('paste', this.textInit)
// 去除粘贴样式
textInit (e) {
   e.preventDefault()
   let text
   const clp = (e.originalEvent || e).clipboardData
   if (clp === undefined || clp === null) {
     text = window.clipboardData.getData('text') || ''
   } else {
     text = clp.getData('text/plain') || ''
   }
   this.insertTextAtRange(text, e)
},
// 在光标处插入文本
insertTextAtRange (text, e) {
   const clp = (e.originalEvent || e).clipboardData
   if (clp === undefined || clp === null) {
     if (text !== '') {
       if (window.getSelection) {
         const newNode = document.createElement('span')
         newNode.innerHTML = text
         window.getSelection().getRangeAt(0).insertNode(newNode)
       } else {
         document.selection.createRange().pasteHTML(text)
       }
     }
   } else {
     if (text !== '') {
       document.execCommand('insertText', false, text)
     }
   }
}
```