(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{381:function(n,t,e){"use strict";e.r(t);var i=e(44),l=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"使用nginx将自己的vue项目部署到服务器上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用nginx将自己的vue项目部署到服务器上"}},[n._v("#")]),n._v(" 使用nginx将自己的vue项目部署到服务器上")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("第一步:下载安装nginx  官网: "),e("em",[e("a",{attrs:{href:"http://nginx.org/en/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://nginx.org/en/"),e("OutboundLink")],1)])])]),n._v(" "),e("li",[e("p",[n._v("第二步:将自己的vue项目打包为dist文件夹;")])]),n._v(" "),e("li",[e("p",[n._v("第三步:解压下载的nginx文件夹,使用cmd进入到nginx文件夹下,使用指令start  nginx启动nginx服务器;")])]),n._v(" "),e("li",[e("p",[n._v("第四步:浏览器输入localhost:80,查看nginx是否启动;")])]),n._v(" "),e("li",[e("p",[n._v("第五步:进入nginx/html文件夹下,删除50.html和index.html文件,将vue项目打包玩的dist文件夹下的所有文件复制到nginx/html文件夹下;")])]),n._v(" "),e("li",[e("p",[n._v("第六步:刷新浏览器,项目启动成功;")])])]),n._v(" "),e("h2",{attrs:{id:"进阶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[n._v("#")]),n._v(" 进阶")]),n._v(" "),e("p",[n._v("1.在同一域名下监听不同端口,启动不同项目;")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("第一步:将不同的项目打包dist,并重命名为app1,   app2 ...")])]),n._v(" "),e("li",[e("p",[n._v("第二步:将项目文件夹移到nginx/html文件夹下;")])]),n._v(" "),e("li",[e("p",[n._v("第三步:打开nginx/conf/nginx.conf文件, 找到")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("server {\n\n      listen      8001;   \n\n    #   监听的端口号;\n\n      server_name  localhost;\n\n     #  服务器地址:可以使ip,对应hosts文件\n\n      location / {\n\n     #   localhost:8001 浏览器访问根路径,不可修改\n\n          root  html/app1;\n\n     #   指定项目所在路径html/项目名字\n\n          index  index.html index.htm;\n\n     #    指定项目入口文件,一般默认index.html\n\n     }\n\n    location = /app1/index.html {\n\n    #     浏览器访问地址,指向项目文件夹下的index.html\n\n            root  html/emms;\n\n            index  index.html index.htm;\n\n        }\n\n  }\nserver {\n\n      listen      8002;   \n\n    #   监听的端口号;\n\n      server_name  localhost;\n\n     #  服务器地址:可以使ip,对应hosts文件\n\n      location / {\n\n     #   localhost:8002 浏览器访问根路径,不可修改\n\n          root  html/app2;\n\n     #   指定项目所在路径html/项目名字\n\n          index  index.html index.htm;\n\n     #    指定项目入口文件,一般默认index.html\n\n     }\n\nlocation = /app2/index.html {\n\n    #     浏览器访问地址,指向项目文件夹下的index.html\n\n            root  html/app2;\n\n            index  index.html index.htm;\n\n        }\n\n    }\n")])])]),e("p",[n._v("需要几个项目复制几个,修改为对应的项目名称")]),n._v(" "),e("ul",[e("li",[n._v("第四步: 使用指令nginx -s reload重启nginx,如果不行,使用nginx -s stop  停止nginx  ,然后再启动")])])])}),[],!1,null,null,null);t.default=l.exports}}]);