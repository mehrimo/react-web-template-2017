import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from '../middleware/api_middleware'
import reducers from '../reducers';

export function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(apiMiddleware)
  );
}
