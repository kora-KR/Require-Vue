define([], function () {

	// 配置require
	requirejs.config({
		urlArgs: 'v=' + (new Date()).getTime(), // 资源缓存问题优化
		// 别名配置，简化引用
		paths: {
			// 三方库
			'vue': '../libs/vue/vue',
			'vuex': '../libs/vuex/vuex',
			'vue-router': '../libs/vue-router/vue-router',
			'axios': '../libs/axios/axios.min',
			'iview': '../libs/vue-iview/iview.min',
			'lessb': "../libs/require-plugins/lessb", // less 插件

			// require 插件
			'text': '../libs/require-plugins/text',
			'css': '../libs/require-plugins/css.min',
			'less': "../libs/require-plugins/less",
			'lessc': "../libs/require-plugins/lessc",
			'normalize': "../libs/require-plugins/normalize",

			// 自定义辅助工具
			'http': './utils/http',
			'user': './utils/user',

			// Kora - 自定义组件
			'com-page-header': './components/page-header/index'
		},
		shim: {  // 配置依赖关系
			'vue-router': ['vue'], // 加载vue-router时，会自动引入vue，如果vue之前没引入过的话。
			'iview': ['vue'],
		}
	})

	/**
	 *  注入对应依赖，全结束执行回调 
	 * 	注意：注入资源与回调形参命名需一一对应！
	 * **/
	require([
		'vue', 'vue-router', './routes', 'user', 'iview', 'lessb', '../src/vuex/store', 'css!../libs/vue-iview/iview.css',
		'css!./app.css'
	], function (Vue, VueRouter, routes, user, iview, less, store) {
		let router = new VueRouter({
			routes
		})

		Vue.use(VueRouter)
		Vue.use(iview)

		window.app = new Vue({
			router,
			store
		}).$mount('#root')

		if (!user.isLogin()) {
			router.push({ path: '/login' })
		}

	})

})
