import React, { PureComponent } from 'react';

import { List, WhiteSpace } from 'antd-mobile';
import './member.scss';
// const Brief = Item.Brief;

export default class Member extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  handleLogin() {
    this.props.history.push('/login');
  }
  render() {
    return (
      <div className="member">
        <div className="info">
          <div className="item">
            <img src="../../../static/image/noavatar.png" alt=""/>
          </div>
          <div className="item">
            <p className="name">Vhen</p>
            <p className="mobile">15694845621</p>
            <span className="login-icon icon gt icon-denglu" onClick={this.handleLogin.bind(this)}></span>
          </div>
        </div>
        <div className="order-status">
          <div className="item">
            <img src="../../../static/image/order_bg_1.png" alt=""/>
            <p className="name">待付款</p>
          </div>
          <div className="item">
            <img src="../../../static/image/order_bg_2.png" alt=""/>
            <p className="name">待发货</p>
          </div>
          <div className="item">
            <img src="../../../static/image/order_bg_3.png" alt=""/>
            <p className="name">待收货</p>
          </div>
          <div className="item">
            <img src="../../../static/image/order_bg.png" alt=""/>
            <p className="name">已完成</p>
          </div>
        </div>
        <WhiteSpace />
        <List>
          <List.Item
            thumb={ <span className="icon gt icon-sitting"></span> }
            onClick={() => { }}
            arrow="horizontal"
          >
            个人资料
          </List.Item>
          <List.Item
            thumb={ <span className="icon gt icon-wodedingdan"></span> }
            arrow="horizontal"
            onClick={() => { }}
          >
            我的订单
          </List.Item>
          <List.Item
            thumb={ <span className="icon gt icon-shouhuodizhi"></span> }
            onClick={() => { }}
            arrow="horizontal"
          >
            收货地址
          </List.Item>
          <List.Item
            thumb={ <span className="icon gt icon-tubiaolunkuo-1"></span> }
            onClick={() => { }}
            arrow="horizontal"
          >
            优惠券
          </List.Item>
          <List.Item
            thumb={ <span className="icon gt icon-shoucang"></span> }
            onClick={() => { }}
            arrow="horizontal"
          >
            我的收藏
          </List.Item>
        </List>
      </div>
    );
  }
}
