# Cesium初始化viewer示例(一)
官方文档 [https://cesium.com/docs/analytics-sdk-reference/Viewer.html?classFilter=viewer](https://cesium.com/docs/analytics-sdk-reference/Viewer.html?classFilter=viewer)
中文网 [http://cesium.xin/cesium/cn/Documentation1.62/Viewer.html?classFilter=viewer](http://cesium.xin/cesium/cn/Documentation1.62/Viewer.html?classFilter=viewer)
## 1.生成viewer
参考: [https://blog.csdn.net/zlx312/article/details/78273537](https://blog.csdn.net/zlx312/article/details/78273537)
```
<template>
  <div id="app" />
</template>
<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const viewer = new Cesium.Viewer('app', {
        animation: false, // 是否创建动画小器件，左下角仪表
        baseLayerPicker: false, // 是否显示图层选择器
        fullscreenButton: false, // 是否显示全屏按钮
        geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
        homeButton: false, // 是否显示Home按钮
        infoBox: false, // 是否显示信息框
        sceneModePicker: false, // 是否显示3D/2D选择器
        selectionIndicator: false, // 是否显示选取指示器组件
        timeline: false, // 是否显示时间轴
        navigationHelpButton: false, // 是否显示右上角的帮助按钮
        scene3DOnly: true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        clock: new Cesium.Clock(), // 用于控制当前时间的时钟对象
        selectedImageryProviderViewModel: undefined, // 当前图像图层的显示模型，仅baseLayerPicker设为true有意义
        imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(), // 可供BaseLayerPicker选择的图像图层ProviderViewModel数组
        selectedTerrainProviderViewModel: undefined, // 当前地形图层的显示模型，仅baseLayerPicker设为true有意义
        terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(), // 可供BaseLayerPicker选择的地形图层ProviderViewModel数组
        imageryProvider: new Cesium.OpenStreetMapImageryProvider({
          credit: '',
          url: '//192.168.0.89:5539/planet-satellite/',
        }), // 图像图层提供者，仅baseLayerPicker设为false有意义
        terrainProvider: new Cesium.EllipsoidTerrainProvider(), // 地形图层提供者，仅baseLayerPicker设为false有意义
        skyBox: new Cesium.SkyBox({
          sources: {
            positiveX: 'Cesium-1.7.1/Skybox/px.jpg',
            negativeX: 'Cesium-1.7.1/Skybox/mx.jpg',
            positiveY: 'Cesium-1.7.1/Skybox/py.jpg',
            negativeY: 'Cesium-1.7.1/Skybox/my.jpg',
            positiveZ: 'Cesium-1.7.1/Skybox/pz.jpg',
            negativeZ: 'Cesium-1.7.1/Skybox/mz.jpg',
          },
        }), // 用于渲染星空的SkyBox对象
        fullscreenElement: document.body, // 全屏时渲染的HTML元素,
        useDefaultRenderLoop: true, // 如果需要控制渲染循环，则设为true
        targetFrameRate: undefined, // 使用默认render loop时的帧率
        showRenderLoopErrors: false, // 如果设为true，将在一个HTML面板中显示错误信息
        automaticallyTrackDataSourceClocks: true, // 自动追踪最近添加的数据源的时钟设置
        contextOptions: undefined, // 传递给Scene对象的上下文参数（scene.options）
        sceneMode: Cesium.SceneMode.SCENE3D, // 初始场景模式
        mapProjection: new Cesium.WebMercatorProjection(), // 地图投影体系
        dataSources: new Cesium.DataSourceCollection(),
        // 需要进行可视化的数据源的集合
      });
      const { scene } = viewer;
      scene.screenSpaceCameraController.minimumZoomDistance = 50; // 地图场景最大缩放层级,即地图最小允许展示的颗粒度
      scene.screenSpaceCameraController.maximumZoomDistance = 20000; // 地图场景最小缩放层级,即地图最大允许展示的颗粒度
      // 设置相机视角
      scene.camera.flyTo({
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
      // 亮度设置
      const stages = viewer.scene.postProcessStages;
      viewer.scene.brightness = viewer.scene.brightness
        || stages.add(Cesium.PostProcessStageLibrary.createBrightnessStage());
      viewer.scene.brightness.enabled = true;
      viewer.scene.brightness.uniforms.brightness = Number(1); // 1比原图稍暗,数字越小越暗
    },
  },
};
```