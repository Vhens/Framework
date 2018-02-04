import React, { PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import App from '../App';
<<<<<<< HEAD
import Home from '../containers/home';
import Member from '../containers/member';
import Order from '../containers/order';
import Cart from '../containers/cart';
import Classify from '../containers/classify';
=======
import Home from '../containers/home/Home';
import List from '../containers/list/List';
import Member from '../containers/member/member';
import Order from '../containers/order/order';
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
import NotMatch from '../containers/notMatch/404';
import Login from '../containers/login';
const history = createBrowserHistory();
export default class RouteMap extends PureComponent {
  render() {
    return (
      <Router>
        <App>
          <Switch>
<<<<<<< HEAD
            <Route exact path = "/" component={ Home } />
            <Route path = "/member" component={ Member } />
            <Route path = "/order" component={ Order } />
            <Route path = "/cart" component={ Cart } />
            <Route path = "/classify" component={ Classify } />
            <Route path = "/login" component={ Login } />
=======
            <Route exact path = "/home" component={ Home } />
            <Route path = "/list" component={ List } />
            <Route path = "/member" component={ Member } />
            <Route path = "/order" component={ Order } />
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
          </Switch>
        </App>
      </Router>
    );
  }
}
