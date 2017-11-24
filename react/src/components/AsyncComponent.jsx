import React, { Component, PropTypes } from 'react';

/**
 * 异步组件
 * import asyncComponent from "./components/AsyncComponent";
 * const AsyncHome = asyncComponent(() => import("./containers/Home"));
 */
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
