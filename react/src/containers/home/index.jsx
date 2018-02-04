import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import http from '../../../services/api/http';
import SwiperComponent from '../../components/swiper';
import NoticeComponent from '../../components/notice';
import DottedLineComponent from '../../components/dottedLine';
import NavComponent from '../../components/nav';
import AdvertComponent from '../../containers/advert';
import ListComponent from '../../containers/list';
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      goods: []
    };
  }
  /* eslint-disable */
  componentDidMount() {
    new Promise((resolve, reject) => {
      http.get('/api/goods/goods').then(res => {
        this.setState({
          goods: res.data.content
        })
        resolve(res);
      })
      .catch(e => {
        reject(e)
        console.error(e);
      });
    });
    console.log('data', this.state.goods);
  }
  render() {
    return (
      <div className="Home">
<<<<<<< HEAD
        <SwiperComponent />
        <NoticeComponent />
        <NavComponent />
        <AdvertComponent />
        <DottedLineComponent title="为你推荐"/>
        <ListComponent data = { this.state.goods }/>
        {/* <Link to="/list">to list</Link><br />
=======
        <Link to="/list">to list</Link><br />
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
        home
        <p>我是从redux来的{this.props.userInfo.userName}</p> */}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userInfo
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
