import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/*eslint-disable*/
export default class Link extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    placeholder: PropTypes.bool
  };
  static defaultProps = {
    placeholder: false
  };
  render() {
    const { className, children, placeholder, ...props } = this.props;
    const classes = classNames({
      'link': true,
      'link-placeholder': !!placeholder
    }, className);
    return (
      <a className={classes} {...props}>{children}</a>
    );
  }
}
