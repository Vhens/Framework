import React, { PureComponent } from 'react';
import { WhiteSpace } from 'antd-mobile';

import './advert.scss';
/*eslint-disable*/
export default class Advert extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ad: require('../../../static/image/ad.jpg')
    };
  }
  render() {
    return (
      <div className="advert">
        <WhiteSpace />
        <img src={ this.state.ad } alt=""/>
      </div>
    );
  }
}
