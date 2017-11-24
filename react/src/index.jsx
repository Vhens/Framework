import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '$redux/store';

import '../static/css/base.scss';
import RouteMap from './routes/routes';
const MOUNT_NODE = document.getElementById('app');

// render(
//   <Provider store={store}>
//     <RouteMap />
//   </Provider>,
//   MOUNT_NODE
// );
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter basename='/'>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    MOUNT_NODE
  );
};
render(RouteMap);
if (module.hot) {
  module.hot.accept('./routes/routes', () => render(RouteMap));
}

