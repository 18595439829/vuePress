# openlayer常用方法
[https://openlayers.org/en/latest/apidoc/module-ol_proj.html](https://openlayers.org/en/latest/apidoc/module-ol_proj.html)

## 1.openlayer将经纬度坐标转换为其他坐标(默认为Web Mercator，即“ EPSG：3857”): fromLonLat()
```
import View from "ol/View";
import { fromLonLat } from "ol/proj.js";

const view = new View({
        center: fromLonLat([120, 30]),
        zoom: 10,
      }),
```
## 2.将openlayer投影坐标(默认值为Web Mercator，即“ EPSG：3857”)转化为经纬度坐标: toLonLat()
```
import View from "ol/View";
import { toLonLat} from "ol/proj.js";

const view = new View({
        center: toLonLat([13394526.254552547, 3542796.544589571]), // 转化后的经纬度为[120.32507658004761, 30.30485450053733]
        zoom: 10,
      }),
```
## 3. 地图定位到某一个坐标点
```
import Map from "ol/Map";

const map = new Map();
const view = map.getView();
view.setZoom(18);
view.setCenter(fromLonLat([120, 30]));
```
## 4.获取地图上经纬度在屏幕上的像素点
```
const coord = [120,30];
const pixel = map.getPixelFromCoordinate(coord)
```
## 5.判断屏幕上像素点位置是否有feature
```
const pixel = [100,100]; // 单位是像素
const bol = map.hasFeatureAtPixel(pixel);
```
## 6.判断某一经纬度在地图上是否有feature
```
// 其实就是4和5的结合
const coord = [120,30];
const pixel = map.getPixelFromCoordinate(coord);
const bol = map.hasFeatureAtPixel(pixel);
```