import React, { PureComponent } from 'react';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

import './notice.scss';

export default class Notice extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      notice: ['走过路过 机会别错过', '机会难得 赔钱甩卖', '全场卖两块 全场卖两块']
    };
  }
  render() {
    return (
      <div className="notice">
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          {this.state.notice.map(item => <span key={item}>{ item }</span>)}
        </NoticeBar>
      </div>
    );
  }
}
