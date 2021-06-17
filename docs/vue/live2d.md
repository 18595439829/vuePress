# 在vue项目中添加live2d看板娘(花里胡哨)
*参考"最代码人间蒸发"* [http://www.zuidaima.com/blog/4552783354924032.htm](http://www.zuidaima.com/blog/4552783354924032.htm)
## 1.项目结构目录
![项目目录.png](/img/项目目录.jpg)
## 2.live2dw看板娘文件资源地址
链接: https://pan.baidu.com/s/1gB9o9_HkDpAX2yJlm0IaMA 提取码: k8fr 复制这段内容后打开百度网盘手机App，操作更方便哦
## 3.将文件夹下载解压放在public文件目录下;
*也可以不放在public文件夹下,放在public文件夹是因为,live2d文件夹太大,并且不需要更改,不需要webpack打包*
## 4.在项目入口文件public文件夹下index.html中引入L2Dwidget.min.js
```
<script type="text/javascript" src="/live2dw/lib/L2Dwidget.min.js"></script>
```
## 5.在App.vue中添加代码
```
mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
          pluginRootPath: 'live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'live2d-widget-model-z16/assets/',
          tagMode: false,
          debug: false,
          model: { jsonPath: '../live2dw/live2d-widget-model-z16/assets/z16.model.json' },
          display: { position: 'right', width: 100, height: 200 },
          mobile: { show: true },
          log: false
          })
    }, 1000)
  },
```
## 6.大功告成.