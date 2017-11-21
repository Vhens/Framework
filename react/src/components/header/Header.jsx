import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

export default class Header extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        header
        {this.props.children}
      </div>
    )
  }
}
