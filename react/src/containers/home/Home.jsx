import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Link to="/list">to list</Link><br />
        home
      </div>
    );
  }
}
