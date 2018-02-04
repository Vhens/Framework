import React, { PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import App from '../App';
import Home from '../containers/home';
import Member from '../containers/member';
import Order from '../containers/order';
import Cart from '../containers/cart';
import Classify from '../containers/classify';
import NotMatch from '../containers/notMatch/404';
import Login from '../containers/login';
const history = createBrowserHistory();
export default class RouteMap extends PureComponent {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path = "/" component={ Home } />
            <Route path = "/member" component={ Member } />
            <Route path = "/order" component={ Order } />
            <Route path = "/cart" component={ Cart } />
            <Route path = "/classify" component={ Classify } />
            <Route path = "/login" component={ Login } />
          </Switch>
        </App>
      </Router>
    );
  }
}
