import * as React from 'react';
import {BackboneReactComponent} from './BackboneReactComponent';
import Content1MainModel from '../models/Content1MainModel';

export class Content1 extends BackboneReactComponent<Content1MainModel, {}> {

    render() {
        return <div>
            <h1>This is Content 1!</h1>
            Test value: {this.props.model.get('testValue')} <button onClick={this.onChangeTestValueClick.bind(this)}>Change</button>
        </div>
    }

    // Note: When using this, binding is still necessary:
    // https://facebook.github.io/react/docs/handling-events.html
    onChangeTestValueClick() {
        this.props.model.set('testValue', Date.now());
    }
}