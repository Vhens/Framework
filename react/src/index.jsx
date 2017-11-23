import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

import '../static/css/base.scss';
import RouteMap from './routes/routes';

const MOUNT_NODE = document.getElementById('app');

render(
  <RouteMap />,
  MOUNT_NODE
);
