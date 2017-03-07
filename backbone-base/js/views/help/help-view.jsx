define([
	'react',
	'BackboneMixin'
], function(React, BackboneMixin) {

	var HelpView = React.createClass({

		mixins: [BackboneMixin],

		getBackboneModels: function() {
			return [this.props.model];
		},

		render: function() {
			return <div>Help view {this.props.model.get('aDouble')}</div>;
		}
	});

	return HelpView;
});