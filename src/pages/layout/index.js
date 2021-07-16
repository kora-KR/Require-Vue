define([
	'text!./template.html',
	'css!./style.css',
	'less!./style.less',
	'com-page-header'
], function (template) {

	return {
		template,

		created() {
			if (this.$router.currentRoute.path == '/') {
				this.$router.push({ path: '/home' })
			}
		}
	}

});