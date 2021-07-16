define([
	'vue',
	'user',
	'text!./components/page-header/template.html',
	'css!./components/page-header/style.css'
], function (Vue, user, template) {

	Vue.component('page-header', {
		template,
		data: () => {
			return {
				user: {}
			}
		},
		mounted() {
			this.user = user.getInfo()
		}
	})

})