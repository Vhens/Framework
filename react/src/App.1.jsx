import React, { PureComponent, PropTypes } from 'react';
// PureComponent代替了PureRenderMixin优化react
// import PureRenderMixin from 'react-addons-pure-render-mixin';

import asyncComponent from './components/AsyncComponent';
import Header from './components/header/Header';
// const AsyncHeader = asyncComponent(() => import('../components/header/Header'));
const AsyncFooter = asyncComponent(() => import('./components/footer/Footer'));

export default class App extends PureComponent {
  constructor(props, context) {
    super(props, context);
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <AsyncFooter />
      </div>
    );
  }
}
