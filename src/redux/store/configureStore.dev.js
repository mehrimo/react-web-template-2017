import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from '../middleware/api_middleware'
import rootReducer from '../reducers';

import DevTools from '../../components/DevTools';

export const history = createHistory();

export function configureStore(initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(apiMiddleware),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept(rootReducer, () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store
}