define([
], function () {
	// 申明路由文件
	let loader = (deps) => {
		return () => {
			if (!Array.isArray(deps)) {
				deps = [deps]
			}
			return new Promise((resolve, reject) => {
				require(deps, function (res) {
					resolve(res)
				})
			})
		}
	}

	var routes = [
		{ path: '/login', name: 'login', component: loader('./pages/login') },
		{ path: '/test/:name?', name: 'test', component: loader('./pages/test'), props: true }, // 隐式路由props解析
		{
			path: '/',
			component: loader('./pages/layout/index'),
			children: [
				{ path: '/home', component: loader('./pages/home/index') },
				{ path: '/user-list', component: loader('./pages/user/user-list') }
			]
		},
		{ path: '*', name: "error", component: loader('./pages/error') }
	]

	return routes

})