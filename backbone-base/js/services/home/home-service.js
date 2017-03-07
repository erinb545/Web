define([
	'/js/models/home/home-model.js'
], function(HomeModel) {

	var HomeService = function(options) {

		this.mainModel = new HomeModel();

		var self = this;
		setInterval(function() {
			var rand = Math.random();
			console.log('Setting aDouble to ' + rand);
			self.mainModel.set('aDouble', rand);
		}, 1000);
	}

	var pro = HomeService.prototype;

	return HomeService;
});