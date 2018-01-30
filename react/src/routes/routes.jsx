import React, { PureComponent, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import App from '../App';
import Home from '../containers/home/Home';
import List from '../containers/list/List';
import Member from '../containers/member/member';
import Order from '../containers/order/order';
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
            <Route path = "/member" component={ Member } />
            <Route path = "/order" component={ Order } />
          </Switch>
        </App>
      </Router>
    );
  }
}
