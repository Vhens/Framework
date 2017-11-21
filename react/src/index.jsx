import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
const ROOT = document.getElementById('app');

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
class App extends Component {
  render () {
    return (
      <div>
        <ul>
        <li> <Link to="header">header</Link></li>
          <li> <Link to="footer">footer</Link></li>
        </ul>
        ssssssssssss
        {this.props.children}
      </div>
    )
  }
}

render (
  <HashRouter>
    <App>
         <Route exact path="/header" component={Header} />
        <Route  path="/footer" component={Footer} />
        {/* <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} /> */}
    </App>
  </HashRouter>,
  ROOT
)
