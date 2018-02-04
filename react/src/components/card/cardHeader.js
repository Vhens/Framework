import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getColor } from '../../utils/color';
/*eslint-disable*/
export default class CardHeader extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    children: PropTypes.node,
    cover: PropTypes.bool,
    className: PropTypes.string,
    theme: PropTypes.oneOf(getColor())
  };
  static defaultProps = {
    cover: false
  };
  render() {
    const { children, cover, className, theme, ...props } = this.props;
    const classes = classNames({
      'card-header': true,
      'no-border': !!cover,
      [`color-${theme}`]: theme
    }, className);
    return (
      <div className={classes} {...props}>
         { children }
      </div>
    );
  }
}
