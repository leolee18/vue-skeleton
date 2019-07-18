# vue-skeleton快速创建项目
## 全局安装/查看版本
```
npm install -g @vue/cli 或 yarn global add @vue/cli
vue -V
```

## 创建项目
```
vue create my-project

vuecli3是因为上一次记录过的cli3配置，第一次执行create是没有的
选择默认（default）还是手动（Manually），如果选择default，一路回车执行下去就行了

选择配置，看个人项目需求
注意，空格键是选中与取消，A键是全选
TypeScript 支持使用 TypeScript 书写源码
Progressive Web App (PWA) Support PWA 支持。
Router 支持 vue-router 。
Vuex 支持 vuex 。
CSS Pre-processors 支持 CSS 预处理器。
Linter / Formatter 支持代码风格检查和格式化。
Unit Testing 支持单元测试。
E2E Testing 支持 E2E 测试。


配置文件存放地方
第一个是独立文件夹位置，第二个是在package.json文件里

询问是否记录这一次的配置，以便下次使用，如一开始的时候会显示的vuecli3配置

回车确定等待下载
```

## 启动
```
cd my-project // 进入到项目根目录
npm run serve // 启动项目

```
## 配置骨架屏方案静态
```
安装vue-skeleton-webpack-plugin插件
npm install --save-dev vue-skeleton-webpack-plugin

vue.config.js配置
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    css: {
         extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
    },
    
    configureWebpack: (config)=>{
        // vue骨架屏插件配置
        config.plugins.push(new SkeletonWebpackPlugin({
          webpackConfig: {
            entry: {
              app: path.join(__dirname, './src/utils/skeleton.js'),
            },
          },
          minimize: true,
          quiet: true,
        }))
  },
}

新建一个skeleton.js文件放在src->utils文件夹下面
import Vue from 'vue';
import Skeleton from '../components/Skeleton/skeleton-2';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});

新建一个skeleton-2.vue骨架屏组件
<template>
  <div class="skeleton page">
    <div class="skeleton-nav"></div>
    <div class="skeleton-swiper"></div>
    <ul class="skeleton-tabs">
      <li v-for="i in 8" class="skeleton-tabs-item"><span></span></li>
    </ul>
    <div class="skeleton-banner"></div>
    <div v-for="i in 6" class="skeleton-productions"></div>
  </div>
</template>
.........


```
