import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Agents 0 to 1",
  // 项目站地址是 https://sweet2honey.github.io/agents-0-to-1/
  base: '/agents-0-to-1/',
  description: "Learning path for AI agents.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chapter 1', link: '/chapter1/' },
    ],

    sidebar: [
      {
        text: 'Chapter 1',
        items: [
          { text: 'Overview', link: '/chapter1/' },
          { text: 'ReAct', link: '/chapter1/react' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
