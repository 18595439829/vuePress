# vue3中使用less报错
### 报错原因:
执行npm install --save-dev less-loader less命令时,下载的为最新版本的less-loader,在package.jeson中可以看到为'^8.0.0',会报错,
### 解决办法:
卸载less-loader,重新安装一个7.x版本的
卸载
```
npm uninstall --save less-loader
```
安装
```
npm install -D less-loader@7.x
```
### vue中使用less
1.下载less和less-loader
```
npm install less less-loader@7 --save
```
2.使用less语法
```
<style lang="less">
@width: 100px;
div {
  width: @width;
}
</style>
```
