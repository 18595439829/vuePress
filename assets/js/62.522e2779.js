(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{411:function(t,e,n){"use strict";n.r(e);var a=n(44),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vue文件下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue文件下载"}},[t._v("#")]),t._v(" vue文件下载:")]),t._v(" "),n("h2",{attrs:{id:"返回文件流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#返回文件流"}},[t._v("#")]),t._v(" 返回文件流:")]),t._v(" "),n("ol",[n("li",[t._v("修改axios请求的responseType为blob，以post请求为例：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("axios({\n    method: 'post',\n    url: 'api/user/',\n    data: {\n        firstName: 'Fred',\n        lastName: 'Flintstone'\n    },\n    responseType: 'blob'\n}).then(response => {\n    this.download(response)\n}).catch((error) => {\n\n})\n")])])]),n("ol",{attrs:{start:"2"}},[n("li")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("methods: {\n    // 下载文件\n    download (data) {\n        let url = window.URL.createObjectURL(new Blob([data]))\n        let link = document.createElement('a')\n        // link.style.display = 'none'\n        link.href = url\n        link.setAttribute('download', 'ivr.xls')\n        document.body.appendChild(link)\n        link.click()\n        document.body.removeChild(link) // 下载完成移除元素\n        window.URL.revokeObjectURL(url) // 释放掉blob对象\n    }\n}\n")])])]),n("h2",{attrs:{id:"使用a链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用a链接"}},[t._v("#")]),t._v(" 使用a链接")]),t._v(" "),n("p",[t._v("直接打开链接即可")])])}),[],!1,null,null,null);e.default=s.exports}}]);