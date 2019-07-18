const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    port: 8080,
		open: true,
  },
	css: {
	  extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
	},
	configureWebpack: (config)=>{
		config.plugins.push(new SkeletonWebpackPlugin({
			webpackConfig: {
				entry: {
					app: path.join(__dirname, './src/utils/skeleton.js'),
				},
			},
			router:{
				mode:'hash',
				routes:[
					{
						path:'/',
						skeletonId:'ske-ind',
					},
					{
						path:'/about',
						skeletonId:'ske-about',
					}
				]
			},
			minimize: true,
			quiet: true,
		}));
	}
}