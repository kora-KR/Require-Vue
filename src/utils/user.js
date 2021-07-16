define([
], function () {

	let user = {
		isLogin() {
			return user.getToken() != null
		},

		setToken(value) {
			sessionStorage.setItem('token', value)
		},

		getToken() {
			return new Date().getTime()
		},

		getInfo() {
			return {
				name: 'kora'
			}
		}
	}

	return user

})