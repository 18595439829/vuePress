# 单行文本和多行文本内容过长,超出标签显示...
## 单行文本
```
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
```
## 多行文本
```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
```