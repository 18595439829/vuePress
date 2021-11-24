module.exports = {
  base: '/vuePress/',
  title: '洋洋', // 设置网站标题
  description: '个人开发博客',
  port: '8000',
  head: [
    ['link', { rel: 'icon', href: '/img/羊驼.jpg' }]
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    logo: '/img/羊驼.jpg',
    nav: [
      {
        text: '开始',
        link: '/start/'
      },
      {
        text: 'js',
        items: [
          { text: 'vue', link: '/vue/' },
          { text: 'vue3', link: '/vue3/' },
          { text: 'js', link: '/js/' },
          { text: 'uni-app', link: '/uni-app/' },
          { text: 'openlayer', link: '/openlayer/' },
          { text: 'cesium', link: '/cesium/' },
          { text: 'git', link: '/git/' },
          { text: 'vscode', link: '/vscode/' }
        ]
      },
      {
        text: 'css',
        link: '/css/'
      },
      {
        text: 'nginx',
        link: '/nginx/'
      },
      {
        text: 'jenkins',
        link: '/jenkins/'
      },
      {
        text: 'github',
        link: 'https://github.com/18595439829/vuePress'
      }
    ],
    sidebar: {
      '/vue/': [ 'vuePress', 'directiveDrag', 'filter', 'vue-plugin' ,'fileUpload', 'formatListToTel', 'axiosUseIE10',        'vscodeAddVueTemplate', 'markdown', 'formatListToTel', 'html2canvas', 'waterfall', 'vue-cropper', 'main-css', 'live2d'],
      '/vue3/': ['lessError', 'router', 'is', 'property', 'ts-any', 'v-model'],
      '/js/': ['object.keys-for.of', 'requestAnimation', 'listToTree', 'base64ToFile', 'breakFor', 'diff.js', 'formatDate.js', 'contenteditable', 'getBoundingClientRect', 'moveable-drag', 'moveable-resize'],
      '/uni-app/': ['image', 'subNVue'],
      '/openlayer/': ['initMap', 'openlayer', 'feature', 'point-line-polygon', 'heatmap', 'draw'],
      '/cesium/': ['init', 'api'],
      '/git/': ['gitConfig', 'changeOrigin', 'npm-install'],
      '/vscode/': ['ctrl+click', 'asyncSetting'],
      '/css/': ['clipPath', 'chrome-scrollbar', 'rgba-16', 'text-overflow'],
      '/nginx/': ['setup','nginx', 'nginxProxy', ],
      '/jenkins/': ['init']
    }
  }
};
