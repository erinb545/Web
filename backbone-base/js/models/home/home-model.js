define([
	'backbone'
], function(Backbone) {

	var HomeModel = Backbone.Model.extend({

		defaults: {
			aString: 'an home string',
			aDouble: 4.6
		},

		initialize: function() {
			this.on('change:aDouble', this.onChange, this);
		},

		onChange: function() {
			console.log('HomeModel.change');
		}
	});

	return HomeModel;
});