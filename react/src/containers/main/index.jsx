import React, { PureComponent, PropTypes } from 'react';

import './main.scss';

export default class Main extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="main">
        { this.props.children }
      </div>
    );
  }
}
