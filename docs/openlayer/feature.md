# feature的常用方法
## 1.get(key)
```
import Feature from "ol/Feature.js";
import { Point } from "ol/geom";
let feature = new Feature({
        geometry: new Point([0,0]),
        type: "point",
      });
let type = feature.get('type'); // point  获取feature中的type参数
```
## 1.setStyle(style)
```
import Feature from "ol/Feature.js";
import {Fill, Stroke, Circle, Style} from 'ol/style';

let feature = new Feature({
        geometry: new Point([0,0]),
        type: "point",
      });
// 填充
let fill = new Fill({
   color: 'rgba(255,255,255,0.4)'
 });
// 描边
let stroke = new Stroke({
   color: '#3399CC',
   width: 1.25
 });
let styles = [
   new Style({
     image: new Circle({
       fill: fill,
       stroke: stroke,
       radius: 5
     }),
     fill: fill,
     stroke: stroke
   })
 ];
feature.setStyle(styles);
```
## 3.地图定位到某一个feature 的位置
```
import Map from "ol/Map";
import Feature from "ol/Feature.js";
import { Point } from "ol/geom";

const map = new Map();
let feature = new Feature({
        geometry: new Point([0,0]),
        type: "point",
      });
const view = map.getView();
    view.fit(feature.getGeometry(), {
      padding: [0, 0, 0, 0],
      maxZoom: 15,
    });
```
