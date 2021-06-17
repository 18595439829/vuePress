(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{401:function(e,n,t){"use strict";t.r(n);var s=t(44),a=Object(s.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"vue使用axios兼容ie10-的文件下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue使用axios兼容ie10-的文件下载"}},[this._v("#")]),this._v(" vue使用axios兼容IE10+的文件下载")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("const uploadFile = (Url, name) => {\n  axios.get(Url, { responseType: 'blob' }).then((res) => {\n    //  如果支持微软的文件下载方式(ie10+浏览器)\n    if (window.navigator.msSaveBlob) {\n      try {\n        const blobObject = new Blob([res.data]);\n        window.navigator.msSaveBlob(blobObject, `${name}.xls`);\n      } catch (e) {\n        console.log(e);\n      }\n    } else {\n      //  其他浏览器\n      const url = window.URL.createObjectURL(new Blob([res.data]));\n      const link = document.createElement('a');\n      link.href = url;\n      link.setAttribute('download', `${name}.xls`);\n      document.body.appendChild(link);\n      link.click();\n      document.body.removeChild(link); // 下载完成移除元素\n      window.URL.revokeObjectURL(url); // 释放掉blob对象\n    }\n  });\n}\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);