import React, { PureComponent, PropTypes } from 'react';
import { connect, dispatch } from 'react-redux';
import { TabBar } from 'antd-mobile';
import './footer.scss';

const Menu = [
  {
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
/* eslint-disable */
class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
        title={m.title}
        key={m.url}
        selected={this.state.selectedTab === m.url}
        onPress={() => {
          this.setState({
            selectedTab: m.url,
          });
        }}
      >
        { this.renderContent() }
      </TabBar.Item>
      );
    }
    return menus;
  }
  render() {
    let menus = this.renderMenu();
    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
        {menus}      
        </TabBar>
      </div>
    );
  }
}
export default connect((FooterMd) => ({FooterMd}))(Footer);