define([
	'text!./template.html',
	'css!./style.css'
], function (template) {

	return {
		template: template,
		data: () => {
			return {
				des: '首页'
			}
		},
		created: function () {
			//this.$Message.info('This is a info tip');
		},
		methods: {
			handleClickToTest() {
				this.$router.push({ name: 'test', params: { name: 'kora' } })
			}
		}
	}

})