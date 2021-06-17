(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(e,n,r){"use strict";r.r(n);var t=r(44),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cesium初始化viewer示例-一"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium初始化viewer示例-一"}},[e._v("#")]),e._v(" Cesium初始化viewer示例(一)")]),e._v(" "),r("p",[e._v("官方文档 "),r("a",{attrs:{href:"https://cesium.com/docs/analytics-sdk-reference/Viewer.html?classFilter=viewer",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cesium.com/docs/analytics-sdk-reference/Viewer.html?classFilter=viewer"),r("OutboundLink")],1),e._v("\n中文网 "),r("a",{attrs:{href:"http://cesium.xin/cesium/cn/Documentation1.62/Viewer.html?classFilter=viewer",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://cesium.xin/cesium/cn/Documentation1.62/Viewer.html?classFilter=viewer"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"_1-生成viewer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成viewer"}},[e._v("#")]),e._v(" 1.生成viewer")]),e._v(" "),r("p",[e._v("参考: "),r("a",{attrs:{href:"https://blog.csdn.net/zlx312/article/details/78273537",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/zlx312/article/details/78273537"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<template>\n  <div id=\"app\" />\n</template>\n<script>\nexport default {\n  mounted() {\n    this.init();\n  },\n  methods: {\n    init() {\n      const viewer = new Cesium.Viewer('app', {\n        animation: false, // 是否创建动画小器件，左下角仪表\n        baseLayerPicker: false, // 是否显示图层选择器\n        fullscreenButton: false, // 是否显示全屏按钮\n        geocoder: false, // 是否显示geocoder小器件，右上角查询按钮\n        homeButton: false, // 是否显示Home按钮\n        infoBox: false, // 是否显示信息框\n        sceneModePicker: false, // 是否显示3D/2D选择器\n        selectionIndicator: false, // 是否显示选取指示器组件\n        timeline: false, // 是否显示时间轴\n        navigationHelpButton: false, // 是否显示右上角的帮助按钮\n        scene3DOnly: true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源\n        clock: new Cesium.Clock(), // 用于控制当前时间的时钟对象\n        selectedImageryProviderViewModel: undefined, // 当前图像图层的显示模型，仅baseLayerPicker设为true有意义\n        imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(), // 可供BaseLayerPicker选择的图像图层ProviderViewModel数组\n        selectedTerrainProviderViewModel: undefined, // 当前地形图层的显示模型，仅baseLayerPicker设为true有意义\n        terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(), // 可供BaseLayerPicker选择的地形图层ProviderViewModel数组\n        imageryProvider: new Cesium.OpenStreetMapImageryProvider({\n          credit: '',\n          url: '//192.168.0.89:5539/planet-satellite/',\n        }), // 图像图层提供者，仅baseLayerPicker设为false有意义\n        terrainProvider: new Cesium.EllipsoidTerrainProvider(), // 地形图层提供者，仅baseLayerPicker设为false有意义\n        skyBox: new Cesium.SkyBox({\n          sources: {\n            positiveX: 'Cesium-1.7.1/Skybox/px.jpg',\n            negativeX: 'Cesium-1.7.1/Skybox/mx.jpg',\n            positiveY: 'Cesium-1.7.1/Skybox/py.jpg',\n            negativeY: 'Cesium-1.7.1/Skybox/my.jpg',\n            positiveZ: 'Cesium-1.7.1/Skybox/pz.jpg',\n            negativeZ: 'Cesium-1.7.1/Skybox/mz.jpg',\n          },\n        }), // 用于渲染星空的SkyBox对象\n        fullscreenElement: document.body, // 全屏时渲染的HTML元素,\n        useDefaultRenderLoop: true, // 如果需要控制渲染循环，则设为true\n        targetFrameRate: undefined, // 使用默认render loop时的帧率\n        showRenderLoopErrors: false, // 如果设为true，将在一个HTML面板中显示错误信息\n        automaticallyTrackDataSourceClocks: true, // 自动追踪最近添加的数据源的时钟设置\n        contextOptions: undefined, // 传递给Scene对象的上下文参数（scene.options）\n        sceneMode: Cesium.SceneMode.SCENE3D, // 初始场景模式\n        mapProjection: new Cesium.WebMercatorProjection(), // 地图投影体系\n        dataSources: new Cesium.DataSourceCollection(),\n        // 需要进行可视化的数据源的集合\n      });\n      const { scene } = viewer;\n      scene.screenSpaceCameraController.minimumZoomDistance = 50; // 地图场景最大缩放层级,即地图最小允许展示的颗粒度\n      scene.screenSpaceCameraController.maximumZoomDistance = 20000; // 地图场景最小缩放层级,即地图最大允许展示的颗粒度\n      // 设置相机视角\n      scene.camera.flyTo({\n        duration: 1, // 飞的过渡动画时间\n        destination: Cesium.Cartesian3.fromDegrees(\n          120.083767, // 地图经度\n          30.235533, // 地图维度\n          7000, // 地图高度\n        ),\n        orientation: {\n          // heading: Cesium.Math.toRadians(1000),\n          pitch: Cesium.Math.toRadians(-45), // 视角\n        },\n      });\n      // 亮度设置\n      const stages = viewer.scene.postProcessStages;\n      viewer.scene.brightness = viewer.scene.brightness\n        || stages.add(Cesium.PostProcessStageLibrary.createBrightnessStage());\n      viewer.scene.brightness.enabled = true;\n      viewer.scene.brightness.uniforms.brightness = Number(1); // 1比原图稍暗,数字越小越暗\n    },\n  },\n};\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);