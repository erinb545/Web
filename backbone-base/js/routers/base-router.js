define([
	'/bower_components/backbone.subroute/dist/backbone.subroute.min.js',
	'react',
	'reactdom'
], function(BackboneSubRoute, React, ReactDOM) {

	var BaseRouter = BackboneSubRoute.extend({

		routeName: 'routeName',

		routes: {
			'' : 'home'
		},

		initialize: function(options) {
			this.parent = options.parent;

			this.service = this.createService();
		},

		createService: function() {
			// No-op in the base case
		},

		getViewType: function() {
			// Undefined in the base case. 
			return undefined;
		},

		initView: function() {

			if (this.view == undefined) {
				var viewFactory = React.createFactory(this.getViewType());
				this.view = viewFactory({model: this.service.mainModel});

				if (this.service.mainModel == undefined) {
					throw "View created with an empty model. The service did not have a mainModel.";
				}
			}
		},

		home: function() {

			this.initView();
			ReactDOM.render(
				this.view,
				$('#js-app-container')[0]);
		}
	});

	return BaseRouter;
});