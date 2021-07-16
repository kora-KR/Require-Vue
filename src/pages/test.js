define([

], function () {
	return {
		template: "<div>路由跳转隐式传参：{{name}}</div>",
		data: function () {
			return {
			}
		},
		props: ['name'],
		created: function () {
			//this.$Message.info('This is a info tip');

		}
	}
});