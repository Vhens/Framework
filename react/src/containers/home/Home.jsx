import React, {Component, PropTypes} from 'react';
import ReactDOM, { render } from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor (props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Link to='/list'>to list</Link>
        home
      </div>
    );
  }
}
