# nginx部署vue项目后,配置反向代理,但项目访问接口失败
>使用proxy_pass配置反向代理,在匹配到location配置的URL路径后，转发请求到proxy_pass配置额URL，是否会附加location配置路径与proxy_pass配置的路径后是否有"/"有关，有"/"则不附加
```
location   /test/  {
        proxy_pass    http://127.0.0.1:8080/;
}
```
请求/test/1.jpg，将会被nginx转发请求到http://127.0.0.1:8080/1.jpg（未附加/test/路径）。
### 第一种 
```
We're sorry but xxx doesn't work properly without JavaScript enabled. 
```
出现这种错误一般是反向代理配置错误,检查项目代码配置文件和接口地址反向代理是否正确,检查nginx反向代理是否配置正确
```
location /api {
            // 如果接口访问一直为404,但服务并没有问题,考虑重写api/路径之前的所有字符串为代理地址
            rewrite  ^.+api/?(.*)$ /$1 break;
            proxy_pass http://localhost:9901/;
 }
```
### 第二种 接口访问404
##### 第一种写法
```
// 第一种写法
location ^~/ball/ {
           try_files $uri $uri/ /ball/index.html;
}

location /api {
            // 如果接口访问一直为404,但服务并没有问题,考虑重写api/路径之前的所有字符串为代理地址
            rewrite  ^.+api/?(.*)$ /$1 break;
            proxy_pass http://localhost:9901/;
 }
```
##### 第二种写法
```
// 第二种写法
location /app1 {
    #     浏览器访问地址,指向项目文件夹下的index.html
    root  html/app1;
    index  index.html index.htm;
}
###  配置反向代理,解决跨域问题 
location /api {
    proxy_pass http://172.xx.xx.xx:8000;
}
```