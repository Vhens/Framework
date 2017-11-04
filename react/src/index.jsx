import React from 'react';
import { render } from 'react-dom';

import { HashRouter, Link, hashHistory } from 'react-router-dom';

import routerMap from './router/routerMap';

class App extends React.Component {
    render() {
        let data = "54545454";
        return (
            <div>
                <Link to="/home">Home</Link><br />
                <Link to="/list">List</Link>
            </div>
        )
    }
}

render(
    <HashRouter history={hashHistory}>
        <App>
            <routerMap />
        </App>
    </HashRouter>
    , document.getElementById('app'));
