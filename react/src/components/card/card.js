import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardHeader from './cardHeader';
import CardContent from './cardContent';
import CardFooter from './cardFooter';
import './cards.scss';

export default class Card extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };
  static Header = CardHeader;
  static Content = CardContent;
  static Footer = CardFooter;
  render() {
    const { children, className, ...props } = this.props;
    const classes = classNames('card', className);
    return (
      <div className={classes} {...props}>
        { children }
      </div>
    );
  }
}
