(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{400:function(e,t,a){"use strict";a.r(t);var r=a(44),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"openlayer常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openlayer常用方法"}},[e._v("#")]),e._v(" openlayer常用方法")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://openlayers.org/en/latest/apidoc/module-ol_proj.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://openlayers.org/en/latest/apidoc/module-ol_proj.html"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"_1-openlayer将经纬度坐标转换为其他坐标-默认为web-mercator-即-epsg-3857-fromlonlat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-openlayer将经纬度坐标转换为其他坐标-默认为web-mercator-即-epsg-3857-fromlonlat"}},[e._v("#")]),e._v(" 1.openlayer将经纬度坐标转换为其他坐标(默认为Web Mercator，即“ EPSG：3857”): fromLonLat()")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import View from "ol/View";\nimport { fromLonLat } from "ol/proj.js";\n\nconst view = new View({\n        center: fromLonLat([120, 30]),\n        zoom: 10,\n      }),\n')])])]),a("h2",{attrs:{id:"_2-将openlayer投影坐标-默认值为web-mercator-即-epsg-3857-转化为经纬度坐标-tolonlat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-将openlayer投影坐标-默认值为web-mercator-即-epsg-3857-转化为经纬度坐标-tolonlat"}},[e._v("#")]),e._v(" 2.将openlayer投影坐标(默认值为Web Mercator，即“ EPSG：3857”)转化为经纬度坐标: toLonLat()")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import View from "ol/View";\nimport { toLonLat} from "ol/proj.js";\n\nconst view = new View({\n        center: toLonLat([13394526.254552547, 3542796.544589571]), // 转化后的经纬度为[120.32507658004761, 30.30485450053733]\n        zoom: 10,\n      }),\n')])])]),a("h2",{attrs:{id:"_3-地图定位到某一个坐标点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-地图定位到某一个坐标点"}},[e._v("#")]),e._v(" 3. 地图定位到某一个坐标点")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import Map from "ol/Map";\n\nconst map = new Map();\nconst view = map.getView();\nview.setZoom(18);\nview.setCenter(fromLonLat([120, 30]));\n')])])]),a("h2",{attrs:{id:"_4-获取地图上经纬度在屏幕上的像素点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-获取地图上经纬度在屏幕上的像素点"}},[e._v("#")]),e._v(" 4.获取地图上经纬度在屏幕上的像素点")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const coord = [120,30];\nconst pixel = map.getPixelFromCoordinate(coord)\n")])])]),a("h2",{attrs:{id:"_5-判断屏幕上像素点位置是否有feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-判断屏幕上像素点位置是否有feature"}},[e._v("#")]),e._v(" 5.判断屏幕上像素点位置是否有feature")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const pixel = [100,100]; // 单位是像素\nconst bol = map.hasFeatureAtPixel(pixel);\n")])])]),a("h2",{attrs:{id:"_6-判断某一经纬度在地图上是否有feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-判断某一经纬度在地图上是否有feature"}},[e._v("#")]),e._v(" 6.判断某一经纬度在地图上是否有feature")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 其实就是4和5的结合\nconst coord = [120,30];\nconst pixel = map.getPixelFromCoordinate(coord);\nconst bol = map.hasFeatureAtPixel(pixel);\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);