define([
	'backbone',
	'react', 
  	'reactdom', 
  	'/js/routers/home/home-router.js',
  	'/js/routers/help/help-router.js',
], function(Backbone, React, ReactDOM, HomeRouter, HelpRouter) {

	var MainRouter = Backbone.Router.extend({

		routes: {
			'' : 'home',
			'home(/*subroute)' : 'invokeHomeModule',
			'help(/*subroute)' : 'invokeHelpModule',
		},

		initialize: function(options) {

		},

		home: function() {

			console.log('home');
		},

		invokeHomeModule: function() {

			console.log('Invoking home module');

			if (!this.homeRouter) {
				this.homeRouter = new HomeRouter('home', {
					createTrailingSlashRoutes: false,
					parent: this
				});
			}
		},

		invokeHelpModule: function() {
			
			console.log('invokeHelpModule not yet implemented');

			if (!this.helpRouter) {
				this.helpRouter = new HelpRouter('help', {
					createTrailingSlashRoutes: false,
					parent: this
				});
			}
		},
	});

	return MainRouter;

});