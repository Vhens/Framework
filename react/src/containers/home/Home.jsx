import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

import {Link} from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Link to="/list">to list</Link><br/>
        home
      </div>
    )
  }
}
