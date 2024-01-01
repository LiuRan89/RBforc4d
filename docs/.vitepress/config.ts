import { defineConfig } from 'vitepress';


// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  base: "/RBforc4d/", 
  
  
  title: 'Riggedbooks ',
  description: 'A plugin for c4d.',
  

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    //cn: {
      //label: 'Chinese',
      //lang: 'cn',         
    //}
  },
  themeConfig: {    
    logo: 'img/logo.png',  
    siteTitle: false,  

    search: {
      provider: 'local'
    },
    // aside: 'right',

    sidebar: {      
      '/':[
        {
          text: 'Introduction',
          collapsed:false,
          items: [
            { text: 'Features', link: '/Features' },
            { text: 'Compatible version', link: '/compatible' },  
            { text: 'Install', link: '/install' }, 
            { text: 'Changelog', link: '/changelogs' },               
          ]
        },
        
        {
          text: 'FAQ',
          collapsed:false,
          items: [
            { text: '1.Adjust Pos/Rot/Scale？', link: '/FAQ_PoRoSc' },  
            { text: '2.(Batch)Replace Textures？', link: '/FAQ_replacetex' },            
            { text: '3.Adjust Animation？', link: '/FAQ_Animation' },  
            { text: '4.Deal with interlacing？', link: '/FAQ_interlace' }, 
            { text: '5.Convert to static mesh？', link: '/FAQ_staticmodel' },
            { text: '6.Add Round Corner？', link: '/FAQ_roundcorner' },
            { text: '7.Add Bump maps？', link: '/FAQ_bumpmap' },
            { text: '8.Add 3D Text on Cover？', link: '/FAQ_cover3dtext' },
            { text: '9.Batch rename tex？', link: '/FAQ_batchrename' },
            { text: '10.Adjust shape of groove?', link: '/FAQ_grooveshape' },
          ]
        },     
      ],
      '/cn/':[
        {
          text: '功能概述',
          collapsed:false,
          items: [
            //{ text: '简介', link: '/cn/intro' },
            { text: '兼容版本及渲染器', link: '/cn/compatible' },  
            { text: '安装', link: '/cn/install' },  
            { text: '版本更新', link: '/cn/changelogs' },               
          ]
        },
        
        {
          text: '常见问题',
          collapsed:false,
          items: [
            { text: '1.调整书本的移动，旋转，缩放？', link: '/cn/FAQ_PoRoSc' },  
            { text: '2.批量替换贴图？', link: '/cn/FAQ_replacetex' },            
            { text: '3.调整翻页动画？', link: '/cn/FAQ_Animation' },  
            { text: '4.处理穿插？', link: '/cn/FAQ_interlace' }, 
            { text: '5.转换成静态模型？', link: '/cn/FAQ_staticmodel' },
            { text: '6.制作圆角书本？', link: '/cn/FAQ_roundcorner' },
            { text: '7.添加凹凸贴图？', link: '/cn/FAQ_bumpmap' },
            { text: '8.在封面添加立体字？', link: '/cn/FAQ_cover3dtext' },
            { text: '9.给图片批量重命名？', link: '/cn/FAQ_batchrename' },
          ]
        },     
      ],
    
    }
  }

});

