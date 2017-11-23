import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../containers/App';
import Home from '../containers/home/Home';
import List from '../containers/list/List';
import NotMatch from '../containers/notMatch/404';

export default class RouteMap extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path = "/home" component={ Home } />
          <Route path = "/list" component={ List } />
        </App>
      </Router>
    );
  }
}
