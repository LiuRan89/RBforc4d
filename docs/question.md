# 常见问题
## 调整书本位置，旋转，缩放?
选中书本的总控制器，可以对书本进行移动和旋转，至于缩放，控制器没有用，需要由书本的封面宽度和长度，书页的宽度和长度控制的。
![位置和旋转](/img/位置和旋转.png)

## 制作圆角封面?
图文教程：

::: details 圆角：
- 硬皮书:找到下图Round_Corner变形器，它是控制封面圆角的，默认关闭，把它打开封面就有圆角效果了，如果效果不好，可以自由调节这个倒角变形器的偏移和细分。
![倒角修改器](/img/倒角修改器.jpg)  
![倒角效果](/img/倒角效果.png)  
至于内页的倒角效果，要自己手动制作带圆弧的黑白贴图，贴到每张书页的alpha通道上，同时选中所有书页材质球，把黑白贴图贴到alpha通道上即可。类似下图：  
（您可以直接右键，图片另存为，然后贴到内页的材质的alpha上）
![Round_Corner_Alpha](/img/Round_Corner_Alpha.jpg)  
- 软皮书:封面和内页都要使用alpha贴图的方式来制作
::: 

视频教程：（点击可跳转到B站播放）
<iframe height="394" width="700" src="//player.bilibili.com/player.html?aid=656395937&bvid=BV17a4y1g7WF&cid=1141570108&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>




## 转换成静态网格?
- **硬皮书**：  

<iframe height="394" width="700" src="//player.bilibili.com/player.html?aid=656395937&bvid=BV17a4y1g7WF&cid=1141570108&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> 

- **软皮书**：

<iframe height="394" width="700" src="//player.bilibili.com/player.html?aid=656395937&bvid=BV17a4y1g7WF&cid=1141570108&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>  

## 调整封面内侧的材质?
分别调节封面内侧的材质：  
#### 软皮书：
![内页材质](/img/内页材质.png)

将封面内侧的材质球复制出来两份，就有了三个封面内面材质球，分别重命名为
封面内面F，封面内面B，封面内面S，为了方便观察，给红.蓝.绿三个不同的颜色  
![内页材质2](/img/内页材质2.png)
赋予给Soft_Cover模型：
![内页材质3](/img/内页材质3.png)
给蓝色球选集里填B，侧面选正面
![蓝色](/img/蓝色.jpg)
给红色球选集里填F，侧面选正面
![红色](/img/红色.jpg)
#### 硬皮书：
跟软皮书同理，只是材质要赋予给硬皮的模型
![内页材质4](/img/内页材质4.png)

## 复制更多书本?
在新的场景里新建书本，替换贴图后，复制粘贴到总场景里。
视频教程：
<iframe height="394" width="700" src="//player.bilibili.com/player.html?aid=656395937&bvid=BV17a4y1g7WF&cid=1141570108&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>    

## 批量替换贴图?
所有渲染器批量替换贴图的方法是一样的
#### 先制作用来批量替换的图片，按照以下方式命名：  
**封面正面：** Cover_Front_Tex.jpg  
**封面侧面：** Cover_Spine_Tex.jpg  
**封面背面：** Cover_Back_Tex.jpg  
**页码1：** PageTex001.jpg  
**页码2：** PageTex002.jpg  
**页码3：** PageTex003.jpg  
**以此类推...**  
**页码199：** PageTex199.jpg  
**页码200：** PageTex200.jpg  

找到窗口 项目资产检查器

![批量替换贴图](/img/批量替换贴图.png)

项目资产检查器长这样：  

![批量替换贴图02](/img/批量替换贴图02.png)

选择你要批量替换的贴图，点击菜单栏>>资产>>替换资产，定位到自制的贴图文件夹即可。

![批量替换贴图03](/img/批量替换贴图03.png)
## 批量添加凹凸贴图?
## 批量调整材质属性?
## 添加更多页数?
不能添加更多页数。
## 制作打开又合上的动画?
## 不小心删除了关键帧怎么找回?
