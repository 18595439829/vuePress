# moveable组件学习笔记二: resize更改大小

## 1.resize 更改元素大小
https://daybrush.com/moveable/release/latest/doc/Moveable.Resizable.html
### 1.1 属性
```
this.moveable = new Moveable(
  this.$refs.container, // moveable元素的父元素
  {
      className: 'draggable', // 可交互组件的class名称
      target: this.$refs.example, // moveable元素
      origin: false, // moveable元素的中心点是否可见,default: true
      /**更改大小属性 */
      resizable: true, // 是否支持更改大小
      keepRatio: false, // 是否等比例更改大小, default: false
      renderDirections:  ["nw", "ne", "sw", "se"], // resize的句柄显示, default: ["n", "nw", "ne", "s", "se", "sw", "e", "w"]
      throttleResize: 100, // resize时节流的单位(px),即每次resize的最小变动为100px, 默认不节流
  }
);
```
### 1.2 事件
resize事件有**resizeStart**,**resize**,**resizeEnd**三种,通过moveable实例的on方法添加监听事件,返回值event
-  resize
```
this.moveable
  .on(
    "resize",
    ({
      currentTarget, // moveable实例,即this.moveable
      moveable, // moveable的manager对象, const manager = this.moveable.getManager();
      target, // DOM 初始化moveable的target元素
      clientX, // number 鼠标所在屏幕的横坐标
      clientY, // number 鼠标实例所在屏幕的纵坐标
      datas,
      inputEvent, // Event 鼠标事件mousemove
      direction, // // [numberX, numberY] 用来判断所操作的句柄: [1,1]表示操作的句柄为右下,[-1,-1]表示操作的句柄是左上, [1,0]表示操作的句柄为右侧边的中点
      width, // number 元素(target)的css宽度
      height, // number 元素(target)的css高度
      offsetWidth, // number 元素(target)的offsetWidth(padding + width + border)
      offsetHeight, // number 元素(target)的offsetHeight(padding + height + border)
      dist, // number[] 元素的[width,height]相对于原始数据的变化数据[x,y]
      delta, // number[] 元素的[width,height]的相对上一次数据的数据[deltaX,deltaY]
      isPinch, // 元素是否被压缩,不包括resize,scale所引起的形变[**暂未证实具体作用**]
      drag, // 元素的拖拽事件,同onDrag的参数
    }) => {
      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.transform = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
    }
  )
```
-  resizeStart
```
this.moveable
  .on(
    "resizeStart",
    ({
      dragStart, // 同dragStart事件
      set, // (size: number[width, height]) => any, 设置元素的style宽高
      setMin, // (minSize: number[minWidth, minHeight]) => any, 设置元素的style最小宽高
      setMax, // (minSize: number[maxWidth, maxHeight]) => any, 设置元素的style最大宽高
      setOrigin, // (origin: Array<string | number>) => any, 设置css起点, (default: % %)[**暂未发现实际作用**]
      setFixedDirection, // (startDirecition: number[]) => any, 设置resize的固定方向; 默认为反方向:即往左或往上修改元素大小为负值,预期结果为往左或往上更改元素宽高;如果设置为正值,则元素宽高只能往右或往下延展,即使操作是往左或往上修改元素大小
      setRatio, // (ratio: number) => any, 设置resize的比例,仅在keepRatio属性为true时生效, 默认为offsetWidth / offsetHeight
      currentTarget, 
      moveable, 
      target, 
      clientX, 
      clientY, 
      datas,
      inputEvent, 
      direction, 
    }) => {
      console.log('resizeStart')
    }
  )
```
- resizeEnd
```
this.moveable
    .on(
          "resizeEnd",
          ({
            lastEvent, // 最后一个拖动的事件,如果moveable实例未被执行resize操作,则为undefined
            isDrag,  // boolean moveable实例是否被拖动了
            isDouble,  // boolean moveable实例是否被双击
            currentTarget, 
            moveable, 
            target, 
            clientX, 
            clientY, 
            datas,
            inputEvent,
          }) => {
            
          }
        )
```
### 1.3 方法
- request({direction, deltaWidth, deltaHeight, offsetWidth, offsetHeight, isInstant})
direction // number[],  default:[1, 1]  resize的方向[*暂时未发现实际作用*]
deltaWidth,deltaHeight // number, resize后的元素相对于resize前的元素的宽高变化的数据(单位:px)
offsetWidth, offsetHeight// number, 元素resize后的绝对(实际)宽高(单位:px)
isInstant, // boolean, 是否立即执行request和requestEnd
```
dragRequest() {
      const requester = this.moveable.request("draggable");
      requester.request({ deltaX: 10, deltaY: 10 });
      requester.requestEnd();
    },
```