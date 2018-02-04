import React, { PureComponent } from 'react';

import { WhiteSpace } from 'antd-mobile';
import './dottedLine.scss';
export default class DottedLine extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="dotted-line">
        <WhiteSpace />
        <p className="line">{ this.props.title }</p>
        <WhiteSpace />
      </div>
    );
  }
}
