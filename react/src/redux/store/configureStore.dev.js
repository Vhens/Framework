import { createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import middlewares from './middlewares';

// 使用Redux DevTools浏览器插件调试redux
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const enhancer = composeEnhancers(middlewares);

const configureStore = initialState => {
  /**
   * 创建store, 传入两个参数
   * initialState: reducer 用来修改state
   * enhancer: redux-devtools
   */
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer.default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configureStore;
