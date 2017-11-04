import React from 'react';
import render from 'react-dom';

// import {BrowserRouter as Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom';
import {HashRouter,Route,Link,hashHistory} from 'react-router-dom';

import Home from '../containers/Home/index';
import List from '../containers/List/index';

class RouterMap extends React.Component {
  render () {
    return (
      <HashRouter history = "hashHistory">
        <Route exact path="/home" component="Home"></Route>
        <Route exact path="/list" component="List"></Route>
      </HashRouter>
    )
  }
}

export default RouterMap;
