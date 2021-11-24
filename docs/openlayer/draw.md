# 使用openlayer使用画图(Draw)功能(vue项目)
项目地址[https://github.com/18595439829/vuecli3](https://github.com/18595439829/vuecli3)dev分支
## 效果实例
矩形选中
![矩形选中.jpg](/img/矩形选中.jpg)
不规则选中
![不规则选中.jpg](/img/不规则选中.jpg)

## 1.vue项目中下载ol包
```
npm install ol --save
```
## 2.新建一个js文件,如:draw.js;引入ol必要的组件

```
// draw.js
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Style, Circle, Fill } from "ol/style";
import { fromLonLat } from "ol/proj.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import uuid from "uuid";
import Polygon from "ol/geom/Polygon";
import Draw, { createBox } from "ol/interaction/Draw";

export default class DrawLayer {
  constructor() {
    // 底图图层
    const raster = new TileLayer({
      source: new OSM(),
    });
    this.feature = null; // 画图选中区域feature
    this.source = new VectorSource({ wrapX: true });
    // 画图图层
    this.drawLayer = new VectorLayer({
      source: this.source,
    });
    this.map = new Map({
      layers: [raster, this.drawLayer],
      target: "map",
      view: new View({
        center: fromLonLat([120.32714457090765, 30.30569628128095]),
        zoom: 11,
      }),
    });
    this.map.on("dblclick", (e) => {
        console.log("双击666", e);
        if (this.draw.getActive()) {
          this.remove();
        }
      });
  }
  add() {
    this.clear(); // 新添加画图之前,将之前所画区域清除
    // 所画区域为规则形状
    this.draw = new Draw({
        id: uuid(),
        source: this.source,
        type: "Circle", // Circle: 所画图形为圆形 Polygon: 所画图形多边形
        freehand: false,  // true: 拖拽画图; false:点击画图
        geometryFunction: createBox(), // 当type为"Circle"时,不添加该参数为画圆,添加该参数为画方
    });
    //  // 所画区域不规则
    //  this.draw = new Draw({
    //   id: uuid(),
    //    source: this.source,
    //    type: "Polygon", // Circle: 所画图形为圆形 Polygon: 所画图形多边形
    //    freehand: true,  // true: 拖拽画图; false:点击画图
    //    // geometryFunction: createBox(), // 当type为"Circle"时,不添加该参数为画圆,添加该参数为画方
    //   });
    this.draw.on("drawend", (e) => {
      console.log("画完了", e);
      this.feature = e.feature;
      this.remove();
    });
    this.map.addInteraction(this.draw);
  }
  remove() {
    this.map.removeInteraction(this.draw);
  }
  clear() {
    if (!this.draw || !this.feature) {
      return;
    }
    this.drawLayer.getSource().removeFeature(this.feature);
    this.feature = null;
  }

  // 获取选中区域元素
  get() {
    if (!this.feature) {
      return null;
    }
    const polygon = this.feature.getGeometry();
    console.log("polygon", polygon);
    const extent = polygon.getExtent();
    return extent;
  }
}
```
## 3.新建一个vue文件,如: DrawMap.vue
```
// DrawMap.vue
<template>
  <div>
    <div id="map" :class="$style['map']"></div>
    <Button @click="addDraw">添加画图功能</Button>
    <Button @click="removeDraw">移除画图功能</Button>
    <Button @click="getDrawPx">获取选中画图范围</Button>
    <Button @click="clearDraw">删除画图feature</Button>
  </div>
</template>
<script>
import Draw from '@/views/ol/js/draw.js';

export default {
  name: "DrawMap",
  data() {
    return {
      draw: null,
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.draw = new Draw();
    },
    addDraw() {
      this.draw.add();
    },
    removeDraw() {
      this.draw.remove();
    },
    clearDraw() {
      this.draw.clear();
    },
    getDrawPx() {
      let px = this.draw.get();
      console.log('px', px)
    }
  },
};
</script>

<style lang="less" module>
.map {
  width: 100%;
  height: 500px;
}
</style>
```
## 4.获取画点位置的经纬度
```
this.draw.on('drawend', (e) => {
      console.log( e.feature.getGeometry().getExtent());
})
```
