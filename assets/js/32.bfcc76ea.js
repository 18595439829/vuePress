(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{387:function(e,t,n){"use strict";n.r(t);var r=n(44),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"使用openlayer使用画图-draw-功能-vue项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用openlayer使用画图-draw-功能-vue项目"}},[e._v("#")]),e._v(" 使用openlayer使用画图(Draw)功能(vue项目)")]),e._v(" "),n("p",[e._v("项目地址"),n("a",{attrs:{href:"https://github.com/18595439829/vuecli3",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/18595439829/vuecli3"),n("OutboundLink")],1),e._v("dev分支")]),e._v(" "),n("h2",{attrs:{id:"效果实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果实例"}},[e._v("#")]),e._v(" 效果实例")]),e._v(" "),n("p",[e._v("矩形选中\n"),n("img",{attrs:{src:"/img/%E7%9F%A9%E5%BD%A2%E9%80%89%E4%B8%AD.jpg",alt:"矩形选中.jpg"}}),e._v("\n不规则选中\n"),n("img",{attrs:{src:"/img/%E4%B8%8D%E8%A7%84%E5%88%99%E9%80%89%E4%B8%AD.jpg",alt:"不规则选中.jpg"}})]),e._v(" "),n("h2",{attrs:{id:"_1-vue项目中下载ol包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue项目中下载ol包"}},[e._v("#")]),e._v(" 1.vue项目中下载ol包")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install ol --save\n")])])]),n("h2",{attrs:{id:"_2-新建一个js文件-如-draw-js-引入ol必要的组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建一个js文件-如-draw-js-引入ol必要的组件"}},[e._v("#")]),e._v(" 2.新建一个js文件,如:draw.js;引入ol必要的组件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// draw.js\nimport "ol/ol.css";\nimport Map from "ol/Map";\nimport View from "ol/View";\nimport { Style, Circle, Fill } from "ol/style";\nimport { fromLonLat } from "ol/proj.js";\nimport { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";\nimport { OSM, Vector as VectorSource } from "ol/source";\nimport uuid from "uuid";\nimport Polygon from "ol/geom/Polygon";\nimport Draw, { createBox } from "ol/interaction/Draw";\n\nexport default class DrawLayer {\n  constructor() {\n    // 底图图层\n    const raster = new TileLayer({\n      source: new OSM(),\n    });\n    this.feature = null; // 画图选中区域feature\n    this.source = new VectorSource({ wrapX: true });\n    // 画图图层\n    this.drawLayer = new VectorLayer({\n      source: this.source,\n    });\n    this.map = new Map({\n      layers: [raster, this.drawLayer],\n      target: "map",\n      view: new View({\n        center: fromLonLat([120.32714457090765, 30.30569628128095]),\n        zoom: 11,\n      }),\n    });\n    this.map.on("dblclick", (e) => {\n        console.log("双击666", e);\n        if (this.draw.getActive()) {\n          this.remove();\n        }\n      });\n  }\n  add() {\n    this.clear(); // 新添加画图之前,将之前所画区域清除\n    // 所画区域为规则形状\n    this.draw = new Draw({\n        id: uuid(),\n        source: this.source,\n        type: "Circle", // Circle: 所画图形为圆形 Polygon: 所画图形多边形\n        freehand: false,  // true: 拖拽画图; false:点击画图\n        geometryFunction: createBox(), // 当type为"Circle"时,不添加该参数为画圆,添加该参数为画方\n    });\n    //  // 所画区域不规则\n    //  this.draw = new Draw({\n    //   id: uuid(),\n    //    source: this.source,\n    //    type: "Polygon", // Circle: 所画图形为圆形 Polygon: 所画图形多边形\n    //    freehand: true,  // true: 拖拽画图; false:点击画图\n    //    // geometryFunction: createBox(), // 当type为"Circle"时,不添加该参数为画圆,添加该参数为画方\n    //   });\n    this.draw.on("drawend", (e) => {\n      console.log("画完了", e);\n      this.feature = e.feature;\n      this.remove();\n    });\n    this.map.addInteraction(this.draw);\n  }\n  remove() {\n    this.map.removeInteraction(this.draw);\n  }\n  clear() {\n    if (!this.draw || !this.feature) {\n      return;\n    }\n    this.drawLayer.getSource().removeFeature(this.feature);\n    this.feature = null;\n  }\n\n  // 获取选中区域元素\n  get() {\n    if (!this.feature) {\n      return null;\n    }\n    const polygon = this.feature.getGeometry();\n    console.log("polygon", polygon);\n    const extent = polygon.getExtent();\n    return extent;\n  }\n}\n')])])]),n("h2",{attrs:{id:"_3-新建一个vue文件-如-drawmap-vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-新建一个vue文件-如-drawmap-vue"}},[e._v("#")]),e._v(" 3.新建一个vue文件,如: DrawMap.vue")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// DrawMap.vue\n<template>\n  <div>\n    <div id="map" :class="$style[\'map\']"></div>\n    <Button @click="addDraw">添加画图功能</Button>\n    <Button @click="removeDraw">移除画图功能</Button>\n    <Button @click="getDrawPx">获取选中画图范围</Button>\n    <Button @click="clearDraw">删除画图feature</Button>\n  </div>\n</template>\n<script>\nimport Draw from \'@/views/ol/js/draw.js\';\n\nexport default {\n  name: "DrawMap",\n  data() {\n    return {\n      draw: null,\n    }\n  },\n  mounted() {\n    this.initMap();\n  },\n  methods: {\n    initMap() {\n      this.draw = new Draw();\n    },\n    addDraw() {\n      this.draw.add();\n    },\n    removeDraw() {\n      this.draw.remove();\n    },\n    clearDraw() {\n      this.draw.clear();\n    },\n    getDrawPx() {\n      let px = this.draw.get();\n      console.log(\'px\', px)\n    }\n  },\n};\n<\/script>\n\n<style lang="less" module>\n.map {\n  width: 100%;\n  height: 500px;\n}\n</style>\n')])])]),n("h2",{attrs:{id:"_4-获取画点位置的经纬度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-获取画点位置的经纬度"}},[e._v("#")]),e._v(" 4.获取画点位置的经纬度")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("this.draw.on('drawend', (e) => {\n      console.log( e.feature.getGeometry().getExtent());\n})\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);