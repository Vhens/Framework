import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import http from '../../../services/api/http';
// import axios from 'axios';
class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  /* eslint-disable */
  componentDidMount() {
    new Promise((resolve, reject) => {
      http.get('/api/detail/detail/0',{id: 0}).then(data => {
        console.log('data', data);
        resolve(data);
      })
      .catch(e => {
        reject(e)
        console.error(e);
      });
    });
  }
  render() {
    return (
      <div className="Home">
        <Link to="/list">to list</Link><br />
        home
        <p>我是从redux来的{this.props.userInfo.userName}</p>
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
