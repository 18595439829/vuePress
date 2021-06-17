# css中clip-path剪切的用法

## 1.clip-path: polygon() 多边形切割
```
//多边形切割 polygon(x轴点位 y轴点位, x轴点位 y轴点位 ...)
clip-path: polygon(0 0, 25% 0, 100% 75%, 100% 100%, 0 0); 
```
## 2.clip-path: circle() 圆形切割
```
 //圆形切割 circle(圆角程度 at 圆角圆心x 圆角圆心y )
clip-path: circle(40% at 50% 50%);
```
## 3.clip-path: ellipse() 椭圆切割
```
//椭圆切割 ellipse(x轴圆角程度 y轴圆角程度 at 圆角圆心x 圆角圆心y )
clip-path: ellipse(30% 50% at 50% 50%); 
```
## 4.clip-path: inset() 圆角切割
```
// 圆角切割 inset(上内边距 右内边距 下内边距 左内边距 round 左上圆角程度 右上圆角程度 右下圆角程度 左下圆角程度)
clip-path: inset(10% 20% 20% 10% round 20% 30% 40% 50%); 
```
