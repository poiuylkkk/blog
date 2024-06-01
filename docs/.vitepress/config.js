module.exports = {
  title: '我的博客',
  description: '自媒体博主的个人博客',
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/articles/about-me.md' },
      { text: '我的工作', link: '/articles/my-work.md' },
      { text: '联系方式', link: '/articles/contact.md' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: '关于我', link: '/articles/about-me.md' },
          { text: '我的工作', link: '/articles/my-work.md' },
          { text: '联系方式', link: '/articles/contact.md' },
        ]
      }
    ]
  }
}
