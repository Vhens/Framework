import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '$redux/store';

import '../static/css/base.scss';
import App from './App';
const MOUNT_NODE = document.getElementById('app');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    MOUNT_NODE
  );
};
render(App);
if (module.hot) {
  module.hot.accept('./App', () => render(App));
}

