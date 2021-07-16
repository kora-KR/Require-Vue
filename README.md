# requireJS + Vue

> 基于 requireJS 的 vue 基础项目包，内置如下功能：

1. VUE 全家桶(路由守卫、iviewUI、axios、vuex)、
2. 路由嵌套、组件嵌套、隐式路由
3. 敏捷开发 require 插件(css、less、js)

## 资源说明

1.  requireJS（建议结合当前项目学习）

    [传送门](https://www.ruanyifeng.com/blog/2012/11/require_js.html)

2.  require 辅助 插件

        text less lessc css normalize

    备注：
    [传送门 1](https://github.com/pingsrl/requirejs-less)
    [传送门 2](https://github.com/guybedford/require-less)

    相关资源已放置 /libs/ 目录下

3.  vue 资源

    1. vuex (/libs/vuex 资源，src/vuex 下声明)

    2. vueRouter

    3. iview [传送门](https://www.iviewui.com/)

## 路由页面创建流程

1. 资源放置路径：/src/pages/
2. 资源配置模式：html + less + js（可参考/src/pages/home 文件夹）
3. 路由配置：/src/routes.js 内添加相应配置

## 组件创建流程

1. 资源放置路径：/src/components/
2. 资源配置模式：html + less + js（可参考/src/components/page-header 文件夹）
3. /src/app.js 文件内添加配置（位置搜索： `Kora - 自定义组件`）

## 项目目录

┌─assets 静态资源目录(如图片、视频、字体包等)
├─libs 三方插件资源包
│ ├─axios 接口资源
│ ├─require requireJS 基础资源
│ ├─require-plugins require 插件资源
│ ├─vue 框架资源
│ ├─vue-iview 三方 UI 资源
│ ├─vue-router 路由资源
├─src
│ ├─components 模板文件
│ ├─pages 路由文件
│ ├─utils 小工具
│ ├─app.css 基础样式
│ ├─app.js require(项目)主入口
│ ├─routes.js 路由模板
├─favicon.icon
├─index.html 页面主入口
└─README.md 辅助文档
