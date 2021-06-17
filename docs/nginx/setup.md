# CentOS7安装Nginx
参考自 [CentOS7安装Nginx](https://www.cnblogs.com/boonya/p/7907999.html)
[Nginx安装完成，没有sbin目录如何启动](https://blog.csdn.net/qq_36813879/article/details/108725008)
[Linux ./configure --prefix命令](https://blog.csdn.net/xiyangfan/article/details/5321790)
## 1. gcc 安装
安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：
```
yum install gcc-c++
```
## 2.PCRE pcre-devel 安装
PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：
```
yum install -y pcre pcre-devel
```
## 3.zlib 安装
zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。
```
yum install -y zlib zlib-devel
```
## 4.OpenSSL 安装
OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。
```
yum install -y openssl openssl-devel
```
## 5.下载nginx安装包
nginx管网下载地址: [https://nginx.org/en/download.html](https://nginx.org/en/download.html)
```
wget -c https://nginx.org/download/nginx-1.18.0.tar.gz
```
## 6.解压安装包
目前最新版是1.18.0
```
tar -zxvf nginx-1.18.0.tar.gz
cd nginx-1.18.0
```
## 7.把nginx-1.18.0安装到nginx目录
```
./configure --prefix=/usr/local/nginx
```
*–prefix=path 定义一个目录，存放服务器上的文件 ，也就是nginx的安装目录，默认使用 /usr/local/nginx
*
## 8.执行编译命令
```
make && make install
```
之后你会看到local目录下有一个跟你安装的nginx1.18.0同级的nginx目录，里面就有sbin目录了
## 9.启动nginx
```
cd /usr/local/nginx/sbin
```
然后启动nginx
```
./nginx 
```
## 10.nginx常用命令
```
// 启动nginx
./nginx
// 修改配置文件后重载
./nginx -s reload
// 退出nginx
./nginx -s quit 或者 ./nginx -s stop
```
## 11.linux查询端口占用情况
https://www.runoob.com/w3cnote/linux-check-port-usage.html
```
lsof -i  // 查询所有端口占用情况
lsof -i:端口号  eg: lsof -i:8080  // 查询某一端口(8080)占用情况
```