import { defineConfig } from 'vitepress';


// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  base: "/RBforc4d/", 
  
  
  title: 'Riggedbooks说明文档',
  description: '在C4d里快速制作翻书动画的插件.',
  

  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',    
    }
  },
  themeConfig: {        

    search: {
      provider: 'local'
    },
    // aside: 'right',

    sidebar: {
      '/':[
      {
        text: '功能概述',
        collapsed:false,
        items: [
          { text: '简介', link: '/' },
          { text: '兼容版本及渲染器', link: '/#兼容性' },  
          { text: '插件特性', link: '/feathers' },
          { text: '参数说明', link: '/parameters' },
          { text: '常见问题', link: '/question' },             
        ]
      },
      
      {
        text: '快速上手',
        collapsed:false,
        items: [
          { text: '1.安装', link: '/quickstart#_1-安装' },  
          { text: '2.创建', link: '/quickstart#_2-创建' },            
          { text: '3.调整尺寸', link: '/quickstart#_3-调整尺寸' },  
          { text: '4.调整页数', link: '/quickstart#_4-调整页数' }, 
          { text: '5.移动,旋转,缩放', link: '/quickstart#_5-移动-旋转-缩放' },
          { text: '6.替换贴图', link: '/quickstart#_6-替换贴图' },
          { text: '7.调整动画', link: '/quickstart#_7-调整动画' },
          { text: '附：其他渲染器替换贴图', link: '/other-renders' },


        ]
      },
      {
        text: '封面凹槽与装饰',
        collapsed:true,
        items: [
          { text: '添加3D文字', link: '/quickstart#_1-安装' },  
          { text: '添加四角装饰', link: '/quickstart#_2-创建' },            
          { text: '调整凹槽位置和UV', link: '/quickstart#_3-调整尺寸' },           
        ]
      },      
    ],
      '/en/':[
      {
        text: 'GUIDE',
        items: [
          { text: 'Feather', link: '/en/' },
          { text: 'Version', link: '/en/version' },
          
        ]
      }
    ],
    }
  }

});

