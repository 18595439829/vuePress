(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{412:function(n,t,e){"use strict";e.r(t);var s=e(44),a=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"vue添加自定义过滤器-去三位小数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue添加自定义过滤器-去三位小数"}},[this._v("#")]),this._v(" vue添加自定义过滤器:去三位小数")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("filters: {\n    fixedThree(num) {\n      let value = '';\n      if (String(num).indexOf('.') !== -1) {\n        const x = String(num).indexOf('.') + 1; // 小数点的位置\n        const y = String(num).length - x; // 小数的位数\n        if (y <= 3) {\n          value = num;\n        } else {\n          value = Number(num).toFixed(3);\n        }\n      } else {\n        value = num;\n      }\n      return value;\n    },\n  },\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);