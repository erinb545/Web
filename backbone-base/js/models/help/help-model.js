define([
	'backbone'
], function(Backbone) {

	var MyDataModel = Backbone.Model.extend({

		defaults: {
			aString: 'a mydata string',
			aDouble: 4.6
		},

		initialize: function() {
			this.on('change:aDouble', this.onChange, this);
		},

		onChange: function() {
			console.log('MyDataModel.change');
		}
	});

	return MyDataModel;
});