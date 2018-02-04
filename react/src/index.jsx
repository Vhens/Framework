import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '$redux/store';

<<<<<<< HEAD
import '../static/font/iconfont.css';
import '../static/css/index.scss';
// import App from './App';
import routerMap from './routes/routes';
=======
import '../static/css/index.scss';
import App from './App';
>>>>>>> 05078a45a87c14ee7d45c2a3bb21559a5e4c1854
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
render(routerMap);
if (module.hot) {
  module.hot.accept('./routes/routes', () => render(routerMap));
}

