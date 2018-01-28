import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
/**
 * redux流
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActions from '$redux/actions/userinfo';
/**
 * bundle模型用来异步加载组件
 */
import Bundle from './bundle';

/**
 * 同步组件
 */
import HeaderComponent from './components/header/index';
import FooterComponent from './components/footer/index';
import HomeComponent from './containers/home/index';

/* eslint-disable */
/**
 * 异步组件
 */
import ListComponent from 'bundle-loader?lazy!./containers/list/index';


const List = props => (
  <Bundle load={ListComponent}>
    {(List) => <List history={props.props.history}/>}
  </Bundle>
);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        initDone: true
      });
    },1000)
    //修改redux中userInfo数据
    this.props.userInfoActions.update({userName: 'vhen'})
  }
  render() {
    const history = createBrowserHistory();
    return(
      <Router>
        {
          this.state.initDone
          ? <div id="container">
            <HeaderComponent history={history}/>
            <div className="wrapper">
            </div>
            <FooterComponent history={history}/>
          </div>
          : <div>正在加载...</div>
        }
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
