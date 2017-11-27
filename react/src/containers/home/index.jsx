import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('ssss', this.props.userInfo);
  }
  render() {
    return (
      <div>
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
