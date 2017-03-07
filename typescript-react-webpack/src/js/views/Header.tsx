import * as React from 'react';
import {Link} from 'react-router';

export interface HeaderProps { }

export class Header extends React.Component<HeaderProps, {}> {

    render() {
        return <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Header</Link>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/one">Content 1</Link></li>
                            <li><Link to="/two">Content 2</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/help">Help</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    }
}