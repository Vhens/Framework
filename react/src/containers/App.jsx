import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import asyncComponent from '../components/AsyncComponent';

const AsyncHeader = asyncComponent(() => import('../components/header/Header'));
const AsyncFooter = asyncComponent(() => import('../components/footer/Footer'));

export default class App extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render () {
    return (
      <div>
        <AsyncHeader />
          { this.props.children }
        <AsyncFooter />
      </div>
    );
  }
}
