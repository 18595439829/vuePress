# moveable组件学习笔记一: drag拖拽

## 一. 准备阶段
***moveable支持拖拽(drag),更改大小(resize),缩放(scale),旋转(rotate)等功能***
### 1.github文档地址(https://github.com/daybrush/moveable) 6.2k个星
### 2.demo地址
原插件demo https://daybrush.com/moveable/
vue-moveable的demo https://alis.oss.aliyuncs.com/page/moveble/#/
## 二.文档
### 1.初始化一个moveable
通过new Moveable(parentElement, options),options都支持先初始化一个实例,后续直接使用`.属性名`的方式设置
```
import Moveable from "moveable";

this.moveable = new Moveable(
        this.$refs.container, // moveable元素的父元素
        {
          className: 'draggable', // 可交互组件的class名称
          target: this.$refs.example, // 响应moveable操作结果的元素,如包裹一个可拖拽图钉的方块
          origin: false, // moveable元素的中心点是否可见,default: true
          edge: true, // resize,scale是否支持通过边框操作
          padding: { left: 0, top: 0, right: 0, bottom: 0 }, // target元素周围增加padding,不会改变target样式,只是将moveable选框撑开, default: null
          passDragArea: false, // default: false, [**没有发现实际作用**]
          zoom: 1, // moeable组件的元素缩放比例,default: 1,即边框或者四角和边框的句柄等
          draggable: true, // 是否支持可拖拽
          dragTarget, this.$refs.drag, // 执行moveable操作的元素,如可拖拽的图钉
          resizable: true, // 是否支持更改大小
          scalable: true, // 是否支持缩放
          rotatable: true, // 是否支持旋转
          warpable: true,  // 是否支持折叠,3d效果,增加Z轴
          throttleDrag: 0,
          throttleResize: 0,0
        }
      );
this.moveable.scalable = false
```
> **moveable实例为需要执行moveable操作的moveable对象,包括拖拽句柄或者边框等;**
**target: 则为响应moveable操作结果的dom元素,即我们真实想要变更的dom**
### 2.draggable 拖拽
https://daybrush.com/moveable/release/latest/doc/Moveable.Draggable.html
#### 2.1 属性
```
this.moveable = new Moveable(
  this.$refs.container, // moveable元素的父元素
  {
      className: 'draggable', // 可交互组件的class名称
      target: this.$refs.example, // 响应moveable操作结果的元素
      origin: false, // moveable元素的中心点是否可见,default: true
      /**拖拽属性 */
      draggable: true, // 是否支持可拖拽,default: false
      edgeDraggable: true, // 是否支持拖拽边框移动, default: false
      startDragRotate: 45, // 拖拽起始位置的角度(deg): default: 0
      throttleDragRotate: 90, // 拖拽角度的分割单位(deg): 拖拽角度角度可固定,default: 0,则为可以360deg拖动, 90则是以元素中心点固定为四个可拖拽方向 90deg 180deg 270deg 360deg
     throttleDrag: 100, // 拖拽时节流的单位(px),即每次拖拽最小拖动单位为100px,
  }
);
```
> throttleDrag属性与startDragRotate和throttleDragRotate属性互斥,同时存在,则只有startDragRotate和throttleDragRotate属性生效,throttleDrag优先级更低
#### 2.2 事件
drag事件有**dragStart**,**drag**,**dragEnd**三种,通过moveable实例的on方法添加监听事件,返回值event
-  drag
```
this.moveable
  .on(
    "drag",
    ({
      currentTarget, // moveable实例,即this.moveable
      moveable, // moveable的manager对象, const manager = this.moveable.getManager();
      target, // DOM 初始化moveable的target元素
      clientX, // number 鼠标所在屏幕的横坐标
      clientY, // number 鼠标实例所在屏幕的纵坐标
      datas,
      inputEvent, // Event 鼠标事件mousemove
      beforeDelta, //  [left, top] 相较于上一次,拖拽的delta值
      beforeDist, // [left, top] 相较于上一次,拖拽的数据
      beforeTranslate, // [left, top] 元素相较于起始位置的平移数据
      delta, //  [left, top] 相较于上一次,拖拽的delta值
      dist, // [left, top] 相较于上一次,拖拽的数据
      translate, // [left, top] 元素相较于起始位置的平移数据
      transform, // string 元素的transform css属性值
      left, // number 相较于上一次拖拽数据,当前元素的left属性的变化值
      top, // number 相较于上一次拖拽数据,当前元素的top属性的变化值
      bottom, // number 相较于上一次拖拽数据,当前元素的bottom属性的变化值
      right, // number 相较于上一次拖拽数据,当前元素的right属性的变化值
      width, // number 可拖拽元素(target)的宽度
      height, // number 可拖拽元素(target)的高度
      isPinch, // 元素是否被压缩,不包括resize,scale所引起的形变[**暂未证实具体作用**]
    }) => {
      target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
    }
  )
```
-  dragStart
```
this.moveable
  .on(
    "dragStart",
    ({
      setTransform, // (transform: string | string[], index?: number) => void 设置target初始的transform属性, setTransform与set同时仅可使用一个
      setTransformIndex, // (transformIndex: number) => void  [**暂未证实具体作用**]
      set, // 设置初始的translate属性
      currentTarget,
      moveable,
      target,
      clientX,
      clientY,
      datas,
      inputEvent,
    }) => {
      // setTransform("translate(100px, 100px)");
      // set([100, 100])
    }
  )
```
- dragEnd
```
this.moveable
    .on(
          "dragEnd",
          ({
            lastEvent, // 最后一个拖动的事件,如果moveable实例未被拖动,则为undefined
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
            console.log(lastEvent,
            isDrag, 
            isDouble,)
          }
        )
```
#### 2.3 方法
- request({x, y, deltaX, deltaY})
x,y // number, 是元素相对于window的绝对位置(单位:px)
deltaX, deltaY // number, 是元素相对于父级容器的相对位置(单位:px)
```
dragRequest() {
      const requester = this.moveable.request("draggable");
      requester.request({ deltaX: 10, deltaY: 10 });
      requester.requestEnd();
    },
```