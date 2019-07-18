const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
	basis: 'https://cdn.bootcss.com/',
	js: ['vue/2.6.10/vue.min.js',
		'vuex/3.0.1/vuex.min.js',
		'vue-router/3.0.3/vue-router.min.js'
	]
}
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
	configureWebpack: (config) => {
		config.plugins.push(new SkeletonWebpackPlugin({
			webpackConfig: {
				entry: {
					app: path.join(__dirname, './src/utils/skeleton.js'),
				},
			},
			router: {
				mode: 'hash',
				routes: [{
						path: '/',
						skeletonId: 'ske-ind',
					},
					{
						path: '/about',
						skeletonId: 'ske-about',
					}
				]
			},
			minimize: true,
			quiet: true,
		}));
		if (isProduction) {
			config.externals = {
				'vue': 'Vue',
				'vuex': 'Vuex',
				'vue-router': 'VueRouter'
			}
		}
	},
	chainWebpack: config => {
		if (isProduction) {
			config.plugin('html').tap(args => {
				args[0].cdn = cdn;
				return args;
			})
		}
	}
}
