define([
	'http',
], function (http) {

	return {
		template: `
    <div class="page-user-list" style='width: 100%; height: 100%;'>
		<aside style='position: relative; width: inherit; height: inherit;'>
			<main style='position: absolute; top: 30px; left: 30px; text-align: center; font-size: 18px;'>
				Main
				<div>{{des}}</div>
				<div style='margin: 15px; border-top: 1px solid #900'>vuex用户姓名：{{name || '暂未设置'}} <button style='padding: 6px; margin: 10px; border-radius: 6px; font-size: 14px;' @click='handleClickSetVuex'>设置vuex</button></div>
			</main>
		</aside>
    </div>
    `,
		data: () => {
			return {
				des: '个人页',
				name: ''
			}
		},
		created() {
			this.name = this.$store.state.login.username
			var params = {
				name: 'kora', age: 100
			}
			http({ serviceCode: 'SSO0015', ...params }).then(res => {
				console.log(res, '接口封装')
			})
		},
		methods: {
			handleClickSetVuex() {
				this.$store.commit('RecordLoginInfo', 'kora')
				this.name = this.$store.state.login.username
			}
		}
	}

})