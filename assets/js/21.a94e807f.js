(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{377:function(e,n,t){"use strict";t.r(n);var a=t(44),s=Object(a.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"将文件转化为base64-将base64转化为文件并下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将文件转化为base64-将base64转化为文件并下载"}},[this._v("#")]),this._v(" 将文件转化为base64,将base64转化为文件并下载")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("// 将文件转化为base64\n    fileToBase64(file) {\n      const reader = new FileReader();\n      reader.readAsDataURL(file);\n      reader.onload = (e) => {\n        console.log(e.target.result);\n        return e.target.result\n      };\n    },\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("// 将base64转化为文件\nbase64ToFile(base) {\n      const arr = base.split(',');\n      const mime = arr[0].match(/:(.*?);/)[1];\n      const bstr = atob(arr[1]);\n      let n = bstr.length;\n      const u8arr = new Uint8Array(n);\n      while (n--) {\n        u8arr[n] = bstr.charCodeAt(n);\n      }\n      if (window.navigator.msSaveBlob) {\n        // for ie 10 and later\n        try {\n          const blobObject = new Blob([u8arr], { type: mime });\n          window.navigator.msSaveBlob(blobObject, 'aaa.xls');\n        } catch (e) {\n          console.log(e);\n        }\n      } else {\n        const url = window.URL.createObjectURL(new Blob([u8arr], { type: mime }));\n        const link = document.createElement('a');\n        link.href = url;\n        link.setAttribute('download', 'aaa.xls');\n        document.body.appendChild(link);\n        link.click();\n        document.body.removeChild(link); // 下载完成移除元素\n        window.URL.revokeObjectURL(url); // 释放掉blob对象\n      }\n    },\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);