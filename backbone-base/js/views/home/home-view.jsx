define([
	'react',
	'BackboneMixin'
], function(React, BackboneMixin) {

	var HomeView = React.createClass({

		mixins: [BackboneMixin],

		getBackboneModels: function() {
			return [this.props.model];
		},

		render: function() {
			return 	<div>
						<p>This is the HomeView</p>
						<DataTypeComponent str={this.props.model.get('aDouble')} />
					</div>
		}

	});

	var DataTypeComponent = React.createClass({

		render: function() {

			return <p>Data type component {this.props.str}</p>
		}
	});

	return HomeView;
});
