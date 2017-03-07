define([
	'baseRouter',
	'/js/services/home/home-service.js',
	'jsx!views/home/home-view'
], function(BaseRouter, HomeService, HomeView) {

	var HomeRouter = BaseRouter.extend({

		routeName: 'home',

		createService: function() {
			return new HomeService({});
		},

		getViewType: function() {
			return HomeView;
		}
	});

	return HomeRouter;
});