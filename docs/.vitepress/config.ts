import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  //lang: 'zh',
  base: "/vitedocs/",
  title: 'RiggedBooks',
  description: 'Vite & Vue powered static site generator.ss',
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/guide' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
    },

  themeConfig: {
    langMenuLabel :'',
  
    
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'version', link: '/version' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: '使用指南',
        collapsed: false,
        items: [
          { text: '功能特色', link: '/' },
          { text: '版本', link: '/zh/version' },
        
          // ...
        ],
      },
      {
        text: '使用指南',
        collapsed: false,
        items: [
          { text: 'feather', link: '/' },
          { text: 'version', link: 'en/version' },
          
          // ...
        ],
      },
    ],
  },
});
