import * as React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Index from '../constants/index/index';
import User from '../constants/user/user';
// 权限控制
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    false ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
      )
  )} />
)

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/index" component={Index} />
        <PrivateRoute exact path="/home" component={Index} />
        {/* <Route component={Error} />  */}
      </Switch>
    </div>
  </Router>
)

export default App;
