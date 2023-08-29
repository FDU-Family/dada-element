import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Dada Element',
  description: 'Dada Components Lib',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/button' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: '按钮', link: '/button' },
          { text: '头像', link: '/avatar' },
          { text: '日期选择器', link: '/data-picker' },
          { text: '图标', link: '/icon' },
          { text: '图片', link: '/image' },
          { text: '输入框', link: '/input' },
          { text: '模态框', link: '/modal' },
          { text: '消息框', link: '/notification' },
          { text: '弹出框', link: '/pop-out' },
          { text: '单选多选', link: '/radio' },
          { text: '选择框', link: '/select' },
          { text: '切换框', link: '/switcher' },
          { text: '标签组', link: '/tabs' },
          { text: '时间选择器', link: '/time-picker' },
          { text: 'Toast', link: '/toast' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
