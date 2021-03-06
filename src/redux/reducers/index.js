import { combineReducers } from 'redux'
import { DESTROY_ALL } from '../actions/types'

import loading from './loading_reducer'

const appReducer =  combineReducers({
  loading,
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_ALL) {
    state = undefined
  }
  return appReducer(state, action)
};

export default rootReducer
