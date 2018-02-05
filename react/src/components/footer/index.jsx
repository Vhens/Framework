import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './footer.scss';

const Menu = [
  {
    title: '首页', 
    url: '/',
    icon: 'icon-shouye-shouye'
  }, 
  {
    title: '分类', 
    url: '/Classify',
    icon: 'icon-tubiaolunkuo-2'
  },
  {
    title: '购物', 
    url: '/cart',
    icon: 'icon-gouwuchetianjia'
  },
  {
    title: '订单', 
    url: '/order',
    icon: 'icon-wodedingdan'
  },
  {
    title: '会员', 
    url: '/member',
    icon: 'icon-wode'
  }
];
/* eslint-disable */
class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '/',
    };
  }
  renderMenu() {
    const menus = [];
    let i =0;
    for (i = 0;i < Menu.length; i++) {
      let m = Menu[i];
      menus.push(
      <TabBar.Item
        icon={ <span className={`icon gt ${m.icon}`}></span>}
        selectedIcon = {<span className={`icon selected gt ${m.icon}`}></span>}
        title={m.title}
        key={m.url}
        selected={this.state.selectedTab === m.url}
        onPress={() => {
          this.setState({
            selectedTab: m.url
          });
          this.props.history.push(m.url);
        }}
      >
      </TabBar.Item>
      );
    }
    return menus;
  }
  render() {
    const menus = this.renderMenu();
    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
        { menus }      
        </TabBar>
      </div>
    );
  }
}
export default withRouter(Footer);
