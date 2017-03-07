import * as Backbone from 'backbone';

class Content1MainModel extends Backbone.Model {
    
    constructor() {
        super({testValue: 'some test value'});
    }
}

export default Content1MainModel;