# 使用jenkins自动化构建部署项目(windows64位)
## 安装
### 安装java  官网下载链接([https://www.java.com/zh_CN/download/windows-64bit.jsp](https://www.java.com/zh_CN/download/windows-64bit.jsp))
### 安装jenkins
- 下载jenkins  官网下载链接 [https://jenkins.io/zh/doc/pipeline/tour/getting-started/](https://jenkins.io/zh/doc/pipeline/tour/getting-started/)
- cmd  打开终端并进入jenkins.war下载目录
- 运行 java -jar jenkins.war --httpPort=8080  (*默认端口8080,如被占用,可手动修改*)
- 浏览器输入http://localhost:8080  (自定义端口)
- 等待jenkins初始化完成,按照步骤安装: 
##  配置
### 1.安装配置
- 安装配置: 依照提示拷贝密码文件,解锁jenkins
![jenkins解锁.jpg](https://upload-images.jianshu.io/upload_images/13491706-afa488dd68921f2b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 安装插件: 建议使用推荐安装
![jenkins安装插件.jpg](https://upload-images.jianshu.io/upload_images/13491706-564a841843128345.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 创建管理员账户(即jenkins登陆账号)
### 2.创建构建任务
1.创建任务
-  点击左上角 [**新建item**]
![jenkins新增item.jpg](https://upload-images.jianshu.io/upload_images/13491706-602631fb4824d903.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 输入任务名称  选择第一个freestyle  project
![jenkins新增任务.jpg](https://upload-images.jianshu.io/upload_images/13491706-3914e5dfbddbad36.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2.配置描述
- 描述可写可不写
- 选择github项目, 填入github拉取代码地址
![jenkins添加git项目地址.jpg](https://upload-images.jianshu.io/upload_images/13491706-4b127ca60825ddac.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 配置源码管理
- 选择git
- Repository URL 填入github项目拉取代码地址![jenkins源码管理配置.jpg](https://upload-images.jianshu.io/upload_images/13491706-e30749a406f6ddbe.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 点击添加按钮,选择jenkins, 类型选择username width password
![kenkins添加github全局凭证.jpg](https://upload-images.jianshu.io/upload_images/13491706-6ea0432c7502457d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 点击添加完成 github全局凭证添加操作, 然后选择,你所添加的github账号,出错的话,多试几次
- 选择构建分支
### 3.配置构建脚本
- 点击增加构建步骤按钮进行配置
![jenkins构建脚本.jpg](https://upload-images.jianshu.io/upload_images/13491706-60f78cd6c44f164c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 4.点击应用, 点击保存即可
如果不会使用nginx部署项目,参见另一篇文章
**使用nginx将自己的vue项目部署到服务器上**

**简书地址** [https://www.jianshu.com/p/daaaaef7fe8f](https://www.jianshu.com/p/daaaaef7fe8f)

**站内地址** [使用nginx将自己的vue项目部署到服务器上](/vue/nginx/)