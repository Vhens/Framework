import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
const MOUNT_NODE = document.getElementById('app');
import '../static/css/base.scss'
import RouteMap from './routes/routes'

render (
  <RouteMap />,
  MOUNT_NODE
)
