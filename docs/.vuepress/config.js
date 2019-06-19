module.exports = {
  title: "洋洋", // 设置网站标题
  description: "个人开发博客",
  port: "8000",
  head: [
    ["link", { rel: "icon", href: "/img/羊驼.png" }]
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      {
        text: "开始",
        link: "/start/"
      },
      {
        text: "vue",
        link: "/vue/"
      },
      {
        text: "github",
        link: "https://github.com/18595439829/document/tree/vuePress"
      }
    ],
    sidebar: {
      "/vue/": ["nginx", "markdown", "fileUpload"]
    }
  }
};
