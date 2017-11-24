import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import middlewares from './middlewares';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    middlewares
  );
}

