import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

import './header.scss'
export default class Header extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="header">
        header
      </div>
    )
  }
}
