# Openlayer初始化地图
## 1.初始化地图
```
import 'ol/ol.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from "ol/source/OSM.js";

export default class MAP {
  constructor(dom) {
    this.map = null;
    this.dom = dom;
    this.map = this.init();
  }

  init() {
    return new Map({
      target: this.dom,
      controls: [],
      layers: [
        new TileLayer({
          id: 'BASEMAP_IMAGE_LAYER',
          preload: Infinity,
          source: new OSM(),
      ],
      view: new View({
        center: [0,0],
        zoom: 10,
      }),
    });
  }
}
```
## 2.添加图层,overlay,feature,
```
import Vue from 'vue';
import Overlay from 'ol/Overlay';
import Feature from 'ol/Feature.js';
import LineString from 'ol/geom/LineString.js';
import PointDom from '@/views/patrol-manage/map/Point.vue';
import { Stroke, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import StartImg from 'xxx/start.png';
import EndImg from 'xxx/end.png';

export default class Polyline {
  constructor(map) {
    this.map = map;
    this.view = this.map.getView();
    // 添加新的图层用来存放feature
    this.source = new VectorSource();
    this.layer = new VectorLayer({
      id: 'patrol',
      source: this.source,
    });
    this.map.addLayer(this.layer);
  }

  /**
   * 添加overlay
   * @param {Array} pos [0,0]点位坐标
   * @param {String} type 点位类型,start:起始坐标图标样式,end:结束坐标图标样式
   */
  addOverlay(pos, icon) {
    const ComponentCtor = Vue.extend(PointDom);
    const instance = new ComponentCtor({
      propsData: { icon },
    });
    instance.$mount();
    const overlay = new Overlay({
      type: 'patrol',
      position: [pos.longitude, pos.latitude],
      positioning: 'center-center',
      element: instance.$el,
      // stopEvent: false,
    });
    this.map.addOverlay(overlay);
  }
 /**
   * 地图添加线段feature
   * @param {Array} data eg: [{longitude: 120, latitude: 30}]
   */
  addPolyline(data) {
    this.addOverlay(data[0], StartImg);
    this.addOverlay(data[data.length - 1], EndImg);
    this.view.setZoom(15);
    this.view.setCenter([120, 30]);
    const coord = data.map((item) => [item.longitude, item.latitude]);
    const feature = new Feature({
      geometry: new LineString(coord),
      type: 'patrol',
      style: new Style({
        stroke: new Stroke({
          color: 'blue',
          width: 1,
          lineDash: [5],
        }),
      }),
    });
    this.source.addFeature(feature);
  }
}
```
Point.vue
```
<template>
  <div :class="$style['container']">
    <img :class="$style['img']" :src="icon" alt="">
  </div>
</template>

<script>
export default {
  name: 'Point',
  props: {
    icon: {
      type: [String, Object],
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="less" module>
 .container {
     .img {
         width: 20px;
         height: 30px;
     }
 }
</style>
```