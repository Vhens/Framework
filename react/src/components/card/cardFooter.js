import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CardFooterLink from '../link';

export default class CardFooter extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  static Link = CardFooterLink;
  render() {
    const { className, children, ...props } = this.props;
    const classes = classNames('card-footer', className);
    return (
      <div className={classes} {...props}>
        {this.props.children}
      </div>
    );
  }
}
