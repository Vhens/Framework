import React, { PureComponent, PropTypes } from 'react';

export default class List extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="list">
        List
      </div>
    );
  }
}
