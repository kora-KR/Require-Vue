define(['axios'], function (axios) {

	let http = axios.create({
		baseURL: 'https://korains.top/demo'
	})

	return http
})
