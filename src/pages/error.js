define([

], function () {
	return {
		template: "<div>访问异常，{{errCode}}</div>",
		data: function () {
			return {
				errCode: "404"
			}
		},
		created: function () {
			//this.$Message.info('This is a info tip');
		}
	}
});