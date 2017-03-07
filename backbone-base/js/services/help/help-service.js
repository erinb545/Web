define([
	'/js/models/help/help-model.js'
], function(HelpModel) {

	var HelpService = function(options) {

		this.mainModel = new HelpModel();

		var self = this;
		setInterval(function() {
			var rand = Math.random() * 100;
			console.log('Setting HelpModel aDouble to ' + rand);
			self.mainModel.set('aDouble', rand);
		}, 1000)
	}

	var pro = HelpService.prototype;

	return HelpService;
});