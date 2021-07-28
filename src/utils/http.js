define(['axios'], function (axios) {
	const httpUrl = '', // 接口访问地址
		baseUri = '' // 接口访问目录资源
	// 请求头配置
	axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
	axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'POST';
	axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true;
	axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'x-requested-with,content-type';
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

	// 拦截器 - 请求
	axios.interceptors.request.use(
		config => {
			// sessionStorage.getItem('token') && config.headers.authorization = token // 请求头设置token
			return config;
		},
		error => Promise.reject(Object.create(error))
	)
	// 拦截器 - 响应
	axios.interceptors.response.use(
		response => response,
		error => Promise.reject(Object.create(error))
	)

	// Post请求
	function ajaxPost(url, params, showLoad = true) {
		// 报文组装
		var json = sign(params);
		console.log(json, '---- 请求参数 -----')
		let postData = JSON.stringify({
			switch_json: json
		});
		return new Promise((resolve, reject) => {
			axios.post(httpUrl + url, postData)
				.then(response => {
					var res = response.data
					console.log(res, ' ---- 接口返回 ----')
					resolve({
						...res
					});
				})
				.catch(error => {
					reject(error);
				})
		})
	}

	// 报文组装
	function sign(params) {
		var date = new Date(),
			allDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

		var action = {
			reqTime: allDate,
			sysCode: '系统编号',
			version: '报文版本号',
			OrigSeqNo: '全局流水号',
			reqTraceId: '请求交易流水号',
			serviceCode: params.serviceCode
		};

		var body = params;
		var par = { ...params, ...action };
		delete params.serviceCode;
		return {
			action, // 请求头
			body    // 请求体
		};
	}
	const http = (p, showLoad) => ajaxPost(baseUri, p, showLoad)
	return http;
})
