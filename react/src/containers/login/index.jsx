import React, { PureComponent } from 'react';
import { List, InputItem, Toast, Switch, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import './login.scss';

class Login extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hasError: false,
      value: '',
    };
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="login">
        <List>
          <InputItem
            type="text"
            placeholder="请输入您的用户名"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >
          <span className="icon gt icon-wode"></span>
          </InputItem>
        </List>
        <List>
          <InputItem
            type="password"
            placeholder="请输入您的密码"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >
          <span className="icon gt icon-suo"></span>
          </InputItem>
        </List>
        <List>
          <List.Item extra={
            <Switch
            {...getFieldProps('Switch1', {
              initialValue: false,
              valuePropName: 'checked',
            })}
            onClick={(checked) => { console.log(checked); }}
          />
          }>记住密码</List.Item>
        </List>
        <WingBlank>
          <WhiteSpace/>
          <Button type="primary" loading={false}>登录</Button>
        </WingBlank>
      </div>
    );
  }
}
export default createForm()(Login);
