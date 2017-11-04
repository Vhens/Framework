import React from 'react';
import render from 'react-dom';
import PropTypes from 'prop-types';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import Head from '../../components/header/index';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Head name={data}/>
        Home
      </div>
    )
  }
}
export default Home;