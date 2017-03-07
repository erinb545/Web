define([
	'baseRouter',
	'/js/services/help/help-service.js',
	'jsx!views/help/help-view'
], function(BaseRouter, HelpService, HelpView) {

	var HelpRouter = BaseRouter.extend({

		routeName: 'help',

		createService: function() {
			return new HelpService({});
		},

		getViewType: function() {
			return HelpView;
		}
	});

	return HelpRouter;
});