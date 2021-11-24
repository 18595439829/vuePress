# 修改chrome滚动条css
```
/* 设置滚动条整体部分的样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* 滚动槽--外层轨道 */
::-webkit-scrollbar-track {
  background: none;
}

/* 内层轨道（不包含滚动块部分） */
::-webkit-scrollbar-track-piece {
  opacity: 0;   /* 透明度设置为全透明，使得滚动条背景色为网页颜色 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(92, 110, 130, 0.6);
}
```