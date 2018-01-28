import React, { PureComponent, PropTypes } from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';

import './header.scss';
/* eslint-disable */
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selected: '',
    };
    this.handleMore = this.handleMore.bind(this);
  }
  handleMore() {
    console.log('more');
  }
  onSelect = (opt) => {
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (
      <div className="header">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('返回')}
          rightContent={[
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>帮助</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          ]}
        >
          首页
        </NavBar>
      </div>
    );
  }
}
