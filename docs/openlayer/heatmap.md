# 使用openlayer添加热力图(vue项目)
项目地址[https://github.com/18595439829/vuecli3](https://github.com/18595439829/vuecli3)dev分支
## 效果示例: 
![热力图.jpg](/img/热力图.jpg)

## 1.vue项目中下载ol包
```
npm install ol --save
```
## 2.新建一个js文件,如:heatMap.js;引入ol必要的组件

```
// heatMap.js
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM.js";
import Point from "ol/geom/Point.js";
import VectorSource from "ol/source/Vector.js";
import Feature from "ol/Feature.js";
import { fromLonLat } from "ol/proj.js";
import { Heatmap as HeatmapLayer, Tile as TileLayer } from "ol/layer";

export default class Heat {
  constructor() {
    // 地图底图源使用OSM,当然也可以用其他风格的源
    const raster = new TileLayer({
      source: new OSM(),
    });
    this.map = new Map({
      layers: [raster], // 地图图层
      target: "map", // 地图挂载的页面元素id,即下文HeatMap.vue中id="map"的div元素
      view: new View({
        center: fromLonLat([120.32714457090765, 30.30569628128095]), // 地图可视区域中心点,fromLonLat函数用于将经纬度转化为ol可正常识别的坐标
        zoom: 11, // 地图缩放级别
      }),
    });
  }
  add(heatData) {
    let source = new VectorSource(); // 新生成图层源,用于存放热力图图层
    heatData.features.forEach((item) => { // 遍历热力图数据,生成热力图feature
      const feature = new Feature({
        geometry: new Point(fromLonLat(item.coordinates)),
        weight: item.weight,
      });
      source.addFeature(feature);
    });
    this.heatLayer = new HeatmapLayer({ //新生成热力图图层,存放热力图feature
      // 矢量数据源
      source,
      blur: 10, // 模糊尺寸
      radius: 10, // 热点半径
      weight(feature) {
        const weight = feature.get("weight"); //获取feature的weight参数值,此处weight不可变更为其他参数,否则失效(暂时不明原因);
        const magnitude = weight / 1;
        return magnitude;
      },
    });
    this.map.addLayer(this.heatLayer); // 将热力图添加在地图上
  }
  clear() {
    this.map.removeLayer(this.heatLayer); // 将热力图从地图上移除
  }
}

```
## 3.新建一个vue文件,如: HeatMap.vue
```
// HeatMap.vue
<template>
  <div>
    <div id="map" :class="$style['map']"></div>
    <Button @click="add">添加热力图</Button>
    <Button @click="clear">清除热力图</Button>
  </div>
</template>
<script>
import HeatMap from "@/views/ol/js/heatMap.js";

export default {
  name: "HeatMap",
  data() {
    return {
      heatMap: null,
      // 热力图假数据
      heatData: {
        type: "FeatureCollection",
        features: [
          {
            type: "Point",
            coordinates: [120.10878812064284, 30.214101248758016],
            weight: 100,
          },
          {
            type: "Point",
            coordinates: [120.06299060438137, 30.223642397979155],
            weight: 19,
          },
          {
            type: "Point",
            coordinates: [120.01623897319779, 30.354356142308763],
            weight: 419,
          },
          {
            type: "Point",
            coordinates: [20.32714457090765, 30.30569628128095],
            weight: 319,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 719,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 519,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 319,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 139,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 129,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 190,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 189,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 1,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 119,
          },
          {
            type: "Point",
            coordinates: [120.32714457090765, 30.30569628128095],
            weight: 200,
          },
          {
            type: "Point",
            coordinates: [120.11642104001974, 30.204560099536877],
            weight: 300,
          },
        ],
      },
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
// 初始化地图,生成地图服务
    initMap() {
      this.heatMap = new HeatMap();
    },
// 添加热力图
    add() {
      this.heatMap.add(this.heatData);
    },
// 清除热力图
    clear() {
      this.heatMap.clear();
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