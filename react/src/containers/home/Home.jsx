import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userInfoActionsFromOtherFiles from '$redux/actions/userinfo';

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/list">to list</Link><br />
        home
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
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFiles, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
