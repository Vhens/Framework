import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

import asyncComponent from '../components/AsyncComponent'

const AsyncHeader = asyncComponent(() => import("../components/header/Header"));
const AsyncFooter = asyncComponent(() => import("../components/footer/Footer"));

export default class App extends Component {
  render () {
    return (
      <div>
        <AsyncHeader />
        {this.props.children}
        <AsyncFooter />
      </div>
    )
  }
}
