import React, { PureComponent, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import App from '../containers/App';
import Home from '../containers/home/Home';
import List from '../containers/list/List';
import NotMatch from '../containers/notMatch/404';
const history = createBrowserHistory();
export default class RouteMap extends PureComponent {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path = "/home" component={ Home } />
            <Route path = "/list" component={ List } />
          </Switch>
        </App>
      </Router>
    );
  }
}
