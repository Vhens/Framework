<<<<<<< HEAD
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
=======
import React, { PureComponent, PropTypes } from 'react';
import { connect, dispatch } from 'react-redux';
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
import { TabBar } from 'antd-mobile';
import './footer.scss';

const Menu = [
  {
<<<<<<< HEAD
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
=======
    title: '代办事', 
    url: 'home',
    icon: 'UNQhIatjpNZHjVf',
    selected: 'HLkBvJOKnmOfBPO',
  }, 
  {
    title: '清单', 
    url: 'list',
    icon: 'YWpPVCVOnJoCYhs',
    selected: 'WadBBxOIZtDzsgP',
  },
  {
    title: '我的', 
    url: 'order',
    icon: 'EljxLrJEShWZObW',
    selected: 'LWNaMdwAFSmYBFw',
  }
];
// const pathname = this.props.history.location.pathname;
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
/* eslint-disable */
class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
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
=======
      selectedTab: 'home',
    };
  }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }
  renderMenu() {
    let menus = [];
    let i =0;
    for (i = 0;i < 3; i++) {
      let m = Menu[i];
      menus.push(
      <TabBar.Item
        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/'+m.icon+'.png' }}
        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/'+m.selected+'.png' }}
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
        title={m.title}
        key={m.url}
        selected={this.state.selectedTab === m.url}
        onPress={() => {
          this.setState({
<<<<<<< HEAD
            selectedTab: m.url
          });
          this.props.history.push(m.url);
        }}
      >
=======
            selectedTab: m.url,
          });
        }}
      >
        { this.renderContent() }
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
      </TabBar.Item>
      );
    }
    return menus;
  }
  render() {
<<<<<<< HEAD
    const menus = this.renderMenu();
=======
    let menus = this.renderMenu();
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
<<<<<<< HEAD
        { menus }      
=======
        {menus}      
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
        </TabBar>
      </div>
    );
  }
}
<<<<<<< HEAD
export default withRouter(Footer);
=======
export default connect((FooterMd) => ({FooterMd}))(Footer);
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
