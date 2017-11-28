

import react, { PureComponent } from 'react';
/**
 * 异步加载路由
 * import LoginComponent from 'bundle-loader?lazy!./containers/login/Login';
 * const Login = () => (
 *   <Bundle load={LoginComponent}>
 *   {(Login) => <Login />}
 *   </Bundle>
 * )
 * @export
 * @class Bundle (按需加载)
 * @extends {PureComponent}
 */
export default class Bundle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }
  componentDidMount() {
    this.load(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }
  render() {
    if (!this.state.mod) {
      return false;
    }
    return this.props.children(this.state.mod);
  }
}
