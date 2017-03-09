import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import {Content1} from './views/Content1';
import {LeafletView} from './views/LeafletView';
import {Help} from './views/Help';
import {Header} from './views/Header';
import {MainView} from './views/MainView';

import Content1MainModel from './models/Content1MainModel';
import LeafletViewModel from './models/LeafletViewModel';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/index.scss';

let content1MainModel = new Content1MainModel();
let leafletViewModel = new LeafletViewModel();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainView}>
            <Route path="one" components={{content: () => <Content1 model={content1MainModel} />}}>
            </Route>
            <Route path="leaflet" components={{content: () => <LeafletView model={leafletViewModel} />}}>
            </Route>
            <Route path="help" components={{content: Help}}>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);