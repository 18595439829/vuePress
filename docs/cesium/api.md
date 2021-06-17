# Cesium常用地图操作(二)
## 1. 地图添加广告牌
官方示例 [https://cesium.com/docs/analytics-sdk-reference/EntityCollection.html?classFilter=entity](https://cesium.com/docs/analytics-sdk-reference/EntityCollection.html?classFilter=entity)
官方文档 [https://cesium.com/docs/analytics-sdk-reference/Billboard.html?classFilter=billboard](https://cesium.com/docs/analytics-sdk-reference/Billboard.html?classFilter=billboard)
中文网文档 [http://cesium.xin/cesium/cn/Documentation1.62/EntityCollection.html?classFilter=entity](http://cesium.xin/cesium/cn/Documentation1.62/EntityCollection.html?classFilter=entity)
![广告牌示例.jpg](/img/广告牌示例.jpg)
```
viewer.entities.add({
          id: 'billboard', // feature的id
          name: '广告牌', // feature 的名字
          position: Cesium.Cartesian3.fromDegrees(120, 30, 100), // 广告牌在地图上的位置,@params(经度{Number},维度{Number},高度{Number})
          billboard: {
            image: 'img.url', // 图片的url,可以使canvas
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // 广告牌的对齐方式
          },
        });
viewer.entities.removeById('billboard'); 从地图上中移除对应id的实体 @params{id}
```
## 2.经纬度转化为3D笛卡尔坐标
官网 [https://cesium.com/docs/analytics-sdk-reference/Cartesian3.html?classFilter=Cartesian3](https://cesium.com/docs/analytics-sdk-reference/Cartesian3.html?classFilter=Cartesian3)
中文网 [http://cesium.xin/cesium/cn/Documentation1.62/Cartesian3.html?classFilter=Cartesian3](http://cesium.xin/cesium/cn/Documentation1.62/Cartesian3.html?classFilter=Cartesian3)
```
Cesium.Cartesian3.fromDegrees(longitude, latitude, height)
// @params(经度{Number},维度{Number},高度{Number})
```
## 3.地图添加鼠标左键点击事件
官网 [https://cesium.com/docs/analytics-sdk-reference/ScreenSpaceEventHandler.html?classFilter=ScreenSpaceEventHandler](https://cesium.com/docs/analytics-sdk-reference/ScreenSpaceEventHandler.html?classFilter=ScreenSpaceEventHandler)
中文网 [http://cesium.xin/cesium/cn/Documentation1.62/ScreenSpaceEventHandler.html?classFilter=ScreenSpaceEventHandler](http://cesium.xin/cesium/cn/Documentation1.62/ScreenSpaceEventHandler.html?classFilter=ScreenSpaceEventHandler)
```
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction((e) => {
  console.log(e); // 鼠标左键点击位置在浏览器视图上的像素位置
  const pick = viewer.scene.pick(e.position); // 获取地图左键点击位置的信息
  // pick.id: 如果地图上添加billboard等,点击后,pick.id是添加的元素,pick.id.id就是feature的id,可以以此区分多个billboard被点击
  const  scenePosition = viewer.scene.pickPosition(e.position); // 拾取浏览器视图的像素位置,转化为3D笛卡尔坐标
}, Cesium.ScreenSpaceEventType.LEFT_CLICK); // 左键点击事件(必传项)
```
## 4. 监听地图渲染变化(包括拖拽,缩放等操作)
官网 [https://cesium.com/docs/analytics-sdk-reference/Scene.html?classFilter=scene](https://cesium.com/docs/analytics-sdk-reference/Scene.html?classFilter=scene)
中文网 [http://cesium.xin/cesium/cn/Documentation1.62/Scene.html?classFilter=scene](http://cesium.xin/cesium/cn/Documentation1.62/Scene.html?classFilter=scene)
```
viewer.scene.postRender.addEventListener(() => { // 每一帧都去计算气泡的正确位置
      const  scenePosition = viewer.scene.pickPosition(position); // 拾取浏览器视图的像素位置,转化为3D笛卡尔坐标,[见第3条]
      const windowPosition = new Cesium.Cartesian2(); // new一个2D笛卡尔点实例
      Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, scenePosition, windowPosition); // 将WGS84坐标中的位置转换浏览器视图的像素位置,@params(地图场景{scene}, 3D笛卡尔坐标{position}, 2D笛卡尔点实例{Cartesian2})
      const cood = {
          x: windowPosition.x, //  地图移动后,元素在浏览器视图的新像素位置
          y: windowPosition.y, 
      };
});
```
## 5.将地图场景移动到一个或多个实体,或者地图某个点位
```
viewer.scene.camera.flyTo({
        duration: 1, // 飞的过渡动画时间
        destination: Cesium.Cartesian3.fromDegrees(
          120.083767, // 地图经度
          30.235533, // 地图维度
          7000, // 地图高度
        ),
        orientation: {
          // heading: Cesium.Math.toRadians(1000),
          pitch: Cesium.Math.toRadians(-45), // 视角
        },
      });
```