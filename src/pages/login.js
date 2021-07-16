define([
	'user'
], function (user) {

	return {
		template: `
			<div class="page-login">
				<h1>登录界面</h1>
				<button @click="login()">登录</button>
			</div>
    `,
		methods: {
			login() {
				alert('登录成功')
				user.setToken('xxx')
				this.$router.push({ path: '/' })
			}
		}


	}


})