import React, { PureComponent, PropTypes } from 'react';
<<<<<<< HEAD
import { Tabs, WhiteSpace } from 'antd-mobile';
import OrderList from './orderList';
/*eslint-disable*/
export default class Order extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tabs: [
        {
          title: '待付款'
        },
        {
          title: '待发货'
        }, 
        {
          title: '待收货'
        },
        {
          title: '已完成'
        }
      ]
    };
=======

export default class Order extends PureComponent {
  constructor(props, context) {
    super(props, context);
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
  }
  render() {
    return (
      <div className="order">
<<<<<<< HEAD
      <Tabs tabs={this.state.tabs}
        initialPage={1}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', height: 'calc(100vh - 140px)', overflow: 'auto' }}>
         <OrderList />
        </div>
      </Tabs>
=======
        order
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
      </div>
    );
  }
}
