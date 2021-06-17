# vue3中关于标签自身属性和自定义属性与vue2的区别,导致css出现问题
## vue3中
```
<div :selected="true">selected</div>
<div :selected="false">UnSlected</div>
```
渲染完成后,控制台检查
![vue3.jpg](/img/vue3.jpg)
## vue2中
```
<div :selected="true">selected</div>
<div :selected="false">UnSlected</div>
```
渲染完成后,控制台检查
![vue2.jpg](/img/vue2.jpg)
由于标签解析完成后,标签自身属性在vue3中和vue2保持一致,但是自定义属性则发生了一些变化,如果在css中使用选择器需要注意:
>vue3中带上属性值,否则样式不生效,vue2可以不写属性值,默认是true
```
//  vue3
div[selected=true] {
      color: red;
    }
```
```
// vue2
div[selected] {
      color: red;
    }
```