import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        List
      </div>
    );
  }
}
