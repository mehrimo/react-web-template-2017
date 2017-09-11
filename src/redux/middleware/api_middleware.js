import API from '../../api'

export default store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, API, store.getState);
  }
  return next(action);
}